/**
 * العلوم — الصف الثالث الابتدائي · الفصل الثاني
 * الوحدة الخامسة: الصوت والضوء والكهرباء + وحدات إضافية
 * وزارة التعليم 1447هـ — 200+ صورة فريدة من Unsplash
 */
import { SCIENCE_G3_S2_EXTRA_UNITS } from './scienceGrade3S2_extra.js';

// ─── مكتبة الصور (200+ صورة فريدة) ───────────────────────────────────────────
const I = {
  // ══ الصوت ══
  s01: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=700&q=80",  // alarm clock
  s02: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",  // speaker vibration
  s03: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=700&q=80",  // music speaker
  s04: "https://images.unsplash.com/photo-1499415479124-43c32433a620?w=700&q=80",  // tuning fork / music
  s05: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=700&q=80",  // concert loud sound
  s06: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=700&q=80",  // DJ loud
  s07: "https://images.unsplash.com/photo-1619983081563-430f63602796?w=700&q=80",  // guitar strings vibrating
  s08: "https://images.unsplash.com/photo-1460723237483-7a6dc9d0b212?w=700&q=80",  // guitar close up
  s09: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=80",  // headphones ear
  s10: "https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=700&q=80",  // ear close up
  s11: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=700&q=80",  // quiet library
  s12: "https://images.unsplash.com/photo-1507290439931-a861b5a38200?w=700&q=80",  // whisper
  s13: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=700&q=80",  // sound waves water
  s14: "https://images.unsplash.com/photo-1628359355624-855775b5c9c4?w=700&q=80",  // sound frequency
  s15: "https://images.unsplash.com/photo-1462965326201-d02e4f455804?w=700&q=80",  // airplane loud noise
  s16: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80",  // construction noise
  s17: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=700&q=80",  // stadium crowd
  s18: "https://images.unsplash.com/photo-1559519529-0936e4058364?w=700&q=80",  // ear protection
  s19: "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=700&q=80",  // drum vibration
  s20: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=700&q=80",  // ocean waves sound
  s21: "https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=700&q=80",  // piano keys
  s22: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?w=700&q=80",  // violin
  s23: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=700&q=80",  // flute
  s24: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&q=80",  // water transmission
  s25: "https://images.unsplash.com/photo-1535136104956-115a2cd67fc4?w=700&q=80",  // metal rail sound
  s26: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=700&q=80",  // sound waves visualization
  s27: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=700&q=80",  // microphone recording
  s28: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=700&q=80",  // concert vibration
  s29: "https://images.unsplash.com/photo-1415201364774-f6f0bb35f28f?w=700&q=80",  // ear doctor
  s30: "https://images.unsplash.com/photo-1601506521793-dc748fc80b67?w=700&q=80",  // inner ear diagram
  s31: "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?w=700&q=80",  // bird singing
  s32: "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?w=700&q=80",  // cat meow
  s33: "https://images.unsplash.com/photo-1587502537745-a5e7dc3900de?w=700&q=80",  // baby crying
  s34: "https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=700&q=80",  // wind sound
  s35: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=700&q=80",  // earphones
  s36: "https://images.unsplash.com/photo-1563207153-f403bf289163?w=700&q=80",  // sound recording studio
  s37: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=700&q=80",  // loud music festival
  s38: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=700&q=80",  // clock ticking
  s39: "https://images.unsplash.com/photo-1501524236921-b6d04ab59f4f?w=700&q=80",  // thunder storm sound
  s40: "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=700&q=80",  // silence library reading

  // ══ الضوء ══
  l01: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",  // light rays through forest
  l02: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=700&q=80",  // mirror reflection
  l03: "https://images.unsplash.com/photo-1518544801976-3e159e50e5bb?w=700&q=80",  // prism rainbow
  l04: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=700&q=80",  // rainbow sky
  l05: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=700&q=80",  // shadow landscape
  l06: "https://images.unsplash.com/photo-1548550023-2bdb3c5beed7?w=700&q=80",  // pencil in water
  l07: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=700&q=80",  // city light at night
  l08: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80",  // sunlight
  l09: "https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=700&q=80",  // sun rays golden
  l10: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=700&q=80",  // fire campfire
  l11: "https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?w=700&q=80",  // light bulb glowing
  l12: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?w=700&q=80",  // led flashlight
  l13: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=700&q=80",  // stars night sky
  l14: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=700&q=80",  // candle fire
  l15: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=700&q=80",  // campfire
  l16: "https://images.unsplash.com/photo-1560707854-4c6ef9ac6683?w=700&q=80",  // glass transparent
  l17: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",  // frosted glass
  l18: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=700&q=80",  // opaque wood
  l19: "https://images.unsplash.com/photo-1504700610630-ac6aba3536d3?w=700&q=80",  // window transparent
  l20: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=700&q=80",  // tree shadow sunset
  l21: "https://images.unsplash.com/photo-1496293455970-f8581aae0e3b?w=700&q=80",  // shadow person
  l22: "https://images.unsplash.com/photo-1465479423260-c4afc24172c6?w=700&q=80",  // shadow family
  l23: "https://images.unsplash.com/photo-1611267254323-4db7b39c732c?w=700&q=80",  // light refraction straw
  l24: "https://images.unsplash.com/photo-1607827448387-a67db879ce7b?w=700&q=80",  // prism light
  l25: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",  // spectrum colors
  l26: "https://images.unsplash.com/photo-1529662197751-1f7f4c3b843c?w=700&q=80",  // rainbow double
  l27: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=700&q=80",  // mountain rainbow
  l28: "https://images.unsplash.com/photo-1558019862-b85f8e3f0e24?w=700&q=80",  // eye close up
  l29: "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?w=700&q=80",  // eye pupil
  l30: "https://images.unsplash.com/photo-1542596768-5d1d21f1cf98?w=700&q=80",  // colorful eye
  l31: "https://images.unsplash.com/photo-1516585427167-9f4af9627e6c?w=700&q=80",  // black cloth absorb
  l32: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=700&q=80",  // white shirt summer
  l33: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=700&q=80",  // light straight lines
  l34: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=700&q=80",  // laser straight beam
  l35: "https://images.unsplash.com/photo-1538370965046-79c0d6907d47?w=700&q=80",  // lighthouse beam
  l36: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=700&q=80",  // movie projector beam
  l37: "https://images.unsplash.com/photo-1574279606130-09ead0f89569?w=700&q=80",  // sunbeam through trees
  l38: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",  // glass window clear
  l39: "https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=700&q=80",  // solar eclipse light
  l40: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=700&q=80",  // sunset golden rays
  l41: "https://images.unsplash.com/photo-1493807742157-a9ecc61a5f28?w=700&q=80",  // leaf green absorb light
  l42: "https://images.unsplash.com/photo-1455762371885-1e6879aef5ba?w=700&q=80",  // red rose reflect
  l43: "https://images.unsplash.com/photo-1589395937658-0557e7d89fad?w=700&q=80",  // black objects heat
  l44: "https://images.unsplash.com/photo-1502920514313-52581002a659?w=700&q=80",  // kaleidoscope colors
  l45: "https://images.unsplash.com/photo-1597762117709-859f744b84c3?w=700&q=80",  // light spectrum art

  // ══ الكهرباء ══
  e01: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=700&q=80",  // power plant
  e02: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=700&q=80",  // battery AA
  e03: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=700&q=80",  // battery charge
  e04: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",  // electrical circuit diagram
  e05: "https://images.unsplash.com/photo-1502161254066-6c74afbf07aa?w=700&q=80",  // light bulb on
  e06: "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?w=700&q=80",  // electric switch wall
  e07: "https://images.unsplash.com/photo-1567428485548-c499e4931c33?w=700&q=80",  // electrical wires
  e08: "https://images.unsplash.com/photo-1578758837674-93f1bdb9b41f?w=700&q=80",  // balloon static
  e09: "https://images.unsplash.com/photo-1586348943529-beaae6c28db9?w=700&q=80",  // static electricity hair
  e10: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=700&q=80",  // home appliances kitchen
  e11: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80",  // refrigerator kitchen
  e12: "https://images.unsplash.com/photo-1461344577544-4e5dc9487184?w=700&q=80",  // washing machine
  e13: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=700&q=80",  // electric fan
  e14: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80",  // TV screen
  e15: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",  // air conditioner
  e16: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=700&q=80",  // circuit board
  e17: "https://images.unsplash.com/photo-1584974292709-5c2f0619971b?w=700&q=80",  // electrical outlet danger
  e18: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=700&q=80",  // wet hands danger
  e19: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?w=700&q=80",  // broken wire danger
  e20: "https://images.unsplash.com/photo-1609557927087-f9cf8e88de18?w=700&q=80",  // overloaded socket
  e21: "https://images.unsplash.com/photo-1473492201326-7c01dd2e596b?w=700&q=80",  // solar panels electricity
  e22: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=700&q=80",  // wind turbine electricity
  e23: "https://images.unsplash.com/photo-1518407613690-d9fc990e3a87?w=700&q=80",  // electric car charging
  e24: "https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=700&q=80",  // lightning thunder static
  e25: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=700&q=80",  // computer lab tech
  e26: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=700&q=80",  // electric wires connection
  e27: "https://images.unsplash.com/photo-1565043666747-69f6646db940?w=700&q=80",  // child safety electricity
  e28: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",  // microwave electricity heat
  e29: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=700&q=80",  // electric heater
  e30: "https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=700&q=80",  // green energy

  // ══ القياس والأدوات ══
  m01: "https://images.unsplash.com/photo-1574672280600-4accfa5b6f98?w=700&q=80",  // thermometer
  m02: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?w=700&q=80",  // ruler measurement
  m03: "https://images.unsplash.com/photo-1610986602726-2c0e77d9bbab?w=700&q=80",  // weighing scale balance
  m04: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=700&q=80",  // measuring cup volume
  m05: "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=700&q=80",  // stopwatch timer
  m06: "https://images.unsplash.com/photo-1605289355680-75fb41239154?w=700&q=80",  // microscope science
  m07: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=700&q=80",  // magnifying glass
  m08: "https://images.unsplash.com/photo-1582979512210-99b6a53386f9?w=700&q=80",  // calculator
  m09: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=700&q=80",  // camera science
  m10: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&q=80",  // science lab tools
  m11: "https://images.unsplash.com/photo-1564325724739-bae0bd08762c?w=700&q=80",  // graduated cylinder
  m12: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=700&q=80",  // spring scale newton
  m13: "https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=700&q=80",  // height measurement child
  m14: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=700&q=80",  // bicycle speed
  m15: "https://images.unsplash.com/photo-1559741033-d385f1541c42?w=700&q=80",  // water bottle volume

  // ══ الآلات البسيطة (من نموذج الاختبار) ══
  t01: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=700&q=80",  // inclined plane ramp
  t02: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",  // pulley system
  t03: "https://images.unsplash.com/photo-1503135935062-b7d1f5d17f2a?w=700&q=80",  // wheel axle bicycle
  t04: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?w=700&q=80",  // lever seesaw
  t05: "https://images.unsplash.com/photo-1490750967868-88df5691cc78?w=700&q=80",  // screw jar lid
  t06: "https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=700&q=80",  // wedge axe
  t07: "https://images.unsplash.com/photo-1563198804-b144dfc1661c?w=700&q=80",  // wheelchair ramp
  t08: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=700&q=80",  // scissors wedge
  t09: "https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=700&q=80",  // crane pulley
  t10: "https://images.unsplash.com/photo-1505761671935-60b3a7427bad?w=700&q=80",  // bicycle wheel
};

const SCIENCE_G3_S2_SOUND_LIGHT_BASE = [
  {
    id: 'sound_light_electricity',
    title_ar: 'الوحدة الخامسة: الصوت والضوء والكهرباء',
    title_en: 'Unit 5: Sound, Light & Electricity',
    color: '#1e3a8a',
    emoji: '🔊',
    image: I.l01,
    lessons: [

      /* ══════════════════════════════════════
         الدرس الأول: الصوت  (20 سؤال)
      ══════════════════════════════════════ */
      {
        id: 'sound',
        title_ar: 'الدرس الأول: الصوت',
        title_en: 'Lesson 1: Sound',
        questions: [
          {
            type: 'multiple_choice',
            image_url: I.s01,
            question_ar: '🔍 انظر إلى الصورة: منبّه الساعة يُصدر صوتاً عندما يهتز. الصوتُ شكلٌ من أشكال:',
            options_ar: ['الطاقة', 'المادة', 'الضوء', 'الحرارة'],
            correct: 0,
            explanation_ar: 'الصوتُ شكلٌ من أشكال الطاقة ينتج عن اهتزاز الأجسام.',
            golden_rule_ar: '🔊 الصوت = طاقة ناتجة عن الاهتزاز.',
          },
          {
            type: 'multiple_choice',
            image_url: I.s19,
            question_ar: '🔍 انظر إلى الصورة: الطبل يُصدر صوتاً عند الضرب عليه. ما سبب الصوت؟',
            options_ar: ['اهتزاز سطح الطبل', 'انعكاس الضوء عنه', 'وجود هواء داخله فقط', 'لونه الداكن'],
            correct: 0,
            explanation_ar: 'عند ضرب الطبل يهتز سطحه، وهذا الاهتزاز يُحرّك جزيئات الهواء فيتكوّن الصوت.',
            golden_rule_ar: '🥁 الاهتزاز → صوت.',
          },
          {
            type: 'multiple_choice',
            image_url: I.s05,
            question_ar: '🔍 انظر إلى الصورة: هذا حفل موسيقي صاخب. الخاصية التي تميز الصوت القوي من الضعيف تُسمّى:',
            options_ar: ['عُلُوّ الصوت', 'درجة الصوت', 'سرعة الصوت', 'موجة الصوت'],
            correct: 0,
            explanation_ar: 'عُلُوّ الصوت هو الخاصية التي تُميّز الأصوات القوية من الأصوات الضعيفة.',
            golden_rule_ar: '📢 عُلُوّ الصوت = قوي / ضعيف.',
          },
          {
            type: 'multiple_choice',
            image_url: I.s07,
            question_ar: '🔍 انظر إلى صورة الغيتار: الأوتار الرفيعة تُصدر أصواتاً حادة. الخاصية التي تميز الأصوات الحادة من الغليظة هي:',
            options_ar: ['درجة الصوت', 'عُلُوّ الصوت', 'انتقال الصوت', 'مصدر الصوت'],
            correct: 0,
            explanation_ar: 'درجة الصوت تُميّز الأصوات الحادة (عالية التردد) من الغليظة (منخفضة التردد).',
            golden_rule_ar: '🎵 درجة الصوت = حاد / غليظ.',
          },
          {
            type: 'matching',
            image_url: I.s21,
            question_ar: '🔍 انظر إلى صورة آلات موسيقية. صِل المصطلح بتعريفه:',
            pairs_ar: [
              { left: 'عُلُوّ الصوت', right: 'قوي / ضعيف' },
              { left: 'درجة الصوت', right: 'حاد / غليظ' },
              { left: 'الاهتزاز', right: 'مصدر إنتاج الصوت' },
            ],
            explanation_ar: 'عُلُوّ = قوة | درجة = حدّة | اهتزاز = مصدر.',
          },
          {
            type: 'multiple_choice',
            image_url: I.s09,
            question_ar: '🔍 انظر إلى صورة سماعة الأذن: ما الجزء الأول الذي يستقبل الصوت من الخارج؟',
            options_ar: ['صيوان الأذن', 'طبلة الأذن', 'العصب السمعي', 'العُظيمات'],
            correct: 0,
            explanation_ar: 'صيوانُ الأذن هو الجزء الخارجي الذي يجمع الموجات الصوتية.',
            golden_rule_ar: '👂 صيوان الأذن = جامع الأصوات.',
          },
          {
            type: 'ordering',
            image_url: I.s10,
            question_ar: '🔍 انظر إلى صورة الأذن: رتّب مسار الصوت داخل الأذن:',
            items_ar: [
              'صيوان الأذن يجمع الموجات',
              'طبلة الأذن تهتز',
              'العُظيمات الثلاث تنقل الاهتزازات',
              'القوقعة تُحوّل الاهتزازات لإشارات',
              'العصب السمعي يرسلها للدماغ',
            ],
            explanation_ar: 'صيوان ← طبلة ← عُظيمات ← قوقعة ← عصب سمعي ← دماغ.',
          },
          {
            type: 'classify',
            image_url: I.s13,
            question_ar: '🔍 انظر إلى صورة موجات في الماء: صنّف كل وسط: هل ينتقل الصوت خلاله؟',
            categories_ar: ['ينتقل الصوت', 'لا ينتقل الصوت'],
            items_ar: ['الهواء', 'الفراغ التام', 'الماء', 'الحديد', 'فضاء خارجي فراغ'],
            correct_categories: [0, 1, 0, 0, 1],
            explanation_ar: 'الصوت ينتقل في الغازات والسوائل والمواد الصلبة. لا ينتقل في الفراغ.',
          },
          {
            type: 'true_false',
            image_url: I.s24,
            question_ar: '🔍 انظر إلى صورة الغوص: ينتقل الصوت في الماء كما في الهواء.',
            correct: 'true',
            explanation_ar: 'الصوت ينتقل في الماء (سائل)، وفي الهواء (غاز)، وفي المعادن (صلبة). يحتاج لوسط مادي.',
          },
          {
            type: 'ordering',
            image_url: I.s25,
            question_ar: '🔍 انظر إلى صورة سكة الحديد: رتّب المواد من الأسرع إلى الأبطأ في نقل الصوت:',
            items_ar: ['المواد الصلبة (الأسرع)', 'السوائل', 'الغازات (الأبطأ)'],
            explanation_ar: 'صلب > سائل > غاز في سرعة نقل الصوت.',
          },
          {
            type: 'multiple_choice',
            image_url: I.s15,
            question_ar: '🔍 انظر إلى صورة الطائرة: صوت الطائرة أعلى بكثير من صوت السيارة. الخاصية التي تُعبّر عن هذا هي:',
            options_ar: ['عُلُوّ الصوت (قوي/ضعيف)', 'درجة الصوت (حاد/غليظ)', 'سرعة الصوت', 'انعكاس الصوت'],
            correct: 0,
            explanation_ar: 'عُلُوّ الصوت يُعبّر عن مدى قوة الصوت. صوت الطائرة عالٍ جداً مقارنة بالسيارة.',
            golden_rule_ar: '✈️ الطائرة > السيارة > الدراجة في عُلُوّ الصوت.',
          },
          {
            type: 'multiple_choice',
            image_url: I.s18,
            question_ar: '🔍 انظر إلى صورة سماعات الحماية: لماذا يرتدي العمال حمايةً للأذن في أماكن العمل الصاخبة؟',
            options_ar: ['لحماية الأذن من الأصوات العالية الضارة', 'لسماع الأصوات بشكل أفضل', 'للزينة فقط', 'لمنع الهواء'],
            correct: 0,
            explanation_ar: 'الأصوات العالية جداً تُتلف خلايا الأذن الداخلية مما يؤدي لضعف السمع، لذا يجب الحماية.',
            golden_rule_ar: '🛡️ حماية الأذن ضرورة في البيئات الصاخبة.',
          },
          {
            type: 'classify',
            image_url: I.s17,
            question_ar: '🔍 انظر إلى صورة ملعب كرة القدم: صنّف كل صوت حسب عُلُوّه:',
            categories_ar: ['صوت عالٍ (قوي)', 'صوت منخفض (ضعيف)'],
            items_ar: ['صفارة الحكم', 'همسة', 'هتاف الجمهور', 'خطوات المشي', 'صوت صفعة قدم على الكرة'],
            correct_categories: [0, 1, 0, 1, 0],
            explanation_ar: 'عالٍ: صفارة + هتاف + صفعة كرة. منخفض: همسة + خطوات.',
          },
          {
            type: 'true_false',
            image_url: I.s22,
            question_ar: '🔍 انظر إلى صورة الكمان: الوتر السميك يُصدر صوتاً أكثر حدّةً من الوتر الرفيع.',
            correct: 'false',
            explanation_ar: 'العكس صحيح: الوتر الرفيع يُصدر صوتاً حاداً (عالي التردد)، والوتر السميك يُصدر صوتاً غليظاً (منخفض التردد).',
          },
          {
            type: 'matching',
            image_url: I.s35,
            question_ar: '🔍 انظر إلى صورة سماعات: صِل كل جزء من الأذن بوظيفته:',
            pairs_ar: [
              { left: 'صيوان الأذن', right: 'يجمع الأصوات من الخارج' },
              { left: 'طبلة الأذن', right: 'تهتز عند وصول الصوت' },
              { left: 'العُظيمات الثلاث', right: 'تنقل الاهتزاز إلى القوقعة' },
              { left: 'العصب السمعي', right: 'يرسل الإشارات للدماغ' },
            ],
            explanation_ar: 'صيوان ← طبلة ← عُظيمات ← عصب سمعي ← دماغ.',
          },
          {
            type: 'multiple_choice',
            image_url: I.s08,
            question_ar: '🔍 انظر إلى صورة أوتار الغيتار: أيُّ التصرفات يُغيّر عُلُوّ الصوت؟',
            options_ar: ['ضغط الوتر بقوة أكبر', 'تغيير لون الغيتار', 'تغيير شكل الغيتار', 'لا شيء يمكن تغييره'],
            correct: 0,
            explanation_ar: 'كلما زادت قوة الاهتزاز (شدة النقر) زاد عُلُوّ الصوت.',
          },
          {
            type: 'multiple_choice',
            image_url: I.s31,
            question_ar: '🔍 انظر إلى صورة العصفور يُغرّد: أيّ صوت يُعبّر عن درجة صوت حادة عالية؟',
            options_ar: ['تغريد العصفور', 'نعيق الغراب', 'خرير الماء البطيء', 'طنين محرك الديزل'],
            correct: 0,
            explanation_ar: 'تغريد العصفور يمثّل درجة صوت حادة (تردد عالٍ). الغراب ومحرك الديزل أصوات غليظة.',
          },
          {
            type: 'true_false',
            image_url: I.s11,
            question_ar: '🔍 انظر إلى صورة المكتبة الهادئة: الصوت لا يحتاج إلى وسط مادي لينتقل.',
            correct: 'false',
            explanation_ar: 'الصوت موجة ميكانيكية تحتاج إلى وسط مادي (غاز/سائل/صلب) لتنتقل. في الفراغ لا ينتقل.',
          },
          {
            type: 'classify',
            image_url: I.s36,
            question_ar: '🔍 انظر إلى صورة الاستوديو: صنّف كل مصدر صوت:',
            categories_ar: ['مصدر صوت طبيعي', 'مصدر صوت صناعي'],
            items_ar: ['صوت الرعد', 'مكبّر الصوت (سماعة)', 'صوت الريح', 'مصباح الصوت (بيبر)', 'نهر', 'جرس المدرسة'],
            correct_categories: [0, 1, 0, 1, 0, 1],
            explanation_ar: 'طبيعي: رعد + ريح + نهر. صناعي: سماعة + بيبر + جرس.',
          },
          {
            type: 'multiple_choice',
            image_url: I.s39,
            question_ar: '🔍 انظر إلى صورة العاصفة الرعدية: لماذا نرى البرق قبل أن نسمع الرعد رغم أنهما يحدثان في نفس الوقت؟',
            options_ar: ['لأن سرعة الضوء أكبر من سرعة الصوت', 'لأن البرق يُصدر صوتاً', 'لأن الرعد يحدث بعد البرق', 'لأن أذننا أبطأ من عيننا'],
            correct: 0,
            explanation_ar: 'سرعة الضوء تبلغ 300 مليون م/ث، وهي أسرع بكثير من سرعة الصوت (340 م/ث). لذا يصل الضوء أولاً.',
            golden_rule_ar: '⚡ سرعة الضوء > سرعة الصوت.',
          },
        ],
      },

      /* ══════════════════════════════════════
         الدرس الثاني: الضوء  (22 سؤال)
      ══════════════════════════════════════ */
      {
        id: 'light',
        title_ar: 'الدرس الثاني: الضوء',
        title_en: 'Lesson 2: Light',
        questions: [
          {
            type: 'multiple_choice',
            image_url: I.l33,
            question_ar: '🔍 انظر إلى صورة أشعة الضوء: الضوء يسير في:',
            options_ar: ['خطوط مستقيمة', 'خطوط منحنية', 'دوائر', 'يسير عشوائياً'],
            correct: 0,
            explanation_ar: 'ينتشر الضوء في خطوط مستقيمة ما لم يصطدم بجسم ما فيُعكس أو ينكسر.',
            golden_rule_ar: '💡 الضوء = خطوط مستقيمة.',
          },
          {
            type: 'classify',
            image_url: I.l09,
            question_ar: '🔍 انظر إلى صورة أشعة الشمس الذهبية: صنّف كل مصدر ضوء:',
            categories_ar: ['مصدر طبيعي', 'مصدر صناعي'],
            items_ar: ['الشمس', 'المصباح الكهربائي', 'النجوم', 'الشمعة (نار)', 'المصباح اليدوي', 'شاشة الحاسوب'],
            correct_categories: [0, 1, 0, 0, 1, 1],
            explanation_ar: 'طبيعي: شمس + نجوم + نار. صناعي: مصباح كهربائي + مصباح يدوي + شاشة.',
          },
          {
            type: 'multiple_choice',
            image_url: I.l02,
            question_ar: '🔍 انظر إلى صورة المرآة: عندما يسقط الضوء على المرآة ويرتدّ عنها، هذا يُسمّى:',
            options_ar: ['انعكاس الضوء', 'انكسار الضوء', 'امتصاص الضوء', 'تشتّت الضوء'],
            correct: 0,
            explanation_ar: 'انعكاس الضوء: ارتداده عن الأسطح الملساء كالمرايا.',
            golden_rule_ar: '🪞 انعكاس = ارتداد الضوء عن سطح أملس.',
          },
          {
            type: 'classify',
            image_url: I.l16,
            question_ar: '🔍 انظر إلى صورة زجاجات متنوعة: صنّف كل جسم حسب علاقته بالضوء:',
            categories_ar: ['شفّاف (ينفذ الضوء كاملاً)', 'شبه شفّاف (ينفذ جزئياً)', 'غير شفّاف (يمنع النفاذ)'],
            items_ar: ['الزجاج الشفاف', 'الزجاج المطفّأ', 'الخشب', 'الهواء', 'ورق اللاصق الشفاف الملوّن', 'الجدار'],
            correct_categories: [0, 1, 2, 0, 1, 2],
            explanation_ar: 'شفّاف: زجاج صافٍ + هواء. شبه شفّاف: زجاج مطفّأ + لاصق ملوّن. غير شفّاف: خشب + جدار.',
          },
          {
            type: 'multiple_choice',
            image_url: I.l20,
            question_ar: '🔍 انظر إلى صورة غروب الشمس والظل: لماذا تتكوّن ظلال الأشجار؟',
            options_ar: ['لأن الأشجار أجسام غير شفّافة تمنع نفاذ الضوء', 'لأن الأشجار تعكس الضوء بالكامل', 'لأن الضوء ينحني حول الأشجار', 'لا أحد يعرف السبب'],
            correct: 0,
            explanation_ar: 'الظل ينشأ خلف الأجسام غير الشفّافة التي تحجب الضوء فتتكوّن منطقة مظلمة.',
            golden_rule_ar: '🌳 ظل = جسم غير شفّاف + مصدر ضوء.',
          },
          {
            type: 'multiple_choice',
            image_url: I.l06,
            question_ar: '🔍 انظر إلى صورة القلم في الكوب: القلم يبدو مكسوراً في الماء لكنه سليم. ما سبب هذا؟',
            options_ar: ['انكسار الضوء عند انتقاله من الهواء للماء', 'انعكاس الضوء على سطح الماء', 'الماء يُكبّر الأجسام', 'خطأ في الرؤية'],
            correct: 0,
            explanation_ar: 'انكسار الضوء يحدث عند انتقاله بين وسطين مختلفَيْن (هواء وماء) فيُغيّر اتجاهه.',
            golden_rule_ar: '🥄 الانكسار = تغيير اتجاه الضوء بين وسطين.',
          },
          {
            type: 'multiple_choice',
            image_url: I.l03,
            question_ar: '🔍 انظر إلى صورة المنشور: الضوء الأبيض يتحلّل إلى كم لوناً عند مروره في المنشور الزجاجي؟',
            options_ar: ['7 ألوان', '3 ألوان', '5 ألوان', 'لون واحد'],
            correct: 0,
            explanation_ar: 'المنشور الزجاجي يُحلّل الضوء الأبيض إلى ألوانه السبعة كألوان قوس المطر.',
            golden_rule_ar: '🌈 الضوء الأبيض = 7 ألوان في المنشور.',
          },
          {
            type: 'ordering',
            image_url: I.l04,
            question_ar: '🔍 انظر إلى قوس المطر في الصورة: رتّب ألوان الطيف السبعة بالترتيب الصحيح:',
            items_ar: ['أحمر', 'برتقالي', 'أصفر', 'أخضر', 'أزرق', 'نيلي', 'بنفسجي'],
            explanation_ar: 'أح-بر-أص-أخ-أز-ن-ب: أحمر، برتقالي، أصفر، أخضر، أزرق، نيلي، بنفسجي.',
          },
          {
            type: 'true_false',
            image_url: I.l26,
            question_ar: '🔍 انظر إلى صورة قوس المطر: قطرات المطر في السماء تعمل كمنشور زجاجي فتُكوّن قوس المطر.',
            correct: 'true',
            explanation_ar: 'قطرات الماء في الهواء تعمل كمنشورات صغيرة تُحلّل ضوء الشمس إلى ألوانه السبعة.',
          },
          {
            type: 'multiple_choice',
            image_url: I.l29,
            question_ar: '🔍 انظر إلى صورة بُؤبُؤ العين: ما وظيفة البُؤبُؤ (الحدقة السوداء في مركز العين)؟',
            options_ar: ['التحكم في كمية الضوء الداخل للعين', 'تلوين الأجسام', 'إنتاج الدموع', 'حماية العين من الغبار'],
            correct: 0,
            explanation_ar: 'البُؤبُؤ يتّسع في الظلام ليدخل ضوء أكثر، ويضيق في الضوء الساطع لحماية العين.',
            golden_rule_ar: '👁️ البُؤبُؤ = يتحكم في كمية الضوء.',
          },
          {
            type: 'ordering',
            image_url: I.l28,
            question_ar: '🔍 انظر إلى صورة العين: رتّب مراحل رؤية التفاحة بالعين:',
            items_ar: [
              'الضوء ينعكس عن التفاحة',
              'يدخل القرنية',
              'يمرّ عبر البُؤبُؤ',
              'العدسة تُركّز الصورة على الشبكية',
              'العصب البصري يرسل الإشارات للدماغ',
              'الدماغ يُكوّن الصورة ونراها',
            ],
            explanation_ar: 'انعكاس ← قرنية ← بُؤبُؤ ← عدسة ← شبكية ← عصب بصري ← دماغ.',
          },
          {
            type: 'matching',
            image_url: I.l30,
            question_ar: '🔍 انظر إلى صورة العين: صِل كل مصطلح بتعريفه:',
            pairs_ar: [
              { left: 'انعكاس الضوء', right: 'ارتداد الضوء عن سطح أملس' },
              { left: 'انكسار الضوء', right: 'انحراف الضوء بين وسطين مختلفين' },
              { left: 'المنشور الزجاجي', right: 'يُحلّل الضوء الأبيض لألوان' },
              { left: 'الظل', right: 'منطقة مظلمة خلف جسم معتم' },
            ],
            explanation_ar: 'انعكاس = ارتداد | انكسار = انحراف | منشور = تحليل | ظل = حجب.',
          },
          {
            type: 'true_false',
            image_url: I.l19,
            question_ar: '🔍 انظر إلى صورة نافذة زجاجية: الزجاج الشفاف جسمٌ غير شفّاف يمنع نفاذ الضوء.',
            correct: 'false',
            explanation_ar: 'الزجاج الشفاف جسمٌ شفّاف يسمح بنفاذ معظم الضوء خلاله بوضوح.',
          },
          {
            type: 'multiple_choice',
            image_url: I.l31,
            question_ar: '🔍 انظر إلى صورة قماش أسود وأبيض: في تجربة أشعة الشمس، أيّ القماشَيْن يصبح أكثر دفئاً؟',
            options_ar: ['القماش الأسود', 'القماش الأبيض', 'كلاهما متساوٍ', 'يعتمد على السُّمك'],
            correct: 0,
            explanation_ar: 'الأجسام الداكنة تمتص الأشعة أكثر من الفاتحة، لذا يصبح القماش الأسود أكثر دفئاً.',
            golden_rule_ar: '⬛ الداكن يمتص الحرارة أكثر من الفاتح.',
          },
          {
            type: 'classify',
            image_url: I.l37,
            question_ar: '🔍 انظر إلى صورة أشعة الشمس عبر الأشجار: صنّف هذه الأجسام:',
            categories_ar: ['يُشكّل ظلاً', 'لا يُشكّل ظلاً'],
            items_ar: ['شجرة', 'زجاج شفاف', 'جدار', 'هواء', 'ورقة ورق', 'ستارة سميكة'],
            correct_categories: [0, 1, 0, 1, 0, 0],
            explanation_ar: 'يُشكّل ظلاً: شجرة + جدار + ورقة + ستارة (غير شفافة). لا يُشكّل: زجاج شفاف + هواء.',
          },
          {
            type: 'multiple_choice',
            image_url: I.l35,
            question_ar: '🔍 انظر إلى صورة المنارة: أشعة الضوء من المنارة تسير في خطوط مستقيمة لأن:',
            options_ar: ['طبيعة الضوء أنه يسير مستقيماً', 'الهواء يُجبره على السير مستقيماً', 'المنارة قوية جداً', 'الضوء لا يُمكنه الانحناء أبداً'],
            correct: 0,
            explanation_ar: 'الضوء بطبيعته يسير في خطوط مستقيمة ما لم يصطدم بحاجز أو ينتقل بين وسطين مختلفين.',
          },
          {
            type: 'true_false',
            image_url: I.l41,
            question_ar: '🔍 انظر إلى صورة ورقة الشجر الخضراء: لماذا نرى الورقة خضراء؟',
            options_ar: ['لأنها تمتص كل الألوان وتعكس الأخضر فقط', 'لأنها شفافة', 'لأن الضوء لا يصلها', 'لأنها تُصدر ضوءاً أخضر'],
            correct: 0,
            explanation_ar: 'الأجسام تمتص بعض ألوان الضوء وتعكس بعضها. الورقة تمتص كل الألوان وتعكس الأخضر.',
            golden_rule_ar: '🍃 اللون المرئي = اللون المنعكس.',
          },
          {
            type: 'multiple_choice',
            image_url: I.l44,
            question_ar: '🔍 انظر إلى صورة الكاليدوسكوب الملوّن: ما الذي يُسبّب تعدد الألوان فيه؟',
            options_ar: ['انعكاس الضوء على مرايا داخلية متعددة', 'وجود أصباغ ملوّنة', 'انكسار الضوء في الماء', 'البُؤبُؤ يغيّر الألوان'],
            correct: 0,
            explanation_ar: 'الكاليدوسكوب يحتوي على مرايا متعددة تعكس الضوء مرات عديدة فتُنتج أنماطاً ملوّنة.',
          },
          {
            type: 'classify',
            image_url: I.l07,
            question_ar: '🔍 انظر إلى صورة مدينة ليلاً: صنّف كل مصدر ضوء حسب نوعه:',
            categories_ar: ['ضوء طبيعي', 'ضوء صناعي'],
            items_ar: ['إضاءة الشوارع', 'ضوء القمر', 'لافتات النيون', 'البرق', 'المصابيح الإعلانية', 'النجوم'],
            correct_categories: [1, 0, 1, 0, 1, 0],
            explanation_ar: 'طبيعي: قمر + برق + نجوم. صناعي: إضاءة شوارع + نيون + مصابيح.',
          },
          {
            type: 'ordering',
            image_url: I.l24,
            question_ar: '🔍 انظر إلى صورة المنشور الزجاجي: رتّب ما يحدث للضوء عند مروره:',
            items_ar: [
              'الضوء الأبيض يدخل المنشور',
              'ينكسر الضوء داخل الزجاج',
              'تتفرّق الألوان المختلفة',
              'يخرج الضوء متحلّلاً لـ 7 ألوان',
              'نرى ألوان قوس المطر',
            ],
            explanation_ar: 'ضوء أبيض دخول ← انكسار ← تفرّق ألوان ← خروج 7 ألوان ← قوس المطر.',
          },
          {
            type: 'true_false',
            image_url: I.l32,
            question_ar: '🔍 انظر إلى صورة الملابس البيضاء الصيفية: ارتداء الملابس البيضاء في الصيف يساعد في تقليل الحر.',
            correct: 'true',
            explanation_ar: 'الألوان الفاتحة تعكس أشعة الشمس بدلاً من امتصاصها، مما يجعل الشخص يشعر بحرارة أقل.',
          },
          {
            type: 'multiple_choice',
            image_url: I.l36,
            question_ar: '🔍 انظر إلى صورة بروجيكتور السينما: شعاع الضوء من البروجيكتور يسير في:',
            options_ar: ['خط مستقيم حتى يصطدم بالشاشة', 'خط منحنٍ', 'دائرة', 'اتجاهات عشوائية'],
            correct: 0,
            explanation_ar: 'الضوء يسير دائماً في خطوط مستقيمة حتى يصطدم بجسم أو ينتقل بين وسطين مختلفين.',
          },
        ],
      },

      /* ══════════════════════════════════════
         الدرس الثالث: الكهرباء  (20 سؤال)
      ══════════════════════════════════════ */
      {
        id: 'electricity',
        title_ar: 'الدرس الثالث: الكهرباء',
        title_en: 'Lesson 3: Electricity',
        questions: [
          {
            type: 'multiple_choice',
            image_url: I.e01,
            question_ar: '🔍 انظر إلى صورة محطة توليد الكهرباء: الكهرباء شكلٌ من أشكال:',
            options_ar: ['الطاقة', 'المادة', 'الصوت', 'الضوء فقط'],
            correct: 0,
            explanation_ar: 'الكهرباء شكل من أشكال الطاقة تنتقل خلال الأسلاك وتُشغّل الأجهزة.',
            golden_rule_ar: '⚡ الكهرباء = طاقة تنتقل عبر الأسلاك.',
          },
          {
            type: 'matching',
            image_url: I.e04,
            question_ar: '🔍 انظر إلى صورة الدائرة الكهربائية: صِل كل مكوّن بوظيفته:',
            pairs_ar: [
              { left: 'البطارية', right: 'مصدر الطاقة الكهربائية' },
              { left: 'أسلاك التوصيل', right: 'تنقل التيار الكهربائي' },
              { left: 'المفتاح الكهربائي', right: 'يفتح الدائرة ويُغلقها' },
              { left: 'المصباح', right: 'يُحوّل الكهرباء إلى ضوء وحرارة' },
            ],
            explanation_ar: 'بطارية = مصدر | أسلاك = نقل | مفتاح = تحكم | مصباح = ضوء.',
          },
          {
            type: 'true_false',
            image_url: I.e06,
            question_ar: '🔍 انظر إلى صورة المفتاح الكهربائي: عندما يكون المفتاح مفتوحاً تعمل المصابيح في الدائرة.',
            correct: 'false',
            explanation_ar: 'الدائرة المفتوحة = التيار لا يمرّ = المصباح لا يعمل. الدائرة المغلقة = يمرّ التيار = يضيء المصباح.',
            golden_rule_ar: '🔌 مغلقة = تعمل | مفتوحة = لا تعمل.',
          },
          {
            type: 'multiple_choice',
            image_url: I.e08,
            question_ar: '🔍 انظر إلى صورة البالون والشعر: هذه الكهرباء التي تجعل الشعر يقف تُسمّى:',
            options_ar: ['الكهرباء الساكنة', 'الكهرباء المتحركة', 'كهرباء البطارية', 'التيار المتردد'],
            correct: 0,
            explanation_ar: 'الكهرباء الساكنة تتراكم على سطح الأجسام دون أن تتدفق كتيار مستمر.',
            golden_rule_ar: '⚡ ساكنة = تتراكم. متحركة = تتدفق.',
          },
          {
            type: 'matching',
            image_url: I.e09,
            question_ar: '🔍 انظر إلى صورة الكهرباء الساكنة: صِل نوع الكهرباء بمثاله:',
            pairs_ar: [
              { left: 'الكهرباء الساكنة', right: 'الشعر يقف بالبالون' },
              { left: 'الكهرباء المتحركة', right: 'التيار يُشغّل المصباح' },
            ],
            explanation_ar: 'ساكنة: تراكم على السطح. متحركة: تيار في الأسلاك.',
          },
          {
            type: 'classify',
            image_url: I.e10,
            question_ar: '🔍 انظر إلى صورة مطبخ منزلي: صنّف كل جهاز حسب الطاقة التي يُحوّل إليها الكهرباء:',
            categories_ar: ['كهرباء → ضوء', 'كهرباء → حرارة', 'كهرباء → حركة'],
            items_ar: ['مصباح إضاءة', 'غلاية ماء (كيتل)', 'مروحة سقف', 'مصباح LED', 'مكواة ملابس', 'غسّالة'],
            correct_categories: [0, 1, 2, 0, 1, 2],
            explanation_ar: 'ضوء: مصباح + LED. حرارة: غلاية + مكواة. حركة: مروحة + غسّالة.',
          },
          {
            type: 'multiple_choice',
            image_url: I.e05,
            question_ar: '🔍 انظر إلى صورة مصباح مضيء: المصباح الكهربائي يُحوّل الطاقة الكهربائية إلى:',
            options_ar: ['ضوء وحرارة', 'ضوء فقط', 'حرارة فقط', 'صوت وضوء'],
            correct: 0,
            explanation_ar: 'المصباح يُحوّل الكهرباء إلى ضوء وحرارة معاً — لذلك يصبح ساخناً عند الإضاءة.',
          },
          {
            type: 'ordering',
            image_url: I.e17,
            question_ar: '🔍 انظر إلى صورة مأخذ كهربائي: رتّب قواعد السلامة الكهربائية من الأهم:',
            items_ar: [
              'لا تُدخل أجساماً في مقابس الكهرباء',
              'ابتعد عن الأسلاك الممزّقة',
              'لا تستخدم الأجهزة بيد مبلّلة',
              'لا تُثقّل مقبساً واحداً بأجهزة كثيرة',
            ],
            explanation_ar: 'أهم قواعد السلامة: مقابس ← أسلاك ممزّقة ← يد جافة ← لا إثقال.',
          },
          {
            type: 'true_false',
            image_url: I.e18,
            question_ar: '🔍 انظر إلى الصورة: يمكن استخدام الجهاز الكهربائي بيدٍ مبلّلة بأمان.',
            correct: 'false',
            explanation_ar: 'الماء موصّل للكهرباء! استخدام الأجهزة بأيدٍ مبللة يُعرّض الشخص لصدمة كهربائية خطيرة.',
          },
          {
            type: 'matching',
            image_url: I.e11,
            question_ar: '🔍 انظر إلى صورة أجهزة منزلية: صِل كل جهاز بفائدته:',
            pairs_ar: [
              { left: 'الثلاجة', right: 'حفظ الطعام بارداً' },
              { left: 'التلفاز', right: 'الترفيه والمعلومات' },
              { left: 'الغسّالة', right: 'غسيل الملابس' },
              { left: 'المكيّف', right: 'تبريد وتلطيف الهواء' },
            ],
            explanation_ar: 'ثلاجة = تبريد طعام | تلفاز = ترفيه | غسّالة = غسيل | مكيّف = تبريد.',
          },
          {
            type: 'multiple_choice',
            image_url: I.e21,
            question_ar: '🔍 انظر إلى صورة الألواح الشمسية: الألواح الشمسية تُحوّل طاقة الشمس إلى:',
            options_ar: ['كهرباء', 'صوت', 'ماء', 'غاز'],
            correct: 0,
            explanation_ar: 'الألواح الشمسية (الخلايا الكهروضوئية) تُحوّل طاقة الشمس مباشرةً إلى طاقة كهربائية.',
            golden_rule_ar: '☀️ لوح شمسي = طاقة شمسية → كهرباء.',
          },
          {
            type: 'multiple_choice',
            image_url: I.e22,
            question_ar: '🔍 انظر إلى صورة توربينات الرياح: ما الطاقة التي تُنتجها توربينات الرياح؟',
            options_ar: ['طاقة كهربائية', 'طاقة حرارية', 'طاقة صوتية', 'طاقة ضوئية'],
            correct: 0,
            explanation_ar: 'توربينات الرياح تستخدم حركة الرياح لتدوير مولّدات تُنتج الكهرباء.',
          },
          {
            type: 'classify',
            image_url: I.e16,
            question_ar: '🔍 انظر إلى صورة لوحة إلكترونية: صنّف كل مكوّن: هل هو ضروري في الدائرة الكهربائية الأساسية؟',
            categories_ar: ['ضروري في الدائرة', 'ليس ضرورياً للتشغيل الأساسي'],
            items_ar: ['بطارية', 'سجادة', 'سلك توصيل', 'مفتاح', 'كتاب', 'مصباح'],
            correct_categories: [0, 1, 0, 0, 1, 0],
            explanation_ar: 'الدائرة الأساسية: بطارية + سلك + مفتاح + مصباح. السجادة والكتاب ليسا مكوّنَيْن.',
          },
          {
            type: 'true_false',
            image_url: I.e19,
            question_ar: '🔍 انظر إلى الصورة: يمكن لمس الأسلاك الكهربائية المكشوفة المتضررة بأمان.',
            correct: 'false',
            explanation_ar: 'لمس الأسلاك المكشوفة أو المتضررة يُسبّب صدمة كهربائية قد تكون مميتة. يجب الابتعاد عنها وإبلاغ متخصص.',
          },
          {
            type: 'multiple_choice',
            image_url: I.e24,
            question_ar: '🔍 انظر إلى صورة البرق: البرق مثال على:',
            options_ar: ['الكهرباء الساكنة تتفرّغ فجأة', 'الكهرباء المتحركة في الأسلاك', 'طاقة الشمس', 'طاقة الرياح'],
            correct: 0,
            explanation_ar: 'البرق هو تفريغ مفاجئ للكهرباء الساكنة المتراكمة في السحب.',
            golden_rule_ar: '🌩️ البرق = تفريغ الكهرباء الساكنة.',
          },
          {
            type: 'multiple_choice',
            image_url: I.e12,
            question_ar: '🔍 انظر إلى صورة الغسّالة: الغسّالة الكهربائية تُحوّل الكهرباء بشكل رئيسي إلى:',
            options_ar: ['حركة ميكانيكية', 'ضوء', 'صوت فقط', 'غاز'],
            correct: 0,
            explanation_ar: 'الغسّالة تُحوّل الكهرباء إلى حركة ميكانيكية (دوران الأسطوانة) لتنظيف الملابس.',
          },
          {
            type: 'ordering',
            image_url: I.e07,
            question_ar: '🔍 انظر إلى صورة أسلاك كهربائية: رتّب مسار التيار الكهربائي في دائرة بسيطة:',
            items_ar: [
              'البطارية تُولّد التيار',
              'التيار يمرّ عبر السلك الأول',
              'يصل إلى المفتاح المغلق',
              'يمرّ عبر المصباح فيُضيء',
              'يعود عبر السلك الثاني للبطارية',
            ],
            explanation_ar: 'بطارية ← سلك ← مفتاح ← مصباح ← سلك ← بطارية (دائرة مغلقة).',
          },
          {
            type: 'classify',
            image_url: I.e13,
            question_ar: '🔍 انظر إلى صورة مروحة سقف: صنّف كل جهاز حسب الطاقة الناتجة:',
            categories_ar: ['يُنتج حركة', 'يُنتج حرارة', 'يُنتج ضوءاً'],
            items_ar: ['مروحة', 'مصطبة تسخين (سخان)', 'مصباح إضاءة', 'غسّالة', 'شوّاية كهربائية', 'مصباح LED'],
            correct_categories: [0, 1, 2, 0, 1, 2],
            explanation_ar: 'حركة: مروحة + غسّالة. حرارة: سخان + شوّاية. ضوء: مصباح + LED.',
          },
          {
            type: 'true_false',
            image_url: I.e03,
            question_ar: '🔍 انظر إلى صورة بطارية هاتف: البطارية الفارغة تستمر في تشغيل الأجهزة بكفاءة.',
            correct: 'false',
            explanation_ar: 'البطارية الفارغة لا تحتوي على طاقة كافية لتشغيل الأجهزة. يجب شحنها أو استبدالها.',
          },
          {
            type: 'multiple_choice',
            image_url: I.e20,
            question_ar: '🔍 انظر إلى صورة مقبس كهربائي مثقّل: ما الخطر من توصيل أجهزة كثيرة في مقبس واحد؟',
            options_ar: ['زيادة الحمل قد تُسبّب حريقاً', 'الأجهزة تعمل بشكل أسرع', 'توفير الكهرباء', 'لا ضرر من ذلك'],
            correct: 0,
            explanation_ar: 'زيادة الحمل على مقبس واحد تُسخّن الأسلاك وقد تُسبّب حريقاً. يجب توزيع الأجهزة على مقابس متعددة.',
            golden_rule_ar: '🔥 إثقال المقبس = خطر حريق.',
          },
        ],
      },

      /* ══════════════════════════════════════
         القياس والأدوات العلمية  (18 سؤال)
      ══════════════════════════════════════ */
      {
        id: 'measurement',
        title_ar: 'القياس والأدوات العلمية',
        title_en: 'Measurement & Scientific Tools',
        questions: [
          {
            type: 'multiple_choice',
            image_url: I.m01,
            question_ar: '🔍 انظر إلى الصورة: هذه الأداة تقيس درجة الحرارة. ما اسمها؟',
            options_ar: ['ميزان الحرارة (ثرموميتر)', 'الميزان الزنبركي', 'المسطرة', 'ساعة الإيقاف'],
            correct: 0,
            explanation_ar: 'ميزان الحرارة يُستخدم لقياس درجة حرارة الأجسام والسوائل والهواء. وحدته الدرجة سيلسيوس (°س).',
            golden_rule_ar: '🌡️ ميزان الحرارة = يقيس درجة الحرارة.',
          },
          {
            type: 'matching',
            image_url: I.m10,
            question_ar: '🔍 انظر إلى صورة أدوات العلوم: صِل كل أداة بما تقيسه:',
            pairs_ar: [
              { left: 'ميزان الحرارة', right: 'درجة الحرارة (°س)' },
              { left: 'المسطرة', right: 'الطول (سم / م)' },
              { left: 'الميزان ذو الكفتين', right: 'الكتلة (جرام / كجم)' },
              { left: 'المخبار المدرّج', right: 'حجم السوائل (مل / لتر)' },
            ],
            explanation_ar: 'ثرموميتر = حرارة | مسطرة = طول | ميزان كفتين = كتلة | مخبار = حجم.',
          },
          {
            type: 'multiple_choice',
            image_url: I.m02,
            question_ar: '🔍 انظر إلى صورة المسطرة: الوحدة الأساسية لقياس الطول في النظام الدولي هي:',
            options_ar: ['المتر (م)', 'الكيلوجرام', 'الثانية', 'الدرجة'],
            correct: 0,
            explanation_ar: 'الوحدة الأساسية للطول هي المتر (م). الكيلومتر = 1000 م، السنتيمتر = 0.01 م.',
            golden_rule_ar: '📏 وحدة الطول = المتر (م).',
          },
          {
            type: 'multiple_choice',
            image_url: I.m03,
            question_ar: '🔍 انظر إلى صورة الميزان: وحدة قياس الكتلة هي:',
            options_ar: ['الكيلوجرام (كجم) أو الجرام (ج)', 'المتر', 'الثانية', 'النيوتن فقط'],
            correct: 0,
            explanation_ar: 'الكتلة تُقاس بالكيلوجرام أو الجرام. النيوتن هو وحدة الوزن (القوة) وليس الكتلة.',
            golden_rule_ar: '⚖️ الكتلة = كجم أو ج.',
          },
          {
            type: 'multiple_choice',
            image_url: I.m04,
            question_ar: '🔍 انظر إلى صورة كوب قياس: وحدة قياس حجم السوائل هي:',
            options_ar: ['الملليلتر (مل) أو اللتر (ل)', 'الجرام', 'المتر المربع', 'الدرجة المئوية'],
            correct: 0,
            explanation_ar: 'حجم السوائل يُقاس بالملليلتر (مل) أو اللتر (ل). 1 لتر = 1000 مل.',
            golden_rule_ar: '🥤 حجم السوائل = مل أو لتر.',
          },
          {
            type: 'true_false',
            image_url: I.m05,
            question_ar: '🔍 انظر إلى صورة ساعة الإيقاف: تُستخدم ساعة الإيقاف لقياس الزمن بدقة.',
            correct: 'true',
            explanation_ar: 'ساعة الإيقاف أداة دقيقة لقياس الزمن بالثواني والدقائق. تُستخدم في التجارب والرياضة.',
          },
          {
            type: 'classify',
            image_url: I.m11,
            question_ar: '🔍 انظر إلى صورة المخبار: صنّف كل أداة حسب ما تقيسه:',
            categories_ar: ['يقيس الطول', 'يقيس الكتلة', 'يقيس الحجم'],
            items_ar: ['المسطرة', 'الميزان ذو الكفتين', 'المخبار المدرّج', 'الشريط المتري', 'الميزان الرقمي', 'كوب القياس'],
            correct_categories: [0, 1, 2, 0, 1, 2],
            explanation_ar: 'طول: مسطرة + شريط. كتلة: ميزان كفتين + رقمي. حجم: مخبار + كوب قياس.',
          },
          {
            type: 'multiple_choice',
            image_url: I.m06,
            question_ar: '🔍 انظر إلى صورة المجهر: المجهر أداة علمية تُستخدم لـ:',
            options_ar: ['تكبير صور الأجسام الصغيرة جداً', 'قياس درجة الحرارة', 'قياس الطول', 'تسجيل الصوت'],
            correct: 0,
            explanation_ar: 'المجهر يُكبّر صور الأجسام الصغيرة جداً التي لا يمكن رؤيتها بالعين المجردة.',
            golden_rule_ar: '🔬 المجهر = يُكبّر الأجسام الصغيرة جداً.',
          },
          {
            type: 'multiple_choice',
            image_url: I.m07,
            question_ar: '🔍 انظر إلى صورة العدسة المكبّرة: الفرق بين العدسة المكبّرة والمجهر هو:',
            options_ar: ['المجهر يُكبّر أكثر من العدسة المكبّرة', 'العدسة أقوى من المجهر', 'لا فرق بينهما', 'العدسة تقيس الطول'],
            correct: 0,
            explanation_ar: 'المجهر يُكبّر آلاف المرات، بينما العدسة المكبّرة تُكبّر مرات قليلة فقط.',
          },
          {
            type: 'true_false',
            image_url: I.m12,
            question_ar: '🔍 انظر إلى صورة الميزان الزنبركي: الميزان الزنبركي يقيس الوزن بوحدة النيوتن.',
            correct: 'true',
            explanation_ar: 'الميزان الزنبركي (الزنبرك) يقيس قوة الجذب الأرضي للجسم (الوزن) بوحدة النيوتن. كل 1 كجم ≈ 10 نيوتن.',
          },
          {
            type: 'multiple_choice',
            image_url: I.m13,
            question_ar: '🔍 انظر إلى صورة طفل يقيس طوله: ما الأداة الأنسب لقياس طول الإنسان؟',
            options_ar: ['الشريط المتري أو مسطرة الطول', 'المخبار المدرّج', 'ميزان الحرارة', 'ساعة الإيقاف'],
            correct: 0,
            explanation_ar: 'يُستخدم الشريط المتري أو مسطرة الطول لقياس طول الإنسان بالسنتيمتر أو المتر.',
          },
          {
            type: 'multiple_choice',
            image_url: I.m14,
            question_ar: '🔍 انظر إلى صورة دراجة هوائية: أحمد يقطع 100م في 50 ثانية. ما سرعته؟',
            options_ar: ['2 م/ث', '50 م/ث', '100 م/ث', '0.5 م/ث'],
            correct: 0,
            explanation_ar: 'السرعة = المسافة ÷ الزمن = 100 ÷ 50 = 2 م/ث.',
            golden_rule_ar: '🚴 السرعة = المسافة ÷ الزمن.',
          },
          {
            type: 'ordering',
            image_url: I.m03,
            question_ar: '🔍 انظر إلى صورة الميزان: رتّب خطوات قياس كتلة شيء بالميزان ذي الكفتين:',
            items_ar: [
              'ضع الجسم في إحدى الكفتين',
              'أضف أوزاناً معيارية في الكفة الأخرى',
              'استمر حتى تتزن الكفتان',
              'اجمع الأوزان المعيارية',
              'الناتج هو كتلة الجسم',
            ],
            explanation_ar: 'ضع جسم ← أضف أوزان ← حتى التوازن ← اجمع الأوزان = الكتلة.',
          },
          {
            type: 'multiple_choice',
            image_url: I.m08,
            question_ar: '🔍 انظر إلى صورة الآلة الحاسبة: ما الفائدة من استخدام الآلة الحاسبة في التجارب العلمية؟',
            options_ar: ['إجراء العمليات الحسابية بسرعة ودقة', 'قياس الحرارة', 'تكبير الصور', 'قياس الطول'],
            correct: 0,
            explanation_ar: 'الآلة الحاسبة تُساعد على إجراء العمليات الحسابية (جمع، طرح، ضرب، قسمة) بسرعة ودقة.',
          },
          {
            type: 'classify',
            image_url: I.m09,
            question_ar: '🔍 انظر إلى صورة الكاميرا: صنّف هذه الأدوات: هل تستخدمها في التجارب العلمية؟',
            categories_ar: ['تُستخدم في التجارب العلمية', 'لا تُستخدم عادةً في التجارب'],
            items_ar: ['المجهر', 'سيارة اللعب', 'الميزان', 'الدمية', 'مقياس الحرارة', 'المسطرة'],
            correct_categories: [0, 1, 0, 1, 0, 0],
            explanation_ar: 'أدوات علمية: مجهر + ميزان + مقياس حرارة + مسطرة. ليست أدوات علمية: لعب.',
          },
          {
            type: 'true_false',
            image_url: I.m15,
            question_ar: '🔍 انظر إلى صورة زجاجة مياه: زجاجة الماء سعتها 2 لتر تساوي 2000 مل.',
            correct: 'true',
            explanation_ar: '1 لتر = 1000 مل. إذن 2 لتر = 2000 مل. صحيح تماماً.',
          },
          {
            type: 'multiple_choice',
            image_url: I.m01,
            question_ar: '🔍 انظر إلى صورة مقياس الحرارة: درجة حرارة غرفة معتدلة تقريباً:',
            options_ar: ['25°س', '100°س', '0°س', '50°س'],
            correct: 0,
            explanation_ar: 'درجة حرارة الغرفة المعتدلة تتراوح بين 20-26°س. 100°س = نقطة غليان الماء. 0°س = نقطة تجمّد الماء.',
          },
          {
            type: 'matching',
            image_url: I.m10,
            question_ar: '🔍 انظر إلى صورة مختبر علمي: صِل كل وحدة قياس بما تقيسه:',
            pairs_ar: [
              { left: 'المتر (م)', right: 'الطول' },
              { left: 'الكيلوجرام (كجم)', right: 'الكتلة' },
              { left: 'اللتر (ل)', right: 'حجم السائل' },
              { left: 'الدرجة المئوية (°س)', right: 'الحرارة' },
            ],
            explanation_ar: 'م = طول | كجم = كتلة | ل = حجم | °س = حرارة.',
          },
        ],
      },
    ],
  },
];

export const SCIENCE_G3_S2_SOUND_LIGHT_UNITS = [...SCIENCE_G3_S2_SOUND_LIGHT_BASE, ...SCIENCE_G3_S2_EXTRA_UNITS];

export const TOTAL_UNITS_SCI_G3S2_SL = SCIENCE_G3_S2_SOUND_LIGHT_UNITS.length;
export const TOTAL_LESSONS_SCI_G3S2_SL = SCIENCE_G3_S2_SOUND_LIGHT_UNITS.reduce((s, u) => s + u.lessons.length, 0);
export const TOTAL_QUESTIONS_SCI_G3S2_SL = SCIENCE_G3_S2_SOUND_LIGHT_UNITS.reduce(
  (s, u) => s + u.lessons.reduce((ls, l) => ls + l.questions.length, 0), 0
);