// بنك رياضيات الصف الثالث الابتدائي — الفصل الرابع: الضرب (١)
// المصدر: كتاب الرياضيات ١٤٤٧هـ — الفهرس الرسمي لوزارة التعليم
// الدروس الرسمية (٩): أستكشف معنى الضرب، الشبكات وعملية الضرب، الضرب في ٢،
//   الضرب في ٤، مهارة حل المسألة (المعطيات الزائدة/الناقصة)، الضرب في ٥،
//   الضرب في ١٠، استقصاء حل المسألة، الضرب في الصفر والواحد

export const BOOK_PDF_CH4 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/a38f5d7d4_______117-135.pdf';

// ٤-١ أستكشف معنى الضرب
function LESSON_4_1() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH4, page:117, q_ar:'ما معنى ٣ × ٤؟', q_en:'Meaning of 3 × 4?', options_ar:['٣+٤','٤ مجموعات كل فيها ٣','٣−٤','٣ قسمة ٤'], options_en:['3+4','4 groups of 3','3-4','3÷4'], correct:'1', explanation_ar:'الضرب = مجموعات متساوية: ٤ مجموعات × ٣.', explanation_en:'Equal groups.' },
    { type:'mc', bookRef:BOOK_PDF_CH4, page:117, q_ar:'٥ مجموعات كل فيها ٢ تفاحات. يكافئ:', q_en:'5 groups of 2 apples =', options_ar:['٥+٢','٥×٢','٥−٢','٢÷٥'], options_en:['5+2','5×2','5-2','2÷5'], correct:'1', explanation_ar:'٥×٢ = ١٠.', explanation_en:'5×2=10.' },
    { type:'tf', bookRef:BOOK_PDF_CH4, page:118, q_ar:'الضرب اختصار للجمع المتكرر.', q_en:'Multiplication is repeated addition.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٣×٤ = ٤+٤+٤.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH4, page:118, q_ar:'حوّل لجمع متكرر: ٢ × ٥ = ___', q_en:'2×5 as repeated addition: ___', answer_ar:'٥+٥', answer_en:'5+5', explanation_ar:'٢×٥ = ٥+٥ = ١٠.', explanation_en:'5+5.' },
    { type:'compute', bookRef:BOOK_PDF_CH4, page:119, q_ar:'٣ مجموعات كل فيها ٤ كرات. المجموع = ___', q_en:'3 groups of 4 balls. Total?', answer_ar:'١٢', answer_en:'12', explanation_ar:'٣×٤ = ١٢.', explanation_en:'12.' },
    { type:'word', bookRef:BOOK_PDF_CH4, page:119, q_ar:'في كل صندوق ٣ أقلام وعدد الصناديق ٤. كم قلمًا؟', q_en:'3 pens per box, 4 boxes. Total?', answer_ar:'١٢ قلمًا', answer_en:'12 pens', explanation_ar:'٣×٤ = ١٢.', explanation_en:'12.' },
  ];
}

// ٤-٢ الشبكات وعملية الضرب
function LESSON_4_2() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH4, page:120, q_ar:'شبكة ٣ صفوف × ٤ أعمدة، عدد العناصر =', q_en:'Grid 3 rows × 4 columns =', options_ar:['٧','١٢','٨','١'], options_en:['7','12','8','1'], correct:'1', explanation_ar:'٣×٤ = ١٢.', explanation_en:'12.' },
    { type:'mc', bookRef:BOOK_PDF_CH4, page:120, q_ar:'شبكة ٢ صفوف × ٦ أعمدة =', q_en:'Grid 2 rows × 6 columns =', options_ar:['٨','١٢','٦','١٠'], options_en:['8','12','6','10'], correct:'1', explanation_ar:'٢×٦ = ١٢.', explanation_en:'12.' },
    { type:'tf', bookRef:BOOK_PDF_CH4, page:121, q_ar:'الشبكة تبين أن ٣×٥ = ٥×٣.', q_en:'Grid shows 3×5 = 5×3.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'الخاصة التبديلية.', explanation_en:'Commutative.' },
    { type:'fill', bookRef:BOOK_PDF_CH4, page:121, q_ar:'شبكة ٤×٥ = ___', q_en:'Grid 4×5 = ___', answer_ar:'٢٠', answer_en:'20', explanation_ar:'٤×٥ = ٢٠.', explanation_en:'20.' },
    { type:'compute', bookRef:BOOK_PDF_CH4, page:122, q_ar:'شبكة ٣ صفوف × ٧ أعمدة. عدد العناصر؟', q_en:'Grid 3×7. Items?', answer_ar:'٢١', answer_en:'21', explanation_ar:'٣×٧ = ٢١.', explanation_en:'21.' },
    { type:'word', bookRef:BOOK_PDF_CH4, page:122, q_ar:'صف ٥ طاولات و٤ كراسي لكل طاولة. كم كرسيًا؟', q_en:'5 tables, 4 chairs each. Total chairs?', answer_ar:'٢٠ كرسيًا', answer_en:'20 chairs', explanation_ar:'٥×٤ = ٢٠.', explanation_en:'20.' },
  ];
}

// ٤-٣ الضرب في ٢
function LESSON_4_3() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH4, page:123, q_ar:'٢ × ٧ = ؟', q_en:'2 × 7 = ?', options_ar:['١٤','٩','١٢','١٦'], options_en:['14','9','12','16'], correct:'0', explanation_ar:'٢×٧ = ١٤.', explanation_en:'14.' },
    { type:'mc', bookRef:BOOK_PDF_CH4, page:123, q_ar:'٢ × ٨ = ؟', q_en:'2 × 8 = ?', options_ar:['١٦','١٠','١٢','١٨'], options_en:['16','10','12','18'], correct:'0', explanation_ar:'٢×٨ = ١٦.', explanation_en:'16.' },
    { type:'tf', bookRef:BOOK_PDF_CH4, page:124, q_ar:'٢ × ٦ = ٨.', q_en:'2×6=8.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'1', explanation_ar:'٢×٦ = ١٢.', explanation_en:'12.' },
    { type:'fill', bookRef:BOOK_PDF_CH4, page:124, q_ar:'٢ × ___ = ١٨', q_en:'2 × ___ = 18', answer_ar:'٩', answer_en:'9', explanation_ar:'٢×٩ = ١٨.', explanation_en:'9.' },
    { type:'compute', bookRef:BOOK_PDF_CH4, page:125, q_ar:'أوجد: ٢ × ٩', q_en:'Find: 2 × 9', answer_ar:'١٨', answer_en:'18', explanation_ar:'٢×٩ = ١٨.', explanation_en:'18.' },
    { type:'word', bookRef:BOOK_PDF_CH4, page:125, q_ar:'اشترى أحمد ٧ أقلام بسعر ٢ ريال لكل قلم. كم دفع؟', q_en:'7 pens at 2 riyals each. Total?', answer_ar:'١٤ ريالًا', answer_en:'14 riyals', explanation_ar:'٢×٧ = ١٤.', explanation_en:'14.' },
  ];
}

// ٤-٤ الضرب في ٤
function LESSON_4_4() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH4, page:126, q_ar:'٤ × ٥ = ؟', q_en:'4 × 5 = ?', options_ar:['١٦','٢٠','٢٤','١٥'], options_en:['16','20','24','15'], correct:'1', explanation_ar:'٤×٥ = ٢٠.', explanation_en:'20.' },
    { type:'mc', bookRef:BOOK_PDF_CH4, page:126, q_ar:'٤ × ٧ = ؟', q_en:'4 × 7 = ?', options_ar:['٢٤','٢٨','٣٢','٢١'], options_en:['24','28','32','21'], correct:'1', explanation_ar:'٤×٧ = ٢٨.', explanation_en:'28.' },
    { type:'tf', bookRef:BOOK_PDF_CH4, page:127, q_ar:'٤ × ٨ = ٣٠.', q_en:'4×8=30.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'1', explanation_ar:'٤×٨ = ٣٢.', explanation_en:'32.' },
    { type:'fill', bookRef:BOOK_PDF_CH4, page:127, q_ar:'٤ × ___ = ٣٢', q_en:'4 × ___ = 32', answer_ar:'٨', answer_en:'8', explanation_ar:'٤×٨ = ٣٢.', explanation_en:'8.' },
    { type:'compute', bookRef:BOOK_PDF_CH4, page:128, q_ar:'أوجد: ٤ × ٦', q_en:'Find: 4 × 6', answer_ar:'٢٤', answer_en:'24', explanation_ar:'٤×٦ = ٢٤.', explanation_en:'24.' },
    { type:'word', bookRef:BOOK_PDF_CH4, page:128, q_ar:'في كل صف ٤ كراسي وعدد الصفوف ٧. كم كرسيًا؟', q_en:'4 chairs/row, 7 rows. Total?', answer_ar:'٢٨ كرسيًا', answer_en:'28 chairs', explanation_ar:'٤×٧ = ٢٨.', explanation_en:'28.' },
  ];
}

// ٤-٥ مهارة حل المسألة: تحديد المعطيات الزائدة أو الناقصة
function LESSON_4_5() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH4, page:129, q_ar:'مسألة: "اشترى سعد ٥ علب بسعر ٣ ريالات لكل علبة، ولون العلبة أحمر. كم دفع؟" أيُّ معطى زائد؟', q_en:'5 boxes at 3 riyals each, color red. Extra info?', options_ar:['٥ علب','٣ ريالات','اللون الأحمر','السعر'], options_en:['5 boxes','3 riyals','Color','Price'], correct:'2', explanation_ar:'اللون لا يؤثر على الحساب.', explanation_en:'Color is extra.' },
    { type:'mc', bookRef:BOOK_PDF_CH4, page:129, q_ar:'مسألة: "في كل صف ٤ طلاب وعدد الصفوف ٦." هل تنقص معطيات؟', q_en:'4 students/row, 6 rows. Missing info?', options_ar:['نعم','لا','لا أعرف','مستحيل'], options_en:['Yes','No','N/A','Impossible'], correct:'1', explanation_ar:'المعطيات كافية: ٤×٦ = ٢٤.', explanation_en:'Complete.' },
    { type:'tf', bookRef:BOOK_PDF_CH4, page:130, q_ar:'المعطى الزائد هو معلومة لا نحتاجها للحل.', q_en:'Extra info is not needed to solve.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'صحيح، نتجاهلها.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH4, page:130, q_ar:'في مسألة "٤ كتب × ٣ ريالات، وزن الكتاب ٢٠٠ جم" المعطى الزائد هو ___', q_en:'4 books × 3 riyals, weight 200g. Extra = ___', answer_ar:'الوزن', answer_en:'weight', explanation_ar:'الوزن لا يؤثر على السعر.', explanation_en:'Weight.' },
    { type:'word', bookRef:BOOK_PDF_CH4, page:131, q_ar:'كل كتاب ٤ ريالات واشترى سعد ٦ كتب واسم المؤلف أحمد. كم دفع؟', q_en:'4 riyals/book, 6 books, author Ahmad. Total?', answer_ar:'٢٤ ريالًا', answer_en:'24 riyals', explanation_ar:'٤×٦ = ٢٤. (اسم المؤلف زائد)', explanation_en:'24. Author is extra.' },
  ];
}

// ٤-٦ الضرب في ٥
function LESSON_4_6() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH4, page:131, q_ar:'٥ × ٤ = ؟', q_en:'5 × 4 = ?', options_ar:['٢٠','١٥','٢٥','١٠'], options_en:['20','15','25','10'], correct:'0', explanation_ar:'٥×٤ = ٢٠.', explanation_en:'20.' },
    { type:'mc', bookRef:BOOK_PDF_CH4, page:132, q_ar:'٥ × ٧ = ؟', q_en:'5 × 7 = ?', options_ar:['٣٠','٣٥','٤٠','٢٥'], options_en:['30','35','40','25'], correct:'1', explanation_ar:'٥×٧ = ٣٥.', explanation_en:'35.' },
    { type:'tf', bookRef:BOOK_PDF_CH4, page:132, q_ar:'٥ × ٦ = ٣٥.', q_en:'5×6=35.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'1', explanation_ar:'٥×٦ = ٣٠.', explanation_en:'30.' },
    { type:'fill', bookRef:BOOK_PDF_CH4, page:133, q_ar:'٥ × ___ = ٤٥', q_en:'5 × ___ = 45', answer_ar:'٩', answer_en:'9', explanation_ar:'٥×٩ = ٤٥.', explanation_en:'9.' },
    { type:'compute', bookRef:BOOK_PDF_CH4, page:133, q_ar:'أوجد: ٥ × ٨', q_en:'Find: 5 × 8', answer_ar:'٤٠', answer_en:'40', explanation_ar:'٥×٨ = ٤٠.', explanation_en:'40.' },
    { type:'word', bookRef:BOOK_PDF_CH4, page:134, q_ar:'في كل رف ٥ كتب وعدد الرفوف ٦. كم كتابًا؟', q_en:'5 books/shelf, 6 shelves. Total?', answer_ar:'٣٠ كتابًا', answer_en:'30 books', explanation_ar:'٥×٦ = ٣٠.', explanation_en:'30.' },
  ];
}

// ٤-٧ الضرب في ١٠
function LESSON_4_7() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH4, page:134, q_ar:'١٠ × ٣ = ؟', q_en:'10 × 3 = ?', options_ar:['٣٠','١٣','٣','٣٠٠'], options_en:['30','13','3','300'], correct:'0', explanation_ar:'١٠×٣ = ٣٠.', explanation_en:'30.' },
    { type:'mc', bookRef:BOOK_PDF_CH4, page:134, q_ar:'١٠ × ٧ = ؟', q_en:'10 × 7 = ?', options_ar:['١٧','٧٠','٧٠٠','٧٧'], options_en:['17','70','700','77'], correct:'1', explanation_ar:'١٠×٧ = ٧٠.', explanation_en:'70.' },
    { type:'tf', bookRef:BOOK_PDF_CH4, page:135, q_ar:'الضرب في ١٠ يعني إضافة صفر.', q_en:'×10 adds a zero.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'١٠×ن = ن٠.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH4, page:135, q_ar:'١٠ × ___ = ٨٠', q_en:'10 × ___ = 80', answer_ar:'٨', answer_en:'8', explanation_ar:'١٠×٨ = ٨٠.', explanation_en:'8.' },
    { type:'word', bookRef:BOOK_PDF_CH4, page:135, q_ar:'في كل علبة ١٠ أقلام وعدد العلب ٧. كم قلمًا؟', q_en:'10 pens/box, 7 boxes. Total?', answer_ar:'٧٠ قلمًا', answer_en:'70 pens', explanation_ar:'١٠×٧ = ٧٠.', explanation_en:'70.' },
  ];
}

// ٤-٨ استقصاء حل المسألة
function LESSON_4_8() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH4, page:134, q_ar:'أراد معلم توزيع ٤ أقلام على كل طالب وعدد الطلاب ٧. كم قلمًا؟', q_en:'4 pens/student, 7 students. Total?', options_ar:['١١','٢٨','٣٥','٣٢'], options_en:['11','28','35','32'], correct:'1', explanation_ar:'٤×٧ = ٢٨.', explanation_en:'28.' },
    { type:'mc', bookRef:BOOK_PDF_CH4, page:135, q_ar:'كل يوم يقرأ الطالب ٣ صفحات. كم صفحة في أسبوعين؟', q_en:'3 pages/day, 2 weeks. Total?', options_ar:['٤٢','٢١','١٤','٦'], options_en:['42','21','14','6'], correct:'0', explanation_ar:'٣×٧×٢ = ٤٢.', explanation_en:'42.' },
    { type:'tf', bookRef:BOOK_PDF_CH4, page:135, q_ar:'في كل سلة ٤ برتقالات و٦ سلال = ٢٤.', q_en:'4 oranges/basket, 6 baskets = 24.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٤×٦ = ٢٤.', explanation_en:'True.' },
    { type:'word', bookRef:BOOK_PDF_CH4, page:135, q_ar:'في كل صف ٦ طلاب و٤ صفوف وكل طالب يحتاج ٢ دفتر. كم دفترًا؟', q_en:'6 students/row, 4 rows, 2 notebooks each. Total?', answer_ar:'٤٨ دفترًا', answer_en:'48 notebooks', explanation_ar:'٦×٤×٢ = ٤٨.', explanation_en:'48.' },
  ];
}

// ٤-٩ الضرب في الصفر والواحد
function LESSON_4_9() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH4, page:133, q_ar:'٥ × ٠ = ؟', q_en:'5 × 0 = ?', options_ar:['٥','٠','١','٥٠'], options_en:['5','0','1','50'], correct:'1', explanation_ar:'أي عدد × ٠ = ٠.', explanation_en:'0.' },
    { type:'mc', bookRef:BOOK_PDF_CH4, page:134, q_ar:'٧ × ١ = ؟', q_en:'7 × 1 = ?', options_ar:['١','٧','٨','٠'], options_en:['1','7','8','0'], correct:'1', explanation_ar:'أي عدد × ١ = نفسه.', explanation_en:'7.' },
    { type:'tf', bookRef:BOOK_PDF_CH4, page:135, q_ar:'٨ × ٠ = ٠.', q_en:'8×0=0.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'صحيح.', explanation_en:'True.' },
    { type:'tf', bookRef:BOOK_PDF_CH4, page:135, q_ar:'٦ × ١ = ١.', q_en:'6×1=1.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'1', explanation_ar:'٦×١ = ٦.', explanation_en:'6.' },
    { type:'fill', bookRef:BOOK_PDF_CH4, page:135, q_ar:'٣ × ٠ = ___', q_en:'3 × 0 = ___', answer_ar:'٠', answer_en:'0', explanation_ar:'٣×٠ = ٠.', explanation_en:'0.' },
    { type:'fill', bookRef:BOOK_PDF_CH4, page:135, q_ar:'٤ × ١ = ___', q_en:'4 × 1 = ___', answer_ar:'٤', answer_en:'4', explanation_ar:'٤×١ = ٤.', explanation_en:'4.' },
    { type:'word', bookRef:BOOK_PDF_CH4, page:135, q_ar:'اشترى سعد ٠ علب وفي كل علبة ٥ أقلام. كم قلمًا معه؟', q_en:'0 boxes, 5 pens each. Total?', answer_ar:'٠ قلمًا', answer_en:'0 pens', explanation_ar:'٥×٠ = ٠.', explanation_en:'0.' },
  ];
}

export const UNIT4_LESSONS = [
  { id:'ch4-l1', title_ar:'أستكشف معنى الضرب', title_en:'Explore Meaning of Multiplication', questions: LESSON_4_1() },
  { id:'ch4-l2', title_ar:'الشبكات وعملية الضرب', title_en:'Arrays and Multiplication', questions: LESSON_4_2() },
  { id:'ch4-l3', title_ar:'الضرب في ٢', title_en:'Multiply by 2', questions: LESSON_4_3() },
  { id:'ch4-l4', title_ar:'الضرب في ٤', title_en:'Multiply by 4', questions: LESSON_4_4() },
  { id:'ch4-l5', title_ar:'مهارة حل المسألة: المعطيات الزائدة أو الناقصة', title_en:'Problem Solving: Extra/Missing Info', questions: LESSON_4_5() },
  { id:'ch4-l6', title_ar:'الضرب في ٥', title_en:'Multiply by 5', questions: LESSON_4_6() },
  { id:'ch4-l7', title_ar:'الضرب في ١٠', title_en:'Multiply by 10', questions: LESSON_4_7() },
  { id:'ch4-l8', title_ar:'استقصاء حل المسألة', title_en:'Investigate Problem Solving', questions: LESSON_4_8() },
  { id:'ch4-l9', title_ar:'الضرب في الصفر والواحد', title_en:'Multiply by 0 and 1', questions: LESSON_4_9() },
];