import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RUBRIC_LEVELS, MASTERY_THRESHOLD } from '@/lib/performanceBank';
import { useLang } from '@/lib/i18n';
import { Award, RotateCcw } from 'lucide-react';

// سلّم تقدير تفاعلي (Rubric) — يختار المُقيِّم/الطالب مستوى كل معيار
// فيحسب النقاط والنسبة وحالة الإتقان مباشرةً
export default function RubricTable({ criteria }) {
  const { lang } = useLang();
  const [scores, setScores] = useState({});
  const max = criteria.length * 4;
  const total = Object.values(scores).reduce((a, b) => a + b, 0);
  const answered = Object.keys(scores).length;
  const pct = max ? Math.round((total / max) * 100) : 0;
  const passed = pct >= MASTERY_THRESHOLD;
  const done = answered === criteria.length;

  const select = (ci, pts) => setScores((s) => ({ ...s, [ci]: pts }));

  return (
    <div className="space-y-4">
      <div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
        {/* رأس المستويات */}
        <div className="grid bg-slate-50" style={{ gridTemplateColumns: `1.6fr repeat(${RUBRIC_LEVELS.length}, 1fr)` }}>
          <div className="px-4 py-3 text-xs font-bold text-slate-500">
            {lang === 'ar' ? 'المعيار' : 'Criterion'}
          </div>
          {RUBRIC_LEVELS.map((lv) => (
            <div key={lv.points} className="px-2 py-3 text-center">
              <div className="text-[11px] font-bold" style={{ color: lv.color }}>{lv.label}</div>
              <div className="text-[10px] text-slate-400">{lv.points}</div>
            </div>
          ))}
        </div>
        {/* صفوف المعايير */}
        {criteria.map((crit, ci) => (
          <div key={ci} className="grid border-t border-slate-100" style={{ gridTemplateColumns: `1.6fr repeat(${RUBRIC_LEVELS.length}, 1fr)` }}>
            <div className="px-4 py-3 text-sm font-medium text-slate-700 flex items-center">{crit}</div>
            {RUBRIC_LEVELS.map((lv) => {
              const isSel = scores[ci] === lv.points;
              return (
                <button
                  key={lv.points}
                  onClick={() => select(ci, lv.points)}
                  className="flex items-center justify-center border-s border-slate-100 transition-all hover:bg-slate-50"
                  style={{ background: isSel ? lv.color + '22' : 'transparent' }}
                >
                  <span
                    className="w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all"
                    style={{ borderColor: lv.color, background: isSel ? lv.color : 'transparent' }}
                  >
                    {isSel && <span className="w-2 h-2 rounded-full bg-white" />}
                  </span>
                </button>
              );
            })}
          </div>
        ))}
      </div>

      {/* النتيجة المباشرة */}
      <motion.div
        key={pct}
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        className={`rounded-2xl p-5 flex items-center gap-4 ${done ? (passed ? 'bg-emerald-50 border border-emerald-200' : 'bg-rose-50 border border-rose-200') : 'bg-slate-50 border border-slate-200'}`}
      >
        <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: done ? (passed ? '#10b981' : '#ef4444') : '#94a3b8' }}>
          <Award className="w-7 h-7 text-white" />
        </div>
        <div className="flex-1">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-display font-bold text-slate-900">{pct}٪</span>
            <span className="text-sm text-slate-500">{total} / {max} {lang === 'ar' ? 'نقطة' : 'pts'}</span>
          </div>
          <p className="text-xs mt-0.5" style={{ color: done ? (passed ? '#10b981' : '#ef4444') : '#64748b' }}>
            {!done
              ? (lang === 'ar' ? `قيّم ${answered}/${criteria.length} معايير لإظهار النتيجة` : `Score ${answered}/${criteria.length} criteria`)
              : passed
                ? (lang === 'ar' ? '✓ أتقن المهمة الأدائية' : '✓ Mastery achieved')
                : (lang === 'ar' ? '✗ تحتاج تحسيناً (أدنى من ٧٠٪)' : '✗ Needs improvement')}
          </p>
        </div>
        {done && (
          <button
            onClick={() => setScores({})}
            className="text-xs font-medium text-slate-500 hover:text-slate-700 flex items-center gap-1"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            {lang === 'ar' ? 'إعادة' : 'Reset'}
          </button>
        )}
      </motion.div>
    </div>
  );
}