// DoomsDay - Large Word Database (1000+ words)
// Categorized by difficulty for balanced gameplay

const WORD_DATABASE = {
    // 2-3 letter words (150 words)
    easy: [
        'ax', 'by', 'go', 'do', 'up', 'on', 'in', 'so', 'he', 'we', 'me', 'it', 'to', 'at', 'as', 'an', 'be', 'or', 'is', 'am',
        'hi', 'ok', 'oh', 'ah', 'my', 'no', 'if', 'us', 'ox', 'yo', 'qi', 'xi', 'nu', 'pi', 'mu', 're', 'la', 'ta', 'pa', 'ma',
        'ad', 'ex', 'id', 'bi', 'ha', 'eve', 'uh', 'yo', 'zen', 'joy', 'art', 'sky', 'tea', 'ice', 'day', 'air', 'sea', 'sun',
        'run', 'win', 'try', 'pay', 'law', 'way', 'key', 'cup', 'pen', 'map', 'job', 'war', 'gas', 'ink', 'red', 'ego', 'oil',
        'ash', 'mud', 'web', 'age', 'fit', 'fly', 'kid', 'aim', 'god', 'tax', 'all', 'two', 'one', 'man', 'now', 'old', 'few',
        'new', 'can', 'may', 'has', 'had', 'her', 'his', 'how', 'its', 'out', 'who', 'use', 'you', 'get', 'see', 'any', 'own',
        'say', 'did', 'put', 'too', 'why', 'far', 'let', 'boy', 'car', 'eat', 'cut', 'end', 'off', 'hot', 'low', 'lot', 'set',
        'big', 'top', 'yet', 'sit', 'hit', 'add', 'bag', 'bad', 'bit', 'box', 'cat', 'dog', 'egg', 'eye', 'arm'
    ],
    
    // 4-6 letter words (450 words)
    medium: [
        'time', 'work', 'life', 'love', 'word', 'hand', 'mind', 'kind', 'calm', 'wise', 'bold', 'fast', 'slow', 'free', 'true',
        'deep', 'soft', 'hard', 'real', 'fair', 'safe', 'pure', 'cold', 'warm', 'cool', 'dark', 'wild', 'good', 'best', 'high',
        'peak', 'hope', 'fear', 'plan', 'deal', 'help', 'heal', 'grow', 'fall', 'rise', 'flow', 'bond', 'goal', 'loss', 'gain',
        'wish', 'care', 'song', 'echo', 'blue', 'gold', 'path', 'seed', 'root', 'dawn', 'dusk', 'fate', 'soul', 'home', 'zone',
        'world', 'power', 'place', 'state', 'thing', 'heart', 'light', 'water', 'voice', 'truth', 'image', 'value', 'sound',
        'money', 'stone', 'field', 'space', 'group', 'level', 'order', 'point', 'right', 'force', 'shape', 'watch', 'plant',
        'cover', 'paper', 'music', 'black', 'white', 'night', 'south', 'north', 'green', 'table', 'early', 'clear', 'happy',
        'smile', 'study', 'woman', 'young', 'month', 'story', 'start', 'child', 'bring', 'would', 'could', 'should', 'three',
        'about', 'after', 'again', 'think', 'great', 'where', 'every', 'still', 'large', 'small', 'house', 'under', 'never',
        'while', 'found', 'learn', 'point', 'stand', 'first', 'right', 'might', 'place', 'which', 'these', 'those', 'their',
        'write', 'would', 'sound', 'voice', 'heard', 'sight', 'focus', 'vision', 'nature', 'method', 'system', 'change', 'action',
        'result', 'effect', 'impact', 'growth', 'spirit', 'energy', 'motion', 'reason', 'chance', 'choice', 'signal', 'object',
        'design', 'friend', 'moment', 'health', 'wealth', 'safety', 'beauty', 'shadow', 'mirror', 'detail', 'belief', 'talent',
        'create', 'future', 'silver', 'golden', 'purple', 'orange', 'yellow', 'bright', 'gentle', 'strong', 'simple', 'honest',
        'noble', 'proud', 'quiet', 'swift', 'sharp', 'clean', 'fresh', 'solid', 'vivid', 'equal', 'aware', 'bound', 'lucky',
        'smart', 'flame', 'blast', 'storm', 'flood', 'frost', 'cloud', 'thunder', 'wind', 'rain', 'snow', 'ice', 'fire',
        'metal', 'steel', 'iron', 'brass', 'copper', 'diamond', 'crystal', 'pearl', 'ruby', 'jade', 'amber', 'marble', 'granite',
        'ocean', 'river', 'stream', 'valley', 'mountain', 'forest', 'desert', 'island', 'bridge', 'castle', 'tower', 'temple',
        'garden', 'palace', 'market', 'square', 'street', 'avenue', 'corner', 'center', 'border', 'edge', 'limit', 'range',
        'circle', 'square', 'triangle', 'sphere', 'cube', 'pyramid', 'angle', 'curve', 'spiral', 'pattern', 'texture', 'color',
        'dragon', 'tiger', 'eagle', 'falcon', 'raven', 'phoenix', 'lion', 'wolf', 'bear', 'shark', 'whale', 'dolphin', 'horse',
        'battle', 'combat', 'victory', 'defeat', 'honor', 'glory', 'fame', 'legacy', 'empire', 'kingdom', 'warrior', 'hero',
        'legend', 'myth', 'magic', 'spell', 'charm', 'rune', 'ancient', 'sacred', 'mystic', 'secret', 'hidden', 'lost',
        'cosmic', 'stellar', 'lunar', 'solar', 'planet', 'star', 'galaxy', 'nebula', 'comet', 'meteor', 'orbit', 'satellite',
        'quest', 'journey', 'voyage', 'adventure', 'mission', 'rescue', 'escape', 'pursuit', 'search', 'discovery', 'finding',
        'wisdom', 'knowledge', 'insight', 'clarity', 'awareness', 'mindful', 'conscious', 'awakened', 'enlightened', 'evolved',
        'justice', 'mercy', 'grace', 'courage', 'bravery', 'valor', 'dignity', 'integrity', 'loyalty', 'devotion', 'faith',
        'harmony', 'balance', 'unity', 'peace', 'calm', 'serenity', 'tranquil', 'gentle', 'tender', 'kind', 'compassion',
        'thunder', 'tempest', 'hurricane', 'tornado', 'blizzard', 'avalanche', 'earthquake', 'volcano', 'eruption', 'inferno',
        'radiant', 'glowing', 'shining', 'blazing', 'brilliant', 'dazzling', 'gleaming', 'luminous', 'sparkling', 'glittering'
    ],
    
    // 7+ letter words (400+ words)
    hard: [
        'amazing', 'awesome', 'perfect', 'supreme', 'ultimate', 'absolute', 'infinite', 'eternal', 'immortal', 'legendary',
        'powerful', 'mighty', 'glorious', 'triumphant', 'victorious', 'magnificent', 'spectacular', 'incredible', 'phenomenal',
        'extraordinary', 'remarkable', 'outstanding', 'exceptional', 'brilliant', 'excellent', 'superior', 'paramount', 'prime',
        'universe', 'multiverse', 'dimension', 'reality', 'existence', 'creation', 'destruction', 'transformation', 'evolution',
        'guardian', 'protector', 'defender', 'champion', 'warrior', 'soldier', 'fighter', 'sentinel', 'watcher', 'keeper',
        'destroyer', 'conqueror', 'vanquisher', 'dominator', 'overlord', 'commander', 'general', 'captain', 'marshal', 'admiral',
        'avenger', 'revenger', 'retaliator', 'punisher', 'executioner', 'enforcer', 'deliverer', 'liberator', 'savior', 'redeemer',
        'visionary', 'pioneer', 'explorer', 'discoverer', 'inventor', 'creator', 'architect', 'designer', 'builder', 'craftsman',
        'invincible', 'unstoppable', 'unbeatable', 'unbreakable', 'indestructible', 'impenetrable', 'unconquerable', 'insurmountable',
        'adventure', 'expedition', 'pilgrimage', 'crusade', 'campaign', 'operation', 'undertaking', 'enterprise', 'venture',
        'challenge', 'obstacle', 'hardship', 'difficulty', 'adversity', 'struggle', 'conflict', 'confrontation', 'opposition',
        'strength', 'fortitude', 'resilience', 'endurance', 'stamina', 'vitality', 'vigor', 'energy', 'dynamism', 'intensity',
        'strategy', 'tactics', 'maneuver', 'approach', 'method', 'technique', 'procedure', 'process', 'system', 'mechanism',
        'knowledge', 'understanding', 'comprehension', 'perception', 'awareness', 'consciousness', 'cognition', 'recognition',
        'imagination', 'creativity', 'innovation', 'originality', 'ingenuity', 'inspiration', 'brilliance', 'genius', 'mastery',
        'excellence', 'perfection', 'precision', 'accuracy', 'exactness', 'correctness', 'flawlessness', 'impeccability',
        'harmony', 'symphony', 'resonance', 'vibration', 'frequency', 'wavelength', 'amplitude', 'oscillation', 'pulsation',
        'lightning', 'thunder', 'tempest', 'hurricane', 'typhoon', 'cyclone', 'tornado', 'whirlwind', 'maelstrom', 'vortex',
        'avalanche', 'landslide', 'earthquake', 'tremor', 'eruption', 'explosion', 'detonation', 'blast', 'impact', 'collision',
        'radiance', 'luminescence', 'phosphorescence', 'fluorescence', 'incandescence', 'brilliance', 'splendor', 'magnificence',
        'darkness', 'shadow', 'twilight', 'midnight', 'obscurity', 'blackness', 'gloom', 'murk', 'dimness', 'shade',
        'crystal', 'diamond', 'sapphire', 'emerald', 'ruby', 'topaz', 'amethyst', 'opal', 'quartz', 'obsidian',
        'titanium', 'platinum', 'iridium', 'palladium', 'osmium', 'tungsten', 'chromium', 'cobalt', 'nickel', 'aluminum',
        'mountain', 'volcano', 'glacier', 'canyon', 'valley', 'plateau', 'summit', 'peak', 'ridge', 'precipice',
        'fortress', 'citadel', 'bastion', 'stronghold', 'bulwark', 'rampart', 'battlement', 'parapet', 'garrison', 'sanctuary',
        'cathedral', 'monastery', 'temple', 'shrine', 'sanctuary', 'basilica', 'chapel', 'cloister', 'abbey', 'priory',
        'labyrinth', 'maze', 'puzzle', 'enigma', 'mystery', 'riddle', 'conundrum', 'paradox', 'dilemma', 'quandary',
        'prophecy', 'prediction', 'forecast', 'premonition', 'vision', 'revelation', 'epiphany', 'insight', 'enlightenment',
        'transformation', 'metamorphosis', 'transmutation', 'conversion', 'transition', 'evolution', 'development', 'progression',
        'ascension', 'transcendence', 'elevation', 'exaltation', 'glorification', 'apotheosis', 'deification', 'sanctification',
        'restoration', 'renovation', 'renewal', 'revival', 'resurrection', 'rebirth', 'regeneration', 'rejuvenation', 'recovery',
        'celebration', 'festival', 'ceremony', 'ritual', 'tradition', 'custom', 'practice', 'observance', 'commemoration',
        'meditation', 'contemplation', 'reflection', 'introspection', 'concentration', 'focus', 'attention', 'mindfulness',
        'revelation', 'discovery', 'finding', 'uncovering', 'exposure', 'disclosure', 'manifestation', 'emergence', 'appearance',
        'beautiful', 'gorgeous', 'stunning', 'breathtaking', 'magnificent', 'majestic', 'splendid', 'glorious', 'radiant',
        'terrible', 'fearsome', 'dreadful', 'formidable', 'menacing', 'threatening', 'ominous', 'sinister', 'foreboding',
        'mysterious', 'enigmatic', 'cryptic', 'arcane', 'esoteric', 'occult', 'mystical', 'supernatural', 'metaphysical',
        'spectacular', 'astonishing', 'astounding', 'staggering', 'overwhelming', 'stupendous', 'marvelous', 'wonderful',
        'battlefield', 'warzone', 'frontline', 'theatre', 'arena', 'colosseum', 'amphitheatre', 'stadium', 'ground',
        'celebration', 'jubilation', 'rejoicing', 'festivity', 'merriment', 'revelry', 'carnival', 'fiesta', 'gala',
        'catastrophe', 'disaster', 'calamity', 'cataclysm', 'apocalypse', 'armageddon', 'doomsday', 'judgment', 'reckoning',
        'righteousness', 'virtuousness', 'morality', 'ethics', 'principles', 'values', 'ideals', 'standards', 'integrity'
    ]
};

// Flatten all words into single array with track of used words
const ALL_WORDS = [...WORD_DATABASE.easy, ...WORD_DATABASE.medium, ...WORD_DATABASE.hard];
let usedWords = new Set();
let availableWords = [...ALL_WORDS];

// Function to get random word without repetition
function getRandomWord() {
    // If we've used all words, reset
    if (availableWords.length === 0) {
        usedWords.clear();
        availableWords = [...ALL_WORDS];
    }
    
    // Get random word from available words
    const randomIndex = Math.floor(Math.random() * availableWords.length);
    const word = availableWords[randomIndex];
    
    // Remove from available and add to used
    availableWords.splice(randomIndex, 1);
    usedWords.add(word);
    
    return word;
}

// Export for use in main game
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WORD_DATABASE, ALL_WORDS, getRandomWord };
}
