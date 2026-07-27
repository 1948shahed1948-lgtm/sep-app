import React, { useState } from 'react';
import { useLang } from '@/lib/i18n';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const CODE = 'ranaayman@1971';

export default function AdminPasscode({ onUnlock }) {
  const { lang } = useLang();
  const [val, setVal] = useState('');
  const [err, setErr] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (val === CODE) {
      setErr(false);
      onUnlock();
    } else {
      setErr(true);
      setVal('');
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-20 p-6 rounded-3xl border border-slate-100 bg-white shadow-sm text-center">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-emerald-100 mb-3">
        <Lock className="w-6 h-6 text-emerald-600" />
      </div>
      <h1 className="font-heading font-bold text-lg text-slate-900">
        {lang === 'ar' ? 'دخول لوحة المشرف' : 'Admin access'}
      </h1>
      <p className="text-xs text-slate-500 mt-1">
        {lang === 'ar' ? 'أدخل رمز الدخول' : 'Enter the access code'}
      </p>
      <form onSubmit={submit} className="mt-5 space-y-3">
        <input
          autoFocus
          type="password"
          value={val}
          onChange={(e) => { setVal(e.target.value); setErr(false); }}
          placeholder="••••••••"
          className="w-full text-center tracking-[0.2em] text-xl font-bold rounded-xl border border-slate-200 px-4 py-3 focus:border-emerald-600 focus:outline-none"
        />
        {err && <p className="text-xs text-rose-600">{lang === 'ar' ? 'رمز غير صحيح' : 'Wrong code'}</p>}
        <button type="submit" className="w-full py-3 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 transition-colors">
          {lang === 'ar' ? 'دخول' : 'Enter'}
        </button>
      </form>
      <Link to="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 hover:text-slate-700 transition-colors mt-4">
        <ArrowLeft className="w-4 h-4" />
        {lang === 'ar' ? 'العودة' : 'Back'}
      </Link>
    </div>
  );
}