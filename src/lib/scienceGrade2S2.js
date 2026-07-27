/**
 * العلوم — الصف الثاني الابتدائي · الفصل الثاني
 * وزارة التعليم 1447هـ — المركز الوطني للمناهج
 * الوحدة الرابعة: الفضاء (ف٧ الأرض والسماء / ف٨ السماء)
 * الوحدات 5 و6: انظر scienceGrade2S2_Units5to6.js
 * أنواع الأسئلة: multiple_choice · true_false · ordering · matching · classify
 */

import { SCIENCE_G2_S2_UNITS_5_6 } from '@/lib/scienceGrade2S2_Units5to6';

export const SCIENCE_G2_S2_UNITS_SPACE = [

  /* ═══════════════════════════════════════════════════
   *  الوحدة الرابعة: الفضاء
   * ═══════════════════════════════════════════════════ */
  {
    id: 'space',
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/d93899170_generated_image.png',
    title_ar: 'الوحدة الرابعة: الفضاء',
    title_en: 'Unit 4: Space',
    color: '#1e3a5f',
    emoji: '🌌',
    lessons: [

      /* ─── الفصل السابع: الأرض والسماء — الدرس الأول: الليل والنهار (ص 12-20) ─── */
      {
        id: 'earth_sky',
        title_ar: 'الفصل السابع: الأرض والسماء',
        title_en: 'Lesson 7: Earth and Sky',
        questions: [
          // مفردات — مطابقة (ص 11)
          {
            type: 'matching',
            question_ar: 'صِل كل مصطلح بتعريفه كما في الكتاب (ص 11):',
            question_en: 'Match each term to its definition (p.11):',
            pairs_ar: [
              { left: 'الحركة الدورانية للأرض', right: 'حركة الأرض حول محورها' },
              { left: 'محور الأرض', right: 'خط مركزي تدور حوله الأرض' },
              { left: 'مدار الأرض', right: 'مسار تتبعه الأرض أثناء دورانها حول الشمس' },
            ],
            pairs_en: [
              { left: 'Earth\'s rotation', right: 'Earth\'s movement around its axis' },
              { left: 'Earth\'s axis', right: 'A central line the Earth rotates around' },
              { left: 'Earth\'s orbit', right: 'The path Earth follows as it revolves around the Sun' },
            ],
            explanation_ar: 'مصطلحات الفصل السابع: الحركة الدورانية = حركة الأرض حول محورها. المحور = خط مركزي. المدار = مسار الأرض حول الشمس.',
          },
          // اختيار من متعدد — سبب الليل والنهار (ص 14)
          {
            type: 'multiple_choice',
            image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80',
            question_ar: 'كيف يسبب دوران الأرض تعاقب الليل والنهار؟',
            question_en: 'How does Earth\'s rotation cause day and night?',
            options_ar: [
              'الجانب المواجه للشمس يكون نهاراً والجانب الآخر يكون ليلاً',
              'الشمس تدور حول الأرض فيتعاقب الليل والنهار',
              'القمر يحجب الشمس ليلاً',
              'الأرض تبتعد عن الشمس في الليل',
            ],
            options_en: [
              'The side facing the Sun is day and the other side is night',
              'The Sun revolves around Earth causing day and night',
              'The Moon blocks the Sun at night',
              'Earth moves away from the Sun at night',
            ],
            correct: 0,
            explanation_ar: 'تدور الأرض حول محورها باستمرار. الجانب المواجه للشمس العربية السعودية تكون فيه نهاراً، وفي الوقت نفسه يكون الليل في الجانب الآخر من الأرض.',
          },
          // صح أم خطأ — المحور (ص 14-15)
          {
            type: 'true_false',
            question_ar: 'تدور الأرض حول محورها من الشمال إلى الجنوب.',
            question_en: 'Earth rotates on its axis from north to south.',
            correct: 'false',
            explanation_ar: 'تدور الأرض حول المحور من الجنوب إلى الشمال (من الغرب إلى الشرق). المحور هو خط مركزي وهمي تدور حوله الأرض.',
          },
          // اختيار من متعدد — المملكة العربية السعودية (ص 15)
          {
            type: 'multiple_choice',
            image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80',
            question_ar: 'في الصورة (ص 15): المملكة العربية السعودية تواجه الشمس — إذن الوقت فيها:',
            question_en: 'In the diagram (p.15): Saudi Arabia faces the Sun — so the time there is:',
            options_ar: ['نهار', 'ليل', 'غروب', 'شروق'],
            options_en: ['Day', 'Night', 'Sunset', 'Sunrise'],
            correct: 0,
            explanation_ar: 'حين تكون المملكة العربية السعودية في الجانب المواجه للشمس يكون الوقت نهاراً — لأن الشمس تضيء هذا الجانب.',
          },
          // ترتيب — دوران الأرض (ص 14-15 نشاط)
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات نشاط "لماذا لا نرى الشمس في الليل؟" (ص 13):',
            question_en: 'Order the steps of the "Why can\'t we see the Sun at night?" activity (p.13):',
            items_ar: [
              'قف على بُعد عشر خطوات مواجهاً زميلك',
              'وجّه ضوء المصباح نحو زميلك (المصباح = الشمس)',
              'أتوقع: هل سيظل يرى الضوء أو المصباح دائماً؟',
              'أطلب إلى زميلي أن يدور حول نفسه ببطء',
              'أستنتج: كيف يبيّن هذا النموذج عدم رؤيتنا للشمس في الليل؟',
            ],
            items_en: [
              'Stand 10 steps away facing your partner',
              'Shine the flashlight toward your partner (flashlight = Sun)',
              'Predict: will they always see the light?',
              'Ask partner to slowly rotate in place',
              'Conclude: how does this model explain not seeing the Sun at night?',
            ],
            explanation_ar: 'النشاط يُجسّد دوران الأرض: الزميل = الأرض، المصباح = الشمس. عند الدوران يغيب الضوء أحياناً — مثلما يكون الليل.',
          },
          // مطابقة — الظل خلال النهار (ص 16)
          {
            type: 'matching',
            question_ar: 'صِل كل وقت من اليوم بحالة الظل (ص 16):',
            question_en: 'Match each time of day to the shadow condition (p.16):',
            pairs_ar: [
              { left: '٨:٠٠ صباحاً', right: 'الشمس ترتفع — الظل طويل' },
              { left: '١٢:٠٠ ظهراً', right: 'الشمس عالية — الظل قصير' },
              { left: '٥:٣٠ عصراً', right: 'الشمس تغرب — الظل طويل' },
            ],
            pairs_en: [
              { left: '8:00 AM', right: 'Sun rising — shadow long' },
              { left: '12:00 PM', right: 'Sun high — shadow short' },
              { left: '5:30 PM', right: 'Sun setting — shadow long' },
            ],
            explanation_ar: 'يتغير طول الظل خلال النهار اعتماداً على موقع الشمس في السماء: صباحاً وعصراً الظل طويل، وعند الظهر قصير.',
          },
          // اختيار من متعدد — لماذا تبدو الشمس متحركة (ص 20 تقويم)
          {
            type: 'multiple_choice',
            image_url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=700&q=80',
            question_ar: 'لماذا تبدو الشمس وكأنها تتحرك في السماء؟',
            question_en: 'Why does the Sun seem to move across the sky?',
            options_ar: [
              'لأن الأرض تدور حول محورها',
              'لأن الشمس تدور حول الأرض',
              'لأن القمر يحجب الشمس',
              'لأن السماء تتحرك',
            ],
            options_en: [
              'Because Earth rotates on its axis',
              'Because the Sun revolves around Earth',
              'Because the Moon blocks the Sun',
              'Because the sky moves',
            ],
            correct: 0,
            explanation_ar: 'تبدو الشمس وكأنها تتحرك في السماء بسبب دوران الأرض حول محورها — في الحقيقة الشمس ثابتة والأرض هي التي تتحرك.',
          },
          // اختيار من متعدد — معرفة الوقت بلا ساعة (ص 20)
          {
            type: 'multiple_choice',
            question_ar: 'كيف يمكن أن أعرف الوقت إذا لم يكن لديّ ساعة؟ (مشكلة وحل)',
            question_en: 'How can I tell the time if I don\'t have a watch? (Problem and solution)',
            options_ar: [
              'بموقع الشمس في السماء وطول الظل',
              'بالنظر إلى القمر فقط',
              'بعدّ النجوم',
              'بسؤال الحيوانات'],
            options_en: [
              'By the Sun\'s position in the sky and shadow length',
              'By looking only at the Moon',
              'By counting the stars',
              'By asking animals',
            ],
            correct: 0,
            explanation_ar: 'قبل اختراع الساعات كان الناس يعرفون الوقت من موقع الشمس في السماء وطول الظل — صباحاً ظل طويل، ظهراً ظل قصير.',
          },
          // مطابقة — الفرق بين الليل والنهار (ص 20)
          {
            type: 'matching',
            question_ar: 'صِل كل وصف بالوقت المناسب (ص 20):',
            question_en: 'Match each description to the correct time (p.20):',
            pairs_ar: [
              { left: 'الجانب المواجه للشمس', right: 'النهار' },
              { left: 'الجانب البعيد عن الشمس', right: 'الليل' },
              { left: 'تبدو الشمس مرتفعة في السماء', right: 'النهار' },
              { left: 'تظهر النجوم', right: 'الليل' },
            ],
            pairs_en: [
              { left: 'Side facing the Sun', right: 'Day' },
              { left: 'Side away from the Sun', right: 'Night' },
              { left: 'Sun appears high in the sky', right: 'Day' },
              { left: 'Stars appear', right: 'Night' },
            ],
            explanation_ar: 'النهار: الجانب المواجه للشمس، تظهر الشمس مرتفعة. الليل: الجانب البعيد، تظهر النجوم.',
          },
          // صح أم خطأ — السؤال الأساسي (ص 20)
          {
            type: 'true_false',
            question_ar: 'دوران الأرض حول محورها يسبب تعاقب الليل والنهار.',
            question_en: 'Earth\'s rotation on its axis causes the succession of night and day.',
            correct: 'true',
            explanation_ar: 'السؤال الأساسي للدرس: كيف يسبب دوران الأرض تعاقب الليل والنهار؟ الإجابة: الأرض تدور حول محورها، فالجانب المواجه للشمس نهار والآخر ليل.',
          },
          // ترتيب — نشاط أجرّب: ملاحظة الظلال (ص 18)
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات نشاط "أُجرّب" لملاحظة أطوال الظلال (ص 18):',
            question_en: 'Order the steps of the "I Experiment" shadow activity (p.18):',
            items_ar: [
              'أضع عوداً في وعاء من التراب',
              'أضع الوعاء في مكان مشمس',
              'أنظر إلى العود في أوقات مختلفة من النهار',
              'أرسم الشمس والعود والظل في كل مرة',
              'أكتب وقت النهار على كل رسمة',
              'أستخلص النتائج عن الوقت في النهار',
            ],
            items_en: [
              'Place a stick in a soil container',
              'Put the container in a sunny spot',
              'Observe the stick at different times of day',
              'Draw the Sun, stick, and shadow each time',
              'Write the time of day on each drawing',
              'Draw conclusions about time during the day',
            ],
            explanation_ar: 'نشاط أجرّب: نضع عوداً في تراب ومكان مشمس، نراقب الظل في أوقات مختلفة، نرسم ونسجّل، ثم نستنتج أن طول الظل يدل على وقت النهار.',
          },
          // اختيار من متعدد — مهارة الاستقصاء: استخلاص النتائج (ص 18)
          {
            type: 'multiple_choice',
            question_ar: 'رأت فاطمة أضواء المنازل والسماء مظلمة، وكانت قد رأت بعض هذه المنازل من قبل. ماذا استنتجت؟ (مهارة استخلاص النتائج)',
            question_en: 'Fatima saw house lights with a dark sky, and had seen some of these houses before. What did she conclude? (Drawing conclusions skill)',
            options_ar: [
              'أن الصورة في الليل في المدينة التي تسكنها',
              'أن الصورة في النهار',
              'أن المنازل فارغة',
              'أن السماء صافية دائماً',
            ],
            options_en: [
              'The picture is at night in her city',
              'The picture is during the day',
              'The houses are empty',
              'The sky is always clear',
            ],
            correct: 0,
            explanation_ar: 'عندما يستخلص العلماء النتائج يستخدمون ملاحظاتهم لتفسير ما يحدث. فاطمة لاحظت السماء المظلمة وأضواء المنازل، وذكّرتها بمنازل رأتها قبل، فاستنتجت أن الصورة ليلاً في مدينتها.',
          },
          // صح أم خطأ — مهارة الاستقصاء
          {
            type: 'true_false',
            question_ar: 'يستخدم العلماء ملاحظاتهم لتفسير ما يحدث عند استخلاص النتائج.',
            question_en: 'Scientists use their observations to explain what happens when drawing conclusions.',
            correct: 'true',
            explanation_ar: 'مهارة استخلاص النتائج تعني استخدام الملاحظات لتفسير ما يحدث — وهذا ما يفعله العلماء.',
          },
          // اختيار من متعدد — الربط بمشروع نيوم (ص 20)
          {
            type: 'multiple_choice',
            question_ar: 'محافظة حقل بمنطقة تبوك تقع ضمن مشروع نيوم NEOM مدينة المستقبل. ما علاقة ذلك بدرس الليل والنهار؟',
            question_en: 'Hajl governorate in Tabuk is part of NEOM, the city of the future. How does this relate to the day and night lesson?',
            options_ar: [
              'في نيوم يتعاقب الليل والنهار مثل بقية الأرض بسبب دورانها حول محورها',
              'نيوم لا يحدث فيها ليل أبداً',
              'نيوم لا تتبع دوران الأرض',
              'لا علاقة لنيوم بالأرض',
            ],
            options_en: [
              'In NEOM day and night alternate like the rest of Earth due to its rotation on its axis',
              'NEOM never has night',
              'NEOM does not follow Earth\'s rotation',
              'NEOM has no relation to Earth',
            ],
            correct: 0,
            explanation_ar: 'محافظة حقل بتبوك ضمن مشروع نيوم — وهي على سطح الأرض، فيعمل فيها تعاقب الليل والنهار بسبب دوران الأرض حول محورها كبقية المناطق.',
          },
        ],
      },

      /* ─── الفصل السابع — الدرس الثاني: الفصول الأربعة (ص 20-27) ─── */
      {
        id: 'seasons',
        title_ar: 'الدرس الثاني: الفصول الأربعة',
        title_en: 'Lesson 2: The Four Seasons',
        questions: [
          // مطابقة — خصائص كل فصل (ص 22-24)
          {
            type: 'matching',
            question_ar: 'صِل كل فصل بوصفه الصحيح من الكتاب (ص 22-24):',
            question_en: 'Match each season to its correct description (p.22-24):',
            pairs_ar: [
              { left: 'الربيع', right: 'تتفتح الأزهار وتخرج الحيوانات من جحورها والطقس أدفأ' },
              { left: 'الصيف', right: 'أكثر الفصول ارتفاعاً في درجة الحرارة والنهار أطول من الليل' },
              { left: 'الخريف', right: 'يتغير لون أوراق الأشجار وتتساقط والهواء يميل إلى البرودة' },
              { left: 'الشتاء', right: 'الهواء بارد وتتساقط الأمطار أو الثلوج والنهار أقصر من الليل' },
            ],
            pairs_en: [
              { left: 'Spring', right: 'Flowers bloom, animals leave hibernation, warmer weather' },
              { left: 'Summer', right: 'Highest temperatures, days longer than nights' },
              { left: 'Autumn', right: 'Leaves change color and fall, air turns cooler' },
              { left: 'Winter', right: 'Cold air, rain or snow, days shorter than nights' },
            ],
            explanation_ar: 'كل فصل له طقس مميز: الربيع (دافئ + أزهار)، الصيف (حار + نهار طويل)، الخريف (أوراق تتساقط)، الشتاء (بارد + مطر/ثلج).',
          },
          // اختيار من متعدد — مدار الأرض (ص 24)
          {
            type: 'multiple_choice',
            question_ar: 'ما اسم المسار الذي تتبعه الأرض أثناء دورانها حول الشمس؟',
            question_en: 'What is the name of the path Earth follows as it revolves around the Sun?',
            options_ar: ['مدار الأرض', 'محور الأرض', 'القمر', 'النجمة'],
            options_en: ['Earth\'s orbit', 'Earth\'s axis', 'The Moon', 'The star'],
            correct: 0,
            explanation_ar: 'المسار الذي تتبعه الأرض أثناء دورانها حول الشمس يسمى "مدار الأرض"، وتحتاج الأرض إلى سنة كاملة (٣٦٥ يوماً تقريباً) لتكمل دورة واحدة.',
          },
          // اختيار من متعدد — مدة دورة الأرض (ص 24)
          {
            type: 'multiple_choice',
            question_ar: 'كم يوماً تحتاج الأرض لتكمل دورة واحدة حول الشمس؟',
            question_en: 'How many days does Earth need to complete one revolution around the Sun?',
            options_ar: ['٣٦٥ يوماً تقريباً', '٣٠ يوماً', '٢٤ يوماً', '١٠٠ يوماً'],
            options_en: ['About 365 days', '30 days', '24 days', '100 days'],
            correct: 0,
            explanation_ar: 'تحتاج الأرض إلى سنة كاملة (٣٦٥ يوماً تقريباً) لتكمل دورة واحدة حول الشمس في مدارها.',
          },
          // صح أم خطأ — ميلان المحور (ص 24)
          {
            type: 'true_false',
            question_ar: 'ميلان الأرض أثناء دورانها حول الشمس يسبب تغير الفصول.',
            question_en: 'Earth\'s tilt during its revolution around the Sun causes the seasons to change.',
            correct: 'true',
            explanation_ar: 'لأن محور الأرض مائل فإنها تدور دائماً مع اتجاه ميلان محورها — وهذا الميلان هو الذي يسبب تغير الفصول الأربعة.',
          },
          // مطابقة — المصطلحات (ص 24)
          {
            type: 'matching',
            question_ar: 'صِل كل مصطلح بتعريفه كما في الكتاب (ص 24):',
            question_en: 'Match each term to its definition (p.24):',
            pairs_ar: [
              { left: 'مدار الأرض', right: 'المسار الذي تتبعه الأرض أثناء دورانها حول الشمس' },
              { left: 'محور الأرض', right: 'خط مركزي مائل تدور حوله الأرض' },
              { left: 'ميلان الأرض', right: 'سبب تغير الفصول الأربعة' },
            ],
            pairs_en: [
              { left: 'Earth\'s orbit', right: 'The path Earth follows around the Sun' },
              { left: 'Earth\'s axis', right: 'A tilted central line Earth rotates around' },
              { left: 'Earth\'s tilt', right: 'The cause of the four seasons' },
            ],
            explanation_ar: 'مدار الأرض = المسار حول الشمس. المحور = خط مركزي مائل. الميلان = سبب الفصول.',
          },
          // صح أم خطأ — حقيقة الكتاب (ص 24)
          {
            type: 'true_false',
            question_ar: 'عندما يكون الفصل شتاءً في المملكة العربية السعودية يكون صيفاً في جنوب إفريقيا.',
            question_en: 'When it is winter in Saudi Arabia, it is summer in South Africa.',
            correct: 'true',
            explanation_ar: 'حقيقة من الكتاب (ص 24): عندما يكون الفصل شتاءً في المملكة العربية السعودية يكون صيفاً في جنوب إفريقيا — بسبب ميلان محور الأرض.',
          },
          // ترتيب — الفصول الأربعة بالترتيب (ص 24)
          {
            type: 'ordering',
            question_ar: 'رتّب الفصول الأربعة كما تتعاقب خلال السنة (ابدأ بالربيع):',
            question_en: 'Order the four seasons as they follow each other (start with Spring):',
            items_ar: ['الربيع', 'الصيف', 'الخريف', 'الشتاء'],
            items_en: ['Spring', 'Summer', 'Autumn', 'Winter'],
            explanation_ar: 'تتعاقب الفصول: الربيع ← الصيف ← الخريف ← الشتاء، ثم يبدأ الدورة من جديد.',
          },
          // تصنيف — صفات الفصول (ص 22-24)
          {
            type: 'classify',
            question_ar: 'صنّف كل وصف تحت الفصل المناسب:',
            question_en: 'Classify each description under the correct season:',
            categories_ar: ['الصيف', 'الشتاء'],
            categories_en: ['Summer', 'Winter'],
            items_ar: [
              'النهار أطول من الليل',
              'الهواء بارد',
              'أكثر الفصول حرارة',
              'تتساقط الأمطار أو الثلوج',
              'النهار أقصر من الليل',
              'يلبس الناس الملابس الثقيلة',
            ],
            items_en: [
              'Day is longer than night',
              'Air is cold',
              'Hottest season',
              'Rain or snow falls',
              'Day is shorter than night',
              'People wear heavy clothing',
            ],
            correct_categories: [0, 1, 0, 1, 1, 1],
            explanation_ar: 'الصيف: نهار طويل + أعلى حرارة. الشتاء: هواء بارد + مطر/ثلج + نهار قصير + ملابس ثقيلة.',
          },
          // تصنيف — نشاط ماذا يلبس الناس (ص 26)
          {
            type: 'classify',
            question_ar: 'صنّف كل نوع من الملابس تحت الفصل المناسب (نشاط ص 26):',
            question_en: 'Classify each clothing type under the correct season (activity p.26):',
            categories_ar: ['الشتاء', 'الصيف'],
            categories_en: ['Winter', 'Summer'],
            items_ar: [
              'معطف صوف ثقيل',
              'قميص قطني قصير الأكمام',
              'بنطال ثقيل',
              'شورت قصير',
              'قبعة صوف',
              'صندل خفيف',
            ],
            items_en: [
              'Heavy wool coat',
              'Short-sleeve cotton shirt',
              'Heavy pants',
              'Short shorts',
              'Wool hat',
              'Light sandals',
            ],
            correct_categories: [0, 1, 0, 1, 0, 1],
            explanation_ar: 'نشاط "ماذا يلبس الناس في كل فصل": الملابس الثقيلة (معطف، بنطال، قبعة صوف) للشتاء، والخفيفة (قميص قصير، شورت، صندل) للصيف.',
          },
          // ترتيب — خطوات نشاط الملابس (ص 26)
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات نشاط "ماذا يلبس الناس في كل فصل" (ص 26):',
            question_en: 'Order the steps of the "What do people wear" activity (p.26):',
            items_ar: [
              'أحضر ورقة وأكتب في كل زاوية اسم أحد الفصول',
              'أقصّ من المجلات صوراً لملابس مختلفة',
              'أصنّف: ألصق كل مجموعة بجانب الفصل المناسب',
              'أستخلص النتائج: ماذا يلبس الناس في كل فصل؟',
            ],
            items_en: [
              'Get a paper and write a season name in each corner',
              'Cut pictures of different clothes from magazines',
              'Classify: paste each group next to the matching season',
              'Draw conclusions: what do people wear in each season?',
            ],
            explanation_ar: 'خطوات النشاط: ورقة بأسماء الفصول ← قص صور الملابس ← تصنيف ولصق ← استخلاص النتائج.',
          },
          // اختيار من متعدد — التفكير الناقد (ص 25)
          {
            type: 'multiple_choice',
            question_ar: 'فيمَ يختلف فصل الصيف عن فصل الشتاء؟ (تفكير ناقد)',
            question_en: 'How does summer differ from winter? (Critical thinking)',
            options_ar: [
              'الصيف حار ونهاره أطول، والشتاء بارد ونهاره أقصر',
              'الصيف بارد والشتاء حار',
              'الصيف تتساقط فيه الثلوج والشتاء تتفتح فيه الأزهار',
              'لا فرق بينهما',
            ],
            options_en: [
              'Summer is hot with longer days, winter is cold with shorter days',
              'Summer is cold and winter is hot',
              'Snow falls in summer and flowers bloom in winter',
              'No difference between them',
            ],
            correct: 0,
            explanation_ar: 'الصيف: أعلى حرارة ونهار أطول من الليل. الشتاء: هواء بارد وتتساقط الأمطار أو الثلوج ونهار أقصر من الليل.',
          },
          // ترتيب — نشاط الطبق الورقي (ص 25)
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات نشاط الطبق الورقي لأبيّن كل فصل (ص 25):',
            question_en: 'Order the steps of the paper plate activity (p.25):',
            items_ar: [
              'أقسم طبقاً ورقياً إلى أربعة أقسام متساوية',
              'أبيّن كل فصل في قسم من الطبق',
              'أرسم ما أفعله في كل فصل',
              'أتحدث عن ذلك أمام زملائي',
            ],
            items_en: [
              'Divide a paper plate into four equal sections',
              'Show each season in a section',
              'Draw what I do in each season',
              'Talk about it with my classmates',
            ],
            explanation_ar: 'نشاط الطبق: أقسمه لأربعة أقسام، أبيّن كل فصل، أرسم ما أفعله، ثم أتحدث — مهارة "أتواصل".',
          },
          // اختيار من متعدد — ما الفصل الذي يلي الصيف (ص 25)
          {
            type: 'multiple_choice',
            question_ar: 'ما الفصل الذي يلي الصيف؟ (تتعاقب الفصول من جديد، الواحد تلو الآخر)',
            question_en: 'Which season follows summer? (Seasons follow each other in order)',
            options_ar: ['الخريف', 'الربيع', 'الشتاء', 'الصيف'],
            options_en: ['Autumn', 'Spring', 'Winter', 'Summer'],
            correct: 0,
            explanation_ar: 'تتعاقب الفصول: الربيع ← الصيف ← الخريف ← الشتاء. فالفصل الذي يلي الصيف هو الخريف.',
          },
          // تصنيف — سلوك الحيوانات في الشتاء (ص 24)
          {
            type: 'classify',
            question_ar: 'صنّف سلوك كل حيوان في الشتاء للحفاظ على دفء جسمه (ص 24):',
            question_en: 'Classify each animal\'s winter behavior to keep warm (p.24):',
            categories_ar: ['يدخل جحوره', 'يهاجر إلى مناطق أكثر دفئاً'],
            categories_en: ['Enters its burrow', 'Migrates to warmer areas'],
            items_ar: ['الضبع', 'الطيور المهاجرة', 'السحلية', 'السنونو'],
            items_en: ['Hyena', 'Migratory birds', 'Lizard', 'Swallow'],
            correct_categories: [0, 1, 0, 1],
            explanation_ar: 'لتحافظ الحيوانات على دفء أجسامها في الشتاء: بعضها يدخل جحوره (مثل الزواحف والضباع)، وبعضها يهاجر إلى مناطق أكثر دفئاً (مثل الطيور المهاجرة والسنونو).',
          },
        ],
      },

      /* ─── الفصل الثامن: الدرس الثاني — النظام الشمسي (ص 44-48) ─── */
      {
        id: 'solar_system',
        title_ar: 'الدرس الثاني: النظام الشمسي',
        title_en: 'Lesson 2: The Solar System',
        questions: [
          // اختيار من متعدد — تعريف الكوكب (ص 46)
          {
            type: 'multiple_choice',
            question_ar: 'ما الكوكب؟ (ص 46)',
            question_en: 'What is a planet? (p.46)',
            options_ar: [
              'جسم كروي ضخم يتحرك حول نجم الشمس',
              'جسم في الفضاء يتكون من غازات ساخنة متوهجة',
              'جسم سماوي يعكس ضوء الشمس كالقمر',
              'أي جسم يطير في الفضاء',
            ],
            options_en: [
              'A massive spherical body that moves around the Sun (a star)',
              'A body in space made of hot glowing gases',
              'A celestial body that reflects sunlight like the Moon',
              'Any body that flies in space',
            ],
            correct: 0,
            explanation_ar: 'الكوكب جسم كروي ضخم يتحرك حول نجم الشمس. نعيش نحن على كوكب الأرض.',
          },
          // اختيار من متعدد — موقع الشمس في النظام الشمسي (ص 46)
          {
            type: 'multiple_choice',
            question_ar: 'أين تقع الشمس في النظام الشمسي؟ (ص 46)',
            question_en: 'Where is the Sun located in the solar system? (p.46)',
            options_ar: [
              'في مركز النظام الشمسي — وهي أكبر وألمع جزء فيه',
              'على حافة النظام الشمسي',
              'تدور حول الأرض كبقية الكواكب',
              'في منتصف المسافة بين الكواكب',
            ],
            options_en: [
              'At the center of the solar system — it is the largest and brightest part',
              'At the edge of the solar system',
              'It orbits Earth like other planets',
              'Midway between the planets',
            ],
            correct: 0,
            explanation_ar: 'تقع الشمس في مركز النظام الشمسي، وهي أكبر وألمع جزء فيه. تدور جميع الكواكب حول الشمس، ومنها الأرض.',
          },
          // صح أم خطأ — الكوكب الأقرب للشمس (ص 47)
          {
            type: 'true_false',
            question_ar: 'كوكب عطارد هو أقرب الكواكب إلى الشمس ويستغرق دورانه حولها 88 يوماً فقط.',
            question_en: 'Mercury is the closest planet to the Sun and takes only 88 days to orbit it.',
            correct: 'true',
            explanation_ar: 'عطارد أقرب الكواكب إلى الشمس، ويستغرق 88 يوماً لإتمام دورة كاملة حولها — وهو أقل وقت بين جميع الكواكب.',
          },
          // مطابقة — الكواكب وأوقات دورانها (ص 47)
          {
            type: 'matching',
            question_ar: 'صِل كل كوكب بزمن دورانه الكامل حول الشمس (ص 47):',
            question_en: 'Match each planet to its orbital period around the Sun (p.47):',
            pairs_ar: [
              { left: 'عطارد', right: '88 يوماً' },
              { left: 'الزهرة', right: '225 يوماً' },
              { left: 'الأرض', right: '365 يوماً' },
              { left: 'المريخ', right: '687 يوماً' },
              { left: 'المشتري', right: '12 سنة' },
            ],
            pairs_en: [
              { left: 'Mercury', right: '88 days' },
              { left: 'Venus', right: '225 days' },
              { left: 'Earth', right: '365 days' },
              { left: 'Mars', right: '687 days' },
              { left: 'Jupiter', right: '12 years' },
            ],
            explanation_ar: 'زمن الدوران: عطارد (88 يوم) ← الزهرة (225 يوم) ← الأرض (365 يوم) ← المريخ (687 يوم) ← المشتري (12 سنة).',
          },
          // ترتيب — الكواكب الثمانية من الأقرب للأبعد عن الشمس (ص 46-47)
          {
            type: 'ordering',
            question_ar: 'رتّب الكواكب الثمانية من الأقرب إلى الأبعد عن الشمس (ص 46-47):',
            question_en: 'Order the eight planets from closest to farthest from the Sun (p.46-47):',
            items_ar: ['عطارد', 'الزهرة', 'الأرض', 'المريخ', 'المشتري', 'زُحَل', 'أورانوس', 'نبتون'],
            items_en: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
            explanation_ar: 'الكواكب من الأقرب للأبعد: عطارد ← الزهرة ← الأرض ← المريخ ← المشتري ← زُحَل ← أورانوس ← نبتون.',
          },
          // اختيار من متعدد — الكوكب الأكبر (ص 48)
          {
            type: 'multiple_choice',
            question_ar: 'ما أكبر الكواكب في النظام الشمسي؟ (ص 48)',
            question_en: 'What is the largest planet in the solar system? (p.48)',
            options_ar: ['المشتري — وله 63 قمراً على الأقل', 'زُحَل — وله حلقات مميزة', 'الأرض', 'نبتون'],
            options_en: ['Jupiter — with at least 63 moons', 'Saturn — with distinctive rings', 'Earth', 'Neptune'],
            correct: 0,
            explanation_ar: 'المشتري أكبر الكواكب في النظام الشمسي، وله 63 قمراً على الأقل.',
          },
          // تصنيف — صفات الكواكب (ص 48)
          {
            type: 'classify',
            question_ar: 'صنّف كل وصف تحت الكوكب المناسب (ص 48):',
            question_en: 'Classify each description under the correct planet (p.48):',
            categories_ar: ['عطارد', 'الزهرة', 'الأرض', 'المريخ'],
            categories_en: ['Mercury', 'Venus', 'Earth', 'Mars'],
            items_ar: [
              'أقرب كوكب إلى الشمس — صخري مثل قمر الأرض',
              'أسخن الكواكب — سحبه الكثيفة تحجب حرارة الشمس',
              'فيها ماء — ويحيط بها الهواء — ولها قمر واحد',
              'له قمران — وسطحه أحمر اللون',
            ],
            items_en: [
              'Closest to the Sun — rocky like Earth\'s Moon',
              'Hottest planet — thick clouds trap Sun\'s heat',
              'Has water — surrounded by air — has one moon',
              'Has two moons — red surface',
            ],
            correct_categories: [0, 1, 2, 3],
            explanation_ar: 'عطارد: أقرب + صخري. الزهرة: أسخن. الأرض: ماء وهواء وقمر. المريخ: أحمر وله قمران.',
          },
          // مطابقة — صفات الكواكب (ص 48)
          {
            type: 'matching',
            question_ar: 'صِل كل كوكب بصفته المميزة (ص 48):',
            question_en: 'Match each planet to its distinctive feature (p.48):',
            pairs_ar: [
              { left: 'عطارد', right: 'أقرب كوكب إلى الشمس — صخري' },
              { left: 'الزهرة', right: 'أسخن الكواكب — سحبه الكثيفة تحجب الحرارة' },
              { left: 'الأرض', right: 'فيها ماء ويحيط بها الهواء — لها قمر واحد' },
              { left: 'المريخ', right: 'له قمران — وسطحه صخري أحمر اللون' },
              { left: 'المشتري', right: 'أكبر الكواكب — له 63 قمراً على الأقل' },
            ],
            pairs_en: [
              { left: 'Mercury', right: 'Closest to the Sun — rocky' },
              { left: 'Venus', right: 'Hottest planet — thick clouds trap heat' },
              { left: 'Earth', right: 'Has water and air — one moon' },
              { left: 'Mars', right: 'Two moons — red rocky surface' },
              { left: 'Jupiter', right: 'Largest planet — at least 63 moons' },
            ],
            explanation_ar: 'كل كوكب له صفة مميزة: عطارد (أقرب) ← الزهرة (أسخن) ← الأرض (ماء+هواء) ← المريخ (أحمر) ← المشتري (أكبر).',
          },
          // اختيار من متعدد — الكواكب الأقرب للأرض من الشمس (ص 47)
          {
            type: 'multiple_choice',
            question_ar: 'كم كوكباً يقع أقرب إلى الشمس من الأرض؟ (ص 47)',
            question_en: 'How many planets are closer to the Sun than Earth? (p.47)',
            options_ar: ['كوكبان: عطارد والزهرة', 'ثلاثة كواكب', 'أربعة كواكب', 'لا يوجد'],
            options_en: ['Two: Mercury and Venus', 'Three planets', 'Four planets', 'None'],
            correct: 0,
            explanation_ar: 'يقع عطارد والزهرة أقرب إلى الشمس من الأرض — أما المريخ والكواكب الأخرى فأبعد منها.',
          },
          // صح أم خطأ — زمن دوران نبتون (ص 47)
          {
            type: 'true_false',
            question_ar: 'يستغرق كوكب نبتون 165 سنة ليُكمل دورة واحدة حول الشمس.',
            question_en: 'Neptune takes 165 years to complete one orbit around the Sun.',
            correct: 'true',
            explanation_ar: 'نبتون أبعد الكواكب عن الشمس، لذلك يستغرق 165 سنة ليُكمل دورة واحدة — أطول مدة بين الكواكب الثمانية.',
          },
          // اختيار من متعدد — السؤال الأساسي (ص 46)
          {
            type: 'multiple_choice',
            question_ar: 'ما السؤال الأساسي للدرس الثاني: كيف تتشابه الكواكب وكيف تختلف؟',
            question_en: 'What is the essential question: How are planets similar and how do they differ?',
            options_ar: [
              'تتشابه بأنها كلها تدور حول الشمس، وتختلف في الحجم والمسافة وزمن الدوران والصفات',
              'تتشابه في الحجم فقط',
              'تختلف فقط في اللون',
              'كلها صخرية ولا فرق بينها',
            ],
            options_en: [
              'They are similar in orbiting the Sun; they differ in size, distance, orbital period, and features',
              'They are similar only in size',
              'They differ only in color',
              'All are rocky with no difference',
            ],
            correct: 0,
            explanation_ar: 'الكواكب تتشابه: كلها تدور حول الشمس وهي أجرام كروية ضخمة. وتختلف في: الحجم، المسافة عن الشمس، زمن الدوران، وصفاتها (صخرية/غازية، وجود ماء، عدد الأقمار).',
          },
          // ترتيب — نشاط "أعمل كالعلماء" (ص 42-43)
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات نشاط ملاحظة أطوار القمر شهرياً (ص 42-43):',
            question_en: 'Order the steps of the monthly Moon phases observation activity (p.42-43):',
            items_ar: [
              'أُلاحظ: أنظر خارج البيت في الليل لأرى القمر في السماء ليلاً',
              'أُسجّل البيانات: أرسم شكل القمر اليوم وأسجّل ذلك على أجندة التقويم',
              'أُعيد الخطوتين 1 و2 كل ليلة مدة شهر',
              'أُستخلص النتائج: ما المعلومات التي تُقدّمها لي رسوماتي حول أطوار القمر؟',
              'أتوقع: كيف سيظهر القمر في السماء خلال الشهر القادم؟',
            ],
            items_en: [
              'Observe: look outside at night to see the Moon',
              'Record data: draw the Moon\'s shape and record on the calendar',
              'Repeat steps 1 and 2 every night for a month',
              'Draw conclusions: what do my drawings tell me about Moon phases?',
              'Predict: how will the Moon appear next month?',
            ],
            explanation_ar: 'نشاط ملاحظة القمر: ملاحظة ليلية ← تسجيل الشكل ← التكرار شهرياً ← استخلاص النتائج ← التوقع للشهر القادم.',
          },
        ],
      },

      /* ─── الفصل الثامن: السماء (ص 32-52) ─── */
      {
        id: 'sky',
        title_ar: 'الفصل الثامن: السماء',
        title_en: 'Lesson 8: The Sky',
        questions: [
          // اختيار من متعدد — لماذا نرى القمر (ص 36)
          {
            type: 'multiple_choice',
            question_ar: 'لماذا نرى القمر من الأرض رغم أنه لا يُصدر ضوءاً خاصاً به؟ (ص 36)',
            question_en: 'Why do we see the Moon from Earth though it emits no light of its own? (p.36)',
            options_ar: [
              'بسبب انعكاس ضوء الشمس الذي يسقط على سطحه وينعكس عنه',
              'لأن القمر يُصدر ضوءه الخاص',
              'لأن الأرض تُضيء القمر',
              'لأن النجوم تُضيء القمر',
            ],
            options_en: [
              'Because sunlight falls on its surface and reflects off it',
              'Because the Moon emits its own light',
              'Because Earth lights up the Moon',
              'Because stars light the Moon',
            ],
            correct: 0,
            explanation_ar: 'القمر جسم سماوي يتكون سطحه من صخور ولا يُصدر ضوءاً خاصاً به، بخلاف الشمس التي هي نجم يُشع ضوءاً. نرى القمر بسبب انعكاس ضوء الشمس الذي يسقط على سطحه وينعكس عنه.',
          },
          // صح أم خطأ — سطح القمر (ص 36)
          {
            type: 'true_false',
            question_ar: 'يتكون سطح القمر من صخور ولا يُصدر ضوءاً خاصاً به.',
            question_en: 'The Moon\'s surface is made of rocks and it emits no light of its own.',
            correct: 'true',
            explanation_ar: 'القمر جسم سماوي يتكون سطحه من صخور، ولا يُصدر ضوءاً خاصاً به، بخلاف الشمس التي هي نجم يُشع ضوءاً.',
          },
          // اختيار من متعدد — مدة دوران القمر (ص 37)
          {
            type: 'multiple_choice',
            question_ar: 'كم يستغرق القمر ليُكمل دورة كاملة حول الأرض؟ (ص 37)',
            question_en: 'How long does the Moon take to complete one revolution around Earth? (p.37)',
            options_ar: ['شهر واحد تقريباً', 'سنة كاملة', 'يوم واحد', 'أسبوع واحد'],
            options_en: ['About one month', 'A full year', 'One day', 'One week'],
            correct: 0,
            explanation_ar: 'لا يبقى القمر ثابتاً في السماء، بل يدور في مداره حول الأرض. يستغرق دوران القمر شهراً واحداً تقريباً ليُكمل دورة كاملة حول الأرض.',
          },
          // اختيار من متعدد — لماذا نستطيع مشاهدة القمر (ص 37)
          {
            type: 'multiple_choice',
            question_ar: 'لماذا نستطيع مشاهدة القمر؟ (ص 37)',
            question_en: 'Why can we see the Moon? (p.37)',
            options_ar: [
              'لأن لون القمر مثل لون ضوء الشمس الذي يعكسه، ويؤكد في قوته أيضاً الغبار الذي يُغطيه',
              'لأن القمر يُشع ضوءه الخاص',
              'لأن الأرض تُضيء القمر مباشرة',
              'لأن السماء صافية دائماً',
            ],
            options_en: [
              'Because the Moon\'s color is like the sunlight it reflects, and the dust covering it confirms its strength',
              'Because the Moon emits its own light',
              'Because Earth directly lights the Moon',
              'Because the sky is always clear',
            ],
            correct: 0,
            explanation_ar: 'لون القمر مثل لون ضوء الشمس الذي يعكسه، ويؤكد في قوته أيضاً الغبار الذي يُغطيه — لذلك نستطيع مشاهدته.',
          },
          // مطابقة — المفردات (ص 36)
          {
            type: 'matching',
            question_ar: 'صِل كل مصطلح بتعريفه (مفردات ص 36):',
            question_en: 'Match each term to its definition (vocabulary p.36):',
            pairs_ar: [
              { left: 'طور القمر', right: 'شكل القمر خلال الشهر الواحد' },
              { left: 'النجم', right: 'جسم في الفضاء يتكون من غازات ساخنة متوهجة تُصدر حرارة وضوءاً' },
              { left: 'مدار القمر', right: 'المسار الذي يتبعه القمر حول الأرض' },
            ],
            pairs_en: [
              { left: 'Moon phase', right: 'The Moon\'s shape during the month' },
              { left: 'Star', right: 'A body in space made of hot glowing gases emitting heat and light' },
              { left: 'Moon\'s orbit', right: 'The path the Moon follows around Earth' },
            ],
            explanation_ar: 'طور القمر = شكله خلال الشهر. النجم = جسم من غازات ساخنة متوهجة. مدار القمر = مساره حول الأرض.',
          },
          // اختيار من متعدد — لماذا يظهر القمر بأشكال مختلفة (ص 38)
          {
            type: 'multiple_choice',
            question_ar: 'لماذا يظهر القمر بأشكال مختلفة عند النظر إليه من الأرض؟ (ص 38)',
            question_en: 'Why does the Moon appear in different shapes when viewed from Earth? (p.38)',
            options_ar: [
              'بسبب حركته حول الأرض خلال الشهر الواحد — شكله لا يتغير في الحقيقة',
              'لأن القمر يتغير شكله فعلاً',
              'لأن السحب تحجب أجزاء منه',
              'لأن الأرض تحجب ضوء الشمس عنه',
            ],
            options_en: [
              'Due to its movement around Earth during the month — its shape does not actually change',
              'Because the Moon actually changes shape',
              'Because clouds hide parts of it',
              'Because Earth blocks sunlight from it',
            ],
            correct: 0,
            explanation_ar: 'يظهر القمر بأشكال مختلفة عند النظر إليه من الأرض؛ لكن شكل القمر لا يتغير في الحقيقة، إلا أن أشكاله المختلفة تظهر لنا بسبب حركته حول الأرض خلال الشهر الواحد.',
          },
          // مطابقة — أطوار القمر وأوصافها (ص 38-39)
          {
            type: 'matching',
            question_ar: 'صِل كل طور من أطوار القمر بوصفه (ص 38-39):',
            question_en: 'Match each Moon phase to its description (p.38-39):',
            pairs_ar: [
              { left: 'المحاق', right: 'القمر بين الأرض والشمس فلا يعكس ضوءها — لا نرى القمر' },
              { left: 'الهلال', right: 'مساحة صغيرة مضاءة من القمر في الأسبوع الأول' },
              { left: 'التربيع الأول', right: 'القمر مضيء من جهة اليمين — أكمل ربع مداره' },
              { left: 'البدر', right: 'نرى كل جوانب القمر مضاءة' },
              { left: 'التربيع الأخير', right: 'القمر مضيء من جهة اليسار — قطع ثلاثة أرباع مداره' },
            ],
            pairs_en: [
              { left: 'New Moon (Mahaq)', right: 'Moon between Earth and Sun, reflects no light — invisible' },
              { left: 'Crescent (Hilal)', right: 'Small lit area in the first week' },
              { left: 'First Quarter', right: 'Moon lit on the right side — completed quarter of orbit' },
              { left: 'Full Moon (Badr)', right: 'We see all sides of the Moon lit' },
              { left: 'Last Quarter', right: 'Moon lit on the left side — completed three quarters of orbit' },
            ],
            explanation_ar: 'أطوار القمر: المحاق (لا يُرى) ← الهلال (مساحة صغيرة) ← التربيع الأول (يمين) ← البدر (كامل) ← التربيع الأخير (يسار).',
          },
          // ترتيب — أطوار القمر خلال الشهر (ص 38-39)
          {
            type: 'ordering',
            question_ar: 'رتّب أطوار القمر خلال الشهر كما تظهر بالترتيب نفسه كل شهر (ص 38-39):',
            question_en: 'Order Moon phases through the month as they appear in the same order every month (p.38-39):',
            items_ar: ['المحاق', 'الهلال', 'التربيع الأول', 'البدر', 'التربيع الأخير'],
            items_en: ['New Moon', 'Crescent', 'First Quarter', 'Full Moon', 'Last Quarter'],
            explanation_ar: 'تظهر الأطوار بالترتيب نفسه كل شهر: المحاق ← الهلال ← التربيع الأول ← البدر ← التربيع الأخير، ثم تعود من جديد.',
          },
          // صح أم خطأ — القمر أقرب الأجرام (ص 39)
          {
            type: 'true_false',
            question_ar: 'القمر أقرب الأجسام السماوية إلى الأرض. (ص 39)',
            question_en: 'The Moon is the closest celestial body to Earth. (p.39)',
            correct: 'true',
            explanation_ar: 'القمر هو أقرب الأجسام السماوية إلى الأرض — لذلك نراه بوضوح في السماء.',
          },
          // صح أم خطأ — القمر في النهار (ص 39 حقيقة)
          {
            type: 'true_false',
            question_ar: 'أحياناً يمكن مشاهدة القمر في أثناء النهار. (حقيقة ص 39)',
            question_en: 'Sometimes the Moon can be seen during the day. (Fact p.39)',
            correct: 'true',
            explanation_ar: 'حقيقة: أحياناً يمكن مشاهدة القمر في أثناء النهار — ليس فقط ليلاً.',
          },
          // اختيار من متعدد — ماذا يحدث للقمر في مداره (ص 39)
          {
            type: 'multiple_choice',
            question_ar: 'ماذا يحدث للقمر في مداره حول الأرض؟ (ص 39)',
            question_en: 'What happens to the Moon in its orbit around Earth? (p.39)',
            options_ar: [
              'ينتقل من مكان إلى مكان جديد، فيتغير الجزء المضيء المرئي منه',
              'يبقى ثابتاً في مكانه',
              'يبتعد عن الأرض دائماً',
              'يتغير شكله فعلاً',
            ],
            options_en: [
              'It moves from one place to a new place, so the visible lit part changes',
              'It stays fixed in its place',
              'It always moves away from Earth',
              'It actually changes shape',
            ],
            correct: 0,
            explanation_ar: 'ينتقل القمر من مكان إلى مكان جديد في مداره، فيتغير الجزء المضيء المرئي منه — ولذلك تظهر أطواره المختلفة.',
          },
          // اختيار من متعدد — ما النجوم (ص 40)
          {
            type: 'multiple_choice',
            image_url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=700&q=80',
            question_ar: 'ما النجوم؟ (ص 40)',
            question_en: 'What are stars? (p.40)',
            options_ar: [
              'أجسام في الفضاء تتكون من غازات ساخنة متوهجة هي مصدر حرارتها وضوئها',
              'كواكب صغيرة تدور حول الأرض',
              'صخور طائرة في الفضاء',
              'أقمار أخرى لكواكب بعيدة',
            ],
            options_en: [
              'Bodies in space made of hot glowing gases that are the source of their heat and light',
              'Small planets orbiting Earth',
              'Flying rocks in space',
              'Moons of distant planets',
            ],
            correct: 0,
            explanation_ar: 'النجم جسم في الفضاء يتكون من غازات ساخنة متوهجة. وهذه الغازات هي مصدر حرارة وضوء النجم. والنجوم كلها مضيئة، وقد يكون بعضها لامعاً. وأحجام النجوم وألوانها مختلفة.',
          },
          // تصنيف — خصائص النجوم (ص 40)
          {
            type: 'classify',
            question_ar: 'صنّف كلاً من التالي إلى: خصائص النجوم أو ليس من خصائص النجوم (ص 40):',
            question_en: 'Classify each as: a property of stars OR not a property of stars (p.40):',
            categories_ar: ['من خصائص النجوم', 'ليس من خصائص النجوم'],
            categories_en: ['Property of stars', 'Not a property of stars'],
            items_ar: ['تتكون من غازات ساخنة متوهجة', 'تُصدر حرارة وضوءاً', 'كلها مضيئة', 'أحجامها وألوانها مختلفة', 'تعكس ضوء الشمس', 'تتكون من صخور'],
            items_en: ['Made of hot glowing gases', 'Emit heat and light', 'All are luminous', 'Different sizes and colors', 'Reflect sunlight', 'Made of rocks'],
            correct_categories: [0, 0, 0, 0, 1, 1],
            explanation_ar: 'النجوم: غازات ساخنة متوهجة، تُصدر حرارة وضوءاً، كلها مضيئة، أحجامها وألوانها مختلفة. أما تعكس الضوء أو تتكون من صخور فمن خصائص القمر لا النجوم.',
          },
          // مطابقة — المجموعات النجمية (ص 40)
          {
            type: 'matching',
            question_ar: 'صِل كل مصطلح بتعريفه (ص 40):',
            question_en: 'Match each term to its definition (p.40):',
            pairs_ar: [
              { left: 'المجموعة النجمية', right: 'أشكال مختلفة تظهر في السماء من نجوم تصنعها معاً' },
              { left: 'الضياء', right: 'تجمع نجومي يُسمى الصياد يمكن مشاهدته في سماء المملكة أحياناً' },
              { left: 'النجم', right: 'جسم في الفضاء من غازات ساخنة متوهجة' },
            ],
            pairs_en: [
              { left: 'Constellation', right: 'Different shapes in the sky made by stars together' },
              { left: 'Al-Dhiyaa (Orion)', right: 'A star cluster called the Hunter, visible in Saudi sky sometimes' },
              { left: 'Star', right: 'A body in space of hot glowing gases' },
            ],
            explanation_ar: 'المجموعة النجمية = أشكال من نجوم معاً. الضياء = تجمع الصياد يُرى في سماء المملكة. النجم = جسم من غازات متوهجة.',
          },
          // صح أم خطأ — النجوم متحركة (ص 40)
          {
            type: 'true_false',
            question_ar: 'تبدو النجوم متحركة في السماء خلال الليلة الواحدة. (ص 40)',
            question_en: 'Stars appear to move in the sky during a single night. (p.40)',
            correct: 'true',
            explanation_ar: 'تبدو النجوم متحركة في السماء خلال الليلة الواحدة — بسبب دوران الأرض حول محورها.',
          },
          // اختيار من متعدد — تجمع الضياء (ص 40)
          {
            type: 'multiple_choice',
            question_ar: 'ما التجمع النجمي الذي يمكن مشاهدته في سماء المملكة العربية السعودية في بعض الأحيان؟ (ص 40)',
            question_en: 'Which star cluster can be seen in the sky of Saudi Arabia sometimes? (p.40)',
            options_ar: ['الضياء (الصياد)', 'الدب الأكبر', 'الدب الأصغر', 'الجبار'],
            options_en: ['Orion (the Hunter)', 'Ursa Major', 'Ursa Minor', 'Orion Giant'],
            correct: 0,
            explanation_ar: 'عند وصل الخطوط بين النجوم يتكون لنا شكل للتجمع النجمي يُسمى الضياء (الصياد)، ويمكن مشاهدته في سماء المملكة في بعض الأحيان.',
          },
          // ترتيب — نشاط ملاحظة النجوم (ص 40)
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات نشاط ملاحظة النجوم ليلاً (ص 40):',
            question_en: 'Order the steps of the night-sky star observation activity (p.40):',
            items_ar: ['أنظر إلى السماء ليلاً', 'أجمع بيانات حول النجوم التي أراها', 'أتحدث مع زميلي في الصف حول ما شاهدته', 'أحدد التجمعات النجمية التي رأيتها'],
            items_en: ['Look at the night sky', 'Collect data about the stars I see', 'Talk with my classmate about what I observed', 'Identify the constellations I saw'],
            explanation_ar: 'نشاط ملاحظة النجوم: أنظر للسماء ليلاً ← أجمع بيانات ← أتواصل مع زميلي ← أحدد التجمعات النجمية.',
          },
          // تصنيف — أجرام السماء (ص 36-40)
          {
            type: 'classify',
            question_ar: 'صنّف كلاً من التالي إلى: جرم يُضيء بنفسه أو جرم يعكس ضوء الشمس (ص 36-40):',
            question_en: 'Classify each as: emits own light OR reflects sunlight (p.36-40):',
            categories_ar: ['يُضيء بنفسه', 'يعكس ضوء الشمس'],
            categories_en: ['Emits own light', 'Reflects sunlight'],
            items_ar: ['الشمس', 'النجوم', 'القمر', 'الكواكب', 'الأرض'],
            items_en: ['Sun', 'Stars', 'Moon', 'Planets', 'Earth'],
            correct_categories: [0, 0, 1, 1, 1],
            explanation_ar: 'الشمس والنجوم تُضيء بنفسها (مصادر ضوء). أما القمر والكواكب والأرض فتعكس ضوء الشمس ولا تُضيء بذاتها.',
          },
          // مطابقة — خصائص أجرام السماء (ص 36-40)
          {
            type: 'matching',
            question_ar: 'صِل كل جرم سماوي بخاصيته (ص 36-40):',
            question_en: 'Match each celestial body to its property (p.36-40):',
            pairs_ar: [
              { left: 'الشمس', right: 'أقرب نجم إلى الأرض — نجم يُشع ضوءاً' },
              { left: 'القمر', right: 'تابع للأرض يدور حولها — أقرب الأجرام السماوية للأرض' },
              { left: 'النجوم', right: 'أجرام مضيئة بعيدة جداً من غازات ساخنة متوهجة' },
              { left: 'النظام الشمسي', right: 'الشمس وما يدور حولها' },
            ],
            pairs_en: [
              { left: 'Sun', right: 'Nearest star to Earth — a star that radiates light' },
              { left: 'Moon', right: 'Earth\'s satellite that orbits it — closest celestial body' },
              { left: 'Stars', right: 'Very distant luminous bodies of hot glowing gases' },
              { left: 'Solar System', right: 'The Sun and all that orbits it' },
            ],
            explanation_ar: 'الشمس: أقرب نجم للأرض ويُشع ضوءاً. القمر: تابع للأرض وأقرب الأجرام السماوية. النجوم: أجرام مضيئة بعيدة من غازات متوهجة. النظام الشمسي: الشمس وكل ما يدور حولها.',
          },
          // صح أم خطأ — النظام الشمسي
          {
            type: 'true_false',
            question_ar: 'الشمس هي مركز المجموعة الشمسية وتدور حولها الكواكب.',
            question_en: 'The Sun is the center of the solar system and planets orbit around it.',
            correct: 'true',
            explanation_ar: 'الشمس هي مركز المجموعة الشمسية، وتدور حولها ثمانية كواكب منها الأرض.',
          },
          // اختيار من متعدد — الآية القرآنية (ص 33)
          {
            type: 'multiple_choice',
            question_ar: 'قال تعالى في سورة الأعراف: ﴿وَالشَّمْسَ وَالْقَمَرَ وَالنُّجُومَ مُسَخَّرَاتٍ بِأَمْرِهِ﴾. ما معنى "مُسَخَّرَاتٍ بأمره"؟',
            question_en: 'Allah says in Surat Al-A\'raf: "And the sun, the moon, and the stars are subjected by His command." What does "subjected by His command" mean?',
            options_ar: [
              'أن الله سخّرها لتخدم الإنسان وتسير بنظام دقيق أمرها الله به',
              'أنها تتحرك وحدها بلا إرادة',
              'أنها آلهة تُعبد من دون الله',
              'أنها لا علاقة لها بالأرض',
            ],
            options_en: [
              'Allah subjected them to serve humans and run by a precise system He commanded',
              'They move on their own without will',
              'They are gods worshipped besides Allah',
              'They have no relation to Earth',
            ],
            correct: 0,
            explanation_ar: '﴿مُسَخَّرَاتٍ بِأَمْرِهِ﴾ تعني أن الله سخّر الشمس والقمر والنجوم لتعمل بنظام دقيق ومنفعة للبشر بأمره سبحانه — فتُضيء وتدور بانتظام.',
          },
          // ترتيب — نشاط كيف نرى القمر في الليل (ص 34)
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات نشاط "كيف يمكننا رؤية القمر في الليل؟" (ص 34):',
            question_en: 'Order the steps of the "How can we see the Moon at night?" activity (p.34):',
            items_ar: [
              'أستخدم الكرة البيضاء على أنها القمر، وأطفئ الأضواء — هل من السهل رؤية القمر؟',
              'أعمل نموذجاً: أضيء المصباح اليدوي وأوجهه إلى الكرة (المصباح = الشمس) — هل نرى القمر الآن؟',
              'أستخلص النتائج: من أين يأتي ضوء القمر؟',
              'أستكشف أكثر وأستقصي: ماذا لو كان لون الكرة مختلفاً؟',
            ],
            items_en: [
              'Use the white ball as the Moon, turn off lights — is it easy to see the Moon?',
              'Make a model: shine the flashlight on the ball (flashlight = Sun) — can we see the Moon now?',
              'Draw conclusions: where does the Moon\'s light come from?',
              'Explore more: what if the ball\'s color were different?',
            ],
            explanation_ar: 'النشاط يُجسّد كيف نرى القمر: الكرة = القمر، المصباح = الشمس. في الظلام لا نرى الكرة، لكن عند تسليط الضوء عليها تُرى — وهذا يثبت أن ضوء القمر منعكس من الشمس.',
          },
          // اختيار من متعدد — استنتاج نشاط الكرة
          {
            type: 'multiple_choice',
            question_ar: 'في نشاط الكرة البيضاء والمصباح اليدوي: متى أصبح من السهل رؤية "القمر" (الكرة)؟ (ص 34)',
            question_en: 'In the white ball and flashlight activity: when did it become easy to see the "Moon" (ball)? (p.34)',
            options_ar: [
              'عندما وجّهت ضوء المصباح (الشمس) نحو الكرة (القمر) فانعكس عنها',
              'عندما أطفأت المصباح',
              'عندما أبعدت الكرة',
              'عندما أغلقت الستائر',
            ],
            options_en: [
              'When I shined the flashlight (Sun) toward the ball (Moon) and it reflected off it',
              'When I turned off the flashlight',
              'When I moved the ball away',
              'When I closed the curtains',
            ],
            correct: 0,
            explanation_ar: 'عند تسليط ضوء المصباح على الكرة البيضاء في غرفة مظلمة، انعكس الضوء عنها فرأيناها — وهذا يثبت أننا نرى القمر بسبب انعكاس ضوء الشمس عن سطحه.',
          },
          // مطابقة — مفردات الفكرة العامة (ص 41)
          {
            type: 'matching',
            question_ar: 'صِل كل مصطلح بتعريفه (مفردات الفكرة العامة ص 41):',
            question_en: 'Match each term to its definition (general idea vocabulary p.41):',
            pairs_ar: [
              { left: 'القمر', right: 'جسم سماوي يتكون سطحه من صخور يعكس ضوء الشمس' },
              { left: 'النجم', right: 'جسم في الفضاء يتكون من غازات ساخنة متوهجة تُصدر حرارة وضوءاً' },
              { left: 'الكوكب', right: 'جسم كروي ضخم يدور حول الشمس' },
              { left: 'النظام الشمسي', right: 'يتكون من الشمس والكواكب الثمانية التي تدور حولها' },
            ],
            pairs_en: [
              { left: 'Moon', right: 'A celestial body with a rocky surface that reflects sunlight' },
              { left: 'Star', right: 'A body in space made of hot glowing gases emitting heat and light' },
              { left: 'Planet', right: 'A massive spherical body that orbits the Sun' },
              { left: 'Solar System', right: 'Consists of the Sun and the eight planets orbiting it' },
            ],
            explanation_ar: 'القمر: صخور تعكس الضوء. النجم: غازات متوهجة تُضيء. الكوكب: كروي ضخم يدور حول الشمس. النظام الشمسي: الشمس + 8 كواكب.',
          },
          // اختيار من متعدد — عدد الكواكب (ص 41)
          {
            type: 'multiple_choice',
            question_ar: 'كم عدد الكواكب التي تدور حول الشمس في النظام الشمسي؟ (ص 41)',
            question_en: 'How many planets orbit the Sun in the solar system? (p.41)',
            options_ar: ['ثمانية كواكب', 'ستة كواكب', 'تسعة كواكب', 'أربعة كواكب'],
            options_en: ['Eight planets', 'Six planets', 'Nine planets', 'Four planets'],
            correct: 0,
            explanation_ar: 'يتكون النظام الشمسي من الشمس وثمانية كواكب تدور حولها — منها الأرض.',
          },
          // اختيار من متعدد — متى نرى القمر مضيئاً كله (ص 37)
          {
            type: 'multiple_choice',
            question_ar: 'متى يمكن أن أرى القمر وكأنه مضيء كله؟ (أقرأ الشكل ص 37)',
            question_en: 'When can I see the Moon as if it is fully illuminated? (Read the figure p.37)',
            options_ar: [
              'في طور البدر — عندما يكون الجزء المضاء المواجه للأرض كاملاً',
              'في طور المحاق',
              'في طور الهلال',
              'لا يمكن رؤيته مضيئاً كله أبداً',
            ],
            options_en: [
              'At full moon phase — when the lit side facing Earth is complete',
              'At new moon phase',
              'At crescent phase',
              'It can never be seen fully lit',
            ],
            correct: 0,
            explanation_ar: 'نرى القمر مضيئاً كله في طور البدر — حين يكون الجزء المضاء المواجه للأرض كاملاً، فيظهر قرصاً مستديراً مضيئاً.',
          },
          // صح أم خطأ — الكوكب
          {
            type: 'true_false',
            question_ar: 'الكوكب جسم كروي ضخم يدور حول الشمس.',
            question_en: 'A planet is a massive spherical body that orbits the Sun.',
            correct: 'true',
            explanation_ar: 'الكوكب جسم كروي ضخم يدور حول الشمس — والأرض أحد الكواكب الثمانية في النظام الشمسي.',
          },
          // اختيار من متعدد — مقارنة زُحَل وأورانوس (ص 49)
          {
            type: 'multiple_choice',
            question_ar: 'فيمَ يختلف كوكبا زُحَل وأورانوس؟ (ص 49)',
            question_en: 'In what way do Saturn and Uranus differ? (p.49)',
            options_ar: [
              'زُحَل له حلقات وأورانوس له 27 قمراً وهو رقيق مائل أزرق',
              'زُحَل أكبر من أورانوس في الحجم دائماً',
              'أورانوس أقرب إلى الشمس من زُحَل',
              'كلاهما لا يختلفان في أي شيء',
            ],
            options_en: [
              'Saturn has rings; Uranus has 27 moons and is a tilted blue-green planet',
              'Saturn is always larger than Uranus',
              'Uranus is closer to the Sun than Saturn',
              'They do not differ in any way',
            ],
            correct: 0,
            explanation_ar: 'زُحَل: له حلقات مميزة مكوّنة من الجليد والصخور. أورانوس: رقيقة حلقاته، لونه أزرق-أخضر، وله 27 قمراً على الأقل، ومائل على محوره.',
          },
          // مطابقة — صفات الكواكب الأربعة الخارجية (ص 48-49)
          {
            type: 'matching',
            question_ar: 'صِل كل كوكب بصفته المميزة (ص 48-49):',
            question_en: 'Match each outer planet to its distinctive feature (p.48-49):',
            pairs_ar: [
              { left: 'المشتري', right: 'أكبر الكواكب — له 63 قمراً على الأقل' },
              { left: 'زُحَل', right: 'له حلقات — مكوّنة من الجليد والصخور' },
              { left: 'أورانوس', right: 'رقيقة حلقاته وأزرق-أخضر ومائل — له 27 قمراً' },
              { left: 'نبتون', right: 'أبعد الكواكب — له 13 قمراً على الأقل' },
            ],
            pairs_en: [
              { left: 'Jupiter', right: 'Largest planet — at least 63 moons' },
              { left: 'Saturn', right: 'Has rings — made of ice and rocks' },
              { left: 'Uranus', right: 'Thin rings, blue-green, tilted — 27 moons' },
              { left: 'Neptune', right: 'Farthest planet — at least 13 moons' },
            ],
            explanation_ar: 'الكواكب الخارجية الأربعة: المشتري (أكبر) ← زُحَل (حلقات) ← أورانوس (أزرق مائل) ← نبتون (الأبعد).',
          },
          // تصنيف — الكواكب: داخلية أم خارجية (ص 46-49)
          {
            type: 'classify',
            question_ar: 'صنّف كل كوكب إلى: كوكب داخلي (قريب من الشمس) أو كوكب خارجي (بعيد عن الشمس):',
            question_en: 'Classify each planet as: inner planet (close to Sun) OR outer planet (far from Sun):',
            categories_ar: ['كوكب داخلي', 'كوكب خارجي'],
            categories_en: ['Inner planet', 'Outer planet'],
            items_ar: ['عطارد', 'الزهرة', 'الأرض', 'المريخ', 'المشتري', 'زُحَل', 'أورانوس', 'نبتون'],
            items_en: ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune'],
            correct_categories: [0, 0, 0, 0, 1, 1, 1, 1],
            explanation_ar: 'الكواكب الداخلية (الأقرب للشمس): عطارد، الزهرة، الأرض، المريخ. الكواكب الخارجية: المشتري، زُحَل، أورانوس، نبتون.',
          },
          // اختيار من متعدد — نشاط العلوم والرياضيات: أيهما أطول مداراً (ص 49)
          {
            type: 'multiple_choice',
            question_ar: 'أيُّ الكوكبين الآتيين أطولُ مداره حول الشمس: زُحَل أم المشتري؟ (العلوم والرياضيات ص 49)',
            question_en: 'Which of the two planets has a longer orbit around the Sun: Saturn or Jupiter? (Science & Math p.49)',
            options_ar: ['زُحَل — لأنه أبعد عن الشمس من المشتري', 'المشتري — لأنه أكبر', 'كلاهما متساويان', 'نبتون — لا علاقة بالسؤال'],
            options_en: ['Saturn — because it is farther from the Sun than Jupiter', 'Jupiter — because it is larger', 'Both are equal', 'Neptune — unrelated'],
            correct: 0,
            explanation_ar: 'كلما كان الكوكب أبعد عن الشمس، كان مداره أطول. زُحَل أبعد من المشتري، لذلك مداره حول الشمس أطول.',
          },
          // اختيار من متعدد — القراءة العلمية: النجوم في الليل (ص 50-51)
          {
            type: 'multiple_choice',
            question_ar: 'بَرَعَ علماء الفلك المسلمون في دراسة النجوم. ما الاستخدام الحديث للنجوم المذكور في القراءة العلمية؟ (ص 50)',
            question_en: 'Muslim astronomers excelled in studying stars. What is the modern use of stars mentioned in the scientific reading? (p.50)',
            options_ar: [
              'يستدل بها الناس على الاتجاهات، وعلماء الفلك يستخدمون مخططاتها لتوجيه المناظير في الفضاء وعلى الأرض',
              'تُستخدم فقط لتزيين السماء',
              'لا تُستخدم النجوم في الوقت الحاضر',
              'تُستخدم لتوليد الطاقة الشمسية',
            ],
            options_en: [
              'People use them for directions, and astronomers use their charts to guide telescopes in space and on Earth',
              'Used only to decorate the sky',
              'Stars are not used nowadays',
              'Used to generate solar energy',
            ],
            correct: 0,
            explanation_ar: 'من القراءة العلمية: لا يزال الناس يستدلون بالنجوم على الاتجاهات؛ فعلماء الفلك يستخدمون مخططات النجوم لتوجيه المناظير في الفضاء وعلى الأرض.',
          },
          // صح أم خطأ — الآية القرآنية (القراءة العلمية ص 50)
          {
            type: 'true_false',
            question_ar: 'قال الله تعالى في سورة النحل: ﴿وَعَلَامَاتٍ وَبِالنَّجْمِ هُمْ يَهْتَدُونَ﴾.',
            question_en: 'Allah said in Surat An-Nahl: "And landmarks. And by the stars they guide themselves."',
            correct: 'true',
            explanation_ar: 'هذه الآية من سورة النحل (آية 16)، وهي دليل قرآني على أن النجوم تُستخدم للاهتداء — وهو ما برع فيه علماء الفلك المسلمون.',
          },
          // اختيار من متعدد — تاريخ العلم: الدب الأكبر والأصغر (ص 51)
          {
            type: 'multiple_choice',
            question_ar: 'كيف أحدّد النجم الشمالي (القطبي) في السماء؟ (تاريخ العلم ص 51)',
            question_en: 'How do I find the North Star (Polaris) in the sky? (History of Science p.51)',
            options_ar: [
              'أبحث عن الدب الأكبر، ثم الدب الأصغر، أتبع الخط المتجه إلى الدب الأصغر — آخر نجم في يد مغرفة الدب الأصغر هو النجم الشمالي',
              'أبحث عن أسطع نجمة في السماء',
              'أنظر دائماً ناحية الشرق',
              'أستخدم البوصلة فقط',
            ],
            options_en: [
              'Find Ursa Major, then Ursa Minor, follow the line toward Ursa Minor — last star in its handle is Polaris',
              'Look for the brightest star in the sky',
              'Always look east',
              'Use only a compass',
            ],
            correct: 0,
            explanation_ar: 'خطوات إيجاد النجم الشمالي: ابحث عن الدب الأكبر ← ابحث عن نجمين خارج الدب الأكبر ← اتبع الخط المتجه إلى الدب الأصغر ← آخر نجم في يد مغرفة الدب الأصغر هو النجم الشمالي (القطبي).',
          },
          // مطابقة — تاريخ العلم (ص 51)
          {
            type: 'matching',
            question_ar: 'صِل كل مصطلح بتعريفه من تاريخ العلم (ص 51):',
            question_en: 'Match each term to its definition from History of Science (p.51):',
            pairs_ar: [
              { left: 'الدب الأكبر', right: 'مجموعة نجمية شكلها مغرفة كبيرة تُساعد في إيجاد النجم الشمالي' },
              { left: 'الدب الأصغر', right: 'مجموعة نجمية شكلها مغرفة صغيرة — آخر نجم في يدها هو القطبي' },
              { left: 'النجم الشمالي (القطبي)', right: 'نجم يقع بالقرب من القطب الشمالي للأرض — يساعد على تحديد الاتجاه' },
            ],
            pairs_en: [
              { left: 'Ursa Major (Big Dipper)', right: 'Constellation shaped like a big ladle — helps find North Star' },
              { left: 'Ursa Minor (Little Dipper)', right: 'Small ladle-shaped constellation — last star in its handle is Polaris' },
              { left: 'North Star (Polaris)', right: 'Star near Earth\'s North Pole — helps determine direction' },
            ],
            explanation_ar: 'الدب الأكبر: مغرفة كبيرة. الدب الأصغر: مغرفة صغيرة. النجم الشمالي (القطبي): آخر نجم في الدب الأصغر، يقع قرب القطب الشمالي.',
          },
          // صح أم خطأ — تاريخ العلم (ص 51)
          {
            type: 'true_false',
            question_ar: 'قبل مئات السنين اعتمد القدماء على النجم الشمالي (القطبي) للاستدلال على اتجاه الشمال.',
            question_en: 'Centuries ago, ancient people relied on the North Star (Polaris) to determine the north direction.',
            correct: 'true',
            explanation_ar: 'قبل مئات السنين اعتمد القدماء على النجم الشمالي للاستدلال على اتجاه الشمال — يظهر هذا النجم في السماء بالقرب من القطب الشمالي للأرض.',
          },
          // اختيار من متعدد — مراجعة الفصل الثامن: أكمل الجمل (ص 52)
          {
            type: 'multiple_choice',
            question_ar: 'أكمل: الكواكب والأقمار والشمس تُشكّل ............... (مراجعة الفصل الثامن ص 52)',
            question_en: 'Complete: Planets, moons, and the Sun form ............... (Ch.8 Review p.52)',
            options_ar: ['النظام الشمسي', 'المجرة', 'الكون', 'المجموعة النجمية'],
            options_en: ['The solar system', 'The galaxy', 'The universe', 'The constellation'],
            correct: 0,
            explanation_ar: 'الكواكب والأقمار والشمس معاً تُشكّل النظام الشمسي.',
          },
          // اختيار من متعدد — مراجعة: الشمس في النظام الشمسي (ص 52)
          {
            type: 'multiple_choice',
            question_ar: 'أكمل: الشمس هي أكبر وألمع جزء في ............... (مراجعة ص 52)',
            question_en: 'Complete: The Sun is the largest and brightest part of ............... (Review p.52)',
            options_ar: ['النظام الشمسي', 'المجرة درب التبانة', 'مجموعة النجوم', 'الكون اللانهائي'],
            options_en: ['The solar system', 'The Milky Way galaxy', 'The star cluster', 'The infinite universe'],
            correct: 0,
            explanation_ar: 'الشمس هي أكبر وألمع جزء في النظام الشمسي — تقع في مركزه وتدور حولها جميع الكواكب الثمانية.',
          },
          // اختيار من متعدد — مراجعة: عدد الكواكب (ص 52)
          {
            type: 'multiple_choice',
            question_ar: 'أكمل: نظامنا الشمسي فيه ثمانية ............... (مراجعة ص 52)',
            question_en: 'Complete: Our solar system has eight ............... (Review p.52)',
            options_ar: ['كواكب', 'نجوم', 'أقمار', 'مجموعات نجمية'],
            options_en: ['Planets', 'Stars', 'Moons', 'Constellations'],
            correct: 0,
            explanation_ar: 'نظامنا الشمسي فيه ثمانية كواكب تدور حول الشمس.',
          },
          // اختيار من متعدد — مراجعة: أطوار القمر (ص 52)
          {
            type: 'multiple_choice',
            question_ar: 'أكمل: للقمر أشكال مختلفة تُسمى ............... (مراجعة ص 52)',
            question_en: 'Complete: The Moon has different shapes called ............... (Review p.52)',
            options_ar: ['الأطوار', 'المجموعات', 'الحلقات', 'المدارات'],
            options_en: ['Phases', 'Clusters', 'Rings', 'Orbits'],
            correct: 0,
            explanation_ar: 'الأشكال المختلفة التي يظهر بها القمر خلال الشهر تُسمى أطوار القمر.',
          },
          // اختيار من متعدد — مراجعة: أيُّ طور القمر في الصورة (ص 53)
          {
            type: 'multiple_choice',
            question_ar: 'في صورة القمر المضاء نصفه تقريباً من جهة اليسار (ص 53): أيُّ الأطوار هذا؟',
            question_en: 'In the image showing the Moon about half lit on the left side (p.53): which phase is this?',
            options_ar: ['التربيع الأخير', 'البدر', 'الهلال', 'التربيع الأول'],
            options_en: ['Last Quarter', 'Full Moon', 'Crescent', 'First Quarter'],
            correct: 0,
            explanation_ar: 'حين يظهر القمر مضاء من جهة اليسار يكون في طور التربيع الأخير — قطع ثلاثة أرباع مداره حول الأرض.',
          },
          // اختيار من متعدد — المهارات والأفكار العلمية: استخلاص النتائج (ص 53)
          {
            type: 'multiple_choice',
            question_ar: 'استخلاص النتائج: أصف كيف يتغير شكل القمر في أثناء دورانه حول الأرض. ما الأداة التي يستعملها العلماء لوصف هذا؟ (ص 53)',
            question_en: 'Draw conclusions: I describe how the Moon\'s shape changes during its orbit. What tool do scientists use to describe this? (p.53)',
            options_ar: [
              'كرة ومصباح يدوي — نموذج يُجسّد دوران القمر حول الأرض وانعكاس ضوء الشمس',
              'تلسكوب فقط',
              'بوصلة وخريطة',
              'ميزان لقياس الضوء',
            ],
            options_en: [
              'A ball and flashlight — a model representing the Moon orbiting Earth and reflecting sunlight',
              'Telescope only',
              'Compass and map',
              'Scale to measure light',
            ],
            correct: 0,
            explanation_ar: 'يستخدم العلماء نموذجاً (كرة + مصباح يدوي) لوصف كيف يتغير شكل القمر: الكرة = القمر، المصباح = الشمس، الشخص = الأرض.',
          },
          // اختيار من متعدد — تقويم الأداء: تتابع الأطوار (ص 55)
          {
            type: 'multiple_choice',
            question_ar: 'في تقويم الأداء (ص 55): أكتب أسفل الرسم تاريخ حدوث كل طور من أطوار القمر. أبدأ بـ:',
            question_en: 'In the performance assessment (p.55): I write the date of each Moon phase below the drawing. I start with:',
            options_ar: [
              'طور الهلال الذي يحدث في الأول من كل شهر هجري',
              'طور البدر دائماً',
              'طور المحاق',
              'التربيع الأول',
            ],
            options_en: [
              'The crescent phase that occurs at the start of each Hijri month',
              'Always the full moon',
              'New moon',
              'First quarter',
            ],
            correct: 0,
            explanation_ar: 'في تقويم الأداء: أبدأ بطور الهلال الذي يحدث في الأول من كل شهر هجري — ثم أرسم وأكتب تاريخ كل طور تالٍ.',
          },
          // اختيار من متعدد — نموذج اختبار: كيف تتشابه الكواكب الثمانية (ص 56)
          {
            type: 'multiple_choice',
            question_ar: 'كيف تتشابه الكواكب الثمانية في النظام الشمسيّ؟ (نموذج اختبار ص 56)',
            question_en: 'How are the eight planets in the solar system similar? (Test model p.56)',
            options_ar: [
              'جميعها تدور حول الشمس',
              'جميعها متساوية في الحجم',
              'جميعها يدور حولها قمر واحد فقط',
              'جميعها يحيط بها حلقات',
            ],
            options_en: [
              'All orbit the Sun',
              'All are equal in size',
              'All have exactly one moon',
              'All have rings around them',
            ],
            correct: 0,
            explanation_ar: 'الإجابة الصحيحة: جميع الكواكب الثمانية تدور حول الشمس — هذا ما يجمعها. أما الحجم وعدد الأقمار والحلقات فتختلف من كوكب لآخر.',
          },
          // اختيار من متعدد — نموذج اختبار: أيُّ الأطوار يُكمل الشكل (ص 56)
          {
            type: 'multiple_choice',
            question_ar: 'في نموذج الاختبار: صور ثلاثة أطوار للقمر: [فراغ]، تربيع أخير، هلال. أيُّ الأطوار يُكمل الشكل في الفراغ؟ (ص 56)',
            question_en: 'In the test model: Three Moon phases shown: [blank], Last Quarter, Crescent. Which phase completes the blank? (p.56)',
            options_ar: ['مُحَاق', 'تربيع أخير', 'تربيع أول', 'بدر'],
            options_en: ['New Moon', 'Last Quarter', 'First Quarter', 'Full Moon'],
            correct: 0,
            explanation_ar: 'ترتيب الأطوار: المحاق ← الهلال ← التربيع الأول ← البدر ← التربيع الأخير. إذا كانت الصور: [فراغ]، تربيع أخير، هلال — فيكون المحاق هو الطور الأول قبلها.',
          },
          // اختيار من متعدد — كيف يستدل المسلمون على دخول رمضان (ص 54)
          {
            type: 'multiple_choice',
            question_ar: 'كيف يستدل المسلمون على دخول شهر رمضان المبارك؟ (مراجعة ص 54)',
            question_en: 'How do Muslims determine the beginning of the month of Ramadan? (Review p.54)',
            options_ar: [
              'برؤية هلال القمر في السماء في بداية كل شهر هجري',
              'بعد انتهاء شهر شعبان بثلاثين يوماً دائماً',
              'بالاعتماد على التقويم الميلادي فقط',
              'بقياس طول النهار والليل',
            ],
            options_en: [
              'By sighting the crescent Moon at the start of each Hijri month',
              'Always after 30 days of Sha\'ban',
              'Only by the Gregorian calendar',
              'By measuring day and night length',
            ],
            correct: 0,
            explanation_ar: 'يستدل المسلمون على دخول رمضان برؤية هلال القمر في السماء — لأن التقويم الهجري قائم على حركة القمر وأطواره.',
          },
          // صح أم خطأ — الفصول بسبب ميلان الأرض (مراجعة ص 54)
          {
            type: 'true_false',
            question_ar: 'تتكوّن الفصول الأربعة في أثناء دوران الأرض حول الشمس بسبب ميلان محور الأرض.',
            question_en: 'The four seasons form during Earth\'s revolution around the Sun due to the tilt of Earth\'s axis.',
            correct: 'true',
            explanation_ar: 'من مراجعة الفصل الثامن (ص 54): تتكون الفصول الأربعة في أثناء دوران الأرض حول الشمس بسبب ميلان محور الأرض.',
          },
          // اختيار من متعدد — ماذا يمكنني مشاهدته ليلاً (الفكرة العامة ص 54)
          {
            type: 'multiple_choice',
            image_url: 'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=700&q=80',
            question_ar: 'ماذا يمكنني أن أشاهد إذا نظرت إلى السماء ليلاً؟ (الفكرة العامة ص 54)',
            question_en: 'What can I observe when I look at the sky at night? (Main idea p.54)',
            options_ar: [
              'القمر بأطواره المختلفة، والنجوم، والمجموعات النجمية',
              'الشمس والقمر معاً في نفس الوقت دائماً',
              'الكواكب الثمانية كلها بالعين المجردة',
              'لا يمكن رؤية أي شيء بدون تلسكوب',
            ],
            options_en: [
              'The Moon in its different phases, stars, and constellations',
              'Sun and Moon together at the same time always',
              'All eight planets with the naked eye',
              'Nothing can be seen without a telescope',
            ],
            correct: 0,
            explanation_ar: 'عند النظر إلى السماء ليلاً يمكن مشاهدة: القمر بأطواره المختلفة (هلال، تربيع، بدر...)، والنجوم المتوهجة، والمجموعات النجمية كالضياء والدب الأكبر.',
          },
        ],
      },
    ],
  },

];

export const SCIENCE_G2_S2_UNITS = [...SCIENCE_G2_S2_UNITS_SPACE, ...SCIENCE_G2_S2_UNITS_5_6];

export const TOTAL_UNITS_SCI_G2S2 = SCIENCE_G2_S2_UNITS.length;
export const TOTAL_LESSONS_SCI_G2S2 = SCIENCE_G2_S2_UNITS.reduce((s, u) => s + u.lessons.length, 0);
export const TOTAL_QUESTIONS_SCI_G2S2 = SCIENCE_G2_S2_UNITS.reduce(
  (s, u) => s + u.lessons.reduce((ls, l) => ls + l.questions.length, 0), 0
);