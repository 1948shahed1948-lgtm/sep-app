// بنك رياضيات الصف الثالث الابتدائي — الفصل الخامس: الضرب (٢)
// المصدر: كتاب الرياضيات ١٤٤٧هـ — الفهرس الرسمي لوزارة التعليم
// الدروس الرسمية (٧): أستكشف جدول الضرب، الضرب في ٣، الضرب في ٦،
//   خطة حل المسألة: البحث عن نمط، الضرب في ٧، الضرب في ٩، الجبر: الخاصية التجميعية

export const BOOK_PDF_CH5 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/4ff43cdd3_______155-end.pdf';

// ٥-١ أستكشف جدول الضرب
function LESSON_5_1() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH5, page:155, q_ar:'ما ناتج ٤ × ٥ من جدول الضرب؟', q_en:'4 × 5 from table?', options_ar:['١٥','٢٠','٢٥','١٠'], options_en:['15','20','25','10'], correct:'1', explanation_ar:'٤×٥ = ٢٠.', explanation_en:'20.' },
    { type:'mc', bookRef:BOOK_PDF_CH5, page:156, q_ar:'في جدول الضرب، ناتج ٣ × ٦ =', q_en:'In table, 3 × 6 =', options_ar:['١٨','١٢','٩','٢١'], options_en:['18','12','9','21'], correct:'0', explanation_ar:'٣×٦ = ١٨.', explanation_en:'18.' },
    { type:'tf', bookRef:BOOK_PDF_CH5, page:157, q_ar:'جدول الضرب يسهّل تذكُّر حقائق الضرب.', q_en:'Multiplication table helps memorize facts.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'صحيح.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH5, page:158, q_ar:'من جدول الضرب: ٥ × ٦ = ___', q_en:'From table: 5 × 6 = ___', answer_ar:'٣٠', answer_en:'30', explanation_ar:'٥×٦ = ٣٠.', explanation_en:'30.' },
    { type:'compute', bookRef:BOOK_PDF_CH5, page:159, q_ar:'أوجد من الجدول: ٤ × ٧', q_en:'From table: 4 × 7', answer_ar:'٢٨', answer_en:'28', explanation_ar:'٤×٧ = ٢٨.', explanation_en:'28.' },
    { type:'word', bookRef:BOOK_PDF_CH5, page:160, q_ar:'استعمل جدول الضرب: ٦ صفوف × ٤ كراسي. كم كرسيًا؟', q_en:'6 rows × 4 chairs. Total?', answer_ar:'٢٤ كرسيًا', answer_en:'24 chairs', explanation_ar:'٦×٤ = ٢٤.', explanation_en:'24.' },
  ];
}

// ٥-٢ الضرب في ٣
function LESSON_5_2() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH5, page:161, q_ar:'٣ × ٤ = ؟', q_en:'3 × 4 = ?', options_ar:['٧','١٢','٨','١٥'], options_en:['7','12','8','15'], correct:'1', explanation_ar:'٣×٤ = ١٢.', explanation_en:'12.' },
    { type:'mc', bookRef:BOOK_PDF_CH5, page:161, q_ar:'٣ × ٨ = ؟', q_en:'3 × 8 = ?', options_ar:['٢٤','١٨','٢١','١٦'], options_en:['24','18','21','16'], correct:'0', explanation_ar:'٣×٨ = ٢٤.', explanation_en:'24.' },
    { type:'tf', bookRef:BOOK_PDF_CH5, page:162, q_ar:'٣ × ٩ = ٢٧ صحيح.', q_en:'3×9=27.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٣×٩ = ٢٧.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH5, page:162, q_ar:'٣ × ___ = ٢١', q_en:'3 × ___ = 21', answer_ar:'٧', answer_en:'7', explanation_ar:'٣×٧ = ٢١.', explanation_en:'7.' },
    { type:'compute', bookRef:BOOK_PDF_CH5, page:163, q_ar:'أوجد: ٣ × ٧', q_en:'Find: 3 × 7', answer_ar:'٢١', answer_en:'21', explanation_ar:'٣×٧ = ٢١.', explanation_en:'21.' },
    { type:'word', bookRef:BOOK_PDF_CH5, page:163, q_ar:'في كل صندوق ٣ كرات وعدد الصناديق ٨. كم كرة؟', q_en:'3 balls/box, 8 boxes. Total?', answer_ar:'٢٤ كرة', answer_en:'24 balls', explanation_ar:'٣×٨ = ٢٤.', explanation_en:'24.' },
  ];
}

// ٥-٣ الضرب في ٦
function LESSON_5_3() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH5, page:164, q_ar:'٦ × ٤ = ؟', q_en:'6 × 4 = ?', options_ar:['٢٤','١٨','٣٠','٢٠'], options_en:['24','18','30','20'], correct:'0', explanation_ar:'٦×٤ = ٢٤.', explanation_en:'24.' },
    { type:'mc', bookRef:BOOK_PDF_CH5, page:164, q_ar:'٦ × ٧ = ؟', q_en:'6 × 7 = ?', options_ar:['٣٦','٤٢','٤٨','٣٥'], options_en:['36','42','48','35'], correct:'1', explanation_ar:'٦×٧ = ٤٢.', explanation_en:'42.' },
    { type:'tf', bookRef:BOOK_PDF_CH5, page:165, q_ar:'٦ × ٨ = ٤٨ صحيح.', q_en:'6×8=48.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٦×٨ = ٤٨.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH5, page:165, q_ar:'٦ × ___ = ٥٤', q_en:'6 × ___ = 54', answer_ar:'٩', answer_en:'9', explanation_ar:'٦×٩ = ٥٤.', explanation_en:'9.' },
    { type:'compute', bookRef:BOOK_PDF_CH5, page:166, q_ar:'أوجد: ٦ × ٩', q_en:'Find: 6 × 9', answer_ar:'٥٤', answer_en:'54', explanation_ar:'٦×٩ = ٥٤.', explanation_en:'54.' },
    { type:'word', bookRef:BOOK_PDF_CH5, page:166, q_ar:'كل صف ٦ طلاب وعدد الصفوف ٧. كم طالبًا؟', q_en:'6 students/row, 7 rows. Total?', answer_ar:'٤٢ طالبًا', answer_en:'42 students', explanation_ar:'٦×٧ = ٤٢.', explanation_en:'42.' },
  ];
}

// ٥-٤ خطة حل المسألة: البحث عن نمط
function LESSON_5_4() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH5, page:167, q_ar:'لحل مسألة بالنمط، أبحث عن:', q_en:'To solve by pattern, look for:', options_ar:['القاعدة المتكررة','الجمع','الطرح','اللون'], options_en:['Repeating rule','Addition','Subtraction','Color'], correct:'0', explanation_ar:'أبحث عن قاعدة النمط.', explanation_en:'Pattern rule.' },
    { type:'mc', bookRef:BOOK_PDF_CH5, page:167, q_ar:'نمط: ٣، ٦، ٩، ١٢. ما العدد التالي؟', q_en:'Pattern: 3, 6, 9, 12. Next?', options_ar:['١٣','١٥','١٨','١٤'], options_en:['13','15','18','14'], correct:'1', explanation_ar:'+٣: ١٢+٣ = ١٥.', explanation_en:'15.' },
    { type:'tf', bookRef:BOOK_PDF_CH5, page:168, q_ar:'البحث عن نمط خطة مفيدة لحل المسائل.', q_en:'Looking for a pattern is a useful strategy.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'صحيح.', explanation_en:'True.' },
    { type:'word', bookRef:BOOK_PDF_CH5, page:168, q_ar:'يزداد عدد الكتب كل يوم: ٥، ١٠، ١٥، ٢٠... كم في اليوم الخامس؟', q_en:'Books/day: 5,10,15,20... Day 5?', answer_ar:'٢٥ كتابًا', answer_en:'25 books', explanation_ar:'نمط خمسات: ٢٥.', explanation_en:'25.' },
  ];
}

// ٥-٥ الضرب في ٧
function LESSON_5_5() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH5, page:169, q_ar:'٧ × ٥ = ؟', q_en:'7 × 5 = ?', options_ar:['٣٥','٤٢','٢٨','٣٠'], options_en:['35','42','28','30'], correct:'0', explanation_ar:'٧×٥ = ٣٥.', explanation_en:'35.' },
    { type:'mc', bookRef:BOOK_PDF_CH5, page:169, q_ar:'٧ × ٨ = ؟', q_en:'7 × 8 = ?', options_ar:['٥٦','٦٣','٤٩','٤٢'], options_en:['56','63','49','42'], correct:'0', explanation_ar:'٧×٨ = ٥٦.', explanation_en:'56.' },
    { type:'mc', bookRef:BOOK_PDF_CH5, page:170, q_ar:'أيٌّ ناتجه ٤٩؟', q_en:'Which equals 49?', options_ar:['٧×٧','٧×٦','٧×٨','٧×٥'], options_en:['7×7','7×6','7×8','7×5'], correct:'0', explanation_ar:'٧×٧ = ٤٩.', explanation_en:'49.' },
    { type:'tf', bookRef:BOOK_PDF_CH5, page:171, q_ar:'٧ × ٩ = ٦٣ صحيح.', q_en:'7×9=63.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٧×٩ = ٦٣.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH5, page:172, q_ar:'٧ × ___ = ٥٦', q_en:'7 × ___ = 56', answer_ar:'٨', answer_en:'8', explanation_ar:'٧×٨ = ٥٦.', explanation_en:'8.' },
    { type:'compute', bookRef:BOOK_PDF_CH5, page:172, q_ar:'أوجد: ٧ × ٩', q_en:'Find: 7 × 9', answer_ar:'٦٣', answer_en:'63', explanation_ar:'٧×٩ = ٦٣.', explanation_en:'63.' },
    { type:'word', bookRef:BOOK_PDF_CH5, page:173, q_ar:'كل أسبوع ٧ أيام. كم يومًا في ٩ أسابيع؟', q_en:'7 days/week, 9 weeks. Total?', answer_ar:'٦٣ يومًا', answer_en:'63 days', explanation_ar:'٧×٩ = ٦٣.', explanation_en:'63.' },
  ];
}

// ٥-٦ الضرب في ٩
function LESSON_5_6() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH5, page:174, q_ar:'٩ × ٣ = ؟', q_en:'9 × 3 = ?', options_ar:['٢٧','٣٦','١٨','٢٤'], options_en:['27','36','18','24'], correct:'0', explanation_ar:'٩×٣ = ٢٧.', explanation_en:'27.' },
    { type:'mc', bookRef:BOOK_PDF_CH5, page:174, q_ar:'٩ × ٦ = ؟', q_en:'9 × 6 = ?', options_ar:['٤٥','٥٤','٦٣','٤٨'], options_en:['45','54','63','48'], correct:'1', explanation_ar:'٩×٦ = ٥٤.', explanation_en:'54.' },
    { type:'mc', bookRef:BOOK_PDF_CH5, page:175, q_ar:'أيٌّ ناتجه ٨١؟', q_en:'Which equals 81?', options_ar:['٩×٩','٩×٨','٩×٧','٨×٩'], options_en:['9×9','9×8','9×7','8×9'], correct:'0', explanation_ar:'٩×٩ = ٨١.', explanation_en:'81.' },
    { type:'tf', bookRef:BOOK_PDF_CH5, page:175, q_ar:'٩ × ٤ = ٣٦ صحيح.', q_en:'9×4=36.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٩×٤ = ٣٦.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH5, page:176, q_ar:'٩ × ___ = ٧٢', q_en:'9 × ___ = 72', answer_ar:'٨', answer_en:'8', explanation_ar:'٩×٨ = ٧٢.', explanation_en:'8.' },
    { type:'compute', bookRef:BOOK_PDF_CH5, page:176, q_ar:'أوجد: ٩ × ٧', q_en:'Find: 9 × 7', answer_ar:'٦٣', answer_en:'63', explanation_ar:'٩×٧ = ٦٣.', explanation_en:'63.' },
    { type:'word', bookRef:BOOK_PDF_CH5, page:177, q_ar:'كل رف ٩ كتب وعدد الرفوف ٥. كم كتابًا؟', q_en:'9 books/shelf, 5 shelves. Total?', answer_ar:'٤٥ كتابًا', answer_en:'45 books', explanation_ar:'٩×٥ = ٤٥.', explanation_en:'45.' },
  ];
}

// ٥-٧ الجبر: الخاصية التجميعية
function LESSON_5_7() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH5, page:178, q_ar:'الخاصية التجميعية: (أ × ب) × جـ =', q_en:'Associative: (a × b) × c =', options_ar:['أ × (ب × جـ)','أ + ب + جـ','أ − ب','مختلف'], options_en:['a×(b×c)','a+b+c','a-b','different'], correct:'0', explanation_ar:'نقل الأقواس لا يغيّر الناتج.', explanation_en:'a×(b×c).' },
    { type:'mc', bookRef:BOOK_PDF_CH5, page:178, q_ar:'(٣×٤)×٢ = ٣×(٤×٢) = ؟', q_en:'(3×4)×2 = 3×(4×2) = ?', options_ar:['٢٤','٢٠','١٢','٤٨'], options_en:['24','20','12','48'], correct:'0', explanation_ar:'(١٢)×٢ = ٣×٨ = ٢٤.', explanation_en:'24.' },
    { type:'mc', bookRef:BOOK_PDF_CH5, page:179, q_ar:'(٢×٥)×٣ = ؟', q_en:'(2×5)×3 = ?', options_ar:['٣٠','١٥','١٠','٢٥'], options_en:['30','15','10','25'], correct:'0', explanation_ar:'(١٠)×٣ = ٣٠.', explanation_en:'30.' },
    { type:'tf', bookRef:BOOK_PDF_CH5, page:179, q_ar:'الخاصية التجميعية: نقل الأقواس لا يغيّر الناتج.', q_en:'Associative: moving parentheses keeps result.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'صحيح.', explanation_en:'True.' },
    { type:'tf', bookRef:BOOK_PDF_CH5, page:180, q_ar:'(٤×٢)×٣ ≠ ٤×(٢×٣).', q_en:'(4×2)×3 ≠ 4×(2×3).', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'1', explanation_ar:'متساويان = ٢٤.', explanation_en:'Equal.' },
    { type:'fill', bookRef:BOOK_PDF_CH5, page:180, q_ar:'(٣×٣)×٤ = ___ × ٤ = ٣٦', q_en:'(3×3)×4 = ___ × 4 = 36', answer_ar:'٩', answer_en:'9', explanation_ar:'٩×٤ = ٣٦.', explanation_en:'9.' },
    { type:'compute', bookRef:BOOK_PDF_CH5, page:181, q_ar:'احسب: (٢×٤)×٥', q_en:'Find: (2×4)×5', answer_ar:'٤٠', answer_en:'40', explanation_ar:'٨×٥ = ٤٠.', explanation_en:'40.' },
    { type:'word', bookRef:BOOK_PDF_CH5, page:181, q_ar:'في كل صندوق ٣ علب وكل علبة ٤ أقلام. كم قلمًا في صندوقين؟', q_en:'3 boxes/carton, 4 pens/box, 2 cartons. Total?', answer_ar:'٢٤ قلمًا', answer_en:'24 pens', explanation_ar:'(٣×٤)×٢ = ٢٤.', explanation_en:'24.' },
  ];
}

export const UNIT5_LESSONS = [
  { id:'ch5-l1', title_ar:'أستكشف جدول الضرب', title_en:'Explore Multiplication Table', questions: LESSON_5_1() },
  { id:'ch5-l2', title_ar:'الضرب في ٣', title_en:'Multiply by 3', questions: LESSON_5_2() },
  { id:'ch5-l3', title_ar:'الضرب في ٦', title_en:'Multiply by 6', questions: LESSON_5_3() },
  { id:'ch5-l4', title_ar:'خطة حل المسألة: البحث عن نمط', title_en:'Problem Solving: Look for a Pattern', questions: LESSON_5_4() },
  { id:'ch5-l5', title_ar:'الضرب في ٧', title_en:'Multiply by 7', questions: LESSON_5_5() },
  { id:'ch5-l6', title_ar:'الضرب في ٩', title_en:'Multiply by 9', questions: LESSON_5_6() },
  { id:'ch5-l7', title_ar:'الجبر: الخاصية التجميعية', title_en:'Algebra: Associative Property', questions: LESSON_5_7() },
];