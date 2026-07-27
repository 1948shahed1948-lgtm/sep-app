import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { TrendingUp, ArrowLeft, ArrowRight } from 'lucide-react';
import SubjectMasteryChart from '@/components/progress/SubjectMasteryChart';
import WeakAreasCard from '@/components/progress/WeakAreasCard';
import SubjectDetailDialog from '@/components/progress/SubjectDetailDialog';

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
  const resultsBySubject = {};
  results.forEach(r => {
    const key = r.quiz_type === 'aptitude_test'
      ? (lang === 'ar' ? 'اختبارات القدرات' : 'Aptitude Tests')
      : (subjectNames[lessonToSubject[r.lesson_id]] || (lang === 'ar' ? 'عام' : 'General'));
    if (!stats[key]) stats[key] = { total: 0, count: 0 };
    stats[key].total += r.score_percentage || 0;
    stats[key].count += 1;
    if (!resultsBySubject[key]) resultsBySubject[key] = [];
    resultsBySubject[key].push(r);
  });

  const stats_list = Object.entries(stats).map(([name, s]) => ({
    name,
    mastery: Math.round(s.total / s.count),
    count: s.count
  }));

  return { stats: stats_list, resultsBySubject };
}

export default function HomeProgressSection() {
  const { t, lang, localizedField } = useLang();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;
  const [subjectStats, setSubjectStats] = useState([]);
  const [resultsBySubject, setResultsBySubject] = useState({});
  const [loading, setLoading] = useState(true);
  const [selectedSubject, setSelectedSubject] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        const u = await base44.auth.me();
        const results = await base44.entities.QuizResult.filter({ user_id: u.id }, '-created_date', 50);
        const { stats, resultsBySubject: bySubject } = await buildSubjectStats(results, lang, localizedField);
        setSubjectStats(stats);
        setResultsBySubject(bySubject);
      } catch {}
      setLoading(false);
    };
    load();
  }, [lang]);

  const weakAreas = subjectStats.filter(s => s.mastery < 60);

  return (
    <section className="space-y-6">
      <div className="text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-heading font-bold text-slate-900">
          {t('myProgress')}
        </h2>
        <p className="text-slate-500 text-sm max-w-lg mx-auto">
          {lang === 'ar' ? 'تابع مستوى إتقانك للمهارات ونقاط الضعف التي تحتاج إلى تركيز' : 'Track your skill mastery and the weak areas that need focus'}
        </p>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="w-8 h-8 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin" />
        </div>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl bg-white border border-slate-100 p-6"
          >
            <h3 className="font-heading font-bold text-slate-900 mb-1">
              {lang === 'ar' ? 'معدل الإتقان حسب المادة' : 'Mastery Rate by Subject'}
            </h3>
            <p className="text-xs text-slate-400 mb-3">
              {lang === 'ar' ? 'انقر على أي مادة لعرض تفاصيل المهارات' : 'Click any subject to view skill details'}
            </p>
            <SubjectMasteryChart data={subjectStats} onBarClick={(name) => setSelectedSubject(name)} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <WeakAreasCard areas={weakAreas} />
          </motion.div>
        </div>
      )}

      <SubjectDetailDialog
        subjectName={selectedSubject}
        results={resultsBySubject[selectedSubject] || []}
        open={!!selectedSubject}
        onClose={() => setSelectedSubject(null)}
        lang={lang}
      />

      <div className="text-center">
        <Link
          to="/progress"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#263D84] to-[#3E57A4] text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all hover:-translate-y-0.5"
        >
          <TrendingUp className="w-4 h-4" />
          {lang === 'ar' ? 'عرض التقدم الكامل' : 'View Full Progress'}
          <Arrow className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
}