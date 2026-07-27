// بنك رياضيات — الفصل العاشر: ضرب الكسور وقسمتها
// المصدر: كتاب وزارة التعليم 1447هـ / 2025م

export const MATH_G5_S2_CH10_UNITS = [
  {
    id: 'mul_frac',
    title_ar: 'ضرب الكسور',
    subtitle_ar: 'ضرب البسط في البسط والمقام في المقام',
    color: 'from-indigo-700 to-blue-500',
    icon: '✖️',
    lessons: [{
      id: 'mf_l1', title_ar: 'ضرب الكسور', count: 12,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300',
      getQuestions: () => [
        { id: 'mf_i1', type: 'info', question_ar: 'لضرب كسرين: اضرب البسط في البسط والمقام في المقام. مثال: ٢/٣ × ٤/٥ = (٢×٤)/(٣×٥) = ٨/١٥. بسِّط الناتج إن أمكن. قبل الضرب، اختصر الأعداد المتقابلة (بسط مع مقام) إن أمكن.', explanation_ar: 'ضرب الكسور = بسط×بسط / مقام×مقام.' },
        { id: 'mf_1', type: 'multiple_choice', question_ar: 'ما ناتج: ٢/٣ × ٤/٥؟', options_ar: ['٨/١٥', '٦/٨', '٨/٣', '٢/٥'], correct_index: 0, explanation_ar: '(٢×٤)/(٣×٥) = ٨/١٥.', golden_rule: 'ضرب الكسور: بسط×بسط، مقام×مقام.' },
        { id: 'mf_2', type: 'fill_blank', question_ar: '٣/٤ × ٢/٣ = ___', options_ar: ['١/٢', '٦/١٢', 'كلاهما صحيح', '٥/٧'], correct_index: 2, explanation_ar: '٦/١٢. ق.م.أ=٦. ٦÷٦=١، ١٢÷٦=٢. = ١/٢. كلاهما صحيح.' },
        { id: 'mf_3', type: 'true_false', question_ar: '١/٢ × ١/٢ = ١/٤.', correct_answer: 'true', explanation_ar: '(١×١)/(٢×٢) = ١/٤. صحيح.' },
        { id: 'mf_4', type: 'multiple_choice', question_ar: 'ما ناتج: ٣/٥ × ١٠/١٢؟', options_ar: ['١/٢', '٣٠/٦٠', 'كلاهما صحيح', '٣/٦'], correct_index: 2, explanation_ar: '٣٠/٦٠ = ١/٢. كلاهما صحيح.' },
        { id: 'mf_5', type: 'multiple_choice', question_ar: 'ما ناتج: ٢/٣ × ٣/٤؟', options_ar: ['١/٢', '٦/١٢', 'كلاهما صحيح', '٥/٧'], correct_index: 2, explanation_ar: '٦/١٢ = ١/٢. كلاهما صحيح.' },
        { id: 'mf_6', type: 'ordering', question_ar: 'رتِّب خطوات ضرب ٣/٤ × ٨/٩:', items_ar: ['اضرب البسط: ٣×٨=٢٤', 'اضرب المقام: ٤×٩=٣٦', 'بسِّط: ٢٤/٣٦ = ٢/٣'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لضرب الكسور.' },
        { id: 'mf_7', type: 'fill_blank', question_ar: 'ما ناتج: ٥/٦ × ٣/١٠؟', options_ar: ['١/٤', '١٥/٦٠', 'كلاهما صحيح', '٣/٤'], correct_index: 2, explanation_ar: '١٥/٦٠ = ١/٤. كلاهما صحيح.' },
        { id: 'mf_8', type: 'true_false', question_ar: 'حاصل ضرب كسرين أقل من ١ يكون أصغر من كل منهما.', correct_answer: 'true', explanation_ar: 'مثال: ١/٢ × ١/٣ = ١/٦ < ١/٣ < ١/٢. صحيح (للكسور بين ٠ و١).' },
        { id: 'mf_9', type: 'classify', question_ar: 'صنِّف: الناتج أكبر من ١/٢ أم أقل؟', categories_ar: ['> ١/٢', '< ١/٢'], items_ar: [{ text: '٣/٤ × ٢/٣', correct_category: 0 }, { text: '١/٤ × ١/٣', correct_category: 1 }, { text: '٢/٥ × ٣/٤', correct_category: 1 }, { text: '٣/٤ × ٣/٤', correct_category: 0 }], explanation_ar: '٦/١٢=١/٢... ٣/٤×٢/٣=٦/١٢=١/٢. هذا متساوٍ.' },
        { id: 'mf_10', type: 'multiple_choice', question_ar: 'ما ناتج: ٣ × ٢/٥؟', options_ar: ['٦/٥', '٦/١٥', '٥/٥', '٢/١٥'], correct_index: 0, explanation_ar: '٣/١ × ٢/٥ = ٦/٥.' },
        { id: 'mf_11', type: 'matching', question_ar: 'صِل كل ضرب بناتجه في أبسط صورة:', pairs_ar: [{ right: '١/٢ × ١/٤', left: '١/٨' }, { right: '٢/٣ × ٣/٥', left: '٢/٥' }, { right: '٣/٤ × ٤/٥', left: '٣/٥' }, { right: '١/٣ × ٦/٧', left: '٢/٧' }], explanation_ar: '١/٨. ٢/٥. ٣/٥. ٢/٧.' },
        { id: 'mf_12', type: 'multiple_choice', question_ar: 'ثلثا فصيل طلاب (٢/٣) ذهبوا في رحلة. نصفهم (١/٢) أكلوا رحالة. ما الكسر الذي أكل رحالة؟', options_ar: ['١/٣', '٢/٦', 'كلاهما صحيح', '٣/٦'], correct_index: 2, explanation_ar: '٢/٣ × ١/٢ = ٢/٦ = ١/٣. كلاهما صحيح.' },
      ],
    }],
  },
  {
    id: 'mul_mixed',
    title_ar: 'ضرب الأعداد الكسرية',
    subtitle_ar: 'تحويل لكسور غير حقيقية ثم الضرب',
    color: 'from-purple-700 to-violet-500',
    icon: '🔢',
    lessons: [{
      id: 'mm_l1', title_ar: 'ضرب الأعداد الكسرية', count: 9,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300',
      getQuestions: () => [
        { id: 'mm_i1', type: 'info', question_ar: 'لضرب عدد كسري: (١) حوّله لكسر غير حقيقي: (العدد الصحيح × المقام) + البسط / المقام. (٢) اضرب الكسرين. (٣) بسِّط وأعِد للصورة الكسرية. مثال: ١½ = ٣/٢. ٢¼ = ٩/٤.', explanation_ar: 'حوّل العدد الكسري لكسر غير حقيقي ثم اضرب.' },
        { id: 'mm_1', type: 'multiple_choice', question_ar: 'حوّل ٢½ لكسر غير حقيقي:', options_ar: ['٥/٢', '٤/٢', '٢/٥', '٣/٢'], correct_index: 0, explanation_ar: '(٢×٢)+١ = ٥. ٥/٢.', golden_rule: 'العدد الكسري → كسر غير حقيقي: (صحيح×مقام)+بسط / مقام.' },
        { id: 'mm_2', type: 'fill_blank', question_ar: 'حوّل ٣¼ لكسر غير حقيقي:', options_ar: ['١٣/٤', '٧/٤', '٣/٤', '١٢/٤'], correct_index: 0, explanation_ar: '(٣×٤)+١ = ١٣. ١٣/٤.' },
        { id: 'mm_3', type: 'true_false', question_ar: '١½ = ٣/٢.', correct_answer: 'true', explanation_ar: '(١×٢)+١ = ٣. ٣/٢. صحيح.' },
        { id: 'mm_4', type: 'multiple_choice', question_ar: 'ما ناتج: ١½ × ٢/٣؟', options_ar: ['١', '٣/٦', 'كلاهما صحيح', '٢/٣'], correct_index: 2, explanation_ar: '٣/٢ × ٢/٣ = ٦/٦ = ١. كلاهما صحيح.' },
        { id: 'mm_5', type: 'multiple_choice', question_ar: 'ما ناتج: ٢¼ × ٨/٣؟', options_ar: ['٦', '١٦/٣', '٢', '٨/٤'], correct_index: 0, explanation_ar: '٩/٤ × ٨/٣ = ٧٢/١٢ = ٦.' },
        { id: 'mm_6', type: 'ordering', question_ar: 'رتِّب خطوات ضرب ١½ × ٣/٤:', items_ar: ['حوّل: ١½ = ٣/٢', 'اضرب: ٣/٢ × ٣/٤ = ٩/٨', 'حوّل لكسري: ٩/٨ = ١⅛'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لضرب عدد كسري.' },
        { id: 'mm_7', type: 'fill_blank', question_ar: 'ما ناتج: ٣ × ١½؟', options_ar: ['٤½', '٣½', '٣', '٢½'], correct_index: 0, explanation_ar: '٣/١ × ٣/٢ = ٩/٢ = ٤½.' },
        { id: 'mm_8', type: 'true_false', question_ar: '٢ × ١¼ = ٢½.', correct_answer: 'true', explanation_ar: '٢ × ٥/٤ = ١٠/٤ = ٥/٢ = ٢½. صحيح.' },
        { id: 'mm_9', type: 'matching', question_ar: 'صِل كل عدد كسري بصورة كسر غير حقيقي:', pairs_ar: [{ right: '١½', left: '٣/٢' }, { right: '٢⅓', left: '٧/٣' }, { right: '٣¼', left: '١٣/٤' }, { right: '١⅔', left: '٥/٣' }], explanation_ar: '٣/٢. ٧/٣. ١٣/٤. ٥/٣.' },
      ],
    }],
  },
  {
    id: 'div_frac',
    title_ar: 'قسمة الكسور',
    subtitle_ar: 'اقلب المقسوم عليه ثم اضرب',
    color: 'from-amber-700 to-orange-500',
    icon: '➗',
    lessons: [{
      id: 'df_l1', title_ar: 'قسمة الكسور', count: 11,
      image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300',
      getQuestions: () => [
        { id: 'df_i1', type: 'info', question_ar: 'لقسمة كسرين: اقلب المقسوم عليه (الكسر الثاني) ثم اضرب. مثال: ٢/٣ ÷ ٤/٥ = ٢/٣ × ٥/٤ = ١٠/١٢ = ٥/٦. تذكر: القسمة على كسر = الضرب في مقلوبه.', explanation_ar: 'قسمة الكسور: اقلب الثاني واضرب.' },
        { id: 'df_1', type: 'multiple_choice', question_ar: 'ما ناتج: ١/٢ ÷ ١/٤؟', options_ar: ['٢', '١/٨', '٤/٢', 'كلا الأول والثالث صحيح'], correct_index: 3, explanation_ar: '١/٢ × ٤/١ = ٤/٢ = ٢. كلاهما صحيح.', golden_rule: 'القسمة على كسر = الضرب في مقلوبه.' },
        { id: 'df_2', type: 'fill_blank', question_ar: '٣/٤ ÷ ٢/٥ = ___', options_ar: ['١٥/٨', '٦/٢٠', '٥/٨', '٨/١٥'], correct_index: 0, explanation_ar: '٣/٤ × ٥/٢ = ١٥/٨.' },
        { id: 'df_3', type: 'true_false', question_ar: '٤/٥ ÷ ١/٥ = ٤.', correct_answer: 'true', explanation_ar: '٤/٥ × ٥/١ = ٢٠/٥ = ٤. صحيح.' },
        { id: 'df_4', type: 'multiple_choice', question_ar: 'ما ناتج: ٦ ÷ ٢/٣؟', options_ar: ['٩', '٤', '٣/٦', '١٢'], correct_index: 0, explanation_ar: '٦/١ × ٣/٢ = ١٨/٢ = ٩.' },
        { id: 'df_5', type: 'multiple_choice', question_ar: 'ما ناتج: ٣/٨ ÷ ٣/٤؟', options_ar: ['١/٢', '١/٢', 'كلاهما صحيح', '٩/٣٢'], correct_index: 2, explanation_ar: '٣/٨ × ٤/٣ = ١٢/٢٤ = ١/٢. كلاهما صحيح.' },
        { id: 'df_6', type: 'ordering', question_ar: 'رتِّب خطوات قسمة ٢/٣ ÷ ٤/٥:', items_ar: ['اقلب المقسوم عليه: ٥/٤', 'اضرب: ٢/٣ × ٥/٤ = ١٠/١٢', 'بسِّط: ٥/٦'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لقسمة الكسور.' },
        { id: 'df_7', type: 'fill_blank', question_ar: 'ما ناتج: ٥/٦ ÷ ٥/٦؟', options_ar: ['١', '٢٥/٣٦', '٠', '٦/٥'], correct_index: 0, explanation_ar: '٥/٦ × ٦/٥ = ٣٠/٣٠ = ١.' },
        { id: 'df_8', type: 'true_false', question_ar: 'أي عدد (غير صفري) مقسوم على نفسه = ١.', correct_answer: 'true', explanation_ar: 'س÷س=١ لأي س≠٠. صحيح.' },
        { id: 'df_9', type: 'classify', question_ar: 'صنِّف: الناتج أكبر من ١ أم أقل؟', categories_ar: ['> ١', '< ١'], items_ar: [{ text: '٣/٤ ÷ ١/٢', correct_category: 0 }, { text: '١/٣ ÷ ٢/٣', correct_category: 1 }, { text: '٥/٦ ÷ ١/٣', correct_category: 0 }, { text: '٢/٥ ÷ ٣/٤', correct_category: 1 }], explanation_ar: '٣/٢>١. ١/٢<١. ٥/٢>١. ٨/١٥<١.' },
        { id: 'df_10', type: 'matching', question_ar: 'صِل كل قسمة بناتجها:', pairs_ar: [{ right: '١/٢ ÷ ١/٣', left: '٣/٢' }, { right: '٣/٤ ÷ ٣/٨', left: '٢' }, { right: '٢/٥ ÷ ٤/٥', left: '١/٢' }, { right: '٦ ÷ ١/٣', left: '١٨' }], explanation_ar: '٣/٢. ٢. ١/٢. ١٨.' },
        { id: 'df_11', type: 'multiple_choice', question_ar: 'قُسمت ٣/٤ كجم من الحلوى على أطفال، نصيب كل منهم ١/٨ كجم. ما عدد الأطفال؟', options_ar: ['٦', '٣', '٨', '٤'], correct_index: 0, explanation_ar: '٣/٤ ÷ ١/٨ = ٣/٤ × ٨/١ = ٢٤/٤ = ٦ أطفال.' },
      ],
    }],
  },
];

export const MATH_G5_S2_CH10_TOTAL = MATH_G5_S2_CH10_UNITS.reduce((s, u) => s + u.lessons.reduce((ls, l) => ls + l.count, 0), 0);