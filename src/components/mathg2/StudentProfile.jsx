import React from 'react';
import { User, X } from 'lucide-react';
import { UNITS, getQuestionsForLesson } from '@/lib/mathG2Ch5Bank';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);
const STORAGE_KEY = 'math_g2_ch5_progress';
function loadProgress() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; } }

export default function StudentProfile({ onClose }) {
  const progress = loadProgress();
  const totalDone = Object.values(progress).reduce((s, l) => s + Object.keys(l).length, 0);
  const totalCorrect = Object.values(progress).reduce((s, l) => s + Object.values(l).filter(Boolean).length, 0);
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div className="bg-white rounded-2xl max-w-lg w-full p-6 max-h-[90vh] overflow-y-auto" onClick={e => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-4"><h3 className="font-bold text-lg flex items-center gap-2"><User className="w-5 h-5" /> ملف الطالب</h3><button onClick={onClose}><X className="w-5 h-5 text-slate-400" /></button></div>
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="rounded-xl bg-emerald-50 p-3 text-center"><p className="text-2xl font-bold text-emerald-700">{toAr(totalDone)}</p><p className="text-xs text-slate-500">أسئلة محلولة</p></div>
          <div className="rounded-xl bg-amber-50 p-3 text-center"><p className="text-2xl font-bold text-amber-700">{toAr(totalCorrect)}</p><p className="text-xs text-slate-500">إجابات صحيحة</p></div>
        </div>
        <div className="space-y-2">
          {UNITS.map(u => {
            const l = u.lessons[0];
            const done = progress[l.id] ? Object.keys(progress[l.id]).length : 0;
            const total = getQuestionsForLesson(l.id).length;
            const pct = total > 0 ? Math.round((done / total) * 100) : 0;
            return (
              <div key={u.id} className="rounded-xl border p-3">
                <div className="flex items-center gap-2">
                  <span className={`w-2 h-2 rounded-full ${pct >= 80 ? 'bg-emerald-500' : pct > 0 ? 'bg-amber-500' : 'bg-slate-300'}`} />
                  <span className="flex-1 font-bold text-sm">{u.icon} {u.title}</span>
                  <span className="text-xs text-slate-400">{toAr(done)}/{toAr(total)}</span>
                </div>
                <div className="mt-1 h-1.5 rounded-full bg-slate-100 overflow-hidden">
                  <div className="h-full bg-emerald-500" style={{ width: `${pct}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}