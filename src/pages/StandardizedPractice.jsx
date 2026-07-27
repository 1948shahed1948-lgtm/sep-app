import React, { useState, useCallback, useEffect } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { base44 } from '@/api/base44Client';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuizProgressRing from '@/components/quiz/QuizProgressRing';
import QuizLangToggle from '@/components/quiz/QuizLangToggle';
import StandardizedQuestionCard from '@/components/standardized/StandardizedQuestionCard';
import DiagnosticResults from '@/components/standardized/DiagnosticResults';
import CriterionResults from '@/components/standardized/CriterionResults';
import AdaptiveResults from '@/components/standardized/AdaptiveResults';
import { standardizedTestTypes, STUDENTS_CARTOON_IMAGE } from '@/lib/standardizedTestTypes';
import CountdownTimer from '@/components/quiz/CountdownTimer';
import { withQuestionImages } from '@/lib/bankImagePools';

const TOTAL_QUESTIONS = 20;
const DIAGNOSTIC_TIME_SECONDS = TOTAL_QUESTIONS * 60; // 1 minute per question
const ADAPTIVE_PER_LEVEL = 14;
const ADAPTIVE_TOTAL = 15;
const DIFFICULTY_ORDER = ['easy', 'medium', 'hard'];

const isPrimaryGrade = (g) => Number(g) <= 6;

async function loadStoredQuestions(type, grade) {
  const g = Number(grade);
  // اجلب عدداً محدوداً فقط (يكفي للاختيار العشوائي + التكيفي) — لا حاجة لجلب كل البنك
  const POOL_LIMIT = type === 'adaptive' ? 60 : 40;
  const raw = await base44.entities.StandardizedQuestion.filter({ test_type: type, grade: g }, '-created_date', POOL_LIMIT);
  // أضف صورة تعليمية مناسبة لموضوع كل سؤال (لكل المراحل والأنواع)
  return withQuestionImages(raw, 'general', '');
}

function pickAdaptiveQuestion(pool, usedIds, difficulty) {
  const order = difficulty === 'easy' ? ['easy', 'medium', 'hard'] : difficulty === 'hard' ? ['hard', 'medium', 'easy'] : ['medium', 'easy', 'hard'];
  for (const d of order) {
    const candidates = pool.filter((q) => q.difficulty === d && !usedIds.includes(q.id));
    if (candidates.length > 0) return candidates[Math.floor(Math.random() * candidates.length)];
  }
  return null;
}

export default function StandardizedPractice() {
  const { type, grade } = useParams();
  const { t, lang, isRTL } = useLang();
  const Back = isRTL ? ChevronRight : ChevronLeft;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const testType = standardizedTestTypes[type];

  const [phase, setPhase] = useState('loading'); // loading | quiz | results (intro skipped — enter test directly)
  const [pool, setPool] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState([]);
  const [difficulty, setDifficulty] = useState('medium');
  const [reinforcementCount, setReinforcementCount] = useState(0);
  const [startTime] = useState(Date.now());
  const [timeLeft, setTimeLeft] = useState(null);
  const topRef = useScrollTopOnChange(currentIndex);

  const start = useCallback(async () => {
    const questions = await loadStoredQuestions(type, grade);
    setPool(questions);
    if (type === 'adaptive') {
      const usedIds = [];
      const first = pickAdaptiveQuestion(questions, usedIds, 'medium');
      setExercises(first ? [first] : []);
    } else {
      const shuffled = [...questions].sort(() => Math.random() - 0.5).slice(0, TOTAL_QUESTIONS);
      setExercises(shuffled);
    }
    if (type === 'diagnostic') setTimeLeft(DIAGNOSTIC_TIME_SECONDS);
    setPhase('quiz');
  }, [type, grade]);

  // Enter the test directly on mount — no intro/student card screen
  useEffect(() => {
    start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (phase !== 'quiz' || type !== 'diagnostic' || timeLeft === null) return;
    if (timeLeft <= 0) {
      setPhase('results');
      saveResult(results, exercises.length);
      return;
    }
    const timer = setTimeout(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, phase, type]);

  const currentExercise = exercises[currentIndex];

  const handleAnswer = (answerIndex) => {
    if (isAnswered) return;
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    const isCorrect = String(answerIndex) === String(currentExercise.correct_answer);
    setResults((prev) => [...prev, { index: currentIndex, answer: answerIndex, isCorrect }]);
    if (type === 'adaptive') {
      // Adaptive rule: easy + wrong → 2 reinforcement easy questions to consolidate
      if (currentExercise.difficulty === 'easy' && !isCorrect) {
        setReinforcementCount(2);
        setDifficulty('easy');
      } else {
        const curLevelIdx = DIFFICULTY_ORDER.indexOf(currentExercise.difficulty);
        // Correct → jump to harder (capped at hard); wrong → step down
        const nextLevelIdx = isCorrect ? Math.min(curLevelIdx + 1, 2) : Math.max(curLevelIdx - 1, 0);
        setDifficulty(DIFFICULTY_ORDER[nextLevelIdx]);
        setReinforcementCount(0);
      }
    }
  };

  const saveResult = async (allResults, total) => {
    try {
      const user = await base44.auth.me();
      const correct = allResults.filter((r) => r.isCorrect).length;
      await base44.entities.QuizResult.create({
        user_id: user.id,
        quiz_type: 'aptitude_test',
        total_questions: total,
        correct_count: correct,
        wrong_count: total - correct,
        score_percentage: Math.round((correct / total) * 100),
        time_taken_seconds: Math.round((Date.now() - startTime) / 1000),
      });
      // تنبيه فوري للمشرف بإتمام الاختبار
      const tt = standardizedTestTypes[type];
      const label_ar = `أتمم اختباراً ${tt ? tt.titleAr : ''} (الصف ${grade}) — ${correct}/${total}`;
      const label_en = `Completed ${tt ? tt.titleEn : ''} test (grade ${grade}) — ${correct}/${total}`;
      base44.functions.invoke('notifyStudentCompletion', {
        kind: 'test_completed',
        label_ar,
        label_en,
        details: label_ar,
        route: `/standardized/${type}/${grade}`,
      }).catch(() => {});
    } catch {}
  };

  const handleNext = () => {
    if (type === 'adaptive') {
      if (exercises.length >= ADAPTIVE_TOTAL) {
        setPhase('results');
        saveResult(results, exercises.length);
        return;
      }
      const usedIds = exercises.map((e) => e.id);
      let nextDifficulty = difficulty;
      if (reinforcementCount > 0) {
        nextDifficulty = 'easy';
        setReinforcementCount((c) => c - 1);
      }
      const nextQ = pickAdaptiveQuestion(pool, usedIds, nextDifficulty);
      if (!nextQ) {
        setPhase('results');
        saveResult(results, exercises.length);
        return;
      }
      setExercises((prev) => [...prev, nextQ]);
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
      return;
    }

    if (currentIndex < exercises.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setPhase('results');
      saveResult(results, exercises.length);
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setResults([]);
    setDifficulty('medium');
    setReinforcementCount(0);
    setTimeLeft(null);
    setPhase('loading');
    start();
  };

  if (!testType) return null;

  if (phase === 'loading') {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-sm text-slate-500 font-medium">{lang === 'ar' ? 'جاري إعداد الأسئلة...' : 'Preparing questions...'}</p>
      </div>
    );
  }

  if (phase === 'results') {
    const backTo = `/standardized/${type}/grades`;
    if (type === 'diagnostic') return <DiagnosticResults results={results} exercises={exercises} lang={lang} onRetry={handleRetry} backTo={backTo} />;
    if (type === 'criterion') return <CriterionResults results={results} exercises={exercises} lang={lang} onRetry={handleRetry} backTo={backTo} />;
    return <AdaptiveResults results={results} exercises={exercises} finalDifficulty={difficulty} lang={lang} onRetry={handleRetry} backTo={backTo} />;
  }

  if (!currentExercise) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <Link to={`/standardized/${type}/grades`} className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-colors">
            <Back className="w-5 h-5 text-slate-500" />
          </Link>
        </div>
        <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 px-6 py-16 text-center">
          <p className="font-heading font-bold text-slate-500 text-sm">
            {lang === 'ar' ? 'لا توجد أسئلة محفوظة لهذا الصف بعد' : 'No stored questions for this grade yet'}
          </p>
          <p className="text-xs text-slate-400 mt-1">
            {lang === 'ar' ? 'سيتم إضافتها لاحقاً من قبل المشرف' : 'They will be added by an admin later'}
          </p>
        </div>
      </div>
    );
  }

  const badgeLabel = `${lang === 'ar' ? testType.titleAr : testType.titleEn} · ${t('grade')} ${grade}`;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div ref={topRef} />
      <div className="flex items-center justify-between">
        <Link to={`/standardized/${type}/grades`} className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-colors">
          <Back className="w-5 h-5 text-slate-500" />
        </Link>
        <QuizProgressRing current={currentIndex + 1} total={type === 'adaptive' ? ADAPTIVE_TOTAL : exercises.length} colorClass="text-blue-600" />
        <div className="flex items-center gap-2">
          {type === 'diagnostic' && timeLeft !== null && <CountdownTimer seconds={timeLeft} />}
          <QuizLangToggle />
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={currentIndex} initial={{ opacity: 0, x: isRTL ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isRTL ? 50 : -50 }}>
          <StandardizedQuestionCard
            exercise={currentExercise}
            lang={lang}
            isAnswered={isAnswered}
            selectedAnswer={selectedAnswer}
            onAnswer={handleAnswer}
            gradientClass={testType.color}
            badgeLabel={badgeLabel}
            explanationLabel={t('explanation')}
          />
        </motion.div>
      </AnimatePresence>

      {isAnswered && (
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
          <Button onClick={handleNext} className="w-full gap-2 py-6 text-base font-bold">
            {t('next')}
            <Arrow className="w-5 h-5" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}