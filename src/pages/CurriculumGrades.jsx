import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n.jsx';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Baby, BookOpen, Pencil, Ruler, Calculator, GraduationCap, Library, Brain, Award, Stethoscope } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

const stages = [
  { key: 'primary', grades: [1, 2, 3, 4, 5, 6], accent: 'emerald', dot: 'bg-emerald-500', titleColor: 'text-emerald-700', cardHover: 'hover:border-emerald-300', cardBg: 'bg-emerald-50' },
  { key: 'intermediate', grades: [7, 8, 9], accent: 'amber', dot: 'bg-amber-500', titleColor: 'text-amber-700', cardHover: 'hover:border-amber-300', cardBg: 'bg-amber-50' },
  { key: 'secondary', grades: [10, 11, 12], accent: 'violet', dot: 'bg-violet-500', titleColor: 'text-violet-700', cardHover: 'hover:border-violet-300', cardBg: 'bg-violet-50' },
];

const primaryGradeIcons = { 1: Baby, 2: BookOpen, 3: Pencil, 4: Ruler, 5: Calculator, 6: GraduationCap };

const LIBRARY_IMAGE_URL = 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/c30e3a655_generated_image.png';

export default function CurriculumGrades() {
  const { curriculum } = useParams();
  const { t, lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const title = curriculum === 'national' ? t('nationalCurriculum') : t('internationalCurriculum');

  return (
    <div className="space-y-8">
      <PageHeader
        title={title}
        subtitle={t('exploreGrades')}
        backTo="/"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: title }]}
      />



      {curriculum === 'international' && (
        <a
          href="https://hilarious-queijadas-6164cc.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-4 rounded-2xl bg-white border-2 border-purple-200 p-5 sm:p-6 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 hover:-translate-y-0.5"
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-md shadow-purple-500/30 group-hover:scale-110 transition-transform">
            <Library className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
              Question Banks
            </h2>
            <p className="text-sm text-slate-500">
              Browse question banks by grade, semester and subject
            </p>
          </div>
          <Arrow className="w-5 h-5 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
        </a>
      )}

      {curriculum === 'international' && (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            { label: 'Aptitude Test', href: 'https://effortless-puffpuff-bbed49.netlify.app/', Icon: Brain, gradient: 'from-blue-500 to-indigo-600', border: 'border-blue-200', shadow: 'shadow-blue-200/50', iconHover: 'group-hover:text-blue-600', arrowColor: 'text-blue-400 group-hover:text-blue-600' },
            { label: 'Performance Test', href: 'https://luminous-haupia-9e1138.netlify.app/', Icon: Award, gradient: 'from-amber-500 to-orange-600', border: 'border-amber-200', shadow: 'shadow-amber-200/50', iconHover: 'group-hover:text-amber-600', arrowColor: 'text-amber-400 group-hover:text-amber-600' },
            { label: 'Diagnostic Test', href: 'https://rainbow-treacle-8f862c.netlify.app/', Icon: Stethoscope, gradient: 'from-emerald-500 to-teal-600', border: 'border-emerald-200', shadow: 'shadow-emerald-200/50', iconHover: 'group-hover:text-emerald-600', arrowColor: 'text-emerald-400 group-hover:text-emerald-600' },
          ].map((card) => {
            const Icon = card.Icon;
            return (
              <a
                key={card.label}
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-4 rounded-2xl bg-white border-2 ${card.border} p-5 sm:p-6 hover:shadow-xl ${card.shadow} transition-all duration-300 hover:-translate-y-0.5`}
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${card.gradient} flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div className="flex-1">
                  <h2 className={`text-lg font-heading font-bold text-slate-900 ${card.iconHover} transition-colors`}>
                    {card.label}
                  </h2>
                  <p className="text-sm text-slate-500">
                    {lang === 'ar' ? 'اختبار تفاعلي عبر الرابط الخارجي' : 'Interactive test via external link'}
                  </p>
                </div>
                <Arrow className={`w-5 h-5 ${card.arrowColor} group-hover:translate-x-1 transition-all`} />
              </a>
            );
          })}
        </div>
      )}

      {curriculum === 'national' && (
        <Link
          to="/question-bank/grades"
          className="group flex items-center gap-4 rounded-2xl bg-white border-2 border-purple-200 p-5 sm:p-6 hover:shadow-xl hover:shadow-purple-200/50 transition-all duration-300 hover:-translate-y-0.5"
        >
          <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500 to-fuchsia-600 flex items-center justify-center shadow-md shadow-purple-500/30 group-hover:scale-110 transition-transform">
            <Library className="w-7 h-7 text-white" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg sm:text-xl font-heading font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
              {lang === 'ar' ? 'بنوك الأسئلة' : 'Question Banks'}
            </h2>
            <p className="text-sm text-slate-500">
              {lang === 'ar' ? 'تصفّح بنوك الأسئلة حسب الصف والفصل والمادة' : 'Browse question banks by grade, semester and subject'}
            </p>
          </div>
          <Arrow className="w-5 h-5 text-purple-400 group-hover:text-purple-600 group-hover:translate-x-1 transition-all" />
        </Link>
      )}

      {curriculum === 'national' && (
        <div className="relative overflow-hidden rounded-2xl border border-slate-100 shadow-sm">
          <img
            src={LIBRARY_IMAGE_URL}
            alt={lang === 'ar' ? 'مكتبة وطلاب يختبرون' : 'Library and students taking exams'}
            className="w-full h-64 sm:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          <div className="absolute bottom-0 inset-x-0 p-5">
            <p className="text-white font-heading font-bold text-base sm:text-lg">
              {lang === 'ar' ? 'بنوك الأسئلة: تدريب واختبار في أجواء دراسية' : 'Question Banks: practice and exams in a study atmosphere'}
            </p>
          </div>
        </div>
      )}


    </div>
  );
}