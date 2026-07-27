import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { motion } from 'framer-motion';
import { TrendingUp, Target, Award, Clock, BarChart3, AlertTriangle } from 'lucide-react';
import { Progress } from '@/components/ui/progress';
import PageHeader from '@/components/layout/PageHeader';
import SubjectMasteryChart from '@/components/progress/SubjectMasteryChart';
import WeakAreasCard from '@/components/progress/WeakAreasCard';
import LessonMasteryLevels from '@/components/progress/LessonMasteryLevels';
import RecommendedFocusCard from '@/components/progress/RecommendedFocusCard';
import SkillsMasteryOverview from '@/components/progress/SkillsMasteryOverview';
import SkillsMasteryTreemap from '@/components/progress/SkillsMasteryTreemap';
import MonthlyWhatsAppReport from '@/components/progress/MonthlyWhatsAppReport';
import WhatsAppNumbersSetting from '@/components/progress/WhatsAppNumbersSetting';
import { getMasteryLevel } from '@/lib/masteryLevel';
import PullToRefresh from '@/components/PullToRefresh';

async function buildLessonLevels(userId) {
  const records = await base44.entities.UserProgress.filter({ user_id: userId }, '-updated_date', 200);
  const byLesson = {};
  records.forEach(r => {
    if (!r.lesson_id) return;
    if (!byLesson[r.lesson_id]) byLesson[r.lesson_id] = { total: 0, count: 0 };
    byLesson[r.lesson_id].total += r.mastery_percentage || 0;
    byLesson[r.lesson_id].count += 1;
  });

  const lessonIds = Object.keys(byLesson);
  const results = await Promise.all(lessonIds.map(async (lessonId) => {
    try {
      const lesson = await base44.entities.Lesson.get(lessonId);
      const subject = lesson.subject_id ? await base44.entities.Subject.get(lesson.subject_id) : null;
      const mastery = Math.round(byLesson[lessonId].total / byLesson[lessonId].count);
      return {
        lessonId,
        title: lesson.title_ar,
        titleEn: lesson.title_en,
        subjectName: subject?.name_ar,
        subjectNameEn: subject?.name_en,
        curriculum: subject?.curriculum,
        grade: subject?.grade,
        subjectId: lesson.subject_id,
        mastery,
        level: getMasteryLevel(mastery).key,
      };
    } catch {
      return null;
    }
  }));

  return results.filter(Boolean).sort((a, b) => a.mastery - b.mastery);
}

async function buildSkillLevels(userId, lang) {
  const records = await base44.entities.UserProgress.filter({ user_id: userId }, '-updated_date', 200);
  const bySkill = {};
  records.forEach((r) => {
    if (!r.skill_id) return;
    if (!bySkill[r.skill_id]) bySkill[r.skill_id] = { total: 0, count: 0 };
    bySkill[r.skill_id].total += r.mastery_percentage || 0;
    bySkill[r.skill_id].count += 1;
  });

  const skillIds = Object.keys(bySkill);
  const results = await Promise.all(skillIds.map(async (id) => {
    try {
      const skill = await base44.entities.Skill.get(id);
      const mastery = Math.round(bySkill[id].total / bySkill[id].count);
      const name = lang === 'ar' ? (skill.name_ar || skill.name_en) : (skill.name_en || skill.name_ar);
      return { skillId: id, name, mastery };
    } catch {
      return null;
    }
  }));
  return results.filter(Boolean);
}

async function buildSubjectStats(results, lang, localizedField) {
  const skillResults = results.filter(r => r.quiz_type !== 'aptitude_test' && r.lesson_id);
  const lessonIds = [...new Set(skillResults.map(r => r.lesson_id))];
  const lessonToSubject = {};
  await Promise.all(lessonIds.map(async (id) => {
    try {
      const lesson = await base44.entities.Lesson.get(id);
      lessonToSubject[id] = lesson.subject_id;
    } catch {}
  }));
  const subjectIds = [...new Set(Object.values(lessonToSubject).filter(Boolean))];
  const subjectNames = {};
  await Promise.all(subjectIds.map(async (id) => {
    try {
      const subject = await base44.entities.Subject.get(id);
      subjectNames[id] = localizedField(subject, 'name') || subject.name_ar;
    } catch {}
  }));

  const stats = {};
  results.forEach(r => {
    const key = r.quiz_type === 'aptitude_test'
      ? (lang === 'ar' ? 'اختبارات القدرات' : 'Aptitude Tests')
      : (subjectNames[lessonToSubject[r.lesson_id]] || (lang === 'ar' ? 'عام' : 'General'));
    if (!stats[key]) stats[key] = { total: 0, count: 0 };
    stats[key].total += r.score_percentage || 0;
    stats[key].count += 1;
  });

  return Object.entries(stats).map(([name, s]) => ({
    name,
    mastery: Math.round(s.total / s.count),
    count: s.count
  }));
}

export default function MyProgress() {
  const { t, lang, isRTL, localizedField } = useLang();
  const [quizResults, setQuizResults] = useState([]);
  const [subjectStats, setSubjectStats] = useState([]);
  const [lessonLevels, setLessonLevels] = useState([]);
  const [skillLevels, setSkillLevels] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const u = await base44.auth.me();
        setUser(u);
        const results = await base44.entities.QuizResult.filter(
          { user_id: u.id },
          '-created_date',
          50
        );
        setQuizResults(results);
        setSubjectStats(await buildSubjectStats(results, lang, localizedField));
        setLessonLevels(await buildLessonLevels(u.id));
        setSkillLevels(await buildSkillLevels(u.id, lang));
      } catch {}
      setLoading(false);
    };
    load();
  }, [lang]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
      </div>
    );
  }

  const totalQuizzes = quizResults.length;
  const avgScore = totalQuizzes > 0 ? Math.round(quizResults.reduce((a, r) => a + (r.score_percentage || 0), 0) / totalQuizzes) : 0;
  const totalCorrect = quizResults.reduce((a, r) => a + (r.correct_count || 0), 0);
  const totalWrong = quizResults.reduce((a, r) => a + (r.wrong_count || 0), 0);
  const weakAreas = subjectStats.filter(s => s.mastery < 60);

  return (
    <>
      <PullToRefresh />
      <div className="space-y-8">
      <PageHeader
        title={t('myProgress')}
        subtitle={user?.full_name ? `${lang === 'ar' ? 'مرحباً' : 'Hello'} ${user.full_name}` : ''}
        backTo="/"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: t('myProgress') }]}
      />

      {/* Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { icon: BarChart3, value: totalQuizzes, label: lang === 'ar' ? 'اختبار مكتمل' : 'Quizzes Done', color: 'text-blue-500', bg: 'bg-blue-50' },
          { icon: TrendingUp, value: `${avgScore}%`, label: lang === 'ar' ? 'المعدل العام' : 'Average Score', color: 'text-emerald-500', bg: 'bg-emerald-50' },
          { icon: Award, value: totalCorrect, label: lang === 'ar' ? 'إجابة صحيحة' : 'Correct Answers', color: 'text-amber-500', bg: 'bg-amber-50' },
          { icon: AlertTriangle, value: totalWrong, label: lang === 'ar' ? 'إجابة خاطئة' : 'Wrong Answers', color: 'text-red-500', bg: 'bg-red-50' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="rounded-2xl bg-white border border-slate-100 p-5"
          >
            <div className={`w-10 h-10 rounded-xl ${stat.bg} flex items-center justify-center mb-3`}>
              <stat.icon className={`w-5 h-5 ${stat.color}`} />
            </div>
            <div className="text-2xl font-display font-bold text-slate-900">{stat.value}</div>
            <div className="text-xs text-slate-500 mt-1">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Average Score Progress */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="rounded-2xl bg-white border border-slate-100 p-6"
      >
        <h3 className="font-heading font-bold text-slate-900 mb-4">
          {lang === 'ar' ? 'مستوى الإتقان العام' : 'Overall Mastery Level'}
        </h3>
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-slate-500">{lang === 'ar' ? 'مستوى الإتقان' : 'Mastery Level'}</span>
            <span className="font-bold text-slate-700">{avgScore}%</span>
          </div>
          <Progress value={avgScore} className="h-3" />
        </div>
      </motion.div>

      {/* Subject Mastery Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="rounded-2xl bg-white border border-slate-100 p-6"
      >
        <h3 className="font-heading font-bold text-slate-900 mb-4">
          {lang === 'ar' ? 'معدل الإتقان حسب المادة' : 'Mastery Rate by Subject'}
        </h3>
        <SubjectMasteryChart data={subjectStats} />
      </motion.div>

      {/* Skills Mastery Overview — mastered vs focus */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.38 }}
        className="rounded-2xl bg-white border border-slate-100 p-6"
      >
        <h3 className="font-heading font-bold text-slate-900 mb-4">
          {lang === 'ar' ? 'إتقان المهارات: المتقنة ونقاط التركيز' : 'Skills Mastery: Mastered & Focus Areas'}
        </h3>
        <SkillsMasteryOverview skills={skillLevels} />
        <SkillsMasteryTreemap skills={skillLevels} />
      </motion.div>

      {/* Weakness Detection */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <WeakAreasCard areas={weakAreas} />
      </motion.div>

      {/* Per-Lesson Mastery Levels */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.45 }}
      >
        <LessonMasteryLevels levels={lessonLevels} />
      </motion.div>

      {/* Recommended Focus Areas */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <RecommendedFocusCard levels={lessonLevels} />
      </motion.div>

      {/* Parent WhatsApp Number for Weekly Reports */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.52 }}
      >
        <WhatsAppNumbersSetting />
      </motion.div>

      {/* Monthly WhatsApp Report */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.55 }}
      >
        <MonthlyWhatsAppReport />
      </motion.div>

      {/* Recent Results */}
      <div className="space-y-4">
        <h3 className="font-heading font-bold text-slate-900">
          {lang === 'ar' ? 'آخر النتائج' : 'Recent Results'}
        </h3>
        {quizResults.length === 0 ? (
          <div className="text-center py-12 rounded-2xl bg-white border border-slate-100">
            <div className="text-4xl mb-3">📊</div>
            <p className="text-slate-500">{lang === 'ar' ? 'لا توجد نتائج بعد. ابدأ بالتدريب!' : 'No results yet. Start practicing!'}</p>
          </div>
        ) : (
          quizResults.slice(0, 10).map((result, i) => (
            <motion.div
              key={result.id || i}
              initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg ${
                (result.score_percentage || 0) >= 80 ? 'bg-emerald-50 text-emerald-600' :
                (result.score_percentage || 0) >= 60 ? 'bg-amber-50 text-amber-600' :
                'bg-red-50 text-red-600'
              }`}>
                {result.score_percentage || 0}%
              </div>
              <div className="flex-1">
                <div className="font-medium text-sm text-slate-800">
                  {result.quiz_type === 'aptitude_test'
                    ? (lang === 'ar' ? 'اختبار القدرات' : 'Aptitude Test')
                    : (lang === 'ar' ? 'اختبار المهارة' : 'Skill Quiz')}
                </div>
                <div className="text-xs text-slate-400 mt-0.5">
                  {result.correct_count || 0}/{result.total_questions || 0} {t('correct')}
                  {result.time_taken_seconds && ` · ${result.time_taken_seconds} ${t('seconds')}`}
                </div>
              </div>
              <Progress value={result.score_percentage || 0} className="w-20 h-2" />
            </motion.div>
          ))
        )}
      </div>
      </div>
    </>
  );
}