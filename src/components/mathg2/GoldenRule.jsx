import React from 'react';
import { Crown } from 'lucide-react';

export default function GoldenRule({ text }) {
  return (
    <div className="rounded-2xl mt-4 p-4 border-2" style={{ borderColor: '#c9a227', background: 'linear-gradient(135deg, #fef9e7, #fff8dc)' }}>
      <div className="flex items-center gap-2 mb-2"><Crown className="w-5 h-5 text-amber-600" /><span className="font-bold text-amber-800">القاعدة الذهبية</span></div>
      <p className="text-slate-800 font-medium">{text}</p>
    </div>
  );
}