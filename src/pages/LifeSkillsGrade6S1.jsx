import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, XCircle, RotateCcw, ChevronRight, ChevronLeft, Trophy, BookOpen } from 'lucide-react';
import { LIFE_SKILLS_G6_S1_UNITS, LIFE_SKILLS_G6_S1_TOTAL } from '@/lib/lifeSkillsGrade6S1Bank';
import PageHeader from '@/components/layout/PageHeader';

const COLORS = ['bg-pink-100 border-pink-400 text-pink-800', 'bg-cyan-100 border-cyan-400 text-cyan-800', 'bg-emerald-100 border-emerald-400 text-emerald-800', 'bg-amber-100 border-amber-400 text-amber-800'];

function MCQ({ q, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const submit = (i) => { if (picked !== null) return; setPicked(i); setTimeout(() => onAnswer(i === q.correct), 1200); };
  return (
    <div className="space-y-3">
      <p className="font-bold text-slate-800 text-base leading-relaxed" dir="rtl">{q.q}</p>
      <div className="grid gap-2">
        {q.options.map((o, i) => (
          <button key={i} onClick={() => submit(i)} disabled={picked !== null}
            className={`w-full text-right px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all ${picked === null ? 'bg-white border-slate-200 hover:border-primary' : i === q.correct ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : picked === i ? 'bg-red-50 border-red-400 text-red-800' : 'bg-white border-slate-100 text-slate-400'}`}>
            {o}
          </button>
        ))}
      </div>
      {picked !== null && <div className={`rounded-xl p-3 text-sm font-medium ${picked === q.correct ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-red-50 border border-red-200 text-red-800'}`} dir="rtl">{q.explanation}</div>}
    </div>
  );
}

function YesNo({ q, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const submit = (v) => { if (picked !== null) return; setPicked(v); setTimeout(() => onAnswer(v === q.correct), 1200); };
  return (
    <div className="space-y-3">
      <p className="font-bold text-slate-800 text-base leading-relaxed" dir="rtl">{q.q}</p>
      <div className="flex gap-3">
        {[true, false].map((v) => (
          <button key={String(v)} onClick={() => submit(v)} disabled={picked !== null}
            className={`flex-1 py-3 rounded-xl border-2 font-bold text-sm transition-all ${picked === null ? 'bg-white border-slate-200 hover:border-primary' : v === q.correct ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : picked === v ? 'bg-red-50 border-red-400 text-red-800' : 'bg-white border-slate-100 text-slate-400'}`}>
            {v ? 'صحيح ✓' : 'خطأ ✗'}
          </button>
        ))}
      </div>
      {picked !== null && <div className={`rounded-xl p-3 text-sm font-medium ${picked === q.correct ? 'bg-emerald-50 border border-emerald-200 text-emerald-800' : 'bg-red-50 border border-red-200 text-red-800'}`} dir="rtl">{q.explanation}</div>}
    </div>
  );
}

function MatchingQ({ q, onAnswer }) {
  const [matches, setMatches] = useState({});
  const [selected, setSelected] = useState(null);
  const [done, setDone] = useState(false);
  const pairs = q.pairs;
  const rights = pairs.map(p => p.right);
  const [shuffled] = useState(() => [...rights].sort(() => Math.random() - 0.5));

  const pickLeft = (i) => { if (!done) setSelected(i); };
  const pickRight = (r) => {
    if (done || selected === null) return;
    const newM = { ...matches, [selected]: r };
    setMatches(newM);
    setSelected(null);
    if (Object.keys(newM).length === pairs.length) {
      setDone(true);
      const correct = pairs.every((p, i) => newM[i] === p.right);
      setTimeout(() => onAnswer(correct), 1200);
    }
  };

  return (
    <div className="space-y-3">
      <p className="font-bold text-slate-800 text-base" dir="rtl">{q.q}</p>
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
                className={`w-full text-right px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all ${used ? 'border-emerald-400 bg-emerald-50 opacity-60' : 'border-slate-200 bg-white hover:border-cyan-400'}`}>
                {r}
              </button>
            );
          })}
        </div>
      </div>
      {done && <div className="rounded-xl p-3 text-sm font-medium bg-emerald-50 border border-emerald-200 text-emerald-800" dir="rtl">{q.explanation}</div>}
    </div>
  );
}

function OrderingQ({ q, onAnswer }) {
  const [order, setOrder] = useState(() => [...q.items].map((item, i) => ({ item, orig: i })).sort(() => Math.random() - 0.5));
  const [done, setDone] = useState(false);
  const move = (i, dir) => { const a = [...order]; const j = i + dir; if (j < 0 || j >= a.length) return; [a[i], a[j]] = [a[j], a[i]]; setOrder(a); };
  const submit = () => {
    setDone(true);
    const correct = order.every((o, i) => o.orig === q.correct_order[i]);
    setTimeout(() => onAnswer(correct), 1200);
  };
  return (
    <div className="space-y-3">
      <p className="font-bold text-slate-800 text-base" dir="rtl">{q.q}</p>
      <div className="space-y-2">
        {order.map((o, i) => (
          <div key={o.orig} className="flex items-center gap-2 bg-white border-2 border-slate-200 rounded-lg px-3 py-2">
            <div className="flex flex-col gap-0.5">
              <button onClick={() => move(i, -1)} disabled={done || i === 0} className="text-xs text-slate-400 hover:text-primary disabled:opacity-30">▲</button>
              <button onClick={() => move(i, 1)} disabled={done || i === order.length - 1} className="text-xs text-slate-400 hover:text-primary disabled:opacity-30">▼</button>
            </div>
            <span className="text-sm font-medium text-slate-800 flex-1" dir="rtl">{o.item}</span>
            <span className="text-xs text-slate-400 font-bold">{i + 1}</span>
          </div>
        ))}
      </div>
      {!done && <button onClick={submit} className="w-full py-2.5 rounded-xl bg-primary text-white font-bold text-sm">تحقق من الترتيب</button>}
      {done && <div className="rounded-xl p-3 text-sm font-medium bg-amber-50 border border-amber-200 text-amber-800" dir="rtl">{q.explanation}</div>}
    </div>
  );
}

function ClassifyQ({ q, onAnswer }) {
  const [placed, setPlaced] = useState({});
  const [done, setDone] = useState(false);
  const items = q.items;
  const unplaced = items.filter((_, i) => placed[i] === undefined);

  const place = (itemIdx, catIdx) => {
    if (done) return;
    const newP = { ...placed, [itemIdx]: catIdx };
    setPlaced(newP);
    if (Object.keys(newP).length === items.length) {
      setDone(true);
      const correct = items.every((item, i) => newP[i] === item.correct_cat);
      setTimeout(() => onAnswer(correct), 1200);
    }
  };

  return (
    <div className="space-y-3">
      <p className="font-bold text-slate-800 text-base" dir="rtl">{q.q}</p>
      {unplaced.length > 0 && (
        <div className="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200" dir="rtl">
          {items.map((item, i) => placed[i] === undefined && (
            <span key={i} className="px-3 py-1.5 bg-white border-2 border-slate-300 rounded-lg text-sm font-medium text-slate-700 cursor-default">{item.text}</span>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {q.categories.map((cat, ci) => (
          <div key={ci} className={`rounded-xl border-2 p-3 min-h-[80px] ${COLORS[ci % COLORS.length]}`}>
            <p className="text-xs font-bold mb-2" dir="rtl">{cat}</p>
            <div className="space-y-1">
              {items.map((item, i) => placed[i] === ci && (
                <div key={i} className="px-2 py-1 bg-white/60 rounded-lg text-xs font-medium" dir="rtl">{item.text}</div>
              ))}
            </div>
            {!done && unplaced.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {items.map((item, i) => placed[i] === undefined && (
                  <button key={i} onClick={() => place(i, ci)} className="px-2 py-1 bg-white border border-slate-300 rounded text-xs hover:bg-primary/10 transition-colors" dir="rtl">+{item.text}</button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
      {done && <div className="rounded-xl p-3 text-sm font-medium bg-emerald-50 border border-emerald-200 text-emerald-800" dir="rtl">{q.explanation}</div>}
    </div>
  );
}

function QuestionRenderer({ q, onAnswer }) {
  if (q.type === 'mc') return <MCQ q={q} onAnswer={onAnswer} />;
  if (q.type === 'yesno') return <YesNo q={q} onAnswer={onAnswer} />;
  if (q.type === 'matching') return <MatchingQ q={q} onAnswer={onAnswer} />;
  if (q.type === 'ordering') return <OrderingQ q={q} onAnswer={onAnswer} />;
  if (q.type === 'classify') return <ClassifyQ q={q} onAnswer={onAnswer} />;
  return null;
}

function LessonRunner({ lesson, unit, onBack }) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [done, setDone] = useState(false);
  const [key, setKey] = useState(0);

  const questions = lesson.questions;
  const current = questions[idx];

  const handleAnswer = (correct) => {
    if (answered) return;
    setAnswered(true);
    if (correct) setScore(s => s + 1);
    setTimeout(() => {
      if (idx + 1 < questions.length) { setIdx(i => i + 1); setAnswered(false); setKey(k => k + 1); }
      else setDone(true);
    }, 600);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center space-y-6 py-8">
        <div className={`w-24 h-24 rounded-full flex items-center justify-center mx-auto text-4xl shadow-lg ${pct >= 70 ? 'bg-emerald-100' : 'bg-amber-100'}`}>{pct >= 70 ? '🌟' : '📚'}</div>
        <div>
          <h3 className="text-2xl font-bold text-slate-800">{score}/{questions.length}</h3>
          <p className="text-slate-500 mt-1">{pct}% — {pct >= 80 ? 'ممتاز!' : pct >= 60 ? 'جيد جداً' : 'راجع الدرس مجدداً'}</p>
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={() => { setIdx(0); setScore(0); setAnswered(false); setDone(false); setKey(k => k + 1); }} className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm">
            <RotateCcw className="w-4 h-4" /> إعادة
          </button>
          <button onClick={onBack} className="px-5 py-2.5 rounded-xl border-2 border-slate-300 font-bold text-sm text-slate-700">العودة</button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium">السؤال {idx + 1} / {questions.length}</span>
        <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
          <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${((idx + 1) / questions.length) * 100}%` }} />
        </div>
      </div>
      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm min-h-[200px]">
        <AnimatePresence mode="wait">
          <motion.div key={key} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0 }}>
            <QuestionRenderer q={current} onAnswer={handleAnswer} />
          </motion.div>
        </AnimatePresence>
      </div>
      {current.golden_rule && (
        <div className="rounded-xl bg-amber-50 border border-amber-200 px-4 py-2.5 text-xs font-bold text-amber-800 flex items-center gap-2" dir="rtl">
          👑 {current.golden_rule}
        </div>
      )}
    </div>
  );
}

export default function LifeSkillsGrade6S1() {
  const [activeUnit, setActiveUnit] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);

  if (activeLesson && activeUnit) {
    return (
      <div className="space-y-4 max-w-2xl mx-auto">
        <button onClick={() => setActiveLesson(null)} className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary font-medium">
          <ChevronRight className="w-4 h-4" /> {activeUnit.title_ar}
        </button>
        <h2 className="text-lg font-heading font-bold text-slate-800" dir="rtl">{activeLesson.title_ar}</h2>
        <LessonRunner lesson={activeLesson} unit={activeUnit} onBack={() => setActiveLesson(null)} />
      </div>
    );
  }

  if (activeUnit) {
    return (
      <div className="space-y-6 max-w-2xl mx-auto">
        <button onClick={() => setActiveUnit(null)} className="flex items-center gap-2 text-sm text-slate-500 hover:text-primary font-medium">
          <ChevronRight className="w-4 h-4" /> الوحدات
        </button>
        <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${activeUnit.color} p-6 text-white`}>
          <div className="text-4xl mb-2">{activeUnit.icon}</div>
          <h2 className="text-xl font-heading font-bold">{activeUnit.title_ar}</h2>
          <p className="text-white/70 text-sm mt-1">{activeUnit.lessons.length} دروس</p>
        </div>
        <div className="space-y-3">
          {activeUnit.lessons.map((lesson, i) => (
            <motion.button key={lesson.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
              onClick={() => setActiveLesson(lesson)}
              className="w-full text-right bg-white rounded-xl border-2 border-slate-200 hover:border-primary p-4 transition-all group">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-800 text-sm" dir="rtl">{lesson.title_ar}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{lesson.questions.length} أسئلة</p>
                </div>
                <ChevronLeft className="w-5 h-5 text-slate-300 group-hover:text-primary transition-colors" />
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <PageHeader
        title="المهارات الحياتية والأسرية — الصف السادس ف١"
        subtitle="بنك أسئلة تفاعلي مستخرج من الكتاب المدرسي 1447"
        backTo="/question-bank/grade_6/first"
        breadcrumbs={[
          { label: 'الرئيسية', path: '/' },
          { label: 'بنوك الأسئلة', path: '/question-bank/grades' },
          { label: 'الصف السادس', path: '/question-bank/grade_6' },
          { label: 'المهارات الحياتية ف١' },
        ]}
      />
      <div className="bg-white rounded-2xl border border-slate-200 px-5 py-4 flex items-center gap-4 shadow-sm">
        <div className="w-12 h-12 rounded-xl bg-pink-100 flex items-center justify-center text-2xl">🌿</div>
        <div>
          <p className="font-bold text-slate-800">إجمالي الأسئلة: {LIFE_SKILLS_G6_S1_TOTAL} سؤالاً</p>
          <p className="text-sm text-slate-500">{LIFE_SKILLS_G6_S1_UNITS.length} وحدات · صحتي + مسكني + ملبسي + غذائي</p>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-4">
        {LIFE_SKILLS_G6_S1_UNITS.map((unit, i) => (
          <motion.button key={unit.id} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            onClick={() => setActiveUnit(unit)}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${unit.color} p-6 text-right text-white shadow-lg hover:shadow-xl transition-all hover:-translate-y-1`}>
            <div className="text-4xl mb-3">{unit.icon}</div>
            <h3 className="font-heading font-bold text-base">{unit.title_ar}</h3>
            <p className="text-white/70 text-xs mt-1">{unit.lessons.length} دروس · {unit.lessons.reduce((s, l) => s + l.questions.length, 0)} سؤالاً</p>
            <div className="absolute bottom-4 left-4">
              <span className="text-white/50 text-xs font-medium">ابدأ ←</span>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}