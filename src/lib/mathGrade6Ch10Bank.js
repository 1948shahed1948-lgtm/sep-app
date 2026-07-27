// بنك رياضيات الصف السادس - الفصل العاشر: القياس — المحيط والمساحة والحجم
// مستخرج مباشرة من الكتاب المدرسي صفحات 164-175

export const MATH_G6_CH10_UNITS = [
  {
    id: 'u1',
    title_ar: 'الدرس 1-10: محيط الدائرة',
    subtitle_ar: 'القطر، نصف القطر، الوتر، π، صيغة المحيط',
    color: 'from-teal-700 to-cyan-800',
    icon: '⭕',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&q=80',
    lessons: [
      {
        id: 'l1_1',
        title_ar: 'مفاهيم الدائرة: القطر ونصف القطر',
        image: 'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=200&q=80',
        count: 12,
        getQuestions: () => [
          {
            id: 'ch10a_1', type: 'info',
            question_ar: '⭕ الدائرة: مجموعة النقاط في المستوى التي لها البُعد نفسه عن نقطة معلومة تُسمّى المركز.\n• الوتر: أية قطعة مستقيمة طرفاها على الدائرة.\n• القطر (ق): الوتر الأطول، يمر بالمركز. ق = 2 × نق\n• نصف القطر (نق): المسافة من المركز إلى الدائرة. نق = ق ÷ 2'
          },
          {
            id: 'ch10a_2', type: 'multiple_choice',
            question_ar: 'من مثال الكتاب (1): أوجد نصف قطر دائرة قطرها 14 سم.',
            options_ar: ['5 سم', '7 سم', '14 سم', '28 سم'],
            correct_index: 1,
            explanation_ar: 'نق = ق ÷ 2 = 14 ÷ 2 = 7 سم.',
            golden_rule: '👑 نق = ق ÷ 2'
          },
          {
            id: 'ch10a_3', type: 'multiple_choice',
            question_ar: 'من مثال الكتاب (2): أوجد قطر دائرة نصف قطرها 8 م.',
            options_ar: ['4 م', '8 م', '16 م', '24 م'],
            correct_index: 2,
            explanation_ar: 'ق = 2 × نق = 2 × 8 = 16 م.',
            golden_rule: '👑 ق = 2 × نق'
          },
          {
            id: 'ch10a_4', type: 'classify',
            question_ar: 'من الكتاب: صنّف كل قطعة: قطر / نصف قطر / وتر',
            categories_ar: ['قطر', 'نصف قطر', 'وتر'],
            items_ar: [
              { text: 'قطعة تمر بالمركز وتنتهي على الدائرة من طرفيها', correct_category: 0 },
              { text: 'قطعة من المركز إلى نقطة على الدائرة', correct_category: 1 },
              { text: 'قطعة طرفاها على الدائرة ولا تمر بالمركز', correct_category: 2 },
              { text: 'أطول وتر في الدائرة', correct_category: 0 },
              { text: 'نصف القطر', correct_category: 1 }
            ],
            explanation_ar: 'القطر يمر بالمركز وينتهي على الدائرة. نصف القطر من المركز إلى الدائرة. الوتر طرفاه على الدائرة فقط.',
            golden_rule: '👑 القطر = 2 × نصف القطر = أطول وتر'
          },
          {
            id: 'ch10a_5', type: 'multiple_choice',
            question_ar: 'من الكتاب (تأكد): أوجد نصف قطر دائرة قطرها 23 ملم.',
            options_ar: ['46 ملم', '23 ملم', '11.5 ملم', '6 ملم'],
            correct_index: 2,
            explanation_ar: 'نق = 23 ÷ 2 = 11.5 ملم.',
            golden_rule: '👑 نق = ق ÷ 2 = 23 ÷ 2 = 11.5'
          },
          {
            id: 'ch10a_6', type: 'multiple_choice',
            question_ar: 'من الكتاب (تأكد): أوجد قطر دائرة نصف قطرها 3 سم.',
            options_ar: ['1.5 سم', '3 سم', '6 سم', '9 سم'],
            correct_index: 2,
            explanation_ar: 'ق = 2 × 3 = 6 سم.',
            golden_rule: '👑 ق = 2 × نق = 2 × 3 = 6'
          },
          {
            id: 'ch10a_7', type: 'true_false',
            question_ar: 'من الكتاب: القطر يساوي ضعف نصف القطر.',
            correct_answer: 'true',
            explanation_ar: 'صحيح. ق = 2 نق.',
            golden_rule: '👑 ق = 2 نق دائماً'
          },
          {
            id: 'ch10a_8', type: 'multiple_choice',
            question_ar: 'من الكتاب: دائرة قطرها 16 م. ما نصف قطرها؟',
            options_ar: ['4 م', '8 م', '16 م', '32 م'],
            correct_index: 1,
            explanation_ar: 'نق = 16 ÷ 2 = 8 م.',
            golden_rule: '👑 نق = ق ÷ 2 = 16 ÷ 2 = 8'
          },
          {
            id: 'ch10a_9', type: 'true_false',
            question_ar: 'من الكتاب: الوتر الذي يمر بمركز الدائرة هو القطر.',
            correct_answer: 'true',
            explanation_ar: 'صحيح. القطر هو الوتر الأطول الذي يمر بمركز الدائرة.',
            golden_rule: '👑 القطر = الوتر الأطول المار بالمركز'
          },
          {
            id: 'ch10a_10', type: 'multiple_choice',
            question_ar: 'من الكتاب: في الدائرة أدناه مركزها م وقطرها هـ-ع. أيُّ القطع التالية يساوي ½ هـ-ع؟',
            options_ar: ['م-ن', 'ر-ع', 'م-ل', 'م-ر'],
            correct_index: 0,
            explanation_ar: 'م-ن هي نصف القطر = ½ القطر هـ-ع.',
            golden_rule: '👑 نصف القطر = ½ القطر'
          },
          {
            id: 'ch10a_11', type: 'multiple_choice',
            question_ar: 'من الكتاب: قطر دائرة 20 ملم. ما نصف قطرها؟',
            options_ar: ['5 ملم', '10 ملم', '20 ملم', '40 ملم'],
            correct_index: 1,
            explanation_ar: 'نق = 20 ÷ 2 = 10 ملم.',
            golden_rule: '👑 نق = ق ÷ 2'
          },
          {
            id: 'ch10a_12', type: 'multiple_choice',
            question_ar: 'من الكتاب: نصف قطر دائرة 36 ملم. ما قطرها؟',
            options_ar: ['18 ملم', '36 ملم', '72 ملم', '108 ملم'],
            correct_index: 2,
            explanation_ar: 'ق = 2 × 36 = 72 ملم.',
            golden_rule: '👑 ق = 2 × نق = 72 ملم'
          }
        ]
      },
      {
        id: 'l1_2',
        title_ar: 'تقدير محيط الدائرة وإيجاده',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80',
        count: 13,
        getQuestions: () => [
          {
            id: 'ch10b_1', type: 'info',
            question_ar: '⭕ محيط الدائرة:\n• محيط أي دائرة يزيد قليلاً على ثلاثة أمثال قطرها.\n• الحرف اليوناني π (باي) يُعبّر عن هذه النسبة.\n• π ≈ 3.14 (أو 3 للتقدير)\n• الصيغة: مح = ط × ق أو مح = 2 × ط × نق'
          },
          {
            id: 'ch10b_2', type: 'multiple_choice',
            question_ar: 'من الكتاب: قدّر محيط دائرة قطرها 9 سم (استعمل π ≈ 3).',
            options_ar: ['≈ 9 سم', '≈ 18 سم', '≈ 27 سم', '≈ 36 سم'],
            correct_index: 2,
            explanation_ar: 'مح ≈ 3 × 9 = 27 سم.',
            golden_rule: '👑 للتقدير: مح ≈ 3 × ق'
          },
          {
            id: 'ch10b_3', type: 'multiple_choice',
            question_ar: 'من الكتاب: قدّر محيط دائرة نصف قطرها 6 ملم (استعمل π ≈ 3).',
            options_ar: ['≈ 18 ملم', '≈ 36 ملم', '≈ 54 ملم', '≈ 72 ملم'],
            correct_index: 1,
            explanation_ar: 'مح ≈ 2 × 3 × 6 = 36 ملم.',
            golden_rule: '👑 مح = 2 × ط × نق ≈ 2 × 3 × 6 = 36'
          },
          {
            id: 'ch10b_4', type: 'multiple_choice',
            question_ar: 'من مثال الكتاب (5): أوجد محيط دائرة قطرها 4 سم مقرّباً إلى أقرب جزء من عشرة (استعمل π ≈ 3.14).',
            options_ar: ['≈ 10.4 سم', '≈ 12.0 سم', '≈ 12.6 سم', '≈ 14.0 سم'],
            correct_index: 2,
            explanation_ar: 'مح = 3.14 × 4 = 12.56 ≈ 12.6 سم.',
            golden_rule: '👑 مح = π × ق = 3.14 × 4 ≈ 12.6 سم'
          },
          {
            id: 'ch10b_5', type: 'multiple_choice',
            question_ar: 'من الكتاب: أيُّ الصيغ يمكن استعمالها لإيجاد محيط دائرة؟',
            options_ar: ['مح = ق ÷ π', 'مح = π × ق', 'مح = ق + نق', 'مح = ق^{2}'],
            correct_index: 1,
            explanation_ar: 'مح = π × ق أو مح = 2 × π × نق.',
            golden_rule: '👑 مح = π × ق = 2 × π × نق'
          },
          {
            id: 'ch10b_6', type: 'multiple_choice',
            question_ar: 'من مثال الكتاب (6 — من اختبار): تريد آمنة إيجاد نصف قطر كرة الأرض وتعرف محيطها. أيُّ الطرق تستعمل؟',
            options_ar: [
              'ضرب المحيط في π',
              'ضرب المحيط في القطر',
              'قسمة المحيط على π ثم الضرب في 2',
              'قسمة المحيط على π ثم على 2'
            ],
            correct_index: 3,
            explanation_ar: 'مح = 2 π نق → نق = مح ÷ (2π)، أي قسمة المحيط على π ثم على 2.',
            golden_rule: '👑 نق = مح ÷ (2π)'
          },
          {
            id: 'ch10b_7', type: 'true_false',
            question_ar: 'من الكتاب: القيمة الدقيقة لـ π هي 3.14 بالضبط.',
            correct_answer: 'false',
            explanation_ar: 'خطأ. π = 3.1415926... (لانهائية وغير منتهية). 3.14 هي تقريب شائع.',
            golden_rule: '👑 π غير منتهية؛ نستعمل 3.14 تقريباً'
          },
          {
            id: 'ch10b_8', type: 'multiple_choice',
            question_ar: 'من تمرين الكتاب: أوجد محيط دائرة قطرها 28 سم (π ≈ 3.14).',
            options_ar: ['≈ 56 سم', '≈ 75.9 سم', '≈ 87.9 سم', '≈ 113.1 سم'],
            correct_index: 2,
            explanation_ar: 'مح = 3.14 × 28 = 87.92 ≈ 87.9 سم.',
            golden_rule: '👑 مح = π × ق = 3.14 × 28 ≈ 87.9 سم'
          },
          {
            id: 'ch10b_9', type: 'multiple_choice',
            question_ar: 'من تمرين الكتاب: أوجد محيط دائرة نصف قطرها 21 ملم (π ≈ 3.14).',
            options_ar: ['≈ 65.9 ملم', '≈ 87.9 ملم', '≈ 131.9 ملم', '≈ 263.9 ملم'],
            correct_index: 2,
            explanation_ar: 'مح = 2 × 3.14 × 21 = 131.88 ≈ 131.9 ملم.',
            golden_rule: '👑 مح = 2 × π × نق = 2 × 3.14 × 21 ≈ 131.9'
          },
          {
            id: 'ch10b_10', type: 'multiple_choice',
            question_ar: 'من تمرين الكتاب: أوجد محيط دائرة نصف قطرها 35 سم (π ≈ 3.14).',
            options_ar: ['≈ 109.9 سم', '≈ 175.6 سم', '≈ 219.8 سم', '≈ 440 سم'],
            correct_index: 2,
            explanation_ar: 'مح = 2 × 3.14 × 35 = 219.8 سم.',
            golden_rule: '👑 مح = 2 × π × نق = 2 × 3.14 × 35 = 219.8'
          },
          {
            id: 'ch10b_11', type: 'multiple_choice',
            question_ar: 'من الكتاب (براكين): يبلغ قطر فوهة بركان 1.5 كلم تقريباً. أوجد محيطها تقريباً (π ≈ 3.14).',
            options_ar: ['≈ 2.7 كلم', '≈ 4.7 كلم', '≈ 6.3 كلم', '≈ 9.4 كلم'],
            correct_index: 1,
            explanation_ar: 'مح = 3.14 × 1.5 ≈ 4.71 ≈ 4.7 كلم.',
            golden_rule: '👑 مح = π × ق ≈ 3.14 × 1.5 ≈ 4.7 كلم'
          },
          {
            id: 'ch10b_12', type: 'multiple_choice',
            question_ar: 'من الكتاب (أقراص مدمجة): يبلغ قطر القرص المدمج 12 سم. أوجد محيطه مقرباً إلى أقرب عشر (π ≈ 3.14).',
            options_ar: ['≈ 34.4 سم', '≈ 37.7 سم', '≈ 47.1 سم', '≈ 56.5 سم'],
            correct_index: 1,
            explanation_ar: 'مح = 3.14 × 12 = 37.68 ≈ 37.7 سم.',
            golden_rule: '👑 مح = π × ق = 3.14 × 12 ≈ 37.7 سم'
          },
          {
            id: 'ch10b_13', type: 'multiple_choice',
            question_ar: 'من الكتاب (عجلة الكرسي المتحرك): نصف قطر العجلة 30 سم. أيُّ الطرق تستعمل لإيجاد المحيط؟',
            options_ar: [
              'ضرب القطر في π وفي 2',
              'قسمة القطر على π',
              'ضرب نصف القطر في π',
              'ضرب نصف القطر في π وفي 2'
            ],
            correct_index: 3,
            explanation_ar: 'مح = 2 × π × نق، أي ضرب نصف القطر في π وفي 2.',
            golden_rule: '👑 مح = 2 × π × نق'
          }
        ]
      }
    ]
  },

  {
    id: 'u2',
    title_ar: 'الدرس 2-10: مساحة متوازي الأضلاع',
    subtitle_ar: 'م = القاعدة × الارتفاع',
    color: 'from-orange-700 to-red-800',
    icon: '▱',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&q=80',
    lessons: [
      {
        id: 'l2_1',
        title_ar: 'إيجاد مساحة متوازي الأضلاع',
        image: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=200&q=80',
        count: 12,
        getQuestions: () => [
          {
            id: 'ch10c_1', type: 'info',
            question_ar: '▱ مساحة متوازي الأضلاع:\n• القاعدة (ق): أيُّ ضلع من أضلاع متوازي الأضلاع.\n• الارتفاع (ع): البعد بين القاعدة والضلع المقابل لها.\n• الصيغة: م = ق × ع\n• مساحة متوازي الأضلاع = مساحة المستطيل المقابل له'
          },
          {
            id: 'ch10c_2', type: 'multiple_choice',
            question_ar: 'من مثال الكتاب (1): متوازي أضلاع قاعدته 6 وحدات وارتفاعه 8 وحدات. ما مساحته؟',
            options_ar: ['28 وحدة^{2}', '48 وحدة^{2}', '56 وحدة^{2}', '64 وحدة^{2}'],
            correct_index: 1,
            explanation_ar: 'م = ق × ع = 6 × 8 = 48 وحدة^{2}.',
            golden_rule: '👑 م = ق × ع = 6 × 8 = 48'
          },
          {
            id: 'ch10c_3', type: 'multiple_choice',
            question_ar: 'من مثال الكتاب (2): متوازي أضلاع قاعدته 20 سم وارتفاعه 11 سم. ما مساحته؟',
            options_ar: ['62 سم^{2}', '110 سم^{2}', '220 سم^{2}', '440 سم^{2}'],
            correct_index: 2,
            explanation_ar: 'م = 20 × 11 = 220 سم^{2}.',
            golden_rule: '👑 م = ق × ع = 20 × 11 = 220 سم^{2}'
          },
          {
            id: 'ch10c_4', type: 'multiple_choice',
            question_ar: 'من مثال الكتاب (3 — سجاد): الجزء الأسود في السجادة متوازي أضلاع قاعدته 1¼ م وارتفاعه 4 م. ما مساحته؟',
            options_ar: ['4 م^{2}', '5 م^{2}', '5¼ م^{2}', '4¼ م^{2}'],
            correct_index: 1,
            explanation_ar: 'م = 1¼ × 4 = 5/4 × 4 = 5 م^{2}.',
            golden_rule: '👑 م = 1¼ × 4 = 5 م^{2}'
          },
          {
            id: 'ch10c_5', type: 'true_false',
            question_ar: 'من الكتاب: الارتفاع في متوازي الأضلاع هو أحد أضلاعه المائلة.',
            correct_answer: 'false',
            explanation_ar: 'خطأ. الارتفاع هو البعد العمودي بين القاعدة والضلع المقابل لها، وليس الضلع المائل.',
            golden_rule: '👑 الارتفاع ⊥ القاعدة (عمودي عليها)'
          },
          {
            id: 'ch10c_6', type: 'multiple_choice',
            question_ar: 'من الكتاب (تأكد): متوازي أضلاع قاعدته 10 سم وارتفاعه 5 سم. ما مساحته؟',
            options_ar: ['15 سم^{2}', '30 سم^{2}', '50 سم^{2}', '100 سم^{2}'],
            correct_index: 2,
            explanation_ar: 'م = 10 × 5 = 50 سم^{2}.',
            golden_rule: '👑 م = ق × ع = 10 × 5 = 50 سم^{2}'
          },
          {
            id: 'ch10c_7', type: 'multiple_choice',
            question_ar: 'من الكتاب (تأكد): متوازي أضلاع قاعدته 11 م وارتفاعه 8 م. ما مساحته؟',
            options_ar: ['38 م^{2}', '80 م^{2}', '88 م^{2}', '176 م^{2}'],
            correct_index: 2,
            explanation_ar: 'م = 11 × 8 = 88 م^{2}.',
            golden_rule: '👑 م = ق × ع = 11 × 8 = 88 م^{2}'
          },
          {
            id: 'ch10c_8', type: 'multiple_choice',
            question_ar: 'من مثال الكتاب (3): حمد صمّم إطاراً لصورة. الجزء الداخلي متوازي أضلاع قاعدته 18.4 سم وارتفاعه 11.7 سم. ما مساحة الصورة؟',
            options_ar: ['≈ 120 سم^{2}', '≈ 150 سم^{2}', '≈ 215 سم^{2}', '≈ 300 سم^{2}'],
            correct_index: 2,
            explanation_ar: 'م = 18.4 × 11.7 = 215.28 ≈ 215 سم^{2}.',
            golden_rule: '👑 م = ق × ع = 18.4 × 11.7 ≈ 215 سم^{2}'
          },
          {
            id: 'ch10c_9', type: 'classify',
            question_ar: 'صنّف: أيُّ الأشكال التالية تُطبَّق عليها صيغة م = ق × ع؟',
            categories_ar: ['نعم', 'لا'],
            items_ar: [
              { text: 'متوازي أضلاع', correct_category: 0 },
              { text: 'مستطيل', correct_category: 0 },
              { text: 'مربع', correct_category: 0 },
              { text: 'دائرة', correct_category: 1 },
              { text: 'مثلث', correct_category: 1 }
            ],
            explanation_ar: 'م = ق × ع تنطبق على متوازي الأضلاع والمستطيل والمربع (خاصة منه). الدائرة والمثلث لهما صيغ أخرى.',
            golden_rule: '👑 متوازي الأضلاع والمستطيل: م = ق × ع'
          },
          {
            id: 'ch10c_10', type: 'multiple_choice',
            question_ar: 'من الكتاب: مستطيل طوله 30 سم وعرضه 20 سم. ما مساحته؟',
            options_ar: ['100 سم^{2}', '300 سم^{2}', '600 سم^{2}', '1200 سم^{2}'],
            correct_index: 2,
            explanation_ar: 'م = 30 × 20 = 600 سم^{2}.',
            golden_rule: '👑 م (مستطيل) = طول × عرض = 30 × 20 = 600'
          },
          {
            id: 'ch10c_11', type: 'true_false',
            question_ar: 'من الكتاب: مساحة متوازي الأضلاع تساوي مساحة المستطيل ذي القاعدة والارتفاع نفسيهما.',
            correct_answer: 'true',
            explanation_ar: 'صحيح. يمكن تحويل متوازي الأضلاع إلى مستطيل بقص مثلث من أحد جانبيه ونقله للجانب الآخر.',
            golden_rule: '👑 م (متوازي أضلاع) = م (مستطيل مقابل) = ق × ع'
          },
          {
            id: 'ch10c_12', type: 'multiple_choice',
            question_ar: 'من تمرين الكتاب: متوازي أضلاع قاعدته 16 م وارتفاعه 7 م. ما مساحته؟',
            options_ar: ['46 م^{2}', '56 م^{2}', '112 م^{2}', '224 م^{2}'],
            correct_index: 2,
            explanation_ar: 'م = 16 × 7 = 112 م^{2}.',
            golden_rule: '👑 م = ق × ع = 16 × 7 = 112 م^{2}'
          }
        ]
      }
    ]
  }
];

export const MATH_G6_CH10_TOTAL = MATH_G6_CH10_UNITS.reduce(
  (sum, u) => sum + u.lessons.reduce((ls, l) => ls + l.count, 0),
  0
);