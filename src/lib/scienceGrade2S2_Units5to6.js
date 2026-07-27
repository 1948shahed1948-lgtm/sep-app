/**
 * العلوم — الصف الثاني الابتدائي · الفصل الثاني
 * الوحدة الخامسة: المادة (ص 57-98) — الدرس الأول: المواد الصلبة / الدرس الثاني: السوائل والغازات
 * الوحدة السادسة: القوى والطاقة (ف١١ القوى / ف١٢ استعمال الطاقة)
 */

import { LIQUIDS_GASES_LESSON } from '@/lib/scienceGrade2S2_LiquidsGases';
import { MATTER_CHANGES_UNIT } from '@/lib/scienceGrade2S2_MatterChanges';
import { FORCES_VOCAB_LESSON, FORCES_LESSON_1, FORCES_LESSON_2 } from '@/lib/scienceGrade2S2_Forces';
import { ENERGY_VOCAB_LESSON, HEAT_LESSON, ELECTRICITY_LESSON, ENERGY_REVIEW_LESSON } from '@/lib/scienceGrade2S2_Energy';

export const SCIENCE_G2_S2_UNITS_5_6 = [

  /* ═══════════════════════════════════════════════════
   *  الوحدة الخامسة: المادة (ص 57-98)
   * ═══════════════════════════════════════════════════ */
  {
    id: 'matter',
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/094f59559_generated_image.png',
    title_ar: 'الوحدة الخامسة: المادة',
    title_en: 'Unit 5: Matter',
    color: '#065f46',
    emoji: '🔬',
    lessons: [

      /* ─── مفردات الفكرة العامة (ص 58-59) ─── */
      {
        id: 'matter_vocab',
        title_ar: 'مفردات الفكرة العامة',
        title_en: 'General Idea Vocabulary',
        questions: [
          // مطابقة — المفردات والتعريفات (ص 58-59)
          {
            type: 'matching',
            question_ar: 'صِل كل مصطلح بتعريفه كما ورد في مفردات الفكرة العامة (ص 58-59):',
            question_en: 'Match each term to its definition from the general idea vocabulary (p.58-59):',
            pairs_ar: [
              { left: 'المادة', right: 'هي أيُّ شيءٍ يشغل مكاناً، وله كتلة' },
              { left: 'الصلب', right: 'مادة لها شكلٌ محددٌ خاصٌّ بها' },
              { left: 'السائل', right: 'مادة تأخذ شكلَ الوعاء الذي توجد فيه' },
              { left: 'الحجم', right: 'مقدارُ المكان الذي يشغله الجسم' },
              { left: 'الغاز', right: 'مادة تنتشر لتملأ المكان الذي توجد فيه' },
            ],
            pairs_en: [
              { left: 'Matter', right: 'Anything that occupies space and has mass' },
              { left: 'Solid', right: 'A material with a specific shape of its own' },
              { left: 'Liquid', right: 'A material that takes the shape of its container' },
              { left: 'Volume', right: 'The amount of space an object occupies' },
              { left: 'Gas', right: 'A material that spreads to fill its container' },
            ],
            explanation_ar: 'المادة: أي شيء يشغل مكاناً وله كتلة. الصلب: شكل محدد. السائل: يأخذ شكل الوعاء. الحجم: مقدار المكان الذي يشغله الجسم. الغاز: ينتشر ليملأ المكان.',
          },
          // اختيار من متعدد — تعريف المادة
          {
            type: 'multiple_choice',
            question_ar: 'ما تعريف المادة كما ورد في الكتاب؟ (ص 58)',
            question_en: 'What is the definition of matter as stated in the textbook? (p.58)',
            options_ar: [
              'هي أيُّ شيءٍ يشغل مكاناً، وله كتلة',
              'هي ما يُرى بالعين فقط',
              'هي المواد السائلة فقط',
              'هي الأشياء الثقيلة فقط',
            ],
            options_en: [
              'Anything that occupies space and has mass',
              'Only what can be seen by the eye',
              'Only liquid materials',
              'Only heavy objects',
            ],
            correct: 0,
            explanation_ar: 'المادة هي أيُّ شيءٍ يشغل مكاناً، وله كتلة — سواء كان صلباً أو سائلاً أو غازياً.',
          },
          // اختيار من متعدد — تعريف الصلب
          {
            type: 'multiple_choice',
            question_ar: 'ما تعريف المادة الصلبة؟ (ص 58)',
            question_en: 'What is the definition of a solid material? (p.58)',
            options_ar: [
              'مادة لها شكلٌ محددٌ خاصٌّ بها',
              'مادة تأخذ شكل الوعاء',
              'مادة تنتشر لتملأ المكان',
              'مادة ليس لها كتلة',
            ],
            options_en: [
              'A material with a specific shape of its own',
              'A material that takes the shape of its container',
              'A material that spreads to fill space',
              'A material with no mass',
            ],
            correct: 0,
            explanation_ar: 'الصلب: مادة لها شكلٌ محددٌ خاصٌّ بها — مثل الحجر والزجاج والخشب.',
          },
          // اختيار من متعدد — تعريف السائل
          {
            type: 'multiple_choice',
            question_ar: 'ما تعريف المادة السائلة؟ (ص 59)',
            question_en: 'What is the definition of a liquid material? (p.59)',
            options_ar: [
              'مادة تأخذ شكلَ الوعاء الذي توجد فيه',
              'مادة لها شكل محدد خاص بها',
              'مادة تنتشر لتملأ المكان',
              'مادة ليس لها حجم',
            ],
            options_en: [
              'A material that takes the shape of its container',
              'A material with a specific shape of its own',
              'A material that spreads to fill space',
              'A material with no volume',
            ],
            correct: 0,
            explanation_ar: 'السائل: مادة تأخذ شكلَ الوعاء الذي توجد فيه — مثل الماء والعصير والحليب.',
          },
          // اختيار من متعدد — تعريف الحجم
          {
            type: 'multiple_choice',
            question_ar: 'ما تعريف الحجم؟ (ص 59)',
            question_en: 'What is the definition of volume? (p.59)',
            options_ar: [
              'مقدارُ المكان الذي يشغله الجسم',
              'وزن الجسم على الميزان',
              'لون المادة',
              'شكل الوعاء',
            ],
            options_en: [
              'The amount of space an object occupies',
              'The weight of an object on a scale',
              'The color of the material',
              'The shape of the container',
            ],
            correct: 0,
            explanation_ar: 'الحجم: مقدارُ المكان الذي يشغله الجسم — ويُقاس بأدوات مثل المخبار.',
          },
          // اختيار من متعدد — تعريف الغاز
          {
            type: 'multiple_choice',
            question_ar: 'ما تعريف الغاز؟ (ص 59)',
            question_en: 'What is the definition of a gas? (p.59)',
            options_ar: [
              'مادة تنتشر لتملأ المكان الذي توجد فيه',
              'مادة لها شكل محدد',
              'مادة تأخذ شكل الوعاء',
              'مادة صلبة متكسرة',
            ],
            options_en: [
              'A material that spreads to fill its container',
              'A material with a fixed shape',
              'A material that takes the shape of its container',
              'A broken solid material',
            ],
            correct: 0,
            explanation_ar: 'الغاز: مادة تنتشر لتملأ المكان الذي توجد فيه — مثل الهواء وبخار الماء.',
          },
          // تصنيف — أمثلة على كل حالة
          {
            type: 'classify',
            question_ar: 'صنّف المواد التالية إلى: صلبة / سائلة / غازية (استناداً لمفردات الفكرة العامة):',
            question_en: 'Classify each material as: solid / liquid / gas (based on the general idea vocabulary):',
            categories_ar: ['مادة صلبة', 'مادة سائلة', 'مادة غازية'],
            categories_en: ['Solid', 'Liquid', 'Gas'],
            items_ar: ['الحجر', 'الزجاج', 'الماء', 'العصير', 'الهواء', 'بخار الماء', 'الخشب', 'الحليب'],
            items_en: ['Stone', 'Glass', 'Water', 'Juice', 'Air', 'Water vapor', 'Wood', 'Milk'],
            correct_categories: [0, 0, 1, 1, 2, 2, 0, 1],
            explanation_ar: 'صلبة: الحجر، الزجاج، الخشب (شكل محدد). سائلة: الماء، العصير، الحليب (تأخذ شكل الوعاء). غازية: الهواء، بخار الماء (تنتشر لتملأ المكان).',
          },
          // صح أم خطأ — الحجم
          {
            type: 'true_false',
            question_ar: 'الحجم هو مقدارُ المكان الذي يشغله الجسم.',
            question_en: 'Volume is the amount of space an object occupies.',
            correct: 'true',
            explanation_ar: 'الحجم: مقدارُ المكان الذي يشغله الجسم — يُقاس بالأدوات المناسبة مثل المخبار.',
          },
        ],
      },

      /* ─── الدرس الأول: المواد الصلبة (ص 60-64) ─── */
      {
        id: 'solid_materials',
        title_ar: 'الدرس الأول: المواد الصلبة',
        title_en: 'Lesson 1: Solid Materials',
        questions: [
          // اختيار من متعدد — السؤال الأساسي (ص 62)
          {
            type: 'multiple_choice',
            question_ar: 'ما السؤال الأساسي للدرس الأول؟ (ص 62)',
            question_en: 'What is the essential question for Lesson 1? (p.62)',
            options_ar: [
              'ما خصائص المواد الصلبة؟',
              'ما خصائص المواد السائلة؟',
              'كيف يتغير الغاز؟',
              'ما هو الحجم؟',
            ],
            options_en: [
              'What are the properties of solid materials?',
              'What are the properties of liquids?',
              'How does gas change?',
              'What is volume?',
            ],
            correct: 0,
            explanation_ar: 'السؤال الأساسي للدرس: ما خصائص المواد الصلبة؟ — سندرس خواصّ المواد الصلبة مثل الشكل والصلابة والشفافية.',
          },
          // اختيار من متعدد — تعريف المادة الصلبة (ص 62)
          {
            type: 'multiple_choice',
            question_ar: 'ما المادة الصلبة؟ (ص 62)',
            question_en: 'What is a solid material? (p.62)',
            options_ar: [
              'مادة لها شكلٌ محددٌ خاصٌّ بها، ولها خواصّ متعددة',
              'مادة تأخذ شكل الوعاء الذي توجد فيه',
              'مادة تنتشر لتملأ المكان',
              'مادة ليس لها شكل ولا حجم',
            ],
            options_en: [
              'A material with a specific shape of its own, with multiple properties',
              'A material that takes the shape of its container',
              'A material that spreads to fill space',
              'A material with no shape or volume',
            ],
            correct: 0,
            explanation_ar: 'المادة الصلبة: مادة لها شكلٌ محددٌ خاصٌّ بها، ولها خواصّ متعددة — فبعضها يثني وبعضها يتكسر وبعضها يطفو وبعضها يغوص.',
          },
          // صح أم خطأ — خصائص المواد الصلبة (ص 62)
          {
            type: 'true_false',
            question_ar: 'بعض المواد الصلبة يثني، وبعضها الآخر يتكسّر عند ثنيه.',
            question_en: 'Some solid materials bend, while others break when bent.',
            correct: 'true',
            explanation_ar: 'من خواص المواد الصلبة: بعضها يثني (مثل الخشب الرقيق)، وبعضها يتكسر عند ثنيه (مثل الزجاج).',
          },
          // صح أم خطأ — الطفو والغوص
          {
            type: 'true_false',
            question_ar: 'بعض المواد الصلبة يطفو على الماء، وبعضها الآخر يغوص فيه.',
            question_en: 'Some solid materials float on water, while others sink in it.',
            correct: 'true',
            explanation_ar: 'من خواص المواد الصلبة: بعضها يطفو على الماء (مثل الخشب الخفيف)، وبعضها يغوص (مثل الحديد والحجر).',
          },
          // مطابقة — خواص المواد الصلبة (ص 63)
          {
            type: 'matching',
            question_ar: 'صِل كل مادة صلبة بخواصها كما في جدول الكتاب (ص 63):',
            question_en: 'Match each solid material to its properties as in the textbook table (p.63):',
            pairs_ar: [
              { left: 'الزجاج', right: 'شفّافٌ — ناعمٌ أملسُ — قابلٌ للكسر' },
              { left: 'الخيوط الملونة', right: 'ناعمةٌ — ملونةٌ — طويلةٌ ورفيعة' },
              { left: 'الصخر', right: 'قاسٍ — منقّطٌ — خشنٌ' },
            ],
            pairs_en: [
              { left: 'Glass', right: 'Transparent — smooth — breakable' },
              { left: 'Colored threads', right: 'Soft — colored — long and thin' },
              { left: 'Rock', right: 'Hard — speckled — rough' },
            ],
            explanation_ar: 'الزجاج: شفّاف، ناعم، قابل للكسر. الخيوط الملونة: ناعمة، ملونة، طويلة ورفيعة. الصخر: قاسٍ، منقّط، خشن.',
          },
          // تصنيف — خواص الزجاج والصخر (ص 63)
          {
            type: 'classify',
            question_ar: 'صنّف كل خاصية تحت المادة الصلبة المناسبة (ص 63):',
            question_en: 'Classify each property under the correct solid material (p.63):',
            categories_ar: ['الزجاج', 'الصخر'],
            categories_en: ['Glass', 'Rock'],
            items_ar: ['شفّاف', 'قاسٍ', 'ناعم أملس', 'خشن', 'قابل للكسر', 'منقّط'],
            items_en: ['Transparent', 'Hard', 'Smooth', 'Rough', 'Breakable', 'Speckled'],
            correct_categories: [0, 1, 0, 1, 0, 1],
            explanation_ar: 'الزجاج: شفّاف، ناعم أملس، قابل للكسر. الصخر: قاسٍ، خشن، منقّط.',
          },
          // ترتيب — نشاط أستكشف: خواص الملاعق (ص 61)
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات نشاط "أستكشف: ما خواص هذه المواد الصلبة؟" (ص 61):',
            question_en: 'Order the steps of the "Explore: What are the properties of these solid materials?" activity (p.61):',
            items_ar: [
              'أُلاحظ: أتفحّص الملاعق — ما خواص كلٍّ منها؟',
              'أتوقّع: أيُّ الملاعق ستطفو على الماء وأيُّها ستنغمر فيه؟',
              'أُجرّب: أضع الملاعق في حوض الماء',
              'أُسجّل البيانات: أعمل جدولاً أُسجّل فيه ما أُلاحظه',
              'أستكشف أكثر: كيف تتغير نتائجي إذا استخدمت أجساماً أخرى؟',
            ],
            items_en: [
              'Observe: examine the spoons — what are the properties of each?',
              'Predict: which spoons will float and which will sink?',
              'Test: place the spoons in the water basin',
              'Record data: make a table to record observations',
              'Explore more: how would results change with other objects?',
            ],
            explanation_ar: 'خطوات النشاط: ملاحظة الملاعق ← التوقع (طفو/غوص) ← التجربة في حوض الماء ← تسجيل البيانات في جدول ← استكشاف أكثر بأجسام أخرى.',
          },
          // اختيار من متعدد — أدوات النشاط (ص 61)
          {
            type: 'multiple_choice',
            question_ar: 'ما الأدوات التي أحتاجها لنشاط "أستكشف"؟ (ص 61)',
            question_en: 'What tools do I need for the "Explore" activity? (p.61)',
            options_ar: ['ملاعق متنوعة وحوض ماء', 'مصباح يدوي وكرة', 'مغناطيس ودبابيس', 'تلسكوب وخريطة'],
            options_en: ['Various spoons and a water basin', 'Flashlight and a ball', 'Magnet and pins', 'Telescope and a map'],
            correct: 0,
            explanation_ar: 'أحتاج إلى: ملاعق متنوعة (معدنية وبلاستيكية) + حوض ماء — لاختبار خواص المواد الصلبة وطفوها/غوصها.',
          },
          // مطابقة — المفردات (ص 62)
          {
            type: 'matching',
            question_ar: 'صِل كل مفردة بمعناها (مفردات الدرس ص 62):',
            question_en: 'Match each vocabulary term to its meaning (Lesson vocabulary p.62):',
            pairs_ar: [
              { left: 'المادة الصلبة', right: 'مادة لها شكل محدد خاص بها' },
              { left: 'الخصائص', right: 'الصفات التي تميز each مادة' },
              { left: 'الطفو', right: 'بقاء الجسم على سطح الماء' },
              { left: 'الغوص', right: 'نزول الجسم إلى قاع الماء' },
            ],
            pairs_en: [
              { left: 'Solid material', right: 'A material with a specific shape of its own' },
              { left: 'Properties', right: 'Characteristics that distinguish each material' },
              { left: 'Floating', right: 'An object staying on the water surface' },
              { left: 'Sinking', right: 'An object going down to the bottom of water' },
            ],
            explanation_ar: 'المادة الصلبة: شكل محدد. الخصائص: الصفات المميزة. الطفو: البقاء على السطح. الغوص: النزول للقاع.',
          },
          // صح أم خطأ — السؤال الأساسي
          {
            type: 'true_false',
            question_ar: 'المادة الصلبة لها شكل محدد خاص بها.',
            question_en: 'A solid material has a specific shape of its own.',
            correct: 'true',
            explanation_ar: 'السؤال الأساسي: ما خصائص المواد الصلبة؟ الإجابة: المادة الصلبة لها شكل محدد خاص بها، ولها خواص متعددة.',
          },
          // اختيار من متعدد — خواص الخيوط الملونة (ص 63)
          {
            type: 'multiple_choice',
            question_ar: 'ما خواص الخيوط الملونة كما وردت في جدول الكتاب؟ (ص 63)',
            question_en: 'What are the properties of colored threads as in the textbook table? (p.63)',
            options_ar: ['ناعمة — ملونة — طويلة ورفيعة', 'قاسية — خشنة — منقطة', 'شفافة — أملس — قابلة للكسر', 'ثقيلة — باردة — صلبة'],
            options_en: ['Soft — colored — long and thin', 'Hard — rough — speckled', 'Transparent — smooth — breakable', 'Heavy — cold — solid'],
            correct: 0,
            explanation_ar: 'الخيوط الملونة: ناعمة، ملونة، طويلة ورفيعة — وهي مادة صلبة لها شكل محدد وخواص متعددة.',
          },
          // اختيار من متعدد — اختلاف مكونات المواد الصلبة (ص 64)
          {
            type: 'multiple_choice',
            question_ar: 'تختلف مكونات المواد الصلبة، لذا قد تكون: (ص 64)',
            question_en: 'Solid materials vary in composition, so they may be: (p.64)',
            options_ar: [
              'قاسية مثل الحديد والخشب، أو خشنة مثل الحجر، أو ناعمة الملمس مثل الزجاج',
              'سائلة مثل الماء فقط',
              'غازية مثل الهواء',
              'جميعها متساوية في الخصائص',
            ],
            options_en: [
              'Hard like iron and wood, or rough like stone, or smooth like glass',
              'Liquid like water only',
              'Gaseous like air',
              'All equal in properties',
            ],
            correct: 0,
            explanation_ar: 'تختلف مكونات المواد الصلبة: قاسية (الحديد، الخشب)، خشنة (الحجر)، ناعمة الملمس (الزجاج) — لكل مادة صلبة خواصها الخاصة.',
          },
          // مطابقة — جدول الخواص الثاني (ص 64)
          {
            type: 'matching',
            question_ar: 'صِل كل مادة صلبة بخواصها كما في اللوحة (ص 64):',
            question_en: 'Match each solid material to its properties as in the chart (p.64):',
            pairs_ar: [
              { left: 'الصلصال', right: 'لَيِّن — قابلٌ للتشكيل — متماسك' },
              { left: 'الإسفنج البحري', right: 'أصفر — لَيِّن — فيه فجوات' },
              { left: 'اللعبة', right: 'زرقاء — لَيِّنة — مطاطية' },
            ],
            pairs_en: [
              { left: 'Modeling clay', right: 'Soft — malleable — cohesive' },
              { left: 'Sea sponge', right: 'Yellow — soft — has pores' },
              { left: 'Toy', right: 'Blue — soft — rubbery' },
            ],
            explanation_ar: 'الصلصال: ليّن، قابل للتشكيل، متماسك. الإسفنج البحري: أصفر، ليّن، فيه فجوات. اللعبة: زرقاء، ليّنة، مطاطية.',
          },
          // تصنيف — خواص الصلصال والإسفنج (ص 64)
          {
            type: 'classify',
            question_ar: 'صنّف كل خاصية تحت المادة الصلبة المناسبة (ص 64):',
            question_en: 'Classify each property under the correct solid material (p.64):',
            categories_ar: ['الصلصال', 'الإسفنج البحري'],
            categories_en: ['Modeling clay', 'Sea sponge'],
            items_ar: ['قابل للتشكيل', 'أصفر', 'متماسك', 'فيه فجوات', 'ليّن'],
            items_en: ['Malleable', 'Yellow', 'Cohesive', 'Has pores', 'Soft'],
            correct_categories: [0, 1, 0, 1, 0],
            explanation_ar: 'الصلصال: قابل للتشكيل، متماسك، ليّن. الإسفنج البحري: أصفر، فيه فجوات، ليّن. (الليّن مشترك بينهما).',
          },
          // اختيار من متعدد — السؤال الأساسي للوحة (ص 64)
          {
            type: 'multiple_choice',
            question_ar: 'ما بعض خواص المواد الصلبة؟ (سؤال اللوحة ص 64)',
            question_en: 'What are some properties of solid materials? (Chart question p.64)',
            options_ar: [
              'القساوة، الخشونة، نعومة الملمس، الليونة، القابلية للتشكيل، المطاطية',
              'الشفافية فقط',
              'الطفاية والغوص فقط',
              'لا توجد خواص للمواد الصلبة',
            ],
            options_en: [
              'Hardness, roughness, smoothness, softness, malleability, elasticity',
              'Transparency only',
              'Floating and sinking only',
              'Solids have no properties',
            ],
            correct: 0,
            explanation_ar: 'خواص المواد الصلبة متعددة: القساوة (الحديد)، الخشونة (الحجر)، نعومة الملمس (الزجاج)، الليونة (الصلصال)، المطاطية (اللعبة).',
          },

          /* ─── قسم قياس المواد الصلبة (ص 65-66) ─── */
          // اختيار من متعدد — كيف نقيس المواد الصلبة
          {
            type: 'multiple_choice',
            question_ar: 'كيف نقيس المواد الصلبة؟ (ص 65)',
            question_en: 'How do we measure solid materials? (p.65)',
            options_ar: [
              'باستخدام أدواتٍ تُسمّى أدوات القياس',
              'بالنظر فقط دون أدوات',
              'بالتذوق',
              'بالشم',
            ],
            options_en: [
              'Using tools called measuring instruments',
              'By looking only without tools',
              'By tasting',
              'By smelling',
            ],
            correct: 0,
            explanation_ar: 'نقيس المواد الصلبة باستخدام أدواتٍ تُسمّى أدوات القياس — مثل المسطرة والميزان.',
          },
          // مطابقة — أدوات القياس واستخداماتها (ص 65)
          {
            type: 'matching',
            question_ar: 'صِل كل أداة قياس باستخدامها (ص 65):',
            question_en: 'Match each measuring tool to its use (p.65):',
            pairs_ar: [
              { left: 'المسطرة', right: 'تُستخدم لقياس طول المادة الصلبة وعرضها وارتفاعها بوحدة السنتيمتر' },
              { left: 'الميزان ذو الكفتين', right: 'يُستخدم لقياس كتلة الجسم' },
            ],
            pairs_en: [
              { left: 'Ruler', right: 'Used to measure length, width, and height in centimeters' },
              { left: 'Two-pan balance', right: 'Used to measure the mass of an object' },
            ],
            explanation_ar: 'المسطرة: طول/عرض/ارتفاع بوحدة السنتيمتر. الميزان ذو الكفتين: كتلة الجسم.',
          },
          // اختيار من متعدد — وحدة قياس الطول (ص 65)
          {
            type: 'multiple_choice',
            question_ar: 'بأي وحدة تقيس المساطر طول المواد الصلبة؟ (ص 65)',
            question_en: 'In what unit do rulers measure the length of solid materials? (p.65)',
            options_ar: ['السنتيمتر', 'الكيلوجرام', 'اللتر', 'الثانية'],
            options_en: ['Centimeter', 'Kilogram', 'Liter', 'Second'],
            correct: 0,
            explanation_ar: 'المساطر تقيس الطول بوحدة السنتيمتر — تُستخدم لقياس طول المادة الصلبة وعرضها وارتفاعها.',
          },
          // اختيار من متعدد — قياس الكتلة (ص 65)
          {
            type: 'multiple_choice',
            question_ar: 'ما الأداة التي تُستخدم لقياس كتلة الجسم؟ (ص 65)',
            question_en: 'Which tool is used to measure the mass of an object? (p.65)',
            options_ar: ['الميزان ذو الكفتين', 'المسطرة', 'المخبار', 'المنقار'],
            options_en: ['Two-pan balance', 'Ruler', 'Cylinder', 'Pipette'],
            correct: 0,
            explanation_ar: 'يُستخدم الميزان ذو الكفتين لقياس كتلة الجسم — يمكن قياس كتلة وطول قطعة من الطباشير مثلاً.',
          },
          // صح أم خطأ — طرق قياس مختلفة (ص 65)
          {
            type: 'true_false',
            question_ar: 'يمكن قياس الجسم بطرق مختلفة — فمثلاً يمكن قياس كتلة وطول قطعة من الطباشير.',
            question_en: 'An object can be measured in different ways — for example, measuring the mass and length of a piece of chalk.',
            correct: 'true',
            explanation_ar: 'يمكن قياس الجسم بطرق مختلفة: نقيس كتلته بالميزان، وطوله وعرضه بالمسطرة — مثل قطعة الطباشير.',
          },
          // ترتيب — نشاط قياس كتلة أشياء الصف (ص 65)
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات نشاط "أقيس كتلة بعض الأشياء الموجودة في صفّي" (ص 65):',
            question_en: 'Order the steps of the "I measure the mass of some objects in my classroom" activity (p.65):',
            items_ar: [
              'أحضر الميزان ذا الكفتين',
              'أضع القلم الأزرق في إحدى كفتي الميزان',
              'أضيف أقلاماً أخرى للكفة الأخرى حتى يتزان الميزان',
              'أُسجّل كتلة القلم الأزرق',
              'أكرر العمل مع أشياء أخرى مثل المقص',
            ],
            items_en: [
              'Bring the two-pan balance',
              'Place the blue pen in one pan',
              'Add other pens to the other pan until balanced',
              'Record the mass of the blue pen',
              'Repeat with other objects like scissors',
            ],
            explanation_ar: 'نشاط القياس: إحضار الميزان ← وضع القلم في كفة ← إضافة أقلام للكفة الأخرى حتى التزان ← تسجيل الكتلة ← التكرار بأشياء أخرى.',
          },
          // اختيار من متعدد — أقرأ الصورة: الميزان (ص 66)
          {
            type: 'multiple_choice',
            question_ar: 'أقرأ الصورة: ماذا يحدث للميزان ذي الكفتين إذا أضفت قلماً آخر إلى كفته اليمنى؟ (ص 66)',
            question_en: 'Read the picture: What happens to the two-pan balance if I add another pen to its right pan? (p.66)',
            options_ar: [
              'تميل كفته اليمنى للأسفل لأنها أصبحت أثقل',
              'تبقى متزنة دائماً',
              'تميل كفته اليسرى للأسفل',
              'ينكسر الميزان',
            ],
            options_en: [
              'Its right pan tilts downward because it became heavier',
              'It always stays balanced',
              'Its left pan tilts downward',
              'The balance breaks',
            ],
            correct: 0,
            explanation_ar: 'عند إضافة قلم آخر للكفة اليمنى تزداد كتلتها فتميل للأسفل — لأن الكفة الأثقل تنزل في الميزان ذي الكفتين.',
          },
          // تصنيف — ما يقيسه كل أداة (ص 65)
          {
            type: 'classify',
            question_ar: 'صنّف كل ما يلي إلى: تقيسه المسطرة / يقيسه الميزان ذو الكفتين (ص 65):',
            question_en: 'Classify each as: measured by ruler / measured by two-pan balance (p.65):',
            categories_ar: ['تقيسه المسطرة', 'يقيسه الميزان'],
            categories_en: ['Measured by ruler', 'Measured by balance'],
            items_ar: ['طول قلم الرصاص', 'كتلة قطعة طباشير', 'عرض كتاب', 'ارتفاع صندوق', 'كتلة مقص'],
            items_en: ['Length of a pencil', 'Mass of a chalk piece', 'Width of a book', 'Height of a box', 'Mass of scissors'],
            correct_categories: [0, 1, 0, 0, 1],
            explanation_ar: 'المسطرة: طول، عرض، ارتفاع (قلم، كتاب، صندوق). الميزان: كتلة (طباشير، مقص).',
          },
          // اختيار من متعدد — أدوات قياس المواد الصلبة (ص 65 مراجعة)
          {
            type: 'multiple_choice',
            question_ar: 'ما الأدوات التي يمكن استخدامها لقياس المواد الصلبة؟ (ص 65 مراجعة)',
            question_en: 'What tools can be used to measure solid materials? (p.65 review)',
            options_ar: [
              'المسطرة لقياس الطول والميزان ذو الكفتين لقياس الكتلة',
              'المخبار فقط',
              'المصباح اليدوي',
              'المغناطيس فقط',
            ],
            options_en: [
              'A ruler for length and a two-pan balance for mass',
              'Only a cylinder',
              'A flashlight',
              'Only a magnet',
            ],
            correct: 0,
            explanation_ar: 'نقيس المواد الصلبة بأدوات قياس: المسطرة (طول/عرض/ارتفاع بالسنتيمتر) والميزان ذو الكفتين (الكتلة).',
          },
          // اختيار من متعدد — مراجعة: أمثلة على المواد الصلبة (ص 65)
          {
            type: 'multiple_choice',
            question_ar: 'أُلخّص: اذكر بعض الأمثلة على المواد الصلبة. (ص 65 — أفكر وأتحدث وأكتب)',
            question_en: 'Summarize: Mention some examples of solid materials. (p.65 — Think, Talk, and Write)',
            options_ar: [
              'الحديد، الخشب، الحجر، الزجاج، الصلصال',
              'الماء، الحليب، العصير',
              'الهواء، الأكسجين، بخار الماء',
              'العسل والشراب',
            ],
            options_en: [
              'Iron, wood, stone, glass, modeling clay',
              'Water, milk, juice',
              'Air, oxygen, water vapor',
              'Honey and syrup',
            ],
            correct: 0,
            explanation_ar: 'أمثلة على المواد الصلبة: الحديد، الخشب، الحجر، الزجاج، الصلصال — كلها لها شكل محدد خاص بها وخواص متعددة.',
          },
          // اختيار من متعدد — مراجعة: كيف أقيس المادة الصلبة (ص 65)
          {
            type: 'multiple_choice',
            question_ar: 'كيف يمكنني قياس المادة الصلبة؟ (ص 65 — أفكر وأتحدث وأكتب)',
            question_en: 'How can I measure a solid material? (p.65 — Think, Talk, and Write)',
            options_ar: [
              'أقيس طولها وعرضها وارتفاعها بالمسطرة، وكتلتها بالميزان ذي الكفتين',
              'أنظر إليها فقط',
              'أتذوقها',
              'أشمّها',
            ],
            options_en: [
              'I measure its length, width, and height with a ruler, and its mass with a two-pan balance',
              'I only look at it',
              'I taste it',
              'I smell it',
            ],
            correct: 0,
            explanation_ar: 'أقيس المادة الصلبة بأدوات القياس: المسطرة (الطول والعرض والارتفاع بالسنتيمتر) والميزان ذو الكفتين (الكتلة).',
          },
          // اختيار من متعدد — السؤال الأساسي (ص 65 مراجعة)
          {
            type: 'multiple_choice',
            question_ar: 'السؤال الأساسي: ما خصائص المواد الصلبة؟ (ص 65 — أفكر وأتحدث وأكتب)',
            question_en: 'Essential question: What are the properties of solid materials? (p.65 — Think, Talk, and Write)',
            options_ar: [
              'لها شكل محدد خاص بها، وقد تكون قاسية أو خشنة أو ناعمة أو ليّنة أو قابلة للتشكيل أو مطاطية',
              'تأخذ شكل الوعاء',
              'تنساب وتنتشر',
              'ليس لها كتلة',
            ],
            options_en: [
              'They have a specific shape of their own, and may be hard, rough, smooth, soft, malleable, or rubbery',
              'They take the shape of their container',
              'They flow and spread',
              'They have no mass',
            ],
            correct: 0,
            explanation_ar: 'خصائص المواد الصلبة: لها شكل محدد خاص بها، وخواص متعددة — قاسية (الحديد)، خشنة (الحجر)، ناعمة (الزجاج)، ليّنة (الصلصال)، مطاطية (اللعبة).',
          },
          // العلوم والفن (ص 65)
          {
            type: 'multiple_choice',
            question_ar: 'العلوم والفن (ص 65): كيف أستعمل المواد الصلبة في الصف للقيام بعمل فني يوضح خواصها؟',
            question_en: 'Science and Art (p.65): How do I use solid materials in class to make an artwork showing their properties?',
            options_ar: [
              'أستعمل مواد صلبة مختلفة (صلصال، خشب، حجر) وأشكّلها في عمل فني يبيّن خواصها كالليونة والقساوة',
              'أذيب المواد الصلبة أولاً',
              'أستعمل الماء فقط',
              'لا يمكن عمل فن بالمواد الصلبة',
            ],
            options_en: [
              'I use different solid materials (clay, wood, stone) and shape them into artwork showing properties like softness and hardness',
              'I melt the solid materials first',
              'I use only water',
              'Art cannot be made with solid materials',
            ],
            correct: 0,
            explanation_ar: 'العلوم والفن: أستعمل المواد الصلبة في الصف (صلصال، خشب، حجر) وأشكّلها في عمل فني يوضح خواصها — مثل ليونة الصلصال وقساوة الحجر.',
          },
          // الربط مع رؤية 2030 (ص 66)
          {
            type: 'multiple_choice',
            question_ar: 'الربط مع رؤية 2030 (ص 66): من أهداف الرؤية 1.1.2 تعزيز قيم الإتقان والانضباط. كيف يتحقق ذلك في قياس المواد الصلبة؟',
            question_en: 'Connecting with Vision 2030 (p.66): Goal 1.1.2 strengthens the values of mastery and discipline. How is this achieved in measuring solid materials?',
            options_ar: [
              'بالإتقان في استخدام أدوات القياس بدقة والانضباط بتسجيل النتائج بعناية',
              'بتجاهل أدوات القياس',
              'بقياس عشوائي دون تسجيل',
              'باستخدام أدوات خاطئة',
            ],
            options_en: [
              'Through mastery in using measuring tools accurately and discipline in recording results carefully',
              'By ignoring measuring tools',
              'By random measurement without recording',
              'By using wrong tools',
            ],
            correct: 0,
            explanation_ar: 'قيم الإتقان والانضباط (رؤية 2030 هدف 1.1.2) تتحقق في القياس: إتقان باستخدام الأدوات بدقة (مسطرة/ميزان)، وانضباط بتسجيل النتائج بعناية.',
          },
          // اختيار من متعدد — طبيعي أم من صنع الإنسان: الكرسي الخشبي (ص 67)
          {
            type: 'multiple_choice',
            question_ar: 'هذا الكرسي صُنع من الخشب. الخشب منتج طبيعي أم من صنع الإنسان؟ (ص 67)',
            question_en: 'This chair is made of wood. Is wood a natural product or man-made? (p.67)',
            options_ar: [
              'الخشب منتج طبيعي من الأشجار — يقطع الناس الأشجار ثم يشكّلون الخشب بأدوات مخصصة',
              'الخشب من صنع الإنسان',
              'الخشب مادة سائلة',
              'الخشب غاز',
            ],
            options_en: [
              'Wood is a natural product from trees — people cut trees then shape the wood with special tools',
              'Wood is man-made',
              'Wood is a liquid',
              'Wood is a gas',
            ],
            correct: 0,
            explanation_ar: 'الخشب منتج طبيعي من الأشجار — يقطع الناس الأشجار ثم يشكّلون الخشب باستخدام أدوات مخصصة لعمل الكرسي. يمكن طلاء الخشب أو صبغه، وتحت الطلاء يبقى لون الخشب الطبيعي.',
          },
          // اختيار من متعدد — الكرسي البلاستيكي (ص 67)
          {
            type: 'multiple_choice',
            question_ar: 'الكرسي البلاستيكي صُنع من البلاستيك. البلاستيك طبيعي أم من صنع الإنسان؟ (ص 67)',
            question_en: 'The plastic chair is made of plastic. Is plastic natural or man-made? (p.67)',
            options_ar: [
              'البلاستيك من صنع الإنسان — يجمع الناس المواد الكيميائية لصنعه ثم يشكّلونه في نماذج',
              'البلاستيك منتج طبيعي من الأشجار',
              'البلاستيك مادة سائلة',
              'البلاستيك من الحيوانات',
            ],
            options_en: [
              'Plastic is man-made — people gather chemical materials to make it then shape it into models',
              'Plastic is a natural product from trees',
              'Plastic is a liquid',
              'Plastic comes from animals',
            ],
            correct: 0,
            explanation_ar: 'البلاستيك من صنع الإنسان — يجمع الناس المواد الكيميائية لصنع البلاستيك ثم يشكّلونه في نماذج. هناك أنواع مختلفة: بلاستيك صلب وبلاستيك قابل للثني، ويمكن إضافة اللون إليه.',
          },
          // تصنيف — طبيعي أم من صنع الإنسان (ص 67)
          {
            type: 'classify',
            question_ar: 'صنّف كل مادة صلبة إلى: طبيعية / من صنع الإنسان (ص 67):',
            question_en: 'Classify each solid material as: natural / man-made (p.67):',
            categories_ar: ['طبيعية', 'من صنع الإنسان'],
            categories_en: ['Natural', 'Man-made'],
            items_ar: ['الخشب', 'البلاستيك', 'الحجر', 'الزجاج', 'الأشجار', 'الصلصال الصناعي'],
            items_en: ['Wood', 'Plastic', 'Stone', 'Glass', 'Trees', 'Artificial clay'],
            correct_categories: [0, 1, 0, 1, 0, 1],
            explanation_ar: 'طبيعية: الخشب (من الأشجار)، الحجر، الأشجار. من صنع الإنسان: البلاستيك (من المواد الكيميائية)، الزجاج، الصلصال الصناعي.',
          },
          // مطابقة — أنواع البلاستيك (ص 67)
          {
            type: 'matching',
            question_ar: 'صِل كل نوع من البلاستيك بوصفه (ص 67):',
            question_en: 'Match each type of plastic to its description (p.67):',
            pairs_ar: [
              { left: 'البلاستيك الصلب', right: 'صلب لا يثني' },
              { left: 'البلاستيك القابل للثني', right: 'يمكن ثنيه' },
              { left: 'البلاستيك الملوّن', right: 'أُضيف اللون إلى المواد الكيميائية فيه' },
            ],
            pairs_en: [
              { left: 'Rigid plastic', right: 'Hard, does not bend' },
              { left: 'Flexible plastic', right: 'Can be bent' },
              { left: 'Colored plastic', right: 'Color was added to its chemical materials' },
            ],
            explanation_ar: 'أنواع البلاستيك: صلب (لا يثني)، قابل للثني (يمكن ثنيه)، ملوّن (أُضيف اللون للمواد الكيميائية). البلاستيك من صنع الإنسان.',
          },
          // اختيار من متعدد — رؤية 2030: توطين الصناعات (ص 67)
          {
            type: 'multiple_choice',
            question_ar: 'الربط مع رؤية 2030 (ص 67): من أهداف الرؤية 3.3.3 توطين الصناعات الواعدة. كيف يرتبط ذلك بالبلاستيك؟',
            question_en: 'Connecting with Vision 2030 (p.67): Goal 3.3.3 localizes promising industries. How does this relate to plastic?',
            options_ar: [
              'البلاستيك من الصناعات الواعدة التي يمكن توطينها وصناعتها محلياً بدلاً من استيرادها',
              'البلاستيك لا يُصنع محلياً أبداً',
              'البلاستيك منتج طبيعي لا علاقة له بالصناعة',
              'البلاستيك يُستورد فقط',
            ],
            options_en: [
              'Plastic is a promising industry that can be localized and manufactured locally instead of imported',
              'Plastic is never manufactured locally',
              'Plastic is a natural product unrelated to industry',
              'Plastic is only imported',
            ],
            correct: 0,
            explanation_ar: 'البلاستيك من الصناعات الواعدة — توطينها (هدف رؤية 2030 رقم 3.3.3) يعني صناعتها محلياً في المملكة بدلاً من استيرادها، مما يقوّي الاقتصاد الوطني.',
          },
          // اختيار من متعدد — أيُّ المواد في غرفة الصف (ص 67)
          {
            type: 'multiple_choice',
            question_ar: 'أيُّ المواد الصلبة في غرفة صفّي طبيعي، وأيُّها من صنع الإنسان؟ (ص 67)',
            question_en: 'Which solid materials in my classroom are natural, and which are man-made? (p.67)',
            options_ar: [
              'الخشب (الطاولة) طبيعي، والبلاستيك (اللعبة) من صنع الإنسان، والزجاج من صنع الإنسان',
              'كلها طبيعية',
              'كلها من صنع الإنسان',
              'لا يوجد مواد صلبة في الصف',
            ],
            options_en: [
              'Wood (the table) is natural, plastic (the toy) is man-made, and glass is man-made',
              'All are natural',
              'All are man-made',
              'There are no solid materials in the classroom',
            ],
            correct: 0,
            explanation_ar: 'في غرفة الصف: الخشب (الطاولة) طبيعي من الأشجار، والبلاستيك (اللعبة) والزجاج من صنع الإنسان — نميّز بين الطبيعي والصناعي.',
          },
        ],
      },

      /* ─── الدرس الثاني: السوائل والغازات (ص 68-72) — من ملف منفصل ─── */
      LIQUIDS_GASES_LESSON,

      /* ─── الفصل العاشر: تغيرات المادة (ص 80-98) — من ملف منفصل ─── */
      ...MATTER_CHANGES_UNIT.lessons,
    ],
  },

  /* ═══════════════════════════════════════════════════
   *  الوحدة السادسة: القوى والطاقة
   * ═══════════════════════════════════════════════════ */
  {
    id: 'forces_energy',
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/fe81cfa73_generated_image.png',
    title_ar: 'الوحدة السادسة: القوى والطاقة',
    title_en: 'Unit 6: Forces and Energy',
    color: '#7c2d12',
    emoji: '⚡',
    lessons: [

      /* ─── الفصل الحادي عشر: القوى (ص 104-126) — من ملف منفصل ─── */
      FORCES_VOCAB_LESSON,
      FORCES_LESSON_1,
      FORCES_LESSON_2,

      /* ─── الفصل الثاني عشر: استعمال الطاقة (ص 121-150) — من ملف منفصل ─── */
      ENERGY_VOCAB_LESSON,
      HEAT_LESSON,
      ELECTRICITY_LESSON,
      ENERGY_REVIEW_LESSON,
    ],
  },
];