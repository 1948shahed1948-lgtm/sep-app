import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { base44 } from '@/api/base44Client';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, GraduationCap, ArrowRight, ArrowLeft, LogIn } from 'lucide-react';

export default function TeacherLogin() {
  const { lang, isRTL } = useLang();
  const isAr = lang === 'ar';
  const nav = useNavigate();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [phone, setPhone] = useState('');
  const [status, setStatus] = useState('idle'); // idle | searching | found | notfound | notloggedin
  const [profile, setProfile] = useState(null);

  const handleSearch = async () => {
    const clean = phone.replace(/\s/g, '');
    if (clean.length < 8) { alert(isAr ? 'أدخل رقم هاتف صحيح' : 'Enter a valid phone'); return; }
    setStatus('searching');
    try {
      // ابحث عن ملف معلم بهذا الرقم
      const profiles = await base44.entities.TeacherProfile.filter({ phone: clean });
      const p = profiles?.[0];
      if (!p) { setStatus('notfound'); return; }
      setProfile(p);
      // تحقق هل المستخدم مسجّل دخوله
      try {
        await base44.auth.me();
        // مسجّل → اذهب للوحة
        setStatus('found');
        setTimeout(() => nav('/teacher/dashboard'), 800);
      } catch {
        setStatus('notloggedin');
      }
    } catch {
      setStatus('notfound');
    }
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title={isAr ? 'دخول المعلم' : 'Tutor Login'}
        backTo="/"
        breadcrumbs={[{ label: isAr ? 'الرئيسية' : 'Home', path: '/' }, { label: isAr ? 'دخول المعلم' : 'Tutor Login' }]}
      />

      <Card className="rounded-2xl border-emerald-100 bg-gradient-to-br from-emerald-50 to-white max-w-md mx-auto">
        <CardContent className="p-8 space-y-5">
          <div className="text-center space-y-3">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emerald-100">
              <GraduationCap className="w-8 h-8 text-emerald-600" />
            </div>
            <h2 className="font-heading font-bold text-xl text-slate-900">{isAr ? 'دخول سريع برقم الهاتف' : 'Quick Login by Phone'}</h2>
            <p className="text-sm text-slate-500">
              {isAr ? 'أدخل رقم واتساب الذي سجّلت به، وادخل إلى لوحتك الكاملة مباشرة' : 'Enter the WhatsApp number you registered with to access your dashboard'}
            </p>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-emerald-600" />
              {isAr ? 'رقم الهاتف (واتساب)' : 'Phone number (WhatsApp)'}
            </label>
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="9665XXXXXXXX"
              dir="ltr"
              className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-emerald-400 text-center font-mono"
            />
          </div>

          <Button
            onClick={handleSearch}
            disabled={status === 'searching' || status === 'found'}
            className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl h-12 gap-2"
          >
            {status === 'searching' ? (isAr ? 'جارٍ البحث…' : 'Searching…') : (
              <>
                <LogIn className="w-5 h-5" />
                {isAr ? 'ادخل لوحتي' : 'Enter my dashboard'}
                <Arrow className="w-4 h-4" />
              </>
            )}
          </Button>

          {status === 'notfound' && (
            <div className="text-center space-y-3 bg-red-50 rounded-xl p-4">
              <p className="text-sm text-red-600 font-medium">{isAr ? 'لا يوجد معلم بهذا الرقم' : 'No tutor found with this number'}</p>
              <Link to="/teacher/register">
                <Button size="sm" className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg">{isAr ? 'سجّل كمعلم جديد' : 'Register as new tutor'}</Button>
              </Link>
            </div>
          )}

          {status === 'found' && (
            <div className="text-center bg-emerald-50 rounded-xl p-4">
              <p className="text-sm text-emerald-700 font-bold">{isAr ? `مرحباً ${profile?.full_name}! جارٍ التحويل…` : `Welcome ${profile?.full_name}! Redirecting…`}</p>
            </div>
          )}

          {status === 'notloggedin' && (
            <div className="text-center space-y-3 bg-amber-50 rounded-xl p-4">
              <p className="text-sm text-amber-700 font-medium">
                {isAr ? 'وجدنا حسابك! سجّل دخولك بإيميلك أولاً (لأمان حسابك) ثم ارجع هنا' : 'Found your account! Log in with your email first (for security), then come back'}
              </p>
              <Button onClick={() => nav('/login?redirect=/teacher/login')} size="sm" className="bg-primary hover:bg-primary/90 text-white rounded-lg">
                {isAr ? 'سجّل دخول الإيميل' : 'Log in with email'}
              </Button>
            </div>
          )}

          <div className="text-center pt-2">
            <Link to="/teacher/register" className="text-xs text-slate-400 hover:text-emerald-600">
              {isAr ? 'معلم جديد؟ سجّل الآن ←' : 'New tutor? Register now ←'}
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}