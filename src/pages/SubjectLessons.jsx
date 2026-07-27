import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n.jsx';
import { getGradeName } from '@/lib/gradeData';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { Play, CheckCircle, Lock, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';

export default function SubjectLessons() {
  const { curriculum, grade, subjectId } = useParams();
  const { t, lang, isRTL, localizedField } = useLang();
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadLessons = async () => {
      try {
        const data = await base44.entities.Lesson.filter({ subject_id: subjectId }, 'order', 50);
        if (data.length > 0) {
          setLessons(data);
        } else {
          // Show placeholder lessons
          setLessons(generatePlaceholderLessons(lang));
        }
      } catch {
        setLessons(generatePlaceholderLessons(lang));
      }
      setLoading(false);
    };
    loadLessons();
  }, [subjectId, lang]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title={t('lessons')}
        subtitle={getGradeName(grade, lang)}
        backTo={`/curriculum/${curriculum}/${grade}`}
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: getGradeName(grade, lang), path: `/curriculum/${curriculum}/${grade}` }, { label: t('lessons') }]}
      />

      <div className="space-y-4">
        {lessons.map((lesson, i) => {
          const title = localizedField(lesson, 'title') || lesson.title_ar || lesson.title;
          const desc = localizedField(lesson, 'description') || lesson.description_ar || '';
          const lessonId = lesson.id || `placeholder_${i}`;

          return (
            <motion.div
              key={lessonId}
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                to={`/curriculum/${curriculum}/${grade}/subject/${subjectId}/lesson/${lessonId}`}
                className="group flex items-center gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:shadow-lg hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-0.5"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-md">
                  {i + 1}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-heading font-bold text-slate-900 group-hover:text-blue-600 transition-colors truncate">
                    {title}
                  </h3>
                  {desc && (
                    <p className="text-sm text-slate-500 mt-0.5 truncate">{desc}</p>
                  )}
                  <div className="flex items-center gap-3 mt-2">
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Clock className="w-3 h-3" />
                      {lesson.duration_minutes || 30} {lang === 'ar' ? 'دقيقة' : 'min'}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-slate-400">
                      <Star className="w-3 h-3" />
                      {t('skills')}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <Play className="w-4 h-4 text-slate-400 group-hover:text-blue-500" />
                  </div>
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>

      {lessons.length === 0 && (
        <div className="text-center py-16 space-y-3">
          <div className="text-4xl">📚</div>
          <p className="text-slate-500 font-medium">{t('noLessons')}</p>
        </div>
      )}
    </div>
  );
}

function generatePlaceholderLessons(lang) {
  const lessonsAr = [
    { title_ar: "مقدمة في الموضوع", title_en: "Introduction to the Topic", description_ar: "نظرة عامة على المفاهيم الأساسية", description_en: "Overview of basic concepts", duration_minutes: 30 },
    { title_ar: "المفاهيم الأساسية", title_en: "Basic Concepts", description_ar: "فهم الأساسيات والقواعد", description_en: "Understanding fundamentals and rules", duration_minutes: 35 },
    { title_ar: "التطبيقات العملية", title_en: "Practical Applications", description_ar: "تطبيق المفاهيم في مسائل حقيقية", description_en: "Applying concepts in real problems", duration_minutes: 40 },
    { title_ar: "المستوى المتقدم", title_en: "Advanced Level", description_ar: "تعمق أكثر في الموضوع", description_en: "Deeper dive into the topic", duration_minutes: 45 },
    { title_ar: "المراجعة والتقييم", title_en: "Review & Assessment", description_ar: "مراجعة شاملة واختبار تقييمي", description_en: "Comprehensive review and assessment quiz", duration_minutes: 25 },
  ];
  return lessonsAr;
}