import React from 'react';
import { useLang } from '@/lib/i18n.jsx';
import { AlertTriangle } from 'lucide-react';

export default function WeakAreasCard({ areas }) {
  const { t, lang } = useLang();

  if (!areas || areas.length === 0) {
    return (
      <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-6 text-center">
        <p className="text-emerald-700 font-medium text-sm">
          {lang === 'ar' ? 'أداء ممتاز! لا توجد نقاط ضعف حالياً 🎉' : 'Great job! No weak areas detected 🎉'}
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-2xl bg-amber-50 border border-amber-200 p-6 space-y-4">
      <h3 className="font-heading font-bold text-amber-800 flex items-center gap-2">
        <AlertTriangle className="w-5 h-5" />
        {t('weaknessDetection')}
      </h3>
      <p className="text-sm text-amber-700">
        {lang === 'ar'
          ? 'هذه المواد/الأقسام تحتاج إلى مزيد من التركيز والمراجعة:'
          : 'These subjects/sections need more focus and review:'}
      </p>
      <div className="space-y-3">
        {areas.map((area, i) => (
          <div key={i} className="flex items-center justify-between bg-white rounded-xl p-3 border border-amber-100">
            <div>
              <p className="font-medium text-sm text-slate-800">{area.name}</p>
              <p className="text-xs text-slate-400 mt-0.5">
                {lang === 'ar' ? `${area.count} اختبار مسجّل` : `${area.count} quiz(zes) recorded`}
              </p>
            </div>
            <div className="w-11 h-11 rounded-full bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-700 flex-shrink-0">
              {area.mastery}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}