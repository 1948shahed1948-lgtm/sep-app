import React, { useState } from 'react';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, CheckCircle2, XCircle, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import PageHeader from '@/components/layout/PageHeader';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import { ISLAMIC_G2_S2_UNITS } from '@/lib/islamicGrade2S2';
import { withQuestionImages } from '@/lib/bankImagePools';

export default function IslamicGrade2S2() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);
  const [currentQ, setCurrentQ] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const unit = selectedUnit !== null ? ISLAMIC_G2_S2_UNITS[selectedUnit] : null;
  const lesson = unit && selectedLesson !== null ? unit.lessons[selectedLesson] : null;
  const questions = lesson ? withQuestionImages(lesson.questions, 'islamic') : [];
  const q = questions[currentQ];
  const topRef = useScrollTopOnChange(currentQ);

  const handleAnswer = (idx) => {
    if (selected !== null) return;
    setSelected(idx);
    if (idx === q.correct) setScore(s => s + 1);
  };

  const handleNext = () => {
    if (currentQ + 1 < questions.length) {
      setCurrentQ(c => c + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  };

  const resetLesson = () => {
    setCurrentQ(0);
    setSelected(null);
    setScore(0);
    setDone(false);
  };

  const backToLessons = () => {
    setSelectedLesson(null);
    resetLesson();
  };

  const backToUnits = () => {
    setSelectedUnit(null);
    setSelectedLesson(null);
    resetLesson();
  };

  // Done screen
  if (done && lesson) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-background p-4" dir="rtl">
        <div className="max-w-lg mx-auto pt-8 text-center space-y-6">
          <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto text-4xl font-bold text-white ${pct >= 70 ? 'bg-emerald-500' : 'bg-amber-500'}`}>
            {pct}%
          </div>
          <h2 className="text-xl font-bold text-foreground">{lesson.title_ar}</h2>
          <p className="text-muted-foreground">{score} / {questions.length} إجابة صحيحة</p>
          <div className="flex gap-3 justify-center">
            <Button onClick={resetLesson} variant="outline" className="gap-2"><RotateCcw className="w-4 h-4" />إعادة</Button>
            <Button onClick={backToLessons}>العودة للدروس</Button>
          </div>
        </div>
      </div>
    );
  }

  // Question screen
  if (lesson && q) {
    return (
      <div className="min-h-screen bg-background p-4" dir="rtl">
        <div className="max-w-lg mx-auto space-y-4">
          <div ref={topRef} />
          <button onClick={backToLessons} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ChevronRight className="w-4 h-4" />الرجوع
          </button>
          <div className="bg-white rounded-2xl p-4 shadow-sm border">
            <div className="flex justify-between text-xs text-muted-foreground mb-3">
              <span>{lesson.title_ar}</span>
              <span>{currentQ + 1} / {questions.length}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5 mb-4">
              <div className="bg-primary h-1.5 rounded-full transition-all" style={{ width: `${((currentQ + 1) / questions.length) * 100}%` }} />
            </div>
            <p className="font-semibold text-foreground text-base mb-4">{q.question_ar}</p>
            {q.image_url && (
              <div className="rounded-xl overflow-hidden border border-slate-200 mb-3">
                <img src={q.image_url} alt="صورة السؤال" className="w-full h-44 object-cover" />
              </div>
            )}
            <div className="space-y-2.5">
              {q.options_ar.map((opt, i) => {
                const isCorrect = i === q.correct;
                const isSelected = i === selected;
                let cls = 'w-full text-right px-4 py-3 rounded-xl border-2 transition-all text-sm font-medium ';
                if (selected === null) cls += 'border-slate-200 hover:border-primary hover:bg-primary/5';
                else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
                else if (isSelected) cls += 'border-red-400 bg-red-50 text-red-800';
                else cls += 'border-slate-100 bg-slate-50 text-slate-400';
                return (
                  <button key={i} className={cls} onClick={() => handleAnswer(i)}>
                    {opt}
                  </button>
                );
              })}
            </div>
            {selected !== null && selected === q.correct && (
              <div className="mt-4 p-3 rounded-xl text-sm bg-emerald-50 text-emerald-800 flex items-center gap-2 font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                إجابة صحيحة! أحسنت 🌟
              </div>
            )}
            {selected !== null && selected !== q.correct && (
              <WrongAnswerTeacher
                explanation={q.explanation_ar}
                goldenRule={q.golden_rule_ar}
                advice={q.advice_ar}
                followup={q.followup}
                lang="ar"
                isRTL
              />
            )}
            {selected !== null && (
              <Button onClick={handleNext} className="w-full mt-4">
                {currentQ + 1 < questions.length ? 'السؤال التالي' : 'إنهاء الدرس'}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Lesson list
  if (unit) {
    return (
      <div className="min-h-screen bg-background p-4" dir="rtl">
        <div className="max-w-2xl mx-auto space-y-4">
          <PageHeader title={unit.title_ar} backTo="#" />
          <button onClick={backToUnits} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <ChevronRight className="w-4 h-4" />العودة للوحدات
          </button>
          <div className="space-y-3">
            {unit.lessons.map((les, idx) => (
              <button key={les.id} onClick={() => setSelectedLesson(idx)}
                className="w-full text-right bg-white border rounded-2xl p-4 hover:shadow-md transition-all flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0" style={{ background: unit.color }}>
                  {idx + 1}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{les.title_ar}</p>
                  <p className="text-xs text-muted-foreground">{les.questions.length} سؤال</p>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Unit list
  return (
    <div className="min-h-screen bg-background p-4" dir="rtl">
      <div className="max-w-2xl mx-auto space-y-4">
        <PageHeader
          title="التربية الإسلامية — الصف الثاني ف٢"
          subtitle="توحيد وفقه وسلوك"
          backTo="/question-bank/grade_2/second"
        />
        <div className="space-y-3">
          {ISLAMIC_G2_S2_UNITS.map((u, idx) => (
            <button key={u.id} onClick={() => setSelectedUnit(idx)}
              className="w-full text-right bg-white border rounded-2xl p-5 hover:shadow-md transition-all flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0" style={{ background: u.color + '20' }}>
                {u.emoji}
              </div>
              <div className="flex-1">
                <p className="font-bold text-foreground">{u.title_ar}</p>
                <p className="text-sm text-muted-foreground">{u.lessons.length} دروس · {u.lessons.reduce((s, l) => s + l.questions.length, 0)} سؤال</p>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}