import React, { useEffect, useState } from 'react';
import { base44 } from '@/api/base44Client';
import { useAuth } from '@/lib/AuthContext';
import { useAccess } from '@/hooks/useAccess';
import { useLang } from '@/lib/i18n';
import { useToast } from '@/components/ui/use-toast';
import { useSearchParams, Link } from 'react-router-dom';
import { Loader2, Crown, Check, Clock, Sparkles, RotateCcw } from 'lucide-react';
import { trialRemainingMs, formatRemaining, getDeviceId } from '@/lib/access';
import { isIapAvailable, iapPurchase, iapRestore, syncEntitlement, getIapOfferings } from '@/lib/iap';
import MoyasarForm from '@/components/subscription/MoyasarForm';

const PLANS = [
  {
    id: 'monthly',
    price_ar: '75 ريال',
    price_en: '75 SAR',
    period_ar: '/ شهرياً',
    period_en: '/ month',
    badge_ar: '',
    badge_en: ''
  },
  {
    id: 'yearly',
    price_ar: '700 ريال',
    price_en: '700 SAR',
    period_ar: '/ سنوياً',
    period_en: '/ year',
    badge_ar: 'وفّر 200 ريال',
    badge_en: 'Save 200 SAR'
  }
];

export default function Subscribe() {
  const { lang } = useLang();
  const { user } = useAuth();
  const { access, subscription } = useAccess();
  const { toast } = useToast();
  const [params] = useSearchParams();
  const [busy, setBusy] = useState(null);
  const [remaining, setRemaining] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [verifying, setVerifying] = useState(false);
  const ar = lang === 'ar';

  // التحقق من دفع Moyasar فور إعادة التوجيه — يُطلق بمجرد وجود معرّف الدفع في الرابط
  useEffect(() => {
    const pid = params.get('id') || params.get('payment_id');
    if (!pid) return;
    setVerifying(true);
    (async () => {
      try {
        const res = await base44.functions.invoke('verifyMoyasarPayment', { payment_id: pid });
        if (res?.data?.activated) {
          toast({ title: ar ? 'تم الاشتراك ✦' : 'Subscribed ✦', description: ar ? 'وصولك الكامل مفعّل الآن' : 'Full access activated' });
        } else {
          toast({ title: ar ? 'لم يكتمل الدفع' : 'Payment not completed', variant: 'destructive' });
        }
      } catch (e) {
        toast({ title: ar ? 'خطأ في التحقق' : 'Verification error', description: e.message, variant: 'destructive' });
      } finally {
        setVerifying(false);
        // نظّف الرابط كي لا يُعاد التحقق عند التحديث
        try {
          const clean = window.location.pathname;
          window.history.replaceState({}, '', clean);
        } catch (_) {}
      }
    })();
  }, [params, ar]);

  useEffect(() => {
    const s = params.get('status');
    if (s === 'success' && !params.get('moyasar_redirect')) {
      toast({ title: ar ? 'تم الاشتراك' : 'Subscribed', description: ar ? 'قد يستغرق التفعيل لحظات' : 'Activation may take a moment' });
    }
    if (s === 'cancel') {
      toast({ title: ar ? 'أُلغي' : 'Cancelled', description: ar ? 'لم تكتمل العملية' : 'Checkout not completed', variant: 'destructive' });
    }
  }, [params]);

  useEffect(() => {
    if (access !== 'trial') return;
    const t = setInterval(() => setRemaining(trialRemainingMs()), 1000);
    setRemaining(trialRemainingMs());
    return () => clearInterval(t);
  }, [access]);

  // Native: keep entitlement fresh on mount
  useEffect(() => {
    if (isIapAvailable()) syncEntitlement();
  }, []);

  const startCheckout = async (plan) => {
    // Native app: use RevenueCat In-App Purchase
    if (isIapAvailable()) {
      setBusy(plan);
      try {
        await iapPurchase(plan);
        toast({ title: ar ? 'تم الاشتراك' : 'Subscribed', description: ar ? 'وصولك الكامل مفعّل الآن' : 'Full access activated' });
      } catch (e) {
        toast({ title: ar ? 'خطأ' : 'Error', description: e.message || 'purchase failed', variant: 'destructive' });
      }
      setBusy(null);
      return;
    }
    // Web (Moyasar): block inside iframe, then reveal the embedded form for the chosen plan.
    const inIframe = window.self !== window.top;
    if (inIframe) {
      alert(ar ? 'الاشتراك يعمل من التطبيق المنشور فقط، افتح الرابط في نافذة جديدة.' : 'Checkout works only from the published app. Open the link in a new tab.');
      return;
    }
    setSelectedPlan(plan);
  };

  const restore = async () => {
    if (!isIapAvailable()) return;
    setBusy('restore');
    try {
      await iapRestore();
      toast({ title: ar ? 'تمت الاستعادة' : 'Restored', description: ar ? 'تم التحقق من مشترياتك' : 'Your purchases were verified' });
    } catch (e) {
      toast({ title: ar ? 'خطأ' : 'Error', description: e.message, variant: 'destructive' });
    }
    setBusy(null);
  };

  const features = ar
    ? ['كل بنوك الأسئلة لجميع الصفوف', 'الاختبارات المعيارية والتشخيصية', 'بنوك التفكير العالي (بلوم)', 'تتبع المهارات ونقاط الضعف', 'تقارير WhatsApp الأسبوعية', 'تحدي العباقرة والربط بالحياة']
    : ['All question banks — every grade', 'Standardized & diagnostic tests', 'Bloom higher-thinking banks', 'Skill & weak-area tracking', 'Weekly WhatsApp reports', 'Genius challenge & real-life links'];

  return (
    <div className="max-w-3xl mx-auto py-6">
      {/* حالة الوصول */}
      <div className="rounded-3xl bg-gradient-to-br from-[#0C1738] to-[#1b2c5e] p-6 text-white mb-8">
        {access === 'full' && subscription?.status === 'active' && (
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6 text-amber-400" />
            <div>
              <p className="font-bold">{ar ? 'أنت مشترك ✦' : 'You are subscribed ✦'}</p>
              <p className="text-sm text-white/70">
                {ar ? 'الخطة' : 'Plan'}: {subscription.plan === 'yearly' ? (ar ? 'سنوية' : 'Yearly') : (ar ? 'شهرية' : 'Monthly')}
                {subscription.current_period_end ? ` — ${ar ? 'تتجدد' : 'renews'} ${new Date(subscription.current_period_end).toLocaleDateString(ar ? 'ar' : 'en')}` : ''}
              </p>
            </div>
          </div>
        )}
        {access === 'trial' && (
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-amber-400" />
            <div>
              <p className="font-bold">{ar ? 'تجربتك المجانية فعّالة' : 'Free trial active'}</p>
              <p className="text-sm text-white/70">
                {ar ? 'متبقٍ' : 'Remaining'}: <span className="font-mono font-bold text-amber-300">{formatRemaining(remaining, ar)}</span>
              </p>
            </div>
          </div>
        )}
        {access === 'preview' && (
          <div className="flex items-center gap-3">
            <Sparkles className="w-6 h-6 text-amber-400" />
            <div>
              <p className="font-bold">{ar ? 'تجربتك انتهت' : 'Trial ended'}</p>
              <p className="text-sm text-white/70">{ar ? 'اشترك لفتح كل المحتوى' : 'Subscribe to unlock all content'}</p>
            </div>
          </div>
        )}
        {access === 'full' && !subscription && (
          <div className="flex items-center gap-3">
            <Crown className="w-6 h-6 text-amber-400" />
            <p className="font-bold">{ar ? 'وصول كامل' : 'Full access'}</p>
          </div>
        )}
      </div>

      <h1 className="font-heading font-bold text-2xl text-center mb-2">{ar ? 'اختر خطتك' : 'Choose your plan'}</h1>
      <p className="text-center text-sm text-slate-500 mb-8">{ar ? 'الضيوف يتصفّحون بحرية — والمسجّل بالبريد: يومان كاملان ثم الباقي باشتراك' : 'Guests browse freely — registered emails get 2 full days, then subscribe for the rest'}</p>

      <div className="grid sm:grid-cols-2 gap-4 mb-8">
        {PLANS.map((p) => (
          <div key={p.id} className={`relative rounded-3xl border-2 p-6 ${p.id === 'yearly' ? 'border-amber-400 bg-amber-50/40' : 'border-slate-200 bg-white'} ${!isIapAvailable() && selectedPlan === p.id ? 'ring-2 ring-offset-2 ring-slate-900' : ''}`}>
            {p.badge_ar && (
              <span className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-amber-500 text-white text-[11px] font-bold">
                {ar ? p.badge_ar : p.badge_en}
              </span>
            )}
            <h3 className="font-heading font-bold text-lg mb-1">{ar ? (p.id === 'yearly' ? 'سنوي' : 'شهري') : (p.id === 'yearly' ? 'Yearly' : 'Monthly')}</h3>
            <p className="text-3xl font-extrabold text-slate-900 mb-1">
              {ar ? p.price_ar : p.price_en}
              <span className="text-sm font-normal text-slate-400">{ar ? p.period_ar : p.period_en}</span>
            </p>
            <button
              onClick={() => startCheckout(p.id)}
              disabled={!!busy || verifying}
              className={`w-full mt-4 py-3 rounded-xl font-bold transition-colors disabled:opacity-50 inline-flex items-center justify-center gap-2 ${p.id === 'yearly' ? 'bg-amber-500 text-white hover:bg-amber-400' : 'bg-slate-900 text-white hover:bg-slate-800'}`}
            >
              {busy === p.id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Crown className="w-4 h-4" />}
              {ar ? 'اشترك' : 'Subscribe'}
            </button>
          </div>
        ))}
      </div>

      {/* Moyasar payment form (web only, shown after a plan is chosen) */}
      {!isIapAvailable() && selectedPlan && (
        <div className="mb-8">
          <h3 className="font-heading font-bold text-lg mb-3 text-center">
            {ar ? `ادفع اشتراك ${selectedPlan === 'yearly' ? 'سنوي' : 'شهري'}` : `Pay ${selectedPlan === 'yearly' ? 'yearly' : 'monthly'}`}
          </h3>
          <MoyasarForm plan={selectedPlan} />
          <button
            onClick={() => setSelectedPlan(null)}
            className="mx-auto mt-3 block text-xs text-slate-500 hover:text-slate-700"
          >
            {ar ? 'تغيير الخطة' : 'Change plan'}
          </button>
        </div>
      )}

      {verifying && (
        <div className="mb-8 flex items-center justify-center gap-2 text-sm text-slate-600">
          <Loader2 className="w-4 h-4 animate-spin" />
          {ar ? 'جارٍ التحقق من الدفع...' : 'Verifying payment...'}
        </div>
      )}

      <div className="rounded-2xl bg-white border border-slate-200 p-6">
        <h4 className="font-heading font-bold mb-3">{ar ? 'ما الذي تحصل عليه' : 'What you get'}</h4>
        <ul className="grid sm:grid-cols-2 gap-2">
          {features.map((f, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <Check className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" /> {f}
            </li>
          ))}
        </ul>
      </div>

      {/* وسائل الدفع المقبولة */}
      <div className="mt-6 flex flex-col items-center gap-2">
        <p className="text-xs text-slate-500 font-medium">{ar ? 'وسائل الدفع المقبولة' : 'Accepted payment methods'}</p>
        <div className="flex flex-wrap items-center justify-center gap-2">
          <span className="inline-flex items-center rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-emerald-700 shadow-sm">مدى</span>
          <span className="inline-flex items-center rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-sm">Apple Pay</span>
          <span className="inline-flex items-center rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-slate-700 shadow-sm">Google Pay</span>
          <span className="inline-flex items-center rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-blue-700 shadow-sm">Visa</span>
          <span className="inline-flex items-center rounded-lg bg-white border border-slate-200 px-3 py-1.5 text-[11px] font-bold text-orange-600 shadow-sm">Mastercard</span>
        </div>
      </div>

      {isIapAvailable() && (
        <button
          onClick={restore}
          disabled={!!busy}
          className="mx-auto mt-4 inline-flex items-center gap-2 text-xs text-slate-500 hover:text-slate-700 disabled:opacity-50"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {ar ? 'استعادة المشتريات السابقة' : 'Restore previous purchases'}
        </button>
      )}

      <p className="text-center text-xs text-slate-400 mt-4">
        {isIapAvailable()
          ? (ar ? 'الشراء عبر متجر التطبيقات — إلغاء من إعدادات المتجر' : 'In-app purchase via the app store — cancel in store settings')
          : (ar ? 'مدعوم بواسطة Moyasar — الدفع لمدة محددة يتجدد يدوياً' : 'Powered by Moyasar — fixed-period payment, renews manually')}
      </p>
    </div>
  );
}