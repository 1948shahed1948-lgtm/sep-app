import React, { useState, useCallback, useEffect } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { useParams, useNavigate } from 'react-router-dom';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle, Printer, FlaskConical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import QuestionBankQuestionCard from '@/components/questionbank/QuestionBankQuestionCard';
import { printQuestions } from '@/lib/printQuestions';
import { getGradeName } from '@/lib/gradeData';
import { getNextReviewDate } from '@/lib/spacedRepetition';
import { Link } from 'react-router-dom';

const TARGET_COUNT = 15;

// بنوك تفاعلية مخصّصة — تُعرض كبديل عند عدم وجود أسئلة في قاعدة البيانات
const DEDICATED_BANKS = {};

const SUBJECTS_MAP = {
  my_language: { name_ar: 'لغتي', name_en: 'My Language', icon: '🔤', color: '#8b5cf6' },
  arabic: { name_ar: 'اللغة العربية', name_en: 'Arabic Language', icon: '📖', color: '#8b5cf6' },
  math: { name_ar: 'الرياضيات', name_en: 'Mathematics', icon: '🔢', color: '#3a57e8' },
  science: { name_ar: 'العلوم', name_en: 'Science', icon: '🔬', color: '#109673' },
  english: { name_ar: 'اللغة الإنجليزية', name_en: 'English', icon: '🌍', color: '#6366f1' },
  islamic: { name_ar: 'التربية الإسلامية', name_en: 'Islamic Studies', icon: '⭐', color: '#b45309' },
  social: { name_ar: 'الاجتماعيات', name_en: 'Social Studies', icon: '🗺️', color: '#0891b2' },
  computer: { name_ar: 'الحاسب الآلي', name_en: 'Computer Science', icon: '💻', color: '#475569' },
  art_education: { name_ar: 'التربية الفنية', name_en: 'Art Education', icon: '🎨', color: '#ec4899' },
  life_skills: { name_ar: 'المهارات الحياتية', name_en: 'Life Skills', icon: '👨‍👩‍👧‍👦', color: '#f43f5e' },
  physics: { name_ar: 'الفيزياء', name_en: 'Physics', icon: '⚛️', color: '#1e40af' },
  chemistry: { name_ar: 'الكيمياء', name_en: 'Chemistry', icon: '🧪', color: '#0e7490' },
  biology: { name_ar: 'الأحياء', name_en: 'Biology', icon: '🧬', color: '#15803d' },
};

// عرض الأسئلة المخزّنة فقط — لا توليد على طرف الطالب. التوليد يتم إدارياً مسبقاً ويُخزَّن في QuestionBankQuestion.
async function ensureQuestions(subjectMeta, subjectId, grade) {
  return base44.entities.QuestionBankQuestion.filter({ subject_id: subjectId, grade });
}

export default function QuestionBankSubjectPractice() {
  const { grade, semester, subjectId } = useParams();
  const navigate = useNavigate();
  const { t, lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const subjectMeta = SUBJECTS_MAP[subjectId];
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState([]);
  const [phase, setPhase] = useState('quiz');
  const topRef = useScrollTopOnChange(currentIndex);

  useEffect(() => {
    if (!subjectMeta) return;
    let active = true;
    (async () => {
      setLoading(true);
      const qs = await ensureQuestions(subjectMeta, subjectId, grade);
      if (!active) return;
      const shuffled = qs.sort(() => Math.random() - 0.5).slice(0, TARGET_COUNT);
      setQuestions(shuffled);
      setLoading(false);
      // Store viewed questions so Zaki can review them later
      try {
        const user = await base44.auth.me();
        if (user && shuffled.length > 0) {
          await base44.entities.ViewedQuestion.bulkCreate(
            shuffled.map((q) => ({
              user_id: user.id,
              question_ar: q.question_ar,
              question_en: q.question_en,
              options_ar: q.options_ar,
              options_en: q.options_en,
              correct_answer: String(q.correct_answer),
              explanation_ar: q.explanation_ar || '',
              explanation_en: q.explanation_en || '',
              subject_name: subjectMeta.name_ar,
              grade,
              source: 'question_bank',
              question_id: q.id,
              viewed_date: new Date().toISOString(),
            }))
          );
        }
      } catch (e) { /* ignore storage errors */ }
    })();
    return () => { active = false; };
  }, [subjectId, grade]);

  const subject = subjectMeta ? { id: subjectId, ...subjectMeta } : null;
  const subjectName = lang === 'ar' ? subjectMeta?.name_ar : subjectMeta?.name_en;
  const gradeName = getGradeName(grade, lang);

  const handleAnswer = async (answerIndex) => {
    if (isAnswered) return;
    setSelectedAnswer(answerIndex);
    setIsAnswered(true);
    const q = questions[currentIndex];
    const isCorrect = String(answerIndex) === String(q.correct_answer);
    setResults((prev) => [...prev, { index: currentIndex, isCorrect }]);
    if (!isCorrect) {
      try {
        const user = await base44.auth.me();
        if (user) {
          await base44.entities.MistakeEntry.create({
            user_id: user.id,
            question_ar: q.question_ar,
            question_en: q.question_en,
            options_ar: q.options_ar,
            options_en: q.options_en,
            user_answer: String(answerIndex),
            correct_answer: String(q.correct_answer),
            explanation_ar: q.explanation_ar,
            explanation_en: q.explanation_en,
            subject_name: subjectName,
            grade,
            source: 'question_bank',
            confidence: 0,
            is_resolved: false,
            review_count: 0,
            next_review_date: getNextReviewDate(0),
          });
        }
      } catch (e) { /* ignore */ }
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((p) => p + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setPhase('results');
      // تنبيه فوري للمشرف بإتمام تدريب بنك الأسئلة
      const correct = results.filter((r) => r.isCorrect).length;
      base44.functions.invoke('notifyStudentCompletion', {
        kind: 'test_completed',
        label_ar: `أتمم تدريب ${subjectName} — ${correct}/${questions.length}`,
        label_en: `Completed ${subjectName} practice — ${correct}/${questions.length}`,
        details: `${subjectName} · ${gradeName}`,
        route: window.location.pathname,
      }).catch(() => {});
    }
  };

  const handleRetry = () => {
    setQuestions((prev) => prev.sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setResults([]);
    setPhase('quiz');
  };

  if (!subjectMeta) {
    return (
      <div className="text-center py-20 text-slate-500">
        {lang === 'ar' ? 'المادة غير موجودة' : 'Subject not found'}
      </div>
    );
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center py-24 gap-4">
        <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
        <p className="text-sm text-slate-500 font-medium">{lang === 'ar' ? 'جاري إعداد الأسئلة من بنك المنصة...' : 'Preparing questions from platform bank...'}</p>
      </div>
    );
  }

  if (questions.length === 0) {
    const dedicatedKey = `${grade}/${semester}/${subjectId}`;
    const dedicated = DEDICATED_BANKS[dedicatedKey];
    return (
      <div className="space-y-8">
        <PageHeader
          title={`${subjectName} · ${gradeName}`}
          subtitle={lang === 'ar' ? 'بنك الأسئلة الداخلي' : 'Internal question bank'}
          backTo={`/question-bank/${grade}/${semester}`}
          breadcrumbs={[
            { label: t('home'), path: '/' },
            { label: lang === 'ar' ? 'بنوك الأسئلة' : 'Question Banks', path: '/question-bank/grades' },
            { label: gradeName, path: `/question-bank/${grade}` },
            { label: subjectName },
          ]}
        />
        <div className="max-w-xl mx-auto text-center py-16 rounded-2xl bg-white border border-slate-100">
          <div className="text-4xl mb-3">{subjectMeta.icon}</div>
          <h2 className="text-lg font-heading font-bold text-slate-800 mb-1">{subjectName}</h2>
          <p className="text-sm text-slate-500 mb-6">{lang === 'ar' ? 'لا توجد أسئلة في بنك المنصة حالياً' : 'No questions in the platform bank yet'}</p>
          {dedicated && (
            <Link
              to={dedicated.path}
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-bold text-white text-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              style={{ background: 'linear-gradient(135deg, #0f5132 0%, #1a7a4a 100%)' }}
            >
              <FlaskConical className="w-5 h-5" />
              {dedicated.label_ar}
            </Link>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <PageHeader
        title={`${subjectName} · ${gradeName}`}
        subtitle={lang === 'ar' ? 'أسئلة محفوظة في قاعدة بيانات المنصة — تدريب دائم مع شرح فوري' : 'Questions stored in platform database — permanent practice with instant explanations'}
        backTo={`/question-bank/${grade}/${semester}`}
        breadcrumbs={[
          { label: t('home'), path: '/' },
          { label: lang === 'ar' ? 'بنوك الأسئلة' : 'Question Banks', path: '/question-bank/grades' },
          { label: gradeName, path: `/question-bank/${grade}` },
          { label: subjectName },
        ]}
      />

      {phase === 'quiz' && questions[currentIndex] && (
        <div className="max-w-2xl mx-auto space-y-6">
          <div ref={topRef} />
          <div className="flex items-center justify-between">
            <div className="text-sm font-bold text-slate-400">
              {currentIndex + 1} / {questions.length}
            </div>
            <button onClick={() => printQuestions(questions, subject, grade, lang)} className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-600 bg-white border border-slate-200 rounded-full px-3 py-1.5 hover:border-blue-300 hover:text-blue-700 transition-colors">
              <Printer className="w-3.5 h-3.5" />
              {lang === 'ar' ? 'طباعة PDF' : 'Print PDF'}
            </button>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={currentIndex} initial={{ opacity: 0, x: isRTL ? -50 : 50 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: isRTL ? 50 : -50 }}>
              <QuestionBankQuestionCard
                exercise={questions[currentIndex]}
                lang={lang}
                isAnswered={isAnswered}
                selectedAnswer={selectedAnswer}
                onAnswer={handleAnswer}
                badgeLabel={`${subjectName} · ${gradeName}`}
              />
            </motion.div>
          </AnimatePresence>
          {isAnswered && (
            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
              <Button onClick={handleNext} className="w-full gap-2 py-6 text-base font-bold">
                {currentIndex < questions.length - 1 ? t('next') : t('viewResults')}
                <Arrow className="w-5 h-5" />
              </Button>
            </motion.div>
          )}
        </div>
      )}

      {phase === 'results' && (
        <div className="max-w-xl mx-auto space-y-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl p-8 text-center text-white" style={{ background: 'linear-gradient(135deg, #556895 0%, #233a69 100%)' }}>
            <CheckCircle className="w-10 h-10 mx-auto mb-3" />
            <h2 className="text-2xl font-heading font-bold mb-2">
              {results.filter((r) => r.isCorrect).length} / {questions.length} {t('correct')}
            </h2>
            <p className="text-white/80">{subjectName} · {gradeName}</p>
          </motion.div>
          <div className="flex gap-3">
            <Button onClick={handleRetry} variant="outline" className="flex-1">{t('tryAgain')}</Button>
            <Button onClick={() => navigate(`/question-bank/${grade}/${semester}`)} className="flex-1">{lang === 'ar' ? 'مادة أخرى' : 'Another Subject'}</Button>
          </div>
        </div>
      )}
    </div>
  );
}