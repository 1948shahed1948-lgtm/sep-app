import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { LogIn, Mail, Lock, Loader2, AlertCircle, GraduationCap, Users } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import AuthLayout from '@/components/AuthLayout';
import GoogleIcon from '@/components/GoogleIcon';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!email.trim() || !password.trim()) {
      setError('البريد الإلكتروني وكلمة المرور مطلوبان');
      return;
    }
    setLoading(true);
    try {
      await base44.auth.loginViaEmailPassword(email.trim(), password);
      window.location.href = '/';
    } catch (err) {
      setError(err.message || 'فشل تسجيل الدخول — تحقق من بياناتك');
    }
    setLoading(false);
  };

  const handleGoogle = async () => {
    setError('');
    setGoogleLoading(true);
    try {
      await base44.auth.loginWithProvider('google', window.location.origin + '/');
    } catch (err) {
      setError(err.message || 'فشل الدخول عبر Google');
      setGoogleLoading(false);
    }
  };

  return (
    <AuthLayout
      icon={LogIn}
      title="تسجيل الدخول"
      subtitle="للطلاب وأولياء الأمور — ادخل بنقرة واحدة أو ببريدك"
      footer={<>ليس لديك حساب؟ <Link to="/register" className="text-primary font-medium hover:underline">أنشئ حساباً</Link></>}
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
        disabled={googleLoading}
        className="w-full inline-flex items-center justify-center gap-3 rounded-xl bg-primary py-3.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
      >
        {googleLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : <GoogleIcon className="w-5 h-5" />}
        {googleLoading ? 'جارٍ الدخول...' : 'الدخول الفوري عبر Google'}
      </button>

      <div className="relative my-5">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200" /></div>
        <div className="relative flex justify-center"><span className="bg-white px-3 text-xs text-slate-400">أو بالبريد وكلمة المرور</span></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label className="text-sm font-medium text-foreground">البريد الإلكتروني</label>
          <div className="relative">
            <Mail className="absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-slate-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 ps-10 pe-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              dir="ltr"
            />
          </div>
        </div>
        <div className="space-y-1.5">
          <div className="flex items-center justify-between">
            <label className="text-sm font-medium text-foreground">كلمة المرور</label>
            <Link to="/forgot-password" className="text-xs text-primary hover:underline">نسيت كلمة المرور؟</Link>
          </div>
          <div className="relative">
            <Lock className="absolute top-1/2 -translate-y-1/2 start-3 w-4 h-4 text-slate-400" />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2.5 ps-10 pe-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
              dir="ltr"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loading}
          className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white py-2.5 text-sm font-medium text-foreground hover:bg-slate-50 transition-colors disabled:opacity-50"
        >
          {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <LogIn className="w-4 h-4" />}
          {loading ? 'جارٍ الدخول...' : 'تسجيل الدخول'}
        </button>
      </form>
    </AuthLayout>
  );
}