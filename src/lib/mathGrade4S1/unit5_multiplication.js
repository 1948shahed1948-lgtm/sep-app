// بنك رياضيات الصف الرابع الفصل الأول — الفصل: الضرب في عدد من رقمين (صفحات 138-197)
// مرجع: كتاب الرياضيات الصف الرابع الابتدائي

export const UNIT5_LESSONS = [
  {
    id: 'u5l1',
    title_ar: '٥-١ القواسم والمضاعفات',
    subtitle_ar: 'القواسم والمضاعفات المشتركة',
    page: 139,
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=70',
    color: 'from-emerald-500 to-teal-600',
    getQuestions: () => [
      {
        id: 'u5l1q1', type: 'multiple_choice',
        question_ar: 'ما القواسم المشتركة للعددين ٦ و ٨؟',
        options_ar: ['١، ٢', '١، ٢، ٤', '١، ٣', '١، ٢، ٣، ٦'],
        correct_index: 0,
        explanation_ar: 'قواسم ٦: ١، ٢، ٣، ٦. قواسم ٨: ١، ٢، ٤، ٨. المشترك: ١، ٢.',
        golden_rule_ar: 'القاسم: عدد يقسم العدد دون باقٍ. المشترك: ما يوجد في قواسم العددين.',
        page: 139
      },
      {
        id: 'u5l1q2', type: 'multiple_choice',
        question_ar: 'ما المضاعف المشترك الأصغر للعددين ٣ و ٤؟',
        options_ar: ['١٢', '٦', '٢٤', '٤'],
        correct_index: 0,
        explanation_ar: 'مضاعفات ٣: ٣، ٦، ٩، ١٢... مضاعفات ٤: ٤، ٨، ١٢... الأصغر المشترك = ١٢.',
        golden_rule_ar: 'المضاعف المشترك الأصغر = أصغر عدد مضاعف لكلا العددين.',
        page: 139
      },
      {
        id: 'u5l1q3', type: 'fill_blank',
        question_ar: 'ما القاسم المشترك الأكبر للعددين ١٢ و ١٨؟',
        options_ar: ['٦', '٣', '٢', '١٢'],
        correct_index: 0,
        explanation_ar: 'قواسم ١٢: ١، ٢، ٣، ٤، ٦، ١٢. قواسم ١٨: ١، ٢، ٣، ٦، ٩، ١٨. الأكبر المشترك = ٦.',
        page: 139
      },
      {
        id: 'u5l1q4', type: 'true_false',
        question_ar: 'العدد ١ قاسم لكل الأعداد.',
        correct_answer: 'true',
        explanation_ar: 'كل عدد يقبل القسمة على ١، فالـ١ قاسم مشترك دائماً.',
        page: 139
      },
      {
        id: 'u5l1q5', type: 'info',
        question_ar: '💡 القاسم: عدد يقسم العدد دون باقٍ (مثل قواسم ٦: ١، ٢، ٣، ٦). المضاعف: ناتج ضرب العدد في عدد صحيح (مثل مضاعفات ٣: ٣، ٦، ٩، ١٢...).',
        page: 139
      },
      {
        id: 'u5l1q6', type: 'multiple_choice',
        question_ar: 'ما أول ثلاثة مضاعفات للعدد ٧؟',
        options_ar: ['٧، ١٤، ٢١', '٧، ٨، ٩', '١، ٧، ١٤', '١٤، ٢١، ٢٨'],
        correct_index: 0,
        explanation_ar: 'مضاعفات ٧: ٧×١=٧، ٧×٢=١٤، ٧×٣=٢١.',
        page: 139
      },
      {
        id: 'u5l1q7', type: 'classify',
        question_ar: 'صنِّف الأعداد: هل ٦ قاسم أم مضاعف للعدد ٣؟',
        categories_ar: ['٦ قاسم للعدد ٣؟', '٦ مضاعف للعدد ٣؟'],
        items_ar: [
          { text: '٣ يقسم ٦ (٦÷٣=٢)', correct_category: 1 },
          { text: '٦ = ٣ × ٢', correct_category: 1 },
          { text: '٦ لا يقسم ٣', correct_category: 0 }
        ],
        explanation_ar: '٦ لا يقسم ٣ (٣÷٦ ليس صحيحاً)، لكن ٦ مضاعف ٣ (٣×٢=٦).',
        page: 139
      },
      {
        id: 'u5l1q8', type: 'matching',
        question_ar: 'صل كل زوج أعداد بالقاسم المشترك الأكبر:',
        pairs_ar: [
          { left: '٨ و ١٢', right: '٤' },
          { left: '١٠ و ١٥', right: '٥' },
          { left: '٩ و ١٢', right: '٣' },
          { left: '٦ و ٨', right: '٢' }
        ],
        explanation_ar: 'جدّد القواسم المشتركة واختر الأكبر.',
        page: 139
      },
      {
        id: 'u5l1q9', type: 'true_false',
        question_ar: 'مضاعفات العدد لا تنتهي.',
        correct_answer: 'true',
        explanation_ar: 'مضاعفات العدد لا نهائية (ضرب في ١، ٢، ٣...).',
        page: 139
      }
    ]
  },
  {
    id: 'u5l2',
    title_ar: '٥-٢ الضرب في مضاعفات ١٠، ١٠٠، ١٠٠٠',
    subtitle_ar: 'قاعدة الأصفار في الضرب',
    page: 142,
    image: 'https://images.unsplash.com/photo-1509318658120-b1b0e0d35a8e?w=400&q=70',
    color: 'from-cyan-500 to-blue-600',
    getQuestions: () => [
      {
        id: 'u5l2q1', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٤ × ١٠ = ؟',
        options_ar: ['٤٠', '٤', '١٤', '١٠٠'],
        correct_index: 0,
        explanation_ar: 'الضرب في ١٠ = إضافة صفر واحد: ٤ → ٤٠.',
        golden_rule_ar: 'الضرب في ١٠: أضف صفراً واحداً. في ١٠٠: صفرين. في ١٠٠٠: ثلاثة أصفار.',
        page: 142
      },
      {
        id: 'u5l2q2', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٧ × ١٠٠ = ؟',
        options_ar: ['٧٠٠', '٧٠', '٧', '٧٠٠٠'],
        correct_index: 0,
        explanation_ar: 'الضرب في ١٠٠ = إضافة صفرين: ٧ → ٧٠٠.',
        page: 142
      },
      {
        id: 'u5l2q3', type: 'fill_blank',
        question_ar: 'ما ناتج: ٣ × ١٠٠٠ = ؟',
        options_ar: ['٣٠٠٠', '٣٠٠', '٣٠', '٣٠٠٠٠'],
        correct_index: 0,
        explanation_ar: 'الضرب في ١٠٠٠ = إضافة ثلاثة أصفار: ٣ → ٣٠٠٠.',
        page: 142
      },
      {
        id: 'u5l2q4', type: 'true_false',
        question_ar: '٥ × ١٠ = ٥٠.',
        correct_answer: 'true',
        explanation_ar: 'الضرب في ١٠ يضيف صفراً: ٥ → ٥٠ ✓.',
        page: 142
      },
      {
        id: 'u5l2q5', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٢٥ × ١٠ = ؟',
        options_ar: ['٢٥٠', '٢٥', '١٠٠', '٣٥'],
        correct_index: 0,
        explanation_ar: 'أضف صفراً: ٢٥ → ٢٥٠.',
        page: 142
      },
      {
        id: 'u5l2q6', type: 'info',
        question_ar: '💡 قاعدة الأصفار في الضرب: الضرب في ١٠ يضيف صفراً واحداً (٤×١٠=٤٠)، في ١٠٠ يضيف صفرين (٤×١٠٠=٤٠٠)، في ١٠٠٠ يضيف ثلاثة أصفار (٤×١٠٠٠=٤٠٠٠).',
        page: 142
      },
      {
        id: 'u5l2q7', type: 'matching',
        question_ar: 'صل كل عملية بناتجها:',
        pairs_ar: [
          { left: '٦ × ١٠', right: '٦٠' },
          { left: '٦ × ١٠٠', right: '٦٠٠' },
          { left: '٦ × ١٠٠٠', right: '٦٠٠٠' },
          { left: '٨ × ١٠٠', right: '٨٠٠' }
        ],
        explanation_ar: 'عدد الأصفار = عدد أصفار العدد المضروب فيه (١، ٢، ٣).',
        page: 142
      },
      {
        id: 'u5l2q8', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٤٥ × ١٠٠ = ؟',
        options_ar: ['٤٥٠٠', '٤٥٠', '٤٥٠٠٠', '٤٥'],
        correct_index: 0,
        explanation_ar: 'أضف صفرين: ٤٥ → ٤٥٠٠.',
        page: 142
      },
      {
        id: 'u5l2q9', type: 'fill_blank',
        question_ar: 'ما ناتج: ١٢ × ١٠٠٠ = ؟',
        options_ar: ['١٢٠٠٠', '١٢٠٠', '١٢٠', '١٢٠٠٠٠'],
        correct_index: 0,
        explanation_ar: 'أضف ثلاثة أصفار: ١٢ → ١٢٠٠٠.',
        page: 142
      }
    ]
  },
  {
    id: 'u5l3',
    title_ar: '٥-٣ تقدير معقولية الإجابة',
    subtitle_ar: 'استخدام التقدير للتحقق',
    page: 145,
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400&q=70',
    color: 'from-indigo-500 to-blue-700',
    getQuestions: () => [
      {
        id: 'u5l3q1', type: 'multiple_choice',
        question_ar: 'هل الإجابة ٤٥ × ٣ = ١٣٥ معقولة؟ (قدّر بـ ٥٠ × ٣)',
        options_ar: ['نعم (١٥٠ قريب من ١٣٥)', 'لا (بعيدة)', 'لا يمكن', 'خطأ'],
        correct_index: 0,
        explanation_ar: 'التقدير: ٥٠ × ٣ = ١٥٠. الإجابة الدقيقة ١٣٥ قريبة → معقولة.',
        page: 145
      },
      {
        id: 'u5l3q2', type: 'multiple_choice',
        question_ar: 'هل الإجابة ٧٨ × ٤ = ٣١٢ معقولة؟ (قدّر بـ ٨٠ × ٤)',
        options_ar: ['نعم (٣٢٠ قريب)', 'لا', 'لا يمكن', 'خطأ'],
        correct_index: 0,
        explanation_ar: 'التقدير: ٨٠ × ٤ = ٣٢٠. الدقيق ٣١٢ قريب → معقول.',
        page: 145
      },
      {
        id: 'u5l3q3', type: 'true_false',
        question_ar: 'التقدير يساعد على التحقق من معقولية إجابة الضرب.',
        correct_answer: 'true',
        explanation_ar: 'إذا كان التقدير قريباً من الإجابة، فهي معقولة.',
        page: 145
      },
      {
        id: 'u5l3q4', type: 'info',
        question_ar: '💡 لتقدير معقولية الضرب: قرّب أحد العددين (أو كليهما)، ثم اضرب. إذا كان التقدير قريباً من الإجابة الدقيقة، فهي معقولة.',
        page: 145
      },
      {
        id: 'u5l3q5', type: 'multiple_choice',
        question_ar: 'قدّر معقولية: ٦٧ × ٥ = ٣٣٥ (قدّر بـ ٧٠ × ٥)',
        options_ar: ['معقول (٣٥٠ قريب)', 'غير معقول', 'لا يمكن', 'خطأ'],
        correct_index: 0,
        explanation_ar: 'التقدير: ٧٠ × ٥ = ٣٥٠. الدقيق ٣٣٥ قريب → معقول.',
        page: 145
      },
      {
        id: 'u5l3q6', type: 'fill_blank',
        question_ar: 'هل ٣٤ × ٦ = ٢٠٤ معقولة؟ (قدّر بـ ٣٠ × ٦)',
        options_ar: ['نعم (١٨٠ قريب)', 'لا', 'لا يمكن', 'خطأ'],
        correct_index: 0,
        explanation_ar: 'التقدير: ٣٠ × ٦ = ١٨٠. الدقيق ٢٠٤ قريب → معقول.',
        page: 145
      }
    ]
  },
  {
    id: 'u5l4',
    title_ar: '٥-٤ تقدير نواتج الضرب',
    subtitle_ar: 'تقريب ثم ضرب',
    page: 147,
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&q=70',
    color: 'from-purple-500 to-pink-600',
    getQuestions: () => [
      {
        id: 'u5l4q1', type: 'multiple_choice',
        question_ar: 'قدِّر ناتج: ٤٣ × ٧ (قرّب ٤٣ إلى ٤٠)',
        options_ar: ['٢٨٠', '٣٠٠', '٣٥٠', '٢٤٠'],
        correct_index: 0,
        explanation_ar: '٤٣ ≈ ٤٠. التقدير = ٤٠ × ٧ = ٢٨٠.',
        golden_rule_ar: 'للتقدير: قرّب العدد الأكبر إلى أقرب عشرة، ثم اضرب.',
        page: 147
      },
      {
        id: 'u5l4q2', type: 'multiple_choice',
        question_ar: 'قدِّر ناتج: ٢٨ × ٦ (قرّب إلى ٣٠)',
        options_ar: ['١٨٠', '١٢٠', '١٦٠', '٢٠٠'],
        correct_index: 0,
        explanation_ar: '٢٨ ≈ ٣٠. التقدير = ٣٠ × ٦ = ١٨٠.',
        page: 147
      },
      {
        id: 'u5l4q3', type: 'fill_blank',
        question_ar: 'قدِّر ناتج: ٥٢ × ٤ (قرّب إلى ٥٠) = ...',
        options_ar: ['٢٠٠', '٢٠٨', '٢٥٠', '١٥٠'],
        correct_index: 0,
        explanation_ar: '٥٢ ≈ ٥٠. التقدير = ٥٠ × ٤ = ٢٠٠.',
        page: 147
      },
      {
        id: 'u5l4q4', type: 'true_false',
        question_ar: 'تقدير ناتج ٦٧ × ٥ بقرّب ٦٧ إلى ٧٠ يساوي ٣٥٠.',
        correct_answer: 'true',
        explanation_ar: '٦٧ ≈ ٧٠. التقدير = ٧٠ × ٥ = ٣٥٠ ✓.',
        page: 147
      },
      {
        id: 'u5l4q5', type: 'info',
        question_ar: '💡 لتقدير نواتج الضرب: قرّب العدد ذا الرقمين إلى أقرب عشرة، ثم اضرب في العدد ذا الرقم الواحد.',
        page: 147
      },
      {
        id: 'u5l4q6', type: 'matching',
        question_ar: 'صل كل عملية بتقديرها:',
        pairs_ar: [
          { left: '٤٣ × ٧', right: '٢٨٠' },
          { left: '٢٨ × ٦', right: '١٨٠' },
          { left: '٥٢ × ٤', right: '٢٠٠' },
          { left: '٦٧ × ٥', right: '٣٥٠' }
        ],
        explanation_ar: 'قرّب العدد ذا الرقمين إلى أقرب عشرة، ثم اضرب.',
        page: 147
      },
      {
        id: 'u5l4q7', type: 'multiple_choice',
        question_ar: 'قدِّر ناتج: ٣٩ × ٨ (قرّب إلى ٤٠)',
        options_ar: ['٣٢٠', '٣٠٠', '٣٥٠', '٢٨٠'],
        correct_index: 0,
        explanation_ar: '٣٩ ≈ ٤٠. التقدير = ٤٠ × ٨ = ٣٢٠.',
        page: 147
      },
      {
        id: 'u5l4q8', type: 'fill_blank',
        question_ar: 'قدِّر ناتج: ٧٣ × ٣ (قرّب إلى ٧٠) = ...',
        options_ar: ['٢١٠', '٢١٩', '٢٤٠', '١٨٠'],
        correct_index: 0,
        explanation_ar: '٧٣ ≈ ٧٠. التقدير = ٧٠ × ٣ = ٢١٠.',
        page: 147
      }
    ]
  },
  {
    id: 'u5l5',
    title_ar: '٥-٥ ضرب عدد من رقمين في رقم واحد (دون إعادة التجميع)',
    subtitle_ar: 'الضرب البسيط',
    page: 151,
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f9c8b32?w=400&q=70',
    color: 'from-teal-500 to-green-600',
    getQuestions: () => [
      {
        id: 'u5l5q1', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٢٣ × ٣ = ؟',
        options_ar: ['٦٩', '٥٦', '٦٦', '٥٩'],
        correct_index: 0,
        explanation_ar: 'نضرب الآحاد: ٣×٣=٩، العشرات: ٢×٣=٦. الناتج ٦٩.',
        golden_rule_ar: 'اضرب من اليمين: الآحاد ثم العشرات ثم المئات.',
        page: 151
      },
      {
        id: 'u5l5q2', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٤١ × ٢ = ؟',
        options_ar: ['٨٢', '٤٢', '٨١', '٨٤'],
        correct_index: 0,
        explanation_ar: '١×٢=٢، ٤×٢=٨. الناتج ٨٢.',
        page: 151
      },
      {
        id: 'u5l5q3', type: 'fill_blank',
        question_ar: 'ما ناتج: ١٢ × ٤ = ؟',
        options_ar: ['٤٨', '٤٤', '١٦', '٨'],
        correct_index: 0,
        explanation_ar: '٢×٤=٨، ١×٤=٤. الناتج ٤٨.',
        page: 151
      },
      {
        id: 'u5l5q4', type: 'true_false',
        question_ar: 'ناتج ٢٢ × ٣ = ٦٦.',
        correct_answer: 'true',
        explanation_ar: '٢×٣=٦، ٢×٣=٦. الناتج ٦٦ ✓.',
        page: 151
      },
      {
        id: 'u5l5q5', type: 'info',
        question_ar: '💡 للضرب دون إعادة التجميع: اضرب الرقم في كل خانة من اليمين لليسار، واكتب الناتج في خانته. لا حاجة للحمل لأن النواتج أقل من ١٠.',
        page: 151
      },
      {
        id: 'u5l5q6', type: 'multiple_choice',
        question_ar: 'ما ناتج: ١٣ × ٣ = ؟',
        options_ar: ['٣٩', '٣٣', '٩', '٣٦'],
        correct_index: 0,
        explanation_ar: '٣×٣=٩، ١×٣=٣. الناتج ٣٩.',
        page: 151
      },
      {
        id: 'u5l5q7', type: 'matching',
        question_ar: 'صل كل عملية بناتجها:',
        pairs_ar: [
          { left: '٢٣ × ٣', right: '٦٩' },
          { left: '٤١ × ٢', right: '٨٢' },
          { left: '١٢ × ٤', right: '٤٨' },
          { left: '٢٢ × ٣', right: '٦٦' }
        ],
        explanation_ar: 'اضرب كل خانة على حدة من اليمين.',
        page: 151
      },
      {
        id: 'u5l5q8', type: 'fill_blank',
        question_ar: 'ما ناتج: ٢١ × ٤ = ؟',
        options_ar: ['٨٤', '٨١', '٤٤', '٨'],
        correct_index: 0,
        explanation_ar: '١×٤=٤، ٢×٤=٨. الناتج ٨٤.',
        page: 151
      }
    ]
  },
  {
    id: 'u5l6',
    title_ar: '٥-٦ ضرب عدد من رقمين في رقم واحد (مع إعادة التجميع)',
    subtitle_ar: 'الضرب مع الحمل',
    page: 157,
    image: 'https://images.unsplash.com/photo-1633158829585-23ba8f9c8b32?w=400&q=70',
    color: 'from-amber-500 to-orange-600',
    getQuestions: () => [
      {
        id: 'u5l6q1', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٢٦ × ٤ = ؟',
        options_ar: ['١٠٤', '٨٤', '١٠٠', '١١٤'],
        correct_index: 0,
        explanation_ar: '٦×٤=٢٤ (نكتب ٤ ونحمل ٢)، ٢×٤=٨ + ٢ = ١٠. الناتج ١٠٤.',
        golden_rule_ar: 'عند تجاوز الناتج ٩، اكتب الآحاد واحمل العشرات للمنزلة التالية.',
        page: 157
      },
      {
        id: 'u5l6q2', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٣٧ × ٥ = ؟',
        options_ar: ['١٨٥', '١٥٥', '١٧٥', '١٩٥'],
        correct_index: 0,
        explanation_ar: '٧×٥=٣٥ (٥ ونحمل ٣)، ٣×٥=١٥ + ٣ = ١٨. الناتج ١٨٥.',
        page: 157
      },
      {
        id: 'u5l6q3', type: 'fill_blank',
        question_ar: 'ما ناتج: ٤٨ × ٣ = ؟',
        options_ar: ['١٤٤', '١٢٤', '١٣٤', '١٥٤'],
        correct_index: 0,
        explanation_ar: '٨×٣=٢٤ (٤ ونحمل ٢)، ٤×٣=١٢ + ٢ = ١٤. الناتج ١٤٤.',
        page: 157
      },
      {
        id: 'u5l6q4', type: 'true_false',
        question_ar: 'في الضرب مع الحمل، نحمل العشرات من ناتج الآحاد إلى منزلة العشرات.',
        correct_answer: 'true',
        explanation_ar: 'إذا تجاوز ناتج الآحاد ٩، نحمل العشرات للمنزلة التالية.',
        page: 157
      },
      {
        id: 'u5l6q5', type: 'info',
        question_ar: '💡 خطوات الضرب مع الحمل: ١) اضرب الآحاد. ٢) إذا تجاوز ٩، اكتب الآحاد واحمل العشرات. ٣) اضرب العشرات وأضف المحمول. ٤) تابع حسب الخانات.',
        page: 157
      },
      {
        id: 'u5l6q6', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٥٩ × ٦ = ؟',
        options_ar: ['٣٥٤', '٣٠٤', '٣٤٤', '٣٦٤'],
        correct_index: 0,
        explanation_ar: '٩×٦=٥٤ (٤ ونحمل ٥)، ٥×٦=٣٠ + ٥ = ٣٥. الناتج ٣٥٤.',
        page: 157
      },
      {
        id: 'u5l6q7', type: 'matching',
        question_ar: 'صل كل عملية بناتجها:',
        pairs_ar: [
          { left: '٢٦ × ٤', right: '١٠٤' },
          { left: '٣٧ × ٥', right: '١٨٥' },
          { left: '٤٨ × ٣', right: '١٤٤' },
          { left: '٥٩ × ٦', right: '٣٥٤' }
        ],
        explanation_ar: 'اضرب الآحاد، احمل، ثم اضرب العشرات وأضف المحمول.',
        page: 157
      },
      {
        id: 'u5l6q8', type: 'fill_blank',
        question_ar: 'ما ناتج: ٦٨ × ٧ = ؟',
        options_ar: ['٤٧٦', '٤٦٢', '٤٢٦', '٤٨٦'],
        correct_index: 0,
        explanation_ar: '٨×٧=٥٦ (٦ ونحمل ٥)، ٦×٧=٤٢ + ٥ = ٤٧. الناتج ٤٧٦.',
        page: 157
      }
    ]
  },
  {
    id: 'u5l7',
    title_ar: '٥-٧ ضرب عدد من ثلاثة أرقام في رقم واحد',
    subtitle_ar: 'الضرب بثلاث خانات',
    page: 163,
    image: 'https://images.unsplash.com/photo-1543286386-2e65b306c112?w=400&q=70',
    color: 'from-rose-500 to-red-600',
    getQuestions: () => [
      {
        id: 'u5l7q1', type: 'multiple_choice',
        question_ar: 'ما ناتج: ١٢٣ × ٣ = ؟',
        options_ar: ['٣٦٩', '٣٣٩', '٣٦٦', '٤٦٩'],
        correct_index: 0,
        explanation_ar: '٣×٣=٩، ٢×٣=٦، ١×٣=٣. الناتج ٣٦٩.',
        page: 163
      },
      {
        id: 'u5l7q2', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٢٣٤ × ٤ = ؟',
        options_ar: ['٩٣٦', '٨٣٦', '٩٢٦', '٨٤٦'],
        correct_index: 0,
        explanation_ar: '٤×٤=١٦ (٦ ونحمل ١)، ٣×٤=١٢ + ١ = ١٣ (٣ ونحمل ١)، ٢×٤=٨ + ١ = ٩. الناتج ٩٣٦.',
        page: 163
      },
      {
        id: 'u5l7q3', type: 'fill_blank',
        question_ar: 'ما ناتج: ٣١٥ × ٣ = ؟',
        options_ar: ['٩٤٥', '٩٣٥', '٩٥٥', '٨٤٥'],
        correct_index: 0,
        explanation_ar: '٥×٣=١٥ (٥ ونحمل ١)، ١×٣=٣ + ١ = ٤، ٣×٣=٩. الناتج ٩٤٥.',
        page: 163
      },
      {
        id: 'u5l7q4', type: 'true_false',
        question_ar: 'ناتج ١١١ × ٩ = ٩٩٩.',
        correct_answer: 'true',
        explanation_ar: '١×٩=٩، ١×٩=٩، ١×٩=٩. الناتج ٩٩٩ ✓.',
        page: 163
      },
      {
        id: 'u5l7q5', type: 'info',
        question_ar: '💡 لضرب عدد من ثلاثة أرقام: اضرب الآحاد، احمل إن لزم، ثم العشرات، ثم المئات. كل منزلة تضرب في الرقم وتُضاف للمحمول.',
        page: 163
      },
      {
        id: 'u5l7q6', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٤٥٦ × ٢ = ؟',
        options_ar: ['٩١٢', '٨١٢', '٩٢٢', '٨٠٢'],
        correct_index: 0,
        explanation_ar: '٦×٢=١٢ (٢ ونحمل ١)، ٥×٢=١٠ + ١ = ١١ (١ ونحمل ١)، ٤×٢=٨ + ١ = ٩. الناتج ٩١٢.',
        page: 163
      },
      {
        id: 'u5l7q7', type: 'matching',
        question_ar: 'صل كل عملية بناتجها:',
        pairs_ar: [
          { left: '١٢٣ × ٣', right: '٣٦٩' },
          { left: '٢٣٤ × ٤', right: '٩٣٦' },
          { left: '٣١٥ × ٣', right: '٩٤٥' },
          { left: '٤٥٦ × ٢', right: '٩١٢' }
        ],
        explanation_ar: 'اضرب من اليمين مع الحمل.',
        page: 163
      },
      {
        id: 'u5l7q8', type: 'fill_blank',
        question_ar: 'ما ناتج: ٥١٢ × ٤ = ؟',
        options_ar: ['٢٠٤٨', '٢٠٤٤', '٢٠٨٨', '٢٠٢٤'],
        correct_index: 0,
        explanation_ar: '٢×٤=٨، ١×٤=٤، ٥×٤=٢٠. الناتج ٢٠٤٨.',
        page: 163
      }
    ]
  },
  {
    id: 'u5l8',
    title_ar: '٥-٨ الضرب في مضاعفات العشرة',
    subtitle_ar: 'ضرب في ٢٠، ٣٠، ٤٠...',
    page: 175,
    image: 'https://images.unsplash.com/photo-1503676260792-87958b1a6515?w=400&q=70',
    color: 'from-blue-500 to-indigo-600',
    getQuestions: () => [
      {
        id: 'u5l8q1', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٦ × ٢٠ = ؟',
        options_ar: ['١٢٠', '٢٦', '٦٠', '١٢'],
        correct_index: 0,
        explanation_ar: 'افصل: ٦ × ٢ = ١٢، ثم أضف صفراً: ١٢٠.',
        golden_rule_ar: 'للضرب في مضاعفات ١٠: اضرب في الرقم، ثم أضف الأصفار.',
        page: 175
      },
      {
        id: 'u5l8q2', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٤ × ٣٠ = ؟',
        options_ar: ['١٢٠', '٣٤', '٤٠', '١٢'],
        correct_index: 0,
        explanation_ar: '٤ × ٣ = ١٢، أضف صفراً: ١٢٠.',
        page: 175
      },
      {
        id: 'u5l8q3', type: 'fill_blank',
        question_ar: 'ما ناتج: ٥ × ٤٠ = ؟',
        options_ar: ['٢٠٠', '٥٠', '٤٥', '٢٠'],
        correct_index: 0,
        explanation_ar: '٥ × ٤ = ٢٠، أضف صفراً: ٢٠٠.',
        page: 175
      },
      {
        id: 'u5l8q4', type: 'true_false',
        question_ar: 'ناتج ٧ × ٥٠ = ٣٥٠.',
        correct_answer: 'true',
        explanation_ar: '٧ × ٥ = ٣٥، أضف صفراً: ٣٥٠ ✓.',
        page: 175
      },
      {
        id: 'u5l8q5', type: 'info',
        question_ar: '💡 للضرب في مضاعفات العشرة (٢٠، ٣٠، ٤٠...): ١) أزل الصفر من مضاعف العشرة. ٢) اضرب. ٣) أعد الصفر للناتج.',
        page: 175
      },
      {
        id: 'u5l8q6', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٨ × ٢٠ = ؟',
        options_ar: ['١٦٠', '٢٨', '٨٠', '١٦'],
        correct_index: 0,
        explanation_ar: '٨ × ٢ = ١٦، أضف صفراً: ١٦٠.',
        page: 175
      },
      {
        id: 'u5l8q7', type: 'matching',
        question_ar: 'صل كل عملية بناتجها:',
        pairs_ar: [
          { left: '٦ × ٢٠', right: '١٢٠' },
          { left: '٤ × ٣٠', right: '١٢٠' },
          { left: '٥ × ٤٠', right: '٢٠٠' },
          { left: '٨ × ٢٠', right: '١٦٠' }
        ],
        explanation_ar: 'اضرب في الرقم، ثم أضف الصفر.',
        page: 175
      },
      {
        id: 'u5l8q8', type: 'fill_blank',
        question_ar: 'ما ناتج: ٩ × ٣٠ = ؟',
        options_ar: ['٢٧٠', '٣٩', '٩٠', '٢٧'],
        correct_index: 0,
        explanation_ar: '٩ × ٣ = ٢٧، أضف صفراً: ٢٧٠.',
        page: 175
      }
    ]
  },
  {
    id: 'u5l9',
    title_ar: '٥-٩ ضرب عدد من رقمين في عدد من رقمين',
    subtitle_ar: 'الضرب المركب',
    page: 188,
    image: 'https://images.unsplash.com/photo-1612531386530-97286d97c2d2?w=400&q=70',
    color: 'from-emerald-500 to-teal-700',
    getQuestions: () => [
      {
        id: 'u5l9q1', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٢٣ × ١٢ = ؟',
        options_ar: ['٢٧٦', '٢٥٦', '٢٦٦', '٢٨٦'],
        correct_index: 0,
        explanation_ar: '٢٣ × ٢ = ٤٦، ٢٣ × ١٠ = ٢٣٠. المجموع = ٤٦ + ٢٣٠ = ٢٧٦.',
        golden_rule_ar: 'للضرب في عدد من رقمين: اضرب في الآحاد، ثم في العشرات (وأضف صفراً)، ثم اجمع.',
        page: 188
      },
      {
        id: 'u5l9q2', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٣٤ × ١٥ = ؟',
        options_ar: ['٥١٠', '٤١٠', '٥٢٠', '٥٠٠'],
        correct_index: 0,
        explanation_ar: '٣٤ × ٥ = ١٧٠، ٣٤ × ١٠ = ٣٤٠. المجموع = ١٧٠ + ٣٤٠ = ٥١٠.',
        page: 188
      },
      {
        id: 'u5l9q3', type: 'fill_blank',
        question_ar: 'ما ناتج: ٤٢ × ١١ = ؟',
        options_ar: ['٤٦٢', '٤٥٢', '٤٢٢', '٤٧٢'],
        correct_index: 0,
        explanation_ar: '٤٢ × ١ = ٤٢، ٤٢ × ١٠ = ٤٢٠. المجموع = ٤٢ + ٤٢٠ = ٤٦٢.',
        page: 188
      },
      {
        id: 'u5l9q4', type: 'true_false',
        question_ar: 'ناتج ٢٥ × ٢٠ = ٥٠٠.',
        correct_answer: 'true',
        explanation_ar: '٢٥ × ٢ = ٥٠، أضف صفراً: ٥٠٠ ✓.',
        page: 188
      },
      {
        id: 'u5l9q5', type: 'info',
        question_ar: '💡 لضرب عدد من رقمين في عدد من رقمين: ١) اضرب العدد الأول في الآحاد من العدد الثاني. ٢) اضرب العدد الأول في العشرات (وأضف صفراً). ٣) اجمع الناتجين.',
        page: 188
      },
      {
        id: 'u5l9q6', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٥٦ × ٢٣ = ؟',
        options_ar: ['١٢٨٨', '١١٨٨', '١٢٧٨', '١٣٨٨'],
        correct_index: 0,
        explanation_ar: '٥٦ × ٣ = ١٦٨، ٥٦ × ٢٠ = ١١٢٠. المجموع = ١٦٨ + ١١٢٠ = ١٢٨٨.',
        page: 188
      },
      {
        id: 'u5l9q7', type: 'matching',
        question_ar: 'صل كل عملية بناتجها:',
        pairs_ar: [
          { left: '٢٣ × ١٢', right: '٢٧٦' },
          { left: '٣٤ × ١٥', right: '٥١٠' },
          { left: '٤٢ × ١١', right: '٤٦٢' },
          { left: '٥٦ × ٢٣', right: '١٢٨٨' }
        ],
        explanation_ar: 'اضرب في الآحاد والعشرات، ثم اجمع.',
        page: 188
      },
      {
        id: 'u5l9q8', type: 'fill_blank',
        question_ar: 'ما ناتج: ٦٧ × ٢١ = ؟',
        options_ar: ['١٤٠٧', '١٣٠٧', '١٤١٧', '١٣١٧'],
        correct_index: 0,
        explanation_ar: '٦٧ × ١ = ٦٧، ٦٧ × ٢٠ = ١٣٤٠. المجموع = ٦٧ + ١٣٤٠ = ١٤٠٧.',
        page: 188
      }
    ]
  },
  {
    id: 'u5l10',
    title_ar: '٥-١٠ ضرب عدد من ثلاثة أرقام في رقمين',
    subtitle_ar: 'الضرب المركب بثلاث خانات',
    page: 191,
    image: 'https://images.unsplash.com/photo-1509318658120-b1b0e0d35a8e?w=400&q=70',
    color: 'from-violet-500 to-purple-600',
    getQuestions: () => [
      {
        id: 'u5l10q1', type: 'multiple_choice',
        question_ar: 'ما ناتج: ١٢٣ × ١٢ = ؟',
        options_ar: ['١٤٧٦', '١٣٧٦', '١٤٦٦', '١٤٨٦'],
        correct_index: 0,
        explanation_ar: '١٢٣ × ٢ = ٢٤٦، ١٢٣ × ١٠ = ١٢٣٠. المجموع = ٢٤٦ + ١٢٣٠ = ١٤٧٦.',
        golden_rule_ar: 'للضرب بثلاث خانات في رقمين: اضرب في الآحاد ثم العشرات واجمع.',
        page: 191
      },
      {
        id: 'u5l10q2', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٢٣٤ × ٢١ = ؟',
        options_ar: ['٤٩١٤', '٤٨١٤', '٤٩٢٤', '٤٧١٤'],
        correct_index: 0,
        explanation_ar: '٢٣٤ × ١ = ٢٣٤، ٢٣٤ × ٢٠ = ٤٦٨٠. المجموع = ٢٣٤ + ٤٦٨٠ = ٤٩١٤.',
        page: 191
      },
      {
        id: 'u5l10q3', type: 'fill_blank',
        question_ar: 'ما ناتج: ٣١٥ × ١١ = ؟',
        options_ar: ['٣٤٦٥', '٣٣٦٥', '٣٥٦٥', '٣٤٥٥'],
        correct_index: 0,
        explanation_ar: '٣١٥ × ١ = ٣١٥، ٣١٥ × ١٠ = ٣١٥٠. المجموع = ٣١٥ + ٣١٥٠ = ٣٤٦٥.',
        page: 191
      },
      {
        id: 'u5l10q4', type: 'true_false',
        question_ar: 'ناتج ١٠٠ × ٢٠ = ٢٠٠٠.',
        correct_answer: 'true',
        explanation_ar: '١ × ٢ = ٢، أضف ثلاثة أصفار: ٢٠٠٠ ✓.',
        page: 191
      },
      {
        id: 'u5l10q5', type: 'info',
        question_ar: '💡 لضرب عدد من ثلاثة أرقام في رقمين: ١) اضرب العدد الأول في الآحاد. ٢) اضرب العدد الأول في العشرات (وأضف صفراً). ٣) اجمع الناتجين.',
        page: 191
      },
      {
        id: 'u5l10q6', type: 'multiple_choice',
        question_ar: 'ما ناتج: ٤٥٦ × ١٢ = ؟',
        options_ar: ['٥٤٧٢', '٥٣٧٢', '٥٤٦٢', '٥٥٧٢'],
        correct_index: 0,
        explanation_ar: '٤٥٦ × ٢ = ٩١٢، ٤٥٦ × ١٠ = ٤٥٦٠. المجموع = ٩١٢ + ٤٥٦٠ = ٥٤٧٢.',
        page: 191
      },
      {
        id: 'u5l10q7', type: 'matching',
        question_ar: 'صل كل عملية بناتجها:',
        pairs_ar: [
          { left: '١٢٣ × ١٢', right: '١٤٧٦' },
          { left: '٢٣٤ × ٢١', right: '٤٩١٤' },
          { left: '٣١٥ × ١١', right: '٣٤٦٥' },
          { left: '٤٥٦ × ١٢', right: '٥٤٧٢' }
        ],
        explanation_ar: 'اضرب في الآحاد والعشرات، ثم اجمع.',
        page: 191
      },
      {
        id: 'u5l10q8', type: 'fill_blank',
        question_ar: 'ما ناتج: ٥١٢ × ٢١ = ؟',
        options_ar: ['١٠٧٥٢', '١٠٦٥٢', '١٠٧٦٢', '١٠٨٥٢'],
        correct_index: 0,
        explanation_ar: '٥١٢ × ١ = ٥١٢، ٥١٢ × ٢٠ = ١٠٢٤٠. المجموع = ٥١٢ + ١٠٢٤٠ = ١٠٧٥٢.',
        page: 191
      }
    ]
  }
];