import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import Logo from '@/components/Logo';
import { gradeStages, getGradeName } from '@/lib/gradeData';
import {
  Home, BookOpen, Globe, Brain, Award, FileQuestion, NotebookPen,
  CalendarCheck, TrendingUp, ChevronDown, GraduationCap, Compass, Trophy
} from 'lucide-react';

function ExpandGroup({ label, icon: Icon, badge, defaultOpen, children, lang }) {
  const [open, setOpen] = useState(!!defaultOpen);
  const Chevron = lang === 'ar' ? ChevronDown : ChevronDown;
  return (
    <div>
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors"
      >
        <span className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
          <Icon className="w-4 h-4 text-primary" />
        </span>
        <span className="flex-1 text-start">{label}</span>
        {badge && <span className="text-[10px] font-bold text-slate-400 bg-slate-100 rounded-full px-2 py-0.5">{badge}</span>}
        <Chevron className={`w-4 h-4 text-slate-400 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && <div className="mt-1 space-y-0.5">{children}</div>}
    </div>
  );
}

function GradeLinks({ basePath, lang, onNavigate }) {
  return Object.entries(gradeStages).map(([stageKey, stage]) => (
    <div key={stageKey} className="mt-1">
      <p className="px-7 py-1 text-[11px] font-bold text-slate-400 flex items-center gap-1.5">
        <span>{stage.icon}</span>
        {lang === 'ar' ? stage.name_ar : stage.name_en}
      </p>
      {stage.grades.map((grade) => (
        <NavLink
          key={grade}
          to={`${basePath}/${grade}`}
          onClick={onNavigate}
          className={({ isActive }) =>
            `flex items-center gap-2 px-9 py-1.5 rounded-lg text-[13px] transition-colors ${
              isActive ? 'text-primary font-bold bg-primary/5' : 'text-slate-500 hover:text-slate-800 hover:bg-slate-50'
            }`
          }
        >
          <span className="w-1 h-1 rounded-full bg-slate-300" />
          {getGradeName(grade, lang)}
        </NavLink>
      ))}
    </div>
  ));
}

export default function Sidebar({ onNavigate }) {
  const { lang } = useLang();
  const location = useLocation();

  const mainLinks = [
    { to: '/', label: lang === 'ar' ? 'الرئيسية' : 'Home', icon: Home, end: true },
    { to: '/review', label: lang === 'ar' ? 'المراجعة اليومية' : 'Daily Review', icon: CalendarCheck },
    { to: '/mistake-journal', label: lang === 'ar' ? 'دفتر الأخطاء' : 'Mistake Journal', icon: NotebookPen },
    { to: '/progress', label: lang === 'ar' ? 'تقدّمي' : 'My Progress', icon: TrendingUp },
    { to: '/curriculum-in-life', label: lang === 'ar' ? 'المنهج في الحياة' : 'Curriculum in Life', icon: Compass },
    { to: '/genius-challenge', label: lang === 'ar' ? 'تحدي العبقري' : 'Genius Challenge', icon: Trophy },
  ];

  const linkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
      isActive ? 'bg-primary text-white shadow-sm' : 'text-slate-700 hover:bg-slate-100'
    }`;

  // auto-expand the curriculum group matching current path
  const isCurriculum = location.pathname.startsWith('/curriculum');

  return (
    <aside className="hidden lg:flex flex-col w-72 flex-shrink-0 bg-white border-e border-slate-200 h-[calc(100vh-4rem)] sticky top-16 overflow-y-auto">
      <div className="px-4 py-4 border-b border-slate-100">
        <Link to="/" onClick={onNavigate} className="flex items-center gap-2">
          <Logo size={40} variant="light" showText={false} />
          <div className="leading-tight">
            <p className="text-sm font-heading font-bold text-slate-800">
              {lang === 'ar' ? 'المنصة السعودية' : 'Saudi Platform'}
            </p>
            <p className="text-[11px] text-slate-400">{lang === 'ar' ? 'للتعليم' : 'for Education'}</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 px-3 py-3 space-y-1">
        {mainLinks.map((l) => (
          <NavLink key={l.to} to={l.to} end={l.end} onClick={onNavigate} className={linkClass}>
            <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10">
              <l.icon className="w-4 h-4 text-primary" />
            </span>
            {l.label}
          </NavLink>
        ))}

        <div className="pt-3 mt-2 border-t border-slate-100">
          <ExpandGroup
            label={lang === 'ar' ? 'بنوك الأسئلة' : 'Question Banks'}
            icon={FileQuestion}
            defaultOpen={location.pathname.startsWith('/question-bank')}
            lang={lang}
          >
            <GradeLinks basePath="/question-bank" lang={lang} onNavigate={onNavigate} />
          </ExpandGroup>
        </div>

        <div className="pt-3 mt-2 border-t border-slate-100">
          <p className="px-3 pb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wide">
            {lang === 'ar' ? 'المناهج' : 'Curricula'}
          </p>
          <ExpandGroup
            label={lang === 'ar' ? 'النظام الوطني' : 'National'}
            icon={BookOpen}
            badge={lang === 'ar' ? '١٢' : '12'}
            defaultOpen={isCurriculum}
            lang={lang}
          >
            <GradeLinks basePath="/curriculum/national" lang={lang} onNavigate={onNavigate} />
          </ExpandGroup>
          <ExpandGroup
            label={lang === 'ar' ? 'النظام الدولي' : 'International'}
            icon={Globe}
            badge={lang === 'ar' ? '١٢' : '12'}
            lang={lang}
          >
            <GradeLinks basePath="/curriculum/international" lang={lang} onNavigate={onNavigate} />
          </ExpandGroup>
        </div>

        <div className="pt-3 mt-2 border-t border-slate-100">
          <p className="px-3 pb-2 text-[11px] font-bold text-slate-400 uppercase tracking-wide">
            {lang === 'ar' ? 'الاختبارات' : 'Tests'}
          </p>
          <ExpandGroup label={lang === 'ar' ? 'اختبارات القدرات' : 'Aptitude Tests'} icon={Brain} lang={lang}>
            <NavLink to="/aptitude/verbal/0/grades" onClick={onNavigate} className="flex items-center gap-3 px-7 py-2 rounded-lg text-[13px] text-slate-600 hover:text-slate-900 hover:bg-slate-50">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
              {lang === 'ar' ? 'القسم اللفظي' : 'Verbal'}
            </NavLink>
            <NavLink to="/aptitude/quantitative/0/grades" onClick={onNavigate} className="flex items-center gap-3 px-7 py-2 rounded-lg text-[13px] text-slate-600 hover:text-slate-900 hover:bg-slate-50">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              {lang === 'ar' ? 'القسم الكمي' : 'Quantitative'}
            </NavLink>
          </ExpandGroup>
          <ExpandGroup label={lang === 'ar' ? 'الاختبارات المقننة' : 'Standardized Tests'} icon={Award} lang={lang}>
            {[
              { key: 'diagnostic', ar: 'تشخيصي', en: 'Diagnostic' },
              { key: 'criterion', ar: 'معياري', en: 'Criterion' },
              { key: 'adaptive', ar: 'تكيفي', en: 'Adaptive' },
            ].map((t) => (
              <NavLink key={t.key} to={`/standardized/${t.key}/grades`} onClick={onNavigate} className="flex items-center gap-3 px-7 py-2 rounded-lg text-[13px] text-slate-600 hover:text-slate-900 hover:bg-slate-50">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                {lang === 'ar' ? t.ar : t.en}
              </NavLink>
            ))}
          </ExpandGroup>
          <NavLink to="/university-admission" onClick={onNavigate} className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-700 hover:bg-slate-100 transition-colors">
            <span className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-primary/10">
              <GraduationCap className="w-4 h-4 text-primary" />
            </span>
            {lang === 'ar' ? 'اختبارات القبول الجامعي' : 'University Admission'}
          </NavLink>
        </div>
      </nav>

      <div className="px-4 py-3 border-t border-slate-100">
        <div className="flex items-center gap-2 rounded-xl bg-primary/5 px-3 py-2">
          <GraduationCap className="w-4 h-4 text-primary flex-shrink-0" />
          <p className="text-[11px] text-slate-500 leading-snug">
            {lang === 'ar' ? 'تصفّح الصفوف والمواد مباشرة من القائمة' : 'Browse grades & subjects right from the menu'}
          </p>
        </div>
      </div>
    </aside>
  );
}