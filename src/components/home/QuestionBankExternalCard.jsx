import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookMarked, Layers, FileQuestion, Sparkles, Clock } from 'lucide-react';
import { useLang } from '@/lib/i18n';

const URL = 'https://h1mm65hgjvu0-d.space-z.ai';

const features = [
  { icon: BookMarked, ar: 'بنك أسئلة شامل لكل المراحل والمناهج السعودية', en: 'Comprehensive question bank for all Saudi curriculum stages' },
  { icon: Layers, ar: 'تصنيف دقيق حسب الصف والمادة والوحدة والدرس', en: 'Precise classification by grade, subject, unit, and lesson' },
  { icon: FileQuestion, ar: 'أسئلة اختيار من متعدد بشرح وخطوات حل مفصّلة', en: 'Multiple-choice questions with detailed explanations and solution steps' },
  { icon: Sparkles, ar: 'تغذية راجعة فورية وقاعدة ذهبية لكل سؤال', en: 'Instant feedback and a golden rule for every question' },
  { icon: Clock, ar: 'متاح في أي وقت للتدريب الذاتي والمراجعة', en: 'Available anytime for self-practice and review' }
];

export default function QuestionBankExternalCard() {
  const { lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl border border-amber-200/60 bg-gradient-to-br from-amber-50 via-white to-orange-50 p-6 sm:p-10 shadow-sm"
    >
      <div className="absolute -top-10 -end-10 w-40 h-40 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="absolute -bottom-10 -start-10 w-40 h-40 rounded-full bg-orange-200/30 blur-3xl" />

      <div className="relative grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
        {/* Right: Explanation */}
        <div className="lg:col-span-3 space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20">
            <BookMarked className="w-4 h-4 text-amber-600" />
            <span className="text-xs font-bold text-amber-700">
              {lang === 'ar' ? 'بنك الأسئلة الذكي' : 'Smart Question Bank'}
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900 leading-tight">
            {lang === 'ar' ? 'منصة بنك الأسئلة التفاعلية' : 'Interactive Question Bank Platform'}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            {lang === 'ar'
              ? 'منصة خارجية متخصصة تضم بنكاً موسّعاً من الأسئلة المرتبة بدقة وفق المنهج السعودي لجميع الصفوف. يقدّم كل سؤال شرحاً تفصيلياً وخطوات حل على السبورة، إضافة إلى القاعدة الذهبية وسؤال تغذية راجعة يعزّز الفهم ويثبّت المعلومة. مثالي للتدريب الذاتي واكتشاف الفجوات المهارية قبل الاختبارات.'
              : 'A dedicated external platform hosting an extensive question bank precisely organized along the Saudi curriculum for every grade. Each question offers a detailed explanation, blackboard solution steps, a golden rule, and a feedback question that deepens understanding. Ideal for self-practice and identifying skill gaps before exams.'}
          </p>

          <ul className="space-y-2.5">
            {features.map((f, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <span className="mt-0.5 w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <f.icon className="w-3.5 h-3.5 text-amber-600" />
                </span>
                <span className="text-sm text-slate-700 leading-relaxed">
                  {lang === 'ar' ? f.ar : f.en}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Left: Action card */}
        <div className="lg:col-span-2">
          <a
            href={URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group block relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#12204B] via-[#263D84] to-[#3E57A4] p-7 text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
          >
            <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDQwIEwgNDAgMCIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjxyZWN0IGZpbGw9InVybCgjZykiIHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiLz48L3N2Zz4=')]" />
            <div className="relative space-y-5">
              <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform">
                <BookMarked className="w-7 h-7 text-amber-300" />
              </div>
              <div className="space-y-1.5">
                <h3 className="text-xl font-heading font-bold">
                  {lang === 'ar' ? 'ادخل بنك الأسئلة' : 'Open Question Bank'}
                </h3>
                <p className="text-xs text-white/60 break-all">{URL}</p>
              </div>
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-500 text-white font-bold text-sm group-hover:bg-amber-400 transition-colors">
                {lang === 'ar' ? 'ابدأ التدريب' : 'Start Practice'}
                <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </a>
        </div>
      </div>
    </motion.section>
  );
}