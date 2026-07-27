import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n';
import { getGradeName } from '@/lib/gradeData';
import { Calendar } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';

export default function QuestionBankSemesters() {
  const { grade } = useParams();
  const { t, lang } = useLang();
  const title = lang === 'ar' ? 'بنوك الأسئلة' : 'Question Banks';
  const gradeName = getGradeName(grade, lang);

  const semesters = [
    { key: 'first', ar: 'الفصل الأول', en: 'Semester 1', bg: '#3a57e8', glow: 'shadow-[0_12px_30px_-8px_#3a57e899]' },
    { key: 'second', ar: 'الفصل الثاني', en: 'Semester 2', bg: '#109673', glow: 'shadow-[0_12px_30px_-8px_#10967399]' },
  ];

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${title} · ${gradeName}`}
        subtitle={lang === 'ar' ? 'اختر الفصل الدراسي' : 'Choose the semester'}
        backTo="/question-bank/grades"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: t('nationalCurriculum'), path: '/curriculum/national' }, { label: title, path: '/question-bank/grades' }, { label: gradeName }]}
      />

      <div className="grid sm:grid-cols-2 gap-6 max-w-3xl">
        {semesters.map((s, i) => (
          <motion.div key={s.key} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}>
            <Link
              to={`/question-bank/${grade}/${s.key}`}
              className="group relative flex flex-col items-center justify-center p-10 text-center transition-all duration-300 hover:-translate-y-1.5 rounded-tr-[2.5rem] rounded-bl-[2.5rem] shadow-lg hover:shadow-2xl"
              style={{ backgroundColor: s.bg, boxShadow: `0 12px 30px -8px ${s.bg}99` }}
            >
              {/* لوحة زجاجية داخلية */}
              <div className="absolute inset-5 rounded-tr-2xl rounded-bl-2xl bg-white/10 border border-white/20" />

              {/* الأيقونة */}
              <div className="relative mb-4 group-hover:scale-110 transition-transform duration-300">
                <Calendar className="w-10 h-10 text-white" strokeWidth={1.6} />
              </div>

              <h3 className="relative font-heading font-bold text-white text-lg">
                {lang === 'ar' ? s.ar : s.en}
              </h3>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}