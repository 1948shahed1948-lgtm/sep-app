import React, { useState, useMemo, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, CheckCircle2, Crown, BookOpen, ChevronRight, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLang } from '@/lib/i18n';
import PageHeader from '@/components/layout/PageHeader';
import WrongAnswerTeacher from '@/components/aptitude/WrongAnswerTeacher';
import { useScrollTopOnChange } from '@/hooks/useScrollTopOnChange';
import { TAJWEED_G5_S2_UNITS, TAJWEED_G5_S2_TOTAL } from '@/lib/tajweedGrade5S2Bank';

const toAr = (n) => String(n).replace(/[0-9]/g, (d) => '٠١٢٣٤٥٦٧٨٩'[d]);

// ─── نعم / لا ───────────────────────────────────────────────
function YesNoQ({ q, onAnswer, answered, userAns }) {
  const opts = [true, false];
  const labels = ['✅ نعم، صحيح', '❌ لا، خطأ'];
  return (
    <div className="space-y-4" dir="rtl">
      <p className="text-base font-bold text-slate-800 leading-relaxed">{q.q}</p>
      <div className="grid grid-cols-2 gap-3">
        {opts.map((val, i) => {
          const isCorrect = val === q.correct;
          const isPicked = userAns === val;
          let cls = 'border-2 rounded-xl py-4 text-base font-bold transition-all ';
          if (!answered) cls += 'border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
          else if (isPicked) cls += 'border-rose-400 bg-rose-50 text-rose-800';
          else cls += 'border-slate-200 opacity-50';
          return <button key={i} disabled={answered} onClick={() => onAnswer(val)} className={cls}>{labels[i]}</button>;
        })}
      </div>
    </div>
  );
}

// ─── اختيار من متعدد ──────────────────────────────────────
function MCQ({ q, onAnswer, answered, userAns }) {
  return (
    <div className="space-y-4" dir="rtl">
      <p className="text-base font-bold text-slate-800 leading-relaxed">{q.q}</p>
      <div className="grid grid-cols-1 gap-2">
        {q.options.map((opt, i) => {
          const isCorrect = i === q.correct;
          const isPicked = userAns === i;
          let cls = 'border-2 rounded-xl px-4 py-3 text-right text-sm font-medium transition-all ';
          if (!answered) cls += 'border-slate-200 hover:border-blue-400 hover:bg-blue-50 cursor-pointer';
          else if (isCorrect) cls += 'border-emerald-400 bg-emerald-50 text-emerald-800';
          else if (isPicked) cls += 'border-rose-400 bg-rose-50 text-rose-800';
          else cls += 'border-slate-200 opacity-50';
          return (
            <button key={i} disabled={answered} onClick={() => onAnswer(i)} className={cls}>
              <span className="font-bold text-slate-400 ml-2">{toAr(i + 1)}.</span> {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}

// ─── ترتيب ──────────────────────────────────────────────────
function OrderingQ({ q, onAnswer, answered }) {
  const [items, setItems] = useState(() => [...q.items].sort(() => Math.random() - 0.5));
  const [checked, setChecked] = useState(false);

  const moveUp = (i) => { if (i === 0) return; const a = [...items]; [a[i-1],a[i]]=[a[i],a[i-1]]; setItems(a); };
  const moveDown = (i) => { if (i===items.length-1) return; const a=[...items]; [a[i],a[i+1]]=[a[i+1],a[i]]; setItems(a); };

  const check = () => {
    const correct = q.correct_order.map((idx) => q.items[idx]);
    setChecked(true);
    onAnswer(items.every((it, i) => it === correct[i]) ? '1' : '0');
  };

  return (
    <div className="space-y-3" dir="rtl">
      <p className="text-sm font-bold text-slate-700">{q.q}</p>
      <p className="text-xs text-slate-400">💡 استخدم الأسهم لترتيب العناصر بالترتيب الصحيح</p>
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={item} className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-xl px-3 py-2">
            <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 text-xs font-bold flex items-center justify-center flex-shrink-0">{toAr(i+1)}</span>
            <span className="flex-1 text-sm text-slate-800">{item}</span>
            {!answered && !checked && (
              <div className="flex flex-col gap-0.5">
                <button onClick={() => moveUp(i)} className="text-slate-400 hover:text-blue-600 text-xs leading-none">▲</button>
                <button onClick={() => moveDown(i)} className="text-slate-400 hover:text-blue-600 text-xs leading-none">▼</button>
              </div>
            )}
          </div>
        ))}
      </div>
      {!checked && !answered && <Button onClick={check} className="w-full">تحقَّق من الترتيب</Button>}
    </div>
  );
}

// ─── مطابقة ────────────────────────────────────────────────
function MatchingQ({ q, onAnswer, answered }) {
  const [selected, setSelected] = useState(null);
  const [connections, setConnections] = useState({});
  const [checked, setChecked] = useState(false);

  const leftItems = q.pairs.map((p) => p.left);
  const rightItems = q.pairs.map((p) => p.right);
  const shuffledRight = useMemo(() => [...rightItems].sort(() => Math.random() - 0.5), []);

  const handleLeft = (l) => { if (checked) return; setSelected({ side: 'left', val: l }); };
  const handleRight = (r) => {
    if (checked || !selected?.side) return;
    setConnections((c) => ({ ...c, [selected.val]: r }));
    setSelected(null);
  };

  const check = () => {
    setChecked(true);
    onAnswer(q.pairs.every((p) => connections[p.left] === p.right) ? '1' : '0');
  };

  return (
    <div className="space-y-3" dir="rtl">
      <p className="text-sm font-bold text-slate-700">{q.q}</p>
      <p className="text-xs text-slate-400">💡 اضغط على العمود الأيمن ثم اختَر ما يناسبه من العمود الأيسر</p>
      <div className="grid grid-cols-2 gap-2">
        <div className="space-y-2">
          {leftItems.map((l) => (
            <button key={l} onClick={() => handleLeft(l)} disabled={checked}
              className={`w-full text-xs px-2 py-2 rounded-lg border-2 text-right transition-all ${selected?.val===l ? 'border-blue-500 bg-blue-50' : connections[l] ? 'border-emerald-400 bg-emerald-50' : 'border-slate-200 hover:border-blue-300'}`}>
              {l} {connections[l] && <span className="text-emerald-600 text-[10px]"> ← {connections[l]}</span>}
            </button>
          ))}
        </div>
        <div className="space-y-2">
          {shuffledRight.map((r) => (
            <button key={r} onClick={() => handleRight(r)} disabled={checked}
              className={`w-full text-xs px-2 py-2 rounded-lg border-2 text-right transition-all ${selected?.side==='left' ? 'border-amber-400 bg-amber-50 cursor-pointer' : 'border-slate-200'}`}>
              {r}
            </button>
          ))}
        </div>
      </div>
      {!checked && !answered && Object.keys(connections).length === leftItems.length && (
        <Button onClick={check} className="w-full">تحقَّق من الوصل</Button>
      )}
    </div>
  );
}

// ─── تصنيف ──────────────────────────────────────────────────
function ClassifyQ({ q, onAnswer, answered }) {
  const [bins, setBins] = useState(() => q.categories.reduce((a, c) => ({ ...a, [c]: [] }), {}));
  const [pool, setPool] = useState(() => [...q.items].sort(() => Math.random() - 0.5));
  const [checked, setChecked] = useState(false);

  const assign = (item, cat) => {
    if (checked) return;
    setPool((p) => p.filter((x) => x.text !== item.text));
    setBins((b) => ({ ...b, [cat]: [...b[cat], item] }));
  };
  const removeFromBin = (item, cat) => {
    if (checked) return;
    setBins((b) => ({ ...b, [cat]: b[cat].filter((x) => x.text !== item.text) }));
    setPool((p) => [...p, item]);
  };
  const check = () => {
    const correct = q.categories.every((cat, ci) =>
      bins[cat].every((it) => it.correct_cat === ci) &&
      q.items.filter((it) => it.correct_cat === ci).every((it) => bins[cat].find((b) => b.text === it.text))
    );
    setChecked(true);
    onAnswer(correct ? '1' : '0');
  };

  return (
    <div className="space-y-3" dir="rtl">
      <p className="text-sm font-bold text-slate-700">{q.q}</p>
      <p className="text-xs text-slate-400">💡 اضغط على العنصر واختَر فئته</p>
      {pool.length > 0 && (
        <div className="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-xl border border-dashed border-slate-300">
          {pool.map((item) => (
            <div key={item.text} className="relative group">
              <span className="inline-block bg-white border border-slate-200 rounded-lg px-2 py-1 text-xs font-medium text-slate-700">{item.text}</span>
              <div className="absolute top-7 right-0 z-10 hidden group-hover:flex flex-col gap-1 bg-white border border-slate-200 rounded-lg shadow-lg p-1 w-48">
                {q.categories.map((cat) => (
                  <button key={cat} onClick={() => assign(item, cat)} className="text-xs px-2 py-1 rounded hover:bg-blue-50 text-right">{cat}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
      <div className={`grid gap-3 ${q.categories.length > 3 ? 'grid-cols-2' : 'grid-cols-2'}`}>
        {q.categories.map((cat, ci) => (
          <div key={cat} className="bg-slate-50 rounded-xl border-2 border-dashed border-slate-300 p-2 min-h-[70px]">
            <p className="text-xs font-bold text-slate-600 mb-2">{cat}</p>
            <div className="flex flex-wrap gap-1">
              {bins[cat].map((item) => (
                <button key={item.text} onClick={() => removeFromBin(item, cat)} disabled={checked}
                  className={`text-xs px-2 py-1 rounded-lg border font-medium ${checked ? (item.correct_cat===ci ? 'bg-emerald-100 border-emerald-400 text-emerald-800' : 'bg-rose-100 border-rose-400 text-rose-800') : 'bg-blue-100 border-blue-300 text-blue-800'}`}>
                  {item.text}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
      {!checked && !answered && pool.length === 0 && (
        <Button onClick={check} className="w-full">تحقَّق من التَّصنيف</Button>
      )}
    </div>
  );
}

// ─── ترتيب جملة ────────────────────────────────────────────
function WordOrderQ({ q, onAnswer, answered }) {
  const [slots, setSlots] = useState([]);
  const [pool, setPool] = useState(() => [...q.words].sort(() => Math.random() - 0.5));
  const [checked, setChecked] = useState(false);

  const addWord = (w) => {
    if (checked) return;
    setPool((p) => { const idx = p.indexOf(w); return [...p.slice(0,idx),...p.slice(idx+1)]; });
    setSlots((s) => [...s, w]);
  };
  const removeWord = (i) => {
    if (checked) return;
    const w = slots[i];
    setPool((p) => [...p, w]);
    setSlots((s) => [...s.slice(0,i),...s.slice(i+1)]);
  };
  const check = () => {
    const s = slots.join(' ');
    setChecked(true);
    onAnswer((s === q.correct_sentence || s === q.correct_sentence.replace(/\./g,'')) ? '1' : '0');
  };
  const reset = () => { setPool([...q.words].sort(()=>Math.random()-0.5)); setSlots([]); setChecked(false); };

  return (
    <div className="space-y-3" dir="rtl">
      <p className="text-sm font-bold text-slate-700">{q.q}</p>
      <p className="text-xs text-slate-400">💡 اضغط الكلماتِ بالترتيب الصَّحيح لتكوينِ الجملة</p>
      <div className="min-h-[48px] p-3 bg-slate-50 border-2 border-dashed border-slate-300 rounded-xl flex flex-wrap gap-2">
        {slots.map((w, i) => (
          <button key={i} onClick={() => removeWord(i)} disabled={checked}
            className={`px-3 py-1.5 rounded-lg text-sm font-bold border-2 ${checked ? ((slots.join(' ')===q.correct_sentence||slots.join(' ')===q.correct_sentence.replace(/\./g,'')) ? 'border-emerald-400 bg-emerald-50 text-emerald-800' : 'border-rose-400 bg-rose-50 text-rose-800') : 'border-blue-400 bg-blue-50 text-blue-800'}`}>
            {w}
          </button>
        ))}
        {slots.length === 0 && <span className="text-xs text-slate-400">اضغط الكلمات أدناه...</span>}
      </div>
      <div className="flex flex-wrap gap-2">
        {pool.map((w, i) => (
          <button key={i} onClick={() => addWord(w)} className="px-3 py-1.5 rounded-lg text-sm font-medium border-2 border-slate-200 bg-white hover:border-blue-400 hover:bg-blue-50 transition-all">{w}</button>
        ))}
      </div>
      <div className="flex gap-2">
        {!checked && pool.length === 0 && <Button onClick={check} className="flex-1">تحقَّق من الجملة</Button>}
        {!checked && <Button onClick={reset} variant="outline" className="gap-1"><RotateCcw className="w-3 h-3" />إعادة</Button>}
      </div>
      {checked && (
        <p className="text-xs text-slate-500 bg-slate-50 rounded-lg p-2">
          الجملةُ الصَّحيحة: <span className="font-bold text-emerald-700">{q.correct_sentence}</span>
        </p>
      )}
    </div>
  );
}

// ─── منفِّذ السؤال ──────────────────────────────────────────
function QuestionRunner({ question, answered, userAns, onAnswer }) {
  if (question.type === 'yesno') return <YesNoQ q={question} onAnswer={onAnswer} answered={answered} userAns={userAns} />;
  if (question.type === 'mc') return <MCQ q={question} onAnswer={onAnswer} answered={answered} userAns={userAns} />;
  if (question.type === 'ordering') return <OrderingQ q={question} onAnswer={onAnswer} answered={answered} />;
  if (question.type === 'matching') return <MatchingQ q={question} onAnswer={onAnswer} answered={answered} />;
  if (question.type === 'classify') return <ClassifyQ q={question} onAnswer={onAnswer} answered={answered} />;
  if (question.type === 'word_order') return <WordOrderQ q={question} onAnswer={onAnswer} answered={answered} />;
  return null;
}

const TYPE_LABEL = {
  yesno: { label: 'نعم / لا', color: 'bg-emerald-100 text-emerald-700' },
  mc: { label: 'اختيار متعدد', color: 'bg-blue-100 text-blue-700' },
  ordering: { label: 'ترتيب', color: 'bg-amber-100 text-amber-700' },
  matching: { label: 'مطابقة', color: 'bg-violet-100 text-violet-700' },
  classify: { label: 'تصنيف', color: 'bg-rose-100 text-rose-700' },
  word_order: { label: 'ترتيب جملة', color: 'bg-indigo-100 text-indigo-700' },
};

export default function TajweedGrade5S2() {
  const { t, isRTL } = useLang();
  const Arrow = isRTL ? ArrowLeft : ArrowRight;

  const [active, setActive] = useState(null);
  const [qIdx, setQIdx] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAns, setUserAns] = useState(null);
  const [correct, setCorrect] = useState(false);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const topRef = useScrollTopOnChange(qIdx);

  const unit = active ? TAJWEED_G5_S2_UNITS[active.unitIdx] : null;
  const lesson = active ? unit?.lessons[active.lessonIdx] : null;
  const questions = lesson?.questions || [];
  const question = questions[qIdx];

  const openLesson = (ui, li) => {
    setActive({ unitIdx: ui, lessonIdx: li });
    setQIdx(0); setAnswered(false); setUserAns(null); setCorrect(false); setScore(0); setDone(false);
  };

  const onAnswer = useCallback((val) => {
    setAnswered(true);
    setUserAns(val);
    let isOk = false;
    if (question.type === 'yesno') isOk = val === question.correct;
    else if (question.type === 'mc') isOk = val === question.correct;
    else isOk = val === '1';
    setCorrect(isOk);
    if (isOk) setScore((s) => s + 1);
  }, [question]);

  const next = () => {
    if (qIdx < questions.length - 1) { setQIdx((i) => i+1); setAnswered(false); setUserAns(null); setCorrect(false); }
    else { setDone(true); }
  };

  const backToUnits = () => { setActive(null); setDone(false); };

  if (active && !done && question) {
    const progress = Math.round((qIdx / questions.length) * 100);
    const badge = TYPE_LABEL[question.type] || { label: 'سؤال', color: 'bg-slate-100 text-slate-700' };

    return (
      <div className="space-y-6" dir="rtl">
        <PageHeader
          title={`${lesson.title_ar} — ${unit.title_ar}`}
          subtitle={`سؤال ${toAr(qIdx+1)} من ${toAr(questions.length)}`}
          breadcrumbs={[
            { label: t('home'), path: '/' },
            { label: 'التجويد — الصف الخامس ف٢', path: '/tajweed-grade5-s2' },
            { label: lesson.title_ar },
          ]}
        />
        <div className="max-w-2xl mx-auto space-y-5 px-4">
          <div ref={topRef} />
          <button onClick={backToUnits} className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-800 transition-colors">
            <ArrowRight className="w-4 h-4" />
            عودة لكلِّ الوحدات
          </button>
          <div className="space-y-1.5">
            <div className="h-2 rounded-full bg-slate-100 overflow-hidden">
              <motion.div className={`h-full ${unit.color.split(' ')[0].replace('from-', 'bg-')}`}
                animate={{ width: `${progress}%` }} transition={{ duration: 0.3 }} />
            </div>
            <div className="flex items-center justify-between text-xs text-slate-400">
              <span>السؤال {toAr(qIdx+1)} / {toAr(questions.length)}</span>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${badge.color}`}>{badge.label}</span>
                <span>النتيجة: {toAr(score)}</span>
              </div>
            </div>
          </div>
          <AnimatePresence mode="wait">
            <motion.div key={qIdx} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -30 }}
              className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5 space-y-4">
              <div className="flex items-center gap-2 pb-2 border-b border-slate-100">
                <BookOpen className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400">من كتاب التجويد — الصف الخامس الابتدائي — الفصل الثاني</span>
              </div>
              {question.image_url && (
                <div className="flex flex-col items-center gap-1 pb-3">
                  <img src={question.image_url} alt="رسم توضيحي من الكتاب" className="max-w-full max-h-72 rounded-xl border-2 border-slate-200 shadow-sm" />
                  <span className="text-xs text-slate-400">رسم توضيحي من الكتاب</span>
                </div>
              )}
              <QuestionRunner question={question} answered={answered} userAns={userAns} onAnswer={onAnswer} />
            </motion.div>
          </AnimatePresence>
          {answered && (
            <>
              {correct ? (
                <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
                  className="rounded-2xl bg-emerald-50 border border-emerald-200 p-4 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  <span className="text-sm font-bold text-emerald-700">إجابةٌ صحيحة! أحسنتَ 🌟</span>
                </motion.div>
              ) : (
                <WrongAnswerTeacher explanation={question.explanation} goldenRule={question.golden_rule} lang="ar" isRTL={true} />
              )}
              <Button onClick={next} className="w-full gap-2 py-6 text-base font-bold">
                {qIdx < questions.length-1 ? 'السؤال التَّالي' : 'إنهاءُ الدَّرس'} <Arrow className="w-5 h-5" />
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }

  if (active && done) {
    const pct = Math.round((score / questions.length) * 100);
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
        className="max-w-xl mx-auto space-y-5 pt-8 px-4" dir="rtl">
        <div className="rounded-2xl p-8 text-center bg-gradient-to-br from-[#263D84] to-[#3E57A4] text-white">
          <Crown className="w-10 h-10 mx-auto mb-3 text-amber-300" />
          <h2 className="text-3xl font-heading font-bold mb-1">{toAr(score)} / {toAr(questions.length)}</h2>
          <p className="text-white/80">{pct >= 80 ? 'إتقانٌ ممتازٌ 🏆' : pct >= 50 ? 'جيِّدٌ، واصِل المُراجعة 💪' : 'يحتاجُ مراجعةً — أعِد المحاولة 📖'}</p>
          <p className="text-white/60 text-sm mt-2">{lesson.title_ar}</p>
        </div>
        <div className="flex gap-3">
          <Button onClick={() => openLesson(active.unitIdx, active.lessonIdx)} variant="outline" className="flex-1">إعادةُ الدَّرس</Button>
          <Button onClick={backToUnits} className="flex-1 gap-2">وحداتٌ أخرى <Arrow className="w-4 h-4" /></Button>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="space-y-8" dir="rtl">
      <PageHeader
        title="التجويد — الصف الخامس الابتدائي · الفصل الثاني"
        subtitle={`${toAr(TAJWEED_G5_S2_UNITS.length)} وحداتٍ · ${toAr(TAJWEED_G5_S2_TOTAL)} سؤالًا — الإخفاء الحقيقي · حروف الإخفاء · أحكام الميم الساكنة · النون والميم المشددتان`}
        breadcrumbs={[{ label: t('home'), path: '/' }, { label: 'التجويد — الصف الخامس ف٢' }]}
      />
      <div className="max-w-4xl mx-auto px-4 space-y-6">
        <div className="grid grid-cols-3 gap-3">
          {[
            { n: toAr(TAJWEED_G5_S2_UNITS.length), l: 'وحدة' },
            { n: toAr(TAJWEED_G5_S2_UNITS.reduce((s,u)=>s+u.lessons.length,0)), l: 'درسًا' },
            { n: toAr(TAJWEED_G5_S2_TOTAL), l: 'سؤالًا' },
          ].map((s) => (
            <div key={s.l} className="bg-white rounded-2xl p-4 text-center border border-slate-100 shadow-sm">
              <div className="text-2xl font-bold text-primary">{s.n}</div>
              <div className="text-xs text-slate-500">{s.l}</div>
            </div>
          ))}
        </div>
        {TAJWEED_G5_S2_UNITS.map((unit, ui) => (
          <div key={unit.id} className="space-y-4">
            <div className={`rounded-2xl bg-gradient-to-r ${unit.color} p-4 flex items-center gap-3`}>
              <span className="text-3xl">{unit.icon}</span>
              <div>
                <h2 className="text-white font-bold text-base">{unit.title_ar}</h2>
                <p className="text-white/70 text-xs">{toAr(unit.lessons.reduce((s,l)=>s+l.questions.length,0))} سؤالًا</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {unit.lessons.map((lesson, li) => (
                <button key={lesson.id} onClick={() => openLesson(ui, li)}
                  className="group bg-white rounded-2xl border-2 border-slate-100 hover:border-blue-300 hover:shadow-md transition-all p-4 text-right flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${unit.color} flex items-center justify-center flex-shrink-0 text-white font-bold text-sm`}>
                    {toAr(li+1)}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-800">{lesson.title_ar}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{toAr(lesson.questions.length)} أسئلة</p>
                    <div className="flex flex-wrap gap-1 mt-1.5">
                      {[...new Set(lesson.questions.map((q)=>TYPE_LABEL[q.type]?.label))].slice(0,4).map((label)=>(
                        <span key={label} className="text-[10px] px-1.5 py-0.5 rounded-full bg-slate-100 text-slate-500">{label}</span>
                      ))}
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}