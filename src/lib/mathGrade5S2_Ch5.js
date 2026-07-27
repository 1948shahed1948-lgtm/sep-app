// بنك رياضيات — الفصل الخامس: النسبة المئوية
// المصدر: كتاب وزارة التعليم 1447هـ / 2025م

export const MATH_G5_S2_CH5_UNITS = [
  {
    id: 'pct_concept',
    title_ar: 'مفهوم النسبة المئوية',
    subtitle_ar: 'النسبة المئوية كسر مقامه ١٠٠',
    color: 'from-green-700 to-emerald-500',
    icon: '٪',
    lessons: [{
      id: 'pc_l1', title_ar: 'مفهوم النسبة المئوية', count: 10,
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=300',
      getQuestions: () => [
        { id: 'pc_i1', type: 'info', question_ar: 'النسبة المئوية: كسر مقامه ١٠٠. تُكتب بالرمز ٪. مثال: ٢٥٪ = ٢٥/١٠٠ = ١/٤. ٥٠٪ = ٥٠/١٠٠ = ١/٢. ١٠٠٪ = ١ كامل.', explanation_ar: 'النسبة المئوية = كسر من ١٠٠. ٥٠٪ = النصف، ٢٥٪ = الربع، ١٠٠٪ = الكل.' },
        { id: 'pc_1', type: 'multiple_choice', question_ar: 'ما الكسر المكافئ لـ ٤٠٪؟', options_ar: ['٤٠/١٠٠ = ٢/٥', '٤/١٠٠', '٤٠/١٠', '٢/٤'], correct_index: 0, explanation_ar: '٤٠٪ = ٤٠/١٠٠. ق.م.أ(٤٠،١٠٠)=٢٠. ٤٠÷٢٠=٢، ١٠٠÷٢٠=٥. = ٢/٥.', golden_rule: 'النسبة المئوية = عدد/١٠٠. بسِّط للحصول على أبسط كسر.' },
        { id: 'pc_2', type: 'fill_blank', question_ar: '٥٠٪ = ___ (كسر في أبسط صورة)', options_ar: ['١/٢', '٥/١٠', '٥٠/١٠٠', 'كلاهما صحيح'], correct_index: 3, explanation_ar: '٥٠٪ = ٥٠/١٠٠ = ٥/١٠ = ١/٢. كلا الخيارين صحيح.' },
        { id: 'pc_3', type: 'true_false', question_ar: '٧٥٪ = ٣/٤.', correct_answer: 'true', explanation_ar: '٧٥/١٠٠. ق.م.أ=٢٥. ٧٥÷٢٥=٣، ١٠٠÷٢٥=٤. = ٣/٤. صحيح.' },
        { id: 'pc_4', type: 'multiple_choice', question_ar: 'ما النسبة المئوية المكافئة لـ ١/٥؟', options_ar: ['٢٠٪', '١٥٪', '٥٠٪', '٢٥٪'], correct_index: 0, explanation_ar: '١/٥ = ٢٠/١٠٠ = ٢٠٪.' },
        { id: 'pc_5', type: 'multiple_choice', question_ar: 'ما النسبة المئوية المكافئة لـ ٣/٤؟', options_ar: ['٧٥٪', '٣٤٪', '٤٣٪', '٢٥٪'], correct_index: 0, explanation_ar: '٣/٤ = ٧٥/١٠٠ = ٧٥٪.' },
        { id: 'pc_6', type: 'classify', question_ar: 'صنِّف: النسبة المئوية أكبر من ٥٠٪ أم أقل؟', categories_ar: ['> ٥٠٪', '< ٥٠٪'], items_ar: [{ text: '٧٠٪', correct_category: 0 }, { text: '٢٥٪', correct_category: 1 }, { text: '٨٠٪', correct_category: 0 }, { text: '١٠٪', correct_category: 1 }], explanation_ar: '٥٠٪ هي النصف. ما فوقها أكبر، ما دونها أقل.' },
        { id: 'pc_7', type: 'matching', question_ar: 'صِل كل كسر بنسبته المئوية:', pairs_ar: [{ right: '١/٢', left: '٥٠٪' }, { right: '١/٤', left: '٢٥٪' }, { right: '٣/٤', left: '٧٥٪' }, { right: '١/١٠', left: '١٠٪' }], explanation_ar: 'النصف=٥٠٪. الربع=٢٥٪. ثلاثة أرباع=٧٥٪. العشر=١٠٪.' },
        { id: 'pc_8', type: 'fill_blank', question_ar: '١٠٠٪ من أي عدد = ___', options_ar: ['العدد نفسه', 'نصف العدد', 'ضعف العدد', 'صفر'], correct_index: 0, explanation_ar: '١٠٠٪ = ١ = الكل = العدد نفسه.' },
        { id: 'pc_9', type: 'true_false', question_ar: '٠٪ يعني لا شيء (صفر).', correct_answer: 'true', explanation_ar: '٠٪ = ٠/١٠٠ = ٠. صحيح.' },
        { id: 'pc_10', type: 'multiple_choice', question_ar: 'ما النسبة المئوية لكسر ١٧/١٠٠؟', options_ar: ['١٧٪', '١.٧٪', '٠.١٧٪', '١٧٠٪'], correct_index: 0, explanation_ar: '١٧/١٠٠ = ١٧٪ مباشرة.' },
      ],
    }],
  },
  {
    id: 'pct_of_num',
    title_ar: 'إيجاد نسبة مئوية من عدد',
    subtitle_ar: 'تحويل النسبة لكسر أو عشري ثم الضرب',
    color: 'from-blue-700 to-indigo-500',
    icon: '🎯',
    lessons: [{
      id: 'pn_l1', title_ar: 'إيجاد نسبة مئوية من عدد', count: 11,
      image: 'https://images.unsplash.com/photo-1554224155-6726b8ff5e31?w=300',
      getQuestions: () => [
        { id: 'pn_i1', type: 'info', question_ar: 'لإيجاد نسبة مئوية من عدد: حوّل النسبة لكسر (عدد/١٠٠) ثم اضرب. مثال: ٢٥٪ من ٨٠ = ٢٥/١٠٠ × ٨٠ = ٢٠. أو: ٢٥٪ = ٠.٢٥، ٠.٢٥ × ٨٠ = ٢٠.', explanation_ar: 'النسبة المئوية من عدد = (النسبة÷١٠٠) × العدد.' },
        { id: 'pn_1', type: 'multiple_choice', question_ar: 'ما ٥٠٪ من ١٢٠؟', options_ar: ['٦٠', '٥٠', '٦٠٠', '٢٤'], correct_index: 0, explanation_ar: '٥٠٪ = ١/٢. ١٢٠ ÷ ٢ = ٦٠.', golden_rule: 'x٪ من n = (x÷١٠٠) × n.' },
        { id: 'pn_2', type: 'fill_blank', question_ar: 'ما ٢٥٪ من ٨٠؟', options_ar: ['٢٠', '٨', '٤٠', '٢٥'], correct_index: 0, explanation_ar: '٢٥٪ = ١/٤. ٨٠ ÷ ٤ = ٢٠.' },
        { id: 'pn_3', type: 'true_false', question_ar: '١٠٪ من ٥٠٠ = ٥٠.', correct_answer: 'true', explanation_ar: '١٠٪ = ١/١٠. ٥٠٠ ÷ ١٠ = ٥٠. صحيح.' },
        { id: 'pn_4', type: 'multiple_choice', question_ar: 'ما ١٠٪ من ٢٥٠؟', options_ar: ['٢٥', '٢.٥', '٢٥٠٠', '١٠'], correct_index: 0, explanation_ar: '٢٥٠ ÷ ١٠ = ٢٥.' },
        { id: 'pn_5', type: 'multiple_choice', question_ar: 'حصل طالب على ٨٥٪ من درجات الاختبار (٢٠ درجة). ما درجته؟', options_ar: ['١٧', '١٥', '١٨', '١٦'], correct_index: 0, explanation_ar: '٠.٨٥ × ٢٠ = ١٧.' },
        { id: 'pn_6', type: 'fill_blank', question_ar: 'ما ٧٥٪ من ٤٠؟', options_ar: ['٣٠', '٢٠', '١٥', '٢٥'], correct_index: 0, explanation_ar: '٧٥٪ = ٣/٤. ٤٠ × ٣/٤ = ٣٠.' },
        { id: 'pn_7', type: 'ordering', question_ar: 'رتِّب خطوات إيجاد ٢٠٪ من ٥٠:', items_ar: ['حوّل: ٢٠٪ = ٢٠/١٠٠ = ١/٥', 'اضرب: ٥٠ × ١/٥', 'الناتج = ١٠'], correct_order: [0, 1, 2], explanation_ar: 'حوّل النسبة لكسر ثم اضرب في العدد.' },
        { id: 'pn_8', type: 'classify', question_ar: 'صنِّف: الناتج أكبر من ٢٠ أم أقل؟', categories_ar: ['> ٢٠', '< ٢٠'], items_ar: [{ text: '٥٠٪ من ٦٠', correct_category: 0 }, { text: '١٠٪ من ١٥٠', correct_category: 1 }, { text: '٢٥٪ من ١٠٠', correct_category: 1 }, { text: '٧٥٪ من ٤٠', correct_category: 0 }], explanation_ar: '٣٠>٢٠. ١٥<٢٠. ٢٥>٢٠. ٣٠>٢٠.' },
        { id: 'pn_9', type: 'true_false', question_ar: '١٠٠٪ من ٤٥ = ٤٥.', correct_answer: 'true', explanation_ar: '١٠٠٪ = ١. ١ × ٤٥ = ٤٥. صحيح.' },
        { id: 'pn_10', type: 'matching', question_ar: 'صِل كل نسبة بناتجها من ٢٠٠:', pairs_ar: [{ right: '١٠٪ من ٢٠٠', left: '٢٠' }, { right: '٢٥٪ من ٢٠٠', left: '٥٠' }, { right: '٥٠٪ من ٢٠٠', left: '١٠٠' }, { right: '٧٥٪ من ٢٠٠', left: '١٥٠' }], explanation_ar: '٢٠. ٥٠. ١٠٠. ١٥٠.' },
        { id: 'pn_11', type: 'multiple_choice', question_ar: 'خصم ٣٠٪ على قميص ثمنه ٨٠ ريالاً. ما قيمة الخصم؟', options_ar: ['٢٤ ريال', '٥٦ ريال', '٣٠ ريال', '٢٠ ريال'], correct_index: 0, explanation_ar: '٣٠٪ من ٨٠ = ٠.٣ × ٨٠ = ٢٤ ريال.' },
      ],
    }],
  },
  {
    id: 'pct_convert',
    title_ar: 'التحويل بين الكسور والنسب المئوية',
    subtitle_ar: 'كسر ↔ نسبة مئوية ↔ عدد عشري',
    color: 'from-violet-700 to-purple-500',
    icon: '🔄',
    lessons: [{
      id: 'pv_l1', title_ar: 'التحويل بين الكسور والنسب', count: 9,
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300',
      getQuestions: () => [
        { id: 'pv_i1', type: 'info', question_ar: 'للتحويل: كسر → نسبة مئوية: اجعل المقام ١٠٠ (اضرب أو قسّم). نسبة → كسر: اكتبها عدد/١٠٠ وبسِّط. نسبة → عشري: قسّم على ١٠٠. مثال: ٣/٥ = ٦٠/١٠٠ = ٦٠٪ = ٠.٦٠.', explanation_ar: 'التحويل يمر عبر المقام ١٠٠.' },
        { id: 'pv_1', type: 'multiple_choice', question_ar: 'حوّل ٣/٥ لنسبة مئوية:', options_ar: ['٦٠٪', '٣٥٪', '٥٠٪', '٣٠٪'], correct_index: 0, explanation_ar: '٣/٥ × ٢٠/٢٠ = ٦٠/١٠٠ = ٦٠٪.', golden_rule: 'للتحويل لنسبة مئوية: اجعل المقام ١٠٠.' },
        { id: 'pv_2', type: 'fill_blank', question_ar: 'حوّل ٤٥٪ لكسر في أبسط صورة:', options_ar: ['٩/٢٠', '٤٥/١٠٠', 'كلاهما صحيح', '٤/٥'], correct_index: 2, explanation_ar: '٤٥/١٠٠. ق.م.أ=٥. ٤٥÷٥=٩، ١٠٠÷٥=٢٠. = ٩/٢٠. كلاهما صحيح.' },
        { id: 'pv_3', type: 'true_false', question_ar: '٠.٢٥ = ٢٥٪.', correct_answer: 'true', explanation_ar: '٠.٢٥ × ١٠٠ = ٢٥٪. صحيح.' },
        { id: 'pv_4', type: 'multiple_choice', question_ar: 'حوّل ٠.٤٥ لنسبة مئوية:', options_ar: ['٤٥٪', '٤.٥٪', '٠.٤٥٪', '٤٥٠٪'], correct_index: 0, explanation_ar: '٠.٤٥ × ١٠٠ = ٤٥٪.' },
        { id: 'pv_5', type: 'multiple_choice', question_ar: 'حوّل ١٢٠٪ لعدد عشري:', options_ar: ['١.٢٠', '٠.١٢', '١٢.٠', '٠.٠١٢'], correct_index: 0, explanation_ar: '١٢٠ ÷ ١٠٠ = ١.٢٠.' },
        { id: 'pv_6', type: 'ordering', question_ar: 'رتِّب خطوات تحويل ٣/٤ لنسبة مئوية:', items_ar: ['اجعل المقام ١٠٠: ٣/٤ × ٢٥/٢٥ = ٧٥/١٠٠', 'اكتب كنسبة: ٧٥٪', 'أو كبسط: ٧٥٪ = ٠.٧٥'], correct_order: [0, 1, 2], explanation_ar: 'التحويل من كسر لنسبة مئوية عبر المقام ١٠٠.' },
        { id: 'pv_7', type: 'fill_blank', question_ar: 'حوّل ٥/٨ (≈٠.٦٢٥) لنسبة مئوية:', options_ar: ['٦٢.٥٪', '٥٨٪', '٥٦٪', '٦٢٪'], correct_index: 0, explanation_ar: '٠.٦٢٥ × ١٠٠ = ٦٢.٥٪.' },
        { id: 'pv_8', type: 'matching', question_ar: 'صِل كل قيمة بصورتيها:', pairs_ar: [{ right: '١/٥', left: '٢٠٪ = ٠.٢٠' }, { right: '٣/٤', left: '٧٥٪ = ٠.٧٥' }, { right: '١/٤', left: '٢٥٪ = ٠.٢٥' }, { right: '١/٢', left: '٥٠٪ = ٠.٥٠' }], explanation_ar: 'تحويلات متكافئة.' },
        { id: 'pv_9', type: 'true_false', question_ar: 'النسبة المئوية دائماً يمكن كتابتها ككسر مقامه ١٠٠.', correct_answer: 'true', explanation_ar: 'تعريف النسبة المئوية: كسر من ١٠٠. صحيح.' },
      ],
    }],
  },
];

export const MATH_G5_S2_CH5_TOTAL = MATH_G5_S2_CH5_UNITS.reduce((s, u) => s + u.lessons.reduce((ls, l) => ls + l.count, 0), 0);