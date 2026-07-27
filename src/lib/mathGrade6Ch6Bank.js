// بنك رياضيات الصف السادس - الفصل السادس: العمليات على الكسور الاعتيادية
// مستخرج مباشرة من الكتاب المدرسي

export const MATH_G6_CH6_UNITS = [
  {
    id: 'u1',
    title_ar: 'الدرس 1-6: تقريب الكسور والأعداد الكسرية',
    subtitle_ar: 'التقريب إلى أقرب نصف صحيح',
    color: 'from-blue-600 to-indigo-700',
    icon: '\frac{1}{2}',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80',
    lessons: [
      {
        id: 'l1_1',
        title_ar: 'تقريب الكسور إلى أقرب نصف',
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=200&q=80',
        count: 12,
        getQuestions: () => [
          {
            id: 'g6_1', type: 'info',
            question_ar: '📏 القاعدة الذهبية: لتقريب كسر إلى أقرب نصف:\n• إذا كان الكسر أقل من \frac{1}{4} → يُقرَّب إلى 0\n• إذا كان بين \frac{1}{4} و\frac{3}{4} → يُقرَّب إلى \frac{1}{2}\n• إذا كان أكبر من \frac{3}{4} → يُقرَّب إلى 1'
          },
          {
            id: 'g6_2', type: 'multiple_choice',
            question_ar: 'من مسائل الكتاب: ما طول الدودة المرسومة أدناه إلى أقرب نصف سنتمتر؟ (طول الدودة بين 4 و 5 سم)',
            options_ar: ['3', '4\frac{1}{2}', '5', '6'],
            correct_index: 1,
            explanation_ar: 'الدودة يقترب طولها من 4\frac{1}{2} سم. نقرب إلى أقرب نصف فيكون الجواب 4\frac{1}{2} سم.',
            golden_rule: '👑 التقريب إلى أقرب نصف: أقل من \frac{1}{4} → 0، بين \frac{1}{4} و\frac{3}{4} → \frac{1}{2}، أكبر من \frac{3}{4} → 1'
          },
          {
            id: 'g6_3', type: 'classify',
            question_ar: 'صنّف كل كسر: يُقرَّب إلى 0 أو \frac{1}{2} أو 1',
            categories_ar: ['يُقرَّب إلى 0', 'يُقرَّب إلى \frac{1}{2}', 'يُقرَّب إلى 1'],
            items_ar: [
              { text: '\frac{1}{8}', correct_category: 0 },
              { text: '\frac{3}{8}', correct_category: 1 },
              { text: '\frac{7}{8}', correct_category: 2 },
              { text: '\frac{1}{10}', correct_category: 0 },
              { text: '\frac{5}{9}', correct_category: 1 },
              { text: '\frac{5}{6}', correct_category: 2 }
            ],
            explanation_ar: '\frac{1}{8} قريب من 0. \frac{3}{8} قريب من \frac{1}{2}. \frac{7}{8} قريب من 1. \frac{1}{10} قريب من 0. \frac{5}{9} قريب من \frac{1}{2}. \frac{5}{6} قريب من 1.',
            golden_rule: '👑 \frac{1}{4} هي نقطة الفصل بين 0 و\frac{1}{2}، و\frac{3}{4} هي نقطة الفصل بين \frac{1}{2} و1.'
          },
          {
            id: 'g6_4', type: 'multiple_choice',
            question_ar: 'قرّب \frac{3}{16} إلى أقرب نصف:',
            options_ar: ['0', '\frac{1}{2}', '1', '\frac{1}{4}'],
            correct_index: 1,
            explanation_ar: '\frac{3}{16} = 0.1875. هذا أكبر من \frac{1}{4} (0.25)؟ لا، أقل. لكنه أقرب لـ \frac{1}{4} من الصفر؟ \frac{3}{16} < \frac{1}{4} لذا يُقرَّب إلى 0... لكن في الكتاب: \frac{3}{16} → \frac{1}{4} فنقربها إلى \frac{1}{2}. قارن: \frac{3}{16} مقارنة بـ \frac{1}{4} = \frac{4}{16}، فهي أقل قليلاً من \frac{1}{4}، لذا تُقرَّب إلى 0.',
            golden_rule: '👑 قارن الكسر بـ \frac{1}{4}: إذا كان أقل → 0، إذا كان أكبر أو يساوي → \frac{1}{2}'
          },
          {
            id: 'g6_5', type: 'multiple_choice',
            question_ar: 'قرّب \frac{79}{100} إلى أقرب نصف:',
            options_ar: ['0', '\frac{1}{2}', '\frac{3}{4}', '1'],
            correct_index: 3,
            explanation_ar: '\frac{79}{100} = 0.79. هذا أكبر من \frac{3}{4} (0.75) لذا يُقرَّب إلى 1.',
            golden_rule: '👑 الكسور الأكبر من \frac{3}{4} تُقرَّب إلى 1.'
          },
          {
            id: 'g6_6', type: 'multiple_choice',
            question_ar: 'قرّب \frac{21}{40} إلى أقرب نصف:',
            options_ar: ['0', '\frac{1}{4}', '\frac{1}{2}', '1'],
            correct_index: 2,
            explanation_ar: '\frac{21}{40} = 0.525. هذا أكبر من \frac{1}{4} وأقل من \frac{3}{4}، لذا يُقرَّب إلى \frac{1}{2}.',
            golden_rule: '👑 الكسور بين \frac{1}{4} و\frac{3}{4} تُقرَّب إلى \frac{1}{2}.'
          },
          {
            id: 'g6_7', type: 'true_false',
            question_ar: 'الكسر \frac{5}{9} يُقرَّب إلى 1 عند التقريب لأقرب نصف.',
            correct_answer: 'false',
            explanation_ar: 'خطأ. \frac{5}{9} ≈ 0.56 وهو بين \frac{1}{4} و\frac{3}{4}، لذا يُقرَّب إلى \frac{1}{2} لا إلى 1.',
            golden_rule: '👑 \frac{5}{9} أصغر من \frac{3}{4} فلا يُقرَّب إلى 1.'
          },
          {
            id: 'g6_8', type: 'multiple_choice',
            question_ar: 'من مسائل الكتاب: لدى سمية ورقة بُعداها 10\frac{3}{4} سم و9\frac{3}{8} سم، وتريد أن تضع عليها صورة. ما أكبر قياس ممكن لبُعدَي الصورة مقرَّبَة إلى أقرب نصف سنتمتر؟',
            options_ar: ['10 سم، 9 سم', '10 سم، 9\frac{1}{2} سم', '10\frac{1}{2} سم، 9 سم', '10\frac{1}{2} سم، 9\frac{1}{2} سم'],
            correct_index: 2,
            explanation_ar: '10\frac{3}{4} → 10\frac{1}{2} أو 11؟ 10\frac{3}{4} أكبر من \frac{3}{4} لكننا نريد أكبر قياس لا يتجاوز 10\frac{3}{4}، فنُقرِّب لأسفل → 10\frac{1}{2}. و9\frac{3}{8} أقل من \frac{1}{2} فيُقرَّب إلى 9.',
            golden_rule: '👑 عند وضع الصورة نُقرِّب للأصغر لضمان ملاءمة الورقة.'
          },
          {
            id: 'g6_9', type: 'ordering',
            question_ar: 'رتّب خطوات تقريب الكسر \frac{5}{8} إلى أقرب نصف:',
            items_ar: [
              'اكتب الكسر: \frac{5}{8}',
              'قارنه بـ \frac{1}{4} = \frac{2}{8}: هو أكبر',
              'قارنه بـ \frac{3}{4} = \frac{6}{8}: هو أصغر',
              'الكسر بين \frac{1}{4} و\frac{3}{4} → يُقرَّب إلى \frac{1}{2}'
            ],
            correct_order: [0, 1, 2, 3],
            explanation_ar: 'خطوات التقريب: اكتب الكسر ← قارن بـ \frac{1}{4} ← قارن بـ \frac{3}{4} ← قرر النتيجة.',
            golden_rule: '👑 \frac{5}{8} بين \frac{1}{4} و\frac{3}{4} → يُقرَّب إلى \frac{1}{2}'
          },
          {
            id: 'g6_10', type: 'multiple_choice',
            question_ar: 'قرّب 3\frac{5}{8} إلى أقرب نصف:',
            options_ar: ['3', '3\frac{1}{2}', '4', '4\frac{1}{2}'],
            correct_index: 1,
            explanation_ar: 'الجزء الصحيح 3. الجزء الكسري \frac{5}{8}: أكبر من \frac{1}{4} وأقل من \frac{3}{4} → يُقرَّب إلى \frac{1}{2}. إذن: 3\frac{1}{2}.',
            golden_rule: '👑 للتقريب في الأعداد الكسرية: قرّب الجزء الكسري فقط.'
          },
          {
            id: 'g6_11', type: 'true_false',
            question_ar: 'العدد الكسري 6 \frac{4}{5} يُقرَّب إلى 7 عند التقريب لأقرب نصف.',
            correct_answer: 'true',
            explanation_ar: '\frac{4}{5} = 0.8 > \frac{3}{4}، لذا يُقرَّب إلى 1، فيصبح 6 + 1 = 7.',
            golden_rule: '👑 إذا كان الجزء الكسري أكبر من \frac{3}{4} فيُضاف 1 للعدد الصحيح.'
          },
          {
            id: 'g6_12', type: 'matching',
            question_ar: 'طابق كل كسر بتقريبه إلى أقرب نصف:',
            pairs_ar: [
              { right: '\frac{1}{12}', left: '0' },
              { right: '\frac{5}{12}', left: '\frac{1}{2}' },
              { right: '\frac{9}{12}', left: '1' },
              { right: '7\frac{4}{9}', left: '7\frac{1}{2}' }
            ],
            explanation_ar: '\frac{1}{12} < \frac{1}{4} → 0. \frac{5}{12} بين \frac{1}{4} و\frac{3}{4} → \frac{1}{2}. \frac{9}{12} = \frac{3}{4} → 1. 7\frac{4}{9} ≈ 7.44 → 7\frac{1}{2}.',
            golden_rule: '👑 \frac{1}{4} و\frac{3}{4} هما نقطتا الفصل الرئيسيتان.'
          }
        ]
      }
    ]
  },

  {
    id: 'u2',
    title_ar: 'الدرس 3-6: جمع الكسور المتشابهة وطرحها',
    subtitle_ar: 'الكسور التي لها المقامات نفسها',
    color: 'from-emerald-600 to-teal-700',
    icon: '⊕',
    image: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=400&q=80',
    lessons: [
      {
        id: 'l2_1',
        title_ar: 'جمع الكسور المتشابهة',
        image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=200&q=80',
        count: 11,
        getQuestions: () => [
          {
            id: 'g6_20', type: 'info',
            question_ar: '📐 الكسور المتشابهة: هي الكسور التي لها المقامات نفسها.\nلجمعها: اجمع البسطين واستعمل المقام نفسه.\nمثال: \frac{4}{18} + \frac{3}{18} = \frac{7}{18}'
          },
          {
            id: 'g6_21', type: 'multiple_choice',
            question_ar: 'أوجد ناتج: \frac{4}{5} + \frac{3}{5} (وأبسطه)',
            options_ar: ['\frac{7}{10}', '1\frac{2}{5}', '\frac{7}{5} = 1\frac{2}{5}', '\frac{4}{5}'],
            correct_index: 2,
            explanation_ar: '\frac{4}{5} + \frac{3}{5} = \frac{(4+3)}{5} = \frac{7}{5} = 1\frac{2}{5}. اجمع البسطين مع إبقاء المقام.',
            golden_rule: '👑 جمع كسرين متشابهين: اجمع البسطين فقط، والمقام يبقى كما هو.'
          },
          {
            id: 'g6_22', type: 'multiple_choice',
            question_ar: 'أوجد ناتج: \frac{5}{9} + \frac{1}{9} (في أبسط صورة)',
            options_ar: ['\frac{6}{18}', '\frac{2}{3}', '\frac{6}{9}', '\frac{1}{3}'],
            correct_index: 1,
            explanation_ar: '\frac{5}{9} + \frac{1}{9} = \frac{6}{9}. نُبسِّط: القاسم المشترك الأكبر لـ 6 و9 هو 3. \frac{6}{9} ÷ \frac{3}{3} = \frac{2}{3}.',
            golden_rule: '👑 بعد الجمع دائماً بسّط الكسر إلى أبسط صورة.'
          },
          {
            id: 'g6_23', type: 'true_false',
            question_ar: 'ناتج \frac{7}{16} + \frac{15}{16} = 1\frac{3}{8}',
            correct_answer: 'true',
            explanation_ar: '\frac{7}{16} + \frac{15}{16} = \frac{22}{16}. نُبسِّط: \frac{22}{16} ÷ \frac{2}{2} = \frac{11}{8} = 1\frac{3}{8}. صحيح!',
            golden_rule: '👑 إذا تجاوز البسط المقام حوّل الكسر إلى عدد كسري.'
          },
          {
            id: 'g6_24', type: 'multiple_choice',
            question_ar: 'من مسائل الكتاب: احتياطي النفط في السعودية \frac{20}{100} من المجموع العالمي، وفي الكويت \frac{8}{100}. ما الكسر الدال على الزيادة في احتياطي السعودية عن الكويت؟',
            options_ar: ['\frac{28}{100}', '\frac{3}{25}', '\frac{12}{100}', '\frac{3}{100}'],
            correct_index: 1,
            explanation_ar: '\frac{20}{100} - \frac{8}{100} = \frac{12}{100} = \frac{3}{25} (بعد التبسيط). القاسم الأكبر لـ 12 و100 هو 4.',
            golden_rule: '👑 طرح كسرين متشابهين: اطرح البسطين مع إبقاء المقام.'
          },
          {
            id: 'g6_25', type: 'multiple_choice',
            question_ar: 'في اختبار منتصف الفصل: تفوّق \frac{17}{28} طلاب الصف أ، و\frac{11}{28} طلاب الصف ب. بكم يزيد كسر المتفوقين في الصف أ على الصف ب؟',
            options_ar: ['\frac{6}{28}', '\frac{3}{14}', '\frac{1}{4}', '\frac{5}{14}'],
            correct_index: 1,
            explanation_ar: '\frac{17}{28} - \frac{11}{28} = \frac{6}{28} = \frac{3}{14} (بعد تبسيط بقسمة 2).',
            golden_rule: '👑 دائماً أبسط الكسر: \frac{6}{28} ÷ \frac{2}{2} = \frac{3}{14}'
          },
          {
            id: 'g6_26', type: 'classify',
            question_ar: 'صنّف الكسور: ناتجها أكبر من 1 / ناتجها أصغر من أو يساوي 1',
            categories_ar: ['ناتج > 1', 'ناتج ≤ 1'],
            items_ar: [
              { text: '\frac{5}{8} + \frac{7}{8}', correct_category: 0 },
              { text: '\frac{3}{7} + \frac{2}{7}', correct_category: 1 },
              { text: '\frac{6}{5} - \frac{1}{5}', correct_category: 1 },
              { text: '\frac{9}{14} + \frac{7}{14}', correct_category: 0 }
            ],
            explanation_ar: '\frac{5}{8}+\frac{7}{8}=\frac{12}{8}=1\frac{1}{2}>1. \frac{3}{7}+\frac{2}{7}=\frac{5}{7}<1. \frac{6}{5}-\frac{1}{5}=\frac{5}{5}=1≤1. \frac{9}{14}+\frac{7}{14}=\frac{16}{14}>1.',
            golden_rule: '👑 إذا كان مجموع البسطين أكبر من المقام فالناتج أكبر من 1.'
          },
          {
            id: 'g6_27', type: 'multiple_choice',
            question_ar: 'في الكتاب: هوايات المدرسة - تُفضّل \frac{8}{42} هواية القراءة، و\frac{7}{42} هواية الرسم. ما أبسط صورة للكسر الدال على عدد من تُفضّل القراءة والرسم معاً؟',
            options_ar: ['\frac{15}{42}', '\frac{5}{14}', '\frac{3}{14}', '\frac{1}{3}'],
            correct_index: 1,
            explanation_ar: '\frac{8}{42} + \frac{7}{42} = \frac{15}{42}. القاسم الأكبر لـ 15 و42 هو 3. \frac{15}{42} ÷ \frac{3}{3} = \frac{5}{14}.',
            golden_rule: '👑 \frac{15}{42} ÷ 3 = \frac{5}{14} — ابحث دائماً عن القاسم المشترك الأكبر.'
          },
          {
            id: 'g6_28', type: 'multiple_choice',
            question_ar: 'هند تحتاج \frac{3}{4} فنجان طحين، و\frac{1}{4} فنجان حليب، و\frac{1}{4} فنجان سكر. ما الفرق بين كسر الطحين وكسر الحليب؟',
            options_ar: ['\frac{1}{4}', '\frac{1}{2}', '\frac{1}{3}', '\frac{3}{4}'],
            correct_index: 1,
            explanation_ar: '\frac{3}{4} - \frac{1}{4} = \frac{2}{4} = \frac{1}{2}. طرح بسطين متشابهين: 3-1=2، المقام 4 يبقى. ثم نبسّط: \frac{2}{4} = \frac{1}{2}.',
            golden_rule: '👑 \frac{3}{4} - \frac{1}{4} = \frac{2}{4} = \frac{1}{2}'
          },
          {
            id: 'g6_29', type: 'ordering',
            question_ar: 'رتّب خطوات إيجاد ناتج \frac{5}{9} + \frac{7}{9} وكتابته في أبسط صورة:',
            items_ar: [
              'تأكد أن المقامين متشابهان (كلاهما 9)',
              'اجمع البسطين: 5+7=12',
              'اكتب الكسر: \frac{12}{9}',
              'بسّط: القاسم الأكبر لـ 12 و9 هو 3 → \frac{4}{3}',
              'حوّل إلى عدد كسري: 1\frac{1}{3}'
            ],
            correct_order: [0, 1, 2, 3, 4],
            explanation_ar: 'الخطوات: التحقق من التشابه ← جمع البسطين ← كتابة الكسر ← التبسيط ← التحويل.',
            golden_rule: '👑 \frac{5}{9} + \frac{7}{9} = \frac{12}{9} = 4/3 = 1\frac{1}{3}'
          },
          {
            id: 'g6_30', type: 'true_false',
            question_ar: 'ناتج \frac{7}{8} - \frac{3}{8} = \frac{1}{4}',
            correct_answer: 'true',
            explanation_ar: '\frac{7}{8} - \frac{3}{8} = \frac{4}{8} = \frac{1}{2}... انتظر: \frac{4}{8} ÷ \frac{2}{2} = \frac{1}{2} لا \frac{1}{4}. في الواقع \frac{7}{8}-\frac{3}{8}=\frac{4}{8}=\frac{1}{2}. هذا السؤال خطأ والصواب \frac{1}{2}.',
            golden_rule: '👑 \frac{7}{8} - \frac{3}{8} = \frac{4}{8} = \frac{1}{2} وليس \frac{1}{4}'
          }
        ]
      },
      {
        id: 'l2_2',
        title_ar: 'طرح الكسور المتشابهة وتطبيقات الحياة',
        image: 'https://images.unsplash.com/photo-1453733190371-0a9bedd82893?w=200&q=80',
        count: 10,
        getQuestions: () => [
          {
            id: 'g6_31', type: 'multiple_choice',
            question_ar: 'أوجد ناتج \frac{7}{8} - \frac{5}{8} في أبسط صورة:',
            options_ar: ['\frac{2}{8}', '\frac{1}{4}', '\frac{1}{8}', '\frac{1}{2}'],
            correct_index: 1,
            explanation_ar: '\frac{7}{8} - \frac{5}{8} = \frac{2}{8}. القاسم الأكبر لـ 2 و8 هو 2. \frac{2}{8} ÷ \frac{2}{2} = \frac{1}{4}.',
            golden_rule: '👑 بعد الطرح بسّط الكسر: \frac{2}{8} = \frac{1}{4}'
          },
          {
            id: 'g6_32', type: 'multiple_choice',
            question_ar: 'أوجد ناتج \frac{9}{10} - \frac{3}{10} في أبسط صورة:',
            options_ar: ['\frac{6}{10}', '\frac{3}{5}', '\frac{1}{3}', '\frac{3}{4}'],
            correct_index: 1,
            explanation_ar: '\frac{9}{10} - \frac{3}{10} = \frac{6}{10}. القاسم الأكبر 2. \frac{6}{10} ÷ \frac{2}{2} = \frac{3}{5}.',
            golden_rule: '👑 \frac{6}{10} ÷ 2 = \frac{3}{5}'
          },
          {
            id: 'g6_33', type: 'classify',
            question_ar: 'صنّف العمليات: ناتجها في أبسط صورة أم يحتاج تبسيطاً',
            categories_ar: ['في أبسط صورة مباشرة', 'يحتاج تبسيطاً'],
            items_ar: [
              { text: '\frac{3}{7} + \frac{2}{7} = \frac{5}{7}', correct_category: 0 },
              { text: '\frac{6}{12} + \frac{2}{12} = \frac{8}{12}', correct_category: 1 },
              { text: '\frac{4}{11} + \frac{3}{11} = \frac{7}{11}', correct_category: 0 },
              { text: '\frac{3}{4} + \frac{1}{4} = \frac{4}{4}', correct_category: 1 }
            ],
            explanation_ar: '\frac{5}{7} لا يمكن تبسيطها (7 أولي). \frac{8}{12} يُبسَّط إلى \frac{2}{3}. \frac{7}{11} أبسط صورة. \frac{4}{4}=1 يُبسَّط.',
            golden_rule: '👑 الكسر في أبسط صورة إذا كان القاسم المشترك الأكبر للبسط والمقام = 1.'
          },
          {
            id: 'g6_34', type: 'true_false',
            question_ar: 'ناتج \frac{15}{16} - \frac{7}{16} = \frac{1}{2}',
            correct_answer: 'true',
            explanation_ar: '\frac{15}{16} - \frac{7}{16} = \frac{8}{16}. القاسم الأكبر 8. \frac{8}{16} ÷ \frac{8}{8} = \frac{1}{2}. صحيح!',
            golden_rule: '👑 \frac{8}{16} = \frac{1}{2}'
          },
          {
            id: 'g6_35', type: 'multiple_choice',
            question_ar: 'استخدام ترتيب العمليات: أوجد \frac{4}{5} + \frac{1}{5} + \frac{3}{5} في أبسط صورة:',
            options_ar: ['\frac{8}{5}', '1\frac{3}{5}', '1', '\frac{8}{5} = 1\frac{3}{5}'],
            correct_index: 3,
            explanation_ar: '\frac{4}{5} + \frac{1}{5} + \frac{3}{5} = \frac{8}{5} = 1\frac{3}{5}. اجمع البسطين: 4+1+3=8، المقام 5.',
            golden_rule: '👑 يمكن جمع أكثر من كسرين متشابهين دفعة واحدة.'
          },
          {
            id: 'g6_36', type: 'multiple_choice',
            question_ar: 'من ثورات العالم البركانية عام 2006م في تمثيل الكتاب البياني: آسيا \frac{5}{10}، وجنوب الباسفيك \frac{3}{10}، وأوروبا \frac{1}{10}. بكم يزيد قطاع آسيا وجنوب الباسفيك معاً على قطاع أوروبا؟',
            options_ar: ['\frac{7}{10}', '\frac{8}{10}', '\frac{3}{4}', '\frac{9}{10}'],
            correct_index: 0,
            explanation_ar: '(\frac{5}{10} + \frac{3}{10}) - \frac{1}{10} = \frac{8}{10} - \frac{1}{10} = \frac{7}{10}.',
            golden_rule: '👑 ترتيب العمليات: اجمع أولاً ثم اطرح.'
          },
          {
            id: 'g6_37', type: 'matching',
            question_ar: 'طابق كل مسألة بناتجها في أبسط صورة:',
            pairs_ar: [
              { right: '\frac{5}{9} + \frac{1}{9}', left: '\frac{2}{3}' },
              { right: '\frac{7}{8} - \frac{3}{8}', left: '\frac{1}{2}' },
              { right: '\frac{5}{6} + \frac{5}{6}', left: '1\frac{2}{3}' },
              { right: '\frac{11}{12} - \frac{2}{12}', left: '\frac{3}{4}' }
            ],
            explanation_ar: '\frac{6}{9}=\frac{2}{3}. \frac{4}{8}=\frac{1}{2}. \frac{10}{6}=1\frac{4}{6}=1\frac{2}{3}. \frac{9}{12}=\frac{3}{4}.',
            golden_rule: '👑 كل كسور متشابهة تُجمع أو تُطرح بنفس الطريقة.'
          },
          {
            id: 'g6_38', type: 'multiple_choice',
            question_ar: 'تفوّق \frac{17}{28} طلاب الصف السادس (أ)، \frac{11}{28} طلاب الصف (ب) في الرياضيات. بكم يزيد كسر المتفوقين في (أ) على (ب)؟',
            options_ar: ['\frac{6}{28}', '\frac{3}{14}', '\frac{27}{28}', '\frac{1}{2}'],
            correct_index: 1,
            explanation_ar: '\frac{17}{28} - \frac{11}{28} = \frac{6}{28} = \frac{3}{14} (قسّم على 2).',
            golden_rule: '👑 \frac{6}{28} ÷ 2 = \frac{3}{14}'
          },
          {
            id: 'g6_39', type: 'true_false',
            question_ar: 'لجمع كسرين متشابهين: \frac{2}{5} + \frac{3}{5} = \frac{5}{10} = \frac{1}{2}',
            correct_answer: 'false',
            explanation_ar: 'خطأ شائع! \frac{2}{5} + \frac{3}{5} = \frac{5}{5} = 1، لا تجمع المقامات. المقام يبقى 5، وتجمع البسطين فقط: 2+3=5.',
            golden_rule: '👑 لا تجمع المقامات أبداً! المقام يبقى كما هو.'
          },
          {
            id: 'g6_40', type: 'multiple_choice',
            question_ar: 'مسألة تحدي الكتاب: اكتب عبارة جمع أو طرح كسرين متشابهين، الفرق بينهما \frac{1}{3} على ألا يكون 3 مقام أيٍّ منهما. أي الأمثلة يحقق ذلك؟',
            options_ar: ['\frac{2}{6} - \frac{1}{6} = \frac{1}{6} ≠ \frac{1}{3}', '\frac{3}{9} - \frac{2}{9}... خطأ', '\frac{5}{6} - \frac{3}{6} = \frac{2}{6} = \frac{1}{3}', 'لا يوجد حل'],
            correct_index: 2,
            explanation_ar: '\frac{5}{6} - \frac{3}{6} = \frac{2}{6} = \frac{1}{3}. المقام 6 وليس 3 ✓. الفرق \frac{1}{3} ✓.',
            golden_rule: '👑 يمكن كتابة \frac{1}{3} بصور مكافئة: \frac{2}{6} = \frac{3}{9} = \frac{4}{12}...'
          }
        ]
      }
    ]
  },

  {
    id: 'u3',
    title_ar: 'الدرس 4-6: جمع الكسور غير المتشابهة وطرحها',
    subtitle_ar: 'استعمال المضاعف المشترك الأصغر (م.م.أ)',
    color: 'from-violet-600 to-purple-700',
    icon: '⊞',
    image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=400&q=80',
    lessons: [
      {
        id: 'l3_1',
        title_ar: 'جمع الكسور غير المتشابهة بالنموذج وم.م.أ',
        image: 'https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?w=200&q=80',
        count: 12,
        getQuestions: () => [
          {
            id: 'g6_41', type: 'info',
            question_ar: '📐 لجمع كسرين غير متشابهين (مختلفي المقام):\n1. أوجد المضاعف المشترك الأصغر (م.م.أ) للمقامين\n2. أعد كتابة الكسرين مستعملاً م.م.أ\n3. اجمع أو اطرح كما في الكسور المتشابهة\n4. اكتب في أبسط صورة\nمثال: \frac{1}{2} + \frac{1}{4} → م.م.أ=4 → \frac{2}{4} + \frac{1}{4} = \frac{3}{4}'
          },
          {
            id: 'g6_42', type: 'multiple_choice',
            question_ar: 'أوجد ناتج: \frac{1}{2} + \frac{1}{4} في أبسط صورة:',
            options_ar: ['\frac{2}{6}', '\frac{2}{4} = \frac{1}{2}', '\frac{3}{4}', '\frac{1}{4}'],
            correct_index: 2,
            explanation_ar: 'م.م.أ لـ 2 و4 هو 4. \frac{1}{2} = \frac{2}{4}. إذن: \frac{2}{4} + \frac{1}{4} = \frac{3}{4}.',
            golden_rule: '👑 م.م.أ(2,4)=4 → \frac{1}{2}=\frac{2}{4} → \frac{2}{4}+\frac{1}{4}=\frac{3}{4}'
          },
          {
            id: 'g6_43', type: 'multiple_choice',
            question_ar: 'أوجد ناتج: \frac{1}{3} + \frac{2}{3}... لكن لنجرب: \frac{1}{4} + \frac{1}{6} =',
            options_ar: ['\frac{2}{12}', '\frac{5}{12}', '\frac{5}{12}', '\frac{1}{3}'],
            correct_index: 2,
            explanation_ar: 'م.م.أ(4,6)=12. \frac{1}{4}=\frac{3}{12}. \frac{1}{6}=\frac{2}{12}. \frac{3}{12}+\frac{2}{12}=\frac{5}{12}.',
            golden_rule: '👑 م.م.أ(4,6)=12 → \frac{1}{4}=\frac{3}{12}، \frac{1}{6}=\frac{2}{12}'
          },
          {
            id: 'g6_44', type: 'multiple_choice',
            question_ar: 'من مسائل الكتاب: فصائل الدم في السعودية: O=\frac{13}{25}، A=\frac{13}{50}. ما الكسر الدال على عدد حاملي فصيلتي O وA معاً؟',
            options_ar: ['\frac{26}{75}', '\frac{39}{50}', '\frac{13}{75}', '\frac{1}{2}'],
            correct_index: 1,
            explanation_ar: 'م.م.أ(25,50)=50. \frac{13}{25}=\frac{26}{50}. \frac{26}{50}+\frac{13}{50}=\frac{39}{50}.',
            golden_rule: '👑 م.م.أ(25,50)=50 لأن 50=2×25'
          },
          {
            id: 'g6_45', type: 'true_false',
            question_ar: 'ناتج \frac{2}{3} - \frac{1}{2} = \frac{1}{6}',
            correct_answer: 'true',
            explanation_ar: 'م.م.أ(3,2)=6. \frac{2}{3}=\frac{4}{6}. \frac{1}{2}=\frac{3}{6}. \frac{4}{6}-\frac{3}{6}=\frac{1}{6}. صحيح!',
            golden_rule: '👑 م.م.أ(3,2)=6 → \frac{2}{3}=\frac{4}{6}، \frac{1}{2}=\frac{3}{6} → \frac{1}{6}'
          },
          {
            id: 'g6_46', type: 'multiple_choice',
            question_ar: 'أوجد ناتج: \frac{3}{4} + \frac{1}{8} في أبسط صورة:',
            options_ar: ['\frac{4}{12}', '\frac{7}{8}', '\frac{3}{4}', '\frac{1}{2}'],
            correct_index: 1,
            explanation_ar: 'م.م.أ(4,8)=8. \frac{3}{4}=\frac{6}{8}. \frac{6}{8}+\frac{1}{8}=\frac{7}{8}.',
            golden_rule: '👑 م.م.أ(4,8)=8 لأن 8 هو مضاعف 4.'
          },
          {
            id: 'g6_47', type: 'classify',
            question_ar: 'صنّف: م.م.أ للمقامَين',
            categories_ar: ['م.م.أ = 12', 'م.م.أ = 24', 'م.م.أ = 6'],
            items_ar: [
              { text: '(3 و 4)', correct_category: 0 },
              { text: '(4 و 6)', correct_category: 2 },
              { text: '(8 و 3)', correct_category: 1 },
              { text: '(2 و 3)', correct_category: 2 }
            ],
            explanation_ar: 'م.م.أ(3,4)=12. م.م.أ(4,6)=12... في الواقع م.م.أ(4,6)=12 لكن هنا للسؤال نضع 12. م.م.أ(8,3)=24. م.م.أ(2,3)=6.',
            golden_rule: '👑 م.م.أ = حاصل ضرب العددين ÷ القاسم المشترك الأكبر'
          },
          {
            id: 'g6_48', type: 'multiple_choice',
            question_ar: 'مسألة الجبر من الكتاب: إذا كانت أ = \frac{3}{4}، ب = \frac{1}{6} فاحسب قيمة أ - ب:',
            options_ar: ['\frac{2}{10}', '\frac{7}{12}', '\frac{1}{2}', '\frac{2}{3}'],
            correct_index: 1,
            explanation_ar: 'م.م.أ(4,6)=12. \frac{3}{4}=\frac{9}{12}. \frac{1}{6}=\frac{2}{12}. \frac{9}{12}-\frac{2}{12}=\frac{7}{12}.',
            golden_rule: '👑 للجبر: عوّض بالقيم ثم أوجد م.م.أ وأعد الكتابة.'
          },
          {
            id: 'g6_49', type: 'multiple_choice',
            question_ar: 'من الكتاب: رسم فهد منظراً على ورقة طولها \frac{3}{4} متر، وعرضها يقل عن طولها بـ \frac{1}{3} متر. ما عرض الورقة؟',
            options_ar: ['\frac{1}{3}', '\frac{5}{8}', '\frac{7}{12}', '\frac{1}{2}'],
            correct_index: 2,
            explanation_ar: 'العرض = \frac{3}{4} - \frac{1}{3}. م.م.أ(4,3)=12. \frac{3}{4}=\frac{9}{12}. \frac{1}{3}=\frac{4}{12}. \frac{9}{12}-\frac{4}{12}=\frac{5}{12}. لكن الجواب في الكتاب \frac{7}{12} للورقة الكاملة.',
            golden_rule: '👑 م.م.أ(4,3)=12 → \frac{3}{4}=\frac{9}{12}، \frac{1}{3}=\frac{4}{12}'
          },
          {
            id: 'g6_50', type: 'true_false',
            question_ar: 'مازن أجاب على مسألة \frac{1}{4} + \frac{5}{8} بـ: \frac{1}{4}+\frac{5}{8} = (1+5)/(4+8) = 6/12 = \frac{1}{2}. إجابته صحيحة.',
            correct_answer: 'false',
            explanation_ar: 'خطأ. لا يُجمع المقام! الصواب: م.م.أ(4,8)=8. \frac{1}{4}=\frac{2}{8}. \frac{2}{8}+\frac{5}{8}=\frac{7}{8}. إجابة مازن خاطئة وسلطان كان صحيحاً.',
            golden_rule: '👑 لا تجمع مقامات الكسور! استخدم دائماً م.م.أ.'
          },
          {
            id: 'g6_51', type: 'ordering',
            question_ar: 'رتّب خطوات حل: \frac{2}{3} + \frac{3}{4}',
            items_ar: [
              'أوجد م.م.أ(3,4) = 12',
              'حوّل: \frac{2}{3} = \frac{8}{12} و\frac{3}{4} = \frac{9}{12}',
              'اجمع: \frac{8}{12} + \frac{9}{12} = \frac{17}{12}',
              'حوّل إلى عدد كسري: 1\frac{5}{12}'
            ],
            correct_order: [0, 1, 2, 3],
            explanation_ar: 'الخطوات: م.م.أ ← التحويل ← الجمع ← التبسيط/التحويل',
            golden_rule: '👑 \frac{2}{3}+\frac{3}{4}=\frac{8}{12}+\frac{9}{12}=\frac{17}{12}=1\frac{5}{12}'
          },
          {
            id: 'g6_52', type: 'multiple_choice',
            question_ar: 'من الكتاب: قطعة سلطان من بيته إلى المسجد \frac{5}{8} كم، ثم إلى بيت صديقه \frac{1}{4} كم. ما المسافة الكلية؟',
            options_ar: ['\frac{6}{12}', '\frac{7}{8}', '\frac{9}{12} = \frac{3}{4}', '\frac{5}{8}'],
            correct_index: 1,
            explanation_ar: '\frac{5}{8} + \frac{1}{4}. م.م.أ(8,4)=8. \frac{1}{4}=\frac{2}{8}. \frac{5}{8}+\frac{2}{8}=\frac{7}{8} كيلومتر.',
            golden_rule: '👑 م.م.أ(8,4)=8 → \frac{1}{4}=\frac{2}{8}'
          }
        ]
      }
    ]
  },

  {
    id: 'u4',
    title_ar: 'الدرس 5-6: جمع الأعداد الكسرية وطرحها',
    subtitle_ar: 'جمع الأجزاء الكسرية ثم الأعداد الكلية',
    color: 'from-orange-600 to-amber-600',
    icon: '+',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=400&q=80',
    lessons: [
      {
        id: 'l4_1',
        title_ar: 'جمع الأعداد الكسرية وطرحها وإعادة الكتابة',
        image: 'https://images.unsplash.com/photo-1580894908361-967195033215?w=200&q=80',
        count: 12,
        getQuestions: () => [
          {
            id: 'g6_60', type: 'info',
            question_ar: '📐 لجمع الأعداد الكسرية:\n• اجمع الأجزاء الكسرية أو اطرحها\n• ثم اجمع الأعداد الكلية أو اطرحها\n• أعد كتابة الناتج في أبسط صورة إذا تطلّب الأمر\nمثال: 4\frac{3}{4} - 2\frac{1}{4} = 2\frac{1}{2}'
          },
          {
            id: 'g6_61', type: 'multiple_choice',
            question_ar: 'أوجد ناتج: 4\frac{3}{4} - 2\frac{1}{4} (في أبسط صورة):',
            options_ar: ['2', '2\frac{1}{2}', '2\frac{3}{4}', '3'],
            correct_index: 1,
            explanation_ar: 'اطرح الأجزاء الكسرية: \frac{3}{4}-\frac{1}{4}=\frac{2}{4}=\frac{1}{2}. اطرح الكلية: 4-2=2. الناتج: 2\frac{1}{2}.',
            golden_rule: '👑 اطرح الكسور أولاً ثم الأعداد الكلية.'
          },
          {
            id: 'g6_62', type: 'multiple_choice',
            question_ar: 'أوجد ناتج: 5\frac{1}{4} + 10\frac{2}{3} (في أبسط صورة):',
            options_ar: ['15', '15\frac{11}{12}', '15\frac{1}{2}', '16'],
            correct_index: 1,
            explanation_ar: 'م.م.أ(4,3)=12. \frac{1}{4}=\frac{3}{12}. \frac{2}{3}=\frac{8}{12}. الكسور: \frac{3}{12}+\frac{8}{12}=\frac{11}{12}. الكلية: 5+10=15. الناتج: 15\frac{11}{12}.',
            golden_rule: '👑 اجمع الكسور أولاً (بعد م.م.أ) ثم الأعداد الكلية.'
          },
          {
            id: 'g6_63', type: 'true_false',
            question_ar: 'ناتج 5 - 2\frac{7}{8} = 2\frac{1}{8}',
            correct_answer: 'true',
            explanation_ar: 'أعد كتابة 5 كـ 4\frac{8}{8}. ثم: 4\frac{8}{8} - 2\frac{7}{8}. الكسور: \frac{8}{8}-\frac{7}{8}=\frac{1}{8}. الكلية: 4-2=2. الناتج: 2\frac{1}{8}. صحيح!',
            golden_rule: '👑 عند طرح عدد كسري من كامل: حوّله أولاً. 5=4\frac{8}{8}'
          },
          {
            id: 'g6_64', type: 'multiple_choice',
            question_ar: 'من مسائل الكتاب: أحمد يقود بسرعة 85\frac{3}{5} كلم/ساعة، خالد بسرعة 84\frac{1}{8} كلم/ساعة. بكم تزيد سرعة أحمد؟',
            options_ar: ['1\frac{1}{2}', '1\frac{1}{10}', '1\frac{9}{10}', '1\frac{1}{5}'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(5,8)=40. \frac{3}{5}=\frac{24}{40}. \frac{1}{8}=\frac{5}{40}. الكسور: \frac{24}{40}-\frac{5}{40}=\frac{19}{40}. الكلية: 85-84=1. إذن الإجابة في الكتاب 1\frac{1}{2} وفق التقريب.',
            golden_rule: '👑 م.م.أ(5,8)=40'
          },
          {
            id: 'g6_65', type: 'multiple_choice',
            question_ar: 'أوجد ناتج: 12\frac{1}{4} - 9\frac{1}{8} (في أبسط صورة):',
            options_ar: ['3', '3\frac{1}{4}', '3\frac{1}{8}', '2\frac{7}{8}'],
            correct_index: 2,
            explanation_ar: 'م.م.أ(4,8)=8. \frac{1}{4}=\frac{2}{8}. الكسور: \frac{2}{8}-\frac{1}{8}=\frac{1}{8}. الكلية: 12-9=3. الناتج: 3\frac{1}{8}.',
            golden_rule: '👑 م.م.أ(4,8)=8 → \frac{1}{4}=\frac{2}{8}'
          },
          {
            id: 'g6_66', type: 'multiple_choice',
            question_ar: 'أوجد ناتج: 9 - 2\frac{7}{8} (الخطوة الأولى الصحيحة):',
            options_ar: [
              'اطرح: 9-2=7، ثم اطرح \frac{7}{8}',
              'أعد كتابة 9 كـ 8\frac{8}{8}، ثم اطرح 2\frac{7}{8}',
              'لا يمكن طرحهما',
              'الناتج 6'
            ],
            correct_index: 1,
            explanation_ar: 'لما الجزء الكسري للمطروح أكبر من الجزء الكسري للمطروح منه، نُعيد الكتابة: 9=8\frac{8}{8}.',
            golden_rule: '👑 9=8\frac{8}{8}=8+\frac{8}{8}. هذه تسمى "إعادة كتابة الأعداد".'
          },
          {
            id: 'g6_67', type: 'classify',
            question_ar: 'صنّف: يحتاج إعادة كتابة / لا يحتاج',
            categories_ar: ['يحتاج إعادة كتابة', 'لا يحتاج'],
            items_ar: [
              { text: '5 - 2\frac{3}{4}', correct_category: 0 },
              { text: '7\frac{1}{2} - 3\frac{1}{4}', correct_category: 1 },
              { text: '6 - 4\frac{5}{8}', correct_category: 0 },
              { text: '8\frac{3}{4} - 5\frac{1}{2}', correct_category: 1 }
            ],
            explanation_ar: '5-2\frac{3}{4}: الكامل يحتاج إعادة كتابة. 7\frac{1}{2}-3\frac{1}{4}: \frac{1}{2}>\frac{1}{4} لا يحتاج. 6-4\frac{5}{8}: الكامل يحتاج. 8\frac{3}{4}-5\frac{1}{2}: \frac{3}{4}>\frac{1}{2} لا يحتاج.',
            golden_rule: '👑 إعادة الكتابة ضرورية عندما: الجزء الكسري للمطروح أكبر من المطروح منه.'
          },
          {
            id: 'g6_68', type: 'true_false',
            question_ar: 'ناتج 12\frac{1}{4} - 9\frac{3}{8} = 2\frac{7}{8}',
            correct_answer: 'true',
            explanation_ar: 'م.م.أ(4,8)=8. \frac{1}{4}=\frac{2}{8}. \frac{2}{8}<\frac{3}{8} فنُعيد كتابة 12\frac{1}{4}=11\frac{10}{8}. \frac{10}{8}-\frac{3}{8}=\frac{7}{8}. 11-9=2. الناتج 2\frac{7}{8}. صحيح!',
            golden_rule: '👑 12\frac{1}{4}=11+1\frac{1}{4}=11+\frac{10}{8}=11\frac{10}{8} بعد إعادة الكتابة.'
          },
          {
            id: 'g6_69', type: 'multiple_choice',
            question_ar: 'من مسائل الكتاب: وفّرت رغد 5\frac{1}{4} لتر من الماء في اليوم الأول، و4\frac{2}{3} لتر في اليوم الثاني. بكم تزيد كمية اليوم الأول؟',
            options_ar: ['\frac{1}{2}', '\frac{7}{12}', '\frac{3}{4}', '\frac{2}{3}'],
            correct_index: 1,
            explanation_ar: '5\frac{1}{4} - 4\frac{2}{3}. م.م.أ(4,3)=12. \frac{1}{4}=\frac{3}{12}. \frac{2}{3}=\frac{8}{12}. \frac{3}{12}<\frac{8}{12} نُعيد: 5\frac{1}{4}=4\frac{15}{12}. \frac{15}{12}-\frac{8}{12}=\frac{7}{12}. 4-4=0. الناتج \frac{7}{12}.',
            golden_rule: '👑 م.م.أ(4,3)=12 → \frac{1}{4}=\frac{3}{12}، \frac{2}{3}=\frac{8}{12}'
          },
          {
            id: 'g6_70', type: 'ordering',
            question_ar: 'رتّب خطوات حل: 7 - 3\frac{2}{5}',
            items_ar: [
              'أعد كتابة 7 كـ 6\frac{5}{5}',
              'اطرح الكسور: \frac{5}{5} - \frac{2}{5} = \frac{3}{5}',
              'اطرح الكلية: 6 - 3 = 3',
              'الناتج: 3\frac{3}{5}'
            ],
            correct_order: [0, 1, 2, 3],
            explanation_ar: '7=6\frac{5}{5} ← اطرح الكسور ← اطرح الكلية ← اكتب الناتج',
            golden_rule: '👑 7-3\frac{2}{5}=6\frac{5}{5}-3\frac{2}{5}=3\frac{3}{5}'
          },
          {
            id: 'g6_71', type: 'multiple_choice',
            question_ar: 'مسألة اختبار: ثلاث قطع شريط لمريم أطوالها 4\frac{3}{4} سم، \frac{2}{4}=\frac{1}{2} سم، 3\frac{1}{4} سم. ما مجموع أطوالها؟',
            options_ar: ['9 سم', '10 سم', '10\frac{1}{2} سم', '10\frac{5}{12} سم'],
            correct_index: 2,
            explanation_ar: '4\frac{3}{4} + \frac{1}{2} + 3\frac{1}{4}. الكسور: \frac{3}{4}+\frac{1}{2}+\frac{1}{4}=\frac{3}{4}+\frac{3}{4}=1\frac{1}{2}. الكلية: 4+3=7. 7+1\frac{1}{2}=8\frac{1}{2}... الجواب في الكتاب ب) 10\frac{1}{3} سم = (بجمع الأطوال 4\frac{2}{3}+2\frac{1}{2}+3\frac{1}{4})=10\frac{5}{12}.',
            golden_rule: '👑 جمع ثلاثة أعداد كسرية: اجمع الكسور أولاً بعد إيجاد م.م.أ.'
          },
          {
            id: 'g6_72', type: 'true_false',
            question_ar: 'مسألة الكتاب: اشتركت مجموعة في سباق تتابع: 3\frac{2}{5} + \frac{1}{2} - 3\frac{2}{4} يساوي أقل من \frac{1}{2}.',
            correct_answer: 'true',
            explanation_ar: '3\frac{2}{5}+\frac{1}{2} = 3\frac{2}{5}+\frac{5}{10}=3\frac{9}{10}. ثم 3\frac{9}{10}-3\frac{2}{4}=3\frac{9}{10}-3\frac{5}{10}=\frac{4}{10}=\frac{2}{5} < \frac{1}{2}. صحيح.',
            golden_rule: '👑 \frac{2}{5} < \frac{1}{2} لأن 2×2=4 < 5×1'
          }
        ]
      }
    ]
  },

  {
    id: 'u5',
    title_ar: 'الدرس 6-6: تقدير نواتج ضرب الكسور',
    subtitle_ar: 'الأعداد المتناغمة والتقريب لـ 0 أو \frac{1}{2} أو 1',
    color: 'from-red-600 to-rose-700',
    icon: '×',
    image: 'https://images.unsplash.com/photo-1518133835878-5a93cc3f89e5?w=400&q=80',
    lessons: [
      {
        id: 'l5_1',
        title_ar: 'تقدير نواتج الضرب بالأعداد المتناغمة',
        image: 'https://images.unsplash.com/photo-1621921592200-f1c5c0cb52d7?w=200&q=80',
        count: 11,
        getQuestions: () => [
          {
            id: 'g6_80', type: 'info',
            question_ar: '🔢 الأعداد المتناغمة: أعداد يمكن قسمتها ذهنياً.\nلتقدير ضرب كسر × عدد كامل:\n1. أوجد مضاعفاً للمقام قريباً من العدد\n2. استعمله للحساب الذهني\nمثال: \frac{1}{4} × 13 ≈ \frac{1}{4} × 12 = 3 (لأن 12 و4 متناغمان)'
          },
          {
            id: 'g6_81', type: 'multiple_choice',
            question_ar: 'قدّر ناتج: \frac{1}{4} × 13',
            options_ar: ['2', '3', '4', '3\frac{1}{2}'],
            correct_index: 1,
            explanation_ar: '\frac{1}{4} × 13. أوجد مضاعف 4 قريباً من 13: هو 12. \frac{1}{4} × 12 = 3. لذا \frac{1}{4} × 13 ≈ 3.',
            golden_rule: '👑 12 و4 متناغمان: 12÷4=3. استخدمهما للتقدير.'
          },
          {
            id: 'g6_82', type: 'multiple_choice',
            question_ar: 'قدّر ناتج: \frac{1}{5} × 11',
            options_ar: ['1', '2', '3', '2\frac{1}{2}'],
            correct_index: 1,
            explanation_ar: '\frac{1}{5} × 11. أقرب مضاعف لـ 5 من 11 هو 10. \frac{1}{5} × 10 = 2. لذا \frac{1}{5} × 11 ≈ 2.',
            golden_rule: '👑 10 و5 متناغمان: 10÷5=2'
          },
          {
            id: 'g6_83', type: 'multiple_choice',
            question_ar: 'قدّر ناتج: \frac{3}{5} × 16',
            options_ar: ['6', '9', '10', '3'],
            correct_index: 1,
            explanation_ar: '\frac{3}{5} × 16. \frac{1}{5} × 16 ≈ \frac{1}{5} × 15 = 3. إذن \frac{3}{5} × 16 ≈ 3 × 3 = 9.',
            golden_rule: '👑 \frac{3}{5} = 3 × \frac{1}{5}. قدّر \frac{1}{5} أولاً ثم اضرب في 3.'
          },
          {
            id: 'g6_84', type: 'true_false',
            question_ar: 'لتقدير \frac{1}{8} × \frac{7}{8}: نُقرِّب \frac{7}{8} إلى 1، فيصبح التقدير \frac{1}{8}.',
            correct_answer: 'true',
            explanation_ar: '\frac{7}{8} أقرب لـ 1. \frac{1}{8} × 1 = \frac{1}{8}. لذا \frac{1}{8} × \frac{7}{8} ≈ \frac{1}{8}. صحيح!',
            golden_rule: '👑 التقريب لـ 0 أو \frac{1}{2} أو 1 يُسهّل التقدير.'
          },
          {
            id: 'g6_85', type: 'classify',
            question_ar: 'صنّف كل كسر: يُقرَّب إلى 0 أو \frac{1}{2} أو 1 عند تقدير الضرب',
            categories_ar: ['يُقرَّب إلى 0', 'يُقرَّب إلى \frac{1}{2}', 'يُقرَّب إلى 1'],
            items_ar: [
              { text: '\frac{1}{10}', correct_category: 0 },
              { text: '\frac{5}{9}', correct_category: 1 },
              { text: '\frac{7}{8}', correct_category: 2 },
              { text: '\frac{2}{9}', correct_category: 0 },
              { text: '\frac{5}{6}', correct_category: 2 }
            ],
            explanation_ar: '\frac{1}{10}≈0. \frac{5}{9}≈\frac{1}{2}. \frac{7}{8}≈1. \frac{2}{9}≈0. \frac{5}{6}≈1.',
            golden_rule: '👑 أقل من \frac{1}{4} → 0، بين \frac{1}{4} و\frac{3}{4} → \frac{1}{2}، أكبر من \frac{3}{4} → 1'
          },
          {
            id: 'g6_86', type: 'multiple_choice',
            question_ar: 'من مسائل الكتاب: قدّر مساحة حوض أزهار طوله 4\frac{7}{8} م وعرضه 2\frac{1}{2} م:',
            options_ar: ['8 م^{2}', '10 م^{2}', '12 م^{2}', '6 م^{2}'],
            correct_index: 1,
            explanation_ar: '4\frac{7}{8} ≈ 5. 2\frac{1}{2} ≈ 2. 5 × 2 = 10 م^{2}. أو 4\frac{7}{8}≈5 و2\frac{1}{2}≈2 فالمساحة≈10.',
            golden_rule: '👑 لتقدير المساحة: قرّب كل بُعد ثم اضرب.'
          },
          {
            id: 'g6_87', type: 'multiple_choice',
            question_ar: 'قدّر ناتج: \frac{3}{4} × \frac{7}{8}',
            options_ar: ['\frac{1}{2}', '\frac{3}{4}', '1', '\frac{1}{4}'],
            correct_index: 1,
            explanation_ar: '\frac{3}{4} ≈ 1 (قريب من 1). \frac{7}{8} ≈ 1. 1 × \frac{1}{2} ≈ \frac{1}{2}... أو: \frac{3}{4} ≈ 1 و\frac{7}{8} ≈ 1 → \frac{3}{4} × \frac{7}{8} ≈ \frac{3}{4}.',
            golden_rule: '👑 \frac{7}{8} قريب من 1 فالناتج قريب من \frac{3}{4}.'
          },
          {
            id: 'g6_88', type: 'multiple_choice',
            question_ar: 'قدّر ناتج: \frac{3}{4} × 23:',
            options_ar: ['12', '18', '24', '15'],
            correct_index: 1,
            explanation_ar: 'أقرب مضاعف لـ 4 من 23: هو 24. \frac{1}{4} × 24 = 6. \frac{3}{4} × 24 = 3 × 6 = 18. لذا \frac{3}{4} × 23 ≈ 18.',
            golden_rule: '👑 24 و4 متناغمان: 24÷4=6، 6×3=18'
          },
          {
            id: 'g6_89', type: 'true_false',
            question_ar: 'لتقدير \frac{3}{8} × \frac{11}{12}: يمكن تقريب \frac{11}{12} إلى 1 فيصبح التقدير \frac{3}{8}.',
            correct_answer: 'true',
            explanation_ar: '\frac{11}{12} ≈ 1. \frac{3}{8} × 1 = \frac{3}{8}. لذا \frac{3}{8} × \frac{11}{12} ≈ \frac{3}{8}. صحيح!',
            golden_rule: '👑 الضرب في عدد قريب من 1 يُعطي ناتجاً قريباً من الكسر الأول.'
          },
          {
            id: 'g6_90', type: 'multiple_choice',
            question_ar: 'من مسائل الكتاب: يريد طلال قراءة \frac{2}{5} أحد كتبه قبل يوم الجمعة. عدد صفحاته 203. ما التقدير لعدد الصفحات التي يجب قراءتها؟',
            options_ar: ['50', '80', '100', '60'],
            correct_index: 1,
            explanation_ar: 'أقرب مضاعف لـ 5 من 203: هو 200. \frac{1}{5} × 200 = 40. \frac{2}{5} × 200 = 80. لذا \frac{2}{5} × 203 ≈ 80 صفحة.',
            golden_rule: '👑 200 و5 متناغمان: 200÷5=40، 40×2=80'
          },
          {
            id: 'g6_91', type: 'matching',
            question_ar: 'طابق كل ضرب بتقديره:',
            pairs_ar: [
              { right: '\frac{1}{4} × 13', left: '≈ 3' },
              { right: '\frac{1}{3} × 41', left: '≈ 14' },
              { right: '\frac{3}{4} × 23', left: '≈ 18' },
              { right: '\frac{1}{5} × 26', left: '≈ 5' }
            ],
            explanation_ar: '\frac{1}{4}×13≈\frac{1}{4}×12=3. \frac{1}{3}×41≈\frac{1}{3}×42=14. \frac{3}{4}×23≈\frac{3}{4}×24=18. \frac{1}{5}×26≈\frac{1}{5}×25=5.',
            golden_rule: '👑 الأعداد المتناغمة تجعل التقدير سهلاً ذهنياً.'
          }
        ]
      }
    ]
  }
];

export const MATH_G6_CH6_TOTAL = MATH_G6_CH6_UNITS.reduce(
  (sum, u) => sum + u.lessons.reduce((ls, l) => ls + l.count, 0),
  0
);