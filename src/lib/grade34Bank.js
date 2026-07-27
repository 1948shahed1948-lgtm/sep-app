/**
 * بنك الأسئلة التفاعلي — الصفان الثالث والرابع (9–10 سنوات)
 * أنواع الأسئلة: تذكّر · فهم · تطبيق · اختيار من متعدد · صواب وخطأ · ترتيب
 * النمط: أغلفة مائية + تصفّح وحدات ودروس تفاعلي
 */

const BANNER = 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/51f0da257_generated_image.png';
const UNIT_WATAN_IMG = 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/a26969753_generated_image.png';
const UNIT_LUGHA_IMG = 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/efe8ca643_generated_image.png';
const UNIT_SCIENCE_IMG = 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/2df5d1937_generated_image.png';

export { BANNER as GRADE34_BANNER };

export const GRADE34_UNITS = [
  {
    id: 'watan',
    title_ar: 'الوحدة الأولى: الوطن العربي',
    color: '#b45309',
    emoji: '🗺️',
    image: UNIT_WATAN_IMG,
    lessons: [
      {
        id: 'watan_1',
        title_ar: 'الدرس الأول: عواصم الدول العربية',
        icon: 'MapPin',
        questions: [
          {
            type: 'multiple_choice',
            question_ar: 'عاصمة المملكة الأردنية الهاشمية:',
            options_ar: ['بغداد', 'القاهرة', 'عمّان', 'الدوحة'],
            correct: 2,
            explanation_ar: 'عمّان هي عاصمة المملكة الأردنية الهاشمية.',
            golden_rule_ar: 'عمّان عاصمة الأردن — احفظ عواصم الدول العربية.',
          },
          {
            type: 'multiple_choice',
            question_ar: 'عاصمة مصر:',
            options_ar: ['بغداد', 'القاهرة', 'عمّان', 'الدوحة'],
            correct: 1,
            explanation_ar: 'القاهرة هي عاصمة مصر.',
          },
          {
            type: 'recall',
            question_ar: 'ما عاصمة المملكة الأردنية الهاشمية؟',
            model_answer_ar: 'عمّان.',
            explanation_ar: 'عاصمة الأردن هي عمّان.',
          },
          {
            type: 'true_false',
            question_ar: 'القاهرة عاصمة مصر.',
            correct: 'true',
            explanation_ar: 'صحيح، القاهرة هي عاصمة مصر.',
          },
        ],
      },
      {
        id: 'watan_2',
        title_ar: 'الدرس الثاني: تاريخ الوطن',
        icon: 'Clock',
        questions: [
          {
            type: 'recall',
            question_ar: 'متى تأسست المملكة الأردنية الهاشمية؟ (اكتب السنة بكلماتك)',
            model_answer_ar: 'تأسست عام ١٩٤٦م (استقلال المملكة).',
            explanation_ar: 'استقلّ الأردن عام ١٩٤٦م، وتأسست المملكة الأردنية الهاشمية.',
          },
          {
            type: 'comprehension',
            question_ar: 'اشرح بكلماتك معنى «الاستقلال».',
            model_answer_ar: 'أن تصبح الدولة حرّة تحكم نفسها بنفسها دون أن يحكمها غيرها.',
            explanation_ar: 'الاستقلال: أن تحكم الدولة نفسها بنفسها وتتصرف في شؤونها بحرية.',
            golden_rule_ar: 'الاستقلال = حرية الوطن في حكم نفسه.',
          },
          {
            type: 'true_false',
            question_ar: 'الاستقلال يعني أن تحكم الدولة نفسها بنفسها.',
            correct: 'true',
            explanation_ar: 'صحيح، هذا هو معنى الاستقلال.',
          },
        ],
      },
    ],
  },

  {
    id: 'lugha',
    title_ar: 'الوحدة الثانية: اللغة العربية',
    color: '#0d9488',
    emoji: '✍️',
    image: UNIT_LUGHA_IMG,
    lessons: [
      {
        id: 'lugha_1',
        title_ar: 'الدرس الأول: المفردات والجمل',
        icon: 'PenTool',
        questions: [
          {
            type: 'application',
            question_ar: 'استعمل كلمة «صدق» في جملة مفيدة.',
            model_answer_ar: 'الصدق منجاة، قال رسول الله ﷺ: «عليكم بالصدق فإنه يهدي إلى البر».',
            explanation_ar: 'الصدق: مطابقة القول للحقيقة. استعملها في جملة تظهر معناها.',
            golden_rule_ar: 'الصدق قولٌ يطابق الواقع — استعمله في جملة من إنشائك.',
          },
          {
            type: 'ordering',
            question_ar: 'رتّب الكلمات الآتية لتكوّن جملة صحيحة:',
            ordering_items_ar: ['العلمُ', 'نورٌ', 'يهدي', 'إلى', 'الحق'],
            explanation_ar: 'الجملة الصحيحة: «العلمُ نورٌ يهدي إلى الحق».',
            golden_rule_ar: 'رتّب الكلمات بحسب المعنى والرتب (مبتدأ + خبر + فعل + حرف + اسم).',
          },
          {
            type: 'comprehension',
            question_ar: 'اشرح بكلماتك معنى كلمة «الإخلاص».',
            model_answer_ar: 'أن أعمل العمل خالصًا لله وحده لا أُريد به praise أحد من الناس.',
            explanation_ar: 'الإخلاص: أن يكون العمل خالصًا لله وحده، لا رياء ولا سمعة.',
          },
          {
            type: 'true_false',
            question_ar: 'الصدق مطابقة القول للحقيقة.',
            correct: 'true',
            explanation_ar: 'صحيح، الصدق هو مطابقة القول للواقع.',
          },
          {
            type: 'multiple_choice',
            question_ar: 'مرادف كلمة «شجاع»:',
            options_ar: ['جبان', 'مقدام', 'كسول', 'ضعيف'],
            correct: 1,
            explanation_ar: 'مرادف «شجاع» هو «مقدام».',
          },
        ],
      },
    ],
  },

  {
    id: 'science',
    title_ar: 'الوحدة الثالثة: العلوم والطبيعة',
    color: '#0369a1',
    emoji: '🌱',
    image: UNIT_SCIENCE_IMG,
    lessons: [
      {
        id: 'science_1',
        title_ar: 'الدرس الأول: السماء والطقس',
        icon: 'Cloud',
        questions: [
          {
            type: 'true_false',
            question_ar: 'السماء زرقاء في النهار الصحو.',
            correct: 'true',
            explanation_ar: 'صحيح، تبدو السماء زرقاء في النهار عندما يكون الجو صحوًا.',
          },
          {
            type: 'multiple_choice',
            question_ar: 'من أين يأتي ضوء النهار؟',
            options_ar: ['القمر', 'الشمس', 'النجوم', 'المصابيح'],
            correct: 1,
            explanation_ar: 'ضوء النهار يأتي من الشمس.',
          },
          {
            type: 'recall',
            question_ar: 'اذكر لونًا من ألوان قوس قزح.',
            model_answer_ar: 'الأحمر (أو البرتقالي/الأصفر/الأخضر/الأزرق/النيلي/البنفسجي).',
            explanation_ar: 'ألوان قوس قزح سبعة: الأحمر، البرتقالي، الأصفر، الأخضر، الأزرق، النيلي، البنفسجي.',
          },
          {
            type: 'comprehension',
            question_ar: 'اشرح بكلماتك لماذا تبدو السماء زرقاء.',
            model_answer_ar: 'لأن ضوء الشمس يتشتت في الهواء فينتشر اللون الأزرق أكثر من غيره.',
            explanation_ar: 'ضوء الشمس يتشتت في غلاف الجو، وينتشر اللون الأزرق فيبدو للعين.',
            golden_rule_ar: 'زرقة السماء بسبب تشتت ضوء الشمس في الجو.',
          },
        ],
      },
      {
        id: 'science_2',
        title_ar: 'الدرس الثاني: النباتات',
        icon: 'Sprout',
        questions: [
          {
            type: 'ordering',
            question_ar: 'رتّب مراحل نمو النبات بالترتيب الصحيح:',
            ordering_items_ar: ['البذرة', 'الإنبات', 'الساق والأوراق', 'الزهرة', 'الثمرة'],
            explanation_ar: 'مراحل النبات: البذرة ← الإنبات ← الساق والأوراق ← الزهرة ← الثمرة.',
            golden_rule_ar: 'دورة حياة النبات: بذرة → إنبات → أوراق → زهرة → ثمرة.',
          },
          {
            type: 'application',
            question_ar: 'استعمل كلمة «نبات» في جملة مفيدة.',
            model_answer_ar: 'النباتُ يصنع غذاءه بوساطة ضوء الشمس في عملية البناء الضوئي.',
            explanation_ar: 'النبات كائن حي يصنع غذاءه بنفسه عبر البناء الضوئي.',
          },
          {
            type: 'multiple_choice',
            question_ar: 'ما الذي تحتاجه النباتات لتنمو؟',
            options_ar: ['الماء والضوء والهواء', 'الظلام فقط', 'الملح', 'البرودة الشديدة'],
            correct: 0,
            explanation_ar: 'النباتات تحتاج الماء والضوء والهواء ودرجة حرارة مناسبة لتنمو.',
          },
        ],
      },
    ],
  },
];

export const TOTAL_UNITS_G34 = GRADE34_UNITS.length;
export const TOTAL_LESSONS_G34 = GRADE34_UNITS.reduce((s, u) => s + u.lessons.length, 0);
export const TOTAL_QUESTIONS_G34 = GRADE34_UNITS.reduce(
  (s, u) => s + u.lessons.reduce((ls, l) => ls + l.questions.length, 0), 0
);