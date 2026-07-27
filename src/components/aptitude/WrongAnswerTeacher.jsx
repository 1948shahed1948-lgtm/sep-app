import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Crown, Lightbulb, MessageCircleQuestion, CheckCircle2, RotateCcw } from 'lucide-react';
import MathText from '@/components/shared/MathText';

// نصائح دراسية دوّارة تظهر للطالب بعد الخطأ
const STUDY_TIPS = [
  'اقرأ السؤال مرتين قبل الإجابة، وركّز على الكلمات المفتاحية.',
  'اربط المعلومة بمثال من حياتك اليومية — يثبت في ذاكرتك أطول.',
  'لا تخف من الخطأ — كل خطأ فرصة لتعلّم قاعدة جديدة.',
  'أعِد قراءة الشرح على السبورة، ثم حاول شرحه لزميل أو لأهلك.',
  'راجع القاعدة الذهبية قبل النوم — الذاكرة تثبّت المعلومات ليلاً.',
  'قسّم الفكرة الصعبة إلى أجزاء صغيرة، وافهمها واحدة تلو الأخرى.',
];

// سؤال متابع تفاعلي للتحقق من الفهم بعد الشرح
function FollowUpQuestion({ followup, isRTL }) {
  const defaultQ = {
    question_ar: 'سؤال متابع: بعد شرح المعلم، هل تستطيع الآن تمييز الإجابة الصحيحة؟',
    question_en: 'Follow-up: After the teacher\'s explanation, can you now identify the correct answer?',
    options_ar: ['نعم، فهمت القاعدة ✅', 'أحتاج لمراجعة أخرى 📖'],
    options_en: ['Yes, I got it ✅', 'I need more review 📖'],
    correct: 0,
  };
  const q = followup || defaultQ;
  const [picked, setPicked] = useState(null);
  const isAr = isRTL;
  const question = isAr ? q.question_ar : q.question_en;
  const options = isAr ? q.options_ar : q.options_en;

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="mt-4 rounded-xl bg-blue-50/60 border-2 border-blue-200 p-4"
    >
      <div className="flex items-center gap-2 mb-3">
        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center shadow-sm">
          <MessageCircleQuestion className="w-4 h-4 text-white" />
        </div>
        <p className="text-xs font-bold text-blue-700 uppercase tracking-wide">
          {isAr ? 'سؤال متابع للطالب' : 'Follow-up question'}
        </p>
      </div>
      <p dir={isRTL ? 'rtl' : 'ltr'} className="text-sm font-medium text-slate-800 mb-3 leading-relaxed"><MathText text={question} /></p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {options.map((opt, i) => {
          const isPicked = picked === i;
          const isCorrect = i === q.correct;
          const showResult = picked !== null;
          return (
            <button
              key={i}
              disabled={showResult}
              onClick={() => setPicked(i)}
              className={`flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm font-medium border-2 transition-all text-right
                ${!showResult ? 'bg-white border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer' : ''}
                ${showResult && isCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : ''}
                ${showResult && isPicked && !isCorrect ? 'bg-red-50 border-red-400 text-red-800' : ''}
                ${showResult && !isPicked && !isCorrect ? 'bg-white border-slate-200 text-slate-400' : ''}
              `}
            >
              {showResult && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
              {showResult && isPicked && !isCorrect && <RotateCcw className="w-4 h-4 text-red-500 flex-shrink-0" />}
              <span dir={isRTL ? 'rtl' : 'ltr'}><MathText text={opt} /></span>
            </button>
          );
        })}
      </div>
      <AnimatePresence>
        {picked !== null && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mt-3 overflow-hidden"
          >
            {picked === q.correct ? (
              <div className="rounded-lg bg-emerald-100 border border-emerald-300 px-3 py-2 text-sm font-medium text-emerald-800">
                {isAr ? 'ممتاز! فهمك للقاعدة يعني أنك لن تخطئ فيها مرة أخرى 🌟' : 'Excellent! Understanding means you won\'t repeat the mistake 🌟'}
              </div>
            ) : (
              <div className="rounded-lg bg-amber-100 border border-amber-300 px-3 py-2 text-sm font-medium text-amber-800">
                {isAr ? 'لا بأس! أعد قراءة الشرح على السبورة مرة أخرى، ثم حاول — التعلم يحتاج صبراً 💪' : 'That\'s okay! Re-read the board and try again — learning takes patience 💪'}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// نصيحة المعلم — تظهر بعد القاعدة الذهبية
function TeacherAdvice({ advice, isRTL }) {
  const [tipIdx] = useState(() => Math.floor(Math.random() * STUDY_TIPS.length));
  const text = advice || STUDY_TIPS[tipIdx];
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.45 }}
      className="mt-3 rounded-xl bg-gradient-to-r from-sky-50 to-cyan-50 border-2 border-sky-200 p-4 flex items-start gap-3"
    >
      <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-sky-400 to-cyan-500 flex items-center justify-center shadow">
        <Lightbulb className="w-5 h-5 text-white" />
      </div>
      <div>
        <p className="text-xs font-bold text-sky-700 uppercase tracking-wide mb-1">
          {isRTL ? 'نصيحة المعلم' : 'Teacher\u2019s tip'}
        </p>
        <p dir={isRTL ? 'rtl' : 'ltr'} className="text-sm font-medium text-sky-900 leading-relaxed">{text}</p>
      </div>
    </motion.div>
  );
}

// معلّم سعودي: ثوب أبيض، غترة شبكية حمراء وبيضاء، عقال أسود، يشير نحو السبورة بالطبشور
function RealisticTeacher() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ type: 'spring', stiffness: 200, damping: 18 }}
      className="relative"
    >
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeInOut' }}
        className="origin-bottom"
      >
        <svg viewBox="0 0 220 285" className="w-32 h-40 sm:w-40 sm:h-48 drop-shadow-xl" aria-hidden="true">
          <defs>
            <linearGradient id="st-skin" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#F6D2AE" />
              <stop offset="100%" stopColor="#E8B98E" />
            </linearGradient>
            <linearGradient id="st-thobe" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#e9e9ee" />
            </linearGradient>
            <pattern id="st-ghutra" width="12" height="12" patternUnits="userSpaceOnUse">
              <rect width="12" height="12" fill="#ffffff" />
              <rect width="6" height="6" fill="#c41e3a" />
              <rect x="6" y="6" width="6" height="6" fill="#c41e3a" />
            </pattern>
          </defs>

          {/* الثوب الأبيض الطويل */}
          <path d="M58 282 L58 176 Q58 158 76 152 L96 150 L110 160 L124 150 L144 152 Q162 158 162 176 L162 282 Z" fill="url(#st-thobe)" stroke="#dcdfe6" strokeWidth="1" />
          {/* خط الأزرار المركزي */}
          <line x1="110" y1="160" x2="110" y2="282" stroke="#cfd3da" strokeWidth="1.5" strokeDasharray="2 4" />
          {/* ياقة الثوب */}
          <path d="M96 150 L110 168 L124 150 L118 150 L110 160 L102 150 Z" fill="#f2f3f6" stroke="#dcdfe6" strokeWidth="1" />

          {/* الرقبة */}
          <rect x="101" y="138" width="18" height="16" fill="url(#st-skin)" />

          {/* الوجه */}
          <ellipse cx="110" cy="108" rx="33" ry="36" fill="url(#st-skin)" />

          {/* الغترة الشبكية (حمراء وبيضاء) فوق الرأس */}
          <path d="M77 100 Q77 62 110 60 Q143 62 143 100 Q130 90 110 90 Q90 90 77 100 Z" fill="url(#st-ghutra)" stroke="#b0b0b0" strokeWidth="0.6" />

          {/* ذيل الغترة الأبيض متدلٍّ على الكتف الأيسر */}
          <path d="M77 92 Q64 104 66 140 Q70 145 76 141 Q78 116 84 100 Z" fill="#ffffff" stroke="#d8d8dc" strokeWidth="0.8" />
          <path d="M77 100 Q69 108 71 132" fill="none" stroke="#e2e2e6" strokeWidth="0.8" />

          {/* العقال — الحبل الأسود فوق الغترة */}
          <ellipse cx="110" cy="70" rx="37" ry="9" fill="none" stroke="#15161a" strokeWidth="5" />
          <ellipse cx="110" cy="74" rx="35" ry="7" fill="none" stroke="#2a2b30" strokeWidth="3" />

          {/* الحاجبان */}
          <path d="M92 100 Q99 96 106 100" fill="none" stroke="#3a2a1a" strokeWidth="3" strokeLinecap="round" />
          <path d="M114 100 Q121 96 128 100" fill="none" stroke="#3a2a1a" strokeWidth="3" strokeLinecap="round" />

          {/* العينان */}
          <circle cx="99" cy="108" r="3.4" fill="#1f2937" />
          <circle cx="121" cy="108" r="3.4" fill="#1f2937" />

          {/* الأنف */}
          <path d="M110 114 L106 124 Q110 127 114 124 Z" fill="#E0AB85" />

          {/* الابتسامة */}
          <path d="M98 131 Q110 141 122 131" fill="none" stroke="#8c5a3a" strokeWidth="3" strokeLinecap="round" />

          {/* الذراع والطبشور — يشير نحو السبورة */}
          <motion.g
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            style={{ transformOrigin: '168px 172px' }}
          >
            {/* كُمّ الثوب الأبيض */}
            <path d="M162 170 Q180 162 196 152" fill="none" stroke="url(#st-thobe)" strokeWidth="17" strokeLinecap="round" />
            {/* اليد */}
            <circle cx="198" cy="150" r="7.5" fill="url(#st-skin)" />
            {/* الطبشور */}
            <line x1="200" y1="148" x2="214" y2="116" stroke="#E0A22A" strokeWidth="4" strokeLinecap="round" />
            <circle cx="214" cy="116" r="4.5" fill="#E0A22A" />
          </motion.g>
        </svg>
      </motion.div>
    </motion.div>
  );
}

// سبورة بطباعة طباشيرية
function Chalkboard({ text, isRTL }) {
  const [shown, setShown] = useState('');
  const idxRef = useRef(0);

  useEffect(() => {
    setShown('');
    idxRef.current = 0;
    const id = setInterval(() => {
      idxRef.current += 1;
      setShown(text.slice(0, idxRef.current));
      if (idxRef.current >= text.length) clearInterval(id);
    }, 26);
    return () => clearInterval(id);
  }, [text]);

  return (
    <div className="relative rounded-xl bg-[#1E6B4F] border-[6px] border-[#7A4A1E] shadow-inner overflow-hidden">
      <div className="absolute inset-0 opacity-20 pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)', backgroundSize: '4px 4px' }} />
      <div className="relative min-h-[120px] sm:min-h-[140px] p-4 sm:p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="w-3 h-3 rounded-full bg-white/30" />
          <span className="w-3 h-3 rounded-full bg-white/30" />
        </div>
        <p
          dir={isRTL ? 'rtl' : 'ltr'}
          className="text-white text-sm sm:text-base leading-relaxed"
          style={{ fontFamily: "'IBM Plex Sans Arabic', ui-sans-serif, system-ui", textShadow: '0 0 1px rgba(255,255,255,0.5)' }}
        >
          {shown === text ? <MathText text={shown} /> : <>{shown}<span className="inline-block w-1.5 h-4 sm:h-5 bg-white/80 animate-pulse align-middle" /></>}
        </p>
      </div>
    </div>
  );
}

export default function WrongAnswerTeacher({ explanation, detail, goldenRule, advice, followup, lang, isRTL, isCorrect }) {
  if (!explanation && !goldenRule) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        className={`rounded-2xl bg-white border p-4 sm:p-6 shadow-sm ${isCorrect ? 'border-emerald-100' : 'border-red-100'}`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className={`inline-flex items-center gap-1.5 text-xs font-bold rounded-full px-3 py-1 ${isCorrect ? 'text-emerald-600 bg-emerald-50' : 'text-red-600 bg-red-50'}`}>
            {isCorrect
              ? (lang === 'ar' ? '✅ أحسنت! إجابة صحيحة' : '✅ Correct answer')
              : (lang === 'ar' ? '✍️ إجابة خاطئة — لِنَتعلّم' : '✍️ Wrong answer — let\'s learn')}
          </span>
        </div>

        <div className="flex flex-col sm:flex-row items-start gap-4">
          <div className="flex-shrink-0 self-center sm:self-start">
            <RealisticTeacher />
          </div>
          <div className="flex-1 w-full">
            <Chalkboard text={explanation} isRTL={isRTL} />
          </div>
        </div>

        {detail && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-3 rounded-xl bg-slate-50 border border-slate-200 p-3.5"
          >
            <p className="text-xs font-bold text-slate-500 mb-1">
              {lang === 'ar' ? 'تفصيل المعلم' : 'Teacher\u2019s breakdown'}
            </p>
            <p dir={isRTL ? 'rtl' : 'ltr'} className="text-sm text-slate-700 leading-relaxed"><MathText text={detail} /></p>
          </motion.div>
        )}

        {goldenRule && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-4 rounded-xl bg-gradient-to-r from-amber-50 to-yellow-50 border-2 border-amber-300 p-4 flex items-start gap-3"
          >
            <div className="flex-shrink-0 w-9 h-9 rounded-full bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow">
              <Crown className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-xs font-bold text-amber-700 uppercase tracking-wide mb-1">
                {lang === 'ar' ? 'القاعدة الذهبية' : 'Golden Rule'}
              </p>
              <p dir={isRTL ? 'rtl' : 'ltr'} className="text-sm font-medium text-amber-900 leading-relaxed">
                <MathText text={goldenRule} />
              </p>
            </div>
          </motion.div>
        )}

        <TeacherAdvice advice={advice} isRTL={isRTL} />
        <FollowUpQuestion followup={followup} isRTL={isRTL} />
      </motion.div>
    </AnimatePresence>
  );
}