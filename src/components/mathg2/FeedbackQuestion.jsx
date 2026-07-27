import React from 'react';
import MCQuestion from './MCQuestion';

export default function FeedbackQuestion({ fq, onAnswer, answered }) {
  const wrapped = {
    options: fq.opts,
    correctAnswer: fq.correct,
  };
  return (
    <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-4 mt-4">
      <p className="font-bold text-blue-800 mb-2">💡 سؤال التغذية الراجعة</p>
      <p className="mb-3 text-slate-700">{fq.q}</p>
      <MCQuestion q={wrapped} onAnswer={onAnswer} answered={answered} />
    </div>
  );
}