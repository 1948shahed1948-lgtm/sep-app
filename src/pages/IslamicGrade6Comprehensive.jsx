import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, RotateCcw, CheckCircle2, XCircle, Award, BookOpen, Play, Home } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  ALL_SECTIONS_QUESTIONS,
  COMPREHENSIVE_TOTAL,
  COMPREHENSIVE_TOTAL_UNITS,
  COMPREHENSIVE_TOTAL_LESSONS,
  getShuffledQuestions,
} from '@/lib/islamicGrade6Comprehensive';
import { base44 } from '@/api/base44Client';

const COLOR_MAP = {
  emerald: 'bg-emerald-50 border-emerald-400 text-emerald-800',
  pink: 'bg-pink-50 border-pink-400 text-pink-800',
  cyan: 'bg-cyan-50 border-cyan-400 text-cyan-800',
  amber: 'bg-amber-50 border-amber-400 text-amber-800',
  rose: 'bg-rose-50 border-rose-400 text-rose-800',
};

function SectionTag({ q }) {
  if (!q.section_title) return null;
  return (
    <div className="flex items-center gap-2 text-xs text-slate-400 mb-1" dir="rtl">
      <span>{q.section_icon}</span>
      <span className="font-medium">{q.section_title}</span>
      {q.unit_title && <><span>·</span><span>{q.unit_title}</span></>}
    </div>
  );
}

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
          {q.chalkboard_steps.map((step, i) => <p key={i} className="text-sm text-white font-mono">▸ {step}</p>)}
        </div>
      )}
      {q.golden_rule && (
        <div className="rounded-xl p-3 bg-amber-50 border-2 border-amber-300 flex items-start gap-2">
          <span className="text-xl">👑</span>
          <p className="text-sm font-bold text-amber-900">{q.golden_rule}</p>
        </div>
      )}
    </div>
  );
}

function MCQQuestion({ q, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const correctIdx = q.options.findIndex(o => o.correct);
  const submit = (i) => { if (picked !== null) return; setPicked(i); setTimeout(() => onAnswer(i === correctIdx), 100); };
  return (
    <div className="space-y-3" dir="rtl">
      <SectionTag q={q} />
      <p className="font-bold text-slate-800 text-base leading-relaxed">{q.q}</p>
      <div className="grid gap-2">
        {q.options.map((o, i) => {
          let cls = `${COLOR_MAP[o.color] || COLOR_MAP.emerald} border-2`;
          if (picked !== null) {
            if (i === correctIdx) cls = 'bg-emerald-100 border-emerald-500 text-emerald-900 border-2';
            else if (picked === i) cls = 'bg-red-100 border-red-500 text-red-900 border-2';
            else cls = 'bg-white border-slate-200 text-slate-400 border-2';
          }
          return <button key={i} onClick={() => submit(i)} disabled={picked !== null} className={`w-full text-right px-4 py-3 rounded-xl font-medium text-sm transition-all ${cls}`}>{o.text}</button>;
        })}
      </div>
      {picked !== null && <FeedbackPanel q={q} isCorrect={picked === correctIdx} />}
    </div>
  );
}

function TrueFalseQuestion({ q, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const correctIdx = q.options.findIndex(o => o.correct);
  const submit = (i) => { if (picked !== null) return; setPicked(i); setTimeout(() => onAnswer(i === correctIdx), 100); };
  return (
    <div className="space-y-3" dir="rtl">
      <SectionTag q={q} />
      <p className="font-bold text-slate-800 text-base leading-relaxed">{q.q}</p>
      <div className="grid gap-3">
        {q.options.map((o, i) => {
          let cls = `${COLOR_MAP[o.color] || COLOR_MAP.emerald} border-2`;
          if (picked !== null) {
            if (i === correctIdx) cls = 'bg-emerald-100 border-emerald-500 text-emerald-900 border-2';
            else if (picked === i) cls = 'bg-red-100 border-red-500 text-red-900 border-2';
            else cls = 'bg-white border-slate-200 text-slate-400 border-2';
          }
          return <button key={i} onClick={() => submit(i)} disabled={picked !== null} className={`w-full text-right px-4 py-3 rounded-xl font-bold text-sm transition-all ${cls}`}>{o.text}</button>;
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
    const newM = { ...matches, [selected]: r }; setMatches(newM); setSelected(null);
    if (Object.keys(newM).length === pairs.length) { setDone(true); const ok = pairs.every((p, i) => newM[i] === p.right); setTimeout(() => onAnswer(ok), 100); }
  };
  return (
    <div className="space-y-3" dir="rtl">
      <SectionTag q={q} />
      <p className="font-bold text-slate-800 text-base">{q.q}</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {pairs.map((p, i) => (
            <button key={i} onClick={() => pickLeft(i)} className={`w-full text-right px-3 py-2 rounded-lg border-2 text-sm font-medium transition-all ${selected === i ? 'border-primary bg-primary/10' : matches[i] ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 bg-white'}`}>{p.left}</button>
          ))}
        </div>
        <div className="space-y-2">
          {shuffled.map((r, i) => {
            const used = Object.values(matches).includes(r);
            return <button key={i} onClick={() => pickRight(r)} disabled={used} className={`w-full text-right px-3 py-2 rounded-lg border-2 text-xs font-medium transition-all ${used ? 'border-emerald-400 bg-emerald-50 opacity-60' : 'border-slate-200 bg-white hover:border-cyan-400'}`}>{r}</button>;
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
  const move = (i, dir) => { const a = [...order]; const j = i + dir; if (j < 0 || j >= a.length) return; [a[i], a[j]] = [a[j], a[i]]; setOrder(a); };
  const submit = () => { setDone(true); const ok = order.every((o, i) => o.correctPosition === i + 1); setTimeout(() => onAnswer(ok), 100); };
  return (
    <div className="space-y-3" dir="rtl">
      <SectionTag q={q} />
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
  const items = q.dragItems; const zones = q.dropZones;
  const unplaced = items.filter(it => !placed[it.id]);
  const assign = (itemId, zoneId) => {
    if (done) return;
    const newP = { ...placed, [itemId]: zoneId }; setPlaced(newP);
    if (Object.keys(newP).length === items.length) {
      setDone(true);
      const ok = items.every(it => { const z = zones.find(zn => zn.id === newP[it.id]); return z && z.accepts.includes(it.id); });
      setTimeout(() => onAnswer(ok), 100);
    }
  };
  return (
    <div className="space-y-3" dir="rtl">
      <SectionTag q={q} />
      <p className="font-bold text-slate-800 text-base">{q.q}</p>
      {unplaced.length > 0 && (
        <div className="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200">
          {unplaced.map(it => <span key={it.id} className="px-3 py-1.5 bg-white border-2 border-slate-300 rounded-lg text-sm font-medium text-slate-700">{it.text}</span>)}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {zones.map(zone => (
          <div key={zone.id} className="rounded-xl border-2 border-dashed border-slate-300 p-3 min-h-[90px] bg-slate-50/50">
            <p className="text-xs font-bold text-slate-600 mb-2">{zone.text}</p>
            <div className="flex flex-wrap gap-1 mb-2">
              {items.filter(it => placed[it.id] === zone.id).map(it => <span key={it.id} className="px-2 py-1 bg-emerald-100 border border-emerald-300 rounded-lg text-xs font-medium text-emerald-800">{it.text}</span>)}
            </div>
            {!done && unplaced.length > 0 && (
              <div className="flex flex-wrap gap-1">
                {unplaced.map(it => <button key={it.id} onClick={() => assign(it.id, zone.id)} className="px-2 py-1 bg-white border border-slate-300 rounded text-xs hover:bg-primary/10 transition-colors">+ {it.text}</button>)}
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

function ComprehensiveTest({ questions, onExit }) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const [answered, setAnswered] = useState(false);
  const [key, setKey] = useState(0);
  const [sectionScores, setSectionScores] = useState({});

  const handleAnswer = (correct) => {
    if (answered) return;
    setAnswered(true);
    if (correct) {
      setScore(s => s + 1);
      const secId = questions[idx].section_id;
      setSectionScores(prev => ({ ...prev, [secId]: (prev[secId] || 0) + 1 }));
    }
  };

  const next = () => {
    if (idx + 1 < questions.length) { setIdx(i => i + 1); setAnswered(false); setKey(k => k + 1); }
    else setDone(true);
  };

  useEffect(() => {
    if (!done) return;
    (async () => {
      try {
        const user = await base44.auth.me(); if (!user) return;
        const total = questions.length;
        await base44.entities.QuizResult.create({
          user_id: user.id, quiz_type: 'lesson_quiz', total_questions: total,
          correct_count: score, wrong_count: total - score,
          score_percentage: Math.round((score / total) * 100), errors_detail: [], weakness_detected: [],
        });
        await base44.entities.StudentActivity.create({
          user_id: user.id, activity_type: 'practice',
          label_ar: 'اختبار شامل — التربية الإسلامية الصف السادس',
          label_en: 'Comprehensive Islamic Grade 6',
          details: `${score}/${total}`,
          route: '/islamic-grade6-comprehensive',
        });
      } catch (e) { /* silent */ }
    })();
  }, [done]);

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center space-y-6 py-8" dir="rtl">
        <div className={`w-28 h-28 rounded-full flex items-center justify-center mx-auto shadow-xl ${pct >= 80 ? 'bg-emerald-100' : pct >= 60 ? 'bg-amber-100' : 'bg-rose-100'}`}>
          <Award className={`w-14 h-14 ${pct >= 80 ? 'text-emerald-600' : pct >= 60 ? 'text-amber-600' : 'text-rose-600'}`} />
        </div>
        <div>
          <h3 className="text-3xl font-bold text-slate-800">{score}/{questions.length}</h3>
          <p className="text-lg text-slate-500 mt-1">{pct}%</p>
          <p className="text-sm text-slate-400 mt-2">
            {pct >= 80 ? '🏆 ممتاز! أداء متميز في التربية الإسلامية' : pct >= 60 ? '✨ جيد جداً — واصل التطور' : '📚 راجع الدروس مجدداً وستتحسن'}
          </p>
        </div>
        <div className="max-w-md mx-auto bg-slate-50 rounded-2xl p-4 space-y-2">
          <p className="text-xs font-bold text-slate-500 mb-2">📊 النتائج حسب القسم</p>
          {ALL_SECTIONS_QUESTIONS.map(sec => {
            const secTotal = questions.filter(q => q.section_id === sec.id).length;
            const secCorrect = sectionScores[sec.id] || 0;
            const secPct = secTotal > 0 ? Math.round((secCorrect / secTotal) * 100) : 0;
            return (
              <div key={sec.id} className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-2"><span>{sec.icon}</span> {sec.title_ar}</span>
                <span className="font-bold text-slate-700">{secCorrect}/{secTotal} ({secPct}%)</span>
              </div>
            );
          })}
        </div>
        <div className="flex gap-3 justify-center">
          <button onClick={() => { setIdx(0); setScore(0); setDone(false); setAnswered(false); setSectionScores({}); setKey(k => k + 1); }}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-bold text-sm">
            <RotateCcw className="w-4 h-4" /> إعادة الاختبار
          </button>
          <button onClick={onExit} className="flex items-center gap-2 px-5 py-2.5 rounded-xl border-2 border-slate-300 font-bold text-sm text-slate-700">
            <Home className="w-4 h-4" /> القائمة الرئيسية
          </button>
        </div>
      </div>
    );
  }

  const current = questions[idx];
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between" dir="rtl">
        <span className="text-xs text-slate-500 font-medium">السؤال {idx + 1} / {questions.length}</span>
        <div className="flex items-center gap-2">
          <span className="text-xs text-emerald-600 font-bold">✓ {score}</span>
          <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${((idx + 1) / questions.length) * 100}%` }} />
          </div>
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
        <motion.button initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} onClick={next}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg">
          {idx + 1 < questions.length ? 'السؤال التالي' : 'عرض النتيجة'}
          <ChevronLeft className="w-4 h-4" />
        </motion.button>
      )}
    </div>
  );
}

export default function IslamicGrade6Comprehensive() {
  const [mode, setMode] = useState('home');
  const [testQuestions, setTestQuestions] = useState([]);

  const startTest = (count) => {
    setTestQuestions(getShuffledQuestions(count));
    setMode('test');
  };

  if (mode === 'test') {
    return (
      <div className="max-w-2xl mx-auto p-4">
        <ComprehensiveTest questions={testQuestions} onExit={() => setMode('home')} />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4 space-y-6" dir="rtl">
      <div className="relative overflow-hidden rounded-2xl px-6 py-8 text-white"
        style={{ background: 'linear-gradient(135deg, #0f766e 0%, #1e3a5f 50%, #0f2845 100%)' }}>
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '20px 20px' }} />
        <div className="relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-3xl">🕌</div>
            <div>
              <h1 className="text-xl font-bold">الاختبار الشامل — التربية الإسلامية</h1>
              <p className="text-white/70 text-sm">الصف السادس الابتدائي · جميع المحاور</p>
            </div>
          </div>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            اختبار شامل يدمج جميع بنوك التربية الإسلامية للصف السادس — يشمل التوحيد والحديث والسيرة والفقه،
            بأسئلة تفاعلية متنوعة مع شرح معلم وسبورة وقاعدة ذهبية لكل سؤال.
          </p>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white/10 rounded-xl px-3 py-2">
              <p className="text-xl font-bold">{COMPREHENSIVE_TOTAL_UNITS}</p>
              <p className="text-xs text-white/70">وحدات</p>
            </div>
            <div className="bg-white/10 rounded-xl px-3 py-2">
              <p className="text-xl font-bold">{COMPREHENSIVE_TOTAL_LESSONS}</p>
              <p className="text-xs text-white/70">دروس</p>
            </div>
            <div className="bg-white/10 rounded-xl px-3 py-2">
              <p className="text-xl font-bold">{COMPREHENSIVE_TOTAL}</p>
              <p className="text-xs text-white/70">سؤالاً</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
        <h3 className="font-bold text-slate-800 text-sm mb-3 flex items-center gap-2">
          <Play className="w-4 h-4 text-primary" /> ابدأ الاختبار الشامل
        </h3>
        <p className="text-xs text-slate-500 mb-4">اختر عدد الأسئلة التي تريد الإجابة عليها — تُختار عشوائياً من جميع الأقسام:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { count: 10, label: 'سريع', icon: '⚡', color: 'bg-cyan-500' },
            { count: 20, label: 'متوسط', icon: '🎯', color: 'bg-indigo-500' },
            { count: 30, label: 'شامل', icon: '📚', color: 'bg-emerald-500' },
            { count: COMPREHENSIVE_TOTAL, label: 'كامل', icon: '🏆', color: 'bg-amber-500' },
          ].map(opt => (
            <button key={opt.count} onClick={() => startTest(opt.count)}
              className={`relative ${opt.color} text-white rounded-xl p-4 hover:scale-105 transition-transform shadow-md`}>
              <div className="text-2xl mb-1">{opt.icon}</div>
              <p className="font-bold text-sm">{opt.count} سؤال</p>
              <p className="text-white/70 text-xs">{opt.label}</p>
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h3 className="font-bold text-slate-700 text-sm">📋 أقسام الاختبار</h3>
        {ALL_SECTIONS_QUESTIONS.map((section, i) => (
          <motion.div key={section.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
            className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                style={{ backgroundColor: `${section.color}15` }}>
                {section.icon}
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 text-base">{section.title_ar}</h4>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">{section.description_ar}</p>
                <div className="flex items-center gap-4 mt-3 text-xs">
                  <span className="flex items-center gap-1 text-slate-400">
                    <BookOpen className="w-3 h-3" /> {section.units.length} وحدات
                  </span>
                  <span className="flex items-center gap-1 text-slate-400">
                    📖 {section.units.reduce((s, u) => s + u.lessons.length, 0)} دروس
                  </span>
                  <span className="flex items-center gap-1 font-bold" style={{ color: section.color }}>
                    ❓ {section.totalQuestions} سؤال
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200">
        <h3 className="font-bold text-slate-700 text-sm mb-3">🔗 بنوك منفردة</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-sm">
          <Link to="/islamic-grade6-s1" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-center font-medium text-slate-600 hover:border-primary/40 transition-colors">
            التربية الإسلامية — ف1
          </Link>
          <Link to="/islamic-grade6-s2" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-center font-medium text-slate-600 hover:border-primary/40 transition-colors">
            التربية الإسلامية — ف2
          </Link>
          <Link to="/fiqh-grade6-s2" className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-center font-medium text-slate-600 hover:border-primary/40 transition-colors">
            الفقه — ف2
          </Link>
        </div>
      </div>

      <div className="text-center">
        <Link to="/question-bank/grades" className="text-xs text-slate-400 hover:text-primary">← العودة لبنوك الأسئلة</Link>
      </div>
    </div>
  );
}