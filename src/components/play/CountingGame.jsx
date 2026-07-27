import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

const ITEM_EMOJIS = ['🍎', '🎈', '⭐', '🐬', '🌸', '🚗', '🍌', '🦋', '🎁', '🐝'];
const NUMBER_WORDS_AR = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩', '١٠'];
const NUMBER_WORDS_EN = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

function makeRound(stage) {
  const max = stage === 'kg' ? 5 : 10;
  const count = 1 + Math.floor(Math.random() * max);
  const emoji = ITEM_EMOJIS[Math.floor(Math.random() * ITEM_EMOJIS.length)];
  // 3 options including correct
  const opts = new Set([count]);
  while (opts.size < 3) opts.add(1 + Math.floor(Math.random() * max));
  const options = [...opts].sort(() => Math.random() - 0.5);
  return { count, emoji, options };
}

export default function CountingGame({ stage, onBack }) {
  const { lang } = useLang();
  const TOTAL = 5;
  const [round, setRound] = useState(() => makeRound(stage));
  const [score, setScore] = useState(0);
  const [index, setIndex] = useState(0);
  const [picked, setPicked] = useState(null);
  const [done, setDone] = useState(false);
  const words = lang === 'ar' ? NUMBER_WORDS_AR : NUMBER_WORDS_EN;

  const pick = (opt) => {
    if (picked !== null) return;
    setPicked(opt);
    const correct = opt === round.count;
    if (correct) {
      setScore((s) => s + 1);
      confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 }, scalar: 1.1 });
    }
    setTimeout(() => {
      if (index + 1 >= TOTAL) {
        setDone(true);
      } else {
        setIndex((i) => i + 1);
        setRound(makeRound(stage));
        setPicked(null);
      }
    }, 1100);
  };

  if (done) {
    return (
      <PlayShell titleAr="لعبة العد" titleEn="Counting Game" onBack={onBack} score={score} total={TOTAL}>
        <div className="rounded-3xl bg-white border border-amber-100 p-10 text-center shadow-sm">
          <div className="text-6xl mb-4">{score >= 4 ? '🏆' : score >= 2 ? '🎉' : '💪'}</div>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {lang === 'ar' ? `نجماتك: ${score} / ${TOTAL}` : `Stars: ${score} / ${TOTAL}`}
          </p>
          <button onClick={onBack} className="mt-6 px-6 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">
            {lang === 'ar' ? 'العودة للألعاب' : 'Back to games'}
          </button>
        </div>
      </PlayShell>
    );
  }

  return (
    <PlayShell titleAr="لعبة العد" titleEn="Counting Game" onBack={onBack} score={score} total={TOTAL}>
      <div className="rounded-3xl bg-white border border-amber-100 p-6 sm:p-8 shadow-sm space-y-6">
        <p className="text-center text-base font-bold text-slate-700">
          {lang === 'ar' ? 'كم عدد الأشياء؟' : 'How many items?'}
        </p>
        <div key={index} className="flex flex-wrap justify-center gap-3 min-h-[120px] items-center">
          {Array.from({ length: round.count }).map((_, i) => (
            <motion.span
              key={i}
              initial={{ scale: 0, rotate: -20 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ delay: i * 0.08, type: 'spring' }}
              className="text-4xl sm:text-5xl"
            >
              {round.emoji}
            </motion.span>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-3">
          {round.options.map((opt) => {
            const isPicked = picked === opt;
            const isCorrect = opt === round.count;
            const show = picked !== null;
            return (
              <button
                key={opt}
                onClick={() => pick(opt)}
                disabled={picked !== null}
                className={`py-6 rounded-2xl text-2xl font-heading font-bold border-2 transition-all ${
                  show && isCorrect
                    ? 'bg-emerald-100 border-emerald-400 text-emerald-700'
                    : show && isPicked
                    ? 'bg-rose-100 border-rose-400 text-rose-700'
                    : 'bg-amber-50 border-amber-200 text-slate-700 hover:bg-amber-100 hover:border-amber-300'
                }`}
              >
                {words[opt]}
              </button>
            );
          })}
        </div>
      </div>
    </PlayShell>
  );
}