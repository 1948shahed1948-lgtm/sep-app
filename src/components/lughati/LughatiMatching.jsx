import React, { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathText from '@/components/shared/MathText';

const PAIR_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#ef4444'];

// وصل تفاعلي للصف الأول: الحروف (يسار) ↔ الصور (يمين) بحجم كبير
export default function LughatiMatching({ exercise, isAnswered, onAnswer, dir = 'rtl', lang = 'ar' }) {
  const pairs = exercise.matching_pairs_ar || [];
  const leftItems = useMemo(() => pairs.map((p, i) => ({ ...p, idx: i })), [pairs]);
  const rightItems = useMemo(() => {
    const shuffled = [...pairs.map((p, i) => ({ ...p, idx: i }))];
    return shuffled.sort(() => Math.random() - 0.5);
  }, [pairs]);

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [connections, setConnections] = useState({});
  const [checked, setChecked] = useState(false);

  const handleLeftClick = (leftIdx) => {
    if (isAnswered || checked) return;
    setSelectedLeft(leftIdx);
  };
  const handleRightClick = (rightIdx) => {
    if (isAnswered || checked || selectedLeft === null) return;
    setConnections((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((k) => { if (updated[k] === rightIdx) delete updated[k]; });
      updated[selectedLeft] = rightIdx;
      return updated;
    });
    setSelectedLeft(null);
  };
  const handleCheck = () => {
    setChecked(true);
    const allCorrect = leftItems.every((l) => connections[l.idx] === l.idx);
    onAnswer(allCorrect ? '1' : '0');
  };

  const colorFor = (leftIdx) => PAIR_COLORS[leftIdx % PAIR_COLORS.length];

  return (
    <div className="p-5 space-y-4">
      <p className="text-sm text-slate-500 flex items-center gap-1.5">
        <Link2 className="w-4 h-4" />
        {lang === 'en' ? 'Click a word then its match to connect' : 'اضغط على حرف ثم على الصورة التي تبدأ به لتوصيلهما'}
      </p>
      <div className="grid grid-cols-2 gap-4">
        {/* الحروف */}
        <div className="space-y-2.5">
          {leftItems.map((l) => {
            const connectedRight = connections[l.idx];
            const isConnected = connectedRight !== undefined;
            const isCorrect = checked && connectedRight === l.idx;
            const isWrong = checked && isConnected && connectedRight !== l.idx;
            return (
              <button
                key={l.idx}
                disabled={isAnswered || checked}
                onClick={() => handleLeftClick(l.idx)}
                className={`w-full py-3 rounded-2xl border-2 transition-all flex items-center justify-center gap-2 ${
                  selectedLeft === l.idx ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' :
                  isCorrect ? 'border-emerald-400 bg-emerald-50' :
                  isWrong ? 'border-red-400 bg-red-50' :
                  isConnected ? 'border-slate-300 bg-slate-50' :
                  'border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                }`}
              >
                <span className="text-4xl font-heading font-bold text-slate-800"><MathText text={l.left} /></span>
                {isConnected && <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: colorFor(l.idx) }} />}
              </button>
            );
          })}
        </div>
        {/* الصور */}
        <div className="space-y-2.5">
          {rightItems.map((r) => {
            const connectedBy = Object.entries(connections).find(([, ri]) => ri === r.idx);
            const isUsed = connectedBy !== undefined;
            const leftIdx = connectedBy ? Number(connectedBy[0]) : null;
            const isCorrect = checked && isUsed && leftIdx === r.idx;
            const isWrong = checked && isUsed && leftIdx !== r.idx;
            return (
              <button
                key={r.idx}
                disabled={isAnswered || checked || isUsed}
                onClick={() => handleRightClick(r.idx)}
                className={`w-full py-3 rounded-2xl border-2 transition-all flex items-center justify-center gap-2 ${
                  isCorrect ? 'border-emerald-400 bg-emerald-50' :
                  isWrong ? 'border-red-400 bg-red-50' :
                  isUsed ? 'border-slate-300 bg-slate-50 opacity-70' :
                  'border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                }`}
              >
                <span className="text-5xl leading-none"><MathText text={r.right} /></span>
                {isUsed && <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: colorFor(leftIdx) }} />}
              </button>
            );
          })}
        </div>
      </div>
      {!isAnswered && !checked && (
        <Button onClick={handleCheck} disabled={Object.keys(connections).length < leftItems.length} className="w-full gap-2">
          {lang === 'en' ? 'Check answers' : 'تحقق من الإجابات'}
        </Button>
      )}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-medium">
          {leftItems.every((l) => connections[l.idx] === l.idx)
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">{lang === 'en' ? 'Correct!' : 'إجابة صحيحة!'}</span></>
            : <><XCircle className="w-5 h-5 text-red-500" /><span className="text-red-600">{lang === 'en' ? 'Some connections are wrong' : 'بعض التوصيلات غير صحيحة'}</span></>}
        </div>
      )}
    </div>
  );
}