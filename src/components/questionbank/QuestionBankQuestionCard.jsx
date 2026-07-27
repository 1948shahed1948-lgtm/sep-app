import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Lightbulb, Crown, FileText } from 'lucide-react';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';

const TEACHER_URL = 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/f278d2da1_generated_image.png';

// Option color themes: pink / cyan / emerald / amber
const OPTION_THEME = [
  { ring: 'border-pink-300', bg: 'bg-pink-50', dot: 'bg-pink-500', chip: 'bg-pink-100 text-pink-700', correct: 'border-pink-500 bg-pink-50' },
  { ring: 'border-cyan-300', bg: 'bg-cyan-50', dot: 'bg-cyan-500', chip: 'bg-cyan-100 text-cyan-700', correct: 'border-cyan-500 bg-cyan-50' },
  { ring: 'border-emerald-300', bg: 'bg-emerald-50', dot: 'bg-emerald-500', chip: 'bg-emerald-100 text-emerald-700', correct: 'border-emerald-500 bg-emerald-50' },
  { ring: 'border-amber-300', bg: 'bg-amber-50', dot: 'bg-amber-500', chip: 'bg-amber-100 text-amber-700', correct: 'border-amber-500 bg-amber-50' }
];

export default function QuestionBankQuestionCard({ exercise, lang, isAnswered, selectedAnswer, onAnswer, badgeLabel }) {
  const isAR = lang === 'ar';
  const question = isAR ? exercise.question_ar : exercise.question_en;
  const options = (isAR ? exercise.options_ar : exercise.options_en) || [];
  const explanation = isAR ? exercise.explanation_ar : exercise.explanation_en;
  const solutionSteps = isAR ? exercise.solution_steps_ar : exercise.solution_steps_en;
  const goldenRule = isAR ? exercise.golden_rule_ar : exercise.golden_rule_en;
  const feedbackQuestion = isAR ? exercise.feedback_question_ar : exercise.feedback_question_en;
  const feedbackOptions = (isAR ? exercise.feedback_options_ar : exercise.feedback_options_en) || [];
  const feedbackExplanation = isAR ? exercise.feedback_explanation_ar : exercise.feedback_explanation_en;

  const [feedbackAnswer, setFeedbackAnswer] = useState(null);
  const [feedbackAnswered, setFeedbackAnswered] = useState(false);
  const isCorrect = String(selectedAnswer) === String(exercise.correct_answer);

  const handleFeedback = (idx) => {
    if (feedbackAnswered) return;
    setFeedbackAnswer(idx);
    setFeedbackAnswered(true);
  };

  return (
    <div className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm">
      {/* Header */}
      <div className="p-6 bg-gradient-to-r from-[#263D84] to-[#3E57A4] text-white">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          {badgeLabel && (
            <span className="inline-block text-xs font-bold bg-white/20 rounded-full px-3 py-1">{badgeLabel}</span>
          )}
          <div className="flex items-center gap-2">
            {exercise.page_number ? (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold bg-white/15 rounded-full px-2.5 py-1">
                <FileText className="w-3 h-3" />
                {isAR ? 'صفحة' : 'p.'} {exercise.page_number}
                {exercise.paragraph ? ` · ${exercise.paragraph}` : ''}
              </span>
            ) : null}
            {exercise.difficulty && (
              <span className={`text-[11px] font-bold rounded-full px-2.5 py-1 ${exercise.difficulty === 'hard' ? 'bg-rose-500/80' : 'bg-amber-400/80'}`}>
                {exercise.difficulty === 'hard' ? (isAR ? 'صعب' : 'Hard') : (isAR ? 'متوسط' : 'Medium')}
              </span>
            )}
          </div>
        </div>
        <h2 className="text-lg font-heading font-bold leading-relaxed">{question}</h2>
      </div>

      {/* Colored options */}
      <div className="p-6 space-y-3">
        {options.map((option, oi) => {
          const theme = OPTION_THEME[oi % 4];
          const isSelected = selectedAnswer === oi;
          const isCorrect = String(oi) === String(exercise.correct_answer);
          let cls = `${theme.bg} ${theme.ring} hover:scale-[1.01]`;
          if (isAnswered) {
            if (isCorrect) cls = `${theme.correct} ring-2`;
            else if (isSelected) cls = 'border-red-400 bg-red-50 ring-2';
            else cls = 'border-slate-100 bg-slate-50 opacity-60';
          }
          return (
            <button
              key={oi}
              onClick={() => onAnswer(oi)}
              disabled={isAnswered}
              className={`w-full flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-start ${cls}`}
            >
              <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${theme.dot} text-white`}>
                {isAnswered && isCorrect ? <CheckCircle className="w-5 h-5" /> :
                  isAnswered && isSelected ? <XCircle className="w-5 h-5" /> :
                  String.fromCharCode(65 + oi)}
              </div>
              <span className="font-medium text-sm text-slate-700 flex-1">{option}</span>
              {isAnswered && isCorrect && <span className="text-emerald-600 font-bold text-xl">✓</span>}
              {isAnswered && isSelected && !isCorrect && <span className="text-red-500 font-bold text-xl">✗</span>}
            </button>
          );
        })}
      </div>

      {/* After-answer section */}
      <AnimatePresence>
        {isAnswered && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} className="border-t border-slate-100">
            {isCorrect ? (
              <div className="p-5 flex items-center gap-2 text-sm font-bold text-emerald-700 bg-emerald-50/50">
                <CheckCircle className="w-5 h-5" /> {isAR ? 'إجابة صحيحة! أحسنت 🌟' : 'Correct! Well done 🌟'}
              </div>
            ) : (
              <div className="p-5">
                <WrongAnswerTeacher
                  explanation={explanation || (isAR ? 'راجع خطوات الحل ثم حاول مرة أخرى.' : 'Review the solution steps and try again.')}
                  detail={solutionSteps}
                  goldenRule={goldenRule}
                  followup={feedbackQuestion && feedbackOptions.length === 4 ? {
                    question_ar: feedbackQuestion,
                    question_en: feedbackQuestion,
                    options_ar: feedbackOptions,
                    options_en: feedbackOptions,
                    correct: Number(exercise.feedback_correct_answer),
                  } : undefined}
                  lang={lang}
                  isRTL={isAR}
                />
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}