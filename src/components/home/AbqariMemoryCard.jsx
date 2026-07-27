import React, { useState, useEffect, useRef } from 'react';
import { useLang } from '@/lib/i18n.jsx';
import { motion, AnimatePresence } from 'framer-motion';
import { Database, Lock, RefreshCw, Cpu, BookOpen } from 'lucide-react';

const ROBOT_URL = 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/baa55339f_generated_image.png';

export default function AbqariMemoryCard() {
  const { lang } = useLang();
  const [scanning, setScanning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scanText, setScanText] = useState('');
  const idx = useRef(0);

  const steps = lang === 'ar' ? [
    'تخزين المناهج السعودية...',
    'أرشفة اختبارات القدرات...',
    'فهرسة بنك الأسئلة...',
    'حفظ تقدم الطلاب...',
    'اكتملت الذاكرة ✓',
  ] : [
    'Storing Saudi curricula...',
    'Archiving aptitude tests...',
    'Indexing question bank...',
    'Saving student progress...',
    'Memory complete ✓',
  ];

  const start = () => {
    setScanning(true);
    idx.current = 0;
    setProgress(0);
    setScanText(steps[0]);
  };

  useEffect(() => {
    if (!scanning) return;
    const t = setInterval(() => {
      idx.current += 1;
      if (idx.current >= steps.length) {
        setScanning(false);
        setProgress(100);
        clearInterval(t);
        return;
      }
      setScanText(steps[idx.current]);
      setProgress(Math.round((idx.current / (steps.length - 1)) * 100));
    }, 1000);
    return () => clearInterval(t);
  }, [scanning]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 p-6 sm:p-10"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-400 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-amber-400 blur-3xl" />
      </div>

      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative flex justify-center order-2 md:order-1"
        >
          <div className="relative w-40 h-48 sm:w-48 sm:h-56">
            <motion.div
              animate={scanning ? { y: [0, -8, 0] } : { y: [0, -4, 0] }}
              transition={{ repeat: Infinity, duration: scanning ? 1.5 : 3 }}
              className="w-full h-full rounded-2xl overflow-hidden shadow-2xl ring-4 ring-amber-400/20"
            >
              <img src={ROBOT_URL} alt="عبقري" className="w-full h-full object-cover" />
            </motion.div>
            {scanning && (
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ repeat: Infinity, duration: 1 }}
                className="absolute -top-2 -right-2 w-3 h-3 rounded-full bg-green-400 shadow-lg shadow-green-400/50"
              />
            )}
          </div>
        </motion.div>

        {/* Text */}
        <div className="space-y-4 text-center md:text-start order-1 md:order-2">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring' }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30"
          >
            <Cpu className="w-3.5 h-3.5 text-amber-300" />
            <span className="text-[11px] font-bold text-amber-200">
              {lang === 'ar' ? 'ذاكرة المنصة' : 'Platform Memory'}
            </span>
          </motion.div>

          <h2 className="text-2xl sm:text-3xl font-display font-bold text-white">
            {lang === 'ar' ? 'عبقري' : 'Abqari'}
          </h2>
          <p className="text-sm text-blue-200 leading-relaxed">
            {lang === 'ar'
              ? 'روبوت ذكي يحمل تابلتاً يمثل ذاكرة بنوك الأسئلة والاختبارات المعيارية السعودية. وظيفته الثابتة تخزين وترتيب كل بيانات المناهج والاختبارات وتقدم الطلاب باستمرار — لا يتفاعل مع المستخدم خارج سياق المنهج.'
              : 'A smart robot holding a tablet representing the memory of the Saudi Questions Gateway. Its fixed function is to store and organize all curriculum, test, and student progress data constantly — it does not interact with users outside the curriculum context.'}
          </p>

          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-200 bg-white/10 rounded-full px-3 py-1.5">
              <Database className="w-3 h-3" />
              {lang === 'ar' ? 'تخزين دائم' : 'Permanent storage'}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-200 bg-white/10 rounded-full px-3 py-1.5">
              <Lock className="w-3 h-3" />
              {lang === 'ar' ? 'داخل المنهج فقط' : 'Curriculum-scoped only'}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-200 bg-white/10 rounded-full px-3 py-1.5">
              <BookOpen className="w-3 h-3" />
              {lang === 'ar' ? 'يتعلّم باستمرار' : 'Learns constantly'}
            </span>
          </div>

          <button
            onClick={start}
            disabled={scanning}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold text-sm shadow-lg shadow-amber-500/20 hover:shadow-amber-500/40 transition-all disabled:opacity-60"
          >
            <RefreshCw className={`w-4 h-4 ${scanning ? 'animate-spin' : ''}`} />
            {scanning
              ? (lang === 'ar' ? 'جارٍ التخزين...' : 'Storing...')
              : (lang === 'ar' ? 'ابدأ التخزين' : 'Start Storage')}
          </button>

          <AnimatePresence>
            {scanning && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white/10 rounded-xl p-3 overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-2">
                  <Database className="w-3.5 h-3.5 text-amber-300 animate-pulse" />
                  <span className="text-xs font-mono text-amber-100">{scanText}</span>
                </div>
                <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-amber-400 to-green-400"
                    animate={{ width: `${progress}%` }}
                  />
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {!scanning && progress === 100 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-green-500/15 border border-green-400/30 rounded-xl p-2.5 flex items-center gap-2"
            >
              <Database className="w-4 h-4 text-green-300" />
              <span className="text-xs font-semibold text-green-200">
                {lang === 'ar' ? 'اكتمل تخزين بيانات المنصة ✓' : 'Platform data stored ✓'}
              </span>
            </motion.div>
          )}
        </div>
      </div>
    </motion.section>
  );
}