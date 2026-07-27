/**
 * العلوم — الصف الثالث الابتدائي · الفصل الثاني
 * وزارة التعليم 1447هـ — المركز الوطني للمناهج
 * الوحدة الرابعة: الطقس والمناخ
 * الوحدة الخامسة: المادة
 * أسئلة تعتمد بشكل أساسي على الصور من الكتاب المدرسي
 */

// ═══════════════════════════════════════════════════
// صور من الكتاب المدرسي (Unsplash + URLs موثوقة)
// ═══════════════════════════════════════════════════
const IMG = {
  // الفصل السابع: الطقس وتقلباته
  thunderstorm:    "https://images.unsplash.com/photo-1504608524841-42584120d693?w=600&q=80",  // عاصفة رعدية
  hurricane_sat:   "https://images.unsplash.com/photo-1559825481-12a05cc00344?w=600&q=80",  // إعصار حلزوني من الفضاء
  sandstorm:       "https://images.unsplash.com/photo-1602810316498-ab67cf68c8e1?w=600&q=80",  // عاصفة رملية
  tornado:         "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?w=600&q=80",  // إعصار قمعي
  snowstorm:       "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600&q=80",  // عاصفة ثلجية
  thermometer:     "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",  // ترمومتر
  barometer:       "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",  // بارومتر
  anemometer:      "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&q=80",  // أنيمومتر / طاقة الرياح
  rain_gauge:      "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&q=80",  // قياس الأمطار
  weather_vane:    "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",  // دوّارة الرياح / منظر جوي
  // الفصل الثامن: دورة الماء والمناخ
  water_cycle:     "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=600&q=80",  // منظر طبيعي بحار وسحاب
  evaporation:     "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80",  // بخار الماء / صحراء
  condensation:    "https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=600&q=80",  // قطرات ماء على زجاج
  clouds:          "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&q=80",  // غيوم
  rain:            "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600&q=80",  // مطر
  fog:             "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80",  // ضباب في الجبال
  river:           "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=600&q=80",  // نهر
  // الفصل التاسع: المادة
  matter_states:   "https://images.unsplash.com/photo-1581093196277-9f608bb3b511?w=600&q=80",  // حالات المادة
  solid:           "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=600&q=80",  // مادة صلبة
  liquid:          "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=600&q=80",  // سائل
  gas:             "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=600&q=80",  // غاز / بخار
  melting:         "https://images.unsplash.com/photo-1548234979-fe3a2c55bcc9?w=600&q=80",  // جليد يذوب
  freezing:        "https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=600&q=80",  // تجمد / ثلج
  measuring:       "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=600&q=80",  // أدوات قياس
};

export const SCIENCE_G3_S2_UNITS = [

  /* ═══════════════════════════════════════════════════
   *  الوحدة الرابعة: الطقس والمناخ
   * ═══════════════════════════════════════════════════ */
  {
    id: 'weather_climate',
    title_ar: 'الوحدة الرابعة: الطقس والمناخ',
    title_en: 'Unit 4: Weather & Climate',
    color: '#1a4e8a',
    emoji: '⛅',
    image: IMG.clouds,
    lessons: [

      /* ─── الفصل السابع: الطقس وتقلباته ─── */
      {
        id: 'weather_changes',
        title_ar: 'الفصل السابع: الطقس وتقلباته',
        title_en: 'Chapter 7: Weather & Its Changes',
        questions: [
          // 1 — صورة ترمومتر
          {
            type: 'multiple_choice',
            image_url: IMG.thermometer,
            question_ar: '🔍 انظر إلى الصورة: هذه الأداة تُستخدم لقياس:',
            question_en: '🔍 Look at the image: this tool is used to measure:',
            options_ar: ['درجة حرارة الهواء', 'سرعة الرياح', 'الضغط الجوي', 'كمية الأمطار'],
            options_en: ['Air temperature', 'Wind speed', 'Atmospheric pressure', 'Rainfall amount'],
            correct: 0,
            explanation_ar: 'الترمومتر (مقياس الحرارة) أداةٌ تقيس درجة حرارة الهواء. يُنظر إلى أعلى السائل الملوّن بالأحمر لتحديد القراءة.',
            golden_rule_ar: '🌡️ الترمومتر = مقياس الحرارة.',
          },
          // 2 — صورة أنيمومتر
          {
            type: 'multiple_choice',
            image_url: IMG.anemometer,
            question_ar: '🔍 انظر إلى الصورة: ما الذي تقيسه هذه الأداة؟',
            question_en: '🔍 Look at the image: what does this tool measure?',
            options_ar: ['سرعة الرياح', 'درجة الحرارة', 'الرطوبة', 'الضغط الجوي'],
            options_en: ['Wind speed', 'Temperature', 'Humidity', 'Atmospheric pressure'],
            correct: 0,
            explanation_ar: 'دوّارة الأنيمومتر تقيس سرعة الرياح — كلما دارت أسرع دلّ ذلك على ريح أقوى.',
            golden_rule_ar: '💨 الأنيمومتر = مقياس سرعة الرياح.',
          },
          // 3 — صورة بارومتر
          {
            type: 'multiple_choice',
            image_url: IMG.barometer,
            question_ar: '🔍 انظر إلى الصورة: هذه الأداة تقيس:',
            question_en: '🔍 Look at the image: this tool measures:',
            options_ar: ['الضغط الجوي', 'درجة الحرارة', 'سرعة الرياح', 'هطول الأمطار'],
            options_en: ['Atmospheric pressure', 'Temperature', 'Wind speed', 'Rainfall'],
            correct: 0,
            explanation_ar: 'البارومتر يقيس الضغط الجوي. يعبّر الضغط الجوي عن حالة الهواء في مكانين محددين وزمانين محددين.',
            golden_rule_ar: '⬆️ البارومتر = مقياس الضغط الجوي.',
          },
          // 4 — صورة عاصفة رعدية
          {
            type: 'multiple_choice',
            image_url: IMG.thunderstorm,
            question_ar: '🔍 انظر إلى الصورة: هذا النوع من العواصف يتميز بوجود:',
            question_en: '🔍 Look at the image: this type of storm is characterized by:',
            options_ar: ['الرعد والبرق والأمطار الغزيرة', 'الثلج والبرد الشديد', 'الرمال والغبار في الهواء', 'رياح دوّارة تتشكل على الأرض'],
            options_en: ['Thunder, lightning, and heavy rain', 'Snow and extreme cold', 'Sand and dust in the air', 'Rotating winds forming on the ground'],
            correct: 0,
            explanation_ar: 'العاصفة الرعدية هي أحد أنماط الطقس القاسية، وتكون مصحوبةً بالرعد والبرق والأمطار الشديدة والرياح القوية.',
            golden_rule_ar: '⛈️ العاصفة الرعدية = رعد + برق + أمطار شديدة.',
          },
          // 5 — صورة إعصار حلزوني
          {
            type: 'multiple_choice',
            image_url: IMG.hurricane_sat,
            question_ar: '🔍 انظر إلى الصورة الفضائية: ما نوع هذه الظاهرة الجوية؟',
            question_en: '🔍 Look at the satellite image: what type of weather phenomenon is this?',
            options_ar: ['الإعصار الحلزوني', 'العاصفة الرعدية', 'الإعصار القمعي', 'العاصفة الثلجية'],
            options_en: ['Hurricane (spiral)', 'Thunderstorm', 'Tornado (funnel)', 'Snowstorm'],
            correct: 0,
            explanation_ar: 'الإعصار الحلزوني عاصفةٌ كبيرةٌ مصحوبةٌ برياح قوية وأمطار غزيرة تتكوّن فوق المحيطات. يتحرك بشكل دائري ويظهر هكذا من الفضاء.',
            golden_rule_ar: '🌀 الإعصار الحلزوني = يتكوّن فوق المحيطات + يتحرك دائرياً.',
          },
          // 6 — صورة عاصفة رملية
          {
            type: 'multiple_choice',
            image_url: IMG.sandstorm,
            question_ar: '🔍 انظر إلى الصورة: ما نوع هذه العاصفة التي تُرى في المنطقة؟',
            question_en: '🔍 Look at the image: what type of storm is seen in this region?',
            options_ar: ['العاصفة الرملية', 'العاصفة الثلجية', 'الإعصار الحلزوني', 'العاصفة الرعدية'],
            options_en: ['Sandstorm', 'Snowstorm', 'Hurricane', 'Thunderstorm'],
            correct: 0,
            explanation_ar: 'العاصفة الرملية عاصفةٌ تحمل فيها الرياحُ كمياتٍ من الرمل والغبار في الهواء. تؤثر على البشر والحيوانات والبنايات.',
            golden_rule_ar: '🌪️ العاصفة الرملية = رياح تحمل الرمل والغبار.',
          },
          // 7 — صورة إعصار قمعي
          {
            type: 'multiple_choice',
            image_url: IMG.tornado,
            question_ar: '🔍 انظر إلى الصورة: ما الذي يميّز الإعصار القمعي عن الإعصار الحلزوني؟',
            question_en: '🔍 Look at the image: what distinguishes a tornado from a hurricane?',
            options_ar: [
              'الإعصار القمعي رياح قوية دوّارة تتشكل على الأرض وتبدو كقمع',
              'الإعصار القمعي يتكوّن فوق البحار فقط',
              'الإعصار القمعي مصحوب بثلوج',
              'الإعصار القمعي أبطأ من الإعصار الحلزوني دائماً',
            ],
            options_en: [
              'A tornado is powerful rotating winds forming on the ground, appearing funnel-shaped',
              'A tornado forms only over seas',
              'A tornado is accompanied by snow',
              'A tornado is always slower than a hurricane',
            ],
            correct: 0,
            explanation_ar: 'الإعصار القمعي عاصفةٌ قويةٌ من الرياح دوّارة تتشكل على الأرض على هيئة قمع. يعمل على تدمير معالم الأرض وأكثر الأشياء التي تواجهه.',
            golden_rule_ar: '🌪️ الإعصار القمعي = دوّارة قمعية على الأرض.',
          },
          // 8 — صورة عاصفة ثلجية
          {
            type: 'multiple_choice',
            image_url: IMG.snowstorm,
            question_ar: '🔍 انظر إلى الصورة: ما نوع هذه العاصفة؟ وفي أي أماكن تحدث؟',
            question_en: '🔍 Look at the image: what type of storm is this? Where does it occur?',
            options_ar: [
              'عاصفة ثلجية — تحدث في المناطق ذات الحرارة المنخفضة والرياح القوية',
              'عاصفة رملية — تحدث في الصحاري',
              'إعصار حلزوني — يتكوّن فوق المحيطات',
              'عاصفة رعدية — مصحوبة برعد وبرق',
            ],
            options_en: [
              'Snowstorm — occurs in areas with low temperatures and strong winds',
              'Sandstorm — occurs in deserts',
              'Hurricane — forms over oceans',
              'Thunderstorm — accompanied by thunder and lightning',
            ],
            correct: 0,
            explanation_ar: 'العاصفة الثلجية تحدث في المناطق ذات درجات الحرارة المنخفضة والرياح القوية، وتُغطّي النباتات والسيارات والبنايات بالثلج.',
            golden_rule_ar: '❄️ العاصفة الثلجية = مناطق باردة + رياح + ثلج.',
          },
          // 9 — صح أم خطأ (بدون صورة)
          {
            type: 'true_false',
            question_ar: 'يستخدم الرصد الجوي تقنيات حديثة لجمع البيانات والمعلومات عن الطقس.',
            question_en: 'Meteorological observation uses modern technology to collect weather data and information.',
            correct: 'true',
            explanation_ar: 'يقوم الراصد الجوي بجمع البيانات والمعلومات عن الطقس باستخدام أجهزة تقنية حديثة في محطة الأرصاد الجوية.',
            golden_rule_ar: '📡 الرصد الجوي = تقنية حديثة لجمع بيانات الطقس.',
          },
          // 10 — تصنيف أنواع العواصف
          {
            type: 'classify',
            question_ar: 'صنّف كل نوع تحت التصنيف الصحيح: عواصف رعدية أم عواصف رملية؟',
            question_en: 'Classify each type under the correct category: thunderstorms or sandstorms?',
            categories_ar: ['عواصف رعدية', 'عواصف رملية'],
            categories_en: ['Thunderstorms', 'Sandstorms'],
            items_ar: ['تحمل رعداً وبرقاً', 'تحمل رملاً وغباراً', 'تحدث في المناطق الجافة كثيراً', 'مصحوبة بأمطار غزيرة'],
            items_en: ['Carries thunder and lightning', 'Carries sand and dust', 'Often occurs in dry regions', 'Accompanied by heavy rain'],
            correct_categories: [0, 1, 1, 0],
            explanation_ar: 'العاصفة الرعدية: رعد + برق + أمطار. العاصفة الرملية: رمل + غبار + تحدث في مناطق جافة كثيراً.',
          },
          // 11 — مطابقة: الأدوات وما تقيسه
          {
            type: 'matching',
            question_ar: 'صِل كل أداة بما تقيسه:',
            question_en: 'Match each tool to what it measures:',
            pairs_ar: [
              { left: 'الترمومتر', right: 'درجة الحرارة' },
              { left: 'البارومتر', right: 'الضغط الجوي' },
              { left: 'الأنيمومتر', right: 'سرعة الرياح' },
              { left: 'المطياسة', right: 'كمية هطول الأمطار' },
            ],
            pairs_en: [
              { left: 'Thermometer', right: 'Temperature' },
              { left: 'Barometer', right: 'Atmospheric pressure' },
              { left: 'Anemometer', right: 'Wind speed' },
              { left: 'Rain gauge', right: 'Rainfall amount' },
            ],
            explanation_ar: 'كل أداة لها وظيفة: ترمومتر (حرارة) · بارومتر (ضغط) · أنيمومتر (رياح) · مطياسة (مطر).',
          },
          // 12 — ترتيب: خطوات البقاء آمناً أثناء العاصفة الرملية
          {
            type: 'ordering',
            question_ar: 'رتّب الخطوات الصحيحة للبقاء آمناً عند قدوم عاصفة رملية:',
            question_en: 'Order the correct steps to stay safe during a sandstorm:',
            items_ar: [
              'أسمع عن قدوم العاصفة الرملية من الأخبار',
              'أبقى داخل البيت وأغلق الأبواب والنوافذ',
              'أستخدم الكمامات',
              'أغطّي أنفي بقماش مبلّل بالماء',
            ],
            items_en: [
              'Hear about the sandstorm from the news',
              'Stay inside and close doors and windows',
              'Use masks',
              'Cover my nose with a cloth dampened with water',
            ],
            explanation_ar: 'للبقاء آمناً أثناء العاصفة الرملية: أسمع التحذيرات ← أبقى داخل البيت ← أستخدم الكمامات ← أغطّي أنفي بقماش مبلّل.',
          },
          // 13 — اختيار من متعدد: مهنة الراصد الجوي
          {
            type: 'multiple_choice',
            image_url: IMG.anemometer,
            question_ar: '🔍 انظر إلى الصورة: الشخص الذي يعمل في محطة الأرصاد الجوية يُسمّى:',
            question_en: '🔍 Look at the image: the person who works at a weather station is called:',
            options_ar: ['الراصد الجوي', 'الفلكي', 'رائد الفضاء', 'عالم الأحياء'],
            options_en: ['Meteorologist', 'Astronomer', 'Astronaut', 'Biologist'],
            correct: 0,
            explanation_ar: 'الراصد الجوي هو الشخص الذي يعمل في محطات الأرصاد الجوية؛ يجمع البيانات والمعلومات عن الطقس باستخدام تقنيات حديثة، ويخبر الناس بذلك عبر التلفاز وغيره.',
            golden_rule_ar: '👨‍🔬 الراصد الجوي = متخصص رصد الطقس.',
          },
          // 14 — صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'الإعصار الحلزوني عاصفةٌ تتكوّن فوق المحيطات.',
            question_en: 'A hurricane is a storm that forms over oceans.',
            correct: 'true',
            explanation_ar: 'الإعصار الحلزوني عاصفةٌ كبيرةٌ مصحوبةٌ برياح قوية وأمطار غزيرة تتكوّن فوق المحيطات.',
          },
          // 15 — اختيار من متعدد: سرعة الإعصار الحلزوني
          {
            type: 'multiple_choice',
            question_ar: 'تبلغ سرعة رياح الإعصار الحلزوني:',
            question_en: 'The wind speed of a hurricane reaches:',
            options_ar: ['118 كيلومتراً في الساعة وقد تزيد', '30 كيلومتراً في الساعة', '60 كيلومتراً في الساعة', '200 كيلومتراً في الساعة دائماً'],
            options_en: ['118 km/h or more', '30 km/h', '60 km/h', 'Always 200 km/h'],
            correct: 0,
            explanation_ar: 'يتحرك الإعصار الحلزوني بشكل دائري وتبلغ سرعة رياحه 118 كيلومتراً في الساعة وقد تزيد.',
          },
        ],
      },

      /* ─── الفصل الثامن: دورة الماء والمناخ ─── */
      {
        id: 'water_cycle_climate',
        title_ar: 'الفصل الثامن: دورة الماء والمناخ',
        title_en: 'Chapter 8: Water Cycle & Climate',
        questions: [
          // 1 — صورة دورة الماء
          {
            type: 'multiple_choice',
            image_url: IMG.water_cycle,
            question_ar: '🔍 انظر إلى الصورة: الحركة المستمرة للماء بين سطح الأرض والغلاف الجوي تُسمّى:',
            question_en: '🔍 Look at the image: the continuous movement of water between Earth\'s surface and the atmosphere is called:',
            options_ar: ['دورة الماء', 'التبخّر', 'التكثّف', 'الهطول'],
            options_en: ['The water cycle', 'Evaporation', 'Condensation', 'Precipitation'],
            correct: 0,
            explanation_ar: 'دورة الماء هي الحركة المستمرة للماء بين سطح الأرض والغلاف الجوي. لا يمكن أن تتشكّل دورة الماء دون الشمس.',
            golden_rule_ar: '💧 دورة الماء = حركة مستمرة بين الأرض والجو.',
          },
          // 2 — صورة تبخّر
          {
            type: 'multiple_choice',
            image_url: IMG.evaporation,
            question_ar: '🔍 انظر إلى الصورة: تعمل الطاقة الشمسية على تبخير مياه البحار والمحيطات. هذه العملية تُسمّى:',
            question_en: '🔍 Look at the image: solar energy causes water from seas and oceans to evaporate. This process is called:',
            options_ar: ['التبخّر', 'التكثّف', 'الهطول', 'دورة الماء'],
            options_en: ['Evaporation', 'Condensation', 'Precipitation', 'Water cycle'],
            correct: 0,
            explanation_ar: 'التبخّر: عمليةٌ تحوّل السائلَ إلى غاز. تعمل الطاقة الشمسية على تبخير مياه البحار والمحيطات، فيتحول الماء السائل إلى بخار ماء.',
            golden_rule_ar: '☀️ التبخّر = تحوّل الماء السائل إلى بخار بسبب الحرارة.',
          },
          // 3 — صورة تكثّف
          {
            type: 'multiple_choice',
            image_url: IMG.condensation,
            question_ar: '🔍 انظر إلى الصورة (قطرات على الزجاج): هذه العملية التي تحوّل الغاز إلى سائل تُسمّى:',
            question_en: '🔍 Look at the image (drops on glass): this process that turns gas into liquid is called:',
            options_ar: ['التكثّف', 'التبخّر', 'الذوبان', 'الهطول'],
            options_en: ['Condensation', 'Evaporation', 'Melting', 'Precipitation'],
            correct: 0,
            explanation_ar: 'التكثّف: عمليةٌ تحوّل الغازَ إلى سائل. عندما يصعد بخار الماء إلى أعلى يبرد، فيتكاثف حول الغبار في الهواء وتتشكل الغيمة.',
            golden_rule_ar: '💦 التكثّف = تحوّل البخار إلى ماء عند البرودة.',
          },
          // 4 — صورة غيوم
          {
            type: 'multiple_choice',
            image_url: IMG.clouds,
            question_ar: '🔍 انظر إلى الصورة: الغيمة تتكوّن من:',
            question_en: '🔍 Look at the image: a cloud is made of:',
            options_ar: [
              'قطرات الماء الصغيرة أو بلّورات الثلج في الجو',
              'بخار الماء مباشرةً',
              'غاز الأكسجين',
              'الرمال الدقيقة في الهواء',
            ],
            options_en: [
              'Tiny water droplets or ice crystals in the atmosphere',
              'Water vapor directly',
              'Oxygen gas',
              'Fine sand particles in the air',
            ],
            correct: 0,
            explanation_ar: 'الغيمة تجمّعٌ من قطرات الماء الصغيرة أو بلّورات الثلج في الجو. تتشكّل الغيوم على ارتفاعات مختلفة فوق سطح الأرض.',
            golden_rule_ar: '☁️ الغيمة = قطرات ماء صغيرة أو بلّورات ثلج.',
          },
          // 5 — صورة مطر
          {
            type: 'multiple_choice',
            image_url: IMG.rain,
            question_ar: '🔍 انظر إلى الصورة: الماء الساقط على سطح الأرض من الغلاف الجوي (مطر، ثلج، بَرَد) يُسمّى:',
            question_en: '🔍 Look at the image: water falling onto Earth\'s surface from the atmosphere (rain, snow, hail) is called:',
            options_ar: ['الهطول', 'التبخّر', 'التكثّف', 'دورة الماء'],
            options_en: ['Precipitation', 'Evaporation', 'Condensation', 'Water cycle'],
            correct: 0,
            explanation_ar: 'الهطول هو الماء المتساقط من الغلاف الجوي على الأرض على شكل مطر أو ثلج أو بَرَد.',
            golden_rule_ar: '🌧️ الهطول = ماء يسقط من السماء (مطر/ثلج/بَرَد).',
          },
          // 6 — صورة ضباب
          {
            type: 'multiple_choice',
            image_url: IMG.fog,
            question_ar: '🔍 انظر إلى الصورة: الضباب غيومٌ تتشكّل:',
            question_en: '🔍 Look at the image: fog is clouds that form:',
            options_ar: ['بالقرب من سطح الأرض', 'عالياً في الجو', 'داخل البحر', 'في الفضاء'],
            options_en: ['Near Earth\'s surface', 'High in the atmosphere', 'Inside the sea', 'In space'],
            correct: 0,
            explanation_ar: 'الضباب غيومٌ تتشكّل بالقرب من سطح الأرض. يحتوي الضباب والغيوم على ماء متكاثف يُقلّل من الرؤية.',
            golden_rule_ar: '🌫️ الضباب = غيوم قريبة من سطح الأرض.',
          },
          // 7 — ترتيب: مراحل دورة الماء
          {
            type: 'ordering',
            question_ar: 'رتّب مراحل دورة الماء بالترتيب الصحيح:',
            question_en: 'Order the stages of the water cycle in the correct sequence:',
            items_ar: ['تسخين الشمس لمياه البحار', 'تبخّر الماء وصعود البخار', 'تبرّد البخار ويتكاثف ويتشكّل السحاب', 'يسقط الماء على شكل مطر أو ثلج', 'يعود الماء إلى البحار والأنهار'],
            items_en: ['Sun heating sea water', 'Water evaporates and vapor rises', 'Vapor cools, condenses, and clouds form', 'Water falls as rain or snow', 'Water returns to seas and rivers'],
            explanation_ar: 'مراحل دورة الماء: شمس تسخّن الماء ← تبخّر وصعود ← تكاثف وتشكّل سحاب ← هطول (مطر/ثلج) ← عودة إلى البحار. ثم تبدأ الدورة من جديد.',
          },
          // 8 — مطابقة: مصطلحات دورة الماء
          {
            type: 'matching',
            question_ar: 'صِل كل مصطلح بتعريفه:',
            question_en: 'Match each term to its definition:',
            pairs_ar: [
              { left: 'التبخّر', right: 'تحوّل السائل إلى غاز' },
              { left: 'التكثّف', right: 'تحوّل الغاز إلى سائل' },
              { left: 'دورة الماء', right: 'الحركة المستمرة للماء بين الأرض والجو' },
              { left: 'الغيمة', right: 'تجمّع قطرات الماء أو بلورات الثلج في الجو' },
            ],
            pairs_en: [
              { left: 'Evaporation', right: 'Liquid turning into gas' },
              { left: 'Condensation', right: 'Gas turning into liquid' },
              { left: 'Water cycle', right: 'Continuous movement of water between Earth and atmosphere' },
              { left: 'Cloud', right: 'Collection of water droplets or ice crystals in the atmosphere' },
            ],
            explanation_ar: 'تبخّر = سائل→غاز | تكثّف = غاز→سائل | دورة الماء = حركة مستمرة | غيمة = قطرات ماء في الجو.',
          },
          // 9 — صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'لا يمكن أن تتشكّل دورة الماء دون الشمس.',
            question_en: 'The water cycle cannot form without the Sun.',
            correct: 'true',
            explanation_ar: 'الطاقة الشمسية هي المحرك الرئيسي لدورة الماء — فهي التي تسخّن مياه البحار وتجعلها تتبخّر.',
          },
          // 10 — تصنيف: حالات الماء في دورة الماء
          {
            type: 'classify',
            question_ar: 'صنّف كل حالة من حالات الماء:',
            question_en: 'Classify each state of water:',
            categories_ar: ['سائل', 'غاز', 'صلب'],
            categories_en: ['Liquid', 'Gas', 'Solid'],
            items_ar: ['ماء البحر', 'بخار الماء في الجو', 'الثلج', 'مياه الأنهار', 'قطرات المطر', 'البَرَد'],
            items_en: ['Sea water', 'Water vapor in atmosphere', 'Snow', 'River water', 'Raindrops', 'Hail'],
            correct_categories: [0, 1, 2, 0, 0, 2],
            explanation_ar: 'الماء السائل: بحر + نهر + مطر. الغاز: بخار الماء. الصلب: ثلج + بَرَد.',
          },
          // 11 — صورة نهر
          {
            type: 'multiple_choice',
            image_url: IMG.river,
            question_ar: '🔍 انظر إلى الصورة: الماء الساقط على سطح الأرض قد يتسرّب إلى باطن الأرض ليصبح:',
            question_en: '🔍 Look at the image: water falling on Earth\'s surface may seep into the ground and become:',
            options_ar: ['مياهاً جوفية', 'بحراً جديداً', 'غيوماً مرة أخرى', 'بخار ماء مباشرةً'],
            options_en: ['Groundwater', 'A new sea', 'Clouds again', 'Water vapor directly'],
            correct: 0,
            explanation_ar: 'الماء الساقط على سطح الأرض قد يتسرّب إلى باطن الأرض ويصبح مياهاً جوفية، وقد يجري على سطح الأرض مشكّلاً الأنهار والمسطّحات المائية.',
            golden_rule_ar: '🏔️ ماء الأمطار: يتسرّب جوفياً أو يجري سطحياً.',
          },
          // 12 — اختيار من متعدد: المناخ
          {
            type: 'multiple_choice',
            question_ar: 'المناخ هو:',
            question_en: 'Climate is:',
            options_ar: [
              'حالة الطقس في مكان معيّن على مدى فترة زمنية طويلة',
              'حالة الجو في يوم واحد فقط',
              'درجة الحرارة في الصيف فقط',
              'هطول الأمطار في الشتاء',
            ],
            options_en: [
              'The weather condition in a specific place over a long period of time',
              'The weather in just one day',
              'Temperature in summer only',
              'Rainfall in winter',
            ],
            correct: 0,
            explanation_ar: 'المناخ هو حالة الطقس في مكان معيّن على مدى فترة زمنية طويلة — يختلف عن الطقس اليومي.',
            golden_rule_ar: '🌍 المناخ = طقس المنطقة على المدى الطويل.',
          },
          // 13 — مطابقة: فصول السنة والمناخ
          {
            type: 'matching',
            question_ar: 'صِل كل فصل بطقسه المميز في المملكة العربية السعودية:',
            question_en: 'Match each season to its characteristic weather in Saudi Arabia:',
            pairs_ar: [
              { left: 'الصيف', right: 'حار جداً وجاف في معظم المناطق' },
              { left: 'الشتاء', right: 'بارد وتسقط أمطار في بعض المناطق' },
              { left: 'الربيع', right: 'معتدل ودافئ مع ظهور الأزهار' },
              { left: 'الخريف', right: 'يبدأ فيه الجو بالاعتدال والبرودة' },
            ],
            pairs_en: [
              { left: 'Summer', right: 'Very hot and dry in most areas' },
              { left: 'Winter', right: 'Cold with rain in some areas' },
              { left: 'Spring', right: 'Mild and warm with flowers' },
              { left: 'Autumn', right: 'Weather starts to moderate and cool' },
            ],
            explanation_ar: 'فصول المملكة: صيف (حار جاف) · شتاء (بارد ماطر أحياناً) · ربيع (معتدل) · خريف (يبدأ الاعتدال).',
          },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════
   *  الوحدة الخامسة: المادة
   * ═══════════════════════════════════════════════════ */
  {
    id: 'matter',
    title_ar: 'الوحدة الخامسة: المادة وخصائصها',
    title_en: 'Unit 5: Matter & Its Properties',
    color: '#166534',
    emoji: '🧪',
    image: IMG.matter_states,
    lessons: [

      /* ─── الفصل التاسع: مُلاحظة المواد ─── */
      {
        id: 'observing_matter',
        title_ar: 'الفصل التاسع: مُلاحظة المواد وقياسها',
        title_en: 'Chapter 9: Observing & Measuring Matter',
        questions: [
          // 1 — صورة مادة صلبة
          {
            type: 'multiple_choice',
            image_url: IMG.solid,
            question_ar: '🔍 انظر إلى الصورة: المادة الصلبة تتميز بأن:',
            question_en: '🔍 Look at the image: a solid is characterized by:',
            options_ar: [
              'لها حجم وشكل ثابتان ولا تتدفق',
              'لها حجم ثابت لكن شكلها يتغير',
              'لا حجم لها ولا شكل ثابتان',
              'تنتشر في كل مكان',
            ],
            options_en: [
              'It has fixed volume and shape, and does not flow',
              'It has fixed volume but changing shape',
              'It has no fixed volume or shape',
              'It spreads everywhere',
            ],
            correct: 0,
            explanation_ar: 'المادة الصلبة لها حجمٌ وشكلٌ ثابتان ولا تتدفق — مثل الحجر والخشب والمكتب.',
            golden_rule_ar: '🧱 الصلب = حجم + شكل ثابتان.',
          },
          // 2 — صورة سائل
          {
            type: 'multiple_choice',
            image_url: IMG.liquid,
            question_ar: '🔍 انظر إلى الصورة: المادة السائلة تتميز بأن:',
            question_en: '🔍 Look at the image: a liquid is characterized by:',
            options_ar: [
              'لها حجم ثابت لكن شكلها يأخذ شكل الإناء',
              'لها حجم وشكل ثابتان',
              'لا حجم لها ولا شكل',
              'تنتشر في الهواء دائماً',
            ],
            options_en: [
              'It has fixed volume but takes the shape of its container',
              'It has fixed volume and fixed shape',
              'It has no fixed volume or shape',
              'It always spreads in the air',
            ],
            correct: 0,
            explanation_ar: 'المادة السائلة لها حجمٌ ثابت لكن شكلها يتغير ليأخذ شكل الإناء الذي تُوضع فيه — مثل الماء والعصير والزيت.',
            golden_rule_ar: '💧 السائل = حجم ثابت + شكل يتغير.',
          },
          // 3 — صورة غاز
          {
            type: 'multiple_choice',
            image_url: IMG.gas,
            question_ar: '🔍 انظر إلى الصورة: المادة الغازية تتميز بأن:',
            question_en: '🔍 Look at the image: a gas is characterized by:',
            options_ar: [
              'ليس لها حجم ولا شكل ثابتان وتملأ الحاوية التي تُوضع فيها',
              'لها حجم وشكل ثابتان',
              'لها حجم ثابت فقط',
              'لا يمكن ضغطها',
            ],
            options_en: [
              'It has no fixed volume or shape and fills any container',
              'It has fixed volume and shape',
              'It has only fixed volume',
              'It cannot be compressed',
            ],
            correct: 0,
            explanation_ar: 'المادة الغازية ليس لها حجمٌ ولا شكلٌ ثابتان، وتملأ الحاوية التي تُوضع فيها كاملاً — مثل الهواء وبخار الماء.',
            golden_rule_ar: '💨 الغاز = لا حجم ولا شكل ثابتَيْن.',
          },
          // 4 — تصنيف حالات المادة
          {
            type: 'classify',
            question_ar: 'صنّف كل مادة تحت حالتها الصحيحة:',
            question_en: 'Classify each material under its correct state:',
            categories_ar: ['صلب', 'سائل', 'غاز'],
            categories_en: ['Solid', 'Liquid', 'Gas'],
            items_ar: ['الكتاب', 'الماء', 'الهواء', 'الملح', 'العصير', 'بخار الماء'],
            items_en: ['Book', 'Water', 'Air', 'Salt', 'Juice', 'Water vapor'],
            correct_categories: [0, 1, 2, 0, 1, 2],
            explanation_ar: 'صلب: كتاب + ملح | سائل: ماء + عصير | غاز: هواء + بخار الماء.',
          },
          // 5 — مطابقة حالات المادة وخصائصها
          {
            type: 'matching',
            question_ar: 'صِل كل حالة من حالات المادة بخصائصها:',
            question_en: 'Match each state of matter to its properties:',
            pairs_ar: [
              { left: 'الصلب', right: 'حجم وشكل ثابتان — لا يتدفق' },
              { left: 'السائل', right: 'حجم ثابت — يأخذ شكل الإناء' },
              { left: 'الغاز', right: 'يملأ الحاوية — لا حجم ولا شكل ثابتَيْن' },
            ],
            pairs_en: [
              { left: 'Solid', right: 'Fixed volume and shape — does not flow' },
              { left: 'Liquid', right: 'Fixed volume — takes container shape' },
              { left: 'Gas', right: 'Fills container — no fixed volume or shape' },
            ],
            explanation_ar: 'الصلب: ثابت. السائل: حجم ثابت + شكل متغير. الغاز: لا ثابت.',
          },
          // 6 — صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'تُقاس المواد الصلبة بالميزان لمعرفة كتلتها.',
            question_en: 'Solid materials are measured with a balance scale to determine their mass.',
            correct: 'true',
            explanation_ar: 'الميزان أداةٌ لقياس كتلة المواد — يمكن وضع المادة الصلبة مباشرةً على الميزان لقياس كتلتها.',
          },
          // 7 — صورة أدوات قياس
          {
            type: 'multiple_choice',
            image_url: IMG.measuring,
            question_ar: '🔍 انظر إلى الصورة: لقياس حجم سائل نستخدم:',
            question_en: '🔍 Look at the image: to measure the volume of a liquid we use:',
            options_ar: ['إناءً مدرّجاً (مخبار)', 'الميزان', 'المسطرة', 'الترمومتر'],
            options_en: ['A graduated cylinder', 'A balance scale', 'A ruler', 'A thermometer'],
            correct: 0,
            explanation_ar: 'لقياس حجم السائل نستخدم إناءً مدرّجاً (مخباراً) — ننظر إلى مستوى السائل عند القراءة.',
            golden_rule_ar: '🧪 المخبار = قياس حجم السوائل.',
          },
          // 8 — ترتيب: خطوات قياس كتلة مادة بالميزان
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات قياس كتلة مادة صلبة بالميزان:',
            question_en: 'Order the steps to measure the mass of a solid using a balance:',
            items_ar: ['أضع الميزان على سطح مستوٍ', 'أتأكد أن الميزان في وضع التوازن', 'أضع المادة في أحد الكفّتين', 'أضع الأوزان في الكفّة الأخرى', 'أقرأ الكتلة عندما يتوازن الميزان'],
            items_en: ['Place the balance on a flat surface', 'Ensure the balance is at equilibrium', 'Place the material on one pan', 'Add weights to the other pan', 'Read the mass when the balance is level'],
            explanation_ar: 'خطوات الميزان: ضع على سطح مستوٍ ← تأكد التوازن ← ضع المادة ← أضف الأوزان ← اقرأ الكتلة.',
          },
          // 9 — اختيار من متعدد: ما المادة
          {
            type: 'multiple_choice',
            question_ar: 'المادة هي:',
            question_en: 'Matter is:',
            options_ar: ['كل شيء له كتلة ويشغل حيّزاً من الفضاء', 'الأجسام الصلبة فقط', 'الأجسام السائلة والغازية فقط', 'الطاقة والحرارة'],
            options_en: ['Everything that has mass and takes up space', 'Only solid objects', 'Only liquid and gas', 'Energy and heat'],
            correct: 0,
            explanation_ar: 'المادة هي كل شيء له كتلةٌ ويشغل حيّزاً من الفضاء — سواءٌ أكانت صلبةً أم سائلةً أم غازية.',
            golden_rule_ar: '⚗️ المادة = كتلة + حجم.',
          },
          // 10 — صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'الهواء مادةٌ لأن له كتلة ويشغل حيّزاً من الفضاء.',
            question_en: 'Air is matter because it has mass and occupies space.',
            correct: 'true',
            explanation_ar: 'الهواء مادةٌ رغم عدم رؤيتنا له — له كتلةٌ ويشغل حيّزاً من الفضاء، وهو غازٌ يُحيط بالكرة الأرضية.',
          },
        ],
      },

      /* ─── الفصل العاشر: تغيرات المادة ─── */
      {
        id: 'matter_changes',
        title_ar: 'الفصل العاشر: تغيرات المادة',
        title_en: 'Chapter 10: Changes in Matter',
        questions: [
          // 1 — صورة ذوبان
          {
            type: 'multiple_choice',
            image_url: IMG.melting,
            question_ar: '🔍 انظر إلى الصورة: الجليد يتحول إلى ماء بسبب الحرارة. هذا التغيير يُسمّى:',
            question_en: '🔍 Look at the image: ice turns into water due to heat. This change is called:',
            options_ar: ['الذوبان', 'التجمّد', 'التبخّر', 'التكثّف'],
            options_en: ['Melting', 'Freezing', 'Evaporation', 'Condensation'],
            correct: 0,
            explanation_ar: 'الذوبان تغيّرٌ تتحول فيه المادة الصلبة إلى سائل بسبب الحرارة — مثل الجليد يذوب ليصبح ماءً.',
            golden_rule_ar: '🔥 الذوبان = صلب → سائل (بالحرارة).',
          },
          // 2 — صورة تجمّد
          {
            type: 'multiple_choice',
            image_url: IMG.freezing,
            question_ar: '🔍 انظر إلى الصورة: الماء يتحوّل إلى جليد بسبب البرودة. هذا التغيير يُسمّى:',
            question_en: '🔍 Look at the image: water turns into ice due to cold. This change is called:',
            options_ar: ['التجمّد', 'الذوبان', 'التبخّر', 'الهطول'],
            options_en: ['Freezing', 'Melting', 'Evaporation', 'Precipitation'],
            correct: 0,
            explanation_ar: 'التجمّد تغيّرٌ تتحول فيه المادة السائلة إلى صلبة بسبب البرودة — مثل الماء يتجمّد ليصبح جليداً.',
            golden_rule_ar: '🧊 التجمّد = سائل → صلب (بالبرودة).',
          },
          // 3 — تصنيف التغييرات الفيزيائية والكيميائية
          {
            type: 'classify',
            question_ar: 'صنّف كل تغيير إلى: تغيير فيزيائي أو تغيير كيميائي:',
            question_en: 'Classify each change as: physical change or chemical change:',
            categories_ar: ['تغيير فيزيائي', 'تغيير كيميائي'],
            categories_en: ['Physical change', 'Chemical change'],
            items_ar: ['ذوبان الجليد', 'احتراق الورق', 'تقطيع الورق', 'صدأ الحديد', 'تكسير الزجاج', 'طهو الطعام'],
            items_en: ['Ice melting', 'Paper burning', 'Cutting paper', 'Iron rusting', 'Breaking glass', 'Cooking food'],
            correct_categories: [0, 1, 0, 1, 0, 1],
            explanation_ar: 'فيزيائي (يمكن العودة): ذوبان + تقطيع + تكسير. كيميائي (لا يمكن العودة): احتراق + صدأ + طهو.',
          },
          // 4 — مطابقة التغييرات
          {
            type: 'matching',
            question_ar: 'صِل كل تغيير بنوعه:',
            question_en: 'Match each change to its type:',
            pairs_ar: [
              { left: 'الجليد يذوب ويصبح ماءً', right: 'تغيير حالة الصلب إلى سائل' },
              { left: 'الماء يتجمّد ويصبح جليداً', right: 'تغيير حالة السائل إلى صلب' },
              { left: 'الماء يتبخّر ويصبح بخاراً', right: 'تغيير حالة السائل إلى غاز' },
              { left: 'البخار يتكاثف ويصبح ماءً', right: 'تغيير حالة الغاز إلى سائل' },
            ],
            pairs_en: [
              { left: 'Ice melts to become water', right: 'Solid to liquid change' },
              { left: 'Water freezes to become ice', right: 'Liquid to solid change' },
              { left: 'Water evaporates to vapor', right: 'Liquid to gas change' },
              { left: 'Vapor condenses to water', right: 'Gas to liquid change' },
            ],
            explanation_ar: 'ذوبان: صلب→سائل | تجمّد: سائل→صلب | تبخّر: سائل→غاز | تكثّف: غاز→سائل.',
          },
          // 5 — صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'التغيير الفيزيائي يُغيّر شكل المادة دون أن يُغيّر تركيبها.',
            question_en: 'A physical change alters the form of matter without changing its composition.',
            correct: 'true',
            explanation_ar: 'التغيير الفيزيائي يُغيّر شكل المادة أو حالتها فقط دون تغيير تركيبها الكيميائي — مثل تقطيع الورق وذوبان الجليد.',
          },
          // 6 — ترتيب: خطوات نشاط ذوبان الجليد
          {
            type: 'ordering',
            question_ar: 'رتّب خطوات نشاط "ذوبان الجليد في الظروف المختلفة":',
            question_en: 'Order the steps of the "ice melting in different conditions" activity:',
            items_ar: [
              'أحضر قطعتَيْن من الجليد متساويتَيْن في الحجم',
              'أضع قطعةً في مكان دافئ مضيء',
              'أضع القطعة الأخرى في مكان بارد',
              'أراقب الفرق بعد ١٠ دقائق',
              'أستنتج: ما أثر الحرارة في الذوبان؟',
            ],
            items_en: [
              'Get two equal pieces of ice',
              'Place one in a warm, bright place',
              'Place the other in a cold place',
              'Observe the difference after 10 minutes',
              'Conclude: what is the effect of heat on melting?',
            ],
            explanation_ar: 'النشاط: قطعتان متساويتان ← إحداهما في الدفء والأخرى في البرد ← راقب الفرق ← استنتج أثر الحرارة.',
          },
          // 7 — اختيار من متعدد: مثال على التغيير الكيميائي
          {
            type: 'multiple_choice',
            image_url: IMG.matter_states,
            question_ar: '🔍 أيٌّ من التالي مثالٌ على تغيير كيميائي؟',
            question_en: '🔍 Which of the following is an example of a chemical change?',
            options_ar: ['احتراق الخشب وتحوّله إلى رماد', 'تقطيع التفاح إلى قطع صغيرة', 'ذوبان الجليد', 'تشكيل الطين بأشكال مختلفة'],
            options_en: ['Wood burning and turning to ash', 'Cutting an apple into small pieces', 'Ice melting', 'Shaping clay into different forms'],
            correct: 0,
            explanation_ar: 'احتراق الخشب تغيّرٌ كيميائي — يتحول الخشب إلى رماد وغاز ثاني أكسيد الكربون ولا يمكن العودة. أما تقطيع التفاح وذوبان الجليد وتشكيل الطين فتغييرات فيزيائية.',
            golden_rule_ar: '🔥 التغيير الكيميائي = لا يمكن العودة.',
          },
          // 8 — صح أم خطأ
          {
            type: 'true_false',
            question_ar: 'صدأ الحديد مثالٌ على التغيير الفيزيائي.',
            question_en: 'Iron rusting is an example of a physical change.',
            correct: 'false',
            explanation_ar: 'صدأ الحديد مثالٌ على التغيير الكيميائي — يتفاعل الحديد مع الأكسجين والماء ويتكوّن أكسيد الحديد (الصدأ) ولا يمكن العودة إلى الحديد الأصلي.',
          },
          // 9 — اختيار من متعدد: خصائص المادة
          {
            type: 'multiple_choice',
            image_url: IMG.solid,
            question_ar: '🔍 انظر إلى الصورة: أي من التالي خاصيةٌ فيزيائية للمادة يمكن ملاحظتها مباشرةً؟',
            question_en: '🔍 Look at the image: which of the following is a physical property of matter that can be directly observed?',
            options_ar: ['اللون والشكل والملمس', 'الاشتعال عند التسخين', 'تفاعلها مع الأحماض', 'قدرتها على الصدأ'],
            options_en: ['Color, shape, and texture', 'Flammability when heated', 'Its reaction with acids', 'Its ability to rust'],
            correct: 0,
            explanation_ar: 'الخصائص الفيزيائية للمادة التي يمكن ملاحظتها مباشرةً هي: اللون والشكل والملمس والكتلة والحجم.',
            golden_rule_ar: '👁️ الخصائص الفيزيائية = لون + شكل + ملمس.',
          },
          // 10 — تصنيف: خصائص مواد مختلفة
          {
            type: 'classify',
            question_ar: 'صنّف كل خاصية إلى: خاصية فيزيائية أو خاصية كيميائية:',
            question_en: 'Classify each property as: physical or chemical:',
            categories_ar: ['خاصية فيزيائية', 'خاصية كيميائية'],
            categories_en: ['Physical property', 'Chemical property'],
            items_ar: ['اللون', 'الاشتعال', 'الكتلة', 'الصدأ', 'الملمس', 'التفاعل مع الخل'],
            items_en: ['Color', 'Flammability', 'Mass', 'Rusting', 'Texture', 'Reaction with vinegar'],
            correct_categories: [0, 1, 0, 1, 0, 1],
            explanation_ar: 'فيزيائية: لون + كتلة + ملمس. كيميائية: اشتعال + صدأ + تفاعل كيميائي.',
          },
        ],
      },
    ],
  },
];

export const TOTAL_UNITS_SCI_G3S2 = SCIENCE_G3_S2_UNITS.length;
export const TOTAL_LESSONS_SCI_G3S2 = SCIENCE_G3_S2_UNITS.reduce((s, u) => s + u.lessons.length, 0);
export const TOTAL_QUESTIONS_SCI_G3S2 = SCIENCE_G3_S2_UNITS.reduce(
  (s, u) => s + u.lessons.reduce((ls, l) => ls + l.questions.length, 0), 0
);