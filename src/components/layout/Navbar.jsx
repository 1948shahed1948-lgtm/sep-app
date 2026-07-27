import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import Logo from '@/components/Logo';
import AdminPasscodeButton from '@/components/admin/AdminPasscodeButton';
import QuickAccessBar from '@/components/layout/QuickAccessBar';
import HeaderPortraits from '@/components/layout/HeaderPortraits';
import NavGradeDropdown from '@/components/layout/NavGradeDropdown';
import { gradeStages, getGradeName } from '@/lib/gradeData';
import { Globe, Menu, X, LayoutDashboard, BookOpen, Brain, Award, NotebookPen, FileQuestion, CreditCard } from 'lucide-react';
import CreateAccountButton from '@/components/student/CreateAccountButton';

export default function Navbar() {
  const { t, lang, toggleLang } = useLang();
  const [asideOpen, setAsideOpen] = useState(false);

  const navItems = [
    { label: t('home'), path: '/', icon: LayoutDashboard },
    { label: lang === 'ar' ? 'دفتر الأخطاء' : 'Mistake Journal', path: '/mistake-journal', icon: NotebookPen },
    { label: t('myProgress'), path: '/progress', icon: LayoutDashboard },
  ];

  const gradeMenus = [
    {
      key: 'curriculum',
      label: lang === 'ar' ? 'المناهج الدراسية' : 'Curricula',
      icon: BookOpen,
      categories: [
        { key: 'national', label: t('nationalCurriculum'), getPath: (grade) => `/curriculum/national/${grade}` },
        { key: 'international', label: t('internationalCurriculum'), getPath: (grade) => `/curriculum/international/${grade}` },
      ],
    },
    {
      key: 'aptitude',
      label: t('aptitudeTests'),
      icon: Brain,
      categories: [
        { key: 'verbal', label: lang === 'ar' ? 'لفظي' : 'Verbal', path: '/aptitude/verbal/0/grades' },
        { key: 'quantitative', label: lang === 'ar' ? 'كمي' : 'Quantitative', path: '/aptitude/quantitative/0/grades' },
      ],
    },
    {
      key: 'standardized',
      label: lang === 'ar' ? 'اختبارات مقننة' : 'Standardized Tests',
      icon: Award,
      categories: [
        { key: 'diagnostic', label: lang === 'ar' ? 'تشخيصي' : 'Diagnostic', path: '/standardized/diagnostic/grades' },
        { key: 'criterion', label: lang === 'ar' ? 'معياري' : 'Criterion', path: '/standardized/criterion/grades' },
        { key: 'adaptive', label: lang === 'ar' ? 'تكيفي' : 'Adaptive', path: '/standardized/adaptive/grades' },
      ],
    },
    {
      key: 'questionBank',
      label: lang === 'ar' ? 'بنوك الأسئلة' : 'Question Banks',
      icon: FileQuestion,
      allowedGrades: ['grade_1', 'grade_2', 'grade_3', 'grade_4', 'grade_5', 'grade_6'],
      categories: [
        { key: 'banks', label: lang === 'ar' ? 'بنوك تفاعلية' : 'Interactive Banks', getPath: (grade) => `/question-bank/${grade}` },
      ],
    },
  ];

  return (
    <>
      <nav className="relative sticky top-0 z-50 bg-[#12204B] backdrop-blur-xl border-b border-white/10 shadow-lg">
        <HeaderPortraits />
        <AdminPasscodeButton />
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setAsideOpen(true)}
                className="lg:hidden w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
              >
                <Menu className="w-5 h-5 text-white" />
              </button>
              <Link to="/">
                <Logo size={72} variant="light" />
              </Link>
            </div>

            <div className="hidden lg:flex items-center gap-1">
              <Link
                to="/"
                className="px-3 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                {t('home')}
              </Link>
              {gradeMenus.map((menu) => (
                <NavGradeDropdown key={menu.key} label={menu.label} categories={menu.categories} allowedGrades={menu.allowedGrades} />
              ))}
              <Link
                to="/mistake-journal"
                className="px-3 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                {lang === 'ar' ? 'دفتر الأخطاء' : 'Mistake Journal'}
              </Link>
              <Link
                to="/progress"
                className="px-3 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 transition-all"
              >
                {t('myProgress')}
              </Link>
            </div>

            <div className="flex items-center gap-2">
              <CreateAccountButton />
              <Link
                to="/subscribe"
                className="flex-shrink-0 inline-flex items-center gap-1 h-8 px-3 rounded-full bg-emerald-600 hover:bg-emerald-500 transition-colors shadow"
              >
                <CreditCard className="w-4 h-4 text-white" />
                <span className="hidden sm:inline text-[11px] font-bold text-white">{lang === 'ar' ? 'الاشتراك' : 'Subscribe'}</span>
              </Link>
              <button
                onClick={toggleLang}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-white/70 hover:text-white hover:bg-white/10 transition-colors"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-medium">{lang === 'ar' ? 'EN' : 'عربي'}</span>
              </button>
            </div>
          </div>
        </div>
        <QuickAccessBar />
      </nav>

      {/* Mobile Aside Sidebar */}
      {asideOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-black/50" onClick={() => setAsideOpen(false)} />
          <div className="absolute top-0 start-0 h-full w-72 bg-[#12204B] shadow-2xl p-5 flex flex-col gap-1">
            <div className="flex items-center justify-between mb-6">
              <Logo size={48} variant="light" showText={false} />
              <button
                onClick={() => setAsideOpen(false)}
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center"
              >
                <X className="w-5 h-5 text-white" />
              </button>
            </div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setAsideOpen(false)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all"
              >
                <item.icon className="w-5 h-5" />
                {item.label}
              </Link>
            ))}
            {gradeMenus.map((menu) => (
              <div key={menu.key} className="mt-2 pt-3 border-t border-white/10">
                <p className="px-4 pb-2 text-xs font-bold text-white/40 flex items-center gap-2">
                  <menu.icon className="w-4 h-4" />
                  {menu.label}
                </p>
                {menu.categories.map((category) =>
                  category.getPath ? (
                    <div key={category.key} className="mb-1">
                      {menu.categories.length > 1 && (
                        <p className="px-4 py-1 text-xs font-semibold text-white/50">{category.label}</p>
                      )}
                      {Object.values(gradeStages).flatMap((stage) => stage.grades)
                        .filter((grade) => !menu.allowedGrades || menu.allowedGrades.includes(grade))
                        .map((grade) => (
                        <Link
                          key={grade}
                          to={category.getPath(grade)}
                          onClick={() => setAsideOpen(false)}
                          className="flex items-center gap-3 px-6 py-2 rounded-xl text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all"
                        >
                          {getGradeName(grade, lang)}
                        </Link>
                      ))}
                    </div>
                  ) : (
                    <Link
                      key={category.key}
                      to={category.path}
                      onClick={() => setAsideOpen(false)}
                      className="flex items-center gap-3 px-4 py-2 rounded-xl text-sm font-medium text-white/80 hover:bg-white/10 hover:text-white transition-all"
                    >
                      {category.label}
                    </Link>
                  )
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}