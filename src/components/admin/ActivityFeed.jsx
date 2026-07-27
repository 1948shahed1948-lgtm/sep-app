import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/i18n';
import { Loader2, Activity, LogIn, FileEdit, CheckCircle2, BookOpen } from 'lucide-react';

const TYPE_META = {
  login: { ar: 'تسجيل دخول', icon: LogIn, color: 'text-emerald-600 bg-emerald-50' },
  test_started: { ar: 'دخول اختبار / تدريب', icon: Activity, color: 'text-rose-600 bg-rose-50' },
  test_completed: { ar: 'أتمم اختباراً', icon: CheckCircle2, color: 'text-blue-600 bg-blue-50' },
  lesson_finished: { ar: 'أتمم درساً', icon: BookOpen, color: 'text-indigo-600 bg-indigo-50' },
  practice: { ar: 'تدريب', icon: FileEdit, color: 'text-amber-600 bg-amber-50' },
  game: { ar: 'لعب', icon: Activity, color: 'text-violet-600 bg-violet-50' },
};

export default function ActivityFeed() {
  const { lang } = useLang();
  const [items, setItems] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const list = await base44.entities.StudentActivity.list('-created_date', 300);
        setItems(list || []);
      } catch {
        setItems([]);
      }
    })();
    // تحديث لحظي: أي نشاط جديد يظهر فوراً في لوحة المشرف
    const unsub = base44.entities.StudentActivity.subscribe((event) => {
      if (!event || !event.data) return;
      setItems((prev) => [event.data, ...(prev || [])].slice(0, 300));
    });
    return () => unsub();
  }, []);

  if (!items) {
    return <div className="flex justify-center py-10"><Loader2 className="w-6 h-6 animate-spin text-slate-400" /></div>;
  }

  return (
    <div className="space-y-3">
      <p className="text-sm text-slate-500">{lang === 'ar' ? `إجمالي الأنشطة: ${items.length}` : `Total: ${items.length}`}</p>
      <div className="space-y-2">
        {items.map((it) => {
          const meta = TYPE_META[it.activity_type] || TYPE_META.practice;
          const Icon = meta.icon;
          return (
            <div key={it.id} className="flex items-center gap-3 rounded-2xl border border-slate-100 bg-white p-3.5">
              <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${meta.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-800 truncate">
                  {it.full_name || 'طالب'} · {lang === 'ar' ? meta.ar : it.label_en || it.activity_type}
                </p>
                <p className="text-xs text-slate-400 truncate" dir="ltr">{it.route || ''}</p>
              </div>
              <span className="text-xs text-slate-400 whitespace-nowrap">
                {new Date(it.created_date).toLocaleString(lang === 'ar' ? 'ar' : 'en')}
              </span>
            </div>
          );
        })}
        {items.length === 0 && (
          <p className="text-center text-slate-400 text-sm py-10">{lang === 'ar' ? 'لا يوجد نشاط بعد' : 'No activity yet'}</p>
        )}
      </div>
    </div>
  );
}