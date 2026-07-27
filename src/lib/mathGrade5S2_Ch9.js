// بنك رياضيات — الفصل التاسع: جمع الكسور وطرحها
// المصدر: كتاب وزارة التعليم 1447هـ / 2025م
// الدروس: 9-1 جمع الكسور المتشابهة · 9-2 طرح الكسور المتشابهة
//          9-3 جمع الكسور غير المتشابهة · 9-4 طرح الكسور غير المتشابهة

export const MATH_G5_S2_CH9_UNITS = [

  // ══════════════════════════════════════════════════
  // 9-1: جمع الكسور المتشابهة
  // ══════════════════════════════════════════════════
  {
    id: 'add_like',
    title_ar: 'جمع الكسور المتشابهة',
    subtitle_ar: 'جمع كسرين أو أكثر لهما نفس المقام',
    color: 'from-blue-700 to-indigo-500',
    icon: '➕',
    lessons: [
      {
        id: 'al_l1',
        title_ar: 'جمع الكسور المتشابهة',
        count: 14,
        image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=300',
        getQuestions: () => [
          {
            id: 'al_i1', type: 'info',
            question_ar: 'الكسور المتشابهة: لها نفس المقام. لجمعها: اجمع البسطين واكتب الناتج على المقام نفسه. مثال: ٢/٦ + ٣/٦ = (٢+٣)/٦ = ٥/٦. إذا أعطت النتيجة كسراً غير فعلي (البسط ≥ المقام)، حوِّلها لعدد كسري.',
            explanation_ar: 'جمع المتشابهة = اجمع البسطين واحتفظ بالمقام. بسِّط النتيجة دائماً.',
          },
          {
            id: 'al_1', type: 'multiple_choice',
            question_ar: 'اقتسمت لمياء وأبوها فطيرة: أكلت لمياء ٢/٦ وأكل أبوها ٣/٦. ما مجموع ما أكلاه؟',
            options_ar: ['٥/٦', '٦/٦', '٢/٣', '١/٢'],
            correct_index: 0,
            explanation_ar: '٢/٦ + ٣/٦ = (٢+٣)/٦ = ٥/٦.',
            golden_rule: 'جمع المتشابهة: اجمع البسطين فقط، المقام يبقى كما هو.',
          },
          {
            id: 'al_2', type: 'multiple_choice',
            question_ar: 'قرأ تركي من قصة يوم السبت ١/١٠ ويوم الإثنين ٣/١٠. ما الكسر في أبسط صورة؟',
            options_ar: ['٢/٥', '٤/١٠', '١/٣', '٣/٥'],
            correct_index: 0,
            explanation_ar: '١/١٠ + ٣/١٠ = ٤/١٠. ق.م.أ(٤،١٠)=٢. ٤÷٢=٢، ١٠÷٢=٥. الناتج = ٢/٥.',
          },
          {
            id: 'al_3', type: 'true_false',
            question_ar: '٢/٥ + ٤/٥ = ١ وخُمس.',
            correct_answer: 'true',
            explanation_ar: '٢/٥ + ٤/٥ = ٦/٥ = ١ + ١/٥ = ١ وخُمس. صحيح.',
          },
          {
            id: 'al_4', type: 'multiple_choice',
            question_ar: 'قام صالح بطلاء ٥/١٢ من سياج الحديقة، وقام مساعد بطلاء ٤/١٢. ما الكسر الذي يمثل الجزء الملطوء؟',
            options_ar: ['٣/٤', '٩/١٢', '٧/١٢', '١٠/١٢'],
            correct_index: 0,
            explanation_ar: '٥/١٢ + ٤/١٢ = ٩/١٢. ق.م.أ(٩،١٢)=٣. ٩÷٣=٣، ١٢÷٣=٤. الناتج = ٣/٤.',
          },
          {
            id: 'al_5', type: 'fill_blank',
            question_ar: '١/٨ + ٣/٨ = ___',
            options_ar: ['١/٢', '٤/٨', '٣/٤', '٤/١٦'],
            correct_index: 0,
            explanation_ar: '١/٨ + ٣/٨ = ٤/٨. ق.م.أ(٤،٨)=٤. ٤÷٤=١، ٨÷٤=٢. الناتج = ١/٢.',
          },
          {
            id: 'al_6', type: 'multiple_choice',
            question_ar: 'ما مجموع خُمسَين وخُمس؟',
            options_ar: ['٣/٥', '٢/٥', '١/٥', '٤/٥'],
            correct_index: 0,
            explanation_ar: '٢/٥ + ١/٥ = ٣/٥.',
          },
          {
            id: 'al_7', type: 'classify',
            question_ar: 'صنِّف: الجمع يعطي نتيجة أقل من ١ أم أكبر من أو تساوي ١؟',
            categories_ar: ['النتيجة < ١', 'النتيجة ≥ ١'],
            items_ar: [
              { text: '٣/٧ + ١/٧', correct_category: 0 },
              { text: '٥/٨ + ٣/٨', correct_category: 1 },
              { text: '٢/٩ + ٤/٩', correct_category: 0 },
              { text: '٤/٥ + ٣/٥', correct_category: 1 },
              { text: '١/٦ + ١/٦', correct_category: 0 },
            ],
            explanation_ar: '٣/٧+١/٧=٤/٧<١. ٥/٨+٣/٨=٨/٨=١. ٢/٩+٤/٩=٦/٩<١. ٤/٥+٣/٥=٧/٥>١.',
          },
          {
            id: 'al_8', type: 'ordering',
            question_ar: 'رتِّب خطوات جمع ٢/٧ + ٤/٧:',
            items_ar: [
              'اجمع البسطين: ٢ + ٤ = ٦',
              'اكتب الناتج على المقام نفسه: ٦/٧',
              'تحقق: ق.م.أ(٦،٧)=١ → في أبسط صورة',
            ],
            correct_order: [0, 1, 2],
            explanation_ar: 'الخطوات الصحيحة لجمع كسرين متشابهين.',
          },
          {
            id: 'al_9', type: 'multiple_choice',
            question_ar: 'هطل ٢/٨ سم من المطر في ساعة، وهطل مثلها في الساعة التالية. ما مجموع ما هطل؟',
            options_ar: ['١/٢', '٤/٨', '٣/٨', '٢/٤'],
            correct_index: 0,
            explanation_ar: '٢/٨ + ٢/٨ = ٤/٨ = ١/٢ سم.',
          },
          {
            id: 'al_10', type: 'true_false',
            question_ar: '٣/٩ + ٢/٩ + ٤/٩ = ١.',
            correct_answer: 'true',
            explanation_ar: '٣/٩ + ٢/٩ + ٤/٩ = ٩/٩ = ١. صحيح.',
          },
          {
            id: 'al_11', type: 'matching',
            question_ar: 'صِل كل عملية بناتجها في أبسط صورة:',
            pairs_ar: [
              { right: '٢/٦ + ١/٦', left: '١/٢' },
              { right: '٣/٨ + ٥/٨', left: '١' },
              { right: '٢/٩ + ٤/٩', left: '٢/٣' },
              { right: '٥/١٠ + ٢/١٠', left: '٧/١٠' },
            ],
            explanation_ar: '٣/٦=١/٢. ٨/٨=١. ٦/٩=٢/٣. ٧/١٠.',
          },
          {
            id: 'al_12', type: 'fill_blank',
            question_ar: 'ما ناتج سِتَّة أتساع وثلاثة أتساع؟',
            options_ar: ['١', '٩/٩', 'كلاهما صحيح', '٩/١٨'],
            correct_index: 2,
            explanation_ar: '٦/٩ + ٣/٩ = ٩/٩ = ١. الخياران الأول والثاني صحيحان.',
          },
          {
            id: 'al_13', type: 'multiple_choice',
            question_ar: 'الجدول: كرة القدم ٥ طلاب، السباحة ٦، الكتابة ٣، القراءة ٤. ما الكسر الذي يمثل الطلاب الذين يمارسون القراءة أو كرة القدم؟ (المجموع ١٨)',
            options_ar: ['٩/١٨ = ١/٢', '٥/١٨', '٤/١٨', '٩/١٨'],
            correct_index: 0,
            explanation_ar: 'القراءة+كرة القدم = ٤+٥ = ٩. ٩/١٨ = ١/٢.',
          },
          {
            id: 'al_14', type: 'true_false',
            question_ar: 'مجموع رحلة الرياض-القصيم (٣/٤ س) ورحلة الجوف-القريات (٣/٤ س) = ١ ساعة ونصف.',
            correct_answer: 'true',
            explanation_ar: '٣/٤ + ٣/٤ = ٦/٤ = ٣/٢ = ١ + ١/٢. صحيح.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════
  // 9-2: طرح الكسور المتشابهة
  // ══════════════════════════════════════════════════
  {
    id: 'sub_like',
    title_ar: 'طرح الكسور المتشابهة',
    subtitle_ar: 'طرح كسرين لهما نفس المقام',
    color: 'from-red-700 to-rose-500',
    icon: '➖',
    lessons: [
      {
        id: 'sl_l1',
        title_ar: 'طرح الكسور المتشابهة',
        count: 14,
        image: 'https://images.unsplash.com/photo-1596495577886-d920f1fb7238?w=300',
        getQuestions: () => [
          {
            id: 'sl_i1', type: 'info',
            question_ar: 'لطرح كسرين متشابهين: اطرح البسطين واكتب الناتج على المقام نفسه. مثال: ٤/٨ − ٧/٨: نطرح ٤ من ٧ → ٧−٤=٣. الناتج = ٣/٨. تذكر: اكتب الناتج في أبسط صورة بالقسمة على ق.م.أ.',
            explanation_ar: 'طرح المتشابهة = اطرح البسطين واحتفظ بالمقام. بسِّط الناتج.',
          },
          {
            id: 'sl_1', type: 'multiple_choice',
            question_ar: 'يسير فراس في طريق طوله ٧/٨ كلم، قطع ٤/٨. ما المسافة المتبقية؟',
            options_ar: ['٣/٨ كلم', '٤/٨ كلم', '١/٢ كلم', '١/٨ كلم'],
            correct_index: 0,
            explanation_ar: '٧/٨ − ٤/٨ = (٧−٤)/٨ = ٣/٨ كلم.',
            golden_rule: 'طرح المتشابهة: اطرح البسطين والمقام يبقى كما هو.',
          },
          {
            id: 'sl_2', type: 'multiple_choice',
            question_ar: 'كميات الأمطار: عنيزة ٩/١٠ سم، حائل ٣/١٠ سم. بكم تزيد عنيزة على حائل؟',
            options_ar: ['٣/٥ سم', '٦/١٠ سم', '١/٢ سم', '٩/١٠ سم'],
            correct_index: 0,
            explanation_ar: '٩/١٠ − ٣/١٠ = ٦/١٠. ق.م.أ(٦،١٠)=٢. ٦÷٢=٣، ١٠÷٢=٥. الناتج = ٣/٥ سم.',
          },
          {
            id: 'sl_3', type: 'true_false',
            question_ar: '٧/٩ − ٣/٩ = ٤/٩.',
            correct_answer: 'true',
            explanation_ar: '٧/٩ − ٣/٩ = (٧−٣)/٩ = ٤/٩. صحيح.',
          },
          {
            id: 'sl_4', type: 'multiple_choice',
            question_ar: 'قضى عصام ٥/٦ ساعة في الرسم، و٢/٦ في القراءة. بكم يزيد وقت الرسم على وقت القراءة؟',
            options_ar: ['١/٢ ساعة', '٣/٦ ساعة', '٢/٣ ساعة', 'كلا الأول والثالث صحيح'],
            correct_index: 3,
            explanation_ar: '٥/٦ − ٢/٦ = ٣/٦. ق.م.أ(٣،٦)=٣. ٣÷٣=١، ٦÷٣=٢. الناتج = ١/٢. وأيضاً ١/٢ = ٢/٤ ≠ ٢/٣. الصحيح ١/٢.',
          },
          {
            id: 'sl_5', type: 'fill_blank',
            question_ar: '٨/٩ − ٥/٩ = ___',
            options_ar: ['١/٣', '٣/٩', 'كلاهما صحيح', '٢/٩'],
            correct_index: 2,
            explanation_ar: '٨/٩ − ٥/٩ = ٣/٩. ق.م.أ(٣،٩)=٣. ٣÷٣=١، ٩÷٣=٣. الناتج = ١/٣. كلا الخيارين صحيح.',
          },
          {
            id: 'sl_6', type: 'classify',
            question_ar: 'صنِّف: هل الطرح يعطي نتيجة صفراً أم أكبر من صفر؟',
            categories_ar: ['النتيجة = ٠', 'النتيجة > ٠'],
            items_ar: [
              { text: '٤/٧ − ٤/٧', correct_category: 0 },
              { text: '٥/٨ − ٣/٨', correct_category: 1 },
              { text: '٣/٩ − ٣/٩', correct_category: 0 },
              { text: '٧/١٢ − ٢/١٢', correct_category: 1 },
            ],
            explanation_ar: 'كسران متساويان = فرقهما = ٠.',
          },
          {
            id: 'sl_7', type: 'ordering',
            question_ar: 'رتِّب خطوات حساب ٩/١٠ − ٣/١٠:',
            items_ar: [
              'اطرح البسطين: ٩ − ٣ = ٦',
              'اكتب الناتج: ٦/١٠',
              'أوجد ق.م.أ(٦،١٠) = ٢',
              'قسِّم: ٦÷٢=٣، ١٠÷٢=٥',
              'النتيجة = ٣/٥',
            ],
            correct_order: [0, 1, 2, 3, 4],
            explanation_ar: 'هذه الخطوات الصحيحة لطرح الكسور المتشابهة مع التبسيط.',
          },
          {
            id: 'sl_8', type: 'multiple_choice',
            question_ar: 'اشترت مرام ٧/٨ كجم من لحم الجمل و٥/٨ كجم من الضأن. بكم تزيد الضأن على الجمل؟',
            options_ar: ['لا، الجمل أكثر بـ ٢/٨ = ١/٤ كجم', 'الضأن أكثر بـ ١/٤', 'متساويان', 'الجمل أكثر بـ ١/٢'],
            correct_index: 0,
            explanation_ar: '٧/٨ − ٥/٨ = ٢/٨ = ١/٤ كجم. لحم الجمل أكثر بـ ١/٤ كجم.',
          },
          {
            id: 'sl_9', type: 'true_false',
            question_ar: 'قرأت هند ٣/٤ القصة وقرأت سعاد ١/٤. هند تزيد على سعاد بـ ١/٢.',
            correct_answer: 'true',
            explanation_ar: '٣/٤ − ١/٤ = ٢/٤ = ١/٢. صحيح.',
          },
          {
            id: 'sl_10', type: 'multiple_choice',
            question_ar: 'مواقع سياحية فضّلها ٢٨ طالباً: السودة ١٤، شاطئ القمر ٨، ثمامة ٦. بكم يزيد كسر السودة على كسر الثمامة؟',
            options_ar: ['٨/٢٨ = ٢/٧', '١٤/٢٨', '٦/٢٨', '٤/٧'],
            correct_index: 0,
            explanation_ar: '١٤/٢٨ − ٦/٢٨ = ٨/٢٨. ق.م.أ(٨،٢٨)=٤. ٨÷٤=٢، ٢٨÷٤=٧. الناتج = ٢/٧.',
          },
          {
            id: 'sl_11', type: 'fill_blank',
            question_ar: 'أوجد قيمة "س": س/٩ − ٦/٩ = ١/٩',
            options_ar: ['٧', '٥', '٨', '٦'],
            correct_index: 0,
            explanation_ar: 'س/٩ − ٦/٩ = ١/٩ → س−٦=١ → س=٧.',
          },
          {
            id: 'sl_12', type: 'matching',
            question_ar: 'صِل كل عملية بناتجها في أبسط صورة:',
            pairs_ar: [
              { right: '٥/٧ − ٣/٧', left: '٢/٧' },
              { right: '٩/١٢ − ٣/١٢', left: '١/٢' },
              { right: '٦/٩ − ٢/٩', left: '٤/٩' },
              { right: '٣/٤ − ١/٤', left: '١/٢' },
            ],
            explanation_ar: '٢/٧. ٦/١٢=١/٢. ٤/٩. ٢/٤=١/٢.',
          },
          {
            id: 'sl_13', type: 'true_false',
            question_ar: '٥/٦ − ٢/٦ − ١/٦ = ١/٣.',
            correct_answer: 'true',
            explanation_ar: '٥/٦ − ٢/٦ = ٣/٦. ٣/٦ − ١/٦ = ٢/٦ = ١/٣. صحيح.',
          },
          {
            id: 'sl_14', type: 'multiple_choice',
            question_ar: 'أوجد قيمة "س": ٨/١٢ − س/١٢ = ١/٤',
            options_ar: ['٥', '٣', '٧', '٢'],
            correct_index: 0,
            explanation_ar: '١/٤ = ٣/١٢. ٨/١٢ − س/١٢ = ٣/١٢ → ٨−س=٣ → س=٥.',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════
  // 9-3: جمع الكسور غير المتشابهة
  // ══════════════════════════════════════════════════
  {
    id: 'add_unlike',
    title_ar: 'جمع الكسور غير المتشابهة',
    subtitle_ar: 'استخدام م.م.أ لتوحيد المقامات ثم الجمع',
    color: 'from-emerald-700 to-teal-500',
    icon: '🔢',
    lessons: [
      {
        id: 'au_l1',
        title_ar: 'جمع الكسور غير المتشابهة',
        count: 14,
        image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300',
        getQuestions: () => [
          {
            id: 'au_i1', type: 'info',
            question_ar: 'لجمع كسور غير متشابهة (مقاماتها مختلفة): (١) أوجد م.م.أ للمقامين. (٢) أعِد كتابة الكسرين بالمقام الجديد. (٣) اجمع الكسرين المتشابهين. (٤) بسِّط. مثال: ١/٣ + ١/٤ — م.م.أ(٣،٤)=١٢. ١/٣=٤/١٢، ١/٤=٣/١٢. ٤/١٢+٣/١٢=٧/١٢.',
            explanation_ar: 'جمع غير المتشابهة = م.م.أ → تحويل → جمع → تبسيط.',
          },
          {
            id: 'au_1', type: 'multiple_choice',
            question_ar: 'أمضت أمل ١/٣ ساعة في كتابة مقال و١/٤ ساعة في مراجعته. كم أمضت إجمالاً؟',
            options_ar: ['٧/١٢ ساعة', '٢/٧ ساعة', '١/٦ ساعة', '٢/١٢ ساعة'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٣،٤)=١٢. ١/٣=٤/١٢، ١/٤=٣/١٢. ٤/١٢+٣/١٢=٧/١٢.',
            golden_rule: 'جمع غير المتشابهة: أوجد م.م.أ ثم حوِّل الكسرين لنفس المقام.',
          },
          {
            id: 'au_2', type: 'multiple_choice',
            question_ar: 'اشترت منى ٣/٤ كجم عنب و٥/٨ كجم كرز. ما المجموع؟',
            options_ar: ['١ و٣/٨ كجم', '٨/١٢ كجم', '١ و١/٢ كجم', '٥/٦ كجم'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٤،٨)=٨. ٣/٤=٦/٨. ٦/٨+٥/٨=١١/٨=١+٣/٨ كجم.',
          },
          {
            id: 'au_3', type: 'true_false',
            question_ar: '١/٢ + ١/٣ = ٥/٦.',
            correct_answer: 'true',
            explanation_ar: 'م.م.أ(٢،٣)=٦. ١/٢=٣/٦، ١/٣=٢/٦. ٣/٦+٢/٦=٥/٦. صحيح.',
          },
          {
            id: 'au_4', type: 'multiple_choice',
            question_ar: 'حصد مزارع ٣/٨ محصوله يوم الأربعاء، و١/٣ يوم الخميس. ما مجموع ما حصد؟',
            options_ar: ['١٧/٢٤', '٤/١١', '٨/٢٤', '١١/٢٤'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٨،٣)=٢٤. ٣/٨=٩/٢٤، ١/٣=٨/٢٤. ٩/٢٤+٨/٢٤=١٧/٢٤.',
          },
          {
            id: 'au_5', type: 'fill_blank',
            question_ar: '١/٨ + ٣/٤ = ___',
            options_ar: ['٧/٨', '٤/١٢', '٤/٣٢', '٣/٨'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٨،٤)=٨. ١/٨+٦/٨=٧/٨.',
          },
          {
            id: 'au_6', type: 'multiple_choice',
            question_ar: 'أمضت هالة ٣/٤ ساعة ترتيب غرفتها، و١/٢ ساعة تناول الغداء. ما مجموع الوقتين؟',
            options_ar: ['١ و١/٤ ساعة', '٧/٤ ساعة', 'كلاهما صحيح', '٣/٢ ساعة'],
            correct_index: 2,
            explanation_ar: 'م.م.أ(٤،٢)=٤. ٣/٤+٢/٤=٥/٤=١+١/٤. الخياران الأول والثاني صحيحان.',
          },
          {
            id: 'au_7', type: 'classify',
            question_ar: 'صنِّف: الجمع يحتاج تحويل مقام أم لا؟',
            categories_ar: ['يحتاج تحويل (غير متشابهة)', 'لا يحتاج تحويل (متشابهة)'],
            items_ar: [
              { text: '١/٣ + ١/٤', correct_category: 0 },
              { text: '٢/٥ + ٣/٥', correct_category: 1 },
              { text: '٣/٨ + ١/٢', correct_category: 0 },
              { text: '٥/٩ + ٢/٩', correct_category: 1 },
              { text: '١/٦ + ٢/٩', correct_category: 0 },
            ],
            explanation_ar: 'غير المتشابهة لها مقامات مختلفة وتحتاج م.م.أ.',
          },
          {
            id: 'au_8', type: 'ordering',
            question_ar: 'رتِّب خطوات جمع ١/٣ + ١/٦:',
            items_ar: [
              'أوجد م.م.أ(٣،٦) = ٦',
              'حوِّل: ١/٣=٢/٦',
              'الكسر الثاني: ١/٦=١/٦',
              'اجمع: ٢/٦+١/٦=٣/٦',
              'بسِّط: ٣/٦=١/٢',
            ],
            correct_order: [0, 1, 2, 3, 4],
            explanation_ar: 'خطوات منظمة لجمع الكسور غير المتشابهة.',
          },
          {
            id: 'au_9', type: 'multiple_choice',
            question_ar: 'أمضت نادية ١/٦ وقت فراغها في القراءة و٥/١٢ في أشكال زخرفية. الكسر الممثل للمجموع؟',
            options_ar: ['٧/١٢', '٦/١٨', '٥/٨', '١١/١٢'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٦،١٢)=١٢. ١/٦=٢/١٢. ٢/١٢+٥/١٢=٧/١٢.',
          },
          {
            id: 'au_10', type: 'true_false',
            question_ar: '١/٤ + ١/٨ = ٣/٨.',
            correct_answer: 'true',
            explanation_ar: 'م.م.أ(٤،٨)=٨. ١/٤=٢/٨. ٢/٨+١/٨=٣/٨. صحيح.',
          },
          {
            id: 'au_11', type: 'multiple_choice',
            question_ar: 'مشى فيصل ٥/٦ كلم إلى المتجر و١/٣ كلم إلى المسجد. ما مجموع ما مشاه؟',
            options_ar: ['٧/٦ = ١ وسُدس', '١ كلم', '٨/٦', '٦/٩'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٦،٣)=٦. ٥/٦+٢/٦=٧/٦=١+١/٦.',
          },
          {
            id: 'au_12', type: 'multiple_choice',
            question_ar: 'أكل نايف ١/٣ فطيرته وأكل جعفر ٣/٧ فطيرته. ما الكسر الذي يمثل ما أكله الولدان؟',
            options_ar: ['١٦/٢١', '٤/١٠', '٢/٥', '١/٣'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٣،٧)=٢١. ١/٣=٧/٢١، ٣/٧=٩/٢١. ٧/٢١+٩/٢١=١٦/٢١.',
          },
          {
            id: 'au_13', type: 'fill_blank',
            question_ar: 'استعملت جمانة ٣/٨ متر قماش ، وأختها ١/٤. ما المجموع؟',
            options_ar: ['٥/٨ متر', '٤/١٢ متر', '٣/٤ متر', '٧/٨ متر'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٨،٤)=٨. ٣/٨+٢/٨=٥/٨.',
          },
          {
            id: 'au_14', type: 'true_false',
            question_ar: 'استعملت هند ١/٤ كوب زيت للبسكويت و٢/٤ للكيك. المجموع = ٣/٤ كوب.',
            correct_answer: 'true',
            explanation_ar: '١/٤ + ٢/٤ = ٣/٤. صحيح (هذه متشابهة بالفعل).',
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════
  // 9-4: طرح الكسور غير المتشابهة
  // ══════════════════════════════════════════════════
  {
    id: 'sub_unlike',
    title_ar: 'طرح الكسور غير المتشابهة',
    subtitle_ar: 'استخدام م.م.أ ثم الطرح',
    color: 'from-amber-700 to-orange-500',
    icon: '🔀',
    lessons: [
      {
        id: 'su_l1',
        title_ar: 'طرح الكسور غير المتشابهة',
        count: 13,
        image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=300',
        getQuestions: () => [
          {
            id: 'su_i1', type: 'info',
            question_ar: 'لطرح كسور غير متشابهة: (١) أوجد م.م.أ للمقامين. (٢) أعِد كتابة الكسرين بالمقام الجديد. (٣) اطرح. (٤) بسِّط. مثال: ٥/٦ − ٧/٩ — م.م.أ(٦،٩)=١٨. ٥/٦=١٥/١٨، ٧/٩=١٤/١٨. ١٥/١٨−١٤/١٨=١/١٨.',
            explanation_ar: 'طرح غير المتشابهة = م.م.أ → تحويل → طرح → تبسيط.',
          },
          {
            id: 'su_1', type: 'multiple_choice',
            question_ar: 'تحتاج وصفة حلوى ٥/٨ كوب سكر و٢/٣ كوب دقيق. أيهما أكثر وبكم؟',
            options_ar: ['الدقيق أكثر بـ ١/٢٤', 'السكر أكثر بـ ١/٢٤', 'متساويان', 'السكر أكثر بـ ١/٨'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٨،٣)=٢٤. ٥/٨=١٥/٢٤، ٢/٣=١٦/٢٤. ١٦>١٥ إذن الدقيق أكثر بـ ١/٢٤.',
            golden_rule: 'طرح غير المتشابهة: استعمل م.م.أ ليوحِّد المقامات.',
          },
          {
            id: 'su_2', type: 'multiple_choice',
            question_ar: '٣/٤ − ١/٣ = ___',
            options_ar: ['٥/١٢', '٢/١', '١/٦', '٤/١٢'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٤،٣)=١٢. ٣/٤=٩/١٢، ١/٣=٤/١٢. ٩/١٢−٤/١٢=٥/١٢.',
          },
          {
            id: 'su_3', type: 'true_false',
            question_ar: '٧/٨ − ١/٢ = ٣/٨.',
            correct_answer: 'true',
            explanation_ar: 'م.م.أ(٨،٢)=٨. ١/٢=٤/٨. ٧/٨−٤/٨=٣/٨. صحيح.',
          },
          {
            id: 'su_4', type: 'multiple_choice',
            question_ar: 'مشى عبدالغفور ٩/١٠ كلم إلى الحديقة ثم عاد بنفس المسافة. ما مجموع ما مشى؟',
            options_ar: ['٩/٥ = ١ وأربعة أخماس', '١٨/١٠', 'كلاهما صحيح', '٢ كلم'],
            correct_index: 2,
            explanation_ar: '٩/١٠ + ٩/١٠ = ١٨/١٠ = ٩/٥ = ١ + ٤/٥. كلا الخيارين الأول والثاني صحيح.',
          },
          {
            id: 'su_5', type: 'fill_blank',
            question_ar: '٥/٦ − ١/٤ = ___',
            options_ar: ['٧/١٢', '٤/٢', '١/٢', '٣/٨'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٦،٤)=١٢. ٥/٦=١٠/١٢، ١/٤=٣/١٢. ١٠/١٢−٣/١٢=٧/١٢.',
          },
          {
            id: 'su_6', type: 'ordering',
            question_ar: 'رتِّب خطوات طرح ٢/٣ − ١/٦:',
            items_ar: [
              'أوجد م.م.أ(٣،٦) = ٦',
              'حوِّل: ٢/٣=٤/٦',
              'اطرح: ٤/٦−١/٦=٣/٦',
              'بسِّط: ٣/٦=١/٢',
            ],
            correct_order: [0, 1, 2, 3],
            explanation_ar: 'الخطوات الصحيحة لطرح الكسور غير المتشابهة.',
          },
          {
            id: 'su_7', type: 'multiple_choice',
            question_ar: 'تظهر في صورة فطيرتا بيتزا: الخضار ٥/٦، اللحم ١/٢. بكم تزيد فطيرة الخضار على اللحم؟',
            options_ar: ['١/٣', '٤/٦', '٢/٦', '١/٢'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٦،٢)=٦. ٥/٦−٣/٦=٢/٦=١/٣.',
          },
          {
            id: 'su_8', type: 'true_false',
            question_ar: '١/٢ − ١/٣ = ١/٦.',
            correct_answer: 'true',
            explanation_ar: 'م.م.أ(٢،٣)=٦. ١/٢=٣/٦، ١/٣=٢/٦. ٣/٦−٢/٦=١/٦. صحيح.',
          },
          {
            id: 'su_9', type: 'classify',
            question_ar: 'أيُّ المجاميع في الطرح يعطي ١/٢؟',
            categories_ar: ['الناتج = ١/٢', 'الناتج ≠ ١/٢'],
            items_ar: [
              { text: '٣/٤ − ١/٤', correct_category: 0 },
              { text: '٥/٦ − ١/٣', correct_category: 0 },
              { text: '٧/٨ − ١/٤', correct_category: 0 },
              { text: '٢/٣ − ١/٦', correct_category: 0 },
              { text: '٣/٥ − ١/١٠', correct_category: 0 },
            ],
            explanation_ar: 'كلها تساوي ١/٢: ٢/٤=١/٢. ٣/٦=١/٢. ٥/٨≠١/٢. ٣/٦=١/٢. ٥/١٠=١/٢.',
          },
          {
            id: 'su_10', type: 'multiple_choice',
            question_ar: 'أوجد قيمة "س": ٣/٤ − س = ١/٤',
            options_ar: ['١/٢', '١/٤', '٢/٤', '٣/٤'],
            correct_index: 0,
            explanation_ar: 'س = ٣/٤ − ١/٤ = ٢/٤ = ١/٢.',
          },
          {
            id: 'su_11', type: 'multiple_choice',
            question_ar: 'مسح الرياضات المفضلة: كرة قدم ٧/١٥، تنس ٣/١٠، كرة سلة ٢/٥. بكم يزيد كرة القدم على التنس؟',
            options_ar: ['٥/٣٠ = ١/٦', '٤/٣٠', '٧/٣٠', '١/٣'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(١٥،١٠)=٣٠. ٧/١٥=١٤/٣٠، ٣/١٠=٩/٣٠. ١٤/٣٠−٩/٣٠=٥/٣٠=١/٦.',
          },
          {
            id: 'su_12', type: 'fill_blank',
            question_ar: 'الكميات في وصفة المكسرات: فستق ١/٢، لوز ١/٤، كاجو ٢/٣. بكم يزيد الكاجو على اللوز؟',
            options_ar: ['٥/١٢', '١/٢', '٢/٤', '١/٣'],
            correct_index: 0,
            explanation_ar: 'م.م.أ(٣،٤)=١٢. ٢/٣=٨/١٢، ١/٤=٣/١٢. ٨/١٢−٣/١٢=٥/١٢.',
          },
          {
            id: 'su_13', type: 'true_false',
            question_ar: 'استهلاك المياه: تسريبات ١/٥، صنابير ٨/٢٥. الصنابير أكثر استهلاكاً.',
            correct_answer: 'true',
            explanation_ar: 'م.م.أ(٥،٢٥)=٢٥. ١/٥=٥/٢٥، ٨/٢٥. ٨/٢٥>٥/٢٥. الصنابير أكثر. صحيح.',
          },
        ],
      },
    ],
  },
];

export const MATH_G5_S2_CH9_TOTAL = MATH_G5_S2_CH9_UNITS.reduce(
  (s, u) => s + u.lessons.reduce((ls, l) => ls + l.count, 0), 0
);