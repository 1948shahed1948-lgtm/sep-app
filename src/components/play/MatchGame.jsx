import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

const SETS = {
  kg: {
    label: 'الأشكال',
    pairs: [
      { left: '🔴', right: '🔴', word: 'دائرة' },
      { left: '🔺', right: '🔺', word: 'مثلث' },
      { left: '🟦', right: '🟦', word: 'مربع' },
      { left: '⭐', right: '⭐', word: 'نجمة' },
    ],
  },
  g1: {
    label: 'الحروف والكلمات',
    pairs: [
      { left: '🦁', right: 'أسد', word: 'أسد' },
      { left: '🌞', right: 'شمس', word: 'شمس' },
      { left: '🌳', right: 'شجرة', word: 'شجرة' },
      { left: '🐟', right: 'سمكة', word: 'سمكة' },
      { left: '🍎', right: 'تفاحة', word: 'تفاحة' },
      { left: '🏡', right: 'بيت', word: 'بيت' },
    ],
  },
};

function shuffle(arr) {
  return [...arr].sort(() => Math.random() - 0.5);
}

export default function MatchGame({ stage, onBack }) {
  const { lang } = useLang();
  const TOTAL = SETS[stage].pairs.length;
  const [lefts] = useState(() => shuffle(SETS[stage].pairs.map((p, i) => ({ ...p, id: i }))));
  const [rights] = useState(() => shuffle(SETS[stage].pairs.map((p, i) => ({ ...p, id: i }))));
  const [selLeft, setSelLeft] = useState(null);
  const [matched, setMatched] = useState([]);
  const [wrong, setWrong] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const clickLeft = (id) => {
    if (matched.includes(id)) return;
    setSelLeft(id);
    setWrong(false);
  };

  const clickRight = (item) => {
    if (matched.includes(item.id) || selLeft === null) return;
    if (item.id === selLeft) {
      setMatched((m) => [...m, item.id]);
      setScore((s) => s + 1);
      setSelLeft(null);
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      if (matched.length + 1 >= TOTAL) setTimeout(() => setDone(true), 600);
    } else {
      setWrong(true);
      setTimeout(() => setWrong(false), 700);
    }
  };

  if (done) {
    return (
      <PlayShell titleAr="لعبة المطابقة" titleEn="Matching Game" onBack={onBack} score={score} total={TOTAL}>
        <div className="rounded-3xl bg-white border border-amber-100 p-10 text-center shadow-sm">
          <div className="text-6xl mb-4">🏆</div>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {lang === 'ar' ? `أحسنت! ${score} / ${TOTAL}` : `Great! ${score} / ${TOTAL}`}
          </p>
          <button onClick={onBack} className="mt-6 px-6 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">
            {lang === 'ar' ? 'العودة للألعاب' : 'Back to games'}
          </button>
        </div>
      </PlayShell>
    );
  }

  return (
    <PlayShell titleAr="لعبة المطابقة" titleEn="Matching Game" onBack={onBack} score={score} total={TOTAL}>
      <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm space-y-4">
        <p className="text-center text-sm font-bold text-slate-600">
          {lang === 'ar' ? 'اضغط على بطاقة ثم نظيرتها' : 'Tap a card then its match'}
        </p>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-3">
            {lefts.map((item) => {
              const isMatched = matched.includes(item.id);
              const isSel = selLeft === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => clickLeft(item.id)}
                  disabled={isMatched}
                  className={`w-full py-5 rounded-2xl text-3xl border-2 transition-all ${
                    isMatched
                      ? 'bg-emerald-100 border-emerald-300 opacity-60'
                      : isSel
                      ? 'bg-amber-200 border-amber-400 scale-105'
                      : 'bg-sky-50 border-sky-200 hover:bg-sky-100'
                  } ${wrong && isSel ? 'bg-rose-100 border-rose-400' : ''}`}
                >
                  {item.left}
                </button>
              );
            })}
          </div>
          <div className="space-y-3">
            {rights.map((item) => {
              const isMatched = matched.includes(item.id);
              return (
                <button
                  key={item.id}
                  onClick={() => clickRight(item)}
                  disabled={isMatched}
                  className={`w-full py-5 rounded-2xl text-xl font-heading font-bold border-2 transition-all ${
                    isMatched
                      ? 'bg-emerald-100 border-emerald-300 opacity-60'
                      : 'bg-violet-50 border-violet-200 hover:bg-violet-100'
                  }`}
                >
                  {item.right}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </PlayShell>
  );
}