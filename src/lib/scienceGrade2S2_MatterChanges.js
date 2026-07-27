/**
 * العلوم — الصف الثاني الابتدائي · الفصل الثاني
 * الوحدة الخامسة: المادة — الفصل العاشر: تغيرات المادة (ص 80-96)
 * الفكرة العامة: كيف تتغير المادة؟
 * الدرس الأول: ما الذي يغيّر المادة؟ (ص 81-88)
 * الدرس الثاني: كيف تؤثر درجة الحرارة في المادة؟ (ص 89-96)
 * أنواع الأسئلة: multiple_choice · true_false · ordering · matching · classify
 */

/* ════════════════════════════════════════════════════
 *  الدرس الأول: ما الذي يغيّر المادة؟ (ص 81-88)
 * ════════════════════════════════════════════════════ */
export const MATTER_CHANGES_LESSON_1 = {
  id: 'what_changes_matter',
  title_ar: 'الدرس الأول: ما الذي يغيّر المادة؟',
  title_en: 'Lesson 1: What Changes Matter?',
  questions: [

    /* ─── مفردات الفكرة العامة (ص 81) ─── */
    {
      type: 'matching',
      question_ar: 'صِل كل مصطلح بتعريفه كما ورد في مفردات الفكرة العامة (ص 81):',
      question_en: 'Match each term to its definition from the general idea vocabulary (p.81):',
      pairs_ar: [
        { left: 'التغير الفيزيائي', right: 'تغير حجم المادة أو شكلها' },
        { left: 'التغير الكيميائي', right: 'تحول المادة إلى مادة أخرى مختلفة' },
        { left: 'التبخر', right: 'تحول السائل إلى غاز' },
      ],
      pairs_en: [
        { left: 'Physical change', right: 'Change in the size or shape of matter' },
        { left: 'Chemical change', right: 'Transformation of matter into a different substance' },
        { left: 'Evaporation', right: 'Transformation of a liquid into a gas' },
      ],
      explanation_ar: 'مفردات الفصل العاشر: التغير الفيزيائي (تغير الحجم أو الشكل)، التغير الكيميائي (تحول لمادة جديدة)، التبخر (سائل → غاز).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما تعريف التغير الفيزيائي؟ (ص 81)',
      question_en: 'What is the definition of a physical change? (p.81)',
      options_ar: [
        'تغير حجم المادة أو شكلها',
        'تحول المادة إلى مادة أخرى مختلفة',
        'تحول السائل إلى غاز',
        'تحول الغاز إلى سائل',
      ],
      options_en: [
        'Change in the size or shape of matter',
        'Transformation of matter into a different substance',
        'Transformation of a liquid into a gas',
        'Transformation of a gas into a liquid',
      ],
      correct: 0,
      explanation_ar: 'التغير الفيزيائي: تغير حجم المادة أو شكلها — مثل طي الورق أو قطعه أو تشكيل الصلصال.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما تعريف التغير الكيميائي؟ (ص 81)',
      question_en: 'What is the definition of a chemical change? (p.81)',
      options_ar: [
        'تحول المادة إلى مادة أخرى مختلفة',
        'تغير حجم المادة أو شكلها',
        'تحول السائل إلى غاز',
        'تغير لون المادة فقط',
      ],
      options_en: [
        'Transformation of matter into a different substance',
        'Change in the size or shape of matter',
        'Transformation of a liquid into a gas',
        'Change in color only',
      ],
      correct: 0,
      explanation_ar: 'التغير الكيميائي: تحول المادة إلى مادة أخرى مختلفة — مثل احتراق الورق أو صدأ الحديد أو طهي البيض.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما تعريف التبخر؟ (ص 81)',
      question_en: 'What is the definition of evaporation? (p.81)',
      options_ar: [
        'تحول السائل إلى غاز',
        'تحول الغاز إلى سائل',
        'تحول الصلب إلى سائل',
        'تحول السائل إلى صلب',
      ],
      options_en: [
        'Transformation of a liquid into a gas',
        'Transformation of a gas into a liquid',
        'Transformation of a solid into a liquid',
        'Transformation of a liquid into a solid',
      ],
      correct: 0,
      explanation_ar: 'التبخر: تحول السائل إلى غاز — مثل تبخر الماء عند تسخينه وتحوله إلى بخار ماء.',
    },
    {
      type: 'classify',
      question_ar: 'صنّف كل مثال إلى: تغير فيزيائي / تغير كيميائي / تبخر (ص 81):',
      question_en: 'Classify each example as: physical change / chemical change / evaporation (p.81):',
      categories_ar: ['تغير فيزيائي', 'تغير كيميائي', 'تبخر'],
      categories_en: ['Physical change', 'Chemical change', 'Evaporation'],
      items_ar: ['طي الورق', 'احتراق الورق', 'تشكيل الصلصال', 'صدأ الحديد', 'تحول الماء إلى بخار', 'طهي البيض'],
      items_en: ['Folding paper', 'Burning paper', 'Shaping clay', 'Rusting iron', 'Water turning to vapor', 'Cooking an egg'],
      correct_categories: [0, 1, 0, 1, 2, 1],
      explanation_ar: 'فيزيائي: طي الورق، تشكيل الصلصال (شكل/حجم). كيميائي: احتراق الورق، صدأ الحديد، طهي البيض (مادة جديدة). تبخر: الماء → بخار.',
    },

    /* ─── نشاط أستكشف: كيف أغير الصلصال؟ (ص 83-84) ─── */
    {
      type: 'ordering',
      question_ar: 'رتّب خطوات نشاط "أستكشف: كيف أغيّر الصلصال؟" (ص 83-84):',
      question_en: 'Order the steps of the "Explore: How do I change the clay?" activity (p.83-84):',
      items_ar: [
        'أختار قطعتي صلصال متساويتين في الكتلة، وأستخدم الميزان ذا الكفتين للتأكد',
        'أضغط إحدى قطعتي الصلصال لأشكل منها كرة، ثم أصف خواصها',
        'أتوقع: هل تغيرت كتلة قطعة الصلصال بعد تشكيلها؟ أضعها في الميزان ذي الكفتين لأعرف ذلك',
        'أحذر! أقسم كرة الصلصال نصفين بسكين بلاستيكية، وأكوّن منهما شكلين',
        'أستخلص النتائج: كيف غيّرت الصلصال؟',
        'أستكشف أكثر — أستقصي: كيف أغيّر الصلصال بطرق أخرى؟ هل ستتغير الكتلة؟',
      ],
      items_en: [
        'Choose two clay pieces equal in mass, verify with two-pan balance',
        'Press one piece to form a sphere, describe its properties',
        'Predict: did the mass change after shaping? Check on the balance',
        'Caution! Cut the sphere in half with a plastic knife, form two shapes',
        'Draw conclusions: how did I change the clay?',
        'Explore more — investigate: other ways to change clay? Will mass change?',
      ],
      explanation_ar: 'خطوات النشاط: اختيار قطعتين متساويتين ← تشكيل كرة ← التوقع والقياس ← القسمة بسكين بلاستيكية ← استخلاص النتائج ← استكشاف أكثر.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'في نشاط الصلصال (ص 83): لماذا أستخدم الميزان ذا الكفتين في الخطوة الأولى؟',
      question_en: 'In the clay activity (p.83): why do I use the two-pan balance in the first step?',
      options_ar: [
        'لأتأكد أن قطعتي الصلصال متساويتان في الكتلة قبل البدء',
        'لقياس طول الصلصال',
        'لقياس حجم الصلصال',
        'لقياس لون الصلصال',
      ],
      options_en: [
        'To ensure the two clay pieces are equal in mass before starting',
        'To measure the length of the clay',
        'To measure the volume of the clay',
        'To measure the color of the clay',
      ],
      correct: 0,
      explanation_ar: 'أستخدم الميزان ذا الكفتين للتأكد من تساوي قطعتي الصلصال في الكتلة قبل البدء — حتى يكون التغير الذي أحدثه في الشكل وحده لا في الكتلة.',
    },
    {
      type: 'true_false',
      question_ar: 'في نشاط الصلصال: عندما أشكّل قطعة الصلصال إلى كرة، تتغير كتلتها.',
      question_en: 'In the clay activity: when I shape a clay piece into a sphere, its mass changes.',
      correct: 'false',
      explanation_ar: 'تشكيل الصلصال إلى كرة تغير فيزيائي (تغير الشكل فقط) — كتلة الصلصال تبقى كما هي لأن التغير الفيزيائي لا يغير الكتلة.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'في نشاط الصلصال (ص 84): ما الأداة التي أستخدمها لقسمة كرة الصلصال نصفين؟',
      question_en: 'In the clay activity (p.84): what tool do I use to cut the clay sphere in half?',
      options_ar: ['سكين بلاستيكية', 'مقص حديدي', 'مسطرة', 'ميزان'],
      options_en: ['A plastic knife', 'Metal scissors', 'A ruler', 'A balance'],
      correct: 0,
      explanation_ar: 'أحذر! أقسم كرة الصلصال نصفين بسكين بلاستيكية — لأ safety، ثم أكوّن من القطعتين شكلين مختلفين.',
    },
    {
      type: 'true_false',
      question_ar: 'في نشاط الصلصال: عند قسمة الكرة نصفين وتشكيلهما، تبقى الكتلة كما هي.',
      question_en: 'In the clay activity: when cutting the sphere in half and shaping them, the mass stays the same.',
      correct: 'true',
      explanation_ar: 'قسمة الصلصال وتشكيله تغير فيزيائي — الكتلة لا تتغير، فقط يتغير الشكل. هذا ما أستخلصه من النشاط.',
    },

    /* ─── ما التغيرات الفيزيائية؟ (ص 85) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'ما التغيرات الفيزيائية؟ (ص 85)',
      question_en: 'What are physical changes? (p.85)',
      options_ar: [
        'تغير حجم المادة أو شكلها مع بقاء خواصها كما هي',
        'تحول المادة إلى مادة جديدة مختلفة',
        'تحول السائل إلى غاز',
        'تحول المادة إلى رماد',
      ],
      options_en: [
        'Change in the size or shape of matter while keeping its properties',
        'Transformation into a new different substance',
        'Transformation of a liquid into a gas',
        'Transformation into ash',
      ],
      correct: 0,
      explanation_ar: 'التغيرات الفيزيائية: تغير حجم المادة أو شكلها — يمكنني قص الورق أو طيه أو ثنيه، ولكنه يبقى ورقاً وتبقى له الخواص نفسها.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'عندما أقطع المادة أو أثنيها أو أطويها، فإنني أحدث تغيراً: (ص 85)',
      question_en: 'When I cut, bend, or fold matter, I cause a: (p.85)',
      options_ar: ['فيزيائياً', 'كيميائياً', 'في التبخر', 'في التكثف'],
      options_en: ['Physical change', 'Chemical change', 'Evaporation', 'Condensation'],
      correct: 0,
      explanation_ar: 'القطع والثني والطي تغيرات فيزيائية — تغير الشكل أو الحجم مع بقاء المادة وخواصها كما هي.',
    },
    {
      type: 'true_false',
      question_ar: 'عندما أغير شكل الورق بقصه أو طيه، يبقى ورقاً وتبقى له الخواص نفسها. (ص 85)',
      question_en: 'When I change paper by cutting or folding it, it remains paper with the same properties. (p.85)',
      correct: 'true',
      explanation_ar: 'التغير الفيزيائي لا يغير خواص المادة — الورق المقصوص أو المطوي يبقى ورقاً بخواصه نفسها.',
    },
    {
      type: 'classify',
      question_ar: 'صنّف كل فعل إلى: تغير فيزيائي / تغير كيميائي (ص 85):',
      question_en: 'Classify each action as: physical change / chemical change (p.85):',
      categories_ar: ['تغير فيزيائي', 'تغير كيميائي'],
      categories_en: ['Physical change', 'Chemical change'],
      items_ar: ['طي الورق', 'ثني الورق', 'الكتابة على الورق', 'قص الورق', 'احتراق الورق', 'طهي البيض'],
      items_en: ['Folding paper', 'Bending paper', 'Writing on paper', 'Cutting paper', 'Burning paper', 'Cooking an egg'],
      correct_categories: [0, 0, 0, 0, 1, 1],
      explanation_ar: 'فيزيائي: طي، ثني، كتابة، قص (شكل/حجم فقط). كيميائي: احتراق، طهي (مادة جديدة).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'عندما أغير شكل المادة فقط، ماذا يحدث لكتلتها؟ (ص 85)',
      question_en: 'When I change only the shape of matter, what happens to its mass? (p.85)',
      options_ar: [
        'تبقى كتلتها كما هي',
        'تزداد كتلتها',
        'تنقص كتلتها',
        'تتغير كتلتها كثيراً',
      ],
      options_en: [
        'Its mass stays the same',
        'Its mass increases',
        'Its mass decreases',
        'Its mass changes a lot',
      ],
      correct: 0,
      explanation_ar: 'صورة الميزان (ص 85): ورقة مسطحة وورقة مطوية في كفتي الميزان — الميزان متزن. هذا يثبت أن التغير الفيزيائي لا يغير الكتلة.',
    },
    {
      type: 'true_false',
      question_ar: 'في صورة الميزان (ص 85): الورقة المسطحة والورقة المطوية متساويتان في الكتلة.',
      question_en: 'In the balance image (p.85): the flat paper and folded paper are equal in mass.',
      correct: 'true',
      explanation_ar: 'الميزان متزن بين الورقة المسطحة والمطوية — مما يثبت أن طي الورق (تغير فيزيائي) لا يغير الكتلة.',
    },

    /* ─── درجة الحرارة والرطوبة والجفاف (ص 87) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'في يوم بارد قد يتحول الماء إلى جليد. هذا: (ص 87)',
      question_en: 'On a cold day, water may turn into ice. This is: (p.87)',
      options_ar: ['تغير فيزيائي', 'تغير كيميائي', 'تبخر', 'تكثف'],
      options_en: ['A physical change', 'A chemical change', 'Evaporation', 'Condensation'],
      correct: 0,
      explanation_ar: 'تحول الماء إلى جليد تغير فيزيائي — الماء يبقى ماء ولكن حالته تغيرت من سائل إلى صلب.',
    },
    {
      type: 'true_false',
      question_ar: 'الرطوبة والجفاف من التغيرات الفيزيائية. (ص 87)',
      question_en: 'Moisture and dryness are physical changes. (p.87)',
      correct: 'true',
      explanation_ar: 'الرطوبة والجفاف تغيرات فيزيائية — الطين الرطب يبدو مختلفاً في الشكل والملمس عن الطين الجاف، ولكنه يبقى طيناً.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'لماذا يبدو الطين الرطب مختلفاً عن الطين الجاف؟ (ص 87)',
      question_en: 'Why does wet clay look different from dry clay? (p.87)',
      options_ar: [
        'لأن الرطوبة والجفاف تغيرات فيزيائية تغير الشكل والملمس',
        'لأن الطين تحول إلى مادة جديدة',
        'لأن الطين احترق',
        'لأن الطين تبخر',
      ],
      options_en: [
        'Because moisture and dryness are physical changes altering shape and texture',
        'Because the clay turned into a new substance',
        'Because the clay burned',
        'Because the clay evaporated',
      ],
      correct: 0,
      explanation_ar: 'الطين الرطب يختلف عن الجاف في الشكل والملمس بسبب الرطوبة والجفاف — وهما تغيران فيزيائيان.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'أذكر تغيراً فيزيائياً يمكن أن أحدثه في العصير. (ص 87)',
      question_en: 'Mention a physical change I can cause in juice. (p.87)',
      options_ar: [
        'صبّه في كأس آخر أو تجميده أو تخفيفه بالماء',
        'حرقه',
        'تركه يتعفن',
        'تحويله إلى مادة جديدة',
      ],
      options_en: [
        'Pouring it into another cup, freezing it, or diluting with water',
        'Burning it',
        'Leaving it to rot',
        'Turning it into a new substance',
      ],
      correct: 0,
      explanation_ar: 'تغيرات فيزيائية في العصير: صبّه في كأس (تغير الشكل)، تخفيفه بالماء، تجميده — كلها لا تغير خواص العصير الأساسية.',
    },

    /* ─── ما التغيرات الكيميائية؟ (ص 86) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'ما التغيرات الكيميائية؟ (ص 86)',
      question_en: 'What are chemical changes? (p.86)',
      options_ar: [
        'تتغير خواص المادة وتتحول إلى مادة جديدة مختلفة الخواص',
        'تغير حجم المادة أو شكلها فقط',
        'تحول السائل إلى غاز',
        'تغير لون المادة فقط',
      ],
      options_en: [
        'Properties change and matter transforms into a new different substance',
        'Only size or shape changes',
        'Liquid turns into gas',
        'Only color changes',
      ],
      correct: 0,
      explanation_ar: 'التغير الكيميائي: تتغير خواص المادة وتتحول إلى مادة جديدة لها خواص مختلفة — يصعب إعادتها إلى ما كانت عليه.',
    },
    {
      type: 'true_false',
      question_ar: 'عندما يحدث تغير كيميائي في المادة، يصعب إعادتها إلى ما كانت عليه. (ص 86)',
      question_en: 'When a chemical change occurs, it is difficult to return matter to what it was. (p.86)',
      correct: 'true',
      explanation_ar: 'التغير الكيميائي ينتج مادة جديدة مختلفة الخواص — لذلك يصعب إعادتها. مثال: عندما نحرق الورق لا نستطيع إعادته من جديد.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما الدلائل على حدوث تغير كيميائي؟ (ص 86)',
      question_en: 'What are signs that a chemical change has occurred? (p.86)',
      options_ar: [
        'رؤية اللهب والإحساس بالحرارة',
        'تغير الشكل فقط',
        'تغير الحجم فقط',
        'بقاء الخواص كما هي',
      ],
      options_en: [
        'Seeing flame and feeling heat',
        'Only shape change',
        'Only volume change',
        'Properties remain the same',
      ],
      correct: 0,
      explanation_ar: 'رؤية اللهب والإحساس بالحرارة يدلان على حدوث تغير كيميائي — مثل احتراق الورق.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'نشاط (ص 86): ألاحظ قطعة تفاح وأستنتج سبب التغير الكيميائي فيها. ما السبب؟',
      question_en: 'Activity (p.86): I observe an apple slice and conclude the cause of its chemical change. What is the cause?',
      options_ar: [
        'تفاعل التفاح مع الهواء (الأكسجين) مما يغير لونه وخواصه',
        'تغير شكل التفاح فقط',
        'تغير حجم التفاح',
        'لا يحدث أي تغير للتفاح',
      ],
      options_en: [
        'The apple reacts with air (oxygen), changing its color and properties',
        'Only the shape changes',
        'Only the size changes',
        'No change occurs',
      ],
      correct: 0,
      explanation_ar: 'قطعة التفاح تتغير خواصها (يتغير لونها إلى البني) بسبب تفاعلها مع الأكسجين في الهواء — هذا تغير كيميائي.',
    },

    /* ─── جدول التغير الكيميائي: عود الثقاب والمسمار (ص 86) ─── */
    {
      type: 'matching',
      question_ar: 'صِل كل مادة بحالتها قبل وبعد التغير الكيميائي (جدول ص 86):',
      question_en: 'Match each material to its state before and after the chemical change (table p.86):',
      pairs_ar: [
        { left: 'عود الثقاب — قبل', right: 'عود نظيف سليم' },
        { left: 'عود الثقاب — بعد', right: 'عود محترق مسوّد' },
        { left: 'المسمار الحديدي — قبل', right: 'مسمار لامع جديد' },
        { left: 'المسمار الحديدي — بعد', right: 'مسمار مصدأ بنّي' },
      ],
      pairs_en: [
        { left: 'Matchstick — before', right: 'Clean, intact stick' },
        { left: 'Matchstick — after', right: 'Burnt, blackened stick' },
        { left: 'Iron nail — before', right: 'Shiny new nail' },
        { left: 'Iron nail — after', right: 'Rusty brown nail' },
      ],
      explanation_ar: 'عود الثقاب: نظيف ← محترق (سبب اللهب). المسمار: لامع ← مصدأ (سبب الهواء والماء).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما سبب التغير الكيميائي في عود الثقاب؟ (جدول ص 86)',
      question_en: 'What causes the chemical change in the matchstick? (table p.86)',
      options_ar: [
        'اللهب — احتراق عود الثقاب وتغير خصائصه',
        'الماء',
        'الهواء فقط',
        'البرد',
      ],
      options_en: [
        'Flame — burning of the matchstick and change in its properties',
        'Water',
        'Air only',
        'Cold',
      ],
      correct: 0,
      explanation_ar: 'سبب التغير في عود الثقاب: اللهب — احتراق عود الثقاب وتغير خصائصه من عود نظيف إلى عود محترق مسوّد.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما سبب التغير الكيميائي في المسمار الحديدي (الصدأ)؟ (جدول ص 86)',
      question_en: 'What causes the chemical change in the iron nail (rust)? (table p.86)',
      options_ar: [
        'الهواء والماء قد يسببان صدأ الحديد — تغير كيميائي يحدث ببطء',
        'اللهب فقط',
        'الحرارة العالية',
        'الضوء',
      ],
      options_en: [
        'Air and water may cause iron to rust — a slow chemical change',
        'Flame only',
        'High heat',
        'Light',
      ],
      correct: 0,
      explanation_ar: 'الهواء والماء يسببان صدأ الحديد — وهو تغير كيميائي يحدث ببطء، يحوّل المسمار اللامع إلى مصدأ بنّي.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'أقرأ الجدول (ص 86): كيف يتغير المسمار الحديدي؟',
      question_en: 'Read the table (p.86): How does the iron nail change?',
      options_ar: [
        'من مسمار لامع جديد إلى مسمار مصدأ بنّي بفعل الهواء والماء ببطء',
        'من مسمار إلى عود ثقاب',
        'لا يتغير المسمار',
        'يتغير شكله فقط ولا تتغير خواصه',
      ],
      options_en: [
        'From a shiny new nail to a rusty brown nail by air and water slowly',
        'From a nail to a matchstick',
        'The nail does not change',
        'Only its shape changes, not its properties',
      ],
      correct: 0,
      explanation_ar: 'المسمار الحديدي: قبل (لامع جديد) → بعد (مصدأ بنّي) — بسبب الهواء والماء، وهو تغير كيميائي بطيء.',
    },
    {
      type: 'classify',
      question_ar: 'صنّف كل تغيير إلى: بطيء / سريع (جدول ص 86):',
      question_en: 'Classify each change as: slow / fast (table p.86):',
      categories_ar: ['تغير بطيء', 'تغير سريع'],
      categories_en: ['Slow change', 'Fast change'],
      items_ar: ['صدأ الحديد', 'احتراق عود الثقاب', 'تعفن التفاح', 'احتراق الورق'],
      items_en: ['Iron rusting', 'Matchstick burning', 'Apple rotting', 'Paper burning'],
      correct_categories: [0, 1, 0, 1],
      explanation_ar: 'بطيء: صدأ الحديد، تعفن التفاح. سريع: احتراق الثقاب، احتراق الورق (بسبب اللهب).',
    },

    /* ─── مراجعة الدرس الأول (ص 88) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'تسبب الحرارة حدوث تغير كيميائي في البيضة. كيف أعرف أن تغيراً كيميائياً قد حدث؟ (ص 88)',
      question_en: 'Heat causes a chemical change in an egg. How do I know a chemical change has occurred? (p.88)',
      options_ar: [
        'يمكنني أن أراه (تغير اللون والشكل) وأشم رائحته',
        'يتغير شكلها فقط',
        'لا يحدث أي تغير',
        'يتغير حجمها فقط',
      ],
      options_en: [
        'I can see it (color and shape change) and smell it',
        'Only its shape changes',
        'No change occurs',
        'Only its volume changes',
      ],
      correct: 0,
      explanation_ar: 'البيضة عند طهيها: يتغير لونها وشكلها (أراه) وتتغير رائحتها (أشمها) — هذه دلائل التغير الكيميائي.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'مشكلة وحل (ص 88): كيف يمكنني حماية دراجتي من الصدأ؟',
      question_en: 'Problem and solution (p.88): How can I protect my bicycle from rust?',
      options_ar: [
        'أبقيها جافة بعيداً عن الماء والهواء الرطب، وأمسحها بعد المطر',
        'أتركها في الماء دائماً',
        'أضعها في مكان رطب',
        'لا يمكن حمايتها من الصدأ',
      ],
      options_en: [
        'Keep it dry, away from water and humid air, and wipe it after rain',
        'Leave it in water always',
        'Put it in a humid place',
        'It cannot be protected from rust',
      ],
      correct: 0,
      explanation_ar: 'صدأ الحديد يسببه الهواء والماء. لحماية الدراجة: أبقيها جافة، بعيداً عن الماء، وأمسحها بعد المطر — لمنع التغير الكيميائي (الصدأ).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'أذكر بعض الأمثلة على التغيرات الفيزيائية. (ص 88)',
      question_en: 'Mention some examples of physical changes. (p.88)',
      options_ar: [
        'طي الورق، قص الورق، تشكيل الصلصال، تجمد الماء',
        'احتراق الورق، صدأ الحديد، طهي البيض',
        'تبخر الماء فقط',
        'تعفن التفاح',
      ],
      options_en: [
        'Folding paper, cutting paper, shaping clay, freezing water',
        'Burning paper, rusting iron, cooking an egg',
        'Only water evaporating',
        'Apple rotting',
      ],
      correct: 0,
      explanation_ar: 'أمثلة التغيرات الفيزيائية: طي الورق، قصه، تشكيل الصلصال، تجمد الماء — كلها تغير شكل/حجم مع بقاء الخواص.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'السؤال الأساسي للدرس الأول: ما الذي يغير المادة؟ (ص 88)',
      question_en: 'Essential question for Lesson 1: What changes matter? (p.88)',
      options_ar: [
        'التغير الفيزيائي (تغير الشكل/الحجم) والتغير الكيميائي (تحول لمادة جديدة) والحرارة والهواء والماء',
        'الشكل فقط',
        'الحرارة فقط',
        'لا شيء يغير المادة',
      ],
      options_en: [
        'Physical change (shape/volume), chemical change (new substance), heat, air, and water',
        'Only shape',
        'Only heat',
        'Nothing changes matter',
      ],
      correct: 0,
      explanation_ar: 'ما يغير المادة: التغير الفيزيائي (طي، قص، تشكيل)، التغير الكيميائي (احتراق، صدأ، طهي)، وعوامل مثل الحرارة والهواء والماء.',
    },

    /* ─── العلوم والرياضيات (ص 88) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'العلوم والرياضيات (ص 88): هل تتغير كتلة كتاب العلوم عندما نطويه؟ كيف نتحقق من ذلك؟',
      question_en: 'Science and Math (p.88): Does the mass of the science book change when we fold it? How do we verify?',
      options_ar: [
        'لا تتغير الكتلة — أتحقق بالميزان ذي الكفتين قبل الطي وبعده',
        'تزداد الكتلة كثيراً',
        'تنقص الكتلة',
        'لا يمكن التحقق',
      ],
      options_en: [
        'Mass does not change — I verify with a two-pan balance before and after folding',
        'Mass increases a lot',
        'Mass decreases',
        'Cannot be verified',
      ],
      correct: 0,
      explanation_ar: 'طي الكتاب تغير فيزيائي — الكتلة لا تتغير. أتحقق بالميزان: أزن الكتاب قبل الطي وبعده، فأجد الكتلة نفسها.',
    },

    /* ─── التركيز على المهارات: التواصل (ص 88) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'مهارة الاستقصاء (ص 88): متى أتواصل؟',
      question_en: 'Inquiry skill (p.88): When do I communicate?',
      options_ar: [
        'عندما أرسم أو أكتب أو أتشارك أفكاري مع الآخرين',
        'عندما أقرأ فقط',
        'عندما أصمت',
        'عندما ألعب فقط',
      ],
      options_en: [
        'When I draw, write, or share my ideas with others',
        'Only when I read',
        'Only when I am silent',
        'Only when I play',
      ],
      correct: 0,
      explanation_ar: 'مهارة التواصل: أتواصل عندما أرسم أو أكتب أو أتشارك أفكاري مع الآخرين — مثل رباب التي كتبت قائمة توضح كيف غيّرت الصلصال.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'أتعلم (ص 88): ماذا فعلت رباب لتعرض عملها على زميلاتها؟',
      question_en: 'I learn (p.88): What did Rabab do to show her work to classmates?',
      options_ar: [
        'غيّرت شكل كرة من الصلصال وكتبت قائمة توضح كيف غيّرت شكل الكرة',
        'احرقت الصلصال',
        'أكلت الصلصال',
        'لم تفعل شيئاً',
      ],
      options_en: [
        'Changed a clay ball shape and wrote a list explaining how she changed it',
        'Burned the clay',
        'Ate the clay',
        'Did nothing',
      ],
      correct: 0,
      explanation_ar: 'رباب غيّرت شكل كرة الصلصال وكتبت قائمة توضح كيف غيّرت الشكل (أدحرجها، أجعلها...) — هذه مهارة التواصل.',
    },

    /* ─── بناء المهارة — أجرّب (ص 89) ─── */
    {
      type: 'ordering',
      question_ar: 'رتّب خطوات نشاط "أجرّب: ما عدد الطرق التي أغير بها قطعة من الورق؟" (ص 89):',
      question_en: 'Order the steps of "I experiment: How many ways can I change a piece of paper?" (p.89):',
      items_ar: [
        'أستخدم مخططاً كما استخدمت رباب؛ لأتوصل كيف يمكن أن أغير في الورقة',
        'أشارك زملائي في الصف',
        'أكتب عن: كيف تختلف المخططات، وكيف تتشابه؟',
      ],
      items_en: [
        'Use a chart like Rabab used; to figure out how I can change the paper',
        'Share with my classmates',
        'Write about: how do charts differ, and how are they similar?',
      ],
      explanation_ar: 'خطوات بناء المهارة: مخطط ← مشاركة الزملاء ← الكتابة عن أوجه الاختلاف والتشابه بين المخططات.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'بناء المهارة (ص 89): ما الأداة التي أستخدمها لأتوصل كيف أغير الورقة؟',
      question_en: 'Skill building (p.89): What tool do I use to figure out how to change the paper?',
      options_ar: ['مخطط كما استخدمت رباب', 'ميزان', 'مسطرة', 'مصباح'],
      options_en: ['A chart like Rabab used', 'A balance', 'A ruler', 'A flashlight'],
      correct: 0,
      explanation_ar: 'أستخدم مخططاً (كما استخدمت رباب بالصلصال) لأتوصل كيف يمكن أن أغير الورقة — ثم أشارك زملائي وأكتب عن المخططات.',
    },
  ],
};

/* ════════════════════════════════════════════════════
 *  الدرس الثاني: كيف تؤثر درجة الحرارة في المادة؟ (ص 89-96)
 * ════════════════════════════════════════════════════ */
export const MATTER_CHANGES_LESSON_2 = {
  id: 'temperature_and_matter',
  title_ar: 'الدرس الثاني: كيف تؤثر درجة الحرارة في المادة؟',
  title_en: 'Lesson 2: How Does Temperature Affect Matter?',
  questions: [

    /* ─── نشاط أسري (ص 89) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'نشاط أسري (ص 89): يطلب من الطفل أن يحضر قطعة ثلج ويضعها في فناء المنزل. ما سبب تغير شكل الثلج؟',
      question_en: 'Family activity (p.89): A child brings an ice piece to the yard. What causes the ice shape to change?',
      options_ar: [
        'ارتفاع درجة حرارة الشمس ينصهر الثلج',
        'البرودة الشديدة',
        'الهواء وحده',
        'لا يتغير الثلج',
      ],
      options_en: [
        'Rising sun heat melts the ice',
        'Extreme cold',
        'Air alone',
        'The ice does not change',
      ],
      correct: 0,
      explanation_ar: 'في الفناء المشمس ترتفع درجة الحرارة فينصهر الثلج (يتحول من صلب إلى سائل) — هذا تغير فيزيائي بسبب الحرارة.',
    },

    /* ─── أنظر وأتساءل (ص 90) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'أنظر وأتساءل (ص 90): ماذا يحدث للثلوج عندما ترتفع درجات الحرارة في اليوم المشمس؟',
      question_en: 'Look and wonder (p.90): What happens to snow when temperatures rise on a sunny day?',
      options_ar: [
        'تنصهر وتتحول إلى ماء سائل',
        'تتجمد أكثر',
        'لا تتغير',
        'تتحول إلى حجر',
      ],
      options_en: [
        'They melt and turn into liquid water',
        'They freeze more',
        'They do not change',
        'They turn into stone',
      ],
      correct: 0,
      explanation_ar: 'ارتفاع الحرارة في اليوم المشمس يسبب انصهار الثلوج — تتحول من صلب إلى سائل (تغير فيزيائي بسبب الحرارة).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'أنظر وأتساءل (ص 90): ما التغيرات الأخرى التي يمكن أن تحدثها الحرارة في المواد؟',
      question_en: 'Look and wonder (p.90): What other changes can heat cause in materials?',
      options_ar: [
        'الانصهار، التبخر، التكثف، التجمد — تحولات بين حالات المادة',
        'تغير الشكل فقط',
        'لا تحدث أي تغيرات',
        'تغير اللون فقط',
      ],
      options_en: [
        'Melting, evaporation, condensation, freezing — state changes',
        'Only shape change',
        'No changes occur',
        'Only color change',
      ],
      correct: 0,
      explanation_ar: 'الحرارة تسبب: الانصهار (صلب→سائل)، التبخر (سائل→غاز)، التكثف (غاز→سائل)، التجمد (سائل→صلب).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'أين تقع جبال اللوز المذكورة في صفحة التهيئة (ص 90)؟',
      question_en: 'Where are the Al-Lawz mountains mentioned in the preparation page (p.90) located?',
      options_ar: [
        'في تبوك، ضمن مشروع مدينة المستقبل نيوم',
        'في الرياض',
        'في جدة',
        'في الدمام',
      ],
      options_en: [
        'In Tabuk, part of the NEOM future city project',
        'In Riyadh',
        'In Jeddah',
        'In Dammam',
      ],
      correct: 0,
      explanation_ar: 'جبال اللوز في تبوك — تقع في قلب مشروع مدينة المستقبل نيوم. ترتبط بدرس تأثير الحرارة لأن ثلوجها تنصهر مع ارتفاع الحرارة.',
    },

    /* ─── نشاط: كيف تغير الحرارة الأشياء؟ (ص 91) ─── */
    {
      type: 'ordering',
      question_ar: 'رتّب خطوات نشاط "كيف تغير الحرارة الأشياء؟" (ص 91):',
      question_en: 'Order the steps of the "How does heat change things?" activity (p.91):',
      items_ar: [
        'أتوقع: ماذا يحدث للزبدة والشوكولاتة تحت أشعة الشمس؟',
        'ألاحظ: أضع الزبدة والشوكولاتة في طبقين، وأرسمهما',
        'أتوقع: كيف تغير حرارة الشمس ما وضع في كل طبق؟ أترك الطبقين في مكان مشمس',
        'أتوال: ماذا يحدث لكل منهما بعد ساعة؟ أوضح ما يحدث بالرسم، ثم أقارن',
      ],
      items_en: [
        'Predict: what happens to butter and chocolate under the sun?',
        'Observe: place butter and chocolate in two plates, draw them',
        'Predict: how does sun heat change each? Leave plates in a sunny spot',
        'Communicate: what happens after an hour? Explain by drawing, then compare',
      ],
      explanation_ar: 'النشاط: توقع ← ملاحظة ووضع في طبقين ← ترك في الشمس ← تواصل ومقارنة بعد ساعة. الأدوات: أطباق ورقية، زبدة، شوكولاتة.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما الأدوات التي أحتاجها لنشاط "كيف تغير الحرارة الأشياء؟" (ص 91)',
      question_en: 'What tools do I need for the "How does heat change things?" activity? (p.91)',
      options_ar: ['أطباق ورقية، زبدة، شوكولاتة', 'ميزان، مسطرة', 'مغناطيس، دبابيس', 'تلسكوب، خريطة'],
      options_en: ['Paper plates, butter, chocolate', 'Balance, ruler', 'Magnet, pins', 'Telescope, map'],
      correct: 0,
      explanation_ar: 'أحتاج: أطباق ورقية + زبدة + شوكولاتة — لأوضعها في مكان مشمس وألاحظ كيف تنصهر بفعل حرارة الشمس.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ماذا يحدث للزبدة والشوكولاتة تحت أشعة الشمس؟ (ص 91)',
      question_en: 'What happens to butter and chocolate under the sun? (p.91)',
      options_ar: [
        'تنصهران وتتحولان من صلبة إلى سائلة',
        'تتجمدان أكثر',
        'لا تتغيران',
        'تتبخران',
      ],
      options_en: [
        'They melt and turn from solid to liquid',
        'They freeze more',
        'They do not change',
        'They evaporate',
      ],
      correct: 0,
      explanation_ar: 'الزبدة والشوكولاتة تنصهران تحت الشمس — تتحولان من مواد صلبة إلى سائلة بسبب حرارة الشمس.',
    },

    /* ─── كيف يغير التسخين المادة؟ (ص 92) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'ما معنى الانصهار؟ (ص 92)',
      question_en: 'What does melting mean? (p.92)',
      options_ar: [
        'تحول المادة الصلبة إلى سائلة',
        'تحول السائل إلى غاز',
        'تحول الغاز إلى سائل',
        'تحول السائل إلى صلب',
      ],
      options_en: [
        'Transformation of a solid into a liquid',
        'Transformation of a liquid into a gas',
        'Transformation of a gas into a liquid',
        'Transformation of a liquid into a solid',
      ],
      correct: 0,
      explanation_ar: 'الانصهار يعني تحول المادة الصلبة إلى سائلة — مثل انصهار الشوكولاتة في الجيب صيفاً أو انصهار الثلج.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'هل سبق أن تركت قطعة شوكولاتة في جيبك في الصيف فوجدتها قد انصهرت؟ ما السبب؟ (ص 92)',
      question_en: 'Have you left chocolate in your pocket in summer and found it melted? What is the cause? (p.92)',
      options_ar: [
        'حرارة الصيف العالية أدت إلى انصهار الشوكولاتة (صلب → سائل)',
        'برودة الجيب',
        'ضغط الجيب',
        'لا يحدث ذلك',
      ],
      options_en: [
        'High summer heat melted the chocolate (solid → liquid)',
        'Coldness of the pocket',
        'Pressure of the pocket',
        'That does not happen',
      ],
      correct: 0,
      explanation_ar: 'حرارة الصيف العالية تنصهر الشوكولاتة — تحولها من مادة صلبة إلى سائلة. الشوكولاتة تنصهر عند درجة حرارة أقل كثيراً من الذهب والنحاس.',
    },
    {
      type: 'classify',
      question_ar: 'صنّف كل مادة حسب درجة الحرارة اللازمة لانصهارها (ص 92):',
      question_en: 'Classify each material by the heat needed to melt it (p.92):',
      categories_ar: ['حرارة عالية لتنصهر', 'درجة حرارة أقل كثيراً'],
      categories_en: ['High heat to melt', 'Much lower temperature'],
      items_ar: ['الذهب', 'النحاس', 'الثلج', 'الزبد'],
      items_en: ['Gold', 'Copper', 'Ice', 'Butter'],
      correct_categories: [0, 0, 1, 1],
      explanation_ar: 'حرارة عالية: الذهب، النحاس. حرارة أقل كثيراً: الثلج، الزبد. كلما كانت درجة الانصهار أقل، انصهرت المادة بسهولة أكبر.',
    },
    {
      type: 'matching',
      question_ar: 'صِل كل مفردة بتعريفها (مفردات ص 92):',
      question_en: 'Match each vocabulary term to its definition (vocabulary p.92):',
      pairs_ar: [
        { left: 'الانصهار', right: 'تحول المادة الصلبة إلى سائلة' },
        { left: 'التبخر', right: 'تحول السائل إلى غاز' },
        { left: 'التكثف', right: 'تحول الغاز إلى سائل' },
      ],
      pairs_en: [
        { left: 'Melting', right: 'Solid turning into liquid' },
        { left: 'Evaporation', right: 'Liquid turning into gas' },
        { left: 'Condensation', right: 'Gas turning into liquid' },
      ],
      explanation_ar: 'مفردات الدرس الثاني: الانصهار (صلب→سائل)، التبخر (سائل→غاز)، التكثف (غاز→سائل).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما السؤال الأساسي للدرس الثاني؟ (ص 92)',
      question_en: 'What is the essential question for Lesson 2? (p.92)',
      options_ar: [
        'كيف تؤثر درجة الحرارة في المادة؟',
        'ما الذي يغير المادة؟',
        'ما خصائص المادة الصلبة؟',
        'كيف نقيس المادة؟',
      ],
      options_en: [
        'How does temperature affect matter?',
        'What changes matter?',
        'What are the properties of solid matter?',
        'How do we measure matter?',
      ],
      correct: 0,
      explanation_ar: 'السؤال الأساسي للدرس الثاني: كيف تؤثر درجة الحرارة في المادة؟ — بالانصهار والتبخر والتكثف والتجمد.',
    },

    /* ─── التبخر (ص 93) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'ماذا يحدث للماء عند تسخينه؟ (ص 93)',
      question_en: 'What happens to water when heated? (p.93)',
      options_ar: [
        'يتحول إلى غاز (بخار ماء) لا نستطيع رؤيته',
        'يتجمد',
        'لا يتغير',
        'يتحول إلى حجر',
      ],
      options_en: [
        'It turns into a gas (water vapor) we cannot see',
        'It freezes',
        'It does not change',
        'It turns into stone',
      ],
      correct: 0,
      explanation_ar: 'يتحول الماء إلى غاز عند تسخينه — يسمى بخار الماء، وهو غاز لا نستطيع رؤيته. الفقاعات المتصاعدة تدل على ذلك.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما معنى التبخر؟ (ص 93)',
      question_en: 'What does evaporation mean? (p.93)',
      options_ar: [
        'تحول السائل إلى غاز عند تسخينه',
        'تحول الصلب إلى سائل',
        'تحول الغاز إلى سائل',
        'تحول السائل إلى صلب',
      ],
      options_en: [
        'Liquid turning into gas when heated',
        'Solid turning into liquid',
        'Gas turning into liquid',
        'Liquid turning into solid',
      ],
      correct: 0,
      explanation_ar: 'التبخر: عندما يتحول السائل إلى غاز نقول إنه تبخر. مثل تحول الماء إلى بخار ماء عند التسخين.',
    },
    {
      type: 'true_false',
      question_ar: 'إذا سخنا الماء إلى درجة حرارة معينة فإنه يغلي. (ص 93)',
      question_en: 'If we heat water to a certain temperature, it boils. (p.93)',
      correct: 'true',
      explanation_ar: 'عند تسخين الماء إلى درجة حرارة معينة يغلي — تتصاعد الفقاعات التي تبين أن الماء يتحول إلى بخار ماء (غاز).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ماذا تبين الفقاعات المتصاعدة عند غليان الماء؟ (ص 93)',
      question_en: 'What do the rising bubbles indicate when water boils? (p.93)',
      options_ar: [
        'أن الماء يتحول إلى غاز (بخار ماء) لا نستطيع رؤيته',
        'أن الماء يتجمد',
        'أن الماء يبرد',
        'أن الماء يتبقى كما هو',
      ],
      options_en: [
        'That water is turning into a gas (water vapor) we cannot see',
        'That water is freezing',
        'That water is cooling',
        'That water stays the same',
      ],
      correct: 0,
      explanation_ar: 'الفقاعات المتصاعدة عند الغليان تبين أن الماء يتحول إلى بخار ماء — غاز لا نستطيع رؤيته.',
    },

    /* ─── أقرأ الشكل: تحولات الثلج (ص 93-94) ─── */
    {
      type: 'ordering',
      question_ar: 'رتّب تحولات الثلج عند تسخينه كما في الشكل (ص 93-94):',
      question_en: 'Order the transformations of ice when heated as in the diagram (p.93-94):',
      items_ar: [
        'إضافة حرارة إلى الثلج — ثلج (صلب)',
        'تحول الثلج إلى ماء — ماء (سائل)',
        'ثم إلى بخار ماء — بخار ماء (غاز)',
      ],
      items_en: [
        'Adding heat to ice — ice (solid)',
        'Ice turning into water — water (liquid)',
        'Then into water vapor — water vapor (gas)',
      ],
      explanation_ar: 'تحولات الثلج بالحرارة: ثلج (صلب) → ماء (سائل) بالانصهار → بخار ماء (غاز) بالتبخر. إضافة الحرارة هي السبب.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'أقرأ الشكل (ص 93): ماذا يحدث للثلج عند تسخينه؟',
      question_en: 'Read the diagram (p.93): What happens to ice when heated?',
      options_ar: [
        'ينصهر ويتحول إلى ماء (سائل)',
        'يتجمد أكثر',
        'يتحول إلى غاز مباشرة',
        'لا يتغير',
      ],
      options_en: [
        'It melts and turns into water (liquid)',
        'It freezes more',
        'It turns directly into gas',
        'It does not change',
      ],
      correct: 0,
      explanation_ar: 'عند تسخين الثلج: إضافة حرارة → انصهار → ماء (سائل). ثم بمزيد من الحرارة → تبخر → بخار ماء (غاز).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'كيف تغير الحرارة المواد الصلبة؟ (ص 94)',
      question_en: 'How does heat change solid materials? (p.94)',
      options_ar: [
        'تنصهر المواد الصلبة وتتحول إلى سائلة — مثل مكعبات الثلج عند حرارة الغرفة',
        'تتجمد المواد الصلبة أكثر',
        'لا تتغير المواد الصلبة بالحرارة',
        'تتبخر المواد الصلبة مباشرة',
      ],
      options_en: [
        'Solids melt and turn into liquids — like ice cubes at room temperature',
        'Solids freeze more',
        'Solids do not change with heat',
        'Solids evaporate directly',
      ],
      correct: 0,
      explanation_ar: 'الحرارة تنصهر المواد الصلبة — تنصهر مكعبات الثلج إذا تركت عند درجة حرارة الغرفة، وتتحول إلى ماء سائل.',
    },
    {
      type: 'true_false',
      question_ar: 'تنصهر مكعبات الثلج إذا تركت عند درجة حرارة الغرفة. (ص 94)',
      question_en: 'Ice cubes melt if left at room temperature. (p.94)',
      correct: 'true',
      explanation_ar: 'درجة حرارة الغرفة أعلى من درجة انصهار الثلج — لذلك تنصهر مكعبات الثلج وتتحول إلى ماء سائل.',
    },
    {
      type: 'matching',
      question_ar: 'صِل كل حالة الماء بالتحول المناسب (ص 93-94):',
      question_en: 'Match each state of water to the correct transformation (p.93-94):',
      pairs_ar: [
        { left: 'صلب → سائل', right: 'الانصهار (إضافة حرارة)' },
        { left: 'سائل → غاز', right: 'التبخر (تسخين)' },
        { left: 'غاز → سائل', right: 'التكثف (تبريد)' },
        { left: 'سائل → صلب', right: 'التجمد (تبريد)' },
      ],
      pairs_en: [
        { left: 'solid → liquid', right: 'Melting (adding heat)' },
        { left: 'liquid → gas', right: 'Evaporation (heating)' },
        { left: 'gas → liquid', right: 'Condensation (cooling)' },
        { left: 'liquid → solid', right: 'Freezing (cooling)' },
      ],
      explanation_ar: 'التحولات: صلب→سائل (انصهار)، سائل→غاز (تبخر)، غاز→سائل (تكثف)، سائل→صلب (تجمد). الحرارة للتسخين، التبريد للتجميد والتكثف.',
    },

    /* ─── كيف يغير التبريد المادة؟ — التكثف (ص 94) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'كيف يغير التبريد المادة؟ (ص 94)',
      question_en: 'How does cooling change matter? (p.94)',
      options_ar: [
        'المادة تفقد الحرارة فتتغير — يتكثف الغاز إلى سائل أو يتجمد السائل إلى صلب',
        'المادة تكتسب حرارة',
        'لا تتغير المادة بالتبريد',
        'تتبخر المادة',
      ],
      options_en: [
        'Matter loses heat and changes — gas condenses to liquid or liquid freezes to solid',
        'Matter gains heat',
        'Matter does not change with cooling',
        'Matter evaporates',
      ],
      correct: 0,
      explanation_ar: 'التبريد: المادة تفقد الحرارة فتتغير — يتكثف بخار الماء (غاز→سائل) أو يتجمد الماء (سائل→صلب).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ما معنى التكثف؟ (ص 94)',
      question_en: 'What does condensation mean? (p.94)',
      options_ar: [
        'تحول بخار الماء (غاز) إلى سائل عند برودته',
        'تحول السائل إلى غاز',
        'تحول الصلب إلى سائل',
        'تحول السائل إلى صلب',
      ],
      options_en: [
        'Water vapor (gas) turning into liquid when it cools',
        'Liquid turning into gas',
        'Solid turning into liquid',
        'Liquid turning into solid',
      ],
      correct: 0,
      explanation_ar: 'التكثف: عندما يبرد بخار الماء فإنه يتكثف — يتحول من غاز إلى سائل. يتكاثف بخار الماء على الكأس الباردة.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'لماذا تتكون قطرات صغيرة من الماء على السطح الخارجي للكأس الباردة؟ (ص 94)',
      question_en: 'Why do small water droplets form on the outer surface of a cold glass? (p.94)',
      options_ar: [
        'لأن بخار الماء في الهواء يتكاثف عندما يلامس الأجسام الباردة',
        'لأن الماء يتسرب من داخل الكأس',
        'لأن الكأس تتعرق',
        'لأن الجو ممطر',
      ],
      options_en: [
        'Because water vapor in the air condenses when it touches cold objects',
        'Because water leaks from inside the glass',
        'Because the glass sweats',
        'Because the weather is rainy',
      ],
      correct: 0,
      explanation_ar: 'بخار الماء الموجود في الهواء يتكاثف عندما يلامس الأجسام الباردة — فيتحول من غاز إلى سائل على شكل قطرات صغيرة على الكأس الباردة.',
    },
    {
      type: 'true_false',
      question_ar: 'يتكاثف بخار الماء على السطح الخارجي للكأس الباردة. (ص 94)',
      question_en: 'Water vapor condenses on the outer surface of a cold glass. (p.94)',
      correct: 'true',
      explanation_ar: 'بخار الماء في الهواء يلامس الكأس الباردة فيتكثف — يتحول من غاز إلى سائل (قطرات ماء) على السطح الخارجي.',
    },

    /* ─── التجمد (ص 93) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'ماذا يحدث للسوائل عندما تبرد كثيراً؟ (ص 93)',
      question_en: 'What happens to liquids when they cool a lot? (p.93)',
      options_ar: [
        'تتجمد وتتحول إلى مواد صلبة',
        'تتبخر',
        'تتكثف',
        'لا تتغير',
      ],
      options_en: [
        'They freeze and turn into solid materials',
        'They evaporate',
        'They condense',
        'They do not change',
      ],
      correct: 0,
      explanation_ar: 'قد تتجمد السوائل عندما تبرد — تتحول إلى مواد صلبة. هذا تغير فيزيائي بفقدان الحرارة.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'أيُّ السوائل التالية يتجمد عند درجة حرارة الغرفة؟ (ص 93)',
      question_en: 'Which of these liquids freezes at room temperature? (p.93)',
      options_ar: ['الشمع السائل', 'الماء', 'العصير', 'الزيت'],
      options_en: ['Liquid wax', 'Water', 'Juice', 'Oil'],
      correct: 0,
      explanation_ar: 'بعض السوائل مثل الشمع السائل تتجمّد عند درجة حرارة الغرفة. أما الماء فيجب أن يكون أبرد كثيراً حتى يتجمد.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'لماذا يجب أن يكون الماء أبرد كثيراً حتى يتجمد مقارنة بالشمع السائل؟ (ص 93)',
      question_en: 'Why must water be much colder to freeze compared to liquid wax? (p.93)',
      options_ar: [
        'لأن درجة تجمد الماء أقل كثيراً من درجة حرارة الغرفة، أما الشمع فيتجمد عند حرارة الغرفة',
        'لأن الماء أخف',
        'لأن الماء أكبر حجماً',
        'لا فرق بينهما',
      ],
      options_en: [
        'Because water\'s freezing point is much lower than room temperature, while wax freezes at room temperature',
        'Because water is lighter',
        'Because water is larger',
        'No difference between them',
      ],
      correct: 0,
      explanation_ar: 'الماء يجب أن يكون أبرد كثيراً ليصل إلى درجة تجمده (صفر مئوية). أما الشمع السائل فيتجمد عند درجة حرارة الغرفة.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'نشاط (ص 93): أصنّف. أجمع صوراً للماء في حالاته الثلاث ثم أصنفها. ما حالات الماء الثلاث؟',
      question_en: 'Activity (p.93): Classify. I collect pictures of water in its three states and classify them. What are the three states?',
      options_ar: [
        'صلبة (ثلج)، سائلة (ماء)، غازية (بخار ماء)',
        'صلبة فقط',
        'سائلة فقط',
        'غازية فقط',
      ],
      options_en: [
        'Solid (ice), liquid (water), gas (water vapor)',
        'Solid only',
        'Liquid only',
        'Gas only',
      ],
      correct: 0,
      explanation_ar: 'حالات الماء الثلاث: صلبة (ثلج)، سائلة (ماء)، غازية (بخار ماء). أصنف الصور بحسب كل حالة.',
    },
    {
      type: 'classify',
      question_ar: 'صنّف كل حالة من الماء إلى نوعها (ص 93):',
      question_en: 'Classify each state of water to its type (p.93):',
      categories_ar: ['ماء صلب', 'ماء سائل', 'ماء غازي'],
      categories_en: ['Solid water', 'Liquid water', 'Gaseous water'],
      items_ar: ['الثلوح', 'ماء الشرب', 'بخار الماء', 'الجليد', 'ماء البحر', 'الفقاعات المتصاعدة عند الغليان'],
      items_en: ['Snow', 'Drinking water', 'Water vapor', 'Ice', 'Sea water', 'Bubbles rising when boiling'],
      correct_categories: [0, 1, 2, 0, 1, 2],
      explanation_ar: 'صلب: الثلوج، الجليد. سائل: ماء الشرب، ماء البحر. غازي: بخار الماء، الفقاعات المتصاعدة عند الغليان.',
    },
    {
      type: 'true_false',
      question_ar: 'بعد أن تنطفئ الشعلة يبرد الشمع السائل ويصبح صلباً. (ص 93)',
      question_en: 'After the flame goes out, the liquid wax cools and becomes solid. (p.93)',
      correct: 'true',
      explanation_ar: 'الشمع السائل بعد انطفاء الشعلة يبرد ويتجمد — يتحول من سائل إلى صلب. هذا تغير فيزيائي بالتبريد.',
    },

    /* ─── مراجعة الدرس الثاني — أفكر وأتحدث وأكتب (ص 95) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'أتوقع (ص 95): ماذا يحدث لوعاء فيه ماء إذا عرضته للشمس؟',
      question_en: 'I predict (p.95): What happens to a container of water if I expose it to the sun?',
      options_ar: [
        'يتبخر الماء تدريجياً ويتحول إلى بخار ماء (غاز)',
        'يتجمد الماء',
        'لا يتغير الماء',
        'يتحول الماء إلى حجر',
      ],
      options_en: [
        'Water gradually evaporates and turns into water vapor (gas)',
        'Water freezes',
        'Water does not change',
        'Water turns into stone',
      ],
      correct: 0,
      explanation_ar: 'حرارة الشمس تسبب تبخر الماء — يتحول من سائل إلى غاز (بخار ماء) تدريجياً.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'ماذا يحدث لبخار الماء عندما يتكثف؟ (ص 95)',
      question_en: 'What happens to water vapor when it condenses? (p.95)',
      options_ar: [
        'يتحول من غاز إلى سائل (قطرات ماء)',
        'يتحول إلى صلب',
        'يتبخر أكثر',
        'لا يتغير',
      ],
      options_en: [
        'It turns from gas to liquid (water droplets)',
        'It turns into solid',
        'It evaporates more',
        'It does not change',
      ],
      correct: 0,
      explanation_ar: 'بخار الماء عند التكثف يتحول من غاز إلى سائل — تتكون قطرات ماء صغيرة، مثل ما يحدث على الكأس الباردة.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'السؤال الأساسي للدرس الثاني: كيف تؤثر درجة الحرارة في المادة؟ (ص 95)',
      question_en: 'Essential question for Lesson 2: How does temperature affect matter? (p.95)',
      options_ar: [
        'الحرارة تنصهر الصلب وتبخر السائل، والتبريد يكثف الغاز و يجمد السائل',
        'الحرارة تجمد السائل',
        'التبريد يبخر السائل',
        'لا تؤثر الحرارة في المادة',
      ],
      options_en: [
        'Heat melts solids and evaporates liquids; cooling condenses gas and freezes liquid',
        'Heat freezes liquid',
        'Cooling evaporates liquid',
        'Temperature does not affect matter',
      ],
      correct: 0,
      explanation_ar: 'الحرارة (تسخين): انصهار (صلب→سائل)، تبخر (سائل→غاز). التبريد: تكثف (غاز→سائل)، تجمد (سائل→صلب).',
    },

    /* ─── العلوم والرياضيات (ص 95) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'العلوم والرياضيات (ص 95): هل تتغير كتلة الثلج عندما ينصهر؟ كيف أتحقق من ذلك؟',
      question_en: 'Science and Math (p.95): Does the mass of ice change when it melts? How do I verify?',
      options_ar: [
        'لا تتغير الكتلة — أتحقق بالميزان ذي الكفتين قبل الانصهار وبعده',
        'تزداد الكتلة كثيراً',
        'تنقص الكتلة إلى الصفر',
        'لا يمكن التحقق',
      ],
      options_en: [
        'Mass does not change — I verify with a two-pan balance before and after melting',
        'Mass increases a lot',
        'Mass drops to zero',
        'Cannot be verified',
      ],
      correct: 0,
      explanation_ar: 'انصهار الثلج تغير فيزيائي — الكتلة لا تتغير. أتحقق بالميزان: أزن الثلج قبل الانصهار والماء بعده، فأجد الكتلة نفسها.',
    },

    /* ─── الإثراء والتوسع: كيف تصنع الأقلام الشمعية؟ (ص 96) ─── */
    {
      type: 'ordering',
      question_ar: 'رتّب خطوات صنع الأقلام الشمعية كما في صفحة الإثراء (ص 96):',
      question_en: 'Order the steps of making wax crayons as in the enrichment page (p.96):',
      items_ar: [
        'يُضاف إلى الشمع مادة ملونة لكي تعطيه اللون المطلوب',
        'يُصهر الشمع حتى يصير سائلاً',
        'يُصب الشمع السائل في قالب كبير',
        'تتكون الأقلام الشمعية بألوان مختلفة',
      ],
      items_en: [
        'Coloring material is added to wax to give the desired color',
        'The wax is melted until it becomes liquid',
        'The liquid wax is poured into a large mold',
        'Wax crayons form in different colors',
      ],
      explanation_ar: 'صنع الأقلام الشمعية: إضافة اللون ← إذابة الشمع (انصهار) ← الصب في قالب ← التشكل. يربط بين الانصهار والتجمد.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'كيف تصنع الأقلام الشمعية؟ (ص 96)',
      question_en: 'How are wax crayons made? (p.96)',
      options_ar: [
        'يصهر الشمع حتى يصير سائلاً ثم يصب في قالب كبير، بعد إضافة مادة ملونة',
        'تُقطع من حجر كبير',
        'تُصنع من البلاستيك فقط',
        'لا يمكن صناعتها',
      ],
      options_en: [
        'Wax is melted until liquid then poured into a large mold, after adding color',
        'They are cut from a large stone',
        'They are made only from plastic',
        'They cannot be made',
      ],
      correct: 0,
      explanation_ar: 'تصنع الأقلام الشمعية بإضافة مادة ملونة إلى الشمع، ثم إذابته (انصهار) حتى يصير سائلاً، ثم صبه في قالب — فيتشكل ويصبح صلباً (تجمد).',
    },
    {
      type: 'true_false',
      question_ar: 'في صنع الأقلام الشمعية يتحول الشمن من صلب إلى سائل (انصهار) ثم يعود صلباً (تجمد). (ص 96)',
      question_en: 'In making wax crayons, wax turns from solid to liquid (melting) then back to solid (freezing). (p.96)',
      correct: 'true',
      explanation_ar: 'صنع الأقلام الشمعية يجمع الانصهار (إذابة الشمع) والتجمد (تبريده في القالب) — تطبيق لتغيرات المادة بالحرارة والتبريد.',
    },
  ],
};

/* ════════════════════════════════════════════════════
 *  مراجعة وتقويم الفصل العاشر (ص 97-102)
 * ════════════════════════════════════════════════════ */
export const MATTER_CHANGES_REVIEW = {
  id: 'matter_changes_review',
  title_ar: 'مراجعة وتقويم الفصل العاشر',
  title_en: 'Chapter 10 Review and Assessment',
  questions: [

    /* ─── العلوم والتقنية والمجتمع (ص 97) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'العلوم والتقنية والمجتمع (ص 97): في قالب صنع الأقلام الشمعية مئات الثقوب الصغيرة في صورة أقلام شمعية. ماذا يحدث بعد ذلك؟',
      question_en: 'Science, Technology, and Society (p.97): The crayon mold has hundreds of small holes in the shape of crayons. What happens next?',
      options_ar: [
        'يملأ الشمع المنصهر كل ثقب منها، ثم يبرد فيصير على شكل القلم',
        'تُقطع الأقلام من حجر',
        'تُطبع الأقلام بالبلاستيك',
        'لا يحدث شيء',
      ],
      options_en: [
        'Melted wax fills each hole, then cools and becomes crayon-shaped',
        'Crayons are cut from stone',
        'Crayons are printed from plastic',
        'Nothing happens',
      ],
      correct: 0,
      explanation_ar: 'الشمع المنصهر يملأ كل ثقب في القالب، ثم يبرد (يتجمد) فيصبح على شكل القلم الشمعي — تطبيق للانصهار والتجمد معاً.',
    },
    {
      type: 'true_false',
      question_ar: 'يتم التحقق من أن الأقلام الشمعية جيدة قبل وضعها في علب. (ص 97)',
      question_en: 'Wax crayons are checked to be good before placing them in boxes. (p.97)',
      correct: 'true',
      explanation_ar: 'في مصانع الأقلام الشمعية: يُتحقق من جودة الأقلام قبل وضعها في علب — تطبيق لقيم الإتقان والانضباط (رؤية 2030).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'أتوقع (ص 97): ماذا يحدث إذا تُرك الشمع السائل عند درجة حرارة الغرفة؟',
      question_en: 'I predict (p.97): What happens if liquid wax is left at room temperature?',
      options_ar: [
        'يتجمد ويصبح صلباً — لأن الشمع يتجمد عند درجة حرارة الغرفة',
        'يتبخر',
        'يحتاج إلى حرارة عالية ليتجمد',
        'لا يتغير',
      ],
      options_en: [
        'It freezes and becomes solid — because wax freezes at room temperature',
        'It evaporates',
        'It needs high heat to freeze',
        'It does not change',
      ],
      correct: 0,
      explanation_ar: 'الشمع السائل يتجمد عند درجة حرارة الغرفة — لذلك إذا تُرك الشمع السائل في الغرفة فإنه يبرد ويصبح صلباً.',
    },

    /* ─── مراجعة المفردات (ص 98) ─── */
    {
      type: 'matching',
      question_ar: 'أكمل كل جملة بالكلمة المناسبة من القائمة (ص 98): يتبخر / التكثف / التغير الفيزيائي / التغير الكيميائي / الانصهار',
      question_en: 'Complete each sentence with the correct word (p.98): evaporates / condensation / physical change / chemical change / melting',
      pairs_ar: [
        { left: 'احتراق الخشب مثال على', right: 'التغير الكيميائي' },
        { left: 'الماء المتبخر في الهواء يتحول إلى سائل في عملية تسمى', right: 'التكثف' },
        { left: 'قد يتحول الماء إلى غاز، أي أنه', right: 'يتبخر' },
        { left: 'من الأمثلة على الرطوبة والجفاف', right: 'التغير الفيزيائي' },
        { left: 'تحول المادة الصلبة إلى مادة سائلة يسمى', right: 'الانصهار' },
      ],
      pairs_en: [
        { left: 'Burning wood is an example of', right: 'Chemical change' },
        { left: 'Water vapor in air turning into liquid is called', right: 'Condensation' },
        { left: 'Water may turn into gas, meaning it', right: 'Evaporates' },
        { left: 'Humidity and dryness are examples of', right: 'Physical change' },
        { left: 'A solid turning into a liquid is called', right: 'Melting' },
      ],
      explanation_ar: 'مراجعة المفردات: احتراق الخشب = تغير كيميائي. تبخر→سائل = تكثف. ماء→غاز = يتبخر. رطوبة وجفاف = تغير فيزيائي. صلب→سائل = انصهار.',
    },

    /* ─── السؤال 6: التغير الفيزيائي والكيميائي (ص 99) ─── */
    {
      type: 'classify',
      question_ar: 'السؤال 6 (ص 99): صنّف كل صورة إلى: تغير فيزيائي / تغير كيميائي. (الصورة ١: طي الورق على شكل طيورorigami / الصورة ٢: دراجة مصدأة)',
      question_en: 'Question 6 (p.99): Classify each image as: physical change / chemical change. (Image 1: folded paper origami birds / Image 2: rusty bicycle)',
      categories_ar: ['تغير فيزيائي', 'تغير كيميائي'],
      categories_en: ['Physical change', 'Chemical change'],
      items_ar: ['طي الورق على شكل طيور', 'صدأ الدراجة', 'تكوين شكل جديد من الورق', 'تحول الحديد إلى صدأ'],
      items_en: ['Folding paper into bird shapes', 'Bicycle rusting', 'Forming a new shape from paper', 'Iron turning to rust'],
      correct_categories: [0, 1, 0, 1],
      explanation_ar: 'طي الورق على شكل طيور = تغير فيزيائي (تغير الشكل فقط، الورق يبقى ورقاً). صدأ الدراجة = تغير كيميائي (تحول الحديد إلى مادة جديدة هي الصدأ).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'السؤال 6 (ص 99): أيُّ الصورتين تبيّن تغيراً فيزيائياً؟',
      question_en: 'Question 6 (p.99): Which image shows a physical change?',
      options_ar: [
        'طي الورق على شكل طيور — تغير الشكل فقط مع بقاء الخواص',
        'الدراجة المصدأة — تحول الحديد إلى مادة جديدة',
        'كلاهما تغير فيزيائي',
        'كلاهما تغير كيميائي',
      ],
      options_en: [
        'Folding paper into birds — only shape changes, properties remain',
        'Rusty bicycle — iron turns into a new substance',
        'Both are physical changes',
        'Both are chemical changes',
      ],
      correct: 0,
      explanation_ar: 'طي الورق على شكل طيورOrigami تغير فيزيائي — الورق يبقى ورقاً بخواصه نفسها، فقط تغير شكله.',
    },
    {
      type: 'multiple_choice',
      question_ar: 'السؤال 6 (ص 99): أيُّ الصورتين تبيّن تغيراً كيميائياً؟',
      question_en: 'Question 6 (p.99): Which image shows a chemical change?',
      options_ar: [
        'الدراجة المصدأة — تحول الحديد إلى صدأ (مادة جديدة مختلفة الخواص)',
        'طي الورق على شكل طيور',
        'كلاهما تغير كيميائي',
        'لا أحد منهما',
      ],
      options_en: [
        'Rusty bicycle — iron turns to rust (a new substance with different properties)',
        'Folding paper into birds',
        'Both are chemical changes',
        'Neither of them',
      ],
      correct: 0,
      explanation_ar: 'صدأ الدراجة تغير كيميائي — الحديد تحول إلى صدأ (مادة جديدة بنية بنية مختلفة الخواص) بسبب الهواء والماء.',
    },

    /* ─── السؤال 7: ماذا يحدث للثلج (ص 100) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'السؤال 7 (ص 100): أتوقع. ماذا يحدث للثلج عند تسخينه إلى درجة حرارة عالية مدة طويلة؟',
      question_en: 'Question 7 (p.100): I predict. What happens to ice when heated to a high temperature for a long time?',
      options_ar: [
        'ينصهر أولاً (يتحول إلى ماء سائل) ثم يتبخر (يتحول إلى بخار ماء غاز)',
        'يتجمد أكثر',
        'لا يتغير',
        'يتحول مباشرة إلى حجر',
      ],
      options_en: [
        'It first melts (turns to liquid water) then evaporates (turns to water vapor gas)',
        'It freezes more',
        'It does not change',
        'It turns directly into stone',
      ],
      correct: 0,
      explanation_ar: 'عند تسخين الثلج لدرجة حرارة عالية مدة طويلة: أولاً ينصهر (صلب→سائل)، ثم بمزيد من الحرارة يتبخر (سائل→غاز بخار ماء).',
    },
    {
      type: 'ordering',
      question_ar: 'رتّب تحولات الثلج عند تسخينه لدرجة حرارة عالية مدة طويلة (ص 100):',
      question_en: 'Order the transformations of ice when heated to high temperature for a long time (p.100):',
      items_ar: [
        'ثلج — مادة صلبة',
        'ينصهر → ماء — مادة سائلة',
        'يتبخر → بخار ماء — مادة غازية',
      ],
      items_en: [
        'Ice — solid matter',
        'Melts → water — liquid matter',
        'Evaporates → water vapor — gaseous matter',
      ],
      explanation_ar: 'التحولات بالتسخين: ثلج (صلب) → انصهار → ماء (سائل) → تبخر → بخار ماء (غاز). كل تحول بسبب إضافة الحرارة.',
    },

    /* ─── تقويم الأداء (ص 101) ─── */
    {
      type: 'ordering',
      question_ar: 'تقويم الأداء (ص 101): رتّب خطوات نشاط "تغيرات المادة" (طي ورقة وكتابة الأمثلة):',
      question_en: 'Performance assessment (p.101): Order the steps of the "Matter Changes" activity:',
      items_ar: [
        'أطوي ورقة من المنتصف',
        'أكتب على أحد جانبي الورقة (التغير الفيزيائي)، وعلى الجانب الآخر (التغير الكيميائي)',
        'أكتب قائمة تحوي على الأقل ثلاثة أمثلة على كل نوع من أنواع التغير',
        'أكتب جملة مفيدة توضح أنواع التغير الفيزيائي والكيميائي على جانبي الورقة',
      ],
      items_en: [
        'Fold a piece of paper in half',
        'Write "Physical Change" on one side and "Chemical Change" on the other',
        'Write a list with at least three examples for each type of change',
        'Write a useful sentence explaining physical and chemical changes on both sides',
      ],
      explanation_ar: 'تقويم الأداء: طي الورقة ← كتابة نوعي التغير على الجانبين ← ثلاثة أمثلة لكل نوع ← جملة مفيدة توضح الفرق.',
    },
    {
      type: 'classify',
      question_ar: 'تقويم الأداء (ص 101): أكتب ثلاثة أمثلة على كل نوع. صنّف كل مثال:',
      question_en: 'Performance assessment (p.101): Write three examples for each type. Classify each example:',
      categories_ar: ['تغير فيزيائي', 'تغير كيميائي'],
      categories_en: ['Physical change', 'Chemical change'],
      items_ar: ['طي الورق', 'قص الورق', 'تشكيل الصلصال', 'احتراق الخشب', 'صدأ الحديد', 'طهي البيض'],
      items_en: ['Folding paper', 'Cutting paper', 'Shaping clay', 'Burning wood', 'Rusting iron', 'Cooking an egg'],
      correct_categories: [0, 0, 0, 1, 1, 1],
      explanation_ar: 'أمثلة التغير الفيزيائي (3): طي الورق، قص الورق، تشكيل الصلصال. أمثلة التغير الكيميائي (3): احتراق الخشب، صدأ الحديد، طهي البيض.',
    },

    /* ─── نموذج الاختبار (ص 102) ─── */
    {
      type: 'multiple_choice',
      question_ar: 'نموذج الاختبار (ص 102): أيُّ مما يأتي يغيّر المادة إلى مادة أخرى؟',
      question_en: 'Test model (p.102): Which of the following changes matter into another substance?',
      options_ar: ['الطي', 'التمزيق', 'القص', 'الحرق'],
      options_en: ['Folding', 'Tearing', 'Cutting', 'Burning'],
      correct: 3,
      explanation_ar: 'الحرق يغيّر المادة إلى مادة أخرى (رماد) — تغير كيميائي. أما الطي والتمزيق والقص فتغيرات فيزيائية (تغير الشكل فقط).',
    },
    {
      type: 'multiple_choice',
      question_ar: 'نموذج الاختبار (ص 102): أنظر إلى الرسم (طبق فيه مكعبات ثلج). ما الشيء الذي يحدث في البداية إذا تُرك الطبق في درجة حرارة الغرفة؟',
      question_en: 'Test model (p.102): Look at the drawing (plate with ice cubes). What happens initially if the dish is left at room temperature?',
      options_ar: [
        'الماء يتبخر',
        'مكعبات الثلج تنصهر',
        'بخار الماء يتكثف',
        'الماء يتجمد',
      ],
      options_en: [
        'The water evaporates',
        'The ice cubes melt',
        'The water vapor condenses',
        'The water freezes',
      ],
      correct: 1,
      explanation_ar: 'درجة حرارة الغرفة أعلى من درجة انصهار الثلج — لذلك في البداية تنصهر مكعبات الثلج (تتحول إلى ماء سائل). التبخر يحدث لاحقاً بمزيد من الحرارة.',
    },
  ],
};

export const MATTER_CHANGES_UNIT = {
  id: 'matter_changes',
  title_ar: 'الفصل العاشر: تغيرات المادة',
  title_en: 'Chapter 10: Matter Changes',
  lessons: [MATTER_CHANGES_LESSON_1, MATTER_CHANGES_LESSON_2, MATTER_CHANGES_REVIEW],
};