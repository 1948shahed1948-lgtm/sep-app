// التربية الإسلامية — الصف الثالث الابتدائي — الفصل الأول
// الفقه والسلوك — الوحدة الثانية: التيمم
// المصدر: كتاب التوحيد والفقه والسلوك 1447هـ — ص 56-57

export const PDF_55_57 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/c00ae30d2________55-57.pdf';
export const PDF_58_60 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/9473652be________58-60.pdf';

export const FIQH_UNIT2_QUESTIONS = [
  // ص 56-57: التيمم — تعريفه وحكمه وصفته
  {
    id: 'f2q1', unit: 'fiqh2', lesson: 'f2l1', page: 56,
    type: 'multipleChoice', bloom: 'understand', difficulty: 'easy',
    bookRef: PDF_55_57,
    question: 'التيمم هو:',
    options: [
      { text: 'مسح الوجه واليدين بالتراب الطاهر بنية الطهارة', correct: true },
      { text: 'الوضوء بالماء مع التراب', correct: false },
      { text: 'غسل الوجه بالتراب عوضاً عن الماء', correct: false },
      { text: 'مسح كامل الجسم بالتراب', correct: false },
    ],
    explanation: 'التيمم: مسح الوجه واليدين بالصعيد الطاهر (التراب) بنية الطهارة، عند تعذّر استخدام الماء.',
    goldenRule: 'التيمم = مسح وجه + يدان بتراب طاهر + نية.',
  },
  {
    id: 'f2q2', unit: 'fiqh2', lesson: 'f2l1', page: 56,
    type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
    bookRef: PDF_55_57,
    question: 'متى يجوز التيمم؟',
    options: [
      { text: 'عند عدم وجود الماء أو عند المرض الذي يمنع استخدامه', correct: true },
      { text: 'في أي وقت يشاء المسلم', correct: false },
      { text: 'فقط في السفر', correct: false },
      { text: 'فقط عند المرض الشديد', correct: false },
    ],
    explanation: 'يجوز التيمم عند: عدم وجود الماء، أو وجوده لكن خشية الضرر من استعماله (مرض، برد شديد).',
    goldenRule: 'التيمم رخصة عند فقدان الماء أو الضرر من استعماله.',
  },
  {
    id: 'f2q3', unit: 'fiqh2', lesson: 'f2l1', page: 56,
    type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
    bookRef: PDF_55_57,
    question: 'التيمم بديل عن الوضوء والغسل عند تعذّر استخدام الماء.',
    correctAnswer: true,
    explanation: 'التيمم يقوم مقام الوضوء والغسل عند تعذّر استخدام الماء، قال تعالى: ﴿فَلَمْ تَجِدُوا مَاءً فَتَيَمَّمُوا صَعِيدًا طَيِّبًا﴾.',
    goldenRule: 'التيمم = وضوء/غسل عند تعذّر الماء.',
  },
  {
    id: 'f2q4', unit: 'fiqh2', lesson: 'f2l1', page: 57,
    type: 'ordering', bloom: 'apply', difficulty: 'medium',
    bookRef: PDF_55_57,
    question: 'رتّب خطوات التيمم الصحيحة:',
    items: ['مسح اليدين إلى الرسغين', 'النية', 'مسح الوجه كاملاً', 'ضرب الكفين على التراب الطاهر'],
    correctOrder: [1, 3, 2, 0],
    explanation: 'خطوات التيمم: النية ← ضرب الكفين ← مسح الوجه ← مسح اليدين.',
    goldenRule: 'خطوات التيمم: نية ← ضرب ← وجه ← يدان.',
  },
  {
    id: 'f2q5', unit: 'fiqh2', lesson: 'f2l1', page: 57,
    type: 'multipleChoice', bloom: 'understand', difficulty: 'medium',
    bookRef: PDF_55_57,
    question: 'ما الذي يُستخدم في التيمم؟',
    options: [
      { text: 'الصعيد الطاهر (التراب النظيف)', correct: true },
      { text: 'الرمل فقط', correct: false },
      { text: 'الطين فقط', correct: false },
      { text: 'أي شيء من الأرض', correct: false },
    ],
    explanation: 'التيمم يكون بالصعيد الطاهر، وهو وجه الأرض الطاهر من تراب ورمل ونحوه.',
    goldenRule: 'التيمم بالصعيد = وجه الأرض الطاهر.',
  },
  {
    id: 'f2q6', unit: 'fiqh2', lesson: 'f2l1', page: 57,
    type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
    bookRef: PDF_55_57,
    question: 'يبطل التيمم إذا وُجد الماء.',
    correctAnswer: true,
    explanation: 'إذا وُجد الماء بطل التيمم، ووجب الوضوء أو الغسل، لأن التيمم رخصة عند العجز.',
    goldenRule: 'التيمم يبطل بوجود الماء والقدرة على استعماله.',
  },
  {
    id: 'f2q7', unit: 'fiqh2', lesson: 'f2l1', page: 56,
    type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
    bookRef: PDF_55_57,
    question: 'مريض لا يستطيع استخدام الماء لمرضه. ماذا يفعل للصلاة؟',
    options: [
      { text: 'يتيمم بالتراب الطاهر ويصلي', correct: true },
      { text: 'يترك الصلاة حتى يبرأ', correct: false },
      { text: 'يصلي بدون طهارة', correct: false },
      { text: 'ينتظر حتى يجد من يساعده على الوضوء', correct: false },
    ],
    explanation: 'المريض الذي يتضرر من استخدام الماء يجوز له التيمم ويصلي، ولا تسقط الصلاة عنه.',
    goldenRule: 'المريض العاجز عن الماء يتيمم ويصلي.',
  },
  {
    id: 'f2q8', unit: 'fiqh2', lesson: 'f2l1', page: 56,
    type: 'multipleChoice', bloom: 'evaluate', difficulty: 'hard',
    bookRef: PDF_55_57,
    question: 'ما الحكمة من تشريع التيمم؟',
    options: [
      { text: 'رفع الحرج وتيسير الطهارة على المسلم عند تعذّر الماء', correct: true },
      { text: 'إثبات أن التراب أفضل من الماء', correct: false },
      { text: 'تشجيع المسلمين على العيش في الصحراء', correct: false },
      { text: 'لا توجد حكمة', correct: false },
    ],
    explanation: 'الحكمة: رفع الحرج عن المسلم وتيسير الطهارة، فالإسلام دين يُسر. قال تعالى: ﴿وَمَا جَعَلَ عَلَيْكُمْ فِي الدِّينِ مِنْ حَرَجٍ﴾.',
    goldenRule: 'التيمم = رحمة الله ورفع الحرج.',
  },
  {
    id: 'f2q9', unit: 'fiqh2', lesson: 'f2l1', page: 57,
    type: 'classify', bloom: 'analyze', difficulty: 'medium',
    bookRef: PDF_55_57,
    question: 'صنّف: حالات يجوز فيها التيمم / لا يجوز:',
    categories: ['يجوز التيمم', 'لا يجوز التيمم'],
    items: [
      { text: 'فقدان الماء في السفر', correct_category: 0 },
      { text: 'وجود الماء والصحة تامة', correct_category: 1 },
      { text: 'المرض الذي يمنع استخدام الماء', correct_category: 0 },
      { text: 'الكسل عن استخدام الماء', correct_category: 1 },
      { text: 'الخوف من ضرر الماء في البرد الشديد', correct_category: 0 },
    ],
    explanation: 'يجوز التيمم: عند فقدان الماء أو الضرر من استعماله. لا يجوز: مع وجود الماء والقدرة.',
    goldenRule: 'التيمم رخصة مشروطة بالعجز عن الماء.',
  },
  {
    id: 'f2q10', unit: 'fiqh2', lesson: 'f2l1', page: 57,
    type: 'trueFalse', bloom: 'remember', difficulty: 'easy',
    bookRef: PDF_55_57,
    question: 'في التيمم يُمسح الوجه ثم اليدان إلى الرسغين.',
    correctAnswer: true,
    explanation: 'في التيمم: يُضرب الكفان على التراب، ثم يُمسح الوجه كاملاً، ثم اليدان إلى الرسغين.',
    goldenRule: 'أعضاء التيمم: الوجه + اليدان إلى الرسغين فقط.',
  },
];