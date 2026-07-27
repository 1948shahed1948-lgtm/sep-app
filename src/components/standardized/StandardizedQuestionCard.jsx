import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import MatchingQuestion from '@/components/standardized/MatchingQuestion';
import OrderingQuestion from '@/components/standardized/OrderingQuestion';
import ClassifyQuestion from '@/components/standardized/ClassifyQuestion';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import MathText from '@/components/shared/MathText';

export default function StandardizedQuestionCard({ exercise, lang, isAnswered, selectedAnswer, onAnswer, gradientClass, badgeLabel, explanationLabel }) {
  const question = lang === 'ar' ? exercise.question_ar : exercise.question_en;
  const explanation = lang === 'ar' ? exercise.explanation_ar : exercise.explanation_en;
  const qType = exercise.question_type || 'multiple_choice';
  const isInteractive = qType !== 'multiple_choice';
  const isCorrect = isInteractive ? selectedAnswer === '1' : String(selectedAnswer) === String(exercise.correct_answer);

  return (
    <div className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm">
      <div className={`p-6 bg-gradient-to-r ${gradientClass} text-white`}>
        {badgeLabel && (
          <span className="inline-block text-xs font-bold bg-white/20 rounded-full px-3 py-1 mb-2">{badgeLabel}</span>
        )}
        <h2 className="text-lg font-heading font-bold"><MathText text={question} /></h2>
      </div>

      {exercise.image_url && (
        <div className="px-6 pt-5">
          <div className="relative rounded-xl overflow-hidden border border-slate-100 bg-slate-50">
            <img src={exercise.image_url} alt={lang === 'ar' ? 'صورة تعليمية للسؤال' : 'Question illustration'} className="w-full h-44 sm:h-52 object-cover" loading="lazy" />
            <span className="absolute top-2 end-2 text-[10px] font-bold bg-white/85 text-slate-600 rounded-full px-2 py-0.5">
              {lang === 'ar' ? '🔍 انظر إلى الصورة' : '🔍 Look at the image'}
            </span>
          </div>
        </div>
      )}

      {qType === 'multiple_choice' && (
        <MultipleChoiceBody
          exercise={exercise}
          lang={lang}
          isAnswered={isAnswered}
          selectedAnswer={selectedAnswer}
          onAnswer={onAnswer}
          explanationLabel={explanationLabel}
        />
      )}

      {qType === 'matching' && (
        <MatchingQuestion exercise={exercise} lang={lang} isAnswered={isAnswered} onAnswer={onAnswer} />
      )}

      {qType === 'ordering' && (
        <OrderingQuestion exercise={exercise} lang={lang} isAnswered={isAnswered} onAnswer={onAnswer} />
      )}

      {qType === 'classify' && (
        <ClassifyQuestion exercise={exercise} lang={lang} isAnswered={isAnswered} onAnswer={onAnswer} />
      )}

      {isAnswered && (
        <div className="border-t border-slate-100 p-5">
          {isCorrect ? (
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
              <CheckCircle className="w-5 h-5" /> {lang === 'ar' ? 'إجابة صحيحة! أحسنت 🌟' : 'Correct! Well done 🌟'}
            </div>
          ) : (
            <WrongAnswerTeacher explanation={explanation} lang={lang} isRTL={lang === 'ar'} />
          )}
        </div>
      )}
    </div>
  );
}

function MultipleChoiceBody({ exercise, lang, isAnswered, selectedAnswer, onAnswer, explanationLabel }) {
  const options = lang === 'ar' ? (exercise.options_ar || []) : (exercise.options_en || []);
  const explanation = lang === 'ar' ? exercise.explanation_ar : exercise.explanation_en;
  return (
    <>
      <div className="p-6 space-y-3">
        {options.map((option, oi) => {
          const isCorrectOpt = String(oi) === String(exercise.correct_answer);
          const isSelected = selectedAnswer === oi;
          let stateClass = 'border-slate-200 hover:border-blue-300 hover:bg-blue-50/40';
          if (isAnswered) {
            if (isCorrectOpt) stateClass = 'border-emerald-400 bg-emerald-50';
            else if (isSelected) stateClass = 'border-red-400 bg-red-50';
            else stateClass = 'border-slate-100 opacity-60';
          }
          return (
            <button
              key={oi}
              disabled={isAnswered}
              onClick={() => onAnswer(oi)}
              className={`w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl border-2 text-start transition-all ${stateClass}`}
            >
              <span className="font-medium text-sm text-slate-700"><MathText text={option} /></span>
              {isAnswered && isCorrectOpt && <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0" />}
              {isAnswered && isSelected && !isCorrectOpt && <XCircle className="w-5 h-5 text-red-500 flex-shrink-0" />}
            </button>
          );
        })}
      </div>
    </>
  );
}