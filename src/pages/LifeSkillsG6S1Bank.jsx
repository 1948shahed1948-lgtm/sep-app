import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { UNITS, TOTAL_QUESTIONS } from '@/lib/lifeSkillsG6S1Questions';
import { Home, ChevronRight, Star, Trophy, RotateCcw, ArrowRight, CheckCircle2, XCircle, BookOpen } from 'lucide-react';

// ── الألوان الثابتة للبدائل ──
const OPTION_COLORS = [
  'border-pink-400 bg-pink-50 hover:bg-pink-100',
  'border-sky-400 bg-sky-50 hover:bg-sky-100',
  'border-emerald-400 bg-emerald-50 hover:bg-emerald-100',
  'border-amber-400 bg-amber-50 hover:bg-amber-100',
];

// ── زخرفة خلفية ──
function IslamicBg() {
  return (
    <div className="absolute inset-0 opacity-[0.04] pointer-events-none overflow-hidden">
      {['top-4 left-4','top-4 right-4','bottom-4 left-4','bottom-4 right-4'].map((pos,i) => (
        <span key={i} className={`absolute text-5xl text-amber-800 ${pos}`}>✦</span>
      ))}
    </div>
  );
}

// ── ختم ذهبي ──
function GoldenSeal() {
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-amber-300 to-amber-600 flex items-center justify-center shadow-md animate-pulse flex-shrink-0">
      <span className="text-sm">⭐</span>
    </div>
  );
}

// ── معلم SVG على السبورة ──
function TeacherBlackboard({ explanation, goldenRule }) {
  const [typed, setTyped] = useState('');
  const text = explanation || '';
  useEffect(() => {
    setTyped('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) { setTyped(text.slice(0, i + 1)); i++; }
      else clearInterval(interval);
    }, 28);
    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-4 space-y-3">
      {/* معلم SVG */}
      <div className="flex items-start gap-3">
        <div className="flex-shrink-0">
          <svg width="64" height="80" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="32" cy="14" r="12" fill="#f5c897"/>
            <path d="M16 30 Q32 24 48 30 L50 70 Q32 75 14 70 Z" fill="#2d5a87"/>
            <path d="M48 30 Q58 40 56 55" stroke="#2d5a87" strokeWidth="5" strokeLinecap="round"/>
            <path d="M56 55 Q62 58 60 62" stroke="#f5c897" strokeWidth="4" strokeLinecap="round"/>
            <motion.path
              d="M58 60 L62 56 L64 59"
              stroke="#fff" strokeWidth="2" strokeLinecap="round"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.2 }}
            />
            <path d="M20 50 Q16 60 18 68" stroke="#f5c897" strokeWidth="4" strokeLinecap="round"/>
          </svg>
        </div>
        {/* السبورة */}
        <div className="flex-1 rounded-xl bg-green-900 border-4 border-amber-900 p-3 min-h-[80px] relative shadow-lg">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-amber-800 rounded"/>
          <p className="text-white font-mono text-sm leading-relaxed whitespace-pre-wrap" style={{ textShadow: '0 0 6px rgba(255,255,255,0.3)' }}>
            {typed}
            <span className="animate-pulse">|</span>
          </p>
        </div>
      </div>
      {/* القاعدة الذهبية */}
      {goldenRule && (
        <div className="rounded-xl border-2 border-amber-400 bg-amber-50 p-3">
          <div className="flex items-center gap-2 mb-1">
            <span className="text-lg">👑</span>
            <span className="font-bold text-amber-800 text-sm">القاعدة الذهبية</span>
          </div>
          <p className="text-amber-900 text-sm font-semibold">{goldenRule}</p>
        </div>
      )}
    </motion.div>
  );
}

// ── عارض السؤال ──
function QuestionView({ q, onAnswer, isAnswered, lastCorrect }) {
  const [selected, setSelected] = useState(null);
  const [orderItems, setOrderItems] = useState(() => q.type === 'ordering' ? [...q.items_ar].sort(() => Math.random() - 0.5) : null);
  const [classifyRemain, setClassifyRemain] = useState(() => q.type === 'classify' ? [...q.items_ar].sort(() => Math.random() - 0.5) : null);
  const [classifyBins, setClassifyBins] = useState(() => q.type === 'classify' ? q.categories_ar.map(() => []) : null);
  const [matchSel, setMatchSel] = useState(null);
  const [matchDone, setMatchDone] = useState({});

  const handleMC = (i) => {
    if (isAnswered || selected !== null) return;
    setSelected(i);
    onAnswer(i === q.correct_index);
  };

  const handleTF = (val) => {
    if (isAnswered || selected !== null) return;
    setSelected(val);
    onAnswer(val === q.correct_answer);
  };

  const handleClassify = (binIdx) => {
    if (!classifyRemain || classifyRemain.length === 0) return;
    const item = classifyRemain[0];
    const newBins = classifyBins.map((b, i) => i === binIdx ? [...b, item] : b);
    const newRemain = classifyRemain.slice(1);
    setClassifyBins(newBins);
    setClassifyRemain(newRemain);
    if (newRemain.length === 0) {
      let ok = true;
      newBins.forEach((bin, ci) => bin.forEach(it => { if (it.correct_category !== ci) ok = false; }));
      onAnswer(ok);
    }
  };

  const handleMatch = (side, idx) => {
    if (isAnswered) return;
    if (!matchSel) { setMatchSel({ side, idx }); return; }
    if (matchSel.side === side) { setMatchSel({ side, idx }); return; }
    const rIdx = side === 'right' ? idx : matchSel.idx;
    const lIdx = side === 'left' ? idx : matchSel.idx;
    const nd = { ...matchDone, [rIdx]: lIdx };
    setMatchDone(nd);
    setMatchSel(null);
    if (Object.keys(nd).length === q.pairs_ar.length)
      onAnswer(Object.entries(nd).every(([r, l]) => parseInt(r) === l));
  };

  const moveItem = (from, dir) => {
    const arr = [...orderItems];
    const to = from + dir;
    if (to < 0 || to >= arr.length) return;
    [arr[from], arr[to]] = [arr[to], arr[from]];
    setOrderItems(arr);
  };

  const checkOrder = () => {
    const correct = q.correct_order ? q.correct_order.map(i => q.items_ar[i]) : q.items_ar;
    setSelected('checked');
    onAnswer(JSON.stringify(orderItems) === JSON.stringify(correct));
  };

  if (q.type === 'multiple_choice') return (
    <div className="space-y-2.5">
      {q.options_ar.map((opt, i) => {
        const picked = selected === i, correct = i === q.correct_index;
        const show = selected !== null;
        return (
          <button key={i} disabled={show} onClick={() => handleMC(i)}
            className={`w-full text-right px-4 py-3 rounded-xl border-2 text-sm font-bold transition-all cursor-pointer flex items-center gap-2
              ${!show ? OPTION_COLORS[i % 4] + ' cursor-pointer' : ''}
              ${show && correct ? 'bg-emerald-50 border-emerald-500 text-emerald-900' : ''}
              ${show && picked && !correct ? 'bg-red-50 border-red-500 text-red-900' : ''}
              ${show && !picked && !correct ? 'border-slate-200 bg-white opacity-50' : ''}`}>
            <span className="w-7 h-7 rounded-full bg-white/80 flex items-center justify-center text-xs font-bold flex-shrink-0 border border-current">
              {['أ','ب','ج','د'][i]}
            </span>
            <span className="flex-1">{opt}</span>
            {show && correct && <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
            {show && picked && !correct && <XCircle className="w-4 h-4 text-red-500 flex-shrink-0" />}
          </button>
        );
      })}
    </div>
  );

  if (q.type === 'true_false') {
    const show = selected !== null;
    return (
      <div className="flex gap-3">
        {[{label:'✅ صحيح',val:true},{label:'❌ خطأ',val:false}].map(({label,val}) => {
          const picked = selected === val, correct = val === q.correct_answer;
          return (
            <button key={label} disabled={show} onClick={() => handleTF(val)}
              className={`flex-1 py-4 rounded-xl border-2 text-base font-bold transition-all
                ${!show ? 'bg-white border-slate-200 hover:border-emerald-400 cursor-pointer' : ''}
                ${show && correct ? 'bg-emerald-50 border-emerald-400 text-emerald-900' : ''}
                ${show && picked && !correct ? 'bg-red-50 border-red-400 text-red-900' : ''}
                ${show && !picked && !correct ? 'opacity-40 border-slate-200' : ''}`}>
              {label}
            </button>
          );
        })}
      </div>
    );
  }

  if (q.type === 'classify' && classifyRemain !== null) {
    const catColors = ['border-sky-300 bg-sky-50','border-orange-300 bg-orange-50','border-purple-300 bg-purple-50','border-teal-300 bg-teal-50'];
    const btnColors = ['bg-sky-500 hover:bg-sky-600','bg-orange-500 hover:bg-orange-600','bg-purple-500 hover:bg-purple-600','bg-teal-500 hover:bg-teal-600'];
    return (
      <div className="space-y-3">
        {classifyRemain.length > 0 && (
          <div className="rounded-xl border-2 border-dashed border-amber-300 bg-amber-50 p-4 text-center">
            <p className="text-xs text-amber-700 font-bold mb-2">📦 صنّف هذا العنصر:</p>
            <span className="text-base font-bold text-slate-800 bg-white px-4 py-2 rounded-lg shadow border">{classifyRemain[0].text}</span>
            <div className="flex flex-wrap gap-2 justify-center mt-3">
              {q.categories_ar.map((cat, i) => (
                <button key={i} onClick={() => handleClassify(i)}
                  className={`px-4 py-2 rounded-lg text-white text-sm font-bold transition-colors ${btnColors[i % 4]}`}>
                  {cat}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className={`grid gap-2`} style={{ gridTemplateColumns: `repeat(${Math.min(q.categories_ar.length,3)}, 1fr)` }}>
          {classifyBins.map((bin, i) => (
            <div key={i} className={`rounded-xl border-2 p-3 min-h-[60px] ${catColors[i % 4]}`}>
              <p className="text-xs font-bold mb-2 text-slate-600">{q.categories_ar[i]}</p>
              <div className="flex flex-wrap gap-1">
                {bin.map((it, j) => <span key={j} className="text-xs bg-white border rounded-full px-2 py-0.5">{it.text}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (q.type === 'ordering' && orderItems) {
    const checked = selected === 'checked';
    return (
      <div className="space-y-2">
        <p className="text-xs text-slate-500">استخدم الأسهم لإعادة الترتيب الصحيح:</p>
        {orderItems.map((item, i) => (
          <div key={item} className="flex items-center gap-2 bg-white border-2 border-slate-200 rounded-xl px-3 py-2">
            <span className="w-7 h-7 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700 flex-shrink-0">{i + 1}</span>
            <span className="flex-1 text-sm font-medium text-slate-800">{item}</span>
            <div className="flex flex-col gap-0.5">
              <button disabled={i === 0 || checked} onClick={() => moveItem(i, -1)} className="text-slate-400 hover:text-slate-700 disabled:opacity-20 text-xs">▲</button>
              <button disabled={i === orderItems.length - 1 || checked} onClick={() => moveItem(i, 1)} className="text-slate-400 hover:text-slate-700 disabled:opacity-20 text-xs">▼</button>
            </div>
          </div>
        ))}
        {!checked && (
          <button onClick={checkOrder} className="w-full py-2.5 bg-emerald-700 hover:bg-emerald-800 text-white rounded-xl font-bold text-sm transition-colors">
            ✓ تحقق من الترتيب
          </button>
        )}
      </div>
    );
  }

  if (q.type === 'matching') {
    return (
      <div className="space-y-3">
        <p className="text-xs text-slate-500 text-center">اضغط من العمود الأيمن ثم من الأيسر لتوصيلهما:</p>
        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-2">
            {q.pairs_ar.map((p, i) => (
              <button key={i} onClick={() => handleMatch('right', i)}
                className={`w-full text-right px-3 py-2 rounded-lg border-2 text-xs font-medium transition-all
                  ${matchSel?.side==='right'&&matchSel?.idx===i?'border-emerald-500 bg-emerald-50':'border-slate-200 bg-white hover:border-emerald-300'}
                  ${matchDone[i]!==undefined?'border-emerald-400 bg-emerald-50':''}`}>{p.right}</button>
            ))}
          </div>
          <div className="space-y-2">
            {q.pairs_ar.map((p, i) => (
              <button key={i} onClick={() => handleMatch('left', i)}
                className={`w-full text-right px-3 py-2 rounded-lg border-2 text-xs font-medium transition-all
                  ${matchSel?.side==='left'&&matchSel?.idx===i?'border-emerald-500 bg-emerald-50':'border-slate-200 bg-white hover:border-emerald-300'}
                  ${Object.values(matchDone).includes(i)?'border-emerald-400 bg-emerald-50':''}`}>{p.left}</button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}

// ── شاشة تشغيل الدرس ──
function LessonRunner({ lesson, unitColor, onBack }) {
  const [idx, setIdx] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [lastCorrect, setLastCorrect] = useState(null);
  const [done, setDone] = useState(false);
  const questions = lesson.questions;
  const q = questions[idx];

  const handleAnswer = (correct) => {
    setAnswered(true);
    setLastCorrect(correct);
    if (correct) setScore(s => s + 1);
  };

  const next = () => {
    if (idx + 1 >= questions.length) { setDone(true); return; }
    setIdx(i => i + 1);
    setAnswered(false);
    setLastCorrect(null);
  };

  if (done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-10 px-4 space-y-5">
        <div className="text-6xl">{pct >= 80 ? '🏆' : pct >= 50 ? '👍' : '📚'}</div>
        <h2 className="text-2xl font-bold text-slate-800">{pct >= 80 ? 'أحسنت! نتيجة رائعة' : pct >= 50 ? 'جيد! واصل التدريب' : 'راجع الدرس مجدداً'}</h2>
        <p className="text-slate-500 text-lg">نتيجتك: {score} من {questions.length} ({pct}٪)</p>
        <div className="w-full bg-slate-100 rounded-full h-3">
          <div className="h-3 rounded-full transition-all" style={{ width: `${pct}%`, backgroundColor: unitColor }}/>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={() => { setIdx(0); setScore(0); setAnswered(false); setLastCorrect(null); setDone(false); }}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl border-2 border-slate-200 bg-white hover:bg-slate-50 font-bold text-slate-700 transition-colors">
            <RotateCcw className="w-4 h-4" /> إعادة
          </button>
          <button onClick={onBack}
            className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-white font-bold transition-colors"
            style={{ backgroundColor: unitColor }}>
            <ArrowRight className="w-4 h-4" /> العودة للدرس
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-4" dir="rtl">
      {/* شريط التقدم */}
      <div className="flex items-center gap-3">
        <div className="flex-1 bg-slate-100 rounded-full h-2.5">
          <div className="h-2.5 rounded-full transition-all duration-500" style={{ width: `${(idx / questions.length) * 100}%`, backgroundColor: unitColor }}/>
        </div>
        <span className="text-xs font-bold text-slate-500">{idx + 1} / {questions.length}</span>
        <span className="text-xs font-bold text-emerald-700">✅ {score}</span>
        <GoldenSeal />
      </div>

      <AnimatePresence mode="wait">
        <motion.div key={q.id} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
          className="bg-white rounded-2xl shadow border border-slate-100 p-5 space-y-4">
          {/* رقم الصفحة */}
          <div className="flex items-center justify-between">
            <span className="text-xs bg-slate-100 text-slate-500 rounded-full px-3 py-1">صفحة {q.page}</span>
            <span className="text-xs bg-amber-100 text-amber-700 rounded-full px-3 py-1">{q.bloom === 'remember' ? 'تذكّر' : q.bloom === 'understand' ? 'فهم' : q.bloom === 'apply' ? 'تطبيق' : q.bloom === 'analyze' ? 'تحليل' : q.bloom === 'evaluate' ? 'تقويم' : 'تركيب'}</span>
          </div>
          <p className="text-base font-bold text-slate-800 leading-relaxed">{q.question_ar}</p>
          <QuestionView q={q} onAnswer={handleAnswer} isAnswered={answered} lastCorrect={lastCorrect} />
          {answered && (
            <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}>
              {lastCorrect ? (
                <div className="rounded-xl bg-emerald-50 border border-emerald-200 p-3 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0"/>
                  <p className="text-sm font-bold text-emerald-800">إجابة صحيحة! 🌟</p>
                </div>
              ) : (
                <TeacherBlackboard explanation={q.explanation_ar} goldenRule={q.golden_rule_ar} />
              )}
              {lastCorrect && q.explanation_ar && (
                <div className="mt-3 rounded-xl bg-emerald-50 border border-emerald-100 p-3">
                  <p className="text-xs font-bold text-emerald-700 mb-1">💡 الشرح:</p>
                  <p className="text-sm text-emerald-900">{q.explanation_ar}</p>
                  {q.golden_rule_ar && (
                    <div className="mt-2 rounded-lg bg-amber-50 border border-amber-200 p-2">
                      <p className="text-xs font-bold text-amber-700">👑 {q.golden_rule_ar}</p>
                    </div>
                  )}
                </div>
              )}
              <button onClick={next}
                className="w-full mt-3 py-3 rounded-xl text-white font-bold text-sm transition-colors flex items-center justify-center gap-2"
                style={{ backgroundColor: unitColor }}>
                {idx + 1 >= questions.length ? <><Trophy className="w-4 h-4" />إنهاء الدرس</> : <>السؤال التالي<ArrowRight className="w-4 h-4" /></>}
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// ── الصفحة الرئيسية ──
export default function LifeSkillsG6S1Bank() {
  const [activeUnit, setActiveUnit] = useState(null);
  const [activeLesson, setActiveLesson] = useState(null);

  // شاشة الدرس
  if (activeUnit !== null && activeLesson !== null) {
    const unit = UNITS[activeUnit];
    const lesson = unit.lessons[activeLesson];
    return (
      <div className="min-h-screen p-4 sm:p-6 relative" style={{ background: '#faf8f0' }} dir="rtl">
        <IslamicBg />
        <div className="relative max-w-2xl mx-auto space-y-4">
          <div className="rounded-2xl p-5 text-white" style={{ background: `linear-gradient(135deg, ${unit.color}dd, ${unit.color}99)` }}>
            <div className="flex items-center gap-3">
              <button onClick={() => setActiveLesson(null)} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <ChevronRight className="w-5 h-5 text-white"/>
              </button>
              <div>
                <p className="text-xs text-white/70">{unit.title_ar}</p>
                <h1 className="text-lg font-bold">{lesson.title_ar}</h1>
              </div>
            </div>
          </div>
          <LessonRunner lesson={lesson} unitColor={unit.color} onBack={() => setActiveLesson(null)} />
        </div>
      </div>
    );
  }

  // شاشة الوحدة
  if (activeUnit !== null) {
    const unit = UNITS[activeUnit];
    return (
      <div className="min-h-screen p-4 sm:p-6 relative" style={{ background: '#faf8f0' }} dir="rtl">
        <IslamicBg />
        <div className="relative max-w-2xl mx-auto space-y-5">
          <div className="rounded-2xl p-6 text-white shadow-xl" style={{ background: `linear-gradient(135deg, ${unit.color}, ${unit.color}bb)` }}>
            <div className="flex items-center gap-3">
              <button onClick={() => setActiveUnit(null)} className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors">
                <ChevronRight className="w-5 h-5 text-white"/>
              </button>
              <div>
                <h1 className="text-xl font-bold">الوحدة {unit.id}: {unit.title_ar}</h1>
                <p className="text-sm text-white/70">{unit.lessons.length} درس</p>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {unit.lessons.map((lesson, i) => (
              <motion.button key={lesson.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }}
                onClick={() => setActiveLesson(i)}
                className="bg-white rounded-2xl shadow border border-slate-100 p-5 text-right hover:shadow-md hover:border-slate-200 transition-all flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center text-white text-xl shadow"
                  style={{ backgroundColor: unit.color }}>
                  <BookOpen className="w-6 h-6"/>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-slate-800 leading-snug">{lesson.title_ar}</p>
                  <p className="text-xs text-slate-400 mt-1">{lesson.questions.length} سؤالاً</p>
                </div>
                <Star className="w-4 h-4 text-amber-400 flex-shrink-0"/>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // الغلاف الرئيسي
  return (
    <div className="min-h-screen relative" style={{ background: '#faf8f0' }} dir="rtl">
      {/* الهيدر */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #2d5016 0%, #3d7a20 50%, #c8961e 100%)' }}>
        <IslamicBg />
        <div className="relative max-w-3xl mx-auto px-4 py-12 text-center text-white">
          <Link to="/question-bank/grades" className="inline-flex items-center gap-1.5 text-xs text-white/60 hover:text-white/90 mb-5 transition-colors">
            <Home className="w-3.5 h-3.5"/>بنك الأسئلة
          </Link>
          <div className="text-5xl mb-4">🌿</div>
          <h1 className="text-2xl sm:text-3xl font-black mb-2">المهارات الحياتية والأسرية</h1>
          <p className="text-white/80 text-sm mb-1">الصف السادس الابتدائي · الفصل الدراسي الأول</p>
          <p className="text-white/60 text-xs">منهاج وزارة التعليم — المملكة العربية السعودية ١٤٤٧هـ</p>
          <div className="flex justify-center gap-4 mt-6 text-xs flex-wrap">
            <div className="bg-white/10 rounded-xl px-4 py-2 border border-white/20">
              <p className="font-bold text-lg">{UNITS.length}</p><p className="text-white/70">وحدات</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2 border border-white/20">
              <p className="font-bold text-lg">{UNITS.reduce((s,u)=>s+u.lessons.length,0)}</p><p className="text-white/70">دروس</p>
            </div>
            <div className="bg-white/10 rounded-xl px-4 py-2 border border-white/20">
              <p className="font-bold text-lg">{TOTAL_QUESTIONS}</p><p className="text-white/70">سؤالاً</p>
            </div>
          </div>
        </div>
      </div>

      {/* قائمة الوحدات */}
      <div className="max-w-3xl mx-auto px-4 py-8 space-y-4">
        <h2 className="text-lg font-bold text-slate-700 mb-4">📚 اختر الوحدة الدراسية</h2>
        {UNITS.map((unit, i) => (
          <motion.button key={unit.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
            onClick={() => setActiveUnit(i)}
            className="w-full bg-white rounded-2xl shadow border border-slate-100 overflow-hidden hover:shadow-lg hover:border-slate-200 transition-all text-right">
            <div className="flex items-center gap-4 p-5">
              <div className="w-16 h-16 rounded-xl flex-shrink-0 flex items-center justify-center text-3xl shadow"
                style={{ backgroundColor: unit.color + '22', border: `2px solid ${unit.color}44` }}>
                {unit.icon}
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-400 mb-0.5">الوحدة {unit.id}</p>
                <h2 className="text-base font-bold text-slate-800">{unit.title_ar}</h2>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs rounded-full px-3 py-0.5 font-medium text-white" style={{ backgroundColor: unit.color }}>
                    {unit.lessons.length} {unit.lessons.length === 1 ? 'درس' : 'دروس'}
                  </span>
                  <span className="text-xs bg-amber-100 text-amber-700 rounded-full px-3 py-0.5">
                    {unit.lessons.reduce((s,l)=>s+l.questions.length,0)} سؤالاً
                  </span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-1">
                <GoldenSeal />
                <ChevronRight className="w-5 h-5 text-slate-300"/>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}