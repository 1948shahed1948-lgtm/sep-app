// بنك رياضيات — الفصل الرابع: قسمة الأعداد العشرية
// المصدر: كتاب وزارة التعليم 1447هـ / 2025م

export const MATH_G5_S2_CH4_UNITS = [
  {
    id: 'div_dec_int',
    title_ar: 'قسمة عدد عشري على عدد صحيح',
    subtitle_ar: 'قسمة كالمعتاد مع محاذاة الفاصلة',
    color: 'from-rose-700 to-pink-500',
    icon: '➗',
    lessons: [{
      id: 'di_l1', title_ar: 'قسمة عدد عشري على عدد صحيح', count: 10,
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300',
      getQuestions: () => [
        { id: 'di_i1', type: 'info', question_ar: 'لقسمة عدد عشري على عدد صحيح: (١) قسّم كالمعتاد. (٢) ضع الفاصلة العشرية في الناتج فوق فاصلة المقسوم. مثال: ٤.٨ ÷ ٢ → قسّم ٤÷٢=٢، ثم ٨÷٢=٤. الناتج = ٢.٤.', explanation_ar: 'ضع الفاصلة في الناتج فوق فاصلة المقسوم.' },
        { id: 'di_1', type: 'multiple_choice', question_ar: 'ما ناتج: ٦.٤ ÷ ٤؟', options_ar: ['١.٦', '١٦', '٠.١٦', '٦.٤'], correct_index: 0, explanation_ar: '٦÷٤=١.٤، ٤÷٤=٠... أو: ٦.٤÷٤ = ١.٦.', golden_rule: 'الفاصلة في الناتج فوق فاصلة المقسوم.' },
        { id: 'di_2', type: 'fill_blank', question_ar: '٩.٦ ÷ ٣ = ___', options_ar: ['٣.٢', '٣٢', '٣.٦', '٠.٣٢'], correct_index: 0, explanation_ar: '٩÷٣=٣، ٦÷٣=٢. الناتج = ٣.٢.' },
        { id: 'di_3', type: 'true_false', question_ar: '١٢.٥ ÷ ٥ = ٢.٥.', correct_answer: 'true', explanation_ar: '١٢÷٥=٢.٢، الباقي ٢... أو: ١٢.٥÷٥ = ٢.٥. صحيح.' },
        { id: 'di_4', type: 'multiple_choice', question_ar: 'وزن ٥ صناديق متساوٍ ٧.٥ كجم. ما وزن الصندوق الواحد؟', options_ar: ['١.٥ كجم', '١.٢٥ كجم', '٢.٥ كجم', '٣.٧٥ كجم'], correct_index: 0, explanation_ar: '٧.٥ ÷ ٥ = ١.٥ كجم.' },
        { id: 'di_5', type: 'multiple_choice', question_ar: 'قطعت سيارة ٤٨.٤ كلم في ٤ ساعات. ما السرعة؟', options_ar: ['١٢.١ كلم/س', '١٢.٤ كلم/س', '١١.١ كلم/س', '١٣.١ كلم/س'], correct_index: 0, explanation_ar: '٤٨.٤ ÷ ٤ = ١٢.١ كلم/س.' },
        { id: 'di_6', type: 'ordering', question_ar: 'رتِّب خطوات قسمة ٨.٤ ÷ ٢:', items_ar: ['قسّم ٨ ÷ ٢ = ٤', 'ضع الفاصلة فوق فاصلة المقسوم', 'قسّم ٤ ÷ ٢ = ٢ → الناتج ٤.٢'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لقسمة عشري على صحيح.' },
        { id: 'di_7', type: 'fill_blank', question_ar: '١٥.٦ ÷ ٦ = ___', options_ar: ['٢.٦', '٢.٥', '٢.١', '٣.١'], correct_index: 0, explanation_ar: '١٥÷٦=٢.٣، ٦÷٦=٠... أو: ١٥.٦÷٦ = ٢.٦.' },
        { id: 'di_8', type: 'classify', question_ar: 'صنِّف: الناتج أكبر من ١ أم أقل؟', categories_ar: ['الناتج > ١', 'الناتج < ١'], items_ar: [{ text: '٤.٨ ÷ ٢', correct_category: 0 }, { text: '٠.٤ ÷ ٨', correct_category: 1 }, { text: '٦.٣ ÷ ٣', correct_category: 0 }, { text: '٠.٥ ÷ ٢', correct_category: 1 }], explanation_ar: '٢.٤>١. ٠.٠٥<١. ٢.١>١. ٠.٢٥<١.' },
        { id: 'di_9', type: 'true_false', question_ar: '٢.٤ ÷ ٨ = ٠.٣.', correct_answer: 'true', explanation_ar: '٢٤÷٨=٣، منزل واحد → ٠.٣. صحيح.' },
        { id: 'di_10', type: 'matching', question_ar: 'صِل كل قسمة بناتجها:', pairs_ar: [{ right: '٦.٦ ÷ ٣', left: '٢.٢' }, { right: '١٠.٥ ÷ ٥', left: '٢.١' }, { right: '٨.٤ ÷ ٤', left: '٢.١' }, { right: '٩.٦ ÷ ٨', left: '١.٢' }], explanation_ar: '٢.٢. ٢.١. ٢.١. ١.٢.' },
      ],
    }],
  },
  {
    id: 'div_dec_dec',
    title_ar: 'قسمة عدد عشري على عدد عشري',
    subtitle_ar: 'تحويل المقسوم عليه لعدد صحيح ثم القسمة',
    color: 'from-blue-700 to-cyan-500',
    icon: '🔀',
    lessons: [{
      id: 'dd_l1', title_ar: 'قسمة عدد عشري على عدد عشري', count: 10,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300',
      getQuestions: () => [
        { id: 'dd_i1', type: 'info', question_ar: 'لقسمة عدد عشري على عدد عشري: (١) أزح الفاصلة في المقسوم عليه حتى يصبح عدداً صحيحاً. (٢) أزح فاصلة المقسوم بالعدد نفسه. (٣) أضف أصفاراً إن لزم. (٤) قسّم. مثال: ٤.٢ ÷ ٠.٦ → ٤٢ ÷ ٦ = ٧.', explanation_ar: 'أزح فاصلة المقسوم عليه والمقسوم بالعدد نفسه.' },
        { id: 'dd_1', type: 'multiple_choice', question_ar: 'ما ناتج: ٣.٦ ÷ ٠.٤؟', options_ar: ['٩', '٠.٩', '١٤.٤', '٣.٢'], correct_index: 0, explanation_ar: '٣٦ ÷ ٤ = ٩.', golden_rule: 'إزاحة فاصلة المقسوم عليه والمقسوم معاً.' },
        { id: 'dd_2', type: 'fill_blank', question_ar: '٧.٥ ÷ ٠.٥ = ___', options_ar: ['١٥', '١.٥', '٧٥', '٣.٧٥'], correct_index: 0, explanation_ar: '٧٥ ÷ ٥ = ١٥.' },
        { id: 'dd_3', type: 'true_false', question_ar: '١.٢ ÷ ٠.٣ = ٤.', correct_answer: 'true', explanation_ar: '١٢ ÷ ٣ = ٤. صحيح.' },
        { id: 'dd_4', type: 'multiple_choice', question_ar: 'ما ناتج: ٠.٨ ÷ ٠.٢؟', options_ar: ['٤', '٠.٤', '٤.٠', 'كلا الأول والثالث صحيح'], correct_index: 3, explanation_ar: '٨ ÷ ٢ = ٤. الناتج = ٤ = ٤.٠. كلاهما صحيح.' },
        { id: 'dd_5', type: 'multiple_choice', question_ar: 'ثمن ٠.٥ كجم من العنب ٣.٥ ريال. ما ثمن الكيلوغرام؟', options_ar: ['٧.٠ ريال', '٣.٠ ريال', '١.٧٥ ريال', '٦.٠ ريال'], correct_index: 0, explanation_ar: '٣.٥ ÷ ٠.٥ = ٧.٠ ريال.' },
        { id: 'dd_6', type: 'ordering', question_ar: 'رتِّب خطوات قسمة ٥.٤ ÷ ٠.٩:', items_ar: ['أزح فاصلة ٠.٩: → ٩', 'أزح فاصلة ٥.٤: → ٥٤', 'قسّم: ٥٤ ÷ ٩ = ٦'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لقسمة عشري على عشري.' },
        { id: 'dd_7', type: 'fill_blank', question_ar: '٠.٤٨ ÷ ٠.٠٤ = ___', options_ar: ['١٢', '١.٢', '٠.١٢', '١٢٠'], correct_index: 0, explanation_ar: 'أزح منزلين: ٤٨ ÷ ٤ = ١٢.' },
        { id: 'dd_8', type: 'true_false', question_ar: '٢.٥ ÷ ٠.٥ = ٥.', correct_answer: 'true', explanation_ar: '٢٥ ÷ ٥ = ٥. صحيح.' },
        { id: 'dd_9', type: 'matching', question_ar: 'صِل كل قسمة بناتجها:', pairs_ar: [{ right: '٦.٤ ÷ ٠.٨', left: '٨' }, { right: '٠.٩ ÷ ٠.٣', left: '٣' }, { right: '٤.٢ ÷ ٠.٧', left: '٦' }, { right: '١.٥ ÷ ٠.٥', left: '٣' }], explanation_ar: '٨. ٣. ٦. ٣.' },
        { id: 'dd_10', type: 'multiple_choice', question_ar: 'ما ناتج: ٩.٦ ÷ ١.٢؟', options_ar: ['٨', '٠.٨', '٨٠', '١١.٥'], correct_index: 0, explanation_ar: 'أزح منزلاً: ٩٦ ÷ ١٢ = ٨.' },
      ],
    }],
  },
  {
    id: 'div_10',
    title_ar: 'القسمة على ١٠ و١٠٠ و١٠٠٠',
    subtitle_ar: 'إزاحة الفاصلة العشرية لليسار',
    color: 'from-amber-700 to-orange-500',
    icon: '⬅️',
    lessons: [{
      id: 'd10_l1', title_ar: 'القسمة على ١٠ و١٠٠ و١٠٠٠', count: 8,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300',
      getQuestions: () => [
        { id: 'd10_i1', type: 'info', question_ar: 'للقسمة على ١٠: أزح الفاصلة منزلاً لليسار. على ١٠٠: منزلين. على ١٠٠٠: ثلاثة. مثال: ٣٤.٥ ÷ ١٠ = ٣.٤٥. ٣٤.٥ ÷ ١٠٠ = ٠.٣٤٥.', explanation_ar: 'القسمة على ١٠/١٠٠/١٠٠٠ = إزاحة الفاصلة لليسار.' },
        { id: 'd10_1', type: 'multiple_choice', question_ar: 'ما ناتج: ٤٧.٥ ÷ ١٠؟', options_ar: ['٤.٧٥', '٤٧٥', '٠.٤٧٥', '٤٧٥.٠'], correct_index: 0, explanation_ar: 'منزل لليسار: ٤.٧٥.', golden_rule: '÷ ١٠ = منزل يسار، ÷ ١٠٠ = منزلان، ÷ ١٠٠٠ = ثلاثة.' },
        { id: 'd10_2', type: 'fill_blank', question_ar: '٣٥٦ ÷ ١٠٠ = ___', options_ar: ['٣.٥٦', '٣٥.٦', '٠.٣٥٦', '٣٥٦٠'], correct_index: 0, explanation_ar: 'منزلان لليسار: ٣.٥٦.' },
        { id: 'd10_3', type: 'true_false', question_ar: '٢٥٠٠ ÷ ١٠٠٠ = ٢.٥.', correct_answer: 'true', explanation_ar: 'ثلاثة منازل: ٢.٥. صحيح.' },
        { id: 'd10_4', type: 'multiple_choice', question_ar: 'ما ناتج: ٠.٥ ÷ ١٠٠؟', options_ar: ['٠.٠٠٥', '٠.٠٥', '٥٠', '٠.٠٠٠٥'], correct_index: 0, explanation_ar: 'منزلان لليسار: ٠.٠٠٥.' },
        { id: 'd10_5', type: 'ordering', question_ar: 'رتِّب: القسمة على ١٠/١٠٠/١٠٠٠ تزح الفاصلة:', items_ar: ['÷ ١٠ → منزل يسار', '÷ ١٠٠ → منزلان يسار', '÷ ١٠٠٠ → ثلاثة منازل يسار'], correct_order: [0, 1, 2], explanation_ar: 'عدد المنازل = عدد أصفار العدد.' },
        { id: 'd10_6', type: 'fill_blank', question_ar: '٧٨٩٠ ÷ ١٠٠٠ = ___', options_ar: ['٧.٨٩', '٧٨.٩', '٠.٧٨٩', '٧٨٩٠٠'], correct_index: 0, explanation_ar: 'ثلاثة منازل: ٧.٨٩.' },
        { id: 'd10_7', type: 'true_false', question_ar: 'القسمة على ١٠٠ تعادل إزاحة الفاصلة منزلين لليسار.', correct_answer: 'true', explanation_ar: '١٠٠ لها صفران = منزلان. صحيح.' },
        { id: 'd10_8', type: 'multiple_choice', question_ar: 'ما ناتج: ١٢٥٠ ÷ ١٠ ÷ ١٠؟', options_ar: ['١٢.٥', '١٢٥', '١.٢٥', '١٢٥٠٠'], correct_index: 0, explanation_ar: '÷ ١٠ = ١٢٥، ÷ ١٠ = ١٢.٥. أو ÷ ١٠٠ = ١٢.٥.' },
      ],
    }],
  },
];

export const MATH_G5_S2_CH4_TOTAL = MATH_G5_S2_CH4_UNITS.reduce((s, u) => s + u.lessons.reduce((ls, l) => ls + l.count, 0), 0);