/**
 * العلوم — الصف الثاني الابتدائي · الفصل الثاني
 * الوحدة السادسة: القوى والطاقة — الفصل الثاني عشر: استعمال الطاقة (ص 121-150)
 * الدرس الأول: الحرارة (ص 129-136)
 * الدرس الثاني: استكشاف الكهرباء (ص 137-145)
 * مراجعة الفصل الثاني عشر + مرجعيات الطالب + المصطلحات (ص 147-163)
 */

/* ════════════════════════════════════════════════════
 *  مفردات الفكرة العامة للفصل الثاني عشر (ص 121-128)
 * ════════════════════════════════════════════════════ */
export const ENERGY_VOCAB_LESSON = {
  id: 'energy_vocab',
  title_ar: 'مفردات الفكرة العامة — استعمال الطاقة',
  title_en: 'Big Idea Vocabulary — Using Energy',
  questions: [
    {
      type: 'matching',
      question_ar: 'صِل كل مصطلح بتعريفه (مفردات الفكرة العامة ص 121-128):',
      question_en: 'Match each term to its definition (big idea vocabulary p.121-128):',
      pairs_ar: [
        { left: 'الحرارة', right: 'شكل من أشكال الطاقة يجعل الأجسام تتحرك أو تتغير' },
        { left: 'الوقود', right: 'مادة تنتج حرارة عندما تحترق' },
        { left: 'درجة الحرارة', right: 'مقياس لمدى سخونة أو برودة الشيء' },
        { left: 'الكهرباء المتحركة', right: 'شكل من أشكال الطاقة تتحرك في مسار معين' },
        { left: 'الدائرة الكهربائية', right: 'مسار تتحرك فيه الكهرباء المتحركة ويجب أن تكون مغلقة تماماً' },
        { left: 'الكهرباء الساكنة', right: 'نوع من الطاقة تنتجه أجزاء صغيرة جداً من المادة' },
      ],
      pairs_en: [
        { left: 'Heat', right: 'A form of energy that makes objects move or change' },
        { left: 'Fuel', right: 'A material that produces heat when it burns' },
        { left: 'Temperature', right: 'A measure of how hot or cold something is' },
        { left: 'Current electricity', right: 'A form of energy that moves in a specific path' },
        { left: 'Electrical circuit', right: 'A path in which current electricity moves — must be completely closed' },
        { left: 'Static electricity', right: 'A type of energy produced by very small parts of matter' },
      ],
      explanation_ar: 'مفردات الفصل: الحرارة (طاقة تغيّر الأجسام)، الوقود (يحترق وينتج حرارة)، درجة الحرارة (مقياس السخونة/البرودة)، الكهرباء المتحركة (في مسار)، الدائرة الكهربائية (مسار مغلق)، الكهرباء الساكنة (من أجزاء صغيرة من المادة).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما تعريف الحرارة؟ (ص 121)',
      question_en: 'What is the definition of heat? (p.121)',
      options_ar: [
        'شكل من أشكال الطاقة يجعل الأجسام تتحرك أو تتغير',
        'مقياس لمدى سخونة الشيء',
        'مادة تحترق وتنتج طاقة',
        'تيار يسري في الأسلاك',
      ],
      options_en: [
        'A form of energy that makes objects move or change',
        'A measure of how hot something is',
        'A material that burns and produces energy',
        'A current flowing in wires',
      ],
      correct: 0,
      explanation_ar: 'الحرارة: شكل من أشكال الطاقة يجعل الأجسام تتحرك أو تتغير — مصدرها الرئيسي الشمس.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما تعريف الوقود؟ (ص 121)',
      question_en: 'What is the definition of fuel? (p.121)',
      options_ar: [
        'مادة تنتج حرارة عندما تحترق',
        'شكل من أشكال الطاقة يجعل الأجسام تتغير',
        'مقياس لمدى سخونة الشيء',
        'مسار تتحرك فيه الكهرباء',
      ],
      options_en: [
        'A material that produces heat when it burns',
        'A form of energy that makes objects change',
        'A measure of how hot something is',
        'A path in which electricity moves',
      ],
      correct: 0,
      explanation_ar: 'الوقود: مادة تنتج حرارة عندما تحترق — مثل الغاز والزيت والحطب والفحم.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما تعريف درجة الحرارة؟ (ص 121)',
      question_en: 'What is the definition of temperature? (p.121)',
      options_ar: [
        'مقياس لمدى سخونة أو برودة الشيء',
        'شكل من أشكال الطاقة',
        'مادة تحترق وتنتج طاقة',
        'مسار كهربائي مغلق',
      ],
      options_en: [
        'A measure of how hot or cold something is',
        'A form of energy',
        'A material that burns and produces energy',
        'A closed electrical path',
      ],
      correct: 0,
      explanation_ar: 'درجة الحرارة: مقياس لمدى سخونة أو برودة الشيء — تُقاس بمقياس الحرارة (الثرمومتر) بوحدة الدرجات.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما تعريف الكهرباء المتحركة؟ (ص 121)',
      question_en: 'What is the definition of current electricity? (p.121)',
      options_ar: [
        'شكل من أشكال الطاقة تتحرك في مسار معين',
        'نوع طاقة ينتجه أجزاء صغيرة من المادة',
        'مقياس لمدى سخونة الشيء',
        'مادة تنتج حرارة عندما تحترق',
      ],
      options_en: [
        'A form of energy that moves in a specific path',
        'A type of energy produced by tiny parts of matter',
        'A measure of how hot something is',
        'A material that produces heat when it burns',
      ],
      correct: 0,
      explanation_ar: 'الكهرباء المتحركة: شكل من أشكال الطاقة تتحرك في مسار معين يُسمّى الدائرة الكهربائية.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما تعريف الدائرة الكهربائية؟ (ص 121)',
      question_en: 'What is the definition of an electrical circuit? (p.121)',
      options_ar: [
        'مسار تتحرك فيه الكهرباء المتحركة ويجب أن تكون مغلقة تماماً',
        'شكل من أشكال الطاقة تتحرك في مسار',
        'نوع طاقة ينتجه أجزاء صغيرة من المادة',
        'مادة تنتج حرارة',
      ],
      options_en: [
        'A path in which current electricity moves — must be completely closed',
        'A form of energy moving in a path',
        'A type of energy from tiny matter parts',
        'A material that produces heat',
      ],
      correct: 0,
      explanation_ar: 'الدائرة الكهربائية: مسار تتحرك فيه الكهرباء المتحركة — يجب أن تكون مغلقة تماماً حتى تعمل (يضيء المصباح).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما تعريف الكهرباء الساكنة؟ (ص 121)',
      question_en: 'What is the definition of static electricity? (p.121)',
      options_ar: [
        'نوع من الطاقة تنتجه أجزاء صغيرة جداً من المادة',
        'شكل من أشكال الطاقة تتحرك في مسار',
        'مقياس لمدى سخونة الشيء',
        'مادة تنتج حرارة عند احتراقها',
      ],
      options_en: [
        'A type of energy produced by very small parts of matter',
        'A form of energy moving in a path',
        'A measure of how hot something is',
        'A material that produces heat when burned',
      ],
      correct: 0,
      explanation_ar: 'الكهرباء الساكنة: نوع من الطاقة تنتجه أجزاء صغيرة جداً من المادة — مثل الشعر الذي يُشحن بالكهرباء الساكنة عند مشطه.',
    },
    {
      type: 'classify',
      question_ar: 'صنّف كل عبارة إلى النوع المناسب من الطاقة:',
      question_en: 'Classify each statement under the correct type of energy:',
      categories_ar: ['الحرارة', 'الكهرباء المتحركة', 'الكهرباء الساكنة'],
      categories_en: ['Heat', 'Current electricity', 'Static electricity'],
      items_ar: ['تُضيء المصباح', 'تذوب الشمعة', 'يلتصق الشعر بالمشط البلاستيكي', 'تشغّل التلفاز', 'تسخّن الماء', 'تنتقل بين السحاب والأرض كالبرق'],
      items_en: ['Lights a bulb', 'Melts a candle', 'Hair sticks to plastic comb', 'Powers the TV', 'Heats water', 'Transfers between clouds and earth like lightning'],
      correct_categories: [1, 0, 2, 1, 0, 2],
      explanation_ar: 'الحرارة: ذوبان الشمعة، تسخين الماء. الكهرباء المتحركة: إضاءة المصباح، تشغيل التلفاز. الكهرباء الساكنة: التصاق الشعر، البرق.',
    },
  ],
};

/* ════════════════════════════════════════════════════
 *  الدرس الأول: الحرارة (ص 129-136)
 * ════════════════════════════════════════════════════ */
export const HEAT_LESSON = {
  id: 'heat_lesson',
  title_ar: 'الدرس الأول: الحرارة',
  title_en: 'Lesson 1: Heat',
  questions: [
    /* ─── ما الحرارة؟ (ص 133) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'ما السؤال الأساسي للدرس الأول؟ (ص 133)',
      question_en: 'What is the essential question for Lesson 1? (p.133)',
      options_ar: ['ما تأثير الحرارة في المادة؟', 'كيف نحصل على الكهرباء؟', 'ما المغناطيس؟', 'كيف تغيّر القوى الحركة؟'],
      options_en: ['What is the effect of heat on matter?', 'How do we get electricity?', 'What is a magnet?', 'How do forces change motion?'],
      correct: 0,
      explanation_ar: 'السؤال الأساسي للدرس الأول: ما تأثير الحرارة في المادة؟ — الحرارة يمكن أن تغيّر حالة المادة.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما الحرارة؟ (ص 133)',
      question_en: 'What is heat? (p.133)',
      options_ar: [
        'الطاقة التي تجعل المادة تتحرك أو تتغير — هناك عدة أشكال للطاقة',
        'مقياس لمدى سخونة الشيء',
        'مادة تحترق وتنتج طاقة',
        'تيار يسري في الأسلاك',
      ],
      options_en: [
        'Energy that makes matter move or change — there are several forms of energy',
        'A measure of how hot something is',
        'A material that burns and produces energy',
        'A current flowing in wires',
      ],
      correct: 0,
      explanation_ar: 'الحرارة: الطاقة التي تجعل المادة تتحرك أو تتغير. هناك عدة أشكال للطاقة — الحرارة أحدها.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'من أين تأتي معظم الحرارة التي نستخدمها يومياً؟ (ص 133)',
      question_en: 'Where does most of the heat we use daily come from? (p.133)',
      options_ar: ['الشمس', 'البطاريات', 'المغناطيس', 'الكهرباء الساكنة'],
      options_en: ['The sun', 'Batteries', 'Magnet', 'Static electricity'],
      correct: 0,
      explanation_ar: 'معظم الحرارة التي نستخدمها يومياً تأتي من الشمس — تُسخّن الهواء والماء والأرض.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ماذا تفعل حرارة الشمس؟ (ص 133)',
      question_en: 'What does the sun\'s heat do? (p.133)',
      options_ar: [
        'تُسخّن الهواء والياسة والماء على سطح الأرض',
        'تُبرّد الأجسام',
        'تُولّد الكهرباء مباشرةً',
        'لا تأثير لها',
      ],
      options_en: [
        'Warms the air, land, and water on Earth\'s surface',
        'Cools objects',
        'Directly generates electricity',
        'Has no effect',
      ],
      correct: 0,
      explanation_ar: 'حرارة الشمس تُسخّن الهواء والياسة والماء على سطح الأرض — هي المصدر الرئيسي للحرارة.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما الوقود؟ (ص 133)',
      question_en: 'What is fuel? (p.133)',
      options_ar: [
        'مادة تُنتج حرارة عندما تحترق',
        'شكل من أشكال الطاقة يتحرك في مسار',
        'مقياس لدرجة الحرارة',
        'مادة ليس لها شكل محدد',
      ],
      options_en: [
        'A material that produces heat when it burns',
        'A form of energy moving in a path',
        'A measure of temperature',
        'A material with no definite shape',
      ],
      correct: 0,
      explanation_ar: 'الوقود: مادة تُنتج حرارة عندما تحترق — الغاز والزيت والحطب والفحم أمثلة على الوقود.',
    },
    {
      type: 'classify',
      question_ar: 'صنّف كل مادة إلى: وقود / ليس وقوداً (ص 133):',
      question_en: 'Classify each material as: fuel / not fuel (p.133):',
      categories_ar: ['وقود', 'ليس وقوداً'],
      categories_en: ['Fuel', 'Not fuel'],
      items_ar: ['الغاز', 'الزيت', 'الحطب', 'الفحم', 'الماء', 'الحجر'],
      items_en: ['Gas', 'Oil', 'Wood', 'Coal', 'Water', 'Stone'],
      correct_categories: [0, 0, 0, 0, 1, 1],
      explanation_ar: 'وقود: الغاز، الزيت، الحطب، الفحم (تحترق وتنتج حرارة). ليس وقوداً: الماء، الحجر (لا تحترق).',
    },
    {
      type: 'true_false',
      question_ar: 'الحرارة تنتقل دائماً من الجسم الساخن إلى الجسم البارد عند تلامسهما. (ص 133)',
      question_en: 'Heat always transfers from a hot object to a cold one when they touch. (p.133)',
      correct: 'true',
      explanation_ar: 'الحرارة تنتقل دائماً من الجسم الساخن إلى الجسم البارد عند تلامسهما — الحرارة من يديّ تنتقل إلى وجهي عند فركهما.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'كيف تنتقل الحرارة من يديّ إلى وجهي؟ (ص 133)',
      question_en: 'How does heat transfer from my hands to my face? (p.133)',
      options_ar: [
        'تنتقل من الجسم الساخن (اليدين بعد الفرك) إلى الجسم البارد (الوجه) عند التلامس',
        'لا تنتقل الحرارة بهذه الطريقة',
        'الوجه أكثر سخونة دائماً',
        'الحرارة تنتقل من البارد للساخن',
      ],
      options_en: [
        'Heat transfers from the warm object (hands after rubbing) to the cooler face when touching',
        'Heat doesn\'t transfer this way',
        'Face is always warmer',
        'Heat transfers from cold to hot',
      ],
      correct: 0,
      explanation_ar: 'أفرك يديّ بسرعة فتُنتج الحرارة من الحركة، ثم تنتقل الحرارة من اليدين الدافئتين إلى الوجه الأبرد عند التلامس.',
    },

    /* ─── نشاط: أين تنصهر مكعبات الثلج أسرع؟ (ص 131-132) ─── */
    {
      type: 'ordering',
      question_ar: 'رتّب خطوات نشاط "أين تنصهر مكعبات الثلج أسرع؟" (ص 131-132):',
      question_en: 'Order the steps of the "Where does ice melt faster?" activity (p.131-132):',
      items_ar: [
        'أملأ الكأسين بكميتين متساويتين من مكعبات الثلج',
        'أتوقع: أيُّ الكأسين ينصهر فيها الثلج أسرع؟',
        'أسجّل: ما الزمن الذي يستغرقه الثلج حتى ينصهر في كل كأس',
        'أضع إحدى الكأسين في مكان مشمس والكأس الأخرى في الظل',
        'أستكشف أكثر: لماذا ينصهر الثلج في إحدى الكأسين أسرع من الأخرى؟',
      ],
      items_en: [
        'Fill both cups with equal amounts of ice cubes',
        'Predict: which cup\'s ice will melt faster?',
        'Record: how long it takes ice to melt in each cup',
        'Place one cup in sunlight and the other in shade',
        'Explore more: why does ice in one cup melt faster?',
      ],
      explanation_ar: 'نشاط الثلج: ملء الكأسين بالثلج ← التوقع ← وضع إحداهما في الشمس والأخرى في الظل ← تسجيل الزمن ← الاستكشاف. الكأس في الشمس تنصهر أسرع لأن الشمس تُضيف حرارة أكثر.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'في نشاط مكعبات الثلج (ص 131): أيُّ الكأسين ينصهر فيها الثلج أسرع؟',
      question_en: 'In the ice cubes activity (p.131): in which cup does ice melt faster?',
      options_ar: [
        'الكأس الموضوعة في مكان مشمس — لأن الشمس تُضيف حرارة أكثر للثلج',
        'الكأس الموضوعة في الظل',
        'كلتاهما تنصهران بالسرعة نفسها',
        'لا ينصهر الثلج في أي منهما',
      ],
      options_en: [
        'The cup placed in sunlight — because the sun adds more heat to the ice',
        'The cup placed in shade',
        'Both melt at the same speed',
        'Ice doesn\'t melt in either',
      ],
      correct: 0,
      explanation_ar: 'الثلج في مكان مشمس ينصهر أسرع — لأن الشمس تُضيف حرارة أكثر إليه مقارنةً بالظل.',
    },

    /* ─── ما درجة الحرارة؟ (ص 134) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'ما درجة الحرارة؟ (ص 134)',
      question_en: 'What is temperature? (p.134)',
      options_ar: [
        'مقياس لمدى سخونة أو برودة الشيء',
        'شكل من أشكال الطاقة',
        'مادة تحترق وتنتج حرارة',
        'مسار كهربائي مغلق',
      ],
      options_en: [
        'A measure of how hot or cold something is',
        'A form of energy',
        'A material that burns and produces heat',
        'A closed electrical path',
      ],
      correct: 0,
      explanation_ar: 'درجة الحرارة: مقياس لمدى سخونة أو برودة الشيء — نقيس بها درجة حرارة الهواء والماء وأجسامنا.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما الأداة التي تُستخدم لقياس درجة الحرارة؟ (ص 134)',
      question_en: 'What tool is used to measure temperature? (p.134)',
      options_ar: ['مقياس الحرارة (الثرمومتر)', 'المسطرة', 'الميزان ذو الكفتين', 'الكأس المُدرّجة'],
      options_en: ['Thermometer', 'Ruler', 'Two-pan balance', 'Graduated cup'],
      correct: 0,
      explanation_ar: 'مقياس الحرارة (الثرمومتر): الأداة المستخدمة لقياس درجة الحرارة — يقيس الحرارة بوحدات تُسمّى الدرجات.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'بأي وحدات يقيس مقياس الحرارة؟ (ص 134)',
      question_en: 'In what units does a thermometer measure? (p.134)',
      options_ar: ['الدرجات (درجة سلسيوس)', 'السنتيمتر', 'المليلتر', 'الكيلوجرام'],
      options_en: ['Degrees (Celsius)', 'Centimeter', 'Milliliter', 'Kilogram'],
      correct: 0,
      explanation_ar: 'مقياس الحرارة يقيس بوحدات تُسمّى الدرجات — درجة الحرارة الطبيعية لجسم الإنسان حوالي ٣٧ درجة سلسيوس.',
    },
    {
      type: 'true_false',
      question_ar: 'يحرص الأطباء على قياس درجة حرارة الجسم لأن ارتفاعها عن ٣٧ درجة يُعدّ مؤشراً على إصابة الجسم بأمراض. (ص 134)',
      question_en: 'Doctors measure body temperature because a rise above 37°C indicates illness. (p.134)',
      correct: 'true',
      explanation_ar: 'درجة حرارة الجسم الطبيعية ٣٧ درجة سلسيوس تقريباً — ارتفاعها يُعدّ مؤشراً على المرض.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'كيف أستخدم الحرارة في المدرسة وفي البيت؟ (ص 135)',
      question_en: 'How do I use heat at school and at home? (p.135)',
      options_ar: [
        'في المدرسة: الحركة تُنتج حرارة — فرك اليدين. في البيت: الوقود للطبخ والتدفئة',
        'لا نستخدم الحرارة في المدرسة',
        'نستخدم الحرارة للتبريد فقط',
        'الحرارة تُستخدم في الكتابة فقط',
      ],
      options_en: [
        'At school: motion produces heat — rubbing hands. At home: fuel for cooking and heating',
        'We don\'t use heat at school',
        'We use heat only for cooling',
        'Heat is used only for writing',
      ],
      correct: 0,
      explanation_ar: 'في المدرسة: الحركة تُنتج حرارة (فرك اليدين). في البيت: الوقود يُستخدم للطبخ والتدفئة.',
    },

    /* ─── نشاط التركيز على المهارات: القياس (ص 137-144) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'مهارة الاستقصاء — القياس (ص 137): ما الهدف من قياس درجات الحرارة في أماكن مختلفة من الصف؟',
      question_en: 'Inquiry skill — Measurement (p.137): What is the goal of measuring temperatures in different classroom spots?',
      options_ar: [
        'للحصول على معلومات عن درجات الحرارة ومقارنتها بين المكان المشمس والمكان المظلم',
        'للحصول على معلومات عن طول الأشياء',
        'لمعرفة وزن الكتاب',
        'لمعرفة حجم السائل',
      ],
      options_en: [
        'To get information about temperatures and compare sunny vs shaded spots',
        'To get information about object lengths',
        'To know the book\'s weight',
        'To know liquid volume',
      ],
      correct: 0,
      explanation_ar: 'الهدف: قياس درجة الحرارة في مكان مشمس (بالقرب من النافذة) ومكان مظلم (غرفة الصف) ومقارنة الدرجات — المكان المشمس أعلى درجةً.',
    },
    {
      type: 'ordering',
      question_ar: 'رتّب خطوات نشاط القياس: قياس درجة حرارة الثلج والماء البارد والماء الدافئ (ص 139-140):',
      question_en: 'Order the steps of the measurement activity: measuring temperature of ice, cold water, and warm water (p.139-140):',
      items_ar: [
        'أملأ الكؤوس بالثلج والماء البارد والماء الدافئ',
        'أتوقع: ما درجة حرارة كل كأس؟ أُسجّل توقعاتي',
        'أضع مقياس الحرارة في كل كأس مدة ٥ دقائق وأسجّل درجة حرارة كل منها',
        'أقارن بين التوقعات والنتائج الفعلية',
      ],
      items_en: [
        'Fill cups with ice, cold water, and warm water',
        'Predict: what is the temperature of each cup? Record predictions',
        'Place thermometer in each cup for 5 minutes and record temperature',
        'Compare predictions with actual results',
      ],
      explanation_ar: 'نشاط القياس: ملء الكؤوس ← التوقع ← وضع مقياس الحرارة ٥ دقائق ← تسجيل الدرجة ← المقارنة. الثلج أقل درجة والماء الدافئ أعلى درجة.',
    },

    /* ─── مراجعة الدرس الأول (ص 135-136) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'من أين تأتي الحرارة؟ (ص 135 — أفكر وأتحدث وأكتب)',
      question_en: 'Where does heat come from? (p.135 — Think, Talk, and Write)',
      options_ar: [
        'من الشمس بصورة رئيسية، ومن الوقود، ومن الحركة (الاحتكاك)',
        'من البطاريات فقط',
        'من المغناطيس فقط',
        'من الكهرباء الساكنة فقط',
      ],
      options_en: [
        'Mainly from the sun, also from fuel, and from motion (friction)',
        'Only from batteries',
        'Only from magnets',
        'Only from static electricity',
      ],
      correct: 0,
      explanation_ar: 'مصادر الحرارة: الشمس (رئيسي)، الوقود (الغاز والحطب عند الاحتراق)، الحركة/الاحتكاك (فرك اليدين).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'كيف نقيس درجة الحرارة؟ (ص 135)',
      question_en: 'How do we measure temperature? (p.135)',
      options_ar: [
        'بمقياس الحرارة (الثرمومتر) الذي يقيس بوحدة الدرجات',
        'بالمسطرة',
        'بالميزان ذي الكفتين',
        'بالكأس المُدرّجة',
      ],
      options_en: [
        'With a thermometer that measures in degrees',
        'With a ruler',
        'With a two-pan balance',
        'With a graduated cup',
      ],
      correct: 0,
      explanation_ar: 'نقيس درجة الحرارة بمقياس الحرارة (الثرمومتر) — يحوي بعض أنواعه سائلاً داخله يتحرك مع الحرارة إلى أعلى وإلى أسفل.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'السؤال الأساسي: ما تأثير الحرارة في المادة؟ (ص 135)',
      question_en: 'Essential question: What is the effect of heat on matter? (p.135)',
      options_ar: [
        'تغيّر حالة المادة — تُذيب الصلب إلى سائل، وتُبخّر السائل إلى غاز، أو تُصلّب السائل بالتبريد',
        'لا تُغيّر الحرارة المادة',
        'تُغيّر لون المادة فقط',
        'تُغيّر حجم المادة فقط',
      ],
      options_en: [
        'Changes state of matter — melts solid to liquid, evaporates liquid to gas, or freezes liquid when cooled',
        'Heat doesn\'t change matter',
        'Only changes color',
        'Only changes volume',
      ],
      correct: 0,
      explanation_ar: 'تأثير الحرارة في المادة: تُذيب الصلب إلى سائل (انصهار)، وتُبخّر السائل إلى غاز (تبخّر)، وبالتبريد يتحول السائل إلى صلب (تجمّد).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'العلوم والفن (ص 135): ماذا أفعل في نشاط العلوم والفن الخاص بمصادر الحرارة؟',
      question_en: 'Science and Art (p.135): What do I do in the science and art activity about heat sources?',
      options_ar: [
        'أبحث في بيتي أو مدرستي عن مصادر للحرارة، ثم أرسمها',
        'أرسم المغناطيسات',
        'أبحث عن مصادر الكهرباء فقط',
        'أرسم المادة الصلبة فقط',
      ],
      options_en: [
        'Search at home or school for heat sources, then draw them',
        'Draw magnets',
        'Search for electricity sources only',
        'Draw solid matter only',
      ],
      correct: 0,
      explanation_ar: 'العلوم والفن: أبحث في بيتي أو مدرستي عن مصادر للحرارة (الشمس، الموقد، المدفأة...) ثم أرسمها.',
    },
  ],
};

/* ════════════════════════════════════════════════════
 *  الدرس الثاني: استكشاف الكهرباء (ص 137-145)
 * ════════════════════════════════════════════════════ */
export const ELECTRICITY_LESSON = {
  id: 'electricity_lesson',
  title_ar: 'الدرس الثاني: استكشاف الكهرباء',
  title_en: 'Lesson 2: Exploring Electricity',
  questions: [
    /* ─── نشاط: ما الذي يجعل المصباح الكهربائي يضيء؟ (ص 138) ─── */
    {
      type: 'ordering',
      question_ar: 'رتّب خطوات نشاط "ما الذي يجعل المصباح الكهربائي يضيء؟" (ص 138):',
      question_en: 'Order the steps of "What makes the electric bulb light up?" activity (p.138):',
      items_ar: [
        'أتوقع: كيف يمكنني أن أوصّل البطارية والمصباح والأسلاك حتى يضيء المصباح؟ أُسجّل أفكاري',
        'أُجرّب أفكاري: أيُّها جعل المصباح يضيء، وأيُّها لم ينجح في ذلك؟',
        'أُسجّل البيانات: كم طريقة نجحت في إضاءة المصباح؟',
        'أستكشف أكثر: جرّب إضافة مصباح ثانٍ للدائرة — ماذا يحدث؟',
      ],
      items_en: [
        'Predict: how can I connect battery, bulb, and wires to light the bulb? Record ideas',
        'Try my ideas: which ones lit the bulb, which did not?',
        'Record data: how many ways successfully lit the bulb?',
        'Explore more: try adding a second bulb — what happens?',
      ],
      explanation_ar: 'نشاط الكهرباء: التوقع ← التجربة ← تسجيل البيانات ← الاستكشاف. المصباح يضيء فقط عندما تكون الدائرة الكهربائية مغلقة تماماً.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما الأدوات التي أحتاجها لنشاط المصباح الكهربائي؟ (ص 138)',
      question_en: 'What tools do I need for the electric bulb activity? (p.138)',
      options_ar: ['أسلاك، بطارية، مصباح كهربائي', 'مسطرة، ميزان، مخبار', 'مغناطيس، دبابيس، حوض ماء', 'مقياس حرارة، كؤوس، ثلج'],
      options_en: ['Wires, battery, electric bulb', 'Ruler, balance, cylinder', 'Magnet, pins, water basin', 'Thermometer, cups, ice'],
      correct: 0,
      explanation_ar: 'أحتاج: أسلاك + بطارية + مصباح كهربائي — لاستكشاف كيف تعمل الدائرة الكهربائية.',
    },

    /* ─── ما الكهرباء المتحركة؟ (ص 141) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'ما السؤال الأساسي للدرس الثاني؟ (ص 141)',
      question_en: 'What is the essential question for Lesson 2? (p.141)',
      options_ar: ['كيف نحصل على الكهرباء؟', 'ما تأثير الحرارة في المادة؟', 'ما المغناطيس؟', 'كيف تغيّر القوى الحركة؟'],
      options_en: ['How do we get electricity?', 'What is the effect of heat on matter?', 'What is a magnet?', 'How do forces change motion?'],
      correct: 0,
      explanation_ar: 'السؤال الأساسي للدرس الثاني: كيف نحصل على الكهرباء؟ — نحصل عليها من البطاريات أو مقابس الكهرباء.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما الكهرباء المتحركة؟ (ص 141)',
      question_en: 'What is current electricity? (p.141)',
      options_ar: [
        'شكل من أشكال الطاقة تتحرك في مسار معين',
        'نوع طاقة تنتجه أجزاء صغيرة من المادة',
        'مقياس لمدى سخونة الشيء',
        'مادة تنتج حرارة عند احتراقها',
      ],
      options_en: [
        'A form of energy that moves in a specific path',
        'A type of energy produced by tiny parts of matter',
        'A measure of how hot something is',
        'A material that produces heat when burned',
      ],
      correct: 0,
      explanation_ar: 'الكهرباء المتحركة: شكل من أشكال الطاقة تتحرك في مسار معين. هل تستطيع البطاريات أن تُشغّل بعض ألعابك؟ البطاريات تُنتج نوعاً من الكهرباء.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما الدائرة الكهربائية؟ (ص 141)',
      question_en: 'What is an electrical circuit? (p.141)',
      options_ar: [
        'المسار الذي تسري فيه الكهرباء المتحركة — يجب أن تكون الدائرة موصلة تماماً',
        'مصدر الطاقة الكهربائية',
        'نوع من البطاريات',
        'أداة لقياس درجة الحرارة',
      ],
      options_en: [
        'The path in which current electricity flows — the circuit must be completely connected',
        'The source of electrical energy',
        'A type of battery',
        'A tool for measuring temperature',
      ],
      correct: 0,
      explanation_ar: 'الدائرة الكهربائية: المسار الذي تسري فيه الكهرباء المتحركة — يجب أن تكون موصلة تماماً حتى تعمل.',
    },
    {
      type: 'true_false',
      question_ar: 'المصباح يضيء فقط عندما توصّل جميع الأسلاك في دائرة مغلقة. (ص 141)',
      question_en: 'The bulb only lights up when all wires are connected in a closed circuit. (p.141)',
      correct: 'true',
      explanation_ar: 'المصباح يضيء فقط عندما توصّل جميع الأسلاك في دائرة كهربائية مغلقة — إذا انقطع أي سلك لن يضيء المصباح.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'من أين نحصل على الكهرباء في المنازل؟ (ص 142)',
      question_en: 'Where do we get electricity in our homes? (p.142)',
      options_ar: [
        'من البطاريات أو من مقابس الكهرباء الموجودة في جدران منازلنا التي تصلها الطاقة من محطة توليد الكهرباء',
        'من الشمس مباشرة فقط',
        'من الرياح فقط',
        'من المغناطيسات فقط',
      ],
      options_en: [
        'From batteries or from electrical outlets in walls, which receive energy from power stations',
        'Directly from the sun only',
        'Only from wind',
        'Only from magnets',
      ],
      correct: 0,
      explanation_ar: 'نحصل على الكهرباء من البطاريات أو مقابس الكهرباء في جدران منازلنا — تصلها الطاقة عبر الأسلاك من محطات توليد الكهرباء.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ماذا يحدث عند وضع قابس محمصة الخبز في مقبس الكهرباء؟ (ص 142)',
      question_en: 'What happens when you plug a toaster into an electrical outlet? (p.142)',
      options_ar: [
        'أُكوّن دائرة كهربائية متصلة بمحطة توليد الكهرباء فتعمل المحمصة',
        'لا يحدث شيء',
        'تنقطع الكهرباء',
        'المحمصة تعمل بالحرارة فقط دون كهرباء',
      ],
      options_en: [
        'I form a complete circuit connected to the power station and the toaster works',
        'Nothing happens',
        'Electricity is cut off',
        'The toaster works on heat only without electricity',
      ],
      correct: 0,
      explanation_ar: 'عند وضع قابس المحمصة في مقبس الكهرباء: أُكوّن دائرة كهربائية متصلة بمحطة توليد الكهرباء عبر الأسلاك فتعمل المحمصة.',
    },

    /* ─── الكهرباء الساكنة (ص 143) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'ما الكهرباء الساكنة؟ (ص 143)',
      question_en: 'What is static electricity? (p.143)',
      options_ar: [
        'نوع من الطاقة تنتجه أجزاء صغيرة جداً من المادة — أصغر من أن يُرى بالعين',
        'تيار كهربائي يسري في الأسلاك',
        'مقياس لمدى سخونة الشيء',
        'مادة تحترق وتنتج حرارة',
      ],
      options_en: [
        'A type of energy produced by very small parts of matter — too small to be seen',
        'A current flowing in wires',
        'A measure of how hot something is',
        'A material that burns and produces heat',
      ],
      correct: 0,
      explanation_ar: 'الكهرباء الساكنة: نوع من الطاقة تنتجه أجزاء صغيرة جداً من المادة (أصغر من أن تُرى بالعين) — عندما تتجذب الأجزاء الصغيرة أو تتنافر.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ماذا يحدث عندما تنجذب الأجزاء الصغيرة من المادة بعضها لبعض أو تتنافر؟ (ص 143)',
      question_en: 'What happens when tiny parts of matter attract or repel each other? (p.143)',
      options_ar: [
        'تُنتج الكهرباء الساكنة — تُشحن الأجسام وتتجاذب أو تتنافر',
        'تُنتج الكهرباء المتحركة',
        'تُنتج الحرارة فقط',
        'لا يحدث شيء',
      ],
      options_en: [
        'Static electricity is produced — objects become charged and attract or repel',
        'Current electricity is produced',
        'Only heat is produced',
        'Nothing happens',
      ],
      correct: 0,
      explanation_ar: 'عندما تتجذب أو تتنافر الأجزاء الصغيرة من المادة تُنتج الكهرباء الساكنة — مثل مشط الشعر الذي يجذب الشعر بسبب الشحنة.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما مثال على الكهرباء الساكنة في الحياة؟ (ص 143)',
      question_en: 'What is an example of static electricity in life? (p.143)',
      options_ar: [
        'المشط البلاستيكي يجذب الشعر، وفروة القط تنجذب إلى البالون المشحون',
        'المصباح يضيء عند توصيل الدائرة',
        'محمصة الخبز تعمل بالمقبس',
        'الثلج ينصهر في الشمس',
      ],
      options_en: [
        'A plastic comb attracts hair, and cat fur is attracted to a charged balloon',
        'A bulb lights when the circuit is connected',
        'A toaster works with an outlet',
        'Ice melts in the sun',
      ],
      correct: 0,
      explanation_ar: 'أمثلة على الكهرباء الساكنة: المشط البلاستيكي يجذب الشعر، فروة القط تنجذب للبالون المشحون، البرق في السماء.',
    },
    {
      type: 'true_false',
      question_ar: 'البرق شكل من أشكال الكهرباء الساكنة. (ص 143)',
      question_en: 'Lightning is a form of static electricity. (p.143)',
      correct: 'true',
      explanation_ar: 'البرق شكل من أشكال الكهرباء الساكنة — عندما تتجذب الأجزاء الصغيرة في السحب والأرض تنتقل الكهرباء الساكنة.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'لماذا فروة القط تنجذب إلى البالون المشحون؟ (ص 143)',
      question_en: 'Why does cat fur get attracted to a charged balloon? (p.143)',
      options_ar: [
        'بسبب الكهرباء الساكنة — الأجزاء الصغيرة في البالون تجذب فروة القط',
        'بسبب المغناطيسية',
        'بسبب الجاذبية',
        'بسبب الاحتكاك فقط',
      ],
      options_en: [
        'Due to static electricity — tiny parts in the balloon attract the cat\'s fur',
        'Due to magnetism',
        'Due to gravity',
        'Due to friction only',
      ],
      correct: 0,
      explanation_ar: 'فروة القط تنجذب للبالون المشحون بسبب الكهرباء الساكنة — عندما تتجذب الأجزاء الصغيرة في البالون وفروة القط.',
    },
    {
      type: 'classify',
      question_ar: 'صنّف كل مثال إلى: كهرباء متحركة / كهرباء ساكنة (ص 141-143):',
      question_en: 'Classify each example as: current electricity / static electricity (p.141-143):',
      categories_ar: ['كهرباء متحركة', 'كهرباء ساكنة'],
      categories_en: ['Current electricity', 'Static electricity'],
      items_ar: ['إضاءة مصباح ببطارية', 'مشط يجذب الشعر', 'تشغيل التلفاز بالمقبس', 'البرق في السماء', 'محمصة الخبز الكهربائية', 'فروة القط تنجذب للبالون'],
      items_en: ['Lighting a bulb with a battery', 'Comb attracting hair', 'TV powered by outlet', 'Lightning in the sky', 'Electric toaster', 'Cat fur attracted to balloon'],
      correct_categories: [0, 1, 0, 1, 0, 1],
      explanation_ar: 'كهرباء متحركة: مصباح، تلفاز، محمصة (دائرة مغلقة). كهرباء ساكنة: مشط يجذب الشعر، البرق، فروة القط (شحنات متجاذبة).',
    },

    /* ─── مراجعة الدرس الثاني (ص 144-145) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'كيف نحصل على الكهرباء؟ (ص 144 مراجعة)',
      question_en: 'How do we get electricity? (p.144 review)',
      options_ar: [
        'من البطاريات أو من مقابس الكهرباء في الجدران التي تصلها الطاقة من محطات التوليد',
        'من المغناطيسات فقط',
        'من الشمس مباشرة فقط',
        'من الاحتكاك فقط',
      ],
      options_en: [
        'From batteries or electrical outlets in walls that receive energy from power stations',
        'Only from magnets',
        'Only directly from the sun',
        'Only from friction',
      ],
      correct: 0,
      explanation_ar: 'نحصل على الكهرباء من البطاريات (كهرباء متحركة) أو من مقابس الكهرباء (طاقة من محطات التوليد عبر الأسلاك).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما نوع الطاقة التي تجعل ملابسي تلتصق ببعض أحياناً؟ (ص 144)',
      question_en: 'What type of energy makes my clothes sometimes stick together? (p.144)',
      options_ar: ['الكهرباء الساكنة', 'الكهرباء المتحركة', 'الحرارة', 'المغناطيسية'],
      options_en: ['Static electricity', 'Current electricity', 'Heat', 'Magnetism'],
      correct: 0,
      explanation_ar: 'الملابس تلتصق ببعض بسبب الكهرباء الساكنة — تتشكل شحنات بين الملابس عند الاحتكاك فتتجاذب.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'السؤال الأساسي: كيف نحصل على الكهرباء؟ (ص 144)',
      question_en: 'Essential question: How do we get electricity? (p.144)',
      options_ar: [
        'من البطاريات (كهرباء متحركة)، ومن مقابس الكهرباء (محطات التوليد)، ومن الكهرباء الساكنة (أجزاء صغيرة من المادة)',
        'من البطاريات فقط',
        'من مقابس الكهرباء فقط',
        'من الكهرباء الساكنة فقط',
      ],
      options_en: [
        'From batteries (current), from outlets (power stations), and from static electricity (tiny matter parts)',
        'Only from batteries',
        'Only from outlets',
        'Only from static electricity',
      ],
      correct: 0,
      explanation_ar: 'نحصل على الكهرباء بأشكال مختلفة: كهرباء متحركة من البطاريات ومقابس الكهرباء، وكهرباء ساكنة من الاحتكاك بين أجزاء صغيرة من المادة.',
    },
  ],
};

/* ════════════════════════════════════════════════════
 *  مراجعة الفصل الثاني عشر (ص 147-150)
 * ════════════════════════════════════════════════════ */
export const ENERGY_REVIEW_LESSON = {
  id: 'energy_review',
  title_ar: 'مراجعة الفصل الثاني عشر: استعمال الطاقة',
  title_en: 'Chapter 12 Review: Using Energy',
  questions: [
    /* ─── المفردات (ص 147) ─── */
    {
      type: 'matching',
      question_ar: 'أكمل الجمل بالكلمة المناسبة (مراجعة ص 147): الوقود / دائرة كهربائية / الكهرباء المتحركة / الكهرباء الساكنة / الحرارة',
      question_en: 'Complete with the correct word (Review p.147): Fuel / Electrical circuit / Current electricity / Static electricity / Heat',
      pairs_ar: [
        { left: 'الطاقة التي تتحرك عبر الأسلاك تُسمّى', right: 'الكهرباء المتحركة' },
        { left: 'البرق شكل من أشكال', right: 'الكهرباء الساكنة' },
        { left: 'تنتج الحرارة عند احتراق', right: 'الوقود' },
        { left: 'الصورة تُبيّن دائرة ............... مُغلقة', right: 'دائرة كهربائية' },
        { left: 'الطاقة التي تُغيّر حالة المادة', right: 'الحرارة' },
      ],
      pairs_en: [
        { left: 'Energy moving through wires is called', right: 'Current electricity' },
        { left: 'Lightning is a form of', right: 'Static electricity' },
        { left: 'Heat is produced when _______ burns', right: 'Fuel' },
        { left: 'The picture shows a closed electrical _______', right: 'Electrical circuit' },
        { left: 'Energy that changes the state of matter', right: 'Heat' },
      ],
      explanation_ar: 'مفردات المراجعة: الكهرباء المتحركة (أسلاك)، الكهرباء الساكنة (برق)، الوقود (يحترق)، دائرة كهربائية (مغلقة)، الحرارة (تغيّر المادة).',
    },

    /* ─── المهارات والأفكار العلمية (ص 148) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'أقيس: ما درجة الحرارة التي يُشير إليها مقياس الحرارة في الصورة؟ (مراجعة ص 148)',
      question_en: 'Measure: What temperature does the thermometer in the picture indicate? (Review p.148)',
      options_ar: [
        'القراءة الموضحة على التدريج بالدرجات سلسيوس',
        'لا يمكن قراءة مقياس الحرارة',
        'الصفر دائماً',
        'مئة دائماً',
      ],
      options_en: [
        'The reading shown on the Celsius scale',
        'Cannot read a thermometer',
        'Always zero',
        'Always one hundred',
      ],
      correct: 0,
      explanation_ar: 'نقرأ مقياس الحرارة بالنظر إلى مستوى السائل في التدريج ونحدد الدرجة المقابلة بوحدة سلسيوس.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'من أين تأتي الكهرباء إلى المنازل؟ (مراجعة ص 148)',
      question_en: 'Where does electricity come to homes from? (Review p.148)',
      options_ar: [
        'من محطات توليد الكهرباء عبر الأسلاك الموجودة في الجدران',
        'من البطاريات فقط',
        'من الشمس مباشرة فقط',
        'من المغناطيسات',
      ],
      options_en: [
        'From power stations through wires in the walls',
        'Only from batteries',
        'Only directly from the sun',
        'From magnets',
      ],
      correct: 0,
      explanation_ar: 'تأتي الكهرباء إلى المنازل من محطات توليد الكهرباء عبر الأسلاك الموجودة في الجدران — نصلها بالمقابس.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما أهم أنواع الوقود في العصر الحديث؟ (مراجعة ص 148)',
      question_en: 'What are the most important types of fuel in modern times? (Review p.148)',
      options_ar: [
        'الغاز الطبيعي والزيت — يُستخدمان في التدفئة وتوليد الكهرباء وتشغيل السيارات',
        'الحطب فقط',
        'الفحم فقط',
        'الماء فقط',
      ],
      options_en: [
        'Natural gas and oil — used for heating, generating electricity, and powering vehicles',
        'Wood only',
        'Coal only',
        'Water only',
      ],
      correct: 0,
      explanation_ar: 'أهم أنواع الوقود في العصر الحديث: الغاز الطبيعي والزيت — يُستخدمان في التدفئة وتوليد الكهرباء وتشغيل السيارات.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'الفكرة العامة: كيف نستعمل الطاقة؟ (مراجعة ص 148)',
      question_en: 'Main idea: How do we use energy? (Review p.148)',
      options_ar: [
        'نستخدم الحرارة للطبخ والتدفئة والتغيير، ونستخدم الكهرباء لتشغيل الأجهزة والإضاءة',
        'نستخدم الطاقة للتبريد فقط',
        'لا نحتاج إلى طاقة في حياتنا',
        'الطاقة تُستخدم في الطبخ فقط',
      ],
      options_en: [
        'We use heat for cooking, heating, and changing matter, and electricity to power devices and lighting',
        'We use energy only for cooling',
        'We don\'t need energy in our lives',
        'Energy is used only for cooking',
      ],
      correct: 0,
      explanation_ar: 'الفكرة العامة: نستخدم الحرارة للطبخ والتدفئة وتغيير حالة المادة، ونستخدم الكهرباء لتشغيل الأجهزة والإضاءة.',
    },

    /* ─── تقويم الأداء: أنواع الطاقة (ص 149) ─── */
    {
      type: 'ordering',
      question_ar: 'رتّب خطوات تقويم الأداء "أنواع الطاقة" (ص 149):',
      question_en: 'Order the steps of the performance assessment "Types of Energy" (p.149):',
      items_ar: [
        'أُصمّم جدولاً يوضّح نوعَي الطاقة (الحرارة والكهرباء) بثلاثة أعمدة: نوع الطاقة، المصادر، الاستخدام',
        'أُسمّي الأعمدة بالعناوين التالية: نوع الطاقة، المصادر، الاستخدام',
        'أكتب اسم كل نوع من الطاقة في الجدول وأضع صفوفاً له',
        'أكتب مصادر كل نوع طاقة في الجدول',
        'أُكمل المصادر والاستخدامات اليومية لكل نوع من الطاقة في الجدول',
      ],
      items_en: [
        'Design a table showing two energy types (heat and electricity) with 3 columns: type, sources, use',
        'Name the columns: energy type, sources, use',
        'Write each energy type name and add rows',
        'Write sources for each energy type',
        'Complete daily uses for each energy type',
      ],
      explanation_ar: 'تقويم الأداء: تصميم جدول ← تسمية الأعمدة ← كتابة أنواع الطاقة ← إضافة المصادر ← إضافة الاستخدامات. مثال: الحرارة (مصادر: الشمس، الوقود) — (استخدام: للطبخ والتدفئة). الكهرباء (مصادر: البطاريات، المقابس).',
    },

    /* ─── نموذج اختبار (ص 150) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'نموذج الاختبار (ص 150): نحصل على الكهرباء المتحركة من:',
      question_en: 'Test model (p.150): We get current electricity from:',
      options_ar: [
        'محطات توليد الكهرباء',
        'المصباح',
        'محمصة الخبز',
        'الأسلاك',
      ],
      options_en: [
        'Power generating stations',
        'The bulb',
        'The toaster',
        'The wires',
      ],
      correct: 0,
      explanation_ar: 'نحصل على الكهرباء المتحركة من محطات توليد الكهرباء — تصلنا عبر الأسلاك إلى مقابس الكهرباء في الجدران.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'نموذج الاختبار (ص 150): انظر إلى الشكل — أيُّ الأجزاء في الدائرة الكهربائية يُنتج الكهرباء؟',
      question_en: 'Test model (p.150): Look at the diagram — which component in the circuit produces electricity?',
      options_ar: [
        'البطارية',
        'ضوء المصباح',
        'المفتاح',
        'الأسلاك',
      ],
      options_en: [
        'The battery',
        'The bulb\'s light',
        'The switch',
        'The wires',
      ],
      correct: 0,
      explanation_ar: 'البطارية هي التي تُنتج الكهرباء في الدائرة — الأسلاك تنقل الكهرباء والمصباح يستخدمها للإضاءة والمفتاح يُغلق/يفتح الدائرة.',
    },
  ],
};

export const ENERGY_CHAPTER = {
  id: 'energy_chapter',
  title_ar: 'الفصل الثاني عشر: استعمال الطاقة',
  title_en: 'Chapter 12: Using Energy',
  lessons: [ENERGY_VOCAB_LESSON, HEAT_LESSON, ELECTRICITY_LESSON, ENERGY_REVIEW_LESSON],
};