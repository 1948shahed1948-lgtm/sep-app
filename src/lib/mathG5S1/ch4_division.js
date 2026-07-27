// بنك رياضيات الصف الخامس الفصل الأول — الفصل ٤: القسمة
// المصدر: كتاب وزارة التعليم — الصفحات ١٢١–١٥٠
// الدروس الرسمية: القسمة على عدد من رقم واحد · القسمة على عدد من رقمين

export const MATH_G5_S1_CH4 = [
  {
    id: 'ch4',
    title_ar: 'الفصل الرابع: القسمة',
    subtitle_ar: 'القسمة على عدد من رقم واحد · القسمة على عدد من رقمين',
    color: 'from-red-600 to-rose-500',
    icon: '➗',
    lessons: [
      {
        id: 'ch4_l1',
        title_ar: 'القسمة على عدد من رقم واحد',
        count: 15,
        image: 'https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=300',
        getQuestions: () => [
          { id: 'ch4_1', type: 'info', question_ar: 'القسمة: نقسم من اليسار إلى اليمين. في كل خطوة نأخذ رقماً ونسأل: كم مرة يدخل القاسم؟ الباقي يجب أن يكون أصغر من القاسم. مثال: ٤٬٥٣٦ ÷ ٤ = ١٬١٣٤ (بلا باقٍ).', explanation_ar: 'قسّم من اليسار، الباقي < القاسم.' },
          { id: 'ch4_2', type: 'multiple_choice', question_ar: 'احسب: ٢٬٤٥٦ ÷ ٨', options_ar: ['٣٠٧', '٣٠٦', '٣٠٨', '٣١٧'], correct_index: 0, explanation_ar: '٢٬٤٥٦ ÷ ٨: ٢٤÷٨=٣، ٥÷٨=٠ باق ٥، ٥٦÷٨=٧. الناتج = ٣٠٧.', page_number: 126 },
          { id: 'ch4_3', type: 'multiple_choice', question_ar: 'احسب: ١٬٥٧٥ ÷ ٥', options_ar: ['٣١٥', '٣٠٥', '٣٢٥', '٢٩٥'], correct_index: 0, explanation_ar: '١٥÷٥=٣، ٧÷٥=١ باق٢، ٢٥÷٥=٥. الناتج = ٣١٥.' },
          { id: 'ch4_4', type: 'true_false', question_ar: 'ناتج ٤٬٨٠٠ ÷ ٦ = ٨٠٠.', correct_answer: 'true', explanation_ar: '٤٬٨٠٠ ÷ ٦ = ٨٠٠. صحيح.' },
          { id: 'ch4_5', type: 'fill_blank', question_ar: 'احسب: ٦٬٢٥٢ ÷ ٤ = ___', options_ar: ['١٬٥٦٣', '١٬٥٦٢', '١٬٥٦٤', '١٬٥٥٣'], correct_index: 0, explanation_ar: '٦÷٤=١ باق٢، ٢٢÷٤=٥ باق٢، ٥٢÷٤=١٣... إعادة: ٦٢٥٢÷٤: ٦÷٤=١ب2، ٢٢÷٤=٥ب2، ٥٢÷٤=١٣ → ١٥٦٣.' },
          { id: 'ch4_6', type: 'multiple_choice', question_ar: 'احسب: ٣٬٤٢٠ ÷ ٦', options_ar: ['٥٧٠', '٥٦٠', '٥٨٠', '٥٧٥'], correct_index: 0, explanation_ar: '٣٤÷٦=٥ باق٤، ٤٢÷٦=٧، ٠÷٦=٠. الناتج = ٥٧٠.' },
          { id: 'ch4_7', type: 'multiple_choice', question_ar: 'احسب: ٧٬٠٥٦ ÷ ٧', options_ar: ['١٬٠٠٨', '١٬٠٠٦', '١٬٠٠٩', '١٬٠٠٧'], correct_index: 0, explanation_ar: '٧÷٧=١، ٠÷٧=٠، ٥٦÷٧=٨. الناتج = ١٬٠٠٨.' },
          { id: 'ch4_8', type: 'true_false', question_ar: 'الباقي في قسمة ٥٬٠٠٠ ÷ ٧ يساوي ١.', correct_answer: 'false', explanation_ar: '٥٬٠٠٠ ÷ ٧ = ٧١٤ باق ٢. الباقي = ٢ وليس ١. خطأ.' },
          { id: 'ch4_9', type: 'multiple_choice', question_ar: 'احسب: ٩٬٢٤٨ ÷ ٨', options_ar: ['١٬١٥٦', '١٬٠٥٦', '١٬١٤٦', '١٬١٦٥'], correct_index: 0, explanation_ar: '٩÷٨=١ب1، ١٢÷٨=١ب4، ٤٨÷٨=٦ → ١١٥٦.' },
          { id: 'ch4_10', type: 'multiple_choice', question_ar: 'احسب: ٣٬٢٤٠ ÷ ٩', options_ar: ['٣٦٠', '٣٥٠', '٣٧٠', '٣٤٠'], correct_index: 0, explanation_ar: '٣٢÷٩=٣ب5، ٥٤÷٩=٦، ٠ → ٣٦٠.' },
          { id: 'ch4_11', type: 'fill_blank', question_ar: 'احسب: ٥٬٤٦٠ ÷ ٥ = ___', options_ar: ['١٬٠٩٢', '١٬٠٩٠', '١٬٠٩٣', '١٬٠٨٢'], correct_index: 0, explanation_ar: '٥÷٥=١، ٤÷٥=٠ب4، ٤٦÷٥=٩ب1، ١٠÷٥=٢ → ١٠٩٢.' },
          { id: 'ch4_12', type: 'multiple_choice', question_ar: 'احسب: ٨٬٤٢٤ ÷ ٤', options_ar: ['٢٬١٠٦', '٢٬١٠٥', '٢٬١٠٧', '٢٬١١٦'], correct_index: 0, explanation_ar: '٨÷٤=٢، ٤÷٤=١، ٢÷٤=٠ب2، ٢٤÷٤=٦ → ٢١٠٦.' },
          { id: 'ch4_13', type: 'multiple_choice', question_ar: 'مزرعة إنتاجها ٤٬٥٣٦ كيلو عنب وزعتها على ٦ صندوق. كم في كل صندوق؟', options_ar: ['٧٥٦', '٧٦٥', '٧٤٦', '٧٥٥'], correct_index: 0, explanation_ar: '٤٬٥٣٦ ÷ ٦ = ٧٥٦ كيلو.' },
          { id: 'ch4_14', type: 'true_false', question_ar: 'الباقي في القسمة دائماً أصغر من القاسم.', correct_answer: 'true', explanation_ar: 'إذا كان الباقي ≥ القاسم يمكن القسمة مرة أخرى. صحيح.', page_number: 128 },
          { id: 'ch4_15', type: 'multiple_choice', question_ar: 'احسب: ٦٬٧٢٣ ÷ ٧ وحدد الباقي', options_ar: ['٩٦٠ باق ٣', '٩٦١ باق ٠', '٩٦٠ باق ٠', '٩٥٩ باق ٤'], correct_index: 0, explanation_ar: '٦٧÷٧=٩ب4، ٤٢÷٧=٦، ٣÷٧=٠ب3 → ٩٦٠ باق ٣.' },
        ],
      },
      {
        id: 'ch4_l2',
        title_ar: 'القسمة على عدد من رقمين',
        count: 14,
        image: 'https://images.unsplash.com/photo-1633158829875-e5316a354c84?w=300',
        getQuestions: () => [
          { id: 'ch4_16', type: 'info', question_ar: 'لتقدير القسمة: استخدم أقواساً متوافقة. مثال: ٤٬٥٠٠ ÷ ٩ ≈ ٤٬٥٠٠ ÷ ١٠ = ٤٥٠ (قرّب القاسم لأقرب ١٠). أو ٤٬٨٠٠ ÷ ٦٠ ≈ ٥٬٠٠٠ ÷ ٥٠ = ١٠٠.', explanation_ar: 'استخدم أعداداً متوافقة سهلة القسمة.' },
          { id: 'ch4_17', type: 'multiple_choice', question_ar: 'قدّر: ٣٬٢٤٠ ÷ ٧', options_ar: ['٤٦٠', '٥٣٠', '٣٥٠', '٤١٠'], correct_index: 0, explanation_ar: '٣٬٢٠٠ ÷ ٧ ≈ ٣٬٢٢٠ ÷ ٧ ≈ ٤٦٠. (أو ٣٥٠×٩=٣١٥٠، ٤٦٠×٧=٣٢٢٠).', page_number: 132 },
          { id: 'ch4_18', type: 'multiple_choice', question_ar: 'قدّر: ٥٬٧٢٠ ÷ ٩', options_ar: ['٦٤٠', '٥٧٠', '٧٠٠', '٥٠٠'], correct_index: 0, explanation_ar: '٥٬٧٦٠ ÷ ٩ ≈ ٦٤٠. أو ٥٬٤٠٠ ÷ ٩ = ٦٠٠، أقرب خيار ٦٤٠.' },
          { id: 'ch4_19', type: 'true_false', question_ar: 'تقدير ٤٬٢٠٠ ÷ ٦ = ٧٠٠ دقيق.', correct_answer: 'true', explanation_ar: '٤٬٢٠٠ ÷ ٦ = ٧٠٠ بالضبط. صحيح.' },
          { id: 'ch4_20', type: 'multiple_choice', question_ar: 'احسب: ١٬٣٥٢ ÷ ١٢', options_ar: ['١١٢ باق ٨', '١١٢', '١١٣', '١٠١ باق ٤'], correct_index: 0, explanation_ar: '١٣÷١٢=١ب1، ١٥÷١٢=١ب3، ٣٢÷١٢=٢ب8 → ١١٢ باق ٨.' },
          { id: 'ch4_21', type: 'fill_blank', question_ar: 'احسب: ٢٬٥٤٨ ÷ ١١ = ___', options_ar: ['٢٣١ باق ٧', '٢٣٢', '٢٣١', '٢٣٠ باق ١٨'], correct_index: 0, explanation_ar: '٢٥÷١١=٢ب3، ٣٤÷١١=٣ب1، ١٨÷١١=١ب7 → ٢٣١ باق ٧.' },
          { id: 'ch4_22', type: 'multiple_choice', question_ar: 'احسب: ٣٬٤٥٦ ÷ ٢٤', options_ar: ['١٤٤', '١٣٤', '١٥٤', '١٤٣'], correct_index: 0, explanation_ar: '٣٤÷٢٤=١ب10، ١٠٥÷٢٤=٤ب9، ٩٦÷٢٤=٤ → ١٤٤.' },
          { id: 'ch4_23', type: 'multiple_choice', question_ar: 'احسب: ٥٬٢٠٨ ÷ ٣٦', options_ar: ['١٤٤ باق ٢٤', '١٤٤', '١٤٥', '١٣٤'], correct_index: 0, explanation_ar: '٥٢÷٣٦=١ب16، ١٦٠÷٣٦=٤ب16، ١٦٨÷٣٦=٤ب24 → ١٤٤ باق ٢٤.' },
          { id: 'ch4_24', type: 'true_false', question_ar: 'ناتج ٤٬٢٥٠ ÷ ٢٥ = ١٧٠.', correct_answer: 'true', explanation_ar: '٤٢÷٢٥=١ب17، ١٧٥÷٢٥=٧، ٠ → ١٧٠. صحيح.' },
          { id: 'ch4_25', type: 'multiple_choice', question_ar: 'احسب: ٦٬٤٨٠ ÷ ٤٠', options_ar: ['١٦٢', '١٦٠', '١٦٣', '١٥٢'], correct_index: 0, explanation_ar: 'إزالة الصفر: ٦٤٨ ÷ ٤ = ١٦٢.' },
          { id: 'ch4_26', type: 'fill_blank', question_ar: 'احسب: ٧٬٢٠٠ ÷ ٨٠ = ___', options_ar: ['٩٠', '٨٠', '١٠٠', '٧٠'], correct_index: 0, explanation_ar: 'إزالة الصفر: ٧٢٠ ÷ ٨ = ٩٠.' },
          { id: 'ch4_27', type: 'multiple_choice', question_ar: 'احسب: ٥٬٧٦٠ ÷ ٣٢', options_ar: ['١٨٠', '١٧٠', '١٨٥', '١٩٠'], correct_index: 0, explanation_ar: '٥٧÷٣٢=١ب25، ٢٥٦÷٣٢=٨، ٠ → ١٨٠.' },
          { id: 'ch4_28', type: 'multiple_choice', question_ar: 'مصنع علبه ٤٬٢٠٠ علبة وزعها على ١٤ صندوقاً. كم علبة في كل صندوق؟', options_ar: ['٣٠٠', '٢٨٠', '٣٢٠', '٢٩٠'], correct_index: 0, explanation_ar: '٤٬٢٠٠ ÷ ١٤ = ٣٠٠ علبة.' },
          { id: 'ch4_29', type: 'true_false', question_ar: 'في القسمة على عدد من رقمين نقدّر الرقم الأول من الناتج ثم نعدّل.', correct_answer: 'true', explanation_ar: 'نعم: قدّر، اضرب، اطرح، أنزل الرقم التالي. صحيح.' },
        ],
      },
    ],
  },
];