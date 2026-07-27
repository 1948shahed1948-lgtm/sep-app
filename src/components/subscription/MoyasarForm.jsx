import { useEffect, useRef, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { loadMoyasarForm, MOYASAR_AMOUNTS } from '@/lib/moyasar';
import { getDeviceId } from '@/lib/access';
import { useAuth } from '@/lib/AuthContext';
import { useLang } from '@/lib/i18n';
import { Loader2 } from 'lucide-react';

/**
 * Embeds the Moyasar hosted payment form for the selected plan.
 * On successful payment, Moyasar redirects to callback_url; the Subscribe
 * page reads the payment id from the URL and verifies it server-side.
 */
export default function MoyasarForm({ plan }) {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const { lang } = useLang();
  const ar = lang === 'ar';

  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const configRes = await base44.functions.invoke('getMoyasarConfig');
        const publishableKey = configRes?.data?.publishable_key;
        if (!publishableKey) {
          setError(ar ? 'مفتاح Moyasar غير مُعد — راجع لوحة التحكم' : 'Moyasar key not configured');
          setLoading(false);
          return;
        }
        const Moyasar = await loadMoyasarForm();
        if (cancelled || !formRef.current) return;
        formRef.current.innerHTML = '';
        const deviceId = getDeviceId();
        Moyasar.init({
          element: formRef.current,
          amount: MOYASAR_AMOUNTS[plan],
          currency: 'SAR',
          description: `اشتراك ${plan === 'yearly' ? 'سنوي' : 'شهري'} - بوابة الأسئلة بلس`,
          publishable_api_key: publishableKey,
          callback_url: `${window.location.origin}/subscribe?moyasar_redirect=1&plan=${plan}`,
          methods: ['creditcard', 'applepay', 'stcpay'],
          supported_networks: ['mada', 'visa', 'mastercard', 'amex'],
          language: ar ? 'ar' : 'en',
          fixed_width: false,
          metadata: {
            device_id: deviceId,
            user_id: user?.id || '',
            plan
          }
        });
        setLoading(false);
      } catch (e) {
        setError(e.message || 'failed');
        setLoading(false);
      }
    })();
    return () => { cancelled = true; };
  }, [plan, ar, user?.id]);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4">
      {loading && (
        <div className="flex justify-center py-8">
          <Loader2 className="w-5 h-5 animate-spin text-slate-400" />
        </div>
      )}
      {error && <p className="text-sm text-red-600 text-center py-4">{error}</p>}
      <div ref={formRef} className="mysr-form" />
    </div>
  );
}