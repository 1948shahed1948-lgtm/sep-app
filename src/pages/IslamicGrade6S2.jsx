import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, RotateCcw, BookOpen, Star, CheckCircle2, XCircle } from 'lucide-react';
import { islamicGrade6S2Units, ISLAMIC_GRADE6_S2_TOTAL } from '@/lib/islamicGrade6S2Bank';
import { base44 } from '@/api/base44Client';

const COLOR_MAP = {
  emerald: 'bg-emerald-50 border-emerald-400 text-emerald-800',
  pink: 'bg-pink-50 border-pink-400 text-pink-800',
  cyan: 'bg-cyan-50 border-cyan-400 text-cyan-800',
  amber: 'bg-amber-50 border-amber-400 text-amber-800',
  rose: 'bg-rose-50 border-rose-400 text-rose-800',
};

function FeedbackPanel({ q, isCorrect }) {
  return (
    <div className="space-y-3 mt-4" dir="rtl">
      <div className={`rounded-xl p-4 border-2 ${isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`}>
        <div className="flex items-center gap-2 mb-2">
          {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <XCircle className="w-5 h-5 text-red-600" />}
          <span className="font-bold text-sm">{isCorrect ? '🎉 إجابة صحيحة!' : '📚 شرح المعلم'}</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">{q.teacher_explanation}</p>
      </div>
      {q.chalkboard_steps?.length > 0 && (
        <div className="rounded-xl p-4 bg-slate-800 border-2 border-slate-700">
          <p className="text-xs text-white/60 font-bold mb-2">🖥️ السبّورة</p>
          {q.chalkboard_steps.map((step, i) => (
            <p key={i} className="text-sm text-white font-mono">▸ {step}</p>
          ))}
        </div>
      )}
      {q.golden_rule && (
        <div className="rounded-xl p-3 bg-amber-50 border-2 border-amber-300 flex items-start gap-2">
          <span className="text-xl">👑</span>
          <p className="text-sm font-bold text-amber-900">{q.golden_rule}</p>
        </div>
      )}
      {q.feedback_question && (
        <div className="rounded-xl p-3 bg-indigo-50 border border-indigo-200">
          <p className="text-xs font-bold text-indigo-700 mb-1">❓ سؤال متابعة</p>
          <p className="text-sm text-slate-700 mb-2">{q.feedback_question}</p>
          <details>
            <summary className="text-xs text-indigo-600 cursor-pointer font-medium">عرض الإجابة</summary>
            <p className="text-sm text-slate-600 mt-2">{q.feedback_answer}</p>
          </details>
        </div>
      )}
    </div>
  );
}

function MCQQuestion({ q, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const correctIdx = q.options.findIndex(o => o.correct);
  const submit = (i) => {
    if (picked !== null) return;
    setPicked(i);
    setTimeout(() => onAnswer(i === correctIdx, i, correctIdx), 100);
  };
  return (
    <div className="space-y-3" dir="rtl">
      <p className="font-bold text-slate-800 text-base leading-relaxed">{q.q}</p>
      <div className="grid gap-2">
        {q.options.map((o, i) => {
          const base = COLOR_MAP[o.color] || COLOR_MAP.emerald;
          let cls = `${base} border-2`;
          if (picked !== null) {
            if (i === correctIdx) cls = 'bg-emerald-100 border-emerald-500 text-emerald-900 border-2';
            else if (picked === i) cls = 'bg-red-100 border-red-500 text-red-900 border-2';
            else cls = 'bg-white border-slate-200 text-slate-400 border-2';
          }
          return (
            <button key={i} onClick={() => submit(i)} disabled={picked !== null}
              className={`w-full text-right px-4 py-3 rounded-xl font-medium text-sm transition-all ${cls}`}>
              {o.text}
            </button>
          );
        })}
      </div>
      {picked !== null && <FeedbackPanel q={q} isCorrect={picked === correctIdx} />}
    </div>
  );
}

function TrueFalseQuestion({ q, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const correctIdx = q.options.findIndex(o => o.correct);
  const submit = (i) => {
    if (picked !== null) return;
    setPicked(i);
    setTimeout(() => onAnswer(i === correctIdx, i, correctIdx), 100);
  };
  return (
    <div className="space-y-3" dir="rtl">
      <p className="font-bold text-slate-800 text-base leading-relaxed">{q.q}</p>
      <div className="grid grid-cols-1 gap-3">
        {q.options.map((o, i) => {
          const base = COLOR_MAP[o.color] || COLOR_MAP.emerald;
          let cls = `${base} border-2`;
          if (picked !== null) {
            if (i === correctIdx) cls = 'bg-emerald-100 border-emerald-500 text-emerald-900 border-2';
            else if (picked === i) cls = 'bg-red-100 border-red-500 text-red-900 border-2';
            else cls = 'bg-white border-slate-200 text-slate-400 border-2';
          }
          return (
            <button key={i} onClick={() => submit(i)} disabled={picked !== null}
              className={`w-full text-right px-4 py-3 rounded-xl font-bold text-sm transition-all ${cls}`}>
              {o.text}
            </button>
          );
        })}
      </div>
      {picked !== null && <FeedbackPanel q={q} isCorrect={picked === correctIdx} />}
    </div>
  );
}

function MatchingQuestion({ q, onAnswer }) {
  const [matches, setMatches] = useState({});
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);
  const pairs = q.pairs;
  const [shuffled] = useState(() => [...pairs.map(p => p.right)].sort(() => Math.random() - 0.5));
  const pickLeft = (i) => { if (!done) setSelected(i); };
  const pickRight = (r) => {
    if (done || selected === null) return;
    const newM = { ...matches, [selected]: r };
    setMatches(newM);
    setSelected(null);
    if (Object.keys(newM).length === pairs.length) {
      setDone(true);
      const correct = pairs.every((p, i) => newM[i] === p.right);
      setTimeout(() => onAnswer(correct), 100);
    }
  };
  return (
    <div className="space-y-3" dir="rtl">
      <p className="font-bold text-slate-800 text-base">{q.q}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {pairs.map((p, i) => (
            <button key={i} onClick={() => pickLeft(i)}
              className={`w-full text-right px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all ${selected === i ? 'border-primary bg-primary/10' : matches[i] ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white'}`}>
              {p.left}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {shuffled.map((r, i) => {
            const used = Object.values(matches).includes(r);
            return (
              <button key={i} onClick={() => pickRight(r)} disabled={used}
                className={`w-full text-right px-3 py-2 rounded-lg border-2 text-xs font-medium transition-all ${used ? 'border-emerald-400 bg-emerald-50 opacity-60' : 'border-slate-200 bg-white hover:border-cyan-400'}`}>
                {r}
              </button>
            );
          })}
        </div>
      </div>
      {done && <FeedbackPanel q={q} isCorrect={pairs.every((p, i) => matches[i] === p.right)} />}
    </div>
  );
}

function OrderingQuestion({ q, onAnswer }) {
  const [order, setOrder] = useState(() => [...q.items].sort(() => Math.random() - 0.5));
  const [done, setDone] = useState(false);
  const move = (i, dir) => {
    const a = [...order]; const j = i + dir;
    if (j < 0 || j >= a.length) return;
    [a[i], a[j]] = [a[j], a[i]]; setOrder(a);
  };
  const submit = () => {
    setDone(true);
    const correct = order.every((o, i) => o.correctPosition === i + 1);
    setTimeout(() => onAnswer(correct), 100);
  };
  return (
    <div className="space-y-3" dir="rtl">
      <p className="font-bold text-slate-800 text-base">{q.q}</p>
      <div className="space-y-2">
        {order.map((o, i) => (
          <div key={o.id} className="flex items-center gap-2 bg-white border-2 border-slate-200 rounded-lg px-3 py-2">
            <div className="flex flex-col gap-0.5">
              <button onClick={() => move(i, -1)} disabled={done || i === 0} className="text-xs text-slate-400 hover:text-primary disabled:opacity-30">▲</button>
              <button onClick={() => move(i, 1)} disabled={done || i === order.length - 1} className="text-xs text-slate-400 hover:text-primary disabled:opacity-30">▼</button>
            </div>
            <span className="text-sm font-medium text-slate-800 flex-1">{o.text}</span>
            <span className="text-xs text-slate-400 font-bold">{i + 1}</span>
          </div>
        ))}
      </div>
      {!done && <button onClick={submit} className="w-full py-2.5 rounded-xl bg-primary text-white font-bold text-sm">تحقق من الترتيب</button>}
      {done && <FeedbackPanel q={q} isCorrect={order.every((o, i) => o.correctPosition === i + 1)} />}
    </div>
  );
}

function DragDropQuestion({ q, onAnswer }) {
  const [placed, setPlaced] = useState({});
  const [done, setDone] = useState(false);
  const items = q.dragItems;
  const zones = q.dropZones;
  const unplaced = items.filter(it => !placed[it.id]);
  const assign = (itemId, zoneId) => {
    if (done) return;
    const newP = { ...placed, [itemId]: zoneId };
    setPlaced(newP);
    if (Object.keys(newP).length === items.length) {
      setDone(true);
      const correct = items.every(it => {
        const zone = zones.find(z => z.id === newP[it.id]);
        return zone && zone.accepts.includes(it.id);
      });
      setTimeout(() => onAnswer(correct), 100);
    }
  };
  return (
    <div className="space-y-3" dir="rtl">
      <p className="font-bold text-slate-800 text-base">{q.q}</p>
      {unplaced.length > 0 && (
        <div className="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
          {unplaced.map(it => (
            <span key={it.id} className="px-3 py-1.5 bg-white border-2 border-slate-300 rounded-lg text-sm font-medium text-slate-700">{it.text}</span>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {zones.map(zone => (
          <div key={zone.id} className="rounded-xl border-2 border-dashed border-slate-300 p-3 min-h-[90px] bg-slate-50/50">
            <p className="text-xs font-bold text-slate-600 mb-2">{zone.text}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {items.filter(it => placed[it.id] === zone.id).map(it => (
                <span key={it.id} className="px-2 py-1 bg-emerald-100 border border-emerald-300 rounded-lg text-xs font-medium text-emerald-800">{it.text}</span>
              ))}
            </div>
            {!done && unplaced.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {unplaced.map(it => (
                  <button key={it.id} onClick={() => assign(it.id, zone.id)} className="px-2 py-1 bg-white border border-slate-300 rounded text-xs hover:bg-primary/10 transition-colors">+ {it.text}</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {done && <FeedbackPanel q={q} isCorrect={items.every(it => { const z = zones.find(zn => zn.id === placed[it.id]); return z && z.accepts.includes(it.id); })} />}
    </div>
  );
}

function QuestionRenderer({ q, onAnswer }) {
  switch (q.type) {
    case 'mcq': return <MCQQuestion q={q} onAnswer={onAnswer} />;
    case 'truefalse': return <TrueFalseQuestion q={q} onAnswer={onAnswer} />;
    case 'matching': return <MatchingQuestion q={q} onAnswer={onAnswer} />;
    case 'ordering': return <OrderingQuestion q={q} onAnswer={onAnswer} />;
    case 'dragdrop': return <DragDropQuestion q={q} onAnswer={onAnswer} />;
    default: return <MCQQuestion q={q} onAnswer={onAnswer} />;
  }
}

function LessonRunner({ lesson, unit, onBack }) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [key, setKey] = useState(0);
  const questions = lesson.questions;
  const current = questions[idx];

  const handleAnswer = (correct) => {
    if (answered) return;
    setAnswered(true);
    if (correct) setScore(s => s + 1);
  };

  const next = () => {
    if (idx + 1 < questions.length) { setIdx(i => i + 1); setAnswered(false); setKey(k => k + 1); }
    else setDone(true);
  };

  useEffect(() => {
    if (!done) return;
    (async () => {
      try {
        const user = await base44.auth.me();
        if (!user) return;
        const total = questions.length;
        await base44.entities.QuizResult.create({
          user_id: user.id, quiz_type: 'lesson_quiz', total_questions: total,
          correct_count: score, wrong_count: total - score,
          score_percentage: Math.round((score / total) * 100),
          errors_detail: [], weakness_detected: []
        });
        await base44.entities.StudentActivity.create({
          user_id: user.id, activity_type: 'practice',
          label_ar: `${unit.title_ar} — ${lesson.title_ar}`,
          label_en: lesson.title_ar,
          details: `${score}/${total}`,
          route: '/islamic-grade6-s2'
        });
      } catch (e) { /* silent */ }
    })();
  }, [done]);

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center space-y-6 py-8" dir="rtl">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto text-4xl shadow-lg ${pct >= 70 ? 'bg-emerald-100' : 'bg-amber-100'}`}>
          {pct >= 70 ? '🌟' : '📚'}
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800">{score}/{questions.length}</h3>
          <p className="text-slate-500 mt-1">{pct}% — {pct >= 80 ? 'ممتاز!' : pct >= 60 ? 'جيد جداً' : 'راجع الدرس مجدداً'}</p>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={() => { setIdx(0); setScore(0); setDone(false); setAnswered(false); setKey(k => k + 1); }}
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
      <button onClick={onBack} className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary font-medium" dir="rtl">
        <ChevronRight className="w-4 h-4" /> {lesson.title_ar}
      </button>
      <div className="flex items-center justify-between" dir="rtl">
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
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
          onClick={next}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg">
          {idx + 1 < questions.length ? 'السؤال التالي' : 'عرض النتيجة'}
          <ChevronLeft className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  );
}

export default function IslamicGrade6S2() {
  const [selectedUnit, setSelectedUnit] = useState(null);
  const [selectedLesson, setSelectedLesson] = useState(null);

  if (selectedUnit && selectedLesson) {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <LessonRunner lesson={selectedLesson} unit={selectedUnit} onBack={() => setSelectedLesson(null)} />
      </div>
    );
  }

  if (selectedUnit) {
    return (
      <div className="max-w-2xl mx-auto p-4 space-y-4" dir="rtl">
        <button onClick={() => setSelectedUnit(null)} className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary font-medium">
          <ChevronRight className="w-4 h-4" /> العودة للوحدات
        </button>
        <div className="rounded-2xl p-5 text-white" style={{ background: `linear-gradient(135deg, ${selectedUnit.color}dd, ${selectedUnit.color})` }}>
          <div className="text-3xl mb-2">{selectedUnit.icon}</div>
          <h2 className="text-xl font-bold">{selectedUnit.title_ar}</h2>
          <p className="text-white/70 text-sm mt-1">{selectedUnit.lessons.length} دروس</p>
        </div>
        <div className="space-y-3">
          {selectedUnit.lessons.map((lesson, i) => (
            <motion.button key={lesson.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              onClick={() => setSelectedLesson(lesson)}
              className="w-full text-right p-4 rounded-xl bg-white border-2 border-slate-200 hover:border-primary/40 hover:shadow-md transition-all">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                  style={{ backgroundColor: selectedUnit.color }}>{i + 1}</div>
                <div>
                  <p className="font-bold text-slate-800 text-sm">{lesson.title_ar}</p>
                  <p className="text-xs text-slate-400 mt-0.5">{lesson.questions.length} أسئلة تفاعلية</p>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-4 space-y-6" dir="rtl">
      <div className="relative overflow-hidden rounded-2xl px-6 py-8 text-white"
        style={{ background: 'linear-gradient(135deg, #1e3a5f 0%, #0f2845 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 rounded-2xl bg-white/15 flex items-center justify-center text-2xl">☪️</div>
            <div>
              <h1 className="text-xl font-bold">الدراسات الإسلامية</h1>
              <p className="text-white/70 text-sm">الصف السادس الابتدائي — الفصل الثاني</p>
            </div>
          </div>
          <div className="flex gap-4 text-center mt-4">
            <div className="bg-white/10 rounded-xl px-4 py-2">
              <p className="text-xl font-bold">{islamicGrade6S2Units.length}</p>
              <p className="text-xs text-white/70">وحدات</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2">
              <p className="text-xl font-bold">{islamicGrade6S2Units.reduce((t, u) => t + u.lessons.length, 0)}</p>
              <p className="text-xs text-white/70">دروس</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2">
              <p className="text-xl font-bold">{ISLAMIC_GRADE6_S2_TOTAL}</p>
              <p className="text-xs text-white/70">سؤالاً</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        {islamicGrade6S2Units.map((unit, i) => (
          <motion.button key={unit.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            onClick={() => setSelectedUnit(unit)}
            className="text-right p-5 rounded-2xl text-white shadow-lg hover:-translate-y-1 transition-all duration-300 hover:shadow-xl"
            style={{ background: `linear-gradient(135deg, ${unit.color}cc, ${unit.color})` }}>
            <div className="text-3xl mb-2">{unit.icon}</div>
            <h3 className="font-bold text-base mb-1">{unit.title_ar}</h3>
            <div className="flex items-center gap-2 text-white/70 text-xs">
              <BookOpen className="w-3 h-3" />
              <span>{unit.lessons.length} دروس · {unit.lessons.reduce((s, l) => s + l.questions.length, 0)} سؤال</span>
            </div>
          </motion.button>
        ))}
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4" dir="rtl">
        <div className="flex items-center gap-2 mb-3">
          <Star className="w-4 h-4 text-amber-600" />
          <h3 className="font-bold text-amber-800 text-sm">محاور الفصل الثاني</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 text-xs text-amber-700">
          <div className="flex items-center gap-1"><span>☑</span> بركة النبي ﷺ (الماء والطعام)</div>
          <div className="flex items-center gap-1"><span>☑</span> حفظ الله لنبيه ﷺ</div>
          <div className="flex items-center gap-1"><span>☑</span> أسباب حفظ الله للإنسان</div>
          <div className="flex items-center gap-1"><span>☑</span> محبة النبي ﷺ والتأسي به</div>
          <div className="flex items-center gap-1"><span>☑</span> الصلاة على النبي ﷺ</div>
          <div className="flex items-center gap-1"><span>☑</span> الصحابة وأهل البيت وولي الأمر</div>
        </div>
      </div>
    </div>
  );
}