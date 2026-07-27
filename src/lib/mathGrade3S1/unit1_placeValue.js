// بنك رياضيات الصف الثالث الابتدائي — الفصل الأول: القيمة المنزلية
// المصدر: كتاب الرياضيات ١٤٤٧هـ — الفهرس الرسمي لوزارة التعليم
// الدروس الرسمية (٩): الأنماط العددية، الخطوات الأربع، أستكشف القيمة المنزلية،
//   القيمة المنزلية ضمن الألوف، عشرات الألوف، مقارنة، ترتيب، التقريب لعشرة/مئة، التقريب لألف

export const BOOK_PDF_CH1 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/d99c378cc_______21-40.pdf';

// ١-١ الجبر: الأنماط العددية
function LESSON_1_1() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH1, page:21, q_ar:'ما النمط العددي: ٢، ٤، ٦، ٨، ___؟', q_en:'Pattern: 2, 4, 6, 8, ___?', options_ar:['٩','١٠','١٢','٧'], options_en:['9','10','12','7'], correct:'1', explanation_ar:'نمط العد اثنينات: التالي ١٠.', explanation_en:'Count by 2s: next is 10.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:21, q_ar:'ما النمط: ٥، ١٠، ١٥، ٢٠، ___؟', q_en:'Pattern: 5, 10, 15, 20, ___?', options_ar:['٢٢','٢٥','٣٠','٢١'], options_en:['22','25','30','21'], correct:'1', explanation_ar:'نمط العد خمسات: التالي ٢٥.', explanation_en:'Count by 5s: 25.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:22, q_ar:'ما النمط: ١٠٠، ٢٠٠، ٣٠٠، ___؟', q_en:'Pattern: 100, 200, 300, ___?', options_ar:['٣٥٠','٤٠٠','٣١٠','٥٠٠'], options_en:['350','400','310','500'], correct:'1', explanation_ar:'نمط العد مئات: التالي ٤٠٠.', explanation_en:'Count by 100s: 400.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:22, q_ar:'النمط ٣، ٦، ٩، ١٢ هو عد ثلاثيات.', q_en:'Pattern 3,6,9,12 is counting by 3s.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'كل خطوة +٣: نمط ثلاثيات.', explanation_en:'Count by 3s.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:23, q_ar:'النمط ١١، ٢٢، ٣٣، ٤٤ يزيد بمقدار ١٠.', q_en:'Pattern 11,22,33,44 increases by 10.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'1', explanation_ar:'يزيد بمقدار ١١، لا ١٠.', explanation_en:'Increases by 11.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:23, q_ar:'أكمل النمط: ٢٥، ٥٠، ٧٥، ___', q_en:'Complete: 25, 50, 75, ___', answer_ar:'١٠٠', answer_en:'100', explanation_ar:'نمط خمسات كبر: ٢٥+٢٥=٥٠...التالي ١٠٠.', explanation_en:'100.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:24, q_ar:'أكمل النمط: ١، ٤، ٧، ١٠، ___', q_en:'Complete: 1, 4, 7, 10, ___', answer_ar:'١٣', answer_en:'13', explanation_ar:'+٣ كل مرة: ١٠+٣=١٣.', explanation_en:'13.' },
    { type:'compute', bookRef:BOOK_PDF_CH1, page:24, q_ar:'ما الحد السادس في النمط: ٢، ٤، ٦، ٨، ١٠، ___؟', q_en:'6th term: 2,4,6,8,10,___?', answer_ar:'١٢', answer_en:'12', explanation_ar:'نمط اثنينات، الحد السادس = ١٢.', explanation_en:'12.' },
    { type:'compute', bookRef:BOOK_PDF_CH1, page:25, q_ar:'ما الحد الخامس في النمط: ١٠، ٢٠، ٣٠، ٤٠، ___؟', q_en:'5th term: 10,20,30,40,___?', answer_ar:'٥٠', answer_en:'50', explanation_ar:'نمط عشرات: ٥٠.', explanation_en:'50.' },
    { type:'match', bookRef:BOOK_PDF_CH1, page:25, q_ar:'صل النمط بالعدد التالي.', q_en:'Match pattern to next number.', pairs_ar:[{left:'٢، ٤، ٦، ٨',right:'١٠'},{left:'٥، ١٠، ١٥',right:'٢٠'},{left:'١٠٠، ٢٠٠',right:'٣٠٠'}], pairs_en:[{left:'2,4,6,8',right:'10'},{left:'5,10,15',right:'20'},{left:'100,200',right:'300'}], explanation_ar:'حدّد مقدار الزيادة.', explanation_en:'Find the step.' },
    { type:'classify', bookRef:BOOK_PDF_CH1, page:26, q_ar:'صنّف: نمط اثنينات / نمط خمسات.', q_en:'Sort: 2s / 5s pattern.', categories_ar:['اثنينات','خمسات'], categories_en:['2s','5s'], items_ar:[{item:'٢، ٤، ٦',correct_category:0},{item:'٥، ١٠، ١٥',correct_category:1},{item:'٨، ١٠، ١٢',correct_category:0},{item:'٢٠، ٢٥، ٣٠',correct_category:1}], items_en:[{item:'2,4,6',correct_category:0},{item:'5,10,15',correct_category:1},{item:'8,10,12',correct_category:0},{item:'20,25,30',correct_category:1}], explanation_ar:'+٢ اثنينات، +٥ خمسات.', explanation_en:'+2 or +5.' },
    { type:'order', bookRef:BOOK_PDF_CH1, page:26, q_ar:'رتّب النمط تصاعديًا: ١٢، ٨، ١٠، ٦.', q_en:'Order ascending: 12, 8, 10, 6.', order_ar:['٦','٨','١٠','١٢'], order_en:['6','8','10','12'], explanation_ar:'٦ < ٨ < ١٠ < ١٢.', explanation_en:'6<8<10<12.' },
    { type:'word', bookRef:BOOK_PDF_CH1, page:27, q_ar:'تجمع سارة ٢ ريال كل يوم. كم ريالًا بعد ٥ أيام؟ (اكتب النمط)', q_en:'Sara saves 2 riyals/day. After 5 days?', answer_ar:'١٠ ريالات', answer_en:'10 riyals', explanation_ar:'نمط: ٢، ٤، ٦، ٨، ١٠.', explanation_en:'2×5=10.' },
  ];
}

// ١-٢ مهارة حل المسألة: استعمال الخطوات الأربع
function LESSON_1_2() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH1, page:28, q_ar:'ما الخطوة الأولى في الخطوات الأربع لحل المسألة؟', q_en:'First step of 4-step problem solving?', options_ar:['الحل','الفهم','التخطيط','التحقق'], options_en:['Solve','Understand','Plan','Check'], correct:'1', explanation_ar:'١) افهم ٢) خطط ٣) حل ٤) تحقق.', explanation_en:'1)Understand 2)Plan 3)Solve 4)Check.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:28, q_ar:'بعد أن تفهم المسألة، ما الخطوة التالية؟', q_en:'After understanding, next step?', options_ar:['الحل','التخطيط','التحقق','الحسم'], options_en:['Solve','Plan','Check','Decide'], correct:'1', explanation_ar:'خطط: اختر طريقة الحل.', explanation_en:'Plan.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:29, q_ar:'التحقق من الإجابة هو الخطوة الأخيرة.', q_en:'Checking is the last step.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'التحقق هو الخطوة الرابعة.', explanation_en:'True.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:29, q_ar:'يجب أن أبدأ بالحل قبل فهم المسألة.', q_en:'Start solving before understanding.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'1', explanation_ar:'الفهم أولًا ثم التخطيط.', explanation_en:'Understand first.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:30, q_ar:'الخطوة الأولى من الخطوات الأربع هي ___ المسألة.', q_en:'First step is ___ the problem.', answer_ar:'افهم', answer_en:'Understand', explanation_ar:'افهم المسألة أولًا.', explanation_en:'Understand.' },
    { type:'compute', bookRef:BOOK_PDF_CH1, page:30, q_ar:'مسألة: في الحافلة ٣٠ طالبًا، نزل ١٢. كم بقي؟ (طبّق الخطوات)', q_en:'Bus had 30 students, 12 left. How many remain?', answer_ar:'١٨ طالبًا', answer_en:'18 students', explanation_ar:'٣٠−١٢ = ١٨.', explanation_en:'30-12=18.' },
    { type:'word', bookRef:BOOK_PDF_CH1, page:31, q_ar:'في مكتبة ٤٥٠ كتابًا، أهدوا ١٢٠. كم كتابًا بقي؟ (استعمل الخطوات الأربع)', q_en:'Library had 450 books, gifted 120. Remaining?', answer_ar:'٣٣٠ كتابًا', answer_en:'330 books', explanation_ar:'٤٥٠−١٢٠ = ٣٣٠.', explanation_en:'450-120=330.' },
  ];
}

// ١-٣ أستكشف القيمة المنزلية
function LESSON_1_3() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH1, page:32, q_ar:'في العدد ٣٤٥، ما القيمة المنزلية للرقم ٣؟', q_en:'In 345, place value of 3?', options_ar:['٣','٣٠','٣٠٠','٣٠٠٠'], options_en:['3','30','300','3000'], correct:'2', explanation_ar:'٣ في خانة المئات = ٣٠٠.', explanation_en:'3 in hundreds=300.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:32, q_ar:'في العدد ٨٢٧، الرقم الذي يمثل العشرات هو:', q_en:'In 827, the tens digit is:', options_ar:['٨','٢','٧','٣'], options_en:['8','2','7','3'], correct:'1', explanation_ar:'٢ في خانة العشرات = ٢٠.', explanation_en:'2 in tens=20.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:33, q_ar:'في العدد ٥١٦، قيمة الرقم ٥ تساوي ٥٠٠.', q_en:'In 516, value of 5 is 500.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٥ في المئات = ٥٠٠.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:33, q_ar:'في العدد ٤٧٩، القيمة المنزلية للرقم ٧ هي ___', q_en:'In 479, place value of 7: ___', answer_ar:'٧٠', answer_en:'70', explanation_ar:'٧ في العشرات = ٧٠.', explanation_en:'70.' },
    { type:'compute', bookRef:BOOK_PDF_CH1, page:34, q_ar:'ما قيمة الرقم ٤ في العدد ٦٤٨؟', q_en:'Value of 4 in 648?', answer_ar:'٤٠', answer_en:'40', explanation_ar:'٤ في العشرات = ٤٠.', explanation_en:'40.' },
    { type:'match', bookRef:BOOK_PDF_CH1, page:34, q_ar:'صل العدد بقيمة الرقم المميّز.', q_en:'Match to digit value.', pairs_ar:[{left:'٢٣٤ (٢)',right:'٢٠٠'},{left:'٢٣٤ (٣)',right:'٣٠'},{left:'٢٣٤ (٤)',right:'٤'}], pairs_en:[{left:'234 (2)',right:'200'},{left:'234 (3)',right:'30'},{left:'234 (4)',right:'4'}], explanation_ar:'انظر لخانة كل رقم.', explanation_en:'Check each place.' },
    { type:'word', bookRef:BOOK_PDF_CH1, page:35, q_ar:'سعر لعبة ٣٢٥ ريالًا. ما القيمة المنزلية للرقم ٣؟', q_en:'Toy costs 325. Place value of 3?', answer_ar:'٣٠٠', answer_en:'300', explanation_ar:'٣ في المئات = ٣٠٠.', explanation_en:'300.' },
  ];
}

// ١-٤ القيمة المنزلية ضمن الألوف
function LESSON_1_4() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH1, page:36, q_ar:'في العدد ٣٤٥٦، ما القيمة المنزلية للرقم ٤؟', q_en:'In 3456, place value of 4?', options_ar:['العشرات','المئات','الألوف','عشرات الألوف'], options_en:['Tens','Hundreds','Thousands','Ten Thousands'], correct:'1', explanation_ar:'٤ في المئات = ٤٠٠.', explanation_en:'4 in hundreds=400.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:36, q_ar:'العدد "ستة آلاف ومئتان وأربعة وثلاثون" يُكتب:', q_en:'Six thousand two hundred thirty-four:', options_ar:['٦٢٤٣','٦٢٣٤','٦٤٢٣','٦٣٢٤'], options_en:['6243','6234','6423','6324'], correct:'1', explanation_ar:'٦٠٠٠+٢٠٠+٣٠+٤ = ٦٢٣٤.', explanation_en:'6234.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:37, q_ar:'في العدد ٤٠٦٠، قيمة الرقم ٤ تساوي ٤٠٠٠.', q_en:'In 4060, value of 4 is 4000.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٤ في الألوف = ٤٠٠٠.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:37, q_ar:'العدد الذي يحتوي على ٥ ألوف و٣ مئات و٨ أحاد هو ___', q_en:'5 thousands, 3 hundreds, 8 ones: ___', answer_ar:'٥٣٠٨', answer_en:'5308', explanation_ar:'٥٠٠٠+٣٠٠+٨ = ٥٣٠٨.', explanation_en:'5308.' },
    { type:'compute', bookRef:BOOK_PDF_CH1, page:38, q_ar:'ما قيمة الرقم ٧ في العدد ٧٨٢٣؟', q_en:'Value of 7 in 7823?', answer_ar:'٧٠٠٠', answer_en:'7000', explanation_ar:'٧ في الألوف = ٧٠٠٠.', explanation_en:'7000.' },
    { type:'classify', bookRef:BOOK_PDF_CH1, page:38, q_ar:'صنّف: أعداد من ٤ أرقام / أعداد من ٣ أرقام.', q_en:'Sort: 4-digit / 3-digit.', categories_ar:['٤ أرقام','٣ أرقام'], categories_en:['4 digits','3 digits'], items_ar:[{item:'٣٤٥٦',correct_category:0},{item:'٤٥٦',correct_category:1},{item:'٢٠٠٠',correct_category:0},{item:'٩٩٩',correct_category:1}], items_en:[{item:'3456',correct_category:0},{item:'456',correct_category:1},{item:'2000',correct_category:0},{item:'999',correct_category:1}], explanation_ar:'عُدّ الأرقام.', explanation_en:'Count digits.' },
    { type:'word', bookRef:BOOK_PDF_CH1, page:39, q_ar:'في مدرسة ٢٥٤٠ طالب. ما القيمة المنزلية للرقم ٢؟', q_en:'2540 students. Place value of 2?', answer_ar:'٢٠٠٠', answer_en:'2000', explanation_ar:'٢ في الألوف = ٢٠٠٠.', explanation_en:'2000.' },
  ];
}

// ١-٥ القيمة المنزلية ضمن عشرات الألوف
function LESSON_1_5() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH1, page:40, q_ar:'في العدد ٢٣٤٥٦، ما القيمة المنزلية للرقم ٢؟', q_en:'In 23456, place value of 2?', options_ar:['٢٠٠','٢٠٠٠','٢٠٠٠٠','٢'], options_en:['200','2000','20000','2'], correct:'2', explanation_ar:'٢ في عشرات الألوف = ٢٠٠٠٠.', explanation_en:'20000.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:40, q_ar:'العدد "خمسة وأربعون ألفًا وثلاثمئة وواحد وعشرون":', q_en:'Forty-five thousand three hundred twenty-one:', options_ar:['٤٥٣٢١','٤٥٢٣١','٥٤٣٢١','٤٥١٢٣'], options_en:['45321','45231','54321','45123'], correct:'0', explanation_ar:'٤٥٣٢١.', explanation_en:'45321.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:40, q_ar:'في العدد ١٠٠٠٠، القيمة المنزلية للرقم ١ هي ١٠٠٠.', q_en:'In 10000, place value of 1 is 1000.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'1', explanation_ar:'١ في عشرات الألوف = ١٠٠٠٠.', explanation_en:'10000.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:40, q_ar:'العدد الذي يحتوي على ٦ عشرات ألوف و٣ ألوف و٢ مئة هو ___', q_en:'6 ten-thousands, 3 thousands, 2 hundreds: ___', answer_ar:'٦٣٢٠٠', answer_en:'63200', explanation_ar:'٦٠٠٠٠+٣٠٠٠+٢٠٠ = ٦٣٢٠٠.', explanation_en:'63200.' },
    { type:'compute', bookRef:BOOK_PDF_CH1, page:40, q_ar:'ما قيمة الرقم ٨ في العدد ٨٩٤٥٣؟', q_en:'Value of 8 in 89453?', answer_ar:'٨٠٠٠٠', answer_en:'80000', explanation_ar:'٨ في عشرات الألوف = ٨٠٠٠٠.', explanation_en:'80000.' },
    { type:'word', bookRef:BOOK_PDF_CH1, page:40, q_ar:'عدد سكان حي ٤٥٠٠٠ نسمة. ما القيمة المنزلية للرقم ٤ الأول؟', q_en:'45,000 residents. Place value of first 4?', answer_ar:'٤٠٠٠٠', answer_en:'40000', explanation_ar:'٤ في عشرات الألوف = ٤٠٠٠٠.', explanation_en:'40000.' },
  ];
}

// ١-٦ مقارنة الأعداد
function LESSON_1_6() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH1, page:33, q_ar:'أيُّ العددين أكبر: ٤٥٦٧ أم ٤٣٩٨؟', q_en:'Which is larger: 4567 or 4398?', options_ar:['٤٥٦٧','٤٣٩٨','متساويان','لا أقارن'], options_en:['4567','4398','Equal','N/A'], correct:'0', explanation_ar:'٤٥٦٧ > ٤٣٩٨ (٥٠٠ > ٣٠٠ في المئات).', explanation_en:'4567>4398.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:34, q_ar:'ضع الرمز بين ٣٢٠٠ و ٣٢٠٠:', q_en:'Symbol between 3200 and 3200:', options_ar:['>','<','=','≠'], options_en:['>','<','=','≠'], correct:'2', explanation_ar:'متساويان.', explanation_en:'Equal.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:35, q_ar:'٩٩٩٩ أصغر من ١٠٠٠٠.', q_en:'9999 < 10000.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٤ أرقام < ٥ أرقام.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:36, q_ar:'ضع الرمز: ٤٥٦ ___ ٤٦٥', q_en:'Insert: 456 ___ 465', answer_ar:'<', answer_en:'<', explanation_ar:'٤٥٦ < ٤٦٥ (العشرات: ٥<٦).', explanation_en:'456<465.' },
    { type:'compute', bookRef:BOOK_PDF_CH1, page:37, q_ar:'أيُّ أكبر: ١٢٣٤٥ أم ١٢٣٥٤؟', q_en:'Which is larger: 12345 or 12354?', answer_ar:'١٢٣٥٤', answer_en:'12354', explanation_ar:'الآحاد: ٤ < ٥.', explanation_en:'12354.' },
    { type:'classify', bookRef:BOOK_PDF_CH1, page:38, q_ar:'صنّف: أكبر من ٥٠٠٠ / أصغر من ٥٠٠٠.', q_en:'Sort: >5000 / <5000.', categories_ar:['>٥٠٠٠','<٥٠٠٠'], categories_en:['>5000','<5000'], items_ar:[{item:'٦٢٠٠',correct_category:0},{item:'٤٨٠٠',correct_category:1},{item:'٥٤٠٠',correct_category:0},{item:'٣٩٠٠',correct_category:1}], items_en:[{item:'6200',correct_category:0},{item:'4800',correct_category:1},{item:'5400',correct_category:0},{item:'3900',correct_category:1}], explanation_ar:'قارن بـ ٥٠٠٠.', explanation_en:'Compare to 5000.' },
    { type:'word', bookRef:BOOK_PDF_CH1, page:39, q_ar:'في مكتبة ٣٤٥٠ كتابًا، وفي أخرى ٣٤١٥. أيهما أكثر؟', q_en:'Library A 3450, B 3415. Which has more?', answer_ar:'المكتبة الأولى', answer_en:'Library A', explanation_ar:'٣٤٥٠ > ٣٤١٥.', explanation_en:'3450>3415.' },
  ];
}

// ١-٧ ترتيب الأعداد
function LESSON_1_7() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH1, page:39, q_ar:'الترتيب التصاعدي يعني من:', q_en:'Ascending means from:', options_ar:['الأكبر للأصغر','الأصغر للأكبر','عشوائي','الوسط'], options_en:['Largest','Smallest','Random','Middle'], correct:'1', explanation_ar:'تصاعدي = صغير→كبير.', explanation_en:'Small to large.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:40, q_ar:'رتّب تصاعديًا: ٢٣٤، ٣٤٢، ٤٢٣.', q_en:'Order ascending: 234, 342, 423.', options_ar:['٢٣٤، ٣٤٢، ٤٢٣','٤٢٣، ٣٤٢، ٢٣٤','٣٤٢، ٢٣٤، ٤٢٣','٢٣٤، ٤٢٣، ٣٤٢'], options_en:['234,342,423','423,342,234','342,234,423','234,423,342'], correct:'0', explanation_ar:'٢٣٤ < ٣٤٢ < ٤٢٣.', explanation_en:'234<342<423.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:40, q_ar:'الترتيب التنازلي يعني من الأكبر إلى الأصغر.', q_en:'Descending = largest to smallest.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'تنازلي = كبير→صغير.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:40, q_ar:'العدد الذي يلي ٤٥٦٧ مباشرة هو ___', q_en:'Number after 4567: ___', answer_ar:'٤٥٦٨', answer_en:'4568', explanation_ar:'+١.', explanation_en:'4568.' },
    { type:'order', bookRef:BOOK_PDF_CH1, page:40, q_ar:'رتّب تنازليًا: ٣٤٥٦، ٢٣٤٥، ٤٥٦٧، ١٢٣٤.', q_en:'Order descending.', order_ar:['٤٥٦٧','٣٤٥٦','٢٣٤٥','١٢٣٤'], order_en:['4567','3456','2345','1234'], explanation_ar:'٤٥٦٧>٣٤٥٦>٢٣٤٥>١٢٣٤.', explanation_en:'Descending.' },
    { type:'word', bookRef:BOOK_PDF_CH1, page:40, q_ar:'سجّل لاعبون: ٤٥٦٧، ٤٧٦٥، ٤٦٥٧. رتّبها تنازليًا.', q_en:'Scores: 4567, 4765, 4657. Order descending.', answer_ar:'٤٧٦٥، ٤٦٥٧، ٤٥٦٧', answer_en:'4765, 4657, 4567', explanation_ar:'٤٧٦٥ الأعلى.', explanation_en:'4765 highest.' },
  ];
}

// ١-٨ التقريب إلى أقرب عشرة وإلى أقرب مئة
function LESSON_1_8() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH1, page:36, q_ar:'قرّب ٤٧ إلى أقرب عشرة:', q_en:'Round 47 to nearest ten:', options_ar:['٤٠','٥٠','٤٥','٤٧'], options_en:['40','50','45','47'], correct:'1', explanation_ar:'٧≥٥ → ٥٠.', explanation_en:'50.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:37, q_ar:'قرّب ٣٤٥ إلى أقرب مئة:', q_en:'Round 345 to nearest hundred:', options_ar:['٣٠٠','٤٠٠','٣٥٠','٣٤٥'], options_en:['300','400','350','345'], correct:'0', explanation_ar:'العشرات ٤ < ٥ → ٣٠٠.', explanation_en:'300.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:38, q_ar:'قرّب ٤٦٠ إلى أقرب مئة:', q_en:'Round 460 to nearest hundred:', options_ar:['٤٠٠','٥٠٠','٤٥٠','٤٦٠'], options_en:['400','500','450','460'], correct:'1', explanation_ar:'٦≥٥ → ٥٠٠.', explanation_en:'500.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:39, q_ar:'٧٨ يقرّب إلى ٨٠ عند التقريب لأقرب عشرة.', q_en:'78 rounds to 80.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٨≥٥ → ٨٠.', explanation_en:'True.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:39, q_ar:'٣٢٠ يقرّب إلى ٤٠٠ عند التقريب لأقرب مئة.', q_en:'320 rounds to 400.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'1', explanation_ar:'٢ < ٥ → ٣٠٠.', explanation_en:'Rounds to 300.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:40, q_ar:'قرّب ٢٣٨ إلى أقرب عشرة: ___', q_en:'Round 238 to nearest ten: ___', answer_ar:'٢٤٠', answer_en:'240', explanation_ar:'٨≥٥ → ٢٤٠.', explanation_en:'240.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:40, q_ar:'قرّب ٤٦٧ إلى أقرب مئة: ___', q_en:'Round 467 to nearest hundred: ___', answer_ar:'٥٠٠', answer_en:'500', explanation_ar:'٦≥٥ → ٥٠٠.', explanation_en:'500.' },
    { type:'compute', bookRef:BOOK_PDF_CH1, page:40, q_ar:'قرّب ٦٧٥ إلى أقرب مئة.', q_en:'Round 675 to nearest hundred.', answer_ar:'٧٠٠', answer_en:'700', explanation_ar:'٧≥٥ → ٧٠٠.', explanation_en:'700.' },
    { type:'word', bookRef:BOOK_PDF_CH1, page:40, q_ar:'سعر جهاز ٤٧٥ ريالًا. قرّب السعر لأقرب مئة.', q_en:'Device 475 riyals. Round to nearest hundred.', answer_ar:'٥٠٠', answer_en:'500', explanation_ar:'٧≥٥ → ٥٠٠.', explanation_en:'500.' },
  ];
}

// ١-٩ التقريب إلى أقرب ألف
function LESSON_1_9() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH1, page:40, q_ar:'عند التقريب إلى أقرب ألف، ننظر إلى الرقم في خانة:', q_en:'Rounding to nearest thousand, look at:', options_ar:['الأحاد','العشرات','المئات','الألوف'], options_en:['Ones','Tens','Hundreds','Thousands'], correct:'2', explanation_ar:'ننظر للمئات: ≥٥ يقرّب للأعلى.', explanation_en:'Look at hundreds.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:40, q_ar:'قرّب ٣٤٠٠ إلى أقرب ألف:', q_en:'Round 3400 to nearest thousand:', options_ar:['٣٠٠٠','٤٠٠٠','٣٥٠٠','٣٤٠٠'], options_en:['3000','4000','3500','3400'], correct:'0', explanation_ar:'المئات ٤ < ٥ → ٣٠٠٠.', explanation_en:'3000.' },
    { type:'mc', bookRef:BOOK_PDF_CH1, page:40, q_ar:'قرّب ٣٧٠٠ إلى أقرب ألف:', q_en:'Round 3700 to nearest thousand:', options_ar:['٣٠٠٠','٤٠٠٠','٣٥٠٠','٣٧٠٠'], options_en:['3000','4000','3500','3700'], correct:'1', explanation_ar:'المئات ٧ ≥ ٥ → ٤٠٠٠.', explanation_en:'4000.' },
    { type:'tf', bookRef:BOOK_PDF_CH1, page:40, q_ar:'٢٥٠٠ يقرّب إلى ٣٠٠٠ عند التقريب لأقرب ألف.', q_en:'2500 rounds to 3000.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٥ = ٥ → ٣٠٠٠.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:40, q_ar:'قرّب ٤٢٠٠ إلى أقرب ألف: ___', q_en:'Round 4200: ___', answer_ar:'٤٠٠٠', answer_en:'4000', explanation_ar:'٢ < ٥ → ٤٠٠٠.', explanation_en:'4000.' },
    { type:'fill', bookRef:BOOK_PDF_CH1, page:40, q_ar:'قرّب ٧٦٥٠ إلى أقرب ألف: ___', q_en:'Round 7650: ___', answer_ar:'٨٠٠٠', answer_en:'8000', explanation_ar:'٦≥٥ → ٨٠٠٠.', explanation_en:'8000.' },
    { type:'word', bookRef:BOOK_PDF_CH1, page:40, q_ar:'عدد زوار متحف ٤٣٠٠. قرّب لأقرب ألف.', q_en:'4300 visitors. Round to nearest thousand.', answer_ar:'٤٠٠٠', answer_en:'4000', explanation_ar:'٣ < ٥ → ٤٠٠٠.', explanation_en:'4000.' },
  ];
}

export const UNIT1_LESSONS = [
  { id:'ch1-l1', title_ar:'الجبر: الأنماط العددية', title_en:'Algebra: Number Patterns', questions: LESSON_1_1() },
  { id:'ch1-l2', title_ar:'مهارة حل المسألة: استعمال الخطوات الأربع', title_en:'Problem Solving: Four Steps', questions: LESSON_1_2() },
  { id:'ch1-l3', title_ar:'أستكشف القيمة المنزلية', title_en:'Explore Place Value', questions: LESSON_1_3() },
  { id:'ch1-l4', title_ar:'القيمة المنزلية ضمن الألوف', title_en:'Place Value in Thousands', questions: LESSON_1_4() },
  { id:'ch1-l5', title_ar:'القيمة المنزلية ضمن عشرات الألوف', title_en:'Place Value in Ten Thousands', questions: LESSON_1_5() },
  { id:'ch1-l6', title_ar:'مقارنة الأعداد', title_en:'Comparing Numbers', questions: LESSON_1_6() },
  { id:'ch1-l7', title_ar:'ترتيب الأعداد', title_en:'Ordering Numbers', questions: LESSON_1_7() },
  { id:'ch1-l8', title_ar:'التقريب إلى أقرب عشرة وإلى أقرب مئة', title_en:'Rounding to Nearest Ten and Hundred', questions: LESSON_1_8() },
  { id:'ch1-l9', title_ar:'التقريب إلى أقرب ألف', title_en:'Rounding to Nearest Thousand', questions: LESSON_1_9() },
];