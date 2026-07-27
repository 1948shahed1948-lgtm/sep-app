import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { BookOpen, ArrowLeft, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import PageHeader from '@/components/layout/PageHeader';
import RequiredSkillsPanel from '@/components/lesson/RequiredSkillsPanel';

export default function LessonDetail() {
  const { curriculum, grade, subjectId, lessonId } = useParams();
  const { t, lang, isRTL, localizedField } = useLang();
  const [lesson, setLesson] = useState(null);
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  useEffect(() => {
    const load = async () => {
      try {
        if (!lessonId.startsWith('placeholder_')) {
          const lessonData = await base44.entities.Lesson.get(lessonId);
          setLesson(lessonData);
          const skillsData = await base44.entities.Skill.filter({ lesson_id: lessonId });
          setSkills(skillsData);
        } else {
          setLesson(getPlaceholderLesson(lessonId, lang));
          setSkills(getPlaceholderSkills(lang));
        }
      } catch {
        setLesson(getPlaceholderLesson(lessonId, lang));
        setSkills(getPlaceholderSkills(lang));
      }
      setLoading(false);
    };
    load();
  }, [lessonId, lang]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  if (!lesson) return null;

  const title = localizedField(lesson, 'title') || lesson.title_ar || '';
  const content = localizedField(lesson, 'content') || lesson.content_ar || '';
  const desc = localizedField(lesson, 'description') || lesson.description_ar || '';

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      <PageHeader
        title={title}
        subtitle={t('lessonContent')}
        backTo={`/curriculum/${curriculum}/${grade}/subject/${subjectId}`}
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: t('lessons'), path: `/curriculum/${curriculum}/${grade}/subject/${subjectId}` }, { label: title }]}
      />

      {/* Lesson Content + Required Skills side by side */}
      <div className="grid lg:grid-cols-3 gap-6 items-start">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-2 rounded-2xl bg-white border border-slate-100 overflow-hidden"
        >
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6" />
              <h2 className="text-lg font-heading font-bold">{t('lessonContent')}</h2>
            </div>
            {desc && <p className="text-blue-100 text-sm mt-2">{desc}</p>}
          </div>
          <div className="p-6">
            {content && (
              <div className="prose prose-slate max-w-none text-sm leading-relaxed">{content}</div>
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1"
        >
          <RequiredSkillsPanel
            skills={skills}
            localizedField={localizedField}
            t={t}
            practiceBasePath={`/curriculum/${curriculum}/${grade}/subject/${subjectId}/lesson/${lessonId}/skill`}
          />
        </motion.div>
      </div>

      {/* Start Quiz */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-600 p-6 text-white"
      >
        <div className="flex items-center justify-between flex-wrap gap-4">
          <div className="space-y-1">
            <h3 className="text-lg font-heading font-bold">{t('startQuiz')}</h3>
            <p className="text-emerald-100 text-sm">
              {lang === 'ar' ? 'اختبر مدى إتقانك لمهارات هذا الدرس' : 'Test your mastery of this lesson\'s skills'}
            </p>
          </div>
          <Link to={`/curriculum/${curriculum}/${grade}/subject/${subjectId}/lesson/${lessonId}/quiz`}>
            <Button className="bg-white text-emerald-700 hover:bg-emerald-50 gap-2 font-bold shadow-lg">
              {t('startQuiz')}
              <Arrow className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

function getPlaceholderLesson(id, lang) {
  const index = parseInt(id.split('_')[1]) || 0;
  const lessons = [
    { title_ar: "مقدمة في الموضوع", title_en: "Introduction to the Topic", description_ar: "نظرة عامة على المفاهيم الأساسية", description_en: "Overview of basic concepts", content_ar: "في هذا الدرس سنتعرف على المفاهيم الأساسية والقواعد الرئيسية للموضوع. سنبدأ بالتعريفات ثم ننتقل إلى الأمثلة التطبيقية.", content_en: "In this lesson we will learn about the basic concepts and main rules. We'll start with definitions then move to practical examples." },
    { title_ar: "المفاهيم الأساسية", title_en: "Basic Concepts", description_ar: "فهم الأساسيات", description_en: "Understanding fundamentals", content_ar: "هنا نتعمق في فهم الأساسيات والقواعد الجوهرية.", content_en: "Here we dive deeper into understanding the fundamentals and core rules." },
    { title_ar: "التطبيقات العملية", title_en: "Practical Applications", description_ar: "تطبيقات حقيقية", description_en: "Real applications", content_ar: "تطبيق ما تعلمناه في مسائل ومواقف واقعية.", content_en: "Applying what we've learned in real problems and situations." },
    { title_ar: "المستوى المتقدم", title_en: "Advanced Level", description_ar: "تعمق أكثر", description_en: "Deeper dive", content_ar: "في هذا المستوى نتناول المفاهيم المتقدمة والحالات الخاصة.", content_en: "At this level we cover advanced concepts and special cases." },
    { title_ar: "المراجعة والتقييم", title_en: "Review & Assessment", description_ar: "مراجعة شاملة", description_en: "Comprehensive review", content_ar: "مراجعة شاملة لجميع ما تم تعلمه مع اختبار تقييمي.", content_en: "Comprehensive review of everything learned with an assessment quiz." },
  ];
  return lessons[index] || lessons[0];
}

function getPlaceholderSkills(lang) {
  return [
    { name_ar: "الفهم والاستيعاب", name_en: "Comprehension", description_ar: "القدرة على فهم المفاهيم الأساسية", description_en: "Ability to understand basic concepts" },
    { name_ar: "التطبيق والحل", name_en: "Application & Solving", description_ar: "تطبيق القواعد في حل المسائل", description_en: "Applying rules to solve problems" },
    { name_ar: "التحليل والتفكير", name_en: "Analysis & Thinking", description_ar: "تحليل المسائل واستنتاج الحلول", description_en: "Analyzing problems and deducing solutions" },
    { name_ar: "الإتقان والإبداع", name_en: "Mastery & Creativity", description_ar: "إتقان المهارة وابتكار حلول جديدة", description_en: "Mastering the skill and creating new solutions" },
  ];
}