import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Loader2, AlertCircle, GraduationCap, Users, Zap, ShieldCheck } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import AuthLayout from '@/components/AuthLayout';
import GoogleIcon from '@/components/GoogleIcon';

export default function Register() {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleGoogle = async () => {
    setError('');
    setLoading(true);
    try {
      await base44.auth.loginWithProvider('google', window.location.origin + '/');
    } catch (err) {
      setError(err.message || 'فشل الدخول عبر Google');
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      icon={UserPlus}
      title="إنشاء حساب جديد"
      subtitle="دخول فوري بنقرة واحدة — للطالب وولي الأمر"
      footer={<>لديك حساب؟ <Link to="/login" className="text-primary font-medium hover:underline">سجّل الدخول</Link></>}
    >
      {error && (
        <div className="flex items-center gap-2 rounded-lg bg-rose-50 border border-rose-200 px-3 py-2.5 text-sm text-rose-700 mb-4">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {/* Audience indicators */}
      <div className="grid grid-cols-2 gap-2 mb-5">
        <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-center">
          <GraduationCap className="w-5 h-5 text-primary" />
          <span className="text-xs font-semibold text-foreground">للطلاب</span>
        </div>
        <div className="flex flex-col items-center gap-1 rounded-xl border border-slate-200 bg-slate-50 px-3 py-3 text-center">
          <Users className="w-5 h-5 text-primary" />
          <span className="text-xs font-semibold text-foreground">لأولياء الأمور</span>
        </div>
      </div>

      {/* Google button */}
      <button
        onClick={handleGoogle}
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <GoogleIcon className="w-5 h-5" />}
        {loading ? 'جارٍ الدخول...' : 'الدخول الفوري عبر Google'}
      </button>

      {/* Info boxes */}
      <div className="mt-4 space-y-2.5">
        <div className="flex items-start gap-2 rounded-lg bg-amber-50 border border-amber-200 px-3 py-2.5">
          <Zap className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-amber-800 leading-relaxed">
            بعد الدخول، أدخل اسمك ورقم هاتفك لإكمال ملفك والاشتراك في المنصة.
          </p>
        </div>
        <div className="flex items-start gap-2 rounded-lg bg-emerald-50 border border-emerald-200 px-3 py-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
          <p className="text-xs text-emerald-800 leading-relaxed">
            تجربة مجانية 24 ساعة عند التسجيل، ثم اشترك لفتح جميع بنوك الأسئلة.
          </p>
        </div>
      </div>
    </AuthLayout>
  );
}