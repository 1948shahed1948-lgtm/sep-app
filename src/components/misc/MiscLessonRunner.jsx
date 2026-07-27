import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react';
import { QuestionRenderer } from './MiscQuestionTypes';
import { base44 } from '@/api/base44Client';

export default function MiscLessonRunner({ lesson, unit, onBack }) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState([]);
  const [done, setDone] = useState(false);
  const [key, setKey] = useState(0);
  const [saving, setSaving] = useState(false);
  const [answered, setAnswered] = useState(false);

  const questions = lesson.questions;
  const current = questions[idx];

  // Track viewed questions
  useEffect(() => {
    let cancelled = false;
    (async () => {
      try {
        const user = await base44.auth.me();
        if (!user || cancelled) return;
        base44.entities.ViewedQuestion.create({
          user_id: user.id,
          question_ar: current.q,
          question_en: current.q,
          options_ar: current.options ? current.options.map(o => o.text) : [],
          options_en: current.options ? current.options.map(o => o.text) : [],
          correct_answer: current.options ? String(current.options.findIndex(o => o.correct)) : '',
          explanation_ar: current.teacher_explanation || '',
          explanation_en: '',
          subject_name: 'المهارات الحياتية — متنوعة',
          grade: 'misc',
          source: 'question_bank',
          viewed_date: new Date().toISOString(),
        });
      } catch (e) { /* silent */ }
    })();
    return () => { cancelled = true; };
  }, [idx, current]);

  const handleAnswer = (correct, userPick, correctPick) => {
    if (answered) return;
    setAnswered(true);
    if (correct) {
      setScore(s => s + 1);
    } else {
      const mistake = {
        question_ar: current.q,
        question_en: current.q,
        options_ar: current.options ? current.options.map(o => o.text) : [],
        options_en: current.options ? current.options.map(o => o.text) : [],
        user_answer: userPick !== undefined ? String(userPick) : '',
        correct_answer: correctPick !== undefined ? String(correctPick) : (current.options ? String(current.options.findIndex(o => o.correct)) : ''),
        explanation_ar: current.teacher_explanation || '',
        explanation_en: '',
        subject_name: 'المهارات الحياتية — متنوعة',
        grade: 'misc',
        source: 'question_bank',
      };
      setMistakes(m => [...m, mistake]);
    }
  };

  const next = () => {
    if (idx + 1 < questions.length) { setIdx(i => i + 1); setAnswered(false); setKey(k => k + 1); }
    else setDone(true);
  };

  // Save results when done
  useEffect(() => {
    if (!done) return;
    let cancelled = false;
    (async () => {
      setSaving(true);
      try {
        const user = await base44.auth.me();
        if (!user || cancelled) return;
        const total = questions.length;
        const wrong = total - score;
        const pct = Math.round((score / total) * 100);

        // Save quiz result
        await base44.entities.QuizResult.create({
          user_id: user.id,
          quiz_type: 'lesson_quiz',
          total_questions: total,
          correct_count: score,
          wrong_count: wrong,
          score_percentage: pct,
          errors_detail: mistakes,
          weakness_detected: [],
        });

        // Save individual mistakes
        if (mistakes.length > 0) {
          await base44.entities.MistakeEntry.bulkCreate(
            mistakes.map(m => ({ ...m, user_id: user.id }))
          );
        }

        // Track activity
        await base44.entities.StudentActivity.create({
          user_id: user.id,
          activity_type: 'practice',
          label_ar: `${unit.title_ar} — أسئلة متنوعة`,
          label_en: unit.title_ar,
          details: `${score}/${total} (${pct}%)`,
          route: '/life-skills-misc-bank',
        });
      } catch (e) { /* silent */ }
      if (!cancelled) setSaving(false);
    })();
    return () => { cancelled = true; };
  }, [done]);

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center space-y-6 py-8">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto text-4xl shadow-lg ${pct >= 70 ? 'bg-emerald-100' : 'bg-amber-100'}`}>
          {pct >= 70 ? '🌟' : '📚'}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800">{score}/{questions.length}</h3>
          <p className="text-slate-500 mt-1">{pct}% — {pct >= 80 ? 'ممتاز!' : pct >= 60 ? 'جيد جداً' : 'راجع الدرس مجدداً'}</p>
          {saving && <p className="text-xs text-slate-400 mt-2">جارٍ حفظ النتائج...</p>}
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={() => { setIdx(0); setScore(0); setMistakes([]); setDone(false); setKey(k => k + 1); }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm">
            <RotateCcw className="w-4 h-4" /> إعادة
          </button>
          <button onClick={onBack} className="px-5 py-2.5 rounded-xl border-2 border-slate-300 font-bold text-sm text-slate-700">العودة</button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary font-medium">
        <ChevronRight className="w-4 h-4" /> {unit.title_ar}
      </button>
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">السؤال {idx + 1} / {questions.length}</span>
        <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${((idx + 1) / questions.length) * 100}%` }} />
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <AnimatePresence mode="wait">
          <motion.div key={key} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
            <QuestionRenderer q={current} onAnswer={handleAnswer} />
          </motion.div>
        </AnimatePresence>
      </div>
      {answered && (
        <motion.button
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          onClick={next}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg"
        >
          {idx + 1 < questions.length ? 'السؤال التالي' : 'عرض النتيجة'}
          <ChevronLeft className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  );
}