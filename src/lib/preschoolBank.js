// بنك التعلم قبل المدرسة — ١٠٠ سؤال للروضة
// كل الأسئلة تعتمد على الصور (إيموجي مناسبة) والتفاعل الحركي (نقر/عد/مطابقة)

const AR_NUMS = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];
const EN_NUMS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

const COUNT_EMOJIS = ['🍎', '🎈', '⭐', '🐬', '🌸', '🚗', '🍌', '🦋', '🎁', '🐝', '🐥', '🍓'];

function countQuestions(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const emoji = COUNT_EMOJIS[i % COUNT_EMOJIS.length];
    const count = 1 + (i % 9);
    const set = new Set([count]);
    while (set.size < 3) set.add(1 + Math.floor(Math.random() * 9));
    const nums = [...set].sort(() => Math.random() - 0.5);
    const options = nums.map((c) => ({ ar: AR_NUMS[c], en: EN_NUMS[c] }));
    const correct = nums.indexOf(count);
    out.push({
      id: `count_${i}`,
      category: 'count',
      type: 'count',
      prompt_ar: 'كم عدد الأشياء؟',
      prompt_en: 'How many items?',
      visuals: Array(count).fill(emoji),
      options,
      correct,
    });
  }
  return out;
}

const COLOR_ITEMS = [
  { emoji: '🍎', ar: 'تفاحة', en: 'apple', color_ar: 'الأحمر', color_en: 'red' },
  { emoji: '🌞', ar: 'شمس', en: 'sun', color_ar: 'الأصفر', color_en: 'yellow' },
  { emoji: '🍃', ar: 'ورقة', en: 'leaf', color_ar: 'الأخضر', color_en: 'green' },
  { emoji: '💧', ar: 'قطرة ماء', en: 'water drop', color_ar: 'الأزرق', color_en: 'blue' },
  { emoji: '🍇', ar: 'عنب', en: 'grapes', color_ar: 'البنفسجي', color_en: 'purple' },
  { emoji: '🦊', ar: 'ثعلب', en: 'fox', color_ar: 'البرتقالي', color_en: 'orange' },
  { emoji: '🌸', ar: 'وردة', en: 'flower', color_ar: 'الوردي', color_en: 'pink' },
  { emoji: '☁️', ar: 'غيمة', en: 'cloud', color_ar: 'الأبيض', color_en: 'white' },
];

function colorQuestions(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const target = COLOR_ITEMS[i % COLOR_ITEMS.length];
    const distractors = COLOR_ITEMS.filter((c) => c.emoji !== target.emoji).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [target, ...distractors].sort(() => Math.random() - 0.5);
    out.push({
      id: `color_${i}`,
      category: 'colors',
      type: 'choose',
      prompt_ar: `أين الشيء ${target.color_ar}؟`,
      prompt_en: `Where is the ${target.color_en} thing?`,
      visuals: [],
      options: opts.map((c) => ({ emoji: c.emoji, ar: c.ar, en: c.en })),
      correct: opts.findIndex((o) => o.emoji === target.emoji),
    });
  }
  return out;
}

const SHAPES = [
  { emoji: '🔴', ar: 'دائرة', en: 'circle' },
  { emoji: '🔺', ar: 'مثلث', en: 'triangle' },
  { emoji: '🟦', ar: 'مربع', en: 'square' },
  { emoji: '⭐', ar: 'نجمة', en: 'star' },
  { emoji: '🟩', ar: 'مستطيل', en: 'rectangle' },
  { emoji: '💛', ar: 'قلب', en: 'heart' },
];

function shapeQuestions(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const target = SHAPES[i % SHAPES.length];
    const distractors = SHAPES.filter((s) => s.emoji !== target.emoji).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [target, ...distractors].sort(() => Math.random() - 0.5);
    out.push({
      id: `shape_${i}`,
      category: 'shapes',
      type: 'choose',
      prompt_ar: `أين ال${target.ar}؟`,
      prompt_en: `Where is the ${target.en}?`,
      visuals: [],
      options: opts.map((s) => ({ emoji: s.emoji, ar: s.ar, en: s.en })),
      correct: opts.findIndex((o) => o.emoji === target.emoji),
    });
  }
  return out;
}

const ANIMALS = [
  { emoji: '🐱', ar: 'قط', en: 'cat', sound_ar: 'مياو', sound_en: 'meow' },
  { emoji: '🐶', ar: 'كلب', en: 'dog', sound_ar: 'هو ه', sound_en: 'woof' },
  { emoji: '🐮', ar: 'بقرة', en: 'cow', sound_ar: 'موو', sound_en: 'moo' },
  { emoji: '🦁', ar: 'أسد', en: 'lion', sound_ar: 'زئير', sound_en: 'roar' },
  { emoji: '🐦', ar: 'عصفور', en: 'bird', sound_ar: 'صو صو', sound_en: 'chirp' },
  { emoji: '🐸', ar: 'ضفدع', en: 'frog', sound_ar: 'كوا كوا', sound_en: 'ribbit' },
  { emoji: '🐑', ar: 'خروف', en: 'sheep', sound_ar: 'به به', sound_en: 'baa' },
  { emoji: '🐘', ar: 'فيل', en: 'elephant', sound_ar: 'بووو', sound_en: 'trumpet' },
  { emoji: '🐰', ar: 'أرنب', en: 'rabbit', sound_ar: 'قفز', sound_en: 'hop' },
  { emoji: '🐟', ar: 'سمكة', en: 'fish', sound_ar: 'سباحة', sound_en: 'swim' },
  { emoji: '🐝', ar: 'نحلة', en: 'bee', sound_ar: 'زيزيز', sound_en: 'buzz' },
  { emoji: '🐭', ar: 'فأر', en: 'mouse', sound_ar: 'صئي صئي', sound_en: 'squeak' },
  { emoji: '🐴', ar: 'حصان', en: 'horse', sound_ar: 'صهيل', sound_en: 'neigh' },
];

function animalQuestions(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const target = ANIMALS[i % ANIMALS.length];
    const distractors = ANIMALS.filter((a) => a.emoji !== target.emoji).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [target, ...distractors].sort(() => Math.random() - 0.5);
    const askSound = i % 2 === 0;
    out.push({
      id: `animal_${i}`,
      category: 'animals',
      type: 'choose',
      prompt_ar: askSound
        ? `أي حيوان يقول «${target.sound_ar}»؟`
        : `أين ال${target.ar}؟`,
      prompt_en: askSound
        ? `Which animal says "${target.sound_en}"?`
        : `Where is the ${target.en}?`,
      visuals: [],
      options: opts.map((a) => ({ emoji: a.emoji, ar: a.ar, en: a.en })),
      correct: opts.findIndex((o) => o.emoji === target.emoji),
    });
  }
  return out;
}

const LETTERS = ['ا', 'ب', 'ت', 'ث', 'ج', 'ح', 'خ', 'د', 'ذ', 'ر', 'ز', 'س'];

function letterQuestions(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const target = LETTERS[i % LETTERS.length];
    const distractors = LETTERS.filter((l) => l !== target).sort(() => Math.random() - 0.5).slice(0, 3);
    const opts = [target, ...distractors].sort(() => Math.random() - 0.5);
    out.push({
      id: `letter_${i}`,
      category: 'letters',
      type: 'choose',
      prompt_ar: `أين الحرف «${target}»؟`,
      prompt_en: `Where is the letter "${target}"?`,
      visuals: [],
      options: opts.map((l) => ({ emoji: null, ar: l, en: l })),
      correct: opts.indexOf(target),
    });
  }
  return out;
}

const SIZE_PAIRS = [
  { big: '🐘', small: '🐜', ar: 'فيل/نملة', en: 'elephant/ant' },
  { big: '🐳', small: '🐟', ar: 'حوت/سمكة', en: 'whale/fish' },
  { big: '🌳', small: '🌷', ar: 'شجرة/وردة', en: 'tree/flower' },
  { big: '🏠', small: '🧸', ar: 'بيت/دمية', en: 'house/toy' },
  { big: '🦁', small: '🐭', ar: 'أسد/فأر', en: 'lion/mouse' },
  { big: '🏔️', small: '🪨', ar: 'جبل/صخرة', en: 'mountain/rock' },
  { big: '✈️', small: '🚗', ar: 'طائرة/سيارة', en: 'plane/car' },
  { big: '🐎', small: '🐢', ar: 'حصان/سلحفاة', en: 'horse/turtle' },
];

function sizeQuestions(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const p = SIZE_PAIRS[i % SIZE_PAIRS.length];
    const opts = [{ emoji: p.big, ar: 'كبير', en: 'big' }, { emoji: p.small, ar: 'صغير', en: 'small' }];
    const askBig = i % 2 === 0;
    const arranged = askBig ? opts : [opts[1], opts[0]];
    out.push({
      id: `size_${i}`,
      category: 'size',
      type: 'choose',
      prompt_ar: askBig ? 'أيها أكبر؟' : 'أيها أصغر؟',
      prompt_en: askBig ? 'Which is bigger?' : 'Which is smaller?',
      visuals: [],
      options: arranged,
      correct: askBig ? arranged.findIndex((o) => o.emoji === p.big) : arranged.findIndex((o) => o.emoji === p.small),
    });
  }
  return out;
}

const ODD_SETS = [
  { items: ['🍎', '🍌', '🍊', '🚗'], odd: '🚗', ar: 'سيارة', en: 'car' },
  { items: ['🐶', '🐱', '🐰', '🌳'], odd: '🌳', ar: 'شجرة', en: 'tree' },
  { items: ['🔴', '🟦', '🟩', '🍎'], odd: '🍎', ar: 'تفاحة', en: 'apple' },
  { items: ['🚗', '✈️', '🚲', '🐟'], odd: '🐟', ar: 'سمكة', en: 'fish' },
  { items: ['👕', '👖', '👗', '🍕'], odd: '🍕', ar: 'بيتزا', en: 'pizza' },
  { items: ['⚽', '🏀', '🎾', '⭐'], odd: '⭐', ar: 'نجمة', en: 'star' },
  { items: ['🐝', '🦋', '🐞', '🐦'], odd: '🐦', ar: 'عصفور', en: 'bird' },
  { items: ['☀️', '🌧️', '⛅', '🌷'], odd: '🌷', ar: 'وردة', en: 'flower' },
  { items: ['🥛', '☕', '🧃', '🍌'], odd: '🍌', ar: 'موزة', en: 'banana' },
  { items: ['🧸', '🎈', '🎮', '🐱'], odd: '🐱', ar: 'قط', en: 'cat' },
];

function oddQuestions(n) {
  const out = [];
  for (let i = 0; i < n; i++) {
    const s = ODD_SETS[i % ODD_SETS.length];
    const shuffled = [...s.items].sort(() => Math.random() - 0.5);
    out.push({
      id: `odd_${i}`,
      category: 'odd',
      type: 'choose',
      prompt_ar: 'أيها مختلف عن البقية؟',
      prompt_en: 'Which one is different?',
      visuals: [],
      options: shuffled.map((e) => ({ emoji: e, ar: '', en: '' })),
      correct: shuffled.indexOf(s.odd),
    });
  }
  return out;
}

export const PRESCHOOL_CATEGORIES = [
  { key: 'all', ar: 'الكل', en: 'All', icon: '🎯' },
  { key: 'count', ar: 'العد', en: 'Counting', icon: '🔢' },
  { key: 'colors', ar: 'الألوان', en: 'Colors', icon: '🌈' },
  { key: 'shapes', ar: 'الأشكال', en: 'Shapes', icon: '🔷' },
  { key: 'animals', ar: 'الحيوانات', en: 'Animals', icon: '🐵' },
  { key: 'letters', ar: 'الحروف', en: 'Letters', icon: '🔤' },
  { key: 'size', ar: 'كبير/صغير', en: 'Big/Small', icon: '📐' },
  { key: 'odd', ar: 'المختلف', en: 'Odd One', icon: '🔍' },
];

export const PRESCHOOL_QUESTIONS = [
  ...countQuestions(30),
  ...colorQuestions(15),
  ...shapeQuestions(12),
  ...animalQuestions(13),
  ...letterQuestions(12),
  ...sizeQuestions(8),
  ...oddQuestions(10),
];