// بنك رياضيات الصف الخامس الفصل الأول — الفصل ٥: العبارات الجبرية والمعادلات
// المصدر: كتاب وزارة التعليم — الصفحات ١٥١–١٨٠
// الدروس الرسمية: عبارات الجمع والطرح الجبرية · معادلات الجمع والطرح

export const MATH_G5_S1_CH5 = [
  {
    id: 'ch5',
    title_ar: 'الفصل الخامس: العبارات الجبرية والمعادلات',
    subtitle_ar: 'عبارات الجمع والطرح الجبرية · معادلات الجمع والطرح',
    color: 'from-purple-700 to-violet-500',
    icon: '🔤',
    lessons: [
      {
        id: 'ch5_l1',
        title_ar: 'عبارات الجمع والطرح الجبرية',
        count: 14,
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300',
        getQuestions: () => [
          { id: 'ch5_1', type: 'info', question_ar: 'العبارة الجبرية تتكون من أرقام (ثوابت) وحروف (متغيرات). مثال: «مجموع ٥ و س» يُكتب: ٥ + س. «حاصل ضرب ٤ في ع» = ٤ع. «الفرق بين ن و ٣» = ن − ٣.', explanation_ar: 'مجموع = +، فرق = −، جداء = ×، حاصل = ÷.' },
          { id: 'ch5_2', type: 'multiple_choice', question_ar: 'اكتب عبارة جبرية لـ «مجموع ٧ و س»', options_ar: ['٧ + س', '٧س', '٧ − س', 'س ÷ ٧'], correct_index: 0, explanation_ar: 'المجموع = جمع: ٧ + س.', page_number: 154 },
          { id: 'ch5_3', type: 'multiple_choice', question_ar: 'اكتب عبارة لـ «جداء ٦ في م»', options_ar: ['٦م', '٦ + م', 'م − ٦', '٦ ÷ م'], correct_index: 0, explanation_ar: 'الجداء = ضرب: ٦م.' },
          { id: 'ch5_4', type: 'multiple_choice', question_ar: 'اكتب عبارة لـ «الفرق بين ن و ٤»', options_ar: ['ن − ٤', '٤ − ن', 'ن + ٤', '٤ن'], correct_index: 0, explanation_ar: 'الفرق = طرح الأول ناقص الثاني: ن − ٤.' },
          { id: 'ch5_5', type: 'true_false', question_ar: 'عبارة «حاصل قسمة ص على ٣» تكتب: ص ÷ ٣ أو ص/٣.', correct_answer: 'true', explanation_ar: 'حاصل القسمة = ÷. صحيح.' },
          { id: 'ch5_6', type: 'multiple_choice', question_ar: 'إذا كان عمر أحمد س سنة وعمر أبيه ٣ أمثاله، فما عمر الأب؟', options_ar: ['٣س', 'س + ٣', '٣ − س', 'س ÷ ٣'], correct_index: 0, explanation_ar: '٣ أمثال س = ٣س.' },
          { id: 'ch5_7', type: 'fill_blank', question_ar: 'عبارة «عشرات العدد ن» تُكتب: ___', options_ar: ['١٠ن', 'ن + ١٠', 'ن − ١٠', 'ن ÷ ١٠'], correct_index: 0, explanation_ar: 'عشرات ن = ١٠ × ن = ١٠ن.' },
          { id: 'ch5_8', type: 'multiple_choice', question_ar: 'بسّط العبارة: ٣س + ٢س', options_ar: ['٥س', '٦س', 'س', 'س٥'], correct_index: 0, explanation_ar: 'نقسم المتغيرات المتشابهة: ٣س + ٢س = ٥س.' },
          { id: 'ch5_9', type: 'multiple_choice', question_ar: 'بسّط: ٧ع − ٤ع', options_ar: ['٣ع', '١١ع', 'ع', '٣'], correct_index: 0, explanation_ar: '٧ع − ٤ع = ٣ع.' },
          { id: 'ch5_10', type: 'true_false', question_ar: 'العبارة ٥ + ن تساوي العبارة ن + ٥.', correct_answer: 'true', explanation_ar: 'خاصية الإبدال للجمع. صحيح.' },
          { id: 'ch5_11', type: 'multiple_choice', question_ar: 'بسّط: ٤م + ٣ − ٢م + ٥', options_ar: ['٢م + ٨', '٢م + ٨', '٦م + ٨', '٢م − ٢'], correct_index: 0, explanation_ar: '(٤م − ٢م) + (٣ + ٥) = ٢م + ٨.' },
          { id: 'ch5_12', type: 'multiple_choice', question_ar: 'إذا كان ثمن قلم ع ريالاً، فما ثمن ٨ أقلام؟', options_ar: ['٨ع', 'ع + ٨', 'ع − ٨', '٨ ÷ ع'], correct_index: 0, explanation_ar: '٨ أقلام × ع = ٨ع.' },
          { id: 'ch5_13', type: 'fill_blank', question_ar: 'بسّط: ٩س − ٣س + ٢ = ___', options_ar: ['٦س + ٢', '٦س', '١٢س + ٢', '٦س − ٢'], correct_index: 0, explanation_ar: '(٩س − ٣س) + ٢ = ٦س + ٢.' },
          { id: 'ch5_14', type: 'multiple_choice', question_ar: 'عبارة «نقص ٥ من ضعف س» تُكتب:', options_ar: ['٢س − ٥', 'س − ١٠', '٥ − ٢س', '٢(س − ٥)'], correct_index: 0, explanation_ar: 'ضعف س = ٢س، انقص ٥ = ٢س − ٥.' },
        ],
      },
      {
        id: 'ch5_l2',
        title_ar: 'معادلات الجمع والطرح',
        count: 14,
        image: 'https://images.unsplash.com/photo-1564428190747-75f3dd3efb58?w=300',
        getQuestions: () => [
          { id: 'ch5_15', type: 'info', question_ar: 'المعادلة جملة مفتوحة تحتوي علامة (=). لحلها: نعزل المتغير في طرف. إذا كان + في طرف المتغير نطرح، وإذا كان − نجمع، وإذا كان × نقسم، وإذا كان ÷ نضرب. نعمل نفس العمل للطرفين.', explanation_ar: 'الحل: اعكس العملية لإعازلة المتغير.' },
          { id: 'ch5_16', type: 'multiple_choice', question_ar: 'حل: س + ٨ = ١٥', options_ar: ['س = ٧', 'س = ٢٣', 'س = ٨', 'س = ١٥'], correct_index: 0, explanation_ar: 'اطرح ٨: س = ١٥ − ٨ = ٧.', page_number: 165 },
          { id: 'ch5_17', type: 'multiple_choice', question_ar: 'حل: ن − ٥ = ١٢', options_ar: ['ن = ١٧', 'ن = ٧', 'ن = ٦٠', 'ن = ١٠'], correct_index: 0, explanation_ar: 'اجمع ٥: ن = ١٢ + ٥ = ١٧.' },
          { id: 'ch5_18', type: 'multiple_choice', question_ar: 'حل: ٤م = ٢٤', options_ar: ['م = ٦', 'م = ٤', 'م = ٢٠', 'م = ٩٦'], correct_index: 0, explanation_ar: 'قسم على ٤: م = ٢٤ ÷ ٤ = ٦.' },
          { id: 'ch5_19', type: 'true_false', question_ar: 'حل المعادلة س ÷ ٣ = ٩ هو س = ٣.', correct_answer: 'false', explanation_ar: 'اضرب في ٣: س = ٩ × ٣ = ٢٧. ليس ٣. خطأ.' },
          { id: 'ch5_20', type: 'multiple_choice', question_ar: 'حل: س ÷ ٥ = ٨', options_ar: ['س = ٤٠', 'س = ١٣', 'س = ٣', 'س = ٤٥'], correct_index: 0, explanation_ar: 'اضرب في ٥: س = ٨ × ٥ = ٤٠.' },
          { id: 'ch5_21', type: 'fill_blank', question_ar: 'حل: ٣س = ٢٧ → س = ___', options_ar: ['٩', '٣', '٢٤', '٨١'], correct_index: 0, explanation_ar: '٢٧ ÷ ٣ = ٩.' },
          { id: 'ch5_22', type: 'multiple_choice', question_ar: 'حل: س + ١٢ = ٢٠', options_ar: ['س = ٨', 'س = ٣٢', 'س = ٢٤٠', 'س = ١٢'], correct_index: 0, explanation_ar: 'س = ٢٠ − ١٢ = ٨.' },
          { id: 'ch5_23', type: 'multiple_choice', question_ar: 'حل: ٢ن − ٣ = ٧', options_ar: ['ن = ٥', 'ن = ٢', 'ن = ٥', 'ن = ٤'], correct_index: 0, explanation_ar: 'اجمع ٣: ٢ن = ١٠، قسم على ٢: ن = ٥.' },
          { id: 'ch5_24', type: 'true_false', question_ar: 'حل ٥ + س = ٥ هو س = ٠.', correct_answer: 'true', explanation_ar: 'س = ٥ − ٥ = ٠. صحيح.' },
          { id: 'ch5_25', type: 'multiple_choice', question_ar: 'حل: ٦ع = ٤٨', options_ar: ['ع = ٨', 'ع = ٦', 'ع = ٧', 'ع = ٤٢'], correct_index: 0, explanation_ar: 'ع = ٤٨ ÷ ٦ = ٨.' },
          { id: 'ch5_26', type: 'fill_blank', question_ar: 'حل: س ÷ ٤ = ٦ → س = ___', options_ar: ['٢٤', '٢', '١٠', '٤٨'], correct_index: 0, explanation_ar: 'س = ٦ × ٤ = ٢٤.' },
          { id: 'ch5_27', type: 'multiple_choice', question_ar: 'حل: ٣س + ٤ = ١٩', options_ar: ['س = ٥', 'س = ٧', 'س = ٣', 'س = ٦'], correct_index: 0, explanation_ar: 'اطرح ٤: ٣س = ١٥، قسم على ٣: س = ٥.' },
          { id: 'ch5_28', type: 'multiple_choice', question_ar: 'مسألة: عمر سالم س سنة وعمر خالد ٣س. إذا كان عمر خالد ٢٤ فما س؟', options_ar: ['س = ٨', 'س = ٧٢', 'س = ٢١', 'س = ٢٧'], correct_index: 0, explanation_ar: '٣س = ٢٤ → س = ٨.' },
        ],
      },
    ],
  },
];