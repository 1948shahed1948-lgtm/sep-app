/**
 * العلوم — الصف الثاني الابتدائي · الفصل الثاني
 * الوحدة الخامسة: المادة — الدرس الثاني: السوائل والغازات (ص 68-72)
 * أنواع الأسئلة: multiple_choice · true_false · ordering · matching · classify
 */

export const LIQUIDS_GASES_LESSON = {
  id: 'liquids_gases',
  title_ar: 'الدرس الثاني: السوائل والغازات',
  title_en: 'Lesson 2: Liquids and Gases',
  questions: [
    // اختيار من متعدد — السؤال الأساسي (ص 70)
    {
      type: 'multiple_choice',
      question_ar: 'ما السؤال الأساسي للدرس الثاني؟ (ص 70)',
      question_en: 'What is the essential question for Lesson 2? (p.70)',
      options_ar: [
        'ما خصائص السوائل والغازات؟',
        'ما خصائص المواد الصلبة؟',
        'كيف نقيس الكتلة؟',
        'ما هو الطفو؟',
      ],
      options_en: [
        'What are the properties of liquids and gases?',
        'What are the properties of solids?',
        'How do we measure mass?',
        'What is floating?',
      ],
      correct: 0,
      explanation_ar: 'السؤال الأساسي للدرس: ما خصائص السوائل والغازات؟ — سندرس خواص السوائل (تأخذ شكل الوعاء، تنساب) والغازات (تنتشر لتملأ المكان).',
    },
    // مطابقة — المفردات (ص 70)
    {
      type: 'matching',
      question_ar: 'صِل كل مفردة بتعريفها (مفردات الدرس ص 70):',
      question_en: 'Match each vocabulary term to its definition (Lesson vocabulary p.70):',
      pairs_ar: [
        { left: 'السائل', right: 'نوع من المادة يأخذ شكل الوعاء الذي يوضع فيه' },
        { left: 'الحجم', right: 'مقدار المكان الذي يشغله السائل' },
        { left: 'الغاز', right: 'مادة تنتشر فتملأ المكان الذي توجد فيه' },
      ],
      pairs_en: [
        { left: 'Liquid', right: 'A type of matter that takes the shape of its container' },
        { left: 'Volume', right: 'The amount of space a liquid occupies' },
        { left: 'Gas', right: 'A substance that spreads to fill its space' },
      ],
      explanation_ar: 'السائل: يأخذ شكل الوعاء. الحجم: مقدار المكان الذي يشغله السائل. الغاز: ينتشر ليملأ المكان.',
    },
    // اختيار من متعدد — ما السائل (ص 70)
    {
      type: 'multiple_choice',
      question_ar: 'ما السائل؟ (ص 70)',
      question_en: 'What is a liquid? (p.70)',
      options_ar: [
        'نوع من المادة يأخذ شكل الوعاء الذي يوضع فيه',
        'مادة لها شكل محدد خاص بها',
        'مادة تنتشر لتملأ المكان',
        'مادة ليس لها كتلة',
      ],
      options_en: [
        'A type of matter that takes the shape of its container',
        'A material with a specific shape of its own',
        'A material that spreads to fill space',
        'A material with no mass',
      ],
      correct: 0,
      explanation_ar: 'السائل نوع من المادة يأخذ شكل الوعاء الذي يوضع فيه. وإذا لم توضع السوائل في وعاء فإنها تنساب ولا تأخذ شكلاً محدداً.',
    },
    // صح أم خطأ — السوائل لها كتلة (ص 70)
    {
      type: 'true_false',
      question_ar: 'جميع السوائل لها كتلة. (ص 70)',
      question_en: 'All liquids have mass. (p.70)',
      correct: 'true',
      explanation_ar: 'جميع السوائل لها كتلة — بعضها خفيف كالحليب، وبعضها الآخر غليظ كالعسل.',
    },
    // تصنيف — خفيف أم غليظ (ص 70)
    {
      type: 'classify',
      question_ar: 'صنّف كل سائل إلى: خفيف أو غليظ (ص 70):',
      question_en: 'Classify each liquid as: light OR thick (p.70):',
      categories_ar: ['خفيف', 'غليظ'],
      categories_en: ['Light', 'Thick'],
      items_ar: ['الحليب', 'العسل', 'الماء', 'شراب القيقب', 'العصير'],
      items_en: ['Milk', 'Honey', 'Water', 'Maple syrup', 'Juice'],
      correct_categories: [0, 1, 0, 1, 0],
      explanation_ar: 'بعض السوائل خفيف كالحليب والماء والعصير، وبعضها الآخر غليظ كالعسل وشراب القيقب.',
    },
    // اختيار من متعدد — ماذا يحدث للسوائل بلا وعاء (ص 70)
    {
      type: 'multiple_choice',
      question_ar: 'ماذا يحدث للسوائل إذا لم توضع في وعاء؟ (ص 70)',
      question_en: 'What happens to liquids if they are not placed in a container? (p.70)',
      options_ar: [
        'تنساب ولا تأخذ شكلاً محدداً',
        'تبقى ثابتة في مكانها',
        'تتحول إلى مواد صلبة',
        'تأخذ شكلاً محدداً دائماً',
      ],
      options_en: [
        'They flow and do not take a specific shape',
        'They stay fixed in place',
        'They turn into solids',
        'They always take a specific shape',
      ],
      correct: 0,
      explanation_ar: 'إذا لم توضع السوائل في وعاء فإنها تنساب ولا تأخذ شكلاً محدداً — لذلك نحتاج إلى وعاء للاحتفاظ بها.',
    },
    // اختيار من متعدد — تعريف الحجم (ص 70)
    {
      type: 'multiple_choice',
      question_ar: 'ما الحجم؟ (ص 70)',
      question_en: 'What is volume? (p.70)',
      options_ar: [
        'مقدار المكان الذي يشغله السائل',
        'وزن السائل على الميزان',
        'لون السائل',
        'شكل الوعاء',
      ],
      options_en: [
        'The amount of space a liquid occupies',
        'The weight of a liquid on a scale',
        'The color of the liquid',
        'The shape of the container',
      ],
      correct: 0,
      explanation_ar: 'مقدار المكان الذي يشغله السائل يُسمّى الحجم — ويُقاس بأدوات مثل الكأس المُدرّجة أو المخبار المُدرّج.',
    },
    // مطابقة — أدوات قياس الحجم (ص 70)
    {
      type: 'matching',
      question_ar: 'صِل كل أداة باستخدامها في قياس السوائل (ص 70):',
      question_en: 'Match each tool to its use in measuring liquids (p.70):',
      pairs_ar: [
        { left: 'الكأس المُدرّجة', right: 'تُستخدم لقياس حجم السائل' },
        { left: 'المخبار المُدرّج', right: 'يُستخدم لقياس حجم السائل' },
        { left: 'المليلتر', right: 'وحدة قياس حجم السائل' },
      ],
      pairs_en: [
        { left: 'Graduated cup', right: 'Used to measure liquid volume' },
        { left: 'Graduated cylinder', right: 'Used to measure liquid volume' },
        { left: 'Milliliter', right: 'Unit for measuring liquid volume' },
      ],
      explanation_ar: 'لقياس حجم السائل نستخدم كأساً مُدرّجة أو مخباراً مُدرّجاً، ويُقاس حجم السائل بوحدة المليلتر.',
    },
    // اختيار من متعدد — وحدة قياس حجم السائل (ص 70)
    {
      type: 'multiple_choice',
      question_ar: 'بأي وحدة يُقاس حجم السائل؟ (ص 70)',
      question_en: 'In what unit is liquid volume measured? (p.70)',
      options_ar: ['المليلتر', 'السنتيمتر', 'الكيلوجرام', 'الثانية'],
      options_en: ['Milliliter', 'Centimeter', 'Kilogram', 'Second'],
      correct: 0,
      explanation_ar: 'يُقاس حجم السائل بوحدة المليلتر — باستخدام الكأس المُدرّجة أو المخبار المُدرّج.',
    },
    // اختيار من متعدد — أقرأ الصورة: الكأسان (ص 71)
    {
      type: 'multiple_choice',
      question_ar: 'أقرأ الصورة: كأسا القياس يتّسعان للكمية نفسها من السائل، ولكن أحد الكأسين يحتوي على كمية أكبر. كيف نعرف ذلك؟ (ص 70-71)',
      question_en: 'Read the picture: Two measuring cups hold the same amount of liquid, but one contains a larger quantity. How do we know? (p.70-71)',
      options_ar: [
        'نقرأ مستوى السائل على التدريج في كل كأس بالمليلتر',
        'ننظر إلى لون السائل فقط',
        'نقيس كتلة الكأس',
        'ننظر إلى حجم الكأس نفسه',
      ],
      options_en: [
        'We read the liquid level on the graduation of each cup in milliliters',
        'We look only at the liquid color',
        'We measure the mass of the cup',
        'We look at the cup size itself',
      ],
      correct: 0,
      explanation_ar: 'كأسا القياس يتّسعان للكمية نفسها، لكن نعرف الكمية الأكبر بقراءة مستوى السائل على التدريج بالمليلتر في كل كأس.',
    },
    // اختيار من متعدد — كم مليلتراً (ص 71)
    {
      type: 'multiple_choice',
      question_ar: 'في الصورة (ص 71): كأس يحتوي على سائل بين 400 و 500 مل، وكأس آخر بين 50 و 100 مل. أيُّهما يحتوي على كمية أكبر؟',
      question_en: 'In the picture (p.71): one cup holds liquid between 400-500 ml, another between 50-100 ml. Which holds more?',
      options_ar: ['الكأس الأول (400-500 مل)', 'الكأس الثاني (50-100 مل)', 'كلاهما متساويان', 'لا يمكن معرفته'],
      options_en: ['The first cup (400-500 ml)', 'The second cup (50-100 ml)', 'Both are equal', 'Cannot be determined'],
      correct: 0,
      explanation_ar: 'الكأس الأول يحتوي على 400-500 مل وهو أكبر من الكأس الثاني (50-100 مل) — نعرف ذلك بقراءة التدريج على كل كأس.',
    },
    // صح أم خطأ — حقيقة: جميع حالات المادة لها حجم (ص 71)
    {
      type: 'true_false',
      question_ar: 'حقيقة: المواد الصلبة والسائلة والغازات لها حجم. (ص 71)',
      question_en: 'Fact: Solids, liquids, and gases have volume. (p.71)',
      correct: 'true',
      explanation_ar: 'حقيقة علمية: المواد الصلبة والسائلة والغازات لها حجم — أي أن كل مادة تشغل مكاناً في الفضاء.',
    },
    // اختيار من متعدد — ما الغاز (ص 71)
    {
      type: 'multiple_choice',
      question_ar: 'ما الغاز؟ (ص 71)',
      question_en: 'What is a gas? (p.71)',
      options_ar: [
        'مادة تنتشر فتملأ المكان الذي توجد فيه',
        'مادة لها شكل محدد خاص بها',
        'مادة تأخذ شكل الوعاء',
        'مادة ليس لها كتلة',
      ],
      options_en: [
        'A substance that spreads to fill the space it is in',
        'A material with a specific shape of its own',
        'A material that takes the shape of its container',
        'A material with no mass',
      ],
      correct: 0,
      explanation_ar: 'الغاز مادة تنتشر فتملأ المكان الذي توجد فيه — مثل الهواء الذي نتنفّسه.',
    },
    // اختيار من متعدد — الهواء والغازات (ص 71)
    {
      type: 'multiple_choice',
      question_ar: 'ممّ يتكوّن الهواء الذي نتنفّسه؟ (ص 71)',
      question_en: 'What is the air we breathe made of? (p.71)',
      options_ar: [
        'عدة غازات، أحداها غاز الأكسجين',
        'ماء فقط',
        'غاز واحد فقط',
        'مواد صلبة',
      ],
      options_en: [
        'Several gases, one of which is oxygen gas',
        'Only water',
        'Only one gas',
        'Solid materials',
      ],
      correct: 0,
      explanation_ar: 'الهواء الذي نتنفّسه يتكوّن من عدة غازات، أحدها غاز الأكسجين — لا نرى الغازات ولكنها موجودة في كل مكان حولنا.',
    },
    // صح أم خطأ — لا نرى الغازات (ص 71)
    {
      type: 'true_false',
      question_ar: 'لا نرى الغازات في الهواء، ولكنها موجودة في كل مكان حولنا. (ص 71)',
      question_en: 'We do not see gases in the air, but they are present everywhere around us. (p.71)',
      correct: 'true',
      explanation_ar: 'لا نرى الغازات في الهواء ولكنها موجودة في كل مكان — نعرف وجودها عندما يمتلئ بها بالون أو كرة، أو نحسّ بالهواء عندما تهبّ الرياح.',
    },
    // مطابقة — كيف نعرف وجود الغازات (ص 71)
    {
      type: 'matching',
      question_ar: 'صِل كل حالة بدليل وجود الغاز (ص 71):',
      question_en: 'Match each situation to the evidence of gas presence (p.71):',
      pairs_ar: [
        { left: 'يمتلئ بالون بالغاز', right: 'نعرف أن الغاز موجود بداخله' },
        { left: 'تمتلئ كرة بالغاز', right: 'نعرف أن الغاز موجود بداخلها' },
        { left: 'تهبّ الرياح', right: 'نحسّ بالهواء (الغاز) متحركاً' },
      ],
      pairs_en: [
        { left: 'A balloon fills with gas', right: 'We know gas is inside it' },
        { left: 'A ball fills with gas', right: 'We know gas is inside it' },
        { left: 'The wind blows', right: 'We feel the air (gas) moving' },
      ],
      explanation_ar: 'نعرف وجود الغازات: عندما يمتلئ بها بالون أو كرة، أو عندما نحسّ بالهواء عند هبوب الرياح.',
    },
    // ترتيب — نشاط تصنيف المواد (ص 72)
    {
      type: 'ordering',
      question_ar: 'رتّب خطوات نشاط تصنيف المواد إلى صلبة أو سائلة أو غازية (ص 72):',
      question_en: 'Order the steps of the activity to classify materials as solid, liquid, or gas (p.72):',
      items_ar: [
        'أملأ أوعية بأنواع مختلفة من المادة',
        'أطلب إلى أحد أفراد مجموعتي أن يلاحظها',
        'يُصنّفها زميلي إلى صلبة أو سائلة أو غازية',
        'نتحقق من صحة التصنيف معاً',
      ],
      items_en: [
        'Fill containers with different types of matter',
        'Ask a group member to observe them',
        'My teammate classifies them as solid, liquid, or gas',
        'We verify the classification together',
      ],
      explanation_ar: 'نشاط التصنيف: ملء أوعية بأنواع مختلفة من المادة ← يلاحظها زميلي ← يُصنّفها (صلبة/سائلة/غازية) ← التحقق معاً.',
    },
    // تصنيف — أمثلة على حالات المادة (ص 70-72)
    {
      type: 'classify',
      question_ar: 'صنّف كل مادة إلى: صلبة / سائلة / غازية (ص 70-72):',
      question_en: 'Classify each material as: solid / liquid / gas (p.70-72):',
      categories_ar: ['مادة صلبة', 'مادة سائلة', 'مادة غازية'],
      categories_en: ['Solid', 'Liquid', 'Gas'],
      items_ar: ['الحجر', 'الحليب', 'الأكسجين', 'العسل', 'الهواء', 'الزجاج', 'الماء', 'بخار الماء'],
      items_en: ['Stone', 'Milk', 'Oxygen', 'Honey', 'Air', 'Glass', 'Water', 'Water vapor'],
      correct_categories: [0, 1, 2, 1, 2, 0, 1, 2],
      explanation_ar: 'صلبة: الحجر، الزجاج. سائلة: الحليب، العسل، الماء. غازية: الأكسجين، الهواء، بخار الماء.',
    },
    // مطابقة — خصائص حالات المادة (ص 70-72)
    {
      type: 'matching',
      question_ar: 'صِل كل حالة من المادة بخاصيتها (ص 70-72):',
      question_en: 'Match each state of matter to its property (p.70-72):',
      pairs_ar: [
        { left: 'الصلب', right: 'له شكل محدد خاص به' },
        { left: 'السائل', right: 'يأخذ شكل الوعاء وينساب إذا لم يُوضع فيه' },
        { left: 'الغاز', right: 'ينتشر ليملأ المكان الذي يوجد فيه' },
      ],
      pairs_en: [
        { left: 'Solid', right: 'Has a specific shape of its own' },
        { left: 'Liquid', right: 'Takes the shape of its container and flows if not contained' },
        { left: 'Gas', right: 'Spreads to fill the space it is in' },
      ],
      explanation_ar: 'الصلب: شكل محدد. السائل: يأخذ شكل الوعاء وينساب. الغاز: ينتشر ليملأ المكان.',
    },
    // ترتيب — نشاط استكشف: الماء في أوعية مختلفة الأشكال (ص 68-69)
    {
      type: 'ordering',
      question_ar: 'رتّب خطوات نشاط "أستكشف: ماذا يحدث للماء في الأوعية الزجاجية ذات الأشكال المختلفة؟" (ص 68-69):',
      question_en: 'Order the steps of the "Explore: What happens to water in glass containers of different shapes?" activity (p.68-69):',
      items_ar: [
        'أضع الأوعية الزجاجية في وعاء عميق',
        'أقيس مقدار كوب من الماء الملوّن باستعمال كأس القياس',
        'أسكب الماء في الوعاء الأول وأعيّن مستوى ارتفاعه',
        'أتوقع: ما ارتفاع نفس الكمية في الأوعية الأخرى؟',
        'أسكب كأساً واحدة في كل وعاء وأضع علامة عند المستوى',
        'أستخلص النتائج: هل كانت توقعاتي صحيحة؟',
      ],
      items_en: [
        'Place the glass containers in a deep container',
        'Measure a cup of colored water using the measuring cup',
        'Pour the water into the first container and mark its height level',
        'Predict: what will be the height of the same amount in the other containers?',
        'Pour one cup into each container and mark the level',
        'Draw conclusions: were my predictions correct?',
      ],
      explanation_ar: 'نشاط استكشف: وضع الأوعية في وعاء عميق ← قياس كوب ماء ملوّن ← سكبه في الوعاء الأول وتعيّن المستوى ← التوقع ← التكرار مع بقية الأوعية ← استخلاص النتائج.',
    },
    // اختيار من متعدد — أدوات نشاط استكشف (ص 68)
    {
      type: 'multiple_choice',
      question_ar: 'ما الأدوات التي أحتاجها لنشاط "أستكشف" عن الماء في الأوعية؟ (ص 68)',
      question_en: 'What tools do I need for the water-in-containers "Explore" activity? (p.68)',
      options_ar: [
        'كأس قياس وأوعية زجاجية مختلفة ووعاء عميق',
        'مسطرة وميزان',
        'مصباح وكرة',
        'مغناطيس ودبابيس',
      ],
      options_en: [
        'A measuring cup, different glass containers, and a deep container',
        'A ruler and a balance',
        'A flashlight and a ball',
        'A magnet and pins',
      ],
      correct: 0,
      explanation_ar: 'أحتاج إلى: كأس قياس + أوعية زجاجية مختلفة الأشكال + وعاء عميق — لاختبار ماذا يحدث للماء في أوعية مختلفة الأشكال.',
    },
    // اختيار من متعدد — استنتاج نشاط استكشف (ص 69)
    {
      type: 'multiple_choice',
      question_ar: 'ماذا نستنتج من نشاط سكب نفس كمية الماء في أوعية مختلفة الأشكال؟ (ص 69)',
      question_en: 'What do we conclude from pouring the same amount of water into containers of different shapes? (p.69)',
      options_ar: [
        'السائل يأخذ شكل الوعاء ولكن حجمه يبقى ثابتاً — مستوى الارتفاع يختلف باختلاف شكل الوعاء',
        'حجم السائل يتغير مع شكل الوعاء',
        'السائل لا يأخذ شكل الوعاء',
        'جميع الأوعية لها نفس مستوى الارتفاع',
      ],
      options_en: [
        'The liquid takes the shape of the container but its volume stays fixed — the height level differs by container shape',
        'The liquid volume changes with container shape',
        'The liquid does not take the container shape',
        'All containers have the same height level',
      ],
      correct: 0,
      explanation_ar: 'الاستنتاج: السائل يأخذ شكل الوعاء الذي يوضع فيه، ولكن حجمه يبقى ثابتاً — لذلك يختلف مستوى ارتفاع السائل باختلاف شكل الوعاء رغم ثبات الكمية.',
    },
    // اختيار من متعدد — استكشف أكثر: العصير بدل الماء (ص 69)
    {
      type: 'multiple_choice',
      question_ar: 'أستكشف أكثر: هل تتغير نتيجة النشاط إذا استخدمت العصير بدلاً من الماء؟ لماذا؟ (ص 69)',
      question_en: 'Explore more: Does the result change if I use juice instead of water? Why? (p.69)',
      options_ar: [
        'لا تتغير النتيجة — العصير سائل يأخذ شكل الوعاء مثل الماء وحجمه ثابت',
        'تتغير النتيجة لأن العصير له شكل محدد',
        'تتغير النتيجة لأن العصير غازي',
        'لا يمكن سكب العصير في الأوعية',
      ],
      options_en: [
        'The result does not change — juice is a liquid that takes the container shape like water, with fixed volume',
        'The result changes because juice has a specific shape',
        'The result changes because juice is a gas',
        'Juice cannot be poured into containers',
      ],
      correct: 0,
      explanation_ar: 'لا تتغير نتيجة النشاط باستخدام العصير — لأن العصير سائل مثل الماء، يأخذ شكل الوعاء ويبقى حجمه ثابتاً. اختلاف لون أو كثافة السائل لا يغيّر خاصيته.',
    },
    // اختيار من متعدد — أنظر وأتساءل (ص 68)
    {
      type: 'multiple_choice',
      question_ar: 'أنظر وأتساءل (ص 68): أيُّ الأوعية يحتوي على أكبر كمية من السائل؟ ولماذا؟',
      question_en: 'Look and wonder (p.68): Which container holds the largest amount of liquid? And why?',
      options_ar: [
        'الوعاء الذي يظهر فيه مستوى السائل أعلى على التدريج بالمليلتر',
        'الوعاء الأصغر حجماً دائماً',
        'الوعاء الأكبر حجماً دائماً',
        'لا يمكن معرفة ذلك',
      ],
      options_en: [
        'The container showing the highest liquid level on the graduation in milliliters',
        'Always the smallest container',
        'Always the largest container',
        'Cannot be determined',
      ],
      correct: 0,
      explanation_ar: 'نعرف الوعاء الذي يحتوي على أكبر كمية من السائل بقراءة مستوى السائل على التدريج بالمليلتر — وليس بمجرد النظر إلى حجم الوعاء نفسه.',
    },
    // صح أم خطأ — السائل يأخذ شكل الوعاء (ص 70)
    {
      type: 'true_false',
      question_ar: 'السائل يأخذ شكل الوعاء الذي يوضع فيه.',
      question_en: 'A liquid takes the shape of the container it is placed in.',
      correct: 'true',
      explanation_ar: 'السائل نوع من المادة يأخذ شكل الوعاء الذي يوضع فيه — وهذا ما يميزه عن المادة الصلبة التي لها شكل محدد خاص بها.',
    },

    /* ─── أقرأ الصورة (ص 73): البالون المنفوخ وغير المنفوخ وكتلة الغاز ─── */
    {
      type: 'multiple_choice',
      question_ar: 'أقرأ الصورة (ص 73): العصا تعمل عمل الميزان. كتلة البالون المنفوخ أكبر من كتلة البالون غير المنفوخ. ماذا يثبت ذلك؟',
      question_en: 'Read the picture (p.73): The stick acts as a balance. The inflated balloon is heavier than the deflated one. What does this prove?',
      options_ar: [
        'أن للغاز كتلة — البالون المنفوخ أثقل لأن به غازاً أكثر',
        'أن الغاز ليس له كتلة',
        'أن البالون المنفوخ أكبر حجماً فقط',
        'أن الغاز أخف من الهواء دائماً',
      ],
      options_en: [
        'Gas has mass — the inflated balloon is heavier because it contains more gas',
        'Gas has no mass',
        'The inflated balloon is only larger in size',
        'Gas is always lighter than air',
      ],
      correct: 0,
      explanation_ar: 'صورة ص 73 تثبت أن للغاز كتلة: العصا تعمل عمل الميزان، والبالون المنفوخ (به غاز أكثر) يكون أثقل وزناً من البالون غير المنفوخ.',
    },
    // اختيار من متعدد — كيف أعرف أن للغاز كتلة (ص 73)
    {
      type: 'multiple_choice',
      question_ar: 'كيف أعرف أن للغاز كتلة؟ (ص 73)',
      question_en: 'How do I know that gas has mass? (p.73)',
      options_ar: [
        'أنظر إلى الصورة: البالون المنفوخ أكبر كتلة من البالون غير المنفوخ',
        'الغاز ليس له كتلة أبداً',
        'أقيس الغاز بالمسطرة',
        'أشمّ الغاز لأعرف كتلته',
      ],
      options_en: [
        'I look at the picture: the inflated balloon has more mass than the deflated one',
        'Gas has no mass at all',
        'I measure gas with a ruler',
        'I smell the gas to know its mass',
      ],
      correct: 0,
      explanation_ar: 'أعرف أن للغاز كتلة من الصورة: البالون المنفوخ أكبر كتلة من البالون غير المنفوخ — لأن الغاز الذي داخل البالون يُضيف كتلة إليه.',
    },
    // اختيار من متعدد — أفكر وأتحدث وأكتب: تصنيف مواد المطبخ (ص 73)
    {
      type: 'multiple_choice',
      question_ar: 'أُصنّف: أعمل قائمة بالأشياء الموجودة في مطبخ منزلنا، ثم أُصنّفها. أيُّ الأنواع الثلاثة موجود في المطبخ؟ (ص 73)',
      question_en: 'Classify: I list things in my kitchen and classify them. Which of the three types are found in the kitchen? (p.73)',
      options_ar: [
        'الأنواع الثلاثة موجودة: صلبة (أواني، ملاعق)، سائلة (ماء، زيت، عصير)، غازية (هواء، بخار)',
        'الصلبة فقط',
        'السائلة فقط',
        'الغازية فقط',
      ],
      options_en: [
        'All three types: solids (pots, spoons), liquids (water, oil, juice), gases (air, steam)',
        'Solids only',
        'Liquids only',
        'Gases only',
      ],
      correct: 0,
      explanation_ar: 'في مطبخ المنزل الأنواع الثلاثة موجودة: مواد صلبة (أواني، ملاعق، خضروات)، مواد سائلة (ماء، زيت، عصير)، مواد غازية (هواء، بخار الماء عند الطهي).',
    },
    // اختيار من متعدد — فيمَ يختلف الغاز عن السائل (ص 73)
    {
      type: 'multiple_choice',
      question_ar: 'فيمَ يختلف الغاز عن السائل؟ (ص 73 — أفكر وأتحدث وأكتب)',
      question_en: 'In what way does a gas differ from a liquid? (p.73 — Think, Talk, and Write)',
      options_ar: [
        'الغاز ينتشر ليملأ المكان كله، أما السائل فيأخذ شكل الوعاء ويبقى في الأسفل',
        'الغاز والسائل متماثلان تماماً',
        'السائل ينتشر ليملأ المكان والغاز يأخذ شكل الوعاء',
        'كلاهما لا كتلة لهما',
      ],
      options_en: [
        'Gas spreads to fill all the space, while liquid takes the container shape and stays at the bottom',
        'Gas and liquid are exactly alike',
        'Liquid spreads to fill space and gas takes the container shape',
        'Both have no mass',
      ],
      correct: 0,
      explanation_ar: 'الفرق الرئيسي: الغاز ينتشر ليملأ المكان الذي يوجد فيه كله، بينما السائل يأخذ شكل الوعاء ويبقى في الجزء السفلي منه.',
    },
    // العلوم والصحة (ص 73)
    {
      type: 'multiple_choice',
      question_ar: 'العلوم والصحة (ص 73): أعمل قائمة بسوائل مفيدة لصحتي. ما أهمّ هذه السوائل؟',
      question_en: 'Science and Health (p.73): I make a list of liquids beneficial to my health. What is the most important?',
      options_ar: [
        'الماء — ضروري لجميع وظائف الجسم وأهم سائل لصحة الإنسان',
        'العصائر الاصطناعية فقط',
        'المشروبات الغازية',
        'الشاي فقط',
      ],
      options_en: [
        'Water — essential for all body functions and the most important liquid for human health',
        'Only artificial juices',
        'Carbonated drinks',
        'Only tea',
      ],
      correct: 0,
      explanation_ar: 'الماء هو أهم السوائل لصحة الإنسان — ضروري لجميع وظائف الجسم. كما يُفيد الحليب وعصير الفواكه الطبيعي صحتنا.',
    },

    /* ─── مراجعة الفصل التاسع (ص 75-77) ─── */
    // مطابقة — المفردات (مراجعة ص 75)
    {
      type: 'matching',
      question_ar: 'أكمل الجمل بالكلمة المناسبة من المفردات (مراجعة ص 75): الغاز / حجماً / الصلبة / السائل',
      question_en: 'Complete each sentence with the correct word (Review p.75): Gas / Volume / Solid / Liquid',
      pairs_ar: [
        { left: 'المادة التي لا نراها وتنتشر لتشغل المكان الذي توجد فيه تُسمّى', right: 'الغاز' },
        { left: 'المادة التي لها شكل محدد خاص بها', right: 'الصلبة' },
        { left: 'المادة التي تسيل وتأخذ شكل الوعاء الذي توجد فيه تُسمّى', right: 'السائل' },
        { left: 'تسع القارورة اليُمنى أقلّ من الماء مقارنةً بالقارورة اليُسرى — بمعنى أن', right: 'حجماً أقل' },
      ],
      pairs_en: [
        { left: 'The matter we cannot see that spreads to fill its space is called', right: 'Gas' },
        { left: 'The matter with a specific shape of its own is called', right: 'Solid' },
        { left: 'The matter that flows and takes the shape of its container is called', right: 'Liquid' },
        { left: 'The right bottle holds less water than the left one — meaning it has', right: 'Less volume' },
      ],
      explanation_ar: 'مفردات مراجعة الفصل التاسع: الغاز (ينتشر لا يُرى)، الصلبة (شكل محدد)، السائل (يتدفق ويأخذ شكل الوعاء)، حجم (مقدار المكان).',
    },
    // اختيار من متعدد — المهارات والأفكار العلمية: الكرتان في الميزان (مراجعة ص 76)
    {
      type: 'multiple_choice',
      question_ar: 'أُسجّل البيانات (مراجعة ص 76): كرتان في الميزان — فيمَ تتشابهان وفيمَ تختلفان؟ أيُّهما أكبر كتلة؟',
      question_en: 'Record data (Review p.76): Two balls on a balance — how are they similar and different? Which has greater mass?',
      options_ar: [
        'تتشابهان في الشكل الكروي — تختلفان في الحجم واللون والكتلة. الكرة التي تميل إليها الكفة أكبر كتلة',
        'الكرتان متساويتان في كل شيء',
        'الكرة الأصغر دائماً أثقل',
        'لا يمكن معرفة أيهما أكبر كتلة بالميزان',
      ],
      options_en: [
        'Both are spherical — they differ in size, color, and mass. The ball that tilts the pan downward has greater mass',
        'The two balls are equal in everything',
        'The smaller ball is always heavier',
        'We cannot tell which has greater mass from a balance',
      ],
      correct: 0,
      explanation_ar: 'الكرتان في الميزان: تتشابهان في الشكل الكروي وتختلفان في الحجم واللون والكتلة. الكفة التي تميل للأسفل تحمل الكرة الأثقل (الأكبر كتلة).',
    },
    // اختيار من متعدد — الأدوات المستخدمة لقياس المادة (مراجعة ص 76)
    {
      type: 'multiple_choice',
      question_ar: 'أُلخّص: ما الأدوات التي يمكن استخدامها لقياس المادة؟ (مراجعة ص 76)',
      question_en: 'Summarize: What tools can be used to measure matter? (Review p.76)',
      options_ar: [
        'المسطرة (طول/عرض/ارتفاع)، الميزان ذو الكفتين (كتلة الصلب)، الكأس المُدرّجة أو المخبار (حجم السائل)',
        'المسطرة فقط',
        'الميزان فقط',
        'المخبار فقط',
      ],
      options_en: [
        'Ruler (length/width/height), two-pan balance (solid mass), graduated cup or cylinder (liquid volume)',
        'Ruler only',
        'Balance only',
        'Cylinder only',
      ],
      correct: 0,
      explanation_ar: 'أدوات قياس المادة: المسطرة (طول/عرض/ارتفاع بالسنتيمتر)، الميزان ذو الكفتين (كتلة المادة الصلبة)، الكأس المُدرّجة أو المخبار (حجم السائل بالمليلتر).',
    },
    // مطابقة — أقارن خواص مادتين صلبتين (مراجعة ص 76-77)
    {
      type: 'matching',
      question_ar: 'أقارن خواص المادتين الصلبتين (خيوط ملونة وصخر) كما في مراجعة ص 76:',
      question_en: 'Compare the properties of two solid materials (colored thread and rock) as in Review p.76:',
      pairs_ar: [
        { left: 'الخيوط الملونة', right: 'ناعمة — ملونة — طويلة ورفيعة — مرنة' },
        { left: 'الصخر', right: 'قاسٍ — خشن — منقّط — صلب' },
        { left: 'الخيوط والصخر معاً', right: 'كلاهما مادة صلبة لها شكل محدد وكتلة' },
      ],
      pairs_en: [
        { left: 'Colored threads', right: 'Soft — colored — long and thin — flexible' },
        { left: 'Rock', right: 'Hard — rough — speckled — solid' },
        { left: 'Threads and rock together', right: 'Both are solid with a fixed shape and mass' },
      ],
      explanation_ar: 'المقارنة: الخيوط ناعمة ومرنة، الصخر قاسٍ وخشن. يتشابهان في أنهما صلبان لهما شكل محدد وكتلة.',
    },
    // اختيار من متعدد — ما نوع المادة التي تملأ البالونات (مراجعة ص 77)
    {
      type: 'multiple_choice',
      question_ar: 'ما نوع المادة التي تملأ هذه البالونات؟ (مراجعة ص 77)',
      question_en: 'What type of matter fills these balloons? (Review p.77)',
      options_ar: ['غاز', 'سائل', 'صلبة', 'بلاستيك'],
      options_en: ['Gas', 'Liquid', 'Solid', 'Plastic'],
      correct: 0,
      explanation_ar: 'البالونات تمتلئ بالغاز — الغاز مادة تنتشر وتملأ المكان الذي توجد فيه، ومنها الهواء والهيليوم الذي يُستخدم في البالونات.',
    },
    // اختيار من متعدد — الفكرة العامة: أنواع المواد المختلفة (مراجعة ص 77)
    {
      type: 'multiple_choice',
      question_ar: 'الفكرة العامة: ما أنواع المواد المختلفة؟ (مراجعة ص 77)',
      question_en: 'Main idea: What are the different types of matter? (Review p.77)',
      options_ar: [
        'ثلاثة أنواع: المادة الصلبة (شكل محدد)، السائل (يأخذ شكل الوعاء)، الغاز (ينتشر ليملأ المكان)',
        'نوعان فقط: صلب وسائل',
        'نوع واحد فقط: المادة الصلبة',
        'أربعة أنواع',
      ],
      options_en: [
        'Three types: solid (specific shape), liquid (takes container shape), gas (spreads to fill space)',
        'Only two: solid and liquid',
        'Only one: solid matter',
        'Four types',
      ],
      correct: 0,
      explanation_ar: 'الفكرة العامة للفصل التاسع: المادة ثلاثة أنواع — الصلب (له شكل محدد)، السائل (يأخذ شكل الوعاء وينساب)، الغاز (ينتشر ليملأ المكان).',
    },

    /* ─── العلوم والرياضيات: قياس حجم العصير بكأسين (ص 74) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'العلوم والرياضيات (ص 74): وضع سعيد بعض العصير في كأسي قياس. الكأس (أ) فيها 200 مل والكأس (ب) فيها 100 مل من العصير. ما الفرق بين حجمي العصير في الكأسين؟',
      question_en: 'Science and Math (p.74): Saeed put juice in two measuring cups. Cup (A) has 200 ml and cup (B) has 100 ml of juice. What is the difference between the volumes?',
      options_ar: ['100 مليلتر', '200 مليلتر', '300 مليلتر', '50 مليلتر'],
      options_en: ['100 milliliters', '200 milliliters', '300 milliliters', '50 milliliters'],
      correct: 0,
      explanation_ar: 'الكأس (أ) = 200 مل، الكأس (ب) = 100 مل. الفرق = 200 - 100 = 100 مليلتر.',
    },
    // اختيار من متعدد — أيُّ الكأسين أكبر حجماً (ص 74)
    {
      type: 'multiple_choice',
      question_ar: 'العلوم والرياضيات (ص 74): أيُّ الكأسين أكبر حجماً من العصير؟',
      question_en: 'Science and Math (p.74): Which cup has a larger volume of juice?',
      options_ar: ['الكأس (أ) — فيها 200 مل وهو أكبر من 100 مل في الكأس (ب)', 'الكأس (ب)', 'كلاهما متساويان', 'لا يمكن معرفته'],
      options_en: ['Cup (A) — it has 200 ml which is more than the 100 ml in cup (B)', 'Cup (B)', 'Both are equal', 'Cannot be determined'],
      correct: 0,
      explanation_ar: '200 مل > 100 مل — إذن الكأس (أ) تحتوي على حجم أكبر من العصير من الكأس (ب).',
    },

    /* ─── نموذج اختبار الفصل التاسع (ص 79) ─── */
    // اختيار من متعدد — المخطط المجاور: أنواع المادة (ص 79)
    {
      type: 'multiple_choice',
      question_ar: 'نموذج الاختبار (ص 79): انظر إلى المخطط المجاور (صلب / غاز / سائل). أيُّ العبارات تُكمل الفراغ في المخطط؟',
      question_en: 'Test model (p.79): Look at the diagram (solid / gas / liquid). Which statement completes the blank in the diagram?',
      options_ar: [
        'أنواع المادة — لأن الصلب والغاز والسائل هي أنواع المادة الثلاثة',
        'أشياء لا يمكن رؤيتها',
        'الخواص المختلفة',
        'أشياء لها شكل ثابت',
      ],
      options_en: [
        'Types of matter — because solid, gas, and liquid are the three types of matter',
        'Things that cannot be seen',
        'Different properties',
        'Things with fixed shape',
      ],
      correct: 0,
      explanation_ar: 'المخطط يُظهر: فراغ (الفكرة الرئيسية) → صلب / غاز / سائل. الفراغ هو "أنواع المادة" لأن الصلب والغاز والسائل هي الأنواع الثلاثة للمادة.',
    },
    // اختيار من متعدد — نموذج الاختبار: أداة قياس حجم السائل (ص 79)
    {
      type: 'multiple_choice',
      question_ar: 'نموذج الاختبار (ص 79): انظر إلى الرسوم (خيط / كأس قياس / مسطرة / ميزان ذو كفتين). أيُّ الأدوات يمكن استخدامها لقياس حجم السائل؟',
      question_en: 'Test model (p.79): Look at the drawings (thread / measuring cup / ruler / two-pan balance). Which tool can be used to measure liquid volume?',
      options_ar: [
        'كأس قياس',
        'خيط',
        'مسطرة',
        'ميزان ذو كفتين',
      ],
      options_en: [
        'Measuring cup',
        'Thread',
        'Ruler',
        'Two-pan balance',
      ],
      correct: 0,
      explanation_ar: 'كأس القياس (المُدرّجة) تُستخدم لقياس حجم السائل بالمليلتر. أما المسطرة فللطول وميزان الكفتين للكتلة والخيط ليس أداة قياس.',
    },

    /* ─── تقويم الأداء (ص 78): بطاقات حقائق المادة ─── */
    {
      type: 'ordering',
      question_ar: 'تقويم الأداء (ص 78): لأفرّق بين الأنواع المختلفة للمادة — أكتب اسم أنواع المادة الثلاثة على ورقات منفصلة ثم:',
      question_en: 'Performance assessment (p.78): To differentiate between types of matter — I write the three types on separate papers then:',
      items_ar: [
        'أكتب اسم كل نوع من المادة على ورقة مختلفة',
        'أرسم شكلاً يُمثّل كل نوع على الورقة',
        'أكتب خلف كل ورقة قائمة بالخواص التي تُميّز كل مادة',
        'أرسم جدولاً أُسجّل فيه الفروق التي تختلف فيها كل مادة عن الأخرى',
        'أتشارك مع زملائي في الصف',
      ],
      items_en: [
        'Write each type of matter on a separate paper',
        'Draw a shape representing each type',
        'Write behind each paper a list of properties distinguishing each material',
        'Draw a table recording the differences between each material',
        'Share with classmates',
      ],
      explanation_ar: 'تقويم الأداء: أكتب أنواع المادة (صلب، سائل، غاز) ← أرسم ← أكتب الخواص ← أرسم جدول المقارنة ← أتشارك مع زملائي.',
    },
  ],
};