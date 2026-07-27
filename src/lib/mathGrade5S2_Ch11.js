// بنك رياضيات — الفصل الحادي عشر: الحجم
// المصدر: كتاب وزارة التعليم 1447هـ / 2025م

export const MATH_G5_S2_CH11_UNITS = [
  {
    id: 'vol_concept',
    title_ar: 'الحجم بالوحدات المكعبة',
    subtitle_ar: 'عدّ المكعبات التي تملأ الشكل',
    color: 'from-blue-700 to-indigo-500',
    icon: '🧊',
    lessons: [{
      id: 'vc_l1', title_ar: 'الحجم بالوحدات المكعبة', count: 10,
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300',
      getQuestions: () => [
        { id: 'vc_i1', type: 'info', question_ar: 'الحجم: مقدار الحيز الذي يشغله جسم. يُقاس بالوحدات المكعبة (سم^{3}، م^{3}). للحساب بعدّ المكعبات التي تملأ الشكل. مثال: صندوق أبعاده ٤×٣×٢ مكعبات → الحجم = ٤×٣×٢ = ٢٤ وحدة مكعبة.', explanation_ar: 'الحجم = عدد الوحدات المكعبة = الطول × العرض × الارتفاع.' },
        { id: 'vc_1', type: 'multiple_choice', question_ar: 'صندوق أبعاده ٥ × ٣ × ٢ وحدة. ما الحجم؟', options_ar: ['٣٠ وحدة^{3}', '١٠ وحدة^{3}', '١٥ وحدة^{3}', '٦ وحدة^{3}'], correct_index: 0, explanation_ar: '٥ × ٣ × ٢ = ٣٠ وحدة^{3}.', golden_rule: 'الحجم = الطول × العرض × الارتفاع.' },
        { id: 'vc_2', type: 'fill_blank', question_ar: 'مستطيل أبعاده ٤ × ٤ × ٣ وحدة. الحجم = ___', options_ar: ['٤٨ وحدة^{3}', '١٢ وحدة^{3}', '١٦ وحدة^{3}', '٣٢ وحدة^{3}'], correct_index: 0, explanation_ar: '٤ × ٤ × ٣ = ٤٨ وحدة^{3}.' },
        { id: 'vc_3', type: 'true_false', question_ar: 'حجم مكعب طول ضلعه ٣ وحدات = ٢٧ وحدة^{3}.', correct_answer: 'true', explanation_ar: '٣ × ٣ × ٣ = ٢٧ وحدة^{3}. صحيح.' },
        { id: 'vc_4', type: 'multiple_choice', question_ar: 'صندوق أبعاده ٦ × ٤ × ٣ سم. ما الحجم؟', options_ar: ['٧٢ سم^{3}', '١٣ سم^{3}', '٢٤ سم^{3}', '١٨ سم^{3}'], correct_index: 0, explanation_ar: '٦ × ٤ × ٣ = ٧٢ سم^{3}.' },
        { id: 'vc_5', type: 'multiple_choice', question_ar: 'حوض أبعاده ١٠ × ٥ × ٢ م. ما حجمه؟', options_ar: ['١٠٠ م^{3}', '١٧ م^{3}', '٥٠ م^{3}', '٢٠ م^{3}'], correct_index: 0, explanation_ar: '١٠ × ٥ × ٢ = ١٠٠ م^{3}.' },
        { id: 'vc_6', type: 'ordering', question_ar: 'رتِّب خطوات حساب حجم مستطيل الأبعاد ٤×٣×٢:', items_ar: ['حدد الطول = ٤', 'حدد العرض = ٣ والارتفاع = ٢', 'اضرب: ٤ × ٣ × ٢ = ٢٤ وحدة^{3}'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لحساب الحجم.' },
        { id: 'vc_7', type: 'classify', question_ar: 'صنِّف: الحجم أكبر من ٥٠ أم أقل؟', categories_ar: ['> ٥٠', '< ٥٠'], items_ar: [{ text: '٥ × ٣ × ٤', correct_category: 0 }, { text: '٣ × ٢ × ٤', correct_category: 1 }, { text: '٦ × ٤ × ٣', correct_category: 0 }, { text: '٢ × ٣ × ٢', correct_category: 1 }], explanation_ar: '٦٠>٥٠. ٢٤<٥٠. ٧٢>٥٠. ١٢<٥٠.' },
        { id: 'vc_8', type: 'fill_blank', question_ar: 'حجم صندوق ٦٠ سم^{3} وأبعاده ٥ × ٤ × س. ما س؟', options_ar: ['٣', '٢', '٤', '٥'], correct_index: 0, explanation_ar: '٥ × ٤ × س = ٢٠س = ٦٠ → س = ٣.' },
        { id: 'vc_9', type: 'true_false', question_ar: 'وحدة الحجم دائماً مكعبة (سم^{3}، م^{3}).', correct_answer: 'true', explanation_ar: 'الحجم = طول×عرض×ارتفاع = طول^{3}. الوحدة مكعبة. صحيح.' },
        { id: 'vc_10', type: 'matching', question_ar: 'صِل كل صندوق بحجمه:', pairs_ar: [{ right: '٣ × ٢ × ٤', left: '٢٤' }, { right: '٥ × ٢ × ٣', left: '٣٠' }, { right: '٤ × ٤ × ٢', left: '٣٢' }, { right: '٣ × ٣ × ٣', left: '٢٧' }], explanation_ar: '٢٤. ٣٠. ٣٢. ٢٧.' },
      ],
    }],
  },
  {
    id: 'vol_cube',
    title_ar: 'حجم المكعب',
    subtitle_ar: 'ضلع × ضلع × ضلع = س^{3}',
    color: 'from-emerald-700 to-teal-500',
    icon: '🎲',
    lessons: [{
      id: 'vcb_l1', title_ar: 'حجم المكعب', count: 9,
      image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300',
      getQuestions: () => [
        { id: 'vcb_i1', type: 'info', question_ar: 'المكعب: جميع أضلاعه متساوية. الحجم = الضلع × الضلع × الضلع = س^{3}. مثال: مكعب طول ضلعه ٤ سم → الحجم = ٤^{3} = ٤×٤×٤ = ٦٤ سم^{3}.', explanation_ar: 'حجم المكعب = س^{3} (الضلع مكعب).' },
        { id: 'vcb_1', type: 'multiple_choice', question_ar: 'ما حجم مكعب طول ضلعه ٥ سم؟', options_ar: ['١٢٥ سم^{3}', '٢٥ سم^{3}', '١٥ سم^{3}', '٧٥ سم^{3}'], correct_index: 0, explanation_ar: '٥ × ٥ × ٥ = ١٢٥ سم^{3}.', golden_rule: 'حجم المكعب = الضلع^{3}.' },
        { id: 'vcb_2', type: 'fill_blank', question_ar: 'مكعب طول ضلعه ٣ م. الحجم = ___', options_ar: ['٢٧ م^{3}', '٩ م^{3}', '٦ م^{3}', '٨١ م^{3}'], correct_index: 0, explanation_ar: '٣ × ٣ × ٣ = ٢٧ م^{3}.' },
        { id: 'vcb_3', type: 'true_false', question_ar: 'مكعب طول ضلعه ٦ سم، حجمه = ٢١٦ سم^{3}.', correct_answer: 'true', explanation_ar: '٦ × ٦ × ٦ = ٢١٦ سم^{3}. صحيح.' },
        { id: 'vcb_4', type: 'multiple_choice', question_ar: 'ما حجم مكعب طول ضلعه ١٠ سم؟', options_ar: ['١٠٠٠ سم^{3}', '١٠٠ سم^{3}', '٣٠ سم^{3}', '١٠ سم^{3}'], correct_index: 0, explanation_ar: '١٠ × ١٠ × ١٠ = ١٠٠٠ سم^{3}.' },
        { id: 'vcb_5', type: 'multiple_choice', question_ar: 'حجم مكعب = ٨ سم^{3}. ما طول ضلعه؟', options_ar: ['٢ سم', '٤ سم', '٨ سم', '٣ سم'], correct_index: 0, explanation_ar: 'س^{3} = ٨ → س = ٢ سم (لأن ٢×٢×٢=٨).' },
        { id: 'vcb_6', type: 'ordering', question_ar: 'رتِّب خطوات حساب حجم مكعب ضلعه ٤سم:', items_ar: ['حدد طول الضلع = ٤', 'ابحث: ٤ × ٤ = ١٦', 'ابحث: ١٦ × ٤ = ٦٤ سم^{3}'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة: س^{3} = س×س×س.' },
        { id: 'vcb_7', type: 'fill_blank', question_ar: 'حجم مكعب = ٢٧ م^{3}. طول الضلع = ___', options_ar: ['٣ م', '٩ م', '٢٧ م', '٦ م'], correct_index: 0, explanation_ar: 'س^{3} = ٢٧ → س = ٣ (لأن ٣×٣×٣=٢٧).' },
        { id: 'vcb_8', type: 'true_false', question_ar: 'مكعب طول ضلعه ٧ سم، حجمه = ٣٤٣ سم^{3}.', correct_answer: 'true', explanation_ar: '٧×٧×٧ = ٣٤٣ سم^{3}. صحيح.' },
        { id: 'vcb_9', type: 'matching', question_ar: 'صِل طول الضلع بحجم المكعب:', pairs_ar: [{ right: '٢', left: '٨' }, { right: '٣', left: '٢٧' }, { right: '٤', left: '٦٤' }, { right: '٥', left: '١٢٥' }], explanation_ar: '٢^{3}=٨. ٣^{3}=٢٧. ٤^{3}=٦٤. ٥^{3}=١٢٥.' },
      ],
    }],
  },
  {
    id: 'vol_rect',
    title_ar: 'حجم متوازي المستطيلات',
    subtitle_ar: 'الطول × العرض × الارتفاع',
    color: 'from-rose-700 to-pink-500',
    icon: '📦',
    lessons: [{
      id: 'vr_l1', title_ar: 'حجم متوازي المستطيلات', count: 10,
      image: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?w=300',
      getQuestions: () => [
        { id: 'vr_i1', type: 'info', question_ar: 'حجم متوازي المستطيلات (الصندوق) = الطول × العرض × الارتفاع. مثال: صندوق أبعاده ٥×٣×٢ سم → الحجم = ٥×٣×٢ = ٣٠ سم^{3}.', explanation_ar: 'الحجم = الطول × العرض × الارتفاع = ل×ع×ار.' },
        { id: 'vr_1', type: 'multiple_choice', question_ar: 'صندوق أبعاده ٨×٤×٣ سم. ما الحجم؟', options_ar: ['٩٦ سم^{3}', '١٥ سم^{3}', '٣٢ سم^{3}', '٢٤ سم^{3}'], correct_index: 0, explanation_ar: '٨ × ٤ × ٣ = ٩٦ سم^{3}.', golden_rule: 'حجم متوازي المستطيلات = الطول × العرض × الارتفاع.' },
        { id: 'vr_2', type: 'fill_blank', question_ar: 'حوض سمك أبعاده ١٠×٥×٣ م. الحجم = ___', options_ar: ['١٥٠ م^{3}', '١٨ م^{3}', '٥٠ م^{3}', '٣٠ م^{3}'], correct_index: 0, explanation_ar: '١٠ × ٥ × ٣ = ١٥٠ م^{3}.' },
        { id: 'vr_3', type: 'true_false', question_ar: 'صندوق أبعاده ٦×٦×٦ سم، حجمه = ٢١٦ سم^{3} (وهو مكعب).', correct_answer: 'true', explanation_ar: '٦×٦×٦ = ٢١٦. صحيح (المكعب حالة خاصة).' },
        { id: 'vr_4', type: 'multiple_choice', question_ar: 'حجم صندوق ١٢٠ سم^{3} وأبعاده ٥×٤×س. ما س؟', options_ar: ['٦', '٥', '٤', '٣'], correct_index: 0, explanation_ar: '٥×٤×س = ٢٠س = ١٢٠ → س = ٦.' },
        { id: 'vr_5', type: 'multiple_choice', question_ar: 'خزان أبعاده ٤×٣×٢.٥ م. ما حجمه؟', options_ar: ['٣٠ م^{3}', '٩.٥ م^{3}', '٢٤ م^{3}', '١٢ م^{3}'], correct_index: 0, explanation_ar: '٤ × ٣ × ٢.٥ = ٣٠ م^{3}.' },
        { id: 'vr_6', type: 'ordering', question_ar: 'رتِّب خطوات حساب حجم صندوق ٧×٣×٢:', items_ar: ['حدد الأبعاد: ٧، ٣، ٢', 'اضرب الأولين: ٧×٣=٢١', 'اضرب في الثالث: ٢١×٢=٤٢ وحدة^{3}'], correct_order: [0, 1, 2], explanation_ar: 'الخطوات الصحيحة لحساب الحجم.' },
        { id: 'vr_7', type: 'classify', question_ar: 'صنِّف: الحجم أكبر من ١٠٠ أم أقل؟', categories_ar: ['> ١٠٠', '< ١٠٠'], items_ar: [{ text: '٥×٥×٤', correct_category: 0 }, { text: '٤×٣×٢', correct_category: 1 }, { text: '٦×٤×٥', correct_category: 0 }, { text: '٣×٣×٣', correct_category: 1 }], explanation_ar: '١٠٠=١٠٠. ٢٤<١٠٠. ١٢٠>١٠٠. ٢٧<١٠٠.' },
        { id: 'vr_8', type: 'fill_blank', question_ar: 'حجم صندوق = ٢٤٠ سم^{3} وأبعاده ٨×٥×س. س = ___', options_ar: ['٦', '٥', '٤', '٣'], correct_index: 0, explanation_ar: '٨×٥×س = ٤٠س = ٢٤٠ → س = ٦.' },
        { id: 'vr_9', type: 'true_false', question_ar: 'وحدة الحجم مكعبة (سم^{3}، م^{3}) وليست مسطحة.', correct_answer: 'true', explanation_ar: 'الحجم ثلاثي الأبعاد، الوحدة مكعبة. صحيح.' },
        { id: 'vr_10', type: 'matching', question_ar: 'صِل كل صندوق بحجمه:', pairs_ar: [{ right: '٤×٣×٢', left: '٢٤' }, { right: '٦×٢×٣', left: '٣٦' }, { right: '٥×٤×٣', left: '٦٠' }, { right: '٧×٢×٥', left: '٧٠' }], explanation_ar: '٢٤. ٣٦. ٦٠. ٧٠.' },
      ],
    }],
  },
];

export const MATH_G5_S2_CH11_TOTAL = MATH_G5_S2_CH11_UNITS.reduce((s, u) => s + u.lessons.reduce((ls, l) => ls + l.count, 0), 0);