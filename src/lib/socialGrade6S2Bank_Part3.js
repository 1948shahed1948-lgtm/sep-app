// الدراسات الاجتماعية - الصف السادس الابتدائي
// الوحدتان 5-6: الموقع الجغرافي + الموارد والاقتصاد

export const SOCIAL_G6_S2_UNITS_PART3 = [
  {
    id: 'u5',
    title_ar: 'الموقع الجغرافي',
    subtitle_ar: 'الموقع والحدود والتضاريس والسكان',
    icon: '🗺️',
    color: 'from-amber-500 to-orange-600',
    lessons: [
      {
        id: 'u5l1',
        title_ar: 'الموقع والحدود',
        image: 'https://images.unsplash.com/photo-1589561253898-768105ca91a8?w=400',
        count: 5,
        getQuestions: () => [
          {
            id: 'u5l1q1', type: 'multiple_choice',
            question_ar: 'أين تقع المملكة العربية السعودية جغرافياً؟',
            options_ar: ['في جنوب غرب قارة آسيا', 'في قارة أفريقيا', 'في قارة أوروبا', 'في قارة أستراليا'],
            correct_index: 0,
            explanation_ar: 'تقع المملكة العربية السعودية في الجنوب الغربي من قارة آسيا، في شبه الجزيرة العربية.'
          },
          {
            id: 'u5l1q2', type: 'multiple_choice',
            question_ar: 'ما الحدود البحرية للمملكة من الغرب؟',
            options_ar: ['البحر الأحمر', 'الخليج العربي', 'البحر المتوسط', 'بحر العرب'],
            correct_index: 0,
            explanation_ar: 'يحدها من الغرب البحر الأحمر، ومن الشرق الخليج العربي.'
          },
          {
            id: 'u5l1q3', type: 'true_false',
            question_ar: 'يحدها من الشرق الخليج العربي ومن الغرب البحر الأحمر.',
            correct_answer: 'true',
            explanation_ar: 'المملكة يحيطها البحر الأحمر غرباً والخليج العربي شرقاً.'
          },
          {
            id: 'u5l1q4', type: 'matching',
            question_ar: 'صل الاتجاه بالحدود:',
            pairs_ar: [
              { left: 'الغرب', right: 'البحر الأحمر' },
              { left: 'الشرق', right: 'الخليج العربي' },
              { left: 'الشمال', right: 'الأردن والعراق والكويت' },
              { left: 'الجنوب', right: 'اليمن وعمان' }
            ],
            explanation_ar: 'غرباً البحر الأحمر، شرقاً الخليج، شمالاً الأردن والعراق والكويت، جنوباً اليمن وعمان.'
          },
          {
            id: 'u5l1q5', type: 'classify',
            question_ar: 'صنّف الدول حسب حدودها مع المملكة:',
            categories_ar: ['حدود شمالية', 'حدود جنوبية'],
            items_ar: [
              { text: 'الأردن', correct_category: 0 },
              { text: 'اليمن', correct_category: 1 },
              { text: 'العراق', correct_category: 0 },
              { text: 'عمان', correct_category: 1 },
              { text: 'الكويت', correct_category: 0 }
            ],
            explanation_ar: 'شمالاً: الأردن والعراق والكويت. جنوباً: اليمن وعمان.'
          }
        ]
      },
      {
        id: 'u5l2',
        title_ar: 'التضاريس والمناخ',
        image: 'https://images.unsplash.com/photo-1518684079-3c830dcef090?w=400',
        count: 5,
        getQuestions: () => [
          {
            id: 'u5l2q1', type: 'multiple_choice',
            question_ar: 'ما أكبر منطقة صحراوية في المملكة؟',
            options_ar: ['الربع الخالي', 'صحراء النفود الكبير', 'صحراء الدهناء', 'صحراء الحرة'],
            correct_index: 0,
            explanation_ar: 'الربع الخالي أكبر صحراء رملية متصلة في المملكة وفي العالم.'
          },
          {
            id: 'u5l2q2', type: 'multiple_choice',
            question_ar: 'أين توجد أعلى المرتفعات الجبلية في المملكة؟',
            options_ar: ['في جنوب غرب المملكة (جبال السروات)', 'في الشرق', 'في وسط الرياض', 'في تبوك'],
            correct_index: 0,
            explanation_ar: 'تمتد جبال السروات في جنوب غرب المملكة وهي أعلى المرتفعات كجبل السودة.'
          },
          {
            id: 'u5l2q3', type: 'true_false',
            question_ar: 'يتميز مناخ المملكة بأنه صحراوي حار جاف صيفاً.',
            correct_answer: 'true',
            explanation_ar: 'مناخ المملكة صحراوي: حار جاف صيفاً وبارد شتاءً مع أمطار قليلة.'
          },
          {
            id: 'u5l2q4', type: 'matching',
            question_ar: 'صل التضاريس بموقعها:',
            pairs_ar: [
              { left: 'جبال السروات', right: 'جنوب غرب المملكة' },
              { left: 'الربع الخالي', right: 'جنوب المملكة' },
              { left: 'النفود الكبير', right: 'شمال المملكة' },
              { left: 'السهل الساحلي', right: 'غرب المملكة على البحر الأحمر' }
            ],
            explanation_ar: 'السروات جنوب غرب، الربع الخالي جنوب، النفود شمال، السهل الساحلي غرب.'
          },
          {
            id: 'u5l2q5', type: 'classify',
            question_ar: 'صنّف التضاريس حسب نوعها:',
            categories_ar: ['جبال', 'صحارٍ رملية', 'سهول'],
            items_ar: [
              { text: 'جبال السروات', correct_category: 0 },
              { text: 'الربع الخالي', correct_category: 1 },
              { text: 'سهل تهامة', correct_category: 2 },
              { text: 'النفود الكبير', correct_category: 1 },
              { text: 'جبل السودة', correct_category: 0 }
            ],
            explanation_ar: 'الجبال: السروات والسودة. الصحارى: الربع الخالي والنفود. السهول: تهامة.'
          }
        ]
      },
      {
        id: 'u5l3',
        title_ar: 'السكان في وطني',
        image: 'https://images.unsplash.com/photo-1532375810709-75b1da0051cd?w=400',
        count: 5,
        getQuestions: () => [
          {
            id: 'u5l3q1', type: 'multiple_choice',
            question_ar: 'أين يتركز معظم سكان المملكة العربية السعودية؟',
            options_ar: ['في المدن الكبرى', 'في الصحاري', 'في الجبال فقط', 'في الربع الخالي'],
            correct_index: 0,
            explanation_ar: 'يتركز معظم سكان المملكة في المدن الكبرى كالرياض وجدة ومكة والمدينة والدمام.'
          },
          {
            id: 'u5l3q2', type: 'multiple_choice',
            question_ar: 'ما أكبر مدن المملكة من حيث عدد السكان؟',
            options_ar: ['الرياض', 'تبوك', 'حائل', 'جازان'],
            correct_index: 0,
            explanation_ar: 'الرياض أكبر مدن المملكة سكاناً وعاصمتها الإدارية.'
          },
          {
            id: 'u5l3q3', type: 'true_false',
            question_ar: 'تتنوع أنماط السكن في المملكة بين مدن وقرى وهجر وبادية.',
            correct_answer: 'true',
            explanation_ar: 'يتنوع السكن في المملكة بين المدن والقرى والهجر والبادية وإن قلّ البدو حالياً.'
          },
          {
            id: 'u5l3q4', type: 'ordering',
            question_ar: 'رتب مدن المملكة من الأكبر سكاناً إلى الأصغر (تقديرياً):',
            items_ar: ['الرياض', 'جدة', 'مكة المكرمة', 'المدينة المنورة'],
            explanation_ar: 'الرياض أكبرها ثم جدة ثم مكة ثم المدينة تقديرياً.'
          },
          {
            id: 'u5l3q5', type: 'classify',
            question_ar: 'صنّف أنماط السكن حسب نوعها:',
            categories_ar: ['حضر', 'ريف', 'بادية'],
            items_ar: [
              { text: 'مدينة الرياض', correct_category: 0 },
              { text: 'قرية زراعية في الأحساء', correct_category: 1 },
              { text: 'خيام البادية', correct_category: 2 },
              { text: 'مدينة جدة', correct_category: 0 },
              { text: 'هجرة في الصحراء', correct_category: 2 }
            ],
            explanation_ar: 'المدن = حضر، القرى = ريف، الخيام والهجر = بادية.'
          }
        ]
      }
    ]
  },
  {
    id: 'u6',
    title_ar: 'الموارد والاقتصاد',
    subtitle_ar: 'الموارد الطبيعية والاقتصاد ورؤية 2030',
    icon: '💎',
    color: 'from-purple-600 to-pink-600',
    lessons: [
      {
        id: 'u6l1',
        title_ar: 'الموارد الطبيعية',
        image: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400',
        count: 5,
        getQuestions: () => [
          {
            id: 'u6l1q1', type: 'multiple_choice',
            question_ar: 'ما أهم مورد طبيعي في المملكة العربية السعودية؟',
            options_ar: ['النفط', 'الذهب', 'الأخشاب', 'الأسماك'],
            correct_index: 0,
            explanation_ar: 'النفط أهم مورد طبيعي في المملكة وأكبر مصدر دخل قومي.'
          },
          {
            id: 'u6l1q2', type: 'multiple_choice',
            question_ar: 'أين توجد أكبر حقول النفط في المملكة؟',
            options_ar: ['المنطقة الشرقية', 'تبوك', 'أبها', 'حائل'],
            correct_index: 0,
            explanation_ar: 'تقع أكبر حقول النفط في المنطقة الشرقية كحقل الغوار وهو أكبر حقل نفط في العالم.'
          },
          {
            id: 'u6l1q3', type: 'true_false',
            question_ar: 'من الموارد الطبيعية في المملكة: النفط والغاز والمياه والمعادن.',
            correct_answer: 'true',
            explanation_ar: 'تتنوع الموارد الطبيعية: النفط والغاز والمياه الجوفية والمعادن كالذهب والفوسفات.'
          },
          {
            id: 'u6l1q4', type: 'matching',
            question_ar: 'صل المورد بموقع وجوده:',
            pairs_ar: [
              { left: 'النفط', right: 'المنطقة الشرقية' },
              { left: 'الذهب', right: 'مهد الذهب (المدينة المنورة)' },
              { left: 'الفوسفات', right: 'الشمال (الجوف وتبوك)' },
              { left: 'الغاز', right: 'مصاحب للنفط شرقاً' }
            ],
            explanation_ar: 'النفط شرقاً، الذهب في مهد، الفوسفات شمالاً، الغاز مع النفط.'
          },
          {
            id: 'u6l1q5', type: 'classify',
            question_ar: 'صنّف الموارد حسب نوعها:',
            categories_ar: ['موارد متجددة', 'موارد غير متجددة'],
            items_ar: [
              { text: 'المياه الجوفية (محدودة)', correct_category: 1 },
              { text: 'النفط', correct_category: 1 },
              { text: 'الطاقة الشمسية', correct_category: 0 },
              { text: 'الذهب', correct_category: 1 },
              { text: 'الطاقة الريحية', correct_category: 0 }
            ],
            explanation_ar: 'غير المتجددة: النفط والذهب والمياه (محدودة). المتجددة: الشمسية والريحية.'
          }
        ]
      },
      {
        id: 'u6l2',
        title_ar: 'الموارد الاقتصادية',
        image: 'https://images.unsplash.com/photo-1450101219322-64320fa857d2?w=400',
        count: 5,
        getQuestions: () => [
          {
            id: 'u6l2q1', type: 'multiple_choice',
            question_ar: 'ما أهم قطاع اقتصادي في المملكة حالياً؟',
            options_ar: ['قطاع النفط والطاقة', 'السياحة', 'الزراعة', 'الصيد'],
            correct_index: 0,
            explanation_ar: 'قطاع النفط والطاقة هو العمود الفقري للاقتصاد السعودي وأكبر مصدر دخل.'
          },
          {
            id: 'u6l2q2', type: 'multiple_choice',
            question_ar: 'أي القطاعات تسعى المملكة لتطويرها لتنويع الدخل؟',
            options_ar: ['السياحة والترفيه والصناعة', 'صيد الأسماك فقط', 'الرعي', 'الصيد التقليدي'],
            correct_index: 0,
            explanation_ar: 'تسعى المركة لتنويع مصادر الدخل عبر السياحة والترفيه والصناعة والتعدين.'
          },
          {
            id: 'u6l2q3', type: 'true_false',
            question_ar: 'تسعى المملكة إلى تنويع مصادر الدخل وتقليل الاعتماد على النفط.',
            correct_answer: 'true',
            explanation_ar: 'تسعى رؤية 2030 إلى تنويع الاقتصاد وتقليل الاعتماد على النفط كمصدر وحيد.'
          },
          {
            id: 'u6l2q4', type: 'ordering',
            question_ar: 'رتب القطاعات الاقتصادية من الأكبر إسهاماً في الناتج المحلي حالياً:',
            items_ar: ['النفط والصناعات البترولية', 'الخدمات والتجارة', 'الصناعة التحويلية', 'السياحة والترفيه'],
            explanation_ar: 'النفط أولاً ثم الخدمات ثم الصناعة ثم السياحة الناشئة.'
          },
          {
            id: 'u6l2q5', type: 'classify',
            question_ar: 'صنّف الأنشطة حسب القطاع الاقتصادي:',
            categories_ar: ['صناعي', 'زراعي', 'خدمي'],
            items_ar: [
              { text: 'تكرير النفط', correct_category: 0 },
              { text: 'زراعة التمور', correct_category: 1 },
              { text: 'الخدمات الصحية', correct_category: 2 },
              { text: 'تصنيع البتروكيماويات', correct_category: 0 },
              { text: 'الضيافة والفنادق', correct_category: 2 }
            ],
            explanation_ar: 'التكرير والبتروكيماويات = صناعي، التمور = زراعي، الصحة والضيافة = خدمي.'
          }
        ]
      },
      {
        id: 'u6l3',
        title_ar: 'رؤية 2030',
        image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=400',
        count: 5,
        getQuestions: () => [
          {
            id: 'u6l3q1', type: 'multiple_choice',
            question_ar: 'ما رؤية المملكة المستقبلية المعتمدة عام 2016م؟',
            options_ar: ['رؤية 2030', 'رؤية 2050', 'رؤية 2020', 'رؤية 2040'],
            correct_index: 0,
            explanation_ar: 'رؤية المملكة العربية السعودية 2030 أُطلقت عام 2016م تحت قيادة الأمير محمد بن سلمان.'
          },
          {
            id: 'u6l3q2', type: 'multiple_choice',
            question_ar: 'من مهندس رؤية 2030 وقائدها؟',
            options_ar: ['الأمير محمد بن سلمان', 'الملك فهد', 'الملك عبدالله', 'الأمير نايف'],
            correct_index: 0,
            explanation_ar: 'سمو الأمير محمد بن سلمان ولي العهد هو مهندس رؤية 2030 وقائدها.'
          },
          {
            id: 'u6l3q3', type: 'true_false',
            question_ar: 'من أهداف رؤية 2030 تنويع مصادر الدخل وتقليل الاعتماد على النفط.',
            correct_answer: 'true',
            explanation_ar: 'تنويع مصادر الدخل وتقليل الاعتماد على النفط من أهم محاور رؤية 2030.'
          },
          {
            id: 'u6l3q4', type: 'matching',
            question_ar: 'صل المشروع بهدفه في الرؤية:',
            pairs_ar: [
              { left: 'نيوم', right: 'مدينة مستقبلية ذكية' },
              { left: 'القدية', right: 'أكبر وجهة ترفيهية' },
              { left: 'البحر الأحمر', right: 'وجهة سياحية فاخرة' },
              { left: 'روشن', right: 'تطوير وسط الرياض' }
            ],
            explanation_ar: 'نيوم مدينة ذكية، القدية للترفيه، البحر الأحمر سياحة فاخرة، روشن لتطوير الرياض.'
          },
          {
            id: 'u6l3q5', type: 'ordering',
            question_ar: 'رتب محاور رؤية 2030 الثلاثة:',
            items_ar: ['مجتمع حيوي', 'اقتصاد مزدهر', 'وطن طموح'],
            explanation_ar: 'تقوم الرؤية على ثلاثة محاور: مجتمع حيوي، اقتصاد مزدهر، وطن طموح.'
          }
        ]
      }
    ]
  }
];

export const SOCIAL_G6_S2_TOTAL_PART3 = SOCIAL_G6_S2_UNITS_PART3.reduce(
  (s, u) => s + u.lessons.reduce((sl, l) => sl + l.count, 0),
  0
);