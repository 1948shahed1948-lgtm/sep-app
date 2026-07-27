import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, FlaskConical, Atom, Microscope, Zap, BookOpen, Sparkles, ArrowLeft } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { getGradeName } from '@/lib/gradeData';
import PageHeader from '@/components/layout/PageHeader';

const EXTERNAL_URL = 'https://f15ub5xugaj1-d.space-z.ai';

const UNITS = [
  { icon: '🌿', title_ar: 'الوحدة ١: الكائنات الحية', desc_ar: 'تصنيف الكائنات الحية وخصائصها' },
  { icon: '💧', title_ar: 'الوحدة ٢: المادة والتغيرات', desc_ar: 'حالات المادة والتغيرات الفيزيائية والكيميائية' },
  { icon: '⚡', title_ar: 'الوحدة ٣: الطاقة والقوى', desc_ar: 'أنواع الطاقة وتأثير القوى' },
  { icon: '🌍', title_ar: 'الوحدة ٤: الأرض والفضاء', desc_ar: 'المجموعة الشمسية والظواهر الطبيعية' },
];

const FEATURES = [
  { Icon: FlaskConical, label_ar: 'تجارب تفاعلية', color: '#109673' },
  { Icon: Atom, label_ar: 'شرح مبسط', color: '#3a57e8' },
  { Icon: Microscope, label_ar: 'أنشطة علمية', color: '#8b5cf6' },
  { Icon: Zap, label_ar: 'تقييم فوري', color: '#e67e22' },
];

export default function ScienceSemester2Cover() {
  const { t, lang, isRTL } = useLang();
  const gradeName = getGradeName('grade_6', lang);
  const Arrow = isRTL ? ArrowLeft : ArrowLeft;

  return (
    <div className="space-y-8">
      <PageHeader
        title={lang === 'ar' ? `العلوم · ${gradeName} · الفصل الثاني` : `Science · ${gradeName} · Semester 2`}
        subtitle={lang === 'ar' ? 'بنك الأسئلة التفاعلي — كتاب العلوم الرقمي' : 'Interactive question bank — Digital Science Book'}
        backTo="/question-bank/grade_6/second"
        breadcrumbs={[
          { label: t('home'), path: '/' },
          { label: lang === 'ar' ? 'بنوك الأسئلة' : 'Question Banks', path: '/question-bank/grades' },
          { label: gradeName, path: '/question-bank/grade_6' },
          { label: lang === 'ar' ? 'الفصل الثاني' : 'Semester 2', path: '/question-bank/grade_6/second' },
          { label: lang === 'ar' ? 'العلوم' : 'Science' },
        ]}
      />

      {/* الغلاف البصري الرئيسي */}
      <motion.div
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-2xl"
        style={{ background: 'linear-gradient(135deg, #109673 0%, #0d7a5e 50%, #095e48 100%)' }}
      >
        <div className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '22px 22px' }} />

        {/* أيقونات علمية عائمة */}
        <motion.div className="absolute top-6 left-6 text-white/15" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity }}>
          <Atom className="w-12 h-12" strokeWidth={1.2} />
        </motion.div>
        <motion.div className="absolute bottom-6 right-8 text-white/15" animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, delay: 1 }}>
          <FlaskConical className="w-10 h-10" strokeWidth={1.2} />
        </motion.div>
        <motion.div className="absolute top-10 right-12 text-white/10" animate={{ y: [0, -8, 0] }} transition={{ duration: 4.5, repeat: Infinity, delay: 0.5 }}>
          <Microscope className="w-9 h-9" strokeWidth={1.2} />
        </motion.div>

        <div className="relative px-6 py-10 sm:px-10 sm:py-12 text-center">
          <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-white/15 border border-white/20 mb-4">
            <span className="text-4xl">🔬</span>
          </motion.div>
          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
            {lang === 'ar' ? 'كتاب العلوم التفاعلي' : 'Interactive Science Book'}
          </h2>
          <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
            {lang === 'ar'
              ? 'بنك أسئلة إلكتروني شامل لعلوم الصف السادس — الفصل الدراسي الثاني، مع شرح معلم وسبورة وقاعدة ذهبية'
              : 'Comprehensive digital question bank for Grade 6 Science — Semester 2, with teacher explanations and golden rules'}
          </p>

          {/* زر فتح البنك الخارجي */}
          <motion.a
            href={EXTERNAL_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-sm font-bold shadow-lg transition-all"
            style={{ color: '#095e48' }}
          >
            <BookOpen className="w-5 h-5" />
            {lang === 'ar' ? 'افتح بنك العلوم التفاعلي' : 'Open Interactive Science Bank'}
            <ExternalLink className="w-4 h-4" />
          </motion.a>
        </div>
      </motion.div>

      {/* بطاقات الميزات */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
        {FEATURES.map((f, i) => {
          const FIcon = f.Icon;
          return (
            <motion.div key={i}
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 + i * 0.08 }}
              className="bg-white rounded-2xl border border-slate-100 p-4 text-center shadow-sm hover:shadow-md transition-shadow">
              <div className="w-11 h-11 rounded-xl flex items-center justify-center mx-auto mb-2"
                style={{ backgroundColor: `${f.color}15` }}>
                <FIcon className="w-5 h-5" style={{ color: f.color }} strokeWidth={1.8} />
              </div>
              <span className="text-xs font-bold text-slate-700">{f.label_ar}</span>
            </motion.div>
          );
        })}
      </div>

      {/* وحدات الفصل */}
      <div className="bg-white rounded-2xl border border-slate-100 p-5 sm:p-6 shadow-sm">
        <div className="flex items-center gap-2 mb-4">
          <Sparkles className="w-4 h-4 text-emerald-600" />
          <h3 className="font-heading font-bold text-slate-800 text-sm">
            {lang === 'ar' ? 'وحدات الفصل الثاني' : 'Semester 2 Units'}
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 gap-3">
          {UNITS.map((unit, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: isRTL ? 15 : -15 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 + i * 0.08 }}
              className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-2xl flex-shrink-0">{unit.icon}</span>
              <div>
                <p className="font-bold text-slate-800 text-xs">{unit.title_ar}</p>
                <p className="text-[11px] text-slate-500 mt-0.5">{unit.desc_ar}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}