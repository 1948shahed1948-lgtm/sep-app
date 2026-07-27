// التربية الإسلامية — الصف الثالث الابتدائي — الفصل الأول
// التوحيد — الوحدة الثانية: أركان الإسلام
// المصدر: كتاب التوحيد والفقه والسلوك 1447هـ — ص 12-38

export const PDF_10_12 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/ab364885c________10-12.pdf';
export const PDF_13_15 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/7a91997e3________13-15.pdf';
export const PDF_16_18 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/6baa8ccbc________16-18.pdf';
export const PDF_19_21 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/241c7be5b________19-21.pdf';
export const PDF_22_24 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/95ec650f6________22-24.pdf';
export const PDF_25_27 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/ea7202c8d________25-27.pdf';
export const PDF_28_30 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/931863b8e________28-30.pdf';
export const PDF_31_33 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/3fe3579a0________31-33.pdf';
export const PDF_34_36 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/79af2995f________34-36.pdf';
export const PDF_37_39 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/e91134ff1________37-39.pdf';

export const TAWHEED_UNIT2_QUESTIONS = [
  // ص 12-13: أركان الإسلام الخمسة
  {
    id: 't2q1', unit: 'tawheed2', lesson: 't2l1', page: 12,
    type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
    bookRef: PDF_10_12,
    question: 'كم عدد أركان الإسلام؟',
    options: [
      { text: 'خمسة', correct: true },
      { text: 'ستة', correct: false },
      { text: 'أربعة', correct: false },
      { text: 'سبعة', correct: false },
    ],
    explanation: 'أركان الإسلام خمسة: الشهادتان، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت.',
    goldenRule: 'أركان الإسلام خمسة = شهادتان + صلاة + زكاة + صوم + حج.',
  },
  {
    id: 't2q2', unit: 'tawheed2', lesson: 't2l1', page: 12,
    type: 'ordering', bloom: 'remember', difficulty: 'medium',
    bookRef: PDF_10_12,
    question: 'رتّب أركان الإسلام الخمسة بالترتيب الصحيح:',
    items: ['إقام الصلاة', 'شهادة أن لا إله إلا الله وأن محمداً رسول الله', 'حج البيت', 'صوم رمضان', 'إيتاء الزكاة'],
    correctOrder: [1, 0, 4, 3, 2],
    explanation: 'أركان الإسلام بالترتيب: ١-الشهادتان، ٢-الصلاة، ٣-الزكاة، ٤-الصوم، ٥-الحج.',
    goldenRule: 'الشهادتان أول الأركان والأساس الذي تُبنى عليه بقية الأركان.',
  },
  {
    id: 't2q3', unit: 'tawheed2', lesson: 't2l1', page: 13,
    type: 'multipleChoice', bloom: 'understand', difficulty: 'easy',
    bookRef: PDF_13_15,
    question: 'الركن الأول من أركان الإسلام هو:',
    options: [
      { text: 'شهادة أن لا إله إلا الله وأن محمداً رسول الله', correct: true },
      { text: 'إقام الصلاة', correct: false },
      { text: 'إيتاء الزكاة', correct: false },
      { text: 'حج البيت', correct: false },
    ],
    explanation: 'الركن الأول هو: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وهو أساس الإسلام.',
    goldenRule: 'الشهادتان = مفتاح الإسلام وأساسه.',
  },
  // الشهادتان ص 13-20
  {
    id: 't2q4', unit: 'tawheed2', lesson: 't2l2', page: 14,
    type: 'multipleChoice', bloom: 'understand', difficulty: 'medium',
    bookRef: PDF_13_15,
    question: 'معنى "لا إله إلا الله":',
    options: [
      { text: 'لا معبود بحق إلا الله وحده لا شريك له', correct: true },
      { text: 'لا رب إلا الله', correct: false },
      { text: 'لا خالق غير الله', correct: false },
      { text: 'لا رازق سوى الله', correct: false },
    ],
    explanation: 'معنى "لا إله إلا الله": لا معبود بحق إلا الله وحده لا شريك له.',
    goldenRule: 'لا إله إلا الله = نفي العبادة عن كل ما سوى الله + إثباتها لله وحده.',
  },
  {
    id: 't2q5', unit: 'tawheed2', lesson: 't2l2', page: 16,
    type: 'multipleChoice', bloom: 'understand', difficulty: 'medium',
    bookRef: PDF_16_18,
    question: 'معنى "محمد رسول الله":',
    options: [
      { text: 'تصديق النبي محمد ﷺ فيما أخبر وطاعته فيما أمر واجتناب ما نهى عنه', correct: true },
      { text: 'أن محمداً ﷺ أفضل الخلق', correct: false },
      { text: 'أن محمداً ﷺ رُبّي في مكة المكرمة', correct: false },
      { text: 'أن محمداً ﷺ ختم الأنبياء', correct: false },
    ],
    explanation: 'معنى "محمد رسول الله": تصديقه فيما أخبر، وطاعته فيما أمر، واجتناب ما نهى عنه وزجر.',
    goldenRule: 'شهادة محمد رسول الله = تصديق + طاعة + اجتناب النهي.',
  },
  {
    id: 't2q6', unit: 'tawheed2', lesson: 't2l2', page: 18,
    type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
    bookRef: PDF_16_18,
    question: 'الشهادتان يجب أن تُقالا باللسان مع التصديق بالقلب.',
    correctAnswer: true,
    explanation: 'الشهادتان تستلزم الإقرار باللسان والتصديق بالقلب معاً، ولا تنفع إحداهما دون الأخرى.',
    goldenRule: 'الشهادتان = قول باللسان + تصديق بالقلب.',
  },
  // الصلاة ص 21-27
  {
    id: 't2q7', unit: 'tawheed2', lesson: 't2l3', page: 22,
    type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
    bookRef: PDF_22_24,
    question: 'كم عدد الصلوات المفروضة في اليوم والليلة؟',
    options: [
      { text: 'خمس صلوات', correct: true },
      { text: 'ثلاث صلوات', correct: false },
      { text: 'سبع صلوات', correct: false },
      { text: 'أربع صلوات', correct: false },
    ],
    explanation: 'فرض الله على المسلمين خمس صلوات في اليوم والليلة: الفجر، والظهر، والعصر، والمغرب، والعشاء.',
    goldenRule: 'الصلوات المفروضة = خمس صلوات يومياً.',
  },
  {
    id: 't2q8', unit: 'tawheed2', lesson: 't2l3', page: 23,
    type: 'matching', bloom: 'remember', difficulty: 'medium',
    bookRef: PDF_22_24,
    question: 'صل كل صلاة بعدد ركعاتها:',
    pairs: [
      { left: 'الفجر', right: 'ركعتان' },
      { left: 'الظهر', right: 'أربع ركعات' },
      { left: 'العصر', right: 'أربع ركعات' },
      { left: 'المغرب', right: 'ثلاث ركعات' },
      { left: 'العشاء', right: 'أربع ركعات' },
    ],
    explanation: 'الفجر: ركعتان. الظهر: ٤. العصر: ٤. المغرب: ٣. العشاء: ٤. المجموع: ١٧ ركعة.',
    goldenRule: 'مجموع ركعات الصلوات الخمس = ١٧ ركعة.',
  },
  {
    id: 't2q9', unit: 'tawheed2', lesson: 't2l3', page: 24,
    type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
    bookRef: PDF_22_24,
    question: 'الصلاة عماد الدين، من أقامها فقد أقام الدين.',
    correctAnswer: true,
    explanation: 'الصلاة عماد الدين، قال النبي ﷺ: "الصلاة عماد الدين، من أقامها فقد أقام الدين، ومن هدمها فقد هدم الدين".',
    goldenRule: 'الصلاة عماد الدين.',
  },
  // الزكاة ص 28-33
  {
    id: 't2q10', unit: 'tawheed2', lesson: 't2l4', page: 28,
    type: 'multipleChoice', bloom: 'understand', difficulty: 'medium',
    bookRef: PDF_28_30,
    question: 'الزكاة هي:',
    options: [
      { text: 'حق واجب في المال يُدفع للمستحقين من المسلمين', correct: true },
      { text: 'صدقة تطوعية يدفعها المسلم متى شاء', correct: false },
      { text: 'هدية تُقدَّم للفقراء في رمضان', correct: false },
      { text: 'ضريبة تُدفع للدولة', correct: false },
    ],
    explanation: 'الزكاة: حق واجب في المال يُدفع للمستحقين من المسلمين، وهي الركن الثالث من أركان الإسلام.',
    goldenRule: 'الزكاة = حق واجب في المال لمستحقيه.',
  },
  {
    id: 't2q11', unit: 'tawheed2', lesson: 't2l4', page: 29,
    type: 'multipleChoice', bloom: 'understand', difficulty: 'medium',
    bookRef: PDF_28_30,
    question: 'مَن الذين تجب عليهم الزكاة؟',
    options: [
      { text: 'كل مسلم يملك النصاب ومرّ عليه الحول', correct: true },
      { text: 'كل مسلم بالغ', correct: false },
      { text: 'الأغنياء فقط دون الفقراء', correct: false },
      { text: 'من يريد ذلك تطوعاً', correct: false },
    ],
    explanation: 'الزكاة تجب على كل مسلم يملك النصاب (الحد الأدنى المقرر شرعاً) وقد مضى عليه حول كامل (سنة هجرية).',
    goldenRule: 'الزكاة تجب بشرطين: النصاب + الحول.',
  },
  {
    id: 't2q12', unit: 'tawheed2', lesson: 't2l4', page: 30,
    type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
    bookRef: PDF_28_30,
    question: 'الزكاة تُطهّر المال وتزيده بركة.',
    correctAnswer: true,
    explanation: 'الزكاة تُطهّر المال وتزيده بركة، وتُطهّر النفس من البخل والشح.',
    goldenRule: 'الزكاة = تطهير للمال + بركة + تكافل اجتماعي.',
  },
  {
    id: 't2q13', unit: 'tawheed2', lesson: 't2l4', page: 31,
    type: 'multipleChoice', bloom: 'apply', difficulty: 'medium',
    bookRef: PDF_31_33,
    question: 'يملك خالد مالاً كثيراً ومرّ عليه عام كامل. ماذا يجب عليه؟',
    options: [
      { text: 'أن يُخرج زكاة ماله', correct: true },
      { text: 'أن يتصدق إن أراد', correct: false },
      { text: 'لا شيء عليه', correct: false },
      { text: 'أن ينتظر حتى يُضاعف ماله', correct: false },
    ],
    explanation: 'إذا مضى الحول على النصاب وجب إخراج الزكاة، وهذا واجب ديني لا خيار فيه.',
    goldenRule: 'الزكاة واجبة عند استيفاء شرطي النصاب والحول.',
  },
  // الصوم ص 34-36
  {
    id: 't2q14', unit: 'tawheed2', lesson: 't2l5', page: 34,
    type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
    bookRef: PDF_34_36,
    question: 'في أيّ شهر يصوم المسلمون؟',
    options: [
      { text: 'شهر رمضان المبارك', correct: true },
      { text: 'شهر شوال', correct: false },
      { text: 'شهر ذي الحجة', correct: false },
      { text: 'شهر محرم', correct: false },
    ],
    explanation: 'يصوم المسلمون شهر رمضان المبارك وهو الركن الرابع من أركان الإسلام.',
    goldenRule: 'صوم رمضان = الركن الرابع من أركان الإسلام.',
  },
  {
    id: 't2q15', unit: 'tawheed2', lesson: 't2l5', page: 34,
    type: 'multipleChoice', bloom: 'understand', difficulty: 'easy',
    bookRef: PDF_34_36,
    question: 'الصوم هو:',
    options: [
      { text: 'الإمساك عن المفطّرات من طلوع الفجر إلى غروب الشمس', correct: true },
      { text: 'الإمساك عن الطعام فقط طوال اليوم', correct: false },
      { text: 'ترك الطعام والشراب ليلاً', correct: false },
      { text: 'الإمساك عن الكلام طوال اليوم', correct: false },
    ],
    explanation: 'الصوم: الإمساك عن المفطّرات (الأكل والشرب وسائر المفطّرات) من طلوع الفجر إلى غروب الشمس.',
    goldenRule: 'الصوم = إمساك عن المفطّرات من الفجر إلى الغروب.',
  },
  {
    id: 't2q16', unit: 'tawheed2', lesson: 't2l5', page: 35,
    type: 'trueFalse', bloom: 'understand', difficulty: 'easy',
    bookRef: PDF_34_36,
    question: 'من فوائد الصوم تقوية الإرادة وتزكية النفس.',
    correctAnswer: true,
    explanation: 'من فوائد الصوم: تقوية الإرادة، وتزكية النفس، والشعور بجوع الفقراء، وتحقيق التقوى.',
    goldenRule: 'فوائد الصوم: تقوى + إرادة + تزكية نفس + تكافل.',
  },
  // الحج ص 37-38
  {
    id: 't2q17', unit: 'tawheed2', lesson: 't2l6', page: 37,
    type: 'multipleChoice', bloom: 'remember', difficulty: 'easy',
    bookRef: PDF_37_39,
    question: 'الحج يُؤدَّى في:',
    options: [
      { text: 'مكة المكرمة', correct: true },
      { text: 'المدينة المنورة', correct: false },
      { text: 'القدس الشريف', correct: false },
      { text: 'أيّ مكان في الجزيرة العربية', correct: false },
    ],
    explanation: 'الحج يُؤدَّى في مكة المكرمة وما حولها من المشاعر المقدسة كمنى وعرفة والمزدلفة.',
    goldenRule: 'الحج = قصد مكة المكرمة بالمناسك المحددة.',
  },
  {
    id: 't2q18', unit: 'tawheed2', lesson: 't2l6', page: 37,
    type: 'multipleChoice', bloom: 'understand', difficulty: 'medium',
    bookRef: PDF_37_39,
    question: 'على مَن يجب الحج؟',
    options: [
      { text: 'على كل مسلم مكلّف مستطيع مرة واحدة في العمر', correct: true },
      { text: 'على كل مسلم بالغ في كل عام', correct: false },
      { text: 'على الرجال دون النساء', correct: false },
      { text: 'على من يشاء من المسلمين', correct: false },
    ],
    explanation: 'الحج واجب مرة واحدة في العمر على كل مسلم مكلّف مستطيع (قادر صحياً ومادياً).',
    goldenRule: 'الحج = مرة واحدة في العمر + شرط الاستطاعة.',
  },
  {
    id: 't2q19', unit: 'tawheed2', lesson: 't2l6', page: 38,
    type: 'trueFalse', bloom: 'remember', difficulty: 'easy',
    bookRef: PDF_37_39,
    question: 'الحج الركن الخامس والأخير من أركان الإسلام.',
    correctAnswer: true,
    explanation: 'الحج هو الركن الخامس والأخير من أركان الإسلام، قال ﷺ: "بُني الإسلام على خمس...".',
    goldenRule: 'الحج = الركن الخامس من أركان الإسلام.',
  },
  {
    id: 't2q20', unit: 'tawheed2', lesson: 't2l1', page: 12,
    type: 'classify', bloom: 'analyze', difficulty: 'medium',
    bookRef: PDF_10_12,
    question: 'صنّف كل بند تحت الركن الصحيح:',
    categories: ['الشهادتان', 'الصلاة', 'الزكاة', 'الصوم', 'الحج'],
    items: [
      { text: 'خمس مرات يومياً', correct_category: 1 },
      { text: 'مكة المكرمة', correct_category: 4 },
      { text: 'شهر رمضان', correct_category: 3 },
      { text: 'حق في المال', correct_category: 2 },
      { text: 'لا إله إلا الله', correct_category: 0 },
    ],
    explanation: 'كل ركن له خصائصه: الصلاة 5 مرات، الحج في مكة، الصوم في رمضان، الزكاة حق مالي، الشهادتان قول.',
    goldenRule: 'أركان الإسلام الخمسة متكاملة لا يغني بعضها عن بعض.',
  },
  {
    id: 't2q21', unit: 'tawheed2', lesson: 't2l1', page: 12,
    type: 'multipleChoice', bloom: 'apply', difficulty: 'hard',
    bookRef: PDF_10_12,
    question: 'رجل يشهد أن لا إله إلا الله، ويُصلّي، ويصوم، ويحجّ، لكنه لا يُخرج الزكاة. ما الذي ينقصه؟',
    options: [
      { text: 'الركن الثالث: الزكاة', correct: true },
      { text: 'الركن الأول: الشهادتان', correct: false },
      { text: 'الركن الرابع: الصوم', correct: false },
      { text: 'الركن الخامس: الحج', correct: false },
    ],
    explanation: 'الزكاة هي الركن الثالث من أركان الإسلام، ومن ترك ركناً فقد نقص إسلامه.',
    goldenRule: 'أركان الإسلام الخمسة كلها واجبة ولا يُترك منها شيء.',
  },
];