import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Brain, Target, TrendingUp, Award, ArrowLeft, ArrowRight, Sparkles, CheckCircle, Globe, Library, Clock, MapPin, School, Infinity as InfinityIcon, ClipboardCheck, Compass, Trophy, Gauge, Layers, Presentation, Puzzle, Baby } from 'lucide-react';
import HeroQuickLinks from '@/components/home/HeroQuickLinks';
import TrackCard from '@/components/home/TrackCard';
import EducationalQuotes from '@/components/home/EducationalQuotes';
import BasicInfo from '@/components/home/BasicInfo';
import SaudiShowcase from '@/components/home/SaudiShowcase';
import SaudiSlideshow from '@/components/home/SaudiSlideshow';
import StudentGallery from '@/components/home/StudentGallery';
import MeasurementLabCard from '@/components/curriculum/MeasurementLabCard';
import HomeProgressSection from '@/components/home/HomeProgressSection';
import SubjectShowcaseCards from '@/components/home/SubjectShowcaseCards';
import ShowcaseBanner from '@/components/home/ShowcaseBanner';
import FeatureExplanation from '@/components/home/FeatureExplanation';
import AbqariMemoryCard from '@/components/home/AbqariMemoryCard';
import { features } from '@/lib/featuresData';
import PullToRefresh from '@/components/PullToRefresh';

const STUDENT_HERO_URL = "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/cb0e6499f_generated_image.png";
const HERO_BANNER_URL = "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/f0f1c46d2_image.png";

const FeatureCard = ({ icon: Icon, titleAr, titleEn, descAr, descEn, summaryAr, summaryEn, color, image, delay, lang, onClick, Arrow }) => {
  const isRTL = lang === 'ar';
  const hasSummary = lang === 'ar' ? summaryAr : summaryEn;

  return (
    <motion.button
      type="button"
      onClick={onClick}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="group text-start relative overflow-hidden rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1 w-full flex flex-col"
    >
      <div className="relative h-32 overflow-hidden">
        {image && (
          <img
            src={image}
            alt={lang === 'ar' ? titleAr : titleEn}
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
        <div className={`absolute top-3 start-3 w-10 h-10 rounded-xl ${color} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
          <Icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="font-heading font-bold text-lg text-slate-900 mb-2">
          {lang === 'ar' ? titleAr : titleEn}
        </h3>
        <p className="text-sm text-slate-500 leading-relaxed">
          {lang === 'ar' ? descAr : descEn}
        </p>
        {hasSummary && (
          <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 group-hover:text-blue-700 transition-colors">
            {lang === 'ar' ? 'عرض الشرح' : 'Show explanation'}
            <Arrow className={`w-4 h-4 group-hover:translate-x-1 transition-transform ${isRTL ? 'group-hover:-translate-x-1' : ''}`} />
          </span>
        )}
      </div>
    </motion.button>
  );
};

export default function Home() {
  const { t, lang, isRTL } = useLang();
  const [user, setUser] = useState(null);
  const [selectedFeature, setSelectedFeature] = useState(null);
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    base44.auth.me().then(setUser).catch(() => {});
  }, []);

  const tracks = [
    {
      titleAr: "النظام الوطني",
      titleEn: "National Curriculum",
      descAr: "المنهج السعودي المعتمد لجميع المراحل",
      descEn: "Saudi approved curriculum for all stages",
      path: "/curriculum/national",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      icon: BookOpen,
      img: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/522002db5_generated_image.png"
    },
    {
      titleAr: "النظام الدولي",
      titleEn: "International Curriculum",
      descAr: "مناهج دولية بمعايير عالمية متقدمة",
      descEn: "International curricula with advanced global standards",
      path: "/curriculum/international",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
      icon: Globe,
      img: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/803c1a9e6_generated_image.png"
    },
    {
      titleAr: "اختبارات القدرات الجامعية",
      titleEn: "University Aptitude Tests",
      descAr: "تدريب شامل على القدرات والتحصيلي مع ٢٠٠ سؤال واقعي محفوظ من اختبارات قياس",
      descEn: "Comprehensive aptitude & achievement training with 200 stored realistic Qiyas questions",
      path: "/aptitude",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-600",
      icon: Brain,
      img: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/6ce5db689_generated_image.png"
    },
    {
      titleAr: "الاختبارات التشخيصية",
      titleEn: "Diagnostic Tests",
      descAr: "تحديد مستوى الطالب ونقاط الضعف بدقة لكل مرحلة",
      descEn: "Identify student level and weak areas precisely for each stage",
      path: "/standardized/diagnostic/grades",
      iconBg: "bg-rose-100",
      iconColor: "text-rose-600",
      icon: ClipboardCheck,
      img: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?auto=format&fit=crop&w=500&q=60"
    },
    {
      titleAr: "الاختبارات محكية المرجع",
      titleEn: "Criterion-Referenced Tests",
      descAr: "تقييمات تقيس إتقان مهارات محددة مسبقاً بمقارنة الأداء بمستوى ثابت (محك) دون مقارنة بالزملاء",
      descEn: "Assessments measuring mastery of predefined skills against a fixed standard, not against peers",
      path: "/standardized/criterion/grades",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      icon: ClipboardCheck,
      img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500&q=60"
    },
    {
      titleAr: "الاختبارات التكيفية",
      titleEn: "Adaptive Tests",
      descAr: "أسئلة تتكيف مع مستوى الطالب وتصبح أسهل عند الخطأ حتى يجيب بشكل صحيح",
      descEn: "Questions adapt to student level and get easier on mistakes until answered correctly",
      path: "/standardized/adaptive/grades",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-600",
      icon: Gauge,
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=500&q=60"
    },
    {
      titleAr: "الاختبارات المعيارية الدولية",
      titleEn: "International Standardized Tests",
      descAr: "بنية اختبارات معيارية دولية ومعلوماتها الأساسية (قالب جاهز)",
      descEn: "International standardized assessments structure & key information (ready template)",
      path: "/international-standardized",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      icon: Globe,
      img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=500&q=60"
    },
    {
      titleAr: "المنهج في الحياة",
      titleEn: "Curriculum in Real Life",
      descAr: "ربط الدروس بمشاريع رؤية 2030 (نيوم، ذا لاين، البحر الأحمر)",
      descEn: "Connecting lessons to Vision 2030 projects (NEOM, THE LINE, Red Sea)",
      path: "/curriculum-in-life",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-600",
      icon: Compass,
      img: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=500&q=60"
    },
    {
      titleAr: "تحدي العبقري",
      titleEn: "Genius Challenge",
      descAr: "أسئلة عالية الصعوبة مع شرح الخطأ الشائع والقاعدة الذهبية",
      descEn: "High-difficulty questions with common mistake analysis & golden rules",
      path: "/genius-challenge",
      iconBg: "bg-yellow-100",
      iconColor: "text-yellow-600",
      icon: Trophy,
      img: "https://images.unsplash.com/photo-1551582042-6e8e4f0e3c2d?auto=format&fit=crop&w=500&q=60"
    },
    {
      titleAr: "جيل نيوم",
      titleEn: "Generation NEOM",
      descAr: "ربط المنهج بمشروع نيوم ورؤية ٢٠٣٠: طاقة متجددة، ذكاء اصطناعي، تخطيط حضري، وتعلم بالمشاريع",
      descEn: "Linking curriculum to NEOM & Vision 2030: renewable energy, AI, urban planning & project-based learning",
      path: "/neom-curriculum",
      iconBg: "bg-teal-100",
      iconColor: "text-teal-600",
      icon: Sparkles,
      img: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/3735f0df6_generated_image.png"
    },
    {
      titleAr: "البنوك المعرفية",
      titleEn: "Cognitive Banks",
      descAr: "أسئلة مصنّفة بمستويات هرم بلوم لكل صف مع رسوم مطابقة — من التذكّر إلى الإبداع",
      descEn: "Bloom-taxonomy questions per grade with matching figures — from Remember to Create",
      path: "/bloom-pyramid",
      iconBg: "bg-indigo-100",
      iconColor: "text-indigo-600",
      icon: Layers,
      img: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=500&q=60"
    },
    {
      titleAr: "الاختبارات الأدائية",
      titleEn: "Performance-Based Assessments",
      descAr: "مهام واقعية تقيس ما يستطيع الطالب فعله — مُقيَّمة بسلم تقدير (Rubric) بالنقاط لا بصح/خطأ",
      descEn: "Real-world tasks measuring what students can do — scored with a point-based rubric, not right/wrong",
      path: "/performance-bank",
      iconBg: "bg-violet-100",
      iconColor: "text-violet-600",
      icon: Presentation,
      img: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=500&q=60"
    },
    {
      titleAr: "التعلم باللعب",
      titleEn: "Learning Through Play",
      descAr: "ألعاب تفاعلية للروضة والصف الأول: العد، المطابقة، الذاكرة — تعلم ممتع مع نجوم ومفاجآت",
      descEn: "Interactive games for Kindergarten & Grade 1: counting, matching, memory — fun learning with stars & surprises",
      path: "/play-learn",
      iconBg: "bg-amber-100",
      iconColor: "text-amber-600",
      icon: Puzzle,
      img: "https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/037abc888_generated_image.png"
    },
    {
      titleAr: "التعلم قبل المدرسة",
      titleEn: "Pre-School Learning",
      descAr: "بنك ١٠٠ سؤال للروضة — كلها بالصور والحركة: عد، ألوان، أشكال، حيوانات، حروف، أكبر/أصغر، والمختلف",
      descEn: "100-question kindergarten bank — all image & motion based: counting, colors, shapes, animals, letters, sizes & odd-one",
      path: "/preschool-bank",
      iconBg: "bg-pink-100",
      iconColor: "text-pink-600",
      icon: Baby,
      img: "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=500&q=60"
    }
  ];

  return (
    <>
      <PullToRefresh />
      <div className="space-y-20">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative overflow-hidden rounded-3xl transition-all duration-500"
      >
        <motion.img
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          src={HERO_BANNER_URL}
          alt={lang === 'ar' ? 'بنوك الأسئلة والاختبارات المعيارية السعودية' : 'Saudi Standardized Question Banks'}
          className="relative w-full object-cover rounded-3xl"
        />
        <div className="absolute top-4 end-4 text-3xl sm:text-4xl drop-shadow-lg" title={lang === 'ar' ? 'علم المملكة العربية السعودية' : 'Saudi Arabia Flag'}>
          🇸🇦
        </div>
      </motion.section>

      <HeroQuickLinks />


      {/* Tracks — primary paths right after the hero */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-100">
            <GraduationCap className="w-6 h-6 text-emerald-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
            {t('chooseTrack')}
          </h2>
          <p className="text-slate-500 text-sm max-w-lg mx-auto">
            {lang === 'ar' ? 'اختر المسار الذي يناسب احتياجاتك التعليمية' : 'Choose the path that fits your educational needs'}
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tracks.map((track, i) => (
            <TrackCard key={track.externalUrl || track.path} track={track} index={i} lang={lang} isRTL={isRTL} />
          ))}
        </div>
      </section>

      {/* Teachers Marketplace — always open for students */}
      <Link to="/teachers" className="block">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative overflow-hidden rounded-3xl border-2 border-emerald-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
        >
          <div className="relative h-44 sm:h-52 overflow-hidden">
            <img
              src="https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/d4df896ee_generated_image.png"
              alt={lang === 'ar' ? 'المعلمون الخصوصيون' : 'Private Tutors'}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5 text-white">
              <h2 className="font-heading font-bold text-xl sm:text-2xl drop-shadow-lg">
                {lang === 'ar' ? '📚 المعلمون الخصوصيون' : '📚 Private Tutors'}
              </h2>
              <p className="text-sm text-white/90 mt-1 drop-shadow">
                {lang === 'ar'
                  ? 'تصفّح المعلمين الموثوقين، تواصل عبر واتساب، واحجز جلستك — الدفع مباشر'
                  : 'Browse trusted tutors, contact via WhatsApp, book your session — direct payment'}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-4 py-1.5 text-sm font-bold text-white">
                {lang === 'ar' ? 'ابدأ الآن' : 'Get Started'} →
              </span>
            </div>
          </div>
        </motion.section>
      </Link>

      {/* University Admission Exams */}
      <Link to="/university-admission" className="block">
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="relative overflow-hidden rounded-3xl border-2 border-orange-200 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
        >
          <div className="relative h-44 sm:h-52 overflow-hidden">
            <img
              src="https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/e0693526b_generated_image.png"
              alt={lang === 'ar' ? 'اختبارات القبول الجامعي' : 'University Admission Exams'}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0C1738]/95 via-[#0C1738]/60 to-transparent" />
            <div className="absolute bottom-0 inset-x-0 p-5 text-white">
              <h2 className="font-heading font-bold text-xl sm:text-2xl drop-shadow-lg">
                {lang === 'ar' ? '🎓 اختبارات القبول الجامعي' : '🎓 University Admission'}
              </h2>
              <p className="text-sm text-white/90 mt-1 drop-shadow">
                {lang === 'ar'
                  ? 'منصة تدريب متخصصة للاختبارات التنافسية — تمارين محاكية وأسئلة مرتبة ليوم الاختبار'
                  : 'Specialized training for competitive admission exams — mock tests & leveled questions'}
              </p>
              <span className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-amber-500 px-4 py-1.5 text-sm font-bold text-white">
                {lang === 'ar' ? 'ابدأ الاختبار الآن' : 'Start Now'} →
              </span>
            </div>
          </div>
        </motion.section>
      </Link>

      {/* Features Grid — what makes us different */}
      <section className="space-y-6">
        <div className="text-center space-y-3">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-amber-100">
            <Sparkles className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
            {lang === 'ar' ? 'ما يميز منصتنا' : 'What Makes Us Different'}
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((f, i) => (
            <FeatureCard
              key={f.key}
              {...f}
              delay={0.1 + i * 0.08}
              lang={lang}
              Arrow={Arrow}
              onClick={() => (f.externalUrl ? window.open(f.externalUrl, "_blank", "noopener,noreferrer") : setSelectedFeature(f))}
            />
          ))}
        </div>
      </section>

      <ShowcaseBanner />

      <SubjectShowcaseCards />

      <HomeProgressSection />

      <MeasurementLabCard />

      {/* Visual showcase */}
      <SaudiShowcase />

      <StudentGallery />

      {/* Vision & Mission */}
      <EducationalQuotes />

      {/* Platform stats */}
      <BasicInfo />

      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4"
      >
        {[
          { numAr: "١٢", numEn: "12", labelAr: "صف دراسي", labelEn: "Grades", icon: BookOpen, color: "text-blue-600", bg: "bg-blue-50" },
          { numAr: "٢", numEn: "2", labelAr: "نظام تعليمي", labelEn: "Curricula", icon: Library, color: "text-emerald-600", bg: "bg-emerald-50" },
          { numAr: "∞", numEn: "∞", labelAr: "تدريبات", labelEn: "Exercises", icon: InfinityIcon, color: "text-purple-600", bg: "bg-purple-50" },
          { numAr: "٢٤/٧", numEn: "24/7", labelAr: "متاح دائماً", labelEn: "Available", icon: Clock, color: "text-amber-600", bg: "bg-amber-50" },
          { numAr: "١٣", numEn: "13", labelAr: "منطقة بالمملكة", labelEn: "Regions", icon: MapPin, color: "text-rose-600", bg: "bg-rose-50" },
          { numAr: "+٥٠٠", numEn: "500+", labelAr: "مدرسة شريكة", labelEn: "Partner Schools", icon: School, color: "text-indigo-600", bg: "bg-indigo-50" },
        ].map((stat, i) => (
          <div key={i} className="text-center p-5 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <div className={`inline-flex items-center justify-center w-9 h-9 rounded-xl ${stat.bg} mb-2`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="text-2xl sm:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#263D84] to-[#3E57A4]">
              {lang === 'ar' ? stat.numAr : stat.numEn}
            </div>
            <div className="text-sm text-slate-500 mt-1">
              {lang === 'ar' ? stat.labelAr : stat.labelEn}
            </div>
          </div>
        ))}
      </motion.section>

      {/* Abqari — Platform Memory */}
      <AbqariMemoryCard />

      <FeatureExplanation feature={selectedFeature} onClose={() => setSelectedFeature(null)} />
      </div>
    </>
  );
}