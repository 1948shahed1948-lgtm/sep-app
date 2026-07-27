import React, { useState, useCallback } from 'react';
import { useLang } from '@/lib/i18n.jsx';
import { base44 } from '@/api/base44Client';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import QuestionBankQuestionCard from '@/components/questionbank/QuestionBankQuestionCard';
import { printQuestions } from '@/lib/printQuestions';
import { Printer } from 'lucide-react';
import { CurriculumStep, GradeStep, SubjectStep } from '@/components/questionbank/QuestionBankSelector';
import { getGradeName } from '@/lib/gradeData';
import { getNextReviewDate } from '@/lib/spacedRepetition';

const TARGET_COUNT = 15;

async function ensureQuestions(subject, grade) {
  const existing = await base44.entities.QuestionBankQuestion.filter({ subject_id: subject.id, grade });
  if (existing.length >= TARGET_COUNT) return existing;
  const needed = TARGET_COUNT - existing.length;
  const res = await base44.integrations.Core.InvokeLLM({
    prompt: `أنشئ ${needed} سؤال فريد وغير مكرر لبنك أسئلة إلكتروني في مادة "${subject.name_ar}" (${subject.name_en}) لمستوى ${grade}. كل سؤال متعدد الخيارات (4 خيارات)، مع شرح تفصيلي واضح للإجابة الصحيحة يساعد الطالب على فهم خطئه فور الإجابة. قدم كل سؤال باللغتين العربية والإنجليزية.`,
    response_json_schema: {
      type: "object",
      properties: {
        questions: {
          type: "array",
          items: {
            type: "object",
            properties: {
              question_ar: { type: "string" },
              question_en: { type: "string" },
              options_ar: { type: "array", items: { type: "string" } },
              options_en: { type: "array", items: { type: "string" } },
              correct_answer: { type: "string", description: "index of correct option, 0-3" },
              explanation_ar: { type: "string" },
              explanation_en: { type: "string" }
            },
            required: ["question_ar", "question_en", "options_ar", "options_en", "correct_answer", "explanation_ar", "explanation_en"]
          }
        }
      },
      required: ["questions"]
    }
  });
  const newQuestions = (res.questions || []).map((q) => ({ ...q, subject_id: subject.id, grade }));
  if (newQuestions.length > 0) await base44.entities.QuestionBankQuestion.bulkCreate(newQuestions);
  return base44.entities.QuestionBankQuestion.filter({ subject_id: subject.id, grade });
}

export default function QuestionBank() {
  const { t, lang, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const [step, setStep] = useState('curriculum'); // curriculum | grade | subject | loading | quiz | results
  const [curriculum, setCurriculum] = useState(null);
  const [grade, setGrade] = useState(null);
  const [subjects, setSubjects] = useState([]);
  const [subject, setSubject] = useState(null);
  const [loadingSubjects, setLoadingSubjects] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState([]);

  const handleGradeSelect = useCallback(async (g) => {
    setGrade(g);
    setStep('subject');
    setLoadingSubjects(true);
    const data = await base44.entities.Subject.filter({ curriculum, grade: g });
    setSubjects(data);
    setLoadingSubjects(false);
  }, [curriculum]);

  const handleSubjectSelect = useCallback(async (s) => {
    setSubject(s);
    setStep('loading');
    const qs = await ensureQuestions(s, grade);
    setQuestions(qs.sort(() => Math.random() - 0.5).slice(0, TARGET_COUNT));
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setResults([]);
    setStep('quiz');
  }, [grade]);

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
            subject_name: lang === 'ar' ? subject?.name_ar : subject?.name_en,
            grade,
            source: 'question_bank',
            confidence: 0,
            is_resolved: false,
            review_count: 0,
            next_review_date: getNextReviewDate(0)
          });
        }
      } catch (e) { /* ignore save errors */ }
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setStep('results');
    }
  };

  const handleRestart = () => {
    setStep('curriculum');
    setCurriculum(null);
    setGrade(null);
    setSubject(null);
    setSubjects([]);
  };

  const backTo = step === 'grade' ? { fn: () => setStep('curriculum') }
    : step === 'subject' ? { fn: () => setStep('grade') }
    : null;

  return (
    <div className="space-y-8">
      <PageHeader
        title={lang === 'ar' ? 'بنوك الأسئلة الإلكترونية' : 'Electronic Question Banks'}
        subtitle={lang === 'ar' ? 'تدرّب على أسئلة تفاعلية مع شرح تفصيلي فوري لكل إجابة' : 'Practice interactive questions with instant detailed explanations'}
        backTo="/"
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: lang === 'ar' ? 'بنوك الأسئلة' : 'Question Banks' }]}
      />

      {backTo && (
        <button onClick={backTo.fn} className="flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors">
          {isRTL ? <ArrowRight className="w-4 h-4" /> : <ArrowLeft className="w-4 h-4" />}
          {lang === 'ar' ? 'رجوع' : 'Back'}
        </button>
      )}

      {step === 'curriculum' && (
        <CurriculumStep onSelect={(c) => { setCurriculum(c); setStep('grade'); }} />
      )}

      {step === 'grade' && (
        <GradeStep onSelect={handleGradeSelect} />
      )}

      {step === 'subject' && (
        <SubjectStep subjects={subjects} loading={loadingSubjects} onSelect={handleSubjectSelect} />
      )}

      {step === 'loading' && (
        <div className="flex flex-col items-center justify-center py-24 gap-4">
          <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
          <p className="text-sm text-slate-500 font-medium">{lang === 'ar' ? 'جاري إعداد الأسئلة...' : 'Preparing questions...'}</p>
        </div>
      )}

      {step === 'quiz' && questions[currentIndex] && (
        <div className="max-w-2xl mx-auto space-y-6">
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
                badgeLabel={`${lang === 'ar' ? subject?.name_ar : subject?.name_en} · ${getGradeName(grade, lang)}`}
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

      {step === 'results' && (
        <div className="max-w-xl mx-auto space-y-6">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="rounded-2xl p-8 text-center bg-gradient-to-br from-[#263D84] to-[#3E57A4] text-white">
            <CheckCircle className="w-10 h-10 mx-auto mb-3" />
            <h2 className="text-2xl font-heading font-bold mb-2">
              {results.filter(r => r.isCorrect).length} / {questions.length} {t('correct')}
            </h2>
            <p className="text-white/80">
              {lang === 'ar' ? `${subject?.name_ar} · ${getGradeName(grade, lang)}` : `${subject?.name_en} · ${getGradeName(grade, lang)}`}
            </p>
          </motion.div>
          <div className="flex gap-3">
            <Button onClick={() => handleSubjectSelect(subject)} variant="outline" className="flex-1">{t('tryAgain')}</Button>
            <Button onClick={handleRestart} className="flex-1">{lang === 'ar' ? 'مادة أخرى' : 'Another Subject'}</Button>
          </div>
        </div>
      )}
    </div>
  );
}