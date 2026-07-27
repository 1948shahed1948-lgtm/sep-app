// العلوم — الصف الثاني — الفصل الأول — أسئلة إضافية للوصول إلى 300 سؤال
// موزّعة على: u3l1, u3l2, u3l3, u4l1, u4l2

export const SCIENCE_EXTRA_1 = [
  // ════════ الوحدة 3 / الدرس 1: اليابسة (ص118-123) — 52 سؤالاً ════════
  { id:'u3l1q11', unit:'unit3', lesson:'u3l1', page:118, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'أغلفة الأرض ثلاثة هي الجوي والصخري و:', paragraph:'الجوي + الصخري + المائي. (ص118)',
    options:[{text:'المائي',correct:true},{text:'النباتي',correct:false},{text:'الحيواني',correct:false},{text:'الرملي',correct:false}],
    explanation:'أغلفة الأرض: جوي + صخري + مائي.', goldenRule:'أغلفة الأرض = جوي + صخري + مائي.',
    feedbackQuestion:{question:'أيّ غلاف يمثل الهواء؟',options:[{text:'الجوي',correct:true},{text:'الصخري',correct:false},{text:'المائي',correct:false},{text:'النباتي',correct:false}]}},

  { id:'u3l1q12', unit:'unit3', lesson:'u3l1', page:118, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'الغلاف الصخري يمثل اليابسة على سطح الأرض.', paragraph:'الغلاف الصخري = اليابسة. (ص118)', correctAnswer:true,
    explanation:'الغلاف الصخري هو اليابسة.', goldenRule:'الصخري = اليابسة.'},

  { id:'u3l1q13', unit:'unit3', lesson:'u3l1', page:119, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'اليابسة تشكّل من مساحة الأرض:', paragraph:'اليابسة جزء صغير. (ص118)', options:[{text:'جزءاً صغيراً',correct:true},{text:'أغلب المساحة',correct:false},{text:'نصف المساحة',correct:false},{text:'كل المساحة',correct:false}],
    explanation:'اليابسة جزء صغير مقارنةً بالماء.', goldenRule:'اليابسة < الماء في المساحة.'},

  { id:'u3l1q14', unit:'unit3', lesson:'u3l1', page:120, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب أغلفة الأرض من الخارج للداخل:', paragraph:'الجوي ثم الصخري ثم المائي. (ص118)',
    items:['الغلاف الجوي','الغلاف الصخري','الغلاف المائي'], correctOrder:[0,1,2],
    explanation:'الجوي ← الصخري ← المائي.', goldenRule:'أغلفة الأرض ثلاثة.'},

  { id:'u3l1q15', unit:'unit3', lesson:'u3l1', page:121, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: من اليابسة أم من الماء؟', paragraph:'اليابسة والماء. (ص118-120)',
    categories:['يابسة 🏔️','ماء 🌊'],
    items:[{text:'الجبال',correct_category:0},{text:'الأنهار',correct_category:1},{text:'السهول',correct_category:0},{text:'البحار',correct_category:1},{text:'الوديان',correct_category:0},{text:'المحيطات',correct_category:1}],
    explanation:'يابسة: جبال، سهول، وديان. ماء: أنهار، بحار، محيطات.', goldenRule:'اليابسة أرض، الماء بحر.'},

  { id:'u3l1q16', unit:'unit3', lesson:'u3l1', page:118, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الغلاف الذي يمثل الهواء:', paragraph:'الغلاف الجوي = الهواء. (ص118)', options:[{text:'الجوي',correct:true},{text:'الصخري',correct:false},{text:'المائي',correct:false},{text:'الحيواني',correct:false}],
    explanation:'الغلاف الجوي يمثل الهواء المحيط بالأرض.', goldenRule:'الجوي = الهواء.'},

  { id:'u3l1q17', unit:'unit3', lesson:'u3l1', page:122, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الغلاف بمكوّنه:', paragraph:'الأغلفة. (ص118)',
    pairs:[{left:'الجوي',right:'الهواء'},{left:'الصخري',right:'اليابسة'},{left:'المائي',right:'الماء'}],
    explanation:'الجوي=هواء، الصخري=يابسة، المائي=ماء.', goldenRule:'كل غلاف له مكوّن.'},

  { id:'u3l1q18', unit:'unit3', lesson:'u3l1', page:118, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الماء يغطّي أغلب مساحة الأرض.', paragraph:'الماء أكبر من اليابسة. (ص118)', correctAnswer:true,
    explanation:'الماء يغطّي نحو 71% من سطح الأرض.', goldenRule:'الماء > اليابسة.'},

  { id:'u3l1q19', unit:'unit3', lesson:'u3l1', page:119, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند النظر إلى صورة الأرض من الفضاء نرى اللون الأزرق بسبب:', paragraph:'الماء أزرق. (ص119)',
    options:[{text:'الماء',correct:true},{text:'اليابسة',correct:false},{text:'الهواء',correct:false},{text:'التربة',correct:false}],
    explanation:'اللون الأزرق بسبب كثرة الماء.', goldenRule:'الأرض كوكب أزرق للماء.'},

  { id:'u3l1q20', unit:'unit3', lesson:'u3l1', page:120, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"أغلفة الأرض ثلاثة: الجوي والصخري و___ ."', paragraph:'المائي. (ص118)', blanks:['المائي'], wordBank:['المائي','النباتي','الحيواني'],
    explanation:'الغلاف الثالث هو المائي.', goldenRule:'المائي = الماء.'},

  { id:'u3l1q21', unit:'unit3', lesson:'u3l1', page:121, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'أيّ مما يلي ليس من اليابسة؟', paragraph:'اليابسة. (ص120)', options:[{text:'البحر',correct:true},{text:'الجبل',correct:false},{text:'السهل',correct:false},{text:'الوادي',correct:false}],
    explanation:'البحر من الماء لا من اليابسة.', goldenRule:'البحر ماء لا يابسة.'},

  { id:'u3l1q22', unit:'unit3', lesson:'u3l1', page:122, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: طبيعي أم صناعي؟', paragraph:'اليابسة. (ص122)',
    categories:['طبيعي 🌿','صناعي 🏙️'],
    items:[{text:'الجبل',correct_category:0},{text:'البيت',correct_category:1},{text:'البحر',correct_category:0},{text:'الطريق',correct_category:1},{text:'النهر',correct_category:0},{text:'السدّ',correct_category:1}],
    explanation:'طبيعي: جبل، بحر، نهر. صناعي: بيت، طريق، سدّ.', goldenRule:'الطبيعي خلق الله، الصناعي فعل الإنسان.'},

  { id:'u3l1q23', unit:'unit3', lesson:'u3l1', page:118, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الكرة الأرضية لها ثلاثة أغلفة رئيسية.', paragraph:'ثلاثة أغلفة. (ص118)', correctAnswer:true,
    explanation:'للأرض ثلاثة أغلفة رئيسية.', goldenRule:'ثلاثة أغلفة للأرض.'},

  { id:'u3l1q24', unit:'unit3', lesson:'u3l1', page:119, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'اليابسة تتميّز بأنها:', paragraph:'صلبة. (ص119)', options:[{text:'صلبة',correct:true},{text:'سائلة',correct:false},{text:'غازية',correct:false},{text:'مائعة',correct:false}],
    explanation:'اليابسة صلبة لا سائلة.', goldenRule:'اليابسة صلبة.'},

  { id:'u3l1q25', unit:'unit3', lesson:'u3l1', page:120, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"الغلاف ___ يمثل اليابسة."', paragraph:'الصخري. (ص118)', blanks:['الصخري'], wordBank:['الصخري','الجوي','المائي'],
    explanation:'الغلاف الصخري يمثل اليابسة.', goldenRule:'الصخري = اليابسة.'},

  { id:'u3l1q26', unit:'unit3', lesson:'u3l1', page:121, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح مثالاً على اليابسة:', paragraph:'اليابسة. (ص120)', options:[{text:'الجبل',correct:true},{text:'النهر',correct:false},{text:'البحر',correct:false},{text:'المحيط',correct:false}],
    explanation:'الجبل من اليابسة.', goldenRule:'الجبل يابسة.'},

  { id:'u3l1q27', unit:'unit3', lesson:'u3l1', page:122, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل الكلمة بنقيضها:', paragraph:'النقيض. (ص122)',
    pairs:[{left:'اليابسة',right:'الماء'},{left:'الصلب',right:'السائل'},{left:'الكبير',right:'الصغير'}],
    explanation:'اليابسة×الماء، الصلب×السائل.', goldenRule:'النقيض يوضّح المعنى.'},

  { id:'u3l1q28', unit:'unit3', lesson:'u3l1', page:118, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب حسب المساحة من الأكبر:', paragraph:'الماء أكبر. (ص118)',
    items:['الماء','اليابسة'], correctOrder:[0,1],
    explanation:'الماء أكبر من اليابسة.', goldenRule:'الماء > اليابسة.'},

  { id:'u3l1q29', unit:'unit3', lesson:'u3l1', page:120, type:'classify', bloom:'remember', difficulty:'easy',
    question:'صنّف: من الأغلفة أم لا؟', paragraph:'الأغلفة. (ص118)',
    categories:['من الأغلفة','ليس منها'],
    items:[{text:'الجوي',correct_category:0},{text:'الصخري',correct_category:0},{text:'المائي',correct_category:0},{text:'النباتي',correct_category:1},{text:'الحيواني',correct_category:1},{text:'الرملي',correct_category:1}],
    explanation:'من الأغلفة: جوي، صخري، مائي.', goldenRule:'ثلاثة أغلفة فقط.'},

  { id:'u3l1q30', unit:'unit3', lesson:'u3l1', page:119, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'اليابسة موزّعة بانتظام على سطح الأرض.', paragraph:'اليابسة متفرّقة. (ص119)', correctAnswer:false,
    explanation:'اليابسة متفرّقة في قارات وجزر.', goldenRule:'اليابسة قارات وجزر.'},

  { id:'u3l1q31', unit:'unit3', lesson:'u3l1', page:121, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'القارات جزء من:', paragraph:'القارات. (ص121)', options:[{text:'اليابسة',correct:true},{text:'الماء',correct:false},{text:'الهواء',correct:false},{text:'الغلاف الجوي',correct:false}],
    explanation:'القارات من اليابسة.', goldenRule:'القارات = يابسة.'},

  { id:'u3l1q32', unit:'unit3', lesson:'u3l1', page:118, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"الغلاف الجوي يمثل ___ ."', paragraph:'الهواء. (ص118)', blanks:['الهواء'], wordBank:['الهواء','الماء','الصخر'],
    explanation:'الجوي يمثل الهواء.', goldenRule:'الجوي = الهواء.'},

  { id:'u3l1q33', unit:'unit3', lesson:'u3l1', page:122, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا سُمّي الغلاف الصخري بهذا الاسم؟', paragraph:'الصخري. (ص118)', options:[{text:'لأنه يتكوّن من صخور',correct:true},{text:'لأنه مائي',correct:false},{text:'لأنه هوائي',correct:false},{text:'لأنه نباتي',correct:false}],
    explanation:'سُمّي صخرياً لأنه مكوّن من الصخور.', goldenRule:'الصخري من الصخر.'},

  { id:'u3l1q34', unit:'unit3', lesson:'u3l1', page:120, type:'matching', bloom:'understand', difficulty:'easy',
    question:'صِل الغلاف باللون الدالّ عليه:', paragraph:'الألوان. (ص119)',
    pairs:[{left:'المائي',right:'الأزرق'},{left:'الصخري',right:'البني'},{left:'الجوي',right:'الشفاف'}],
    explanation:'المائي أزرق، الصخري بني، الجوي شفاف.', goldenRule:'الألوان تدلّ على الأغلفة.'},

  { id:'u3l1q35', unit:'unit3', lesson:'u3l1', page:118, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب حسب الكثافة من الأخف:', paragraph:'الكثافة. (ص118)',
    items:['الجوي','المائي','الصخري'], correctOrder:[0,1,2],
    explanation:'الأخف: جوي ← مائي ← صخري.', goldenRule:'الجوي أخفّ الأغلفة.'},

  { id:'u3l1q36', unit:'unit3', lesson:'u3l1', page:121, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يصلح للسكن أم لا؟', paragraph:'اليابسة. (ص121)',
    categories:['يصلح للسكن ✅','لا يصلح ❌'],
    items:[{text:'السهل',correct_category:0},{text:'قاع البحر',correct_category:1},{text:'الوادي',correct_category:0},{text:'البركان',correct_category:1},{text:'الهضبة',correct_category:0},{text:'الجليد',correct_category:1}],
    explanation:'يصلح: سهل، وادي، هضبة. لا يصلح: قاع بحر، بركان، جليد.', goldenRule:'السكن يحتاج أرضاً مناسبة.'},

  { id:'u3l1q37', unit:'unit3', lesson:'u3l1', page:119, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'عدد أغلفة الأرض الرئيسية:', paragraph:'ثلاثة. (ص118)', options:[{text:'3',correct:true},{text:'5',correct:false},{text:'7',correct:false},{text:'2',correct:false}],
    explanation:'ثلاثة أغلفة رئيسية.', goldenRule:'3 أغلفة رئيسية.'},

  { id:'u3l1q38', unit:'unit3', lesson:'u3l1', page:122, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"القارات من ___ ."', paragraph:'اليابسة. (ص121)', blanks:['اليابسة'], wordBank:['اليابسة','الماء','الهواء'],
    explanation:'القارات من اليابسة.', goldenRule:'القارات يابسة.'},

  { id:'u3l1q39', unit:'unit3', lesson:'u3l1', page:120, type:'trueFalse', bloom:'understand', difficulty:'medium',
    question:'الجبال والسهول من اليابسة.', paragraph:'اليابسة. (ص120)', correctAnswer:true,
    explanation:'الجبال والسهول من اليابسة.', goldenRule:'الجبال والسهول يابسة.'},

  { id:'u3l1q40', unit:'unit3', lesson:'u3l1', page:118, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عندما نلمس حجراً فإنه يمثل:', paragraph:'الصخري. (ص118)', options:[{text:'الغلاف الصخري',correct:true},{text:'الغلاف الجوي',correct:false},{text:'الغلاف المائي',correct:false},{text:'الغلاف الحيواني',correct:false}],
    explanation:'الحجر من الغلاف الصخري.', goldenRule:'الحجر = صخري.'},

  { id:'u3l1q41', unit:'unit3', lesson:'u3l1', page:121, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: غلاف صلب أم سائل أم غاز؟', paragraph:'حالات الأغلفة. (ص118)',
    categories:['صلب','سائل','غاز'],
    items:[{text:'الصخري',correct_category:0},{text:'المائي',correct_category:1},{text:'الجوي',correct_category:2},{text:'الجبال',correct_category:0},{text:'الأنهار',correct_category:1},{text:'الهواء',correct_category:2}],
    explanation:'صلب: صخري، جبال. سائل: مائي، أنهار. غاز: جوي، هواء.', goldenRule:'لكل غلاف حالة.'},

  { id:'u3l1q42', unit:'unit3', lesson:'u3l1', page:122, type:'matching', bloom:'evaluate', difficulty:'hard',
    question:'صِل الغلاف بأهميته:', paragraph:'الأغلفة. (ص122)',
    pairs:[{left:'الجوي',right:'التنفّس'},{left:'المائي',right:'الشرب'},{left:'الصخري',right:'السكن'}],
    explanation:'الجوي للتنفّس، المائي للشرب، الصخري للسكن.', goldenRule:'كل غلاف له فائدة.'},

  { id:'u3l1q43', unit:'unit3', lesson:'u3l1', page:119, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب: ماذا نرى عند الارتفاع للأعلى؟', paragraph:'الأغلفة. (ص119)',
    items:['اليابسة','الماء','الهواء'], correctOrder:[0,1,2],
    explanation:'عند الارتفاع: يابسة ← ماء ← هواء.', goldenRule:'الارتفاع يكشف الأغلفة.'},

  { id:'u3l1q44', unit:'unit3', lesson:'u3l1', page:118, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'الغلاف المائي يشمل:', paragraph:'الماء. (ص118)', options:[{text:'البحار والأنهار',correct:true},{text:'الجبال',correct:false},{text:'الهواء',correct:false},{text:'الصخور',correct:false}],
    explanation:'المائي يشمل البحار والأنهار.', goldenRule:'المائي = بحار + أنهار.'},

  { id:'u3l1q45', unit:'unit3', lesson:'u3l1', page:120, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"البحر من الغلاف ___ ."', paragraph:'المائي. (ص118)', blanks:['المائي'], wordBank:['المائي','الصخري','الجوي'],
    explanation:'البحر من المائي.', goldenRule:'البحر مائي.'},

  { id:'u3l1q46', unit:'unit3', lesson:'u3l1', page:121, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'بدون الغلاف الجوي لا توجد حياة.', paragraph:'الجوي للتنفّس. (ص121)', correctAnswer:true,
    explanation:'الهواء ضروري للحياة.', goldenRule:'الجوي ضروري للحياة.'},

  { id:'u3l1q47', unit:'unit3', lesson:'u3l1', page:122, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح مثالاً على الغلاف المائي:', paragraph:'المائي. (ص118)', options:[{text:'النهر',correct:true},{text:'الجبل',correct:false},{text:'الصحراء',correct:false},{text:'الهضبة',correct:false}],
    explanation:'النهر من المائي.', goldenRule:'النهر مائي.'},

  { id:'u3l1q48', unit:'unit3', lesson:'u3l1', page:118, type:'classify', bloom:'remember', difficulty:'easy',
    question:'صنّف: من الغلاف الصخري أم لا؟', paragraph:'الصخري. (ص118)',
    categories:['صخري ✅','ليس صخرياً ❌'],
    items:[{text:'الجبل',correct_category:0},{text:'البحر',correct_category:1},{text:'الصخرة',correct_category:0},{text:'النهر',correct_category:1},{text:'الهضبة',correct_category:0},{text:'الهواء',correct_category:1}],
    explanation:'صخري: جبل، صخرة، هضبة.', goldenRule:'الصخري صلب.'},

  { id:'u3l1q49', unit:'unit3', lesson:'u3l1', page:120, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الكلمة بمعناها:', paragraph:'المفردات. (ص118-120)',
    pairs:[{left:'غلاف',right:'طبقة'},{left:'يابسة',right:'أرض'},{left:'جوي',right:'هواء'}],
    explanation:'غلاف=طبقة، يابسة=أرض، جوي=هواء.', goldenRule:'فهم المفردات أساس.'},

  { id:'u3l1q50', unit:'unit3', lesson:'u3l1', page:122, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب حسب الأهمية للحياة:', paragraph:'الأغلفة. (ص122)',
    items:['الجوي','المائي','الصخري'], correctOrder:[0,1,2],
    explanation:'الجوي ثم المائي ثم الصخري للحياة.', goldenRule:'الهواء أهمّ للحياة.'},

  { id:'u3l1q51', unit:'unit3', lesson:'u3l1', page:118, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الغلاف الجوي غازي.', paragraph:'الجوي غاز. (ص118)', correctAnswer:true,
    explanation:'الجوي غاز (الهواء).', goldenRule:'الجوي = غاز.'},

  { id:'u3l1q52', unit:'unit3', lesson:'u3l1', page:121, type:'multipleChoice', bloom:'evaluate', difficulty:'medium',
    question:'أيّ غلاف نعيش عليه؟', paragraph:'الصخري. (ص121)', options:[{text:'الصخري',correct:true},{text:'المائي',correct:false},{text:'الجوي',correct:false},{text:'النباتي',correct:false}],
    explanation:'نعيش على الغلاف الصخري (اليابسة).', goldenRule:'نسكن الصخري.'},

  // ════════ الوحدة 3 / الدرس 2: الماء على الأرض (ص124-147) — 52 سؤالاً ════════
  { id:'u3l2q11', unit:'unit3', lesson:'u3l2', page:124, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الماء على الأرض موجود في حالتين: سائلة و:', paragraph:'سائلة وصلبة. (ص124)',
    options:[{text:'صلبة',correct:true},{text:'غازية',correct:false},{text:'نباتية',correct:false},{text:'صخرية',correct:false}],
    explanation:'الماء سائل وصلب (جليد).', goldenRule:'الماء = سائل + جليد.'},

  { id:'u3l2q12', unit:'unit3', lesson:'u3l2', page:124, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'الجليد ماء في حالة صلبة.', paragraph:'الجليد ماء صلب. (ص124)', correctAnswer:true,
    explanation:'الجليد ماء متجمّد صلب.', goldenRule:'الجليد = ماء صلب.'},

  { id:'u3l2q13', unit:'unit3', lesson:'u3l2', page:125, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'أكبر نسبة من الماء على الأرض في:', paragraph:'المحيطات. (ص125)', options:[{text:'المحيطات',correct:true},{text:'الأنهار',correct:false},{text:'الآبار',correct:false},{text:'البرك',correct:false}],
    explanation:'المحيطات أكبر مصدر للماء.', goldenRule:'المحيطات أكبر مصدر ماء.'},

  { id:'u3l2q14', unit:'unit3', lesson:'u3l2', page:126, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب مصادر الماء من الأكبر:', paragraph:'مصادر الماء. (ص125)',
    items:['المحيطات','البحار','الأنهار'], correctOrder:[0,1,2],
    explanation:'الأكبر: محيطات ← بحار ← أنهار.', goldenRule:'المحيطات أكبر مصدر.'},

  { id:'u3l2q15', unit:'unit3', lesson:'u3l2', page:127, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: ماء عذب أم مالح؟', paragraph:'الماء. (ص127)',
    categories:['عذب 💧','مالح 🧂'],
    items:[{text:'النهر',correct_category:0},{text:'البحر',correct_category:1},{text:'ماء المطر',correct_category:0},{text:'المحيط',correct_category:1},{text:'العين',correct_category:0},{text:'البحر الميت',correct_category:1}],
    explanation:'عذب: نهر، مطر، عين. مالح: بحر، محيط، البحر الميت.', goldenRule:'الماء عذب ومالح.'},

  { id:'u3l2q16', unit:'unit3', lesson:'u3l2', page:124, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"الماء في حالة صلبة يسمّى ___ ."', paragraph:'الجليد. (ص124)', blanks:['الجليد'], wordBank:['الجليد','البخار','الندى'],
    explanation:'الماء الصلب يسمّى جليداً.', goldenRule:'الجليد ماء صلب.'},

  { id:'u3l2q17', unit:'unit3', lesson:'u3l2', page:128, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل مصدر الماء بنوعه:', paragraph:'مصادر الماء. (ص125-128)',
    pairs:[{left:'النهر',right:'عذب'},{left:'البحر',right:'مالح'},{left:'الجليد',right:'صلب'}],
    explanation:'النهر عذب، البحر مالح، الجليد صلب.', goldenRule:'لكل مصدر نوع.'},

  { id:'u3l2q18', unit:'unit3', lesson:'u3l2', page:124, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'حالات الماء على الأرض:', paragraph:'سائل وصلب. (ص124)', options:[{text:'سائلة وصلبة',correct:true},{text:'سائلة فقط',correct:false},{text:'صلبة فقط',correct:false},{text:'غازية فقط',correct:false}],
    explanation:'الماء سائل وصلب.', goldenRule:'حالتان للماء.'},

  { id:'u3l2q19', unit:'unit3', lesson:'u3l2', page:125, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'كل ماء الأرض صالح للشرب.', paragraph:'ماء عذب ومالح. (ص127)', correctAnswer:false,
    explanation:'الماء المالح لا يصلح للشرب.', goldenRule:'العذب يُشرب والمالح لا.'},

  { id:'u3l2q20', unit:'unit3', lesson:'u3l2', page:126, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند تجمّد الماء يتحوّل إلى:', paragraph:'الجليد. (ص124)', options:[{text:'جليد',correct:true},{text:'بخار',correct:false},{text:'ملح',correct:false},{text:'صخر',correct:false}],
    explanation:'عند التجمّد يصير ماءً جليداً.', goldenRule:'التجمّد = جليد.'},

  { id:'u3l2q21', unit:'unit3', lesson:'u3l2', page:127, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"ماء البحر ___ ."', paragraph:'مالح. (ص127)', blanks:['مالح'], wordBank:['مالح','عذب','صافٍ'],
    explanation:'ماء البحر مالح.', goldenRule:'البحر مالح.'},

  { id:'u3l2q22', unit:'unit3', lesson:'u3l2', page:125, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا لا يصلح ماء البحر للشرب؟', paragraph:'مالح. (ص127)', options:[{text:'لأنه مالح',correct:true},{text:'لأنه بارد',correct:false},{text:'لأنه صافٍ',correct:false},{text:'لأنه عميق',correct:false}],
    explanation:'ملوحة البحر تمنع شربه.', goldenRule:'الملوحة تمنع الشرب.'},

  { id:'u3l2q23', unit:'unit3', lesson:'u3l2', page:128, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح مصدراً للماء العذب:', paragraph:'الماء العذب. (ص127)', options:[{text:'النهر',correct:true},{text:'البحر',correct:false},{text:'المحيط',correct:false},{text:'البحر الميت',correct:false}],
    explanation:'النهر مصدر عذب.', goldenRule:'النهر عذب.'},

  { id:'u3l2q24', unit:'unit3', lesson:'u3l2', page:126, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الجليد موجود في المناطق الباردة.', paragraph:'الجليد في القطبين. (ص124)', correctAnswer:true,
    explanation:'الجليد في القطبين والمناطق الباردة.', goldenRule:'الجليد في المناطق الباردة.'},

  { id:'u3l2q25', unit:'unit3', lesson:'u3l2', page:127, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: ماء صالح للشرب أم لا؟', paragraph:'الماء. (ص127)',
    categories:['يصلح للشرب ✅','لا يصلح ❌'],
    items:[{text:'ماء العين',correct_category:0},{text:'ماء البحر',correct_category:1},{text:'ماء المطر',correct_category:0},{text:'ماء البحر الميت',correct_category:1},{text:'ماء النهر',correct_category:0},{text:'ماء المحيط',correct_category:1}],
    explanation:'يصلح: عين، مطر، نهر. لا يصلح: بحر، بحر ميت، محيط.', goldenRule:'العذب يُشرب.'},

  { id:'u3l2q26', unit:'unit3', lesson:'u3l2', page:128, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل الحالة بمثالها:', paragraph:'حالات الماء. (ص124)',
    pairs:[{left:'سائلة',right:'النهر'},{left:'صلبة',right:'الجليد'},{left:'القطب',right:'الثلج'}],
    explanation:'سائلة=نهر، صلبة=جليد، قطب=ثلج.', goldenRule:'الماء حالات متعدّدة.'},

  { id:'u3l2q27', unit:'unit3', lesson:'u3l2', page:124, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'الماء السائل يكون في:', paragraph:'سائل. (ص124)', options:[{text:'الأنهار والبحار',correct:true},{text:'الجبال',correct:false},{text:'الصخور',correct:false},{text:'الهواء',correct:false}],
    explanation:'الماء السائل في الأنهار والبحار.', goldenRule:'السائل = أنهار + بحار.'},

  { id:'u3l2q28', unit:'unit3', lesson:'u3l2', page:126, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب من الأكبر مصدراً للماء:', paragraph:'مصادر الماء. (ص125)',
    items:['المحيط','البحر','النهر'], correctOrder:[0,1,2],
    explanation:'الأكبر: محيط ← بحر ← نهر.', goldenRule:'المحيط أكبر مصدر.'},

  { id:'u3l2q29', unit:'unit3', lesson:'u3l2', page:127, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"الماء العذب في ___ ."', paragraph:'الأنهار. (ص127)', blanks:['الأنهار'], wordBank:['الأنهار','البحار','المحيطات'],
    explanation:'العذب في الأنهار.', goldenRule:'الأنهار عذبة.'},

  { id:'u3l2q30', unit:'unit3', lesson:'u3l2', page:125, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الجليد ماء عذب.', paragraph:'الجليد. (ص124)', correctAnswer:true,
    explanation:'الجليد ماء عذب متجمّد.', goldenRule:'الجليد عذب.'},

  { id:'u3l2q31', unit:'unit3', lesson:'u3l2', page:124, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'عدد حالات الماء على الأرض:', paragraph:'سائلة وصلبة. (ص124)', options:[{text:'2',correct:true},{text:'4',correct:false},{text:'6',correct:false},{text:'1',correct:false}],
    explanation:'حالتان: سائلة وصلبة.', goldenRule:'حالتان للماء.'},

  { id:'u3l2q32', unit:'unit3', lesson:'u3l2', page:128, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: ماء متجمّد أم سائل؟', paragraph:'حالات الماء. (ص124)',
    categories:['متجمّد ❄️','سائل 💧'],
    items:[{text:'الجليد',correct_category:0},{text:'النهر',correct_category:1},{text:'الثلج',correct_category:0},{text:'البحر',correct_category:1},{text:'القطب',correct_category:0},{text:'العين',correct_category:1}],
    explanation:'متجمّد: جليد، ثلج، قطب. سائل: نهر، بحر، عين.', goldenRule:'الماء متجمّد وسائل.'},

  { id:'u3l2q33', unit:'unit3', lesson:'u3l2', page:128, type:'matching', bloom:'understand', difficulty:'easy',
    question:'صِل الكلمة بمعناها:', paragraph:'المفردات. (ص124-128)',
    pairs:[{left:'جليد',right:'ماء متجمّد'},{left:'مالح',right:'كثير الملح'},{left:'عذب',right:'صالح للشرب'}],
    explanation:'جليد=متجمّد، مالح=كثير الملح، عذب=يُشرب.', goldenRule:'فهم المفردات أساس.'},

  { id:'u3l2q34', unit:'unit3', lesson:'u3l2', page:126, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"عندما يبرد الماء كثيراً يصير ___ ."', paragraph:'الجليد. (ص124)', blanks:['جليداً'], wordBank:['جليداً','بخاراً','ملحاً'],
    explanation:'البرودة تجمّد الماء جليداً.', goldenRule:'البرودة تجمّد.'},

  { id:'u3l2q35', unit:'unit3', lesson:'u3l2', page:124, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الماء ضروري لكل الكائنات الحية.', paragraph:'الماء. (ص124)', correctAnswer:true,
    explanation:'الماء ضروري للحياة.', goldenRule:'الماء = حياة.'},

  { id:'u3l2q36', unit:'unit3', lesson:'u3l2', page:128, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح طريقة لترشيد الماء:', paragraph:'الماء. (ص128)', options:[{text:'إغلاق الصنبور',correct:true},{text:'ترك الصنبور مفتوحاً',correct:false},{text:'هدر الماء',correct:false},{text:'ملء البانيو',correct:false}],
    explanation:'إغلاق الصنبور يرشد الماء.', goldenRule:'ترشيد الماء واجب.'},

  { id:'u3l2q37', unit:'unit3', lesson:'u3l2', page:126, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب خطوات ترشيد الماء:', paragraph:'ترشيد الماء. (ص128)',
    items:['إغلاق الصنبور','إصلاح التسرّب','إعادة الاستخدام','عدم الهدر'], correctOrder:[0,1,2,3],
    explanation:'إغلاق ← إصلاح ← إعادة ← عدم هدر.', goldenRule:'للترشيد خطوات.'},

  { id:'u3l2q38', unit:'unit3', lesson:'u3l2', page:127, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يهدر الماء أم يرشّده؟', paragraph:'الماء. (ص128)',
    categories:['يهدر ❌','يرشّد ✅'],
    items:[{text:'ترك الصنبور مفتوحاً',correct_category:0},{text:'إغلاق الصنبور',correct_category:1},{text:'ملء البانيو يومياً',correct_category:0},{text:'إصلاح التسرّب',correct_category:1},{text:'سقي الزرع بوفرة',correct_category:0},{text:'استخدام الكوب',correct_category:1}],
    explanation:'يهدر: ترك، بانيو، سقي بوفرة. يرشّد: إغلاق، إصلاح، كوب.', goldenRule:'الترشيد يحفظ الماء.'},

  { id:'u3l2q39', unit:'unit3', lesson:'u3l2', page:125, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'أكبر مخزن للماء على الأرض:', paragraph:'المحيطات. (ص125)', options:[{text:'المحيطات',correct:true},{text:'الأنهار',correct:false},{text:'الآبار',correct:false},{text:'السدود',correct:false}],
    explanation:'المحيطات أكبر مخزن ماء.', goldenRule:'المحيطات أكبر مخزن.'},

  { id:'u3l2q40', unit:'unit3', lesson:'u3l2', page:128, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"نحفظ الماء بـ ___ الصنبور."', paragraph:'الترشيد. (ص128)', blanks:['إغلاق'], wordBank:['إغلاق','فتح','كسر'],
    explanation:'إغلاق الصنبور يحفظ الماء.', goldenRule:'الإغلاق يحفظ الماء.'},

  { id:'u3l2q41', unit:'unit3', lesson:'u3l2', page:124, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الماء يشكّل أغلب سطح الأرض.', paragraph:'الماء. (ص124)', correctAnswer:true,
    explanation:'الماء يغطّي أغلب سطح الأرض.', goldenRule:'الماء > اليابسة.'},

  { id:'u3l2q42', unit:'unit3', lesson:'u3l2', page:127, type:'matching', bloom:'analyze', difficulty:'hard',
    question:'صِل الماء بمناسبته:', paragraph:'الماء. (ص127)',
    pairs:[{left:'العذب',right:'الشرب'},{left:'الجليد',right:'القطب'},{left:'المالح',right:'المحيط'}],
    explanation:'العذب للشرب، الجليد للقطب، المالح للمحيط.', goldenRule:'كل ماء له موضع.'},

  { id:'u3l2q43', unit:'unit3', lesson:'u3l2', page:128, type:'multipleChoice', bloom:'evaluate', difficulty:'medium',
    question:'أهمية الماء:', paragraph:'الماء. (ص128)', options:[{text:'ضروري للحياة',correct:true},{text:'للزينة',correct:false},{text:'للعب',correct:false},{text:'للهدر',correct:false}],
    explanation:'الماء ضروري للحياة.', goldenRule:'الماء = حياة.'},

  { id:'u3l2q44', unit:'unit3', lesson:'u3l2', page:126, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب مصادر الماء العذب:', paragraph:'العذب. (ص127)',
    items:['الأنهار','الأمطار','العيون'], correctOrder:[0,1,2],
    explanation:'العذب: أنهار ← أمطار ← عيون.', goldenRule:'العذب مصادر متعدّدة.'},

  { id:'u3l2q45', unit:'unit3', lesson:'u3l2', page:124, type:'classify', bloom:'remember', difficulty:'easy',
    question:'صنّف: من الماء أم لا؟', paragraph:'الماء. (ص124)',
    categories:['من الماء','ليس منه'],
    items:[{text:'النهر',correct_category:0},{text:'الجبل',correct_category:1},{text:'الجليد',correct_category:0},{text:'الصخرة',correct_category:1},{text:'البحر',correct_category:0},{text:'الهضبة',correct_category:1}],
    explanation:'من الماء: نهر، جليد، بحر.', goldenRule:'الماء أنهار وبحار.'},

  { id:'u3l2q46', unit:'unit3', lesson:'u3l2', page:128, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أرشّد الماء بـ ___ عند الاستخدام."', paragraph:'الترشيد. (ص128)', blanks:['الإغلاق'], wordBank:['الإغلاق','الهدر','الترك'],
    explanation:'الإغلاق يرشّد الماء.', goldenRule:'الترشيد بالإغلاق.'},

  { id:'u3l2q47', unit:'unit3', lesson:'u3l2', page:125, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'هدر الماء خطر على البيئة.', paragraph:'الماء. (ص128)', correctAnswer:true,
    explanation:'هدر الماء يضرّ البيئة.', goldenRule:'هدر الماء مضرّ.'},

  { id:'u3l2q48', unit:'unit3', lesson:'u3l2', page:128, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند غسل الأسنان نرشّد الماء بـ:', paragraph:'الترشيد. (ص128)', options:[{text:'إغلاق الصنبور',correct:true},{text:'تركه مفتوحاً',correct:false},{text:'ملء الكوب',correct:false},{text:'اللعب بالماء',correct:false}],
    explanation:'إغلاق الصنبور عند غسل الأسنان يرشّد.', goldenRule:'الترشيد في كل استخدام.'},

  { id:'u3l2q49', unit:'unit3', lesson:'u3l2', page:127, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل المصدر بنوعه:', paragraph:'مصادر الماء. (с127)',
    pairs:[{left:'النهر',right:'عذب'},{left:'البحر',right:'مالح'},{left:'القطب',right:'جليد'}],
    explanation:'النهر عذب، البحر مالح، القطب جليد.', goldenRule:'لكل مصدر نوع.'},

  { id:'u3l2q50', unit:'unit3', lesson:'u3l2', page:124, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"الماء في حالة صلبة يسمّى ___ ."', paragraph:'الجليد. (с124)', blanks:['الجليد'], wordBank:['الجليد','البخار','الندى'],
    explanation:'الصلب يسمّى جليداً.', goldenRule:'الجليد = ماء صلب.'},

  { id:'u3l2q51', unit:'unit3', lesson:'u3l2', page:126, type:'ordering', bloom:'apply', difficulty:'hard',
    question:'رتّب دورة الماء:', paragraph:'دورة الماء. (ص126)',
    items:['التبخّر','التكاثف','النزول','الجريان'], correctOrder:[0,1,2,3],
    explanation:'تبخّر ← تكاثف ← نزول ← جريان.', goldenRule:'دورة الماء متكاملة.'},

  { id:'u3l2q52', unit:'unit3', lesson:'u3l2', page:128, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن أهمية الماء:', paragraph:'الماء. (ص128)', options:[{text:'الماء حياة لا غنى عنه',correct:true},{text:'الماء للعب',correct:false},{text:'الماء للهدر',correct:false},{text:'الماء للزينة',correct:false}],
    explanation:'الماء حياة لا غنى عنه.', goldenRule:'الماء = حياة.'},

  // ════════ الوحدة 3 / الدرس 3: التربة (ص148-159) — 52 سؤالاً ════════
  { id:'u3l3q11', unit:'unit3', lesson:'u3l3', page:148, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'التربة هي الطبقة السطحية للـ:', paragraph:'التربة سطح الأرض. (ص148)', options:[{text:'الأرض',correct:true},{text:'الهواء',correct:false},{text:'الماء',correct:false},{text:'السماء',correct:false}],
    explanation:'التربة الطبقة السطحية للأرض.', goldenRule:'التربة = سطح الأرض.'},

  { id:'u3l3q12', unit:'unit3', lesson:'u3l3', page:148, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'التربة تتكوّن من صخور متفتّتة ومواد عضوية.', paragraph:'صخور + مواد عضوية. (ص148)', correctAnswer:true,
    explanation:'التربة صخور متفتّتة + بقايا نباتات وحيوانات.', goldenRule:'التربة = صخور + عضوي.'},

  { id:'u3l3q13', unit:'unit3', lesson:'u3l3', page:149, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'أهمية التربة أنها:', paragraph:'التربة للزراعة. (ص149)', options:[{text:'تنبت النباتات',correct:true},{text:'تطفئ النار',correct:false},{text:'تبرّد الجو',correct:false},{text:'تزيّن',correct:false}],
    explanation:'التربة تنبت النباتات وهي أساس الزراعة.', goldenRule:'التربة أساس الزراعة.'},

  { id:'u3l3q14', unit:'unit3', lesson:'u3l3', page:150, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب تكوّن التربة:', paragraph:'تكوّن التربة. (с148)',
    items:['تفتّت الصخور','تراكم المواد','تحلّل البقايا','تكوّن التربة'], correctOrder:[0,1,2,3],
    explanation:'تفتّت ← تراكم ← تحلّل ← تربة.', goldenRule:'التربة تكوّنت عبر الزمن.'},

  { id:'u3l3q15', unit:'unit3', lesson:'u3l3', page:151, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: من التربة أم لا؟', paragraph:'التربة. (ص148)',
    categories:['من التربة 🟤','ليس منها'],
    items:[{text:'الرمل',correct_category:0},{text:'الصخر الصلب',correct_category:1},{text:'الطمي',correct_category:0},{text:'الهواء',correct_category:1},{text:'الطين',correct_category:0},{text:'الماء',correct_category:1}],
    explanation:'من التربة: رمل، طمي، طين.', goldenRule:'التربة رمل وطمي وطين.'},

  { id:'u3l3q16', unit:'unit3', lesson:'u3l3', page:148, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"التربة الطبقة ___ للأرض."', paragraph:'السطحية. (с148)', blanks:['السطحية'], wordBank:['السطحية','الداخلية','الخارجية'],
    explanation:'التربة سطحية.', goldenRule:'التربة سطحية.'},

  { id:'u3l3q17', unit:'unit3', lesson:'u3l3', page:152, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل نوع التربة بخاصتها:', paragraph:'أنواع التربة. (с151)',
    pairs:[{left:'الرملية',right:'خفيفة'},{left:'الطينية',right:'ثقيلة'},{left:'الطمئية',right:'خصبة'}],
    explanation:'رملية خفيفة، طينية ثقيلة، طمئية خصبة.', goldenRule:'أنواع التربة مختلفة.'},

  { id:'u3l3q18', unit:'unit3', lesson:'u3l3', page:148, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'مكوّنات التربة الأساسية:', paragraph:'التربة. (ص148)', options:[{text:'صخور وماء وهواء',correct:true},{text:'نار ودخان',correct:false},{text:'ذهب وفضة',correct:false},{text:'زجاج',correct:false}],
    explanation:'التربة: صخور + ماء + هواء + عضوي.', goldenRule:'التربة مكوّنات متعدّدة.'},

  { id:'u3l3q19', unit:'unit3', lesson:'u3l3', page:149, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'بدون تربة لا تنمو النباتات.', paragraph:'التربة للنبات. (с149)', correctAnswer:true,
    explanation:'التربة ضرورية لنموّ النبات.', goldenRule:'التربة أساس النبات.'},

  { id:'u3l3q20', unit:'unit3', lesson:'u3l3', page:150, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند زراعة البذرة نضعها في:', paragraph:'الزراعة. (с149)', options:[{text:'التربة',correct:true},{text:'الماء',correct:false},{text:'الهواء',correct:false},{text:'النار',correct:false}],
    explanation:'البذرة تُزرع في التربة.', goldenRule:'البذرة في التربة.'},

  { id:'u3l3q21', unit:'unit3', lesson:'u3l3', page:151, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"التربة الرملية ___ ."', paragraph:'الأنواع. (с151)', blanks:['خفيفة'], wordBank:['خفيفة','ثقيلة','خصبة'],
    explanation:'الرملية خفيفة.', goldenRule:'الرملية خفيفة.'},

  { id:'u3l3q22', unit:'unit3', lesson:'u3l3', page:150, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا التربة مهمة للزراعة؟', paragraph:'التربة. (с149)', options:[{text:'لأنها تمسك النبات وتغذّيه',correct:true},{text:'لأنها زينة',correct:false},{text:'لأنها باردة',correct:false},{text:'لأنها ناعمة',correct:false}],
    explanation:'التربة تمسك الجذور وتغذّيها.', goldenRule:'التربة تغذّي النبات.'},

  { id:'u3l3q23', unit:'unit3', lesson:'u3l3', page:152, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح طريقة للحفاظ على التربة:', paragraph:'التربة. (с152)', options:[{text:'تقليل الحفر',correct:true},{text:'هدم الجبال',correct:false},{text:'حرق الأرض',correct:false},{text:'ردم الأنهار',correct:false}],
    explanation:'تقليل الحفر يحفظ التربة.', goldenRule:'حفظ التربة واجب.'},

  { id:'u3l3q24', unit:'unit3', lesson:'u3l3', page:151, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'التربة الطمئية خصبة صالحة للزراعة.', paragraph:'الطمي. (с151)', correctAnswer:true,
    explanation:'الطمي خصب وصالح للزراعة.', goldenRule:'الطمي خصب.'},

  { id:'u3l3q25', unit:'unit3', lesson:'u3l3', page:151, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: تربة خصبة أم فقيرة؟', paragraph:'التربة. (с151)',
    categories:['خصبة ✅','فقيرة ❌'],
    items:[{text:'الطمي',correct_category:0},{text:'الرمال',correct_category:1},{text:'الأرض الزراعية',correct_category:0},{text:'الصحراء',correct_category:1},{text:'أرض النهر',correct_category:0},{text:'الأرض المالحة',correct_category:1}],
    explanation:'خصبة: طمي، زراعية، أرض النهر.', goldenRule:'الخصبة تنبت النبات.'},

  { id:'u3l3q26', unit:'unit3', lesson:'u3l3', page:152, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل التربة باستخدامها:', paragraph:'التربة. (с151)',
    pairs:[{left:'الرملية',right:'البناء'},{left:'الطمئية',right:'الزراعة'},{left:'الطينية',right:'الفخار'}],
    explanation:'رملية للبناء، طمئية للزراعة، طينية للفخار.', goldenRule:'لكل تربة استخدام.'},

  { id:'u3l3q27', unit:'unit3', lesson:'u3l3', page:148, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'التربة توجد في:', paragraph:'التربة. (с148)', options:[{text:'سطح الأرض',correct:true},{text:'قاع البحر',correct:false},{text:'السماء',correct:false},{text:'الجو',correct:false}],
    explanation:'التربة في سطح الأرض.', goldenRule:'التربة سطحية.'},

  { id:'u3l3q28', unit:'unit3', lesson:'u3l3', page:150, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب أنواع التربة من الأخف:', paragraph:'الأنواع. (с151)',
    items:['الرملية','الطمئية','الطينية'], correctOrder:[0,1,2],
    explanation:'الأخف: رملية ← طمئية ← طينية.', goldenRule:'الرمل أخفّ أنواع التربة.'},

  { id:'u3l3q29', unit:'unit3', lesson:'u3l3', page:151, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"التربة الـ ___ ثقيلة."', paragraph:'الطينية. (с151)', blanks:['الطينية'], wordBank:['الطينية','الرملية','السائلة'],
    explanation:'الطينية ثقيلة.', goldenRule:'الطين ثقيل.'},

  { id:'u3l3q30', unit:'unit3', lesson:'u3l3', page:149, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'التربة الفقيرة لا تنبت النبات.', paragraph:'التربة. (с149)', correctAnswer:true,
    explanation:'التربة الفقيرة لا تنبت جيداً.', goldenRule:'التربة الفقيرة ضعيفة.'},

  { id:'u3l3q31', unit:'unit3', lesson:'u3l3', page:148, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'عدد أنواع التربة الرئيسية:', paragraph:'الأنواع. (с151)', options:[{text:'3',correct:true},{text:'5',correct:false},{text:'7',correct:false},{text:'2',correct:false}],
    explanation:'3 أنواع: رملية، طمئية، طينية.', goldenRule:'3 أنواع للتربة.'},

  { id:'u3l3q32', unit:'unit3', lesson:'u3l3', page:152, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: يصلح للزراعة أم لا؟', paragraph:'التربة. (с151)',
    categories:['يصلح للزراعة ✅','لا يصلح ❌'],
    items:[{text:'الطمي',correct_category:0},{text:'الرمال',correct_category:1},{text:'أرض النهر',correct_category:0},{text:'الأرض المالحة',correct_category:1},{text:'التربة الخصبة',correct_category:0},{text:'الصخور الصلبة',correct_category:1}],
    explanation:'يصلح: طمي، أرض نهر، تربة خصبة.', goldenRule:'الخصبة للزراعة.'},

  { id:'u3l3q33', unit:'unit3', lesson:'u3l3', page:152, type:'matching', bloom:'understand', difficulty:'easy',
    question:'صِل الكلمة بمعناها:', paragraph:'المفردات. (с148-152)',
    pairs:[{left:'تربة',right:'أرض سطحية'},{left:'طمي',right:'خصب'},{left:'رمل',right:'حبيبات'}],
    explanation:'تربة=أرض، طمي=خصب، رمل=حبيبات.', goldenRule:'فهم المفردات أساس.'},

  { id:'u3l3q34', unit:'unit3', lesson:'u3l3', page:150, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"التربة تتكوّن من ___ متفتّتة."', paragraph:'الصخور. (с148)', blanks:['الصخور'], wordBank:['الصخور','النار','الهواء'],
    explanation:'التربة من صخور متفتّتة.', goldenRule:'التربة = صخور متفتّتة.'},

  { id:'u3l3q35', unit:'unit3', lesson:'u3l3', page:148, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'التربة مهمة للإنسان والحيوان والنبات.', paragraph:'التربة. (с149)', correctAnswer:true,
    explanation:'التربة مهمة لكل الكائنات.', goldenRule:'التربة أساس الحياة.'},

  { id:'u3l3q36', unit:'unit3', lesson:'u3l3', page:152, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح طريقة لتحسين التربة الفقيرة:', paragraph:'التربة. (с152)', options:[{text:'إضافة السماد',correct:true},{text:'حرقها',correct:false},{text:'تركها',correct:false},{text:'ردمها',correct:false}],
    explanation:'السماد يحسّن التربة.', goldenRule:'السماد يحسّن التربة.'},

  { id:'u3l3q37', unit:'unit3', lesson:'u3l3', page:150, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب خطوات الزراعة:', paragraph:'الزراعة. (с149)',
    items:['تهيئة التربة','بذر البذور','السقي','الحصاد'], correctOrder:[0,1,2,3],
    explanation:'تهيئة ← بذر ← سقي ← حصاد.', goldenRule:'للزراعة خطوات.'},

  { id:'u3l3q38', unit:'unit3', lesson:'u3l3', page:151, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يحافظ على التربة أم يضرّها؟', paragraph:'التربة. (с152)',
    categories:['يحافظ ✅','يضرّ ❌'],
    items:[{text:'الزراعة المنظّمة',correct_category:0},{text:'الحفر العشوائي',correct_category:1},{text:'التسميد',correct_category:0},{text:'الحرق',correct_category:1},{text:'السقي',correct_category:0},{text:'القطع الجائر',correct_category:1}],
    explanation:'يحافظ: زراعة، تسميد، سقي. يضرّ: حفر، حرق، قطع.', goldenRule:'حفظ التربة واجب.'},

  { id:'u3l3q39', unit:'unit3', lesson:'u3l3', page:149, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'التربة توفّر للنبات:', paragraph:'التربة. (с149)', options:[{text:'الماء والغذاء',correct:true},{text:'الظلّ',correct:false},{text:'الضوء',correct:false},{text:'الهواء',correct:false}],
    explanation:'التربة توفّر الماء والغذاء للنبات.', goldenRule:'التربة = ماء + غذاء.'},

  { id:'u3l3q40', unit:'unit3', lesson:'u3l3', page:152, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"التربة الـ ___ صالحة للزراعة."', paragraph:'الطمئية. (с151)', blanks:['الطمئية'], wordBank:['الطمئية','الرملية','الصخرية'],
    explanation:'الطمئية صالحة للزراعة.', goldenRule:'الطمي للزراعة.'},

  { id:'u3l3q41', unit:'unit3', lesson:'u3l3', page:148, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'التربة تختلف من مكان لآخر.', paragraph:'التربة. (с151)', correctAnswer:true,
    explanation:'التربة تتنوّع بحسب المكان.', goldenRule:'التربة متنوّعة.'},

  { id:'u3l3q42', unit:'unit3', lesson:'u3l3', page:152, type:'matching', bloom:'evaluate', difficulty:'hard',
    question:'صِل التصرف بنتيجته على التربة:', paragraph:'التربة. (с152)',
    pairs:[{left:'التسميد',right:'تحسّن'},{left:'الحرق',right:'تلف'},{left:'السقي',right:'نموّ'}],
    explanation:'التسميد يحسّن، الحرق يتلف، السقي ينمّي.', goldenRule:'كل تصرّف له أثر.'},

  { id:'u3l3q43', unit:'unit3', lesson:'u3l3', page:149, type:'multipleChoice', bloom:'evaluate', difficulty:'medium',
    question:'أهمية التربة للإنسان:', paragraph:'التربة. (с149)', options:[{text:'زراعة غذائه',correct:true},{text:'بناء الطائرات',correct:false},{text:'سباحة',correct:false},{text:'تدفئة',correct:false}],
    explanation:'التربة أساس زراعة الغذاء.', goldenRule:'التربة مصدر الغذاء.'},

  { id:'u3l3q44', unit:'unit3', lesson:'u3l3', page:151, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب التربة من الأخصب للأقلّ:', paragraph:'الأنواع. (с151)',
    items:['الطمئية','الطينية','الرملية'], correctOrder:[0,1,2],
    explanation:'الأخصب: طمئية ← طينية ← رملية.', goldenRule:'الطمي أخصب.'},

  { id:'u3l3q45', unit:'unit3', lesson:'u3l3', page:148, type:'classify', bloom:'remember', difficulty:'easy',
    question:'صنّف: من مكوّنات التربة أم لا؟', paragraph:'التربة. (с148)',
    categories:['من مكوّناتها','ليس منها'],
    items:[{text:'الماء',correct_category:0},{text:'الذهب',correct_category:1},{text:'الهواء',correct_category:0},{text:'الزجاج',correct_category:1},{text:'الصخور',correct_category:0},{text:'اللؤلؤ',correct_category:1}],
    explanation:'مكوّنات التربة: ماء، هواء، صخور.', goldenRule:'التربة ماء + هواء + صخور.'},

  { id:'u3l3q46', unit:'unit3', lesson:'u3l3', page:152, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أحافظ على التربة بـ ___ العشوائي."', paragraph:'التربة. (с152)', blanks:['منع الحفر'], wordBank:['منع الحفر','تشجيع الحفر','زيادة الحرق'],
    explanation:'منع الحفر يحفظ التربة.', goldenRule:'منع الحفر حفظ للتربة.'},

  { id:'u3l3q47', unit:'unit3', lesson:'u3l3', page:150, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'التربة الخصبة تنتج محصولاً جيّداً.', paragraph:'التربة. (с149)', correctAnswer:true,
    explanation:'الخصبة تنتج محصولاً جيّداً.', goldenRule:'الخصب = إنتاج جيّد.'},

  { id:'u3l3q48', unit:'unit3', lesson:'u3l3', page:152, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند زراعة حديقة نبدأ بـ:', paragraph:'الزراعة. (с149)', options:[{text:'تهيئة التربة',correct:true},{text:'اللعب',correct:false},{text:'النوم',correct:false},{text:'السباحة',correct:false}],
    explanation:'تهيئة التربة أول خطوة.', goldenRule:'الزراعة تبدأ بالتربة.'},

  { id:'u3l3q49', unit:'unit3', lesson:'u3l3', page:151, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل النوع بوصفه:', paragraph:'الأنواع. (с151)',
    pairs:[{left:'الرملية',right:'خفيفة'},{left:'الطينية',right:'ثقيلة'},{left:'الطمئية',right:'خصبة'}],
    explanation:'رملية خفيفة، طينية ثقيلة، طمئية خصبة.', goldenRule:'لكل نوع وصف.'},

  { id:'u3l3q50', unit:'unit3', lesson:'u3l3', page:148, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"التربة تتكوّن من صخور ___ ."', paragraph:'الصخور المتفتّتة. (с148)', blanks:['متفتّتة'], wordBank:['متفتّتة','مذابة','سائلة'],
    explanation:'التربة من صخور متفتّتة.', goldenRule:'الصخور المتفتّتة أساس التربة.'},

  { id:'u3l3q51', unit:'unit3', lesson:'u3l3', page:150, type:'ordering', bloom:'apply', difficulty:'hard',
    question:'رتّب تكوّن التربة عبر الزمن:', paragraph:'تكوّن التربة. (с148)',
    items:['تفتّت الصخور','اختلاط المواد','تراكم البقايا','نضج التربة'], correctOrder:[0,1,2,3],
    explanation:'تفتّت ← اختلاط ← تراكم ← نضج.', goldenRule:'التربة تكوّنت ببطء.'},

  { id:'u3l3q52', unit:'unit3', lesson:'u3l3', page:152, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن أهمية التربة:', paragraph:'التربة. (с149)', options:[{text:'التربة أمّ الزراعة',correct:true},{text:'التربة للعب',correct:false},{text:'التربة للهدر',correct:false},{text:'التربة للزينة',correct:false}],
    explanation:'التربة أمّ الزراعة وأساسها.', goldenRule:'التربة أمّ الزراعة.'},

  // ════════ الوحدة 4 / الدرس 1: الجهاز الهيكلي والعضلي (ص160-161) — 52 سؤالاً ════════
  { id:'u4l1q11', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الجهاز الهيكلي يتكوّن من:', paragraph:'العظام. (с160)', options:[{text:'العظام',correct:true},{text:'الدم',correct:false},{text:'العصب',correct:false},{text:'العضلات فقط',correct:false}],
    explanation:'الجهاز الهيكلي مكوّن من العظام.', goldenRule:'الهيكلي = العظام.'},

  { id:'u4l1q12', unit:'unit4', lesson:'u4l1', page:160, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'العظام تحمي الأعضاء الداخلية.', paragraph:'العظام تحمي. (с160)', correctAnswer:true,
    explanation:'العظام تحمي الأعضاء كالقلب والدماغ.', goldenRule:'العظام حماية الأعضاء.'},

  { id:'u4l1q13', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'الجهاز العضلي يتكوّن من:', paragraph:'العضلات. (с160)', options:[{text:'العضلات',correct:true},{text:'العظام',correct:false},{text:'الأعصاب',correct:false},{text:'الدم',correct:false}],
    explanation:'الجهاز العضلي مكوّن من العضلات.', goldenRule:'العضلي = العضلات.'},

  { id:'u4l1q14', unit:'unit4', lesson:'u4l1', page:160, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب أجهزة جسم الإنسان:', paragraph:'الأجهزة. (с160)',
    items:['الهيكلي','العضلي','الدوراني'], correctOrder:[0,1,2],
    explanation:'هيكلي ← عضلي ← دوراني.', goldenRule:'أجهزة الجسم متعدّدة.'},

  { id:'u4l1q15', unit:'unit4', lesson:'u4l1', page:160, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: من الجهاز الهيكلي أم العضلي؟', paragraph:'الأجهزة. (с160)',
    categories:['هيكلي 🦴','عضلي 💪'],
    items:[{text:'الجمجمة',correct_category:0},{text:'عضلة اليد',correct_category:1},{text:'العمود الفقري',correct_category:0},{text:'عضلة الساق',correct_category:1},{text:'الضلوع',correct_category:0},{text:'عضلة الفخذ',correct_category:1}],
    explanation:'هيكلي: جمجمة، عمود، ضلوع. عضلي: عضلات.', goldenRule:'الهيكلي عظام والعضلي عضلات.'},

  { id:'u4l1q16', unit:'unit4', lesson:'u4l1', page:160, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"الجهاز ___ يتكوّن من العظام."', paragraph:'الهيكلي. (с160)', blanks:['الهيكلي'], wordBank:['الهيكلي','الدوراني','التنفّسي'],
    explanation:'الهيكلي من العظام.', goldenRule:'الهيكلي = عظام.'},

  { id:'u4l1q17', unit:'unit4', lesson:'u4l1', page:160, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل العظم بوظيفته:', paragraph:'العظام. (с160)',
    pairs:[{left:'الجمجمة',right:'حماية الدماغ'},{left:'الضلوع',right:'حماية القلب'},{left:'العمود الفقري',right:'دعم الجسم'}],
    explanation:'الجمجمة تحمي الدماغ، الضلوع القلب.', goldenRule:'كل عظم له وظيفة.'},

  { id:'u4l1q18', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'وظيفة العظام الأساسية:', paragraph:'العظام. (с160)', options:[{text:'الحماية والدعم',correct:true},{text:'الهضم',correct:false},{text:'التنفّس',correct:false},{text:'الإخراج',correct:false}],
    explanation:'العظام تحمي وتدعم الجسم.', goldenRule:'العظام = حماية + دعم.'},

  { id:'u4l1q19', unit:'unit4', lesson:'u4l1', page:160, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'العضلات تتحرّك بلا عظام.', paragraph:'العضلات. (с160)', correctAnswer:false,
    explanation:'العضلات تحتاج العظام للحركة.', goldenRule:'العضلات تعمل مع العظام.'},

  { id:'u4l1q20', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند المشي نستخدم:', paragraph:'الحركة. (с160)', options:[{text:'العظام والعضلات',correct:true},{text:'الأعصاب فقط',correct:false},{text:'الدم',correct:false},{text:'الجلد',correct:false}],
    explanation:'المشي يحتاج عظاماً وعضلات.', goldenRule:'الحركة = عظام + عضلات.'},

  { id:'u4l1q21', unit:'unit4', lesson:'u4l1', page:160, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"الجهاز العضلي يتكوّن من ___ ."', paragraph:'العضلات. (с160)', blanks:['العضلات'], wordBank:['العضلات','العظام','الأعصاب'],
    explanation:'العضلي من العضلات.', goldenRule:'العضلي = عضلات.'},

  { id:'u4l1q22', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا نحتاج العظام؟', paragraph:'العظام. (с160)', options:[{text:'للحماية والدعم',correct:true},{text:'للهضم',correct:false},{text:'للتنفّس',correct:false},{text:'للإحساس',correct:false}],
    explanation:'العظام للحماية والدعم.', goldenRule:'العظام تحمي وتدعم.'},

  { id:'u4l1q23', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح طريقة للحفاظ على العظام:', paragraph:'العظام. (с160)', options:[{text:'شرب الحليب',correct:true},{text:'قلة الحركة',correct:false},{text:'النوم كثيراً',correct:false},{text:'الأكل الزائد',correct:false}],
    explanation:'شرب الحليب يقوّي العظام.', goldenRule:'الكالسيوم يقوّي العظام.'},

  { id:'u4l1q24', unit:'unit4', lesson:'u4l1', page:160, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الجمجمة تحمي الدماغ.', paragraph:'الجمجمة. (с160)', correctAnswer:true,
    explanation:'الجمجمة تحمي الدماغ من الإصابة.', goldenRule:'الجمجمة تحمي الدماغ.'},

  { id:'u4l1q25', unit:'unit4', lesson:'u4l1', page:160, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: يحافظ على العظام أم يضرّها؟', paragraph:'العظام. (с160)',
    categories:['يحافظ ✅','يضرّ ❌'],
    items:[{text:'شرب الحليب',correct_category:0},{text:'الكسر المتعمّد',correct_category:1},{text:'التمرين',correct_category:0},{text:'السقوط',correct_category:1},{text:'التغذية',correct_category:0},{text:'الكسل',correct_category:1}],
    explanation:'يحافظ: حليب، تمرين، تغذية. يضرّ: كسر، سقوط، كسل.', goldenRule:'حفظ العظام واجب.'},

  { id:'u4l1q26', unit:'unit4', lesson:'u4l1', page:160, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل العضلة بموضعها:', paragraph:'العضلات. (с160)',
    pairs:[{left:'عضلة اليد',right:'الذراع'},{left:'عضلة الساق',right:'الرجل'},{left:'عضلة الفك',right:'المضغ'}],
    explanation:'لكل عضلة موضع ووظيفة.', goldenRule:'العضلات موزّعة في الجسم.'},

  { id:'u4l1q27', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'عدد عظام جسم الإنسان البالغ:', paragraph:'العظام. (с160)', options:[{text:'206 عظمة',correct:true},{text:'100',correct:false},{text:'500',correct:false},{text:'50',correct:false}],
    explanation:'جسم الإنسان البالغ 206 عظمة.', goldenRule:'206 عظمة في جسم الإنسان.'},

  { id:'u4l1q28', unit:'unit4', lesson:'u4l1', page:160, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب أجزاء الهيكل من الأعلى:', paragraph:'الهيكل. (с160)',
    items:['الجمجمة','العمود الفقري','الأطراف'], correctOrder:[0,1,2],
    explanation:'جمجمة ← عمود ← أطراف.', goldenRule:'الهيكل من الرأس للقدم.'},

  { id:'u4l1q29', unit:'unit4', lesson:'u4l1', page:160, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"الجمجمة تحمي ___ ."', paragraph:'الدماغ. (с160)', blanks:['الدماغ'], wordBank:['الدماغ','القلب','الرئة'],
    explanation:'الجمجمة تحمي الدماغ.', goldenRule:'الجمجمة = حماية الدماغ.'},

  { id:'u4l1q30', unit:'unit4', lesson:'u4l1', page:160, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'بدون العظام لا نستطيع الوقوف.', paragraph:'العظام. (с160)', correctAnswer:true,
    explanation:'العظام تدعم الجسم للوقوف.', goldenRule:'العظام = دعم الجسم.'},

  { id:'u4l1q31', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الجهاز المسؤول عن الحركة:', paragraph:'الحركة. (с160)', options:[{text:'الهيكلي والعضلي',correct:true},{text:'الدوراني',correct:false},{text:'التنفّسي',correct:false},{text:'العصبي',correct:false}],
    explanation:'الهيكلي والعضلي مسؤولان عن الحركة.', goldenRule:'الحركة = هيكلي + عضلي.'},

  { id:'u4l1q32', unit:'unit4', lesson:'u4l1', page:160, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: عظمة أم عضلة؟', paragraph:'العظام والعضلات. (с160)',
    categories:['عظمة 🦴','عضلة 💪'],
    items:[{text:'الفخذ',correct_category:0},{text:'الذراع العضلي',correct_category:1},{text:'الساق',correct_category:0},{text:'البطن العضلي',correct_category:1},{text:'الترقوة',correct_category:0},{text:'عضلة الرقبة',correct_category:1}],
    explanation:'عظمة: فخذ، ساق، ترقوة. عضلة: ذراع، بطن، رقبة.', goldenRule:'نميّز العظم من العضلة.'},

  { id:'u4l1q33', unit:'unit4', lesson:'u4l1', page:160, type:'matching', bloom:'understand', difficulty:'easy',
    question:'صِل الكلمة بمعناها:', paragraph:'المفردات. (с160)',
    pairs:[{left:'هيكلي',right:'عظام'},{left:'عضلي',right:'عضلات'},{left:'حركة',right:'انتقال'}],
    explanation:'هيكلي=عظام، عضلي=عضلات، حركة=انتقال.', goldenRule:'فهم المفردات أساس.'},

  { id:'u4l1q34', unit:'unit4', lesson:'u4l1', page:160, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"عند المشي تتحرّك ___ والعضلات."', paragraph:'الحركة. (с160)', blanks:['العظام'], wordBank:['العظام','الأعصاب','الأوعية'],
    explanation:'الحركة بالعظام والعضلات.', goldenRule:'الحركة = عظام + عضلات.'},

  { id:'u4l1q35', unit:'unit4', lesson:'u4l1', page:160, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'العضلات تساعد على الحركة.', paragraph:'العضلات. (с160)', correctAnswer:true,
    explanation:'العضلات تتحرّك فتحرّك العظام.', goldenRule:'العضلات محرّكة الجسم.'},

  { id:'u4l1q36', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح غذاءً يقوّي العظام:', paragraph:'العظام. (с160)', options:[{text:'الحليب',correct:true},{text:'الحلوى',correct:false},{text:'المنبه',correct:false},{text:'الشيبس',correct:false}],
    explanation:'الحليب يقوّي العظام بالكالسيوم.', goldenRule:'الحليب = كالسيوم = عظام قويّة.'},

  { id:'u4l1q37', unit:'unit4', lesson:'u4l1', page:160, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب خطوات الحركة:', paragraph:'الحركة. (с160)',
    items:['إشارة عصبية','تقلّص العضلة','تحرّك العظم','الحركة'], correctOrder:[0,1,2,3],
    explanation:'إشارة ← تقلّص ← تحرّك ← حركة.', goldenRule:'للحركة خطوات.'},

  { id:'u4l1q38', unit:'unit4', lesson:'u4l1', page:160, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يقوّي العظام أم يضعفها؟', paragraph:'العظام. (с160)',
    categories:['يقوّي ✅','يضعف ❌'],
    items:[{text:'التمرين',correct_category:0},{text:'قلة الحركة',correct_category:1},{text:'الحليب',correct_category:0},{text:'الكسل',correct_category:1},{text:'الشمس',correct_category:0},{text:'المنبه',correct_category:1}],
    explanation:'يقوّي: تمرين، حليب، شمس. يضعف: قلة حركة، كسل، منبّه.', goldenRule:'العظام تحتاج رعاية.'},

  { id:'u4l1q39', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'العمود الفقري وظيفته:', paragraph:'العمود الفقري. (с160)', options:[{text:'دعم الجسم',correct:true},{text:'الهضم',correct:false},{text:'التنفّس',correct:false},{text:'الإحساس',correct:false}],
    explanation:'العمود الفقري يدعم الجسم.', goldenRule:'العمود الفقري = دعم.'},

  { id:'u4l1q40', unit:'unit4', lesson:'u4l1', page:160, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"الضلوع تحمي ___ والرئتين."', paragraph:'الضلوع. (с160)', blanks:['القلب'], wordBank:['القلب','الدماغ','الكبد'],
    explanation:'الضلوع تحمي القلب والرئتين.', goldenRule:'الضلوع = حماية الصدر.'},

  { id:'u4l1q41', unit:'unit4', lesson:'u4l1', page:160, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'العظام البيضاء صلبة وقوية.', paragraph:'العظام. (с160)', correctAnswer:true,
    explanation:'العظام صلبة وقوية.', goldenRule:'العظام صلبة.'},

  { id:'u4l1q42', unit:'unit4', lesson:'u4l1', page:160, type:'matching', bloom:'evaluate', difficulty:'hard',
    question:'صِل الجهاز بوظيفته:', paragraph:'الأجهزة. (с160)',
    pairs:[{left:'الهيكلي',right:'دعم الجسم'},{left:'العضلي',right:'الحركة'},{left:'الجمجمة',right:'حماية الدماغ'}],
    explanation:'الهيكلي دعم، العضلي حركة، الجمجمة حماية.', goldenRule:'كل جهاز له وظيفة.'},

  { id:'u4l1q43', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'evaluate', difficulty:'medium',
    question:'أهمية العضلات:', paragraph:'العضلات. (с160)', options:[{text:'الحركة',correct:true},{text:'الزينة',correct:false},{text:'التنفّس',correct:false},{text:'الهضم',correct:false}],
    explanation:'العضلات للحركة.', goldenRule:'العضلات = حركة.'},

  { id:'u4l1q44', unit:'unit4', lesson:'u4l1', page:160, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب العظام من الأعلى:', paragraph:'الهيكل. (с160)',
    items:['الجمجمة','العمود الفقري','الضلوع','الأطراف'], correctOrder:[0,1,2,3],
    explanation:'جمجمة ← عمود ← ضلوع ← أطراف.', goldenRule:'الهيكل منظّم.'},

  { id:'u4l1q45', unit:'unit4', lesson:'u4l1', page:160, type:'classify', bloom:'remember', difficulty:'easy',
    question:'صنّف: من الهيكل أم لا؟', paragraph:'الهيكل. (с160)',
    categories:['من الهيكل','ليس منه'],
    items:[{text:'الجمجمة',correct_category:0},{text:'الدم',correct_category:1},{text:'العمود الفقري',correct_category:0},{text:'العضلات',correct_category:1},{text:'الضلوع',correct_category:0},{text:'القلب',correct_category:1}],
    explanation:'من الهيكل: جمجمة، عمود، ضلوع.', goldenRule:'الهيكل = عظام.'},

  { id:'u4l1q46', unit:'unit4', lesson:'u4l1', page:160, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أحافظ على عظامي بشرب ___ ."', paragraph:'العظام. (с160)', blanks:['الحليب'], wordBank:['الحليب','المنبه','الحلوى'],
    explanation:'الحليب يحفظ العظام.', goldenRule:'الحليب يحفظ العظام.'},

  { id:'u4l1q47', unit:'unit4', lesson:'u4l1', page:160, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'التمرين الرياضي يقوّي العضلات والعظام.', paragraph:'التمرين. (с160)', correctAnswer:true,
    explanation:'التمرين يقوّي العضلات والعظام.', goldenRule:'الرياضة = قوّة.'},

  { id:'u4l1q48', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند الجري نستخدم عضلات:', paragraph:'الحركة. (с160)', options:[{text:'الساقين',correct:true},{text:'اليدين',correct:false},{text:'الرأس',correct:false},{text:'البطن',correct:false}],
    explanation:'الجري يستخدم عضلات الساقين.', goldenRule:'لكل حركة عضلاتها.'},

  { id:'u4l1q49', unit:'unit4', lesson:'u4l1', page:160, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل الجهاز بمكوّنه:', paragraph:'الأجهزة. (с160)',
    pairs:[{left:'الهيكلي',right:'عظام'},{left:'العضلي',right:'عضلات'},{left:'الجمجمة',right:'دماغ'}],
    explanation:'الهيكلي عظام، العضلي عضلات.', goldenRule:'كل جهاز له مكوّن.'},

  { id:'u4l1q50', unit:'unit4', lesson:'u4l1', page:160, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"الجهاز العضلي يساعد على ___ ."', paragraph:'العضلات. (с160)', blanks:['الحركة'], wordBank:['الحركة','الهضم','الإبصار'],
    explanation:'العضلي يساعد على الحركة.', goldenRule:'العضلي = حركة.'},

  { id:'u4l1q51', unit:'unit4', lesson:'u4l1', page:160, type:'ordering', bloom:'apply', difficulty:'hard',
    question:'رتّب خطوات العناية بالعظام:', paragraph:'العظام. (с160)',
    items:['الغذاء','التمرين','الراحة','الفحص'], correctOrder:[0,1,2,3],
    explanation:'غذاء ← تمرين ← راحة ← فحص.', goldenRule:'للعناية خطوات.'},

  { id:'u4l1q52', unit:'unit4', lesson:'u4l1', page:160, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن الجهاز الهيكلي:', paragraph:'الهيكلي. (с160)', options:[{text:'الهيكل يدعم جسمي',correct:true},{text:'الهيكل للتنفّس',correct:false},{text:'الهيكل للهضم',correct:false},{text:'الهيكل للزينة',correct:false}],
    explanation:'الهيكل يدعم جسمي.', goldenRule:'الهيكل = دعم الجسم.'},

  // ════════ الوحدة 4 / الدرس 2: الجهاز الدوراني والتنفّسي (ص162-163) — 52 سؤالاً ════════
  { id:'u4l2q11', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الجهاز الدوراني يتكوّن من:', paragraph:'القلب والأوعية. (с162)', options:[{text:'القلب والأوعية',correct:true},{text:'العظام',correct:false},{text:'العضلات',correct:false},{text:'الأعصاب',correct:false}],
    explanation:'الدوراني = القلب + الأوعية الدموية.', goldenRule:'الدوراني = قلب + أوعية.'},

  { id:'u4l2q12', unit:'unit4', lesson:'u4l2', page:162, type:'trueFalse', bloom:'understand', difficulty:'easy',
    question:'القلب يضخّ الدم في الجسم.', paragraph:'القلب. (с162)', correctAnswer:true,
    explanation:'القلب مضخّة الدم في الجسم.', goldenRule:'القلب = مضخّة الدم.'},

  { id:'u4l2q13', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'الجهاز التنفّسي يتكوّن من:', paragraph:'الرئتان. (с162)', options:[{text:'الرئتين والقصبة',correct:true},{text:'القلب',correct:false},{text:'المعدة',correct:false},{text:'العظام',correct:false}],
    explanation:'التنفّسي = الرئتان + القصبة الهوائية.', goldenRule:'التنفّسي = رئتان + قصبة.'},

  { id:'u4l2q14', unit:'unit4', lesson:'u4l2', page:162, type:'ordering', bloom:'apply', difficulty:'medium',
    question:'رتّب مسار الهواء عند الشهيق:', paragraph:'التنفّس. (с162)',
    items:['الأنف','القصبة','الرئتين'], correctOrder:[0,1,2],
    explanation:'أنف ← قصبة ← رئتان.', goldenRule:'الهواء يدخل من الأنف.'},

  { id:'u4l2q15', unit:'unit4', lesson:'u4l2', page:162, type:'classify', bloom:'analyze', difficulty:'medium',
    question:'صنّف: من الدوراني أم التنفّسي؟', paragraph:'الأجهزة. (с162)',
    categories:['دوراني ❤️','تنفّسي 🫁'],
    items:[{text:'القلب',correct_category:0},{text:'الرئتان',correct_category:1},{text:'الأوعية',correct_category:0},{text:'القصبة',correct_category:1},{text:'الدم',correct_category:0},{text:'الأنف',correct_category:1}],
    explanation:'دوراني: قلب، أوعية، دم. تنفّسي: رئتان، قصبة، أنف.', goldenRule:'الدوراني دم والتنفّسي هواء.'},

  { id:'u4l2q16', unit:'unit4', lesson:'u4l2', page:162, type:'fillBlank', bloom:'apply', difficulty:'easy',
    question:'"الجهاز ___ يضخّ الدم."', paragraph:'الدوراني. (с162)', blanks:['الدوراني'], wordBank:['الدوراني','الهيكلي','التنفّسي'],
    explanation:'الدوراني يضخّ الدم.', goldenRule:'الدوراني = ضخّ الدم.'},

  { id:'u4l2q17', unit:'unit4', lesson:'u4l2', page:162, type:'matching', bloom:'understand', difficulty:'medium',
    question:'صِل الجهاز بوظيفته:', paragraph:'الأجهزة. (с162)',
    pairs:[{left:'الدوراني',right:'نقل الدم'},{left:'التنفّسي',right:'التنفّس'},{left:'القلب',right:'الضخّ'}],
    explanation:'الدوراني نقل الدم، التنفّسي التنفّس.', goldenRule:'كل جهاز له وظيفة.'},

  { id:'u4l2q18', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'العضو الذي يضخّ الدم:', paragraph:'القلب. (с162)', options:[{text:'القلب',correct:true},{text:'الرئة',correct:false},{text:'المعدة',correct:false},{text:'الكبد',correct:false}],
    explanation:'القلب يضخّ الدم في الجسم.', goldenRule:'القلب = مضخّة.'},

  { id:'u4l2q19', unit:'unit4', lesson:'u4l2', page:162, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'الرئتان يتبادلان الغازات.', paragraph:'الرئتان. (с162)', correctAnswer:true,
    explanation:'الرئتان تتبادلان الأكسجين وثاني أكسيد الكربون.', goldenRule:'الرئتان = تبادل الغازات.'},

  { id:'u4l2q20', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند التنفّس نأخذ:', paragraph:'التنفّس. (с162)', options:[{text:'الأكسجين',correct:true},{text:'الماء',correct:false},{text:'الطعام',correct:false},{text:'النار',correct:false}],
    explanation:'نأخذ الأكسجين ونطرد ثاني أكسيد الكربون.', goldenRule:'التنفّس = أكسجين.'},

  { id:'u4l2q21', unit:'unit4', lesson:'u4l2', page:162, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"الهواء يدخل من ___ ."', paragraph:'الأنف. (с162)', blanks:['الأنف'], wordBank:['الأنف','الفم','الأذن'],
    explanation:'الهواء يدخل من الأنف.', goldenRule:'الأنف باب الهواء.'},

  { id:'u4l2q22', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'analyze', difficulty:'hard',
    question:'لماذا يضخّ القلب الدم؟', paragraph:'القلب. (с162)', options:[{text:'لنقله لكل الجسم',correct:true},{text:'للزينة',correct:false},{text:'للتنفّس',correct:false},{text:'للهضم',correct:false}],
    explanation:'القلب يضخّ الدم لينقله لكل الجسم.', goldenRule:'القلب ينقل الغذاء والأكسجين.'},

  { id:'u4l2q23', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح طريقة للحفاظ على القلب:', paragraph:'القلب. (с162)', options:[{text:'التمرين',correct:true},{text:'الكسل',correct:false},{text:'التدخين',correct:false},{text:'الإجهاد',correct:false}],
    explanation:'التمرين يحفظ القلب.', goldenRule:'الرياضة تحفظ القلب.'},

  { id:'u4l2q24', unit:'unit4', lesson:'u4l2', page:162, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الدم يحمل الغذاء والأكسجين.', paragraph:'الدم. (с162)', correctAnswer:true,
    explanation:'الدم يحمل الغذاء والأكسجين للجسم.', goldenRule:'الدم = ناقل.'},

  { id:'u4l2q25', unit:'unit4', lesson:'u4l2', page:162, type:'classify', bloom:'apply', difficulty:'medium',
    question:'صنّف: يحافظ على القلب أم يضرّه؟', paragraph:'القلب. (с162)',
    categories:['يحافظ ✅','يضرّ ❌'],
    items:[{text:'التمرين',correct_category:0},{text:'التدخين',correct_category:1},{text:'الغذاء الصحي',correct_category:0},{text:'الإجهاد',correct_category:1},{text:'الراحة',correct_category:0},{text:'السهر',correct_category:1}],
    explanation:'يحافظ: تمرين، غذاء، راحة. يضرّ: تدخين، إجهاد، سهر.', goldenRule:'حفظ القلب واجب.'},

  { id:'u4l2q26', unit:'unit4', lesson:'u4l2', page:162, type:'matching', bloom:'apply', difficulty:'medium',
    question:'صِل العضو بوظيفته:', paragraph:'الأعضاء. (с162)',
    pairs:[{left:'القلب',right:'الضخّ'},{left:'الرئتان',right:'التنفّس'},{left:'الأوعية',right:'النقل'}],
    explanation:'القلب ضخّ، الرئتان تنفّس، الأوعية نقل.', goldenRule:'كل عضو له وظيفة.'},

  { id:'u4l2q27', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'understand', difficulty:'easy',
    question:'عدد الرئتين في جسم الإنسان:', paragraph:'الرئتان. (с162)', options:[{text:'2',correct:true},{text:'1',correct:false},{text:'4',correct:false},{text:'3',correct:false}],
    explanation:'للإنسان رئتان اثنتان.', goldenRule:'رئتان اثنتان.'},

  { id:'u4l2q28', unit:'unit4', lesson:'u4l2', page:162, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب دورة الدم:', paragraph:'الدوران. (с162)',
    items:['القلب','الأوعية','الجسم','القلب'], correctOrder:[0,1,2,3],
    explanation:'قلب ← أوعية ← جسم ← قلب.', goldenRule:'الدم يدور في الجسم.'},

  { id:'u4l2q29', unit:'unit4', lesson:'u4l2', page:162, type:'fillBlank', bloom:'remember', difficulty:'easy',
    question:'"الرئتان تقعان في ___ ."', paragraph:'الصدر. (с162)', blanks:['الصدر'], wordBank:['الصدر','البطن','الرأس'],
    explanation:'الرئتان في الصدر.', goldenRule:'الرئتان في الصدر.'},

  { id:'u4l2q30', unit:'unit4', lesson:'u4l2', page:162, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'القلب ينبض باستمرار.', paragraph:'القلب. (с162)', correctAnswer:true,
    explanation:'القلب ينبض دون توقّف.', goldenRule:'القلب لا يتوقّف.'},

  { id:'u4l2q31', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'remember', difficulty:'easy',
    question:'الجهاز المسؤول عن نقل الدم:', paragraph:'الدوراني. (с162)', options:[{text:'الدوراني',correct:true},{text:'الهيكلي',correct:false},{text:'التنفّسي',correct:false},{text:'العصبي',correct:false}],
    explanation:'الدوراني ينقل الدم.', goldenRule:'الدوراني = نقل الدم.'},

  { id:'u4l2q32', unit:'unit4', lesson:'u4l2', page:162, type:'classify', bloom:'analyze', difficulty:'hard',
    question:'صنّف: من الصدر أم البطن؟', paragraph:'الأعضاء. (с162)',
    categories:['من الصدر','من البطن'],
    items:[{text:'القلب',correct_category:0},{text:'المعدة',correct_category:1},{text:'الرئتان',correct_category:0},{text:'الكبد',correct_category:1},{text:'القصبة',correct_category:0},{text:'الأمعاء',correct_category:1}],
    explanation:'صدر: قلب، رئتان، قصبة. بطن: معدّة، كبد، أمعاء.', goldenRule:'الصدر للقلب والرئتين.'},

  { id:'u4l2q33', unit:'unit4', lesson:'u4l2', page:162, type:'matching', bloom:'understand', difficulty:'easy',
    question:'صِل الكلمة بمعناها:', paragraph:'المفردات. (с162)',
    pairs:[{left:'نبض',right:'دقّات'},{left:'ضخّ',right:'دفع'},{left:'تنفّس',right:'هواء'}],
    explanation:'نبض=دقّات، ضخّ=دفع، تنفّس=هواء.', goldenRule:'فهم المفردات أساس.'},

  { id:'u4l2q34', unit:'unit4', lesson:'u4l2', page:162, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"نطرد ثاني أكسيد ___ عند الزفير."', paragraph:'التنفّس. (с162)', blanks:['الكربون'], wordBank:['الكربون','الأكسجين','الهيدروجين'],
    explanation:'نطرد ثاني أكسيد الكربون.', goldenRule:'الزفير = طرد الكربون.'},

  { id:'u4l2q35', unit:'unit4', lesson:'u4l2', page:162, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الأوعية الدموية أنابيب تنقل الدم.', paragraph:'الأوعية. (с162)', correctAnswer:true,
    explanation:'الأوعية أنابيب تحمل الدم.', goldenRule:'الأوعية = أنابيب الدم.'},

  { id:'u4l2q36', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'اقترح طريقة للحفاظ على الرئتين:', paragraph:'الرئتان. (с162)', options:[{text:'الهواء النقي',correct:true},{text:'التدخين',correct:false},{text:'الغبار',correct:false},{text:'الإجهاد',correct:false}],
    explanation:'الهواء النقي يحفظ الرئتين.', goldenRule:'الهواء النقي يحفظ الرئتين.'},

  { id:'u4l2q37', unit:'unit4', lesson:'u4l2', page:162, type:'ordering', bloom:'create', difficulty:'hard',
    question:'رتّب خطوات التنفّس:', paragraph:'التنفّس. (с162)',
    items:['الشهيق','الدخول للرئتين','تبادل الغازات','الزفير'], correctOrder:[0,1,2,3],
    explanation:'شهيق ← دخول ← تبادل ← زفير.', goldenRule:'للتنفّس خطوات.'},

  { id:'u4l2q38', unit:'unit4', lesson:'u4l2', page:162, type:'classify', bloom:'evaluate', difficulty:'medium',
    question:'صنّف: يضرّ الرئتين أم يحفظهما؟', paragraph:'الرئتان. (с162)',
    categories:['يحفظ ✅','يضرّ ❌'],
    items:[{text:'الهواء النقي',correct_category:0},{text:'التدخين',correct_category:1},{text:'الرياضة',correct_category:0},{text:'الغبار',correct_category:1},{text:'الراحة',correct_category:0},{text:'الدخان',correct_category:1}],
    explanation:'يحفظ: هواء نقي، رياضة، راحة. يضرّ: تدخين، غبار، دخان.', goldenRule:'حفظ الرئتين واجب.'},

  { id:'u4l2q39', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'understand', difficulty:'medium',
    question:'القلب يقع في:', paragraph:'القلب. (с162)', options:[{text:'الصدر',correct:true},{text:'البطن',correct:false},{text:'الرأس',correct:false},{text:'اليد',correct:false}],
    explanation:'القلب في الصدر.', goldenRule:'القلب في الصدر.'},

  { id:'u4l2q40', unit:'unit4', lesson:'u4l2', page:162, type:'fillBlank', bloom:'apply', difficulty:'medium',
    question:'"الجهاز ___ مسؤول عن التنفّس."', paragraph:'التنفّسي. (с162)', blanks:['التنفّسي'], wordBank:['التنفّسي','الهيكلي','العصبي'],
    explanation:'التنفّسي مسؤول عن التنفّس.', goldenRule:'التنفّسي = التنفّس.'},

  { id:'u4l2q41', unit:'unit4', lesson:'u4l2', page:162, type:'trueFalse', bloom:'remember', difficulty:'easy',
    question:'الدم سائل أحمر.', paragraph:'الدم. (с162)', correctAnswer:true,
    explanation:'الدم سائل أحمر يجري في الأوعية.', goldenRule:'الدم أحمر سائل.'},

  { id:'u4l2q42', unit:'unit4', lesson:'u4l2', page:162, type:'matching', bloom:'evaluate', difficulty:'hard',
    question:'صِل التصرف بأثره:', paragraph:'الصحة. (с162)',
    pairs:[{left:'الرياضة',right:'قلب قوي'},{left:'التدخين',right:'رئة مريضة'},{left:'الغذاء',right:'جسم سليم'}],
    explanation:'الرياضة قلب قوي، التدخين رئة مريضة.', goldenRule:'كل تصرّف له أثر.'},

  { id:'u4l2q43', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'evaluate', difficulty:'medium',
    question:'أهمية الجهاز الدوراني:', paragraph:'الدوراني. (с162)', options:[{text:'نقل الغذاء والأكسجين',correct:true},{text:'اللعب',correct:false},{text:'النوم',correct:false},{text:'الزينة',correct:false}],
    explanation:'الدوراني ينقل الغذاء والأكسجين.', goldenRule:'الدوراني = نقل.'},

  { id:'u4l2q44', unit:'unit4', lesson:'u4l2', page:162, type:'ordering', bloom:'understand', difficulty:'medium',
    question:'رتّب أجهزة الجسم:', paragraph:'الأجهزة. (с160-162)',
    items:['الهيكلي','العضلي','الدوراني','التنفّسي'], correctOrder:[0,1,2,3],
    explanation:'هيكلي ← عضلي ← دوراني ← تنفّسي.', goldenRule:'أجهزة الجسم متكاملة.'},

  { id:'u4l2q45', unit:'unit4', lesson:'u4l2', page:162, type:'classify', bloom:'remember', difficulty:'easy',
    question:'صنّف: من التنفّسي أم لا؟', paragraph:'التنفّسي. (с162)',
    categories:['من التنفّسي','ليس منه'],
    items:[{text:'الرئتان',correct_category:0},{text:'القلب',correct_category:1},{text:'القصبة',correct_category:0},{text:'المعدة',correct_category:1},{text:'الأنف',correct_category:0},{text:'الكبد',correct_category:1}],
    explanation:'من التنفّسي: رئتان، قصبة، أنف.', goldenRule:'التنفّسي رئتان وأنف.'},

  { id:'u4l2q46', unit:'unit4', lesson:'u4l2', page:162, type:'fillBlank', bloom:'create', difficulty:'hard',
    question:'"أحفظ قلبي بالـ ___ ."', paragraph:'القلب. (с162)', blanks:['رياضة'], wordBank:['رياضة','تدخين','كسل'],
    explanation:'الرياضة تحفظ القلب.', goldenRule:'الرياضة تحفظ القلب.'},

  { id:'u4l2q47', unit:'unit4', lesson:'u4l2', page:162, type:'trueFalse', bloom:'evaluate', difficulty:'medium',
    question:'التنفّس ضروري للحياة.', paragraph:'التنفّس. (с162)', correctAnswer:true,
    explanation:'التنفّس ضروري لكل الكائنات.', goldenRule:'التنفّس = حياة.'},

  { id:'u4l2q48', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'apply', difficulty:'medium',
    question:'عند الجري يزيد:', paragraph:'التنفّس. (с162)', options:[{text:'سرعة التنفّس',correct:true},{text:'النوم',correct:false},{text:'الراحة',correct:false},{text:'الجوع',correct:false}],
    explanation:'الجري يزيد سرعة التنفّس.', goldenRule:'المجهود يزيد التنفّس.'},

  { id:'u4l2q49', unit:'unit4', lesson:'u4l2', page:162, type:'matching', bloom:'remember', difficulty:'easy',
    question:'صِل العضو بموضعه:', paragraph:'الأعضاء. (с162)',
    pairs:[{left:'القلب',right:'الصدر'},{left:'الرئتان',right:'الصدر'},{left:'المعدة',right:'البطن'}],
    explanation:'القلب والرئتان في الصدر، المعدة في البطن.', goldenRule:'لكل عضو موضع.'},

  { id:'u4l2q50', unit:'unit4', lesson:'u4l2', page:162, type:'fillBlank', bloom:'understand', difficulty:'easy',
    question:'"القلب يضخّ ___ في الجسم."', paragraph:'القلب. (с162)', blanks:['الدم'], wordBank:['الدم','الهواء','الطعام'],
    explanation:'القلب يضخّ الدم.', goldenRule:'القلب = ضخّ الدم.'},

  { id:'u4l2q51', unit:'unit4', lesson:'u4l2', page:162, type:'ordering', bloom:'apply', difficulty:'hard',
    question:'رتّب خطوات العناية بالجسم:', paragraph:'الصحة. (с162)',
    items:['الغذاء','الرياضة','الراحة','الفحص'], correctOrder:[0,1,2,3],
    explanation:'غذاء ← رياضة ← راحة ← فحص.', goldenRule:'للعناية خطوات.'},

  { id:'u4l2q52', unit:'unit4', lesson:'u4l2', page:162, type:'multipleChoice', bloom:'create', difficulty:'hard',
    question:'ألّف جملة عن الجهاز التنفّسي:', paragraph:'التنفّسي. (с162)', options:[{text:'التنفّسي ينسق الهواء',correct:true},{text:'التنفّسي يهضم',correct:false},{text:'التنفّسي يضخّ',correct:false},{text:'التنفّسي للزينة',correct:false}],
    explanation:'التنفّسي ينسق الهواء والتنفّس.', goldenRule:'التنفّسي = تنفّس.'},
];