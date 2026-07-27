// أسئلة تفاعلية — المهارات الحياتية والأسرية · الصف الأول الابتدائي · ف٢
// مشتقّة مباشرة من مفاهيم/أنشطة/نصائح كل درس في الكتاب الرسمي (وزارة التعليم 1447)

// كل سؤال: { type, question_ar, explanation_ar, golden_rule_ar?, ...حقول النوع }
// الأنواع: matching · ordering · yesno · info · classify
// onAnswer('1') = صحيح، onAnswer('0') = خطأ

const UNITS = [

  /* ═══════════════════════════════════════════════════
   *  الوحدة الأولى: صِحَّتي وسَلَامَتي
   * ═══════════════════════════════════════════════════ */
  {
    topics: [

      /* ─── نظافة الوجه ─── */
      {
        questions: [
          {
            type: 'identify',
            visual_emoji: '😊',
            question_ar: 'ما هذا الجزء من الوجه؟',
            options_ar: ['العينان', 'الفم', 'الأنف'],
            correct_index: 2,
            explanation_ar: 'الأنف جزء من الوجه، ومن أجزاء الوجه أيضاً: العينان والفم.',
            golden_rule_ar: 'أجزاء الوجه: العينان، الأنف، الفم.',
          },
          {
            type: 'matching',
            question_ar: 'صِل كل جزء من الوجه بوظيفته:',
            pairs_ar: [
              { left: 'العينان', right: 'أُبصر بهما الأشياء' },
              { left: 'الأنف', right: 'أَشُمّ به الروائح' },
              { left: 'الفم', right: 'آكل وأتكلم به' },
            ],
            explanation_ar: 'العينان للإبصار، الأنف للشم، الفم للأكل والكلام — كل جزء له وظيفة.',
            golden_rule_ar: 'أحافظ على نظافة كل أجزاء وجهي يومياً.',
          },
          {
            type: 'yesno',
            visual_emoji: '🧼',
            question_ar: 'هل يجب المحافظة على نظافة الوجه يومياً؟',
            correct_index: 0,
            explanation_ar: 'نعم — نظافة الوجه يومياً تحمي البشرة من الأوساخ والأمراض.',
            golden_rule_ar: 'نظافة الوجه يومياً تحمي صحتي.',
          },
          {
            type: 'info',
            visual_emoji: '🧻',
            question_ar: 'ما البديل لتنظيف الوجه عند عدم توفر الماء (كالرحلات البرية)؟',
            options_ar: ['المناديل المبللة النظيفة', 'التراب', 'لا أنظفه أبداً', 'الماء العكر'],
            correct_index: 0,
            explanation_ar: 'عند عدم توفر الماء نستخدم المناديل المبللة النظيفة لتنظيف الوجه — كما ورد في نشاط الكتاب.',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات تنظيف الوجه بالترتيب الصحيح:',
            ordering_items_ar: ['أُبلّل وجهي بالماء', 'أضع الصابون وأُدلّك به وجهي بلطف', 'أشطف وجهي بالماء', 'أجفّف وجهي بمنشفة نظيفة'],
            explanation_ar: 'خطوات تنظيف الوجه: بلّل ← صابون ودعك ← شطف ← تجفيف بمنشفة نظيفة.',
          },
          {
            type: 'classify',
            question_ar: 'صنّف كل صورة إلى: من أجزاء الوجه / ليس من الوجه',
            classify_categories_ar: ['من أجزاء الوجه', 'ليس من الوجه'],
            classify_items_ar: [
              { item: '👀', correct_category: 0 },
              { item: '👃', correct_category: 0 },
              { item: '🦶', correct_category: 1 },
              { item: '👄', correct_category: 0 },
              { item: '✋', correct_category: 1 },
            ],
            explanation_ar: 'من الوجه: العينان 👀، الأنف 👃، الفم 👄. ليس من الوجه: القدم 🦶 واليد ✋.',
          },
        ],
      },

      /* ─── نظافة اليدين والقدمين ─── */
      {
        questions: [
          {
            type: 'yesno',
            visual_emoji: '🤲',
            question_ar: 'هل يجب غسل اليدين قبل الطعام وبعده؟',
            correct_index: 0,
            explanation_ar: 'نعم — غسل اليدين قبل الطعام وبعده يمنع انتقال الجراثيم والأمراض.',
            golden_rule_ar: 'أغسل يدي قبل الطعام وبعده.',
          },
          {
            type: 'matching',
            question_ar: 'صِل كل أداة عناية بالجزء المناسب لها (نشاط الكتاب):',
            pairs_ar: [
              { left: 'الجوارب', right: 'القدمين' },
              { left: 'مقص الأظافر', right: 'الأظافر' },
              { left: 'الفرشاة', right: 'الأظافر/الأسنان' },
              { left: 'الحذاء', right: 'القدمين' },
            ],
            explanation_ar: 'الجوارب والحذاء للقدمين، مقص الأظافر للأظافر، الفرشاة للعناية — كما في نشاط توصيل أدوات العناية.',
          },
          {
            type: 'info',
            visual_emoji: '💅',
            question_ar: 'ماذا يجب فعله بالأظافر بانتظام؟',
            options_ar: ['تقليمها بانتظام', 'تركها تطول جداً', 'طلاؤها بأي لون', 'لا شيء'],
            correct_index: 0,
            explanation_ar: 'يجب تقليم الأظافر بانتظام لتظل نظيفة ولا تتجمع تحتها الأوساخ والجراثيم.',
          },
          {
            type: 'info',
            visual_emoji: '👟',
            question_ar: 'لماذا نختار الحذاء المناسب؟',
            options_ar: ['لسلامة القدمين وراحتهما', 'ليكون أغلى ثمناً', 'ليكون ملوناً فقط', 'لا أهمية لذلك'],
            correct_index: 0,
            explanation_ar: 'اختيار الحذاء المناسب يحقق سلامة القدمين وراحتهما — كما ورد في مفاهيم الدرس.',
            golden_rule_ar: 'الحذاء المناسب يحمي سلامة قدمي.',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات غسل اليدين بالترتيب الصحيح:',
            ordering_items_ar: ['أفتح الصنبور وأُبلّل يدي', 'أضع الصابون وأفرك يدي', 'أشطف يدي بالماء', 'أجفف يدي بمنشفة نظيفة'],
            explanation_ar: 'غسل اليدين: بلّل ← صابون وفرك ← شطف ← تجفيف.',
          },
          {
            type: 'classify',
            question_ar: 'صنّف كل أداة إلى: للعناية باليدين / للعناية بالقدمين',
            classify_categories_ar: ['لليدين', 'للقدمين'],
            classify_items_ar: [
              { item: '✂️', correct_category: 0 },
              { item: '🧼', correct_category: 0 },
              { item: '🧦', correct_category: 1 },
              { item: '👟', correct_category: 1 },
            ],
            explanation_ar: 'لليدين: مقص الأظافر ✂️ والصابون 🧼. للقدمين: الجوارب 🧦 والحذاء 👟.',
          },
        ],
      },

      /* ─── العناية بالأسنان ─── */
      {
        questions: [
          {
            type: 'matching',
            question_ar: 'صِل نوع الأسنان بوصفه:',
            pairs_ar: [
              { left: 'الأسنان اللبنية', right: 'تسقط عند الأطفال ثم تنبت مكانها الدائمة' },
              { left: 'الأسنان الدائمة', right: 'تبقى مدى الحياة إن حافظنا عليها' },
            ],
            explanation_ar: 'اللبنية تسقط عند الأطفال، والدائمة تبقى مدى الحياة — كما ورد في مفاهيم الدرس.',
            golden_rule_ar: 'للأسنان نوعان: لبنية ودائمة.',
          },
          {
            type: 'info',
            visual_emoji: '🪥',
            question_ar: 'كم مرة يجب تنظيف الأسنان يومياً؟',
            options_ar: ['مرتين يومياً', 'مرة كل أسبوع', 'لا أنظفها', 'كل شهر'],
            correct_index: 0,
            explanation_ar: 'يجب تنظيف الأسنان مرتين يومياً للحفاظ عليها سليمة.',
            golden_rule_ar: 'أنظّف أسناني مرتين كل يوم.',
          },
          {
            type: 'classify',
            question_ar: 'صنّف كل طعام إلى: مفيد للأسنان / ضار بالأسنان (نشاط الكتاب)',
            classify_categories_ar: ['مفيد للأسنان', 'ضار بالأسنان'],
            classify_items_ar: [
              { item: '🥛', correct_category: 0 },
              { item: '🍎', correct_category: 0 },
              { item: '🍬', correct_category: 1 },
              { item: '🍫', correct_category: 1 },
              { item: '🥕', correct_category: 0 },
            ],
            explanation_ar: 'مفيد: الحليب 🥛 والتفاح 🍎 والجزر 🥕. ضار: الحلوى 🍬 والشوكولاتة 🍫 — مطابقة الأطعمة بالأسنان السليمة والمتسوسة.',
          },
          {
            type: 'yesno',
            visual_emoji: '🍭',
            question_ar: 'هل الإكثار من الحلوى يسبب تسوّس الأسنان؟',
            correct_index: 0,
            explanation_ar: 'نعم — الحلوى والأطعمة الضارة تسبب تسوّس الأسنان.',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات تنظيف الأسنان:',
            ordering_items_ar: ['أضع معجون الأسنان على الفرشاة', 'أُنظّف أسناني حركاً لأعلى وأسفل', 'أُمضمض بالماء', 'أغسل الفرشاة'],
            explanation_ar: 'تنظيف الأسنان: معجون ← تفريك ← مضمضة ← غسل الفرشاة.',
          },
          {
            type: 'info',
            visual_emoji: '🦷',
            question_ar: 'ما الذي يحدث للأسنان إن لم ننظفها؟',
            options_ar: ['تتسوّس وتؤلم', 'تصبح أقوى', 'تصبح أنظف', 'لا يتغير شيء'],
            correct_index: 0,
            explanation_ar: 'إن لم ننظف الأسنان تتسوّس وتؤلم — لذلك ننظفها مرتين يومياً.',
          },
        ],
      },

      /* ─── السلامة المرورية ─── */
      {
        questions: [
          {
            type: 'matching',
            question_ar: 'صِل كل لون من إشارة المرور بمعناه (للسيارات):',
            pairs_ar: [
              { left: 'الأحمر', right: 'قف' },
              { left: 'الأصفر', right: 'استعد للوقوف' },
              { left: 'الأخضر', right: 'عبور/مرور' },
            ],
            explanation_ar: 'الأحمر=قف، الأصفر=استعد، الأخضر=مرور — ألوان إشارة المرور للسيارات.',
            golden_rule_ar: 'الأحمر قف · الأصفر استعد · الأخضر مرور.',
          },
          {
            type: 'yesno',
            visual_emoji: '🛝',
            question_ar: 'هل يجب اللعب في أماكن آمنة بعيدة عن الطريق؟',
            correct_index: 0,
            explanation_ar: 'نعم — اللعب بعيداً عن الطريق يحمينا من الحوادث، كما ورد في مفاهيم الدرس.',
            golden_rule_ar: 'ألعب في أماكن آمنة بعيدة عن الطريق.',
          },
          {
            type: 'info',
            visual_emoji: '🚦',
            question_ar: 'ماذا يعني اللون الأحمر في إشارة المرور؟',
            options_ar: ['قف', 'مرور', 'استعد', 'أسرع'],
            correct_index: 0,
            explanation_ar: 'الأحمر يعني قف — يجب التوقف تماماً.',
          },
          {
            type: 'info',
            visual_emoji: '🚸',
            question_ar: 'ما الإشارة الضوئية الخاصة بالمشاة؟',
            options_ar: ['إشارة فيها شخص أخضر/أحمر', 'إشارة السيارات فقط', 'لا توجد إشارة للمشاة', 'إشارة القطار'],
            correct_index: 0,
            explanation_ar: 'إشارة المشاة فيها شخص أخضر (عبور) أو أحمر (انتظر) — كما في نشاط الكتاب (□ للسيارات و△ للمشاة).',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات عبور الطريق بأمان:',
            ordering_items_ar: ['أقف على الرصيف', 'أنظر يميناً ويساراً', 'أنتظر إشارة المشاء الخضراء', 'أعبر بهدوء دون جري'],
            explanation_ar: 'عبور الطريق: وقف على الرصيف ← انظر يميناً ويساراً ← انتظر الإشاء الخضراء ← اعبر بهدوء.',
            golden_rule_ar: 'أنظر يميناً ويساراً قبل العبور.',
          },
          {
            type: 'classify',
            question_ar: 'صنّف كل تصرف إلى: آمن / خطر',
            classify_categories_ar: ['آمن', 'خطر'],
            classify_items_ar: [
              { item: '🚸', correct_category: 0 },
              { item: '🏃', correct_category: 1 },
              { item: '🛑', correct_category: 0 },
              { item: '🎮', correct_category: 1 },
            ],
            explanation_ar: 'آمن: العبور من ممر المشاة 🚸 والوقوف عند الإشارة 🛑. خطر: الجري أمام سيارة 🏃 واللعب في الطريق 🎮.',
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════
   *  الوحدة الثانية: شَخْصِيَّتي
   * ═══════════════════════════════════════════════════ */
  {
    topics: [

      /* ─── مشاعري وانفعالاتي ─── */
      {
        questions: [
          {
            type: 'identify',
            visual_emoji: '😄',
            question_ar: 'ما هذا الشعور؟',
            options_ar: ['الفرح', 'الحزن', 'الغضب', 'الخوف'],
            correct_index: 0,
            explanation_ar: 'الفرح — شعور جميل عندما يحدث شيء يسعدني.',
          },
          {
            type: 'identify',
            visual_emoji: '😡',
            question_ar: 'ما هذا الشعور؟',
            options_ar: ['الغضب', 'الفرح', 'الخوف', 'الحزن'],
            correct_index: 0,
            explanation_ar: 'الغضب — يجب التعامل معه بطريقة هادئة وإيجابية.',
          },
          {
            type: 'matching',
            question_ar: 'صِل كل شعور بالموقف الذي يُحدثه:',
            pairs_ar: [
              { left: 'الفرح', right: 'نجاحُ في الاختبار' },
              { left: 'الحزن', right: 'فقدُ لعبة أحبها' },
              { left: 'الخوف', right: 'الظلامُ الشديد' },
              { left: 'الغضب', right: 'مشاركةُ أحدهم أغراضي دون إذن' },
            ],
            explanation_ar: 'الفرح عند النجاح، الحزن عند الفقد، الخوف في الظلام، الغضب عند الإساءة — التعرف على المشاعر المختلفة.',
            golden_rule_ar: 'المشاعر أربعة: الفرح، الحزن، الغضب، الخوف.',
          },
          {
            type: 'yesno',
            visual_emoji: '🗣️',
            question_ar: 'هل يجب التعبير عن المشاعر بطريقة صحية وملائمة؟',
            correct_index: 0,
            explanation_ar: 'نعم — أعبر عن مشاعري بكلام هادئ لا بالضرب أو الصراخ.',
            golden_rule_ar: 'أعبر عن مشاعري بطريقة صحية.',
          },
          {
            type: 'info',
            visual_emoji: '😠',
            question_ar: 'كيف أتعامل مع المشاعر السلبية كالغضب؟',
            options_ar: ['بطرق إيجابية كالهدوء والحديث', 'بالضرب', 'بالصراخ على الآخرين', 'بالكتمان دائماً'],
            correct_index: 0,
            explanation_ar: 'أتعامل مع المشاعر السلبية بطرق إيجابية: أهدأ، أحادث نفسي أو شخصاً أثق به — كما ورد في المفاهيم.',
          },
          {
            type: 'classify',
            question_ar: 'صنّف كل شعور إلى: إيجابي / سلبي',
            classify_categories_ar: ['إيجابي', 'سلبي'],
            classify_items_ar: [
              { item: '😄', correct_category: 0 },
              { item: '😢', correct_category: 1 },
              { item: '😡', correct_category: 1 },
              { item: '😨', correct_category: 1 },
            ],
            explanation_ar: 'إيجابي: الفرح 😄. سلبي: الحزن 😢 والغضب 😡 والخوف 😨.',
          },
        ],
      },

      /* ─── التعامل مع المال ─── */
      {
        questions: [
          {
            type: 'matching',
            question_ar: 'صِل نوع العملة السعودية بشكلها (نشاط الكتاب):',
            pairs_ar: [
              { left: 'الورق النقدي', right: 'أوراق تُسمى الريالات' },
              { left: 'القطع المعدنية', right: 'قطع معدنية صغيرة' },
            ],
            explanation_ar: 'العملة السعودية نوعان: أوراق (ريالات) وقطع معدنية — كما ورد في المفاهيم.',
            golden_rule_ar: 'العملة السعودية: أوراق وقطع معدنية.',
          },
          {
            type: 'yesno',
            visual_emoji: '🏦',
            question_ar: 'هل توفير جزء من المصروف يُسمى ادخاراً؟',
            correct_index: 0,
            explanation_ar: 'نعم — توفير مبلغ من المصروف يُسمى ادخاراً، وهو عادة حسنة (نصيحة الكتاب).',
            golden_rule_ar: 'أدخر جزءاً من مصروفي.',
          },
          {
            type: 'info',
            visual_emoji: '💰',
            question_ar: 'ماذا أفعل قبل الشراء وبعده (نصيحة الكتاب)؟',
            options_ar: ['أعدّ النقود وأحرص عليها', 'أرمي النقود', 'لا أحسب شيئاً', 'أعطيها كلها لصديق'],
            correct_index: 0,
            explanation_ar: 'عدّ النقود قبل الشراء وبعده والحرص عليها أمر ضروري — من نصائح الكتاب.',
            golden_rule_ar: 'أعدّ نقودي قبل الشراء وبعده.',
          },
          {
            type: 'info',
            visual_emoji: '🛒',
            question_ar: 'ماذا أشتري بحدود قدرة والديّ المالية؟',
            options_ar: ['الاحتياجات فقط', 'كل ما أرغب', 'أغلى الأشياء', 'ما يشتريه أصدقائي'],
            correct_index: 0,
            explanation_ar: 'أشتري الاحتياجات فقط بحدود القدرة المالية للوالدين — من نصائح الكتاب.',
            golden_rule_ar: 'أشتري الاحتياجات فقط.',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات الشراء بالترتيب الصحيح:',
            ordering_items_ar: ['أعدّ نقودي', 'أختار ما أحتاجه', 'أدفع الثمن للبائع', 'أحسب الباقي وأدخره'],
            explanation_ar: 'الشراء: عدّ النقود ← اختيار الاحتياج ← الدفع ← حساب الباقي والادخار.',
            golden_rule_ar: 'بعد الشراء أدخر ما تبقى.',
          },
          {
            type: 'classify',
            question_ar: 'صنّف كل صورة إلى: عملة ورقية / عملة معدنية',
            classify_categories_ar: ['عملة ورقية', 'عملة معدنية'],
            classify_items_ar: [
              { item: '💵', correct_category: 0 },
              { item: '🪙', correct_category: 1 },
              { item: '🏦', correct_category: 0 },
            ],
            explanation_ar: 'ورقية: 💵. معدنية: 🪙. (🏦 بنك/مصرف ليس عملة لكنه رمز نقدي).',
          },
        ],
      },

      /* ─── مهارات التواصل ─── */
      {
        questions: [
          {
            type: 'yesno',
            visual_emoji: '👥',
            question_ar: 'هل التواصل الفعال مع الآخرين مهم؟',
            correct_index: 0,
            explanation_ar: 'نعم — التواصل الفعال مع الآخرين مهارة حياتية مهمة.',
            golden_rule_ar: 'التواصل الفعال مهارة مهمة.',
          },
          {
            type: 'matching',
            question_ar: 'صِل كل مهارة تواصل بمعناها:',
            pairs_ar: [
              { left: 'الاستماع الجيد', right: 'أُنصت بهدوء لمن يتحدث' },
              { left: 'التعبير الواضح', right: 'أتحدث بصوت مفهوم وواضح' },
              { left: 'لغة الإشارة', right: 'أتحدث بيدي مع الصمّ' },
            ],
            explanation_ar: 'الاستماع الجيد: إنصات. التعبير الواضح: حديث مفهوم. لغة الإشارة: تواصل مع الصم — مهارات التواصل.',
            golden_rule_ar: 'أستمع جيداً وأعبر بوضوح.',
          },
          {
            type: 'info',
            visual_emoji: '🤟',
            question_ar: 'بأي لغة أتواصل مع ذوي الإعاقة السمعية (الصمّ)؟',
            options_ar: ['لغة الإشارة السعودية', 'اللغة الإنجليزية', 'لغة الإشارات الضوئية', 'لا توجد لغة'],
            correct_index: 0,
            explanation_ar: 'أتتواصل مع الصمّ بلغة الإشارة السعودية — كما ورد في مفاهيم الدرس وأنشطته.',
            golden_rule_ar: 'لغة الإشارة السعودية توصلني بالصمّ.',
          },
          {
            type: 'yesno',
            visual_emoji: '👂',
            question_ar: 'هل الاستماع الجيد جزء من مهارات التواصل؟',
            correct_index: 0,
            explanation_ar: 'نعم — الاستماع الجيد أحد مهارات التواصل الفعال.',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات التواصل الفعال:',
            ordering_items_ar: ['أنظر إلى من يتحدث', 'أستمع بهدوء دون مقاطعة', 'أفهم ما يقول', 'أرد بوضوح ولباقة'],
            explanation_ar: 'التواصل الفعال: نظر ← استماع ← فهم ← رد واضح.',
            golden_rule_ar: 'أنصت ثم أرد بوضوح.',
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════
   *  الوحدة الثالثة: وَقْتِي
   * ═══════════════════════════════════════════════════ */
  {
    topics: [

      /* ─── تنظيم الوقت ─── */
      {
        questions: [
          {
            type: 'yesno',
            visual_emoji: '⏰',
            question_ar: 'هل كل عمل نقوم به يحتاج إلى وقت؟',
            correct_index: 0,
            explanation_ar: 'نعم — كل عمل نقوم به يحتاج إلى وقت، كما ورد في المفاهيم.',
            golden_rule_ar: 'كل عمل يحتاج إلى وقت.',
          },
          {
            type: 'matching',
            question_ar: 'صِل كل وقت من اليوم بنشاطه المناسب:',
            pairs_ar: [
              { left: 'وقت النوم', right: 'الليل' },
              { left: 'وقت العمل والدراسة', right: 'النهار' },
              { left: 'وقت الراحة', right: 'بين الأنشطة' },
            ],
            explanation_ar: 'اليوم ينقسم إلى: نوم (ليل)، عمل ودراسة (نهار)، راحة (بين الأنشطة) — كما ورد في المفاهيم.',
            golden_rule_ar: 'اليوم: نوم وعمل وراحة.',
          },
          {
            type: 'yesno',
            visual_emoji: '🌙',
            question_ar: 'هل تعاقب الليل والنهار يساعدنا على تنظيم وقتنا؟',
            correct_index: 0,
            explanation_ar: 'نعم — تعاقب الليل والنهار علامة نستدل بها على الوقت، كما جعلها الله (نصيحة الكتاب).',
            golden_rule_ar: 'خلق الله الليل والنهار علامة للوقت.',
          },
          {
            type: 'info',
            visual_emoji: '🌅',
            question_ar: 'متى يكون النوم المناسب (نصيحة الكتاب)؟',
            options_ar: ['ليلاً', 'نهاراً دائماً', 'في المدرسة', 'أي وقت'],
            correct_index: 0,
            explanation_ar: 'النوم ليلاً والاستيقاظ نهاراً يحدد كيفية قضاء الوقت طوال اليوم — من نصائح الكتاب.',
            golden_rule_ar: 'أنام ليلاً وأستيقظ نهاراً.',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب الأعمال اليومية بعد الاستيقاظ (نشاط الكتاب):',
            ordering_items_ar: ['أستيقظ من النوم', 'أتوضأ وأصلي', 'أتناول فطوري', 'أذهب إلى المدرسة'],
            explanation_ar: 'بعد الاستيقاظ: وضوء وصلاة ← فطور ← الذهاب للمدرسة — ترتيب الأعمال اليومية.',
            golden_rule_ar: 'أرتّب يومي منذ الاستيقاظ.',
          },
          {
            type: 'classify',
            question_ar: 'صنّف كل نشاط إلى: نهاري / ليلي',
            classify_categories_ar: ['نهاري', 'ليلي'],
            classify_items_ar: [
              { item: '☀️', correct_category: 0 },
              { item: '🌙', correct_category: 1 },
              { item: '🏫', correct_category: 0 },
              { item: '😴', correct_category: 1 },
            ],
            explanation_ar: 'نهاري: المدرسة 🏫 والشمس ☀️. ليلي: النوم 😴 والقمر 🌙.',
          },
        ],
      },

      /* ─── وقت الفراغ ─── */
      {
        questions: [
          {
            type: 'info',
            visual_emoji: '🎯',
            question_ar: 'ما وقت الفراغ؟',
            options_ar: ['الوقت الذي لا أعمل فيه', 'وقت الدراسة', 'وقت النوم', 'وقت الطعام'],
            correct_index: 0,
            explanation_ar: 'وقت الفراغ هو الوقت الذي لا أعمل فيه — كما ورد في المفاهيم.',
            golden_rule_ar: 'وقت الفراغ: الوقت الذي لا أعمل فيه.',
          },
          {
            type: 'yesno',
            visual_emoji: '📚',
            question_ar: 'هل ينبغي قضاء وقت الفراغ بعمل مفيد؟',
            correct_index: 0,
            explanation_ar: 'نعم — ينبغي قضاء وقت الفراغ بعمل مفيد وبناء، كما ورد في المفاهيم.',
            golden_rule_ar: 'أقضي وقت فراغي بعمل مفيد.',
          },
          {
            type: 'matching',
            question_ar: 'صِل كل نشاط بنوعه في وقت الفراغ:',
            pairs_ar: [
              { left: 'قراءة قصة', right: 'هواية مفيدة' },
              { left: 'اللعب العشوائي في الطريق', right: 'غير مفيد' },
              { left: 'رسم لوحة', right: 'هواية مفيدة' },
            ],
            explanation_ar: 'الهوايات والأنشطة البناءة مفيدة: قراءة قصة، رسم. واللعب في الطريق غير مفيد — من المفاهيم.',
            golden_rule_ar: 'الهوايات البناءة استثمار لوقتي.',
          },
          {
            type: 'classify',
            question_ar: 'صنّف كل نشاط إلى: مفيد في وقت الفراغ / غير مفيد',
            classify_categories_ar: ['مفيد', 'غير مفيد'],
            classify_items_ar: [
              { item: '📖', correct_category: 0 },
              { item: '⚽', correct_category: 0 },
              { item: '📱', correct_category: 1 },
              { item: '🎮', correct_category: 1 },
            ],
            explanation_ar: 'مفيد: القراءة 📖 والرياضة ⚽. غير مفيد (بإفراط): الجوال 📱 وألعاب الشاشة 🎮.',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات استثمار وقت الفراغ:',
            ordering_items_ar: ['أختار نشاطاً مفيداً أحبه', 'أمارسه بهدوء', 'أنهيه وأرتاح', 'أستعد للعمل التالي'],
            explanation_ar: 'استثمار الفراغ: اختيار نشاط مفيد ← ممارسة ← راحة ← استعداد للعمل التالي.',
          },
        ],
      },

      /* ─── الوقت المبكر والمتأخر ─── */
      {
        questions: [
          {
            type: 'info',
            visual_emoji: '⏰',
            question_ar: 'ما معنى الوصول المبكر؟',
            options_ar: ['الوصول قبل الوقت المحدد', 'الوصول بعد انتهاء الوقت', 'عدم الحضور', 'التأخر دائماً'],
            correct_index: 0,
            explanation_ar: 'الوصول المبكر يعني القدوم قبل الوقت المحدد — وله فوائد كما ورد في المفاهيم.',
            golden_rule_ar: 'الوصول المبكر قبل الوقت المحدد.',
          },
          {
            type: 'yesno',
            visual_emoji: '😴',
            question_ar: 'هل للتأخير أثر سيء على الدراسة والحياة؟',
            correct_index: 0,
            explanation_ar: 'نعم — التأخير له مضار على الدراسة والحياة، كما ورد في المفاهيم.',
            golden_rule_ar: 'التأخير مضرة على دراستي.',
          },
          {
            type: 'matching',
            question_ar: 'صِل كل مصطلح بمعناه (لغة الإشارة — نشاط الكتاب):',
            pairs_ar: [
              { left: 'مبكراً', right: 'قبل الوقت' },
              { left: 'متأخراً', right: 'بعد الوقت' },
              { left: 'بانتظام', right: 'في وقت ثابت كل يوم' },
            ],
            explanation_ar: 'مبكراً=قبل الوقت، متأخراً=بعد الوقت، بانتظام=في وقت ثابت — مفردات لغة الإشارة لمصطلحات الوقت.',
          },
          {
            type: 'yesno',
            visual_emoji: '🏃‍♂️',
            question_ar: 'هل الوصول المبكر للمدرسة عادة حسنة؟',
            correct_index: 0,
            explanation_ar: 'نعم — الوصول المبكر له فوائد: الاستعداد للدرس وعدم فقد جزء منه.',
            golden_rule_ar: 'أصل مبكراً بانتظام.',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات الوصول المبكر للمدرسة:',
            ordering_items_ar: ['أنام مبكراً ليلاً', 'أستيقظ في الوقت المحدد', 'أستعد بسرعة', 'أصل المدرسة قبل الفجر الأول'],
            explanation_ar: 'الوصول المبكر: نوم مبكر ← استيقاظ في الوقت ← استعداد ← وصول قبل بدء الدرس.',
            golden_rule_ar: 'النوم مبكراً يصل بي مبكراً.',
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════
   *  الوحدة الرابعة: غِذَائِي
   * ═══════════════════════════════════════════════════ */
  {
    topics: [

      /* ─── الإفطار الصحي ─── */
      {
        questions: [
          {
            type: 'info',
            visual_emoji: '🍳',
            question_ar: 'ما أهم وجبة في اليوم؟',
            options_ar: ['وجبة الفطور', 'وجبة العشاء', 'لا توجد وجبة مهمة', 'وجبة منتصف الليل'],
            correct_index: 0,
            explanation_ar: 'وجبة الفطور هي أهم الوجبات اليومية — كما ورد في المفاهيم.',
            golden_rule_ar: 'الفطور أهم وجبات اليوم.',
          },
          {
            type: 'matching',
            question_ar: 'صِل كل فائدة بوجبة الفطور:',
            pairs_ar: [
              { left: 'إمداد الجسم', right: 'بالطاقة' },
              { left: 'زيادة', right: 'التركيز' },
              { left: 'الحصول', right: 'على الفيتامينات' },
            ],
            explanation_ar: 'فوائد الفطور: إمداد الجسم بالطاقة، زيادة التركيز، الحصول على الفيتامينات — من المفاهيم.',
            golden_rule_ar: 'الفطور يمنحني طاقة وتركيزاً.',
          },
          {
            type: 'yesno',
            visual_emoji: '🥛',
            question_ar: 'هل يجب أن يحتوي فطوري على الحليب يومياً؟ (نصيحة الكتاب)',
            correct_index: 0,
            explanation_ar: 'نعم — يجب أن يحتوي فطورك على الحليب يومياً، من نصائح الكتاب.',
            golden_rule_ar: 'فطوري فيه حليب كل يوم.',
          },
          {
            type: 'yesno',
            visual_emoji: '🤲',
            question_ar: 'هل أقول «بسم الله» قبل الأكل و«الحمد لله» بعده؟ (نصيحة الكتاب)',
            correct_index: 0,
            explanation_ar: 'نعم — أقول بسم الله قبل الأكل والحمد لله بعد الانتهاء، من نصائح الكتاب.',
            golden_rule_ar: 'بسم الله قبل · الحمد لله بعد.',
          },
          {
            type: 'classify',
            question_ar: 'صنّف كل طعام إلى: مفيد للفطور / غير مفيد',
            classify_categories_ar: ['مفيد', 'غير مفيد'],
            classify_items_ar: [
              { item: '🥛', correct_category: 0 },
              { item: '🍞', correct_category: 0 },
              { item: '🍎', correct_category: 0 },
              { item: '🍫', correct_category: 1 },
              { item: '🍬', correct_category: 1 },
            ],
            explanation_ar: 'مفيد: الحليب 🥛 والخبز 🍞 والتفاح 🍎. غير مفيد: الشوكولاتة 🍫 والحلوى 🍬 — من نصائح الكتاب (تناول الفواكه والخضراوات).',
          },
          {
            type: 'yesno',
            visual_emoji: '🤚',
            question_ar: 'هل أغسل يدي قبل تناول طعامي؟ (نصيحة الكتاب)',
            correct_index: 0,
            explanation_ar: 'نعم — أغسل يدي قبل تناول طعامي وأتناوله وأنا جالس، من نصائح الكتاب.',
            golden_rule_ar: 'أغسل يدي قبل الأكل.',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات تناول الوجبة المدرسية (نصائح الكتاب):',
            ordering_items_ar: ['أغسل يدي', 'أقول بسم الله', 'أتناول طعامي وأنا جالس', 'أقول الحمد لله وأضع البقايا في مكانها'],
            explanation_ar: 'الوجبة المدرسية: غسل اليدين ← بسم الله ← أكل جالس ← الحمد لله وتنظيف البقايا — من نصائح الكتاب.',
            golden_rule_ar: 'أكل بنظافة وذكر الله.',
          },
        ],
      },

      /* ─── الماء ─── */
      {
        questions: [
          {
            type: 'classify',
            question_ar: 'صنّف كل صورة إلى: من مصادر الماء / ليس مصدراً للماء',
            classify_categories_ar: ['مصدر ماء', 'ليس مصدراً'],
            classify_items_ar: [
              { item: '🌧️', correct_category: 0 },
              { item: '🏞️', correct_category: 0 },
              { item: '🏜️', correct_category: 1 },
              { item: '🌊', correct_category: 0 },
              { item: '🔥', correct_category: 1 },
            ],
            explanation_ar: 'من مصادر الماء: الأمطار 🌧️ والأنهار 🏞️ والبحار 🌊. ليس مصدراً: الصحراء 🏜️ والنار 🔥 — من المفاهيم.',
            golden_rule_ar: 'مصادر الماء: أمطار وأنهار وآبار وبحار.',
          },
          {
            type: 'yesno',
            visual_emoji: '🌱',
            question_ar: 'هل الماء مهم للإنسان والحيوان والنبات؟',
            correct_index: 0,
            explanation_ar: 'نعم — الماء مهم للإنسان والحيوان والنبات، قال تعالى: ﴿وَجَعَلْنَا مِنَ الْمَاءِ كَلَّ شَيْءٍ حَيٍّ﴾.',
            golden_rule_ar: 'من الماء كل شيء حي.',
          },
          {
            type: 'matching',
            question_ar: 'صِل كل استخدام للماء بنشاطه:',
            pairs_ar: [
              { left: 'الشرب', right: 'أروي عطشي' },
              { left: 'الاستحمام', right: 'أنظف جسمي' },
              { left: 'سقي النباتات', right: 'أحافظ على نباتاتي' },
              { left: 'الوضوء', right: 'أستعد للصلاة' },
            ],
            explanation_ar: 'استخدامات الماء: الشرب، الاستحمام، غسل الخضروات، سقي النباتات، الوضوء — من المفاهيم.',
            golden_rule_ar: 'أستعمل الماء في شربي ووضوئي ونظافتي.',
          },
          {
            type: 'yesno',
            visual_emoji: '🚱',
            question_ar: 'هل يجب تجنّب الإسراف وهدر الماء؟ (نصيحة الكتاب)',
            correct_index: 0,
            explanation_ar: 'نعم — تجنب الإسراف وهدر الماء؛ فديننا ينهانا عن ذلك، من نصائح الكتاب.',
            golden_rule_ar: 'لا أسرف في الماء.',
          },
          {
            type: 'info',
            visual_emoji: '💧',
            question_ar: 'بماذا يُخبرنا الجسم بحاجته للماء؟',
            options_ar: ['العطش', 'النعاس', 'الجوع', 'البرد'],
            correct_index: 0,
            explanation_ar: 'العطش هو الوسيلة التي يُخبرنا بها الجسم بحاجته للماء — من المفاهيم.',
            golden_rule_ar: 'العطش إشارة الجسم لحاجته للماء.',
          },
          {
            type: 'info',
            visual_emoji: '🇸🇦',
            question_ar: 'ما البرنامج الوطني لكفاءة المياه في المملكة (رؤية 2030)؟',
            options_ar: ['قَطرة', 'رؤية', ' NEOM', 'الخط'],
            correct_index: 0,
            explanation_ar: 'البرنامج الوطني لكفاءة المياه وترشيدها في المملكة يُسمى (قَطرة) تحقيقاً لرؤية 2030 — من المفاهيم.',
            golden_rule_ar: 'برنامج «قَطرة» يرشد استهلاك الماء.',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب آداب الشرب (نصائح الكتاب):',
            ordering_items_ar: ['أقول بسم الله', 'أشرب دون تنفس في الإناء', 'لا أسرف في الشرب', 'أقول الحمد لله'],
            explanation_ar: 'آداب الشرب: بسم الله ← شرب دون تنفس في الإناء ← عدم إسراف ← الحمد لله — من نصائح الكتاب.',
            golden_rule_ar: 'بسم الله قبل · الحمد لله بعد · لا تنفس في الإناء.',
          },
        ],
      },

      /* ─── الحليب ─── */
      {
        questions: [
          {
            type: 'classify',
            question_ar: 'صنّف كل مصدر للحليب إلى: حيواني / نباتي',
            classify_categories_ar: ['حيواني', 'نباتي'],
            classify_items_ar: [
              { item: '🐄', correct_category: 0 },
              { item: '🐐', correct_category: 0 },
              { item: '🥥', correct_category: 1 },
              { item: '🌰', correct_category: 1 },
            ],
            explanation_ar: 'حيواني: البقرة 🐄 والماعز 🐐. نباتي: اللوز والجوز 🥥🌰 — من مصادر الحليب.',
            golden_rule_ar: 'مصادر الحليب: حيواني ونباتي.',
          },
          {
            type: 'matching',
            question_ar: 'صِل نوع الحليب بوصفه:',
            pairs_ar: [
              { left: 'الحليب الطازج', right: 'حديث العصر' },
              { left: 'الحليب المعلّب', right: 'المجفف المعلب' },
            ],
            explanation_ar: 'أنواع الحليب: الطازج (حديث العصر) والمعلّب (المجفف) — من المفاهيم.',
            golden_rule_ar: 'للحليب نوعان: طازج ومعلب.',
          },
          {
            type: 'matching',
            question_ar: 'صِل كل منتج بمصدره (منتجات الحليب):',
            pairs_ar: [
              { left: 'الجبنة', right: 'من الحليب' },
              { left: 'الزبادي', right: 'من الحليب' },
              { left: 'الزبدة', right: 'من الحليب' },
            ],
            explanation_ar: 'منتجات الحليب كثيرة: الجبنة، الزبدة، الزبادي، القشطة — من المفاهيم.',
            golden_rule_ar: 'منتجات الحليب: جبنة وزبادي وزبدة.',
          },
          {
            type: 'yesno',
            visual_emoji: '🦴',
            question_ar: 'هل شرب الحليب يومياً يساعد على بناء العظام والأسنان؟',
            correct_index: 0,
            explanation_ar: 'نعم — فوائد شرب الحليب يومياً: بناء العظام، النمو، تقوية الأسنان — من المفاهيم.',
            golden_rule_ar: 'الحليب يبني عظامي وأسناني.',
          },
          {
            type: 'yesno',
            visual_emoji: '🧂',
            question_ar: 'هل زيادة السكر في الحليب تؤذي الأسنان؟ (نصيحة الكتاب)',
            correct_index: 0,
            explanation_ar: 'نعم — زيادة السكر في الحليب تؤذي أسنانك، من نصائح الكتاب.',
            golden_rule_ar: 'لا أكثر السكر في الحليب.',
          },
          {
            type: 'info',
            visual_emoji: '❄️',
            question_ar: 'أين أحفظ بقية الحليب؟ (نصيحة الكتاب)',
            options_ar: ['في الثلاجة', 'في الشمس', 'على الطاولة', 'خارج المنزل'],
            correct_index: 0,
            explanation_ar: 'خذ من الحليب قدر حاجتك، واحفظ الباقي في الثلاجة — من نصائح الكتاب.',
            golden_rule_ar: 'أحفظ بقية الحليب في الثلاجة.',
          },
          {
            type: 'classify',
            question_ar: 'صنّف كل نكهة تُضاف للحليب إلى: من نكهات الحليب / ليست نكهة',
            classify_categories_ar: ['نكهة للحليب', 'ليست نكهة'],
            classify_items_ar: [
              { item: '🍓', correct_category: 0 },
              { item: '🍌', correct_category: 0 },
              { item: '🍫', correct_category: 0 },
              { item: '🧱', correct_category: 1 },
            ],
            explanation_ar: 'نكهات تُضاف للحليب: العسل، الموز 🍌، الفراولة 🍓، الزنجبيل، الشوكولاتة 🍫 — من المفاهيم.',
            golden_rule_ar: 'أضيف نكهات مفيدة لحليبي.',
          },
        ],
      },

      /* ─── تمارين عامة — وحدة غذائي ─── */
      {
        questions: [
          {
            type: 'matching',
            question_ar: 'صِل كل مصطلح بلغة الإشارة السعودية بمعناه (نشاط الكتاب):',
            pairs_ar: [
              { left: 'بحر', right: 'مصدر ماء مالح' },
              { left: 'مطر', right: 'ماء ينزل من السحاب' },
              { left: 'الحليب المركّز المحلى', right: 'حليب معلّب محلى' },
            ],
            explanation_ar: 'مفردات لغة الإشارة السعودية: بحر، مطر، الحليب المركّز المحلى — من أنشطة المراجعة.',
          },
          {
            type: 'info',
            visual_emoji: '🚗',
            question_ar: 'عند ركوب السيارة أقول... (إكمال الفراغ — نشاط الكتاب):',
            options_ar: ['بسم الله', 'وداعاً', 'لا شيء', 'سلام'],
            correct_index: 0,
            explanation_ar: 'عند ركوبي في السيارة أقول: بسم الله — من تمرين إكمال الفراغات.',
            golden_rule_ar: 'أذكر الله عند ركوب السيارة.',
          },
          {
            type: 'info',
            visual_emoji: '🏞️',
            question_ar: 'من مصادر الماء: الآبار والأنهار و... (إكمال الفراغ):',
            options_ar: ['البحار', 'الصحراء', 'النار', 'الجبال'],
            correct_index: 0,
            explanation_ar: 'من مصادر الماء: الآبار والأنهار والبحار — من تمرين إكمال الفراغات.',
            golden_rule_ar: 'مصادر الماء: آبار وأنهار وبحار.',
          },
          {
            type: 'info',
            visual_emoji: '🥛',
            question_ar: 'من أنواع الحليب: الطازج و... (إكمال الفراغ):',
            options_ar: ['المجفف', 'الملح', 'الماء', 'الملون'],
            correct_index: 0,
            explanation_ar: 'من أنواع الحليب: الطازج والمجفف (المعلب) — من تمرين إكمال الفراغات.',
            golden_rule_ar: 'أنواع الحليب: طازج ومجفف.',
          },
          {
            type: 'info',
            visual_emoji: '💪',
            question_ar: 'شرب الحليب يومياً يساعدني على... (إكمال الفراغ):',
            options_ar: ['بناء العظام والنمو', 'النوم', 'اللعب فقط', 'الجوع'],
            correct_index: 0,
            explanation_ar: 'شرب الحليب يومياً يساعدني على بناء العظام والنمو — من تمرين إكمال الفراغات.',
            golden_rule_ar: 'الحليب يقوي عظامي وينمّيها.',
          },
          {
            type: 'classify',
            question_ar: 'صنّف كل صورة إلى: احتياج / رغبة (نشاط الكتاب)',
            classify_categories_ar: ['احتياج', 'رغبة'],
            classify_items_ar: [
              { item: '🍽️', correct_category: 0 },
              { item: '🎮', correct_category: 1 },
              { item: '💊', correct_category: 0 },
              { item: '🧸', correct_category: 1 },
            ],
            explanation_ar: 'احتياج: الفطور 🍽️ والدواء 💊. رغبة: لعبة الفيديو 🎮 والدُمية 🧸 — من تمرين الاحتياجات والرغبات.',
            golden_rule_ar: 'أفرّق بين الاحتياج والرغبة.',
          },
          {
            type: 'yesno',
            visual_emoji: '🐖',
            question_ar: 'هل أضع النقود المتبقية في الحصّالة؟ (نشاط الكتاب)',
            correct_index: 0,
            explanation_ar: 'نعم — إذا بقي معي نقود أضعها في الحصّالة (ادخار) — من أنشطة المراجعة.',
            golden_rule_ar: 'ما يتبقى من نقودي أدخره في الحصّالة.',
          },
        ],
      },
    ],
  },
];

export function getExercisesForLifeSkillsTopic(unitIdx, topicIdx) {
  const u = UNITS[unitIdx];
  if (!u || !u.topics) return [];
  const t = u.topics[topicIdx];
  return t ? (t.questions || []) : [];
}

export const TOTAL_TOPICS_LIFE_SKILLS = UNITS.reduce((n, u) => n + (u.topics ? u.topics.length : 0), 0);
export const TOTAL_QUESTIONS_LIFE_SKILLS = UNITS.reduce(
  (n, u) => n + (u.topics || []).reduce((m, t) => m + (t.questions ? t.questions.length : 0), 0),
  0
);

// سلّم تكيّفي بسيط من أسئلة الموضوع نفسه (صعب ← متوسط ← سهل)
export function getAdaptiveLadderLifeSkills(unitIdx, topicIdx) {
  const qs = getExercisesForLifeSkillsTopic(unitIdx, topicIdx)
    .filter((q) => ['info', 'yesno'].includes(q.type) && (q.options_ar || q.correct_index !== undefined));
  if (qs.length < 2) return [];
  return qs.slice(0, 3).map((q) => ({
    question_ar: q.question_ar,
    options_ar: q.options_ar || ['نعم', 'لا'],
    correct_value: (q.options_ar || ['نعم', 'لا'])[Number(q.correct_index || 0)],
    explanation_ar: q.explanation_ar || 'راجع الدرس ثم حاول مرة أخرى.',
    detail_ar: q.explanation_ar || '',
    golden_rule_ar: q.golden_rule_ar || '',
  }));
}