import React, { useState, useRef, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { Home, FileQuestion, TrendingUp, Settings, LayoutDashboard, GraduationCap, MessageCircle } from 'lucide-react';

const SUPPORT_NUMBERS = [
  { phone: '966501587196', label_ar: 'الدعم الفني', label_en: 'Tech Support' },
  { phone: '966534776379', label_ar: 'الدعم الفني ٢', label_en: 'Tech Support 2' },
];

function WhatsAppSupportItem() {
  const { lang } = useLang();
  const ar = lang === 'ar';
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    const onDown = (e) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [open]);

  const msg = encodeURIComponent(ar ? 'السلام عليكم، أحتاج مساعدة في منصة بوابة الأسئلة بلس' : 'Hello, I need help with the Question Portal Plus platform');

  return (
    <div className="relative flex-1" ref={wrapRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex flex-col items-center justify-center gap-1 py-2 text-slate-400 hover:text-[#25D366] transition-colors"
        aria-label={ar ? 'الدعم عبر واتساب' : 'WhatsApp support'}
      >
        <span className="w-9 h-9 rounded-xl flex items-center justify-center transition-all bg-[#25D366]/10">
          <MessageCircle className="w-5 h-5 text-[#25D366]" />
        </span>
        <span className="text-[10px] font-semibold leading-none truncate max-w-full px-1 text-[#25D366]">
          {ar ? 'الدعم' : 'Support'}
        </span>
      </button>

      {open && (
        <div className="absolute bottom-full mb-2 start-1/2 -translate-x-1/2 z-50 w-44 rounded-2xl bg-white shadow-xl border border-slate-200 p-2 space-y-1">
          {SUPPORT_NUMBERS.map((n) => (
            <a
              key={n.phone}
              href={`https://wa.me/${n.phone}?text=${msg}`}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-2.5 py-2 rounded-xl hover:bg-emerald-50 transition-colors"
            >
              <span className="w-8 h-8 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-4 h-4 text-white" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-bold text-slate-800 truncate">{ar ? n.label_ar : n.label_en}</p>
                <p dir="ltr" className="text-[10px] text-slate-500">+{n.phone.replace(/^966/, '966 ')}</p>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function BottomTabs() {
  const { lang } = useLang();

  const tabs = [
    { to: '/', label: lang === 'ar' ? 'الرئيسية' : 'Home', icon: Home, end: true },
    { to: '/question-bank', label: lang === 'ar' ? 'بنك الأسئلة' : 'Bank', icon: FileQuestion },
    { to: '/teachers', label: lang === 'ar' ? 'المعلمون' : 'Tutors', icon: GraduationCap, colorful: true },
    { to: '/progress', label: lang === 'ar' ? 'تقدّمي' : 'Progress', icon: TrendingUp },
    { to: '/settings', label: lang === 'ar' ? 'الإعدادات' : 'Settings', icon: Settings, end: true },
    { to: '/admin', label: lang === 'ar' ? 'التحكم' : 'Admin', icon: LayoutDashboard, colorful: true },
  ];

  const tabClass = ({ isActive }) =>
    `flex flex-col items-center justify-center gap-1 flex-1 py-2 transition-colors ${
      isActive ? 'text-primary' : 'text-slate-400'
    }`;

  return (
    <nav className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 pb-safe">
      <div className="flex items-stretch max-w-md mx-auto">
        {tabs.map((t) => (
          <NavLink key={t.to} to={t.to} end={t.end} className={tabClass}>
            {({ isActive }) => (
              <>
                <span className={`w-9 h-9 rounded-xl flex items-center justify-center transition-all ${t.colorful ? 'bg-gradient-to-br from-amber-400 via-rose-500 to-purple-600 shadow-md' : isActive ? 'bg-primary/10 scale-105' : ''}`}>
                  <t.icon className={`w-5 h-5 ${t.colorful ? 'text-white' : ''}`} />
                </span>
                <span className={`text-[10px] font-semibold leading-none truncate max-w-full px-1 ${t.colorful ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600' : ''}`}>
                  {t.label}
                </span>
              </>
            )}
          </NavLink>
        ))}
        <WhatsAppSupportItem />
      </div>
    </nav>
  );
}