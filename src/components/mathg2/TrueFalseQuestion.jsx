import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function TrueFalseQuestion({ q, onAnswer, answered }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      {[true, false].map((val, i) => {
        const isChosen = answered?.chosen === val;
        const showCorrect = answered && val === q.correctAnswer;
        const showWrong = answered && isChosen && val !== q.correctAnswer;
        return (
          <button key={i} disabled={!!answered} onClick={() => !answered && onAnswer(val, val === q.correctAnswer)}
            className="rounded-2xl p-6 border-2 transition-all flex flex-col items-center gap-2 disabled:cursor-default"
            style={{ borderColor: showCorrect ? '#059669' : showWrong ? '#dc2626' : (val ? '#05966955' : '#dc262655'), background: showCorrect ? '#ecfdf5' : showWrong ? '#fef2f2' : 'white' }}>
            {val ? <CheckCircle2 className="w-12 h-12 text-emerald-600" /> : <XCircle className="w-12 h-12 text-red-500" />}
            <span className="font-heading font-bold text-lg">{val ? 'صح ✓' : 'خطأ ✗'}</span>
          </button>
        );
      })}
    </div>
  );
}