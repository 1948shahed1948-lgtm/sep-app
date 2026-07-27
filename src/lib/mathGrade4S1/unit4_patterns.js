// بنك رياضيات الصف الرابع الفصل الأول — الفصل: الأنماط والجبر (صفحات 104-135)
// مرجع: كتاب الرياضيات الصف الرابع الابتدائي

export const UNIT4_LESSONS = [
  {
    id: 'u4l1',
    title_ar: '٤-١ العبارات والجمل العددية',
    subtitle_ar: 'الفرق بين العبارة والجملة العددية',
    page: 107,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=70',
    color: 'from-indigo-500 to-purple-600',
    getQuestions: () => [
      {
        id: 'u4l1q1', type: 'multiple_choice',
        question_ar: 'أي مما يلي عبارة عددية؟',
        options_ar: ['٧ + ٣', '٧ + ٣ = ١٠', '٥ × ٢ = ١٠', '٩ − ٤ = ٥'],
        correct_index: 0,
        explanation_ar: 'العبارة العددية لا تحتوي على علامة «=»، بينما الجملة العددية تحتوي.',
        golden_rule_ar: 'العبارة = لا يوجد «=». الجملة = يوجد «=».',
        page: 107
      },
      {
        id: 'u4l1q2', type: 'multiple_choice',
        question_ar: 'أي مما يلي جملة عددية؟',
        options_ar: ['٤ + ٥ = ٩', '٤ + ٥', '٨ × ٣', '١٢ − ٧'],
        correct_index: 0,
        explanation_ar: 'الجملة العددية تحتوي على علامة «=» وقيمة.',
        page: 107
      },
      {
        id: 'u4l1q3', type: 'true_false',
        question_ar: '«١٥ ÷ ٣» عبارة عددية.',
        correct_answer: 'true',
        explanation_ar: 'لا يوجد «=»، فهي عبارة عددية.',
        page: 107
      },
      {
        id: 'u4l1q4', type: 'classify',
        question_ar: 'صنِّف كل تعبير إلى عبارة أو جملة عددية:',
        categories_ar: ['عبارة عددية', 'جملة عددية'],
        items_ar: [
          { text: '٦ + ٤', correct_category: 0 },
          { text: '٦ + ٤ = ١٠', correct_category: 1 },
          { text: '٩ × ٢', correct_category: 0 },
          { text: '١٨ = ٩ × ٢', correct_category: 1 },
          { text: '٢٠ − ٥', correct_category: 0 },
          { text: '٢٠ − ٥ = ١٥', correct_category: 1 }
        ],
        explanation_ar: 'وجود «=» يجعلها جملة، وعدمه يجعلها عبارة.',
        page: 107
      },
      {
        id: 'u4l1q5', type: 'fill_blank',
        question_ar: 'ما قيمة العبارة: ٨ + ٧ − ٣ = ؟',
        options_ar: ['١٢', '١٨', '١٤', '١٠'],
        correct_index: 0,
        explanation_ar: 'نجمع ثم نطرح: ٨ + ٧ = ١٥، ١٥ − ٣ = ١٢.',
        page: 107
      },
      {
        id: 'u4l1q6', type: 'info',
        question_ar: '💡 العبارة العددية: تعبير بدون «=» (مثل ٥+٣). الجملة العددية: تعبير مع «=» وقيمة (مثل ٥+٣=٨). نحسب العبارة لإيجاد قيمتها.',
        page: 107
      },
      {
        id: 'u4l1q7', type: 'multiple_choice',
        question_ar: 'ما قيمة العبارة: ٤ × ٦ − ٥ = ؟',
        options_ar: ['١٩', '٢٩', '٢٤', '٢٠'],
        correct_index: 0,
        explanation_ar: 'نضرب أولاً: ٤ × ٦ = ٢٤، ثم نطرح: ٢٤ − ٥ = ١٩.',
        page: 107
      },
      {
        id: 'u4l1q8', type: 'matching',
        question_ar: 'صل كل عبارة بقيمتها:',
        pairs_ar: [
          { left: '٣ + ٤ × ٢', right: '١١' },
          { left: '(٣ + ٤) × ٢', right: '١٤' },
          { left: '١٠ − ٣ + ٢', right: '٩' },
          { left: '٦ × ٥ − ٤', right: '٢٦' }
        ],
        explanation_ar: 'الضرب والقسمة قبل الجمع والطرح، والأقواس لها الأولوية.',
        page: 107
      }
    ]
  },
  {
    id: 'u4l2',
    title_ar: '٤-٢ تمثيل الجمل العددية وكتابتها',
    subtitle_ar: 'تحويل المسائل إلى جمل عددية',
    page: 110,
    image: 'https://images.unsplash.com/photo-1516321318423-f69f13f0d1d5?w=400&q=70',
    color: 'from-teal-500 to-cyan-600',
    getQuestions: () => [
      {
        id: 'u4l2q1', type: 'multiple_choice',
        question_ar: 'أي جملة عددية تمثل: «أحمد عنده ١٥ ريالاً، اشترى كتاباً بـ ٧ ريالات. كم بقي؟»',
        options_ar: ['١٥ − ٧ = ٨', '١٥ + ٧ = ٢٢', '١٥ × ٧ = ١٠٥', '١٥ ÷ ٧'],
        correct_index: 0,
        explanation_ar: '«بقي» → طرح: ١٥ − ٧ = ٨.',
        golden_rule_ar: 'حوّل الكلمات إلى عمليات: «بقي/أنفق/أقل» → طرح.',
        page: 110
      },
      {
        id: 'u4l2q2', type: 'multiple_choice',
        question_ar: 'أي جملة عددية تمثل: «٤ صناديق في كل منها ٦ زجاجات. كم العدد الكلي؟»',
        options_ar: ['٤ × ٦ = ٢٤', '٤ + ٦ = ١٠', '٤ − ٦', '٦ ÷ ٤'],
        correct_index: 0,
        explanation_ar: '«في كل» و«العدد الكلي» → ضرب: ٤ × ٦ = ٢٤.',
        page: 110
      },
      {
        id: 'u4l2q3', type: 'fill_blank',
        question_ar: 'حوّل إلى جملة: «نصف ٢٠ ريال» = ...',
        options_ar: ['٢٠ ÷ ٢ = ١٠', '٢٠ × ٢ = ٤٠', '٢٠ + ٢ = ٢٢', '٢٠ − ٢ = ١٨'],
        correct_index: 0,
        explanation_ar: '«نصف» → قسمة على ٢: ٢٠ ÷ ٢ = ١٠.',
        page: 110
      },
      {
        id: 'u4l2q4', type: 'true_false',
        question_ar: 'جملة «الضربف ٣ × ٨ = ٢٤» صحيحة.',
        correct_answer: 'true',
        explanation_ar: '٣ × ٨ = ٢٤ ✓.',
        page: 110
      },
      {
        id: 'u4l2q5', type: 'info',
        question_ar: '💡 لتمثيل المسألة بجملة عددية: ١) حدد الأعداد المعطاة. ٢) حدد العملية من الكلمات المفتاحية. ٣) اكتب الجملة. ٤) احسب القيمة.',
        page: 110
      },
      {
        id: 'u4l2q6', type: 'matching',
        question_ar: 'صل كل مسألة بالعملية المناسبة:',
        pairs_ar: [
          { left: 'اشترى ٣ أقلام بـ ٥ ريالات للواحد', right: '٣ × ٥' },
          { left: 'كان معه ٢٠ وأنفق ٨', right: '٢٠ − ٨' },
          { left: 'قسّم ١٢ حبة على ٤ أطفال', right: '١٢ ÷ ٤' },
          { left: 'جمع ١٥ و ٢٥', right: '١٥ + ٢٥' }
        ],
        explanation_ar: 'الكلمات المفتاحية تحدد العملية.',
        page: 110
      },
      {
        id: 'u4l2q7', type: 'multiple_choice',
        question_ar: 'أي جملة تمثل: «ضاعف العدد ٧ ثم أضف ٣»؟',
        options_ar: ['٢ × ٧ + ٣ = ١٧', '٧ + ٣ × ٢', '٧ × ٣', '٢ + ٧ × ٣'],
        correct_index: 0,
        explanation_ar: '«ضاعف» → ٢ × ٧ = ١٤، «ثم أضف ٣» → ١٤ + ٣ = ١٧.',
        page: 110
      }
    ]
  },
  {
    id: 'u4l3',
    title_ar: '٤-٣ الاستدلال المنطقي',
    subtitle_ar: 'حل المسائل بالاستدلال',
    page: 114,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=70',
    color: 'from-emerald-500 to-green-600',
    getQuestions: () => [
      {
        id: 'u4l3q1', type: 'multiple_choice',
        question_ar: 'مسألة: أحمد أكبر من سعد بـ ٣ سنوات، وسعد أكبر من خالد بـ ٢ سنة. إذا كان خالد عمره ٧ سنوات، فكم عمر أحمد؟',
        options_ar: ['١٢', '١٠', '٩', '٨'],
        correct_index: 0,
        explanation_ar: 'خالد = ٧، سعد = ٧ + ٢ = ٩، أحمد = ٩ + ٣ = ١٢.',
        golden_rule_ar: 'الاستدلال: ابدأ من المعطى المعروف وتدرج منطقياً.',
        page: 114
      },
      {
        id: 'u4l3q2', type: 'multiple_choice',
        question_ar: 'مسألة: في صف ٢٤ طالباً، عدد البنين ضعف عدد البنات. كم عدد البنات؟',
        options_ar: ['٨', '٦', '١٢', '٤'],
        correct_index: 0,
        explanation_ar: 'البنات = س، البنين = ٢س. س + ٢س = ٢٤ → ٣س = ٢٤ → س = ٨.',
        page: 114
      },
      {
        id: 'u4l3q3', type: 'fill_blank',
        question_ar: 'مسألة: رجل له ٣ أبناء، لكل ابن أخت واحدة. كم عدد البنات؟',
        options_ar: ['١', '٣', '٢', '٦'],
        correct_index: 0,
        explanation_ar: 'إذا كان لكل ابن أخت واحدة وهم إخوة، فالأخت واحدة مشتركة بينهم.',
        page: 114
      },
      {
        id: 'u4l3q4', type: 'true_false',
        question_ar: 'الاستدلال المنطقي يساعد على حل المسائل دون معادلات معقدة.',
        correct_answer: 'true',
        explanation_ar: 'الاستدلال المنطقي يعتمد على التفكير المتسلسل بدلاً من المعادلات.',
        page: 114
      },
      {
        id: 'u4l3q5', type: 'info',
        question_ar: '💡 الاستدلال المنطقي: ١) حدد المعطيات والعلاقات. ٢) ابدأ من المعروف وتدرج. ٣) تحقق من منطقية كل خطوة. ٤) استنتج الإجابة.',
        page: 114
      },
      {
        id: 'u4l3q6', type: 'multiple_choice',
        question_ar: 'مسألة: كتاب أثقل من دفتر بـ ٢٠٠ جم، والدفتر أثقل من قلم بـ ١٠٠ جم. إذا كان القلم ٥٠ جم، فكم وزن الكتاب؟',
        options_ar: ['٣٥٠ جم', '٢٥٠ جم', '٣٠٠ جم', '١٥٠ جم'],
        correct_index: 0,
        explanation_ar: 'القلم = ٥٠، الدفتر = ٥٠ + ١٠٠ = ١٥٠، الكتاب = ١٥٠ + ٢٠٠ = ٣٥٠.',
        page: 114
      },
      {
        id: 'u4l3q7', type: 'multiple_choice',
        question_ar: 'مسألة: يوم الأحد بعد غدٍ سيكون ... إذا كان اليوم الخميس.',
        options_ar: ['السبت', 'الأحد', 'الجمعة', 'الاثنين'],
        correct_index: 0,
        explanation_ar: 'الخميس → غداً الجمعة → بعد غدٍ السبت.',
        page: 114
      }
    ]
  },
  {
    id: 'u4l4',
    title_ar: '٤-٤ اكتشاف قاعدة من جدول',
    subtitle_ar: 'إيجاد القاعدة في جداول الدوال',
    page: 116,
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=70',
    color: 'from-amber-500 to-orange-600',
    getQuestions: () => [
      {
        id: 'u4l4q1', type: 'multiple_choice',
        question_ar: 'جدول: الإدخال ١→٣، ٢→٦، ٣→٩. ما القاعدة؟',
        options_ar: ['الإدخال × ٣', 'الإدخال + ٢', 'الإدخال × ٢', 'الإدخال + ٣'],
        correct_index: 0,
        explanation_ar: 'الناتج = الإدخال × ٣ (١×٣=٣، ٢×٣=٦، ٣×٣=٩).',
        golden_rule_ar: 'قاعدة الجدول: حدد العلاقة بين الإدخال والإخراج (+، −، ×، ÷).',
        page: 116
      },
      {
        id: 'u4l4q2', type: 'multiple_choice',
        question_ar: 'جدول: ١→٥، ٢→٦، ٣→٧. ما القاعدة؟',
        options_ar: ['الإدخال + ٤', 'الإدخال × ٥', 'الإدخال + ٥', 'الإدخال − ١'],
        correct_index: 0,
        explanation_ar: 'الناتج = الإدخال + ٤ (١+٤=٥، ٢+٤=٦، ٣+٤=٧).',
        page: 116
      },
      {
        id: 'u4l4q3', type: 'fill_blank',
        question_ar: 'جدول: ٢→٨، ٣→١٢، ٤→١٦. ما القاعدة؟',
        options_ar: ['الإدخال × ٤', 'الإدخال + ٦', 'الإدخال × ٢', 'الإدخال − ٢'],
        correct_index: 0,
        explanation_ar: 'الناتج = الإدخال × ٤ (٢×٤=٨، ٣×٤=١٢، ٤×٤=١٦).',
        page: 116
      },
      {
        id: 'u4l4q4', type: 'multiple_choice',
        question_ar: 'جدول بقاعدة «الإدخال × ٣». ما الناتج عندما الإدخال = ٥؟',
        options_ar: ['١٥', '٨', '١٢', '٣'],
        correct_index: 0,
        explanation_ar: '٥ × ٣ = ١٥.',
        page: 116
      },
      {
        id: 'u4l4q5', type: 'true_false',
        question_ar: 'لقاعدة الجدول: إذا كان الناتج دائماً أكبر من الإدخال بمقدار ثابت، فالقاعدة جمع.',
        correct_answer: 'true',
        explanation_ar: 'الفرق ثابت → جمع. النسبة ثابتة → ضرب.',
        page: 116
      },
      {
        id: 'u4l4q6', type: 'info',
        question_ar: '💡 لاكتشاف قاعدة الجدول: ١) احسب الفرق بين الإدخال والإخراج. ٢) إذا كان الفرق ثابتاً → جمع/طرح. ٣) إذا كانت النسبة ثابتة → ضرب/قسمة. ٤) تحقق بقيمة أخرى.',
        page: 116
      },
      {
        id: 'u4l4q7', type: 'matching',
        question_ar: 'صل كل جدول بقاعدته:',
        pairs_ar: [
          { left: '١→٤، ٢→٥، ٣→٦', right: 'الإدخال + ٣' },
          { left: '١→٢، ٢→٤، ٣→٦', right: 'الإدخال × ٢' },
          { left: '٥→١، ٦→٢، ٧→٣', right: 'الإدخال − ٤' },
          { left: '٢→١، ٤→٢، ٦→٣', right: 'الإدخال ÷ ٢' }
        ],
        explanation_ar: 'الفحص: الفرق ثابت → جمع/طرح. النسبة ثابتة → ضرب/قسمة.',
        page: 116
      },
      {
        id: 'u4l4q8', type: 'multiple_choice',
        question_ar: 'جدول بقاعدة «الإدخال + ٧». ما الناتج عندما الإدخال = ١٠؟',
        options_ar: ['١٧', '٧٠', '٣', '١٠'],
        correct_index: 0,
        explanation_ar: '١٠ + ٧ = ١٧.',
        page: 116
      }
    ]
  },
  {
    id: 'u4l5',
    title_ar: '٤-٥ جداول الدوال: الجمع والطرح',
    subtitle_ar: 'قواعد الجمع والطرح في الجداول',
    page: 120,
    image: 'https://images.unsplash.com/photo-1516321318423-f69f13f0d1d5?w=400&q=70',
    color: 'from-sky-500 to-blue-600',
    getQuestions: () => [
      {
        id: 'u4l5q1', type: 'multiple_choice',
        question_ar: 'جدول بقاعدة «الإدخال + ٥». ما الناتج عندما الإدخال = ٣؟',
        options_ar: ['٨', '١٥', '٥', '٢'],
        correct_index: 0,
        explanation_ar: '٣ + ٥ = ٨.',
        page: 120
      },
      {
        id: 'u4l5q2', type: 'multiple_choice',
        question_ar: 'جدول بقاعدة «الإدخال − ٤». ما الناتج عندما الإدخال = ١٠؟',
        options_ar: ['٦', '١٤', '٤٠', '٤'],
        correct_index: 0,
        explanation_ar: '١٠ − ٤ = ٦.',
        page: 120
      },
      {
        id: 'u4l5q3', type: 'fill_blank',
        question_ar: 'جدول بقاعدة «الإدخال + ٩». ما الناتج عندما الإدخال = ٧؟',
        options_ar: ['١٦', '٦٣', '٢', '٩'],
        correct_index: 0,
        explanation_ar: '٧ + ٩ = ١٦.',
        page: 120
      },
      {
        id: 'u4l5q4', type: 'true_false',
        question_ar: 'في جدول بقاعدة «الإدخال + ٥»، إذا كان الإدخال = ٠ فالناتج = ٥.',
        correct_answer: 'true',
        explanation_ar: '٠ + ٥ = ٥ ✓.',
        page: 120
      },
      {
        id: 'u4l5q5', type: 'info',
        question_ar: '💡 جداول الدوال بالجمع/الطرح: الناتج = الإدخال ± ثابت. الفرق بين النواتج المتتالية = الثابت نفسه.',
        page: 120
      },
      {
        id: 'u4l5q6', type: 'multiple_choice',
        question_ar: 'جدول: ٢→٥، ٣→٦، ٤→٧، ٥→؟. ما الناتج الناقص؟',
        options_ar: ['٨', '٧', '٩', '١٠'],
        correct_index: 0,
        explanation_ar: 'القاعدة: الإدخال + ٣. ٥ + ٣ = ٨.',
        page: 120
      },
      {
        id: 'u4l5q7', type: 'matching',
        question_ar: 'صل كل إدخال بناتجه في جدول قاعدته «الإدخال + ٦»:',
        pairs_ar: [
          { left: '١', right: '٧' },
          { left: '٢', right: '٨' },
          { left: '٥', right: '١١' },
          { left: '٠', right: '٦' }
        ],
        explanation_ar: 'الإدخال + ٦ = الناتج.',
        page: 120
      },
      {
        id: 'u4l5q8', type: 'multiple_choice',
        question_ar: 'جدول بقاعدة «الإدخال − ٣». ما الناتج عندما الإدخال = ١٢؟',
        options_ar: ['٩', '١٥', '٤', '٣٦'],
        correct_index: 0,
        explanation_ar: '١٢ − ٣ = ٩.',
        page: 120
      }
    ]
  },
  {
    id: 'u4l6',
    title_ar: '٤-٦ جداول الدوال: الضرب والقسمة',
    subtitle_ar: 'قواعد الضرب والقسمة في الجداول',
    page: 127,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=70',
    color: 'from-rose-500 to-pink-600',
    getQuestions: () => [
      {
        id: 'u4l6q1', type: 'multiple_choice',
        question_ar: 'جدول بقاعدة «الإدخال × ٤». ما الناتج عندما الإدخال = ٣؟',
        options_ar: ['١٢', '٧', '٤', '١'],
        correct_index: 0,
        explanation_ar: '٣ × ٤ = ١٢.',
        golden_rule_ar: 'في جداول الضرب، النسبة بين النواتج المتتالية ثابتة.',
        page: 127
      },
      {
        id: 'u4l6q2', type: 'multiple_choice',
        question_ar: 'جدول بقاعدة «الإدخال ÷ ٢». ما الناتج عندما الإدخال = ٨؟',
        options_ar: ['٤', '١٦', '٦', '١٠'],
        correct_index: 0,
        explanation_ar: '٨ ÷ ٢ = ٤.',
        page: 127
      },
      {
        id: 'u4l6q3', type: 'fill_blank',
        question_ar: 'جدول بقاعدة «الإدخال × ٥». ما الناتج عندما الإدخال = ٤؟',
        options_ar: ['٢٠', '٩', '١', '٢٥'],
        correct_index: 0,
        explanation_ar: '٤ × ٥ = ٢٠.',
        page: 127
      },
      {
        id: 'u4l6q4', type: 'true_false',
        question_ar: 'في جدول بقاعدة «الإدخال × ٣»، النواتج المتتالية تزداد بمقدار ٣ كل مرة.',
        correct_answer: 'true',
        explanation_ar: '٣، ٦، ٩، ١٢... الفرق بين كل ناتجين = ٣.',
        page: 127
      },
      {
        id: 'u4l6q5', type: 'multiple_choice',
        question_ar: 'جدول: ١→٣، ٢→٦، ٣→٩، ٤→؟. ما الناتج الناقص؟',
        options_ar: ['١٢', '٨', '١٠', '٧'],
        correct_index: 0,
        explanation_ar: 'القاعدة: الإدخال × ٣. ٤ × ٣ = ١٢.',
        page: 127
      },
      {
        id: 'u4l6q6', type: 'info',
        question_ar: '💡 جداول الدوال بالضرب/القسمة: الناتج = الإدخال × ثابت أو ÷ ثابت. النواتج المتتالية تزداد بنسبة ثابتة (وليس بفرق ثابت).',
        page: 127
      },
      {
        id: 'u4l6q7', type: 'matching',
        question_ar: 'صل كل إدخال بناتجه في جدول قاعدته «الإدخال × ٦»:',
        pairs_ar: [
          { left: '٢', right: '١٢' },
          { left: '٣', right: '١٨' },
          { left: '٤', right: '٢٤' },
          { left: '٥', right: '٣٠' }
        ],
        explanation_ar: 'الإدخال × ٦ = الناتج.',
        page: 127
      },
      {
        id: 'u4l6q8', type: 'multiple_choice',
        question_ar: 'جدول بقاعدة «الإدخال ÷ ٣». ما الناتج عندما الإدخال = ١٥؟',
        options_ar: ['٥', '١٨', '٤٥', '٣'],
        correct_index: 0,
        explanation_ar: '١٥ ÷ ٣ = ٥.',
        page: 127
      }
    ]
  }
];