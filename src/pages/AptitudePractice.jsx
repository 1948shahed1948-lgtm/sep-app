import React, { useState, useEffect } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, CheckCircle, XCircle, ArrowLeft, ArrowRight, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuizProgressRing from '@/components/quiz/QuizProgressRing';
import QuizLangToggle from '@/components/quiz/QuizLangToggle';
import ResultScoreRing from '@/components/quiz/ResultScoreRing';
import InteractiveQuestionShapes from '@/components/aptitude/InteractiveQuestionShapes';
import ShapeDragDropOptions from '@/components/aptitude/ShapeDragDropOptions';
import { aptitudeQuestions, aptitudeTopics } from '@/lib/aptitudeQuestions';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';

function getAptitudeExercises(section, topicIndex) {
  const sectionData = aptitudeQuestions[section];
  if (!sectionData) return [];
  if (topicIndex === 'practice') {
    return Object.entries(sectionData).flatMap(([idx, qs]) => qs.map(q => ({ ...q, _topicIndex: idx })));
  }
  return (sectionData[topicIndex] || []).map(q => ({ ...q, _topicIndex: topicIndex }));
}

function getSkillTitle(section, topicIndex, lang) {
  const topic = (aptitudeTopics[section] || []).find(tp => String(tp.key) === String(topicIndex));
  if (!topic) return '';
  return lang === 'ar' ? topic.titleAr : topic.titleEn;
}

function getGoldenRule(section, topicIndex, lang) {
  const topic = (aptitudeTopics[section] || []).find(tp => String(tp.key) === String(topicIndex));
  if (!topic) return '';
  return lang === 'ar' ? topic.goldenRuleAr : topic.goldenRuleEn;
}

export default function AptitudePractice() {
  const { section, topicIndex } = useParams();
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
  const topRef = useScrollTopOnChange(currentIndex);

  useEffect(() => {
    setExercises(getAptitudeExercises(section, topicIndex));
  }, [section, topicIndex]);

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
      const allResults = [...results];
      if (currentExercise && selectedAnswer !== null) {
        const lastCorrect = String(selectedAnswer) === String(currentExercise.correct_answer);
        if (!allResults.find(r => r.index === currentIndex)) {
          allResults.push({ index: currentIndex, answer: selectedAnswer, isCorrect: lastCorrect });
        }
      }
      const correct = allResults.filter(r => r.isCorrect).length;
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

  if (!currentExercise && !showResults) return null;

  if (showResults) {
    const correctCount = results.filter(r => r.isCorrect).length;
    const total = exercises.length;
    const percentage = Math.round((correctCount / total) * 100);

    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={`rounded-2xl p-8 text-center ${percentage >= 70 ? 'bg-gradient-to-br from-emerald-500 to-teal-600' : 'bg-gradient-to-br from-amber-500 to-orange-600'} text-white`}
        >
          <div className="text-4xl mb-3">{percentage >= 70 ? '🎉' : '💪'}</div>
          <ResultScoreRing percentage={percentage} />
          <h2 className="text-2xl font-heading font-bold mt-4 mb-2">
            {percentage >= 70 ? t('congratulations') : t('keepPracticing')}
          </h2>
          <p className="text-white/80">
            {correctCount} {t('correct')} · {total - correctCount} {t('wrong')}
          </p>
        </motion.div>

        <div className="space-y-3">
          <h3 className="text-lg font-heading font-bold text-slate-900 flex items-center gap-2">
            <Target className="w-5 h-5 text-red-500" />
            {t('errorAnalysis')}
          </h3>
          {results.map((result, i) => {
            const ex = exercises[result.index];
            if (!ex) return null;
            const question = lang === 'ar' ? ex.question_ar : ex.question_en;
            const explanation = lang === 'ar' ? ex.explanation_ar : ex.explanation_en;
            const options = lang === 'ar' ? (ex.options_ar || []) : (ex.options_en || []);
            return (
              <div key={i} className={`rounded-xl border p-4 ${result.isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                <div className="flex items-start gap-2">
                  {result.isCorrect ? <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /> : <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />}
                  <div className="space-y-1">
                    <p className="font-medium text-sm text-slate-800">{question}</p>
                    {!result.isCorrect && (
                      <>
                        <p className="text-xs text-red-600">{t('yourAnswer')}: {options[result.answer]}</p>
                        <p className="text-xs text-emerald-600">{t('correctAnswer')}: {options[parseInt(ex.correct_answer)]}</p>
                      </>
                    )}
                    <p className="text-xs text-slate-500">{explanation}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex gap-3">
          <Button onClick={() => { setCurrentIndex(0); setSelectedAnswer(null); setIsAnswered(false); setResults([]); setShowResults(false); }} variant="outline" className="flex-1">{t('tryAgain')}</Button>
          <Link to="/aptitude" className="flex-1"><Button className="w-full">{lang === 'ar' ? 'العودة' : 'Back'}</Button></Link>
        </div>
      </div>
    );
  }

  const question = lang === 'ar' ? currentExercise.question_ar : currentExercise.question_en;
  const options = lang === 'ar' ? (currentExercise.options_ar || []) : (currentExercise.options_en || []);
  const explanation = lang === 'ar' ? currentExercise.explanation_ar : currentExercise.explanation_en;

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
        <motion.div key={currentIndex} initial={{ opacity: 0, x: isRTL ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isRTL ? 50 : -50 }} className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm">
          <div className={`relative p-6 bg-gradient-to-r ${section === 'verbal' ? 'from-violet-600 to-purple-600' : 'from-blue-600 to-cyan-600'} text-white overflow-hidden`}>
            <InteractiveQuestionShapes />
            <div className="relative">
              {getSkillTitle(section, currentExercise._topicIndex, lang) && (
                <span className="inline-block text-xs font-bold bg-white/20 rounded-full px-3 py-1 mb-2">
                  {getSkillTitle(section, currentExercise._topicIndex, lang)}
                </span>
              )}
              <h2 className="text-lg font-heading font-bold">{question}</h2>
            </div>
          </div>
          <div className="p-6">
            <ShapeDragDropOptions options={options} exercise={currentExercise} isAnswered={isAnswered} selectedAnswer={selectedAnswer} onAnswer={handleAnswer} lang={lang} />
          </div>
        </motion.div>
      </AnimatePresence>

      {isAnswered && (
        <>
          {String(selectedAnswer) === String(currentExercise.correct_answer) ? (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl bg-emerald-50 border border-emerald-200 p-4">
              <p className="text-sm text-emerald-800"><span className="font-bold">{t('explanation')}:</span> {explanation}</p>
            </motion.div>
          ) : (
            <WrongAnswerTeacher
              explanation={explanation}
              goldenRule={getGoldenRule(section, currentExercise._topicIndex, lang)}
              advice={currentExercise.advice_ar}
              followup={currentExercise.followup}
              lang={lang}
              isRTL={isRTL}
            />
          )}
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
            <Button onClick={handleNext} className="w-full gap-2 py-6 text-base font-bold">
              {currentIndex < exercises.length - 1 ? t('next') : t('viewResults')}
              {isRTL ? <ArrowLeft className="w-5 h-5" /> : <ArrowRight className="w-5 h-5" />}
            </Button>
          </motion.div>
        </>
      )}
    </div>
  );
}