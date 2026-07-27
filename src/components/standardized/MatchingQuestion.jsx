import React, { useState, useMemo } from 'react';
import { CheckCircle2, XCircle, Link2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PAIR_COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#8b5cf6', '#ef4444'];

export default function MatchingQuestion({ exercise, lang, isAnswered, onAnswer }) {
  const pairs = lang === 'ar' ? (exercise.matching_pairs_ar || []) : (exercise.matching_pairs_en || []);
  const leftItems = useMemo(() => pairs.map((p, i) => ({ ...p, idx: i })), [pairs]);
  const rightItems = useMemo(() => {
    const shuffled = [...pairs.map((p, i) => ({ ...p, idx: i }))];
    return shuffled.sort(() => Math.random() - 0.5);
  }, [pairs]);

  const [selectedLeft, setSelectedLeft] = useState(null);
  const [connections, setConnections] = useState({}); // leftIdx -> rightIdx
  const [checked, setChecked] = useState(false);

  const handleLeftClick = (leftIdx) => {
    if (isAnswered || checked) return;
    setSelectedLeft(leftIdx);
  };

  const handleRightClick = (rightIdx) => {
    if (isAnswered || checked || selectedLeft === null) return;
    setConnections((prev) => {
      const updated = { ...prev };
      // remove any existing connection to this right item
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
  const usedRights = Object.values(connections);

  return (
    <div className="p-6 space-y-4">
      <p className="text-sm text-slate-500 flex items-center gap-1.5">
        <Link2 className="w-4 h-4" />
        {lang === 'ar' ? 'اضغط على عنصر من اليمين ثم عنصر من اليسار لتوصيلهما' : 'Tap a left item then a right item to connect them'}
      </p>
      <div className="grid grid-cols-2 gap-4">
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
                className={`w-full px-4 py-3 rounded-xl border-2 text-start font-medium text-sm transition-all flex items-center justify-between ${
                  selectedLeft === l.idx ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' :
                  isCorrect ? 'border-emerald-400 bg-emerald-50' :
                  isWrong ? 'border-red-400 bg-red-50' :
                  isConnected ? 'border-slate-300 bg-slate-50' :
                  'border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                }`}
              >
                <span>{l.left}</span>
                {isConnected && (
                  <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: colorFor(l.idx) }} />
                )}
              </button>
            );
          })}
        </div>
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
                className={`w-full px-4 py-3 rounded-xl border-2 text-start font-medium text-sm transition-all flex items-center justify-between ${
                  isCorrect ? 'border-emerald-400 bg-emerald-50' :
                  isWrong ? 'border-red-400 bg-red-50' :
                  isUsed ? 'border-slate-300 bg-slate-50 opacity-70' :
                  'border-slate-200 hover:border-blue-300 hover:bg-blue-50/40'
                }`}
              >
                <span>{r.right}</span>
                {isUsed && <span className="w-3 h-3 rounded-full flex-shrink-0" style={{ background: colorFor(leftIdx) }} />}
              </button>
            );
          })}
        </div>
      </div>
      {!isAnswered && !checked && (
        <Button onClick={handleCheck} disabled={Object.keys(connections).length < leftItems.length} className="w-full gap-2">
          {lang === 'ar' ? 'تحقق من الإجابات' : 'Check answers'}
        </Button>
      )}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-medium">
          {leftItems.every((l) => connections[l.idx] === l.idx)
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-500 text-emerald-600" /><span className="text-emerald-600">{lang === 'ar' ? 'إجابة صحيحة!' : 'Correct!'}</span></>
            : <><XCircle className="w-5 h-5 text-red-500" /><span className="text-red-600">{lang === 'ar' ? 'بعض التوصيلات غير صحيحة' : 'Some connections are wrong'}</span></>}
        </div>
      )}
    </div>
  );
}