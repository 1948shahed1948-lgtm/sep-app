// بنك رياضيات الصف الرابع الفصل الأول — الفصل: تنظيم البيانات وعرضها وتفسيرها (صفحات 78-100)
// مرجع: كتاب الرياضيات الصف الرابع الابتدائي

export const UNIT3_LESSONS = [
  {
    id: 'u3l1',
    title_ar: '٣-١ جمع البيانات وتنظيمها',
    subtitle_ar: 'جداول التكرار والعدّ',
    page: 79,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&q=70',
    color: 'from-cyan-500 to-blue-600',
    getQuestions: () => [
      {
        id: 'u3l1q1', type: 'multiple_choice',
        question_ar: 'ما اسم الجدول الذي يُستخدم لتسجيل عدد مرات تكرار كل قيمة؟',
        options_ar: ['جدول التكرار', 'جدول الضرب', 'جدول القيمة المنزلية', 'جدول العمود'],
        correct_index: 0,
        explanation_ar: 'جدول التكرار يُسجل عدد مرات ظهور كل قيمة في البيانات.',
        golden_rule_ar: 'جدول التكرار = عدّ تكرار كل قيمة وتسجيلها.',
        page: 79
      },
      {
        id: 'u3l1q2', type: 'multiple_choice',
        question_ar: 'إذا كان لدينا بيانات: ٥، ٣، ٥، ٢، ٣، ٥، ٥. ما تكرار القيمة ٥؟',
        options_ar: ['٤', '٣', '٢', '١'],
        correct_index: 0,
        explanation_ar: 'نعدّ ظهور ٥: ٥، ٥، ٥، ٥ → ٤ مرات.',
        page: 79
      },
      {
        id: 'u3l1q3', type: 'fill_blank',
        question_ar: 'في بيانات: أحمر، أزرق، أحمر، أخضر، أحمر، أزرق. ما تكرار اللون الأحمر؟',
        options_ar: ['٣', '٢', '١', '٤'],
        correct_index: 0,
        explanation_ar: 'نعدّ «أحمر»: ٣ مرات.',
        page: 79
      },
      {
        id: 'u3l1q4', type: 'true_false',
        question_ar: 'تنظيم البيانات يساعد على فهمها وتحليلها بسهولة.',
        correct_answer: 'true',
        explanation_ar: 'التنظيم في جداول يجعل البيانات أوضح وأسهل في التحليل.',
        page: 79
      },
      {
        id: 'u3l1q5', type: 'info',
        question_ar: '💡 لجمع البيانات وتنظيمها: ١) اجمع البيانات (عدّ أو قياس). ٢) ضع كل قيمة في صف بجدول التكرار. ٣) سجل عدد مرات تكرار كل قيمة (العلامة). ٤) اكتب المجموع.',
        page: 79
      },
      {
        id: 'u3l1q6', type: 'matching',
        question_ar: 'صل كل قيمة بتكرارها في البيانات: ٢، ٤، ٢، ٦، ٤، ٢، ٦، ٦، ٦',
        pairs_ar: [
          { left: 'القيمة ٢', right: '٣ مرات' },
          { left: 'القيمة ٤', right: '٢ مرات' },
          { left: 'القيمة ٦', right: '٤ مرات' }
        ],
        explanation_ar: 'نعدّ كل قيمة: ٢ يظهر ٣ مرات، ٤ يظهر مرتين، ٦ يظهر ٤ مرات.',
        page: 79
      },
      {
        id: 'u3l1q7', type: 'multiple_choice',
        question_ar: 'ما مجموع التكرارات في بيانات: ١ (٣ مرات)، ٢ (٢ مرة)، ٣ (٤ مرات)؟',
        options_ar: ['٩', '٨', '٦', '١٠'],
        correct_index: 0,
        explanation_ar: 'مجموع التكرارات = ٣ + ٢ + ٤ = ٩.',
        page: 79
      },
      {
        id: 'u3l1q8', type: 'true_false',
        question_ar: 'مجموع كل التكرارات في جدول التكرار يساوي عدد البيانات الكلي.',
        correct_answer: 'true',
        explanation_ar: 'كل قيمة في البيانات تُحسب مرة في تكرارها، فمجموع التكرارات = العدد الكلي.',
        page: 79
      }
    ]
  },
  {
    id: 'u3l2',
    title_ar: '٣-٢ إنشاء جدول',
    subtitle_ar: 'تحويل البيانات إلى جدول',
    page: 82,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=70',
    color: 'from-blue-500 to-indigo-600',
    getQuestions: () => [
      {
        id: 'u3l2q1', type: 'multiple_choice',
        question_ar: 'أي عمود يجب أن يحتوي على القيم المختلفة في جدول التكرار؟',
        options_ar: ['عمود القيمة', 'عمود التكرار', 'عمود المجموع', 'عمود العنوان'],
        correct_index: 0,
        explanation_ar: 'جدول التكرار يحتوي على عمود القيمة وعمود التكرار.',
        page: 82
      },
      {
        id: 'u3l2q2', type: 'fill_blank',
        question_ar: 'في جدول التكرار، يُسمى العدد الذي يمثل مرات ظهور القيمة بـ ........',
        options_ar: ['التكرار', 'القيمة', 'المجموع', 'النسبة'],
        correct_index: 0,
        explanation_ar: 'التكرار = عدد مرات ظهور القيمة في البيانات.',
        page: 82
      },
      {
        id: 'u3l2q3', type: 'info',
        question_ar: '💡 لإنشاء جدول تكرار: ١) اكتب عنواناً للجدول. ٢) ضع عموداً للقيم المختلفة. ٣) ضع عموداً للتكرار (عدّ العلامات). ٤) اكتب المجموع في الأسفل.',
        page: 82
      },
      {
        id: 'u3l2q4', type: 'multiple_choice',
        question_ar: 'إذا كان جدول التكرار للقيم: أ=٥، ب=٣، ج=٤. ما مجموع البيانات؟',
        options_ar: ['١٢', '٣', '٥', '٩'],
        correct_index: 0,
        explanation_ar: 'مجموع التكرارات = ٥ + ٣ + ٤ = ١٢.',
        page: 82
      },
      {
        id: 'u3l2q5', type: 'true_false',
        question_ar: 'في جدول التكرار، مجموع عمود التكرار يمثل عدد البيانات الكلي.',
        correct_answer: 'true',
        explanation_ar: 'كل قيمة تُحسب مرة، فالمجموع = العدد الكلي للبيانات.',
        page: 82
      },
      {
        id: 'u3l2q6', type: 'matching',
        question_ar: 'صل كل عنصر في الجدول بوظيفته:',
        pairs_ar: [
          { left: 'العنوان', right: 'يصف محتوى الجدول' },
          { left: 'عمود القيمة', right: 'يحتوي القيم المختلفة' },
          { left: 'عمود التكرار', right: 'عدد مرات الظهور' },
          { left: 'المجموع', right: 'مجموع التكرارات' }
        ],
        explanation_ar: 'كل عنصر في الجدول له وظيفة محددة.',
        page: 82
      }
    ]
  },
  {
    id: 'u3l3',
    title_ar: '٣-٣ التمثيل بالأعمدة',
    subtitle_ar: 'الرسوم البيانية العمودية',
    page: 84,
    image: 'https://images.unsplash.com/photo-1543286386-2e65b306c112?w=400&q=70',
    color: 'from-emerald-500 to-teal-600',
    getQuestions: () => [
      {
        id: 'u3l3q1', type: 'multiple_choice',
        question_ar: 'ما نوع الرسم الذي يستخدم أعمدة لتمثيل البيانات؟',
        options_ar: ['الرسم العمودي (الأعمدة)', 'الرسم الدائري', 'الرسم الخطي', 'الرسم بالصور'],
        correct_index: 0,
        explanation_ar: 'الرسم العمودي يستخدم أعمدة بارتفاع يتناسب مع قيمة كل بيان.',
        golden_rule_ar: 'ارتفاع العمود = قيمة البيانات حسب مقياس الرسم.',
        page: 84
      },
      {
        id: 'u3l3q2', type: 'multiple_choice',
        question_ar: 'إذا كان مقياس الرسم = وحدة واحدة لكل شبكة، وارتفاع عمود = ٥ شبكات. ما القيمة التي يمثلها؟',
        options_ar: ['٥', '١٠', '١', '٢٥'],
        correct_index: 0,
        explanation_ar: 'الارتفاع × المقياس = ٥ × ١ = ٥.',
        page: 84
      },
      {
        id: 'u3l3q3', type: 'fill_blank',
        question_ar: 'في الرسم العمودي، يمثل ........ القيمة، بينما يمثل ........ الفئة.',
        options_ar: ['الارتفاع / المحور الأفقي', 'العرض / الارتفاع', 'اللون / الحجم', 'العنوان / المقياس'],
        correct_index: 0,
        explanation_ar: 'ارتفاع العمود يمثل القيمة، والمحور الأفقي يمثل الفئات.',
        page: 84
      },
      {
        id: 'u3l3q4', type: 'true_false',
        question_ar: 'كل عمود في الرسم البياني العمودي يجب أن يكون بنفس العرض.',
        correct_answer: 'true',
        explanation_ar: 'العرض ثابت، والارتفاع هو الذي يختلف حسب القيمة.',
        page: 84
      },
      {
        id: 'u3l3q5', type: 'info',
        question_ar: '💡 لإنشاء رسم عمودي: ١) ارسم محورين (أفقي للفئات، رأسي للقيم). ٢) حدد مقياس الرسم. ٣) ارسم عموداً لكل فئة بارتفاع = قيمتها. ٤) ضع عنواناً ووسم المحاور.',
        page: 84
      },
      {
        id: 'u3l3q6', type: 'multiple_choice',
        question_ar: 'إذا كان مقياس الرسم = ٢ وحدة لكل شبكة، وعمود يمثل ٤ شبكات. ما القيمة؟',
        options_ar: ['٨', '٤', '٢', '٦'],
        correct_index: 0,
        explanation_ar: '٤ شبكات × ٢ = ٨.',
        page: 84
      },
      {
        id: 'u3l3q7', type: 'ordering',
        question_ar: 'رتِّب خطوات إنشاء الرسم العمودي بالترتيب الصحيح:',
        items_ar: ['ارسم الأعمدة', 'حدد المقياس', 'ارسم المحاور', 'ضع عنواناً'],
        correct_order: [2, 1, 0, 3],
        explanation_ar: 'الترتيب: المحاور → المقياس → الأعمدة → العنوان.',
        page: 84
      },
      {
        id: 'u3l3q8', type: 'true_false',
        question_ar: 'العنوان في الرسم البياني العمودي يصف محتوى البيانات.',
        correct_answer: 'true',
        explanation_ar: 'العنوان يوضح ما يمثله الرسم البياني.',
        page: 84
      }
    ]
  },
  {
    id: 'u3l4',
    title_ar: '٣-٤ التمثيل بالخطوط',
    subtitle_ar: 'الرسوم البيانية الخطية',
    page: 87,
    image: 'https://images.unsplash.com/photo-1612870699484-1f1d9c2f1f1f?w=400&q=70',
    color: 'from-amber-500 to-orange-600',
    getQuestions: () => [
      {
        id: 'u3l4q1', type: 'multiple_choice',
        question_ar: 'ما نوع الرسم الذي يستخدم خطاً لتمثيل البيانات عبر الزمن؟',
        options_ar: ['الرسم الخطي', 'الرسم العمودي', 'الرسم الدائري', 'الرسم بالصور'],
        correct_index: 0,
        explanation_ar: 'الرسم الخطي يربط النقاط بخط لإظهار التغير عبر الزمن.',
        golden_rule_ar: 'الرسم الخطي يُظهر التغير عبر الزمن بنقاط متصلة بخط.',
        page: 87
      },
      {
        id: 'u3l4q2', type: 'multiple_choice',
        question_ar: 'ما أهمية الرسم الخطي؟',
        options_ar: ['إظهار التغير عبر الزمن', 'إظهار النسب المئوية', 'إظهار التكرار فقط', 'إظهار التصنيف'],
        correct_index: 0,
        explanation_ar: 'الرسم الخطي مثالي لإظهار التغير عبر الزمن (درجات الحرارة، النمو...).',
        page: 87
      },
      {
        id: 'u3l4q3', type: 'fill_blank',
        question_ar: 'في الرسم الخطي، تمثل كل نقطة ........، ويربط بينها ........',
        options_ar: ['قيمة / خط', 'فئة / عمود', 'نسبة / دائرة', 'لون / صورة'],
        correct_index: 0,
        explanation_ar: 'كل نقطة تمثل قيمة، والخط يربطها لإظهار الاتجاه.',
        page: 87
      },
      {
        id: 'u3l4q4', type: 'true_false',
        question_ar: 'الرسم الخطي يستخدم لإظهار التغير في درجة الحرارة خلال أيام الأسبوع.',
        correct_answer: 'true',
        explanation_ar: 'الرسم الخطي مثالي للبيانات الزمنية مثل درجات الحرارة.',
        page: 87
      },
      {
        id: 'u3l4q5', type: 'info',
        question_ar: '💡 لإنشاء رسم خطي: ١) ارسم محورين (أفقي للزمن، رأسي للقيم). ٢) ضع نقطة لكل قيمة. ٣) اربط النقاط بخط. ٤) ضع عنواناً ووسم المحاور.',
        page: 87
      },
      {
        id: 'u3l4q6', type: 'multiple_choice',
        question_ar: 'أي رسم مناسب لإظهار التغير في عدد الطلاب على مدار سنوات؟',
        options_ar: ['رسم خطي', 'رسم دائري', 'رسم بالصور', 'جدول تكرار'],
        correct_index: 0,
        explanation_ar: 'البيانات الزمنية المتغيرة → رسم خطي.',
        page: 87
      },
      {
        id: 'u3l4q7', type: 'ordering',
        question_ar: 'رتِّب خطوات إنشاء الرسم الخطي:',
        items_ar: ['اربط النقاط بخط', 'ضع نقطة لكل قيمة', 'ارسم المحاور', 'حدد المقياس'],
        correct_order: [2, 3, 1, 0],
        explanation_ar: 'الترتيب: المحاور → المقياس → النقاط → ربطها بخط.',
        page: 87
      }
    ]
  },
  {
    id: 'u3l5',
    title_ar: '٣-٥ التمثيل بالقطاعات الدائرية',
    subtitle_ar: 'الرسوم الدائرية والنسب',
    page: 90,
    image: 'https://images.unsplash.com/photo-1554224155-8d04c21c2c8e?w=400&q=70',
    color: 'from-purple-500 to-pink-600',
    getQuestions: () => [
      {
        id: 'u3l5q1', type: 'multiple_choice',
        question_ar: 'ما نوع الرسم الذي يستخدم دائرة مقسمة إلى قطاعات؟',
        options_ar: ['الرسم الدائري', 'الرسم العمودي', 'الرسم الخطي', 'الرسم بالصور'],
        correct_index: 0,
        explanation_ar: 'الرسم الدائري يستخدم دائرة مقسمة إلى قطاعات تمثل نسب كل فئة.',
        golden_rule_ar: 'كل قطاعة في الرسم الدائري تمثل نسبة من الكل.',
        page: 90
      },
      {
        id: 'u3l5q2', type: 'multiple_choice',
        question_ar: 'ماذا تمثل القطاعة الكبيرة في الرسم الدائري؟',
        options_ar: ['فئة ذات قيمة أكبر', 'فئة ذات قيمة أصغر', 'نصف البيانات', 'لا شيء'],
        correct_index: 0,
        explanation_ar: 'حجم القطاعة يتناسب مع قيمة الفئة: أكبر قطاعة = قيمة أكبر.',
        page: 90
      },
      {
        id: 'u3l5q3', type: 'true_false',
        question_ar: 'الرسم الدائري مناسب لإظهار نسب كل فئة من المجموع الكلي.',
        correct_answer: 'true',
        explanation_ar: 'الرسم الدائري يُظهر النسب المئوية والكسور من الكل.',
        page: 90
      },
      {
        id: 'u3l5q4', type: 'fill_blank',
        question_ar: 'إذا كانت قطاعة تمثل النصف، فكم درجة من الدائرة (٣٦٠°) تشغلها؟',
        options_ar: ['١٨٠°', '٩٠°', '٣٦٠°', '٤٥°'],
        correct_index: 0,
        explanation_ar: 'النصف = ٣٦٠ ÷ ٢ = ١٨٠°.',
        page: 90
      },
      {
        id: 'u3l5q5', type: 'info',
        question_ar: '💡 الرسم الدائري: كل القطاعات معاً = الدائرة الكاملة (٣٦٠°). القطاعة التي تمثل ربع البيانات تشغل ٩٠°، والنصف ١٨٠°.',
        page: 90
      },
      {
        id: 'u3l5q6', type: 'multiple_choice',
        question_ar: 'إذا كانت ٣ فئات متساوية في الرسم الدائري، كم درجة لكل قطاعة؟',
        options_ar: ['١٢٠°', '٩٠°', '١٨٠°', '٦٠°'],
        correct_index: 0,
        explanation_ar: '٣٦٠ ÷ ٣ = ١٢٠° لكل قطاعة.',
        page: 90
      },
      {
        id: 'u3l5q7', type: 'true_false',
        question_ar: 'مجموع زوايا كل القطاعات في الرسم الدائري = ٣٦٠°.',
        correct_answer: 'true',
        explanation_ar: 'الدائرة الكاملة = ٣٦٠°، فمجموع القطاعات = ٣٦٠°.',
        page: 90
      },
      {
        id: 'u3l5q8', type: 'multiple_choice',
        question_ar: 'أي رسم مناسب لإظهار نسبة كل مادة دراسية من إجمالي ساعات الدراسة؟',
        options_ar: ['رسم دائري', 'رسم خطي', 'رسم عمودي', 'جدول تكرار'],
        correct_index: 0,
        explanation_ar: 'النسب من الكل → رسم دائري.',
        page: 90
      }
    ]
  },
  {
    id: 'u3l6',
    title_ar: '٣-٦ الاحتمال',
    subtitle_ar: 'الاحتمال البسيط',
    page: 93,
    image: 'https://images.unsplash.com/photo-1606167668584-78701c57f13d?w=400&q=70',
    color: 'from-rose-500 to-red-600',
    getQuestions: () => [
      {
        id: 'u3l6q1', type: 'multiple_choice',
        question_ar: 'ما الاحتمال البسيط؟',
        options_ar: ['عدد النتائج المرغوبة ÷ عدد النتائج الكلي', 'عدد النتائج الكلي ÷ المرغوبة', 'عدد النتائج المرغوبة × الكلي', 'مجموع النتائج'],
        correct_index: 0,
        explanation_ar: 'الاحتمال = (عدد النتائج المرغوبة) ÷ (العدد الكلي للنتائج).',
        golden_rule_ar: 'الاحتمال = المرغوب ÷ الكلي.',
        page: 93
      },
      {
        id: 'u3l6q2', type: 'multiple_choice',
        question_ar: 'إذا رمينا حجر نرد عادي (٦ أوجه)، ما احتمال ظهور الرقم ٤؟',
        options_ar: ['١/٦', '١/٤', '٤/٦', '١/٢'],
        correct_index: 0,
        explanation_ar: 'وجه واحد من ٦ → ١/٦.',
        page: 93
      },
      {
        id: 'u3l6q3', type: 'fill_blank',
        question_ar: 'إذا رمينا قطعة نقود، ما احتمال ظهور «الكتابة»؟',
        options_ar: ['١/٢', '١/١', '٢/٢', '٠'],
        correct_index: 0,
        explanation_ar: 'وجهان (صورة وكتابة)، واحد مرغوب → ١/٢.',
        page: 93
      },
      {
        id: 'u3l6q4', type: 'true_false',
        question_ar: 'الاحتمال دائماً بين ٠ و ١ (أو صفر إلى ١٠٠٪).',
        correct_answer: 'true',
        explanation_ar: 'الاحتمال لا يتجاوز ١ (مؤكد) ولا يقل عن ٠ (مستحيل).',
        page: 93
      },
      {
        id: 'u3l6q5', type: 'multiple_choice',
        question_ar: 'ما احتمال حدث مستحيل؟',
        options_ar: ['٠', '١', '٥٠٪', '١٠٠٪'],
        correct_index: 0,
        explanation_ar: 'الحدث المستحيل احتماله = ٠.',
        page: 93
      },
      {
        id: 'u3l6q6', type: 'multiple_choice',
        question_ar: 'ما احتمال حدث مؤكد؟',
        options_ar: ['١', '٠', '٥٠٪', '٢٥٪'],
        correct_index: 0,
        explanation_ar: 'الحدث المؤكد احتماله = ١ (١٠٠٪).',
        page: 93
      },
      {
        id: 'u3l6q7', type: 'info',
        question_ar: '💡 الاحتمال = (النتائج المرغوبة) ÷ (النتائج الكلية). القيم: ٠ = مستحيل، ١ = مؤكد. مثال: سحب كرة حمراء من كيس به ٣ حمراء و٢ زرقاء = ٣/٥.',
        page: 93
      },
      {
        id: 'u3l6q8', type: 'multiple_choice',
        question_ar: 'في كيس به ٤ كرات حمراء و٦ زرقاء. ما احتمال سحب كرة زرقاء؟',
        options_ar: ['٦/١٠', '٤/١٠', '٦/٤', '١/٢'],
        correct_index: 0,
        explanation_ar: '٦ زرقاء من ١٠ كلي → ٦/١٠ = ٣/٥.',
        page: 93
      },
      {
        id: 'u3l6q9', type: 'true_false',
        question_ar: 'إذا كان احتمال حدث = ٣/٤، فهو أكثر احتمالاً من حدث احتماله ١/٤.',
        correct_answer: 'true',
        explanation_ar: '٣/٤ > ١/٤، فالأول أكثر احتمالاً.',
        page: 93
      },
      {
        id: 'u3l6q10', type: 'matching',
        question_ar: 'صل كل حدث باحتماله:',
        pairs_ar: [
          { left: 'ظهور صورة في قطعة نقود', right: '١/٢' },
          { left: 'ظهور رقم ٣ في حجر نرد', right: '١/٦' },
          { left: 'شروق الشمس غداً', right: '١ (مؤكد)' },
          { left: 'نزول المطر في الصيف بالرياض', right: 'قريب من ٠ (نادر)' }
        ],
        explanation_ar: 'المؤكد = ١، المستحيل = ٠، والباقي حسب النتائج.',
        page: 93
      }
    ]
  }
];