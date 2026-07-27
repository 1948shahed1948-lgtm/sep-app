import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, ArrowLeft, ArrowRight, Zap, Clock, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuizProgressRing from '@/components/quiz/QuizProgressRing';
import QuizLangToggle from '@/components/quiz/QuizLangToggle';
import ResultScoreRing from '@/components/quiz/ResultScoreRing';

function generateExercises(lang) {
  const exercises = [
    {
      question_ar: "ما هو ناتج 15 × 4؟",
      question_en: "What is 15 × 4?",
      type: "multiple_choice",
      options_ar: ["50", "60", "55", "65"],
      options_en: ["50", "60", "55", "65"],
      correct_answer: "1",
      explanation_ar: "15 × 4 = 60",
      explanation_en: "15 × 4 = 60",
      difficulty: "easy"
    },
    {
      question_ar: "أي من التالي عدد أولي؟",
      question_en: "Which of the following is a prime number?",
      type: "multiple_choice",
      options_ar: ["4", "9", "7", "6"],
      options_en: ["4", "9", "7", "6"],
      correct_answer: "2",
      explanation_ar: "العدد 7 هو عدد أولي لأنه لا يقبل القسمة إلا على 1 وعلى نفسه",
      explanation_en: "7 is a prime number because it's only divisible by 1 and itself",
      difficulty: "easy"
    },
    {
      question_ar: "إذا كان x + 5 = 12، فما قيمة x؟",
      question_en: "If x + 5 = 12, what is the value of x?",
      type: "multiple_choice",
      options_ar: ["5", "6", "7", "8"],
      options_en: ["5", "6", "7", "8"],
      correct_answer: "2",
      explanation_ar: "x = 12 - 5 = 7",
      explanation_en: "x = 12 - 5 = 7",
      difficulty: "medium"
    },
    {
      question_ar: "الأرض تدور حول الشمس",
      question_en: "The Earth revolves around the Sun",
      type: "true_false",
      options_ar: ["صحيح", "خاطئ"],
      options_en: ["True", "False"],
      correct_answer: "0",
      explanation_ar: "نعم، الأرض تدور حول الشمس في مدار إهليلجي",
      explanation_en: "Yes, the Earth revolves around the Sun in an elliptical orbit",
      difficulty: "easy"
    },
    {
      question_ar: "ما هو الجذر التربيعي لـ 144؟",
      question_en: "What is the square root of 144?",
      type: "multiple_choice",
      options_ar: ["10", "11", "12", "13"],
      options_en: ["10", "11", "12", "13"],
      correct_answer: "2",
      explanation_ar: "√144 = 12 لأن 12 × 12 = 144",
      explanation_en: "√144 = 12 because 12 × 12 = 144",
      difficulty: "medium"
    }
  ];
  return exercises;
}

export default function Practice() {
  const { curriculum, grade, subjectId, lessonId, skillId } = useParams();
  const { t, lang, isRTL } = useLang();
  const navigate = useNavigate();
  const Back = isRTL ? ChevronRight : ChevronLeft;

  const [exercises, setExercises] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [startTime] = useState(Date.now());
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        if (skillId && !skillId.startsWith('skill_')) {
          const data = await base44.entities.Exercise.filter({ skill_id: skillId });
          if (data.length > 0) {
            setExercises(data);
            setLoading(false);
            return;
          }
        }
      } catch {}
      setExercises(generateExercises(lang));
      setLoading(false);
    };
    load();
  }, [skillId, lang]);

  const currentExercise = exercises[currentIndex];

  const handleAnswer = (answerIndex) => {
    if (isAnswered) return;
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    const isCorrect = String(answerIndex) === String(currentExercise.correct_answer);
    setResults(prev => [...prev, { index: currentIndex, answer: answerIndex, isCorrect }]);
  };

  const handleNext = () => {
    if (currentIndex < exercises.length - 1) {
      setCurrentIndex(prev => prev + 1);
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
      const correct = results.filter(r => r.isCorrect).length + (String(selectedAnswer) === String(currentExercise?.correct_answer) ? 1 : 0);
      const total = exercises.length;
      const score = Math.round((correct / total) * 100);

      await base44.entities.QuizResult.create({
        user_id: user.id,
        skill_id: skillId || '',
        lesson_id: lessonId || '',
        quiz_type: 'skill_quiz',
        total_questions: total,
        correct_count: correct,
        wrong_count: total - correct,
        score_percentage: score,
        time_taken_seconds: Math.round((Date.now() - startTime) / 1000),
        weakness_detected: score < 60 ? [skillId || 'general'] : [],
      });
      // تنبيه فوري للمشرف بإتمام اختبار الدرس
      base44.functions.invoke('notifyStudentCompletion', {
        kind: 'test_completed',
        label_ar: `أتمم اختبار درس — ${correct}/${total} (${score}%)`,
        label_en: `Completed lesson quiz — ${correct}/${total} (${score}%)`,
        details: `الدرس: ${lessonId || ''}`,
        route: window.location.pathname,
      }).catch(() => {});
    } catch {}
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (showResults) {
    const finalResults = [...results];
    if (currentExercise && selectedAnswer !== null) {
      const lastCorrect = String(selectedAnswer) === String(currentExercise.correct_answer);
      if (!finalResults.find(r => r.index === currentIndex)) {
        finalResults.push({ index: currentIndex, answer: selectedAnswer, isCorrect: lastCorrect });
      }
    }
    const correctCount = finalResults.filter(r => r.isCorrect).length;
    const total = exercises.length;
    const percentage = Math.round((correctCount / total) * 100);
    const passed = percentage >= 80;

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-2xl p-8 text-center ${passed ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-amber-500 to-orange-600'} text-white`}
        >
          <div className="text-4xl mb-3">{passed ? '🎉' : '💪'}</div>
          <ResultScoreRing percentage={percentage} />
          <h2 className="text-2xl font-heading font-bold mt-4 mb-2">
            {passed ? t('congratulations') : t('keepPracticing')}
          </h2>
          <p className="text-white/80">
            {correctCount} {t('correct')} · {total - correctCount} {t('wrong')} · {total} {t('questionsCount')}
          </p>
        </motion.div>

        {/* Error Analysis */}
        <div className="space-y-3">
          <h3 className="text-lg font-heading font-bold text-slate-900 flex items-center gap-2">
            <Target className="w-5 h-5 text-red-500" />
            {t('errorAnalysis')}
          </h3>
          {finalResults.map((result, i) => {
            const ex = exercises[result.index];
            if (!ex) return null;
            const question = lang === 'ar' ? ex.question_ar : ex.question_en;
            const explanation = lang === 'ar' ? ex.explanation_ar : ex.explanation_en;
            const options = lang === 'ar' ? (ex.options_ar || []) : (ex.options_en || []);

            return (
              <div
                key={i}
                className={`rounded-xl border p-4 ${result.isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}
              >
                <div className="flex items-start gap-2">
                  {result.isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  )}
                  <div className="space-y-1">
                    <p className="font-medium text-sm text-slate-800">{question}</p>
                    {!result.isCorrect && (
                      <>
                        <p className="text-xs text-red-600">
                          {t('yourAnswer')}: {options[result.answer] || result.answer}
                        </p>
                        <p className="text-xs text-emerald-600">
                          {t('correctAnswer')}: {options[parseInt(ex.correct_answer)] || ex.correct_answer}
                        </p>
                      </>
                    )}
                    <p className="text-xs text-slate-500">{explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Weakness Detection */}
        {!passed && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-amber-50 border border-amber-200 p-5"
          >
            <h3 className="font-heading font-bold text-amber-800 flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4" />
              {t('weaknessDetection')}
            </h3>
            <p className="text-sm text-amber-700">
              {lang === 'ar'
                ? `نسبة الإتقان ${percentage}% — تحتاج إلى مزيد من التدريب على هذه المهارة. حاول مرة أخرى بعد مراجعة الدرس.`
                : `Mastery at ${percentage}% — you need more practice on this skill. Try again after reviewing the lesson.`}
            </p>
          </motion.div>
        )}

        <div className="flex gap-3">
          <Button
            onClick={() => {
              setCurrentIndex(0);
              setSelectedAnswer(null);
              setIsAnswered(false);
              setResults([]);
              setShowResults(false);
            }}
            variant="outline"
            className="flex-1 gap-2"
          >
            {t('tryAgain')}
          </Button>
          <Link to={`/curriculum/${curriculum}/${grade}/subject/${subjectId}/lesson/${lessonId}`} className="flex-1">
            <Button className="w-full gap-2">
              {t('backToLessons')}
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  if (!currentExercise) return null;

  const question = lang === 'ar' ? currentExercise.question_ar : currentExercise.question_en;
  const options = lang === 'ar' ? (currentExercise.options_ar || []) : (currentExercise.options_en || []);
  const explanation = lang === 'ar' ? currentExercise.explanation_ar : currentExercise.explanation_en;
  const progressPercent = ((currentIndex + 1) / exercises.length) * 100;

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Link
          to={`/curriculum/${curriculum}/${grade}/subject/${subjectId}/lesson/${lessonId}`}
          className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-colors"
        >
          <Back className="w-5 h-5 text-slate-500" />
        </Link>
        <QuizProgressRing current={currentIndex + 1} total={exercises.length} />
        <QuizLangToggle />
      </div>

      {/* Question Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: isRTL ? -50 : 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: isRTL ? 50 : -50 }}
          className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm"
        >
          <div className="p-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
            <div className="flex items-center gap-2 mb-3">
              <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                currentExercise.difficulty === 'easy' ? 'bg-emerald-400/20 text-emerald-100' :
                currentExercise.difficulty === 'hard' ? 'bg-red-400/20 text-red-100' :
                'bg-amber-400/20 text-amber-100'
              }`}>
                {currentExercise.difficulty === 'easy' ? (lang === 'ar' ? 'سهل' : 'Easy') :
                 currentExercise.difficulty === 'hard' ? (lang === 'ar' ? 'صعب' : 'Hard') :
                 (lang === 'ar' ? 'متوسط' : 'Medium')}
              </span>
              <span className="text-xs text-blue-200 capitalize">{currentExercise.type.replace('_', ' ')}</span>
            </div>
            <h2 className="text-lg font-heading font-bold">{question}</h2>
          </div>

          <div className="p-6 space-y-3">
            {options.map((option, oi) => {
              const isSelected = selectedAnswer === oi;
              const isCorrect = String(oi) === String(currentExercise.correct_answer);
              let optionStyle = "border-slate-200 bg-white hover:border-blue-300 hover:bg-blue-50/50";
              if (isAnswered) {
                if (isCorrect) optionStyle = "border-emerald-400 bg-emerald-50";
                else if (isSelected && !isCorrect) optionStyle = "border-red-400 bg-red-50";
                else optionStyle = "border-slate-100 bg-slate-50 opacity-60";
              } else if (isSelected) {
                optionStyle = "border-blue-400 bg-blue-50";
              }

              return (
                <button
                  key={oi}
                  onClick={() => handleAnswer(oi)}
                  disabled={isAnswered}
                  className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-start ${optionStyle}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${
                    isAnswered && isCorrect ? 'bg-emerald-500 text-white' :
                    isAnswered && isSelected && !isCorrect ? 'bg-red-500 text-white' :
                    isSelected ? 'bg-blue-500 text-white' :
                    'bg-slate-100 text-slate-500'
                  }`}>
                    {isAnswered && isCorrect ? <CheckCircle className="w-4 h-4" /> :
                     isAnswered && isSelected && !isCorrect ? <XCircle className="w-4 h-4" /> :
                     String.fromCharCode(65 + oi)}
                  </div>
                  <span className="font-medium text-sm text-slate-700">{option}</span>
                </button>
              );
            })}
          </div>

          {/* Explanation after answer */}
          {isAnswered && explanation && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="border-t border-slate-100 p-5 bg-slate-50"
            >
              <p className="text-sm text-slate-600">
                <span className="font-bold text-slate-700">{t('explanation')}:</span> {explanation}
              </p>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Next button */}
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