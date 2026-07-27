/**
 * التربية الإسلامية — الصف الثاني الابتدائي · الفصل الثاني
 * وزارة التعليم 1447هـ  —  صفحات 41-81
 * الوحدة الأولى: الوضوء | الوحدة الثانية: أهمية الصلاة وصفتها | الوحدة الثالثة: أذكار الصلاة
 * أنواع الأسئلة: multiple_choice · true_false · ordering · matching · classify
 */

export const ISLAMIC_G2_S2_UNITS = [
  /* ═══════════════════════════════════════════════════
   *  الوحدة الأولى: الوضوء
   * ═══════════════════════════════════════════════════ */
  {
    id: 'wudu',
    title_ar: 'الوحدة الأولى: الوضوء',
    title_en: 'Unit 1: Wudu (Ablution)',
    color: '#0891b2',
    emoji: '💧',
    lessons: [
      /* ─── الدرس الأول: فروض الوضوء (ص 41) ─── */
      {
        id: 'wudu_1',
        title_ar: 'الدرس الأول: فروض الوضوء',
        title_en: 'Lesson 1: Obligations of Wudu',
        questions: [
          // اختيار من متعدد
          {
            type: 'multiple_choice',
            question_ar: 'عبدالعزيز بدأ يتوضأ، ثم تذكر كتابه فذهب ليأخذه، وعاد بعد عشر دقائق فأكمل وضوءه. ما الفرض الذي لم يأتِ به؟',
            question_en: 'Abdulaziz started wudu, went to get his book and returned 10 minutes later to finish. Which obligation did he miss?',
            options_ar: ['الترتيب', 'الموالاة', 'غسل كل أعضاء الوضوء', 'النية'],
            options_en: ['Order', 'Continuity', 'Washing all limbs', 'Intention'],
            correct: 1,
            explanation_ar: 'تركَ عبدالعزيز الموالاة — وهي التتابع بين غسل الأعضاء — حين أطال الانقطاع بذهابه لأخذ كتابه.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'إذا ترك المتوضئ فرضاً من فروض الوضوء صحَّ وضوؤه.',
            question_en: 'If someone leaves one of the obligations of wudu, the wudu is still valid.',
            correct: 'false',
            explanation_ar: 'إذا ترك المتوضئ أحد فروض الوضوء لم يصح وضوؤه، ووجب عليه إعادته.',
          },
          // ترتيب
          {
            type: 'ordering',
            question_ar: 'رتّب فروض الوضوء التالية بالترتيب الصحيح:',
            question_en: 'Order the following wudu steps correctly:',
            items_ar: ['النية', 'غسل الوجه', 'غسل اليدين', 'مسح الرأس', 'غسل الرجلين'],
            items_en: ['Intention', 'Wash face', 'Wash hands', 'Wipe head', 'Wash feet'],
            explanation_ar: 'الترتيب الصحيح لفروض الوضوء: النية ← غسل الوجه ← غسل اليدين ← مسح الرأس ← غسل الرجلين.',
          },
          // مطابقة
          {
            type: 'matching',
            question_ar: 'صِل كل مصطلح بتعريفه الصحيح:',
            question_en: 'Match each term to its definition:',
            pairs_ar: [
              { left: 'الموالاة', right: 'التتابع بين غسل الأعضاء بلا انقطاع طويل' },
              { left: 'الترتيب', right: 'غسل الأعضاء بالتسلسل المشروع' },
              { left: 'فرض الوضوء', right: 'عمل واجب لا يصح الوضوء بتركه' },
            ],
            pairs_en: [
              { left: 'Muwalaah', right: 'Washing limbs consecutively without long break' },
              { left: 'Tartib', right: 'Washing limbs in the prescribed order' },
              { left: 'Wudu obligation', right: 'An act that must be done for wudu to be valid' },
            ],
            explanation_ar: 'كل مصطلح من مصطلحات الوضوء له تعريف دقيق يجب حفظه.',
          },
          // اختيار من متعدد
          {
            type: 'multiple_choice',
            question_ar: 'أرتّب الكلمات التالية لأُكوّن جملة مفيدة: (الوضوء / فروض / أحد / من / تركَ / من)',
            question_en: 'Which is the correct arrangement?',
            options_ar: [
              'من ترك أحد من فروض الوضوء',
              'فروض الوضوء من أحد ترك من',
              'من ترك فروض الوضوء من أحد',
              'أحد فروض الوضوء من ترك من',
            ],
            options_en: [
              'Whoever leaves one of the wudu obligations',
              'Wudu obligations someone left from',
              'From left wudu obligations one of',
              'One wudu from obligations who left',
            ],
            correct: 0,
            explanation_ar: 'الجملة الصحيحة: "من ترك أحداً من فروض الوضوء لم يصح وضوؤه".',
          },
        ],
      },

      /* ─── الدرس الثاني: نواقض الوضوء (ص 42-44) ─── */
      {
        id: 'wudu_2',
        title_ar: 'الدرس الثاني: نواقض الوضوء',
        title_en: 'Lesson 2: Nullifiers of Wudu',
        questions: [
          // تصنيف
          {
            type: 'classify',
            question_ar: 'صنّف كلاً مما يأتي إلى: ناقض للوضوء أو غير ناقض للوضوء:',
            question_en: 'Classify each as: nullifies wudu OR does not nullify wudu:',
            categories_ar: ['ناقض للوضوء', 'لا ينقض الوضوء'],
            categories_en: ['Nullifies wudu', 'Does not nullify wudu'],
            items_ar: ['البول', 'الغائط', 'الريح', 'النوم', 'أكل لحم الإبل', 'الكلام', 'المشي', 'الضحك'],
            items_en: ['Urine', 'Stool', 'Passing gas', 'Sleep', 'Eating camel meat', 'Talking', 'Walking', 'Laughing'],
            correct_categories: [0, 0, 0, 0, 0, 1, 1, 1],
            explanation_ar: 'نواقض الوضوء هي: الخارج من السبيلين (البول، الغائط، الريح)، والنوم، وأكل لحم الإبل. أما الكلام والمشي والضحك فلا تنقض الوضوء.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'ينتقض الوضوء بأكل لحم الدجاج.',
            question_en: 'Eating chicken nullifies wudu.',
            correct: 'false',
            explanation_ar: 'لا ينتقض الوضوء بأكل لحم الدجاج، وإنما ينتقض بأكل لحم الإبل (البعير) فقط من اللحوم.',
          },
          // اختيار من متعدد
          {
            type: 'multiple_choice',
            question_ar: 'تضأت خديجة، ثم أكلت لحم الإبل (البعير) وأرادت أن تصلي العصر. فطلب منها أبوها أن تُعيد وضوءها. لماذا؟',
            question_en: 'Khadija made wudu, then ate camel meat and wanted to pray Asr. Her father asked her to redo wudu. Why?',
            options_ar: [
              'لأن أكل لحم الإبل ناقض من نواقض الوضوء',
              'لأنها نسيت الترتيب',
              'لأنها تكلمت أثناء الوضوء',
              'لأن وقت الصلاة لم يدخل',
            ],
            options_en: [
              'Because eating camel meat nullifies wudu',
              'Because she forgot the order',
              'Because she talked during wudu',
              'Because prayer time had not entered',
            ],
            correct: 0,
            explanation_ar: 'أكل لحم الإبل (البعير) ناقض من نواقض الوضوء، فوجب على خديجة إعادة الوضوء.',
          },
          // مطابقة
          {
            type: 'matching',
            question_ar: 'صِل كل شخص بسبب إعادة وضوئه:',
            question_en: 'Match each person to the reason they must redo wudu:',
            pairs_ar: [
              { left: 'خالد', right: 'نام بعد الوضوء' },
              { left: 'ناصر', right: 'اضطر لدورة المياه' },
              { left: 'خديجة', right: 'أكلت لحم الإبل' },
            ],
            pairs_en: [
              { left: 'Khalid', right: 'Slept after wudu' },
              { left: 'Nasir', right: 'Had to use the bathroom' },
              { left: 'Khadija', right: 'Ate camel meat' },
            ],
            explanation_ar: 'استناداً لقصة الكتاب ص 43: خالد نام، وناصر ذهب لدورة المياه، وخديجة أكلت لحم الإبل — وكلها نواقض للوضوء.',
          },
          // ترتيب
          {
            type: 'ordering',
            question_ar: 'رتّب نواقض الوضوء المذكورة في الكتاب (ص 42) كما وردت:',
            question_en: 'Order the wudu nullifiers as listed in the textbook:',
            items_ar: ['الخارج من السبيلين', 'النوم', 'أكل لحم الإبل'],
            items_en: ['Exiting from two passages', 'Sleep', 'Eating camel meat'],
            explanation_ar: 'رتّب الكتاب النواقض: ١- الخارج من السبيلين (البول، الغائط، الريح) ٢- النوم ٣- أكل لحم الإبل.',
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════
   *  الوحدة الثانية: أهمية الصلاة وصفتها
   * ═══════════════════════════════════════════════════ */
  {
    id: 'salah_importance',
    title_ar: 'الوحدة الثانية: أهمية الصلاة وصفتها',
    title_en: 'Unit 2: Importance and Form of Prayer',
    color: '#059669',
    emoji: '🕌',
    lessons: [
      /* ─── الدرس الثالث: أهمية الصلاة (ص 46-48) ─── */
      {
        id: 'salah_1',
        title_ar: 'الدرس الثالث: أهمية الصلاة',
        title_en: 'Lesson 3: Importance of Prayer',
        questions: [
          // اختيار من متعدد
          {
            type: 'multiple_choice',
            question_ar: 'الصلاة ركن من أركان الإسلام، وهي الركن:',
            question_en: 'Prayer is a pillar of Islam. It is pillar number:',
            options_ar: ['الثاني', 'الأول', 'الثالث', 'الرابع'],
            options_en: ['Second', 'First', 'Third', 'Fourth'],
            correct: 0,
            explanation_ar: 'الصلاة هي الركن الثاني من أركان الإسلام الخمسة.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'قال الله تعالى: ﴿إن الصلاة كانت على المؤمنين كتابًا موقوتًا﴾.',
            question_en: 'Allah said: "Prayer has been decreed upon the believers a decree of specified times."',
            correct: 'true',
            explanation_ar: 'هذا نص الآية 103 من سورة النساء، وهي دليل على أن الصلاة فريضة في أوقات محددة.',
          },
          // ترتيب
          {
            type: 'ordering',
            question_ar: 'رتّب أركان الإسلام الخمسة بالترتيب الصحيح:',
            question_en: 'Order the five pillars of Islam correctly:',
            items_ar: ['الشهادتان', 'إقام الصلاة', 'إيتاء الزكاة', 'صوم رمضان', 'حج البيت'],
            items_en: ['Two testimonies', 'Establishing prayer', 'Giving zakat', 'Fasting Ramadan', 'Pilgrimage'],
            explanation_ar: 'قال ﷺ: (بُنِيَ الإسلام على خمس: شهادة أن لا إله إلا الله وأن محمداً رسول الله، وإقام الصلاة، وإيتاء الزكاة، وصوم رمضان، وحج البيت).',
          },
          // مطابقة
          {
            type: 'matching',
            question_ar: 'صِل كل عبارة بما يناسبها:',
            question_en: 'Match each phrase:',
            pairs_ar: [
              { left: 'أداء الصلاة المفروضة', right: 'دليل نجاح المؤمن' },
              { left: 'المحافظة على الصلوات المفروضة', right: 'سبب لدخول الجنة' },
              { left: 'إقام الصلاة', right: 'الركن الثاني من أركان الإسلام' },
            ],
            pairs_en: [
              { left: 'Performing obligatory prayer', right: 'Sign of believer\'s success' },
              { left: 'Maintaining obligatory prayers', right: 'Means to enter paradise' },
              { left: 'Establishing prayer', right: 'Second pillar of Islam' },
            ],
            explanation_ar: 'الصلاة دليل نجاح، والمحافظة عليها سبب لدخول الجنة، وهي الركن الثاني من أركان الإسلام.',
          },
          // اختيار من متعدد — التقويم
          {
            type: 'multiple_choice',
            question_ar: 'رتّب الكلمات لتُكوّن جملة مفيدة: (المؤمن / أداء / دليل نجاح / الصلاة المفروضة)',
            question_en: 'Arrange the words to form a meaningful sentence:',
            options_ar: [
              'أداء الصلاة المفروضة دليل نجاح المؤمن',
              'المؤمن دليل نجاح أداء الصلاة المفروضة',
              'الصلاة المفروضة المؤمن دليل أداء نجاح',
              'دليل الصلاة المفروضة أداء نجاح المؤمن',
            ],
            options_en: [
              'Performing the obligatory prayer is a sign of the believer\'s success',
              'The believer\'s sign of success performing obligatory prayer',
              'Obligatory prayer believer sign performing success',
              'Sign of obligatory prayer performing success believer',
            ],
            correct: 0,
            explanation_ar: 'الجملة الصحيحة: "أداء الصلاة المفروضة دليل نجاح المؤمن".',
          },
        ],
      },

      /* ─── الدرس الرابع: الركعة الأولى (١) — استقبال القبلة وتكبيرة الإحرام (ص 50-53) ─── */
      {
        id: 'salah_2',
        title_ar: 'الدرس الرابع: الركعة الأولى (١) — استقبال القبلة وتكبيرة الإحرام',
        title_en: 'Lesson 4: First Rak\'ah (1) — Facing Qiblah & Takbir',
        questions: [
          // اختيار من متعدد
          {
            type: 'multiple_choice',
            question_ar: 'ما قبلة المسلمين التي يستقبلونها في الصلاة؟',
            question_en: 'What is the Qiblah (direction) Muslims face during prayer?',
            options_ar: ['الكعبة المشرفة', 'المسجد النبوي', 'المسجد الأقصى', 'الشرق دائماً'],
            options_en: ['The Kaaba', 'The Prophet\'s Mosque', 'Al-Aqsa Mosque', 'Always East'],
            correct: 0,
            explanation_ar: 'يستقبل المسلم الكعبة المشرفة في مكة المكرمة عند الصلاة.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'يقول المصلي عند تكبيرة الإحرام: "الله أكبر" مع رفع اليدين.',
            question_en: 'At the opening takbir, the worshipper says "Allahu Akbar" while raising the hands.',
            correct: 'true',
            explanation_ar: 'يرفع المصلي يديه ويكبّر تكبيرة الإحرام قائلاً: "الله أكبر".',
          },
          // ترتيب
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات بداية الصلاة بالترتيب الصحيح:',
            question_en: 'Order the steps at the start of prayer:',
            items_ar: ['أقف مستقبلاً القبلة', 'أرفع يديَّ وأكبّر تكبيرة الإحرام', 'أضع يدي اليمنى على اليسرى على الصدر', 'أقرأ دعاء الاستفتاح', 'أتعوذ وأبسمل وأقرأ الفاتحة'],
            items_en: ['Stand facing Qiblah', 'Raise hands and say takbir', 'Place right hand on left on chest', 'Recite opening supplication', 'Seek refuge, say basmala, recite Al-Fatiha'],
            explanation_ar: 'ترتيب بداية الصلاة: القيام واستقبال القبلة ← تكبيرة الإحرام ← وضع اليدين ← دعاء الاستفتاح ← الاستعاذة والفاتحة.',
          },
          // مطابقة — الصور مع العبارات (ص 51)
          {
            type: 'matching',
            question_ar: 'صِل كل صورة بالعبارة المناسبة:',
            question_en: 'Match each picture to the correct phrase:',
            pairs_ar: [
              { left: 'صورة الكعبة', right: 'أستقبل القبلة' },
              { left: 'صورة الطفل ساجداً', right: 'أصلي' },
              { left: 'صورة يد تُغسل', right: 'أتوضأ' },
            ],
            pairs_en: [
              { left: 'Image of Kaaba', right: 'I face the Qiblah' },
              { left: 'Image of child in sujud', right: 'I pray' },
              { left: 'Image of washing hand', right: 'I make wudu' },
            ],
            explanation_ar: 'قبل الصلاة: أتوضأ ← أستقبل القبلة ← أصلي.',
          },
          // صح أم خطأ — التقويم (ص 53)
          {
            type: 'true_false',
            question_ar: 'يقرأ المسلم بعد دعاء الاستفتاح مباشرةً سورة الإخلاص.',
            question_en: 'After the opening supplication, the Muslim reads Surah Al-Ikhlas directly.',
            correct: 'false',
            explanation_ar: 'يقرأ المسلم بعد دعاء الاستفتاح: الاستعاذة، ثم البسملة، ثم سورة الفاتحة، ثم ما تيسّر من القرآن.',
          },
        ],
      },

      /* ─── الدرس الخامس: الركعة الأولى (٢) — الركوع والرفع منه (ص 54-56) ─── */
      {
        id: 'salah_3',
        title_ar: 'الدرس الخامس: الركعة الأولى (٢) — الركوع والرفع منه',
        title_en: 'Lesson 5: First Rak\'ah (2) — Ruku and Rising',
        questions: [
          // اختيار من متعدد
          {
            type: 'multiple_choice',
            question_ar: 'ما الذي يقوله المصلي في الركوع؟',
            question_en: 'What does the worshipper say during ruku?',
            options_ar: ['سبحان ربي العظيم ثلاث مرات', 'سبحان ربي الأعلى ثلاث مرات', 'رب اغفر لي', 'ربنا ولك الحمد'],
            options_en: ['Glory be to my Lord the Great (3 times)', 'Glory be to my Lord the Most High (3 times)', 'Lord forgive me', 'Our Lord, praise be to You'],
            correct: 0,
            explanation_ar: 'يقول المصلي في الركوع: (سبحان ربي العظيم) ثلاث مرات، ويحرص على أن يكون ظهره مستوياً.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'عند الرفع من الركوع يقول المصلي: "سبحان ربي العظيم".',
            question_en: 'When rising from ruku, the worshipper says "Subhana Rabbiy al-Azeem."',
            correct: 'false',
            explanation_ar: 'عند الرفع من الركوع يقول المصلي: "سمع الله لمن حمده"، ثم يقول قائماً: "ربنا ولك الحمد".',
          },
          // مطابقة
          {
            type: 'matching',
            question_ar: 'صِل كل موقف بما يقوله المصلي:',
            question_en: 'Match each position to what is said:',
            pairs_ar: [
              { left: 'في الركوع', right: 'سبحان ربي العظيم' },
              { left: 'عند الرفع من الركوع', right: 'سمع الله لمن حمده' },
              { left: 'بعد الرفع من الركوع قائماً', right: 'ربنا ولك الحمد' },
            ],
            pairs_en: [
              { left: 'During ruku', right: 'Subhana Rabbiy al-Azeem' },
              { left: 'When rising from ruku', right: 'Sami Allah liman hamidah' },
              { left: 'After rising from ruku, standing', right: 'Rabbana wa lakal hamd' },
            ],
            explanation_ar: 'في الركوع: (سبحان ربي العظيم). عند الرفع: (سمع الله لمن حمده). قائماً: (ربنا ولك الحمد).',
          },
          // اختيار من متعدد — التقويم (ص 56)
          {
            type: 'multiple_choice',
            question_ar: 'ماذا يقول المصلي بعد الرفع من الركوع وهو قائم؟',
            question_en: 'What does the worshipper say after rising from ruku while standing?',
            options_ar: ['ربنا ولك الحمد', 'سبحان ربي العظيم', 'سبحان ربي الأعلى', 'رب اغفر لي'],
            options_en: ['Rabbana wa lakal hamd', 'Subhana Rabbiy al-Azeem', 'Subhana Rabbiy al-Ala', 'Lord forgive me'],
            correct: 0,
            explanation_ar: 'يقول المصلي بعد الرفع من الركوع وهو قائم: (ربنا ولك الحمد).',
          },
        ],
      },

      /* ─── الدرس السادس: الركعة الأولى (٣) — السجود والرفع منه (ص 57-60) ─── */
      {
        id: 'salah_4',
        title_ar: 'الدرس السادس: الركعة الأولى (٣) — السجود والرفع منه',
        title_en: 'Lesson 6: First Rak\'ah (3) — Sujud and Rising',
        questions: [
          // تصنيف
          {
            type: 'classify',
            question_ar: 'صنّف الأعضاء التالية إلى: أعضاء السجود أو ليست من أعضاء السجود:',
            question_en: 'Classify each as: sujud limb OR not a sujud limb:',
            categories_ar: ['أعضاء السجود السبعة', 'ليست من أعضاء السجود'],
            categories_en: ['Seven sujud limbs', 'Not sujud limbs'],
            items_ar: ['الجبهة والأنف', 'اليدان', 'الركبتان', 'القدمان', 'البطن', 'الظهر', 'الأذنان'],
            items_en: ['Forehead & nose', 'Two hands', 'Two knees', 'Two feet', 'Abdomen', 'Back', 'Ears'],
            correct_categories: [0, 0, 0, 0, 1, 1, 1],
            explanation_ar: 'الأعضاء السبعة في السجود: الجبهة والأنف (تُحسب واحداً)، اليدان، الركبتان، القدمان.',
          },
          // مطابقة
          {
            type: 'matching',
            question_ar: 'صِل كل موقف بما يقوله المصلي:',
            question_en: 'Match each position to what is said:',
            pairs_ar: [
              { left: 'في السجود', right: 'سبحان ربي الأعلى' },
              { left: 'بين السجدتين', right: 'رب اغفر لي، رب اغفر لي' },
              { left: 'عند الرفع من السجود', right: 'الله أكبر' },
            ],
            pairs_en: [
              { left: 'During sujud', right: 'Subhana Rabbiy al-Ala' },
              { left: 'Between two sujud', right: 'Rabb ighfir li (twice)' },
              { left: 'When rising from sujud', right: 'Allahu Akbar' },
            ],
            explanation_ar: 'في السجود: (سبحان ربي الأعلى) ثلاثاً. بين السجدتين: (رب اغفر لي، رب اغفر لي). عند الرفع: (الله أكبر).',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'يقول المصلي في السجود: "سبحان ربي العظيم".',
            question_en: 'The worshipper says "Subhana Rabbiy al-Azeem" during sujud.',
            correct: 'false',
            explanation_ar: 'يقال (سبحان ربي العظيم) في الركوع، أما في السجود فيُقال: (سبحان ربي الأعلى).',
          },
          // اختيار من متعدد — التقويم (ص 60)
          {
            type: 'multiple_choice',
            question_ar: 'ما الذي يقوله المصلي في سجوده؟',
            question_en: 'What does the worshipper say during sujud?',
            options_ar: ['سبحان ربي الأعلى', 'سبحان ربي العظيم', 'رب اغفر لي', 'ربنا ولك الحمد'],
            options_en: ['Subhana Rabbiy al-Ala', 'Subhana Rabbiy al-Azeem', 'Rabb ighfir li', 'Rabbana wa lakal hamd'],
            correct: 0,
            explanation_ar: 'يقول المصلي في السجود: (سبحان ربي الأعلى) ثلاث مرات.',
          },
        ],
      },

      /* ─── الدرس السابع: الركعة الثانية (ص 61-62) ─── */
      {
        id: 'salah_5',
        title_ar: 'الدرس السابع: الركعة الثانية',
        title_en: 'Lesson 7: The Second Rak\'ah',
        questions: [
          // اختيار من متعدد
          {
            type: 'multiple_choice',
            question_ar: 'متى يجلس المصلي للتشهد في الصلاة؟',
            question_en: 'When does the worshipper sit for Tashahhud?',
            options_ar: ['بعد الركعة الثانية', 'بعد الركعة الأولى', 'قبل الصلاة', 'بعد كل ركعة'],
            options_en: ['After the second rak\'ah', 'After the first rak\'ah', 'Before prayer', 'After every rak\'ah'],
            correct: 0,
            explanation_ar: 'يجلس المصلي للتشهد بعد الركعة الثانية.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'الركعة الثانية مثل الأولى تماماً بما فيها تكبيرة الإحرام.',
            question_en: 'The second rak\'ah is exactly like the first, including the opening takbir.',
            correct: 'false',
            explanation_ar: 'الركعة الثانية مثل الأولى تماماً لكن بدون تكبيرة الإحرام؛ لأن تكبيرة الإحرام تُقال مرة واحدة في أول الصلاة.',
          },
          // مطابقة — أوجه التشابه والاختلاف (ص 62)
          {
            type: 'matching',
            question_ar: 'صِل كل عبارة بالركعة التي تخصها:',
            question_en: 'Match each statement to the correct rak\'ah:',
            pairs_ar: [
              { left: 'تكبيرة الإحرام', right: 'الركعة الأولى فقط' },
              { left: 'دعاء الاستفتاح', right: 'الركعة الأولى فقط' },
              { left: 'الركوع والسجود', right: 'كلتا الركعتين' },
              { left: 'الجلوس للتشهد', right: 'بعد الركعة الثانية' },
            ],
            pairs_en: [
              { left: 'Opening takbir', right: 'First rak\'ah only' },
              { left: 'Opening supplication', right: 'First rak\'ah only' },
              { left: 'Ruku and sujud', right: 'Both rak\'ahs' },
              { left: 'Sitting for Tashahhud', right: 'After second rak\'ah' },
            ],
            explanation_ar: 'أوجه التشابه: الركوع والسجود والقراءة. أوجه الاختلاف: تكبيرة الإحرام ودعاء الاستفتاح في الأولى فقط، والتشهد بعد الثانية.',
          },
          // ترتيب
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات الركعة الثانية:',
            question_en: 'Order the steps of the second rak\'ah:',
            items_ar: ['القيام للركعة الثانية بالتكبير', 'قراءة الفاتحة فقط', 'الركوع والرفع منه', 'السجودان مع الجلسة بينهما', 'الجلوس للتشهد'],
            items_en: ['Stand for second rak\'ah with takbir', 'Recite only Al-Fatiha', 'Ruku and rising', 'Two sujud with sitting between', 'Sit for Tashahhud'],
            explanation_ar: 'في الركعة الثانية يقف المصلي مكبراً، يقرأ الفاتحة فقط في الثالثة والرابعة، ثم يركع ويسجد ثم يجلس للتشهد.',
          },
        ],
      },

      /* ─── الدرس الثامن: التشهد الأول والأخير (ص 63-66) ─── */
      {
        id: 'salah_6',
        title_ar: 'الدرس الثامن: التشهد الأول والأخير',
        title_en: 'Lesson 8: First and Last Tashahhud',
        questions: [
          // اختيار من متعدد
          {
            type: 'multiple_choice',
            question_ar: 'متى يُقرأ التشهد الأول؟',
            question_en: 'When is the first Tashahhud read?',
            options_ar: [
              'في الجلوس بعد الركعة الثانية من صلاة الظهر والعصر والمغرب والعشاء',
              'في آخر الصلاة فقط',
              'قبل الركوع',
              'في كل ركعة',
            ],
            options_en: [
              'Sitting after 2nd rak\'ah of Dhuhr, Asr, Maghrib, Isha',
              'Only at end of prayer',
              'Before ruku',
              'In every rak\'ah',
            ],
            correct: 0,
            explanation_ar: 'يُقرأ التشهد الأول في الجلوس بعد الركعة الثانية من صلاة الظهر والعصر والمغرب والعشاء.',
          },
          // تصنيف
          {
            type: 'classify',
            question_ar: 'صنّف ما يلي إلى: يُقرأ في التشهد الأول فقط / يُقرأ في التشهد الأخير / كلاهما:',
            question_en: 'Classify: Read in first Tashahhud only / Last Tashahhud / Both:',
            categories_ar: ['التشهد الأول فقط', 'التشهد الأخير فقط', 'كلا التشهدين'],
            categories_en: ['First only', 'Last only', 'Both'],
            items_ar: ['الصلاة الإبراهيمية', 'الجلوس بعد الركعة الثانية من الظهر', 'نص التشهد (التحيات لله...)', 'الجلوس بعد الركعة الأخيرة'],
            items_en: ['Ibrahimic prayer', 'Sitting after 2nd rak\'ah of Dhuhr', 'Tashahhud text', 'Sitting after last rak\'ah'],
            correct_categories: [1, 0, 2, 1],
            explanation_ar: 'التشهد الأول: بعد الركعة الثانية في الصلوات الرباعية والثلاثية فقط بنص التشهد. التشهد الأخير: يُضاف إليه الصلاة الإبراهيمية ويكون بعد الركعة الأخيرة.',
          },
          // مطابقة — التشهد الأول والأخير (ص 75-76)
          {
            type: 'matching',
            question_ar: 'صِل كل عبارة بعمودها الصحيح:',
            question_en: 'Match each phrase to the correct column:',
            pairs_ar: [
              { left: 'يُقرأ التشهد فقط بعد الركعة', right: 'الأولى (التشهد الأول)' },
              { left: 'يُقرأ التشهد والصلاة على النبي بعد الركعة', right: 'الأخيرة (التشهد الأخير)' },
            ],
            pairs_en: [
              { left: 'Only Tashahhud is read after rak\'ah', right: 'First (First Tashahhud)' },
              { left: 'Tashahhud + prayer on Prophet after rak\'ah', right: 'Last (Last Tashahhud)' },
            ],
            explanation_ar: 'التشهد الأول: التحيات فقط. التشهد الأخير: التحيات + الصلاة الإبراهيمية.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'التشهد الأخير يشمل التشهد الأول مضافاً إليه الصلاة الإبراهيمية.',
            question_en: 'The last Tashahhud includes the first Tashahhud plus the Ibrahimic prayer.',
            correct: 'true',
            explanation_ar: 'التشهد الأخير يشمل: التحيات (التشهد الأول) + الصلاة الإبراهيمية على النبي ﷺ.',
          },
          // اختيار من متعدد — التقويم (ص 65)
          {
            type: 'multiple_choice',
            question_ar: 'يقوم المصلي للركعة الثالثة بعد:',
            question_en: 'The worshipper rises to the third rak\'ah after:',
            options_ar: [
              'قراءة التشهد الأول',
              'السجدة الثانية من الركعة الأولى',
              'قراءة التشهد الأخير',
              'التسليم',
            ],
            options_en: [
              'Reading the first Tashahhud',
              'Second sujud of the first rak\'ah',
              'Reading the last Tashahhud',
              'After salam',
            ],
            correct: 0,
            explanation_ar: 'يقوم المصلي للركعة الثالثة بعد قراءة التشهد الأول.',
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════
   *  الوحدة الثالثة: أذكار الصلاة
   * ═══════════════════════════════════════════════════ */
  {
    id: 'salah_adhkar',
    title_ar: 'الوحدة الثالثة: أذكار الصلاة',
    title_en: 'Unit 3: Prayer Supplications',
    color: '#7c3aed',
    emoji: '📿',
    lessons: [
      /* ─── الدرس التاسع: الأذكار المشروعة في الصلاة (١) — دعاء الاستفتاح (ص 68-72) ─── */
      {
        id: 'adhkar_1',
        title_ar: 'الدرس التاسع: الأذكار المشروعة في الصلاة (١)',
        title_en: 'Lesson 9: Prayer Supplications (1)',
        questions: [
          // اختيار من متعدد
          {
            type: 'multiple_choice',
            question_ar: 'متى يُقال دعاء الاستفتاح في الصلاة؟',
            question_en: 'When is the opening supplication said in prayer?',
            options_ar: [
              'بعد تكبيرة الإحرام في الركعة الأولى فقط',
              'قبل كل ركعة',
              'بعد قراءة الفاتحة',
              'في السجود',
            ],
            options_en: [
              'After opening takbir in first rak\'ah only',
              'Before every rak\'ah',
              'After reciting Al-Fatiha',
              'During sujud',
            ],
            correct: 0,
            explanation_ar: 'يُقال دعاء الاستفتاح بعد تكبيرة الإحرام في الركعة الأولى فقط.',
          },
          // مطابقة — الأذكار بمواضعها (ص 70-71)
          {
            type: 'matching',
            question_ar: 'صِل كل ذكر بموضعه في الصلاة:',
            question_en: 'Match each dhikr to its position in prayer:',
            pairs_ar: [
              { left: 'سبحان ربي العظيم', right: 'يُقال في الركوع' },
              { left: 'سمع الله لمن حمده', right: 'يُقال عند الرفع من الركوع' },
              { left: 'ربنا ولك الحمد', right: 'يُقال بعد الرفع من الركوع قائماً' },
              { left: 'سبحان ربي الأعلى', right: 'يُقال في السجود' },
              { left: 'رب اغفر لي', right: 'يُقال بين السجدتين' },
            ],
            pairs_en: [
              { left: 'Subhana Rabbiy al-Azeem', right: 'Said during ruku' },
              { left: 'Sami Allah liman hamidah', right: 'Said when rising from ruku' },
              { left: 'Rabbana wa lakal hamd', right: 'Said standing after ruku' },
              { left: 'Subhana Rabbiy al-Ala', right: 'Said during sujud' },
              { left: 'Rabb ighfir li', right: 'Said between two sujud' },
            ],
            explanation_ar: 'كل ذكر في موضعه: الركوع ← العظيم. الرفع منه ← سمع الله. قائماً ← ربنا ولك. السجود ← الأعلى. بين السجدتين ← رب اغفر لي.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'الفرق بين دعاء الركوع ودعاء السجود أن الركوع فيه "العظيم" والسجود فيه "الأعلى".',
            question_en: 'The difference between ruku and sujud dhikr is that ruku has "al-Azeem" and sujud has "al-Ala."',
            correct: 'true',
            explanation_ar: 'في الركوع: (سبحان ربي العظيم). في السجود: (سبحان ربي الأعلى). هذا هو الفرق الرئيسي.',
          },
          // اختيار من متعدد — نشاط ١ (ص 69)
          {
            type: 'multiple_choice',
            question_ar: 'في حوار خالد وخديجة (ص 69): متى يُقرأ دعاء الاستفتاح؟',
            question_en: 'When is the opening supplication read (per the story)?',
            options_ar: [
              'بعد تكبيرة الإحرام في الركعة الأولى فقط',
              'في بداية كل ركعة',
              'بعد قراءة الفاتحة',
              'قبل تكبيرة الإحرام',
            ],
            options_en: [
              'After opening takbir, first rak\'ah only',
              'Beginning of every rak\'ah',
              'After Al-Fatiha',
              'Before opening takbir',
            ],
            correct: 0,
            explanation_ar: 'قال خالد لخديجة: "لا يا خديجة، يُقرأ هذا الدعاء بعد تكبيرة الإحرام في الركعة الأولى فقط."',
          },
          // ترتيب — التقويم ص 73
          {
            type: 'ordering',
            question_ar: 'رتّب أذكار الصلاة من بدايتها حتى السجود الأول:',
            question_en: 'Order prayer dhikr from start to first sujud:',
            items_ar: ['دعاء الاستفتاح', 'الاستعاذة والبسملة', 'قراءة الفاتحة', 'سبحان ربي العظيم (الركوع)', 'سمع الله لمن حمده (الرفع)', 'سبحان ربي الأعلى (السجود)'],
            items_en: ['Opening supplication', 'Seeking refuge + Basmala', 'Recite Al-Fatiha', 'Subhana Rabbiy al-Azeem (ruku)', 'Sami Allah liman hamidah (rising)', 'Subhana Rabbiy al-Ala (sujud)'],
            explanation_ar: 'ترتيب الأذكار: دعاء الاستفتاح ← الاستعاذة ← الفاتحة ← الركوع ← الرفع من الركوع ← السجود.',
          },
        ],
      },

      /* ─── الدرس العاشر: الأذكار المشروعة في الصلاة (٢) — التشهدان (ص 74-76) ─── */
      {
        id: 'adhkar_2',
        title_ar: 'الدرس العاشر: الأذكار المشروعة في الصلاة (٢) — التشهدان',
        title_en: 'Lesson 10: Prayer Supplications (2) — Tashahhuds',
        questions: [
          // اختيار من متعدد
          {
            type: 'multiple_choice',
            question_ar: 'أين يوضع كل كلمة في الفراغ: (التحيات .......... والصلوات والطيبات، السلام عليك .......... النبي)',
            question_en: 'Fill in the blanks: (Al-Tahiyyatu .......... wa-s-salawatu wa-t-tayyibat, as-salamu alayka ayyuha .......... an-Nabiy)',
            options_ar: ['لله — أيها', 'الله — يا', 'لله — يا', 'الله — أيها'],
            options_en: ['lillah — ayyuha', 'Allahi — ya', 'lillah — ya', 'Allahi — ayyuha'],
            correct: 0,
            explanation_ar: 'نص التشهد: (التحيات لله والصلوات والطيبات، السلام عليك أيها النبي ورحمة الله وبركاته...).',
          },
          // مطابقة — التشهد الأول والأخير (ص 75-76)
          {
            type: 'matching',
            question_ar: 'صِل كل عبارة بعمودها في الجدول:',
            question_en: 'Match each phrase to its column:',
            pairs_ar: [
              { left: 'يُقرأ التشهد فقط بعد الركعة الثانية من صلاة الظهر', right: 'التشهد الأول' },
              { left: 'يُقرأ في الجلوس بعد الركعة الأخيرة', right: 'التشهد الأخير' },
              { left: 'يشمل الصلاة الإبراهيمية', right: 'التشهد الأخير' },
            ],
            pairs_en: [
              { left: 'Read after 2nd rak\'ah of Dhuhr', right: 'First Tashahhud' },
              { left: 'Read while sitting after last rak\'ah', right: 'Last Tashahhud' },
              { left: 'Includes the Ibrahimic prayer', right: 'Last Tashahhud' },
            ],
            explanation_ar: 'التشهد الأول: بعد الركعة الثانية من الصلوات الرباعية والثلاثية. التشهد الأخير: بعد الركعة الأخيرة يشمل الصلاة الإبراهيمية.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'الصلاة الإبراهيمية تُقرأ في التشهد الأخير وليس في الأول.',
            question_en: 'The Ibrahimic prayer is read in the last Tashahhud, not the first.',
            correct: 'true',
            explanation_ar: 'الصلاة الإبراهيمية (اللهم صل على محمد...) تُضاف في التشهد الأخير فقط.',
          },
          // اختيار من متعدد — التقويم ص 76
          {
            type: 'multiple_choice',
            question_ar: 'أكمل الفراغ: (التحيات ......... والصلوات والطيبات، السلام ......... أيها النبي)',
            question_en: 'Complete: (Al-Tahiyyatu ......... wa-s-salawat, as-salamu ......... ayyuha an-Nabiy)',
            options_ar: ['لله — عليك', 'الله — لك', 'لله — لك', 'الله — عليك'],
            options_en: ['lillah — alayka', 'Allahi — laka', 'lillah — laka', 'Allahi — alayka'],
            correct: 0,
            explanation_ar: 'نص التشهد: (التحيات لله والصلوات والطيبات، السلام عليك أيها النبي...).',
          },
        ],
      },

      /* ─── الدرس الحادي عشر: الاستعاذة قبل السلام (ص 77-78) ─── */
      {
        id: 'adhkar_3',
        title_ar: 'الدرس الحادي عشر: الاستعاذة قبل السلام',
        title_en: 'Lesson 11: Seeking Refuge Before Salam',
        questions: [
          // تصنيف
          {
            type: 'classify',
            question_ar: 'صنّف الأشياء التالية إلى: نستعيذ منها قبل السلام أو لا نستعيذ منها قبل السلام:',
            question_en: 'Classify: We seek refuge from it before salam OR we do not:',
            categories_ar: ['نستعيذ منها قبل السلام', 'لا نستعيذ منها قبل السلام'],
            categories_en: ['Seek refuge before salam', 'Do not seek refuge before salam'],
            items_ar: ['عذاب جهنم', 'عذاب القبر', 'فتنة المحيا والممات', 'شر فتنة المسيح الدجال', 'المرض', 'الفقر'],
            items_en: ['Hellfire torment', 'Grave torment', 'Trial of life and death', 'Evil of Dajjal\'s trial', 'Illness', 'Poverty'],
            correct_categories: [0, 0, 0, 0, 1, 1],
            explanation_ar: 'نستعيذ بالله من أربعة: عذاب جهنم، وعذاب القبر، وفتنة المحيا والممات، وشر فتنة المسيح الدجال — وذلك قبل السلام من الصلاة.',
          },
          // ترتيب
          {
            type: 'ordering',
            question_ar: 'رتّب الأشياء الأربعة التي نستعيذ منها قبل السلام كما وردت في الكتاب:',
            question_en: 'Order the four things we seek refuge from before salam as in the textbook:',
            items_ar: ['عذاب جهنم', 'عذاب القبر', 'فتنة المحيا والممات', 'شر فتنة المسيح الدجال'],
            items_en: ['Hellfire torment', 'Grave torment', 'Trial of life and death', 'Evil of Dajjal\'s trial'],
            explanation_ar: 'جاءت بهذا الترتيب في الحديث: عذاب جهنم ← عذاب القبر ← فتنة المحيا والممات ← شر فتنة المسيح الدجال.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'تُقرأ الاستعاذة من الأشياء الأربعة بعد التشهد الأخير والصلاة على النبي، قبل التسليم.',
            question_en: 'The refuge supplication is read after the last Tashahhud and prayer on the Prophet, before salam.',
            correct: 'true',
            explanation_ar: 'حثّنا نبيّنا ﷺ إذا انتهينا من قراءة التشهد الأخير أن نستعيذ من أربعة أشياء قبل التسليم من الصلاة.',
          },
          // اختيار من متعدد — التقويم ص 78
          {
            type: 'multiple_choice',
            question_ar: 'أكمل: نستعيذ بالله تعالى من أربعة بعد التشهد والصلاة على النبي: عذاب جهنم، وعذاب القبر، و...',
            question_en: 'Complete: We seek refuge from 4 things after Tashahhud: hellfire, grave, and...',
            options_ar: [
              'فتنة المحيا والممات، وشر فتنة المسيح الدجال',
              'المرض والفقر',
              'الشيطان والحسد',
              'السوء والبلاء',
            ],
            options_en: [
              'Trial of life/death, evil of Dajjal',
              'Illness and poverty',
              'Satan and envy',
              'Evil and affliction',
            ],
            correct: 0,
            explanation_ar: 'الأشياء الأربعة: عذاب جهنم — عذاب القبر — فتنة المحيا والممات — شر فتنة المسيح الدجال.',
          },
        ],
      },

      /* ─── الدرس الثاني عشر: تطبيق الصلاة عملياً (ص 79-81) ─── */
      {
        id: 'adhkar_4',
        title_ar: 'الدرس الثاني عشر: تطبيق الصلاة عملياً',
        title_en: 'Lesson 12: Practical Application of Prayer',
        questions: [
          // ترتيب — مراحل تطبيق الصلاة (ص 79-81)
          {
            type: 'ordering',
            question_ar: 'رتّب مراحل تطبيق الصلاة كما وردت في الكتاب (ص 79-81):',
            question_en: 'Order the stages of prayer application as in the textbook:',
            items_ar: [
              'صفة تكبيرة الإحرام',
              'صفة الركوع والرفع منه',
              'صفة السجود على الأعضاء السبعة',
              'صفة الجلسة بين السجدتين',
              'صفة القيام من الركعة الأولى',
              'صفة الجلوس للتشهد الأول',
              'صفة الجلوس للتشهد الأخير',
              'قراءة ما يستعيذ به المصلي قبل السلام',
              'صفة السلام من الصلاة',
            ],
            items_en: [
              'Form of opening takbir',
              'Form of ruku and rising',
              'Form of sujud on seven limbs',
              'Form of sitting between sujud',
              'Form of standing from first rak\'ah',
              'Form of sitting for first Tashahhud',
              'Form of sitting for last Tashahhud',
              'Reading refuge supplication before salam',
              'Form of salam from prayer',
            ],
            explanation_ar: 'مراحل تطبيق الصلاة (ص 79-81): تكبيرة الإحرام ← الركوع ← السجود على السبعة ← الجلسة بين السجدتين ← القيام ← التشهد الأول ← التشهد الأخير ← الاستعاذة ← السلام.',
          },
          // مطابقة
          {
            type: 'matching',
            question_ar: 'صِل كل مرحلة بصفتها:',
            question_en: 'Match each stage to its description:',
            pairs_ar: [
              { left: 'السلام من الصلاة', right: 'عن اليمين: السلام عليكم ورحمة الله، وعن اليسار كذلك' },
              { left: 'الجلوس للتشهد الأول', right: 'بعد الركعة الثانية في الصلوات الرباعية والثلاثية' },
              { left: 'الجلوس للتشهد الأخير', right: 'بعد الركعة الأخيرة، يُقرأ فيه التشهد والصلاة الإبراهيمية والاستعاذة' },
            ],
            pairs_en: [
              { left: 'Salam from prayer', right: 'Right: as-salamu alaykum wa rahmatullah; Left: same' },
              { left: 'Sitting for first Tashahhud', right: 'After 2nd rak\'ah in 4-rak\'ah and 3-rak\'ah prayers' },
              { left: 'Sitting for last Tashahhud', right: 'After last rak\'ah — Tashahhud + Ibrahimic prayer + refuge' },
            ],
            explanation_ar: 'صفة السلام: السلام عن اليمين ثم اليسار. التشهد الأول: بعد الركعة الثانية. التشهد الأخير: بعد الركعة الأخيرة مع الصلاة الإبراهيمية والاستعاذة.',
          },
          // اختيار من متعدد
          {
            type: 'multiple_choice',
            question_ar: 'قال ﷺ: (صلوا كما...). ما هو الحديث كاملاً؟',
            question_en: 'The Prophet ﷺ said: "Pray as you have ..." — complete the hadith:',
            options_ar: [
              'صلوا كما رأيتموني أصلي',
              'صلوا كما أمرتم',
              'صلوا كما يصلي الإمام',
              'صلوا كما علّمتكم',
            ],
            options_en: [
              'Pray as you have seen me pray',
              'Pray as you were commanded',
              'Pray as the imam prays',
              'Pray as I taught you',
            ],
            correct: 0,
            explanation_ar: 'قال النبي ﷺ: (صلوا كما رأيتموني أصلي) — أخرجه البخاري (631). وهذا يوجب الاقتداء بصفة صلاته ﷺ.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'يُسلّم المصلي مرة واحدة فقط عن يمينه.',
            question_en: 'The worshipper gives salam only once, to the right.',
            correct: 'false',
            explanation_ar: 'يُسلّم المصلي مرتين: عن يمينه قائلاً (السلام عليكم ورحمة الله)، ثم عن يساره قائلاً (السلام عليكم ورحمة الله).',
          },
        ],
      },
    ],
  },
];

export const TOTAL_UNITS_ISLAMIC_G2 = ISLAMIC_G2_S2_UNITS.length;
export const TOTAL_LESSONS_ISLAMIC_G2 = ISLAMIC_G2_S2_UNITS.reduce((s, u) => s + u.lessons.length, 0);
export const TOTAL_QUESTIONS_ISLAMIC_G2 = ISLAMIC_G2_S2_UNITS.reduce(
  (s, u) => s + u.lessons.reduce((ls, l) => ls + l.questions.length, 0), 0
);