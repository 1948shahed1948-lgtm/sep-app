// بنك رياضيات الصف الثاني الابتدائي — الفصل الدراسي الأول
// المصدر: فهرس الكتاب الرسمي (وزارة التعليم) عبر منصة عين/مدرستي.
// البنية: ٦ فصول حقيقية × دروسها الرسمية. كل درس: ٨ أنواع (٤ تفاعلية + ٤ كتابية)، سؤالان لكل نوع بنفس النمط.
// الأنواع: mc اختيار من متعدد | tf صح/خطأ | fill أكمل الفراغ | compute أوجد الناتج | match وصل | classify صنّف | order رتّب | word مسألة حياتية

import { LESSON_CH2_L1, LESSON_CH2_L2, LESSON_CH2_L3, LESSON_CH2_L4, LESSON_CH2_L5, LESSON_CH2_L6, LESSON_CH2_L7, LESSON_CH2_L8 } from './mathG2S1Ch2.js';

export const MATH2_S1_CHAPTERS = [
  {
    id: 'ch1',
    title_ar: 'الفصل الأول: القيمة المنزلية حتى ١٠٠ والأنماط',
    title_en: 'Chapter 1: Place Value to 100 and Patterns',
    color: '#0ea5e9',
    lessons: [
      { id: 'ch1-l1', title_ar: 'الآحاد والعشرات', title_en: 'Ones and Tens', questions: LESSON_CH1_L1() },
      { id: 'ch1-l2', title_ar: 'القيمة المنزلية للأعداد حتى ١٠٠', title_en: 'Place Value to 100', questions: LESSON_CH1_L2() },
      { id: 'ch1-l3', title_ar: 'أحل المسألة: أستعمل الاستدلال المنطقي', title_en: 'Problem Solving: Logical Reasoning', questions: LESSON_CH1_L3() },
      { id: 'ch1-l4', title_ar: 'قراءة الأعداد وكتابتها', title_en: 'Reading and Writing Numbers', questions: LESSON_CH1_L4() },
      { id: 'ch1-l5', title_ar: 'تقدير الكميات', title_en: 'Estimating Quantities', questions: LESSON_CH1_L5() },
      { id: 'ch1-l6', title_ar: 'ترتيب الأعداد', title_en: 'Ordering Numbers', questions: LESSON_CH1_L6() },
      { id: 'ch1-l7', title_ar: 'مقارنة الأعداد', title_en: 'Comparing Numbers', questions: LESSON_CH1_L7() },
      { id: 'ch1-l8', title_ar: 'الأنماط', title_en: 'Patterns', questions: LESSON_CH1_L8() },
      { id: 'ch1-l9', title_ar: 'الأنماط على لوحة المئة', title_en: 'Patterns on a Hundred Chart', questions: LESSON_CH1_L9() },
    ],
  },
  {
    id: 'ch2',
    title_ar: 'الفصل الثاني: طرائق الجمع',
    title_en: 'Chapter 2: Addition Strategies',
    color: '#8b5cf6',
    lessons: [
      { id: 'ch2-l1', title_ar: 'خصائص الجمع', title_en: 'Properties of Addition', questions: LESSON_CH2_L1() },
      { id: 'ch2-l2', title_ar: 'الجمع بالعد التصاعدي', title_en: 'Count On to Add', questions: LESSON_CH2_L2() },
      { id: 'ch2-l3', title_ar: 'أحل المسألة: أمثلها', title_en: 'Problem Solving: Act It Out', questions: LESSON_CH2_L3() },
      { id: 'ch2-l4', title_ar: 'جمع العدد ونفسه', title_en: 'Doubles Facts', questions: LESSON_CH2_L4() },
      { id: 'ch2-l5', title_ar: 'جمع العدد ونفسه مضافًا إليه ١ أو مطروحًا منه ١', title_en: 'Doubles Plus/Minus One', questions: LESSON_CH2_L5() },
      { id: 'ch2-l6', title_ar: 'الجمع بتكوين العشرة', title_en: 'Make Ten to Add', questions: LESSON_CH2_L6() },
      { id: 'ch2-l7', title_ar: 'جمع ثلاثة أعداد', title_en: 'Add Three Numbers', questions: LESSON_CH2_L7() },
      { id: 'ch2-l8', title_ar: 'استقصاء حل المسألة: أختار خطة مناسبة', title_en: 'Investigate: Choose a Strategy', questions: LESSON_CH2_L8() },
    ],
  },
  {
    id: 'ch3',
    title_ar: 'الفصل الثالث: طرائق الطرح',
    title_en: 'Chapter 3: Subtraction Strategies',
    color: '#f59e0b',
    lessons: [
      { id: 'ch3-l1', title_ar: 'الطرح بالعد التنازلي', title_en: 'Count Back to Subtract', questions: [] },
      { id: 'ch3-l2', title_ar: 'طرح الصفر وطرح الكل', title_en: 'Subtract Zero and All', questions: [] },
      { id: 'ch3-l3', title_ar: 'الطرح باستعمال حقائق جمع العدد ونفسه', title_en: 'Use Doubles to Subtract', questions: [] },
      { id: 'ch3-l4', title_ar: 'أحل المسألة: أخمن وأتحقق', title_en: 'Problem Solving: Guess and Check', questions: [] },
      { id: 'ch3-l5', title_ar: 'العلاقة بين الجمع والطرح', title_en: 'Relate Addition and Subtraction', questions: [] },
      { id: 'ch3-l6', title_ar: 'الأعداد المفقودة', title_en: 'Missing Numbers', questions: [] },
      { id: 'ch3-l7', title_ar: 'الحقائق المترابطة', title_en: 'Related Facts', questions: [] },
    ],
  },
  {
    id: 'ch4',
    title_ar: 'الفصل الرابع: تمثيل البيانات وقراءتها',
    title_en: 'Chapter 4: Represent and Read Data',
    color: '#ec4899',
    lessons: [
      { id: 'ch4-l1', title_ar: 'جدول الإشارات', title_en: 'Tally Chart', questions: [] },
      { id: 'ch4-l2', title_ar: 'التمثيل بالصور', title_en: 'Picture Graph', questions: [] },
      { id: 'ch4-l3', title_ar: 'قراءة البيانات الممثلة بالصور', title_en: 'Read Picture Graphs', questions: [] },
      { id: 'ch4-l4', title_ar: 'أحل المسألة: أنشئ جدولًا', title_en: 'Problem Solving: Make a Table', questions: [] },
      { id: 'ch4-l5', title_ar: 'التمثيل بالأعمدة', title_en: 'Bar Graph', questions: [] },
      { id: 'ch4-l6', title_ar: 'قراءة البيانات الممثلة بالأعمدة', title_en: 'Read Bar Graphs', questions: [] },
      { id: 'ch4-l7', title_ar: 'الحدث الأكيد والحدث المستحيل', title_en: 'Certain and Impossible Events', questions: [] },
      { id: 'ch4-l8', title_ar: 'أكثر إمكانية – أقل إمكانية', title_en: 'More/Less Likely', questions: [] },
    ],
  },
  {
    id: 'ch5',
    title_ar: 'الفصل الخامس: جمع الأعداد المكونة من رقمين',
    title_en: 'Chapter 5: Adding Two-Digit Numbers',
    color: '#10b981',
    lessons: [
      { id: 'ch5-l1', title_ar: 'جمع العشرات', title_en: 'Add Tens', questions: [] },
      { id: 'ch5-l2', title_ar: 'الجمع بالعد التصاعدي', title_en: 'Count On to Add', questions: [] },
      { id: 'ch5-l3', title_ar: 'أحل المسألة: أحل عكسيًا', title_en: 'Problem Solving: Work Backward', questions: [] },
      { id: 'ch5-l4', title_ar: 'جمع عدد من رقمين إلى عدد من رقم واحد أو رقمين', title_en: 'Add 2-Digit to 1- or 2-Digit', questions: [] },
      { id: 'ch5-l5', title_ar: 'الجمع بإعادة التجميع', title_en: 'Add with Regrouping', questions: [] },
      { id: 'ch5-l6', title_ar: 'جمع عدد من رقمين إلى عدد من رقم واحد بإعادة التجميع', title_en: '2-Digit + 1-Digit with Regrouping', questions: [] },
      { id: 'ch5-l7', title_ar: 'جمع عددين مكونين من رقمين بإعادة التجميع', title_en: 'Two 2-Digit Numbers with Regrouping', questions: [] },
      { id: 'ch5-l8', title_ar: 'تقدير ناتج الجمع', title_en: 'Estimate Sums', questions: [] },
      { id: 'ch5-l9', title_ar: 'جمع ثلاثة أعداد كل منها مكون من رقمين', title_en: 'Add Three 2-Digit Numbers', questions: [] },
      { id: 'ch5-l10', title_ar: 'استقصاء حل المسألة: أختار خطة مناسبة', title_en: 'Investigate: Choose a Strategy', questions: [] },
    ],
  },
  {
    id: 'ch6',
    title_ar: 'الفصل السادس: طرح الأعداد المكونة من رقمين',
    title_en: 'Chapter 6: Subtracting Two-Digit Numbers',
    color: '#ef4444',
    lessons: [
      { id: 'ch6-l1', title_ar: 'طرح العشرات', title_en: 'Subtract Tens', questions: [] },
      { id: 'ch6-l2', title_ar: 'الطرح بالعد التنازلي', title_en: 'Count Back to Subtract', questions: [] },
      { id: 'ch6-l3', title_ar: 'الطرح بدون إعادة التجميع', title_en: 'Subtract Without Regrouping', questions: [] },
      { id: 'ch6-l4', title_ar: 'الطرح بإعادة التجميع', title_en: 'Subtract With Regrouping', questions: [] },
      { id: 'ch6-l5', title_ar: 'أحل المسألة: أكتب جملة عددية', title_en: 'Problem Solving: Write a Number Sentence', questions: [] },
      { id: 'ch6-l6', title_ar: 'طرح عدد مكون من رقم واحد من عدد مكون من رقمين', title_en: '2-Digit minus 1-Digit', questions: [] },
      { id: 'ch6-l7', title_ar: 'طرح عددين كل منهما مكون من رقمين', title_en: 'Two 2-Digit Numbers', questions: [] },
      { id: 'ch6-l8', title_ar: 'التحقق من صحة ناتج الطرح', title_en: 'Check Subtraction', questions: [] },
      { id: 'ch6-l9', title_ar: 'تقدير ناتج الطرح', title_en: 'Estimate Differences', questions: [] },
    ],
  },
];

// ===== الدرس الأول: الآحاد والعشرات =====
function LESSON_CH1_L1() {
  return [
    // 1) اختيار من متعدد — النمط: كم عشرة وكم واحدًا في العدد؟
    {
      type: 'mc',
      q_ar: 'العدد ٤٧ يحتوي على:', q_en: 'The number 47 has:',
      options_ar: ['٤ عشرات و٧ آحاد', '٧ عشرات و٤ آحاد', '٤٧ عشرة', '٤ آحاد فقط'],
      options_en: ['4 tens and 7 ones', '7 tens and 4 ones', '47 tens', '4 ones only'],
      correct: '0',
      explanation_ar: 'في ٤٧: الرقم ٤ في منزلة العشرات (٤ عشرات = ٤٠)، والرقم ٧ في منزلة الآحاد (٧ آحاد).',
      explanation_en: 'In 47: 4 is in the tens place (4 tens = 40) and 7 is in the ones place (7 ones).',
    },
    {
      type: 'mc',
      q_ar: 'العدد ٦٣ يحتوي على:', q_en: 'The number 63 has:',
      options_ar: ['٦ عشرات و٣ آحاد', '٣ عشرات و٦ آحاد', '٦٣ واحدًا', '٦ آحاد فقط'],
      options_en: ['6 tens and 3 ones', '3 tens and 6 ones', '63 ones', '6 ones only'],
      correct: '0',
      explanation_ar: 'في ٦٣: الرقم ٦ يمثل ٦ عشرات (٦٠)، والرقم ٣ يمثل ٣ آحاد.',
      explanation_en: 'In 63: 6 means 6 tens (60) and 3 means 3 ones.',
    },

    // 2) صح أم خطأ — النمط: جملة عن العشرات والآحاد
    {
      type: 'tf',
      q_ar: 'العدد ٥١ يتكون من ٥ عشرات و١ واحد.',
      q_en: 'The number 51 is made of 5 tens and 1 one.',
      options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'],
      correct: '0',
      explanation_ar: 'صحيح: ٥١ = ٥٠ + ١ = ٥ عشرات و١ واحد.',
      explanation_en: 'True: 51 = 50 + 1 = 5 tens and 1 one.',
    },
    {
      type: 'tf',
      q_ar: 'العدد ٢٠ يحتوي على ٠ عشرات.',
      q_en: 'The number 20 has 0 tens.',
      options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'],
      correct: '1',
      explanation_ar: 'خطأ: ٢٠ تحتوي على ٢ عشرات و٠ آحاد.',
      explanation_en: 'False: 20 has 2 tens and 0 ones.',
    },

    // 3) أكمل الفراغ — النمط: إكمال القيمة المنزلية
    {
      type: 'fill',
      q_ar: 'في العدد ٧٢ يوجد __ عشرة و__ واحدًا.',
      q_en: 'In 72 there are __ tens and __ ones.',
      answer_ar: '٧ عشرات و٢ آحاد',
      answer_en: '7 tens and 2 ones',
      explanation_ar: '٧٢ = ٧٠ + ٢، إذًا ٧ عشرات و٢ آحاد.',
      explanation_en: '72 = 70 + 2, so 7 tens and 2 ones.',
    },
    {
      type: 'fill',
      q_ar: 'العدد __ يحتوي على ٣ عشرات و٥ آحاد.',
      q_en: 'The number __ has 3 tens and 5 ones.',
      answer_ar: '٣٥',
      answer_en: '35',
      explanation_ar: '٣ عشرات = ٣٠، و٥ آحاد = ٥، فيكون العدد ٣٥.',
      explanation_en: '3 tens = 30 and 5 ones = 5, so the number is 35.',
    },

    // 4) أوجد الناتج — النمط: ما قيمة الرقم في العدد؟
    {
      type: 'compute',
      q_ar: 'ما قيمة الرقم ٣ في العدد ٣٦؟',
      q_en: 'What is the value of the digit 3 in 36?',
      answer_ar: '٣٠',
      answer_en: '30',
      explanation_ar: 'الرقم ٣ في منزلة العشرات، فقيمته ٣ × ١٠ = ٣٠.',
      explanation_en: '3 is in the tens place, so its value is 3 × 10 = 30.',
    },
    {
      type: 'compute',
      q_ar: 'ما قيمة الرقم ٥ في العدد ٥٢؟',
      q_en: 'What is the value of the digit 5 in 52?',
      answer_ar: '٥٠',
      answer_en: '50',
      explanation_ar: 'الرقم ٥ في منزلة العشرات، فقيمته ٥ × ١٠ = ٥٠.',
      explanation_en: '5 is in the tens place, so its value is 5 × 10 = 50.',
    },

    // 5) وصل (تفاعلي) — النمط: وصل العدد بـ(عشرات + آحاد)
    {
      type: 'match',
      q_ar: 'صل كل عدد بما يساويه من عشرات وآحاد.',
      q_en: 'Match each number to its tens and ones.',
      pairs_ar: [
        { left: '٤٦', right: '٤ عشرات و٦ آحاد' },
        { left: '٢٣', right: '٢ عشرة و٣ آحاد' },
        { left: '٧٩', right: '٧ عشرات و٩ آحاد' },
      ],
      pairs_en: [
        { left: '46', right: '4 tens and 6 ones' },
        { left: '23', right: '2 tens and 3 ones' },
        { left: '79', right: '7 tens and 9 ones' },
      ],
      explanation_ar: 'العدد من رقمين: العشرات على اليسار والآحاد على اليمين.',
      explanation_en: 'A two-digit number: tens on the left, ones on the right.',
    },
    {
      type: 'match',
      q_ar: 'صل كل عدد بما يساويه من عشرات وآحاد.',
      q_en: 'Match each number to its tens and ones.',
      pairs_ar: [
        { left: '٥٠', right: '٥ عشرات و٠ آحاد' },
        { left: '٣١', right: '٣ عشرات و١ واحد' },
        { left: '٨٢', right: '٨ عشرات و٢ آحاد' },
      ],
      pairs_en: [
        { left: '50', right: '5 tens and 0 ones' },
        { left: '31', right: '3 tens and 1 one' },
        { left: '82', right: '8 tens and 2 ones' },
      ],
      explanation_ar: 'حتى لو كان الآحاد صفرًا، تظل منزلة العشرات كما هي.',
      explanation_en: 'Even when ones are zero, the tens place stays the same.',
    },

    // 6) صنّف (تفاعلي) — النمط: صنّف العدد حسب الآحاد
    {
      type: 'classify',
      q_ar: 'صنّف الأعداد: آحادها = صفر / آحادها ≠ صفر.',
      q_en: 'Sort: ones = zero / ones ≠ zero.',
      categories_ar: ['آحادها = صفر', 'آحادها ≠ صفر'],
      categories_en: ['ones = 0', 'ones ≠ 0'],
      items_ar: [
        { item: '٤٠', correct_category: 0 },
        { item: '٢٥', correct_category: 1 },
        { item: '٣٠', correct_category: 0 },
        { item: '٦٨', correct_category: 1 },
      ],
      items_en: [
        { item: '40', correct_category: 0 },
        { item: '25', correct_category: 1 },
        { item: '30', correct_category: 0 },
        { item: '68', correct_category: 1 },
      ],
      explanation_ar: 'انظر إلى رقم الآحاد (أقصى اليمين): إن كان صفرًا فالعدد من مضاعفات العشرة.',
      explanation_en: 'Look at the ones digit (far right): if it is 0, the number is a multiple of ten.',
    },
    {
      type: 'classify',
      q_ar: 'صنّف الأعداد: رقم العشرات = ٥ / غير ذلك.',
      q_en: 'Sort: tens = 5 / other.',
      categories_ar: ['رقم العشرات = ٥', 'غير ذلك'],
      categories_en: ['tens = 5', 'other'],
      items_ar: [
        { item: '٥٢', correct_category: 0 },
        { item: '٣٥', correct_category: 0 },
        { item: '٢٨', correct_category: 1 },
        { item: '١٧', correct_category: 1 },
      ],
      items_en: [
        { item: '52', correct_category: 0 },
        { item: '35', correct_category: 0 },
        { item: '28', correct_category: 1 },
        { item: '17', correct_category: 1 },
      ],
      explanation_ar: 'رقم العشرات هو الرقم الأيسر في العدد من رقمين.',
      explanation_en: 'The tens digit is the left digit in a two-digit number.',
    },

    // 7) رتّب (تفاعلي) — النمط: رتّب حسب عدد العشرات تصاعديًا
    {
      type: 'order',
      q_ar: 'رتّب الأعداد تصاعديًا حسب عدد العشرات.',
      q_en: 'Order the numbers ascending by tens.',
      order_ar: ['٢٤', '٣٥', '٤٦', '٥٧'],
      order_en: ['24', '35', '46', '57'],
      explanation_ar: '٢٤ (٢ عشرات) ثم ٣٥ (٣ عشرات) ثم ٤٦ (٤ عشرات) ثم ٥٧ (٥ عشرات).',
      explanation_en: '24 (2 tens), then 35 (3 tens), then 46 (4 tens), then 57 (5 tens).',
    },
    {
      type: 'order',
      q_ar: 'رتّب الأعداد تصاعديًا حسب عدد العشرات.',
      q_en: 'Order the numbers ascending by tens.',
      order_ar: ['١٢', '٢٣', '٣٤', '٤٥'],
      order_en: ['12', '23', '34', '45'],
      explanation_ar: '١٢ (١ عشرة) ← ٢٣ (٢ عشرات) ← ٣٤ (٣ عشرات) ← ٤٥ (٤ عشرات).',
      explanation_en: '12 (1 ten) → 23 (2 tens) → 34 (3 tens) → 45 (4 tens).',
    },

    // 8) مسألة حياتية — النمط: تجميع عشرات + آحاد
    {
      type: 'word',
      q_ar: 'مع خالد ٤ حزم، كل حزمة فيها ١٠ أقلام، ومعه ٣ أقلام مفردة. كم قلمًا مع خالد؟',
      q_en: 'Khalid has 4 bundles of 10 pens each and 3 single pens. How many pens does he have?',
      answer_ar: '٤٣ قلمًا',
      answer_en: '43 pens',
      explanation_ar: '٤ عشرات = ٤٠، و٣ آحاد = ٣، المجموع ٤٣.',
      explanation_en: '4 tens = 40 and 3 ones = 3, total 43.',
    },
    {
      type: 'word',
      q_ar: 'مع نورة حزمتان كل حزمة فيها ١٠ كتب، وعلى الطاولة ٦ كتب مفردة. كم كتابًا مع نورة؟',
      q_en: 'Noura has 2 bundles of 10 books each and 6 single books on the table. How many books does she have?',
      answer_ar: '٢٦ كتابًا',
      answer_en: '26 books',
      explanation_ar: '٢ عشرات = ٢٠، و٦ آحاد = ٦، المجموع ٢٦.',
      explanation_en: '2 tens = 20 and 6 ones = 6, total 26.',
    },
  ];
}

// ===== الفصل الأول — الدروس ٢ إلى ٩ =====

// الدرس الثاني: القيمة المنزلية للأعداد حتى ١٠٠
function LESSON_CH1_L2() {
  return [
    { type: 'mc', q_ar: 'ما القيمة المنزلية للرقم ٣ في العدد ٣٦؟', q_en: 'What place is the digit 3 in 36?', options_ar: ['العشرات', 'الآحاد', 'المئات', 'الآلاف'], options_en: ['Tens', 'Ones', 'Hundreds', 'Thousands'], correct: '0', explanation_ar: 'الرقم ٣ على اليسار في منزلة العشرات.', explanation_en: 'The 3 on the left is in the tens place.' },
    { type: 'mc', q_ar: 'ما القيمة المنزلية للرقم ٨ في العدد ٨١؟', q_en: 'What place is the digit 8 in 81?', options_ar: ['العشرات', 'الآحاد', 'المئات', 'الآلاف'], options_en: ['Tens', 'Ones', 'Hundreds', 'Thousands'], correct: '0', explanation_ar: 'الرقم ٨ على اليسار في منزلة العشرات.', explanation_en: 'The 8 on the left is in the tens place.' },
    { type: 'tf', q_ar: 'في العدد ٢٧، الرقم ٧ يمثل ٧ عشرات.', q_en: 'In 27, the digit 7 means 7 tens.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '1', explanation_ar: 'الرقم ٧ في منزلة الآحاد أي ٧ آحاد لا ٧ عشرات.', explanation_en: '7 is in the ones place, meaning 7 ones not 7 tens.' },
    { type: 'tf', q_ar: 'في العدد ٤٥، الرقم ٤ يمثل ٤ عشرات.', q_en: 'In 45, the digit 4 means 4 tens.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '0', explanation_ar: 'الرقم ٤ في منزلة العشرات = ٤ × ١٠ = ٤٠.', explanation_en: '4 is in the tens place = 4 × 10 = 40.' },
    { type: 'fill', q_ar: 'العدد ٥٣ = __ + __ (عشرات + آحاد).', q_en: '53 = __ + __ (tens + ones).', answer_ar: '٥٠ + ٣', answer_en: '50 + 3', explanation_ar: '٥ عشرات = ٥٠، و٣ آحاد = ٣.', explanation_en: '5 tens = 50 and 3 ones = 3.' },
    { type: 'fill', q_ar: 'العدد __ = ٦٠ + ٨.', q_en: '__ = 60 + 8.', answer_ar: '٦٨', answer_en: '68', explanation_ar: '٦ عشرات (٦٠) + ٨ آحاد = ٦٨.', explanation_en: '6 tens (60) + 8 ones = 68.' },
    { type: 'compute', q_ar: '٤ عشرات + ٢ آحاد = ؟', q_en: '4 tens + 2 ones = ?', answer_ar: '٤٢', answer_en: '42', explanation_ar: '٤٠ + ٢ = ٤٢.', explanation_en: '40 + 2 = 42.' },
    { type: 'compute', q_ar: '٧ عشرات + ٠ آحاد = ؟', q_en: '7 tens + 0 ones = ?', answer_ar: '٧٠', answer_en: '70', explanation_ar: '٧ × ١٠ = ٧٠.', explanation_en: '7 × 10 = 70.' },
    { type: 'match', q_ar: 'صل كل عدد بصورته التحليلية.', q_en: 'Match each number to its expanded form.', pairs_ar: [{ left: '٣٦', right: '٣٠ + ٣' }, { left: '٥٢', right: '٥٠ + ٢' }, { left: '٨٤', right: '٨٠ + ٤' }], pairs_en: [{ left: '36', right: '30 + 3' }, { left: '52', right: '50 + 2' }, { left: '84', right: '80 + 4' }], explanation_ar: 'العدد = عشرات × ١٠ + آحاد.', explanation_en: 'Number = tens × 10 + ones.' },
    { type: 'match', q_ar: 'صل كل عدد بصورته التحليلية.', q_en: 'Match each number to its expanded form.', pairs_ar: [{ left: '٢٠', right: '٢٠ + ٠' }, { left: '٤٧', right: '٤٠ + ٧' }, { left: '٦٩', right: '٦٠ + ٩' }], pairs_en: [{ left: '20', right: '20 + 0' }, { left: '47', right: '40 + 7' }, { left: '69', right: '60 + 9' }], explanation_ar: 'حتى لو كان الآحاد صفرًا تبقى الصورة صحيحة.', explanation_en: 'Even with zero ones the form is correct.' },
    { type: 'classify', q_ar: 'صنّف: رقم العشرات = ٥ / غير ذلك.', q_en: 'Sort: tens digit = 5 / other.', categories_ar: ['رقم العشرات ٥', 'غير ذلك'], categories_en: ['tens = 5', 'other'], items_ar: [{ item: '٥٢', correct_category: 0 }, { item: '٣٥', correct_category: 0 }, { item: '٢٨', correct_category: 1 }, { item: '١٧', correct_category: 1 }], items_en: [{ item: '52', correct_category: 0 }, { item: '35', correct_category: 0 }, { item: '28', correct_category: 1 }, { item: '17', correct_category: 1 }], explanation_ar: 'انظر إلى الرقم الأيسر لمعرفة العشرات.', explanation_en: 'Look at the left digit for tens.' },
    { type: 'classify', q_ar: 'صنّف: رقم الآحاد = ٣ / غير ذلك.', q_en: 'Sort: ones digit = 3 / other.', categories_ar: ['رقم الآحاد ٣', 'غير ذلك'], categories_en: ['ones = 3', 'other'], items_ar: [{ item: '١٣', correct_category: 0 }, { item: '٢٣', correct_category: 0 }, { item: '٤٥', correct_category: 1 }, { item: '٦٧', correct_category: 1 }], items_en: [{ item: '13', correct_category: 0 }, { item: '23', correct_category: 0 }, { item: '45', correct_category: 1 }, { item: '67', correct_category: 1 }], explanation_ar: 'انظر إلى الرقم الأيمن لمعرفة الآحاد.', explanation_en: 'Look at the right digit for ones.' },
    { type: 'order', q_ar: 'رتّب تصاعديًا حسب القيمة.', q_en: 'Order ascending by value.', order_ar: ['٢٥', '٣٤', '٤٢', '٥١'], order_en: ['25', '34', '42', '51'], explanation_ar: '٢٥ < ٣٤ < ٤٢ < ٥١.', explanation_en: '25 < 34 < 42 < 51.' },
    { type: 'order', q_ar: 'رتّب تصاعديًا حسب القيمة.', q_en: 'Order ascending by value.', order_ar: ['١٦', '٢٨', '٣٧', '٤٩'], order_en: ['16', '28', '37', '49'], explanation_ar: '١٦ < ٢٨ < ٣٧ < ٤٩.', explanation_en: '16 < 28 < 37 < 49.' },
    { type: 'word', q_ar: 'مع فهد ٥ عشرات ريالات و٤ ريالات مفردة. كم ريالًا معه؟', q_en: 'Fahd has 5 tens of riyals and 4 single riyals. How many?', answer_ar: '٥٤ ريالًا', answer_en: '54 riyals', explanation_ar: '٥٠ + ٤ = ٥٤.', explanation_en: '50 + 4 = 54.' },
    { type: 'word', q_ar: 'مع سلمى ٦ عشرات ريالات و٧ ريالات مفردة. كم ريالًا معها؟', q_en: 'Salma has 6 tens and 7 single riyals. How many?', answer_ar: '٦٧ ريالًا', answer_en: '67 riyals', explanation_ar: '٦٠ + ٧ = ٦٧.', explanation_en: '60 + 7 = 67.' },
  ];
}

// الدرس الثالث: أحل المسألة — الاستدلال المنطقي
function LESSON_CH1_L3() {
  return [
    { type: 'mc', q_ar: 'عدد آحاده ٤ وعشراته ٦. ما العدد؟', q_en: 'A number has 4 ones and 6 tens. What is it?', options_ar: ['٦٤', '٤٦', '٦٠', '٤٠'], options_en: ['64', '46', '60', '40'], correct: '0', explanation_ar: '٦ عشرات = ٦٠، و٤ آحاد = ٤، المجموع ٦٤.', explanation_en: '6 tens = 60 and 4 ones = 4, total 64.' },
    { type: 'mc', q_ar: 'عدد عشراته ٣ وآحاده ٩. ما العدد؟', q_en: 'A number has 3 tens and 9 ones. What is it?', options_ar: ['٣٩', '٩٣', '٣٠', '٩٠'], options_en: ['39', '93', '30', '90'], correct: '0', explanation_ar: '٣٠ + ٩ = ٣٩.', explanation_en: '30 + 9 = 39.' },
    { type: 'tf', q_ar: 'إذا كان العدد بين ٢٠ و٣٠ وآحاده ٥ فهو ٢٥.', q_en: 'If a number is between 20 and 30 and its ones digit is 5, it is 25.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '0', explanation_ar: 'العدد الوحيد في هذا المجال بآحاد ٥ هو ٢٥.', explanation_en: 'The only number in this range with ones 5 is 25.' },
    { type: 'tf', q_ar: 'عدد عشراته ٧ وآحاده ١ هو ١٧.', q_en: 'A number with 7 tens and 1 one is 17.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '1', explanation_ar: 'خطأ: ٧ عشرات و١ واحد = ٧١ لا ١٧.', explanation_en: 'False: 7 tens and 1 one = 71, not 17.' },
    { type: 'fill', q_ar: 'عدد آحاده ٨ وعشراته ٢ هو __.', q_en: 'A number with 8 ones and 2 tens is __.', answer_ar: '٢٨', answer_en: '28', explanation_ar: '٢٠ + ٨ = ٢٨.', explanation_en: '20 + 8 = 28.' },
    { type: 'fill', q_ar: 'عدد بين ٤٠ و٥٠ وآحاده ٣ هو __.', q_en: 'A number between 40 and 50 with ones 3 is __.', answer_ar: '٤٣', answer_en: '43', explanation_ar: 'العدد في هذا المجال بآحاد ٣ هو ٤٣.', explanation_en: 'The number in this range with ones 3 is 43.' },
    { type: 'compute', q_ar: 'ما العدد الذي يسبق ٦٠ مباشرة؟', q_en: 'What number comes just before 60?', answer_ar: '٥٩', answer_en: '59', explanation_ar: 'السابق لـ٦٠ هو ٥٩.', explanation_en: 'The predecessor of 60 is 59.' },
    { type: 'compute', q_ar: 'ما العدد الذي يلي ٧٩ مباشرة؟', q_en: 'What number comes just after 79?', answer_ar: '٨٠', answer_en: '80', explanation_ar: 'اللاحق لـ٧٩ هو ٨٠.', explanation_en: 'The successor of 79 is 80.' },
    { type: 'match', q_ar: 'صل كل تلميح بالعدد الصحيح.', q_en: 'Match each clue to its number.', pairs_ar: [{ left: 'آحاده ٤ وعشراته ٦', right: '٦٤' }, { left: 'عشراته ٢ وآحاده ٧', right: '٢٧' }, { left: 'آحاده ٠ وعشراته ٥', right: '٥٠' }], pairs_en: [{ left: '4 ones, 6 tens', right: '64' }, { left: '2 tens, 7 ones', right: '27' }, { left: '0 ones, 5 tens', right: '50' }], explanation_ar: 'اجمع العشرات (×١٠) مع الآحاد.', explanation_en: 'Add tens (×10) to ones.' },
    { type: 'match', q_ar: 'صل كل تلميح بالعدد الصحيح.', q_en: 'Match each clue to its number.', pairs_ar: [{ left: 'بين ٣٠ و٤٠ وآحاده ٥', right: '٣٥' }, { left: 'يسبق ٢٠', right: '١٩' }, { left: 'يلي ٤١', right: '٤٢' }], pairs_en: [{ left: 'between 30 and 40, ones 5', right: '35' }, { left: 'before 20', right: '19' }, { left: 'after 41', right: '42' }], explanation_ar: 'استعمل التلميحات لتحديد العدد بدقة.', explanation_en: 'Use clues to pin down the number.' },
    { type: 'classify', q_ar: 'صنّف: أكبر من ٥٠ / أصغر من ٥٠.', q_en: 'Sort: greater than 50 / less than 50.', categories_ar: ['أكبر من ٥٠', 'أصغر من ٥٠'], categories_en: ['> 50', '< 50'], items_ar: [{ item: '٤٨', correct_category: 1 }, { item: '٥٢', correct_category: 0 }, { item: '٣٦', correct_category: 1 }, { item: '٧١', correct_category: 0 }], items_en: [{ item: '48', correct_category: 1 }, { item: '52', correct_category: 0 }, { item: '36', correct_category: 1 }, { item: '71', correct_category: 0 }], explanation_ar: 'قارن بالـ٥٠: ما يزيد عنه أكبر.', explanation_en: 'Compare to 50: above is greater.' },
    { type: 'classify', q_ar: 'صنّف: بين ٢٠ و٣٠ / بين ٦٠ و٧٠.', q_en: 'Sort: between 20–30 / between 60–70.', categories_ar: ['بين ٢٠ و٣٠', 'بين ٦٠ و٧٠'], categories_en: ['20–30', '60–70'], items_ar: [{ item: '٢٥', correct_category: 0 }, { item: '٦٤', correct_category: 1 }, { item: '٢٨', correct_category: 0 }, { item: '٦٨', correct_category: 1 }], items_en: [{ item: '25', correct_category: 0 }, { item: '64', correct_category: 1 }, { item: '28', correct_category: 0 }, { item: '68', correct_category: 1 }], explanation_ar: 'انظر إلى العشرات لتحديد المجال.', explanation_en: 'Check the tens to find the range.' },
    { type: 'order', q_ar: 'رتّب من الأصغر إلى الأكبر.', q_en: 'Order from least to greatest.', order_ar: ['٢٣', '٣٢', '٤١', '٥٠'], order_en: ['23', '32', '41', '50'], explanation_ar: '٢٣ < ٣٢ < ٤١ < ٥٠.', explanation_en: '23 < 32 < 41 < 50.' },
    { type: 'order', q_ar: 'رتّب من الأصغر إلى الأكبر.', q_en: 'Order from least to greatest.', order_ar: ['١٩', '٢٨', '٨٢', '٩١'], order_en: ['19', '28', '82', '91'], explanation_ar: '١٩ < ٢٨ < ٨٢ < ٩١.', explanation_en: '19 < 28 < 82 < 91.' },
    { type: 'word', q_ar: 'عدد آحاده أكبر من عشراته بمقدار ٢، وعشراته ٤. ما العدد؟', q_en: 'A number whose ones exceed its tens by 2, and its tens are 4. What is it?', answer_ar: '٤٦', answer_en: '46', explanation_ar: 'العشرات ٤، والآحاد = ٤ + ٢ = ٦، فالعدد ٤٦.', explanation_en: 'Tens 4, ones = 4 + 2 = 6, so 46.' },
    { type: 'word', q_ar: 'عدد عشراته ضعف آحاده، وآحاده ٣. ما العدد؟', q_en: 'A number whose tens are double its ones, and its ones are 3. What is it?', answer_ar: '٦٣', answer_en: '63', explanation_ar: 'الآحاد ٣، فالعشرات = ٢ × ٣ = ٦، العدد ٦٣.', explanation_en: 'Ones 3, tens = 2 × 3 = 6, so 63.' },
  ];
}

// الدرس الرابع: قراءة الأعداد وكتابتها
function LESSON_CH1_L4() {
  return [
    { type: 'mc', q_ar: 'العدد ٤٢ يُكتب بالكلمات:', q_en: 'The number 42 in words:', options_ar: ['اثنان وأربعون', 'أربعة وعشرون', 'أربعون', 'اثنان'], options_en: ['forty-two', 'twenty-four', 'forty', 'two'], correct: '0', explanation_ar: '٤٢ = أربعون + اثنان = «اثنان وأربعون».', explanation_en: '42 = forty + two.' },
    { type: 'mc', q_ar: 'العدد ٥٧ يُكتب بالكلمات:', q_en: 'The number 57 in words:', options_ar: ['سبعة وخمسون', 'خمسة وسبعون', 'خمسون', 'سبعة'], options_en: ['fifty-seven', 'seventy-five', 'fifty', 'seven'], correct: '0', explanation_ar: '٥٧ = خمسون + سبعة = «سبعة وخمسون».', explanation_en: '57 = fifty + seven.' },
    { type: 'tf', q_ar: 'العدد ٣٠ يُكتب «ثلاثون».', q_en: 'The number 30 is written "thirty".', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '0', explanation_ar: '٣٠ = ثلاث عشرات = «ثلاثون».', explanation_en: '30 = three tens = "thirty".' },
    { type: 'tf', q_ar: 'العدد ١٥ يُكتب «خمسة وعشرون».', q_en: 'The number 15 is written "twenty-five".', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '1', explanation_ar: 'خطأ: ١٥ = «خمسة عشر».', explanation_en: 'False: 15 = "fifteen".' },
    { type: 'fill', q_ar: 'العدد __ يُكتب «ثمانية وأربعون».', q_en: 'The number __ is written "forty-eight".', answer_ar: '٤٨', answer_en: '48', explanation_ar: 'ثمانية وأربعون = ٤٨.', explanation_en: 'forty-eight = 48.' },
    { type: 'fill', q_ar: '«تسعة وستون» تُكتب بالأرقام: __.', q_en: '"sixty-nine" in digits: __.', answer_ar: '٦٩', answer_en: '69', explanation_ar: 'تسعة وستون = ٦٠ + ٩ = ٦٩.', explanation_en: 'sixty-nine = 60 + 9 = 69.' },
    { type: 'compute', q_ar: 'اكتب بالأرقام: سبعة وثلاثون.', q_en: 'Write in digits: thirty-seven.', answer_ar: '٣٧', answer_en: '37', explanation_ar: 'سبعة وثلاثون = ٣٠ + ٧ = ٣٧.', explanation_en: 'thirty-seven = 37.' },
    { type: 'compute', q_ar: 'اكتب بالأرقام: خمسة وستون.', q_en: 'Write in digits: sixty-five.', answer_ar: '٦٥', answer_en: '65', explanation_ar: 'خمسة وستون = ٦٠ + ٥ = ٦٥.', explanation_en: 'sixty-five = 65.' },
    { type: 'match', q_ar: 'صل كل عدد بكتابته بالكلمات.', q_en: 'Match each number to its word form.', pairs_ar: [{ left: '٤٢', right: 'اثنان وأربعون' }, { left: '٥٧', right: 'سبعة وخمسون' }, { left: '٨٠', right: 'ثمانون' }], pairs_en: [{ left: '42', right: 'forty-two' }, { left: '57', right: 'fifty-seven' }, { left: '80', right: 'eighty' }], explanation_ar: 'اكتب العشرات ثم الآحاد مع واو العطف.', explanation_en: 'Write tens then ones with "and".' },
    { type: 'match', q_ar: 'صل كل عدد بكتابته بالكلمات.', q_en: 'Match each number to its word form.', pairs_ar: [{ left: '١٦', right: 'ستة عشر' }, { left: '٢٣', right: 'ثلاثة وعشرون' }, { left: '٩١', right: 'واحد وتسعون' }], pairs_en: [{ left: '16', right: 'sixteen' }, { left: '23', right: 'twenty-three' }, { left: '91', right: 'ninety-one' }], explanation_ar: 'الأعداد من ١١ إلى ١٩ تُكتب بكلمة واحدة مركبة.', explanation_en: 'Numbers 11–19 are written as one compound word.' },
    { type: 'classify', q_ar: 'صنّف: يُكتب بكلمة واحدة / بكلمتين.', q_en: 'Sort: one word / two words.', categories_ar: ['بكلمة واحدة', 'بكلمتين'], categories_en: ['one word', 'two words'], items_ar: [{ item: '٣٠', correct_category: 0 }, { item: '٤٢', correct_category: 1 }, { item: '١٥', correct_category: 0 }, { item: '٨٠', correct_category: 0 }], items_en: [{ item: '30', correct_category: 0 }, { item: '42', correct_category: 1 }, { item: '15', correct_category: 0 }, { item: '80', correct_category: 0 }], explanation_ar: 'مضاعفات العشرة تُكتب بكلمة واحدة.', explanation_en: 'Multiples of ten are one word.' },
    { type: 'classify', q_ar: 'صنّف: يحوي كلمة «عشر/عشرة» / لا يحويها.', q_en: 'Sort: contains "ten" / does not.', categories_ar: ['يحوي «عشر»', 'لا يحويها'], categories_en: ['has "ten"', 'no "ten"'], items_ar: [{ item: '١٧', correct_category: 0 }, { item: '٢٥', correct_category: 1 }, { item: '١٣', correct_category: 0 }, { item: '٤٨', correct_category: 1 }], items_en: [{ item: '17', correct_category: 0 }, { item: '25', correct_category: 1 }, { item: '13', correct_category: 0 }, { item: '48', correct_category: 1 }], explanation_ar: 'الأعداد ١١–١٩ تحوي كلمة «عشر».', explanation_en: 'Numbers 11–19 contain "ten".' },
    { type: 'order', q_ar: 'رتّب تصاعديًا.', q_en: 'Order ascending.', order_ar: ['٢٠', '٣٠', '٤٠', '٥٠'], order_en: ['20', '30', '40', '50'], explanation_ar: '٢٠ < ٣٠ < ٤٠ < ٥٠.', explanation_en: '20 < 30 < 40 < 50.' },
    { type: 'order', q_ar: 'رتّب تصاعديًا.', q_en: 'Order ascending.', order_ar: ['١٢', '٢٢', '٣٢', '٤٢'], order_en: ['12', '22', '32', '42'], explanation_ar: '١٢ < ٢٢ < ٣٢ < ٤٢.', explanation_en: '12 < 22 < 32 < 42.' },
    { type: 'word', q_ar: 'اكتب بالكلمات: ٥٣.', q_en: 'Write in words: 53.', answer_ar: 'ثلاثة وخمسون', answer_en: 'fifty-three', explanation_ar: '٥٣ = خمسون + ثلاثة.', explanation_en: '53 = fifty + three.' },
    { type: 'word', q_ar: 'اكتب بالكلمات: ٦٨.', q_en: 'Write in words: 68.', answer_ar: 'ثمانية وستون', answer_en: 'sixty-eight', explanation_ar: '٦٨ = ستون + ثمانية.', explanation_en: '68 = sixty + eight.' },
  ];
}

// الدرس الخامس: تقدير الكميات
function LESSON_CH1_L5() {
  return [
    { type: 'mc', q_ar: 'مجموعة فيها ٢٨ عنصرًا، تقريبًا هي:', q_en: 'A group has 28 items, about:', options_ar: ['٣٠', '٢٠', '٥٠', '١٠'], options_en: ['30', '20', '50', '10'], correct: '0', explanation_ar: '٢٨ أقرب إلى ٣٠ (أقرب عشرة).', explanation_en: '28 is closer to 30.' },
    { type: 'mc', q_ar: 'مجموعة فيها ٤٣ عنصرًا، تقريبًا هي:', q_en: 'A group has 43 items, about:', options_ar: ['٤٠', '٥٠', '٣٠', '١٠'], options_en: ['40', '50', '30', '10'], correct: '0', explanation_ar: '٤٣ أقرب إلى ٤٠.', explanation_en: '43 is closer to 40.' },
    { type: 'tf', q_ar: '٢٩ أقرب إلى ٣٠ منها إلى ٢٠.', q_en: '29 is closer to 30 than to 20.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '0', explanation_ar: '٢٩ يبعد ١ عن ٣٠ و٩ عن ٢٠.', explanation_en: '29 is 1 from 30 and 9 from 20.' },
    { type: 'tf', q_ar: '٤٤ أقرب إلى ٥٠ منها إلى ٤٠.', q_en: '44 is closer to 50 than to 40.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '1', explanation_ar: 'خطأ: ٤٤ أقرب إلى ٤٠ (يبعد ٤) عن ٥٠ (يبعد ٦).', explanation_en: 'False: 44 is closer to 40.' },
    { type: 'fill', q_ar: '٣٢ أقرب تقريبًا إلى __ (أقرب عشرة).', q_en: '32 is about __ (nearest ten).', answer_ar: '٣٠', answer_en: '30', explanation_ar: 'آحاد ٢ < ٥ فتُقرّب إلى الأسفل ٣٠.', explanation_en: 'Ones 2 < 5, round down to 30.' },
    { type: 'fill', q_ar: '٤٨ أقرب تقريبًا إلى __.', q_en: '48 is about __.', answer_ar: '٥٠', answer_en: '50', explanation_ar: 'آحاد ٨ ≥ ٥ فتُقرّب إلى الأعلى ٥٠.', explanation_en: 'Ones 8 ≥ 5, round up to 50.' },
    { type: 'compute', q_ar: 'قدّر عدد العناصر: ٢١ ≈ ؟', q_en: 'Estimate: 21 ≈ ?', answer_ar: '٢٠', answer_en: '20', explanation_ar: '٢١ أقرب إلى ٢٠.', explanation_en: '21 is closer to 20.' },
    { type: 'compute', q_ar: 'قدّر عدد العناصر: ٧٧ ≈ ؟', q_en: 'Estimate: 77 ≈ ?', answer_ar: '٨٠', answer_en: '80', explanation_ar: '٧٧ أقرب إلى ٨٠.', explanation_en: '77 is closer to 80.' },
    { type: 'match', q_ar: 'صل كل عدد بتقديره (أقرب عشرة).', q_en: 'Match each number to its estimate.', pairs_ar: [{ left: '٢٢', right: 'حوالي ٢٠' }, { left: '٤٨', right: 'حوالي ٥٠' }, { left: '٣١', right: 'حوالي ٣٠' }], pairs_en: [{ left: '22', right: 'about 20' }, { left: '48', right: 'about 50' }, { left: '31', right: 'about 30' }], explanation_ar: 'انظر إلى رقم الآحاد لتقريب العدد.', explanation_en: 'Use the ones digit to round.' },
    { type: 'match', q_ar: 'صل كل عدد بتقديره.', q_en: 'Match each number to its estimate.', pairs_ar: [{ left: '١٩', right: 'حوالي ٢٠' }, { left: '٥٦', right: 'حوالي ٦٠' }, { left: '٦٤', right: 'حوالي ٦٠' }], pairs_en: [{ left: '19', right: 'about 20' }, { left: '56', right: 'about 60' }, { left: '64', right: 'about 60' }], explanation_ar: '٦٤ أقرب إلى ٦٠ (يبعد ٤) عن ٧٠ (يبعد ٦).', explanation_en: '64 is closer to 60 than to 70.' },
    { type: 'classify', q_ar: 'صنّف: أقرب إلى ٣٠ / أقرب إلى ٤٠.', q_en: 'Sort: closer to 30 / closer to 40.', categories_ar: ['أقرب إلى ٣٠', 'أقرب إلى ٤٠'], categories_en: ['closer to 30', 'closer to 40'], items_ar: [{ item: '٢٨', correct_category: 0 }, { item: '٣٢', correct_category: 0 }, { item: '٣٨', correct_category: 1 }, { item: '٤٢', correct_category: 1 }], items_en: [{ item: '28', correct_category: 0 }, { item: '32', correct_category: 0 }, { item: '38', correct_category: 1 }, { item: '42', correct_category: 1 }], explanation_ar: 'قارن بعد العدد عن ٣٠ وعن ٤٠.', explanation_en: 'Compare distance to 30 and 40.' },
    { type: 'classify', q_ar: 'صنّف: أقرب إلى ٢٠ / أقرب إلى ٥٠.', q_en: 'Sort: closer to 20 / closer to 50.', categories_ar: ['أقرب إلى ٢٠', 'أقرب إلى ٥٠'], categories_en: ['closer to 20', 'closer to 50'], items_ar: [{ item: '٢٣', correct_category: 0 }, { item: '١٨', correct_category: 0 }, { item: '٤٧', correct_category: 1 }, { item: '٥٢', correct_category: 1 }], items_en: [{ item: '23', correct_category: 0 }, { item: '18', correct_category: 0 }, { item: '47', correct_category: 1 }, { item: '52', correct_category: 1 }], explanation_ar: 'كل عدد يُقرّب لأقرب عشرة منه.', explanation_en: 'Each rounds to its nearest ten.' },
    { type: 'order', q_ar: 'رتّب التقديرات تصاعديًا.', q_en: 'Order the estimates ascending.', order_ar: ['٢٠', '٤٠', '٦٠', '٨٠'], order_en: ['20', '40', '60', '80'], explanation_ar: '٢٠ < ٤٠ < ٦٠ < ٨٠.', explanation_en: '20 < 40 < 60 < 80.' },
    { type: 'order', q_ar: 'رتّب التقديرات تصاعديًا.', q_en: 'Order the estimates ascending.', order_ar: ['١٠', '٣٠', '٥٠', '٧٠'], order_en: ['10', '30', '50', '70'], explanation_ar: '١٠ < ٣٠ < ٥٠ < ٧٠.', explanation_en: '10 < 30 < 50 < 70.' },
    { type: 'word', q_ar: 'في صف ٢٩ طالبًا. قدّر العدد إلى أقرب عشرة.', q_en: 'A class has 29 students. Estimate to the nearest ten.', answer_ar: '٣٠', answer_en: '30', explanation_ar: '٢٩ أقرب إلى ٣٠.', explanation_en: '29 is closer to 30.' },
    { type: 'word', q_ar: 'في سلة ٤٢ تفاحة. قدّر إلى أقرب عشرة.', q_en: 'A basket has 42 apples. Estimate to the nearest ten.', answer_ar: '٤٠', answer_en: '40', explanation_ar: '٤٢ أقرب إلى ٤٠.', explanation_en: '42 is closer to 40.' },
  ];
}

// الدرس السادس: ترتيب الأعداد
function LESSON_CH1_L6() {
  return [
    { type: 'mc', q_ar: 'العدد الذي يأتي بعد ٥٧ هو:', q_en: 'The number after 57 is:', options_ar: ['٥٨', '٥٦', '٦٧', '٤٨'], options_en: ['58', '56', '67', '48'], correct: '0', explanation_ar: 'اللاحق لـ٥٧ هو ٥٨.', explanation_en: 'The successor of 57 is 58.' },
    { type: 'mc', q_ar: 'العدد الذي يأتي قبل ٤٠ هو:', q_en: 'The number before 40 is:', options_ar: ['٣٩', '٤١', '٣٠', '٤٩'], options_en: ['39', '41', '30', '49'], correct: '0', explanation_ar: 'السابق لـ٤٠ هو ٣٩.', explanation_en: 'The predecessor of 40 is 39.' },
    { type: 'tf', q_ar: '٣٤ يأتي قبل ٣٥.', q_en: '34 comes before 35.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '0', explanation_ar: '٣٤ < ٣٥.', explanation_en: '34 < 35.' },
    { type: 'tf', q_ar: '٥٠ يأتي بعد ٦٠.', q_en: '50 comes after 60.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '1', explanation_ar: 'خطأ: ٥٠ < ٦٠، فـ٥٠ قبل ٦٠.', explanation_en: 'False: 50 < 60.' },
    { type: 'fill', q_ar: 'العدد الذي بين ٢٦ و٢٨ هو __.', q_en: 'The number between 26 and 28 is __.', answer_ar: '٢٧', answer_en: '27', explanation_ar: '٢٦،٢٧،٢٨.', explanation_en: '26, 27, 28.' },
    { type: 'fill', q_ar: 'يأتي بعد ٦٩ مباشرة __.', q_en: 'After 69 comes __.', answer_ar: '٧٠', answer_en: '70', explanation_ar: '٦٩ ثم ٧٠.', explanation_en: '69 then 70.' },
    { type: 'compute', q_ar: 'ما العدد الأكبر بين ٤٥ و٥٤؟', q_en: 'Which is greater: 45 or 54?', answer_ar: '٥٤', answer_en: '54', explanation_ar: '٥٤ > ٤٥.', explanation_en: '54 > 45.' },
    { type: 'compute', q_ar: 'ما العدد الأصغر بين ٣٨ و٨٣؟', q_en: 'Which is smaller: 38 or 83?', answer_ar: '٣٨', answer_en: '38', explanation_ar: '٣٨ < ٨٣.', explanation_en: '38 < 83.' },
    { type: 'match', q_ar: 'صل كل تلميح بالعدد.', q_en: 'Match each clue to its number.', pairs_ar: [{ left: 'قبل ٤٠', right: '٣٩' }, { left: 'بعد ٤١', right: '٤٢' }, { left: 'بين ٥٠ و٥٢', right: '٥١' }], pairs_en: [{ left: 'before 40', right: '39' }, { left: 'after 41', right: '42' }, { left: 'between 50 and 52', right: '51' }], explanation_ar: 'السابق = العدد − ١، اللاحق = العدد + ١.', explanation_en: 'Predecessor −1, successor +1.' },
    { type: 'match', q_ar: 'صل كل تلميح بالعدد.', q_en: 'Match each clue to its number.', pairs_ar: [{ left: 'السابق لـ٦٠', right: '٥٩' }, { left: 'اللاحق لـ٧٢', right: '٧٣' }, { left: 'بين ٨٠ و٨٢', right: '٨١' }], pairs_en: [{ left: 'before 60', right: '59' }, { left: 'after 72', right: '73' }, { left: 'between 80 and 82', right: '81' }], explanation_ar: 'استعمل العد لتحدد السابق واللاحق.', explanation_en: 'Count to find before/after.' },
    { type: 'classify', q_ar: 'صنّف: يأتي قبل ٥٠ / يأتي بعد ٥٠.', q_en: 'Sort: before 50 / after 50.', categories_ar: ['قبل ٥٠', 'بعد ٥٠'], categories_en: ['before 50', 'after 50'], items_ar: [{ item: '٤٨', correct_category: 0 }, { item: '٥٢', correct_category: 1 }, { item: '٤٦', correct_category: 0 }, { item: '٥٥', correct_category: 1 }], items_en: [{ item: '48', correct_category: 0 }, { item: '52', correct_category: 1 }, { item: '46', correct_category: 0 }, { item: '55', correct_category: 1 }], explanation_ar: 'قارن بالـ٥٠.', explanation_en: 'Compare to 50.' },
    { type: 'classify', q_ar: 'صنّف: بين ٢٠ و٣٠ / بين ٧٠ و٨٠.', q_en: 'Sort: 20–30 / 70–80.', categories_ar: ['بين ٢٠ و٣٠', 'بين ٧٠ و٨٠'], categories_en: ['20–30', '70–80'], items_ar: [{ item: '٢٥', correct_category: 0 }, { item: '٢٨', correct_category: 0 }, { item: '٧٤', correct_category: 1 }, { item: '٧٨', correct_category: 1 }], items_en: [{ item: '25', correct_category: 0 }, { item: '28', correct_category: 0 }, { item: '74', correct_category: 1 }, { item: '78', correct_category: 1 }], explanation_ar: 'انظر إلى العشرات لتحديد المجال.', explanation_en: 'Check the tens for the range.' },
    { type: 'order', q_ar: 'رتّب تصاعديًا.', q_en: 'Order ascending.', order_ar: ['٢٣', '٣٢', '٤١', '٥٠'], order_en: ['23', '32', '41', '50'], explanation_ar: '٢٣ < ٣٢ < ٤١ < ٥٠.', explanation_en: '23 < 32 < 41 < 50.' },
    { type: 'order', q_ar: 'رتّب تنازليًا (من الأكبر).', q_en: 'Order descending.', order_ar: ['٦٧', '٥٦', '٤٥', '٣٤'], order_en: ['67', '56', '45', '34'], explanation_ar: '٦٧ > ٥٦ > ٤٥ > ٣٤.', explanation_en: '67 > 56 > 45 > 34.' },
    { type: 'word', q_ar: 'رتّب الأعمار من الأصغر: ٨،٦،١٠،٧.', q_en: 'Order ages least: 8, 6, 10, 7.', answer_ar: '٦، ٧، ٨، ١٠', answer_en: '6, 7, 8, 10', explanation_ar: '٦ < ٧ < ٨ < ١٠.', explanation_en: '6 < 7 < 8 < 10.' },
    { type: 'word', q_ar: 'رتّب من الأصغر: ٣٤، ٢٥، ٤٣.', q_en: 'Order least: 34, 25, 43.', answer_ar: '٢٥، ٣٤، ٤٣', answer_en: '25, 34, 43', explanation_ar: '٢٥ < ٣٤ < ٤٣.', explanation_en: '25 < 34 < 43.' },
  ];
}

// الدرس السابع: مقارنة الأعداد
function LESSON_CH1_L7() {
  return [
    { type: 'mc', q_ar: 'أي علامة بين ٤٥ و٥٤؟', q_en: 'Which sign between 45 and 54?', options_ar: ['<', '>', '=', '≠'], options_en: ['<', '>', '=', '≠'], correct: '0', explanation_ar: '٤٥ < ٥٤.', explanation_en: '45 < 54.' },
    { type: 'mc', q_ar: 'أي علامة بين ٦٣ و٦٣؟', q_en: 'Which sign between 63 and 63?', options_ar: ['=', '<', '>', '+'], options_en: ['=', '<', '>', '+'], correct: '0', explanation_ar: 'العددان متساويان فالعلامة =.', explanation_en: 'Equal numbers use =.' },
    { type: 'tf', q_ar: '٧٢ > ٢٧.', q_en: '72 > 27.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '0', explanation_ar: '٧٢ أكبر من ٢٧.', explanation_en: '72 is greater than 27.' },
    { type: 'tf', q_ar: '٣٨ > ٨٣.', q_en: '38 > 83.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '1', explanation_ar: 'خطأ: ٣٨ < ٨٣.', explanation_en: 'False: 38 < 83.' },
    { type: 'fill', q_ar: '٤٦ __ ٦٤ (ضع < أو >).', q_en: '46 __ 64 (put < or >).', answer_ar: '<', answer_en: '<', explanation_ar: '٤٦ < ٦٤.', explanation_en: '46 < 64.' },
    { type: 'fill', q_ar: '٥٥ __ ٥٥.', q_en: '55 __ 55.', answer_ar: '=', answer_en: '=', explanation_ar: 'متساويان فالعلامة =.', explanation_en: 'Equal, so =.' },
    { type: 'compute', q_ar: 'قارن: ٢٩ و٣١، أيهما أكبر؟', q_en: 'Compare 29 and 31: which is greater?', answer_ar: '٣١', answer_en: '31', explanation_ar: '٣١ > ٢٩.', explanation_en: '31 > 29.' },
    { type: 'compute', q_ar: 'قارن: ٤٠ و٤٠.', q_en: 'Compare 40 and 40.', answer_ar: 'متساويان', answer_en: 'equal', explanation_ar: 'العددان متساويان.', explanation_en: 'The numbers are equal.' },
    { type: 'match', q_ar: 'صل كل زوج بالإشارة المناسبة.', q_en: 'Match each pair to its sign.', pairs_ar: [{ left: '٤٥ و٥٤', right: '<' }, { left: '٦٧ و٦٧', right: '=' }, { left: '٨١ و١٨', right: '>' }], pairs_en: [{ left: '45 and 54', right: '<' }, { left: '67 and 67', right: '=' }, { left: '81 and 18', right: '>' }], explanation_ar: 'قارن العشرات أولًا فإن تساوت فالآحاد.', explanation_en: 'Compare tens first, then ones.' },
    { type: 'match', q_ar: 'صل كل زوج بالإشارة المناسبة.', q_en: 'Match each pair to its sign.', pairs_ar: [{ left: '٣٣ و٥٣', right: '<' }, { left: '٧٠ و١٧', right: '>' }, { left: '٢٨ و٢٨', right: '=' }], pairs_en: [{ left: '33 and 53', right: '<' }, { left: '70 and 17', right: '>' }, { left: '28 and 28', right: '=' }], explanation_ar: 'استعمل < و > و = للمقارنة.', explanation_en: 'Use <, >, and = to compare.' },
    { type: 'classify', q_ar: 'صنّف: العدد الأول أكبر / العدد الثاني أكبر.', q_en: 'Sort: first greater / second greater.', categories_ar: ['الأول أكبر', 'الثاني أكبر'], categories_en: ['first greater', 'second greater'], items_ar: [{ item: '٨١ و١٨', correct_category: 0 }, { item: '٤٥ و٥٤', correct_category: 1 }, { item: '٧٣ و٣٧', correct_category: 0 }, { item: '٢٨ و٨٢', correct_category: 1 }], items_en: [{ item: '81 and 18', correct_category: 0 }, { item: '45 and 54', correct_category: 1 }, { item: '73 and 37', correct_category: 0 }, { item: '28 and 82', correct_category: 1 }], explanation_ar: 'قارن قيمتي العددين.', explanation_en: 'Compare the two values.' },
    { type: 'classify', q_ar: 'صنّف: متساويان / غير متساويين.', q_en: 'Sort: equal / not equal.', categories_ar: ['متساويان', 'غير متساويين'], categories_en: ['equal', 'not equal'], items_ar: [{ item: '٥٠ و٥٠', correct_category: 0 }, { item: '٤٢ و٢٤', correct_category: 1 }, { item: '٦٦ و٦٦', correct_category: 0 }, { item: '١٩ و٩١', correct_category: 1 }], items_en: [{ item: '50 and 50', correct_category: 0 }, { item: '42 and 24', correct_category: 1 }, { item: '66 and 66', correct_category: 0 }, { item: '19 and 91', correct_category: 1 }], explanation_ar: 'العددان متساويان إذا تطابقا تمامًا.', explanation_en: 'Equal if identical.' },
    { type: 'order', q_ar: 'رتّب تصاعديًا.', q_en: 'Order ascending.', order_ar: ['٢٣', '٣٢', '٤٥', '٥٤'], order_en: ['23', '32', '45', '54'], explanation_ar: '٢٣ < ٣٢ < ٤٥ < ٥٤.', explanation_en: '23 < 32 < 45 < 54.' },
    { type: 'order', q_ar: 'رتّب تنازليًا.', q_en: 'Order descending.', order_ar: ['٨٢', '٧١', '٢٨', '١٧'], order_en: ['82', '71', '28', '17'], explanation_ar: '٨٢ > ٧١ > ٢٨ > ١٧.', explanation_en: '82 > 71 > 28 > 17.' },
    { type: 'word', q_ar: 'مع أحمد ٣٦ ريالًا ومع خالد ٤٢. من معه أكثر؟', q_en: 'Ahmed has 36 riyals, Khalid has 42. Who has more?', answer_ar: 'خالد (٤٢)', answer_en: 'Khalid (42)', explanation_ar: '٤٢ > ٣٦.', explanation_en: '42 > 36.' },
    { type: 'word', q_ar: 'درجة سارة ٥٠ ونورة ٥٠. من الأعلى؟', q_en: 'Sara scored 50, Noura 50. Who is higher?', answer_ar: 'متساويتان', answer_en: 'equal', explanation_ar: 'الدرجتان متساويتان.', explanation_en: 'Scores are equal.' },
  ];
}

// الدرس الثامن: الأنماط
function LESSON_CH1_L8() {
  return [
    { type: 'mc', q_ar: 'النمط ٢، ٤، ٦، ٨، __ ما التالي؟', q_en: 'Pattern 2, 4, 6, 8, __ next?', options_ar: ['١٠', '٩', '٧', '١٢'], options_en: ['10', '9', '7', '12'], correct: '0', explanation_ar: 'النمط يزيد ٢ في كل مرة.', explanation_en: 'The pattern adds 2 each time.' },
    { type: 'mc', q_ar: 'النمط ٥، ١٠، ١٥، __ ما التالي؟', q_en: 'Pattern 5, 10, 15, __ next?', options_ar: ['٢٠', '٢٥', '١٦', '١٠'], options_en: ['20', '25', '16', '10'], correct: '0', explanation_ar: 'النمط يزيد ٥ في كل مرة.', explanation_en: 'The pattern adds 5 each time.' },
    { type: 'tf', q_ar: 'النمط ١٠، ٢٠، ٣٠، ٤٠ يزيد ١٠ في كل مرة.', q_en: '10, 20, 30, 40 increases by 10 each time.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '0', explanation_ar: 'الفرق بين كل عددين ١٠.', explanation_en: 'Difference is 10.' },
    { type: 'tf', q_ar: 'النمط ٢، ٤، ٦، ٩ نمط صحيح.', q_en: '2, 4, 6, 9 is a valid pattern.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '1', explanation_ar: 'خطأ: الفرق يتغير (٢ ثم ٢ ثم ٣).', explanation_en: 'False: the step changes.' },
    { type: 'fill', q_ar: 'أكمل النمط: ٥، ١٠، ١٥، ٢٠، __.', q_en: 'Complete: 5, 10, 15, 20, __.', answer_ar: '٢٥', answer_en: '25', explanation_ar: 'الزيادة ٥، فيكون التالي ٢٥.', explanation_en: 'Step 5, next is 25.' },
    { type: 'fill', q_ar: 'أكمل النمط: ٢، ٤، ٦، ٨، __.', q_en: 'Complete: 2, 4, 6, 8, __.', answer_ar: '١٠', answer_en: '10', explanation_ar: 'الزيادة ٢، فيكون التالي ١٠.', explanation_en: 'Step 2, next is 10.' },
    { type: 'compute', q_ar: 'ما قاعدة النمط ٣، ٦، ٩، ١٢؟', q_en: 'What is the rule of 3, 6, 9, 12?', answer_ar: '+٣', answer_en: '+3', explanation_ar: 'كل عدد يزيد ٣ عن سابقه.', explanation_en: 'Each number adds 3.' },
    { type: 'compute', q_ar: 'ما قاعدة النمط ١٠، ٢٠، ٣٠؟', q_en: 'What is the rule of 10, 20, 30?', answer_ar: '+١٠', answer_en: '+10', explanation_ar: 'كل عدد يزيد ١٠ عن سابقه.', explanation_en: 'Each number adds 10.' },
    { type: 'match', q_ar: 'صل كل نمط بقاعدته.', q_en: 'Match each pattern to its rule.', pairs_ar: [{ left: '٢، ٤، ٦، ٨', right: 'العد بالـ٢' }, { left: '٥، ١٠، ١٥', right: 'العد بالـ٥' }, { left: '١٠، ٢٠، ٣٠', right: 'العد بالـ١٠' }], pairs_en: [{ left: '2, 4, 6, 8', right: 'count by 2' }, { left: '5, 10, 15', right: 'count by 5' }, { left: '10, 20, 30', right: 'count by 10' }], explanation_ar: 'القاعدة هي مقدار الزيادة الثابتة.', explanation_en: 'The rule is the constant step.' },
    { type: 'match', q_ar: 'صل كل نمط بقاعدته.', q_en: 'Match each pattern to its rule.', pairs_ar: [{ left: '١، ٣، ٥، ٧', right: 'فردي +٢' }, { left: '٢، ٤، ٦، ٨', right: 'زوجي +٢' }, { left: '١٠، ٢٠، ٣٠', right: '+١٠' }], pairs_en: [{ left: '1, 3, 5, 7', right: 'odd +2' }, { left: '2, 4, 6, 8', right: 'even +2' }, { left: '10, 20, 30', right: '+10' }], explanation_ar: 'حدد نوع الأعداد ومقدار الزيادة.', explanation_en: 'Identify number type and step.' },
    { type: 'classify', q_ar: 'صنّف: نمط بالـ٢ / نمط بالـ٥.', q_en: 'Sort: +2 pattern / +5 pattern.', categories_ar: ['نمط بالـ٢', 'نمط بالـ٥'], categories_en: ['+2', '+5'], items_ar: [{ item: '٢، ٤، ٦، ٨', correct_category: 0 }, { item: '٥، ١٠، ١٥', correct_category: 1 }, { item: '٤، ٦، ٨، ١٠', correct_category: 0 }, { item: '١٠، ١٥، ٢٠', correct_category: 1 }], items_en: [{ item: '2,4,6,8', correct_category: 0 }, { item: '5,10,15', correct_category: 1 }, { item: '4,6,8,10', correct_category: 0 }, { item: '10,15,20', correct_category: 1 }], explanation_ar: 'انظر إلى الفرق بين الأعداد.', explanation_en: 'Look at the difference.' },
    { type: 'classify', q_ar: 'صنّف: نمط تصاعدي / تنازلي.', q_en: 'Sort: increasing / decreasing.', categories_ar: ['تصاعدي', 'تنازلي'], categories_en: ['increasing', 'decreasing'], items_ar: [{ item: '٥، ٤، ٣، ٢', correct_category: 1 }, { item: '٢، ٤، ٦، ٨', correct_category: 0 }, { item: '٩٠، ٨٠، ٧٠', correct_category: 1 }, { item: '١٠، ٢٠، ٣٠', correct_category: 0 }], items_en: [{ item: '5,4,3,2', correct_category: 1 }, { item: '2,4,6,8', correct_category: 0 }, { item: '90,80,70', correct_category: 1 }, { item: '10,20,30', correct_category: 0 }], explanation_ar: 'التصاعدي يزيد والتنازلي ينقص.', explanation_en: 'Increasing grows, decreasing shrinks.' },
    { type: 'order', q_ar: 'رتّب النمط تصاعديًا.', q_en: 'Order the pattern ascending.', order_ar: ['٢', '٤', '٦', '٨'], order_en: ['2', '4', '6', '8'], explanation_ar: '٢ ← ٤ ← ٦ ← ٨.', explanation_en: '2 → 4 → 6 → 8.' },
    { type: 'order', q_ar: 'رتّب النمط تصاعديًا.', q_en: 'Order the pattern ascending.', order_ar: ['٥', '١٠', '١٥', '٢٠'], order_en: ['5', '10', '15', '20'], explanation_ar: '٥ ← ١٠ ← ١٥ ← ٢٠.', explanation_en: '5 → 10 → 15 → 20.' },
    { type: 'word', q_ar: 'ينمو طول النبتة ٥ سم كل أسبوع: ٥، ١٠، ١٥، __. ما التالي؟', q_en: 'A plant grows 5 cm weekly: 5, 10, 15, __. Next?', answer_ar: '٢٠', answer_en: '20', explanation_ar: 'الزيادة ٥، التالي ٢٠.', explanation_en: 'Step 5, next is 20.' },
    { type: 'word', q_ar: 'يدّخر سعيد ١٠ ريالات أسبوعيًا: ١٠، ٢٠، ٣٠، __. ما التالي؟', q_en: 'Saeed saves 10 weekly: 10, 20, 30, __. Next?', answer_ar: '٤٠', answer_en: '40', explanation_ar: 'الزيادة ١٠، التالي ٤٠.', explanation_en: 'Step 10, next is 40.' },
  ];
}

// الدرس التاسع: الأنماط على لوحة المئة
function LESSON_CH1_L9() {
  return [
    { type: 'mc', q_ar: 'على لوحة المئة، العدد تحت ٣٥ هو:', q_en: 'On a hundred chart, the number below 35 is:', options_ar: ['٤٥', '٣٦', '٢٥', '٣٤'], options_en: ['45', '36', '25', '34'], correct: '0', explanation_ar: 'بالنزول صفًا تزيد ١٠، فيكون ٣٥ + ١٠ = ٤٥.', explanation_en: 'Down a row adds 10: 35 + 10 = 45.' },
    { type: 'mc', q_ar: 'العدد الذي يمين ٤٢ على اللوحة هو:', q_en: 'The number to the right of 42 is:', options_ar: ['٤٣', '٤١', '٥٢', '٣٢'], options_en: ['43', '41', '52', '32'], correct: '0', explanation_ar: 'بالتحرك يمينًا تزيد ١، فيكون ٤٢ + ١ = ٤٣.', explanation_en: 'Right adds 1: 42 + 1 = 43.' },
    { type: 'tf', q_ar: 'في لوحة المئة، الأعداد أسفل عمود ينتهي بـ٥ تزيد ١٠.', q_en: 'In a hundred chart, numbers below a column ending in 5 increase by 10.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '0', explanation_ar: 'كل صف للأسفل يضيف ١٠.', explanation_en: 'Each row down adds 10.' },
    { type: 'tf', q_ar: 'العدد يسار ٥٠ هو ٦٠.', q_en: 'The number left of 50 is 60.', options_ar: ['صح', 'خطأ'], options_en: ['True', 'False'], correct: '1', explanation_ar: 'خطأ: يسار ٥٠ هو ٤٩.', explanation_en: 'False: left of 50 is 49.' },
    { type: 'fill', q_ar: 'على لوحة المئة، العدد تحت ٢٣ هو __.', q_en: 'On the chart, the number below 23 is __.', answer_ar: '٣٣', answer_en: '33', explanation_ar: '٢٣ + ١٠ = ٣٣.', explanation_en: '23 + 10 = 33.' },
    { type: 'fill', q_ar: 'العدد فوق ٧١ هو __.', q_en: 'The number above 71 is __.', answer_ar: '٦١', answer_en: '61', explanation_ar: '٧١ − ١٠ = ٦١.', explanation_en: '71 − 10 = 61.' },
    { type: 'compute', q_ar: 'في عمود ينتهي بـ٠: ٢٠، ٣٠، __ ما التالي؟', q_en: 'In a column ending in 0: 20, 30, __ next?', answer_ar: '٤٠', answer_en: '40', explanation_ar: 'الزيادة ١٠ في العمود.', explanation_en: 'Column adds 10.' },
    { type: 'compute', q_ar: '٤٥، ٥٥، ٦٥، __ ما التالي؟', q_en: '45, 55, 65, __ next?', answer_ar: '٧٥', answer_en: '75', explanation_ar: 'الزيادة ١٠ في عمود الآحاد ٥.', explanation_en: 'Column ending in 5 adds 10.' },
    { type: 'match', q_ar: 'صل كل تلميح بالعدد على اللوحة.', q_en: 'Match each clue to the chart number.', pairs_ar: [{ left: 'تحت ١٢', right: '٢٢' }, { left: 'فوق ٥٣', right: '٤٣' }, { left: 'يمين ٣١', right: '٣٢' }], pairs_en: [{ left: 'below 12', right: '22' }, { left: 'above 53', right: '43' }, { left: 'right of 31', right: '32' }], explanation_ar: 'تحت = +١٠، فوق = −١٠، يمين = +١.', explanation_en: 'Below +10, above −10, right +1.' },
    { type: 'match', q_ar: 'صل كل تلميح بالعدد على اللوحة.', q_en: 'Match each clue to the chart number.', pairs_ar: [{ left: 'تحت ٤٠', right: '٥٠' }, { left: 'يسار ٣٥', right: '٣٤' }, { left: 'فوق ٨٠', right: '٧٠' }], pairs_en: [{ left: 'below 40', right: '50' }, { left: 'left of 35', right: '34' }, { left: 'above 80', right: '70' }], explanation_ar: 'يسار = −١.', explanation_en: 'Left −1.' },
    { type: 'classify', q_ar: 'صنّف: في عمود العشرة (ينتهي بـ٠) / عمود الخمسة (ينتهي بـ٥).', q_en: 'Sort: column 0 / column 5.', categories_ar: ['عمود العشرة (٠)', 'عمود الخمسة (٥)'], categories_en: ['column 0', 'column 5'], items_ar: [{ item: '٢٠', correct_category: 0 }, { item: '٢٥', correct_category: 1 }, { item: '٤٠', correct_category: 0 }, { item: '٤٥', correct_category: 1 }], items_en: [{ item: '20', correct_category: 0 }, { item: '25', correct_category: 1 }, { item: '40', correct_category: 0 }, { item: '45', correct_category: 1 }], explanation_ar: 'الأعداد في العمود تنتهي بنفس الآحاد.', explanation_en: 'A column shares the same ones digit.' },
    { type: 'classify', q_ar: 'صنّف: في صف الأربعينات / صف الخمسينات.', q_en: 'Sort: forties row / fifties row.', categories_ar: ['صف الأربعينات', 'صف الخمسينات'], categories_en: ['forties', 'fifties'], items_ar: [{ item: '٤٢', correct_category: 0 }, { item: '٤٧', correct_category: 0 }, { item: '٥٣', correct_category: 1 }, { item: '٥٨', correct_category: 1 }], items_en: [{ item: '42', correct_category: 0 }, { item: '47', correct_category: 0 }, { item: '53', correct_category: 1 }, { item: '58', correct_category: 1 }], explanation_ar: 'الصف يحدده رقم العشرات.', explanation_en: 'The row is set by the tens digit.' },
    { type: 'order', q_ar: 'رتّب عمود العشرة تصاعديًا.', q_en: 'Order the tens column ascending.', order_ar: ['٢٠', '٣٠', '٤٠', '٥٠'], order_en: ['20', '30', '40', '50'], explanation_ar: '٢٠ ← ٣٠ ← ٤٠ ← ٥٠.', explanation_en: '20 → 30 → 40 → 50.' },
    { type: 'order', q_ar: 'رتّب عمود الخمسة تصاعديًا.', q_en: 'Order the fives column ascending.', order_ar: ['٢٥', '٣٥', '٤٥', '٥٥'], order_en: ['25', '35', '45', '55'], explanation_ar: '٢٥ ← ٣٥ ← ٤٥ ← ٥٥.', explanation_en: '25 → 35 → 45 → 55.' },
    { type: 'word', q_ar: 'ابدأ من ١٠ وانزل خطوتين في عمود العشرة. أي عدد تصل إليه؟', q_en: 'Start at 10, go down 2 steps in the tens column. What number?', answer_ar: '٣٠', answer_en: '30', explanation_ar: '١٠ ← ٢٠ ← ٣٠.', explanation_en: '10 → 20 → 30.' },
    { type: 'word', q_ar: 'ابدأ من ٥ وانزل ٣ خطوات في عمود الخمسة. أي عدد؟', q_en: 'Start at 5, go down 3 steps in the fives column. What number?', answer_ar: '٣٥', answer_en: '35', explanation_ar: '٥ ← ١٥ ← ٢٥ ← ٣٥.', explanation_en: '5 → 15 → 25 → 35.' },
  ];
}

export const MATH2_S1_TYPE_LABELS = {
  mc: 'اختيار من متعدد',
  tf: 'صح أم خطأ',
  fill: 'أكمل الفراغ',
  compute: 'أوجد الناتج',
  match: 'وصل',
  classify: 'صنّف',
  order: 'رتّب',
  word: 'مسألة حياتية',
};

export function getChapter(chId) {
  return MATH2_S1_CHAPTERS.find((c) => c.id === chId);
}
export function getLesson(chId, lId) {
  const ch = getChapter(chId);
  if (!ch) return null;
  return ch.lessons.find((l) => l.id === lId) || null;
}
export const TOTAL_CHAPTERS = MATH2_S1_CHAPTERS.length;
export const TOTAL_LESSONS = MATH2_S1_CHAPTERS.reduce((s, c) => s + c.lessons.length, 0);