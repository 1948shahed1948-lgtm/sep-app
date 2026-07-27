import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, CheckCircle2, XCircle, Link2, FileText, MessageCircle, Calendar, BookOpen, CreditCard, Loader2 } from 'lucide-react';
import SessionPaymentForm from '@/components/teacher/SessionPaymentForm';

export default function MyBookings() {
  const { lang } = useLang();
  const isAr = lang === 'ar';
  const nav = useNavigate();
  const [user, setUser] = useState(null);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [verifying, setVerifying] = useState(false);
  const [payMsg, setPayMsg] = useState('');

  const refreshBookings = async (uid) => {
    const books = await base44.entities.TeacherBooking.filter({ student_user_id: uid }, '-created_date', 50);
    setBookings(books || []);
  };

  useEffect(() => {
    base44.auth.me().then(async (u) => {
      setUser(u);
      await refreshBookings(u.id);
      // Handle Moyasar redirect: ?session_payment=1&id=payment_id
      const params = new URLSearchParams(window.location.search);
      if (params.get('session_payment') === '1' && params.get('id')) {
        setVerifying(true);
        try {
          const res = await base44.functions.invoke('verifySessionPayment', { payment_id: params.get('id') });
          if (res?.data?.marked) {
            setPayMsg(isAr ? '✅ تم تأكيد الدفع بنجاح — حجزك أصبح مدفوعاً' : '✅ Payment confirmed — your booking is paid');
            await refreshBookings(u.id);
          } else {
            setPayMsg(isAr ? 'الدفع لم يكتمل بعد — حاول مرة أخرى' : 'Payment not completed yet — try again');
          }
        } catch (e) {
          setPayMsg((isAr ? 'تعذّر التحقق من الدفع: ' : 'Payment verification failed: ') + (e.message || ''));
        }
        setVerifying(false);
        // Clean the URL
        window.history.replaceState({}, '', '/my-bookings');
      }
      setLoading(false);
    }).catch(() => nav('/login?redirect=/my-bookings'));
  }, []);

  const statusBadge = (st) => {
    if (st === 'pending') return <span className="inline-flex items-center gap-1 text-amber-700 bg-amber-50 rounded-full px-2.5 py-1 text-xs font-bold"><Clock className="w-3 h-3" />{isAr ? 'بانتظار الاعتماد' : 'Pending'}</span>;
    if (st === 'approved') return <span className="inline-flex items-center gap-1 text-emerald-700 bg-emerald-50 rounded-full px-2.5 py-1 text-xs font-bold"><CheckCircle2 className="w-3 h-3" />{isAr ? 'معتمد' : 'Approved'}</span>;
    if (st === 'completed') return <span className="inline-flex items-center gap-1 text-blue-700 bg-blue-50 rounded-full px-2.5 py-1 text-xs font-bold"><CheckCircle2 className="w-3 h-3" />{isAr ? 'مكتمل' : 'Completed'}</span>;
    if (st === 'canceled') return <span className="inline-flex items-center gap-1 text-red-700 bg-red-50 rounded-full px-2.5 py-1 text-xs font-bold"><XCircle className="w-3 h-3" />{isAr ? 'ملغى' : 'Canceled'}</span>;
  };

  if (loading) return <div className="text-center py-20 text-slate-400 text-sm">{isAr ? 'جارٍ التحميل…' : 'Loading…'}</div>;

  return (
    <div className="space-y-6">
      <PageHeader title={isAr ? 'حجوزاتي' : 'My Bookings'} backTo="/" breadcrumbs={[{ label: isAr ? 'الرئيسية' : 'Home', path: '/' }, { label: isAr ? 'حجوزاتي' : 'My Bookings' }]} />

      <Card className="rounded-2xl border-emerald-100 bg-gradient-to-br from-emerald-50 to-white">
        <CardContent className="p-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-emerald-600" />
          </div>
          <div className="flex-1">
            <p className="text-sm font-bold text-slate-900">{user?.full_name || user?.email}</p>
            <p className="text-xs text-slate-500">{isAr ? 'سجل حجوزاتك مع المعلمين' : 'Your tutor session history'}</p>
          </div>
          <Link to="/teachers">
            <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">{isAr ? 'احجز جديد' : 'New booking'}</Button>
          </Link>
        </CardContent>
      </Card>

      {verifying && (
        <Card className="rounded-2xl border-blue-100 bg-blue-50">
          <CardContent className="p-4 flex items-center gap-2 text-blue-700 text-sm">
            <Loader2 className="w-4 h-4 animate-spin" />
            {isAr ? 'جارٍ التحقق من الدفع…' : 'Verifying payment…'}
          </CardContent>
        </Card>
      )}
      {payMsg && (
        <Card className={`rounded-2xl ${payMsg.startsWith('✅') ? 'border-emerald-200 bg-emerald-50' : 'border-rose-200 bg-rose-50'}`}>
          <CardContent className="p-4 text-sm font-medium text-slate-700">{payMsg}</CardContent>
        </Card>
      )}

      {bookings.length === 0 ? (
        <Card className="rounded-2xl">
          <CardContent className="p-10 text-center space-y-3">
            <Calendar className="w-12 h-12 text-slate-300 mx-auto" />
            <p className="text-slate-400 text-sm">{isAr ? 'لا توجد حجوزات بعد — ابحث عن معلم وابدأ!' : 'No bookings yet — find a tutor and start!'}</p>
            <Link to="/teachers">
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl px-6">{isAr ? 'تصفّح المعلمين' : 'Browse tutors'}</Button>
            </Link>
          </CardContent>
        </Card>
      ) : (
        <div className="space-y-3">
          {bookings.map((b) => (
            <Card key={b.id} className="rounded-2xl border-slate-100">
              <CardContent className="p-4 space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <h4 className="font-bold text-slate-900">{b.teacher_name}</h4>
                    <p className="text-xs text-slate-500">{isAr ? 'المادة:' : 'Subject:'} {b.subject_name} — {b.grade}</p>
                  </div>
                  {statusBadge(b.status)}
                </div>
                {b.preferred_date && <span className="inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 rounded-lg px-2 py-1"><Calendar className="w-3 h-3" />{b.preferred_date}</span>}
                {b.notes && <p className="text-xs text-slate-400 bg-slate-50 rounded-lg p-2">{b.notes}</p>}

                {b.status === 'pending' && (
                  <div className="flex items-center gap-2 text-xs text-amber-600 bg-amber-50 rounded-lg p-2.5">
                    <Clock className="w-4 h-4" />
                    {isAr ? 'بانتظار موافقة المعلم بعد التسوية المالية عبر واتساب' : 'Waiting for tutor approval after WhatsApp payment'}
                  </div>
                )}

                {b.status === 'approved' && (
                  <div className="space-y-3 rounded-xl bg-emerald-50 border border-emerald-200 p-3">
                    <div className="flex items-center justify-between gap-2">
                      <p className="text-xs font-bold text-emerald-700">{isAr ? '✅ تم الاعتماد!' : '✅ Approved!'}</p>
                      {Number(b.session_price) > 0 && (
                        <span className="text-xs font-bold text-slate-700">
                          {isAr ? 'السعر:' : 'Price:'} {b.session_price} {isAr ? 'ريال' : 'SAR'}
                        </span>
                      )}
                    </div>
                    {b.payment_status === 'paid' ? (
                      <>
                        {b.session_link && (
                          <a href={b.session_link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline">
                            <Link2 className="w-4 h-4" /> {isAr ? 'رابط الجلسة' : 'Session link'}
                          </a>
                        )}
                        {b.materials_url && (
                          <a href={b.materials_url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm text-blue-600 hover:underline">
                            <FileText className="w-4 h-4" /> {isAr ? 'ملفات الجلسة' : 'Session materials'}
                          </a>
                        )}
                        <span className="inline-flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-100 rounded-full px-2.5 py-1">
                          <CheckCircle2 className="w-3 h-3" /> {isAr ? 'مدفوع' : 'Paid'}
                        </span>
                      </>
                    ) : Number(b.session_price) > 0 ? (
                      <SessionPaymentForm booking={b} />
                    ) : (
                      <p className="text-xs text-amber-600 flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" /> {isAr ? 'بانتظار تحديد السعر من المعلم' : 'Waiting for tutor to set price'}
                      </p>
                    )}
                  </div>
                )}

                {b.status === 'completed' && (
                  <div className="flex items-center gap-2 text-xs text-blue-600 bg-blue-50 rounded-lg p-2.5">
                    <CheckCircle2 className="w-4 h-4" />
                    {isAr ? 'اكتملت الجلسة بنجاح' : 'Session completed successfully'}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}