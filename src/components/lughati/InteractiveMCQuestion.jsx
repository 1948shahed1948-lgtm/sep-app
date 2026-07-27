import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle } from 'lucide-react';

// مكوّن موحّد للأسئلة المتنوعة: نعم/لا · ما هذا؟ · كم عدد؟ · معلومة
// يستدعي onAnswer('1') للصحيح و onAnswer('0') للخطأ
export default function InteractiveMCQuestion({ exercise, isAnswered, onAnswer, dir = 'rtl' }) {
  const [selected, setSelected] = useState(null);
  const options = exercise.options_ar || [];
  const correctIdx = Number(exercise.correct_index);

  const handlePick = (i) => {
    if (isAnswered) return;
    setSelected(i);
    onAnswer(i === correctIdx ? '1' : '0');
  };

  // ===== نعم / لا =====
  if (exercise.type === 'yesno') {
    return (
      <div className="p-6 text-center" dir={dir}>
        {exercise.visual_emoji && (
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-6xl mb-4">
            {exercise.visual_emoji}
          </motion.div>
        )}
        <p className="text-lg font-heading font-bold text-slate-800 mb-6">{exercise.question_ar}</p>
        <div className="flex gap-4 max-w-xs mx-auto">
          {(options.length === 2 ? options : ['نعم', 'لا']).map((label, i) => {
            const isCorrect = i === correctIdx;
            const isPicked = selected === i;
            let cls = 'flex-1 py-5 rounded-2xl border-2 font-heading font-bold text-lg transition-all ';
            if (!isAnswered) {
              cls += i === 0
                ? 'border-emerald-200 bg-emerald-50 text-emerald-700 hover:border-emerald-400 hover:bg-emerald-100'
                : 'border-rose-200 bg-rose-50 text-rose-700 hover:border-rose-400 hover:bg-rose-100';
            } else if (isCorrect) {
              cls += 'border-emerald-500 bg-emerald-100 text-emerald-800';
            } else if (isPicked) {
              cls += 'border-rose-400 bg-rose-100 text-rose-700';
            } else {
              cls += 'border-slate-100 bg-slate-50 text-slate-400';
            }
            return (
              <button key={i} className={cls} onClick={() => handlePick(i)} disabled={isAnswered}>
                <span className="text-3xl block mb-1">{i === 0 ? '✅' : '❌'}</span>
                {label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ===== ما هذا؟ (إيموجي ← كلمة) =====
  if (exercise.type === 'identify') {
    return (
      <div className="p-6 text-center" dir={dir}>
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-7xl mb-3">
          {exercise.visual_emoji}
        </motion.div>
        <p className="text-lg font-heading font-bold text-slate-800 mb-5">{exercise.question_ar}</p>
        <div className="grid grid-cols-1 gap-2.5 max-w-sm mx-auto">
          {options.map((opt, i) => {
            const isCorrect = i === correctIdx;
            const isPicked = selected === i;
            let cls = 'w-full p-3.5 rounded-xl border-2 font-medium text-sm transition-all flex items-center justify-center gap-2 ';
            if (!isAnswered) cls += 'border-slate-200 hover:border-blue-400 hover:bg-blue-50 text-slate-700 cursor-pointer';
            else if (isCorrect) cls += 'border-emerald-500 bg-emerald-50 text-emerald-800';
            else if (isPicked) cls += 'border-rose-400 bg-rose-50 text-rose-700';
            else cls += 'border-slate-100 bg-slate-50 text-slate-400';
            return (
              <button key={i} className={cls} onClick={() => handlePick(i)} disabled={isAnswered}>
                {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                {isAnswered && isPicked && !isCorrect && <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />}
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    );
  }

  // ===== كم عدد؟ (عدّ إيموجي ← رقم) =====
  if (exercise.type === 'count') {
    return (
      <div className="p-6 text-center" dir={dir}>
        {exercise.visual_emojis && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap justify-center gap-2 mb-4 text-4xl">
            {exercise.visual_emojis.map((e, i) => (
              <motion.span key={i} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: i * 0.08 }}>{e}</motion.span>
            ))}
          </motion.div>
        )}
        <p className="text-lg font-heading font-bold text-slate-800 mb-5">{exercise.question_ar}</p>
        <div className="grid grid-cols-2 gap-2.5 max-w-xs mx-auto">
          {options.map((opt, i) => {
            const isCorrect = i === correctIdx;
            const isPicked = selected === i;
            let cls = 'p-4 rounded-xl border-2 font-heading font-bold text-xl transition-all ';
            if (!isAnswered) cls += 'border-slate-200 hover:border-amber-400 hover:bg-amber-50 text-slate-700 cursor-pointer';
            else if (isCorrect) cls += 'border-emerald-500 bg-emerald-50 text-emerald-800';
            else if (isPicked) cls += 'border-rose-400 bg-rose-50 text-rose-700';
            else cls += 'border-slate-100 bg-slate-50 text-slate-400';
            return (
              <button key={i} className={cls} onClick={() => handlePick(i)} disabled={isAnswered}>{opt}</button>
            );
          })}
        </div>
      </div>
    );
  }

  // ===== معلومة (اختيار من متعدد عادي) =====
  // type: 'info'
  return (
    <div className="p-6 text-center" dir={dir}>
      {exercise.visual_emoji && (
        <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="text-5xl mb-3">
          {exercise.visual_emoji}
        </motion.div>
      )}
      <p className="text-base font-heading font-bold text-slate-800 mb-5 leading-relaxed">{exercise.question_ar}</p>
      <div className="grid gap-2.5 max-w-sm mx-auto">
        {options.map((opt, i) => {
          const isCorrect = i === correctIdx;
          const isPicked = selected === i;
          let cls = 'w-full p-3.5 rounded-xl border-2 font-medium text-sm transition-all flex items-center justify-center gap-2 ';
          if (!isAnswered) cls += 'border-slate-200 hover:border-violet-400 hover:bg-violet-50 text-slate-700 cursor-pointer';
          else if (isCorrect) cls += 'border-emerald-500 bg-emerald-50 text-emerald-800';
          else if (isPicked) cls += 'border-rose-400 bg-rose-50 text-rose-700';
          else cls += 'border-slate-100 bg-slate-50 text-slate-400';
          return (
            <button key={i} className={cls} onClick={() => handlePick(i)} disabled={isAnswered}>
              {isAnswered && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
              {isAnswered && isPicked && !isCorrect && <XCircle className="w-4 h-4 text-rose-500 flex-shrink-0" />}
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}