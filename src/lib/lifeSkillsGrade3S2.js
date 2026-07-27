// مهارات الحياة والأسرة - الصف الثالث - الفصل الثاني
// الوحدة الرابعة: غذائي
// المصدر: كتاب مهارات الحياة والأسرة، وزارة التعليم السعودية 2025-1447

import { EDU_IMAGES } from '@/lib/eduImages';

export const LIFE_SKILLS_G3_UNITS = [
  {
    id: 'unit4',
    title_ar: 'الوحدة الرابعة: غذائي',
    title_en: 'Unit 4: My Nutrition',
    color: '#10b981',
    gradient: 'from-emerald-500 to-teal-600',
    image: EDU_IMAGES.LF_FOOD_PALM,
    lessons: [
      {
        id: 'u4l1',
        title_ar: 'المجموعات الغذائية وفوائدها',
        title_en: 'Food Groups and Their Benefits',
        icon: '🥗',
        image: EDU_IMAGES.LF_FOOD_GROUPS,
      },
      {
        id: 'u4l2',
        title_ar: 'النخلة الغذائية الصحية',
        title_en: 'Saudi Healthy Food Palm',
        icon: '🌴',
        image: EDU_IMAGES.LF_FOOD_PALM,
      },
      {
        id: 'u4l3',
        title_ar: 'مصادر الأطعمة',
        title_en: 'Sources of Food',
        icon: '🐄',
        image: EDU_IMAGES.LF_ANIMAL_SOURCE,
      },
      {
        id: 'u4l4',
        title_ar: 'الأطعمة الطبيعية والمصنّعة',
        title_en: 'Natural vs Processed Foods',
        icon: '🍎',
        image: EDU_IMAGES.LF_NATURAL_VS_PROCESS,
      },
      {
        id: 'u4l5',
        title_ar: 'آداب حفظ الغذاء',
        title_en: 'Food Etiquette and Preservation',
        icon: '🥡',
        image: EDU_IMAGES.LF_FRIDGE_STORE,
      },
      {
        id: 'u4l6',
        title_ar: 'آداب تناول الطعام',
        title_en: 'Table Manners',
        icon: '🍽️',
        image: EDU_IMAGES.LF_EATING_POSTURE,
      },
    ],
  },
];

// ===== أسئلة الدرس الأول: المجموعات الغذائية وفوائدها =====
function getU4L1Questions() {
  return [
    {
      id: 'u4l1_q1',
      type: 'multiple_choice',
      question_ar: 'ما الفائدة الرئيسية لمجموعة الألبان ومشتقاتها؟',
      options_ar: ['تُمِدُّ الجسم بالطاقة', 'تُساعد على النمو', 'تَقي من الأمراض بإذن الله', 'تُحسِّن المزاج'],
      correct_index: 1,
      explanation_ar: 'الألبان ومشتقاتها تُساعد على النُّمُو، كما أن الحبوب والخبز تُمِدّ الجسم بالطاقة، والفواكه والخضروات تَقي من الأمراض.',
    },
    {
      id: 'u4l1_q2',
      type: 'multiple_choice',
      question_ar: 'أيُّ المجموعات الغذائية تُمِدُّ الجسم بالطاقة وتُساعد على النمو معاً؟',
      options_ar: ['الفواكه والخضروات', 'اللحوم والبقوليات', 'الألبان ومشتقاتها', 'الزيوت والسكريات'],
      correct_index: 1,
      explanation_ar: 'مجموعة اللحوم والبقوليات تُمِدُّ الجسم بالطاقة وتُساعد على النمو في آنٍ واحد.',
    },
    {
      id: 'u4l1_q3',
      type: 'true_false',
      question_ar: 'يجب علينا تناول صنفٍ من كل مجموعة غذائية يومياً.',
      correct_answer: 'true',
      explanation_ar: 'صحيح، يجب علينا تناول صنفٍ من كل مجموعة غذائية يومياً لنضمن التغذية المتوازنة.',
    },
    {
      id: 'u4l1_q4',
      type: 'multiple_choice',
      question_ar: 'أيُّ المجموعات الغذائية تَقي - بإذن الله - من الأمراض؟',
      options_ar: ['الحبوب والخبز', 'اللحوم والبقوليات', 'الفواكه والخضروات', 'الألبان ومشتقاتها'],
      correct_index: 2,
      explanation_ar: 'مجموعة الفواكه والخضروات تَقي - بإذن الله - من الأمراض لاحتوائها على الفيتامينات والمعادن.',
    },
    {
      id: 'u4l1_q5',
      type: 'classify',
      image: EDU_IMAGES.LF_FOOD_MATCH,
      question_ar: 'صنِّف كل طعام إلى مجموعته الغذائية الصحيحة:',
      categories_ar: ['يُساعد على النمو', 'يُمِدُّ بالطاقة', 'يَقي من الأمراض'],
      items_ar: [
        { text: 'الحليب', correct_category: 0 },
        { text: 'الأرز', correct_category: 1 },
        { text: 'التفاح', correct_category: 2 },
        { text: 'الجبن', correct_category: 0 },
        { text: 'الخبز', correct_category: 1 },
        { text: 'الجزر', correct_category: 2 },
      ],
      explanation_ar: 'الألبان ومشتقاتها (حليب، جبن) تُساعد على النمو. الحبوب (أرز، خبز) تُمِدُّ بالطاقة. الفواكه والخضروات (تفاح، جزر) تَقي من الأمراض.',
    },
    {
      id: 'u4l1_q6',
      type: 'true_false',
      question_ar: 'من المقبول أن يقتصر الإنسان في غذائه على نوع واحد من الأطعمة.',
      correct_answer: 'false',
      explanation_ar: 'خطأ، من الضروري التنوع في الغذاء؛ إذ لا ينبغي للإنسان أن يقتصر في غذائه على نوع واحد من الأطعمة.',
    },
    {
      id: 'u4l1_q7',
      type: 'multiple_choice',
      question_ar: 'كم مجموعة غذائية رئيسية تتضمنها النخلة الغذائية الصحية السعودية؟',
      options_ar: ['٣ مجموعات', '٤ مجموعات', '٥ مجموعات', '٦ مجموعات'],
      correct_index: 3,
      explanation_ar: 'تتضمن النخلة الغذائية الصحية السعودية ٦ مجموعات غذائية رئيسية: الحبوب، الخضار، الفواكه، الألبان، اللحوم والبقوليات، والزيوت والسكريات.',
    },
    {
      id: 'u4l1_q8',
      type: 'ordering',
      image: EDU_IMAGES.LF_FOOD_PALM,
      question_ar: 'رتّب المجموعات الغذائية من الأكثر كمية موصى بها إلى الأقل حسب النخلة الغذائية:',
      items_ar: ['الحبوب والخبز', 'الخضار', 'الفواكه', 'الألبان ومشتقاتها', 'اللحوم والبقوليات', 'الزيوت والسكريات'],
      correct_order: [0, 1, 2, 3, 4, 5],
      explanation_ar: 'حسب النخلة الغذائية الصحية السعودية تُؤكل الحبوب بأكبر كمية، ثم الخضار، ثم الفواكه، ثم الألبان، ثم اللحوم، وأقلها الزيوت والسكريات.',
    },
  ];
}

// ===== أسئلة الدرس الثاني: مصادر الأطعمة =====
function getU4L2Questions() {
  return [
    {
      id: 'u4l2_q1',
      type: 'multiple_choice',
      question_ar: 'كم مصدراً للأطعمة نعرفه؟',
      options_ar: ['مصدر واحد', 'مصدران', 'ثلاثة مصادر', 'أربعة مصادر'],
      correct_index: 1,
      explanation_ar: 'للأطعمة مصدران: مصدر حيواني (كاللحوم والألبان) ومصدر نباتي (كالخضروات والفواكه والحبوب).',
    },
    {
      id: 'u4l2_q2',
      type: 'classify',
      image: EDU_IMAGES.LF_ANIMAL_SOURCE,
      question_ar: 'صنِّف كل غذاء إلى مصدره الصحيح:',
      categories_ar: ['مصدر حيواني', 'مصدر نباتي'],
      items_ar: [
        { text: 'الحليب', correct_category: 0 },
        { text: 'الجزر', correct_category: 1 },
        { text: 'البيض', correct_category: 0 },
        { text: 'التمر', correct_category: 1 },
        { text: 'اللحم', correct_category: 0 },
        { text: 'الخبز', correct_category: 1 },
        { text: 'الجبن', correct_category: 0 },
        { text: 'الباذنجان', correct_category: 1 },
      ],
      explanation_ar: 'المصدر الحيواني: الحليب، البيض، اللحم، الجبن. المصدر النباتي: الجزر، التمر، الخبز، الباذنجان.',
    },
    {
      id: 'u4l2_q3',
      type: 'multiple_choice',
      question_ar: 'السمك من مجموعة:',
      options_ar: ['الحليب ومشتقاته', 'اللحوم والبقوليات', 'الفواكه والخضروات', 'الحبوب والخبز'],
      correct_index: 1,
      explanation_ar: 'السمك من مجموعة اللحوم والبقوليات.',
    },
    {
      id: 'u4l2_q4',
      type: 'multiple_choice',
      question_ar: 'خبز الساندويتش من مجموعة:',
      options_ar: ['الفواكه والخضروات', 'الحبوب والخبز', 'اللحوم والبقوليات', 'الحليب ومشتقاته'],
      correct_index: 1,
      explanation_ar: 'خبز الساندويتش من مجموعة الحبوب والخبز.',
    },
    {
      id: 'u4l2_q5',
      type: 'multiple_choice',
      question_ar: 'القرع (الكوسا) من مجموعة:',
      options_ar: ['اللحوم والبقوليات', 'الحليب ومشتقاته', 'الفواكه والخضروات', 'الحبوب والخبز'],
      correct_index: 2,
      explanation_ar: 'القرع من مجموعة الفواكه والخضروات لأنه ذو مصدر نباتي.',
    },
    {
      id: 'u4l2_q6',
      type: 'true_false',
      question_ar: 'الزبدة ذات مصدر نباتي.',
      correct_answer: 'false',
      explanation_ar: 'خطأ، الزبدة ذات مصدر حيواني لأنها مشتقة من الحليب.',
    },
    {
      id: 'u4l2_q7',
      type: 'matching',
      question_ar: 'صل كل طعام بمصدره الصحيح:',
      pairs_ar: [
        { right: 'السمك', left: 'حيواني' },
        { right: 'الأرز', left: 'نباتي' },
        { right: 'البيض', left: 'حيواني' },
        { right: 'العدس', left: 'نباتي' },
      ],
      explanation_ar: 'السمك والبيض من مصدر حيواني، بينما الأرز والعدس من مصدر نباتي.',
    },
    {
      id: 'u4l2_q8',
      type: 'true_false',
      question_ar: 'التمر من المصدر الحيواني.',
      correct_answer: 'false',
      explanation_ar: 'خطأ، التمر من المصدر النباتي لأنه ثمرة شجرة النخلة.',
    },
  ];
}

// ===== أسئلة الدرس الثالث: الأطعمة الطبيعية والمصنّعة =====
function getU4L3Questions() {
  return [
    {
      id: 'u4l3_q1',
      type: 'multiple_choice',
      question_ar: 'ما الذي يُضاف إلى الأطعمة المصنّعة أثناء تصنيعها؟',
      options_ar: ['الفيتامينات الطبيعية', 'مواد كيميائية لتحسين النكهة أو اللون أو الطعم', 'المعادن المفيدة', 'البروتينات الطبيعية'],
      correct_index: 1,
      explanation_ar: 'أثناء تصنيع الأطعمة يُضاف بعض المواد الكيميائية لتحسين النكهة أو اللون أو الطعم، وهي مضرة لصحة الإنسان عند تناولها على المدى الطويل.',
    },
    {
      id: 'u4l3_q2',
      type: 'true_false',
      question_ar: 'المواد الكيميائية المضافة للأطعمة المصنّعة مضرة لصحة الإنسان على المدى الطويل.',
      correct_answer: 'true',
      explanation_ar: 'صحيح، المواد الكيميائية المضافة للأطعمة المصنّعة مضرة لصحة الإنسان عند تناولها على المدى الطويل.',
    },
    {
      id: 'u4l3_q3',
      type: 'classify',
      image: EDU_IMAGES.LF_NATURAL_VS_PROCESS,
      question_ar: 'صنِّف كل طعام إلى طبيعي أو مصنّع:',
      categories_ar: ['طبيعي', 'مصنّع'],
      items_ar: [
        { text: 'التفاح', correct_category: 0 },
        { text: 'شرائح البطاطس المقلية', correct_category: 1 },
        { text: 'الأناناس', correct_category: 0 },
        { text: 'المشروبات الغازية', correct_category: 1 },
        { text: 'الكيك', correct_category: 1 },
        { text: 'الكروسان', correct_category: 1 },
        { text: 'الحلوى الملوّنة', correct_category: 1 },
        { text: 'العنب', correct_category: 0 },
      ],
      explanation_ar: 'الأطعمة الطبيعية: التفاح، الأناناس، العنب. الأطعمة المصنّعة: شرائح البطاطس، المشروبات الغازية، الكيك، الكروسان، الحلوى.',
    },
    {
      id: 'u4l3_q4',
      type: 'multiple_choice',
      question_ar: 'لماذا تعتبر الأطعمة الطبيعية أفضل للجسم؟',
      options_ar: ['لأنها أرخص ثمناً', 'لأنها أفضل لصحتنا وسلامة أجسامنا من الأغذية المصنّعة', 'لأنها أسهل في الطهي', 'لأنها أكثر تنوعاً في النكهات'],
      correct_index: 1,
      explanation_ar: 'تناول الأغذية الطبيعية أفضل لصحتنا وسلامة أجسامنا من الأغذية المصنّعة.',
    },
    {
      id: 'u4l3_q5',
      type: 'multiple_choice',
      question_ar: 'ما الذي تجعلك المواد الكيميائية المضافة للأغذية المصنّعة تفعله؟',
      options_ar: ['تشعر بالشبع بسرعة', 'تأكل منها كثيراً حتى تصبح عادة غذائية يومية', 'تتجنب تناولها تلقائياً', 'لا تؤثر على سلوكك الغذائي'],
      correct_index: 1,
      explanation_ar: 'المواد الكيميائية المضافة تجعل الإنسان يُكثر من تناولها حتى تصبح عادة غذائية يومية مضرة.',
    },
    {
      id: 'u4l3_q6',
      type: 'true_false',
      question_ar: 'إعداد الوجبة في المنزل أفضل وأضمن للسلامة وأرخص ثمناً.',
      correct_answer: 'true',
      explanation_ar: 'صحيح، إعداد الوجبة في المنزل أفضل وأضمن للسلامة وأرخص ثمناً.',
    },
    {
      id: 'u4l3_q7',
      type: 'multiple_choice',
      question_ar: 'ما الآية الكريمة التي تحثّ على تجنب الإسراف في الطعام والشراب؟',
      options_ar: [
        '﴿وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ﴾',
        '﴿وَلَا تُبَذِّرْ تَبْذِيرًا﴾',
        '﴿كُلُوا مِن طَيِّبَاتِ مَا رَزَقْنَاكُمْ﴾',
        '﴿إِنَّ اللَّهَ يُحِبُّ الْمُقْسِطِينَ﴾',
      ],
      correct_index: 0,
      explanation_ar: 'قال الله تعالى: ﴿وَكُلُوا وَاشْرَبُوا وَلَا تُسْرِفُوا إِنَّهُ لَا يُحِبُّ الْمُسْرِفِينَ﴾ — سورة الأعراف، الآية ٣١.',
    },
    {
      id: 'u4l3_q8',
      type: 'true_false',
      question_ar: 'بعض الأطعمة تؤكل نيّئة وبعضها يُؤكل مطبوخاً.',
      correct_answer: 'true',
      explanation_ar: 'صحيح، بعض الأطعمة تؤكل نيّئة (كالجزر والفواكه) وبعضها يُؤكل مطبوخاً (كاللحوم).',
    },
  ];
}

// ===== أسئلة الدرس الرابع: آداب تناول الطعام =====
function getU4L4Questions() {
  return [
    {
      id: 'u4l4_q1',
      type: 'multiple_choice',
      question_ar: 'ما أحد أهم آداب تناول الطعام؟',
      options_ar: ['الأكل بسرعة', 'غسل اليدين قبل الأكل وبعده', 'الأكل وأنا واقف', 'الحديث أثناء المضغ'],
      correct_index: 1,
      explanation_ar: 'من آداب تناول الطعام: غسل اليدين قبل الأكل وبعده.',
    },
    {
      id: 'u4l4_q2',
      type: 'true_false',
      question_ar: 'يجوز الشرب وأنا واقف.',
      correct_answer: 'false',
      explanation_ar: 'خطأ، من الآداب الصحيحة أن أتجنب الشرب وأنا واقفة/واقف.',
    },
    {
      id: 'u4l4_q3',
      type: 'ordering',
      image: EDU_IMAGES.LF_EATING_POSTURE,
      question_ar: 'رتِّب خطوات تناول الطعام بالشكل الصحيح:',
      items_ar: ['أغسل يديَّ', 'أُقلِّم أظفاري إن كانت غير مُقلَّمة', 'أجلس جلوساً صحيحاً', 'أتناول الطعام بهدوء ومضغ جيد', 'أغسل يديَّ بعد الأكل'],
      correct_order: [1, 0, 2, 3, 4],
      explanation_ar: 'الترتيب الصحيح: تقليم الأظفار أولاً، ثم غسل اليدين، ثم الجلوس الصحيح، ثم الأكل بهدوء، ثم غسل اليدين بعد الأكل.',
    },
    {
      id: 'u4l4_q4',
      type: 'multiple_choice',
      question_ar: 'ما الحديث النبوي الشريف الذي يُعلّمنا آداب تناول الطعام؟',
      options_ar: [
        '«يا غلام، سمِّ الله، وكُل بيمينك، وكُل ممَّا يليك»',
        '«كلوا واشربوا ولا تسرفوا»',
        '«النظافة من الإيمان»',
        '«المؤمن القوي خير من المؤمن الضعيف»',
      ],
      correct_index: 0,
      explanation_ar: 'عن عمرو بن أبي سلمة قال: قال لي الرسول صلى الله عليه وسلم: «يا غلام، سمِّ الله، وكُل بيمينك، وكُل ممَّا يليك» — رواه البخاري.',
    },
    {
      id: 'u4l4_q5',
      type: 'true_false',
      question_ar: 'أتجنب النفخ في الطعام والشراب الحار.',
      correct_answer: 'true',
      explanation_ar: 'صحيح، من الآداب الصحيحة تجنب النفخ في الطعام والشراب الحار.',
    },
    {
      id: 'u4l4_q6',
      type: 'classify',
      image: EDU_IMAGES.LF_EAT_RIGHT_HAND,
      question_ar: 'صنِّف كل تصرف إلى صحيح أو خاطئ عند تناول الطعام:',
      categories_ar: ['تصرف صحيح ✅', 'تصرف خاطئ ❌'],
      items_ar: [
        { text: 'غسل اليدين قبل الأكل', correct_category: 0 },
        { text: 'الأكل وأنا واقف', correct_category: 1 },
        { text: 'المضغ بهدوء وببطء', correct_category: 0 },
        { text: 'النفخ في الطعام الساخن', correct_category: 1 },
        { text: 'التسمية عند البدء', correct_category: 0 },
        { text: 'التحدث أثناء المضغ', correct_category: 1 },
      ],
      explanation_ar: 'التصرفات الصحيحة: غسل اليدين، المضغ بهدوء، التسمية. التصرفات الخاطئة: الأكل واقفاً، النفخ في الطعام، التحدث أثناء المضغ.',
    },
    {
      id: 'u4l4_q7',
      type: 'multiple_choice',
      question_ar: 'ما رأيك في وضع الوجبة الغذائية داخل الحقيبة المدرسية؟',
      options_ar: ['لا بأس بذلك', 'لا يُفضَّل لأنه قد يتسرب ويُتلف الكتب', 'ضروري لأنه يحفظ الطعام', 'مقبول إذا كانت الوجبة في علبة'],
      correct_index: 1,
      explanation_ar: 'لا يُفضَّل وضع الوجبة الغذائية بين الكتب في الحقيبة المدرسية لأنها قد تتسرب وتُتلف الكتب.',
    },
    {
      id: 'u4l4_q8',
      type: 'true_false',
      question_ar: 'يجب أن أُقلِّم أظفاري إن كانت غير مُقلَّمة قبل الأكل.',
      correct_answer: 'true',
      explanation_ar: 'صحيح، النظافة الشخصية من آداب تناول الطعام، ومنها تقليم الأظفار.',
    },
  ];
}

// ===== أسئلة الدرس الخامس: حفظ الغذاء =====
function getU4L5Questions() {
  return [
    {
      id: 'u4l5_q1',
      type: 'multiple_choice',
      question_ar: 'ما أفضل طريقة لتغليف الشطائر؟',
      options_ar: ['ورق الصحف', 'ورق الصُّحف مُجدداً', 'أكياس البلاستيك', 'لا تحتاج تغليفاً'],
      correct_index: 1,
      explanation_ar: 'ورق الصُّحف هو الأفضل لتغليف الشطائر لأنه أنظف وأكثر حفاظاً على الطعام.',
    },
    {
      id: 'u4l5_q2',
      type: 'true_false',
      question_ar: 'يجوز ترك الطعام خارج الثلاجة مدة طويلة.',
      correct_answer: 'false',
      explanation_ar: 'خطأ، لا يجوز ترك الطعام خارج الثلاجة مدة طويلة لأن ذلك يُعرّضه للتلوث والحشرات والفساد.',
    },
    {
      id: 'u4l5_q3',
      type: 'classify',
      image: EDU_IMAGES.LF_COVERED_FOOD,
      question_ar: 'صنِّف كل تصرف في حفظ الغذاء إلى صحيح أو خاطئ:',
      categories_ar: ['تصرف صحيح ✅', 'تصرف خاطئ ❌'],
      items_ar: [
        { text: 'حفظ الأطعمة في الثلاجة مُغلَّفة بالبلاستيك', correct_category: 0 },
        { text: 'ترك الطعام مكشوفاً للذباب والحشرات', correct_category: 1 },
        { text: 'تغليف الفائض من الغذاء بطريقة مناسبة', correct_category: 0 },
        { text: 'رمي الفائض من الطعام في النفايات', correct_category: 1 },
        { text: 'وضع الوجبة المدرسية بين الكتب', correct_category: 1 },
        { text: 'حفظ الغذاء الزائد في علبة مقسَّمة', correct_category: 0 },
      ],
      explanation_ar: 'التصرفات الصحيحة: التغليف والحفظ بالثلاجة وتغليف الفائض. التصرفات الخاطئة: ترك الطعام مكشوفاً، رمي الفائض، وضع الوجبة بين الكتب.',
    },
    {
      id: 'u4l5_q4',
      type: 'multiple_choice',
      question_ar: 'كيف أحفظ الغذاء إذا كان شطيرة؟',
      options_ar: ['في ورق الصُّحف أو ورق الألومنيوم', 'في مناديل ورقية عادية', 'في جيب حقيبتي مباشرة', 'بدون تغليف'],
      correct_index: 0,
      explanation_ar: 'إذا كان الغذاء شطيرة أحفظها في أكياس البلاستيك المناسبة أو ورق حفظ الطعام المخصص لذلك.',
    },
    {
      id: 'u4l5_q5',
      type: 'true_false',
      question_ar: 'شكرُ الله على نعمة الغذاء يكون بحفظها وإكرامها.',
      correct_answer: 'true',
      explanation_ar: 'صحيح، شكرُ الله على نعمة الغذاء يكون بحفظها وإكرامها وعدم إهدارها.',
    },
    {
      id: 'u4l5_q6',
      type: 'multiple_choice',
      question_ar: 'ما الذي تعكسه نظافة المدرسة؟',
      options_ar: ['قِيَم الطلاب وأخلاقهم فيها', 'عدد الطلاب', 'مساحة الفصول', 'طول اليوم الدراسي'],
      correct_index: 0,
      explanation_ar: 'نظافةُ المدرسة تعكس قِيَم الطلاب وأخلاقهم فيها.',
    },
    {
      id: 'u4l5_q7',
      type: 'ordering',
      image: EDU_IMAGES.LF_PACK_LUNCH,
      question_ar: 'رتِّب خطوات حفظ الوجبة المدرسية بالشكل الصحيح:',
      items_ar: ['أُعِدّ الوجبة في المنزل', 'أُغلِّف الوجبة بطريقة مناسبة', 'أضعها في حقيبتي في مكان خاص', 'أتناولها في وقت الاستراحة', 'أرمي الفائض في سلة المهملات'],
      correct_order: [0, 1, 2, 3, 4],
      explanation_ar: 'الترتيب الصحيح لحفظ الوجبة المدرسية: الإعداد، ثم التغليف، ثم الوضع في الحقيبة، ثم التناول، ثم التخلص من الفائض في المكان المناسب.',
    },
    {
      id: 'u4l5_q8',
      type: 'true_false',
      question_ar: 'الحرص على تغليف الغذاء يحفظه من التلوث والفساد.',
      correct_answer: 'true',
      explanation_ar: 'صحيح، الحرص على تغليف الغذاء يحفظه من التلوث والفساد والحشرات.',
    },
  ];
}

// ===== أسئلة الإرشادات العامة والتمارين =====
function getU4ReviewQuestions() {
  return [
    {
      id: 'u4rev_q1',
      type: 'multiple_choice',
      question_ar: 'ما أفضل طريقة لقضاء وقت الفراغ؟',
      options_ar: ['مشاهدة التلفاز طوال الوقت', 'القراءة المفيدة والألعاب البدنية', 'النوم الطويل', 'اللعب بالهاتف فقط'],
      correct_index: 1,
      explanation_ar: 'أفضل طريقة لقضاء وقت الفراغ هي القراءة المفيدة وممارسة الألعاب البدنية المفيدة.',
    },
    {
      id: 'u4rev_q2',
      type: 'true_false',
      image: EDU_IMAGES.LF_ELEC_DANGER,
      question_ar: 'لمس الأسلاك الكهربائية المكشوفة خطر، وخاصةً في وقت الأمطار.',
      correct_answer: 'true',
      explanation_ar: 'صحيح، لمس الأسلاك الكهربائية المكشوفة خطرٌ شديد، وخاصةً في وقت الأمطار.',
    },
    {
      id: 'u4rev_q3',
      type: 'multiple_choice',
      image: EDU_IMAGES.LF_SWIM_SAFE,
      question_ar: 'عند السباحة يجب:',
      options_ar: ['السباحة في مياه السيول', 'السباحة في الأماكن العميقة', 'أخذ الإذن من الوالدين', 'السباحة وحدك بعيداً'],
      correct_index: 2,
      explanation_ar: 'عند السباحة يجب أخذ الإذن من الوالدين، وتجنب السباحة في مياه السيول والأماكن العميقة.',
    },
    {
      id: 'u4rev_q4',
      type: 'multiple_choice',
      question_ar: 'متى تكون الشمس مفيدة؟',
      options_ar: ['وقت الظهيرة فقط', 'في الصباح الباكر وقبل الغروب', 'في أي وقت بدون قيود', 'ليلاً'],
      correct_index: 1,
      explanation_ar: 'الشمس مفيدة في الصباح الباكر وقبل الغروب، وهي مفيدة للإنسان والحيوان والنبات.',
    },
    {
      id: 'u4rev_q5',
      type: 'true_false',
      question_ar: 'الصداقة الحقيقة تقوم على المصالح المادية.',
      correct_answer: 'false',
      explanation_ar: 'خطأ، الصداقة الحقيقة لا تقوم على المصالح المادية.',
    },
    {
      id: 'u4rev_q6',
      type: 'fill_blank',
      question_ar: 'السباحة رياضة ________________________.',
      answer_ar: 'مُمتعة',
      options_ar: ['مُمتعة', 'مُضنية', 'خطيرة', 'مُكلفة'],
      correct_index: 0,
      explanation_ar: 'السباحة رياضة مُمتعة ومفيدة للجسم.',
    },
    {
      id: 'u4rev_q7',
      type: 'fill_blank',
      question_ar: 'الشمس مفيدة في ________________________ الباكر وقبل الغروب.',
      answer_ar: 'الصباح',
      options_ar: ['الصباح', 'الظهيرة', 'المساء', 'الليل'],
      correct_index: 0,
      explanation_ar: 'الشمس مفيدة في الصباح الباكر وقبل الغروب.',
    },
    {
      id: 'u4rev_q8',
      type: 'multiple_choice',
      question_ar: 'التنويع في الغذاء يُمِدُّ جسمك باحتياجاته:',
      options_ar: ['الترفيهية', 'الضرورية', 'الثانوية', 'المؤقتة'],
      correct_index: 1,
      explanation_ar: 'التنويع في الغذاء يُمِدُّ جسمك باحتياجاته الضرورية.',
    },
  ];
}

// ===== هيكل الوحدات والدروس =====
export const LIFE_SKILLS_G3_CHAPTERS = [
  {
    id: 'u4',
    title_ar: 'الوحدة الرابعة: غذائي',
    subtitle_ar: 'المجموعات الغذائية • الأطعمة • الآداب',
    color: '#10b981',
    gradient: 'from-emerald-500 to-teal-600',
    coverImage: EDU_IMAGES.LF_FOOD_PALM,
    lessons: [
      {
        id: 'u4l1',
        title_ar: 'المجموعات الغذائية وفوائدها',
        image: EDU_IMAGES.LF_FOOD_GROUPS,
        count: 8,
        getQuestions: getU4L1Questions,
      },
      {
        id: 'u4l2',
        title_ar: 'مصادر الأطعمة (حيواني / نباتي)',
        image: EDU_IMAGES.LF_ANIMAL_SOURCE,
        count: 8,
        getQuestions: getU4L2Questions,
      },
      {
        id: 'u4l3',
        title_ar: 'الأطعمة الطبيعية والمصنّعة',
        image: EDU_IMAGES.LF_NATURAL_VS_PROCESS,
        count: 8,
        getQuestions: getU4L3Questions,
      },
      {
        id: 'u4l4',
        title_ar: 'آداب تناول الطعام',
        image: EDU_IMAGES.LF_EATING_POSTURE,
        count: 8,
        getQuestions: getU4L4Questions,
      },
      {
        id: 'u4l5',
        title_ar: 'حفظ الغذاء وصونه',
        image: EDU_IMAGES.LF_FRIDGE_STORE,
        count: 8,
        getQuestions: getU4L5Questions,
      },
      {
        id: 'u4rev',
        title_ar: 'تمارين عامة ومراجعة شاملة',
        image: EDU_IMAGES.LF_HEALTHY_CHILD,
        count: 8,
        getQuestions: getU4ReviewQuestions,
      },
    ],
  },
];