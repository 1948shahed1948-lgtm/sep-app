import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { BookOpen, ChevronLeft, Crown, Printer, User } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { UNITS, QUESTIONS, BLOOM_LABELS, DIFFICULTY_LABELS, TYPE_LABELS, META, getQuestionsForLesson } from '@/lib/mathG2Ch5Bank';
import MCQuestion from '@/components/mathg2/MCQuestion';
import TrueFalseQuestion from '@/components/mathg2/TrueFalseQuestion';
import OrderingQuestion from '@/components/mathg2/OrderingQuestion';
import MatchingQuestion from '@/components/mathg2/MatchingQuestion';
import ClassifyQuestion from '@/components/mathg2/ClassifyQuestion';
import FillBlankQuestion from '@/components/mathg2/FillBlankQuestion';
import ComputeQuestion from '@/components/mathg2/ComputeQuestion';
import FeedbackQuestion from '@/components/mathg2/FeedbackQuestion';
import TeacherBlackboard from '@/components/mathg2/TeacherBlackboard';
import GoldenRule from '@/components/mathg2/GoldenRule';
import GoldenSeal from '@/components/mathg2/GoldenSeal';
import PrintModal from '@/components/mathg2/PrintModal';
import StudentProfile from '@/components/mathg2/StudentProfile';

const STORAGE_KEY = 'math_g2_ch5_progress';
const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

function loadProgress() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; } }
function saveProgress(p) { localStorage.setItem(STORAGE_KEY, JSON.stringify(p)); }

function QuestionRunner({ lesson, onExit }) {
  const questions = useMemo(() => getQuestionsForLesson(lesson.id), [lesson]);
  const [idx, setIdx] = useState(0);
  const [answered, setAnswered] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const q = questions[idx];
  useEffect(() => { setAnswered(null); setFeedback(null); }, [idx]);
  if (!q) return null;
  const handleAnswer = (chosen, isCorrect) => {
    setAnswered({ chosen, isCorrect });
    setScore(s => ({ correct: s.correct + (isCorrect ? 1 : 0), total: s.total + 1 }));
    const prog = loadProgress();
    prog[lesson.id] = { ...(prog[lesson.id] || {}), [q.id]: isCorrect };
    saveProgress(prog);
  };
  const next = () => { if (idx < questions.length - 1) setIdx(idx + 1); else onExit(); };
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <button onClick={onExit} className="flex items-center gap-1 text-slate-500 hover:text-slate-800 text-sm"><ChevronLeft className="w-4 h-4" /> رجوع للدروس</button>
        <span className="text-sm font-bold text-slate-600">{toAr(idx + 1)} / {toAr(questions.length)}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-200 overflow-hidden">
        <div className="h-full bg-emerald-500 transition-all" style={{ width: `${(idx / questions.length) * 100}%` }} />
      </div>
      <div className="relative rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
        <GoldenSeal />
        <div className="flex flex-wrap gap-2 mb-3 text-xs pe-12">
          <span className="px-2 py-1 rounded-full bg-slate-100 text-slate-600">ص{toAr(q.page)}</span>
          <span className="px-2 py-1 rounded-full bg-violet-100 text-violet-700">{BLOOM_LABELS[q.bloom]}</span>
          <span className="px-2 py-1 rounded-full bg-amber-100 text-amber-700">{DIFFICULTY_LABELS[q.difficulty]}</span>
          <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-700">{TYPE_LABELS[q.type]}</span>
        </div>
        <h3 className="font-heading font-bold text-lg text-slate-900 mb-3 pe-12">{q.question}</h3>
        {q.type === 'multipleChoice' && <MCQuestion q={q} onAnswer={handleAnswer} answered={answered} />}
        {q.type === 'trueFalse' && <TrueFalseQuestion q={q} onAnswer={handleAnswer} answered={answered} />}
        {q.type === 'ordering' && <OrderingQuestion q={q} onAnswer={handleAnswer} />}
        {q.type === 'matching' && <MatchingQuestion q={q} onAnswer={handleAnswer} />}
        {q.type === 'classify' && <ClassifyQuestion q={q} onAnswer={handleAnswer} />}
        {q.type === 'fillBlank' && <FillBlankQuestion q={q} onAnswer={handleAnswer} />}
        {q.type === 'compute' && <ComputeQuestion q={q} onAnswer={handleAnswer} answered={answered} />}
        {answered && !answered.isCorrect && (
          <>
            <div className="mt-4 rounded-xl p-3 border-r-4 border-red-500 bg-red-50">
              <p className="text-sm text-red-700"><strong>الفقرة من الكتاب (ص{toAr(q.page)}):</strong> {q.paragraph}</p>
            </div>
            <TeacherBlackboard text={q.explanation} />
            <GoldenRule text={q.goldenRule} />
            {q.feedbackQuestion && !feedback && <button onClick={() => setFeedback({})} className="mt-3 rounded-xl bg-blue-600 text-white font-bold py-2 px-4">جرّب سؤالاً مشابهاً</button>}
            {feedback && q.feedbackQuestion && <FeedbackQuestion fq={q.feedbackQuestion} onAnswer={(c, ok) => setFeedback({ chosen: c, isCorrect: ok })} answered={feedback.chosen !== undefined ? feedback : null} />}
          </>
        )}
        {answered && (
          <div className="mt-4 flex justify-between">
            <button onClick={next} className="rounded-xl bg-emerald-600 text-white font-bold px-6 py-2.5">{idx < questions.length - 1 ? 'التالي ←' : 'إنهاء الدرس ✓'}</button>
            {answered.isCorrect && <span className="text-emerald-600 font-bold self-center">✓ صحيح!</span>}
          </div>
        )}
      </div>
      <div className="rounded-xl bg-slate-50 p-3 text-center text-sm text-slate-600">
        نتيجة الدرس: <strong className="text-emerald-700">{toAr(score.correct)}/{toAr(score.total)}</strong>
      </div>
    </div>
  );
}

function UnitCard({ unit, progress, onClick }) {
  const lesson = unit.lessons[0];
  const qCount = getQuestionsForLesson(lesson.id).length;
  const done = progress[lesson.id] ? Object.keys(progress[lesson.id]).length : 0;
  const mastery = qCount > 0 ? Math.round((done / qCount) * 100) : 0;
  return (
    <motion.button onClick={onClick} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="group relative rounded-3xl p-6 text-start overflow-hidden transition-all hover:-translate-y-1 shadow-lg hover:shadow-2xl"
      style={{ background: `linear-gradient(135deg, ${unit.color}, ${unit.color}dd)` }}>
      <div className="absolute inset-3 rounded-2xl bg-white/10 border border-white/20" />
      <div className="relative">
        <div className="text-5xl mb-3">{unit.icon}</div>
        <h3 className="font-heading font-bold text-white text-lg mb-1">{unit.title}</h3>
        <p className="text-white/70 text-sm">{toAr(qCount)} سؤال · ص{toAr(unit.page)}</p>
        <div className="mt-3 h-1.5 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full bg-white/80" style={{ width: `${mastery}%` }} />
        </div>
        <p className="text-white/60 text-xs mt-1">{toAr(done)} مكتمل</p>
      </div>
    </motion.button>
  );
}

export default function MathG2Ch5() {
  const [progress, setProgress] = useState(loadProgress());
  const [view, setView] = useState({ level: 'home', unit: null, lesson: null });
  const [showPrint, setShowPrint] = useState(false);
  const [showProfile, setShowProfile] = useState(false);
  useEffect(() => { setProgress(loadProgress()); }, []);
  return (
    <div className="space-y-6">
      <PageHeader title="رياضيات · الصف الثاني · الفصل الخامس" subtitle={`${META.title} · ${toAr(QUESTIONS.length)} سؤال`} backTo="/question-bank/grade_2/first" />
      <div className="relative rounded-3xl overflow-hidden p-8 text-center" style={{ background: 'linear-gradient(135deg, #0a1628, #1a3a5a)' }}>
        <div className="absolute top-4 right-4 text-3xl animate-pulse">⭐⭐⭐</div>
        <BookOpen className="w-12 h-12 text-amber-400 mx-auto mb-3" />
        <h2 className="text-white font-heading font-bold text-2xl mb-1">جمع الأعداد المكونة من رقمين</h2>
        <p className="text-white/60 text-sm">{toAr(UNITS.length)} دروس · {toAr(QUESTIONS.length)} سؤال · ٧ أنماط تفاعلية</p>
        <div className="flex justify-center gap-3 mt-4">
          <button onClick={() => setShowPrint(true)} className="rounded-xl bg-amber-500 text-white font-bold px-4 py-2 flex items-center gap-2 text-sm"><Printer className="w-4 h-4" /> طباعة PDF</button>
          <button onClick={() => setShowProfile(true)} className="rounded-xl bg-white/20 text-white font-bold px-4 py-2 flex items-center gap-2 text-sm border border-white/30"><User className="w-4 h-4" /> ملف الطالب</button>
        </div>
      </div>
      {view.level === 'home' && (
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-slate-800">اختر الدرس</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {UNITS.map(u => (
              <UnitCard key={u.id} unit={u} progress={progress} onClick={() => setView({ level: 'lesson', unit: u.id, lesson: u.lessons[0] })} />
            ))}
          </div>
        </div>
      )}
      {view.level === 'lesson' && view.lesson && (
        <QuestionRunner lesson={view.lesson} onExit={() => setView({ level: 'home' })} />
      )}
      {showPrint && <PrintModal onClose={() => setShowPrint(false)} />}
      {showProfile && <StudentProfile onClose={() => setShowProfile(false)} />}
    </div>
  );
}