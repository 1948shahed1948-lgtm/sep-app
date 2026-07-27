import React from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen, Globe, Brain, ClipboardCheck, Gauge, Compass, Trophy,
  Sparkles, Layers, Presentation, Puzzle, Baby, TrendingUp, Target,
  Award, ShieldCheck, BarChart3, Bell, CreditCard, Users, Activity,
  MessageCircle, Database, Lock, Zap, GraduationCap, Library,
  CheckCircle2, Server, Smartphone, Languages, Clock, MapPin, School,
  Infinity as InfinityIcon, FileCheck, Share2
} from 'lucide-react';

/**
 * PlatformShowcase — صفحة توثيق احترافية تعرض كل محتويات المنصة
 * ومميزاتها مع شرح عربي لكل قسم، مُصمّمة للتصوير والتوثيق
 * لاستخدامها في تقديم رخصة برامج التعليم الإلكتروني (FutureX).
 * كل قسم يحتوي صورة + بطاقة شرح بتنسيق جاهز للنشر على وسائل التواصل.
 */
const SECTIONS = [
  {
    id: 'overview',
    icon: GraduationCap,
    color: 'bg-emerald-600',
    title: 'نظرة عامة على المنصة',
    desc: 'بوابة الأسئلة بلس — منظومة تعليمية سعودية شاملة للمنهجين الوطني والدولي، تقدم بنوك أسئلة تفاعلية موثّقة، اختبارات معيارية وتشخيصية، تتبع دقيق للمهارات، ومساعد ذكاء اصطناعي — لجميع الصفوف من الروضة حتى الثالث ثانوي.',
    points: [
      'منصة ثنائية اللغة (عربي/إنجليزي) باتجاه RTL كامل',
      'متاحة على الويب والتطبيقات الذكية (أندرويد)',
      'محاذية لمناهج وزارة التعليم السعودية المعتمدة',
      'نظام تجربة مجانية واشتراك مرن عبر Moyasar وRevenueCat'
    ],
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/c09398d22_mmmmm.png',
    stats: [
      { num: '١٢', label: 'صف دراسي' },
      { num: '٢', label: 'نظام تعليمي' },
      { num: '+٥٠٠', label: 'مدرسة شريكة' },
      { num: '٢٤/٧', label: 'متاح دائماً' }
    ]
  },
  {
    id: 'national-banks',
    icon: BookOpen,
    color: 'bg-blue-600',
    title: 'بنوك الأسئلة — المنهج الوطني',
    desc: 'بنوك أسئلة تفاعلية لكل المواد والصفوف (لغتي، رياضيات، علوم، اجتماعيات، إسلامية، حاسب، فنون، مهارات حياتية) مرتبة حسب الوحدات والدروس الفعلية من مناهج وزارة التعليم، مع أنواع أسئلة متنوعة: اختيار من متعدد، صح/خطأ، ملء الفراغ، مطابقة، تصنيف، ترتيب، وحساب.',
    points: [
      'ترتيب دقيق حسب الوحدات والدروس والفصول الرسمية',
      '٨ أنواع أسئلة لكل درس رياضيات (٤ تفاعلية + ٤ كتابية)',
      'صور ورسوم توضيحية مطابقة للكتاب المدرسي',
      'حلول خطوة بخطوة على السبورة التفاعلية وقاعدة ذهبية'
    ],
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'international',
    icon: Globe,
    color: 'bg-indigo-600',
    title: 'المنهج الدولي',
    desc: 'مناهج دولية بمعايير عالمية متقدمة، تشمل بنوك أسئلة معيارية دولية جاهزة وقابلية للتوسعة حسب المناهج العالمية المعتمدة.',
    points: [
      'بنية اختبارات معيارية دولية جاهزة',
      'قابلية التوسعة لمختلف المناهج العالمية',
      'دعم كامل للغة الإنجليزية',
      'معايير تقييم عالمية متقدمة'
    ],
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'aptitude',
    icon: Brain,
    color: 'bg-orange-600',
    title: 'اختبارات القدرات والتحصيلي',
    desc: 'تدريب شامل على اختبارات القدرات (اللفظي والكمي) والتحصيلي للجامعات، مع أكثر من ٢٠٠ سؤال واقعي محفوظ من اختبارات قياس، موزّعة على المهارات والدروس مع شرح تفصيلي لكل إجابة.',
    points: [
      'قسم لفظي: استيعاب، مفردات، تناظر، إكمال، أخطاء',
      'قسم كمي: حساب، جبر، هندسة، إحصاء، مقارنات',
      '٢٠٠+ سؤال واقعي محفوظ من اختبارات قياس',
      'تحليل أداء حسب المهارة وتقرير نقاط الضعف'
    ],
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/6ce5db689_generated_image.png'
  },
  {
    id: 'standardized',
    icon: ClipboardCheck,
    color: 'bg-rose-600',
    title: 'الاختبارات المعيارية',
    desc: 'ثلاثة أنواع من الاختبارات المعيارية لكل المراحل: التشخيصية (تحديد المستوى ونقاط الضعف)، محكية المرجع (قياس إتقان مهارة بمقارنة بمحك ثابت)، والتكيفية (أسئلة تتكيف مع مستوى الطالب وتصبح أسهل عند الخطأ).',
    points: [
      'تشخيصية: تحديد دقيق لنقاط الضعف لكل مهارة',
      'محكية المرجع: قياس الإتقان مقابل معيار ثابت',
      'تكيفية: صعوبة تتكيف مع أداء الطالب لحظيًا',
      'أسئلة تفاعلية: مطابقة، ترتيب، تصنيف'
    ],
    image: 'https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'curriculum-life',
    icon: Compass,
    color: 'bg-teal-600',
    title: 'المنهج في الحياة',
    desc: 'ربط الدروس بمشاريع رؤية ٢٠٣٠ العملاقة (نيوم، ذا لاين، البحر الأحمر، وادي الصناعة، القدية، روسنم) ليبصر الطالب أين تُستخدم مفاهيمه الدراسية في الواقع، مع شرح كيف يُطبَّق المفهوم وهدف رؤية ٢٠٣٠ المرتبط.',
    points: [
      '٦ مشاريع رؤية ٢٠٣٠ مع شرح التطبيق',
      'سؤال تفاعلي: أين نستخدم هذا الدرس في حياتنا؟',
      'ربط المفهوم الدراسي بهدف الاستدامة',
      'تغطية جميع المواد والمراحل'
    ],
    image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'genius',
    icon: Trophy,
    color: 'bg-yellow-600',
    title: 'تحدي العبقري',
    desc: 'بنك أسئلة عالية الصعوبة لكل المراحل، كل سؤال يأتي مع شرح تفصيلي للحل، تحليل الخطأ الشائع الذي يقع فيه الطلاب ولماذا، وقاعدة ذهبية تلخّص المفتاح الرئيسي للحل.',
    points: [
      'أسئلة عالية الصعوبة لكل صف ومادة',
      'شرح تفصيلي خطوة بخطوة',
      'تحليل الخطأ الشائع وأسباب الوقوع فيه',
      'قاعدة ذهبية تلخص مفتاح الحل'
    ],
    image: 'https://images.unsplash.com/photo-1551582042-6e8e4f0e3c2d?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'neom',
    icon: Sparkles,
    color: 'bg-teal-700',
    title: 'جيل نيوم',
    desc: 'ربط المنهج بمشروع نيوم ورؤية ٢٠٣٠: طاقة متجددة، ذكاء اصطناعي، تخطيط حضري، وتعلّم بالمشاريع — لربط التعلم النظري بالتحولات المستقبلية للمملكة.',
    points: [
      'طاقة متجددة واستدامة بيئية',
      'ذكاء اصطناعي ومدن ذكية',
      'تخطيط حضري ومجتمعات المستقبل',
      'تعلّم قائم على المشاريع'
    ],
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/3735f0df6_generated_image.png'
  },
  {
    id: 'bloom',
    icon: Layers,
    color: 'bg-purple-600',
    title: 'البنوك المعرفية (هرم بلوم)',
    desc: 'أسئلة مصنّفة بمستويات هرم بلوم الستة (التذكّر، الفهم، التطبيق، التحليل، التقييم، الإبداع) لكل صف، مع رسوم توضيحية مطابقة، لتنمية التفكير عالي الرتبة وليس الحفظ فقط.',
    points: [
      '٦ مستويات تفكير من التذكّر إلى الإبداع',
      'تصنيف دقيق لكل سؤال حسب المستوى المعرفي',
      'رسوم توضيحية مطابقة لكل سؤال',
      'بنوك منفصلة: رياضيات، علوم، اجتماعيات، إسلامية، لغة عربية'
    ],
    image: 'https://images.unsplash.com/photo-1516321318423-f57f29b0e852?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'performance',
    icon: Presentation,
    color: 'bg-violet-600',
    title: 'الاختبارات الأدائية',
    desc: 'مهام واقعية تقيس ما يستطيع الطالب فعله فعليًا — مُقيَّمة بسلم تقدير (Rubric) بالنقاط لا بصح/خطأ، لقياس الأداء الكتابي والعرضي والتطبيقي.',
    points: [
      'مهام واقعية لا أسئلة اختيارية',
      'تقييم بسلم تقدير (Rubric) بالنقاط',
      'قياس الأداء الكتابي والعرضي والتطبيقي',
      'معايير واضحة لكل مستوى أداء'
    ],
    image: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'play-learn',
    icon: Puzzle,
    color: 'bg-amber-600',
    title: 'التعلّم باللعب',
    desc: 'ألعاب تفاعلية تعليمية للروضة والصفوف الأولية: العد، المطابقة، الذاكرة، البحث عن الفروق، المتاهات، لعبة الثعبان، الثقب والحفر، نرد سايمون — تعلّم ممتع مع نجوم ومفاجآت.',
    points: [
      '١٢+ لعبة تعليمية تفاعلية',
      'تنمية العد والمطابقة والذاكرة',
      'مناسبة للروضة والصفوف الأولية',
      'تحفيز بالنجوم والمكافآت'
    ],
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/037abc888_generated_image.png'
  },
  {
    id: 'preschool',
    icon: Baby,
    color: 'bg-pink-600',
    title: 'التعلّم قبل المدرسة',
    desc: 'بنك ١٠٠ سؤال للروضة — كلها بالصور والحركة: عد، ألوان، أشكال، حيوانات، حروف، أكبر/أصغر، والمختلف — لتأسيس الطفل قبل دخول المدرسة.',
    points: [
      '١٠٠ سؤال بالصور والحركة',
      'العد والألوان والأشكال والحيوانات',
      'الحروف وأكبر/أصغر والمختلف',
      'تأسيس كامل قبل المدرسة'
    ],
    image: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'progress',
    icon: TrendingUp,
    color: 'bg-blue-700',
    title: 'تتبّع التقدّم والمهارات',
    desc: 'نظام تتبع دقيق يُسجّل كل محاولة لكل مهارة، يحسب نسبة الإتقان، يحدد المهارات المُتقَنة ونقاط الضعف، ويعرضها في خرائط بصرية (Treemap) ورسوم بيانية لكل مادة ودرس.',
    points: [
      'تتبع كل محاولة لكل مهارة ومادة',
      'حساب نسبة الإتقان وتمييز المهارات المُتقَنة',
      'خرائط بصرية (Treemap) ورسم بياني لكل مادة',
      'توصيات ذكية للتركيز على نقاط الضعف'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'mistake-journal',
    icon: Target,
    color: 'bg-red-600',
    title: 'دفتر الأخطاء والتكرار المتباعد',
    desc: 'كل خطأ يُسجّل تلقائيًا في دفتر الأخطاء مع شرح الإجابة الصحيحة، ثم يُعاد عرضه وفق نظام التكرار المتباعد (Spaced Repetition) في أوقات مدروسة لتثبيت الفهم وعدم نسيان الخطأ.',
    points: [
      'تسجيل تلقائي لكل خطأ مع الشرح',
      'إعادة العرض وفق التكرار المتباعد',
      'متابعة حالة الحل (محلول/غير محلول)',
      'عدد المراجعات وتاريخ المراجعة التالية'
    ],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'dahir',
    icon: MessageCircle,
    color: 'bg-cyan-600',
    title: 'مساعد الذكاء الاصطناعي (داهر)',
    desc: 'مساعد ذكي تفاعلي يجيب عن استفسارات الطلاب حول المنصة والمحتوى التعليمي، يشرح المفاهيم، ويوجّه الطلاب نحو الدروس والمصادر المناسبة — يعمل بالعربية الكاملة.',
    points: [
      'إجابات فورية بالعربية الكاملة',
      'شرح المفاهيم والتوجيه للمصادر',
      'مدعوم بنموذج ذكاء اصطناعي متقدم',
      'متاح داخل التطبيق مباشرة'
    ],
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'abqari',
    icon: Database,
    color: 'bg-slate-700',
    title: 'ذاكرة المنصة (أبقري)',
    desc: 'بطاقة ذاكرة ثابتة على الصفحة الرئيسية تعرض هوية المنصة ورؤيتها ورسالتها وإحصاءاتها للزوار الجدد، لتقديم انطباع أول احترافي وموثوق.',
    points: [
      'عرض هوية المنصة ورؤيتها ورسالتها',
      'إحصاءات فورية للزوار',
      'واجهة ثابتة احترافية'
    ],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'whatsapp-reports',
    icon: Bell,
    color: 'bg-green-600',
    title: 'تقارير WhatsApp الأسبوعية',
    desc: 'إرسال تقارير أسبوعية آلية لأولياء الأمور عبر WhatsApp تتضمن تقدّم الطالب، نسبة الإتقان، نقاط الضعف، والتوصيات — لتعزيز التواصل بين المنزل والمنصة.',
    points: [
      'تقارير أسبوعية آلية لأولياء الأمور',
      'نسبة الإتقان ونقاط الضعف والتوصيات',
      'إرسال عبر WhatsApp Business API',
      'ربط رقم ولي الأمر في الملف'
    ],
    image: 'https://images.unsplash.com/photo-1611606063065-ee79c6c0b5b0?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'subscriptions',
    icon: CreditCard,
    color: 'bg-blue-800',
    title: 'نظام الاشتراكات والمدفوعات',
    desc: 'نظام اشتراك مرن يدعم الدفع عبر Moyasar للويب (مدى، Visa، Mastercard، Amex، STC Pay) والدفع داخل التطبيق عبر RevenueCat (Google Play Billing)، مع تجربة مجانية يومين بالجهاز والصفوف ١-٣ مجانية.',
    points: [
      'دفع ويب عبر Moyasar (مدى، Visa، Mastercard، Amex، STC Pay)',
      'دفع تطبيق عبر RevenueCat وGoogle Play Billing',
      'تجربة مجانية يومين بالجهاز',
      'الصفوف ١-٣ مجانية بالكامل'
    ],
    image: 'https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'admin',
    icon: Users,
    color: 'bg-slate-800',
    title: 'لوحة تحكم المشرف',
    desc: 'لوحة إدارة شاملة محمية برمز دخول وصلاحية مشرف، تتيح إدارة الطلاب وأولياء الأمور، متابعة النشاط اللحظي، إرسال رسائل جماعية، إدارة المهارات والتمارين، توليد المحتوى بالذكاء الاصطناعي، ومتابعة الاشتراكات والإيرادات.',
    points: [
      'إدارة الطلاب والبحث والتصفية حسب الصف',
      'متابعة النشاط اللحظي (realtime)',
      'إرسال رسائل WhatsApp جماعية وفردية',
      'توليد المحتوى بالذكاء الاصطناعي ومتابعة الاشتراكات'
    ],
    image: 'https://images.unsplash.com/photo-1553413077-190dd3058718?auto=format&fit=crop&w=1200&q=70'
  },
  {
    id: 'modern-assessment',
    icon: BarChart3,
    color: 'bg-indigo-700',
    title: 'القياس الحديث والتغذية الراجعة',
    desc: 'مواكبة التعليم الحديث عبر توفير تغذية راجعة فورية ومفصّلة لكل سؤال، تصنيف الأسئلة وفق مستويات تصنيف بلوم المعرفية، وتحليل النتائج وفق النماذج الحديثة بالقياس — لقياس التفكير عالي الرتبة وتتبع نمو الطالب بدقة علمية.',
    points: [
      'تغذية راجعة فورية مع شرح كل إجابة وتحليل الخطأ',
      'تصنيف الأسئلة وفق مستويات بلوم الستة',
      'تحليل النتائج وفق نماذج القياس الحديثة',
      'تتبع نمو الطالب وتحديد نقاط الضعف بدقة'
    ],
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/eb99c7aec_905a37a01_generated_image.png'
  },
  {
    id: 'technical',
    icon: ShieldCheck,
    color: 'bg-emerald-700',
    title: 'المعايير التقنية والجاهزية',
    desc: 'منصة تقنية جاهزة بالكامل: استضافة سحابية مستقرة، قاعدة بيانات مع تزامن لحظي (realtime)، تصميم متجاوب مع جميع الأجهزة، دعم ثنائي اللغة، حماية صفوف البيانات (Row-Level Security)، وتطبيق جوال أصلي.',
    points: [
      'استضافة سحابية مستقرة مع تزامن لحظي',
      'تصميم متجاوب (موبايل + ديسكتوب)',
      'حماية بيانات بمستوى الصف (RLS)',
      'تطبيق أندرويد أصلي عبر Capacitor'
    ],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=70'
  }
];

function ShowcaseCard({ section, index }) {
  const Icon = section.icon;
  return (
    <section
      id={section.id}
      className="scroll-mt-20 rounded-3xl bg-white border border-slate-100 shadow-sm overflow-hidden"
    >
      {/* Social-media style image header */}
      <div className="relative aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
        {section.image && (
          <img
            src={section.image}
            alt={section.title}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        {/* Watermark badge */}
        <div className="absolute top-3 start-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-sm">
          <span className="text-[10px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#0C1738] to-[#3E57A4]">بوابة الأسئلة بلس</span>
        </div>
        {/* Number badge */}
        <div className={`absolute top-3 end-3 ${section.color} text-white text-xs font-bold w-8 h-8 rounded-full flex items-center justify-center shadow-md`}>
          {String(index + 1).padStart(2, '0')}
        </div>
        {/* Title overlay */}
        <div className="absolute bottom-0 inset-x-0 p-4 sm:p-5">
          <div className="flex items-center gap-2.5">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
              <Icon className="w-5 h-5 text-white" />
            </div>
            <h2 className="font-heading font-bold text-white text-lg sm:text-xl drop-shadow-md">{section.title}</h2>
          </div>
        </div>
      </div>

      {/* Explanation card */}
      <div className="p-5 sm:p-6 space-y-4">
        <p className="text-slate-700 leading-relaxed text-sm sm:text-base">{section.desc}</p>

        <ul className="grid sm:grid-cols-2 gap-2.5">
          {section.points.map((p, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600 bg-slate-50 rounded-xl px-3 py-2.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
              <span>{p}</span>
            </li>
          ))}
        </ul>

        {section.stats && (
          <div className="grid grid-cols-4 gap-3 pt-2">
            {section.stats.map((s, i) => (
              <div key={i} className="text-center bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl py-3 px-1 border border-slate-100">
                <p className="text-xl sm:text-2xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#263D84] to-[#3E57A4]">{s.num}</p>
                <p className="text-[11px] sm:text-xs text-slate-500 mt-0.5">{s.label}</p>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default function PlatformShowcase() {
  return (
    <div className="min-h-screen bg-[#faf8f0] pb-16">
      {/* Cover banner */}
      <div className="bg-gradient-to-br from-[#0C1738] to-[#1b2c5e] text-white px-6 py-10 sm:py-14">
        <div className="max-w-5xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-white/10 mb-2">
            <GraduationCap className="w-8 h-8 text-amber-400" />
          </div>
          <div className="text-3xl">🇸🇦</div>
          <h1 className="font-heading font-extrabold text-2xl sm:text-3xl">
            معرض المنصة — بوابة الأسئلة بلس
          </h1>
          <p className="text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            توثيق احترافي شامل لكل محتويات ومميزات المنصة التعليمية،
            مُصمّم للتقديم على رخصة برامج التعليم الإلكتروني — هيئة تقويم التعليم والتدريب
          </p>
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 text-xs font-medium">
            <FileCheck className="w-3.5 h-3.5 text-amber-400" />
            توثيق مطابق لشروط FutureX
          </div>
        </div>
      </div>

      {/* Quick compliance banner */}
      <div className="max-w-5xl mx-auto px-4 -mt-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { icon: Server, label: 'الجاهزية الفنية', color: 'text-emerald-600', bg: 'bg-emerald-50' },
            { icon: ShieldCheck, label: 'الموثوقية والجودة', color: 'text-blue-600', bg: 'bg-blue-50' },
            { icon: Zap, label: 'الابتكار والتطوير', color: 'text-amber-600', bg: 'bg-amber-50' },
            { icon: BarChart3, label: 'إدارة الموارد', color: 'text-purple-600', bg: 'bg-purple-50' }
          ].map((c, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-3 flex flex-col items-center gap-1.5 text-center">
              <div className={`w-9 h-9 rounded-xl ${c.bg} flex items-center justify-center`}>
                <c.icon className={`w-5 h-5 ${c.color}`} />
              </div>
              <p className="text-xs font-medium text-slate-700">{c.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Sections */}
      <div className="max-w-5xl mx-auto px-4 mt-10 space-y-6">
        {SECTIONS.map((s, i) => (
          <ShowcaseCard key={s.id} section={s} index={i} />
        ))}
      </div>

      {/* Footer */}
      <div className="max-w-5xl mx-auto px-4 mt-10">
        <div className="rounded-3xl bg-gradient-to-br from-emerald-600 to-emerald-800 text-white p-6 text-center">
          <ShieldCheck className="w-10 h-10 mx-auto text-amber-400 mb-3" />
          <h3 className="font-heading font-bold text-lg mb-2">المنصة جاهزة للتقديم</h3>
          <p className="text-white/80 text-sm leading-relaxed max-w-xl mx-auto">
            تلتزم بوابة الأسئلة بلس بضوابط تقديم التعليم الإلكتروني المعتمدة،
            وتلبي الشروط الأربعة لرخصة برامج FutureX: الجاهزية الفنية، الموثوقية، الابتكار، وإدارة الموارد.
          </p>
        </div>
        <div className="text-center mt-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
            <GraduationCap className="w-4 h-4" />
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}