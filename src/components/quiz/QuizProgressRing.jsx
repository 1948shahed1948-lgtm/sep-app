import React from 'react';

export default function QuizProgressRing({ current, total, size = 64, colorClass = "text-blue-600" }) {
  const percentage = total > 0 ? (current / total) * 100 : 0;
  const radius = (size - 8) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <circle cx={size / 2} cy={size / 2} r={radius} strokeWidth="6" className="stroke-slate-100" fill="none" />
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          strokeWidth="6"
          fill="none"
          strokeLinecap="round"
          stroke="currentColor"
          className={colorClass}
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: 'stroke-dashoffset 0.4s ease' }}
        />
      </svg>
      <span className="absolute text-xs font-bold text-slate-700">{current}/{total}</span>
    </div>
  );
}