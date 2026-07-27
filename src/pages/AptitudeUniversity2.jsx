import React, { useState, useEffect, useCallback } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Brain, Sigma, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import QuizProgressRing from '@/components/quiz/QuizProgressRing';
import QuizLangToggle from '@/components/quiz/QuizLangToggle';
import AptitudeQuestionCard from '@/components/aptitude/AptitudeQuestionCard';
import AptitudeResultsScreen from '@/components/aptitude/AptitudeResultsScreen';

const SECTION_META = {
  verbal: {
    titleAr: 'القسم اللفظي',
    titleEn: 'Verbal Section',
    descAr: 'استيعاب المقروء، إكمال الجمل، التناظر اللفظي، الخطأ السياقي، المفردات',
    descEn: 'Reading, sentence completion, analogy, contextual error, vocabulary',
    gradient: 'from-violet-600 to-purple-600',
    icon: Brain,
  },
  quantitative: {
    titleAr: 'القسم الكمي',
    titleEn: 'Quantitative Section',
    descAr: 'الحساب، الجبر، الهندسة، الإحصاء والاحتمالات، المقارنات الكمية',
    descEn: 'Arithmetic, algebra, geometry, statistics, quantitative comparisons',
    gradient: 'from-blue-600 to-cyan-600',
    icon: Sigma,
  },
};

export default function AptitudeUniversity2() {
  const { t, lang, isRTL } = useLang();
  const Back = isRTL ? ChevronRight : ChevronLeft;

  const [selectedSection, setSelectedSection] = useState(null);
  const [counts, setCounts] = useState({ verbal: 0, quantitative: 0 });
  const [loadingCounts, setLoadingCounts] = useState(true);

  const [loading, setLoading] = useState(false);
  const [exercises, setExercises] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [startTime] = useState(Date.now());
  const topRef = useScrollTopOnChange(currentIndex);

  // Load question counts for the landing view (grade 12 = university aptitude)
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const verbal = await base44.entities.AptitudeQuestion.filter({ section: 'verbal', grade: 12 });
        const quant = await base44.entities.AptitudeQuestion.filter({ section: 'quantitative', grade: 12 });
        if (active) setCounts({ verbal: verbal.length, quantitative: quant.length });
      } catch {
        if (active) setCounts({ verbal: 0, quantitative: 0 });
      }
      if (active) setLoadingCounts(false);
    })();
    return () => { active = false; };
  }, []);

  const startSection = useCallback(async (section) => {
    setLoading(true);
    setSelectedSection(section);
    try {
      const list = await base44.entities.AptitudeQuestion.filter({ section, grade: 12 });
      // Shuffle for variety, but keep stable within a session
      const shuffled = [...list].sort(() => Math.random() - 0.5);
      setExercises(shuffled);
    } catch {
      setExercises([]);
    }
    setLoading(false);
  }, []);

  const currentExercise = exercises[currentIndex];

  const handleAnswer = (answerIndex) => {
    if (isAnswered) return;
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    const isCorrect = String(answerIndex) === String(currentExercise.correct_answer);
    setResults((prev) => [...prev, { index: currentIndex, answer: answerIndex, isCorrect }]);
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      saveResults();
    }
  };

  const saveResults = async () => {
    try {
      const user = await base44.auth.me();
      const correct = results.filter((r) => r.isCorrect).length;
      const total = exercises.length;
      await base44.entities.QuizResult.create({
        user_id: user.id,
        quiz_type: 'aptitude_test',
        total_questions: total,
        correct_count: correct,
        wrong_count: total - correct,
        score_percentage: Math.round((correct / total) * 100),
        time_taken_seconds: Math.round((Date.now() - startTime) / 1000),
      });
    } catch {}
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setResults([]);
    setShowResults(false);
  };

  const handleBackToMenu = () => {
    setSelectedSection(null);
    setExercises([]);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setResults([]);
    setShowResults(false);
  };

  // ---- Results view ----
  if (showResults) {
    return (
      <AptitudeResultsScreen
        results={results}
        exercises={exercises}
        lang={lang}
        t={t}
        onRetry={handleRetry}
        backTo="/aptitude-university-2"
      />
    );
  }

  // ---- Practice view ----
  if (selectedSection) {
    if (loading) {
      return (
        <div className="max-w-2xl mx-auto py-24 flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
          <p className="text-sm text-slate-500 font-medium">
            {lang === 'ar' ? 'جاري تحضير الأسئلة...' : 'Preparing questions...'}
          </p>
        </div>
      );
    }

    if (!currentExercise) {
      return (
        <div className="max-w-2xl mx-auto space-y-6">
          <div className="flex items-center justify-between">
            <button onClick={handleBackToMenu} className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-colors">
              <Back className="w-5 h-5 text-slate-500" />
            </button>
          </div>
          <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-16 text-center">
            <p className="font-heading font-bold text-slate-500 text-sm">
              {lang === 'ar' ? 'لا توجد أسئلة محفوظة لهذا القسم بعد' : 'No stored questions for this section yet'}
            </p>
          </div>
        </div>
      );
    }

    const meta = SECTION_META[selectedSection];
    const badgeLabel = `${lang === 'ar' ? meta.titleAr : meta.titleEn}`;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div ref={topRef} />
        <div className="flex items-center justify-between">
          <button onClick={handleBackToMenu} className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <Back className="w-5 h-5 text-slate-500" />
          </button>
          <QuizProgressRing current={currentIndex + 1} total={exercises.length} colorClass={selectedSection === 'verbal' ? 'text-violet-600' : 'text-blue-600'} />
          <QuizLangToggle />
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={currentIndex} initial={{ opacity: 0, x: isRTL ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isRTL ? 50 : -50 }}>
            <AptitudeQuestionCard
              exercise={currentExercise}
              lang={lang}
              isAnswered={isAnswered}
              selectedAnswer={selectedAnswer}
              onAnswer={handleAnswer}
              gradientClass={meta.gradient}
              badgeLabel={badgeLabel}
              explanationLabel={t('explanation')}
            />
          </motion.div>
        </AnimatePresence>

        {isAnswered && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Button onClick={handleNext} className="w-full gap-2 py-6 text-base font-bold">
              {currentIndex < exercises.length - 1 ? t('next') : t('viewResults')}
              {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Button>
          </motion.div>
        )}
      </div>
    );
  }

  // ---- Landing / section selection view ----
  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <PageHeader
        title={lang === 'ar' ? 'اختبارات القدرات الجامعية ٢' : 'University Aptitude Tests 2'}
        subtitle={lang === 'ar' ? '٢٠٠ سؤال واقعي محفوظ من اختبارات قياس — تدريب مجاني دائم' : '200 stored realistic Qiyas questions — free permanent practice'}
        backTo="/"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {Object.entries(SECTION_META).map(([key, meta]) => {
          const Icon = meta.icon;
          const count = counts[key];
          return (
            <motion.button
              key={key}
              onClick={() => startSection(key)}
              whileHover={{ y: -4 }}
              className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${meta.gradient} p-7 text-white text-right shadow-lg`}
            >
              <div className="absolute -top-6 -left-6 opacity-20">
                <Icon className="w-32 h-32" />
              </div>
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-left">
                    {loadingCounts ? (
                      <div className="w-8 h-8 border-3 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <p className="text-3xl font-heading font-bold">{count}</p>
                    )}
                    <p className="text-xs text-white/70 font-medium">{lang === 'ar' ? 'سؤال' : 'questions'}</p>
                  </div>
                </div>
                <h3 className="text-xl font-heading font-bold mb-1">
                  {lang === 'ar' ? meta.titleAr : meta.titleEn}
                </h3>
                <p className="text-sm text-white/80 leading-relaxed mb-4">
                  {lang === 'ar' ? meta.descAr : meta.descEn}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-bold bg-white/20 rounded-full px-4 py-2">
                  {lang === 'ar' ? 'ابدأ التدريب' : 'Start Practice'}
                  {isRTL ? <ArrowLeft className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </span>
              </div>
            </motion.button>
          );
        })}
      </div>

      <div className="rounded-2xl bg-white border border-slate-100 p-5 flex items-center gap-3 shadow-sm">
        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
          <Brain className="w-5 h-5 text-emerald-600" />
        </div>
        <p className="text-sm text-slate-600 leading-relaxed">
          {lang === 'ar'
            ? 'جميع الأسئلة محفوظة دائماً في المنصة — التدريب عليها مجاني ولا يستهلك أي رصيد.'
            : 'All questions are permanently stored — practicing them is free and consumes no credits.'}
        </p>
      </div>
    </div>
  );
}