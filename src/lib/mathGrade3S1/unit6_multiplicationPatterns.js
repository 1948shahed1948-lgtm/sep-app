// بنك رياضيات الصف الثالث الابتدائي — الفصل الخامس (بقية الدروس): الضرب (٢)
// المصدر: كتاب الرياضيات ١٤٤٧هـ — ص ١٥٣–١٧١
// الدروس الرسمية (وحدات جديدة من الكتاب):
//  ٥-٣ مهارة حل المسألة: البحث عن نمط
//  ٥-٤ الضرب في ٧
//  ٥-٥ الضرب في ٨
//  ٥-٦ الضرب في ٩
//  ٥-٧ الجبر: الخاصية التجميعية للضرب

// روابط الـ PDF من الكتاب الأصلي المرفوع
export const BOOK_PDF_CH5_EXT = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/9af896131______1--10--6.pdf';
export const BOOK_PDF_CH5_7   = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/87b375792______1--10--8.pdf';
export const BOOK_PDF_CH5_8   = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/497a2eb1a______1--10--9.pdf';
export const BOOK_PDF_CH5_9   = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/3be50209c______1--10--10.pdf';
export const BOOK_PDF_CH5_ASS = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/4311413f0______1--10--11.pdf';

// ٥-٣ مهارة حل المسألة: البحث عن نمط (ص ١٥٢–١٥٣)
function LESSON_5_3() {
  return [
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_EXT, page: 152,
      q_ar: 'هدى وضعت ٤ قطع في الصف الأول، ٨ في الثاني، ١٦ في الثالث. ما النمط؟',
      q_en: 'Huda placed 4, 8, 16 pieces in rows 1,2,3. What is the pattern?',
      options_ar: ['تضاعف','تضاف ٤','تضاف ٨','تقسم على ٢'],
      options_en: ['Doubles','Add 4','Add 8','Divide by 2'],
      correct: '0',
      explanation_ar: 'كل صف = ضِعف السابق: ٤، ٨، ١٦، ٣٢، ...',
      explanation_en: 'Doubles: 4, 8, 16, 32...',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH5_EXT, page: 152,
      q_ar: 'إذا استمر النمط ٤، ٨، ١٦ — كم قطعة في الصف السادس؟',
      q_en: 'Pattern 4,8,16 — pieces in row 6?',
      answer_ar: '١٢٨', answer_en: '128',
      explanation_ar: '٤، ٨، ١٦، ٣٢، ٦٤، ١٢٨.',
      explanation_en: '4,8,16,32,64,128.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_EXT, page: 153,
      q_ar: 'وضعت فاطمة ٥ ريالات في الحصالة الشهر الأول، وتزيد ريالًا كل شهر. كم في الشهر ١٢؟',
      q_en: 'Fatima saves 5 riyals month 1, +1 each month. Month 12?',
      options_ar: ['١٧','١٦','١٥','١٨'], options_en: ['17','16','15','18'],
      correct: '1',
      explanation_ar: '٥+١١=١٦ (شهر ١ → ٥، يضاف ١ كل شهر).',
      explanation_en: '5+11=16.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH5_EXT, page: 153,
      q_ar: 'نمط جمع الصدف: ٦، ١٢، ٢٤، ___',
      q_en: 'Shell pattern: 6, 12, 24, ___',
      answer_ar: '٤٨', answer_en: '48',
      explanation_ar: 'كل حد = ضعف السابق: ٢٤×٢=٤٨.',
      explanation_en: '24×2=48.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH5_EXT, page: 153,
      q_ar: 'خطة "البحث عن نمط" تساعد على حل المسائل من خلال ملاحظة التكرار.',
      q_en: 'The "Find a Pattern" strategy helps solve problems by observing repetition.',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: 'اكتشاف النمط يُسهّل حل المسائل.',
      explanation_en: 'True.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH5_EXT, page: 153,
      q_ar: 'علي يقفز ٣ قفزات للأمام وقفزة للخلف. كم قفزة يحتاج ليصل لـ ٦ أمتار؟ (كل قفزة = ١م)',
      q_en: 'Ali jumps 3 forward, 1 back. Reach 6m? (each jump = 1m)',
      answer_ar: '١٢ قفزة للأمام', answer_en: '12 forward jumps',
      explanation_ar: 'صافي تقدم كل ٤ قفزات = ٢ م. لـ ٦ م: ٣ دورات × ٤ = ١٢ قفزة.',
      explanation_en: 'Net 2m per 4 jumps, need 3 cycles = 12.',
    },
  ];
}

// ٥-٤ الضرب في ٧ (ص ١٥٤–١٥٦)
function LESSON_5_4() {
  return [
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_7, page: 154,
      q_ar: 'في قطار مدينة الألعاب ٥ عربات، كل منها ٧ مقاعد. كم مقعدًا؟',
      q_en: 'Fairground train: 5 cars × 7 seats. Total seats?',
      options_ar: ['٣٠','٣٥','٤٠','٤٢'], options_en: ['30','35','40','42'],
      correct: '1',
      explanation_ar: '٥ × ٧ = ٣٥.',
      explanation_en: '5 × 7 = 35.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH5_7, page: 154,
      q_ar: '٧ × ٣ = ؟', q_en: '7 × 3 = ?',
      answer_ar: '٢١', answer_en: '21',
      explanation_ar: '٧ × ٣ = ٢١.',
      explanation_en: '21.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH5_7, page: 155,
      q_ar: '٩ × ٧ = ؟', q_en: '9 × 7 = ?',
      answer_ar: '٦٣', answer_en: '63',
      explanation_ar: '٩ × ٧ = ٦٣.',
      explanation_en: '63.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH5_7, page: 155,
      q_ar: '٧ × ٦ = ٤٢', q_en: '7 × 6 = 42',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: '٧ × ٦ = ٤٢ صحيح.',
      explanation_en: 'True.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH5_7, page: 155,
      q_ar: '٧ × ___ = ٤٩', q_en: '7 × ___ = 49',
      answer_ar: '٧', answer_en: '7',
      explanation_ar: '٧ × ٧ = ٤٩.',
      explanation_en: '7.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH5_7, page: 155,
      q_ar: '___ × ٧ = ٧٠', q_en: '___ × 7 = 70',
      answer_ar: '١٠', answer_en: '10',
      explanation_ar: '١٠ × ٧ = ٧٠.',
      explanation_en: '10.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_7, page: 155,
      q_ar: 'أعطت هيفاء ٤ أقلام لكل صديقة من ٧ صديقات. الكل:',
      q_en: 'Haifa gave 4 pens to each of 7 friends. Total:',
      options_ar: ['٢٤','٢٨','٣٢','٢١'], options_en: ['24','28','32','21'],
      correct: '1',
      explanation_ar: '٤ × ٧ = ٢٨.',
      explanation_en: '28.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH5_7, page: 156,
      q_ar: 'لعب عامر و٦ من أصدقائه كرة السلة. أحرزوا ٣٥ هدفًا. إذا أحرز كل واحد العدد نفسه، كم أحرز كل واحد؟',
      q_en: 'Amer + 6 friends scored 35 goals equally. Per person?',
      answer_ar: '٥ أهداف', answer_en: '5 goals',
      explanation_ar: '٣٥ ÷ ٧ = ٥.',
      explanation_en: '5.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_7, page: 156,
      q_ar: 'في صندوق ألعاب ٢٨ سيارة بـ ٤ ألوان مختلفة. لكل لون العدد نفسه. عدد ألوان السيارات:',
      q_en: '28 toy cars, 4 colors equally. Cars per color?',
      options_ar: ['٤','٦','٧','٨'], options_en: ['4','6','7','8'],
      correct: '2',
      explanation_ar: '٢٨ ÷ ٤ = ٧.',
      explanation_en: '7.',
    },
    {
      type: 'classify', bookRef: BOOK_PDF_CH5_7, page: 156,
      q_ar: 'صنّف نواتج الضرب في ٧ حسب: أكبر من ٤٠ / أصغر من ٤٠.',
      q_en: 'Sort 7× products: >40 / <40.',
      categories_ar: ['>٤٠', '<٤٠'],
      categories_en: ['>40', '<40'],
      items_ar: [
        { item: '٧×٧=٤٩', correct_category: 0 },
        { item: '٤×٧=٢٨', correct_category: 1 },
        { item: '٧×٨=٥٦', correct_category: 0 },
        { item: '٣×٧=٢١', correct_category: 1 },
      ],
      items_en: [
        { item: '7×7=49', correct_category: 0 },
        { item: '4×7=28', correct_category: 1 },
        { item: '7×8=56', correct_category: 0 },
        { item: '3×7=21', correct_category: 1 },
      ],
      explanation_ar: 'قارن الناتج بـ ٤٠.',
      explanation_en: 'Compare to 40.',
    },
  ];
}

// ٥-٥ الضرب في ٨ (ص ١٥٨–١٦٠)
function LESSON_5_5() {
  return [
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_8, page: 158,
      q_ar: 'على جانب الطريق ٦ أشجار، على كل شجرة ٨ عصافير. كم عصفورًا؟',
      q_en: '6 trees × 8 birds each = ?',
      options_ar: ['٤٢','٤٤','٤٦','٤٨'], options_en: ['42','44','46','48'],
      correct: '3',
      explanation_ar: '٦ × ٨ = ٤٨.',
      explanation_en: '6 × 8 = 48.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH5_8, page: 158,
      q_ar: '٨ × ٤ = ؟', q_en: '8 × 4 = ?',
      answer_ar: '٣٢', answer_en: '32',
      explanation_ar: '٨ × ٤ = ٣٢.',
      explanation_en: '32.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH5_8, page: 159,
      q_ar: '٩ × ٨ = ؟', q_en: '9 × 8 = ?',
      answer_ar: '٧٢', answer_en: '72',
      explanation_ar: '٩ × ٨ = ٧٢.',
      explanation_en: '72.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH5_8, page: 159,
      q_ar: '٨ × ٦ = ٤٨ — يمكن التحقق بـ ٦ × ٨ = ٤٨ (خاصية الإبدال).',
      q_en: '8×6=48, check by 6×8=48 (commutative).',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: 'خاصية الإبدال: ترتيب العوامل لا يغير الناتج.',
      explanation_en: 'True.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH5_8, page: 159,
      q_ar: '٨ × ___ = ٦٤', q_en: '8 × ___ = 64',
      answer_ar: '٨', answer_en: '8',
      explanation_ar: '٨ × ٨ = ٦٤.',
      explanation_en: '8.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH5_8, page: 159,
      q_ar: '___ × ٨ = ٨٠', q_en: '___ × 8 = 80',
      answer_ar: '١٠', answer_en: '10',
      explanation_ar: '١٠ × ٨ = ٨٠.',
      explanation_en: '10.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH5_8, page: 160,
      q_ar: 'عمل سامي ٥ ساعات الأسبوع الأول. الأسبوع الأخير عمل ٨ أمثال ذلك. كم ساعة الأسبوع الأخير؟',
      q_en: 'Sami worked 5 hours first week, 8× last week. Hours last week?',
      answer_ar: '٤٠ ساعة', answer_en: '40 hours',
      explanation_ar: '٥ × ٨ = ٤٠.',
      explanation_en: '40.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_8, page: 160,
      q_ar: 'يوجد في السيارة ٩ صناديق، كل صندوق ٨ عبوات. باع الموزّع صندوقين للأول. كم عبوة بقيت؟',
      q_en: '9 boxes × 8 units. Sold 2 boxes. Remaining units?',
      options_ar: ['٥٦','٧٢','٦٤','٤٨'], options_en: ['56','72','64','48'],
      correct: '0',
      explanation_ar: '(٩−٢) × ٨ = ٧ × ٨ = ٥٦.',
      explanation_en: '7 × 8 = 56.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH5_8, page: 160,
      q_ar: 'أحمد يشتري علبة حليب كل يوم بـ ٤ رياالت. كم يُنفق في ٨ أيام؟',
      q_en: '4 riyals/day × 8 days?',
      answer_ar: '٣٢ ريالًا', answer_en: '32 riyals',
      explanation_ar: '٤ × ٨ = ٣٢.',
      explanation_en: '32.',
    },
    {
      type: 'match', bookRef: BOOK_PDF_CH5_8, page: 160,
      q_ar: 'صل الضرب في ٨ بناتجه.',
      q_en: 'Match 8× to product.',
      pairs_ar: [
        { left: '٢ × ٨', right: '١٦' },
        { left: '٥ × ٨', right: '٤٠' },
        { left: '٧ × ٨', right: '٥٦' },
        { left: '٩ × ٨', right: '٧٢' },
      ],
      pairs_en: [
        { left: '2 × 8', right: '16' },
        { left: '5 × 8', right: '40' },
        { left: '7 × 8', right: '56' },
        { left: '9 × 8', right: '72' },
      ],
      explanation_ar: 'حقائق الضرب في ٨.',
      explanation_en: '8× facts.',
    },
  ];
}

// ٥-٦ الضرب في ٩ (ص ١٦١–١٦٣)
function LESSON_5_6() {
  return [
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_9, page: 161,
      q_ar: 'باع تاجر ٨ صناديق عبوات مُربّى، كل صندوق ٩ عبوات. كم عبوة؟',
      q_en: '8 boxes × 9 jars = ?',
      options_ar: ['٦٤','٧٢','٨١','٦٣'], options_en: ['64','72','81','63'],
      correct: '1',
      explanation_ar: '٨ × ٩ = ٧٢.',
      explanation_en: '72.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH5_9, page: 161,
      q_ar: '٩ × ٦ = ؟', q_en: '9 × 6 = ?',
      answer_ar: '٥٤', answer_en: '54',
      explanation_ar: '٩ × ٦ = ٥٤.',
      explanation_en: '54.',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH5_9, page: 162,
      q_ar: '٩ × ٩ = ؟', q_en: '9 × 9 = ?',
      answer_ar: '٨١', answer_en: '81',
      explanation_ar: '٩ × ٩ = ٨١.',
      explanation_en: '81.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_9, page: 162,
      q_ar: 'نمط الضرب في ٩: رقم العشرات في الناتج...',
      q_en: 'Pattern in 9×: the tens digit...',
      options_ar: ['يزيد بواحد من العامل','يقل بواحد عن العامل المضروب في ٩','يبقى ثابتًا','يتضاعف'],
      options_en: ['Increases by 1','Decreases by 1 from the factor','Stays constant','Doubles'],
      correct: '1',
      explanation_ar: 'في ٩×٦=٥٤: رقم العشرات=٥=٦−١. رقم العشرات = العامل − ١.',
      explanation_en: 'Tens digit = factor − 1.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH5_9, page: 162,
      q_ar: 'مجموع أرقام أي ناتج للضرب في ٩ يساوي ٩.',
      q_en: 'Sum of digits of any 9× product equals 9.',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: 'مثال: ٩×٧=٦٣ → ٦+٣=٩ ✓.',
      explanation_en: 'True.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH5_9, page: 162,
      q_ar: '٩ × ___ = ٤٥', q_en: '9 × ___ = 45',
      answer_ar: '٥', answer_en: '5',
      explanation_ar: '٩ × ٥ = ٤٥.',
      explanation_en: '5.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH5_9, page: 163,
      q_ar: '___ × ٩ = ٢٧', q_en: '___ × 9 = 27',
      answer_ar: '٣', answer_en: '3',
      explanation_ar: '٣ × ٩ = ٢٧.',
      explanation_en: '3.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH5_9, page: 163,
      q_ar: 'اشترت سارة ٥ قصص. إذا كان سعر القصة الواحدة ٩ رياالت. كم دفعت؟',
      q_en: '5 stories × 9 riyals = ?',
      answer_ar: '٤٥ ريالًا', answer_en: '45 riyals',
      explanation_ar: '٥ × ٩ = ٤٥.',
      explanation_en: '45.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH5_9, page: 163,
      q_ar: 'تحتفظ ليلى بـ ٦٣ ربطة شعر في صناديق صغيرة، كل صندوق ٩ قطع. كم صندوقًا؟',
      q_en: '63 hair ties ÷ 9 per box = ? boxes',
      answer_ar: '٧ صناديق', answer_en: '7 boxes',
      explanation_ar: '٦٣ ÷ ٩ = ٧.',
      explanation_en: '7.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_9, page: 163,
      q_ar: 'أقام نادي الفروسية سباقًا سنوياً: ٤ أشواط للخيول العربية و٣ أشواط لغير العربية. إذا شارك في كل شوط ٩ خيول. عدد خيول النوعين:',
      q_en: '4 rounds Arab horses + 3 non-Arab, 9 per round. Total horses?',
      options_ar: ['٤٠','٥٠','٦٣','٣٦'], options_en: ['40','50','63','36'],
      correct: '2',
      explanation_ar: '(٤+٣) × ٩ = ٧ × ٩ = ٦٣.',
      explanation_en: '7 × 9 = 63.',
    },
    {
      type: 'classify', bookRef: BOOK_PDF_CH5_9, page: 163,
      q_ar: 'صنّف نواتج الضرب في ٩: أكبر من ٥٠ / أصغر من ٥٠.',
      q_en: 'Sort 9× products: >50 / <50.',
      categories_ar: ['>٥٠', '<٥٠'],
      categories_en: ['>50', '<50'],
      items_ar: [
        { item: '٩×٧=٦٣', correct_category: 0 },
        { item: '٩×٤=٣٦', correct_category: 1 },
        { item: '٩×٩=٨١', correct_category: 0 },
        { item: '٩×٣=٢٧', correct_category: 1 },
      ],
      items_en: [
        { item: '9×7=63', correct_category: 0 },
        { item: '9×4=36', correct_category: 1 },
        { item: '9×9=81', correct_category: 0 },
        { item: '9×3=27', correct_category: 1 },
      ],
      explanation_ar: 'قارن الناتج بـ ٥٠.',
      explanation_en: 'Compare to 50.',
    },
  ];
}

// ٥-٧ الجبر: الخاصية التجميعية للضرب (ص ١٦٤–١٦٧)
function LESSON_5_7() {
  return [
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_ASS, page: 164,
      q_ar: 'ما الخاصية التجميعية لعملية الضرب؟',
      q_en: 'What is the Associative Property of Multiplication?',
      options_ar: [
        'تجميع العوامل بأي طريقة لا يغير الناتج',
        'ترتيب العوامل يغير الناتج',
        'الضرب والجمع متساويان',
        'يمكن الضرب بأي ترتيب ولكن الناتج يتغير',
      ],
      options_en: [
        'Grouping factors any way does not change the product',
        'Order changes product',
        'Multiplication = Addition',
        'Order matters',
      ],
      correct: '0',
      explanation_ar: '(أ × ب) × ج = أ × (ب × ج).',
      explanation_en: '(a × b) × c = a × (b × c).',
    },
    {
      type: 'compute', bookRef: BOOK_PDF_CH5_ASS, page: 165,
      q_ar: 'أجد ناتج ٥ × ٢ × ٣ باستعمال الخاصية التجميعية.',
      q_en: 'Find 5 × 2 × 3 using associative property.',
      answer_ar: '٣٠', answer_en: '30',
      explanation_ar: '٥ × (٢ × ٣) = ٥ × ٦ = ٣٠ أو (٥ × ٢) × ٣ = ١٠ × ٣ = ٣٠.',
      explanation_en: '5 × (2 × 3) = 30.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH5_ASS, page: 165,
      q_ar: '(٤ × ٣) × ٢ = ٤ × (٣ × ٢)',
      q_en: '(4 × 3) × 2 = 4 × (3 × 2)',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: 'كلاهما = ٢٤ (الخاصية التجميعية).',
      explanation_en: 'Both = 24.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH5_ASS, page: 166,
      q_ar: '(٣ × ٢) × ٤ = ٣ × (___ × ٤)',
      q_en: '(3 × 2) × 4 = 3 × (___ × 4)',
      answer_ar: '٢', answer_en: '2',
      explanation_ar: 'الخاصية التجميعية: نُبقي نفس العوامل.',
      explanation_en: '2.',
    },
    {
      type: 'fill', bookRef: BOOK_PDF_CH5_ASS, page: 166,
      q_ar: '___ × (٣ × ٢) = (٤ × ٣) × ٢',
      q_en: '___ × (3 × 2) = (4 × 3) × 2',
      answer_ar: '٤', answer_en: '4',
      explanation_ar: '٤ × ٦ = ١٢ × ٢ = ٢٤.',
      explanation_en: '4.',
    },
    {
      type: 'mc', bookRef: BOOK_PDF_CH5_ASS, page: 166,
      q_ar: 'ما الناتج الذي يجعل الجملة العددية الآتية صحيحة؟ (٦ × ٣) × ٧ = ٦ × ( ___ × ٧)',
      q_en: '(6 × 3) × 7 = 6 × (___ × 7)',
      options_ar: ['٦','٣','٧','٤'], options_en: ['6','3','7','4'],
      correct: '1',
      explanation_ar: 'الخاصية التجميعية: ___ = ٣.',
      explanation_en: '3.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH5_ASS, page: 166,
      q_ar: 'يوجد ٣ طاولات، على كل طاولة ٤ كتب، ومع كل كتاب قلمان. كم قلمًا؟',
      q_en: '3 tables × 4 books × 2 pens = ? pens',
      answer_ar: '٢٤ قلمًا', answer_en: '24 pens',
      explanation_ar: '٣ × ٤ × ٢ = ٢٤.',
      explanation_en: '24.',
    },
    {
      type: 'word', bookRef: BOOK_PDF_CH5_ASS, page: 167,
      q_ar: 'اشترى خالد صندوقين من الجبن، في كل صندوق ٤ صناديق صغيرة، وكل صندوق صغير ١٠ علب. كم علبة؟',
      q_en: '2 boxes × 4 small boxes × 10 cans = ?',
      answer_ar: '٨٠ علبة', answer_en: '80 cans',
      explanation_ar: '٢ × ٤ × ١٠ = ٨٠.',
      explanation_en: '80.',
    },
    {
      type: 'tf', bookRef: BOOK_PDF_CH5_ASS, page: 167,
      q_ar: 'لا يهمنا ترتيب العوامل عند تجميعها في الخاصية التجميعية للضرب.',
      q_en: 'Grouping order does not matter in Associative Property.',
      options_ar: ['صح','خطأ'], options_en: ['True','False'],
      correct: '0',
      explanation_ar: 'الناتج يبقى نفسه مهما تغيّر التجميع.',
      explanation_en: 'True.',
    },
    {
      type: 'classify', bookRef: BOOK_PDF_CH5_ASS, page: 167,
      q_ar: 'صنّف: الجملة صحيحة / خاطئة.',
      q_en: 'Sort: correct / incorrect.',
      categories_ar: ['صحيحة ✓', 'خاطئة ✗'],
      categories_en: ['Correct ✓', 'Incorrect ✗'],
      items_ar: [
        { item: '(٥×١×٣)=(٥×١)×٣', correct_category: 0 },
        { item: '(٧×٣×٢)=٣×(٧×٢)', correct_category: 0 },
        { item: '٢×(٤×٤)=٢×(٤×٤)', correct_category: 0 },
        { item: '٤×(٤×٤)=٢×(٤×٤)', correct_category: 1 },
      ],
      items_en: [
        { item: '(5×1×3)=(5×1)×3', correct_category: 0 },
        { item: '(7×3×2)=3×(7×2)', correct_category: 0 },
        { item: '2×(4×4)=2×(4×4)', correct_category: 0 },
        { item: '4×(4×4)=2×(4×4)', correct_category: 1 },
      ],
      explanation_ar: 'تحقق من الخاصية التجميعية لكل جملة.',
      explanation_en: 'Verify each using associative property.',
    },
  ];
}

export const UNIT6_LESSONS = [
  { id: 'ch5-l3', title_ar: 'مهارة حل المسألة: البحث عن نمط', title_en: 'Problem Solving: Find a Pattern', questions: LESSON_5_3() },
  { id: 'ch5-l4', title_ar: 'الضرب في ٧', title_en: 'Multiplying by 7', questions: LESSON_5_4() },
  { id: 'ch5-l5', title_ar: 'الضرب في ٨', title_en: 'Multiplying by 8', questions: LESSON_5_5() },
  { id: 'ch5-l6', title_ar: 'الضرب في ٩', title_en: 'Multiplying by 9', questions: LESSON_5_6() },
  { id: 'ch5-l7', title_ar: 'الجبر: الخاصية التجميعية للضرب', title_en: 'Algebra: Associative Property', questions: LESSON_5_7() },
];