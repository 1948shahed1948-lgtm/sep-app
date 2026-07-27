import React from 'react';
import { Timer } from 'lucide-react';

export default function CountdownTimer({ seconds }) {
  const isLow = seconds <= 60;
  const mm = String(Math.floor(seconds / 60)).padStart(2, '0');
  const ss = String(seconds % 60).padStart(2, '0');

  return (
    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-sm font-bold tabular-nums transition-colors ${
      isLow ? 'bg-red-50 border-red-200 text-red-600 animate-pulse' : 'bg-slate-50 border-slate-200 text-slate-700'
    }`}>
      <Timer className="w-4 h-4" />
      {mm}:{ss}
    </div>
  );
}