// بنك رياضيات — الفصل الثاني: جمع الأعداد العشرية وطرحها
// المصدر: كتاب وزارة التعليم 1447هـ / 2025م

export const MATH_G5_S2_CH2_UNITS = [
  {
    id: 'dec_add',
    title_ar: 'جمع الأعداد العشرية',
    subtitle_ar: 'محاذاة الفاصلة العشرية وجمع الأعداد',
    color: 'from-cyan-700 to-blue-500',
    icon: '➕',
    lessons: [{
      id: 'da_l1', title_ar: 'جمع الأعداد العشرية', count: 12,
      image: 'https://images.unsplash.com/photo-1554224155-6726b8ff5e31?w=300',
      getQuestions: () => [
        { id: 'da_i1', type: 'info', question_ar: 'لجمع الأعداد العشرية: (١) محاذاتها الفواصل العشرية تحت بعضها. (٢) أصفاراً-placeholder إن لزم. (٣) اجمع كأنها أعداد صحيحة. (٤) ضع الفاصلة في الناتج تحت الفواصل. مثال: ٣.٤٥ + ٢.٣ → ٣.٤٥ + ٢.٣٠ = ٥.٧٥.', explanation_ar: 'محاذاة الفاصلة العشرية هي الخطوة الأساسية.' },
        { id: 'da_1', type: 'multiple_choice', question_ar: 'اشترت أميرة كتاباً بـ ٢٤.٧٥ ريال ودفتراً بـ ١٢.٤ ريال. ما المجموع؟', options_ar: ['٣٧.١٥ ريال', '٣٦.١٥ ريال', '٣٧.٧٥ ريال', '٣٦.٧٩ ريال'], correct_index: 0, explanation_ar: '٢٤.٧٥ + ١٢.٤٠ = ٣٧.١٥ ريال.', golden_rule: 'محاذاة الفاصلة العشرية ثم الجمع كالأعداد الصحيحة.' },
        { id: 'da_2', type: 'fill_blank', question_ar: '٣.٦ + ٢.١٤ = ___', options_ar: ['٥.٧٤', '٥.٧٤', '٥.٦٤', '٥.٢٠'], correct_index: 0, explanation_ar: '٣.٦٠ + ٢.١٤ = ٥.٧٤.' },
        { id: 'da_3', type: 'true_false', question_ar: '١٢.٣ + ٤.٥٦ = ١٦.٨٦.', correct_answer: 'true', explanation_ar: '١٢.٣٠ + ٤.٥٦ = ١٦.٨٦. صحيح.' },
        { id: 'da_4', type: 'multiple_choice', question_ar: 'قطع سعود ٣.٢٥ كلم ثم ١.٨ كلم. ما المجموع؟', options_ar: ['٥.٠٥ كلم', '٤.٣٣ كلم', '٥.٢٥ كلم', '٥.٠ كلم'], correct_index: 0, explanation_ar: '٣.٢٥ + ١.٨٠ = ٥.٠٥ كلم.' },
        { id: 'da_5', type: 'ordering', question_ar: 'رتِّب خطوات جمع ٤.٥ + ٢.٣٧:', items_ar: ['محاذاة الفواصل: ٤.٥٠ + ٢.٣٧', 'اجمع: ٤.٥٠ + ٢.٣٧ = ٦.٨٧', 'ضع الفاصلة تحت الفواصل: ٦.٨٧'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لجمع الأعداد العشرية.' },
        { id: 'da_6', type: 'multiple_choice', question_ar: 'أوزان: ٢.٣٥كجم + ٤.٧كجم + ١.٢٥كجم. المجموع؟', options_ar: ['٨.٣٠ كجم', '٧.٣٠ كجم', '٨.٣ كجم', '٨.٢ كجم'], correct_index: 0, explanation_ar: '٢.٣٥ + ٤.٧٠ + ١.٢٥ = ٨.٣٠ كجم.' },
        { id: 'da_7', type: 'true_false', question_ar: '٠.٢٥ + ٠.٢٥ + ٠.٢٥ = ٠.٧٥.', correct_answer: 'true', explanation_ar: '٠.٧٥ = ٣ × ٠.٢٥. صحيح.' },
        { id: 'da_8', type: 'classify', question_ar: 'صنِّف: هل المجموع أكبر من ٥ أم أقل؟', categories_ar: ['المجموع > ٥', 'المجموع < ٥'], items_ar: [{ text: '٣.٢ + ٢.١', correct_category: 0 }, { text: '١.٥ + ٢.٤', correct_category: 1 }, { text: '٤.٨ + ٠.٥', correct_category: 0 }, { text: '٢.١ + ١.٣', correct_category: 1 }], explanation_ar: '٣.٢+٢.١=٥.٣>٥. ١.٥+٢.٤=٣.٩<٥. ٤.٨+٠.٥=٥.٣>٥. ٢.١+١.٣=٣.٤<٥.' },
        { id: 'da_9', type: 'fill_blank', question_ar: 'أطوال أقلام: ٧.٨سم + ٦.٤سم = ___', options_ar: ['١٤.٢ سم', '١٣.٢ سم', '١٤.١٢ سم', '٧.٨ سم'], correct_index: 0, explanation_ar: '٧.٨ + ٦.٤ = ١٤.٢ سم.' },
        { id: 'da_10', type: 'multiple_choice', question_ar: 'ما ناتج: ٠.٠٥ + ٠.٠٠٣؟', options_ar: ['٠.٠٥٣', '٠.٠٨', '٠.٠٠٨', '٠.٥٣'], correct_index: 0, explanation_ar: '٠.٠٥٠ + ٠.٠٠٣ = ٠.٠٥٣.' },
        { id: 'da_11', type: 'matching', question_ar: 'صِل كل جمع بناتجه:', pairs_ar: [{ right: '١.٢ + ٣.٤', left: '٤.٦' }, { right: '٠.٢٥ + ٠.٧٥', left: '١.٠' }, { right: '٥.٥ + ٢.٥', left: '٨.٠' }, { right: '٣.١٤ + ٢.٠', left: '٥.١٤' }], explanation_ar: '١.٢+٣.٤=٤.٦. ٠.٢٥+٠.٧٥=١. ٥.٥+٢.٥=٨. ٣.١٤+٢=٥.١٤.' },
        { id: 'da_12', type: 'true_false', question_ar: 'عند جمع الأعداد العشرية، لا حاجة لمحاذاة الفواصل العشرية.', correct_answer: 'false', explanation_ar: 'محاذاة الفواصل العشرية ضرورية لدقة الجمع. خطأ.' },
      ],
    }],
  },
  {
    id: 'dec_sub',
    title_ar: 'طرح الأعداد العشرية',
    subtitle_ar: 'محاذاة الفاصلة وطرح الأعداد',
    color: 'from-red-700 to-rose-500',
    icon: '➖',
    lessons: [{
      id: 'ds_l1', title_ar: 'طرح الأعداد العشرية', count: 11,
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300',
      getQuestions: () => [
        { id: 'ds_i1', type: 'info', question_ar: 'لطرح الأعداد العشرية: محاذاة الفواصل، أضف أصفاراً إن لزم، اطرح كالأعداد الصحيحة، ضع الفاصلة في الناتج. مثال: ٥.٨ − ٢.٣٤ → ٥.٨٠ − ٢.٣٤ = ٣.٤٦.', explanation_ar: 'طرح العشرية = محاذاة الفاصلة ثم الطرح كالمعتاد.' },
        { id: 'ds_1', type: 'multiple_choice', question_ar: 'مع نوال ٥٠ ريالاً. اشترت كتاباً بـ ٢٤.٧٥. ما المتبقي؟', options_ar: ['٢٥.٢٥ ريال', '٢٦.٢٥ ريال', '٢٤.٢٥ ريال', '٢٥.٧٥ ريال'], correct_index: 0, explanation_ar: '٥٠.٠٠ − ٢٤.٧٥ = ٢٥.٢٥ ريال.', golden_rule: 'محاذاة الفاصلة العشرية ثم الطرح.' },
        { id: 'ds_2', type: 'fill_blank', question_ar: '٨.٣ − ٢.٥٦ = ___', options_ar: ['٥.٧٤', '٥.٨٤', '٦.٢٦', '٥.٢٦'], correct_index: 0, explanation_ar: '٨.٣٠ − ٢.٥٦ = ٥.٧٤.' },
        { id: 'ds_3', type: 'true_false', question_ar: '١٠.٥ − ٣.٢٥ = ٧.٢٥.', correct_answer: 'true', explanation_ar: '١٠.٥٠ − ٣.٢٥ = ٧.٢٥. صحيح.' },
        { id: 'ds_4', type: 'multiple_choice', question_ar: 'تبعد مدينة عن أخرى ١٥.٦ كلم. قطع سائق ٨.٢٥ كلم. ما المتبقي؟', options_ar: ['٧.٣٥ كلم', '٧.٤٥ كلم', '٦.٣٥ كلم', '٧.٢٥ كلم'], correct_index: 0, explanation_ar: '١٥.٦٠ − ٨.٢٥ = ٧.٣٥ كلم.' },
        { id: 'ds_5', type: 'multiple_choice', question_ar: 'وزن صندوق ٤.٢٥ كجم. أُخرج ١.٨ كجم. ما المتبقي؟', options_ar: ['٢.٤٥ كجم', '٢.٤٥ كجم', '٣.٢٥ كجم', '٢.٥٥ كجم'], correct_index: 0, explanation_ar: '٤.٢٥ − ١.٨٠ = ٢.٤٥ كجم.' },
        { id: 'ds_6', type: 'classify', question_ar: 'صنِّف: الفرق موجب أم صفر؟', categories_ar: ['الفرق > ٠', 'الفرق = ٠'], items_ar: [{ text: '٥.٥ − ٢.٣', correct_category: 0 }, { text: '٣.٧٥ − ٣.٧٥', correct_category: 1 }, { text: '٨.٠ − ٤.٢', correct_category: 0 }, { text: '٦.٦ − ٦.٦', correct_category: 1 }], explanation_ar: 'طرح متساويين = صفر.' },
        { id: 'ds_7', type: 'ordering', question_ar: 'رتِّب خطوات طرح ٧ − ٣.٢٥:', items_ar: ['أضف صفرين: ٧.٠٠', 'محاذاة: ٧.٠٠ − ٣.٢٥', 'اطرح: ٣.٧٥'], correct_order: [0, 1, 2], explanation_ar: '٧.٠٠ − ٣.٢٥ = ٣.٧٥.' },
        { id: 'ds_8', type: 'fill_blank', question_ar: '١٢ − ٤.٨ = ___', options_ar: ['٧.٢', '٨.٢', '٧.٨', '٨.٨'], correct_index: 0, explanation_ar: '١٢.٠ − ٤.٨ = ٧.٢.' },
        { id: 'ds_9', type: 'true_false', question_ar: '٠.١ − ٠.٠٣ = ٠.٠٧.', correct_answer: 'true', explanation_ar: '٠.١٠ − ٠.٠٣ = ٠.٠٧. صحيح.' },
        { id: 'ds_10', type: 'matching', question_ar: 'صِل كل طرح بناتجه:', pairs_ar: [{ right: '٥.٥ − ٢.٥', left: '٣.٠' }, { right: '١٠ − ٣.٧٥', left: '٦.٢٥' }, { right: '٨.٤ − ٢.٠', left: '٦.٤' }, { right: '١ − ٠.٢٥', left: '٠.٧٥' }], explanation_ar: '٣. ٦.٢٥. ٦.٤. ٠.٧٥.' },
        { id: 'ds_11', type: 'multiple_choice', question_ar: 'استهلكت سيارة ٨.٥ لتر ثم ٦.٢٥ لتر. ما الفرق بين الاستهلاكين؟', options_ar: ['٢.٢٥ لتر', '٢.٢٠ لتر', '١.٢٥ لتر', '٣.٢ لتر'], correct_index: 0, explanation_ar: '٨.٥٠ − ٦.٢٥ = ٢.٢٥ لتر.' },
      ],
    }],
  },
  {
    id: 'dec_est',
    title_ar: 'تقدير المجاميع والفروق',
    subtitle_ar: 'تقريب الأعداد العشرية ثم الجمع أو الطرح',
    color: 'from-amber-700 to-yellow-500',
    icon: '📊',
    lessons: [{
      id: 'de_l1', title_ar: 'تقدير المجاميع والفروق', count: 8,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300',
      getQuestions: () => [
        { id: 'de_i1', type: 'info', question_ar: 'لتقدير مجموع أو فرق الأعداد العشرية: قرب كل عدد لأقرب عدد صحيح ثم اجمع أو اطرح. مثال: ٤.٣٨ + ٢.٧ → ٤ + ٣ = ٧ (تقدير).', explanation_ar: 'التقدير = تقريب ثم عملية.' },
        { id: 'de_1', type: 'multiple_choice', question_ar: 'قدّر: ٣.٤٧ + ٥.٨', options_ar: ['٩', '٨', '١٠', '٨.٥'], correct_index: 0, explanation_ar: '٣ + ٦ = ٩ (تقدير).' },
        { id: 'de_2', type: 'true_false', question_ar: 'تقدير ١٢.٦ − ٤.٣ ≈ ٨.', correct_answer: 'true', explanation_ar: '١٣ − ٤ = ٩... أو ١٢ − ٤ = ٨. التقدير قريب من ٨-٩. صحيح.' },
        { id: 'de_3', type: 'multiple_choice', question_ar: 'قدّر: ٨.٢ − ٣.٧', options_ar: ['٤', '٥', '٣', '٦'], correct_index: 0, explanation_ar: '٨ − ٤ = ٤ (تقدير).' },
        { id: 'de_4', type: 'fill_blank', question_ar: 'قدّر: ٢.١٤ + ٦.٩ ≈ ___', options_ar: ['٩', '٨', '١٠', '٧'], correct_index: 0, explanation_ar: '٢ + ٧ = ٩.' },
        { id: 'de_5', type: 'classify', question_ar: 'صنِّف: التقدير أكبر أم أصغر من القيمة الفعلية؟', categories_ar: ['التقدير > الفعلي', 'التقدير < الفعلي'], items_ar: [{ text: '٣.٤ + ٢.٤ → ٣+٢=٥ (الفعلي ٥.٨)', correct_category: 1 }, { text: '٤.٨ + ٣.٧ → ٥+٤=٩ (الفعلي ٨.٥)', correct_category: 0 }, { text: '٢.٦ + ٥.٥ → ٣+٦=٩ (الفعلي ٨.١)', correct_category: 0 }], explanation_ar: 'التقريب قد يزيد أو ينقص عن الفعلي.' },
        { id: 'de_6', type: 'multiple_choice', question_ar: 'ساعة قطعت ٤.٢٥ كلم ثم ٣.٦ كلم. قدّر المجموع:', options_ar: ['٨ كلم', '٧ كلم', '٩ كلم', '٦ كلم'], correct_index: 0, explanation_ar: '٤ + ٤ = ٨ كلم (تقدير).' },
        { id: 'de_7', type: 'true_false', question_ar: 'التقدير مفيد للتحقق من معقولية الإجابة الدقيقة.', correct_answer: 'true', explanation_ar: 'التقدير أداة تحقق سريعة. صحيح.' },
        { id: 'de_8', type: 'ordering', question_ar: 'رتِّب خطوات تقدير ٥.٦٧ + ٢.١٣:', items_ar: ['قرب: ٥.٦٧ ≈ ٦', 'قرب: ٢.١٣ ≈ ٢', 'اجمع: ٦ + ٢ = ٨'], correct_order: [0, 1, 2], explanation_ar: 'التقدير = تقريب كل عدد ثم الجمع.' },
      ],
    }],
  },
];

export const MATH_G5_S2_CH2_TOTAL = MATH_G5_S2_CH2_UNITS.reduce((s, u) => s + u.lessons.reduce((ls, l) => ls + l.count, 0), 0);