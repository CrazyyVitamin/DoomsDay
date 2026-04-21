# CLAUDE.md — ZType Clone Project

This file tells Claude how to work on this codebase. Read it fully before making any changes.

---

## Project Overview

A single-file browser typing shoot-em-up game inspired by ZType (zty.pe).  
Players type words to fire bullets and destroy descending enemy ships.  
Built with vanilla JavaScript + HTML5 Canvas. Zero dependencies.

**Deliverable:** One self-contained `index.html` file.  
**Target:** Desktop browsers (Chrome, Firefox, Safari, Edge). Keyboard required.

---

## File Structure

```
index.html          ← entire game lives here (HTML + CSS + JS in one file)
CLAUDE.md           ← this file
words.txt           ← optional custom word list (one word per line)
```

Everything — styles, game logic, word list, sound engine — is embedded in `index.html`.  
Do not split into separate files unless the user explicitly asks.

---

## Architecture

The game is structured as a class-based module system inside a single `<script>` tag.

### Class Map

```
Game
├── State machine: START | PLAYING | PAUSED | GAMEOVER
├── Owns the main requestAnimationFrame loop
├── Coordinates all subsystems each frame
│
├── Renderer          — canvas drawing, starfield, glow effects, HUD, screens
├── InputHandler      — keydown listener, lock-on logic, accuracy tracking
├── SoundEngine       — Web Audio API, all sounds generated procedurally
├── WaveManager       — wave number, spawn timer, difficulty scaling
│
├── Player            — fixed bottom-center ship, lives, shoot()
├── Enemy[]           — descending ships, each owns a word + typed progress
├── Bullet[]          — projectiles flying from player → locked enemy
└── Particle[]        — explosion/spark particles with fade lifecycle
```

### Game Loop (per frame)

```
1. ctx.clearRect
2. Renderer.drawStarfield()
3. WaveManager.update()        → maybe spawn new Enemy
4. Enemy[].forEach update+draw → move down, check if reached bottom
5. Bullet[].forEach update+draw → move toward target, check arrival
6. Particle[].forEach update+draw → fade, cull dead particles
7. Player.draw()
8. Renderer.drawHUD()
9. Game.checkWaveComplete()
10. Game.checkGameOver()
```

---

## Core Mechanic Rules (do not change without user approval)

- **Lock-on:** Typing a letter only locks an enemy if it matches the FIRST letter of that enemy's word and no enemy is currently locked.
- **Progression:** Once locked, every correct keystroke fires one bullet toward that enemy and removes that letter from the word display.
- **Wrong key:** Screen flashes red briefly. No bullet fires. Accuracy stat decrements. Locked target does NOT change.
- **Word complete:** Enemy explodes (particle burst), score increases, lock clears.
- **Enemy reaches bottom:** Player loses 1 life. Enemy is removed. Lock clears if that enemy was targeted.
- **No auto-targeting after destroy:** Player must type the next first letter themselves.

---

## Rendering Rules

### Neon Glow
Every glowing element (ships, bullets, word labels) is drawn in two passes:
```js
// Pass 1 — glow halo
ctx.globalAlpha = 0.3;
ctx.shadowBlur = 20;
ctx.shadowColor = color;
drawShape(larger);

// Pass 2 — sharp core
ctx.globalAlpha = 1.0;
ctx.shadowBlur = 0;
drawShape(normal);
```
Use `ctx.globalCompositeOperation = "lighter"` on the particle/explosion layer for additive bloom.

### Word Label Rendering
```
[greyed-out typed letters][BRIGHT next letter][remaining letters]
```
- Typed letters: `#555555`
- Next target letter: `#FFFF00` (yellow, slightly larger)
- Remaining letters: `#FFFFFF`
- Font: monospace, size scales with canvas height

### Canvas Sizing
Canvas must always fill `window.innerWidth × window.innerHeight`.  
On `window.resize`, call `game.resize()` which recalculates all positions as fractions of canvas dimensions. Enemy X spawn positions are stored as `0.0–1.0` normalized values.

---

## Sound Engine

All sounds use Web Audio API — **no audio files, no network requests**.

| Sound | Method | Description |
|---|---|---|
| Plasma shot | `sound.shoot()` | Sawtooth osc, 800Hz→200Hz, 80ms |
| Enemy destroyed | `sound.explode()` | Sine osc, 200Hz→50Hz, 300ms |
| Wrong key | `sound.error()` | Short noise burst, 50ms |
| Wave clear | `sound.waveComplete()` | C4→E4→G4 chime, 100ms each |
| Life lost | `sound.lifeLost()` | Glide 400Hz→100Hz, 500ms |

Always call `AudioContext.resume()` on first user interaction (browser policy).  
Wrap all sound calls in `try/catch` — audio is non-critical, game must not crash if it fails.

---

## Difficulty Scaling

Controlled entirely by `WaveManager`. Do not hardcode difficulty in other classes.

| Wave | Word Length | Enemy Speed | Spawn Gap | Special |
|---|---|---|---|---|
| 1–3 | 3–4 letters | 30 px/s | 3.0s | — |
| 4–6 | 5–6 letters | 45 px/s | 2.5s | — |
| 7–9 | 6–8 letters | 60 px/s | 2.0s | split words on hit |
| 10+ | 7–12 letters | 75+ px/s | 1.5s | zigzag movement |

`WaveManager.getDifficulty(wave)` returns a config object `{ wordLength, speed, spawnGap, special[] }`.  
All other classes read from this — never calculate wave-based values inline.

---

## Word List

Embedded as a JS array `WORD_LIST` sorted into buckets by length:
```js
const WORD_LIST = {
  short:  [...],  // 3–4 letters, ~80 words
  medium: [...],  // 5–7 letters, ~120 words
  long:   [...],  // 8–12 letters, ~100 words
};
```

Custom word list: user can upload a `.txt` file (button on start screen). Parse with `FileReader`, split on newlines, replace `WORD_LIST` in memory. Invalid words (non-alpha, length < 2) are silently filtered.

No word should appear on screen twice simultaneously. `WaveManager.pickWord()` filters against `currentEnemies.map(e => e.word)`.

---

## Scoring

```
basePoints     = word.length × 10
speedBonus     = completedUnder2s ? 50 : 0
waveBonus      = waveNumber × 100          (on wave clear)
comboMultiplier = consecutiveKillsWithNoErrors >= 3 ? 1.5 : 1.0

frameScore = (basePoints + speedBonus) × comboMultiplier
```

Accuracy = `correctKeystrokes / totalKeystrokes × 100`  
Persist high score to `localStorage` key `"ztype_hiscore"`.

Floating score text (`+N pts`) spawns at enemy death position, drifts up 40px, fades over 1s.

---

## State Machine

```
START ──(any key)──► PLAYING ──(esc)──► PAUSED ──(esc)──► PLAYING
                        │
                   (lives === 0)
                        │
                        ▼
                    GAMEOVER ──(enter)──► PLAYING (reset)
```

`game.setState(newState)` handles transitions, resets appropriate subsystems.  
`game.reset()` clears all enemies, bullets, particles, resets score/lives/wave, reinitialises `WaveManager`.

---

## Input Handling

```js
window.addEventListener('keydown', (e) => {
  if (e.ctrlKey || e.metaKey || e.altKey) return; // ignore shortcuts
  if (e.key.length !== 1) return;                 // ignore arrows, shift, etc.
  const char = e.key.toLowerCase();
  inputHandler.handleChar(char);
});
```

`InputHandler.handleChar(char)`:
1. If no active target → try to lock on (find enemy whose word starts with `char`)
2. If active target → check if `char` === next expected letter
   - Correct: fire bullet, advance letter index, check word complete
   - Incorrect: flash screen, increment errorCount

---

## HUD Layout

```
┌─────────────────────────────────────────────┐
│ SCORE: 00000    WAVE 3    ❤️ ❤️ ❤️          │
│ ACC: 94%                                     │
│                                              │
│          [  game canvas area  ]              │
│                                              │
│                  △  (player ship)            │
└─────────────────────────────────────────────┘
```

All HUD drawn on the canvas itself (not DOM elements), so it scales automatically.

---

## What NOT To Do

- **Do not use DOM elements for game objects** — everything renders to canvas.
- **Do not import libraries** — no Three.js, no Phaser, no p5.js.
- **Do not use `setInterval` for the game loop** — use `requestAnimationFrame` only.
- **Do not store pixel positions for enemies** at init time — store normalised (0–1) X, recalculate each frame so resize works.
- **Do not crash on audio failure** — always wrap `SoundEngine` calls in try/catch.
- **Do not show the cursor** on the canvas — set `canvas { cursor: none }`.
- **Do not let two enemies share the same word** on screen simultaneously.

---

## Common Tasks

### Add a new enemy behaviour
Subclass or extend `Enemy`. Override `Enemy.update(dt)`. Register in `WaveManager.spawnEnemy()` based on wave number. Do not modify `Bullet` or `Player`.

### Change the colour palette
All colours are defined at the top of the script in a single `COLORS` constant object:
```js
const COLORS = {
  background:   '#000000',
  player:       '#00FFFF',
  enemy:        '#FF00FF',
  bullet:       '#00BFFF',
  letterDone:   '#555555',
  letterNext:   '#FFFF00',
  letterPending:'#FFFFFF',
  explosion:    ['#FF8800', '#FF4400', '#FF2200'],
  starfield:    '#FFFFFF',
};
```
Edit only this object — do not hardcode colour strings anywhere else in the code.

### Tune difficulty
Edit `WaveManager.DIFFICULTY_TABLE`. Do not touch individual class logic.

### Add a new sound
Add a method to `SoundEngine`. Call it from the appropriate game event. Do not inline AudioContext calls in game logic classes.

---

## Performance Budget

- Target: 60 fps on a mid-range laptop
- Max enemies on screen simultaneously: 12
- Max bullets in flight: 20
- Max particles alive: 200
- Starfield stars: 250

If particle count exceeds budget, cull the oldest ones first.  
Profile with `performance.now()` delta — if a frame takes > 16ms, log a warning (dev mode only).

---

## Testing Checklist

Before considering a feature done, verify:

- [ ] Game starts on any keypress from the start screen
- [ ] Typing wrong letter flashes screen red, no bullet fires
- [ ] Typing correct first letter locks that enemy (highlighted)
- [ ] Completing a word triggers explosion + score increase
- [ ] Enemy reaching bottom removes a life
- [ ] 0 lives triggers game over screen
- [ ] Enter on game over restarts cleanly (no ghost enemies/bullets)
- [ ] Canvas resizes correctly on window resize
- [ ] Custom word file upload works and replaces word list
- [ ] High score persists across page refreshes (localStorage)
- [ ] Pause (Esc) freezes all movement; resume continues correctly
- [ ] No console errors during normal play

---

## Known Browser Quirks

- **AudioContext:** Must be created or resumed inside a user gesture handler (keydown/click). Create it lazily on first keypress.
- **Canvas font rendering:** Call `ctx.font` before `ctx.measureText` every frame — don't cache font metrics across frames.
- **requestAnimationFrame timing:** Always use the `timestamp` argument for delta time, not `Date.now()`. Cap delta at 100ms to prevent spiral-of-death after tab switch.

```js
let lastTime = 0;
function loop(timestamp) {
  const dt = Math.min((timestamp - lastTime) / 1000, 0.1); // seconds, max 100ms
  lastTime = timestamp;
  game.update(dt);
  game.draw();
  requestAnimationFrame(loop);
}
```