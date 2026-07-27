import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const SUBJECTS = [
  {
    key: 'arabic',
    titleAr: 'اللغة العربية',
    titleEn: 'Arabic Language',
    shortAr: 'قراءة، كتابة، نحو، وصرف',
    shortEn: 'Reading, writing, grammar & morphology',
    color: 'from-emerald-500 to-teal-600',
    accent: 'text-emerald-600',
    chip: 'bg-emerald-100 text-emerald-700',
    lightBg: 'bg-emerald-50',
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/0d18b442b_generated_image.png',
    detailsAr: [
      'تدريبات على فهم النصوص القرائية والاستيعاب المباشر.',
      'تمارين القواعد النحوية والصرفية بطريقة مبسطة وتدريجية.',
      'تنمية مهارات الكتابة الإبداعية والإنشائية.',
      'إثراء الرصيد اللغوي بالمفردات والتراكيب الجديدة.'
    ],
    detailsEn: [
      'Exercises on reading comprehension and direct understanding.',
      'Grammar and morphology practice in a simplified, gradual way.',
      'Developing creative and expressive writing skills.',
      'Enriching vocabulary with new words and structures.'
    ],
    path: '/curriculum/national'
  },
  {
    key: 'math',
    titleAr: 'الرياضيات',
    titleEn: 'Mathematics',
    shortAr: 'حساب، جبر، هندسة، وإحصاء',
    shortEn: 'Arithmetic, algebra, geometry & statistics',
    color: 'from-blue-500 to-indigo-600',
    accent: 'text-blue-600',
    chip: 'bg-blue-100 text-blue-700',
    lightBg: 'bg-blue-50',
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/01b44f1e2_generated_image.png',
    detailsAr: [
      'تمارين متدرجة من الأساسيات إلى المسائل المتقدمة.',
      'شرح تفصيلي خطوة بخطوة لكل مسألة مع القاعدة الذهبية.',
      'تدريب على الهندسة والقياس والتفكير المنطقي.',
      'أسئلة تطبيقية تربط الرياضيات بالحياة اليومية.'
    ],
    detailsEn: [
      'Graded exercises from basics to advanced problems.',
      'Step-by-step detailed explanation with the golden rule.',
      'Practice on geometry, measurement, and logical thinking.',
      'Applied questions linking math to daily life.'
    ],
    path: '/curriculum/national'
  },
  {
    key: 'science',
    titleAr: 'العلوم',
    titleEn: 'Science',
    shortAr: 'فيزياء، كيمياء، أحياء، وعلوم أرض',
    shortEn: 'Physics, chemistry, biology & earth science',
    color: 'from-rose-500 to-orange-500',
    accent: 'text-rose-600',
    chip: 'bg-rose-100 text-rose-700',
    lightBg: 'bg-rose-50',
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/b23f0abe2_generated_image.png',
    detailsAr: [
      'تجارب وأنشطة تفاعلية تشرح الظواهر العلمية.',
      'أسئلة مفاهيمية تختبر الفهم لا الحفظ.',
      'تطبيقات عملية تربط العلوم بالبيئة المحيطة.',
      'متابعة التقدم في كل فرع علمي على حدة.'
    ],
    detailsEn: [
      'Interactive experiments explaining scientific phenomena.',
      'Conceptual questions that test understanding over memorization.',
      'Practical applications linking science to the real world.',
      'Progress tracking for each scientific branch.'
    ],
    path: '/curriculum/national'
  },
  {
    key: 'english',
    titleAr: 'اللغة الإنجليزية',
    titleEn: 'English Language',
    shortAr: 'Grammar, reading, writing & speaking',
    shortEn: 'قواعد، قراءة، كتابة، ومحادثة',
    color: 'from-purple-500 to-violet-600',
    accent: 'text-purple-600',
    chip: 'bg-purple-100 text-purple-700',
    lightBg: 'bg-purple-50',
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/f19486d5f_generated_image.png',
    detailsAr: [
      'تدريبات على القواعد الأساسية والمتقدمة.',
      'تنمية مهارات القراءة والاستيعاب بالنصوص المتنوعة.',
      'تمارين كتابية مع تصحيح فوري وتوجيه.',
      'بناء ثقة في المحادثة والاستماع.'
    ],
    detailsEn: [
      'Practice on core and advanced grammar rules.',
      'Developing reading and comprehension with varied texts.',
      'Writing exercises with instant feedback.',
      'Building confidence in speaking and listening.'
    ],
    path: '/curriculum/international'
  },
  {
    key: 'social',
    titleAr: 'الدراسات الاجتماعية',
    titleEn: 'Social Studies',
    shortAr: 'تاريخ، جغرافيا، ومواطنة',
    shortEn: 'History, geography & citizenship',
    color: 'from-amber-500 to-yellow-600',
    accent: 'text-amber-600',
    chip: 'bg-amber-100 text-amber-700',
    lightBg: 'bg-amber-50',
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/30143009e_generated_image.png',
    detailsAr: [
      'رحلات افتراضية عبر التاريخ والجغرافيا الوطنية.',
      'خرائط تفاعلية وجداول زمنية للوقائع.',
      'أسئلة تحفيزية على التفكير النقدي والمواطنة.',
      'ربط الماضي بالحاضر لفهم أعمق للمجتمع.'
    ],
    detailsEn: [
      'Virtual journeys through national history and geography.',
      'Interactive maps and event timelines.',
      'Questions encouraging critical thinking and citizenship.',
      'Linking past to present for deeper understanding of society.'
    ],
    path: '/curriculum/national'
  },
  {
    key: 'aptitude',
    titleAr: 'اختبارات القدرات',
    titleEn: 'Aptitude Tests',
    shortAr: 'تدريب لفظي وكمي شامل',
    shortEn: 'Comprehensive verbal & quantitative training',
    color: 'from-cyan-500 to-blue-600',
    accent: 'text-cyan-600',
    chip: 'bg-cyan-100 text-cyan-700',
    lightBg: 'bg-cyan-50',
    image: 'https://media.base44.com/images/public/6a459ddfe6fb4264c098136d/d8c9cda53_generated_image.png',
    detailsAr: [
      'تدريب مصنف حسب المهارة في القسم اللفظي والكمي.',
      'شرح تفصيلي لكل إجابة لرفع الفهم والثقة.',
      'نماذج محاكاة للاختبار الرسمي مع توقيت دقيق.',
      'تحليل الأداء لتحديد المهارات التي تحتاج مراجعة.'
    ],
    detailsEn: [
      'Skill-classified training in verbal and quantitative sections.',
      'Detailed explanations for every answer to boost confidence.',
      'Official-test simulation with precise timing.',
      'Performance analysis to identify skills needing review.'
    ],
    path: '/aptitude'
  }
];

function SubjectCard({ subject, index, lang, Arrow }) {
  const [expanded, setExpanded] = useState(false);
  const details = lang === 'ar' ? subject.detailsAr : subject.detailsEn;
  const title = lang === 'ar' ? subject.titleAr : subject.titleEn;
  const short = lang === 'ar' ? subject.shortAr : subject.shortEn;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="group relative overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500 hover:-translate-y-1"
    >
      <div className={`relative h-40 overflow-hidden ${subject.lightBg}`}>
        <img
          src={subject.image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-white to-transparent" />
        <h3 className={`absolute bottom-3 inset-x-4 text-xl font-heading font-bold ${subject.accent}`}>
          {title}
        </h3>
        <span className={`absolute top-3 end-3 text-[10px] font-bold px-2.5 py-1 rounded-full ${subject.chip}`}>
          {lang === 'ar' ? 'جديد' : 'New'}
        </span>
      </div>

      <div className="p-5">
        <p className={`text-sm font-semibold ${subject.accent} mb-2`}>{short}</p>

        <button
          type="button"
          onClick={() => setExpanded((v) => !v)}
          className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-slate-900 transition-colors"
        >
          <Sparkles className="w-3.5 h-3.5" />
          {lang === 'ar' ? (expanded ? 'إخفاء التفاصيل' : 'ماذا ستتعلم؟') : (expanded ? 'Hide details' : 'What will you learn?')}
          <ChevronDown className={`w-3.5 h-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-3 space-y-2 overflow-hidden"
            >
              {details.map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                  <span className={`mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-gradient-to-br ${subject.color}`} />
                  <span>{d}</span>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <Link
          to={subject.path}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
        >
          {lang === 'ar' ? 'ابدأ التعلّم' : 'Start learning'}
          <Arrow className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}

export default function SubjectShowcaseCards() {
  const { lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          {lang === 'ar' ? 'مواد تعليمية جديدة تفاعلية' : 'New Interactive Subjects'}
        </h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          {lang === 'ar'
            ? 'استكشف المواد ببطاقات تفاعلية، واضغط على كل بطاقة لمعرفة ماذا ستتعلم'
            : 'Explore subjects with interactive cards — tap each to see what you will learn'}
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {SUBJECTS.map((s, i) => (
          <SubjectCard key={s.key} subject={s} index={i} lang={lang} Arrow={Arrow} />
        ))}
      </div>
    </section>
  );
}