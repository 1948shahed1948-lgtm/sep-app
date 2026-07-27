import React from 'react';
import InteractiveQuestionShapes from '@/components/aptitude/InteractiveQuestionShapes';
import ShapeDragDropOptions from '@/components/aptitude/ShapeDragDropOptions';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import { CheckCircle2 } from 'lucide-react';
import MathText from '@/components/shared/MathText';

export default function AptitudeQuestionCard({ exercise, lang, isAnswered, selectedAnswer, onAnswer, gradientClass, badgeLabel, explanationLabel }) {
  const question = lang === 'ar' ? exercise.question_ar : exercise.question_en;
  const options = lang === 'ar' ? (exercise.options_ar || []) : (exercise.options_en || []);
  const explanation = lang === 'ar' ? exercise.explanation_ar : exercise.explanation_en;
  const isCorrect = String(selectedAnswer) === String(exercise.correct_answer);

  return (
    <div className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm">
      <div className={`relative p-6 bg-gradient-to-r ${gradientClass} text-white overflow-hidden`}>
        <InteractiveQuestionShapes />
        <div className="relative">
          {badgeLabel && (
            <span className="inline-block text-xs font-bold bg-white/20 rounded-full px-3 py-1 mb-2">{badgeLabel}</span>
          )}
          <h2 className="text-lg font-heading font-bold"><MathText text={question} /></h2>
        </div>
      </div>
      <div className="p-6">
        <ShapeDragDropOptions options={options} exercise={exercise} isAnswered={isAnswered} selectedAnswer={selectedAnswer} onAnswer={onAnswer} lang={lang} />
      </div>
      {isAnswered && (
        <div className="border-t border-slate-100 p-5">
          {isCorrect ? (
            <div className="flex items-center gap-2 text-sm font-bold text-emerald-700">
              <CheckCircle2 className="w-5 h-5" /> {lang === 'ar' ? 'إجابة صحيحة! أحسنت 🌟' : 'Correct! Well done 🌟'}
            </div>
          ) : (
            <WrongAnswerTeacher explanation={explanation} lang={lang} isRTL={lang === 'ar'} />
          )}
        </div>
      )}
    </div>
  );
}