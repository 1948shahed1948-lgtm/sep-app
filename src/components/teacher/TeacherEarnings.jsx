import React, { useMemo } from 'react';
import { useLang } from '@/lib/i18n';
import { Card, CardContent } from '@/components/ui/card';
import { Wallet, TrendingUp, Percent, Receipt, CheckCircle2, Banknote, Clock, Landmark, Smartphone, Coins, FileClock } from 'lucide-react';

// نسبة عمولة المنصة — 15% (يمكن تعديلها مستقبلاً من إعدادات الأدمن)
export const PLATFORM_COMMISSION_RATE = 0.15;

export default function TeacherEarnings({ bookings, payouts = [] }) {
  const { lang } = useLang();
  const isAr = lang === 'ar';

  const stats = useMemo(() => {
    const completed = bookings.filter((b) => b.status === 'completed');
    const approved = bookings.filter((b) => b.status === 'approved');
    const priced = [...completed, ...approved].filter((b) => Number(b.session_price) > 0);

    const grossCompleted = completed.reduce((s, b) => s + Number(b.session_price || 0), 0);
    const grossPending = approved.reduce((s, b) => s + Number(b.session_price || 0), 0);
    const grossTotal = grossCompleted + grossPending;

    const commissionCompleted = grossCompleted * PLATFORM_COMMISSION_RATE;
    const commissionTotal = grossTotal * PLATFORM_COMMISSION_RATE;
    const netCompleted = grossCompleted - commissionCompleted;
    const netTotal = grossTotal - commissionTotal;

    const paidOut = payouts
      .filter((p) => p.status === 'completed')
      .reduce((s, p) => s + Number(p.amount || 0), 0);
    const remaining = Math.max(0, netTotal - paidOut);

    return {
      completed,
      approved,
      priced,
      grossCompleted,
      grossPending,
      grossTotal,
      commissionCompleted,
      commissionTotal,
      netCompleted,
      netTotal,
      paidOut,
      remaining,
    };
  }, [bookings, payouts]);

  const fmt = (n) => Number(n || 0).toLocaleString(isAr ? 'ar-EG' : 'en-US', { maximumFractionDigits: 0 });

  const paidBookings = [...stats.completed, ...stats.approved]
    .filter((b) => Number(b.session_price) > 0)
    .sort((a, b) => new Date(b.created_date || 0) - new Date(a.created_date || 0));

  return (
    <div className="space-y-4">
      {/* ملخص الأرباح */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        <Card className="rounded-2xl border-emerald-100 bg-gradient-to-br from-emerald-50 to-teal-50">
          <CardContent className="p-4 flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-emerald-500/15 flex items-center justify-center">
              <Wallet className="w-5 h-5 text-emerald-600" />
            </span>
            <div>
              <p className="text-xs text-slate-500">{isAr ? 'إجمالي الدخل' : 'Gross income'}</p>
              <p className="font-heading font-bold text-lg text-slate-900">{fmt(stats.grossTotal)} <span className="text-xs font-normal text-slate-400">{isAr ? 'ريال' : 'SAR'}</span></p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-rose-100 bg-gradient-to-br from-rose-50 to-orange-50">
          <CardContent className="p-4 flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-rose-500/15 flex items-center justify-center">
              <Percent className="w-5 h-5 text-rose-600" />
            </span>
            <div>
              <p className="text-xs text-slate-500">{isAr ? 'عمولة المنصة (15%)' : 'Platform fee (15%)'}</p>
              <p className="font-heading font-bold text-lg text-rose-600">− {fmt(stats.commissionTotal)} <span className="text-xs font-normal text-slate-400">{isAr ? 'ريال' : 'SAR'}</span></p>
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-2xl border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50">
          <CardContent className="p-4 flex items-center gap-3">
            <span className="w-11 h-11 rounded-xl bg-blue-500/15 flex items-center justify-center">
              <TrendingUp className="w-5 h-5 text-blue-600" />
            </span>
            <div>
              <p className="text-xs text-slate-500">{isAr ? 'صافي أرباحك' : 'Your net profit'}</p>
              <p className="font-heading font-bold text-lg text-blue-600">{fmt(stats.netTotal)} <span className="text-xs font-normal text-slate-400">{isAr ? 'ريال' : 'SAR'}</span></p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* تفصيل الحالة */}
      <Card className="rounded-2xl">
        <CardContent className="p-4 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center justify-between bg-emerald-50 rounded-xl px-3 py-2">
            <span className="text-slate-600 flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> {isAr ? 'مكتملة' : 'Completed'}</span>
            <span className="font-bold text-emerald-700">{fmt(stats.grossCompleted)} {isAr ? 'ريال' : 'SAR'}</span>
          </div>
          <div className="flex items-center justify-between bg-amber-50 rounded-xl px-3 py-2">
            <span className="text-slate-600 flex items-center gap-1.5"><Receipt className="w-4 h-4 text-amber-600" /> {isAr ? 'معتمدة (قيد الصرف)' : 'Approved (pending)'}</span>
            <span className="font-bold text-amber-700">{fmt(stats.grossPending)} {isAr ? 'ريال' : 'SAR'}</span>
          </div>
          <div className="flex items-center justify-between bg-rose-50 rounded-xl px-3 py-2 col-span-2">
            <span className="text-slate-600">{isAr ? 'عمولة المنصة المستقطعة من المكتملة' : 'Platform fee from completed'}</span>
            <span className="font-bold text-rose-600">− {fmt(stats.commissionCompleted)} {isAr ? 'ريال' : 'SAR'}</span>
          </div>
          <div className="flex items-center justify-between bg-blue-50 rounded-xl px-3 py-2 col-span-2">
            <span className="text-slate-600 font-medium">{isAr ? 'صافي المستلم (مكتملة)' : 'Net received (completed)'}</span>
            <span className="font-heading font-bold text-blue-700 text-base">{fmt(stats.netCompleted)} {isAr ? 'ريال' : 'SAR'}</span>
          </div>
        </CardContent>
      </Card>

      {/* سجل الجلسات المُسعّرة */}
      <div>
        <h3 className="font-heading font-bold text-slate-900 text-sm mb-2">{isAr ? 'سجل الجلسات المدفوعة' : 'Paid sessions log'}</h3>
        {paidBookings.length === 0 ? (
          <Card className="rounded-2xl"><CardContent className="p-6 text-center text-slate-400 text-sm">{isAr ? 'لا توجد جلسات مُسعّرة بعد — حدّد سعر الجلسة عند اعتماد الحجز' : 'No priced sessions yet — set a price when approving a booking'}</CardContent></Card>
        ) : (
          <div className="space-y-2">
            {paidBookings.map((b) => {
              const price = Number(b.session_price || 0);
              const commission = price * PLATFORM_COMMISSION_RATE;
              const net = price - commission;
              const isCompleted = b.status === 'completed';
              return (
                <Card key={b.id} className="rounded-2xl border-slate-100">
                  <CardContent className="p-3 flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-bold text-slate-900 text-sm truncate">{b.student_name}</p>
                      <p className="text-xs text-slate-500 truncate">📚 {b.subject_name} — {b.grade}</p>
                      <span className={`inline-flex items-center gap-1 text-[10px] font-bold rounded-full px-2 py-0.5 mt-1 ${isCompleted ? 'text-emerald-700 bg-emerald-50' : 'text-amber-700 bg-amber-50'}`}>
                        {isCompleted ? (isAr ? 'مكتملة' : 'Completed') : (isAr ? 'معتمدة' : 'Approved')}
                      </span>
                    </div>
                    <div className="text-end flex-shrink-0">
                      <p className="text-xs text-slate-400">{isAr ? 'إجمالي' : 'Gross'} <span className="font-bold text-slate-700">{fmt(price)}</span></p>
                      <p className="text-xs text-rose-500">{isAr ? 'العمولة' : 'Fee'} − {fmt(commission)}</p>
                      <p className="text-sm font-heading font-bold text-blue-600">{isAr ? 'الصافي' : 'Net'} {fmt(net)} {isAr ? 'ريال' : 'SAR'}</p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* حالة التسوية */}
      <Card className="rounded-2xl border-blue-100 bg-gradient-to-br from-blue-50 to-indigo-50">
        <CardContent className="p-4 grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center justify-between bg-white rounded-xl px-3 py-2">
            <span className="text-slate-600 flex items-center gap-1.5"><Banknote className="w-4 h-4 text-emerald-600" /> {isAr ? 'تم صرفه لك' : 'Paid out to you'}</span>
            <span className="font-bold text-emerald-700">{fmt(stats.paidOut)} {isAr ? 'ريال' : 'SAR'}</span>
          </div>
          <div className="flex items-center justify-between bg-white rounded-xl px-3 py-2">
            <span className="text-slate-600">{isAr ? 'متبقّي في رصيدك' : 'Remaining balance'}</span>
            <span className="font-heading font-bold text-amber-700 text-base">{fmt(stats.remaining)} {isAr ? 'ريال' : 'SAR'}</span>
          </div>
        </CardContent>
      </Card>

      {/* كشف التحويلات المالية */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-heading font-bold text-slate-900 text-sm flex items-center gap-1.5">
            <FileClock className="w-4 h-4 text-blue-600" />
            {isAr ? 'كشف التحويلات المالية' : 'Financial transfers statement'}
          </h3>
          <span className="text-[11px] text-slate-400">{payouts.length} {isAr ? 'عملية' : 'transactions'}</span>
        </div>

        {payouts.length === 0 ? (
          <Card className="rounded-2xl"><CardContent className="p-6 text-center text-slate-400 text-sm">{isAr ? 'لا توجد تحويلات مسجّلة بعد — ستظهر هنا عمليات التسوية التي تنفّذها الإدارة' : 'No transfers recorded yet — admin settlements will appear here'}</CardContent></Card>
        ) : (
          <Card className="rounded-2xl border-slate-200 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 text-[11px] font-bold">
                    <th className="text-start px-3 py-2.5 font-bold">{isAr ? 'التاريخ' : 'Date'}</th>
                    <th className="text-start px-3 py-2.5 font-bold">{isAr ? 'الطريقة' : 'Method'}</th>
                    <th className="text-start px-3 py-2.5 font-bold">{isAr ? 'المرجع' : 'Reference'}</th>
                    <th className="text-end px-3 py-2.5 font-bold">{isAr ? 'المبلغ' : 'Amount'}</th>
                    <th className="text-end px-3 py-2.5 font-bold">{isAr ? 'الرصيد' : 'Balance'}</th>
                    <th className="text-center px-3 py-2.5 font-bold">{isAr ? 'الحالة' : 'Status'}</th>
                  </tr>
                </thead>
                <tbody>
                  {(() => {
                    // ترتيب تصاعدي لحساب الرصيد التراكمي، ثم عرضه تنازلياً
                    const chrono = [...payouts].sort((a, b) => new Date(a.created_date || 0) - new Date(b.created_date || 0));
                    let running = 0;
                    const withBalance = chrono.map((p) => {
                      if (p.status !== 'pending') running += Number(p.amount || 0);
                      return { p, balance: running };
                    }).reverse();

                    return withBalance.map(({ p, balance }) => {
                      const methodIcon = p.method === 'bank_transfer' ? <Landmark className="w-3.5 h-3.5 text-blue-500" /> : p.method === 'stcpay' ? <Smartphone className="w-3.5 h-3.5 text-emerald-500" /> : p.method === 'cash' ? <Coins className="w-3.5 h-3.5 text-amber-500" /> : <Banknote className="w-3.5 h-3.5 text-slate-400" />;
                      const methodLabel = p.method === 'bank_transfer' ? (isAr ? 'تحويل بنكي' : 'Bank transfer') : p.method === 'stcpay' ? 'STC Pay' : p.method === 'cash' ? (isAr ? 'نقداً' : 'Cash') : (isAr ? 'أخرى' : 'Other');
                      const isDone = p.status !== 'pending';
                      const date = new Date(p.created_date || 0);
                      const dateStr = isNaN(date) ? '—' : date.toLocaleDateString(isAr ? 'ar-SA' : 'en', { year: 'numeric', month: 'short', day: 'numeric' });
                      return (
                        <tr key={p.id} className="border-t border-slate-100 hover:bg-slate-50/60">
                          <td className="px-3 py-2.5 text-slate-600 text-xs whitespace-nowrap">{dateStr}</td>
                          <td className="px-3 py-2.5">
                            <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700">{methodIcon} {methodLabel}</span>
                          </td>
                          <td className="px-3 py-2.5 text-xs text-slate-500 max-w-[120px] truncate" title={p.reference || ''}>{p.reference || '—'}</td>
                          <td className="px-3 py-2.5 text-end font-heading font-bold text-slate-900 whitespace-nowrap">{fmt(p.amount)} <span className="text-[10px] font-normal text-slate-400">{isAr ? 'ريال' : 'SAR'}</span></td>
                          <td className="px-3 py-2.5 text-end text-xs font-medium text-blue-600 whitespace-nowrap">{isDone ? `${fmt(balance)}` : '—'}</td>
                          <td className="px-3 py-2.5 text-center">
                            {isDone ? (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 rounded-full px-2 py-1"><CheckCircle2 className="w-3 h-3" /> {isAr ? 'منفّذة' : 'Completed'}</span>
                            ) : (
                              <span className="inline-flex items-center gap-1 text-[10px] font-bold text-amber-700 bg-amber-50 rounded-full px-2 py-1"><Clock className="w-3 h-3" /> {isAr ? 'قيد التنفيذ' : 'Pending'}</span>
                            )}
                          </td>
                        </tr>
                      );
                    });
                  })()}
                </tbody>
                <tfoot>
                  <tr className="bg-slate-50 border-t-2 border-slate-200">
                    <td colSpan={3} className="px-3 py-2.5 text-xs font-bold text-slate-600">{isAr ? 'إجمالي المنفّذ' : 'Total completed'}</td>
                    <td className="px-3 py-2.5 text-end font-heading font-bold text-emerald-700 whitespace-nowrap">{fmt(stats.paidOut)} <span className="text-[10px] font-normal text-slate-400">{isAr ? 'ريال' : 'SAR'}</span></td>
                    <td className="px-3 py-2.5 text-end text-xs text-slate-400">{isAr ? 'متبقّي' : 'Remaining'}</td>
                    <td className="px-3 py-2.5 text-center font-heading font-bold text-amber-700 whitespace-nowrap">{fmt(stats.remaining)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </Card>
        )}
      </div>

      <p className="text-[11px] text-slate-400 leading-relaxed">
        {isAr
          ? 'يُحسب الصافي بعد خصم عمولة المنصة بنسبة 15%. يدفع الطالب عبر Moyasar فيُحصّل في حساب المنصة، ثم تُحوّل الإدارة الصافي إلى حسابك يدوياً ويُسجّل هنا.'
          : 'Net is calculated after a 15% platform fee. The student pays via Moyasar into the platform account, then admin transfers the net to your account and records it here.'}
      </p>
    </div>
  );
}