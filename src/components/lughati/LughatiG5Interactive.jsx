import React, { useState, useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { CheckCircle2, XCircle, Link2, GripVertical, Shuffle } from 'lucide-react';
import { Button } from '@/components/ui/button';

// ألوان البدائل الملونة: وردي / سماوي / زمردي / كهرماني
export const OPT_COLORS = [
  { border: 'border-pink-400', bg: 'bg-pink-50', text: 'text-pink-900', dot: 'bg-pink-500' },
  { border: 'border-cyan-400', bg: 'bg-cyan-50', text: 'text-cyan-900', dot: 'bg-cyan-500' },
  { border: 'border-emerald-400', bg: 'bg-emerald-50', text: 'text-emerald-900', dot: 'bg-emerald-500' },
  { border: 'border-amber-400', bg: 'bg-amber-50', text: 'text-amber-900', dot: 'bg-amber-500' },
];

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

// ══════════════════════════════════════════════
// 1) التوصيل (Matching) — اضغط يسارًا ثم يمينًا
// ══════════════════════════════════════════════
export function G5Matching({ question, onComplete }) {
  const pairs = question.pairs || [];
  const leftItems = useMemo(() => pairs.map((p, i) => ({ ...p, idx: i })), [pairs]);
  const rightItems = useMemo(() => shuffle(pairs.map((p, i) => ({ ...p, idx: i }))), [pairs]);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [connections, setConnections] = useState({});
  const [checked, setChecked] = useState(false);

  const handleLeftClick = (idx) => { if (!checked) setSelectedLeft(idx); };
  const handleRightClick = (rightIdx) => {
    if (checked || selectedLeft === null) return;
    setConnections((prev) => {
      const updated = { ...prev };
      Object.keys(updated).forEach((k) => { if (updated[k] === rightIdx) delete updated[k]; });
      updated[selectedLeft] = rightIdx;
      return updated;
    });
    setSelectedLeft(null);
  };

  const handleCheck = () => {
    setChecked(true);
    const allCorrect = leftItems.every((l) => connections[l.idx] === l.idx);
    onComplete(allCorrect);
  };

  const allConnected = Object.keys(connections).length >= leftItems.length;

  return (
    <div className="space-y-4">
      <p className="text-lg font-heading font-bold text-slate-800 leading-relaxed text-right">{question.q}</p>
      <p className="text-xs text-slate-500 flex items-center gap-1.5">
        <Link2 className="w-4 h-4" /> اضغط على عنصر يمينًا ثم نظيره يسارًا للتوصيل
      </p>
      <div className="grid grid-cols-2 gap-3">
        <div className="space-y-2">
          {leftItems.map((l) => {
            const conn = connections[l.idx];
            const isCorrect = checked && conn === l.idx;
            const isWrong = checked && conn !== undefined && conn !== l.idx;
            return (
              <button key={l.idx} disabled={checked} onClick={() => handleLeftClick(l.idx)}
                className={`w-full px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all text-right ${
                  selectedLeft === l.idx ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-200' :
                  isCorrect ? 'border-emerald-500 bg-emerald-50' :
                  isWrong ? 'border-red-500 bg-red-50' :
                  conn !== undefined ? 'border-slate-300 bg-slate-50' :
                  'border-slate-200 bg-white hover:border-blue-300'
                }`}>
                {l.left}
              </button>
            );
          })}
        </div>
        <div className="space-y-2">
          {rightItems.map((r) => {
            const connBy = Object.entries(connections).find(([, ri]) => ri === r.idx);
            const isUsed = connBy !== undefined;
            const isCorrect = checked && isUsed && Number(connBy[0]) === r.idx;
            const isWrong = checked && isUsed && Number(connBy[0]) !== r.idx;
            return (
              <button key={r.idx} disabled={checked || isUsed} onClick={() => handleRightClick(r.idx)}
                className={`w-full px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all text-right ${
                  isCorrect ? 'border-emerald-500 bg-emerald-50' :
                  isWrong ? 'border-red-500 bg-red-50' :
                  isUsed ? 'border-slate-300 bg-slate-50 opacity-70' :
                  'border-slate-200 bg-white hover:border-blue-300'
                }`}>
                {r.right}
              </button>
            );
          })}
        </div>
      </div>
      {!checked && (
        <Button onClick={handleCheck} disabled={!allConnected} className="w-full gap-2">تحقق من التوصيل</Button>
      )}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-bold">
          {leftItems.every((l) => connections[l.idx] === l.idx)
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">توصيل صحيح!</span></>
            : <><XCircle className="w-5 h-5 text-red-500" /><span className="text-red-600">بعض التوصيلات غير صحيحة</span></>}
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════
// 2) التصنيف (Classify) — سحب وإفلات
// ══════════════════════════════════════════════
export function G5Classify({ question, onComplete }) {
  const categories = question.categories || [];
  const itemsData = useMemo(() =>
    question.items.map((it, i) => ({ ...it, uid: i })), [question.items]);
  const [pool, setPool] = useState(() => shuffle(itemsData));
  const [bins, setBins] = useState(() => categories.map(() => []));
  const [checked, setChecked] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination || checked) return;
    const itemId = Number(result.draggableId.replace('item-', ''));
    let moved = null;
    if (result.source.droppableId === 'pool') {
      moved = pool.find((it) => it.uid === itemId);
      setPool((p) => p.filter((it) => it.uid !== itemId));
    } else {
      const srcBin = Number(result.source.droppableId.replace('bin-', ''));
      moved = bins[srcBin].find((it) => it.uid === itemId);
      setBins((b) => b.map((bin, i) => (i === srcBin ? bin.filter((it) => it.uid !== itemId) : bin)));
    }
    if (!moved) return;
    if (result.destination.droppableId === 'pool') {
      setPool((p) => [...p, moved]);
    } else {
      const destBin = Number(result.destination.droppableId.replace('bin-', ''));
      setBins((b) => b.map((bin, i) => (i === destBin ? [...bin, moved] : bin)));
    }
  };

  const handleCheck = () => {
    setChecked(true);
    const allCorrect = itemsData.every((it) => {
      const binIdx = bins.findIndex((b) => b.some((x) => x.uid === it.uid));
      return binIdx === it.correct_cat;
    });
    onComplete(allCorrect);
  };

  const itemState = (uid) => {
    if (!checked) return null;
    const it = itemsData.find((x) => x.uid === uid);
    const binIdx = bins.findIndex((b) => b.some((x) => x.uid === uid));
    return binIdx === it.correct_cat;
  };

  return (
    <div className="space-y-4">
      <p className="text-lg font-heading font-bold text-slate-800 leading-relaxed text-right">{question.q}</p>
      <p className="text-xs text-slate-500 flex items-center gap-1.5">
        <GripVertical className="w-4 h-4" /> اسحب كل عنصر إلى الفئة الصحيحة
      </p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="pool" direction="horizontal">
          {(prov) => (
            <div ref={prov.innerRef} {...prov.droppableProps}
              className="flex flex-wrap gap-2 min-h-[56px] p-3 rounded-xl bg-slate-50 border-2 border-dashed border-slate-300">
              {pool.map((it, i) => (
                <Draggable key={`item-${it.uid}`} draggableId={`item-${it.uid}`} index={i} isDragDisabled={checked}>
                  {(p) => (
                    <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}
                      className="px-3 py-2 rounded-lg bg-white border-2 border-slate-200 shadow-sm text-sm font-medium cursor-grab active:cursor-grabbing hover:border-blue-300">
                      {it.text}
                    </div>
                  )}
                </Draggable>
              ))}
              {pool.length === 0 && <span className="text-xs text-slate-400 self-center">تم تصنيف كل العناصر</span>}
              {prov.placeholder}
            </div>
          )}
        </Droppable>
        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(categories.length, 3)}, minmax(0,1fr))` }}>
          {categories.map((cat, ci) => (
            <Droppable key={`bin-${ci}`} droppableId={`bin-${ci}`}>
              {(prov) => (
                <div className="rounded-xl border-2 border-slate-200 p-3 min-h-[110px] bg-slate-50/50">
                  <p className="text-sm font-bold text-slate-700 mb-2 text-center">{cat}</p>
                  <div ref={prov.innerRef} {...prov.droppableProps} className="flex flex-col gap-2">
                    {bins[ci].map((it, i) => {
                      const ok = itemState(it.uid);
                      return (
                        <Draggable key={`item-${it.uid}`} draggableId={`item-${it.uid}`} index={i} isDragDisabled={checked}>
                          {(p) => (
                            <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}
                              className={`px-3 py-2 rounded-lg border-2 text-sm font-medium ${
                                ok === true ? 'bg-emerald-50 border-emerald-400' :
                                ok === false ? 'bg-red-50 border-red-400' :
                                'bg-white border-slate-200'
                              }`}>
                              {it.text}
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {prov.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      {!checked && (
        <Button onClick={handleCheck} disabled={pool.length > 0} className="w-full gap-2">تحقق من التصنيف</Button>
      )}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-bold">
          {itemsData.every((it) => bins.findIndex((b) => b.some((x) => x.uid === it.uid)) === it.correct_cat)
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">تصنيف صحيح!</span></>
            : <><XCircle className="w-5 h-5 text-red-500" /><span className="text-red-600">بعض العناصر في فئة خاطئة</span></>}
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════
// 3) الترتيب (Ordering) — سحب وإفلات لترتيب العناصر
// ══════════════════════════════════════════════
export function G5Ordering({ question, onComplete }) {
  const correctItems = useMemo(() =>
    question.correct_order.map((idx) => question.items[idx]), [question]);
  const [items, setItems] = useState(() => shuffle(correctItems));
  const [checked, setChecked] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination || checked) return;
    const reordered = Array.from(items);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setItems(reordered);
  };

  const handleCheck = () => {
    setChecked(true);
    onComplete(items.join('|') === correctItems.join('|'));
  };

  return (
    <div className="space-y-4">
      <p className="text-lg font-heading font-bold text-slate-800 leading-relaxed text-right">{question.q}</p>
      <p className="text-xs text-slate-500 flex items-center gap-1.5">
        <GripVertical className="w-4 h-4" /> اسحب العناصر لترتيبها بالشكل الصحيح
      </p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="ordering">
          {(prov) => (
            <div ref={prov.innerRef} {...prov.droppableProps} className="space-y-2">
              {items.map((item, i) => {
                const ok = checked && item === correctItems[i];
                const bad = checked && item !== correctItems[i];
                return (
                  <Draggable key={item + i} draggableId={`item-${i}`} index={i} isDragDisabled={checked}>
                    {(p) => (
                      <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 text-sm font-medium cursor-grab active:cursor-grabbing transition-all ${
                          ok ? 'border-emerald-400 bg-emerald-50' :
                          bad ? 'border-red-400 bg-red-50' :
                          'border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm'
                        }`}>
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">{i + 1}</span>
                        <span className="flex-1 text-right">{item}</span>
                        <GripVertical className="w-4 h-4 text-slate-300 flex-shrink-0" />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {prov.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {!checked && <Button onClick={handleCheck} className="w-full gap-2">تحقق من الترتيب</Button>}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-bold">
          {items.join('|') === correctItems.join('|')
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">ترتيب صحيح!</span></>
            : <><XCircle className="w-5 h-5 text-red-500" /><span className="text-red-600">الترتيب غير صحيح</span></>}
        </div>
      )}
    </div>
  );
}

// ══════════════════════════════════════════════
// 4) ترتيب الكلمات (WordOrder) — سحب كلمات لتكوين جملة
// ══════════════════════════════════════════════
export function G5WordOrder({ question, onComplete }) {
  const correctWords = useMemo(() => question.correct_sentence.split(' '), [question]);
  const [words, setWords] = useState(() => shuffle(correctWords));
  const [checked, setChecked] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination || checked) return;
    const reordered = Array.from(words);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setWords(reordered);
  };

  const handleCheck = () => {
    setChecked(true);
    onComplete(words.join(' ') === question.correct_sentence);
  };

  return (
    <div className="space-y-4">
      <p className="text-lg font-heading font-bold text-slate-800 leading-relaxed text-right">{question.q}</p>
      <p className="text-xs text-slate-500 flex items-center gap-1.5">
        <Shuffle className="w-4 h-4" /> اسحب الكلمات لترتيبها في جملة صحيحة
      </p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="wordorder" direction="horizontal">
          {(prov) => (
            <div ref={prov.innerRef} {...prov.droppableProps}
              className="flex flex-wrap gap-2 p-4 rounded-xl bg-slate-50 border-2 border-dashed border-slate-300 min-h-[80px] justify-center">
              {words.map((w, i) => {
                const ok = checked && w === correctWords[i];
                const bad = checked && w !== correctWords[i];
                return (
                  <Draggable key={w + i} draggableId={`word-${i}`} index={i} isDragDisabled={checked}>
                    {(p) => (
                      <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}
                        className={`px-4 py-2.5 rounded-xl border-2 text-base font-heading font-bold cursor-grab active:cursor-grabbing transition-all ${
                          ok ? 'border-emerald-400 bg-emerald-50 text-emerald-900' :
                          bad ? 'border-red-400 bg-red-50 text-red-900' :
                          'border-blue-300 bg-white text-slate-800 hover:border-blue-500 hover:shadow-sm'
                        }`}>
                        {w}
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {prov.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {!checked && <Button onClick={handleCheck} className="w-full gap-2">تحقق من الجملة</Button>}
      {checked && (
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-sm font-bold">
            {words.join(' ') === question.correct_sentence
              ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">جملة صحيحة!</span></>
              : <><XCircle className="w-5 h-5 text-red-500" /><span className="text-red-600">الجملة غير صحيحة</span></>}
          </div>
          {checked && words.join(' ') !== question.correct_sentence && (
            <p className="text-xs text-slate-500 text-right">الجملة الصحيحة: {question.correct_sentence}</p>
          )}
        </div>
      )}
    </div>
  );
}