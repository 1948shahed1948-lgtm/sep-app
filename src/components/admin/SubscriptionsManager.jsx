import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { Loader2, CreditCard, CheckCircle2, XCircle, Clock } from 'lucide-react';

const PLAN_LABELS = {
  monthly: 'شهري',
  yearly: 'سنوي'
};

const PLAN_AMOUNTS = {
  monthly: 75,
  yearly: 700
};

const STORE_LABELS = {
  stripe: 'Stripe (ويب)',
  google: 'Google Play',
  apple: 'App Store',
  revenuecat: 'RevenueCat',
  moyasar: 'Moyasar (ويب)'
};

function StatusBadge({ status }) {
  if (status === 'active') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700 text-xs font-medium">
        <CheckCircle2 className="w-3 h-3" /> فعّال
      </span>
    );
  }
  if (status === 'expired') {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-100 text-amber-700 text-xs font-medium">
        <Clock className="w-3 h-3" /> منتهي
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-100 text-rose-700 text-xs font-medium">
      <XCircle className="w-3 h-3" /> ملغى
    </span>
  );
}

function formatDate(d) {
  if (!d) return '—';
  try {
    return new Date(d).toLocaleString('ar-SA', {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  } catch {
    return String(d);
  }
}

export default function SubscriptionsManager() {
  const [subs, setSubs] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState('all'); // all | active | expired | canceled

  useEffect(() => {
    (async () => {
      try {
        const list = await base44.entities.Subscription.list('-created_date', 200);
        setSubs(list || []);
      } catch (e) {
        console.error('SubscriptionsManager load failed', e);
        setSubs([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const filtered = (subs || []).filter((s) => filter === 'all' ? true : s.status === filter);

  const stats = (subs || []).reduce((acc, s) => {
    acc.total += 1;
    if (s.status === 'active') acc.active += 1;
    if (s.status === 'active' && s.plan && PLAN_AMOUNTS[s.plan]) {
      acc.revenue += PLAN_AMOUNTS[s.plan];
    }
    return acc;
  }, { total: 0, active: 0, revenue: 0 });

  if (loading) {
    return (
      <div className="flex justify-center py-12">
        <Loader2 className="w-6 h-6 animate-spin text-slate-400" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Stats cards */}
      <div className="grid grid-cols-3 gap-3">
        <div className="rounded-2xl border border-slate-100 bg-white p-4">
          <p className="text-xs text-slate-500">إجمالي الاشتراكات</p>
          <p className="text-2xl font-bold text-slate-900 mt-1">{stats.total}</p>
        </div>
        <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4">
          <p className="text-xs text-emerald-700">الفعّالة</p>
          <p className="text-2xl font-bold text-emerald-800 mt-1">{stats.active}</p>
        </div>
        <div className="rounded-2xl border border-blue-100 bg-blue-50 p-4">
          <p className="text-xs text-blue-700">الإيراد الشهري التقديري</p>
          <p className="text-2xl font-bold text-blue-800 mt-1">{stats.revenue} ر.س</p>
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 flex-wrap">
        {[
          { key: 'all', label: 'الكل' },
          { key: 'active', label: 'فعّال' },
          { key: 'expired', label: 'منتهي' },
          { key: 'canceled', label: 'ملغى' }
        ].map((f) => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
              filter === f.key
                ? 'bg-slate-900 text-white'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="rounded-2xl border border-slate-100 bg-white p-10 text-center">
          <CreditCard className="w-10 h-10 mx-auto text-slate-300" />
          <p className="text-sm text-slate-500 mt-2">لا توجد اشتراكات لعرضها</p>
        </div>
      ) : (
        <div className="rounded-2xl border border-slate-100 bg-white overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 text-slate-600">
                <tr>
                  <th className="text-right px-4 py-3 font-medium">الحالة</th>
                  <th className="text-right px-4 py-3 font-medium">الخطة</th>
                  <th className="text-right px-4 py-3 font-medium">المبلغ</th>
                  <th className="text-right px-4 py-3 font-medium">متجر الدفع</th>
                  <th className="text-right px-4 py-3 font-medium">المستخدم/الجهاز</th>
                  <th className="text-right px-4 py-3 font-medium">تاريخ الإنشاء</th>
                  <th className="text-right px-4 py-3 font-medium">نهاية الفترة</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {filtered.map((s) => (
                  <tr key={s.id} className="hover:bg-slate-50">
                    <td className="px-4 py-3"><StatusBadge status={s.status} /></td>
                    <td className="px-4 py-3 text-slate-700">{PLAN_LABELS[s.plan] || s.plan || '—'}</td>
                    <td className="px-4 py-3 text-slate-700 font-medium">
                      {s.plan && PLAN_AMOUNTS[s.plan] ? `${PLAN_AMOUNTS[s.plan]} ر.س` : '—'}
                    </td>
                    <td className="px-4 py-3 text-slate-600">{STORE_LABELS[s.store] || s.store || '—'}</td>
                    <td className="px-4 py-3 text-slate-500 text-xs">
                      {s.user_id ? `مستخدم: ${s.user_id.slice(0, 8)}…` : s.device_id ? `جهاز: ${s.device_id.slice(0, 8)}…` : '—'}
                    </td>
                    <td className="px-4 py-3 text-slate-500 text-xs">{formatDate(s.created_date)}</td>
                    <td className="px-4 py-3 text-slate-500 text-xs">{formatDate(s.current_period_end)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}