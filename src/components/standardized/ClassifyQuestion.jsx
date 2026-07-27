import React, { useState, useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ClassifyQuestion({ exercise, lang, isAnswered, onAnswer }) {
  const categories = lang === 'ar' ? (exercise.classify_categories_ar || []) : (exercise.classify_categories_en || []);
  const itemsData = lang === 'ar' ? (exercise.classify_items_ar || []) : (exercise.classify_items_en || []);

  const [pool, setPool] = useState(() => itemsData.map((it, i) => ({ ...it, uid: i })));
  const [bins, setBins] = useState(() => categories.map(() => [])); // array of arrays of uids
  const [checked, setChecked] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination || isAnswered || checked) return;
    const { source, destination } = result;
    const itemId = Number(result.draggableId.replace('item-', ''));

    let movedItem = null;
    if (source.droppableId === 'pool') {
      movedItem = pool.find((it) => it.uid === itemId);
      setPool((prev) => prev.filter((it) => it.uid !== itemId));
    } else {
      const srcBin = Number(source.droppableId.replace('bin-', ''));
      movedItem = bins[srcBin].find((it) => it.uid === itemId);
      setBins((prev) => prev.map((b, i) => (i === srcBin ? b.filter((it) => it.uid !== itemId) : b)));
    }

    if (!movedItem) return;

    if (destination.droppableId === 'pool') {
      setPool((prev) => [...prev, movedItem]);
    } else {
      const destBin = Number(destination.droppableId.replace('bin-', ''));
      setBins((prev) => prev.map((b, i) => (i === destBin ? [...b, movedItem] : b)));
    }
  };

  const handleCheck = () => {
    setChecked(true);
    const allCorrect = itemsData.every((it, i) => {
      const binIdx = bins.findIndex((b) => b.some((x) => x.uid === i));
      return binIdx === it.correct_category;
    });
    onAnswer(allCorrect ? '1' : '0');
  };

  const isItemCorrect = (uid) => {
    if (!checked) return null;
    const item = itemsData[uid];
    const binIdx = bins.findIndex((b) => b.some((x) => x.uid === uid));
    return binIdx === item.correct_category;
  };

  return (
    <div className="p-6 space-y-4">
      <p className="text-sm text-slate-500">
        {lang === 'ar' ? 'اسحب كل عنصر إلى الفئة المناسبة' : 'Drag each item into the correct category'}
      </p>
      <DragDropContext onDragEnd={onDragEnd}>
        {/* Items pool */}
        <div>
          <p className="text-xs font-bold text-slate-400 mb-2">{lang === 'ar' ? 'العناصر' : 'Items'}</p>
          <Droppable droppableId="pool" direction="horizontal">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-wrap gap-2 min-h-[56px] p-3 rounded-xl bg-slate-50 border-2 border-dashed border-slate-200">
                {pool.map((it, index) => (
                  <Draggable key={`item-${it.uid}`} draggableId={`item-${it.uid}`} index={index} isDragDisabled={isAnswered || checked}>
                    {(p) => (
                      <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}
                        className="px-4 py-2.5 rounded-lg bg-white border-2 border-slate-200 shadow-sm font-medium text-sm text-slate-700 cursor-grab active:cursor-grabbing hover:border-blue-300">
                        {it.item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {pool.length === 0 && <span className="text-xs text-slate-400 self-center">{lang === 'ar' ? 'كل العناصر تم تصنيفها' : 'All items classified'}</span>}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        {/* Category bins */}
        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(categories.length, 2)}, minmax(0, 1fr))` }}>
          {categories.map((cat, ci) => (
            <Droppable key={`bin-${ci}`} droppableId={`bin-${ci}`}>
              {(provided) => (
                <div className={`rounded-xl border-2 p-3 min-h-[120px] ${checked ? 'border-slate-200' : 'border-slate-200'}`}>
                  <p className="text-xs font-bold text-slate-500 mb-2 text-center">{cat}</p>
                  <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col gap-2">
                    {bins[ci].map((it, index) => {
                      const correct = isItemCorrect(it.uid);
                      return (
                        <Draggable key={`item-${it.uid}`} draggableId={`item-${it.uid}`} index={index} isDragDisabled={isAnswered || checked}>
                          {(p) => (
                            <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}
                              className={`px-3 py-2 rounded-lg text-sm font-medium border-2 ${
                                correct === true ? 'bg-emerald-50 border-emerald-400 text-emerald-700' :
                                correct === false ? 'bg-red-50 border-red-400 text-red-700' :
                                'bg-white border-slate-200 text-slate-700'
                              }`}>
                              {it.item}
                            </div>
                          )}
                        </Draggable>
                      );
                    })}
                    {provided.placeholder}
                  </div>
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>

      {!isAnswered && !checked && (
        <Button onClick={handleCheck} disabled={pool.length > 0} className="w-full gap-2">
          {lang === 'ar' ? 'تحقق من التصنيف' : 'Check classification'}
        </Button>
      )}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-medium">
          {itemsData.every((it, i) => bins.findIndex((b) => b.some((x) => x.uid === i)) === it.correct_category)
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-500" /><span className="text-emerald-600">{lang === 'ar' ? 'تصنيف صحيح!' : 'Correct!'}</span></>
            : <><XCircle className="w-5 h-5 text-red-500" /><span className="text-red-600">{lang === 'ar' ? 'بعض العناصر في فئة خاطئة' : 'Some items misplaced'}</span></>}
        </div>
      )}
    </div>
  );
}