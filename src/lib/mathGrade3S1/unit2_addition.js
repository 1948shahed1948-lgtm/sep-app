// بنك رياضيات الصف الثالث الابتدائي — الفصل الثاني: الجمع
// المصدر: كتاب الرياضيات ١٤٤٧هـ — ص ٤٢–٧٧
// الدروس: الإبدال، جمع دون إعادة تجميع، نمط، جمع مع إعادة تجميع (٢ و٣ أرقام)، تقدير، الجبر

export const BOOK_PDF_CH2 = 'https://media.base44.com/files/public/6a459ddfe6fb4264c098136d/1cf54b86c______1--10--7.pdf';

// ٢-١ خاصية الإبدال في الجمع (ص ٤٢–٤٥)
function LESSON_2_1() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH2, page:42, q_ar:'٣ + ٥ = ٥ + ٣. ما هذه الخاصية؟', q_en:'3+5=5+3. What property?', options_ar:['الخاصية التجميعية','خاصية الإبدال','خاصية التوزيع','خاصية العنصر المحايد'], options_en:['Associative','Commutative','Distributive','Identity'], correct:'1', explanation_ar:'خاصية الإبدال: ترتيب جمع الأعداد لا يغيّر الناتج. أ + ب = ب + أ.', explanation_en:'Commutative: a+b=b+a.' },
    { type:'mc', bookRef:BOOK_PDF_CH2, page:42, q_ar:'استعمل خاصية الإبدال: ٧ + ٤ = ؟', q_en:'Use commutative: 7+4=?', options_ar:['٤ + ٧','٣ + ٨','٢ + ٩','١١ + ٠'], options_en:['4+7','3+8','2+9','11+0'], correct:'0', explanation_ar:'٧ + ٤ = ٤ + ٧ = ١١.', explanation_en:'7+4=4+7=11.' },
    { type:'tf', bookRef:BOOK_PDF_CH2, page:43, q_ar:'٤ + ٨ = ٨ + ٤ نتيجتهما ١٢.', q_en:'4+8=8+4 both equal 12.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٤ + ٨ = ٨ + ٤ = ١٢ ✓.', explanation_en:'True.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:43, q_ar:'احسب: ٩ + ٦ = ؟', q_en:'9+6=?', answer_ar:'١٥', answer_en:'15', explanation_ar:'٩ + ٦ = ١٥.', explanation_en:'15.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:44, q_ar:'احسب: ٦ + ٩ = ؟', q_en:'6+9=?', answer_ar:'١٥', answer_en:'15', explanation_ar:'٦ + ٩ = ١٥ (نفس ناتج ٩ + ٦ بفضل الإبدال).', explanation_en:'6+9=15.' },
    { type:'fill', bookRef:BOOK_PDF_CH2, page:44, q_ar:'باستعمال خاصية الإبدال: ٥ + ١٢ = ١٢ + ___', q_en:'5+12=12+___', answer_ar:'٥', answer_en:'5', explanation_ar:'خاصية الإبدال: ٥ + ١٢ = ١٢ + ٥.', explanation_en:'5.' },
    { type:'mc', bookRef:BOOK_PDF_CH2, page:45, q_ar:'أيُّ الجمل الآتية توضّح خاصية الإبدال؟', q_en:'Which shows commutative property?', options_ar:['٨ + ٣ = ٣ + ٨','٨ + ٣ = ١١','٨ + ٣ = ٨ + ٣','٨ + ٠ = ٨'], options_en:['8+3=3+8','8+3=11','8+3=8+3','8+0=8'], correct:'0', explanation_ar:'الإبدال يعني تبديل ترتيب الأعداد مع ثبوت الناتج.', explanation_en:'8+3=3+8.' },
    { type:'word', bookRef:BOOK_PDF_CH2, page:45, q_ar:'في حافلة ٢٠ راكباً، ركب ١٥ آخرون. كم راكباً؟', q_en:'Bus: 20+15. Total?', answer_ar:'٣٥ راكباً', answer_en:'35 riders', explanation_ar:'٢٠ + ١٥ = ١٥ + ٢٠ = ٣٥.', explanation_en:'35.' },
    { type:'classify', bookRef:BOOK_PDF_CH2, page:45, q_ar:'صنّف: يوضّح خاصية الإبدال / لا يوضّحها.', q_en:'Sort: commutative / not.', categories_ar:['خاصية الإبدال ✓','لا يوضّحها ✗'], categories_en:['Commutative ✓','Not ✗'], items_ar:[{item:'٧+٢=٢+٧',correct_category:0},{item:'٧+٢=٩',correct_category:1},{item:'٤+٦=٦+٤',correct_category:0},{item:'٤+٦=١٠',correct_category:1}], items_en:[{item:'7+2=2+7',correct_category:0},{item:'7+2=9',correct_category:1},{item:'4+6=6+4',correct_category:0},{item:'4+6=10',correct_category:1}], explanation_ar:'الإبدال = تبديل ترتيب: أ+ب = ب+أ.', explanation_en:'Commutative = a+b=b+a.' },
  ];
}

// ٢-٢ الجمع دون إعادة التجميع (ص ٤٦–٤٩)
function LESSON_2_2() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH2, page:46, q_ar:'٢٤ + ١٣ = ؟ (دون إعادة تجميع)', q_en:'24+13=?', options_ar:['٣٧','٢٧','٤٧','٣٦'], options_en:['37','27','47','36'], correct:'0', explanation_ar:'٢ + ١ = ٣ (عشرات)، ٤ + ٣ = ٧ (أحاد) → ٣٧.', explanation_en:'24+13=37.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:46, q_ar:'٣٥ + ٤٢ = ؟', q_en:'35+42=?', answer_ar:'٧٧', answer_en:'77', explanation_ar:'٣٥ + ٤٢ = ٧٧ (لا نقل).', explanation_en:'77.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:47, q_ar:'٢١٤ + ٣٤٥ = ؟', q_en:'214+345=?', answer_ar:'٥٥٩', answer_en:'559', explanation_ar:'٢١٤ + ٣٤٥ = ٥٥٩.', explanation_en:'559.' },
    { type:'tf', bookRef:BOOK_PDF_CH2, page:47, q_ar:'٤٦ + ٢٣ = ٦٩', q_en:'46+23=69', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٤٦ + ٢٣ = ٦٩ صحيح.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH2, page:48, q_ar:'٦٣ + ٢٥ = ___', q_en:'63+25=___', answer_ar:'٨٨', answer_en:'88', explanation_ar:'٦٣ + ٢٥ = ٨٨.', explanation_en:'88.' },
    { type:'fill', bookRef:BOOK_PDF_CH2, page:48, q_ar:'___ + ٤١ = ٩٦', q_en:'___+41=96', answer_ar:'٥٥', answer_en:'55', explanation_ar:'٩٦ − ٤١ = ٥٥.', explanation_en:'55.' },
    { type:'mc', bookRef:BOOK_PDF_CH2, page:49, q_ar:'٤٢٣ + ١٣٦ = ؟', q_en:'423+136=?', options_ar:['٥٥٩','٥٤٩','٥٦٩','٤٥٩'], options_en:['559','549','569','459'], correct:'0', explanation_ar:'٤٢٣ + ١٣٦ = ٥٥٩.', explanation_en:'559.' },
    { type:'word', bookRef:BOOK_PDF_CH2, page:49, q_ar:'جمعت المدرسة ٣٢٥ ريالاً في يوم، و٢٤٤ في اليوم التالي. كم المجموع؟', q_en:'School: 325+244. Total?', answer_ar:'٥٦٩ ريالاً', answer_en:'569 riyals', explanation_ar:'٣٢٥ + ٢٤٤ = ٥٦٩.', explanation_en:'569.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:49, q_ar:'٥٠٠ + ٢٠٠ + ١٠٠ = ؟', q_en:'500+200+100=?', answer_ar:'٨٠٠', answer_en:'800', explanation_ar:'٥ + ٢ + ١ = ٨ مئات → ٨٠٠.', explanation_en:'800.' },
    { type:'order', bookRef:BOOK_PDF_CH2, page:49, q_ar:'رتّب نواتج الجمع تصاعدياً: (٤٥+٢٣)، (٣٢+١٥)، (٥١+١٩).', q_en:'Order ascending.', order_ar:['٤٧','٦٨','٧٠'], order_en:['47','68','70'], explanation_ar:'٣٢+١٥=٤٧ < ٤٥+٢٣=٦٨ < ٥١+١٩=٧٠.', explanation_en:'47<68<70.' },
  ];
}

// ٢-٣ مهارة حل المسألة: استعمال نمط (ص ٥٠–٥١)
function LESSON_2_3() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH2, page:50, q_ar:'ما النمط: ١٠، ٢٠، ٣٠، ٤٠، ___؟', q_en:'Pattern: 10,20,30,40,___?', options_ar:['٤٥','٥٠','٦٠','٤٢'], options_en:['45','50','60','42'], correct:'1', explanation_ar:'+١٠ كل مرة: التالي ٥٠.', explanation_en:'50.' },
    { type:'mc', bookRef:BOOK_PDF_CH2, page:50, q_ar:'ما النمط: ٧، ١٤، ٢١، ٢٨، ___؟', q_en:'Pattern: 7,14,21,28,___?', options_ar:['٣٠','٣٢','٣٥','٣٦'], options_en:['30','32','35','36'], correct:'2', explanation_ar:'+٧ كل مرة: التالي ٣٥.', explanation_en:'35.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:50, q_ar:'أكمل النمط: ٢٥، ٥٠، ٧٥، ___', q_en:'Complete: 25,50,75,___', answer_ar:'١٠٠', answer_en:'100', explanation_ar:'+٢٥ كل مرة: التالي ١٠٠.', explanation_en:'100.' },
    { type:'fill', bookRef:BOOK_PDF_CH2, page:51, q_ar:'أكمل: ٣، ٦، ٩، ١٢، ___', q_en:'Complete: 3,6,9,12,___', answer_ar:'١٥', answer_en:'15', explanation_ar:'+٣ كل مرة: التالي ١٥.', explanation_en:'15.' },
    { type:'tf', bookRef:BOOK_PDF_CH2, page:51, q_ar:'النمط ١٠٠، ٢٠٠، ٣٠٠، ٤٠٠ هو عدّ مئات.', q_en:'Pattern 100,200,300,400 is counting by hundreds.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'+١٠٠ كل مرة = عدّ مئات.', explanation_en:'True.' },
    { type:'word', bookRef:BOOK_PDF_CH2, page:51, q_ar:'يدّخر سعد ٥ ريالات أسبوعياً. كم بعد ٨ أسابيع؟', q_en:'Saad saves 5/week. After 8 weeks?', answer_ar:'٤٠ ريالاً', answer_en:'40 riyals', explanation_ar:'نمط: ٥، ١٠، ١٥... ٥ × ٨ = ٤٠.', explanation_en:'40.' },
    { type:'mc', bookRef:BOOK_PDF_CH2, page:51, q_ar:'خطة "استعمال نمط" تعني:', q_en:'"Use a pattern" strategy means:', options_ar:['ملاحظة التكرار في الأعداد لإكمال المسألة','حفظ الجداول','القسمة الطويلة','الجمع المكتوب'], options_en:['Observe repeating numbers','Memorize tables','Long division','Written addition'], correct:'0', explanation_ar:'اكتشاف النمط يُسهّل حل المسائل.', explanation_en:'Find the pattern.' },
  ];
}

// ٢-٤ الجمع مع إعادة التجميع — رقمان (ص ٥٢–٥٥)
function LESSON_2_4() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH2, page:52, q_ar:'متى نحتاج إلى إعادة التجميع في الجمع؟', q_en:'When do we regroup in addition?', options_ar:['دائمًا','حين يكون ناتج جمع الأحاد ≥ ١٠','حين العددان متساويان','أبدًا'], options_en:['Always','When ones sum ≥ 10','Equal numbers','Never'], correct:'1', explanation_ar:'نُعيد التجميع (نحمل) إذا كان مجموع الأحاد ١٠ أو أكثر.', explanation_en:'Regroup when ones sum ≥ 10.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:52, q_ar:'٤٧ + ٢٥ = ؟', q_en:'47+25=?', answer_ar:'٧٢', answer_en:'72', explanation_ar:'٧+٥=١٢ → نكتب ٢ ونحمل ١. ٤+٢+١=٧ → ٧٢.', explanation_en:'47+25=72 (carry 1).' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:53, q_ar:'٥٨ + ٣٦ = ؟', q_en:'58+36=?', answer_ar:'٩٤', answer_en:'94', explanation_ar:'٨+٦=١٤ → ٤ واحمل ١. ٥+٣+١=٩ → ٩٤.', explanation_en:'58+36=94.' },
    { type:'mc', bookRef:BOOK_PDF_CH2, page:53, q_ar:'٣٩ + ٤٧ = ؟', q_en:'39+47=?', options_ar:['٧٦','٨٦','٧٥','٧٤'], options_en:['76','86','75','74'], correct:'1', explanation_ar:'٩+٧=١٦ → ٦ واحمل ١. ٣+٤+١=٨ → ٨٦.', explanation_en:'86.' },
    { type:'tf', bookRef:BOOK_PDF_CH2, page:54, q_ar:'٦٥ + ٢٨ = ٩٣', q_en:'65+28=93', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٥+٨=١٣ → ٣ واحمل ١. ٦+٢+١=٩ → ٩٣ ✓.', explanation_en:'65+28=93. True.' },
    { type:'tf', bookRef:BOOK_PDF_CH2, page:54, q_ar:'٧٦ + ٤٩ = ١١٥', q_en:'76+49=115', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'1', explanation_ar:'٧٦ + ٤٩ = ١٢٥ وليس ١١٥.', explanation_en:'76+49=125, not 115.' },
    { type:'fill', bookRef:BOOK_PDF_CH2, page:55, q_ar:'٤٨ + ٣٤ = ___', q_en:'48+34=___', answer_ar:'٨٢', answer_en:'82', explanation_ar:'٨+٤=١٢ → ٢ واحمل ١. ٤+٣+١=٨ → ٨٢.', explanation_en:'82.' },
    { type:'fill', bookRef:BOOK_PDF_CH2, page:55, q_ar:'٥٧ + ___ = ٨١', q_en:'57+___=81', answer_ar:'٢٤', answer_en:'24', explanation_ar:'٨١ − ٥٧ = ٢٤.', explanation_en:'24.' },
    { type:'word', bookRef:BOOK_PDF_CH2, page:55, q_ar:'أنتج مصنع ٦٧ سيارة يوم الاثنين، و٤٨ يوم الثلاثاء. كم المجموع؟', q_en:'Factory: 67+48. Total?', answer_ar:'١١٥ سيارة', answer_en:'115 cars', explanation_ar:'٦٧ + ٤٨ = ١١٥.', explanation_en:'115.' },
    { type:'word', bookRef:BOOK_PDF_CH2, page:55, q_ar:'في مكتبة ٨٥ كتابًا علمياً، و٦٧ كتابًا أدبياً. كم المجموع؟', q_en:'Library: 85+67. Total?', answer_ar:'١٥٢ كتابًا', answer_en:'152 books', explanation_ar:'٨٥ + ٦٧ = ١٥٢.', explanation_en:'152.' },
  ];
}

// ٢-٥ الجمع مع إعادة التجميع — ثلاثة أرقام (ص ٥٦–٦١)
function LESSON_2_5() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH2, page:56, q_ar:'٢٤٥ + ١٣٨ = ؟', q_en:'245+138=?', options_ar:['٣٧٣','٣٨٣','٣٦٣','٣٧٢'], options_en:['373','383','363','372'], correct:'1', explanation_ar:'٥+٨=١٣ → ٣ واحمل ١. ٤+٣+١=٨. ٢+١=٣ → ٣٨٣.', explanation_en:'245+138=383.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:57, q_ar:'٣٥٦ + ٢٦٧ = ؟', q_en:'356+267=?', answer_ar:'٦٢٣', answer_en:'623', explanation_ar:'٦+٧=١٣، ٥+٦+١=١٢، ٣+٢+١=٦ → ٦٢٣.', explanation_en:'623.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:57, q_ar:'٤٨٧ + ٣٧٦ = ؟', q_en:'487+376=?', answer_ar:'٨٦٣', answer_en:'863', explanation_ar:'٤٨٧ + ٣٧٦ = ٨٦٣.', explanation_en:'863.' },
    { type:'tf', bookRef:BOOK_PDF_CH2, page:58, q_ar:'٥٥٥ + ٤٤٥ = ١٠٠٠', q_en:'555+445=1000', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٥٥٥ + ٤٤٥ = ١٠٠٠ صحيح.', explanation_en:'True.' },
    { type:'fill', bookRef:BOOK_PDF_CH2, page:58, q_ar:'٦٢٤ + ٢٤٧ = ___', q_en:'624+247=___', answer_ar:'٨٧١', answer_en:'871', explanation_ar:'٦٢٤ + ٢٤٧ = ٨٧١.', explanation_en:'871.' },
    { type:'mc', bookRef:BOOK_PDF_CH2, page:59, q_ar:'٢٦٤ + ٤٥٩ = ؟', q_en:'264+459=?', options_ar:['٧١٣','٧٢٣','٦٢٣','٧٢٢'], options_en:['713','723','623','722'], correct:'1', explanation_ar:'٤+٩=١٣، ٦+٥+١=١٢، ٢+٤+١=٧ → ٧٢٣.', explanation_en:'264+459=723.' },
    { type:'word', bookRef:BOOK_PDF_CH2, page:60, q_ar:'عدد سكان مدينة ٣٤٥٦ نسمة، قرية مجاورة ٢٧٨٩. كم المجموع؟', q_en:'City: 3456, Village: 2789. Total?', answer_ar:'٦٢٤٥ نسمة', answer_en:'6245', explanation_ar:'٣٤٥٦ + ٢٧٨٩ = ٦٢٤٥.', explanation_en:'6245.' },
    { type:'word', bookRef:BOOK_PDF_CH2, page:60, q_ar:'باعت شركة ١٢٣٧ منتجاً في يناير، و٩٨٦ في فبراير. كم المجموع؟', q_en:'Sold: 1237+986. Total?', answer_ar:'٢٢٢٣ منتجاً', answer_en:'2223', explanation_ar:'١٢٣٧ + ٩٨٦ = ٢٢٢٣.', explanation_en:'2223.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:61, q_ar:'٤٥٦ + ٢٧٨ + ١٣٥ = ؟', q_en:'456+278+135=?', answer_ar:'٨٦٩', answer_en:'869', explanation_ar:'٤٥٦ + ٢٧٨ = ٧٣٤، ٧٣٤ + ١٣٥ = ٨٦٩.', explanation_en:'869.' },
    { type:'classify', bookRef:BOOK_PDF_CH2, page:61, q_ar:'صنّف نواتج الجمع: أكبر من ٧٠٠ / أصغر من ٧٠٠.', q_en:'Sort: >700 / <700.', categories_ar:['>٧٠٠','<٧٠٠'], categories_en:['>700','<700'], items_ar:[{item:'٤٥٦+٢٧٨=٧٣٤',correct_category:0},{item:'٣٢١+٢٤٥=٥٦٦',correct_category:1},{item:'٥٨٩+١٥٦=٧٤٥',correct_category:0},{item:'٤٢٣+٢١٣=٦٣٦',correct_category:1}], items_en:[{item:'456+278=734',correct_category:0},{item:'321+245=566',correct_category:1},{item:'589+156=745',correct_category:0},{item:'423+213=636',correct_category:1}], explanation_ar:'احسب وقارن بـ ٧٠٠.', explanation_en:'Compare to 700.' },
  ];
}

// ٢-٦ تقدير الجمع (ص ٦٢–٦٧)
function LESSON_2_6() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH2, page:62, q_ar:'لتقدير جمع ٤٨ + ٣١، نقرّب كلًّا لأقرب عشرة ثم نجمع. التقدير:', q_en:'Estimate 48+31 to nearest ten.', options_ar:['٧٠','٨٠','٩٠','٧٥'], options_en:['70','80','90','75'], correct:'1', explanation_ar:'٥٠ + ٣٠ = ٨٠ (٤٨→٥٠، ٣١→٣٠).', explanation_en:'50+30=80.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:63, q_ar:'قدّر: ٦٧ + ٢٤ (إلى أقرب عشرة).', q_en:'Estimate: 67+24.', answer_ar:'٩٠', answer_en:'90', explanation_ar:'٧٠ + ٢٠ = ٩٠.', explanation_en:'70+20=90.' },
    { type:'tf', bookRef:BOOK_PDF_CH2, page:64, q_ar:'تقدير ٤٣ + ٣٨ إلى أقرب عشرة يساوي ٨٠.', q_en:'Estimate 43+38 = 80.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'٤٠ + ٤٠ = ٨٠ ✓.', explanation_en:'True.' },
    { type:'mc', bookRef:BOOK_PDF_CH2, page:64, q_ar:'قدّر ٣٤٥ + ٢١٢ بالتقريب لأقرب مئة:', q_en:'Estimate 345+212 (nearest hundred):', options_ar:['٥٠٠','٦٠٠','٤٠٠','٥٥٠'], options_en:['500','600','400','550'], correct:'1', explanation_ar:'٣٠٠ + ٢٠٠ = ٥٠٠... التقريب الصحيح: ٣٤٥→٣٠٠، ٢١٢→٢٠٠ → ٥٠٠.', explanation_en:'300+200=500.' },
    { type:'fill', bookRef:BOOK_PDF_CH2, page:65, q_ar:'قدّر ٧٨ + ١٣ إلى أقرب عشرة: ___', q_en:'Estimate 78+13: ___', answer_ar:'٩٠', answer_en:'90', explanation_ar:'٨٠ + ١٠ = ٩٠.', explanation_en:'90.' },
    { type:'word', bookRef:BOOK_PDF_CH2, page:66, q_ar:'في مدرسة ٤٢٧ طالباً، وفي أخرى ٣١٨. قدّر العدد الكلي.', q_en:'Schools: 427+318. Estimate total.', answer_ar:'حوالي ٧٠٠ طالب', answer_en:'About 700', explanation_ar:'٤٠٠ + ٣٠٠ = ٧٠٠ (تقريب).', explanation_en:'400+300=700.' },
    { type:'tf', bookRef:BOOK_PDF_CH2, page:67, q_ar:'التقدير يعطي إجابة تقريبية قريبة من الإجابة الدقيقة.', q_en:'Estimation gives an answer close to exact.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'التقدير قريب من الدقيق لكنه ليس مطابقاً.', explanation_en:'True.' },
    { type:'mc', bookRef:BOOK_PDF_CH2, page:67, q_ar:'الإجابة الدقيقة لـ ٤٨ + ٣١ مقارنةً بالتقدير ٨٠:', q_en:'Exact 48+31 vs estimate 80:', options_ar:['أقل من التقدير (٧٩)','أكبر من التقدير','مساوٍ','غير ذلك'], options_en:['Less (79)','Greater','Equal','Other'], correct:'0', explanation_ar:'٤٨ + ٣١ = ٧٩ وهي قريبة من التقدير ٨٠.', explanation_en:'48+31=79, close to 80.' },
  ];
}

// ٢-٧ الجبر: المعادلات والعلاقات (ص ٦٨–٧٧)
function LESSON_2_7() {
  return [
    { type:'mc', bookRef:BOOK_PDF_CH2, page:68, q_ar:'إذا كان أ + ١٥ = ٤٢، فـ أ = ؟', q_en:'If a+15=42, then a=?', options_ar:['٢٧','٥٧','٣٧','٢٨'], options_en:['27','57','37','28'], correct:'0', explanation_ar:'أ = ٤٢ − ١٥ = ٢٧.', explanation_en:'a=42-15=27.' },
    { type:'compute', bookRef:BOOK_PDF_CH2, page:69, q_ar:'ب + ٢٣ = ٥٨، فـ ب = ؟', q_en:'b+23=58, b=?', answer_ar:'٣٥', answer_en:'35', explanation_ar:'ب = ٥٨ − ٢٣ = ٣٥.', explanation_en:'35.' },
    { type:'fill', bookRef:BOOK_PDF_CH2, page:70, q_ar:'___ + ٣٤ = ٧٩', q_en:'___+34=79', answer_ar:'٤٥', answer_en:'45', explanation_ar:'٧٩ − ٣٤ = ٤٥.', explanation_en:'45.' },
    { type:'fill', bookRef:BOOK_PDF_CH2, page:70, q_ar:'٥٦ + ___ = ٩٣', q_en:'56+___=93', answer_ar:'٣٧', answer_en:'37', explanation_ar:'٩٣ − ٥٦ = ٣٧.', explanation_en:'37.' },
    { type:'tf', bookRef:BOOK_PDF_CH2, page:71, q_ar:'إذا كان ج + ٤٧ = ١٠٠، فـ ج = ٥٣.', q_en:'If c+47=100, then c=53.', options_ar:['صح','خطأ'], options_en:['True','False'], correct:'0', explanation_ar:'ج = ١٠٠ − ٤٧ = ٥٣ ✓.', explanation_en:'True.' },
    { type:'word', bookRef:BOOK_PDF_CH2, page:72, q_ar:'اشترى فهد كتاباً بـ ٣٤ ريالاً، وبقي معه ٥٦ ريالاً. كم كان معه؟', q_en:'Fahad: book 34, left 56. Initial?', answer_ar:'٩٠ ريالاً', answer_en:'90 riyals', explanation_ar:'٣٤ + ٥٦ = ٩٠.', explanation_en:'90.' },
    { type:'mc', bookRef:BOOK_PDF_CH2, page:73, q_ar:'س + ١٤٦ = ٣٧٨. قيمة س:', q_en:'x+146=378. Value of x:', options_ar:['٢٣٢','٢٢٢','٢٤٢','٢٥٢'], options_en:['232','222','242','252'], correct:'0', explanation_ar:'س = ٣٧٨ − ١٤٦ = ٢٣٢.', explanation_en:'x=378-146=232.' },
    { type:'word', bookRef:BOOK_PDF_CH2, page:74, q_ar:'في حديقة ٢٥ شجرة تفاح و٣٧ شجرة برتقال. أضيف عدد من أشجار الموز فأصبح المجموع ٨٠. كم شجرة موز؟', q_en:'25 apple + 37 orange + banana = 80. Banana?', answer_ar:'١٨ شجرة', answer_en:'18 trees', explanation_ar:'٢٥ + ٣٧ = ٦٢. ٨٠ − ٦٢ = ١٨.', explanation_en:'80-25-37=18.' },
    { type:'match', bookRef:BOOK_PDF_CH2, page:75, q_ar:'صل المعادلة بقيمة المجهول.', q_en:'Match equation to unknown.', pairs_ar:[{left:'أ+٢٥=٥٠',right:'أ=٢٥'},{left:'ب+٣٠=٧٠',right:'ب=٤٠'},{left:'ج+٤٥=٩٠',right:'ج=٤٥'},{left:'د+١٢=٥٥',right:'د=٤٣'}], pairs_en:[{left:'a+25=50',right:'a=25'},{left:'b+30=70',right:'b=40'},{left:'c+45=90',right:'c=45'},{left:'d+12=55',right:'d=43'}], explanation_ar:'اطرح المعطى من الناتج لإيجاد المجهول.', explanation_en:'Subtract to find unknown.' },
    { type:'classify', bookRef:BOOK_PDF_CH2, page:77, q_ar:'صنّف: ناتج المجهول أكبر من ٥٠ / أصغر من ٥٠.', q_en:'Sort: unknown >50 / <50.', categories_ar:['>٥٠','<٥٠'], categories_en:['>50','<50'], items_ar:[{item:'أ+٣٤=٩٠→أ=٥٦',correct_category:0},{item:'ب+٢٣=٤٥→ب=٢٢',correct_category:1},{item:'ج+٤١=١٠٠→ج=٥٩',correct_category:0},{item:'د+١٥=٤٨→د=٣٣',correct_category:1}], items_en:[{item:'a+34=90→a=56',correct_category:0},{item:'b+23=45→b=22',correct_category:1},{item:'c+41=100→c=59',correct_category:0},{item:'d+15=48→d=33',correct_category:1}], explanation_ar:'أوجد قيمة المجهول ثم قارن بـ ٥٠.', explanation_en:'Find unknown then compare to 50.' },
  ];
}

export const UNIT2_LESSONS = [
  { id:'ch2-l1', title_ar:'خاصية الإبدال في الجمع', title_en:'Commutative Property', questions: LESSON_2_1() },
  { id:'ch2-l2', title_ar:'الجمع دون إعادة التجميع', title_en:'Addition Without Regrouping', questions: LESSON_2_2() },
  { id:'ch2-l3', title_ar:'مهارة حل المسألة: استعمال نمط', title_en:'Problem Solving: Use a Pattern', questions: LESSON_2_3() },
  { id:'ch2-l4', title_ar:'الجمع مع إعادة التجميع (رقمان)', title_en:'Addition With Regrouping (2-digit)', questions: LESSON_2_4() },
  { id:'ch2-l5', title_ar:'الجمع مع إعادة التجميع (ثلاثة أرقام)', title_en:'Addition With Regrouping (3-digit)', questions: LESSON_2_5() },
  { id:'ch2-l6', title_ar:'تقدير الجمع', title_en:'Estimate Sums', questions: LESSON_2_6() },
  { id:'ch2-l7', title_ar:'الجبر: المعادلات والعلاقات', title_en:'Algebra: Equations', questions: LESSON_2_7() },
];