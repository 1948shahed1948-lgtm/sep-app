import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

const COLORS = [
  { emoji: '🔴', ar: 'أحمر', en: 'red' },
  { emoji: '🟦', ar: 'أزرق', en: 'blue' },
  { emoji: '🟩', ar: 'أخضر', en: 'green' },
  { emoji: '🟨', ar: 'أصفر', en: 'yellow' },
];

export default function BalloonPop({ stage, onBack }) {
  const { lang } = useLang();
  const TIME = 25;
  const [target] = useState(() => COLORS[Math.floor(Math.random() * COLORS.length)]);
  const [balloons, setBalloons] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(TIME);
  const [over, setOver] = useState(false);
  const idRef = useRef(0);

  useEffect(() => {
    if (over) return;
    const spawn = setInterval(() => {
      const c = COLORS[Math.floor(Math.random() * COLORS.length)];
      setBalloons((b) => [...b.slice(-8), { id: idRef.current++, emoji: c.emoji, color: c.ar, x: 8 + Math.random() * 80 }]);
    }, stage === 'kg' ? 900 : 650);
    return () => clearInterval(spawn);
  }, [over, stage]);

  useEffect(() => {
    if (over) return;
    const t = setInterval(() => setTime((s) => (s > 0 ? s - 1 : 0)), 1000);
    if (time === 0) setOver(true);
    return () => clearInterval(t);
  }, [time, over]);

  const pop = (id, colorAr) => {
    if (over) return;
    if (colorAr === target.ar) {
      setScore((s) => s + 1);
      confetti({ particleCount: 30, spread: 50, origin: { y: 0.4 }, scalar: 0.7 });
    } else {
      setScore((s) => Math.max(0, s - 1));
    }
    setBalloons((b) => b.filter((x) => x.id !== id));
  };

  return (
    <PlayShell titleAr="فقع البالونات" titleEn="Balloon Pop" onBack={onBack} score={score} total={TIME}>
      <div className="rounded-3xl bg-white border border-amber-100 p-4 shadow-sm space-y-3">
        <p className="text-center text-sm font-bold text-slate-600">
          {lang === 'ar' ? `فقع فقط البالون ${target.ar} ${target.emoji} — الوقت ${time}ث` : `Pop only ${target.en} ${target.emoji} — ${time}s`}
        </p>
        <div className="relative h-72 overflow-hidden rounded-2xl bg-sky-50">
          <AnimatePresence>
            {balloons.map((b) => (
              <motion.button
                key={b.id}
                initial={{ y: 260, x: `${b.x}%`, opacity: 0 }}
                animate={{ y: -40, opacity: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 4, ease: 'linear' }}
                onClick={() => pop(b.id, b.color)}
                className="absolute text-4xl"
              >
                {b.emoji}
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
        {over && (
          <div className="text-center">
            <p className="text-lg font-heading font-bold text-slate-900">{lang === 'ar' ? `انتهى! نتيجتك ${score}` : `Done! Score ${score}`}</p>
            <button onClick={() => { setScore(0); setTime(TIME); setOver(false); setBalloons([]); }} className="mt-2 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">
              {lang === 'ar' ? 'مرة أخرى' : 'Again'}
            </button>
          </div>
        )}
      </div>
    </PlayShell>
  );
}