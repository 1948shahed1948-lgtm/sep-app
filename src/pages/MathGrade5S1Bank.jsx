import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, CheckCircle2, XCircle, BookOpen, Star, RotateCcw, Home, Trophy, ArrowRight, Lightbulb, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { MATH_G5_S1_UNITS, MATH_G5_S1_LESSONS_COUNT, MATH_G5_S1_TOTAL } from '@/lib/mathG5S1';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import MathText from '@/components/shared/MathText';

function InfoCard({ q, onNext }) {
  return (
    <div className="space-y-4">
      <div className="rounded-xl bg-blue-50 border-2 border-blue-200 p-4 flex items-start gap-3">
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center">
          <Lightbulb className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-xs font-bold text-blue-700 mb-1">معلومة من الكتاب 📖</p>
          <p dir="rtl" className="text-sm text-blue-900 leading-relaxed font-medium"><MathText text={q.question_ar} /></p>
        </div>
      </div>
      <Button onClick={onNext} className="w-full bg-indigo-600 hover:bg-indigo-700 gap-2">
        فهمت ← السؤال التالي <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  );
}

function QuestionRenderer({ q, onAnswer, isAnswered }) {
  const [selected, setSelected] = useState(null);
  const [orderItems, setOrderItems] = useState(() =>
    q.type === 'ordering' ? [...q.items_ar].sort(() => Math.random() - 0.5) : null
  );
  const [dragItems, setDragItems] = useState(() =>
    q.type === 'classify' ? [...q.items_ar].sort(() => Math.random() - 0.5) : null
  );
  const [bins, setBins] = useState(() =>
    q.type === 'classify' ? q.categories_ar.map(() => []) : null
  );
  const [matchSel, setMatchSel] = useState(null);
  const [connections, setConnections] = useState({});

  const handleMC = (idx) => {
    if (isAnswered || selected !== null) return;
    setSelected(idx);
    onAnswer(idx === q.correct_index);
  };
  const handleTF = (val) => {
    if (isAnswered || selected !== null) return;
    setSelected(val);
    onAnswer(val === (q.correct_answer === 'true'));
  };
  const handleClassifyPick = (binIdx) => {
    if (!dragItems || dragItems.length === 0) return;
    const item = dragItems[0];
    const newBins = bins.map((b, i) => i === binIdx ? [...b, item] : b);
    const newItems = dragItems.slice(1);
    setBins(newBins); setDragItems(newItems);
    if (newItems.length === 0) {
      let ok = true;
      newBins.forEach((bin, ci) => bin.forEach(it => { if (it.correct_category !== ci) ok = false; }));
      onAnswer(ok);
    }
  };
  const handleMatchPick = (side, idx) => {
    if (isAnswered) return;
    if (!matchSel) { setMatchSel({ side, idx }); return; }
    if (matchSel.side === side) { setMatchSel({ side, idx }); return; }
    const rIdx = side === 'right' ? idx : matchSel.idx;
    const lIdx = side === 'left' ? idx : matchSel.idx;
    const nc = { ...connections, [rIdx]: lIdx };
    setConnections(nc); setMatchSel(null);
    if (Object.keys(nc).length === q.pairs_ar.length)
      onAnswer(Object.entries(nc).every(([r, l]) => parseInt(r) === l));
  };
  const moveItem = (from, to) => {
    const arr = [...orderItems]; const [m] = arr.splice(from, 1); arr.splice(to, 0, m); setOrderItems(arr);
  };
  const checkOrder = () => {
    const correct = q.correct_order ? q.correct_order.map(i => q.items_ar[i]) : q.items_ar;
    setSelected('checked');
    onAnswer(orderItems.join('|') === correct.join('|'));
  };

  const COLORS = ['bg-pink-50 border-pink-300 hover:border-pink-500','bg-cyan-50 border-cyan-300 hover:border-cyan-500','bg-emerald-50 border-emerald-300 hover:border-emerald-500','bg-amber-50 border-amber-300 hover:border-amber-500'];
  const catColors = ['bg-sky-500 hover:bg-sky-600','bg-orange-500 hover:bg-orange-600','bg-purple-500 hover:bg-purple-600'];
  const binColors = ['border-sky-200 bg-sky-50','border-orange-200 bg-orange-50','border-purple-200 bg-purple-50'];
  const textColors = ['text-sky-700','text-orange-700','text-purple-700'];

  if (q.type === 'multiple_choice' || q.type === 'fill_blank') return (
    <div className="space-y-2.5">
      {q.options_ar.map((opt, i) => {
        const isPicked = selected === i; const isCorrect = i === q.correct_index; const show = selected !== null;
        return (
          <button key={i} disabled={show} onClick={() => handleMC(i)}
            className={`w-full text-right px-4 py-3 rounded-xl border-2 text-sm font-medium transition-all
              ${!show ? COLORS[i % 4] + ' cursor-pointer' : ''}
              ${show && isCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : ''}
              ${show && isPicked && !isCorrect ? 'bg-red-50 border-red-400 text-red-800' : ''}
              ${show && !isPicked && !isCorrect ? 'bg-white border-slate-200 text-slate-400 opacity-70' : ''}`}>
            <span className="flex items-center gap-2">
              {show && isCorrect && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
              {show && isPicked && !isCorrect && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
              <MathText text={opt} />
            </span>
          </button>
        );
      })}
    </div>
  );

  if (q.type === 'true_false') {
    const show = selected !== null;
    return (
      <div className="flex gap-3">
        {[{ label: '✅ صحيح', val: true }, { label: '❌ خطأ', val: false }].map(({ label, val }) => {
          const isPicked = selected === val; const isCorrect = val === (q.correct_answer === 'true');
          return (
            <button key={label} disabled={show} onClick={() => handleTF(val)}
              className={`flex-1 py-4 rounded-xl border-2 text-base font-bold transition-all
                ${!show ? 'bg-white border-slate-200 hover:border-emerald-400 cursor-pointer' : ''}
                ${show && isCorrect ? 'bg-emerald-50 border-emerald-400 text-emerald-800' : ''}
                ${show && isPicked && !isCorrect ? 'bg-red-50 border-red-400 text-red-800' : ''}
                ${show && !isPicked && !isCorrect ? 'bg-slate-50 border-slate-200 text-slate-400' : ''}`}>{label}</button>
          );
        })}
      </div>
    );
  }

  if (q.type === 'classify' && dragItems !== null) {
    const done = dragItems.length === 0;
    return (
      <div className="space-y-4">
        {!done && (
          <div className="rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 p-4 text-center">
            <p className="text-xs text-amber-700 font-bold mb-2">صنِّف هذا العنصر:</p>
            <span className="text-sm font-bold text-slate-800 bg-white px-4 py-2 rounded-lg shadow-sm border"><MathText text={dragItems[0].text} /></span>
            <div className="flex flex-wrap gap-2 justify-center mt-3">
              {q.categories_ar.map((cat, i) => (
                <button key={i} onClick={() => handleClassifyPick(i)}
                  className={`px-4 py-2 rounded-lg text-white text-sm font-bold transition-colors ${catColors[i % 3]}`}>{cat}</button>
              ))}
            </div>
          </div>
        )}
        <div className={`grid gap-3 ${q.categories_ar.length === 3 ? 'grid-cols-3' : 'grid-cols-2'}`}>
          {bins && bins.map((bin, i) => (
            <div key={i} className={`rounded-xl border-2 p-3 min-h-[60px] ${binColors[i % 3]}`}>
              <p className={`text-xs font-bold mb-2 ${textColors[i % 3]}`}>{q.categories_ar[i]}</p>
              <div className="flex flex-wrap gap-1">
                {bin.map((it, j) => <span key={j} className="text-xs bg-white border rounded-full px-2 py-0.5 text-slate-700"><MathText text={it.text} /></span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (q.type === 'matching') return (
    <div className="space-y-3">
      <p className="text-xs text-slate-500 text-center">اضغط من العمود الأيمن ثم من الأيسر:</p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {q.pairs_ar.map((pair, i) => (
            <button key={i} onClick={() => handleMatchPick('right', i)}
              className={`w-full text-right px-3 py-2.5 rounded-lg border-2 text-xs font-medium transition-all
                ${matchSel?.side === 'right' && matchSel?.idx === i ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 bg-white hover:border-indigo-300'}
                ${connections[i] !== undefined ? 'border-indigo-400 bg-indigo-50' : ''}`}><MathText text={pair.right} /></button>
          ))}
        </div>
        <div className="space-y-2">
          {q.pairs_ar.map((pair, i) => (
            <button key={i} onClick={() => handleMatchPick('left', i)}
              className={`w-full text-right px-3 py-2.5 rounded-lg border-2 text-xs font-medium transition-all
                ${matchSel?.side === 'left' && matchSel?.idx === i ? 'border-indigo-500 bg-indigo-50' : 'border-slate-200 bg-white hover:border-indigo-300'}
                ${Object.values(connections).includes(i) ? 'border-indigo-400 bg-indigo-50' : ''}`}><MathText text={pair.left} /></button>
          ))}
        </div>
      </div>
    </div>
  );

  if (q.type === 'ordering' && orderItems) {
    const checked = selected === 'checked';
    return (
      <div className="space-y-3">
        <p className="text-xs text-slate-500">استخدم الأسهم لإعادة الترتيب:</p>
        {orderItems.map((item, i) => (
          <div key={item} className="flex items-center gap-2 bg-white border-2 border-slate-200 rounded-xl px-3 py-2.5">
            <span className="w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700 flex-shrink-0">{i + 1}</span>
            <span className="flex-1 text-xs sm:text-sm font-medium text-slate-800 text-right"><MathText text={item} /></span>
            <div className="flex flex-col gap-0.5">
              <button disabled={i === 0 || checked} onClick={() => moveItem(i, i - 1)} className="text-slate-400 hover:text-slate-700 disabled:opacity-30 text-xs">▲</button>
              <button disabled={i === orderItems.length - 1 || checked} onClick={() => moveItem(i, i + 1)} className="text-slate-400 hover:text-slate-700 disabled:opacity-30 text-xs">▼</button>
            </div>
          </div>
        ))}
        {!checked && <Button onClick={checkOrder} className="w-full bg-indigo-600 hover:bg-indigo-700">تحقق من الترتيب ✓</Button>}
      </div>
    );
  }
  return null;
}

function LessonRunner({ lesson, onBack }) {
  const questions = lesson.getQuestions();
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(null);
  const [done, setDone] = useState(false);
  const containerRef = useRef(null);
  const q = questions[idx];

  const handleAnswer = (correct) => {
    setAnswered(true); setLastCorrect(correct);
    if (correct) setScore(s => s + 1);
    setTimeout(() => {
      if (containerRef.current) window.scrollTo({ top: containerRef.current.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
    }, 300);
  };
  const next = () => {
    if (idx + 1 >= questions.length) { setDone(true); return; }
    setIdx(i => i + 1); setAnswered(false); setLastCorrect(null);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10 px-4 space-y-6">
        <div className="text-6xl">{pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📚'}</div>
        <h2 className="text-2xl font-bold text-slate-800">{pct >= 80 ? 'أحسنت! نتيجة رائعة' : pct >= 50 ? 'جيد! واصل التدريب' : 'راجع الدرس مجدداً'}</h2>
        <p className="text-slate-500">نتيجتك: {score} من {questions.length} ({pct}٪)</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button onClick={() => { setIdx(0); setScore(0); setAnswered(false); setLastCorrect(null); setDone(false); }} variant="outline" className="gap-2"><RotateCcw className="w-4 h-4" />إعادة</Button>
          <Button onClick={onBack} className="bg-indigo-600 hover:bg-indigo-700 gap-2"><ArrowRight className="w-4 h-4" />العودة</Button>
        </div>
      </motion.div>
    );
  }

  const isInfo = q.type === 'info';
  return (
    <div ref={containerRef} className="space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-slate-100 rounded-full h-2">
          <div className="bg-indigo-500 h-2 rounded-full transition-all duration-500" style={{ width: `${(idx / questions.length) * 100}%` }} />
        </div>
        <span className="text-xs font-medium text-slate-500">{idx + 1} / {questions.length}</span>
        <span className="text-xs font-bold text-indigo-600">✅ {score}</span>
      </div>
      <AnimatePresence mode="wait">
        <motion.div key={q.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-100 p-5 space-y-4">
          {isInfo ? <InfoCard q={q} onNext={next} /> : (
            <>
              <div className="flex items-start gap-2">
                <span className="text-xs bg-indigo-100 text-indigo-700 rounded-full px-2 py-0.5 font-bold flex-shrink-0 mt-0.5">{idx + 1}</span>
                <p className="text-base font-bold text-slate-800 leading-relaxed"><MathText text={q.question_ar} /></p>
              </div>
              {q.page_number && <span className="text-xs text-slate-400 bg-slate-50 rounded-full px-2 py-0.5">كتاب ص{q.page_number}</span>}
              <QuestionRenderer q={q} onAnswer={handleAnswer} isAnswered={answered} />
              {answered && (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
                  {lastCorrect ? (
                    <div className="space-y-2">
                      <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <p className="text-sm font-medium text-emerald-800">إجابة صحيحة! 🌟</p>
                      </div>
                      {q.golden_rule && (
                        <div className="rounded-xl bg-amber-50 border-2 border-amber-300 p-3 flex items-start gap-2">
                          <Crown className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                          <p className="text-xs font-medium text-amber-900"><MathText text={q.golden_rule} /></p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <WrongAnswerTeacher explanation={q.explanation_ar} goldenRule={q.golden_rule || q.explanation_ar} lang="ar" isRTL={true} />
                  )}
                  <Button onClick={next} className="w-full mt-3 bg-indigo-600 hover:bg-indigo-700 gap-2">
                    {idx + 1 >= questions.length ? <><Trophy className="w-4 h-4" />إنهاء الدرس</> : <>السؤال التالي<ArrowRight className="w-4 h-4" /></>}
                  </Button>
                </motion.div>
              )}
            </>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default function MathGrade5S1Bank() {
  const [activeUnit, setActiveUnit] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);

  if (activeUnit !== null && activeLesson !== null) {
    const unit = MATH_G5_S1_UNITS[activeUnit];
    const lesson = unit.lessons[activeLesson];
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 p-4 sm:p-6" dir="rtl">
        <div className="max-w-2xl mx-auto space-y-4">
          <div className={`rounded-2xl p-5 text-white bg-gradient-to-r ${unit.color}`}>
            <div className="flex items-center gap-3">
              <button onClick={() => setActiveLesson(null)} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center">
                <ChevronRight className="w-5 h-5 text-white" />
              </button>
              <div><p className="text-xs text-white/70">{unit.title_ar}</p><h1 className="text-lg font-bold">{lesson.title_ar}</h1></div>
            </div>
          </div>
          <LessonRunner lesson={lesson} onBack={() => setActiveLesson(null)} />
        </div>
      </div>
    );
  }

  if (activeUnit !== null) {
    const unit = MATH_G5_S1_UNITS[activeUnit];
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50 p-4 sm:p-6" dir="rtl">
        <div className="max-w-2xl mx-auto space-y-5">
          <div className={`rounded-2xl p-6 text-white bg-gradient-to-r ${unit.color}`}>
            <div className="flex items-center gap-3">
              <button onClick={() => setActiveUnit(null)} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center"><ChevronRight className="w-5 h-5 text-white" /></button>
              <div><h1 className="text-xl font-bold">{unit.title_ar}</h1><p className="text-sm text-white/70">{unit.subtitle_ar}</p></div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {unit.lessons.map((lesson, i) => (
              <motion.button key={lesson.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} onClick={() => setActiveLesson(i)}
                className="bg-white rounded-2xl shadow-sm border border-slate-100 p-4 text-right hover:shadow-md hover:border-indigo-200 transition-all flex items-center gap-3">
                <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 bg-slate-100"><img src={lesson.image} alt="" className="w-full h-full object-cover" /></div>
                <div className="flex-1 min-w-0"><p className="text-sm font-bold text-slate-800 leading-snug">{lesson.title_ar}</p><p className="text-xs text-slate-400 mt-0.5">{lesson.count} سؤالاً</p></div>
                <BookOpen className="w-4 h-4 text-indigo-500 flex-shrink-0" />
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-blue-50" dir="rtl">
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #312e81 0%, #4f46e5 60%, #4338ca 100%)' }}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(rgba(255,255,255,0.3) 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
        <div className="relative max-w-3xl mx-auto px-4 py-10 sm:py-14 text-center text-white">
          <Link to="/question-bank/grades" className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white/90 mb-4 transition-colors">
            <Home className="w-3.5 h-3.5" />بنك الأسئلة
          </Link>
          <div className="text-5xl mb-4">🔢</div>
          <h1 className="text-2xl sm:text-3xl font-black mb-2">رياضيات الصف الخامس — الفصل الأول</h1>
          <p className="text-white/80 text-sm">بنك شامل من الكتاب المدرسي · ص١–٢٠٩ · ستة فصول</p>
          <div className="flex justify-center gap-4 mt-5 text-xs flex-wrap">
            <div className="bg-white/10 rounded-xl px-4 py-2"><p className="font-bold text-lg">{MATH_G5_S1_UNITS.length}</p><p className="text-white/70">وحدات</p></div>
            <div className="bg-white/10 rounded-xl px-4 py-2"><p className="font-bold text-lg">{MATH_G5_S1_LESSONS_COUNT}</p><p className="text-white/70">دروس</p></div>
            <div className="bg-white/10 rounded-xl px-4 py-2"><p className="font-bold text-lg">{MATH_G5_S1_TOTAL}</p><p className="text-white/70">سؤالاً</p></div>
          </div>
        </div>
      </div>
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
        {MATH_G5_S1_UNITS.map((unit, i) => (
          <motion.button key={unit.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} onClick={() => setActiveUnit(i)}
            className="w-full bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md hover:border-indigo-200 transition-all text-right">
            <div className="flex items-center gap-4 p-5">
              <div className={`w-14 h-14 rounded-xl flex-shrink-0 bg-gradient-to-br ${unit.color} flex items-center justify-center text-3xl`}>{unit.icon}</div>
              <div className="flex-1">
                <h2 className="text-base font-bold text-slate-800">{unit.title_ar}</h2>
                <p className="text-xs text-slate-500 mt-0.5">{unit.subtitle_ar}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs bg-indigo-100 text-indigo-700 rounded-full px-2 py-0.5">{unit.lessons.length} دروس</span>
                  <span className="text-xs bg-blue-100 text-blue-700 rounded-full px-2 py-0.5">{unit.lessons.reduce((s, l) => s + l.count, 0)} سؤالاً</span>
                </div>
              </div>
              <Star className="w-5 h-5 text-indigo-400 flex-shrink-0" />
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}