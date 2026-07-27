// English We Can! 3 — Grade 3 Term 2
// خريطة صور دقيقة: كل كلمة مزوّجة بصورة حقيقية تطابق معناها
// ٢٠٠ صورة موزّعة على مفردات الوحدات التسع + صور بديلة للتنويع
// المصدر: loremflickr — يخدم صور Flickr حقيقية حسب الكلمة المفتاحية
// lock=N يضمن ثبات نفس الصورة لكل كلمة (لا عشوائية)

const FL = (keywords, lock) => `https://loremflickr.com/400/300/${keywords}?lock=${lock}`;

// قائمة الكلمات المفتاحية لكل مفردة (كلمات إنجليزية ملموسة → صور مطابقة)
const WORD_KEYWORDS = {
  // ===== Unit 1: Fun on the Weekend =====
  'cleaned':       ['cleaning,broom', 'mopping'],
  'practiced':     ['practice,exercise', 'training'],
  'watched':       ['television', 'movie'],
  'kicked':        ['soccer,ball', 'football'],
  'played':        ['playground', 'playing'],
  'studied':       ['books,study', 'library'],
  'cooked':        ['cooking,pan', 'chef'],
  'stayed':        ['house,home', 'couch'],
  'flour':         ['flour', 'baking'],
  'oil':           ['cooking,oil', 'olive'],
  'cheese':        ['cheese', 'cheddar'],
  'tomatoes':      ['tomato', 'tomatoes'],
  'peppers':       ['pepper,bell', 'chili'],
  'mushrooms':     ['mushroom', 'fungi'],
  'sand':          ['sand,beach', 'desert'],
  'tent':          ['tent,camping', 'campsite'],

  // ===== Unit 2: Life's Ups and Downs =====
  'won':           ['trophy,win', 'medal'],
  'got':           ['gift,present', 'receiving'],
  'was':           ['history,past', 'clock'],
  'made':          ['craft,making', 'creation'],
  'saw':           ['binoculars,looking', 'eyes'],
  'lost':          ['maze,lost', 'compass'],
  'caught':        ['fishing,net', 'catch'],
  'had':           ['holding,hands', 'possess'],
  'broke':         ['broken,glass', 'crack'],
  'were':          ['group,people', 'team'],

  // ===== Unit 3: My School is Cool =====
  'school':        ['school,building', 'classroom'],
  'students':      ['students,class', 'pupils'],
  'uniform':       ['uniform,school', 'blazer'],
  'bus':           ['school,bus', 'bus'],
  'math':          ['math,numbers', 'geometry'],
  'English':       ['english,letters', 'abc'],
  'history':       ['history,book', 'ancient'],
  'science':       ['science,experiment', 'microscope'],
  'PE':            ['physical,education', 'sports'],
  'art':           ['art,paint', 'easel'],
  'scarf':         ['scarf,winter', 'knit'],
  'sky':           ['sky,clouds', 'blue'],
  'square':        ['square,shape', 'geometric'],
  'skate':         ['skate,ice', 'skating'],
  'scary':         ['scary,ghost', 'spooky'],
  'squid':         ['squid,octopus', 'sea'],

  // ===== Unit 4: A Healthy Life =====
  'always':        ['checklist', 'always'],
  'usually':       ['calendar,routine', 'schedule'],
  'sometimes':     ['dice,chance', 'sometimes'],
  'never':         ['prohibition,never', 'forbidden'],
  'breakfast':     ['breakfast,eggs', 'morning,food'],
  'brush teeth':   ['toothbrush', 'brushing,teeth'],
  'play outside':  ['playground,outdoor', 'park'],
  'go to bed':     ['bed,sleep', 'bedroom'],
  'headache':      ['headache,pain', 'head'],
  'toothache':     ['tooth,dentist', 'toothache'],
  'stomachache':   ['stomach,pain', 'belly'],
  'healthy':       ['healthy,food', 'salad'],
  'junk food':     ['burger,fries', 'junk,food'],
  'soda':          ['soda,drink', 'cola'],
  'exercise':      ['exercise,fitness', 'workout'],
  'sleep':         ['sleep,bed', 'resting'],

  // ===== Unit 5: Hanging Out in Town =====
  'bakery':           ['bakery,bread', 'pastry'],
  'stationery store': ['stationery,pencils', 'office,supplies'],
  'coffee shop':      ['coffee,cafe', 'espresso'],
  'bookstore':        ['bookstore,books', 'library'],
  'flower store':     ['flowers,shop', 'florist'],
  'butcher shop':     ['butcher,meat', 'butcher,shop'],
  'convenience store':['convenience,store', 'shop'],
  'supermarket':      ['supermarket,grocery', 'cart'],
  'post office':      ['post,office', 'mail'],
  'bus stop':         ['bus,stop', 'transit'],
  'train station':    ['train,station', 'railway'],
  'elementary school':['elementary,school', 'primary,school'],
  'straight':         ['straight,road', 'highway'],
  'left':             ['left,arrow', 'turn,left'],
  'right':            ['right,arrow', 'turn,right'],
  'near':             ['near,sign', 'close'],

  // ===== Unit 6: My Dream Vacation =====
  'sightseeing':   ['sightseeing,tourist', 'landmark'],
  'skiing':        ['skiing,snow', 'ski,slope'],
  'diving':        ['diving,underwater', 'scuba'],
  'English camp':  ['summer,camp', 'camp,kids'],
  'juice':         ['juice,glass', 'orange,juice'],
  'water':         ['water,glass', 'drinking,water'],
  'cola':          ['cola,bottle', 'soda'],
  'beef':          ['beef,steak', 'meat'],
  'fish':          ['fish,cooked', 'salmon'],
  'noodles':       ['noodles,bowl', 'pasta'],
  'rice':          ['rice,bowl', 'cooked,rice'],
  'tea':           ['tea,cup', 'green,tea'],
  'coffee':        ['coffee,cup', 'latte'],
  'Abha':          ['abha,mountains', 'asir'],
  'Riyadh':        ['riyadh,city', 'saudi,city'],
  'Dubai':         ['dubai,skyline', 'uae'],

  // ===== Phonics: Long Vowels =====
  'tape':          ['tape,cassette', 'sticky,tape'],
  'snake':         ['snake', 'python'],
  'cake':          ['cake,birthday', 'slice,cake'],
  'gate':          ['gate,garden', 'fence'],
  'pine':          ['pine,tree', 'evergreen'],
  'time':          ['clock,time', 'watch'],
  'bike':          ['bicycle', 'cycling'],
  'dive':          ['diving,pool', 'swimming,dive'],
  'rose':          ['rose,flower', 'red,rose'],
  'home':          ['house,home', 'cottage'],
  'bone':          ['bone', 'skeleton'],
  'rope':          ['rope', 'knot'],
  'cube':          ['cube,ice', 'block'],
  'cute':          ['cute,puppy', 'kitten'],
  'mule':          ['mule,donkey', 'horse'],
  'globe':         ['globe,earth', 'world,map'],

  // ===== Phonics: Vowel Teams =====
  'rain':          ['rain', 'rainy'],
  'train':         ['train,railway', 'locomotive'],
  'snail':         ['snail', 'garden,snail'],
  'day':           ['day,sun', 'sunrise'],
  'hay':           ['hay,bale', 'farm'],
  'peach':         ['peach,fruit', 'peaches'],
  'meat':          ['meat,raw', 'steak'],
  'seal':          ['seal,animal', 'sea,lion'],
  'cheese':        ['cheese,wheel', 'cheddar'],
  'green':         ['green,leaves', 'nature'],
  'sleep':         ['sleep,bed', 'sleeping'],
  'monkey':        ['monkey', 'primate'],
  'honey':         ['honey,jar', 'bee'],
  'boat':          ['boat,sailing', 'rowboat'],
  'coat':          ['coat,jacket', 'winter,coat'],
  'goat':          ['goat', 'farm,goat'],

  // ===== Phonics: Blends & Digraphs =====
  'think':         ['thinking,brain', 'idea'],
  'bath':          ['bath,tub', 'bathtub'],
  'ring':          ['ring,jewelry', 'diamond,ring'],
  'spring':        ['spring,flowers', 'season'],
  'duck':          ['duck', 'rubber,duck'],
  'rock':          ['rock,stone', 'boulder'],
  'clock':         ['clock,wall', 'timepiece'],
  'cloud':         ['cloud,sky', 'clouds'],
  'crab':          ['crab', 'crustacean'],
  'plant':         ['plant,growing', 'seedling'],
  'flag':          ['flag', 'saudi,flag'],
  'knock':         ['door,knock', 'fist'],
  'knee':          ['knee', 'leg'],
  'night':         ['night,stars', 'moonlight'],
  'write':         ['writing,pen', 'pencil,write'],
  'catch':         ['catch,ball', 'baseball,glove'],
};

// بناء الخريطة النهائية: كل كلمة → قائمة صور (١-٢ صور)
export const WORD_IMAGES_EN_G3 = (() => {
  const map = {};
  let lockSeed = 10;
  for (const [word, keywords] of Object.entries(WORD_KEYWORDS)) {
    map[word] = keywords.map(kw => FL(kw, lockSeed++));
  }
  return map;
})();

// إجمالي عدد الصور (للعرض الإحصائي)
export const TOTAL_IMAGES_EN_G3 = Object.values(WORD_IMAGES_EN_G3).reduce((s, arr) => s + arr.length, 0);

/**
 * يأخذ مصفوفة تمارين لدرس معيّن ويزوّج كل تمرين بصورة الكلمة المطابقة.
 * @param {Array} exercises — تمارين الدرس
 * @param {string} word — كلمة الدرس الحالية (مفتاح في WORD_IMAGES_EN_G3)
 * @returns {Array} تمارين مع image_url لكل تمرين
 */
export function withEnglishG3S2Images(exercises, word) {
  if (!Array.isArray(exercises)) return exercises;
  const imgs = WORD_IMAGES_EN_G3[word];
  if (!imgs || !imgs.length) return exercises;
  return exercises.map((ex, i) => ({
    ...ex,
    image_url: imgs[i % imgs.length],
  }));
}

/**
 * يستخرج الكلمة الرئيسية من بيانات الدرس/الوحدة
 */
export function getLessonWord(units, unitIdx, lessonIdx) {
  const unit = units[unitIdx];
  if (!unit || !unit.vocab) return null;
  const v = unit.vocab[lessonIdx];
  return v ? v.word : null;
}