import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

export default function WhackAMole({ stage, onBack }) {
  const { lang } = useLang();
  const TIME = 30;
  const [active, setActive] = useState(-1);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(TIME);
  const [over, setOver] = useState(false);
  const speed = stage === 'kg' ? 950 : 700;

  useEffect(() => {
    if (over) return;
    const pop = setInterval(() => setActive(Math.floor(Math.random() * 9)), speed);
    return () => clearInterval(pop);
  }, [over, speed]);

  useEffect(() => {
    if (over) return;
    const t = setInterval(() => setTime((s) => s > 0 ? s - 1 : 0), 1000);
    if (time === 0) setOver(true);
    return () => clearInterval(t);
  }, [time, over]);

  const hit = (i) => {
    if (i !== active || over) return;
    setScore((s) => s + 1);
    setActive(-1);
    confetti({ particleCount: 30, spread: 50, origin: { y: 0.5 }, scalar: 0.8 });
  };

  return (
    <PlayShell titleAr="لعبة الخلد" titleEn="Whack-a-Mole" onBack={onBack} score={score} total={TIME}>
      <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm space-y-4">
        <p className="text-center text-sm font-bold text-slate-600">
          {lang === 'ar' ? `اقفل الخلد! الوقت: ${time}ث` : `Whack the mole! Time: ${time}s`}
        </p>
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 9 }).map((_, i) => (
            <button
              key={i}
              onClick={() => hit(i)}
              className="aspect-square rounded-2xl bg-emerald-900/80 flex items-center justify-center overflow-hidden"
            >
              <AnimatePresence>
                {active === i && (
                  <motion.span
                    initial={{ y: 60, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 60, opacity: 0 }}
                    transition={{ type: 'spring' }}
                    className="text-5xl"
                  >
                    🐹
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          ))}
        </div>
        {over && (
          <div className="text-center pt-2">
            <p className="text-lg font-heading font-bold text-slate-900">{lang === 'ar' ? `انتهى! أصبت ${score}` : `Time! You hit ${score}`}</p>
            <button onClick={() => { setScore(0); setTime(TIME); setOver(false); }} className="mt-3 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">
              {lang === 'ar' ? 'مرة أخرى' : 'Again'}
            </button>
          </div>
        )}
      </div>
    </PlayShell>
  );
}