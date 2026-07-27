import React, { useState, useEffect, useCallback } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { base44 } from '@/api/base44Client';
import { Trophy, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Sparkles, Brain, Lightbulb, Zap, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuizProgressRing from '@/components/quiz/QuizProgressRing';
import QuizLangToggle from '@/components/quiz/QuizLangToggle';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';

const QUESTIONS_PER_SESSION = 10;
const HERO_IMAGE = "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80";

const STAGES = [
  { key: 'primary', ar: 'المرحلة الابتدائية', en: 'Primary', grades: '1-6', icon: '🧒', color: 'from-emerald-500 to-teal-600', glow: 'shadow-emerald-500/30' },
  { key: 'intermediate', ar: 'المرحلة المتوسطة', en: 'Intermediate', grades: '7-9', icon: '🧑‍🎓', color: 'from-blue-500 to-indigo-600', glow: 'shadow-blue-500/30' },
  { key: 'secondary', ar: 'المرحلة الثانوية', en: 'Secondary', grades: '10-12', icon: '👨‍🔬', color: 'from-purple-500 to-fuchsia-600', glow: 'shadow-purple-500/30' }
];

export default function GeniusChallenge() {
  const { t, lang, isRTL } = useLang();
  const Back = isRTL ? ChevronRight : ChevronLeft;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const [phase, setPhase] = useState('intro'); // intro | loading | quiz | results
  const [selectedStage, setSelectedStage] = useState(null);
  const [pool, setPool] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState([]);
  const topRef = useScrollTopOnChange(currentIndex);

  const startChallenge = useCallback(async (stage) => {
    setSelectedStage(stage);
    setPhase('loading');
    let existing = await base44.entities.GeniusChallenge.filter({ stage });
    setPool(existing);
    const shuffled = [...existing].sort(() => Math.random() - 0.5).slice(0, Math.min(QUESTIONS_PER_SESSION, existing.length));
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setResults([]);
    setPhase('quiz');
  }, []);

  const currentQ = questions[currentIndex];

  const handleAnswer = (idx) => {
    if (isAnswered) return;
    setSelectedAnswer(idx);
    setIsAnswered(true);
    const isCorrect = String(idx) === String(currentQ.correct_answer);
    setResults((prev) => [...prev, { index: currentIndex, answer: idx, isCorrect }]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((p) => p + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setPhase('results');
    }
  };

  const handleRetry = () => {
    setPhase('intro');
    setSelectedStage(null);
    setQuestions([]);
    setResults([]);
  };

  // ----- Intro -----
  if (phase === 'intro') {
    return (
      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex items-center justify-between">
          <Link to="/" className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-purple-300 hover:bg-purple-50 transition-colors">
            <Back className="w-5 h-5 text-slate-500" />
          </Link>
          <QuizLangToggle />
        </div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-purple-600 via-fuchsia-600 to-indigo-700 p-6 sm:p-12 text-center shadow-2xl shadow-purple-500/20"
        >
          <div className="absolute -top-8 -end-8 text-7xl sm:text-9xl opacity-10">🧠</div>
          <div className="absolute -bottom-8 -start-8 text-7xl sm:text-9xl opacity-10">⚡</div>
          <div className="relative space-y-4">
            <motion.div
              initial={{ scale: 0, rotate: -30 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', delay: 0.2 }}
              className="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white/15 backdrop-blur-sm border border-white/20"
            >
              <Trophy className="w-8 h-8 sm:w-10 sm:h-10 text-amber-300" />
            </motion.div>
            <h1 className="text-2xl sm:text-4xl font-display font-bold text-white drop-shadow">
              {lang === 'ar' ? 'تحدي العبقري' : 'Genius Challenge'}
            </h1>
            <p className="text-purple-100 text-xs sm:text-base max-w-xl mx-auto leading-relaxed px-2 sm:px-0">
              {lang === 'ar'
                ? 'أسئلة لا يحلها إلا القلّة من المتفوقين — فخاخ منطقية، خطوات متعددة، وتفكير عميق. اختبر مرحلتك واستعد لتحدّي حقيقي.'
                : 'Questions only the top few can solve — logic traps, multi-step reasoning, deep thinking. Pick your stage and get ready.'}
            </p>
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white">
                <Zap className="w-3.5 h-3.5 text-amber-300" />
                {lang === 'ar' ? '١٠٠ سؤال عبقري' : '100 genius questions'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white">
                <Brain className="w-3.5 h-3.5 text-amber-300" />
                {lang === 'ar' ? 'كل المراحل' : 'All stages'}
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-medium text-white">
                <Lightbulb className="w-3.5 h-3.5 text-amber-300" />
                {lang === 'ar' ? 'شرح معلم تفصيلي' : 'Detailed teacher feedback'}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Stage selection */}
        <div className="space-y-4">
          <h2 className="text-center text-lg font-heading font-bold text-slate-800">
            {lang === 'ar' ? 'اختر مرحلتك' : 'Choose your stage'}
          </h2>
          <div className="grid sm:grid-cols-3 gap-3 sm:gap-4">
            {STAGES.map((s, i) => (
              <motion.button
                key={s.key}
                onClick={() => startChallenge(s.key)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.1 }}
                whileHover={{ y: -4 }}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${s.color} p-5 sm:p-6 text-center shadow-lg ${s.glow} hover:shadow-xl transition-all`}
              >
                <div className="text-4xl sm:text-5xl mb-2 sm:mb-3 group-hover:scale-110 transition-transform">{s.icon}</div>
                <h3 className="font-heading font-bold text-white text-base sm:text-lg mb-1">
                  {lang === 'ar' ? s.ar : s.en}
                </h3>
                <p className="text-white/80 text-xs sm:text-sm mb-3">
                  {lang === 'ar' ? `الصفوف ${s.grades}` : `Grades ${s.grades}`}
                </p>
                <span className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 text-xs sm:text-sm font-semibold text-white">
                  <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  {lang === 'ar' ? 'ابدأ التحدي' : 'Start challenge'}
                  <Arrow className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                </span>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // ----- Loading -----
  if (phase === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <div className="relative">
          <div className="w-14 h-14 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
          <Brain className="absolute inset-0 m-auto w-6 h-6 text-purple-500" />
        </div>
        <p className="text-sm font-medium text-slate-500">
          {lang === 'ar' ? 'جاري تجهيز أسئلة العباقرة...' : 'Preparing genius questions...'}
        </p>
      </div>
    );
  }

  // ----- Results -----
  if (phase === 'results') {
    const correct = results.filter((r) => r.isCorrect).length;
    const total = results.length;
    const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
    const title = pct >= 80 ? (lang === 'ar' ? 'عبقري حقيقي! 🧠' : 'True Genius! 🧠')
      : pct >= 50 ? (lang === 'ar' ? 'أداء رائع! 💪' : 'Great job! 💪')
      : (lang === 'ar' ? 'واصل التعلّم! 📚' : 'Keep learning! 📚');

    return (
      <div className="max-w-2xl mx-auto space-y-5 sm:space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="rounded-3xl bg-gradient-to-br from-purple-600 to-fuchsia-700 p-6 sm:p-8 text-center shadow-xl"
        >
          <Trophy className="w-14 h-14 sm:w-16 sm:h-16 text-amber-300 mx-auto mb-2 sm:mb-3" />
          <h2 className="text-xl sm:text-2xl font-display font-bold text-white mb-2">{title}</h2>
          <div className="text-4xl sm:text-5xl font-display font-bold text-white mb-1">{pct}%</div>
          <p className="text-purple-100 text-xs sm:text-sm">
            {lang === 'ar' ? `${correct} من ${total} إجابة صحيحة` : `${correct} out of ${total} correct`}
          </p>
        </motion.div>

        <div className="flex gap-2 sm:gap-3">
          <Button onClick={handleRetry} variant="outline" className="flex-1 gap-1.5 sm:gap-2 py-5 sm:py-6 text-sm sm:text-base font-bold">
            <RotateCcw className="w-4 h-4 sm:w-5 sm:h-5" />
            {lang === 'ar' ? 'تحدٍ جديد' : 'New challenge'}
          </Button>
          <Link to="/" className="flex-1">
            <Button className="w-full gap-1.5 sm:gap-2 py-5 sm:py-6 text-sm sm:text-base font-bold">
              {lang === 'ar' ? 'الرئيسية' : 'Home'}
              <Arrow className="w-4 h-4 sm:w-5 sm:h-5" />
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  // ----- Quiz -----
  if (!currentQ) {
    return (
      <div className="max-w-2xl mx-auto space-y-5">
        <div className="flex items-center justify-between">
          <Link to="/genius-challenge" onClick={() => setPhase('intro')} className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-purple-300 hover:bg-purple-50 transition-colors">
            <Back className="w-5 h-5 text-slate-500" />
          </Link>
        </div>
        <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-16 text-center">
          <p className="font-heading font-bold text-slate-500 text-sm">
            {lang === 'ar' ? 'لا توجد أسئلة محفوظة لهذه المرحلة بعد' : 'No stored questions for this stage yet'}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar' ? 'سيتم إضافتها لاحقاً من قبل المشرف' : 'They will be added by an admin later'}
          </p>
        </div>
      </div>
    );
  }
  const options = lang === 'ar' ? currentQ.options_ar : currentQ.options_en;
  const isCorrect = String(selectedAnswer) === String(currentQ.correct_answer);

  const explanationText = lang === 'ar'
    ? `${currentQ.explanation_ar || ''}${currentQ.common_mistake_ar ? '\n\n⚠️ الخطأ الشائع: ' + currentQ.common_mistake_ar : ''}`
    : `${currentQ.explanation_en || ''}${currentQ.common_mistake_en ? '\n\n⚠️ Common mistake: ' + currentQ.common_mistake_en : ''}`;
  const goldenRule = lang === 'ar' ? currentQ.golden_rule_ar : currentQ.golden_rule_en;

  const stageInfo = STAGES.find((s) => s.key === selectedStage);

  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div ref={topRef} />
      <div className="flex items-center justify-between">
        <Link to="/genius-challenge" onClick={() => setPhase('intro')} className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-purple-300 hover:bg-purple-50 transition-colors">
          <Back className="w-5 h-5 text-slate-500" />
        </Link>
        <QuizProgressRing current={currentIndex + 1} total={questions.length} colorClass="text-purple-600" />
        <QuizLangToggle />
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        {stageInfo && (
          <span className={`inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-gradient-to-r ${stageInfo.color} text-white text-[11px] sm:text-xs font-bold`}>
            <Trophy className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
            {lang === 'ar' ? stageInfo.ar : stageInfo.en}
          </span>
        )}
        <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-[11px] sm:text-xs font-bold">
          {lang === 'ar' ? currentQ.subject_ar : currentQ.subject_en}
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-[11px] sm:text-xs font-medium">
          {t('grade')} {currentQ.grade}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: isRTL ? -30 : 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isRTL ? 30 : -30 }}
          transition={{ duration: 0.25 }}
          className="rounded-2xl bg-white border border-slate-100 p-4 sm:p-6 shadow-sm"
        >
          <div className="flex items-start gap-2.5 sm:gap-3 mb-4 sm:mb-5">
            <div className="flex-shrink-0 w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-md">
              <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <h3 className="text-sm sm:text-lg font-heading font-bold text-slate-900 leading-relaxed pt-1 sm:pt-1.5">
              {lang === 'ar' ? currentQ.question_ar : currentQ.question_en}
            </h3>
          </div>

          <div className="space-y-2 sm:space-y-2.5">
            {options.map((opt, idx) => {
              const isThisCorrect = String(idx) === String(currentQ.correct_answer);
              const isThisSelected = String(idx) === String(selectedAnswer);
              let cls = "border-slate-200 bg-white hover:border-purple-300 hover:bg-purple-50/50";
              if (isAnswered) {
                if (isThisCorrect) cls = "border-emerald-400 bg-emerald-50";
                else if (isThisSelected) cls = "border-red-400 bg-red-50";
                else cls = "border-slate-200 bg-slate-50 opacity-60";
              }
              return (
                <button
                  key={idx}
                  disabled={isAnswered}
                  onClick={() => handleAnswer(idx)}
                  className={`w-full text-start rounded-xl border-2 p-3 sm:p-4 transition-all ${cls}`}
                >
                  <div className="flex items-center gap-2.5 sm:gap-3">
                    <span className={`w-6 h-6 sm:w-7 sm:h-7 rounded-lg flex items-center justify-center text-xs sm:text-sm font-bold flex-shrink-0 ${
                      isAnswered && isThisCorrect ? 'bg-emerald-500 text-white'
                      : isAnswered && isThisSelected ? 'bg-red-500 text-white'
                      : 'bg-slate-100 text-slate-600'
                    }`}>
                      {isAnswered && isThisCorrect ? '✓' : isAnswered && isThisSelected ? '✗' : ['أ', 'ب', 'ج', 'د'][idx]}
                    </span>
                    <span className="text-sm sm:text-base text-slate-800 font-medium leading-relaxed">{opt}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Teacher feedback on correct answer too (brief praise) or wrong answer (detailed) */}
      {isAnswered && (
        <AnimatePresence>
          {isCorrect ? (
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 p-5 flex items-center gap-4"
            >
              <div className="text-4xl">🎉</div>
              <div>
                <p className="font-heading font-bold text-emerald-700">
                  {lang === 'ar' ? 'إجابة عبقرية! أحسنت' : 'Genius answer! Well done'}
                </p>
                <p className="text-sm text-emerald-600 mt-0.5">
                  {lang === 'ar' ? 'حلّلت سؤالاً لا يحلّه إلا القلّة.' : 'You solved a question few can.'}
                </p>
              </div>
            </motion.div>
          ) : (
            <WrongAnswerTeacher
              explanation={explanationText}
              goldenRule={goldenRule}
              advice={currentQ.advice_ar}
              followup={currentQ.followup}
              lang={lang}
              isRTL={isRTL}
            />
          )}
        </AnimatePresence>
      )}

      {isAnswered && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Button onClick={handleNext} className="w-full gap-2 py-5 sm:py-6 text-base font-bold bg-gradient-to-r from-purple-600 to-fuchsia-600 hover:opacity-90">
            {currentIndex < questions.length - 1 ? t('next') : (lang === 'ar' ? 'عرض النتيجة' : 'View results')}
            <Arrow className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}