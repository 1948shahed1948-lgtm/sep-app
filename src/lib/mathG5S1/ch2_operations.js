// بنك رياضيات الصف الخامس الفصل الأول — الفصل ٢: الجمع والطرح
// المصدر: كتاب وزارة التعليم — الصفحات ٣١–٩٢
// الدروس الرسمية: تقدير نواتج الجمع والطرح · الجمع والطرح ذهنياً

export const MATH_G5_S1_CH2 = [
  {
    id: 'ch2',
    title_ar: 'الفصل الثاني: الجمع والطرح',
    subtitle_ar: 'تقدير النواتج · الجمع والطرح ذهنياً',
    color: 'from-emerald-700 to-green-500',
    icon: '➕',
    lessons: [
      {
        id: 'ch2_l1',
        title_ar: 'تقدير نواتج الجمع والطرح',
        count: 13,
        image: 'https://images.unsplash.com/photo-1564428190747-75f3dd3efb58?w=300',
        getQuestions: () => [
          { id: 'ch2_1', type: 'info', question_ar: 'لتقدير ناتج جمع: قرّب كل عدد لأقرب مئة ألف أو مليون ثم اجمع. مثال: ٤٬٤٥٠٬٠٠٠ + ٢٬٣٨٠٬٠٠٠ ≈ ٤٬٠٠٠٬٠٠٠ + ٢٬٠٠٠٬٠٠٠ = ٦٬٠٠٠٬٠٠٠. أو قرّب لأقرب مئة ألف: ٤٬٥٠٠٬٠٠٠ + ٢٬٤٠٠٬٠٠٠ = ٦٬٩٠٠٬٠٠٠.', explanation_ar: 'التقريب المباشر يجعل الحساب الذهني أسهل.' },
          { id: 'ch2_2', type: 'multiple_choice', question_ar: 'قدّر ناتج: ٣٬٤٢٥٬٠٠٠ + ٢٬٦١٠٬٠٠٠ (لأقرب مئة ألف)', options_ar: ['٦٬٠٠٠٬٠٠٠', '٥٬٠٠٠٬٠٠٠', '٧٬٠٠٠٬٠٠٠', '٦٬٥٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '٣٬٤٠٠٬٠٠٠ + ٢٬٦٠٠٬٠٠٠ = ٦٬٠٠٠٬٠٠٠.', page_number: 35 },
          { id: 'ch2_3', type: 'multiple_choice', question_ar: 'احسب: ٤٬٥٠٠٬٠٠٠ + ٣٬٢٠٠٬٠٠٠', options_ar: ['٧٬٧٠٠٬٠٠٠', '٧٬٠٠٠٬٠٠٠', '٧٬٥٠٠٬٠٠٠', '٨٬٠٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '٤٬٥ + ٣٬٢ = ٧٬٧ → ٧٬٧٠٠٬٠٠٠.' },
          { id: 'ch2_4', type: 'multiple_choice', question_ar: 'احسب: ١٬٤٥٧٬٨٠٠ + ٢٬٣٤٢٬٢٠٠', options_ar: ['٣٬٨٠٠٬٠٠٠', '٣٬٧٩٩٬٩٠٠', '٣٬٩٠٠٬٠٠٠', '٣٬٧٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '١٬٤٥٧٬٨٠٠ + ٢٬٣٤٢٬٢٠٠ = ٣٬٨٠٠٬٠٠٠.' },
          { id: 'ch2_5', type: 'true_false', question_ar: 'تقدير ٥٬٤٩٠٬٠٠٠ + ٤٬٥٢٠٬٠٠٠ بأقرب مئة ألف = ١٠٬٠٠٠٬٠٠٠.', correct_answer: 'true', explanation_ar: '٥٬٥٠٠٬٠٠٠ + ٤٬٥٠٠٬٠٠٠ = ١٠٬٠٠٠٬٠٠٠. صحيح.' },
          { id: 'ch2_6', type: 'fill_blank', question_ar: 'احسب: ٢٬٠٠٥٬٠٠٠ + ٣٬٩٩٥٬٠٠٠ = ___', options_ar: ['٦٬٠٠٠٬٠٠٠', '٥٬٩٠٠٬٠٠٠', '٦٬١٠٠٬٠٠٠', '٥٬٠٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '٢٬٠٠٥٬٠٠٠ + ٣٬٩٩٥٬٠٠٠ = ٦٬٠٠٠٬٠٠٠.' },
          { id: 'ch2_7', type: 'multiple_choice', question_ar: 'مدرسة بها ١٬٢٤٥٬٠٠٠ طالب وأخرى ٢٬٣٤٠٬٠٠٠. ما تقدير مجموعهما لأقرب مئة ألف؟', options_ar: ['٣٬٦٠٠٬٠٠٠', '٣٬٥٠٠٬٠٠٠', '٣٬٧٠٠٬٠٠٠', '٤٬٠٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '١٬٢٠٠٬٠٠٠ + ٢٬٤٠٠٬٠٠٠ = ٣٬٦٠٠٬٠٠٠.' },
          { id: 'ch2_8', type: 'multiple_choice', question_ar: 'احسب: ٦٬٤٣٢٬١٠٠ + ٢٬٥٦٧٬٩٠٠', options_ar: ['٩٬٠٠٠٬٠٠٠', '٨٬٠٠٠٬٠٠٠', '٩٬١٠٠٬٠٠٠', '٨٬٩٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '٦٬٤٣٢٬١٠٠ + ٢٬٥٦٧٬٩٠٠ = ٩٬٠٠٠٬٠٠٠.' },
          { id: 'ch2_9', type: 'multiple_choice', question_ar: 'أي تقدير أقرب للناتج الحقيقي: ٤٬٢٤٨٬٠٠٠ + ١٬٧٥٦٬٠٠٠؟', options_ar: ['٦٬٠٠٤٬٠٠٠', '٦٬٠٠٠٬٠٠٠', '٦٬١٠٠٬٠٠٠', '٥٬٠٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '٤٬٢٤٨٬٠٠٠ + ١٬٧٥٦٬٠٠٠ = ٦٬٠٠٤٬٠٠٠ بالضبط.' },
          { id: 'ch2_10', type: 'true_false', question_ar: 'ناتج ٥٬٠٠٠٬٠٠٠ + ٤٬٩٩٩٬٩٩٩ = ٩٬٩٩٩٬٩٩٩.', correct_answer: 'true', explanation_ar: '٥٬٠٠٠٬٠٠٠ + ٤٬٩٩٩٬٩٩٩ = ٩٬٩٩٩٬٩٩٩. صحيح.' },
          { id: 'ch2_11', type: 'multiple_choice', question_ar: 'قدّر: ٧٬٢٤٠٬٠٠٠ + ١٬٧٦٠٬٠٠٠ بأقرب مئة ألف', options_ar: ['٩٬٠٠٠٬٠٠٠', '٩٬٥٠٠٬٠٠٠', '٨٬٠٠٠٬٠٠٠', '١٠٬٠٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '٧٬٢٠٠٬٠٠٠ + ١٬٨٠٠٬٠٠٠ = ٩٬٠٠٠٬٠٠٠.' },
          { id: 'ch2_12', type: 'fill_blank', question_ar: 'أكمل: ٣٬٨٠٠٬٠٠٠ + ___ = ٦٬٠٠٠٬٠٠٠', options_ar: ['٢٬٢٠٠٬٠٠٠', '٢٬٣٠٠٬٠٠٠', '٢٬٤٠٠٬٠٠٠', '٢٬٠٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '٦٬٠٠٠٬٠٠٠ − ٣٬٨٠٠٬٠٠٠ = ٢٬٢٠٠٬٠٠٠.' },
          { id: 'ch2_13', type: 'multiple_choice', question_ar: 'إذا كان أ + ب = ٥٬٠٠٠٬٠٠٠ و أ = ١٬٨٠٠٬٠٠٠ فما ب؟', options_ar: ['٣٬٢٠٠٬٠٠٠', '٣٬٠٠٠٬٠٠٠', '٣٬٨٠٠٬٠٠٠', '٣٬١٠٠٬٠٠٠'], correct_index: 0, explanation_ar: 'ب = ٥٬٠٠٠٬٠٠٠ − ١٬٨٠٠٬٠٠٠ = ٣٬٢٠٠٬٠٠٠.' },
        ],
      },
      {
        id: 'ch2_l2',
        title_ar: 'الجمع والطرح ذهنياً',
        count: 12,
        image: 'https://images.unsplash.com/photo-1633158829875-e5316a354c84?w=300',
        getQuestions: () => [
          { id: 'ch2_14', type: 'info', question_ar: 'لتقدير ناتج طرح: قرّب الأعداد ثم اطرح. مثال: ٥٬٤٢٠٬٠٠٠ − ٢٬٣١٠٬٠٠٠ ≈ ٥٬٤٠٠٬٠٠٠ − ٢٬٣٠٠٬٠٠٠ = ٣٬١٠٠٬٠٠٠.', explanation_ar: 'الطرح = طرح التقديرات.' },
          { id: 'ch2_15', type: 'multiple_choice', question_ar: 'قدّر: ٧٬٥٢٠٬٠٠٠ − ٣٬٤٨٠٬٠٠٠ (لأقرب مئة ألف)', options_ar: ['٤٬٠٠٠٬٠٠٠', '٣٬٠٠٠٬٠٠٠', '٥٬٠٠٠٬٠٠٠', '٤٬٥٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '٧٬٥٠٠٬٠٠٠ − ٣٬٥٠٠٬٠٠٠ = ٤٬٠٠٠٬٠٠٠.', page_number: 50 },
          { id: 'ch2_16', type: 'multiple_choice', question_ar: 'احسب: ٦٬٠٠٠٬٠٠٠ − ٢٬٣٤٥٬٠٠٠', options_ar: ['٣٬٦٥٥٬٠٠٠', '٣٬٥٥٥٬٠٠٠', '٣٬٧٠٠٬٠٠٠', '٤٬٦٥٥٬٠٠٠'], correct_index: 0, explanation_ar: '٦٬٠٠٠٬٠٠٠ − ٢٬٣٤٥٬٠٠٠ = ٣٬٦٥٥٬٠٠٠.' },
          { id: 'ch2_17', type: 'true_false', question_ar: 'ناتج ٤٬٥٠٠٬٠٠٠ − ٤٬٥٠٠٬٠٠٠ = صفر.', correct_answer: 'true', explanation_ar: 'العدد نفسه مطروحاً من نفسه = ٠. صحيح.' },
          { id: 'ch2_18', type: 'multiple_choice', question_ar: 'احسب: ٨٬٠٢٥٬٠٠٠ − ٣٬٦٧٥٬٠٠٠', options_ar: ['٤٬٣٥٠٬٠٠٠', '٤٬٢٥٠٬٠٠٠', '٤٬٣٥٠٬٥٠٠', '٤٬٤٥٠٬٠٠٠'], correct_index: 0, explanation_ar: '٨٬٠٢٥٬٠٠٠ − ٣٬٦٧٥٬٠٠٠ = ٤٬٣٥٠٬٠٠٠.' },
          { id: 'ch2_19', type: 'fill_blank', question_ar: 'احسب: ٥٬٠٠٠٬٠٠٠ − ٢٬٩٩٩٬٩٩٩ = ___', options_ar: ['٢٬٠٠٠٬٠٠١', '٢٬٠٠٠٬٠٠٠', '٢٬٠٠١٬٠٠٠', '١٬٩٩٩٬٩٩٩'], correct_index: 0, explanation_ar: '٥٬٠٠٠٬٠٠٠ − ٢٬٩٩٩٬٩٩٩ = ٢٬٠٠٠٬٠٠١.' },
          { id: 'ch2_20', type: 'multiple_choice', question_ar: 'إنتاج مصنع ٩٬٤٥٠٬٠٠٠ قطعة هذا العام و٧٬٣٨٠٬٠٠٠ العام الماضي. ما الفرق لأقرب مئة ألف؟', options_ar: ['٢٬١٠٠٬٠٠٠', '٢٬٠٠٠٬٠٠٠', '٢٬٢٠٠٬٠٠٠', '٢٬٠٧٠٬٠٠٠'], correct_index: 0, explanation_ar: '٩٬٤٥٠٬٠٠٠ − ٧٬٣٨٠٬٠٠٠ = ٢٬٠٧٠٬٠٠٠. لأقرب مئة ألف: ٩٬٥٠٠٬٠٠٠ − ٧٬٤٠٠٬٠٠٠ = ٢٬١٠٠٬٠٠٠.' },
          { id: 'ch2_21', type: 'multiple_choice', question_ar: 'في عملية طرح: المطروح ٤٬٢٠٠٬٠٠٠ والناتج ١٬٨٠٠٬٠٠٠. ما المطروح منه؟', options_ar: ['٦٬٠٠٠٬٠٠٠', '٥٬٠٠٠٬٠٠٠', '٢٬٤٠٠٬٠٠٠', '٦٬٢٠٠٬٠٠٠'], correct_index: 0, explanation_ar: 'المطروح منه = المطروح + الناتج = ٤٬٢٠٠٬٠٠٠ + ١٬٨٠٠٬٠٠٠ = ٦٬٠٠٠٬٠٠٠.' },
          { id: 'ch2_22', type: 'true_false', question_ar: '٤٬٠٠٠٬٠٠٠ − ٢٬٥٠٠٬٠٠٠ = ١٬٥٠٠٬٠٠٠.', correct_answer: 'true', explanation_ar: '٤٬٠٠٠٬٠٠٠ − ٢٬٥٠٠٬٠٠٠ = ١٬٥٠٠٬٠٠٠. صحيح.' },
          { id: 'ch2_23', type: 'fill_blank', question_ar: 'أكمل: ___ − ٣٬٥٠٠٬٠٠٠ = ٢٬٥٠٠٬٠٠٠', options_ar: ['٦٬٠٠٠٬٠٠٠', '٥٬٠٠٠٬٠٠٠', '٦٬٥٠٠٬٠٠٠', '٥٬٥٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '٣٬٥٠٠٬٠٠٠ + ٢٬٥٠٠٬٠٠٠ = ٦٬٠٠٠٬٠٠٠.' },
          { id: 'ch2_24', type: 'multiple_choice', question_ar: 'قدّر: ٩٬١٢٣٬٠٠٠ − ٤٬٧٦٠٬٠٠٠ لأقرب مليون', options_ar: ['٤٬٠٠٠٬٠٠٠', '٥٬٠٠٠٬٠٠٠', '٤٬٥٠٠٬٠٠٠', '٣٬٠٠٠٬٠٠٠'], correct_index: 0, explanation_ar: '٩٬٠٠٠٬٠٠٠ − ٥٬٠٠٠٬٠٠٠ = ٤٬٠٠٠٬٠٠٠.' },
          { id: 'ch2_25', type: 'multiple_choice', question_ar: 'مسألة: معرض بيع ٢٬٤٥٠٬٠٠٠ تذكرة وبقي ١٬٢٠٥٬٠٠٠ تذكرة. كم التذكرة كلها؟', options_ar: ['٣٬٦٥٥٬٠٠٠', '٣٬٥٥٥٬٠٠٠', '٣٬٦٥٠٬٠٠٠', '٣٬٥٥٠٬٠٠٠'], correct_index: 0, explanation_ar: 'المباع + المتبقي = الكل: ٢٬٤٥٠٬٠٠٠ + ١٬٢٠٥٬٠٠٠ = ٣٬٦٥٥٬٠٠٠.' },
        ],
      },
    ],
  },
];