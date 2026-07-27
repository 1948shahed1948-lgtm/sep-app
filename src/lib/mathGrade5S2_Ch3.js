// بنك رياضيات — الفصل الثالث: ضرب الأعداد العشرية
// المصدر: كتاب وزارة التعليم 1447هـ / 2025م

export const MATH_G5_S2_CH3_UNITS = [
  {
    id: 'mul_dec_int',
    title_ar: 'ضرب عدد عشري في عدد صحيح',
    subtitle_ar: 'ضرب كالمعتاد ثم عدّ المنازل العشرية',
    color: 'from-purple-700 to-violet-500',
    icon: '✖️',
    lessons: [{
      id: 'mi_l1', title_ar: 'ضرب عدد عشري في عدد صحيح', count: 11,
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300',
      getQuestions: () => [
        { id: 'mi_i1', type: 'info', question_ar: 'لضرب عدد عشري في عدد صحيح: (١) اضرب كأنها أعداد صحيحة. (٢) عدّ المنازل العشرية في العدد العشري. (٣) ضع الفاصلة في الناتج ب同じ عدد المنازل. مثال: ٣.٤ × ٦ → ٣٤ × ٦ = ٢٠٤ → منزل عشري واحد → ٢.٠٤.', explanation_ar: 'عدّ المنازل العشرية وضع الفاصلة في الناتج.' },
        { id: 'mi_1', type: 'multiple_choice', question_ar: 'ما ناتج: ٢.٤ × ٥؟', options_ar: ['١٢.٠', '١.٢', '١٢٠', '١٠.٢'], correct_index: 0, explanation_ar: '٢٤ × ٥ = ١٢٠. منزل عشري واحد → ١٢.٠.', golden_rule: 'عدد المنازل العشرية في الناتج = مجموع المنازل في العددين.' },
        { id: 'mi_2', type: 'fill_blank', question_ar: '٠.٣٥ × ٤ = ___', options_ar: ['١.٤٠', '٠.١٤٠', '١٤.٠', '٠.١٤'], correct_index: 0, explanation_ar: '٣٥ × ٤ = ١٤٠. منزلان عشريان → ١.٤٠ = ١.٤.' },
        { id: 'mi_3', type: 'true_false', question_ar: '٣.٢٥ × ٣ = ٩.٧٥.', correct_answer: 'true', explanation_ar: '٣٢٥ × ٣ = ٩٧٥. منزلان → ٩.٧٥. صحيح.' },
        { id: 'mi_4', type: 'multiple_choice', question_ar: 'ثمن القلم ٢.٥ ريال. ما ثمن ٦ أقلام؟', options_ar: ['١٥.٠ ريال', '١٢.٥ ريال', '٨.٥ ريال', '١٤.٠ ريال'], correct_index: 0, explanation_ar: '٢.٥ × ٦ = ١٥.٠ ريال.' },
        { id: 'mi_5', type: 'multiple_choice', question_ar: 'يقطع جهاز ٣.٧٥ م في الثانية. ما المسافة في ٤ ثوان؟', options_ar: ['١٥.٠٠ م', '١٤.٠٠ م', '١٥.٧٥ م', '١٢.٧٥ م'], correct_index: 0, explanation_ar: '٣.٧٥ × ٤ = ١٥.٠٠ م.' },
        { id: 'mi_6', type: 'classify', question_ar: 'صنِّف: الناتج أكبر من ١٠ أم أقل؟', categories_ar: ['الناتج > ١٠', 'الناتج < ١٠'], items_ar: [{ text: '٣.٥ × ٤', correct_category: 0 }, { text: '١.٢ × ٥', correct_category: 1 }, { text: '٢.٢٥ × ٨', correct_category: 0 }, { text: '٠.٥ × ٦', correct_category: 1 }], explanation_ar: '٣.٥×٤=١٤>١٠. ١.٢×٥=٦<١٠. ٢.٢٥×٨=١٨>١٠. ٠.٥×٦=٣<١٠.' },
        { id: 'mi_7', type: 'ordering', question_ar: 'رتِّب خطوات ضرب ٤.٢ × ٧:', items_ar: ['اضرب: ٤٢ × ٧ = ٢٩٤', 'عدّ المنازل: ٤.٢ لها منزل واحد', 'ضع الفاصلة: ٢٩.٤'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لضرب عشري في صحيح.' },
        { id: 'mi_8', type: 'fill_blank', question_ar: '٦.٥ × ٨ = ___', options_ar: ['٥٢.٠', '٥.٢٠', '٤٨.٥', '٥٢.٥'], correct_index: 0, explanation_ar: '٦٥ × ٨ = ٥٢٠. منزل واحد → ٥٢.٠.' },
        { id: 'mi_9', type: 'true_false', question_ar: '٠.٠٤ × ٥ = ٠.٢٠.', correct_answer: 'true', explanation_ar: '٤ × ٥ = ٢٠. منزلان → ٠.٢٠. صحيح.' },
        { id: 'mi_10', type: 'matching', question_ar: 'صِل كل عملية بناتجها:', pairs_ar: [{ right: '٢.٥ × ٤', left: '١٠.٠' }, { right: '٠.٢٥ × ٨', left: '٢.٠٠' }, { right: '٣.١ × ٣', left: '٩.٣' }, { right: '١.٥ × ٦', left: '٩.٠' }], explanation_ar: '١٠. ٢. ٩.٣. ٩.' },
        { id: 'mi_11', type: 'multiple_choice', question_ar: 'دراجة تسير ١٢.٤ كلم/س. ما المسافة في ٣ ساعات؟', options_ar: ['٣٧.٢ كلم', '٣٦.٢ كلم', '١٥.٤ كلم', '٤٠.٢ كلم'], correct_index: 0, explanation_ar: '١٢.٤ × ٣ = ٣٧.٢ كلم.' },
      ],
    }],
  },
  {
    id: 'mul_dec_dec',
    title_ar: 'ضرب عددين عشريين',
    subtitle_ar: 'ضرب كالأعداد الصحيحة ثم عدّ كل المنازل العشرية',
    color: 'from-indigo-700 to-blue-500',
    icon: '🔢',
    lessons: [{
      id: 'md_l1', title_ar: 'ضرب عددين عشريين', count: 11,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300',
      getQuestions: () => [
        { id: 'md_i1', type: 'info', question_ar: 'لضرب عددين عشريين: (١) اضرب كأنها أعداد صحيحة. (٢) عدّ المنازل العشرية في العددين معاً. (٣) ضع الفاصلة في الناتج بمجموع المنازل. مثال: ٢.٣ × ٠.٤ → ٢٣ × ٤ = ٩٢. منزل + منزل = منزلان → ٠.٩٢.', explanation_ar: 'مجموع المنازل العشرية في الناتج = مجموع منازل العددين.' },
        { id: 'md_1', type: 'multiple_choice', question_ar: 'ما ناتج: ٠.٥ × ٠.٣؟', options_ar: ['٠.١٥', '١.٥', '٠.٠١٥', '٠.٠١٥'], correct_index: 0, explanation_ar: '٥ × ٣ = ١٥. منزلان → ٠.١٥.', golden_rule: 'منازل الناتج = مجموع منازل العددين.' },
        { id: 'md_2', type: 'fill_blank', question_ar: '٢.٤ × ٠.٣ = ___', options_ar: ['٠.٧٢', '٧.٢', '٠.٠٧٢', '٧٢'], correct_index: 0, explanation_ar: '٢٤ × ٣ = ٧٢. منزلان → ٠.٧٢.' },
        { id: 'md_3', type: 'true_false', question_ar: '١.٥ × ٢.٥ = ٣.٧٥.', correct_answer: 'true', explanation_ar: '١٥ × ٢٥ = ٣٧٥. منزلان → ٣.٧٥. صحيح.' },
        { id: 'md_4', type: 'multiple_choice', question_ar: 'أبعاد مستطيل: ٣.٥ م × ٢.٠ م. ما المساحة؟', options_ar: ['٧.٠٠ م^{2}', '٦.٥٠ م^{2}', '٥.٥٠ م^{2}', '٧.٥٠ م^{2}'], correct_index: 0, explanation_ar: '٣.٥ × ٢.٠ = ٧.٠٠ م^{2}.' },
        { id: 'md_5', type: 'multiple_choice', question_ar: 'ما ناتج: ٠.٢٥ × ٠.٤؟', options_ar: ['٠.١٠٠', '١.٠٠', '٠.٠١٠', '٠.٠١٠'], correct_index: 0, explanation_ar: '٢٥ × ٤ = ١٠٠. أربعة منازل → ٠.١٠٠ = ٠.١.' },
        { id: 'md_6', type: 'classify', question_ar: 'صنِّف: الناتج أكبر من ١ أم أقل؟', categories_ar: ['الناتج > ١', 'الناتج < ١'], items_ar: [{ text: '٢.٥ × ١.٢', correct_category: 0 }, { text: '٠.٥ × ٠.٤', correct_category: 1 }, { text: '٣.٠ × ٢.٠', correct_category: 0 }, { text: '٠.٢٥ × ٠.٣', correct_category: 1 }], explanation_ar: '٢.٥×١.٢=٣>١. ٠.٥×٠.٤=٠.٢<١. ٣×٢=٦>١. ٠.٢٥×٠.٣=٠.٠٧٥<١.' },
        { id: 'md_7', type: 'ordering', question_ar: 'رتِّب خطوات ضرب ١.٢ × ٠.٣:', items_ar: ['اضرب: ١٢ × ٣ = ٣٦', 'عدّ المنازل: ١ + ١ = ٢', 'ضع الفاصلة: ٠.٣٦'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لضرب عددين عشريين.' },
        { id: 'md_8', type: 'fill_blank', question_ar: '٤.٥ × ٠.٢ = ___', options_ar: ['٠.٩٠', '٩.٠', '٠.٠٩٠', '٠.٩٠'], correct_index: 0, explanation_ar: '٤٥ × ٢ = ٩٠. منزلان → ٠.٩٠ = ٠.٩.' },
        { id: 'md_9', type: 'true_false', question_ar: 'حاصل ضرب عددين عشريين أقل من ١ يكون دائماً أصغر من كليهما.', correct_answer: 'true', explanation_ar: 'مثال: ٠.٥ × ٠.٣ = ٠.١٥ < ٠.٣ < ٠.٥. صحيح (للأعداد بين ٠ و١).' },
        { id: 'md_10', type: 'matching', question_ar: 'صِل كل عملية بناتجها:', pairs_ar: [{ right: '٠.٥ × ٠.٥', left: '٠.٢٥' }, { right: '١.٢ × ٢.٥', left: '٣.٠٠' }, { right: '٠.٢٥ × ٠.٢', left: '٠.٠٥٠' }, { right: '٢.٥ × ٠.٤', left: '١.٠٠' }], explanation_ar: '٠.٢٥. ٣. ٠.٠٥. ١.' },
        { id: 'md_11', type: 'multiple_choice', question_ar: 'ثمن كيلو التفاح ٤.٥ ريال. ما ثمن ١.٥ كجم؟', options_ar: ['٦.٧٥ ريال', '٦.٥٠ ريال', '٥.٧٥ ريال', '٧.٢٥ ريال'], correct_index: 0, explanation_ar: '٤.٥ × ١.٥ = ٦.٧٥ ريال.' },
      ],
    }],
  },
  {
    id: 'mul_10',
    title_ar: 'الضرب في ١٠ و١٠٠ و١٠٠٠',
    subtitle_ar: 'إزاحة الفاصلة العشرية لليمين',
    color: 'from-teal-700 to-green-500',
    icon: '⚡',
    lessons: [{
      id: 'm10_l1', title_ar: 'الضرب في ١٠ و١٠٠ و١٠٠٠', count: 8,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300',
      getQuestions: () => [
        { id: 'm10_i1', type: 'info', question_ar: 'للضرب في ١٠: أزح الفاصلة منزلاً واحداً لليمين. في ١٠٠: منزلين. في ١٠٠٠: ثلاثة منازل. مثال: ٣.٤٥ × ١٠ = ٣٤.٥. ٣.٤٥ × ١٠٠ = ٣٤٥.', explanation_ar: 'الضرب في ١٠/١٠٠/١٠٠٠ = إزاحة الفاصلة لليمين.' },
        { id: 'm10_1', type: 'multiple_choice', question_ar: 'ما ناتج: ٤.٢٥ × ١٠؟', options_ar: ['٤٢.٥', '٤٢٥', '٠.٤٢٥', '٤٢٥.٠'], correct_index: 0, explanation_ar: 'أزح الفاصلة منزلاً: ٤٢.٥.', golden_rule: '× ١٠ = إزاحة منزل، × ١٠٠ = منزلين، × ١٠٠٠ = ثلاثة.' },
        { id: 'm10_2', type: 'fill_blank', question_ar: '٠.٣٥٦ × ١٠٠ = ___', options_ar: ['٣٥.٦', '٣.٥٦', '٣٥٦', '٣٥٦٠'], correct_index: 0, explanation_ar: 'منزلان لليمين: ٣٥.٦.' },
        { id: 'm10_3', type: 'true_false', question_ar: '٢.٥ × ١٠٠٠ = ٢٥٠٠.', correct_answer: 'true', explanation_ar: 'ثلاثة منازل: ٢٥٠٠. صحيح.' },
        { id: 'm10_4', type: 'multiple_choice', question_ar: 'ما ناتج: ٠.٠٠٥ × ١٠٠؟', options_ar: ['٠.٥', '٠.٠٥', '٠.٥٠', 'كلا الأول والثالث صحيح'], correct_index: 3, explanation_ar: 'منزلان: ٠.٥ = ٠.٥٠. كلاهما صحيح.' },
        { id: 'm10_5', type: 'ordering', question_ar: 'رتِّب: الضرب في ١٠/١٠٠/١٠٠٠ يزح الفاصلة:', items_ar: ['× ١٠ → منزل واحد', '× ١٠٠ → منزلان', '× ١٠٠٠ → ثلاثة منازل'], correct_order: [0, 1, 2], explanation_ar: 'عدد المنازل = عدد أصفار العدد.' },
        { id: 'm10_6', type: 'fill_blank', question_ar: '٧.٨٩ × ١٠٠٠ = ___', options_ar: ['٧٨٩٠', '٧٨٩.٠', '٧٨.٩٠', '٧٨٩٠٠'], correct_index: 0, explanation_ar: 'ثلاثة منازل: ٧٨٩٠.' },
        { id: 'm10_7', type: 'true_false', question_ar: 'الضرب في ١٠٠ يعادل إزاحة الفاصلة منزلين لليمين.', correct_answer: 'true', explanation_ar: '١٠٠ لها صفران = منزلان. صحيح.' },
        { id: 'm10_8', type: 'multiple_choice', question_ar: 'ما ناتج: ١٢.٥ × ١٠ × ١٠؟', options_ar: ['١٢٥٠', '١٢٥', '١٢.٥٠', '١٢٥٠٠'], correct_index: 0, explanation_ar: '× ١٠ = ١٢٥، × ١٠ = ١٢٥٠. أو × ١٠٠ = ١٢٥٠.' },
      ],
    }],
  },
];

export const MATH_G5_S2_CH3_TOTAL = MATH_G5_S2_CH3_UNITS.reduce((s, u) => s + u.lessons.reduce((ls, l) => ls + l.count, 0), 0);