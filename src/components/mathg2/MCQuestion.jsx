import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

const COLORS = ['#e91e8c', '#0891b2', '#059669', '#d97706'];
const LETTERS = ['أ', 'ب', 'ج', 'د'];

export default function MCQuestion({ q, onAnswer, answered }) {
  return (
    <div className="space-y-3">
      {q.options.map((opt, i) => {
        const isCorrect = i === q.correctAnswer;
        const isChosen = answered?.chosen === i;
        const showCorrect = answered && isCorrect;
        const showWrong = answered && isChosen && !isCorrect;
        return (
          <button key={i} disabled={!!answered} onClick={() => !answered && onAnswer(i, isCorrect)}
            className="w-full text-start rounded-xl p-4 border-2 transition-all flex items-center gap-3 disabled:cursor-default"
            style={{ borderColor: showCorrect ? '#059669' : showWrong ? '#dc2626' : COLORS[i] + '55', background: showCorrect ? '#ecfdf5' : showWrong ? '#fef2f2' : 'white' }}>
            <span className="w-9 h-9 rounded-lg flex items-center justify-center font-bold text-white flex-shrink-0" style={{ background: COLORS[i] }}>{LETTERS[i]}</span>
            <span className="flex-1 font-body text-slate-800 text-lg tracking-wide">{opt}</span>
            {showCorrect && <CheckCircle2 className="w-6 h-6 text-emerald-600" />}
            {showWrong && <XCircle className="w-6 h-6 text-red-600" />}
          </button>
        );
      })}
    </div>
  );
}