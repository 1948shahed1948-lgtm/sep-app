import React, { useState, useEffect, useCallback } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { useParams, Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuizProgressRing from '@/components/quiz/QuizProgressRing';
import QuizLangToggle from '@/components/quiz/QuizLangToggle';
import AptitudeQuestionCard from '@/components/aptitude/AptitudeQuestionCard';
import AptitudeResultsScreen from '@/components/aptitude/AptitudeResultsScreen';
import { aptitudeTopics } from '@/lib/aptitudeQuestions';

export default function AptitudeGradePractice() {
  const { section, topicIndex, grade } = useParams();
  const { t, lang, isRTL } = useLang();
  const Back = isRTL ? ChevronRight : ChevronLeft;

  const [loading, setLoading] = useState(true);
  const [exercises, setExercises] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [startTime] = useState(Date.now());
  const topRef = useScrollTopOnChange(currentIndex);

  const topic = (aptitudeTopics[section] || []).find((tp) => String(tp.key) === String(topicIndex));
  const topicTitleAr = topic?.titleAr || '';
  const topicTitleEn = topic?.titleEn || '';
  const badgeLabel = `${lang === 'ar' ? topicTitleAr : topicTitleEn} · ${t('grade')} ${grade}`;

  const loadExercises = useCallback(async () => {
    setLoading(true);
    try {
      const existing = await base44.entities.AptitudeQuestion.filter({ section, topic_index: Number(topicIndex), grade: Number(grade) });
      setExercises(existing);
    } catch {
      setExercises([]);
    }
    setLoading(false);
  }, [section, topicIndex, grade]);

  useEffect(() => { loadExercises(); }, [loadExercises]);

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

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-sm text-slate-500 font-medium">
          {lang === 'ar' ? 'جاري التحميل...' : 'Loading...'}
        </p>
      </div>
    );
  }

  if (showResults) {
    return (
      <AptitudeResultsScreen
        results={results}
        exercises={exercises}
        lang={lang}
        t={t}
        onRetry={handleRetry}
        backTo="/aptitude"
      />
    );
  }

  if (!currentExercise) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link to="/aptitude" className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <Back className="w-5 h-5 text-slate-500" />
          </Link>
        </div>
        <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-16 text-center">
          <p className="font-heading font-bold text-slate-500 text-sm">
            {lang === 'ar' ? 'لا توجد أسئلة محفوظة لهذا الموضوع بعد' : 'No stored questions for this topic yet'}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar' ? 'سيتم إضافتها لاحقاً من قبل المشرف' : 'They will be added by an admin later'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div ref={topRef} />
      <div className="flex items-center justify-between">
        <Link to="/aptitude" className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-colors">
          <Back className="w-5 h-5 text-slate-500" />
        </Link>
        <QuizProgressRing current={currentIndex + 1} total={exercises.length} colorClass={section === 'verbal' ? 'text-violet-600' : 'text-blue-600'} />
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
            gradientClass={section === 'verbal' ? 'from-violet-600 to-purple-600' : 'from-blue-600 to-cyan-600'}
            badgeLabel={badgeLabel}
            explanationLabel={t('explanation')}
          />
        </motion.div>
      </AnimatePresence>

      {isAnswered && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Button onClick={handleNext} className="w-full gap-2 py-6 text-base font-bold">
            {currentIndex < exercises.length - 1 ? t('next') : t('viewResults')}
          </Button>
        </motion.div>
      )}
    </div>
  );
}