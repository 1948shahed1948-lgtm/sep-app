// بنك رياضيات — الفصل السادس: المساحة
// المصدر: كتاب وزارة التعليم 1447هـ / 2025م

export const MATH_G5_S2_CH6_UNITS = [
  {
    id: 'area_rect',
    title_ar: 'مساحة المستطيل',
    subtitle_ar: 'الطول × العرض',
    color: 'from-blue-700 to-cyan-500',
    icon: '▭',
    lessons: [{
      id: 'ar_l1', title_ar: 'مساحة المستطيل', count: 11,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300',
      getQuestions: () => [
        { id: 'ar_i1', type: 'info', question_ar: 'مساحة المستطيل = الطول × العرض. الوحدة: سم^{2}، م^{2}. مثال: مستطيل طوله ٥ سم وعرضه ٣ سم → المساحة = ٥ × ٣ = ١٥ سم^{2}.', explanation_ar: 'مساحة المستطيل = الطول × العرض.' },
        { id: 'ar_1', type: 'multiple_choice', question_ar: 'مستطيل طوله ٨ م وعرضه ٥ م. ما المساحة؟', options_ar: ['٤٠ م^{2}', '١٣ م^{2}', '٢٦ م^{2}', '٤٠ م'], correct_index: 0, explanation_ar: '٨ × ٥ = ٤٠ م^{2}.', golden_rule: 'مساحة المستطيل = الطول × العرض. الوحدة تربيعية.' },
        { id: 'ar_2', type: 'fill_blank', question_ar: 'مستطيل طوله ١٢ سم وعرضه ٧ سم. المساحة = ___', options_ar: ['٨٤ سم^{2}', '١٩ سم^{2}', '٨٤ سم', '١٢٤ سم^{2}'], correct_index: 0, explanation_ar: '١٢ × ٧ = ٨٤ سم^{2}.' },
        { id: 'ar_3', type: 'true_false', question_ar: 'مساحة مستطيل طوله ٦.٥ م وعرضه ٤ م = ٢٦ م^{2}.', correct_answer: 'true', explanation_ar: '٦.٥ × ٤ = ٢٦ م^{2}. صحيح.' },
        { id: 'ar_4', type: 'multiple_choice', question_ar: 'غرفة أرضيتها مستطيل ٦م × ٤م. ما مساحة الأرضية؟', options_ar: ['٢٤ م^{2}', '١٠ م^{2}', '٢٠ م^{2}', '٤٨ م^{2}'], correct_index: 0, explanation_ar: '٦ × ٤ = ٢٤ م^{2}.' },
        { id: 'ar_5', type: 'multiple_choice', question_ar: 'مستطيل مساحته ٤٨ سم^{2} وطوله ٨ سم. ما العرض؟', options_ar: ['٦ سم', '٤ سم', '١٢ سم', '٨ سم'], correct_index: 0, explanation_ar: 'العرض = المساحة ÷ الطول = ٤٨ ÷ ٨ = ٦ سم.' },
        { id: 'ar_6', type: 'classify', question_ar: 'صنِّف: هل المساحة أكبر من ٥٠ أم أقل؟', categories_ar: ['> ٥٠', '< ٥٠'], items_ar: [{ text: '١٠ × ٦', correct_category: 0 }, { text: '٧ × ٤', correct_category: 1 }, { text: '٩ × ٦', correct_category: 0 }, { text: '٥ × ٥', correct_category: 1 }], explanation_ar: '٦٠>٥٠. ٢٨<٥٠. ٥٤>٥٠. ٢٥<٥٠.' },
        { id: 'ar_7', type: 'ordering', question_ar: 'رتِّب خطوات حساب مساحة مستطيل ٧م × ٣م:', items_ar: ['حدد الطول = ٧', 'حدد العرض = ٣', 'اضرب: ٧ × ٣ = ٢١ م^{2}'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لحساب مساحة المستطيل.' },
        { id: 'ar_8', type: 'fill_blank', question_ar: 'مستطيل مساحته ٧٢ م^{2} وعرضه ٨ م. الطول = ___', options_ar: ['٩ م', '٨ م', '٦٤ م', '١٢ م'], correct_index: 0, explanation_ar: 'الطول = ٧٢ ÷ ٨ = ٩ م.' },
        { id: 'ar_9', type: 'true_false', question_ar: 'وحدة المساحة دائماً تربيعية (سم^{2}، م^{2}).', correct_answer: 'true', explanation_ar: 'المساحة = طول × طول = طو^{2}. الوحدة تربيعية. صحيح.' },
        { id: 'ar_10', type: 'matching', question_ar: 'صِل كل مستطيل بمساحته:', pairs_ar: [{ right: '٥ × ٣', left: '١٥' }, { right: '١٠ × ٤', left: '٤٠' }, { right: '٧ × ٦', left: '٤٢' }, { right: '٨ × ٨', left: '٦٤' }], explanation_ar: '١٥. ٤٠. ٤٢. ٦٤.' },
        { id: 'ar_11', type: 'multiple_choice', question_ar: 'مزرعة مستطيلة ٢٥٠م × ١٢٠م. ما مساحتها؟', options_ar: ['٣٠٠٠٠ م^{2}', '٣٧٠ م^{2}', '٣٠٠٠ م^{2}', '٣٠٠ م^{2}'], correct_index: 0, explanation_ar: '٢٥٠ × ١٢٠ = ٣٠٠٠٠ م^{2}.' },
      ],
    }],
  },
  {
    id: 'area_para',
    title_ar: 'مساحة متوازي الأضلاع',
    subtitle_ar: 'القاعدة × الارتفاع',
    color: 'from-emerald-700 to-teal-500',
    icon: '▱',
    lessons: [{
      id: 'ap_l1', title_ar: 'مساحة متوازي الأضلاع', count: 10,
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300',
      getQuestions: () => [
        { id: 'ap_i1', type: 'info', question_ar: 'مساحة متوازي الأضلاع = القاعدة × الارتفاع. الارتفاع يكون عمودياً على القاعدة. مثال: قاعدة ١٠ سم وارتفاع ٦ سم → المساحة = ١٠ × ٦ = ٦٠ سم^{2}.', explanation_ar: 'مساحة متوازي الأضلاع = القاعدة × الارتفاع (العمودي).' },
        { id: 'ap_1', type: 'multiple_choice', question_ar: 'متوازي أضلاع قاعدته ١٢ سم وارتفاعه ٥ سم. ما المساحة؟', options_ar: ['٦٠ سم^{2}', '١٧ سم^{2}', '٢٤ سم^{2}', '٦٠ سم'], correct_index: 0, explanation_ar: '١٢ × ٥ = ٦٠ سم^{2}.', golden_rule: 'مساحة متوازي الأضلاع = القاعدة × الارتفاع.' },
        { id: 'ap_2', type: 'fill_blank', question_ar: 'متوازي أضلاع قاعدته ٨ م وارتفاعه ٧ م. المساحة = ___', options_ar: ['٥٦ م^{2}', '١٥ م^{2}', '٥٦ م', '٣٢ م^{2}'], correct_index: 0, explanation_ar: '٨ × ٧ = ٥٦ م^{2}.' },
        { id: 'ap_3', type: 'true_false', question_ar: 'مساحة متوازي أضلاع قاعدته ٦.٥ سم وارتفاعه ٤ سم = ٢٦ سم^{2}.', correct_answer: 'true', explanation_ar: '٦.٥ × ٤ = ٢٦ سم^{2}. صحيح.' },
        { id: 'ap_4', type: 'multiple_choice', question_ar: 'متوازي أضلاع مساحته ٧٢ سم^{2} وقاعدته ٩ سم. ما الارتفاع؟', options_ar: ['٨ سم', '٦ سم', '٩ سم', '١٢ سم'], correct_index: 0, explanation_ar: 'الارتفاع = المساحة ÷ القاعدة = ٧٢ ÷ ٩ = ٨ سم.' },
        { id: 'ap_5', type: 'multiple_choice', question_ar: 'أرضية على شكل متوازي أضلاع قاعدته ١٥م وارتفاعه ٨م. ما المساحة؟', options_ar: ['١٢٠ م^{2}', '٢٣ م^{2}', '٦٠ م^{2}', '١٥٠ م^{2}'], correct_index: 0, explanation_ar: '١٥ × ٨ = ١٢٠ م^{2}.' },
        { id: 'ap_6', type: 'ordering', question_ar: 'رتِّب خطوات حساب مساحة متوازي أضلاع قاعدته ١٠سم وارتفاعه ٤سم:', items_ar: ['حدد القاعدة = ١٠', 'حدد الارتفاع = ٤', 'اضرب: ١٠ × ٤ = ٤٠ سم^{2}'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة.' },
        { id: 'ap_7', type: 'classify', question_ar: 'صنِّف: هل المساحة أكبر من ٥٠ أم أقل؟', categories_ar: ['> ٥٠', '< ٥٠'], items_ar: [{ text: 'قاعدة ١٠ وارتفاع ٦', correct_category: 0 }, { text: 'قاعدة ٧ وارتفاع ٤', correct_category: 1 }, { text: 'قاعدة ٩ وارتفاع ٦', correct_category: 0 }, { text: 'قاعدة ٥ وارتفاع ٨', correct_category: 0 }], explanation_ar: '٦٠>٥٠. ٢٨<٥٠. ٥٤>٥٠. ٤٠<٥٠.' },
        { id: 'ap_8', type: 'fill_blank', question_ar: 'متوازي أضلاع مساحته ٤٨ م^{2} وارتفاعه ٦ م. القاعدة = ___', options_ar: ['٨ م', '٦ م', '٤٢ م', '١٢ م'], correct_index: 0, explanation_ar: 'القاعدة = ٤٨ ÷ ٦ = ٨ م.' },
        { id: 'ap_9', type: 'true_false', question_ar: 'الارتفاع في متوازي الأضلاع قد يكون خارج الشكل (عمودياً على امتداد القاعدة).', correct_answer: 'true', explanation_ar: 'الارتفاع العمودي قد يُرسَم خارج الشكل. صحيح.' },
        { id: 'ap_10', type: 'matching', question_ar: 'صِل كل متوازي أضلاع بمساحته:', pairs_ar: [{ right: 'قاعدة ٦ وارتفاع ٤', left: '٢٤' }, { right: 'قاعدة ١٠ وارتفاع ٧', left: '٧٠' }, { right: 'قاعدة ٨ وارتفاع ٥', left: '٤٠' }, { right: 'قاعدة ٩ وارتفاع ٦', left: '٥٤' }], explanation_ar: '٢٤. ٧٠. ٤٠. ٥٤.' },
      ],
    }],
  },
  {
    id: 'area_tri',
    title_ar: 'مساحة المثلث',
    subtitle_ar: 'نصف القاعدة × الارتفاع',
    color: 'from-rose-700 to-pink-500',
    icon: '🔺',
    lessons: [{
      id: 'at_l1', title_ar: 'مساحة المثلث', count: 10,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300',
      getQuestions: () => [
        { id: 'at_i1', type: 'info', question_ar: 'مساحة المثلث = ١/٢ × القاعدة × الارتفاع. لأن المثلث = نصف متوازي أضلاع. مثال: قاعدة ١٠ سم وارتفاع ٦ سم → المساحة = ١/٢ × ١٠ × ٦ = ٣٠ سم^{2}.', explanation_ar: 'مساحة المثلث = نصف القاعدة × الارتفاع.' },
        { id: 'at_1', type: 'multiple_choice', question_ar: 'مثلث قاعدته ٨ سم وارتفاعه ٥ سم. ما المساحة؟', options_ar: ['٢٠ سم^{2}', '٤٠ سم^{2}', '١٣ سم^{2}', '٢٠ سم'], correct_index: 0, explanation_ar: '١/٢ × ٨ × ٥ = ٢٠ سم^{2}.', golden_rule: 'مساحة المثلث = ١/٢ × القاعدة × الارتفاع.' },
        { id: 'at_2', type: 'fill_blank', question_ar: 'مثلث قاعدته ١٢ م وارتفاعه ٧ م. المساحة = ___', options_ar: ['٤٢ م^{2}', '٨٤ م^{2}', '١٩ م^{2}', '٢٤ م^{2}'], correct_index: 0, explanation_ar: '١/٢ × ١٢ × ٧ = ٤٢ م^{2}.' },
        { id: 'at_3', type: 'true_false', question_ar: 'مثلث قاعدته ١٠ سم وارتفاعه ٤ سم، مساحته = ٢٠ سم^{2}.', correct_answer: 'true', explanation_ar: '١/٢ × ١٠ × ٤ = ٢٠ سم^{2}. صحيح.' },
        { id: 'at_4', type: 'multiple_choice', question_ar: 'مثلث مساحته ٣٦ سم^{2} وقاعدته ٩ سم. ما الارتفاع؟', options_ar: ['٨ سم', '٦ سم', '٤ سم', '٩ سم'], correct_index: 0, explanation_ar: 'الارتفاع = ٢ × المساحة ÷ القاعدة = ٢ × ٣٦ ÷ ٩ = ٨ سم.' },
        { id: 'at_5', type: 'multiple_choice', question_ar: 'حديقة مثلثة قاعدتها ٢٠م وارتفاعها ١٠م. ما المساحة؟', options_ar: ['١٠٠ م^{2}', '٢٠٠ م^{2}', '٣٠ م^{2}', '٥٠ م^{2}'], correct_index: 0, explanation_ar: '١/٢ × ٢٠ × ١٠ = ١٠٠ م^{2}.' },
        { id: 'at_6', type: 'ordering', question_ar: 'رتِّب خطوات حساب مساحة مثلث قاعدته ٨سم وارتفاعه ٦سم:', items_ar: ['حدد القاعدة والارتفاع: ٨ و ٦', 'اضرب: ٨ × ٦ = ٤٨', 'اقسم على ٢: ٤٨ ÷ ٢ = ٢٤ سم^{2}'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لمساحة المثلث.' },
        { id: 'at_7', type: 'classify', question_ar: 'صنِّف: المساحة أكبر من ٢٠ أم أقل؟', categories_ar: ['> ٢٠', '< ٢٠'], items_ar: [{ text: 'قاعدة ١٠ وارتفاع ٦', correct_category: 0 }, { text: 'قاعدة ٤ وارتفاع ٥', correct_category: 1 }, { text: 'قاعدة ٨ وارتفاع ٨', correct_category: 0 }, { text: 'قاعدة ٣ وارتفاع ٤', correct_category: 1 }], explanation_ar: '٣٠>٢٠. ١٠<٢٠. ٣٢>٢٠. ٦<٢٠.' },
        { id: 'at_8', type: 'fill_blank', question_ar: 'مثلث مساحته ٢٤ سم^{2} وارتفاعه ٦ سم. القاعدة = ___', options_ar: ['٨ سم', '٤ سم', '٦ سم', '١٢ سم'], correct_index: 0, explanation_ar: 'القاعدة = ٢ × ٢٤ ÷ ٦ = ٨ سم.' },
        { id: 'at_9', type: 'true_false', question_ar: 'مساحة المثلث = نصف مساحة متوازي الأضلاع بنفس القاعدة والارتفاع.', correct_answer: 'true', explanation_ar: 'المثلث نصف متوازي الأضلاع. صحيح.' },
        { id: 'at_10', type: 'matching', question_ar: 'صِل كل مثلث بمساحته:', pairs_ar: [{ right: 'قاعدة ٦ وارتفاع ٤', left: '١٢' }, { right: 'قاعدة ١٠ وارتفاع ٨', left: '٤٠' }, { right: 'قاعدة ٨ وارتفاع ٥', left: '٢٠' }, { right: 'قاعدة ٩ وارتفاع ٦', left: '٢٧' }], explanation_ar: '١٢. ٤٠. ٢٠. ٢٧.' },
      ],
    }],
  },
];

export const MATH_G5_S2_CH6_TOTAL = MATH_G5_S2_CH6_UNITS.reduce((s, u) => s + u.lessons.reduce((ls, l) => ls + l.count, 0), 0);