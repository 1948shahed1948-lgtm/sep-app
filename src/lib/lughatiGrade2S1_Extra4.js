// لغتي — الصف الثاني الابتدائي — الفصل الأول
// الوحدة الثالثة: وطني السعودية · الوحدة الرابعة: محاصيل من بلادي
// مستخرج من كتاب الطالب 1447هـ / 2025م

const IMG = {
  makkah: 'https://images.unsplash.com/photo-1591607552219-8b9c7b8e1c8e?w=600&q=80',
  madinah: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=600&q=80',
  saudi: 'https://images.unsplash.com/photo-1517824806704-9040b037649b?w=600&q=80',
  palm: 'https://images.unsplash.com/photo-1599022540667-b9d086602d52?w=600&q=80',
  dates: 'https://images.unsplash.com/photo-1605258206530-43d8e1a7c57e?w=600&q=80',
  desert: 'https://images.unsplash.com/photo-1543589035-6a4b04c8e80f?w=600&q=80',
  farm: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80',
  book: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
  flag: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80',
  city: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80',
  fruit: 'https://images.unsplash.com/photo-1619566636858-adf3ef46400b?w=600&q=80',
  wheat: 'https://images.unsplash.com/photo-1574323347407-f5e70ad28d8e?w=600&q=80',
  harvest: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad4bd?w=600&q=80',
};

// ════════════════════════════════════════════════════════════
// الوحدة الثالثة: وطني السعودية
// ════════════════════════════════════════════════════════════

// ───── الدرس الأول: مدينتان مقدستان (ص ٩٠–١٠٥) ─────
export const U3L1_QUESTIONS = [
  {id:'u3l1q1',unit:'u3',lesson:'u3l1',page:90,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.makkah,
   question:'ما المدينتان المقدّستان في المملكة العربية السعودية؟',paragraph:'مدينتان مقدّستان. (ص90)',
   options:[{text:'مكة المكرمة والمدينة المنورة',correct:true},{text:'الرياض وجدة',correct:false},{text:'الدمام والخبر',correct:false},{text:'أبها وتبوك',correct:false}],
   explanation:'المدينتان المقدّستان هما مكة المكرمة والمدينة المنورة.',goldenRule:'مكة والمدينة مقدّستان عند المسلمين.'},

  {id:'u3l1q2',unit:'u3',lesson:'u3l1',page:91,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.makkah,
   question:'أين تقع الكعبة المشرّفة؟',paragraph:'الكعبة في مكة. (ص91)',
   options:[{text:'في مكة المكرمة',correct:true},{text:'في المدينة المنورة',correct:false},{text:'في الرياض',correct:false},{text:'في جدة',correct:false}],
   explanation:'الكعبة المشرّفة تقع في مكة المكرمة في المسجد الحرام.',goldenRule:'الكعبة قبلة المسلمين في مكة.'},

  {id:'u3l1q3',unit:'u3',lesson:'u3l1',page:92,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.makkah,
   question:'مكة المكرمة هي قبلة المسلمين في صلاتهم.',paragraph:'القبلة. (ص92)',
   correctAnswer:true,explanation:'يتّجه المسلمون في صلاتهم نحو الكعبة في مكة المكرمة.',goldenRule:'القبلة = الكعبة في مكة.'},

  {id:'u3l1q4',unit:'u3',lesson:'u3l1',page:93,type:'multipleChoice',bloom:'understand',difficulty:'easy',image:IMG.madinah,
   question:'أين يوجد قبر النبي محمد ﷺ؟',paragraph:'المدينة المنورة. (ص93)',
   options:[{text:'في المدينة المنورة',correct:true},{text:'في مكة المكرمة',correct:false},{text:'في الرياض',correct:false},{text:'في الطائف',correct:false}],
   explanation:'يوجد قبر النبي محمد ﷺ في المسجد النبوي بالمدينة المنورة.',goldenRule:'المسجد النبوي في المدينة.'},

  {id:'u3l1q5',unit:'u3',lesson:'u3l1',page:94,type:'trueFalse',bloom:'understand',difficulty:'easy',image:IMG.madinah,
   question:'المسجد النبوي في المدينة المنورة.',paragraph:'المسجد النبوي. (ص94)',
   correctAnswer:true,explanation:'المسجد النبوي يقع في المدينة المنورة.',goldenRule:'المسجد النبوي = المدينة المنورة.'},

  {id:'u3l1q6',unit:'u3',lesson:'u3l1',page:95,type:'multipleChoice',bloom:'understand',difficulty:'medium',image:IMG.makkah,
   question:'لماذا تُسمّى مكة بـ"المكرّمة"؟',paragraph:'مكة المكرّمة. (ص95)',
   options:[{text:'لأنها محلّلة وتُكرّم الضيف',correct:true},{text:'لأنها كبيرة',correct:false},{text:'لأنها قديمة',correct:false},{text:'لا سبب',correct:false}],
   explanation:'سُمّيت مكة المكرّمة لأنها محلّلة وتُكرّم الضيف.',goldenRule:'مكة = محلّلة + مكرّمة.'},

  {id:'u3l1q7',unit:'u3',lesson:'u3l1',page:96,type:'multipleChoice',bloom:'understand',difficulty:'medium',image:IMG.madinah,
   question:'لماذا تُسمّى المدينة بـ"المنوّرة"؟',paragraph:'المدينة المنوّرة. (ص96)',
   options:[{text:'لأنها أضاءت بنور النبي ﷺ',correct:true},{text:'لأنها مشمسة',correct:false},{text:'لأنها جديدة',correct:false},{text:'لأنها كبيرة',correct:false}],
   explanation:'سُمّيت المدينة المنوّرة لأنها أضاءت بنور النبي ﷺ.',goldenRule:'المدينة = نور النبي ﷺ.'},

  {id:'u3l1q8',unit:'u3',lesson:'u3l1',page:97,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.makkah,
   question:'الحج يكون في مكة المكرمة.',paragraph:'الحج في مكة. (ص97)',
   correctAnswer:true,explanation:'يؤدّي المسلمون الحج في مكة المكرمة.',goldenRule:'الحج = مكة المكرمة.'},

  {id:'u3l1q9',unit:'u3',lesson:'u3l1',page:98,type:'matching',bloom:'understand',difficulty:'medium',image:IMG.book,
   question:'صِل كل مدينة بأهم ما فيها:',paragraph:'مدينتان مقدّستان. (ص90)',
   pairs:[{left:'مكة المكرمة',right:'الكعبة المشرّفة'},{left:'المدينة المنورة',right:'المسجد النبوي'},{left:'الرياض',right:'العاصمة'},{left:'جدة',right:'البحر الأحمر'}],
   explanation:'مكة فيها الكعبة، والمدينة فيها المسجد النبوي، والرياض العاصمة، وجدة على البحر الأحمر.',goldenRule:'لكل مدينة ميزتها.'},

  {id:'u3l1q10',unit:'u3',lesson:'u3l1',page:99,type:'fillBlank',bloom:'apply',difficulty:'easy',image:IMG.makkah,
   question:'"الكعبة في مدينة ___ ." أكمل.',paragraph:'الكعبة في مكة. (ص91)',
   blanks:['مكة'],wordBank:['مكة','المدينة','الرياض','جدة'],
   explanation:'الكعبة في مدينة مكة المكرمة.',goldenRule:'الكعبة = مكة.'},

  {id:'u3l1q11',unit:'u3',lesson:'u3l1',page:100,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.madinah,
   question:'ما اسم المسجد الذي يضمّ قبر النبي ﷺ؟',paragraph:'المسجد النبوي. (ص94)',
   options:[{text:'المسجد النبوي',correct:true},{text:'المسجد الحرام',correct:false},{text:'المسجد الأقصى',correct:false},{text:'المسجد الكبير',correct:false}],
   explanation:'المسجد النبوي في المدينة المنورة يضمّ قبر النبي ﷺ.',goldenRule:'المسجد النبوي = المدينة المنورة.'},

  {id:'u3l1q12',unit:'u3',lesson:'u3l1',page:101,type:'trueFalse',bloom:'evaluate',difficulty:'hard',image:IMG.makkah,
   question:'العمرة تُؤدّى في مكة المكرمة في أي وقت من السنة.',paragraph:'العمرة. (ص101)',
   correctAnswer:true,explanation:'العمرة تُؤدّى في مكة المكرمة في أي وقت من السنة.',goldenRule:'العمرة = مكة + أي وقت.'},

  {id:'u3l1q13',unit:'u3',lesson:'u3l1',page:102,type:'classify',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صنّف: في مكة / في المدينة:',
   categories:['في مكة','في المدينة'],
   items:[{text:'الكعبة',correct_category:0},{text:'المسجد النبوي',correct_category:1},{text:'الحج',correct_category:0},{text:'قبر النبي ﷺ',correct_category:1}],
   explanation:'الكعبة والحج في مكة، والمسجد النبوي وقبر النبي في المدينة.',goldenRule:'مكة = الكعبة. المدينة = المسجد النبوي.'},

  {id:'u3l1q14',unit:'u3',lesson:'u3l1',page:103,type:'multipleChoice',bloom:'understand',difficulty:'medium',image:IMG.saudi,
   question:'ما اسم وطننا الذي نحبّه؟',paragraph:'وطني السعودية. (ص103)',
   options:[{text:'المملكة العربية السعودية',correct:true},{text:'الإمارات',correct:false},{text:'مصر',correct:false},{text:'الأردن',correct:false}],
   explanation:'وطننا هو المملكة العربية السعودية.',goldenRule:'السعودية وطننا.'},

  {id:'u3l1q15',unit:'u3',lesson:'u3l1',page:104,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.flag,
   question:'علم المملكة العربية السعودية أخضر وفيه الشهادتان.',paragraph:'علم السعودية. (ص104)',
   correctAnswer:true,explanation:'علم المملكة العربية السعودية أخضر وفيه الشهادتان والسيف.',goldenRule:'علم السعودية = أخضر + الشهادة.'},

  {id:'u3l1q16',unit:'u3',lesson:'u3l1',page:105,type:'ordering',bloom:'understand',difficulty:'medium',image:IMG.book,
   question:'رتّب المدن من المقدّسة إلى العاصمة:',paragraph:'مدينتان مقدّستان. (ص90)',
   items:['مكة المكرمة','الرياض','جدة'],
   correctOrder:[0,1,2],explanation:'مكة مقدّسة، والرياض عاصمة، وجدة ساحلية.',goldenRule:'الترتيب حسب الأهمية الدينية.'},

  {id:'u3l1q17',unit:'u3',lesson:'u3l1',page:90,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.makkah,
   question:'ما الذي يطوف به الحجاج في مكة؟',paragraph:'الطواف. (ص97)',
   options:[{text:'الكعبة المشرّفة',correct:true},{text:'المسجد النبوي',correct:false},{text:'الجبال',correct:false},{text:'البحر',correct:false}],
   explanation:'يطوف الحجاج حول الكعبة المشرّفة في مكة.',goldenRule:'الطواف حول الكعبة.'},

  {id:'u3l1q18',unit:'u3',lesson:'u3l1',page:93,type:'fillBlank',bloom:'apply',difficulty:'easy',image:IMG.madinah,
   question:'"المسجد ___ في المدينة المنورة." أكمل.',paragraph:'المسجد النبوي. (ص94)',
   blanks:['النبوي'],wordBank:['النبوي','الحرام','الأقصى'],
   explanation:'المسجد النبوي في المدينة المنورة.',goldenRule:'المسجد النبوي = المدينة.'},

  {id:'u3l1q19',unit:'u3',lesson:'u3l1',page:95,type:'matching',bloom:'understand',difficulty:'medium',image:IMG.book,
   question:'صِل كل صفة بالمدينة المناسبة:',paragraph:'مدينتان مقدّستان. (ص90)',
   pairs:[{left:'الكعبة',right:'مكة'},{left:'المسجد النبوي',right:'المدينة'},{left:'العاصمة',right:'الرياض'},{left:'البحر',right:'جدة'}],
   explanation:'لكل مكان صفته المميزة.',goldenRule:'الصفات تحدد الأماكن.'},

  {id:'u3l1q20',unit:'u3',lesson:'u3l1',page:98,type:'trueFalse',bloom:'evaluate',difficulty:'hard',image:IMG.makkah,
   question:'المسلمون كلهم يحبّون مكة والمدينة.',paragraph:'حبّ المدينتين. (ص98)',
   correctAnswer:true,explanation:'المسلمون يحبّون مكة والمدينة لقداستهما.',goldenRule:'حبّ المقدّسات إيمان.'},

  {id:'u3l1q21',unit:'u3',lesson:'u3l1',page:92,type:'multipleChoice',bloom:'analyze',difficulty:'medium',image:IMG.makkah,
   question:'إلى أي شيء يتّجه المسلم في صلاته؟',paragraph:'القبلة. (ص92)',
   options:[{text:'إلى الكعبة',correct:true},{text:'إلى الشمال',correct:false},{text:'إلى البحر',correct:false},{text:'إليك',correct:false}],
   explanation:'المسلم يتّجه في صلاته إلى الكعبة في مكة.',goldenRule:'القبلة = الكعبة.'},

  {id:'u3l1q22',unit:'u3',lesson:'u3l1',page:96,type:'fillBlank',bloom:'remember',difficulty:'easy',image:IMG.madinah,
   question:'"المدينة ___ أضاءت بنور النبي ﷺ." أكمل.',paragraph:'المدينة المنوّرة. (ص96)',
   blanks:['المنوّرة'],wordBank:['المنوّرة','المكرّمة','الكبيرة'],
   explanation:'المدينة المنوّرة أضاءت بنور النبي ﷺ.',goldenRule:'المنوّرة = نور النبي ﷺ.'},

  {id:'u3l1q23',unit:'u3',lesson:'u3l1',page:99,type:'classify',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صنّف كل كلمة: اسم مدينة / اسم مسجد:',
   categories:['اسم مدينة','اسم مسجد'],
   items:[{text:'مكة',correct_category:0},{text:'المسجد الحرام',correct_category:1},{text:'المدينة',correct_category:0},{text:'المسجد النبوي',correct_category:1},{text:'الرياض',correct_category:0}],
   explanation:'مكة والمدينة والرياض مدن، والمسجد الحرام والنبوي مساجد.',goldenRule:'المدينة ≠ المسجد.'},

  {id:'u3l1q24',unit:'u3',lesson:'u3l1',page:103,type:'multipleChoice',bloom:'understand',difficulty:'easy',image:IMG.flag,
   question:'ماذا يوجد على علم المملكة العربية السعودية؟',paragraph:'علم السعودية. (ص104)',
   options:[{text:'الشهادتان والسيف',correct:true},{text:'نجم',correct:false},{text:'طائر',correct:false},{text:'جبل',correct:false}],
   explanation:'علم السعودية أخضر وفيه الشهادتان والسيف.',goldenRule:'العلم = أخضر + شهادة + سيف.'},

  {id:'u3l1q25',unit:'u3',lesson:'u3l1',page:101,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.book,
   question:'الحج ركن من أركان الإسلام الخمسة.',paragraph:'أركان الإسلام. (ص101)',
   correctAnswer:true,explanation:'الحج ركن خامس من أركان الإسلام.',goldenRule:'الحج ركن الإسلام الخامس.'},

  {id:'u3l1q26',unit:'u3',lesson:'u3l1',page:97,type:'ordering',bloom:'understand',difficulty:'medium',image:IMG.makkah,
   question:'رتّب: ما يفعله الحاج في مكة:',paragraph:'مناسك الحج. (ص97)',
   items:['الإحرام','الطواف','السعي'],
   correctOrder:[0,1,2],explanation:'الإحرام ثم الطواف ثم السعي.',goldenRule:'المناسك مرتبة.'},

  {id:'u3l1q27',unit:'u3',lesson:'u3l1',page:94,type:'multipleChoice',bloom:'evaluate',difficulty:'hard',image:IMG.madinah,
   question:'لماذا يزور المسلمون المدينة المنورة؟',paragraph:'زيارة المدينة. (ص94)',
   options:[{text:'لزيارة المسجد النبوي والسلام على النبي ﷺ',correct:true},{text:'للتجارة',correct:false},{text:'للنزهة فقط',correct:false},{text:'للعمل',correct:false}],
   explanation:'يزور المسلمون المدينة لزيارة المسجد النبوي والسلام على النبي ﷺ.',goldenRule:'زيارة المدينة = سلام على النبي ﷺ.'},

  {id:'u3l1q28',unit:'u3',lesson:'u3l1',page:105,type:'fillBlank',bloom:'remember',difficulty:'easy',image:IMG.flag,
   question:'"علم وطني السعودية لونه ___ ." أكمل.',paragraph:'علم السعودية. (ص104)',
   blanks:['أخضر'],wordBank:['أخضر','أحمر','أزرق','أصفر'],
   explanation:'علم وطننا لونه أخضر.',goldenRule:'علم السعودية = أخضر.'},

  {id:'u3l1q29',unit:'u3',lesson:'u3l1',page:90,type:'multipleChoice',bloom:'analyze',difficulty:'medium',image:IMG.book,
   question:'أيّ مدينة فيها الكعبة والمسجد الحرام؟',paragraph:'مدينتان مقدّستان. (ص90)',
   options:[{text:'مكة المكرمة',correct:true},{text:'المدينة المنورة',correct:false},{text:'الرياض',correct:false},{text:'جدة',correct:false}],
   explanation:'مكة المكرمة فيها الكعبة والمسجد الحرام.',goldenRule:'مكة = الكعبة + المسجد الحرام.'},

  {id:'u3l1q30',unit:'u3',lesson:'u3l1',page:102,type:'trueFalse',bloom:'apply',difficulty:'easy',image:IMG.saudi,
   question:'نحبّ وطننا المملكة العربية السعودية.',paragraph:'حبّ الوطن. (ص103)',
   correctAnswer:true,explanation:'نحبّ وطننا وندافع عنه.',goldenRule:'حبّ الوطن من الإيمان.'},

  {id:'u3l1q31',unit:'u3',lesson:'u3l1',page:97,type:'matching',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صِل كل ركن بمكانه:',paragraph:'أركان الحج. (ص97)',
   pairs:[{left:'الطواف',right:'الكعبة'},{left:'السعي',right:'الصفا والمروة'},{left:'الوقوف',right:'عرفات'}],
   explanation:'الطواف عند الكعبة والسعي بين الصفا والمروة والوقوف بعرفات.',goldenRule:'لكل ركن مكانه.'},

  {id:'u3l1q32',unit:'u3',lesson:'u3l1',page:95,type:'multipleChoice',bloom:'understand',difficulty:'medium',image:IMG.makkah,
   question:'ما معنى "مكرّمة" في "مكة المكرّمة"؟',paragraph:'مكة المكرّمة. (ص95)',
   options:[{text:'محلّلة ومُكرَّمة',correct:true},{text:'كبيرة',correct:false},{text:'بعيدة',correct:false},{text:'قديمة',correct:false}],
   explanation:'مكرّمة تعني محلّلة ومُكرَّمة.',goldenRule:'مكرّمة = محلّلة + إكرام.'},

  {id:'u3l1q33',unit:'u3',lesson:'u3l1',page:96,type:'fillBlank',bloom:'remember',difficulty:'easy',image:IMG.book,
   question:'"المدينة المنوّرة فيها المسجد ___ ." أكمل.',paragraph:'المسجد النبوي. (ص94)',
   blanks:['النبوي'],wordBank:['النبوي','الحرام','الأقصى'],
   explanation:'في المدينة المنورة المسجد النبوي.',goldenRule:'المدينة = المسجد النبوي.'},

  {id:'u3l1q34',unit:'u3',lesson:'u3l1',page:104,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.flag,
   question:'ما لون علم المملكة العربية السعودية؟',paragraph:'علم السعودية. (ص104)',
   options:[{text:'الأخضر',correct:true},{text:'الأحمر',correct:false},{text:'الأزرق',correct:false},{text:'الأبيض',correct:false}],
   explanation:'لون علم السعودية أخضر.',goldenRule:'علم السعودية = أخضر.'},

  {id:'u3l1q35',unit:'u3',lesson:'u3l1',page:98,type:'trueFalse',bloom:'evaluate',difficulty:'hard',image:IMG.book,
   question:'الصلاة في المسجد الحرام أفضل من الصلاة في غيره.',paragraph:'فضل المساجد. (ص98)',
   correctAnswer:true,explanation:'الصلاة في المسجد الحرام بمئة ألف صلاة.',goldenRule:'المسجد الحرام أفضل البقاع.'},

  {id:'u3l1q36',unit:'u3',lesson:'u3l1',page:100,type:'classify',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صنّف: في مكة / في المدينة / في الرياض:',
   categories:['في مكة','في المدينة','في الرياض'],
   items:[{text:'الكعبة',correct_category:0},{text:'المسجد النبوي',correct_category:1},{text:'برج المملكة',correct_category:2},{text:'الحج',correct_category:0}],
   explanation:'الكعبة والحج في مكة، والمسجد النبوي في المدينة، وبرج المملكة في الرياض.',goldenRule:'لكل مدينة معالمها.'},

  {id:'u3l1q37',unit:'u3',lesson:'u3l1',page:91,type:'ordering',bloom:'understand',difficulty:'medium',image:IMG.makkah,
   question:'رتّب: أهم المعالم في مكة:',paragraph:'معالم مكة. (ص91)',
   items:['الكعبة','المسجد الحرام','جبل النور'],
   correctOrder:[0,1,2],explanation:'الكعبة أهم معالم مكة ثم المسجد الحرام ثم جبل النور.',goldenRule:'الكعبة أول المعالم.'},

  {id:'u3l1q38',unit:'u3',lesson:'u3l1',page:103,type:'multipleChoice',bloom:'create',difficulty:'hard',image:IMG.saudi,
   question:'لو سألك صديق عن وطنك ماذا تقول؟',paragraph:'وطني السعودية. (ص103)',
   options:[{text:'وطني المملكة العربية السعودية وأحبّه',correct:true},{text:'لا أعرف وطني',correct:false},{text:'وطني بعيد',correct:false},{text:'وطني ليس مهماً',correct:false}],
   explanation:'نفتخر بوطننا المملكة العربية السعودية ونحبّه.',goldenRule:'الافتخار بالوطن واجب.'},

  {id:'u3l1q39',unit:'u3',lesson:'u3l1',page:99,type:'fillBlank',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'"الحج في مدينة ___ والعمرة فيها أيضاً." أكمل.',paragraph:'الحج والعمرة. (ص97)',
   blanks:['مكة'],wordBank:['مكة','المدينة','الرياض'],
   explanation:'الحج والعمرة في مكة المكرمة.',goldenRule:'الحج والعمرة = مكة.'},

  {id:'u3l1q40',unit:'u3',lesson:'u3l1',page:105,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.book,
   question:'المملكة العربية السعودية فيها مكة والمدينة.',paragraph:'مدينتان مقدّستان. (ص90)',
   correctAnswer:true,explanation:'في المملكة العربية السعودية مكة المكرمة والمدينة المنورة.',goldenRule:'السعودية فيها المقدّستان.'},
];

// ───── الدرس الثاني: وطني الجميل (ص ١١٠–١٢٥) ─────
export const U3L2_QUESTIONS = [
  {id:'u3l2q1',unit:'u3',lesson:'u3l2',page:110,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.saudi,
   question:'ما الذي يجعل وطننا جميلاً؟',paragraph:'وطني الجميل. (ص110)',
   options:[{text:'أرضه وسماؤه وشمسه',correct:true},{text:'الظلام',correct:false},{text:'البرد',correct:false},{text:'لا شيء',correct:false}],
   explanation:'وطننا جميل بأرضه وسمائه وشمسه.',goldenRule:'جمال الوطن = أرض + سماء + شمس.'},

  {id:'u3l2q2',unit:'u3',lesson:'u3l2',page:111,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.desert,
   question:'في وطننا صحراء واسعة جميلة.',paragraph:'صحراء الوطن. (ص111)',
   correctAnswer:true,explanation:'في المملكة العربية السعودية صحراء واسعة.',goldenRule:'الصحراء جمال الوطن.'},

  {id:'u3l2q3',unit:'u3',lesson:'u3l2',page:112,type:'multipleChoice',bloom:'understand',difficulty:'easy',image:IMG.city,
   question:'ما اسم عاصمة المملكة العربية السعودية؟',paragraph:'عاصمة المملكة. (ص112)',
   options:[{text:'الرياض',correct:true},{text:'مكة',correct:false},{text:'جدة',correct:false},{text:'الدمام',correct:false}],
   explanation:'الرياض هي عاصمة المملكة العربية السعودية.',goldenRule:'الرياض = العاصمة.'},

  {id:'u3l2q4',unit:'u3',lesson:'u3l2',page:113,type:'multipleChoice',bloom:'understand',difficulty:'medium',image:IMG.desert,
   question:'ما الذي نراه في صحراء وطننا؟',paragraph:'صحراء الوطن. (ص111)',
   options:[{text:'الرمال والكثبان',correct:true},{text:'الأنهار',correct:false},{text:'الغابات',correct:false},{text:'الجليد',correct:false}],
   explanation:'في صحراء وطننا رمال وكثبان ذهبية.',goldenRule:'الصحراء = رمال وكثبان.'},

  {id:'u3l2q5',unit:'u3',lesson:'u3l2',page:114,type:'trueFalse',bloom:'understand',difficulty:'easy',image:IMG.city,
   question:'المدن في وطننا جميلة ونظيفة.',paragraph:'مدن الوطن. (ص114)',
   correctAnswer:true,explanation:'مدن وطننا جميلة ونظيفة وآمنة.',goldenRule:'المدن جميلة ونظيفة.'},

  {id:'u3l2q6',unit:'u3',lesson:'u3l2',page:115,type:'fillBlank',bloom:'apply',difficulty:'easy',image:IMG.saudi,
   question:'"عاصمة وطني مدينة ___ ." أكمل.',paragraph:'عاصمة المملكة. (ص112)',
   blanks:['الرياض'],wordBank:['الرياض','مكة','جدة'],
   explanation:'عاصمة وطننا هي الرياض.',goldenRule:'الرياض = العاصمة.'},

  {id:'u3l2q7',unit:'u3',lesson:'u3l2',page:116,type:'matching',bloom:'understand',difficulty:'medium',image:IMG.book,
   question:'صِل كل مدينة بموقعها:',paragraph:'مدن الوطن. (с114)',
   pairs:[{left:'الرياض',right:'في الوسط'},{left:'جدة',right:'على البحر'},{left:'مكة',right:'في الغرب'},{left:'الدمام',right:'في الشرق'}],
   explanation:'الرياض في الوسط وجدة على البحر ومكة في الغرب والدمام في الشرق.',goldenRule:'لكل مدينة موقع.'},

  {id:'u3l2q8',unit:'u3',lesson:'u3l2',page:117,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.saudi,
   question:'ما الذي يحمي وطننا؟',paragraph:'حماية الوطن. (ص117)',
   options:[{text:'الجيش والشرطة',correct:true},{text:'النوم',correct:false},{text:'اللعب',correct:false},{text:'لا شيء',correct:false}],
   explanation:'يحمي وطننا الجيش والشرطة والرجال الأمنيون.',goldenRule:'حماة الوطن = جيش + شرطة.'},

  {id:'u3l2q9',unit:'u3',lesson:'u3l2',page:118,type:'trueFalse',bloom:'apply',difficulty:'easy',image:IMG.flag,
   question:'نرفع علم وطننا في المناسبات.',paragraph:'علم الوطن. (ص104)',
   correctAnswer:true,explanation:'نرفع علم وطننا فخراً به.',goldenRule:'رفع العلم فخر بالوطن.'},

  {id:'u3l2q10',unit:'u3',lesson:'u3l2',page:119,type:'classify',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صنّف: مدينة / صحراء / بحر:',
   categories:['مدينة','صحراء','بحر'],
   items:[{text:'الرياض',correct_category:0},{text:'الربع الخالي',correct_category:1},{text:'البحر الأحمر',correct_category:2},{text:'جدة',correct_category:0},{text:'النفود',correct_category:1}],
   explanation:'الرياض وجدة مدن، والربع الخالي والنفود صحراء، والبحر الأحمر بحر.',goldenRule:'الوطن فيه مدن وصحراء وبحر.'},

  {id:'u3l2q11',unit:'u3',lesson:'u3l2',page:120,type:'multipleChoice',bloom:'understand',difficulty:'medium',image:IMG.saudi,
   question:'لماذا نحبّ وطننا؟',paragraph:'حبّ الوطن. (ص103)',
   options:[{text:'لأنه مكان ولادتنا وعيشتنا',correct:true},{text:'لأنه بعيد',correct:false},{text:'لأنه بارد',correct:false},{text:'لا سبب',correct:false}],
   explanation:'نحبّ وطننا لأنه مكان ولادتنا وعيشتنا.',goldenRule:'الوطن = مكان الولادة.'},

  {id:'u3l2q12',unit:'u3',lesson:'u3l2',page:121,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.city,
   question:'الرياض مدينة كبيرة فيها أبراج عالية.',paragraph:'الرياض. (с112)',
   correctAnswer:true,explanation:'الرياض مدينة كبيرة فيها أبراج عالية مثل برج المملكة.',goldenRule:'الرياض = أبراج عالية.'},

  {id:'u3l2q13',unit:'u3',lesson:'u3l2',page:122,type:'ordering',bloom:'understand',difficulty:'medium',image:IMG.book,
   question:'رتّب من الشمال للجنوب:',paragraph:'مدن الوطن. (с114)',
   items:['تبوك','الرياض','عسير'],
   correctOrder:[0,1,2],explanation:'تبوك في الشمال والرياض في الوسط وعسير في الجنوب.',goldenRule:'المدن مرتبة شمالاً وجنوباً.'},

  {id:'u3l2q14',unit:'u3',lesson:'u3l2',page:123,type:'multipleChoice',bloom:'evaluate',difficulty:'hard',image:IMG.saudi,
   question:'ما الذي نقدّمه لوطننا؟',paragraph:'خدمة الوطن. (с117)',
   options:[{text:'العمل والاجتهاد والمحبة',correct:true},{text:'النوم',correct:false},{text:'الهرب',correct:false},{text:'لا شيء',correct:false}],
   explanation:'نقدّم لوطننا العمل والاجتهاد والمحبة.',goldenRule:'خدمة الوطن = عمل + اجتهاد.'},

  {id:'u3l2q15',unit:'u3',lesson:'u3l2',page:110,type:'fillBlank',bloom:'apply',difficulty:'easy',image:IMG.desert,
   question:'"في صحراء وطننا ___ ذهبية." أكمل.',paragraph:'صحراء الوطن. (с111)',
   blanks:['رمال'],wordBank:['رمال','أنهار','أشجار','جليد'],
   explanation:'في صحراء وطننا رمال ذهبية.',goldenRule:'الصحراء = رمال ذهبية.'},

  {id:'u3l2q16',unit:'u3',lesson:'u3l2',page:112,type:'trueFalse',bloom:'understand',difficulty:'easy',image:IMG.city,
   question:'الرياض في وسط المملكة العربية السعودية.',paragraph:'موقع الرياض. (с112)',
   correctAnswer:true,explanation:'الرياض في وسط المملكة العربية السعودية.',goldenRule:'الرياض = وسط المملكة.'},

  {id:'u3l2q17',unit:'u3',lesson:'u3l2',page:115,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.book,
   question:'ما الذي نزرعه في وطننا؟',paragraph:'زراعة الوطن. (с115)',
   options:[{text:'النخيل والمحاصيل',correct:true},{text:'الثلج',correct:false},{text:'الجليد',correct:false},{text:'لا شيء',correct:false}],
   explanation:'نزرع في وطننا النخيل والمحاصيل.',goldenRule:'الزراعة = نخيل + محاصيل.'},

  {id:'u3l2q18',unit:'u3',lesson:'u3l2',page:116,type:'matching',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صِل كل كلمة بضدّها:',paragraph:'الأضداد. (с116)',
   pairs:[{left:'النهار',right:'الليل'},{left:'الجميل',right:'القبيح'},{left:'الواسع',right:'الضيق'},{left:'العالي',right:'المنخفض'}],
   explanation:'لكل كلمة ضدّ.',goldenRule:'الأضداد تُوسّع اللغة.'},

  {id:'u3l2q19',unit:'u3',lesson:'u3l2',page:117,type:'trueFalse',bloom:'evaluate',difficulty:'hard',image:IMG.flag,
   question:'الدفاع عن الوطن واجب على كل واحد.',paragraph:'حماية الوطن. (с117)',
   correctAnswer:true,explanation:'الدفاع عن الوطن واجب على كل مواطن.',goldenRule:'الدفاع عن الوطن واجب.'},

  {id:'u3l2q20',unit:'u3',lesson:'u3l2',page:118,type:'fillBlank',bloom:'remember',difficulty:'easy',image:IMG.saudi,
   question:'"علم وطني لونه ___ وفيه الشهادتان." أكمل.',paragraph:'علم الوطن. (с104)',
   blanks:['أخضر'],wordBank:['أخضر','أحمر','أزرق'],
   explanation:'علم وطننا لونه أخضر وفيه الشهادتان.',goldenRule:'العلم = أخضر + شهادة.'},

  {id:'u3l2q21',unit:'u3',lesson:'u3l2',page:119,type:'multipleChoice',bloom:'understand',difficulty:'medium',image:IMG.desert,
   question:'ما لون رمال الصحراء في وطننا؟',paragraph:'صحراء الوطن. (с111)',
   options:[{text:'ذهبي',correct:true},{text:'أزرق',correct:false},{text:'أسود',correct:false},{text:'أخضر',correct:false}],
   explanation:'رمال الصحراء في وطننا لونها ذهبي.',goldenRule:'الرمال = ذهبي.'},

  {id:'u3l2q22',unit:'u3',lesson:'u3l2',page:120,type:'classify',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صنّف: طبيعي / صناعي:',
   categories:['طبيعي','صناعي'],
   items:[{text:'الصحراء',correct_category:0},{text:'الأبراج',correct_category:1},{text:'البحر',correct_category:0},{text:'الطرق',correct_category:1}],
   explanation:'الصحراء والبحر طبيعيان، والأبراج والطرق صناعيان.',goldenRule:'الطبيعي من الله والصناعي من الإنسان.'},

  {id:'u3l2q23',unit:'u3',lesson:'u3l2',page:121,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.saudi,
   question:'وطننا المملكة العربية السعودية بلد آمن.',paragraph:'أمن الوطن. (с117)',
   correctAnswer:true,explanation:'المملكة العربية السعودية بلد آمن ومستقر.',goldenRule:'الأمن نعمة الوطن.'},

  {id:'u3l2q24',unit:'u3',lesson:'u3l2',page:122,type:'ordering',bloom:'understand',difficulty:'medium',image:IMG.city,
   question:'رتّب: ما يميّز الرياض:',paragraph:'الرياض. (с112)',
   items:['العاصمة','الأبراج','النظافة'],
   correctOrder:[0,1,2],explanation:'الرياض عاصمة فيها أبراج ونظيفة.',goldenRule:'الرياض = عاصمة + أبراج + نظافة.'},

  {id:'u3l2q25',unit:'u3',lesson:'u3l2',page:123,type:'multipleChoice',bloom:'create',difficulty:'hard',image:IMG.saudi,
   question:'ألّف جملة عن حبّك لوطنك:',paragraph:'حبّ الوطن. (с103)',
   options:[{text:'أحبّ وطني المملكة العربية السعودية',correct:true},{text:'لا أحبّ وطني',correct:false},{text:'وطني بعيد',correct:false},{text:'وطني ليس مهماً',correct:false}],
   explanation:'نعبّر عن حبّنا لوطننا بالكلام والعمل.',goldenRule:'حبّ الوطن بالقول والعمل.'},

  {id:'u3l2q26',unit:'u3',lesson:'u3l2',page:114,type:'fillBlank',bloom:'apply',difficulty:'easy',image:IMG.book,
   question:'"مدن وطني ___ ونظيفة." أكمل.',paragraph:'مدن الوطن. (с114)',
   blanks:['جميلة'],wordBank:['جميلة','قبيحة','بعيدة'],
   explanation:'مدن وطننا جميلة ونظيفة.',goldenRule:'المدن = جميلة + نظيفة.'},

  {id:'u3l2q27',unit:'u3',lesson:'u3l2',page:115,type:'trueFalse',bloom:'understand',difficulty:'easy',image:IMG.farm,
   question:'في وطننا مزارع نخيل كثيرة.',paragraph:'زراعة الوطن. (с115)',
   correctAnswer:true,explanation:'في وطننا مزارع نخيل كثيرة تُنتج التمر.',goldenRule:'مزارع النخيل كثيرة.'},

  {id:'u3l2q28',unit:'u3',lesson:'u3l2',page:117,type:'multipleChoice',bloom:'analyze',difficulty:'medium',image:IMG.book,
   question:'مَن يحرس أمن وطننا؟',paragraph:'حماة الوطن. (с117)',
   options:[{text:'الجيش والشرطة',correct:true},{text:'الأطفال',correct:false},{text:'النائمون',correct:false},{text:'لا أحد',correct:false}],
   explanation:'يحرس أمن وطننا الجيش والشرطة ورجال الأمن.',goldenRule:'حماة الوطن = جيش + شرطة.'},

  {id:'u3l2q29',unit:'u3',lesson:'u3l2',page:118,type:'fillBlank',bloom:'remember',difficulty:'easy',image:IMG.flag,
   question:'"علم وطني في لونه ___ ." أكمل.',paragraph:'علم الوطن. (с104)',
   blanks:['أخضر'],wordBank:['أخضر','أحمر','أزرق'],
   explanation:'علم وطننا لونه أخضر.',goldenRule:'علم السعودية = أخضر.'},

  {id:'u3l2q30',unit:'u3',lesson:'u3l2',page:120,type:'multipleChoice',bloom:'evaluate',difficulty:'hard',image:IMG.saudi,
   question:'ما واجبنا نحو وطننا؟',paragraph:'خدمة الوطن. (с117)',
   options:[{text:'العمل والاجتهاد والمحافظة عليه',correct:true},{text:'النوم',correct:false},{text:'الهجرة',correct:false},{text:'لا شيء',correct:false}],
   explanation:'واجبنا العمل والاجتهاد والمحافظة على الوطن.',goldenRule:'واجبنا = عمل + اجتهاد + محافظة.'},
];

// ════════════════════════════════════════════════════════════
// الوحدة الرابعة: محاصيل من بلادي
// ════════════════════════════════════════════════════════════

// ───── الدرس الأول: النخيل (ص ١٣٠–١٤٥) ─────
export const U4L1_QUESTIONS = [
  {id:'u4l1q1',unit:'u4',lesson:'u4l1',page:130,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.palm,
   question:'ما اسم الشجرة التي تُنتج التمر؟',paragraph:'النخيل. (с130)',
   options:[{text:'النخلة',correct:true},{text:'السدر',correct:false},{text:'العوسج',correct:false},{text:'الرمث',correct:false}],
   explanation:'النخلة هي الشجرة التي تُنتج التمر.',goldenRule:'النخلة = شجرة التمر.'},

  {id:'u4l1q2',unit:'u4',lesson:'u4l1',page:131,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.palm,
   question:'النخلة شجرة كريمة ذُكرت في القرآن.',paragraph:'النخلة في القرآن. (с131)',
   correctAnswer:true,explanation:'ذكر الله النخلة في القرآن الكريم ووصفها بالكريمة.',goldenRule:'النخلة كريمة في القرآن.'},

  {id:'u4l1q3',unit:'u4',lesson:'u4l1',page:132,type:'multipleChoice',bloom:'understand',difficulty:'easy',image:IMG.dates,
   question:'ما الذي نأكله من النخلة؟',paragraph:'ثمر النخيل. (с132)',
   options:[{text:'التمر',correct:true},{text:'الورق',correct:false},{text:'الجذع',correct:false},{text:'الجذور',correct:false}],
   explanation:'نأكل من النخلة ثمرها وهو التمر.',goldenRule:'ثمر النخلة = التمر.'},

  {id:'u4l1q4',unit:'u4',lesson:'u4l1',page:133,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.palm,
   question:'أين تزرع النخيل في وطننا؟',paragraph:'زراعة النخيل. (с133)',
   options:[{text:'في الواحات والمدن',correct:true},{text:'في البحر',correct:false},{text:'في الجليد',correct:false},{text:'في الكهوف',correct:false}],
   explanation:'تزرع النخيل في الواحات والمدن في وطننا.',goldenRule:'النخيل = واحات + مدن.'},

  {id:'u4l1q5',unit:'u4',lesson:'u4l1',page:134,type:'trueFalse',bloom:'understand',difficulty:'easy',image:IMG.palm,
   question:'النخلة تحتاج الماء لتنمو.',paragraph:'احتياج النخلة. (с134)',
   correctAnswer:true,explanation:'النخلة تحتاج الماء والضوء لتنمو وتُثمر.',goldenRule:'النخلة تحتاج ماء وضوء.'},

  {id:'u4l1q6',unit:'u4',lesson:'u4l1',page:135,type:'fillBlank',bloom:'apply',difficulty:'easy',image:IMG.dates,
   question:'"ثمر النخلة هو ___ ." أكمل.',paragraph:'ثمر النخيل. (с132)',
   blanks:['التمر'],wordBank:['التمر','البرتقال','التفاح'],
   explanation:'ثمر النخلة هو التمر.',goldenRule:'ثمر النخلة = التمر.'},

  {id:'u4l1q7',unit:'u4',lesson:'u4l1',page:136,type:'matching',bloom:'understand',difficulty:'medium',image:IMG.palm,
   question:'صِل كل جزء من النخلة بوظيفته:',paragraph:'أجزاء النخلة. (с136)',
   pairs:[{left:'الجذع',right:'يقف ثابتاً'},{left:'السعف',right:'يصنع الغذاء'},{left:'الثمر',right:'نأكله'},{left:'الجذور',right:'تمتصّ الماء'}],
   explanation:'الجذع ثابت والسعف يصنع الغذاء والثمر نأكله والجذور تمتصّ الماء.',goldenRule:'أجزاء النخلة تتعاون.'},

  {id:'u4l1q8',unit:'u4',lesson:'u4l1',page:137,type:'multipleChoice',bloom:'understand',difficulty:'medium',image:IMG.palm,
   question:'لماذا تُسمّى النخلة "كريمة"؟',paragraph:'النخلة كريمة. (с131)',
   options:[{text:'لأنها تُعطي ثمراً كثيراً',correct:true},{text:'لأنها صغيرة',correct:false},{text:'لأنها لا تُعطي',correct:false},{text:'لا سبب',correct:false}],
   explanation:'تُسمّى النخلة كريمة لأنها تُعطي ثمراً كثيراً.',goldenRule:'الكرم = كثرة العطاء.'},

  {id:'u4l1q9',unit:'u4',lesson:'u4l1',page:138,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.dates,
   question:'التمر طعام مفيد ومشبِع.',paragraph:'فوائد التمر. (с138)',
   correctAnswer:true,explanation:'التمر طعام مفيد يعطي الطاقة ويُشبِع.',goldenRule:'التمر = طاقة + إشباع.'},

  {id:'u4l1q10',unit:'u4',lesson:'u4l1',page:139,type:'classify',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صنّف: من النخلة / ليس من النخلة:',
   categories:['من النخلة','ليس من النخلة'],
   items:[{text:'التمر',correct_category:0},{text:'البرتقال',correct_category:1},{text:'السعف',correct_category:0},{text:'التفاح',correct_category:1}],
   explanation:'التمر والسعف من النخلة، والبرتقال والتفاح ليسا منها.',goldenRule:'النخلة تُعطي تمراً وسعفاً.'},

  {id:'u4l1q11',unit:'u4',lesson:'u4l1',page:140,type:'multipleChoice',bloom:'understand',difficulty:'medium',image:IMG.palm,
   question:'كم سنة تقريباً تحتاج النخلة لتُثمر؟',paragraph:'نمو النخلة. (с134)',
   options:[{text:'عدة سنوات',correct:true},{text:'يوم واحد',correct:false},{text:'ساعة',correct:false},{text:'لا تُثمر',correct:false}],
   explanation:'تحتاج النخلة عدة سنوات لتنمو وتُثمر.',goldenRule:'النخلة تحتاج صبراً.'},

  {id:'u4l1q12',unit:'u4',lesson:'u4l1',page:141,type:'ordering',bloom:'understand',difficulty:'medium',image:IMG.palm,
   question:'رتّب: مراحل النخلة من البذرة:',paragraph:'نمو النخلة. (с134)',
   items:['النوى','الفسيلة','النخلة'],
   correctOrder:[0,1,2],explanation:'النوى يُزرع فيخرج الفسيلة ثم تكبر نخلة.',goldenRule:'النخلة تبدأ بالنوى.'},

  {id:'u4l1q13',unit:'u4',lesson:'u4l1',page:142,type:'trueFalse',bloom:'evaluate',difficulty:'hard',image:IMG.dates,
   question:'نأكل التمر في رمضان عند الإفطار.',paragraph:'التمر في رمضان. (с138)',
   correctAnswer:true,explanation:'نُفطِر على التمر في رمضان سنة عن النبي ﷺ.',goldenRule:'الإفطار على التمر سنة.'},

  {id:'u4l1q14',unit:'u4',lesson:'u4l1',page:143,type:'fillBlank',bloom:'apply',difficulty:'easy',image:IMG.palm,
   question:'"النخلة شجرة ___ ." أكمل.',paragraph:'النخلة كريمة. (с131)',
   blanks:['كريمة'],wordBank:['كريمة','صغيرة','ضعيفة'],
   explanation:'النخلة شجرة كريمة.',goldenRule:'النخلة = كريمة.'},

  {id:'u4l1q15',unit:'u4',lesson:'u4l1',page:144,type:'multipleChoice',bloom:'analyze',difficulty:'medium',image:IMG.book,
   question:'ما الذي يصنعه السعف على النخلة؟',paragraph:'وظيفة السعف. (с136)',
   options:[{text:'يصنع الغذاء بالضوء',correct:true},{text:'لا شيء',correct:false},{text:'يطير',correct:false},{text:'يسبح',correct:false}],
   explanation:'السعف يصنع الغذاء للنخلة بفضل الضوء.',goldenRule:'السعف = مصنع الغذاء.'},

  {id:'u4l1q16',unit:'u4',lesson:'u4l1',page:145,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.palm,
   question:'النخلة عمودها طويل وقوي.',paragraph:'جذع النخلة. (с136)',
   correctAnswer:true,explanation:'جذع النخلة طويل وقوي يقف ثابتاً.',goldenRule:'الجذع = طويل + قوي.'},

  {id:'u4l1q17',unit:'u4',lesson:'u4l1',page:130,type:'matching',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صِل كل كلمة بمعناها:',paragraph:'معاني الكلمات. (с130)',
   pairs:[{left:'النخلة',right:'شجرة التمر'},{left:'النوى',right:'بذرة التمر'},{left:'الفسيلة',right:'نخلة صغيرة'},{left:'التمر',right:'الثمر'}],
   explanation:'النخلة شجرة التمر، والنوى بذرته، والفسيلة نخلة صغيرة، والتمر الثمر.',goldenRule:'لكل كلمة معنى.'},

  {id:'u4l1q18',unit:'u4',lesson:'u4l1',page:132,type:'multipleChoice',bloom:'understand',difficulty:'easy',image:IMG.dates,
   question:'ما لون التمر الناضج؟',paragraph:'لون التمر. (с132)',
   options:[{text:'أحمر أو بنّي ذهبي',correct:true},{text:'أزرق',correct:false},{text:'أخضر فاتح',correct:false},{text:'أبيض',correct:false}],
   explanation:'لون التمر الناضج أحمر أو بنّي ذهبي.',goldenRule:'التمر الناضج = أحمر/بنّي.'},

  {id:'u4l1q19',unit:'u4',lesson:'u4l1',page:133,type:'trueFalse',bloom:'apply',difficulty:'easy',image:IMG.palm,
   question:'نحافظ على النخيل ولا نقطعه.',paragraph:'حفظ النخيل. (с133)',
   correctAnswer:true,explanation:'نحافظ على النخيل ولا نقطعه لأنه نفع كثير.',goldenRule:'حفظ النخيل واجب.'},

  {id:'u4l1q20',unit:'u4',lesson:'u4l1',page:136,type:'fillBlank',bloom:'remember',difficulty:'easy',image:IMG.palm,
   question:'"أوراق النخلة تُسمّى ___ ." أكمل.',paragraph:'أجزاء النخلة. (с136)',
   blanks:['السعف'],wordBank:['السعف','الجذع','الجذور'],
   explanation:'أوراق النخلة تُسمّى السعف.',goldenRule:'أوراق النخلة = السعف.'},

  {id:'u4l1q21',unit:'u4',lesson:'u4l1',page:138,type:'multipleChoice',bloom:'evaluate',difficulty:'hard',image:IMG.dates,
   question:'لماذا نُفطِر على التمر؟',paragraph:'التمر في رمضان. (с138)',
   options:[{text:'لأنه سنة وفيه طاقة',correct:true},{text:'لأنه حلو فقط',correct:false},{text:'لا سبب',correct:false},{text:'لأنه رخيص',correct:false}],
   explanation:'نُفطِر على التمر سنة وفيه طاقة للجسم.',goldenRule:'التمر = سنة + طاقة.'},

  {id:'u4l1q22',unit:'u4',lesson:'u4l1',page:140,type:'classify',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صنّف: من أجزاء النخلة / ليس منها:',
   categories:['من النخلة','ليس منها'],
   items:[{text:'الجذع',correct_category:0},{text:'السعف',correct_category:0},{text:'التمر',correct_category:0},{text:'البرتقال',correct_category:1}],
   explanation:'الجذع والسعف والتمر من النخلة، والبرتقال ليس منها.',goldenRule:'أجزاء النخلة = جذع + سعف + تمر.'},

  {id:'u4l1q23',unit:'u4',lesson:'u4l1',page:134,type:'ordering',bloom:'understand',difficulty:'medium',image:IMG.palm,
   question:'رتّب: ما تحتاجه النخلة لتنمو:',paragraph:'احتياج النخلة. (с134)',
   items:['الماء','الضوء','التربة'],
   correctOrder:[0,1,2],explanation:'النخلة تحتاج الماء والضوء والتربة.',goldenRule:'النخلة = ماء + ضوء + تربة.'},

  {id:'u4l1q24',unit:'u4',lesson:'u4l1',page:141,type:'trueFalse',bloom:'understand',difficulty:'easy',image:IMG.palm,
   question:'الفسيلة نخلة صغيرة حديثة.',paragraph:'الفسيلة. (с134)',
   correctAnswer:true,explanation:'الفسيلة هي النخلة الصغيرة الحديثة النمو.',goldenRule:'الفسيلة = نخلة صغيرة.'},

  {id:'u4l1q25',unit:'u4',lesson:'u4l1',page:143,type:'fillBlank',bloom:'apply',difficulty:'easy',image:IMG.dates,
   question:'"نُفطِر في رمضان على ___ ." أكمل.',paragraph:'التمر في رمضان. (с138)',
   blanks:['التمر'],wordBank:['التمر','الخبز','الأرز'],
   explanation:'نُفطِر في رمضان على التمر.',goldenRule:'إفطار رمضان = التمر.'},

  {id:'u4l1q26',unit:'u4',lesson:'u4l1',page:131,type:'multipleChoice',bloom:'create',difficulty:'hard',image:IMG.palm,
   question:'ألّف جملة عن فائدة النخلة:',paragraph:'فوائد النخلة. (с138)',
   options:[{text:'تُعطينا التمر والظل والخشب',correct:true},{text:'لا تُعطي شيئاً',correct:false},{text:'تأكل منا',correct:false},{text:'تضرّنا',correct:false}],
   explanation:'النخلة تُعطينا التمر والظل والخشب.',goldenRule:'النخلة = تمر + ظل + خشب.'},

  {id:'u4l1q27',unit:'u4',lesson:'u4l1',page:130,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.palm,
   question:'النخلة من أشهر شجر وطننا.',paragraph:'النخيل. (с130)',
   correctAnswer:true,explanation:'النخلة من أشهر شجر المملكة العربية السعودية.',goldenRule:'النخلة شهيرة في وطننا.'},

  {id:'u4l1q28',unit:'u4',lesson:'u4l1',page:136,type:'multipleChoice',bloom:'analyze',difficulty:'medium',image:IMG.palm,
   question:'ما الذي يثبّت النخلة في الأرض؟',paragraph:'جذور النخلة. (с136)',
   options:[{text:'الجذور',correct:true},{text:'السعف',correct:false},{text:'التمر',correct:false},{text:'النوى',correct:false}],
   explanation:'الجذور تثبّت النخلة في الأرض وتمتصّ الماء.',goldenRule:'الجذور = تثبيت + امتصاص.'},

  {id:'u4l1q29',unit:'u4',lesson:'u4l1',page:138,type:'fillBlank',bloom:'remember',difficulty:'easy',image:IMG.dates,
   question:'"التمر طعام ___ ومشبِع." أكمل.',paragraph:'فوائد التمر. (с138)',
   blanks:['مفيد'],wordBank:['مفيد','ضار','مر'],
   explanation:'التمر طعام مفيد ومشبِع.',goldenRule:'التمر = مفيد + مشبِع.'},

  {id:'u4l1q30',unit:'u4',lesson:'u4l1',page:145,type:'trueFalse',bloom:'evaluate',difficulty:'hard',image:IMG.palm,
   question:'النخلة تُعطي أكثر من نوع واحد من التمر.',paragraph:'أنواع التمر. (с132)',
   correctAnswer:true,explanation:'للنخيل أنواع كثيرة من التمر مثل السكري والمجدول.',goldenRule:'أنواع التمر كثيرة.'},
];

// ───── الدرس الثاني: محاصيل أخرى (ص ١٥٠–١٦٥) ─────
export const U4L2_QUESTIONS = [
  {id:'u4l2q1',unit:'u4',lesson:'u4l2',page:150,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.farm,
   question:'ما معنى "المحاصيل"؟',paragraph:'محاصيل من بلادي. (с150)',
   options:[{text:'ما تُنتجه الأرض من نبات',correct:true},{text:'السيارات',correct:false},{text:'المباني',correct:false},{text:'الحيوانات',correct:false}],
   explanation:'المحاصيل هي ما تُنتجه الأرض من نبات نأكله.',goldenRule:'المحاصيل = إنتاج الأرض.'},

  {id:'u4l2q2',unit:'u4',lesson:'u4l2',page:151,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.wheat,
   question:'القمح من المحاصيل التي نأكلها.',paragraph:'القمح. (с151)',
   correctAnswer:true,explanation:'القمح محصول نأكله ونصنع منه الخبز.',goldenRule:'القمح = محصول غذائي.'},

  {id:'u4l2q3',unit:'u4',lesson:'u4l2',page:152,type:'multipleChoice',bloom:'understand',difficulty:'easy',image:IMG.wheat,
   question:'ما الذي يُصنع من القمح؟',paragraph:'القمح. (с151)',
   options:[{text:'الخبز',correct:true},{text:'التمر',correct:false},{text:'العصير',correct:false},{text:'الحليب',correct:false}],
   explanation:'يُصنع من القمح الخبز الذي نأكله.',goldenRule:'القمح = خبز.'},

  {id:'u4l2q4',unit:'u4',lesson:'u4l2',page:153,type:'multipleChoice',bloom:'remember',difficulty:'easy',image:IMG.fruit,
   question:'أيّ مما يلي من محاصيل وطننا؟',paragraph:'محاصيل من بلادي. (с150)',
   options:[{text:'التمر والبطاطس والطماطم',correct:true},{text:'الثلج',correct:false},{text:'الجليد',correct:false},{text:'الأسماك فقط',correct:false}],
   explanation:'من محاصيل وطننا التمر والبطاطس والطماطم.',goldenRule:'المحاصيل متنوعة.'},

  {id:'u4l2q5',unit:'u4',lesson:'u4l2',page:154,type:'trueFalse',bloom:'understand',difficulty:'easy',image:IMG.farm,
   question:'المزارع يزرع المحاصيل ويسقيها لتكبر.',paragraph:'عمل المزارع. (с154)',
   correctAnswer:true,explanation:'المزارع يزرع المحاصيل ويسقيها ويعتني بها.',goldenRule:'المزارع = زرع + سقي + عناية.'},

  {id:'u4l2q6',unit:'u4',lesson:'u4l2',page:155,type:'fillBlank',bloom:'apply',difficulty:'easy',image:IMG.wheat,
   question:'"يُصنع الخبز من ___ ." أكمل.',paragraph:'القمح. (с151)',
   blanks:['القمح'],wordBank:['القمح','التمر','الأرز'],
   explanation:'يُصنع الخبز من القمح.',goldenRule:'الخبز = قمح.'},

  {id:'u4l2q7',unit:'u4',lesson:'u4l2',page:156,type:'matching',bloom:'understand',difficulty:'medium',image:IMG.book,
   question:'صِل كل محصول بمصنوعه:',paragraph:'المحاصيل ومنتجاتها. (с156)',
   pairs:[{left:'القمح',right:'الخبز'},{left:'التمر',right:'يُؤكل طازجاً'},{left:'الطماطم',right:'الصلصة'},{left:'البرتقال',right:'العصير'}],
   explanation:'القمح للخبز، والتمر يؤكل، والطماطم للصلصة، والبرتقال للعصير.',goldenRule:'لكل محصول منتج.'},

  {id:'u4l2q8',unit:'u4',lesson:'u4l2',page:157,type:'multipleChoice',bloom:'understand',difficulty:'medium',image:IMG.harvest,
   question:'متى يكون الحصاد؟',paragraph:'الحصاد. (с157)',
   options:[{text:'عند نضج المحصول',correct:true},{text:'قبل الزراعة',correct:false},{text:'في الشتاء',correct:false},{text:'لا وقت',correct:false}],
   explanation:'الحصاد يكون عند نضج المحصول وجاهزيته للقطف.',goldenRule:'الحصاد = بعد النضج.'},

  {id:'u4l2q9',unit:'u4',lesson:'u4l2',page:158,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.farm,
   question:'نحافظ على المحاصيل ولا نُضعها.',paragraph:'حفظ المحاصيل. (с158)',
   correctAnswer:true,explanation:'نحافظ على المحاصيل ولا نُضيّعها شكراً لله.',goldenRule:'حفظ المحاصيل شكر.'},

  {id:'u4l2q10',unit:'u4',lesson:'u4l2',page:159,type:'classify',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صنّف: محصول / ليس محصولاً:',
   categories:['محصول','ليس محصولاً'],
   items:[{text:'القمح',correct_category:0},{text:'السيارة',correct_category:1},{text:'الطماطم',correct_category:0},{text:'الحديد',correct_category:1}],
   explanation:'القمح والطماطم محاصيل، والسيارة والحديد ليسا محاصيل.',goldenRule:'المحصول من الأرض.'},

  {id:'u4l2q11',unit:'u4',lesson:'u4l2',page:160,type:'multipleChoice',bloom:'understand',difficulty:'medium',image:IMG.farm,
   question:'ما الذي يحتاجه المحصول لينمو؟',paragraph:'زراعة المحاصيل. (с154)',
   options:[{text:'الماء والضوء والتربة',correct:true},{text:'الظلام',correct:false},{text:'البرد الشديد',correct:false},{text:'لا شيء',correct:false}],
   explanation:'يحتاج المحصول الماء والضوء والتربة لينمو.',goldenRule:'النمو = ماء + ضوء + تربة.'},

  {id:'u4l2q12',unit:'u4',lesson:'u4l2',page:161,type:'ordering',bloom:'understand',difficulty:'medium',image:IMG.harvest,
   question:'رتّب: مراحل المحصول من البداية:',paragraph:'مراحل المحصول. (с154)',
   items:['الزراعة','السقي','الحصاد'],
   correctOrder:[0,1,2],explanation:'نزرع ثم نسقي ثم نحصد.',goldenRule:'الزراعة → السقي → الحصاد.'},

  {id:'u4l2q13',unit:'u4',lesson:'u4l2',page:162,type:'trueFalse',bloom:'evaluate',difficulty:'hard',image:IMG.wheat,
   question:'المحاصيل نعمة من الله نشكره عليها.',paragraph:'نعمة المحاصيل. (с158)',
   correctAnswer:true,explanation:'المحاصيل نعمة من الله نشكره عليها.',goldenRule:'المحاصيل نعمة تستحق الشكر.'},

  {id:'u4l2q14',unit:'u4',lesson:'u4l2',page:163,type:'fillBlank',bloom:'apply',difficulty:'easy',image:IMG.fruit,
   question:'"من محاصيل وطننا ___ والطماطم." أكمل.',paragraph:'محاصيل من بلادي. (с150)',
   blanks:['التمر'],wordBank:['التمر','الثلج','الجليد'],
   explanation:'من محاصيل وطننا التمر والطماطم.',goldenRule:'محاصيلنا = تمر + طماطم.'},

  {id:'u4l2q15',unit:'u4',lesson:'u4l2',page:164,type:'multipleChoice',bloom:'analyze',difficulty:'medium',image:IMG.book,
   question:'لماذا نزرع المحاصيل؟',paragraph:'فائدة المحاصيل. (с150)',
   options:[{text:'لنأكل ونطعم الآخرين',correct:true},{text:'للهو',correct:false},{text:'لإتلافها',correct:false},{text:'لا سبب',correct:false}],
   explanation:'نزرع المحاصيل لنأكل ونطعم الآخرين.',goldenRule:'الزراعة = أكل + إطعام.'},

  {id:'u4l2q16',unit:'u4',lesson:'u4l2',page:165,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.harvest,
   question:'الحصاد هو قطف المحصول الناضج.',paragraph:'الحصاد. (с157)',
   correctAnswer:true,explanation:'الحصاد هو قطف المحصول بعد نضجه.',goldenRule:'الحصاد = قطف الناضج.'},

  {id:'u4l2q17',unit:'u4',lesson:'u4l2',page:151,type:'matching',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صِل كل كلمة بضدّها:',paragraph:'الأضداد. (с116)',
   pairs:[{left:'الزراعة',right:'الحصاد'},{left:'النضج',right:'الخضرة'},{left:'الكثير',right:'القليل'},{left:'النفع',right:'الضرر'}],
   explanation:'الزراعة ضد الحصاد، والنضج ضد الخضرة، والكثير ضد القليل.',goldenRule:'الأضداد تنوّع اللغة.'},

  {id:'u4l2q18',unit:'u4',lesson:'u4l2',page:152,type:'multipleChoice',bloom:'understand',difficulty:'easy',image:IMG.wheat,
   question:'القمح يُزرع في أي فصل غالباً؟',paragraph:'القمح. (с151)',
   options:[{text:'في الشتاء',correct:true},{text:'في الصيف الحار',correct:false},{text:'في الخريف',correct:false},{text:'لا يُزرع',correct:false}],
   explanation:'يُزرع القمح غالباً في الشتاء ويُحصد في الربيع.',goldenRule:'القمح = شتاء + ربيع.'},

  {id:'u4l2q19',unit:'u4',lesson:'u4l2',page:154,type:'trueFalse',bloom:'apply',difficulty:'easy',image:IMG.farm,
   question:'المزارع يعمل بجد في حقله.',paragraph:'عمل المزارع. (с154)',
   correctAnswer:true,explanation:'المزارع يعمل بجد واجتهاد في حقله.',goldenRule:'المزارع = جد + اجتهاد.'},

  {id:'u4l2q20',unit:'u4',lesson:'u4l2',page:156,type:'fillBlank',bloom:'remember',difficulty:'easy',image:IMG.fruit,
   question:'"الطماطم تُصنع منها ___ ." أكمل.',paragraph:'منتجات المحاصيل. (с156)',
   blanks:['الصلصة'],wordBank:['الصلصة','الخبز','العصير'],
   explanation:'تُصنع من الطماطم الصلصة.',goldenRule:'الطماطم = صلصة.'},

  {id:'u4l2q21',unit:'u4',lesson:'u4l2',page:157,type:'multipleChoice',bloom:'evaluate',difficulty:'hard',image:IMG.harvest,
   question:'ماذا نفعل بعد الحصاد؟',paragraph:'بعد الحصاد. (с157)',
   options:[{text:'نخزّن المحصول ونأكل منه',correct:true},{text:'نُضيّعه',correct:false},{text:'نتركه',correct:false},{text:'نحرقه',correct:false}],
   explanation:'بعد الحصاد نخزّن المحصول ونأكل منه ونوزّع.',goldenRule:'بعد الحصاد = تخزين + أكل.'},

  {id:'u4l2q22',unit:'u4',lesson:'u4l2',page:159,type:'classify',bloom:'apply',difficulty:'medium',image:IMG.book,
   question:'صنّف: نأكله / نشربه / نطبخه:',
   categories:['نأكله','نشربه','نطبخه'],
   items:[{text:'التمر',correct_category:0},{text:'عصير البرتقال',correct_category:1},{text:'الطماطم',correct_category:2},{text:'الخبز',correct_category:0}],
   explanation:'التمر والخبز نأكلهما، وعصير البرتقال نشربه، والطماطم نطبخها.',goldenRule:'لكل محصول استخدام.'},

  {id:'u4l2q23',unit:'u4',lesson:'u4l2',page:161,type:'ordering',bloom:'understand',difficulty:'medium',image:IMG.farm,
   question:'رتّب: ما يحتاجه المحصول:',paragraph:'احتياج المحصول. (с154)',
   items:['الماء','الضوء','التربة'],
   correctOrder:[0,1,2],explanation:'يحتاج المحصول الماء والضوء والتربة.',goldenRule:'المحصول = ماء + ضوء + تربة.'},

  {id:'u4l2q24',unit:'u4',lesson:'u4l2',page:162,type:'trueFalse',bloom:'understand',difficulty:'easy',image:IMG.wheat,
   question:'القمح نبات قصير له سنابل ذهبية.',paragraph:'القمح. (с151)',
   correctAnswer:true,explanation:'القمح نبات قصير له سنابل ذهبية فيها الحبوب.',goldenRule:'القمح = سنابل ذهبية.'},

  {id:'u4l2q25',unit:'u4',lesson:'u4l2',page:163,type:'fillBlank',bloom:'apply',difficulty:'easy',image:IMG.harvest,
   question:'"قطف المحصول الناضج يُسمّى ___ ." أكمل.',paragraph:'الحصاد. (с157)',
   blanks:['الحصاد'],wordBank:['الحصاد','الزراعة','السقي'],
   explanation:'قطف المحصول الناضج يُسمّى الحصاد.',goldenRule:'الحصاد = قطف الناضج.'},

  {id:'u4l2q26',unit:'u4',lesson:'u4l2',page:150,type:'multipleChoice',bloom:'create',difficulty:'hard',image:IMG.farm,
   question:'ألّف جملة عن أهمية المحاصيل:',paragraph:'محاصيل من بلادي. (с150)',
   options:[{text:'المحاصيل طعامنا ونشكر الله عليها',correct:true},{text:'المحاصيل لا تنفع',correct:false},{text:'المحاصيل للهو',correct:false},{text:'لا شيء',correct:false}],
   explanation:'المحاصيل طعامنا ونشكر الله على نعمته.',goldenRule:'المحاصيل نعمة + شكر.'},

  {id:'u4l2q27',unit:'u4',lesson:'u4l2',page:155,type:'trueFalse',bloom:'remember',difficulty:'easy',image:IMG.farm,
   question:'المزارع يخدم الوطن بإنتاج الطعام.',paragraph:'المزارع خادم الوطن. (с154)',
   correctAnswer:true,explanation:'المزارع يخدم الوطن بإنتاج الطعام لنا.',goldenRule:'المزارع = خادم الوطن.'},

  {id:'u4l2q28',unit:'u4',lesson:'u4l2',page:158,type:'multipleChoice',bloom:'analyze',difficulty:'medium',image:IMG.book,
   question:'لماذا نحافظ على المحاصيل؟',paragraph:'حفظ المحاصيل. (с158)',
   options:[{text:'لأنها طعامنا ونعمة الله',correct:true},{text:'لأنها رخيصة',correct:false},{text:'لأنها كثيرة',correct:false},{text:'لا سبب',correct:false}],
   explanation:'نحافظ على المحاصيل لأنها طعامنا ونعمة من الله.',goldenRule:'حفظ المحاصيل = شكر النعمة.'},

  {id:'u4l2q29',unit:'u4',lesson:'u4l2',page:160,type:'fillBlank',bloom:'remember',difficulty:'easy',image:IMG.wheat,
   question:'"القمح يُصنع منه ___ ." أكمل.',paragraph:'القمح. (с151)',
   blanks:['الخبز'],wordBank:['الخبز','التمر','العصير'],
   explanation:'يُصنع من القمح الخبز.',goldenRule:'القمح = خبز.'},

  {id:'u4l2q30',unit:'u4',lesson:'u4l2',page:165,type:'trueFalse',bloom:'evaluate',difficulty:'hard',image:IMG.harvest,
   question:'وطننا ينتج محاصيل كثيرة نفتخر بها.',paragraph:'محاصيل من بلادي. (с150)',
   correctAnswer:true,explanation:'ينتج وطننا محاصيل كثيرة كالتمر والقمح والبطاطس نفتخر بها.',goldenRule:'محاصيل وطننا = فخر.'},
];

export const LUGHATI_EXTRA_4 = [
  ...U3L1_QUESTIONS,
  ...U3L2_QUESTIONS,
  ...U4L1_QUESTIONS,
  ...U4L2_QUESTIONS,
];