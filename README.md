# 🔥 DoomsDay - Marvel-Themed Typing Shooter

An epic typing shooter game inspired by the Marvel Cinematic Universe. Battle waves of enemies by typing words at lightning speed, and unleash the devastating **Ironman's Snap** to clear the battlefield!

![Game Preview](https://img.shields.io/badge/Game-DoomsDay-dc143c?style=for-the-badge)
![Tech](https://img.shields.io/badge/Tech-Vanilla_JS-ffd700?style=for-the-badge)
![Theme](https://img.shields.io/badge/Theme-Marvel-dc143c?style=for-the-badge)

## 🎮 Game Features

### Core Gameplay
- **Lock-On Targeting System**: Type the first letter of any enemy's word to lock onto it
- **Progressive Difficulty**: Waves get faster and more challenging as you progress
- **Marvel-Inspired Aesthetics**: Stunning cosmic background with gold/red color scheme
- **Smooth 60fps Animation**: Powered by requestAnimationFrame

### ⚡ Ironman's Snap Superpower
- Earn **1 Ironman's Snap** for every **50 words** you destroy
- Press **Enter** to activate and instantly eliminate ALL enemies on screen
- Creates a massive particle explosion effect with gold and crimson particles
- Strategic timing can save you in overwhelming situations

### Visual Effects
- Cosmic animated gradient background
- Neon wireframe ship designs
- Plasma bullet trails with glow effects
- Particle explosions on enemy destruction
- Screen-wide snap explosion animation
- Dynamic targeting lines

## 🎯 How to Play

### Controls
| Action | Key |
|--------|-----|
| **Target Enemy** | Type the first letter of its word |
| **Destroy Enemy** | Complete typing the entire word |
| **Ironman's Snap** | Press `Enter` (when available) |
| **Start/Restart** | `Enter` or `Space` |

### Game Rules
1. **Lock-On System**: Once you start typing a word, you must finish it before targeting another enemy
2. **Word Completion**: Each correct letter fires a bullet and progresses through the word
3. **Earn Snaps**: Destroy 50 words to earn 1 Ironman's Snap superpower
4. **Game Over**: If any enemy reaches your ship or escapes the bottom of the screen
5. **Scoring**: Earn 10 points per letter in each word destroyed

### Strategy Tips
- 💡 **Prioritize threats**: Target enemies closest to your ship first
- 💡 **Save your snaps**: Don't waste Ironman's Snap when only a few enemies are on screen
- 💡 **Word variety**: The game uses diverse vocabulary - practice makes perfect!
- 💡 **Combo potential**: Destroying words quickly builds your snap meter faster

## 🚀 Quick Start

### Play Instantly
Simply open `index.html` in any modern web browser. No installation or dependencies required!

```bash
# Clone the repository
git clone https://github.com/CrazyyVitamin/DoomsDay.git

# Navigate to folder
cd DoomsDay

# Open in browser (Windows)
start index.html

# Or drag and drop index.html into your browser
```

### System Requirements
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- JavaScript enabled
- Screen resolution: 900x700 or larger recommended

## 🛠️ Technical Details

### Technology Stack
- **HTML5** - Structure and Canvas API
- **CSS3** - Marvel-themed styling with animations
- **Vanilla JavaScript (ES6+)** - Game logic and rendering
- **Canvas 2D API** - All graphics rendering
- **No external dependencies** - Lightweight and fast!

### Game Architecture
```
├── Player Ship (bottom center, stationary)
├── Enemy Ships (spawn at top, move down)
├── Bullets (plasma projectiles)
├── Particles (explosion effects)
├── Stars (animated background)
└── Game Loop (60fps requestAnimationFrame)
```

### Key Classes
- `Enemy` - Enemy ship with word assignment and lock-on logic  
- `Bullet` - Projectile with trail effects and hit detection
- `Particle` - Explosion particle with physics simulation

## 🎨 Design Philosophy

The game features a **premium Marvel cinematic aesthetic**:
- **Cosmic Background**: Animated gradient simulating space
- **Color Palette**: Crimson red (#dc143c) and gold (#ffd700)
- **Typography**: Monospace courier for retro-futuristic feel
- **Visual Feedback**: Every action has satisfying particle effects
- **Smooth Animations**: Fluid 60fps gameplay with easing

## 📊 Game Stats Tracking

- **Score**: Points earned (10 per letter)
- **Wave**: Current difficulty level
- **Words Destroyed**: Total words eliminated
- **Snaps Available**: Ironman's Snap charges ready to use

## 🎬 Ironman's Snap Visual Showcase

When activated, Ironman's Snap creates:
1. **200 radial particles** bursting from screen center
2. **Sequential enemy explosions** (50ms delay per enemy)
3. **Dual-color effects** (gold & crimson)  
4. **Screen flash** with white particle accents
5. **Score cascade** as all enemies are destroyed

## 🏆 Achievements to Aim For

- 🥉 **Beginner**: Score 500 points
- 🥈 **Warrior**: Reach Wave 5
- 🥇 **Champion**: Score 2000 points
- 💎 **Legend**: Reach Wave 10
- ⚡ **Snap Master**: Use 5 Ironman's Snaps in one game

## 🐛 Known Issues & Future Enhancements

### Potential Improvements
- [ ] Add sound effects and background music
- [ ] Implement high score persistence (localStorage)
- [ ] Add more superpower types
- [ ] Mobile touch controls
- [ ] Leaderboard system
- [ ] Multiple difficulty modes
- [ ] Power-ups and bonuses

## 📝 License

This project is open source and available for educational purposes.

## 🙏 Credits

- **Inspired by**: ZType and Marvel Cinematic Universe
- **Developed by**: CrazyyVitamin
- **Theme**: Marvel Comics/MCU aesthetic

## 🔗 Links

- **Repository**: [github.com/CrazyyVitamin/DoomsDay](https://github.com/CrazyyVitamin/DoomsDay)
- **Issues**: Report bugs on GitHub Issues
- **Contributions**: Pull requests welcome!

---

<div align="center">

Made with ❤️ and ⚡ by CrazyyVitamin

**Can you save the universe? Start playing now!**

</div>
