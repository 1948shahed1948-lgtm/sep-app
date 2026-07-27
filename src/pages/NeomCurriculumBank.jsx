import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Trophy, RotateCcw, CheckCircle2, XCircle } from 'lucide-react';
import { useLang } from '@/lib/i18n';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import { NEOM_SUBJECTS } from '@/lib/neomBank';
import NeomQuestionCard from '@/components/neom/NeomQuestionCard';
import ResultScoreRing from '@/components/quiz/ResultScoreRing';

export default function NeomCurriculumBank() {
  const { lang, isRTL } = useLang();
  const Back = isRTL ? ChevronRight : ChevronLeft;
  const Arrow = isRTL ? ArrowLeft : ArrowRight;
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState(null);
  const [phase, setPhase] = useState('browse'); // browse | quiz | results
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [results, setResults] = useState([]);
  const topRef = useScrollTopOnChange(currentIndex);

  const startTopic = (subject, topic) => {
    setSelectedSubject(subject);
    setSelectedTopic(topic);
    const shuffled = [...topic.questions].sort(() => Math.random() - 0.5);
    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setResults([]);
    setPhase('quiz');
  };

  const handleAnswer = (i) => {
    setSelectedAnswer(i);
    setIsAnswered(true);
    const isCorrect = String(i) === String(questions[currentIndex].correct_answer);
    setResults((prev) => [...prev, { index: currentIndex, isCorrect }]);
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((p) => p + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setPhase('results');
    }
  };

  const handleRetry = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setResults([]);
    setPhase('quiz');
  };

  const handleBackToBrowse = () => {
    setPhase('browse');
    setSelectedSubject(null);
    setSelectedTopic(null);
  };

  // ===== Browse view =====
  if (phase === 'browse') {
    return (
      <div className="space-y-6">
        <PageHeader
          title={lang === 'ar' ? 'جيل نيوم — ربط المنهج بالمستقبل' : 'Generation NEOM — Curriculum & Future'}
          subtitle={lang === 'ar' ? 'بنك أسئلة يربط المواد الدراسية بمشروع نيوم ورؤية ٢٠٣٠' : 'Question bank linking subjects to NEOM & Vision 2030'}
          backTo="/"
        />
        <div className="grid md:grid-cols-2 gap-5">
          {NEOM_SUBJECTS.map((subject, i) => (
            <motion.div key={subject.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} className="rounded-2xl bg-white border border-slate-100 overflow-hidden shadow-sm">
              <div className={`bg-gradient-to-r ${subject.color} p-5 text-white`}>
                <div className="flex items-center gap-3">
                  <span className="text-3xl">{subject.icon}</span>
                  <div>
                    <h2 className="text-lg font-heading font-bold">{lang === 'ar' ? subject.titleAr : subject.titleEn}</h2>
                    <p className="text-xs text-white/80 mt-0.5">{lang === 'ar' ? subject.descAr : subject.descEn}</p>
                  </div>
                </div>
              </div>
              <div className="p-4 space-y-2">
                {subject.topics.map((topic) => (
                  <button key={topic.id} onClick={() => startTopic(subject, topic)} className="w-full text-start flex items-center justify-between rounded-xl border border-slate-200 hover:border-blue-300 hover:bg-blue-50 px-4 py-3 transition-colors group">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-blue-500" />
                      <span className="text-sm font-medium text-slate-700">{lang === 'ar' ? topic.titleAr : topic.titleEn}</span>
                      <span className="text-xs text-slate-400">· {topic.questions.length} {lang === 'ar' ? 'سؤال' : 'Qs'}</span>
                    </div>
                    <Arrow className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                  </button>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  }

  // ===== Results view =====
  if (phase === 'results') {
    const correct = results.filter((r) => r.isCorrect).length;
    const pct = questions.length ? Math.round((correct / questions.length) * 100) : 0;
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="rounded-2xl p-8 text-center text-white bg-gradient-to-br from-blue-500 to-indigo-600">
          <ResultScoreRing percentage={pct} />
          <div className="flex items-center justify-center gap-2 mt-4 mb-2">
            <Trophy className="w-7 h-7" />
            <h2 className="text-2xl font-heading font-bold">{lang === 'ar' ? 'انتهى التحدي!' : 'Challenge Complete!'}</h2>
          </div>
          <p className="text-white/80">{correct} / {questions.length}</p>
        </div>
        <div className="space-y-2">
          {questions.map((q, i) => {
            const r = results.find((res) => res.index === i);
            if (!r) return null;
            return (
              <div key={i} className={`rounded-xl border p-3 flex items-start gap-2 ${r.isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
                {r.isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" /> : <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />}
                <p className="text-sm text-slate-700">{lang === 'ar' ? q.question_ar : q.question_en}</p>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3">
          <Button onClick={handleRetry} variant="outline" className="flex-1 gap-2"><RotateCcw className="w-4 h-4" />{lang === 'ar' ? 'إعادة' : 'Retry'}</Button>
          <Button onClick={handleBackToBrowse} className="flex-1">{lang === 'ar' ? 'كل المواد' : 'All Subjects'}</Button>
        </div>
      </div>
    );
  }

  // ===== Quiz view =====
  const currentQ = questions[currentIndex];
  const badgeLabel = `${lang === 'ar' ? selectedSubject.titleAr : selectedSubject.titleEn} · ${lang === 'ar' ? selectedTopic.titleAr : selectedTopic.titleEn}`;
  return (
    <div className="max-w-2xl mx-auto space-y-5">
      <div ref={topRef} />
      <div className="flex items-center justify-between">
        <button onClick={handleBackToBrowse} className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-sm flex items-center justify-center hover:border-blue-300 hover:bg-blue-50 transition-colors">
          <Back className="w-5 h-5 text-slate-500" />
        </button>
        <span className="text-sm font-medium text-slate-600">{badgeLabel}</span>
      </div>
      <AnimatePresence mode="wait">
        <NeomQuestionCard
          key={currentIndex}
          question={currentQ}
          index={currentIndex}
          total={questions.length}
          onAnswer={handleAnswer}
          onNext={handleNext}
          isAnswered={isAnswered}
          selectedAnswer={selectedAnswer}
          badgeLabel={badgeLabel}
          gradientClass={selectedSubject.color}
        />
      </AnimatePresence>
    </div>
  );
}