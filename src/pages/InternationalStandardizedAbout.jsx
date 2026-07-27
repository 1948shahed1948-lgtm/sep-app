import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import {
  BookOpen, GraduationCap, FlaskConical, Calculator, Languages,
  Newspaper, Baby, ArrowRight, ArrowLeft
} from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

// Direct-access grid: each subject enters the working standardized test flow immediately — no template card.
const SUBJECTS = [
  { id: 'arabic', icon: BookOpen, bg: 'bg-emerald-50', text: 'text-emerald-600', ring: 'ring-emerald-200' },
  { id: 'islamic', icon: GraduationCap, bg: 'bg-amber-50', text: 'text-amber-600', ring: 'ring-amber-200' },
  { id: 'social', icon: Newspaper, bg: 'bg-rose-50', text: 'text-rose-600', ring: 'ring-rose-200' },
  { id: 'science', icon: FlaskConical, bg: 'bg-cyan-50', text: 'text-cyan-600', ring: 'ring-cyan-200' },
  { id: 'math', icon: Calculator, bg: 'bg-violet-50', text: 'text-violet-600', ring: 'ring-violet-200' },
  { id: 'english', icon: Languages, bg: 'bg-blue-50', text: 'text-blue-600', ring: 'ring-blue-200' },
  { id: 'reading', icon: BookOpen, bg: 'bg-teal-50', text: 'text-teal-600', ring: 'ring-teal-200' },
  { id: 'kg', icon: Baby, bg: 'bg-pink-50', text: 'text-pink-600', ring: 'ring-pink-200' },
];

const LABELS = {
  arabic: { ar: 'اللغة العربية', en: 'Arabic' },
  islamic: { ar: 'التربية الإسلامية', en: 'Islamic' },
  social: { ar: 'الدراسات الاجتماعية', en: 'Social Studies' },
  science: { ar: 'العلوم', en: 'Science' },
  math: { ar: 'الرياضيات', en: 'Math' },
  english: { ar: 'اللغة الإنجليزية', en: 'English' },
  reading: { ar: 'القراءة', en: 'Reading' },
  kg: { ar: 'رياض الأطفال', en: 'KG' },
};

export default function InternationalStandardizedAbout() {
  const { lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const testPath = '/standardized/criterion/grades';

  return (
    <div className="space-y-8">
      <PageHeader
        title={lang === 'ar' ? 'الاختبارات المعيارية الدولية' : 'International Standardized Assessments'}
        subtitle={lang === 'ar'
          ? 'اختر المادة للدخول مباشرة إلى الاختبار.'
          : 'Choose a subject to enter the test directly.'}
        backTo="/"
      />

      <section className="max-w-5xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SUBJECTS.map((subj, i) => {
            const label = LABELS[subj.id];
            return (
              <motion.div
                key={subj.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={testPath}
                  className="group flex flex-col items-center text-center gap-3 p-6 rounded-2xl bg-white border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 transition-all duration-500"
                >
                  <div className={`w-16 h-16 rounded-2xl ${subj.bg} ring-4 ${subj.ring} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                    <subj.icon className={`w-8 h-8 ${subj.text}`} />
                  </div>
                  <h3 className="font-heading font-bold text-base text-slate-900">
                    {lang === 'ar' ? label.ar : label.en}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600 group-hover:text-blue-700 transition-colors">
                    {lang === 'ar' ? 'ابدأ الاختبار' : 'Start Test'}
                    <Arrow className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </div>
  );
}