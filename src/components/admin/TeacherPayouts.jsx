import React, { useEffect, useMemo, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/i18n';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Wallet, Banknote, ArrowDownToLine, CheckCircle2, Clock, Phone, User } from 'lucide-react';

const COMMISSION_RATE = 0.15;

/**
 * Admin component: manage payouts to tutors.
 * Shows each teacher's net owed (from paid bookings) and lets the admin
 * record a payout (bank transfer / STC Pay / cash). Money collected via
 * Moyasar lands in the platform's merchant account; the admin then
 * transfers the net to the teacher manually and records it here.
 */
export default function TeacherPayouts() {
  const { lang } = useLang();
  const ar = lang === 'ar';
  const [bookings, setBookings] = useState([]);
  const [payouts, setPayouts] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [recording, setRecording] = useState(null); // teacher_id being recorded
  const [form, setForm] = useState({ amount: '', method: 'bank_transfer', reference: '', notes: '' });

  const load = async () => {
    setLoading(true);
    const [allPaid, allPayouts, allProfiles] = await Promise.all([
      base44.entities.TeacherBooking.filter({ payment_status: 'paid' }),
      base44.entities.TeacherPayout.list('-created_date', 200),
      base44.entities.TeacherProfile.list(),
    ]);
    setBookings(allPaid || []);
    setPayouts(allPayouts || []);
    setProfiles(allProfiles || []);
    setLoading(false);
  };

  useEffect(() => { load(); }, []);

  // Net owed per teacher = sum(session_price * (1 - commission)) for paid bookings
  const owedByTeacher = useMemo(() => {
    const map = {};
    for (const b of bookings) {
      const net = Number(b.session_price || 0) * (1 - COMMISSION_RATE);
      if (!map[b.teacher_id]) map[b.teacher_id] = { teacher_id: b.teacher_id, teacher_name: b.teacher_name, gross: 0, net: 0, count: 0 };
      map[b.teacher_id].gross += Number(b.session_price || 0);
      map[b.teacher_id].net += net;
      map[b.teacher_id].count += 1;
    }
    return Object.values(map).sort((a, b) => b.net - a.net);
  }, [bookings]);

  // Total paid out per teacher
  const paidOutByTeacher = useMemo(() => {
    const map = {};
    for (const p of payouts) {
      if (p.status !== 'completed') continue;
      map[p.teacher_id] = (map[p.teacher_id] || 0) + Number(p.amount || 0);
    }
    return map;
  }, [payouts]);

  const fmt = (n) => Number(n || 0).toLocaleString(ar ? 'ar-EG' : 'en-US', { maximumFractionDigits: 2 });

  const startRecord = (t) => {
    const remaining = Math.max(0, t.net - (paidOutByTeacher[t.teacher_id] || 0));
    setRecording(t.teacher_id);
    setForm({ amount: String(Math.round(remaining)), method: 'bank_transfer', reference: '', notes: '' });
  };

  const savePayout = async (teacherId, teacherName) => {
    const amount = Number(form.amount);
    if (!amount || amount <= 0) { alert(ar ? 'أدخل مبلغاً صحيحاً' : 'Enter a valid amount'); return; }
    await base44.entities.TeacherPayout.create({
      teacher_id: teacherId,
      teacher_name: teacherName,
      amount,
      method: form.method,
      reference: form.reference,
      notes: form.notes,
      status: 'completed'
    });
    setRecording(null);
    load();
  };

  if (loading) return <div className="text-center py-10 text-slate-400 text-sm">{ar ? 'جارٍ التحميل…' : 'Loading…'}</div>;

  return (
    <div className="space-y-6">
      <Card className="rounded-2xl border-amber-100 bg-amber-50">
        <CardContent className="p-4 flex items-start gap-3">
          <Wallet className="w-5 h-5 text-amber-600 mt-0.5 flex-shrink-0" />
          <p className="text-sm text-slate-700 leading-relaxed">
            {ar
              ? 'تُحصّل المنصة قيمة الجلسات عبر Moyasar في حسابها التجاري، ثم تُحوّل الصافي (بعد خصم عمولة 15%) إلى حساب المعلم يدوياً. سجّل كل تحويل هنا لمتابعة رصيد كل معلم.'
              : 'The platform collects session fees via Moyasar into its merchant account, then transfers the net (after 15% commission) to the tutor manually. Record each transfer here to track each tutor\'s balance.'}
          </p>
        </CardContent>
      </Card>

      {/* Teachers owed */}
      <div>
        <h3 className="font-heading font-bold text-slate-900 text-sm mb-3 flex items-center gap-2">
          <Banknote className="w-4 h-4 text-emerald-600" />
          {ar ? 'أرصدة المعلمين المستحقة' : 'Tutor balances owed'}
        </h3>
        {owedByTeacher.length === 0 ? (
          <Card className="rounded-2xl"><CardContent className="p-8 text-center text-slate-400 text-sm">{ar ? 'لا توجد جلسات مدفوعة بعد' : 'No paid sessions yet'}</CardContent></Card>
        ) : (
          <div className="space-y-3">
            {owedByTeacher.map((t) => {
              const phone = profiles.find((p) => p.user_id === t.teacher_id)?.phone;
              const paid = paidOutByTeacher[t.teacher_id] || 0;
              const remaining = Math.max(0, t.net - paid);
              const isRecording = recording === t.teacher_id;
              return (
                <Card key={t.teacher_id} className="rounded-2xl border-slate-100">
                  <CardContent className="p-4 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h4 className="font-bold text-slate-900">{t.teacher_name}</h4>
                        {phone && <p className="text-xs text-slate-500 flex items-center gap-1 mt-0.5"><Phone className="w-3 h-3" /> {phone}</p>}
                        <p className="text-xs text-slate-400 mt-0.5">{ar ? 'جلسات مدفوعة' : 'Paid sessions'}: {t.count}</p>
                      </div>
                      <div className="text-end">
                        <p className="text-xs text-slate-400">{ar ? 'الإجمالي المحصّل' : 'Gross collected'}</p>
                        <p className="font-bold text-slate-700">{fmt(t.gross)} {ar ? 'ريال' : 'SAR'}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      <div className="bg-emerald-50 rounded-lg p-2">
                        <p className="text-slate-500">{ar ? 'الصافي المستحق' : 'Net owed'}</p>
                        <p className="font-bold text-emerald-700">{fmt(t.net)}</p>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-2">
                        <p className="text-slate-500">{ar ? 'تم الصرف' : 'Paid out'}</p>
                        <p className="font-bold text-blue-700">{fmt(paid)}</p>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-2">
                        <p className="text-slate-500">{ar ? 'متبقّي' : 'Remaining'}</p>
                        <p className="font-bold text-amber-700">{fmt(remaining)}</p>
                      </div>
                    </div>

                    {isRecording ? (
                      <div className="space-y-2 rounded-xl bg-slate-50 p-3">
                        <div className="grid grid-cols-2 gap-2">
                          <input value={form.amount} onChange={(e) => setForm({ ...form, amount: e.target.value })} placeholder={ar ? 'المبلغ (ريال)' : 'Amount (SAR)'} className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400" />
                          <select value={form.method} onChange={(e) => setForm({ ...form, method: e.target.value })} className="rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none">
                            <option value="bank_transfer">{ar ? 'تحويل بنكي' : 'Bank transfer'}</option>
                            <option value="stcpay">STC Pay</option>
                            <option value="cash">{ar ? 'نقداً' : 'Cash'}</option>
                            <option value="other">{ar ? 'أخرى' : 'Other'}</option>
                          </select>
                        </div>
                        <input value={form.reference} onChange={(e) => setForm({ ...form, reference: e.target.value })} placeholder={ar ? 'مرجع التحويل / رقم العملية' : 'Transfer reference'} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400" />
                        <input value={form.notes} onChange={(e) => setForm({ ...form, notes: e.target.value })} placeholder={ar ? 'ملاحظات (اختياري)' : 'Notes (optional)'} className="w-full rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-emerald-400" />
                        <div className="flex gap-2">
                          <Button onClick={() => savePayout(t.teacher_id, t.teacher_name)} size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">{ar ? 'حفظ التسوية' : 'Save payout'}</Button>
                          <Button onClick={() => setRecording(null)} size="sm" variant="outline" className="rounded-lg">{ar ? 'إلغاء' : 'Cancel'}</Button>
                        </div>
                      </div>
                    ) : (
                      remaining > 0 && (
                        <Button onClick={() => startRecord(t)} size="sm" variant="outline" className="rounded-lg w-full text-emerald-700 border-emerald-200 hover:bg-emerald-50">
                          <ArrowDownToLine className="w-4 h-4" /> {ar ? 'تسجيل تحويل للمعلم' : 'Record payout'}
                        </Button>
                      )
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>

      {/* Payout history */}
      {payouts.length > 0 && (
        <div>
          <h3 className="font-heading font-bold text-slate-900 text-sm mb-3">{ar ? 'سجل التسويات' : 'Payout history'}</h3>
          <div className="space-y-2">
            {payouts.slice(0, 30).map((p) => (
              <Card key={p.id} className="rounded-2xl border-slate-100">
                <CardContent className="p-3 flex items-center justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-bold text-slate-900 text-sm truncate">{p.teacher_name}</p>
                    <p className="text-xs text-slate-500">
                      {p.method === 'bank_transfer' ? (ar ? 'تحويل بنكي' : 'Bank') : p.method === 'stcpay' ? 'STC Pay' : p.method === 'cash' ? (ar ? 'نقداً' : 'Cash') : (ar ? 'أخرى' : 'Other')}
                      {p.reference ? ` — ${p.reference}` : ''}
                    </p>
                    <p className="text-[11px] text-slate-400">{new Date(p.created_date).toLocaleDateString(ar ? 'ar-SA' : 'en')}</p>
                  </div>
                  <div className="text-end flex-shrink-0">
                    <p className="font-heading font-bold text-emerald-700">{fmt(p.amount)} {ar ? 'ريال' : 'SAR'}</p>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 rounded-full px-2 py-0.5">
                      <CheckCircle2 className="w-3 h-3" /> {ar ? 'مصروف' : 'Paid'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}