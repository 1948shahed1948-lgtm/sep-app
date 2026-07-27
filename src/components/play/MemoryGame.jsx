import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

const EMOJIS = ['🍎', '🎈', '⭐', '🐬', '🌸', '🚗'];

function build(stage) {
  const pairs = stage === 'kg' ? 4 : 6;
  const chosen = EMOJIS.slice(0, pairs);
  const cards = [...chosen, ...chosen]
    .map((emoji, i) => ({ id: i, emoji, matched: false }))
    .sort(() => Math.random() - 0.5);
  return cards;
}

export default function MemoryGame({ stage, onBack }) {
  const { lang } = useLang();
  const TOTAL_PAIRS = stage === 'kg' ? 4 : 6;
  const [cards, setCards] = useState(() => build(stage));
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  const [done, setDone] = useState(false);

  const flip = (idx) => {
    if (flipped.length === 2 || flipped.includes(idx) || matched.includes(idx)) return;
    setFlipped((f) => [...f, idx]);
  };

  useEffect(() => {
    if (flipped.length !== 2) return;
    setMoves((m) => m + 1);
    const [a, b] = flipped;
    if (cards[a].emoji === cards[b].emoji) {
      setMatched((m) => [...m, a, b]);
      setScore((s) => s + 1);
      confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
      setFlipped([]);
      if (matched.length + 2 >= cards.length) setTimeout(() => setDone(true), 600);
    } else {
      setTimeout(() => setFlipped([]), 900);
    }
  }, [flipped]); // eslint-disable-line

  if (done) {
    return (
      <PlayShell titleAr="لعبة الذاكرة" titleEn="Memory Game" onBack={onBack} score={score} total={TOTAL_PAIRS}>
        <div className="rounded-3xl bg-white border border-amber-100 p-10 text-center shadow-sm">
          <div className="text-6xl mb-4">🧠✨</div>
          <p className="text-2xl font-heading font-bold text-slate-900">
            {lang === 'ar' ? `وجدت كل الأزواج بـ ${moves} محاولة!` : `Found all pairs in ${moves} moves!`}
          </p>
          <button onClick={onBack} className="mt-6 px-6 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">
            {lang === 'ar' ? 'العودة للألعاب' : 'Back to games'}
          </button>
        </div>
      </PlayShell>
    );
  }

  return (
    <PlayShell titleAr="لعبة الذاكرة" titleEn="Memory Game" onBack={onBack} score={score} total={TOTAL_PAIRS}>
      <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm space-y-4">
        <p className="text-center text-sm font-bold text-slate-600">
          {lang === 'ar' ? `اقلب البطاقات ووجد الأزواج المتطابقة · محاولات: ${moves}` : `Flip cards, find pairs · Moves: ${moves}`}
        </p>
        <div className={`grid gap-3 ${stage === 'kg' ? 'grid-cols-4' : 'grid-cols-4'}`}>
          {cards.map((card, idx) => {
            const isUp = flipped.includes(idx) || matched.includes(idx);
            const isMatched = matched.includes(idx);
            return (
              <button
                key={card.id}
                onClick={() => flip(idx)}
                className="relative aspect-square rounded-2xl [perspective:800px]"
              >
                <motion.div
                  className="relative w-full h-full rounded-2xl"
                  style={{ transformStyle: 'preserve-3d' }}
                  animate={{ rotateY: isUp ? 180 : 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center [backface-visibility:hidden]"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <span className="text-3xl">❓</span>
                  </div>
                  <div
                    className={`absolute inset-0 rounded-2xl flex items-center justify-center [backface-visibility:hidden] ${
                      isMatched ? 'bg-emerald-100' : 'bg-white'
                    }`}
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <span className="text-3xl sm:text-4xl">{card.emoji}</span>
                  </div>
                </motion.div>
              </button>
            );
          })}
        </div>
      </div>
    </PlayShell>
  );
}