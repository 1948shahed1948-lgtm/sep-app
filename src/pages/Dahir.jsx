import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, Database, Lock, RefreshCw, BookOpen, Brain, Trophy, Compass, Award, GraduationCap, ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import DahirChat from '@/components/dahir/DahirChat';

const ROBOT_URL = 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/baa55339f_generated_image.png';

const PLATFORM_KNOWLEDGE = [
  {
    icon: BookOpen,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    titleAr: 'النظام الوطني',
    titleEn: 'National Curriculum',
    descAr: 'جميع المواد والصفوف وفق المنهج السعودي المعتمد من الصف الأول الابتدائي حتى الثانوي.',
    descEn: 'All subjects and grades following the Saudi approved curriculum from grade 1 to 12.',
  },
  {
    icon: GraduationCap,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    titleAr: 'النظام الدولي',
    titleEn: 'International Curriculum',
    descAr: 'مناهج دولية معتمدة بمعايير عالمية متقدمة تواكب أفضل الممارسات التعليمية.',
    descEn: 'Internationally accredited curricula with advanced global standards.',
  },
  {
    icon: Brain,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    titleAr: 'اختبارات القدرات الجامعية',
    titleEn: 'University Aptitude Tests',
    descAr: 'تدريب شامل على اختبارات القدرات (لفظي وكمي) والتحصيلي مع أسئلة متدرجة الصعوبة.',
    descEn: 'Comprehensive training for aptitude tests (verbal & quantitative) and achievement tests.',
  },
  {
    icon: Award,
    color: 'text-fuchsia-600',
    bg: 'bg-fuchsia-50',
    titleAr: 'الاختبارات المقننة',
    titleEn: 'Standardized Tests',
    descAr: 'نظام اختبارات متجدد: تشخيصي لتحديد الضعف، معياري لقياس الإتقان، وتكيفي للوصول لـ٧٥٪ فأكثر.',
    descEn: 'Dynamic testing: diagnostic to find weaknesses, criterion to measure mastery, adaptive to reach 75%+.',
  },
  {
    icon: Trophy,
    color: 'text-yellow-600',
    bg: 'bg-yellow-50',
    titleAr: 'تحدي العبقري',
    titleEn: 'Genius Challenge',
    descAr: 'أسئلة عالية الصعوبة مع شرح الخطأ الشائع والقاعدة الذهبية لكل سؤال.',
    descEn: 'High-difficulty questions with common mistake analysis and golden rules.',
  },
  {
    icon: Compass,
    color: 'text-teal-600',
    bg: 'bg-teal-50',
    titleAr: 'المنهج في الحياة',
    titleEn: 'Curriculum in Real Life',
    descAr: 'ربط الدروس بمشاريع رؤية ٢٠٣٠ مثل نيوم وذا لاين والبحر الأحمر.',
    descEn: 'Connecting lessons to Vision 2030 projects like NEOM, THE LINE, and Red Sea.',
  },
];

export default function Dahir() {
  const { lang, isRTL } = useLang();
  const Back = isRTL ? ChevronRight : ChevronLeft;
  const [learningProgress, setLearningProgress] = useState(0);
  const [scanText, setScanText] = useState('');
  const [scanning, setScanning] = useState(false);
  const scanIndex = useRef(0);

  const knowledgePoints = lang === 'ar' ? [
    'تخزين معلومات النظام الوطني...',
    'تحليل بيانات النظام الدولي...',
    'أرشفة اختبارات القدرات...',
    'فهرسة الاختبارات المقننة...',
    'تسجيل تحدي العبقري...',
    'ربط المنهج برؤية ٢٠٣٠...',
    'اكتمل التخزين! داهر جاهز.',
  ] : [
    'Storing National Curriculum data...',
    'Analyzing International Curriculum...',
    'Archiving aptitude tests...',
    'Indexing standardized tests...',
    'Recording Genius Challenge...',
    'Linking curriculum to Vision 2030...',
    'Storage complete! Dahir is ready.',
  ];

  const startScan = () => {
    setScanning(true);
    setLearningProgress(0);
    scanIndex.current = 0;
    setScanText(knowledgePoints[0]);
  };

  useEffect(() => {
    if (!scanning) return;
    const timer = setInterval(() => {
      scanIndex.current += 1;
      if (scanIndex.current >= knowledgePoints.length) {
        setScanning(false);
        setLearningProgress(100);
        clearInterval(timer);
        return;
      }
      setScanText(knowledgePoints[scanIndex.current]);
      setLearningProgress(Math.round((scanIndex.current / (knowledgePoints.length - 1)) * 100));
    }, 900);
    return () => clearInterval(timer);
  }, [scanning]);

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <button
          onClick={() => window.history.back()}
          className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-colors"
        >
          <Back className="w-5 h-5 text-slate-500" />
        </button>
        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200">
          <Sparkles className="w-4 h-4 text-amber-500" />
          <span className="text-xs font-bold text-amber-700">
            {lang === 'ar' ? 'ذكاء محدود — تخزين فقط' : 'Limited AI — Storage Only'}
          </span>
        </div>
      </div>

      {/* Hero — Robot with tablet */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6 sm:p-10"
      >
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-400 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-amber-400 blur-3xl" />
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4 text-center md:text-start">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30"
            >
              <Database className="w-3.5 h-3.5 text-amber-300" />
              <span className="text-[11px] font-bold text-amber-200">
                {lang === 'ar' ? 'مساعد المنصة الذكي' : 'Platform Smart Assistant'}
              </span>
            </motion.div>

            <h1 className="text-3xl sm:text-4xl font-display font-bold text-white">
              {lang === 'ar' ? 'داهر' : 'Dahir'}
            </h1>
            <p className="text-sm text-blue-200 leading-relaxed">
              {lang === 'ar'
                ? 'روبوت ذكي يحمل تابلتاً يخزّن معلومات بنوك الأسئلة والاختبارات المعيارية السعودية باستمرار. وظيفته حفظ وترتيب كل بيانات المنصات والمناهج والاختبارات. لا يكتب ولا يجيب عن أي سؤال خارج نطاق المنصة — يتعلم ويتطور باستمرار.'
                : 'A smart robot holding a tablet that continuously stores data about the Saudi Questions Gateway. Its role is to save and organize all platform, curriculum, and test data. It does not write or answer any question outside the platform scope — it learns and evolves constantly.'}
            </p>

            <div className="flex flex-wrap gap-2 justify-center md:justify-start">
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-200 bg-white/10 rounded-full px-3 py-1.5">
                <RefreshCw className="w-3 h-3" />
                {lang === 'ar' ? 'يتعلم باستمرار' : 'Learns constantly'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-200 bg-white/10 rounded-full px-3 py-1.5">
                <Lock className="w-3 h-3" />
                {lang === 'ar' ? 'معلومات المنصة فقط' : 'Platform data only'}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-200 bg-white/10 rounded-full px-3 py-1.5">
                <Database className="w-3 h-3" />
                {lang === 'ar' ? 'تخزين لا كتابة' : 'Stores, does not write'}
              </span>
            </div>

            <button
              onClick={startScan}
              disabled={scanning}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all disabled:opacity-60"
            >
              <RefreshCw className={`w-4 h-4 ${scanning ? 'animate-spin' : ''}`} />
              {scanning
                ? (lang === 'ar' ? 'جارٍ التخزين...' : 'Storing...')
                : (lang === 'ar' ? 'ابدأ التخزين' : 'Start Storage')}
            </button>
          </div>

          {/* Robot image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-48 h-56 sm:w-56 sm:h-64">
              <motion.div
                animate={scanning ? { y: [0, -8, 0] } : { y: [0, -4, 0] }}
                transition={{ repeat: Infinity, duration: scanning ? 1.5 : 3 }}
                className="w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-4 ring-amber-400/20"
              >
                <img src={ROBOT_URL} alt="Dahir robot" className="w-full h-full object-cover" />
              </motion.div>
              {scanning && (
                <>
                  <motion.div
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ repeat: Infinity, duration: 1 }}
                    className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
                  />
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full shadow-lg whitespace-nowrap">
                    {lang === 'ar' ? '🟢 جارٍ التخزين' : '🟢 Storing'}
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </div>

        {/* Scan progress bar */}
        <AnimatePresence>
          {scanning && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="relative mt-6 bg-white/10 rounded-xl p-4 overflow-hidden"
            >
              <div className="flex items-center gap-3 mb-2">
                <Database className="w-4 h-4 text-amber-300 animate-pulse" />
                <span className="text-xs font-mono text-amber-100">{scanText}</span>
              </div>
              <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-amber-400 to-green-400"
                  animate={{ width: `${learningProgress}%` }}
                  transition={{ ease: 'easeOut' }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!scanning && learningProgress === 100 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative mt-4 bg-green-500/15 border border-green-400/30 rounded-xl p-3 flex items-center gap-2"
          >
            <Database className="w-4 h-4 text-green-300" />
            <span className="text-xs font-semibold text-green-200">
              {lang === 'ar' ? 'اكتمل تخزين جميع بيانات المنصة بنجاح ✓' : 'All platform data stored successfully ✓'}
            </span>
          </motion.div>
        )}
      </motion.section>

      {/* What Dahir stores */}
      <section className="space-y-4">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-100">
            <Database className="w-5 h-5 text-blue-600" />
          </div>
          <h2 className="text-xl font-heading font-bold text-slate-900">
            {lang === 'ar' ? 'ماذا يخزّن داهر؟' : 'What does Dahir store?'}
          </h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {lang === 'ar'
              ? 'كل ما يتعلق ببنوك الأسئلة والاختبارات المعيارية السعودية فقط — لا شيء خارجها'
              : 'Everything related to the Saudi Questions Gateway only — nothing beyond it'}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {PLATFORM_KNOWLEDGE.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
              className="bg-white border border-slate-100 rounded-2xl p-4 flex items-start gap-3"
            >
              <div className={`w-10 h-10 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}>
                <item.icon className={`w-5 h-5 ${item.color}`} />
              </div>
              <div>
                <h3 className="font-heading font-bold text-sm text-slate-900 mb-1">
                  {lang === 'ar' ? item.titleAr : item.titleEn}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {lang === 'ar' ? item.descAr : item.descEn}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Interactive AI Chat */}
      <section className="space-y-4">
        <div className="text-center space-y-2">
          <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-100">
            <MessageCircle className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-heading font-bold text-slate-900">
            {lang === 'ar' ? 'تحدّث مع داهر' : 'Chat with Dahir'}
          </h2>
          <p className="text-xs text-slate-500 max-w-md mx-auto">
            {lang === 'ar'
              ? 'اسأل داهر عن أي ميزة في المنصة أو كيفية استخدامها — يجيب ضمن النطاق التعليمي فقط'
              : 'Ask Dahir about any platform feature or how to use it — answers within the educational scope only'}
          </p>
        </div>
        <DahirChat />
      </section>

      {/* Restrictions notice */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-amber-50 border border-amber-200 rounded-2xl p-5 flex items-start gap-3"
      >
        <Lock className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
        <div>
          <h3 className="font-heading font-bold text-sm text-amber-900 mb-1">
            {lang === 'ar' ? 'قيود داهر' : "Dahir's Restrictions"}
          </h3>
          <ul className="text-xs text-amber-700 space-y-1 leading-relaxed">
            <li>{lang === 'ar' ? '• يجيب عن أسئلة المنصة التعليمية فقط — لا أسئلة خارجية' : '• Answers platform-related questions only — no external topics'}</li>
            <li>{lang === 'ar' ? '• لا يكتب محتوى إبداعياً حراً (قصص/قصائد) ولا يولّد أسئلة اختبارات' : '• Does not write creative content or generate exam questions'}</li>
            <li>{lang === 'ar' ? '• يخزّن ويتعلّم من بيانات المنصة باستمرار' : '• Stores and learns from platform data constantly'}</li>
            <li>{lang === 'ar' ? '• توليد الأسئلة الجماعي ميزة منفصلة يديرها المشرف' : '• Bulk question generation is a separate admin-managed feature'}</li>
          </ul>
        </div>
      </motion.section>
    </div>
  );
}