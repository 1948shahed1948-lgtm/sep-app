import React, { useState } from 'react';
import { CheckCircle2, XCircle, RotateCcw } from 'lucide-react';

const COLOR_MAP = {
  emerald: 'bg-emerald-50 border-emerald-400 text-emerald-800 hover:border-emerald-500',
  pink: 'bg-pink-50 border-pink-400 text-pink-800 hover:border-pink-500',
  cyan: 'bg-cyan-50 border-cyan-400 text-cyan-800 hover:border-cyan-500',
  amber: 'bg-amber-50 border-amber-400 text-amber-800 hover:border-amber-500',
  violet: 'bg-violet-50 border-violet-400 text-violet-800 hover:border-violet-500',
  rose: 'bg-rose-50 border-rose-400 text-rose-800 hover:border-rose-500',
  blue: 'bg-blue-50 border-blue-400 text-blue-800 hover:border-blue-500',
  orange: 'bg-orange-50 border-orange-400 text-orange-800 hover:border-orange-500',
};

function BookImage({ image, imageCaption }) {
  if (!image) return null;
  return (
    <div className="mb-3 rounded-xl overflow-hidden border-2 border-slate-200 bg-slate-50">
      <img src={image} alt={imageCaption || ''} className="w-full max-h-64 object-contain" />
      {imageCaption && <p className="text-xs text-slate-500 text-center py-2 px-3" dir="rtl">{imageCaption}</p>}
    </div>
  );
}

function FeedbackPanel({ q, isCorrect }) {
  return (
    <div className="space-y-3 mt-4">
      {/* Teacher explanation */}
      <div className={`rounded-xl p-4 border-2 ${isCorrect ? 'bg-emerald-50 border-emerald-200' : 'bg-red-50 border-red-200'}`} dir="rtl">
        <div className="flex items-center gap-2 mb-2">
          {isCorrect ? <CheckCircle2 className="w-5 h-5 text-emerald-600" /> : <XCircle className="w-5 h-5 text-red-600" />}
          <span className="font-bold text-sm">شرح المعلّم</span>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">{q.teacher_explanation}</p>
      </div>

      {/* Chalkboard steps */}
      {q.chalkboard_steps && q.chalkboard_steps.length > 0 && (
        <div className="rounded-xl p-4 bg-slate-800 border-2 border-slate-700" dir="rtl">
          <p className="text-xs text-white/60 font-bold mb-2">🖥️ السبّورة</p>
          <div className="space-y-1.5">
            {q.chalkboard_steps.map((step, i) => (
              <p key={i} className="text-sm text-white font-mono">▸ {step}</p>
            ))}
          </div>
        </div>
      )}

      {/* Golden rule */}
      {q.golden_rule && (
        <div className="rounded-xl p-3 bg-amber-50 border-2 border-amber-300 flex items-start gap-2" dir="rtl">
          <span className="text-xl">👑</span>
          <p className="text-sm font-bold text-amber-900">{q.golden_rule}</p>
        </div>
      )}

      {/* Feedback question */}
      {q.feedback_question && (
        <div className="rounded-xl p-3 bg-indigo-50 border border-indigo-200" dir="rtl">
          <p className="text-xs font-bold text-indigo-700 mb-1">❓ سؤال متابعة</p>
          <p className="text-sm text-slate-700 mb-2">{q.feedback_question}</p>
          <details>
            <summary className="text-xs text-indigo-600 cursor-pointer font-medium">عرض الإجابة</summary>
            <p className="text-sm text-slate-600 mt-2">{q.feedback_answer}</p>
          </details>
        </div>
      )}

      {/* Book source */}
      {q.book_source && (
        <p className="text-xs text-slate-400 text-center" dir="rtl">📖 {q.book_source}</p>
      )}
    </div>
  );
}

/** Unified renderer for option-based types: yesno, mcq, truefalse, counting, identify, fillblank, colors */
export function MCQuestion({ q, onAnswer }) {
  const [picked, setPicked] = useState(null);
  const correctIdx = q.options.findIndex(o => o.correct);

  const submit = (i) => {
    if (picked !== null) return;
    setPicked(i);
    setTimeout(() => onAnswer(i === correctIdx, i, correctIdx), 100);
  };

  return (
    <div className="space-y-3">
      <BookImage image={q.image} imageCaption={q.imageCaption} />
      <p className="font-bold text-slate-800 text-base leading-relaxed" dir="rtl">{q.q}</p>
      <div className="grid gap-2">
        {q.options.map((o, i) => {
          const colorClass = COLOR_MAP[o.color] || COLOR_MAP.emerald;
          const isPicked = picked === i;
          const isCorrect = i === correctIdx;
          let stateClass = colorClass;
          if (picked !== null) {
            if (isCorrect) stateClass = 'bg-emerald-100 border-emerald-500 text-emerald-900';
            else if (isPicked) stateClass = 'bg-red-100 border-red-500 text-red-900';
            else stateClass = 'bg-white border-slate-200 text-slate-400';
          }
          return (
            <button key={i} onClick={() => submit(i)} disabled={picked !== null}
              className={`w-full text-right px-4 py-3 rounded-xl border-2 font-medium text-sm transition-all ${stateClass}`}>
              {o.text}
            </button>
          );
        })}
      </div>
      {picked !== null && <FeedbackPanel q={q} isCorrect={picked === correctIdx} />}
    </div>
  );
}

/** Matching renderer for matching & info types */
export function MatchingQuestion({ q, onAnswer }) {
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
      setTimeout(() => onAnswer(correct), 100);
    }
  };

  return (
    <div className="space-y-3">
      <BookImage image={q.image} imageCaption={q.imageCaption} />
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
      {done && <FeedbackPanel q={q} isCorrect={pairs.every((p, i) => matches[i] === p.right)} />}
    </div>
  );
}

/** Ordering renderer — items have {id, text, correctPosition} */
export function OrderingQuestion({ q, onAnswer }) {
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
    <div className="space-y-3">
      <BookImage image={q.image} imageCaption={q.imageCaption} />
      <p className="font-bold text-slate-800 text-base" dir="rtl">{q.q}</p>
      <div className="space-y-2">
        {order.map((o, i) => (
          <div key={o.id} className="flex items-center gap-2 bg-white border-2 border-slate-200 rounded-lg px-3 py-2">
            <div className="flex flex-col gap-0.5">
              <button onClick={() => move(i, -1)} disabled={done || i === 0} className="text-xs text-slate-400 hover:text-primary disabled:opacity-30">▲</button>
              <button onClick={() => move(i, 1)} disabled={done || i === order.length - 1} className="text-xs text-slate-400 hover:text-primary disabled:opacity-30">▼</button>
            </div>
            <span className="text-sm font-medium text-slate-800 flex-1" dir="rtl">{o.text}</span>
            <span className="text-xs text-slate-400 font-bold">{i + 1}</span>
          </div>
        ))}
      </div>
      {!done && <button onClick={submit} className="w-full py-2.5 rounded-xl bg-primary text-white font-bold text-sm">تحقق من الترتيب</button>}
      {done && <FeedbackPanel q={q} isCorrect={order.every((o, i) => o.correctPosition === i + 1)} />}
    </div>
  );
}

/** Drag-and-drop renderer — dragItems to dropZones */
export function DragDropQuestion({ q, onAnswer }) {
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
    <div className="space-y-3">
      <BookImage image={q.image} imageCaption={q.imageCaption} />
      <p className="font-bold text-slate-800 text-base" dir="rtl">{q.q}</p>
      {unplaced.length > 0 && (
        <div className="flex flex-wrap gap-2 p-3 bg-slate-50 rounded-xl border border-slate-200" dir="rtl">
          {unplaced.map(it => (
            <span key={it.id} className="px-3 py-1.5 bg-white border-2 border-slate-300 rounded-lg text-sm font-medium text-slate-700">{it.text}</span>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {zones.map(zone => (
          <div key={zone.id} className="rounded-xl border-2 border-dashed border-slate-300 p-3 min-h-[100px] bg-slate-50/50">
            <p className="text-xs font-bold text-slate-600 mb-2" dir="rtl">{zone.text}</p>
            <div className="space-y-1">
              {items.filter(it => placed[it.id] === zone.id).map(it => (
                <div key={it.id} className="px-2 py-1 bg-emerald-100 border border-emerald-300 rounded-lg text-xs font-medium text-emerald-800" dir="rtl">{it.text}</div>
              ))}
            </div>
            {!done && unplaced.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {unplaced.map(it => (
                  <button key={it.id} onClick={() => assign(it.id, zone.id)} className="px-2 py-1 bg-white border border-slate-300 rounded text-xs hover:bg-primary/10 transition-colors" dir="rtl">+ {it.text}</button>
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

/** Open-ended application question — self-assessed */
export function ApplicationQuestion({ q, onAnswer }) {
  const [text, setText] = useState('');
  const [revealed, setRevealed] = useState(false);
  const [selfScore, setSelfScore] = useState(null);

  const reveal = () => setRevealed(true);
  const selfAssess = (correct) => {
    if (selfScore !== null) return;
    setSelfScore(correct);
    setTimeout(() => onAnswer(correct), 100);
  };

  return (
    <div className="space-y-3">
      <BookImage image={q.image} imageCaption={q.imageCaption} />
      <p className="font-bold text-slate-800 text-base" dir="rtl">{q.q}</p>
      <textarea value={text} onChange={e => setText(e.target.value)} disabled={revealed}
        className="w-full min-h-[80px] px-4 py-3 rounded-xl border-2 border-slate-200 text-sm text-slate-700 resize-y focus:border-primary outline-none" dir="rtl"
        placeholder="اكتب إجابتك هنا..." />
      {!revealed && (
        <button onClick={reveal} className="w-full py-2.5 rounded-xl bg-primary text-white font-bold text-sm">عرض الإجابة النموذجية</button>
      )}
      {revealed && (
        <div className="space-y-3">
          <div className="rounded-xl p-3 bg-indigo-50 border border-indigo-200" dir="rtl">
            <p className="text-xs font-bold text-indigo-700 mb-1">✏️ الإجابة النموذجية</p>
            <p className="text-sm text-slate-700">{q.feedback_answer}</p>
          </div>
          {selfScore === null && (
            <div className="flex gap-3">
              <button onClick={() => selfAssess(true)} className="flex-1 py-2.5 rounded-xl bg-emerald-100 border-2 border-emerald-400 text-emerald-800 font-bold text-sm">إجابتي صحيحة ✓</button>
              <button onClick={() => selfAssess(false)} className="flex-1 py-2.5 rounded-xl bg-red-100 border-2 border-red-400 text-red-800 font-bold text-sm">تحتاج تحسيناً ✗</button>
            </div>
          )}
          <FeedbackPanel q={q} isCorrect={selfScore === true} />
        </div>
      )}
    </div>
  );
}

export function QuestionRenderer({ q, onAnswer }) {
  switch (q.type) {
    case 'yesno':
    case 'mcq':
    case 'truefalse':
    case 'counting':
    case 'identify':
    case 'fillblank':
    case 'colors':
      return <MCQuestion q={q} onAnswer={onAnswer} />;
    case 'matching':
    case 'info':
      return <MatchingQuestion q={q} onAnswer={onAnswer} />;
    case 'ordering':
      return <OrderingQuestion q={q} onAnswer={onAnswer} />;
    case 'dragdrop':
      return <DragDropQuestion q={q} onAnswer={onAnswer} />;
    case 'application':
      return <ApplicationQuestion q={q} onAnswer={onAnswer} />;
    default:
      return <p className="text-sm text-slate-500" dir="rtl">نوع سؤال غير مدعوم: {q.type}</p>;
  }
}