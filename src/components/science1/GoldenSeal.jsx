import React from 'react';

export default function GoldenSeal({ size = 'sm' }) {
  const dim = size === 'lg' ? 'w-20 h-20 text-2xl' : 'w-10 h-10 text-xs';
  return (
    <div className={`${dim} relative flex items-center justify-center flex-shrink-0 select-none`}>
      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-amber-300 via-yellow-200 to-amber-400 animate-pulse-glow shadow-md" />
      <div className="absolute inset-0 rounded-full border-2 border-amber-600/60" />
      <div className="relative z-10 text-amber-800 font-bold leading-none tracking-tight">⭐⭐⭐</div>
    </div>
  );
}