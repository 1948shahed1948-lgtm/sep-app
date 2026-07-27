/**
 * التربية الإسلامية — الصف الثاني الابتدائي · الفصل الثاني
 * وزارة التعليم 1447هـ  —  صفحات 1-33
 * قسم التوحيد: الوحدة الأولى (نبينا محمد ﷺ) + الوحدة الثانية (القرآن الكريم)
 * أنواع الأسئلة: multiple_choice · true_false · ordering · matching · classify
 */

export const ISLAMIC_G2_S2_TAWHEED_UNITS = [
  /* ═══════════════════════════════════════════════════
   *  الوحدة الأولى: نبينا محمد ﷺ  (ص 13-30)
   * ═══════════════════════════════════════════════════ */
  {
    id: 'nabi_muhammad',
    title_ar: 'الوحدة الأولى: نبينا محمد ﷺ',
    title_en: 'Unit 1: Our Prophet Muhammad ﷺ',
    color: '#b45309',
    emoji: '☪️',
    lessons: [

      /* ─── الدرس الأول: نبيّنا محمد ﷺ (ص 14-16) ─── */
      {
        id: 'nabi_1',
        title_ar: 'الدرس الأول: نبيّنا محمد ﷺ',
        title_en: 'Lesson 1: Our Prophet Muhammad ﷺ',
        questions: [
          // اختيار من متعدد — النسب
          {
            type: 'multiple_choice',
            question_ar: 'ما نسب النبي محمد ﷺ؟',
            question_en: 'What is the Prophet Muhammad\'s lineage?',
            options_ar: [
              'محمد بن عبدالله بن عبدالمطلب من قريش',
              'محمد بن علي بن أبي طالب',
              'محمد بن عمر بن الخطاب',
              'محمد بن عبدالرحمن من بني تميم',
            ],
            options_en: [
              'Muhammad son of Abdullah son of Abdul-Muttalib from Quraysh',
              'Muhammad son of Ali son of Abi Talib',
              'Muhammad son of Umar son of Al-Khattab',
              'Muhammad son of Abdulrahman from Banu Tamim',
            ],
            correct: 0,
            explanation_ar: 'هو محمد بن عبدالله بن عبدالمطلب بن هاشم، وهاشم من قريش، وقريش من العرب، من ذرية إسماعيل بن إبراهيم عليهما السلام.',
          },
          // صح أم خطأ — المولد
          {
            type: 'true_false',
            question_ar: 'وُلد الرسول ﷺ في المدينة المنورة.',
            question_en: 'The Prophet ﷺ was born in Madinah.',
            correct: 'false',
            explanation_ar: 'وُلد الرسول ﷺ في مكة المكرمة عام الفيل.',
          },
          // مطابقة — البعثة والهجرة والوفاة (ص 14-15)
          {
            type: 'matching',
            question_ar: 'صِل كل حدث بالمعلومة الصحيحة (كما في ص 17):',
            question_en: 'Match each event to the correct detail (per the textbook):',
            pairs_ar: [
              { left: 'وُلد الرسول ﷺ', right: 'بمكة عام الفيل' },
              { left: 'بُعث الرسول ﷺ', right: 'وعمره أربعون سنة' },
              { left: 'هاجر الرسول ﷺ', right: 'من مكة إلى المدينة' },
              { left: 'تُوفي الرسول ﷺ', right: 'بالمدينة سنة 11هـ' },
            ],
            pairs_en: [
              { left: 'The Prophet ﷺ was born', right: 'In Makkah, Year of the Elephant' },
              { left: 'The Prophet ﷺ was sent', right: 'At the age of forty' },
              { left: 'The Prophet ﷺ migrated', right: 'From Makkah to Madinah' },
              { left: 'The Prophet ﷺ passed away', right: 'In Madinah, year 11 AH' },
            ],
            explanation_ar: 'أبرز أحداث سيرة النبي ﷺ: ولادته بمكة عام الفيل، بعثته وعمره 40 سنة، هجرته للمدينة، ووفاته 11هـ.',
          },
          // ترتيب — مراحل السيرة (ص 14-15)
          {
            type: 'ordering',
            question_ar: 'رتّب أحداث سيرة النبي ﷺ زمنياً:',
            question_en: 'Order the events of the Prophet\'s life chronologically:',
            items_ar: ['وُلد بمكة عام الفيل', 'بُعث بالرسالة وعمره 40 سنة', 'بقي بمكة 13 سنة يدعو للتوحيد', 'هاجر من مكة إلى المدينة', 'تُوفي بالمدينة سنة 11هـ'],
            items_en: ['Born in Makkah Year of Elephant', 'Sent with message at age 40', 'Stayed 13 years in Makkah calling to Tawhid', 'Migrated from Makkah to Madinah', 'Died in Madinah year 11 AH'],
            explanation_ar: 'ترتيب سيرته ﷺ: الولادة ← البعثة عند الأربعين ← الدعوة 13 سنة بمكة ← الهجرة ← الوفاة 11هـ.',
          },
          // اختيار من متعدد — الفضل (ص 15)
          {
            type: 'multiple_choice',
            question_ar: 'قال الله تعالى عن النبي ﷺ: ﴿مَّا كَانَ مُحَمَّدٌ أَبَا أَحَدٍ مِّن رِّجَالِكُمْ وَلَٰكِن رَّسُولَ اللَّهِ وَخَاتَمَ النَّبِيِّينَ﴾. ما معنى "خاتم النبيين"؟',
            question_en: 'What does "Seal of the Prophets" mean?',
            options_ar: [
              'آخر الأنبياء والمرسلين',
              'أفضل الأنبياء في الشجاعة',
              'أول الأنبياء في الدعوة',
              'أكثر الأنبياء معجزات',
            ],
            options_en: [
              'Last of the Prophets and Messengers',
              'Best of Prophets in courage',
              'First Prophet in calling',
              'Prophet with most miracles',
            ],
            correct: 0,
            explanation_ar: 'خاتم النبيين أي آخرهم — فلا نبي بعد محمد ﷺ. وهو أفضل الأنبياء والمرسلين.',
          },
        ],
      },

      /* ─── الدرس الثاني: صفات الرسول ﷺ (ص 18-20) ─── */
      {
        id: 'nabi_2',
        title_ar: 'الدرس الثاني: صفات الرسول ﷺ',
        title_en: 'Lesson 2: Attributes of the Prophet ﷺ',
        questions: [
          // تصنيف — الصفات وأضدادها
          {
            type: 'classify',
            question_ar: 'صنّف ما يلي إلى: صفة للرسول ﷺ أو ضدها:',
            question_en: 'Classify each as: a quality of the Prophet ﷺ OR its opposite:',
            categories_ar: ['صفة الرسول ﷺ', 'ضد صفاته'],
            categories_en: ['Quality of the Prophet ﷺ', 'Its opposite'],
            items_ar: ['الصدق', 'الأمانة', 'الرأفة بالمؤمنين', 'الشجاعة', 'الكرم وحسن الخلق', 'الكذب', 'الخيانة', 'الجزع'],
            items_en: ['Truthfulness', 'Trustworthiness', 'Kindness to believers', 'Bravery', 'Generosity & good character', 'Lying', 'Betrayal', 'Cowardice'],
            correct_categories: [0, 0, 0, 0, 0, 1, 1, 1],
            explanation_ar: 'صفات الرسول ﷺ: الصدق والأمانة (لقّبه قريش "الصادق الأمين")، الرأفة والرحمة بالمؤمنين، الشجاعة، الكرم وحسن الخلق. وأضدادها ليست من صفاته.',
          },
          // مطابقة — الصفة والمثال (ص 19)
          {
            type: 'matching',
            question_ar: 'صِل كل مثال بصفته الصحيحة:',
            question_en: 'Match each example to the correct quality:',
            pairs_ar: [
              { left: 'ذهبت للمدرسة واشتريت حليباً لأصدقائي في الفصل', right: 'الكرم' },
              { left: 'رأيت عامل النظافة يعمل في الجو الحار فأعطيته ماءً', right: 'الرأفة والرحمة' },
              { left: 'تعلمت السباحة لأكون مؤمناً قوياً', right: 'الشجاعة' },
              { left: 'سألتني أمي هل رتّبت غرفتك؟ فأخبرتها بالحقيقة', right: 'الصدق' },
            ],
            pairs_en: [
              { left: 'Bought milk for classmates at school', right: 'Generosity' },
              { left: 'Gave water to a street cleaner in hot weather', right: 'Kindness & mercy' },
              { left: 'Learned swimming to be a strong believer', right: 'Bravery' },
              { left: 'Told mother the truth about tidying room', right: 'Truthfulness' },
            ],
            explanation_ar: 'صفات الرسول ﷺ تتجلى في أفعال يومية: الكرم في العطاء، الرأفة في مساعدة المحتاج، الشجاعة في الاستعداد، الصدق في القول.',
          },
          // صح أم خطأ — الصدق والأمانة
          {
            type: 'true_false',
            question_ar: 'كانت قريش قبل البعثة تصف الرسول ﷺ بـ"الصادق الأمين".',
            question_en: 'Before prophethood, Quraysh used to describe the Prophet ﷺ as "the Truthful, the Trustworthy."',
            correct: 'true',
            explanation_ar: 'كانت قريش قبل البعثة تلقّب الرسول ﷺ بـ"الصادق الأمين" لما عُرف به من صدق وأمانة.',
          },
          // اختيار من متعدد — الشجاعة (ص 18)
          {
            type: 'multiple_choice',
            question_ar: 'قال أنس رضي الله عنه: (كان رسول الله ﷺ ......... الناس). ما الكلمة المناسبة؟',
            question_en: 'Anas (RA) said: "The Prophet ﷺ was the most ......... of people." What is the correct word?',
            options_ar: ['أشجع', 'أكرم', 'أصدق', 'أرحم'],
            options_en: ['courageous', 'generous', 'truthful', 'merciful'],
            correct: 0,
            explanation_ar: 'قال أنس رضي الله عنه: (كان رسول الله ﷺ أشجع الناس) — أخرجه مسلم (2307).',
          },
          // ترتيب — صفات الرسول ﷺ كما وردت في الكتاب
          {
            type: 'ordering',
            question_ar: 'رتّب صفات الرسول ﷺ كما وردت في الكتاب (ص 18):',
            question_en: 'Order the Prophet\'s qualities as listed in the textbook:',
            items_ar: ['الصدق والأمانة', 'الرأفة والرحمة بالمؤمنين', 'الشجاعة', 'الكرم وحسن الخلق'],
            items_en: ['Truthfulness & trustworthiness', 'Kindness & mercy to believers', 'Bravery', 'Generosity & good character'],
            explanation_ar: 'وردت الصفات في الكتاب بهذا الترتيب: الصدق والأمانة ← الرأفة والرحمة ← الشجاعة ← الكرم وحسن الخلق.',
          },
        ],
      },

      /* ─── الدرس الثالث: دعوة الرسول ﷺ (ص 21-23) ─── */
      {
        id: 'nabi_3',
        title_ar: 'الدرس الثالث: دعوة الرسول ﷺ',
        title_en: 'Lesson 3: The Call of the Prophet ﷺ',
        questions: [
          // اختيار من متعدد — إلى ماذا يدعو؟
          {
            type: 'multiple_choice',
            question_ar: 'يدعو الرسول ﷺ إلى شيئين، ما هما؟',
            question_en: 'The Prophet ﷺ calls to two things. What are they?',
            options_ar: [
              'الأمر بتوحيد الله وطاعته، والنهي عن الإشراك بالله ومعصيته',
              'الدعوة للصلاة، والأمر بالصيام',
              'إقام الصلاة، وإيتاء الزكاة',
              'حب الوطن، وطاعة ولي الأمر',
            ],
            options_en: [
              'Commanding Tawhid & obedience to Allah; forbidding shirk & disobedience',
              'Calling to prayer; commanding fasting',
              'Establishing prayer; giving zakat',
              'Love of homeland; obeying rulers',
            ],
            correct: 0,
            explanation_ar: 'يدعو الرسول ﷺ إلى: ① الأمر بتوحيد الله وطاعته، ② النهي عن الإشراك بالله ومعصيته.',
          },
          // مطابقة — نتيجة الطاعة والمعصية (ص 21)
          {
            type: 'matching',
            question_ar: 'صِل كل موقف بنتيجته:',
            question_en: 'Match each action to its result:',
            pairs_ar: [
              { left: 'من أطاع الرسول ﷺ', right: 'يُبشّره بالجنة' },
              { left: 'من عصى الرسول ﷺ', right: 'يُنذره بالنار' },
            ],
            pairs_en: [
              { left: 'Whoever obeys the Prophet ﷺ', right: 'He gives them glad tidings of Paradise' },
              { left: 'Whoever disobeys the Prophet ﷺ', right: 'He warns them of the Fire' },
            ],
            explanation_ar: 'أرسل الله محمداً ﷺ بشيراً ونذيراً: يُبشّر من أطاعه بالجنة، وينذر من عصاه بالنار.',
          },
          // تصنيف — طاعة أم معصية (ص 22)
          {
            type: 'classify',
            question_ar: 'صنّف كل فعل إلى: طاعة للرسول ﷺ أو معصية:',
            question_en: 'Classify each action as: obeying OR disobeying the Prophet ﷺ:',
            categories_ar: ['طاعة الرسول ﷺ', 'معصية الرسول ﷺ'],
            categories_en: ['Obeying the Prophet ﷺ', 'Disobeying the Prophet ﷺ'],
            items_ar: ['يشرب بيده اليمنى', 'يطيع والديه', 'يقول الصدق دائماً', 'يسرف في استعمال الماء', 'يلعب في الصلاة'],
            items_en: ['Drinks with right hand', 'Obeys parents', 'Always tells truth', 'Wastes water', 'Plays during prayer'],
            correct_categories: [0, 0, 0, 1, 1],
            explanation_ar: 'طاعة الرسول ﷺ: الشرب باليمنى، طاعة الوالدين، قول الصدق. معصيته: الإسراف في الماء، اللعب في الصلاة.',
          },
          // صح أم خطأ — الآية
          {
            type: 'true_false',
            question_ar: 'أرسل الله محمداً ﷺ إلى الناس جميعاً — عرباً وعجماً.',
            question_en: 'Allah sent Muhammad ﷺ to all of mankind — Arabs and non-Arabs.',
            correct: 'true',
            explanation_ar: 'قال الله تعالى: ﴿إنا أرسلناك شاهداً ومبشراً ونذيراً وداعياً إلى الله بإذنه﴾ — وهي رسالة عامة للناس أجمعين.',
          },
          // اختيار من متعدد — التقويم ص 23
          {
            type: 'multiple_choice',
            question_ar: 'لماذا أرسل الله محمداً ﷺ؟',
            question_en: 'Why did Allah send Muhammad ﷺ?',
            options_ar: [
              'لدعوة الناس إلى عبادة الله وحده وترك عبادة ما سواه',
              'لمعرفة حال الناس قبل الإسلام',
              'لتعليم الناس الكتابة والقراءة',
              'لأنه من أفضل القبائل',
            ],
            options_en: [
              'To call people to worship Allah alone and abandon other worship',
              'To know the condition of people before Islam',
              'To teach people reading and writing',
              'Because his tribe was the best',
            ],
            correct: 0,
            explanation_ar: 'أرسل الله محمداً ﷺ لدعوة الناس إلى عبادة الله وحده وترك عبادة ما سواه.',
          },
        ],
      },

      /* ─── الدرس الرابع: رسالة رسولنا محمد ﷺ (ص 24-25) ─── */
      {
        id: 'nabi_4',
        title_ar: 'الدرس الرابع: رسالة رسولنا محمد ﷺ',
        title_en: 'Lesson 4: The Message of Our Prophet Muhammad ﷺ',
        questions: [
          // اختيار من متعدد — الحكمة من الإرسال
          {
            type: 'multiple_choice',
            question_ar: 'ما الحكمة من إرسال الرسول محمد ﷺ؟',
            question_en: 'What is the wisdom behind sending the Prophet Muhammad ﷺ?',
            options_ar: [
              'لدعوة الناس إلى عبادة الله وحده وترك عبادة ما سواه',
              'لمعرفة حال الناس قبل الإسلام',
              'لتحقيق السلام بين القبائل',
              'لنشر اللغة العربية في العالم',
            ],
            options_en: [
              'To call people to worship Allah alone and leave worship of others',
              'To know the state of pre-Islamic people',
              'To achieve peace among tribes',
              'To spread Arabic language worldwide',
            ],
            correct: 0,
            explanation_ar: 'أرسل الله محمداً ﷺ لدعوة الناس إلى عبادة الله وحده وترك عبادة ما سواه — وهذا هو التوحيد.',
          },
          // مطابقة — المشركون والمسلمون (ص 25 نشاط 2)
          {
            type: 'matching',
            question_ar: 'صِل كل فريق بما يتفقون عليه:',
            question_en: 'Match each group to what they agree on:',
            pairs_ar: [
              { left: 'المشركون يتفقون في', right: 'الشرك' },
              { left: 'المسلمون يتفقون في', right: 'توحيد الله' },
            ],
            pairs_en: [
              { left: 'Polytheists agree on', right: 'Shirk (associating partners with Allah)' },
              { left: 'Muslims agree on', right: 'Tawhid (monotheism)' },
            ],
            explanation_ar: 'كان أكثر الناس قبل بعث النبي ﷺ على الشرك. أما المسلمون فيتفقون على توحيد الله.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'كان أكثر الناس قبل بعث النبي ﷺ على التوحيد.',
            question_en: 'Most people before the Prophet\'s ﷺ mission were upon Tawhid.',
            correct: 'false',
            explanation_ar: 'كان أكثر الناس قبل بعث النبي ﷺ على الشرك. وقد أرسله الله ليُخرجهم من الشرك إلى التوحيد.',
          },
          // اختيار من متعدد — التقويم ص 25
          {
            type: 'multiple_choice',
            question_ar: 'أرسل الله رسوله ﷺ لدعوة الناس إلى:',
            question_en: 'Allah sent His Messenger ﷺ to call people to:',
            options_ar: [
              'عبادة الله وحده وترك عبادة ما سواه',
              'معرفة حال الناس قبل الإسلام',
              'فقط إقامة الصلاة وإيتاء الزكاة',
              'الاتحاد والتضامن بين القبائل',
            ],
            options_en: [
              'Worship Allah alone and leave worship of others',
              'Know the condition of pre-Islamic people',
              'Only establish prayer and give zakat',
              'Unity and solidarity among tribes',
            ],
            correct: 0,
            explanation_ar: 'الهدف الأساسي من إرسال النبي ﷺ: دعوة الناس إلى عبادة الله وحده لا شريك له.',
          },
        ],
      },

      /* ─── الدرس الخامس: محبة الرسول ﷺ (ص 26-27) ─── */
      {
        id: 'nabi_5',
        title_ar: 'الدرس الخامس: محبة الرسول ﷺ',
        title_en: 'Lesson 5: Love for the Prophet ﷺ',
        questions: [
          // اختيار من متعدد — حكم محبة الرسول ﷺ
          {
            type: 'multiple_choice',
            question_ar: 'ما حكم محبة الرسول ﷺ على كل مسلم ومسلمة؟',
            question_en: 'What is the ruling on loving the Prophet ﷺ for every Muslim?',
            options_ar: [
              'واجبة — من أعظم الواجبات',
              'مستحبة — ليست واجبة',
              'اختيارية — لا حكم لها',
              'خاصة بالصحابة فقط',
            ],
            options_en: [
              'Obligatory — one of the greatest obligations',
              'Recommended — not obligatory',
              'Optional — no specific ruling',
              'Specific to the companions only',
            ],
            correct: 0,
            explanation_ar: 'محبة الرسول ﷺ من أعظم الواجبات على كل مسلم ومسلمة.',
          },
          // صح أم خطأ — الحديث
          {
            type: 'true_false',
            question_ar: 'قال النبي ﷺ: (لا يؤمن أحدكم حتى أكون أحب إليه من ولده ووالده والناس أجمعين).',
            question_en: 'The Prophet ﷺ said: "None of you will believe until I am more beloved to him than his child, parent, and all people."',
            correct: 'true',
            explanation_ar: 'هذا حديث صحيح أخرجه البخاري (15) ومسلم (44)، وهو دليل على وجوب محبته ﷺ.',
          },
          // مطابقة — ترتيب المحبة (ص 27 نشاط 1)
          {
            type: 'matching',
            question_ar: 'رتّب المحبة من الأعلى إلى الأدنى كما في نشاط الكتاب:',
            question_en: 'Order love from highest to lowest as in the textbook activity:',
            pairs_ar: [
              { left: 'المحبة الأولى (الأعلى)', right: 'الرسول ﷺ' },
              { left: 'المحبة الثانية', right: 'الصديق' },
            ],
            pairs_en: [
              { left: 'First love (highest)', right: 'The Prophet ﷺ' },
              { left: 'Second love', right: 'The close friend' },
            ],
            explanation_ar: 'محبة الرسول ﷺ مقدّمة على محبة الناس أجمعين — كما جاء في الحديث الشريف.',
          },
          // اختيار من متعدد — جزاء المحبة
          {
            type: 'multiple_choice',
            question_ar: 'ما جزاء من أحب الرسول ﷺ؟',
            question_en: 'What is the reward of whoever loves the Prophet ﷺ?',
            options_ar: [
              'كان مع الرسول ﷺ يوم القيامة',
              'يدخل الجنة بغير حساب',
              'يُعفى عنه في الدنيا والآخرة',
              'تُقبل منه جميع أعماله',
            ],
            options_en: [
              'Will be with the Prophet ﷺ on the Day of Judgment',
              'Will enter paradise without reckoning',
              'Will be forgiven in this life and the next',
              'All his deeds will be accepted',
            ],
            correct: 0,
            explanation_ar: 'من أحب الرسول ﷺ كان معه يوم القيامة.',
          },
          // صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'محبة الرسول ﷺ مقدّمة على محبة النفس والولد والوالد.',
            question_en: 'Love of the Prophet ﷺ takes precedence over love of oneself, children, and parents.',
            correct: 'true',
            explanation_ar: 'قال ﷺ: (حتى أكون أحب إليه من ولده ووالده والناس أجمعين) — أي محبته ﷺ مقدّمة على سائر المحبوبات.',
          },
        ],
      },

      /* ─── الدرس السادس: تصديق الرسول ﷺ وطاعته (ص 28-30) ─── */
      {
        id: 'nabi_6',
        title_ar: 'الدرس السادس: تصديق الرسول ﷺ وطاعته',
        title_en: 'Lesson 6: Believing and Obeying the Prophet ﷺ',
        questions: [
          // ترتيب — حقوق الرسول ﷺ (ص 28)
          {
            type: 'ordering',
            question_ar: 'رتّب حقوق الرسول ﷺ الأربعة كما وردت في الكتاب (ص 28):',
            question_en: 'Order the four rights of the Prophet ﷺ as in the textbook:',
            items_ar: [
              'تصديقه فيما ذكره من الأخبار',
              'طاعته فيما أمر به',
              'اجتناب ما نهى عنه الرسول ﷺ',
              'أن نعبد الله بما شرع',
            ],
            items_en: [
              'Believing him in what he reported',
              'Obeying him in what he commanded',
              'Avoiding what the Prophet ﷺ prohibited',
              'Worshipping Allah as he prescribed',
            ],
            explanation_ar: 'حقوق الرسول ﷺ الأربعة: ① التصديق ② الطاعة ③ الاجتناب ④ العبادة بما شرع.',
          },
          // مطابقة — ربط العمود (ص 29 نشاط)
          {
            type: 'matching',
            question_ar: 'صِل كل عبارة من (أ) بما يناسبها في (ب):',
            question_en: 'Match each statement from (A) to its pair in (B):',
            pairs_ar: [
              { left: 'يجب تصديق الرسول ﷺ', right: 'فيما ذكره من الأخبار' },
              { left: 'تجب طاعة الرسول ﷺ', right: 'فيما أمر به' },
              { left: 'يجب اجتناب', right: 'ما نهى عنه الرسول ﷺ' },
              { left: 'يجب أن نعبد الله', right: 'بما شرع' },
            ],
            pairs_en: [
              { left: 'We must believe the Prophet ﷺ', right: 'In what he reported' },
              { left: 'We must obey the Prophet ﷺ', right: 'In what he commanded' },
              { left: 'We must avoid', right: 'What the Prophet ﷺ prohibited' },
              { left: 'We must worship Allah', right: 'As he prescribed' },
            ],
            explanation_ar: 'حقوق الرسول ﷺ الأربعة مرتبطة ببعضها: التصديق في الأخبار، والطاعة في الأوامر، والاجتناب للنواهي، والعبادة بالمشروع.',
          },
          // صح أم خطأ — قصة علي ﴿رضي الله عنه﴾ (ص 28)
          {
            type: 'true_false',
            question_ar: 'طلب النبي ﷺ من علي بن أبي طالب رضي الله عنه أن يبيت في فراشه ليلة الهجرة.',
            question_en: 'The Prophet ﷺ asked Ali ibn Abi Talib (RA) to sleep in his bed on the night of the Hijra.',
            correct: 'true',
            explanation_ar: 'طلب النبي ﷺ من علي بن أبي طالب رضي الله عنه أن يبيت في فراشه ليلة الهجرة، وأن يرد الأمانات إلى أهلها، ففعل ذلك — وهذا من أعظم أمثلة طاعة الصحابة للرسول ﷺ.',
          },
          // تصنيف — طاعة أم معصية
          {
            type: 'classify',
            question_ar: 'صنّف كل فعل إلى: طاعة للرسول ﷺ أو مخالفة له:',
            question_en: 'Classify each action: obedience to the Prophet ﷺ OR opposition:',
            categories_ar: ['طاعة الرسول ﷺ', 'مخالفة الرسول ﷺ'],
            categories_en: ['Obeying the Prophet ﷺ', 'Opposing the Prophet ﷺ'],
            items_ar: ['يشرب بيده اليسرى', 'يطيع والديه دائماً', 'يقول الصدق', 'يسرف في استعمال الماء', 'يلعب في وقت الصلاة'],
            items_en: ['Drinks with left hand', 'Always obeys parents', 'Tells the truth', 'Wastes water', 'Plays during prayer time'],
            correct_categories: [1, 0, 0, 1, 1],
            explanation_ar: 'الشرب باليمنى طاعة، وطاعة الوالدين طاعة، وقول الصدق طاعة. أما الشرب بالشمال والإسراف واللعب في الصلاة فمخالفة.',
          },
          // اختيار من متعدد — التقويم ص 30
          {
            type: 'multiple_choice',
            question_ar: 'أحدّد حقوق الرسول ﷺ — كم عددها؟',
            question_en: 'How many rights does the Prophet ﷺ have upon us (as stated in the textbook)?',
            options_ar: ['أربعة', 'ثلاثة', 'خمسة', 'اثنان'],
            options_en: ['Four', 'Three', 'Five', 'Two'],
            correct: 0,
            explanation_ar: 'حقوق الرسول ﷺ أربعة: التصديق، الطاعة، الاجتناب، العبادة بما شرع.',
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════
   *  الوحدة الثانية: القرآن الكريم  (ص 31-33)
   * ═══════════════════════════════════════════════════ */
  {
    id: 'quran_kareem',
    title_ar: 'الوحدة الثانية: القرآن الكريم',
    title_en: 'Unit 2: The Holy Quran',
    color: '#166534',
    emoji: '📖',
    lessons: [
      /* ─── الدرس السابع: القرآن الكريم (كتاب الله تعالى) (ص 32-33) ─── */
      {
        id: 'quran_1',
        title_ar: 'الدرس السابع: القرآن الكريم (كتاب الله تعالى)',
        title_en: 'Lesson 7: The Holy Quran (Book of Allah)',
        questions: [
          // اختيار من متعدد — تعريف القرآن
          {
            type: 'multiple_choice',
            question_ar: 'ما المراد بالقرآن الكريم؟',
            question_en: 'What is meant by the Holy Quran?',
            options_ar: [
              'هو كلام الله تعالى الذي نزل به جبريل ﴿عليه السلام﴾ على رسوله محمد ﷺ',
              'هو الكتاب الذي كتبه الصحابة',
              'هو مجموعة من أحاديث النبي ﷺ',
              'هو الكتاب المقدس للمسلمين والمسيحيين',
            ],
            options_en: [
              'The word of Allah revealed by Jibreel (AS) to Prophet Muhammad ﷺ',
              'A book written by the companions',
              'A collection of the Prophet\'s hadiths',
              'The holy book for Muslims and Christians',
            ],
            correct: 0,
            explanation_ar: 'القرآن الكريم: هو كلام الله تعالى الذي نزل به جبريل ﴿عليه السلام﴾ على رسولنا محمد ﷺ.',
          },
          // مطابقة — الواجبات تجاه القرآن (ص 32)
          {
            type: 'matching',
            question_ar: 'صِل كل واجب تجاه القرآن بدليله:',
            question_en: 'Match each obligation toward the Quran to its evidence:',
            pairs_ar: [
              { left: 'نؤمن بأنه كلام الله', right: '﴿بل هو قرآن مجيد﴾' },
              { left: 'يجب محبة القرآن وتعظيمه', right: '﴿بل هو قرآن مجيد﴾' },
              { left: 'الحرص على قراءة القرآن والعمل به', right: '﴿ورتّل القرآن ترتيلاً﴾' },
            ],
            pairs_en: [
              { left: 'Believe it is Allah\'s word', right: '"Rather, it is a glorious Quran"' },
              { left: 'Love and revere the Quran', right: '"Rather, it is a glorious Quran"' },
              { left: 'Be keen to recite the Quran and act upon it', right: '"And recite the Quran with measured recitation"' },
            ],
            explanation_ar: 'الواجبات تجاه القرآن: الإيمان به + المحبة والتعظيم + الحرص على القراءة والعمل به.',
          },
          // تصنيف — واجب تجاه القرآن أم لا (ص 33 نشاط)
          {
            type: 'classify',
            question_ar: 'صنّف ما يلي إلى: واجب تجاه القرآن الكريم أو ليس واجباً تجاهه:',
            question_en: 'Classify: An obligation toward the Quran OR not:',
            categories_ar: ['واجب تجاه القرآن', 'ليس واجباً تجاه القرآن'],
            categories_en: ['Obligation toward the Quran', 'Not an obligation toward the Quran'],
            items_ar: ['تعظيمه والعمل به', 'الطهارة عند مس المصحف', 'الإنصات إلى قراءة القرآن', 'وضع الكتب فوقه', 'عدم الإنصات إلى قراءة القرآن'],
            items_en: ['Revere it and act upon it', 'Purity when touching the Mushaf', 'Listening attentively to Quran recitation', 'Placing books on top of it', 'Not listening to Quran recitation'],
            correct_categories: [0, 0, 0, 1, 1],
            explanation_ar: 'الواجبات تجاه القرآن: التعظيم والعمل، الطهارة عند المس، الإنصات. أما وضع الكتب فوقه وعدم الإنصات فليسا من الواجبات — بل هما من الإساءة إليه.',
          },
          // صح أم خطأ — جبريل عليه السلام
          {
            type: 'true_false',
            question_ar: 'الملَك الذي نزل بالقرآن الكريم على النبي ﷺ هو جبريل عليه السلام.',
            question_en: 'The angel who brought the Quran down to the Prophet ﷺ was Jibreel (AS).',
            correct: 'true',
            explanation_ar: 'نزل القرآن الكريم بواسطة جبريل ﴿عليه السلام﴾ على رسولنا محمد ﷺ.',
          },
          // اختيار من متعدد — التقويم ص 33
          {
            type: 'multiple_choice',
            question_ar: 'ما الواجب علينا تجاه القرآن الكريم؟ (من التقويم ص 33)',
            question_en: 'What is our obligation toward the Holy Quran? (From the evaluation p.33)',
            options_ar: [
              'الإيمان به ومحبته وتعظيمه والحرص على قراءته والعمل به',
              'حفظه فقط دون العمل به',
              'قراءته في المناسبات الخاصة',
              'الإنصات إليه فقط دون قراءته',
            ],
            options_en: [
              'Believe in it, love it, revere it, and be keen to recite and act upon it',
              'Only memorize it without acting upon it',
              'Read it on special occasions only',
              'Only listen to it without reciting',
            ],
            correct: 0,
            explanation_ar: 'الواجب علينا تجاه القرآن: الإيمان بأنه كلام الله + محبته وتعظيمه + الحرص على قراءته والعمل به.',
          },
          // مطابقة — من الذي نزل بالقرآن (التقويم ص 33)
          {
            type: 'matching',
            question_ar: 'صِل كل سؤال بإجابته (التقويم ص 33):',
            question_en: 'Match each question to its answer (Evaluation p.33):',
            pairs_ar: [
              { left: 'من الملَك الذي نزل بالقرآن على النبي ﷺ؟', right: 'جبريل عليه السلام' },
              { left: 'ما الواجب علينا تجاه القرآن الكريم؟', right: 'الإيمان به وتعظيمه والعمل به' },
            ],
            pairs_en: [
              { left: 'Which angel brought the Quran to the Prophet ﷺ?', right: 'Jibreel (peace be upon him)' },
              { left: 'What is our obligation toward the Quran?', right: 'Believe in it, revere it, and act upon it' },
            ],
            explanation_ar: 'الملَك الذي نزل بالقرآن: جبريل. والواجب تجاه القرآن: الإيمان والتعظيم والعمل.',
          },
        ],
      },
    ],
  },
];

export const TOTAL_TAWHEED_UNITS = ISLAMIC_G2_S2_TAWHEED_UNITS.length;
export const TOTAL_TAWHEED_LESSONS = ISLAMIC_G2_S2_TAWHEED_UNITS.reduce((s, u) => s + u.lessons.length, 0);
export const TOTAL_TAWHEED_QUESTIONS = ISLAMIC_G2_S2_TAWHEED_UNITS.reduce(
  (s, u) => s + u.lessons.reduce((ls, l) => ls + l.questions.length, 0), 0
);