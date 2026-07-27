// English We Can! 3 — Grade 3 Term 2
// Textbook questions in ENGLISH — all content from chants, listening texts, phonics, goals
// Types: word_sentence_ordering · matching · classify · ordering · MC · yesno

// ===== Unit 1: Fun on the Weekend =====
const UNIT1_Q = [
  { type: 'word_sentence_ordering', question_ar: 'Arrange the words: "She cooked breakfast" (chant)', ordering_items_ar: ['She', 'cooked', 'breakfast'], ordering_items_en: ['She', 'cooked', 'breakfast'], sentence_ar: 'She cooked breakfast', sentence_en: 'She cooked breakfast', explanation_ar: 'Chant: "Cooked, cooked — She cooked breakfast."', golden_rule_ar: 'Subject + past verb + object.', detail_ar: 'Drag the words left to right to form the sentence.' },
  { type: 'matching', question_ar: 'Match each verb to its picture (chant)', matching_pairs_ar: [{ left: 'practiced', right: '🤸' }, { left: 'watched', right: '📺' }, { left: 'cooked', right: '🍳' }, { left: 'kicked', right: '⚽' }], explanation_ar: 'practiced→English · watched→a film · cooked→breakfast · kicked→a ball.', golden_rule_ar: 'Each verb in the chant pairs with its object.', detail_ar: 'Click a verb on the left, then its matching picture on the right.' },
  { type: 'classify', question_ar: 'Sort by ending: -nd or -nt', classify_categories_ar: ['-nd', '-nt'], classify_items_ar: [{ item: '🏖️', word: 'sand', correct_category: 0 }, { item: '✋', word: 'hand', correct_category: 0 }, { item: '⛺', word: 'tent', correct_category: 1 }, { item: '🏕️', word: 'went', correct_category: 1 }], explanation_ar: 'sand, hand → -nd. tent, went → -nt.', golden_rule_ar: 'Listen for n+d or n+t at the end.', detail_ar: 'Drag each word to its ending pattern.' },
  { type: 'info', question_ar: 'Complete: "He ___ a ball." (chant)', options_ar: ['kicked', 'cooked', 'watched', 'cleaned'], correct_index: 0, explanation_ar: 'Chant: "Kicked, kicked — He kicked a ball."', golden_rule_ar: 'kicked = past tense of kick (+ed).', detail_ar: 'Read the sentence and choose the verb from the chant.' },
  { type: 'yesno', question_ar: 'Did you play outside? (chant)', options_ar: ['Yes', 'No'], correct_index: 0, explanation_ar: 'Yes — "Played, played — You played outside."', golden_rule_ar: 'Every line in the chant is a past action.', detail_ar: 'Recall the chant, then answer.' },
  { type: 'info', question_ar: 'How do you ask about countable items?', options_ar: ['How many', 'How much', 'How old', 'How long'], correct_index: 0, explanation_ar: 'How many = countable (tomatoes). How much = uncountable (oil, flour).', golden_rule_ar: 'How many ↔ countable, How much ↔ uncountable.', detail_ar: 'Can you count the items one by one?' },
];

// ===== Unit 2: Life's Ups and Downs =====
const UNIT2_Q = [
  { type: 'word_sentence_ordering', question_ar: 'Arrange: "Khaled went to the cupboard" (chant)', ordering_items_ar: ['Khaled', 'went', 'to the cupboard'], ordering_items_en: ['Khaled', 'went', 'to the cupboard'], sentence_ar: 'Khaled went to the cupboard', sentence_en: 'Khaled went to the cupboard', explanation_ar: 'Chant: "My brother Khaled went to the cupboard."', golden_rule_ar: 'Subject + verb + place.', detail_ar: 'Drag the words to form the sentence.' },
  { type: 'matching', question_ar: 'Match irregular verbs to past tense', matching_pairs_ar: [{ left: 'win', right: '🏆' }, { left: 'catch', right: '🎣' }, { left: 'break', right: '💔' }, { left: 'see', right: '👁️' }], explanation_ar: 'win→won · catch→caught · break→broke · see→saw.', golden_rule_ar: 'Irregular verbs change form in the past.', detail_ar: 'Click a verb, then its past tense picture.' },
  { type: 'classify', question_ar: 'Sort: Regular (+ed) or Irregular past verbs?', classify_categories_ar: ['Regular (+ed)', 'Irregular'], classify_items_ar: [{ item: '🧹', word: 'cleaned', correct_category: 0 }, { item: '📺', word: 'watched', correct_category: 0 }, { item: '🏆', word: 'won', correct_category: 1 }, { item: '💔', word: 'broke', correct_category: 1 }], explanation_ar: 'cleaned, watched = regular (+ed). won, broke = irregular.', golden_rule_ar: 'Regular verbs add -ed. Irregular verbs change.', detail_ar: 'Drag each verb to its type.' },
  { type: 'info', question_ar: 'What was the table tennis score? (listening)', options_ar: ['21 to 3', '3 to 21', '10 to 5', '5 to 10'], correct_index: 0, explanation_ar: 'Listening: "I won a table tennis game 21 to 3."', golden_rule_ar: 'The score shows a big win.', detail_ar: 'Recall the listening text.' },
  { type: 'ordering', question_ar: "Order Khaled's story events (chant)", ordering_items_ar: ['Went to the cupboard', 'Cupboard was bare', "Went to the grocer's", 'Came back with empty bag'], explanation_ar: 'cupboard → bare → grocer\'s → empty bag.', golden_rule_ar: 'Story events follow a sequence.', detail_ar: 'Drag the events into the order they happened.' },
  { type: 'yesno', question_ar: 'Did they go to an adventure park? (listening)', options_ar: ['Yes', 'No'], correct_index: 0, explanation_ar: 'Yes — "Yesterday, we went to an adventure park."', golden_rule_ar: 'The listening describes a fun trip.', detail_ar: 'Recall the listening text.' },
];

// ===== Unit 3: My School is Cool! =====
const UNIT3_Q = [
  { type: 'word_sentence_ordering', question_ar: 'Arrange: "Rana had a little lamb" (chant)', ordering_items_ar: ['Rana', 'had', 'a little lamb'], ordering_items_en: ['Rana', 'had', 'a little lamb'], sentence_ar: 'Rana had a little lamb', sentence_en: 'Rana had a little lamb', explanation_ar: 'Chant: "Rana had a little lamb."', golden_rule_ar: 'Subject + verb + object.', detail_ar: 'Drag the words to form the sentence.' },
  { type: 'matching', question_ar: 'Match each word to its picture', matching_pairs_ar: [{ left: 'scarf', right: '🧣' }, { left: 'sky', right: '☁️' }, { left: 'square', right: '⬜' }, { left: 'skate', right: '⛸️' }], explanation_ar: 'scarf→🧣 · sky→☁️ · square→⬜ · skate→⛸️.', golden_rule_ar: 'Each word has a matching picture.', detail_ar: 'Click a word, then its picture.' },
  { type: 'classify', question_ar: 'Sort by beginning sound: sc- or sk-', classify_categories_ar: ['sc-', 'sk-'], classify_items_ar: [{ item: '🧣', word: 'scarf', correct_category: 0 }, { item: '😱', word: 'scary', correct_category: 0 }, { item: '☁️', word: 'sky', correct_category: 1 }, { item: '⛸️', word: 'skate', correct_category: 1 }], explanation_ar: 'scarf, scary → sc. sky, skate → sk.', golden_rule_ar: 'Listen to the first two sounds.', detail_ar: 'Drag each word to its beginning sound.' },
  { type: 'info', question_ar: 'Which subject does the student like this year? (listening)', options_ar: ['math', 'PE', 'science', 'art'], correct_index: 0, explanation_ar: 'Listening: "This year I like math."', golden_rule_ar: 'this year = present tense.', detail_ar: 'Recall the listening text.' },
  { type: 'info', question_ar: 'Which grade was the student in last year? (listening)', options_ar: ['2nd grade', '3rd grade', '1st grade', '4th grade'], correct_index: 0, explanation_ar: 'Listening: "Last year I was in the 2nd grade."', golden_rule_ar: 'last year = past tense.', detail_ar: 'Recall the listening text.' },
  { type: 'yesno', question_ar: 'Was bringing the lamb to school against the rules? (chant)', options_ar: ['Yes', 'No'], correct_index: 0, explanation_ar: 'Yes — "Which was against the rules."', golden_rule_ar: 'against the rules = not allowed.', detail_ar: 'Recall the chant.' },
];

// ===== Unit 4: A Healthy Life =====
const UNIT4_Q = [
  { type: 'word_sentence_ordering', question_ar: 'Arrange: "I always brush my teeth" (listening)', ordering_items_ar: ['I', 'always', 'brush', 'my teeth'], ordering_items_en: ['I', 'always', 'brush', 'my teeth'], sentence_ar: 'I always brush my teeth', sentence_en: 'I always brush my teeth', explanation_ar: 'Listening: "I always brush my teeth."', golden_rule_ar: 'Subject + frequency + verb + object.', detail_ar: 'Drag the words to form the sentence.' },
  { type: 'matching', question_ar: 'Match each problem to the body part', matching_pairs_ar: [{ left: 'headache', right: '🤕' }, { left: 'toothache', right: '🦷' }, { left: 'stomachache', right: '🤢' }], explanation_ar: 'headache→head · toothache→tooth · stomachache→stomach.', golden_rule_ar: 'ache = pain. Body part + ache.', detail_ar: 'Click a problem, then its body part picture.' },
  { type: 'classify', question_ar: 'Sort: Healthy or Unhealthy habits', classify_categories_ar: ['Healthy', 'Unhealthy'], classify_items_ar: [{ item: '🪥', word: 'brush teeth', correct_category: 0 }, { item: '🤸', word: 'exercise', correct_category: 0 }, { item: '🍔', word: 'junk food', correct_category: 1 }, { item: '🥤', word: 'soda', correct_category: 1 }], explanation_ar: 'brush teeth, exercise = healthy. junk food, soda = unhealthy.', golden_rule_ar: "should / shouldn't: good vs bad habits.", detail_ar: 'Drag each habit to its category.' },
  { type: 'info', question_ar: 'What does the student never do? (listening)', options_ar: ['eat junk food', 'brush teeth', 'eat breakfast', 'play outside'], correct_index: 0, explanation_ar: 'Listening: "I never eat junk food."', golden_rule_ar: 'never = 0%.', detail_ar: 'Recall the listening text.' },
  { type: 'ordering', question_ar: 'Order frequency markers from 100% to 0%', ordering_items_ar: ['always', 'usually', 'sometimes', 'never'], explanation_ar: 'always (100%) → usually (80%) → sometimes (50%) → never (0%).', golden_rule_ar: 'Frequency markers go from most to least.', detail_ar: 'Drag the markers from highest to lowest frequency.' },
  { type: 'info', question_ar: 'Complete: "I ___ eat junk food." (0%)', options_ar: ['never', 'always', 'usually', 'often'], correct_index: 0, explanation_ar: 'never = 0%. "I never eat junk food."', golden_rule_ar: 'never = not at any time.', detail_ar: 'Choose the frequency marker that means 0%.' },
];

// ===== Unit 5: Hanging Out in Town =====
const UNIT5_Q = [
  { type: 'word_sentence_ordering', question_ar: "Arrange: \"I'm going to the bakery\" (chant)", ordering_items_ar: ["I'm", 'going', 'to the bakery'], ordering_items_en: ["I'm", 'going', 'to the bakery'], sentence_ar: "I'm going to the bakery", sentence_en: "I'm going to the bakery", explanation_ar: "Chant: \"She's going to the bakery.\"", golden_rule_ar: 'be going to + place.', detail_ar: 'Drag the words to form the sentence.' },
  { type: 'matching', question_ar: 'Match each item to its store (chant)', matching_pairs_ar: [{ left: 'bread', right: '🥖' }, { left: 'books', right: '📚' }, { left: 'stapler', right: '✏️' }, { left: 'flowers', right: '🌻' }], explanation_ar: 'bread→bakery · books→bookstore · stapler→stationery · flowers→flower store.', golden_rule_ar: 'Each item has its store in town.', detail_ar: 'Click an item, then its store picture.' },
  { type: 'classify', question_ar: 'Sort: Stores or Transport', classify_categories_ar: ['Stores', 'Transport'], classify_items_ar: [{ item: '🥖', word: 'bakery', correct_category: 0 }, { item: '📚', word: 'bookstore', correct_category: 0 }, { item: '🚌', word: 'bus', correct_category: 1 }, { item: '🚉', word: 'train', correct_category: 1 }], explanation_ar: 'bakery, bookstore = stores. bus, train = transport.', golden_rule_ar: 'Stores sell things. Transport moves people.', detail_ar: 'Drag each word to its category.' },
  { type: 'info', question_ar: 'Where do you go to buy bread? (chant)', options_ar: ['bakery', 'bookstore', 'stationery store', 'flower store'], correct_index: 0, explanation_ar: "Chant: \"Mom wants some bread and cakes. She's going to the bakery.\"", golden_rule_ar: 'bakery = place for bread and cakes.', detail_ar: 'Recall the chant.' },
  { type: 'yesno', question_ar: 'Is the post office far? (listening)', options_ar: ['Yes', 'No'], correct_index: 1, explanation_ar: "No — \"It's near.\" = not far.", golden_rule_ar: 'near = close, far = not close.', detail_ar: 'Recall the listening text.' },
  { type: 'info', question_ar: 'Which word has the u_e pattern? (phonics)', options_ar: ['cube', 'blue', 'glue', 'barbecue'], correct_index: 0, explanation_ar: 'cube has u_e. blue, glue, barbecue have ue.', golden_rule_ar: 'u_e = long u with silent e.', detail_ar: 'Look at the vowel pattern in each word.' },
];

// ===== Unit 6: My Dream Vacation =====
const UNIT6_Q = [
  { type: 'word_sentence_ordering', question_ar: "Arrange: \"I'm going to visit Abha\" (chant)", ordering_items_ar: ["I'm", 'going', 'to visit', 'Abha'], ordering_items_en: ["I'm", 'going', 'to visit', 'Abha'], sentence_ar: "I'm going to visit Abha", sentence_en: "I'm going to visit Abha", explanation_ar: "Chant: \"I'm going to visit the city of Abha in Asir.\"", golden_rule_ar: 'be going to + verb = future plan.', detail_ar: 'Drag the words to form the sentence.' },
  { type: 'matching', question_ar: 'Match each person to their destination (chant)', matching_pairs_ar: [{ left: 'I', right: '📍' }, { left: 'You', right: '🏙️' }, { left: 'She', right: '🇦🇪' }, { left: 'They', right: '🇱🇧' }], explanation_ar: 'I→Abha · You→Riyadh · She→Dubai · They→Lebanon.', golden_rule_ar: 'Each pronoun has a different destination.', detail_ar: 'Click a pronoun, then its destination picture.' },
  { type: 'classify', question_ar: 'Sort: Inside Saudi Arabia or Outside?', classify_categories_ar: ['Inside Saudi', 'Outside Saudi'], classify_items_ar: [{ item: '📍', word: 'Abha', correct_category: 0 }, { item: '🏙️', word: 'Riyadh', correct_category: 0 }, { item: '🇦🇪', word: 'Dubai', correct_category: 1 }, { item: '🇱🇧', word: 'Lebanon', correct_category: 1 }], explanation_ar: 'Abha, Riyadh = inside Saudi. Dubai (UAE), Lebanon = outside.', golden_rule_ar: 'Know which destinations are local vs international.', detail_ar: 'Drag each destination to its category.' },
  { type: 'info', question_ar: 'How long does it take to get to Abha? (listening)', options_ar: ['about two hours', 'one hour', 'three hours', 'half an hour'], correct_index: 0, explanation_ar: 'Listening: "It takes about two hours."', golden_rule_ar: 'How long does it take? = travel time.', detail_ar: 'Recall the listening text.' },
  { type: 'info', question_ar: 'What juice did the passenger request? (listening)', options_ar: ['apple juice', 'orange juice', 'grape juice', 'mango juice'], correct_index: 0, explanation_ar: 'Listening: "Apple or orange juice? — Apple juice, please."', golden_rule_ar: 'What would you like to drink? = polite offer.', detail_ar: 'Recall the listening dialogue.' },
  { type: 'ordering', question_ar: 'Order the flight attendant dialogue (listening)', ordering_items_ar: ['What would you like to drink?', "I'd like some juice, please.", 'Apple or orange juice?', 'Apple juice, please.'], explanation_ar: 'attendant asks → customer requests → attendant offers choices → customer picks.', golden_rule_ar: 'Dialogue follows a question-answer pattern.', detail_ar: 'Drag the lines into the correct conversation order.' },
];

// ===== Phonics: Long Vowels =====
const PHONICS1_Q = [
  { type: 'matching', question_ar: 'Match each pattern to its word', matching_pairs_ar: [{ left: 'a_e', right: '🎂' }, { left: 'i_e', right: '🌲' }, { left: 'o_e', right: '🌹' }, { left: 'u_e', right: '🧊' }], explanation_ar: 'a_e→cake · i_e→pine · o_e→rose · u_e→cube.', golden_rule_ar: 'Silent e makes the vowel long.', detail_ar: 'Click a pattern, then its word picture.' },
  { type: 'classify', question_ar: 'Sort by vowel pattern: a_e or i_e', classify_categories_ar: ['a_e', 'i_e'], classify_items_ar: [{ item: '🎂', word: 'cake', correct_category: 0 }, { item: '🐍', word: 'snake', correct_category: 0 }, { item: '🌲', word: 'pine', correct_category: 1 }, { item: '🚲', word: 'bike', correct_category: 1 }], explanation_ar: 'cake, snake → a_e. pine, bike → i_e.', golden_rule_ar: 'The silent e makes the previous vowel long.', detail_ar: 'Drag each word to its vowel pattern.' },
  { type: 'info', question_ar: 'Which word has the o_e pattern?', options_ar: ['rose', 'cake', 'pine', 'cube'], correct_index: 0, explanation_ar: 'rose has o_e. cake has a_e. pine has i_e. cube has u_e.', golden_rule_ar: 'o_e = long o with silent e.', detail_ar: 'Look at the vowel pattern in each word.' },
  { type: 'info', question_ar: 'Which word has the u_e pattern?', options_ar: ['cube', 'cake', 'rose', 'pine'], correct_index: 0, explanation_ar: 'cube has u_e. cake has a_e. rose has o_e. pine has i_e.', golden_rule_ar: 'u_e = long u with silent e.', detail_ar: 'Look at the vowel pattern in each word.' },
];

// ===== Phonics: Vowel Teams =====
const PHONICS2_Q = [
  { type: 'matching', question_ar: 'Match each vowel team to its word', matching_pairs_ar: [{ left: 'ai', right: '🌧️' }, { left: 'ea', right: '🍑' }, { left: 'oa', right: '⛵' }, { left: 'ee', right: '🧀' }], explanation_ar: 'ai→rain · ea→peach · oa→boat · ee→cheese.', golden_rule_ar: 'Each vowel team has its own sound.', detail_ar: 'Click a vowel team, then its word picture.' },
  { type: 'classify', question_ar: 'Sort by vowel team: ai or oa', classify_categories_ar: ['ai', 'oa'], classify_items_ar: [{ item: '🌧️', word: 'rain', correct_category: 0 }, { item: '🚆', word: 'train', correct_category: 0 }, { item: '⛵', word: 'boat', correct_category: 1 }, { item: '🧥', word: 'coat', correct_category: 1 }], explanation_ar: 'rain, train → ai. boat, coat → oa.', golden_rule_ar: 'ai = /ei/ sound, oa = /oʊ/ sound.', detail_ar: 'Drag each word to its vowel team.' },
  { type: 'info', question_ar: 'Which word has the ee pattern?', options_ar: ['green', 'rain', 'boat', 'day'], correct_index: 0, explanation_ar: 'green has ee. rain has ai. boat has oa. day has ay.', golden_rule_ar: 'ee = /i:/ sound.', detail_ar: 'Look at the vowel team in each word.' },
];

// ===== Phonics: Blends & Digraphs =====
const PHONICS3_Q = [
  { type: 'word_sentence_ordering', question_ar: 'Arrange the knock-knock chant', ordering_items_ar: ['Knock knock', "Who's there?", 'Lettuce', 'Lettuce in'], ordering_items_en: ['Knock knock', "Who's there?", 'Lettuce', 'Lettuce in'], sentence_ar: "Knock knock — Who's there? — Lettuce — Lettuce in", sentence_en: "Knock knock — Who's there? — Lettuce — Lettuce in", explanation_ar: 'Chant: "Knock, knock! Who\'s there? Lettuce. Lettuce who? Lettuce in. It\'s cold out here!"', golden_rule_ar: 'Lettuce sounds like "Let us" = let us in.', detail_ar: 'Drag the parts to form the knock-knock chant.' },
  { type: 'matching', question_ar: 'Match each blend to its word', matching_pairs_ar: [{ left: 'th', right: '🤔' }, { left: 'ck', right: '🦆' }, { left: 'kn', right: '✊' }, { left: 'igh', right: '🌙' }], explanation_ar: 'th→think · ck→duck · kn→knock · igh→night.', golden_rule_ar: 'Each blend has its own sound.', detail_ar: 'Click a blend, then its word picture.' },
  { type: 'classify', question_ar: 'Sort: kn (silent k) or th', classify_categories_ar: ['kn (silent k)', 'th'], classify_items_ar: [{ item: '✊', word: 'knock', correct_category: 0 }, { item: '🦵', word: 'knee', correct_category: 0 }, { item: '🤔', word: 'think', correct_category: 1 }, { item: '🛁', word: 'bath', correct_category: 1 }], explanation_ar: 'knock, knee → kn (k is silent). think, bath → th.', golden_rule_ar: 'In kn, the k is not pronounced. In th, both letters make one sound.', detail_ar: 'Drag each word to its blend.' },
  { type: 'info', question_ar: 'Who was at the door in the knock-knock joke?', options_ar: ['Lettuce', 'Tomato', 'Onion', 'Carrot'], correct_index: 0, explanation_ar: 'Chant: "Knock, knock! Who\'s there? Lettuce."', golden_rule_ar: 'Lettuce = خس, sounds like "Let us" = let us in.', detail_ar: 'Recall the knock-knock chant.' },
];

// ===== Assembly =====
const ALL_UNIT_QUESTIONS = [UNIT1_Q, UNIT2_Q, UNIT3_Q, UNIT4_Q, UNIT5_Q, UNIT6_Q, PHONICS1_Q, PHONICS2_Q, PHONICS3_Q];

ALL_UNIT_QUESTIONS.forEach(questions => {
  questions.forEach(q => {
    if (!q.detail_ar) q.detail_ar = 'Read the question, think about the book content, then answer.';
  });
});

export const TOTAL_TEXTBOOK_QUESTIONS = ALL_UNIT_QUESTIONS.reduce((s, q) => s + q.length, 0);

export function getTextbookExercisesForLesson(unitIdx, lessonIdx) {
  const questions = ALL_UNIT_QUESTIONS[unitIdx];
  if (!questions) return [];
  const offset = lessonIdx % questions.length;
  return [...questions.slice(offset), ...questions.slice(0, offset)];
}

export function getTextbookAdaptiveLadder(unitIdx, lessonIdx) {
  const questions = ALL_UNIT_QUESTIONS[unitIdx];
  if (!questions) return [];
  const mc = questions.filter(q => q.type === 'info' || q.type === 'yesno');
  if (mc.length < 2) return [];
  const offset = lessonIdx % mc.length;
  const picked = [];
  for (let i = 0; i < Math.min(3, mc.length); i++) {
    picked.push(mc[(offset + i) % mc.length]);
  }
  return picked.map((q, i) => ({
    ...q,
    level: ['hard', 'medium', 'easy'][i],
    correct_value: q.options_ar[q.correct_index],
  }));
}