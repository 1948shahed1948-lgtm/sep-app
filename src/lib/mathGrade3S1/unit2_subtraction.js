// بنك رياضيات الصف الثالث الابتدائي — الفصل الثالث: الطرح
// المصدر: كتاب الرياضيات ١٤٤٧هـ — ص ٧٨–١١٤
// الدروس الرسمية:
//  ٣-١ الطرح دون إعادة تجميع
//  ٣-٢ الطرح مع إعادة التجميع (رقمان)
//  ٣-٣ مهارة حل المسألة: استعمال الجمع للتحقق
//  ٣-٤ الطرح مع إعادة التجميع (ثلاثة أرقام)
//  ٣-٥ تقدير الفرق
//  ٣-٦ الجبر: الطرح والجمع

// روابط الـ PDF من الكتاب الأصلي (مرفوعة)
export const BOOK_PDF_CH3_1 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/a0eb33644______1--10--1.pdf';
export const BOOK_PDF_CH3_2 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/a179b51a3______1--10--2.pdf';
export const BOOK_PDF_CH3_3 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/817a820dd______1--10--3.pdf';
export const BOOK_PDF_CH3_4 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/250d39e97______1--10--4.pdf';
export const BOOK_PDF_CH3_5 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/fa31ba6b9______1--10--5.pdf';

// نستخدم أوّل ملف كمرجع بصري رئيسي للفصل
export const BOOK_PDF_CH3 = BOOK_PDF_CH3_1;

// ٣-١ الطرح دون إعادة التجميع (ص ٧٨–٨٣)
function LESSON_3_1() {
  return [
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_1, page: 78,
      q_ar: 'ما الطرح؟', q_en: 'What is subtraction?',
      options_ar: ['جمع عددين', 'إيجاد كم يبقى أو كم يُستبعد', 'ضرب عددين', 'قسمة عدد على آخر'],
      options_en: ['Add', 'Find what remains after removing a part', 'Multiply', 'Divide'],
      correct: '1',
      explanation_ar: 'الطرح: إيجاد عدد الأشياء المتبقية عندما يُستبعد جزء من مجموعة أشياء أو كلها.',
      explanation_en: 'Subtraction shows what remains when a part is removed.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_1, page: 78,
      q_ar: 'اشترى سعيد ٣٠ تفاحة وأعطى ١٧ خضراء. كم بقي من التفاح الأحمر؟',
      q_en: 'Saeed bought 30 apples, gave 17. How many red remain?',
      options_ar: ['١٢','١٣','١٤','١٥'], options_en: ['12','13','14','15'],
      correct: '1',
      explanation_ar: '٣٠ − ١٧ = ١٣.',
      explanation_en: '30 − 17 = 13.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_1, page: 79,
      q_ar: 'احسب: ٤٨ − ٢٣ = ؟', q_en: '48 − 23 = ?',
      answer_ar: '٢٥', answer_en: '25',
      explanation_ar: '٤٨ − ٢٣ = ٢٥ (لا نقل).',
      explanation_en: '48 − 23 = 25.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_1, page: 79,
      q_ar: 'احسب: ٩٦ − ٤٣ = ؟', q_en: '96 − 43 = ?',
      answer_ar: '٥٣', answer_en: '53',
      explanation_ar: '٩٦ − ٤٣ = ٥٣.',
      explanation_en: '96 − 43 = 53.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH3_1, page: 79,
      q_ar: '٧٥ − ٣٤ = ٤١', q_en: '75 − 34 = 41',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: '٧٥ − ٣٤ = ٤١ صحيح.',
      explanation_en: 'True.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH3_1, page: 79,
      q_ar: '٨٤ − ٥٠ = ٣٣', q_en: '84 − 50 = 33',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '1',
      explanation_ar: '٨٤ − ٥٠ = ٣٤ وليس ٣٣.',
      explanation_en: '84 − 50 = 34.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH3_1, page: 80,
      q_ar: '٥٩ − ٢٦ = ___', q_en: '59 − 26 = ___',
      answer_ar: '٣٣', answer_en: '33',
      explanation_ar: '٥٩ − ٢٦ = ٣٣.',
      explanation_en: '33.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH3_1, page: 80,
      q_ar: '٦٨ − ___ = ٤٣', q_en: '68 − ___ = 43',
      answer_ar: '٢٥', answer_en: '25',
      explanation_ar: '٦٨ − ٢٥ = ٤٣.',
      explanation_en: '25.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH3_1, page: 81,
      q_ar: 'في مزرعة ٨٦ دجاجة، بيعت ٣٤. كم بقي؟',
      q_en: 'Farm had 86 chickens, sold 34. Remaining?',
      answer_ar: '٥٢', answer_en: '52',
      explanation_ar: '٨٦ − ٣٤ = ٥٢.',
      explanation_en: '52.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH3_1, page: 81,
      q_ar: 'لدى أحمد ٩٥ ريالًا، أنفق ٦٢. كم بقي معه؟',
      q_en: 'Ahmed had 95 riyals, spent 62. Remaining?',
      answer_ar: '٣٣ ريالًا', answer_en: '33 riyals',
      explanation_ar: '٩٥ − ٦٢ = ٣٣.',
      explanation_en: '33.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_1, page: 82,
      q_ar: '٨٠٠ − ٣٠٠ = ؟', q_en: '800 − 300 = ?',
      answer_ar: '٥٠٠', answer_en: '500',
      explanation_ar: '٨ − ٣ = ٥ → ٥٠٠.',
      explanation_en: '500.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_1, page: 82,
      q_ar: '٤٥٦ − ١٢٣ = ؟',
      q_en: '456 − 123 = ?',
      options_ar: ['٣٣٣','٣٢٣','٣٤٣','٣١٣'], options_en: ['333','323','343','313'],
      correct: '0',
      explanation_ar: '٤٥٦ − ١٢٣ = ٣٣٣.',
      explanation_en: '333.',
    },
    {
      type: 'classify', bookRef: BOOK_PDF_CH3_1, page: 83,
      q_ar: 'صنّف: ناتج الطرح أكبر من ٤٠ / أصغر من ٤٠.',
      q_en: 'Sort: result >40 / <40.',
      categories_ar: ['>٤٠', '<٤٠'],
      categories_en: ['>40', '<40'],
      items_ar: [
        { item: '٧٥−٢٠=٥٥', correct_category: 0 },
        { item: '٦٠−٣٥=٢٥', correct_category: 1 },
        { item: '٩٨−٤٠=٥٨', correct_category: 0 },
        { item: '٥٠−٢٦=٢٤', correct_category: 1 },
      ],
      items_en: [
        { item: '75−20=55', correct_category: 0 },
        { item: '60−35=25', correct_category: 1 },
        { item: '98−40=58', correct_category: 0 },
        { item: '50−26=24', correct_category: 1 },
      ],
      explanation_ar: 'احسب كل ناتج وقارن بـ ٤٠.',
      explanation_en: 'Calculate then compare to 40.',
    },
  ];
}

// ٣-٢ الطرح مع إعادة التجميع — رقمان (ص ٨٤–٨٩)
function LESSON_3_2() {
  return [
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_2, page: 84,
      q_ar: 'متى نحتاج إلى إعادة التجميع في الطرح؟',
      q_en: 'When do we need regrouping in subtraction?',
      options_ar: ['دائمًا','حين رقم الأحاد الأعلى أصغر من الأدنى','حين العددان متساويان','أبدًا'],
      options_en: ['Always','When the top ones digit < bottom','Equal numbers','Never'],
      correct: '1',
      explanation_ar: 'نُعيد التجميع إذا كان الرقم المطروح أكبر من الرقم المطروح منه في خانة الأحاد.',
      explanation_en: 'Regroup when top digit < bottom digit.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_2, page: 84,
      q_ar: '٥٣ − ٢٨ = ؟', q_en: '53 − 28 = ?',
      answer_ar: '٢٥', answer_en: '25',
      explanation_ar: '٣ < ٨ → نُعيد التجميع: ١٣−٨=٥، ٤−٢=٢ → ٢٥.',
      explanation_en: '53 − 28 = 25 (regroup).',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_2, page: 85,
      q_ar: '٧٢ − ٤٥ = ؟', q_en: '72 − 45 = ?',
      answer_ar: '٢٧', answer_en: '27',
      explanation_ar: '٢ < ٥ → نُعيد: ١٢−٥=٧، ٦−٤=٢ → ٢٧.',
      explanation_en: '72 − 45 = 27.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_2, page: 85,
      q_ar: '٦٤ − ٣٨ = ؟',
      q_en: '64 − 38 = ?',
      options_ar: ['٢٤','٢٦','٢٨','٣٦'], options_en: ['24','26','28','36'],
      correct: '1',
      explanation_ar: '٤ < ٨ → ١٤−٨=٦، ٥−٣=٢ → ٢٦.',
      explanation_en: '26.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH3_2, page: 85,
      q_ar: '٨١ − ٤٦ = ٣٥', q_en: '81 − 46 = 35',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: '٨١ − ٤٦ = ٣٥ صحيح.',
      explanation_en: 'True.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH3_2, page: 86,
      q_ar: '٩٤ − ٥٧ = ___', q_en: '94 − 57 = ___',
      answer_ar: '٣٧', answer_en: '37',
      explanation_ar: '٩٤ − ٥٧ = ٣٧.',
      explanation_en: '37.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH3_2, page: 86,
      q_ar: '٤٣ − ___ = ١٨', q_en: '43 − ___ = 18',
      answer_ar: '٢٥', answer_en: '25',
      explanation_ar: '٤٣ − ٢٥ = ١٨.',
      explanation_en: '25.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH3_2, page: 87,
      q_ar: 'كانت لدى نورة ٧٣ ورقة، استخدمت ٣٨. كم بقي؟',
      q_en: 'Noura had 73 papers, used 38. Remaining?',
      answer_ar: '٣٥', answer_en: '35',
      explanation_ar: '٧٣ − ٣٨ = ٣٥.',
      explanation_en: '35.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH3_2, page: 87,
      q_ar: 'عدد الطلاب ٩٢، غاب ٤٧. كم طالبًا حضر؟',
      q_en: '92 students, 47 absent. Present?',
      answer_ar: '٤٥ طالبًا', answer_en: '45 students',
      explanation_ar: '٩٢ − ٤٧ = ٤٥.',
      explanation_en: '45.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_2, page: 88,
      q_ar: '٣٠٠ − ١٤٧ = ؟', q_en: '300 − 147 = ?',
      answer_ar: '١٥٣', answer_en: '153',
      explanation_ar: '٣٠٠ − ١٤٧ = ١٥٣.',
      explanation_en: '153.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_2, page: 88,
      q_ar: '٣٦٢ − ١٨٥ = ؟',
      q_en: '362 − 185 = ?',
      options_ar: ['١٧٧','١٦٧','١٨٧','١٩٧'], options_en: ['177','167','187','197'],
      correct: '0',
      explanation_ar: '٣٦٢ − ١٨٥ = ١٧٧.',
      explanation_en: '177.',
    },
    {
      type: 'order', bookRef: BOOK_PDF_CH3_2, page: 89,
      q_ar: 'رتّب نواتج الطرح تصاعديًا: (٨٢−٣٩)، (٦٥−٢٨)، (٧٤−٤٥).',
      q_en: 'Order ascending: (82−39), (65−28), (74−45).',
      order_ar: ['٢٩','٣٧','٤٣'], order_en: ['29','37','43'],
      explanation_ar: '٧٤−٤٥=٢٩ < ٦٥−٢٨=٣٧ < ٨٢−٣٩=٤٣.',
      explanation_en: '29 < 37 < 43.',
    },
  ];
}

// ٣-٣ مهارة حل المسألة: استعمال الجمع للتحقق (ص ٩٠–٩٥)
function LESSON_3_3() {
  return [
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_3, page: 90,
      q_ar: 'كيف نتحقق من صحة عملية الطرح؟',
      q_en: 'How to verify a subtraction result?',
      options_ar: ['بإعادة الطرح مرة أخرى','بإضافة الناتج إلى المطروح للحصول على المطروح منه','بضرب العددين','بتقريب العددين'],
      options_en: ['Redo subtraction','Add result to subtrahend to get minuend','Multiply','Round'],
      correct: '1',
      explanation_ar: 'إذا كان أ − ب = ج فإن ج + ب = أ (إعادة التجميع).',
      explanation_en: 'If a − b = c then c + b = a.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH3_3, page: 91,
      q_ar: 'للتحقق من ٦٤ − ٢٩ = ٣٥، نحسب ٣٥ + ٢٩ = ٦٤.',
      q_en: 'To check 64 − 29 = 35, compute 35 + 29 = 64.',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: '٣٥ + ٢٩ = ٦٤ ✓ الإجابة صحيحة.',
      explanation_en: 'True.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_3, page: 92,
      q_ar: 'تحقق من: ٨٣ − ٤٧ = ٣٦. اكتب عملية الجمع للتحقق.',
      q_en: 'Check: 83 − 47 = 36. Write addition.',
      answer_ar: '٣٦ + ٤٧ = ٨٣ ✓', answer_en: '36 + 47 = 83 ✓',
      explanation_ar: '٣٦ + ٤٧ = ٨٣.',
      explanation_en: '36 + 47 = 83.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_3, page: 92,
      q_ar: 'حلّت إيمان ٩٢ − ٥٤ = ٣٨، وتحققت بـ: ٣٨ + ٥٤. ما ناتج التحقق؟',
      q_en: '92 − 54 = 38, checked by 38 + 54 = ?',
      options_ar: ['٩٢','٨٢','٧٢','٩٤'], options_en: ['92','82','72','94'],
      correct: '0',
      explanation_ar: '٣٨ + ٥٤ = ٩٢ = الأصل ✓.',
      explanation_en: '92.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH3_3, page: 93,
      q_ar: '٧٦ − ٤٨ = ٢٨. للتحقق: ٢٨ + ٤٨ = ___',
      q_en: '76 − 48 = 28. Check: 28 + 48 = ___',
      answer_ar: '٧٦', answer_en: '76',
      explanation_ar: '٢٨ + ٤٨ = ٧٦ ✓.',
      explanation_en: '76.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH3_3, page: 94,
      q_ar: 'قرأ فهد ٩٤ صفحة، ثم قرأ ٤٧ أخرى. كم بقي إذا كان الكتاب ١٣٩ صفحة؟ (تحقق بالجمع)',
      q_en: 'Fahad read 94 pages, then 47 more. Book has 139 pages. Remaining?',
      answer_ar: '−٢ (خطأ في المعطيات)؛ الصحيح: ٩٤+٤٧=١٤١ > ١٣٩', answer_en: 'Check: 94+47=141 > 139',
      explanation_ar: 'نتحقق بالجمع: ٩٤+٤٧=١٤١ لا يساوي ١٣٩ → مراجعة المعطيات.',
      explanation_en: 'Verify by addition.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH3_3, page: 94,
      q_ar: 'الجمع وإعادة التجميع عمليتان عكسيتان.',
      q_en: 'Addition and subtraction are inverse operations.',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: 'الجمع والطرح عمليتان عكسيتان — كل منهما يتحقق من الآخر.',
      explanation_en: 'True.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_3, page: 95,
      q_ar: 'أكمل: إذا كان ٥٦ − ب = ٢٩، فـ ب = ؟',
      q_en: 'If 56 − b = 29, then b = ?',
      answer_ar: '٢٧', answer_en: '27',
      explanation_ar: 'ب = ٥٦ − ٢٩ = ٢٧. نتحقق: ٢٧ + ٢٩ = ٥٦ ✓.',
      explanation_en: '27.',
    },
  ];
}

// ٣-٤ الطرح مع إعادة التجميع — ثلاثة أرقام (ص ٩٦–١٠٣)
function LESSON_3_4() {
  return [
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_4, page: 96,
      q_ar: '٤٥٣ − ١٧٨ = ؟',
      q_en: '453 − 178 = ?',
      options_ar: ['٢٧٥','٢٦٥','٢٨٥','٢٩٥'], options_en: ['275','265','285','295'],
      correct: '0',
      explanation_ar: '٣<٨ → نُعيد: ١٣−٨=٥، ٤−٧ → نُعيد: ١٤−٧=٧... → ٢٧٥.',
      explanation_en: '453 − 178 = 275.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_4, page: 97,
      q_ar: '٦٣٤ − ٢٥٩ = ؟', q_en: '634 − 259 = ?',
      answer_ar: '٣٧٥', answer_en: '375',
      explanation_ar: '٦٣٤ − ٢٥٩ = ٣٧٥.',
      explanation_en: '375.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_4, page: 97,
      q_ar: '٨٠٠ − ٣٦٥ = ؟', q_en: '800 − 365 = ?',
      answer_ar: '٤٣٥', answer_en: '435',
      explanation_ar: '٨٠٠ − ٣٦٥ = ٤٣٥.',
      explanation_en: '435.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH3_4, page: 98,
      q_ar: '٩٠٠ − ٤٥٦ = ٤٤٤', q_en: '900 − 456 = 444',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: '٩٠٠ − ٤٥٦ = ٤٤٤ صحيح.',
      explanation_en: 'True.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH3_4, page: 98,
      q_ar: '٥٣٦ − ٢٧٤ = ٢٥٢', q_en: '536 − 274 = 252',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '1',
      explanation_ar: '٥٣٦ − ٢٧٤ = ٢٦٢ وليس ٢٥٢.',
      explanation_en: '536 − 274 = 262.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH3_4, page: 99,
      q_ar: '٧٢٣ − ٤٦٨ = ___', q_en: '723 − 468 = ___',
      answer_ar: '٢٥٥', answer_en: '255',
      explanation_ar: '٧٢٣ − ٤٦٨ = ٢٥٥.',
      explanation_en: '255.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH3_4, page: 99,
      q_ar: '___ − ٢٣٧ = ١٦٥', q_en: '___ − 237 = 165',
      answer_ar: '٤٠٢', answer_en: '402',
      explanation_ar: '١٦٥ + ٢٣٧ = ٤٠٢.',
      explanation_en: '402.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH3_4, page: 100,
      q_ar: 'عدد سكان قرية ٨٤٢ شخصًا في يناير، ثم انتقل منها ٣٦٧. كم بقي؟',
      q_en: 'Village had 842, 367 moved away. Remaining?',
      answer_ar: '٤٧٥ شخصًا', answer_en: '475',
      explanation_ar: '٨٤٢ − ٣٦٧ = ٤٧٥.',
      explanation_en: '475.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH3_4, page: 101,
      q_ar: 'في مكتبة ٥٤٠ كتابًا، أُعيرت ٢٦٣. كم كتابًا تبقّى؟',
      q_en: 'Library: 540 books, lent 263. Remaining?',
      answer_ar: '٢٧٧ كتابًا', answer_en: '277',
      explanation_ar: '٥٤٠ − ٢٦٣ = ٢٧٧.',
      explanation_en: '277.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_4, page: 102,
      q_ar: 'أطول حوت رمادي ١٤٦٣ سم، والقاتل ٩١٤ سم. ما الفرق بينهما؟',
      q_en: 'Blue whale: 1463 cm, Killer: 914 cm. Difference?',
      options_ar: ['٥٤٩','٤٤٩','٥٥٩','٥٣٩'], options_en: ['549','449','559','539'],
      correct: '0',
      explanation_ar: '١٤٦٣ − ٩١٤ = ٥٤٩.',
      explanation_en: '549.',
    },
    {
      type: 'classify', bookRef: BOOK_PDF_CH3_4, page: 103,
      q_ar: 'صنّف نواتج الطرح: أكبر من ٣٠٠ / أصغر من ٣٠٠.',
      q_en: 'Sort results: >300 / <300.',
      categories_ar: ['>٣٠٠', '<٣٠٠'],
      categories_en: ['>300', '<300'],
      items_ar: [
        { item: '٧٢٣−٤٢٣=٣٠٠', correct_category: 1 },
        { item: '٨٠٠−٤٢٥=٣٧٥', correct_category: 0 },
        { item: '٦٤٠−٣٩٥=٢٤٥', correct_category: 1 },
        { item: '٩٠٠−٥٦٠=٣٤٠', correct_category: 0 },
      ],
      items_en: [
        { item: '723−423=300', correct_category: 1 },
        { item: '800−425=375', correct_category: 0 },
        { item: '640−395=245', correct_category: 1 },
        { item: '900−560=340', correct_category: 0 },
      ],
      explanation_ar: 'قارن كل ناتج بـ ٣٠٠.',
      explanation_en: 'Compare each result to 300.',
    },
  ];
}

// ٣-٥ تقدير الفرق (ص ١٠٤–١٠٩)
function LESSON_3_5() {
  return [
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_5, page: 104,
      q_ar: 'لتقدير الفرق بين ٤٩ و ٢٣، نقرّب كلًّا منهما لأقرب عشرة ثم نطرح. التقدير هو:',
      q_en: 'To estimate 49 − 23, round to nearest ten then subtract.',
      options_ar: ['٣٠','٢٠','٤٠','٢٥'], options_en: ['30','20','40','25'],
      correct: '0',
      explanation_ar: '٥٠ − ٢٠ = ٣٠ (تقريب ٤٩→٥٠، ٢٣→٢٠).',
      explanation_en: '50 − 20 = 30.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_5, page: 105,
      q_ar: 'قدّر: ٦٧ − ٣٤ (إلى أقرب عشرة).', q_en: 'Estimate: 67 − 34 (nearest ten).',
      answer_ar: '٣٠', answer_en: '30',
      explanation_ar: '٧٠ − ٣٠ = ٤٠ ... (٦٧→٧٠، ٣٤→٣٠) الفرق التقديري ٤٠.',
      explanation_en: '70 − 30 = 40.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH3_5, page: 106,
      q_ar: 'تقدير ٧٨ − ٤٣ إلى أقرب عشرة يساوي ٤٠.',
      q_en: 'Estimate 78 − 43 = 40 (nearest ten).',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: '٨٠ − ٤٠ = ٤٠ ✓.',
      explanation_en: 'True.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_5, page: 106,
      q_ar: 'قدّر ٥٤٢ − ٣١٧ بالتقريب لأقرب مئة:',
      q_en: 'Estimate 542 − 317 (nearest hundred):',
      options_ar: ['٢٠٠','٢٥٠','٣٠٠','١٠٠'], options_en: ['200','250','300','100'],
      correct: '0',
      explanation_ar: '٥٠٠ − ٣٠٠ = ٢٠٠.',
      explanation_en: '500 − 300 = 200.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH3_5, page: 107,
      q_ar: 'قدّر ٦٩ − ٢٤ إلى أقرب عشرة: ___',
      q_en: 'Estimate 69 − 24 to nearest ten: ___',
      answer_ar: '٥٠', answer_en: '50',
      explanation_ar: '٧٠ − ٢٠ = ٥٠.',
      explanation_en: '50.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH3_5, page: 108,
      q_ar: 'ادّخر أحمد ٤٧٣ ريالًا، واشترى هاتفًا بـ ٢٨٦. قدّر ما تبقّى لديه.',
      q_en: 'Ahmed saved 473, bought phone for 286. Estimate remaining.',
      answer_ar: 'حوالي ٢٠٠ ريال', answer_en: 'About 200 riyals',
      explanation_ar: '٥٠٠ − ٣٠٠ = ٢٠٠ (تقريب).',
      explanation_en: '500 − 300 = 200.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH3_5, page: 109,
      q_ar: 'التقدير يعطينا دائمًا الإجابة الدقيقة.',
      q_en: 'Estimation always gives exact answer.',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '1',
      explanation_ar: 'التقدير إجابة تقريبية وليست دقيقة.',
      explanation_en: 'Estimation is approximate.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_5, page: 109,
      q_ar: 'الإجابة الدقيقة لـ ٧٨ − ٤٣ مقارنةً بالتقدير ٤٠:',
      q_en: 'Exact answer for 78 − 43 vs estimate 40:',
      options_ar: ['أقل من التقدير (٣٥)','أكبر من التقدير','مساوٍ','غير ذلك'],
      options_en: ['Less (35)','Greater','Equal','Other'],
      correct: '0',
      explanation_ar: '٧٨ − ٤٣ = ٣٥ وهي أقل من التقدير ٤٠.',
      explanation_en: '35 < estimate 40.',
    },
  ];
}

// ٣-٦ الجبر: إيجاد المجهول بالطرح والجمع (ص ١١٠–١١٤)
function LESSON_3_6() {
  return [
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_5, page: 110,
      q_ar: 'إذا كان أ − ٢٥ = ٣٨، فـ أ = ؟',
      q_en: 'If a − 25 = 38, then a = ?',
      options_ar: ['٦٣','٥٣','٧٣','٤٣'], options_en: ['63','53','73','43'],
      correct: '0',
      explanation_ar: 'أ = ٣٨ + ٢٥ = ٦٣.',
      explanation_en: 'a = 38 + 25 = 63.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH3_5, page: 110,
      q_ar: '٤٧ − ب = ١٩، فـ ب = ؟', q_en: '47 − b = 19, b = ?',
      answer_ar: '٢٨', answer_en: '28',
      explanation_ar: 'ب = ٤٧ − ١٩ = ٢٨.',
      explanation_en: '28.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH3_5, page: 111,
      q_ar: '___ − ٣٤ = ٤٨', q_en: '___ − 34 = 48',
      answer_ar: '٨٢', answer_en: '82',
      explanation_ar: '٤٨ + ٣٤ = ٨٢.',
      explanation_en: '82.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH3_5, page: 111,
      q_ar: '٩٣ − ___ = ٥٧', q_en: '93 − ___ = 57',
      answer_ar: '٣٦', answer_en: '36',
      explanation_ar: '٩٣ − ٥٧ = ٣٦.',
      explanation_en: '36.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH3_5, page: 112,
      q_ar: 'إذا كان ج + ٢٩ = ٦٤، فـ ج = ٣٥.',
      q_en: 'If c + 29 = 64, then c = 35.',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: 'ج = ٦٤ − ٢٩ = ٣٥ ✓.',
      explanation_en: 'True.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH3_5, page: 113,
      q_ar: 'ادّخر طارق مبلغًا، فأنفق منه ٤٨ ريالًا وتبقّى ٦٥ ريالًا. كم كان معه؟',
      q_en: 'Tariq spent 48 riyals, left with 65. Initial amount?',
      answer_ar: '١١٣ ريالًا', answer_en: '113 riyals',
      explanation_ar: '٦٥ + ٤٨ = ١١٣.',
      explanation_en: '113.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH3_5, page: 113,
      q_ar: 'ص − ١٤٦ = ٢٣٥. قيمة ص:',
      q_en: 'x − 146 = 235. Value of x:',
      options_ar: ['٣٨١','٢٨١','٤٨١','٣٧١'], options_en: ['381','281','481','371'],
      correct: '0',
      explanation_ar: 'ص = ٢٣٥ + ١٤٦ = ٣٨١.',
      explanation_en: '381.',
    },
    {
      type: 'classify', bookRef: BOOK_PDF_CH3_5, page: 114,
      q_ar: 'صنّف: الناتج أكبر من ١٠٠ / أصغر من ١٠٠.',
      q_en: 'Sort: result >100 / <100.',
      categories_ar: ['>١٠٠', '<١٠٠'],
      categories_en: ['>100', '<100'],
      items_ar: [
        { item: 'أ−٤٥=٦٨ → أ=١١٣', correct_category: 0 },
        { item: 'ب−٣٠=٦٠ → ب=٩٠', correct_category: 1 },
        { item: '١٨٠−ج=٥٥ → ج=١٢٥', correct_category: 0 },
        { item: '٩٠−د=٤٠ → د=٥٠', correct_category: 1 },
      ],
      items_en: [
        { item: 'a−45=68 → a=113', correct_category: 0 },
        { item: 'b−30=60 → b=90', correct_category: 1 },
        { item: '180−c=55 → c=125', correct_category: 0 },
        { item: '90−d=40 → d=50', correct_category: 1 },
      ],
      explanation_ar: 'أوجد قيمة المجهول ثم قارن بـ ١٠٠.',
      explanation_en: 'Find the unknown then compare to 100.',
    },
  ];
}

export const UNIT3_LESSONS = [
  { id: 'ch3-l1', title_ar: 'الطرح دون إعادة التجميع', title_en: 'Subtract Without Regrouping', questions: LESSON_3_1() },
  { id: 'ch3-l2', title_ar: 'الطرح مع إعادة التجميع (رقمان)', title_en: 'Subtract With Regrouping (2-digit)', questions: LESSON_3_2() },
  { id: 'ch3-l3', title_ar: 'مهارة حل المسألة: استعمال الجمع للتحقق', title_en: 'Problem Solving: Check with Addition', questions: LESSON_3_3() },
  { id: 'ch3-l4', title_ar: 'الطرح مع إعادة التجميع (ثلاثة أرقام)', title_en: 'Subtract With Regrouping (3-digit)', questions: LESSON_3_4() },
  { id: 'ch3-l5', title_ar: 'تقدير الفرق', title_en: 'Estimate Differences', questions: LESSON_3_5() },
  { id: 'ch3-l6', title_ar: 'الجبر: إيجاد المجهول', title_en: 'Algebra: Find the Unknown', questions: LESSON_3_6() },
];