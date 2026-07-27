import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import { useLang } from '@/lib/i18n';
import PlayShell from './PlayShell';

const PADS = [
  { key: 0, ar: 'أحمر', en: 'red', bg: 'bg-rose-500', lit: 'bg-rose-300' },
  { key: 1, ar: 'أزرق', en: 'blue', bg: 'bg-blue-500', lit: 'bg-blue-300' },
  { key: 2, ar: 'أخضر', en: 'green', bg: 'bg-emerald-500', lit: 'bg-emerald-300' },
  { key: 3, ar: 'أصفر', en: 'yellow', bg: 'bg-amber-400', lit: 'bg-amber-200' },
];

export default function SimonGame({ stage, onBack }) {
  const { lang } = useLang();
  const [seq, setSeq] = useState([]);
  const [userIdx, setUserIdx] = useState(0);
  const [lit, setLit] = useState(-1);
  const [phase, setPhase] = useState('idle'); // idle | show | input | over
  const [best, setBest] = useState(0);
  const timers = useRef([]);

  const clearTimers = () => { timers.current.forEach(clearTimeout); timers.current = []; };

  const showSeq = (s) => {
    setPhase('show'); setLit(-1);
    s.forEach((pad, i) => {
      timers.current.push(setTimeout(() => setLit(pad), 600 * i + 400));
      timers.current.push(setTimeout(() => setLit(-1), 600 * i + 750));
    });
    timers.current.push(setTimeout(() => { setPhase('input'); setUserIdx(0); }, 600 * s.length + 500));
  };

  const start = () => {
    clearTimers();
    const first = [Math.floor(Math.random() * 4)];
    setSeq(first); setUserIdx(0);
    showSeq(first);
  };

  const tap = (pad) => {
    if (phase !== 'input') return;
    setLit(pad);
    setTimeout(() => setLit(-1), 220);
    if (seq[userIdx] === pad) {
      const next = userIdx + 1;
      if (next >= seq.length) {
        setBest((b) => Math.max(b, seq.length));
        confetti({ particleCount: 60, spread: 60, origin: { y: 0.6 } });
        const grown = [...seq, Math.floor(Math.random() * 4)];
        setSeq(grown);
        setTimeout(() => showSeq(grown), 700);
      } else setUserIdx(next);
    } else {
      setPhase('over'); clearTimers();
    }
  };

  useEffect(() => () => clearTimers(), []);

  return (
    <PlayShell titleAr="سايمون" titleEn="Simon Says" onBack={onBack} score={seq.length - (phase === 'over' ? 1 : 0)} total={best}>
      <div className="rounded-3xl bg-white border border-amber-100 p-6 shadow-sm space-y-4">
        <p className="text-center text-sm font-bold text-slate-600">
          {phase === 'show' ? (lang === 'ar' ? 'شاهد التسلسل...' : 'Watch...') :
           phase === 'input' ? (lang === 'ar' ? `كرّر التسلسل (${userIdx}/${seq.length})` : `Repeat (${userIdx}/${seq.length})`) :
           phase === 'over' ? (lang === 'ar' ? `خطأ! وصلت ${seq.length - 1}` : `Wrong! Reached ${seq.length - 1}`) :
           (lang === 'ar' ? 'اضغط ابدأ وشاهد الألوان' : 'Press start & watch colors')}
        </p>
        <div className="grid grid-cols-2 gap-3 max-w-xs mx-auto">
          {PADS.map((p) => (
            <button
              key={p.key}
              onClick={() => tap(p.key)}
              className={`aspect-square rounded-2xl transition-all duration-150 ${lit === p.key ? p.lit + ' scale-95' : p.bg}`}
            />
          ))}
        </div>
        <div className="text-center">
          <button onClick={start} className="px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors">
            {lang === 'ar' ? 'ابدأ' : 'Start'}
          </button>
        </div>
      </div>
    </PlayShell>
  );
}