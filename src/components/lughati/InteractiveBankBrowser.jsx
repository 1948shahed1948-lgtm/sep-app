import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { BookOpen, ArrowRight as BackIcon } from 'lucide-react';

// تصفّح بنك تفاعلي: شبكة وحدات مربعة ← شبكة دروس ← الأسئلة (يتولاها الصفحة)
export default function InteractiveBankBrowser({
  units, unitTheme, selectedUnit, onSelectUnit, onPickLesson,
  banner, title, subtitle, stats, homeLabel, bankLabel, toAr,
  renderLessonTile, backTo,
}) {
  // سمة افتراضية احتياطية لمنع انهيار العرض عند نقص سمة وحدة
  const FALLBACK_THEME = {
    headFrom: 'from-slate-100', iconBg: 'bg-slate-100', iconText: 'text-slate-700',
    chip: 'bg-slate-100 text-slate-700', tile: 'bg-white', tileBorder: 'border-slate-200',
    hover: 'hover:border-slate-300', num: 'text-slate-500',
  };
  const safeStats = Array.isArray(stats) ? stats : [];
  const safeTheme = (i) => unitTheme?.[i] || FALLBACK_THEME;

  const Banner = () => (
    <div className="relative overflow-hidden rounded-2xl">
      <img src={banner} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-l from-white via-white/95 to-white/55" />
      <div className="relative px-6 py-10 sm:px-10 sm:py-14 text-slate-900" dir="rtl">
        <nav className="flex items-center gap-1.5 text-xs text-slate-700 mb-3">
          <Link to="/" className="hover:text-black font-medium">{homeLabel}</Link>
          <span>/</span>
          <span className="text-black font-bold">{bankLabel}</span>
        </nav>
        <Link to={backTo || "/"} className="inline-flex items-center gap-1.5 text-sm text-slate-800 hover:text-black font-medium mb-3">
          <BackIcon className="w-4 h-4 rotate-180" />
          {backTo ? 'عودة لبنوك الأسئلة' : 'العودة للرئيسية'}
        </Link>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-black">{title}</h1>
        <p className="text-sm text-slate-800 font-medium mt-2">{subtitle}</p>
        <div className="flex gap-3 mt-4">
          {safeStats.map((s, i) => (
            <div key={i} className="text-center px-3 py-1.5 rounded-xl bg-white/90 border border-black/10">
              <span className="text-lg font-extrabold text-black">{s.n}</span>
              <span className="text-[10px] block text-slate-600">{s.l}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // ====== شاشة الدروس (لوحدة محددة) ======
  if (selectedUnit !== null) {
    const unit = units[selectedUnit];
    const th = safeTheme(selectedUnit);
    return (
      <div className="space-y-8" dir="rtl">
        <Banner />
        <button onClick={() => onSelectUnit(null)} className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
          <BackIcon className="w-4 h-4 rotate-180" />
          عودة للوحدات
        </button>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="rounded-2xl bg-white border border-slate-100 shadow-sm overflow-hidden">
          <div className={`px-5 py-4 bg-gradient-to-l ${th.headFrom} to-white border-b border-slate-100 flex items-center gap-3`}>
            <div className={`w-11 h-11 rounded-xl ${th.iconBg} flex items-center justify-center flex-shrink-0`}>
              <BookOpen className={`w-5 h-5 ${th.iconText}`} />
            </div>
            <div className="flex-1">
              <h2 className="font-heading font-bold text-slate-900">الوحدة {toAr(selectedUnit + 1)}: {unit.title_ar}</h2>
              <p className="text-xs text-slate-400">{toAr(unit.lessons.length)} دروس · {toAr(unit.lessons.length * 18)} سؤالًا</p>
            </div>
            <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${th.chip}`}>وحدة {toAr(selectedUnit + 1)}</span>
          </div>
          <div className="p-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
              {unit.lessons.map((l, li) => renderLessonTile(l, li, th, () => onPickLesson(selectedUnit, li)))}
            </div>
          </div>
        </motion.div>
      </div>
    );
  }

  // ====== شاشة الوحدات (أيقونات مربعة) ======
  return (
    <div className="space-y-8" dir="rtl">
      <Banner />
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
        {units.map((unit, ui) => {
          const th = safeTheme(ui);
          return (
            <motion.button
              key={unit.title_ar}
              onClick={() => onSelectUnit(ui)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: ui * 0.08 }}
              className={`group aspect-square rounded-2xl bg-white border-2 ${th.tileBorder} ${th.hover} hover:shadow-lg transition-all hover:-translate-y-1 flex flex-col overflow-hidden`}
            >
              <div className="relative flex-1 overflow-hidden bg-slate-100">
                <img src={unit.image} alt={unit.title_ar} className="w-full h-full object-cover brightness-90 contrast-105 group-hover:scale-110 group-hover:brightness-100 transition-all duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent pointer-events-none" />
              </div>
              <div className={`p-3 text-center ${th.tile} ${th.tileBorder} border-t`}>
                <div className={`text-[11px] font-bold ${th.num} mb-0.5`}>الوحدة {toAr(ui + 1)}</div>
                <h3 className="text-sm font-heading font-bold text-slate-900 leading-tight">{unit.title_ar}</h3>
                <p className="text-[11px] text-slate-400 mt-0.5">{toAr(unit.lessons.length)} دروس</p>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}