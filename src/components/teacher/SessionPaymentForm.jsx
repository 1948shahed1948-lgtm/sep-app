import { useEffect, useRef, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { loadMoyasarForm } from '@/lib/moyasar';
import { useAuth } from '@/lib/AuthContext';
import { useLang } from '@/lib/i18n';
import { Loader2, CreditCard } from 'lucide-react';

/**
 * Moyasar payment form for a tutoring session.
 * On success, Moyasar redirects to /my-bookings?session_payment=1&payment_id=xxx,
 * where MyBookings verifies the payment server-side and marks the booking paid.
 *
 * Props: booking (TeacherBooking with status 'approved' and session_price > 0)
 */
export default function SessionPaymentForm({ booking }) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const { lang } = useLang();
  const ar = lang === 'ar';
  const price = Number(booking.session_price || 0);
  const amountHalalas = Math.round(price * 100);

  useEffect(() => {
    let cancelled = false;
    (async () => {
      if (price <= 0) {
        setError(ar ? 'لم يحدّد المعلم سعراً لهذه الجلسة بعد' : 'No price set for this session');
        setLoading(false);
        return;
      }
      try {
        const configRes = await base44.functions.invoke('getMoyasarConfig');
        const publishableKey = configRes?.data?.publishable_key;
        if (!publishableKey) {
          setError(ar ? 'بوابة الدفع غير مُعدّة — راجع الإدارة' : 'Payment gateway not configured');
          setLoading(false);
          return;
        }
        const Moyasar = await loadMoyasarForm();
        if (cancelled || !formRef.current) return;
        formRef.current.innerHTML = '';
        Moyasar.init({
          element: formRef.current,
          amount: amountHalalas,
          currency: 'SAR',
          description: `جلسة مع ${booking.teacher_name} — ${booking.subject_name}`,
          publishable_api_key: publishableKey,
          callback_url: `${window.location.origin}/my-bookings?session_payment=1&booking=${booking.id}`,
          methods: ['creditcard', 'stcpay'],
          supported_networks: ['mada', 'visa', 'mastercard', 'amex'],
          language: ar ? 'ar' : 'en',
          fixed_width: false,
          metadata: {
            type: 'session',
            booking_id: booking.id,
            teacher_id: booking.teacher_id,
            session_price: String(price),
            user_id: user?.id || booking.student_user_id || ''
          }
        });
        setLoading(false);
      } catch (e) {
        setError(e.message || 'failed');
        setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [booking.id, price, ar, user?.id]);

  return (
    <div className="rounded-2xl border border-emerald-200 bg-white p-4 space-y-2">
      <div className="flex items-center gap-2 text-emerald-700">
        <CreditCard className="w-4 h-4" />
        <p className="text-sm font-bold">
          {ar ? 'ادفع قيمة الجلسة' : 'Pay for this session'} — {price} {ar ? 'ريال' : 'SAR'}
        </p>
      </div>
      {loading && (
        <div className="flex justify-center py-6">
          <Loader2 className="w-5 h-5 animate-spin text-slate-400" />
        </div>
      )}
      {error && <p className="text-sm text-red-600 text-center py-3">{error}</p>}
      <div ref={formRef} className="mysr-form" />
    </div>
  );
}