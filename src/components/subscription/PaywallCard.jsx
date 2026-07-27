import React from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { Crown, Lock, BookOpen } from 'lucide-react';

export default function PaywallCard() {
  const { lang } = useLang();
  const ar = lang === 'ar';
  return (
    <div className="max-w-lg mx-auto mt-10 rounded-3xl bg-white border border-amber-200 p-8 text-center shadow-sm">
      <div className="w-16 h-16 mx-auto rounded-full bg-amber-100 flex items-center justify-center mb-4">
        <Lock className="w-8 h-8 text-amber-600" />
      </div>
      <h2 className="font-heading font-bold text-xl text-slate-900 mb-2">
        {ar ? 'انتهت تجربتك المجانية' : 'Your free trial has ended'}
      </h2>
      <p className="text-sm text-slate-500 mb-4">
        {ar
          ? 'كانت التجربة يومين (٤٨ ساعة). الصفان ١-٢ بثلاث مواد (علوم، عربي، إنجليزي) مفتوحة، ولفتح بقية المحتوى اشترك الآن.'
          : 'The 48-hour trial is over. Grades 1-2 stay open for 3 subjects (Science, Arabic, English) — subscribe to unlock everything.'}
      </p>
      <div className="flex items-center justify-center gap-2 mb-6 text-xs text-emerald-700 bg-emerald-50 rounded-lg py-2 px-3">
        <BookOpen className="w-4 h-4" />
        {ar ? 'الصفان ١-٢: علوم، عربي، إنجليزي مفتوحة' : 'Grades 1-2: Science, Arabic, English are open'}
      </div>
      <Link
        to="/subscribe"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500 text-white font-bold hover:bg-amber-400 transition-colors"
      >
        <Crown className="w-4 h-4" /> {ar ? 'اشترك الآن' : 'Subscribe now'}
      </Link>
    </div>
  );
}