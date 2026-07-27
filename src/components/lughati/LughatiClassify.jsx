import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { CheckCircle2, XCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathText from '@/components/shared/MathText';

// تصنيف تفاعلي للصف الأول: صور (إيموجي كبيرة) تُسحب إلى فئات الحروف
export default function LughatiClassify({ exercise, isAnswered, onAnswer, dir = 'rtl', lang = 'ar' }) {
  const categories = exercise.classify_categories_ar || [];
  const itemsData = exercise.classify_items_ar || [];

  const [pool, setPool] = useState(() => itemsData.map((it, i) => ({ ...it, uid: i })));
  const [bins, setBins] = useState(() => categories.map(() => []));
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
    <div className="p-5 space-y-4">
      <p className="text-sm text-slate-500">{lang === 'en' ? 'Drag each item to the correct category' : 'اسحب كل صورة إلى الحرف الذي تبدأ به'}</p>
      <DragDropContext onDragEnd={onDragEnd}>
        {/* حوض الصور */}
        <div>
          <p className="text-xs font-bold text-slate-400 mb-2">{lang === 'en' ? 'Items' : 'الصور'}</p>
          <Droppable droppableId="pool" direction="horizontal">
            {(provided) => (
              <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-wrap gap-2 min-h-[72px] p-3 rounded-xl bg-slate-50 border-2 border-dashed border-slate-200">
                {pool.map((it, index) => (
                  <Draggable key={`item-${it.uid}`} draggableId={`item-${it.uid}`} index={index} isDragDisabled={isAnswered || checked}>
                    {(p) => (
                      <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}
                        className="w-14 h-14 rounded-xl bg-white border-2 border-slate-200 shadow-sm flex items-center justify-center cursor-grab active:cursor-grabbing hover:border-blue-300">
                        <span className="text-3xl leading-none"><MathText text={it.item} /></span>
                      </div>
                    )}
                  </Draggable>
                ))}
                {pool.length === 0 && <span className="text-xs text-slate-400 self-center">{lang === 'en' ? 'All items classified' : 'كل الصور تم تصنيفها'}</span>}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

        {/* فئات الحروف */}
        <div className="grid gap-3" style={{ gridTemplateColumns: `repeat(${Math.min(categories.length, 3)}, minmax(0, 1fr))` }}>
          {categories.map((cat, ci) => (
            <Droppable key={`bin-${ci}`} droppableId={`bin-${ci}`}>
              {(provided) => (
                <div className="rounded-xl border-2 border-slate-200 p-3 min-h-[130px]">
                  <p className="text-sm font-bold text-slate-600 mb-2 text-center"><MathText text={cat} /></p>
                  <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-wrap gap-2 justify-center">
                    {bins[ci].map((it, index) => {
                      const correct = isItemCorrect(it.uid);
                      return (
                        <Draggable key={`item-${it.uid}`} draggableId={`item-${it.uid}`} index={index} isDragDisabled={isAnswered || checked}>
                          {(p) => (
                            <div ref={p.innerRef} {...p.draggableProps} {...p.dragHandleProps}
                              className={`w-14 h-14 rounded-xl flex items-center justify-center border-2 ${
                                correct === true ? 'bg-emerald-50 border-emerald-400' :
                                correct === false ? 'bg-red-50 border-red-400' :
                                'bg-white border-slate-200'
                              }`}>
                              <span className="text-3xl leading-none"><MathText text={it.item} /></span>
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
        <Button onClick={handleCheck} disabled={pool.length > 0} className="w-full gap-2">{lang === 'en' ? 'Check classification' : 'تحقق من التصنيف'}</Button>
      )}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-medium">
          {itemsData.every((it, i) => bins.findIndex((b) => b.some((x) => x.uid === i)) === it.correct_category)
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">{lang === 'en' ? 'Correct!' : 'تصنيف صحيح!'}</span></>
            : <><XCircle className="w-5 h-5 text-red-500" /><span className="text-red-600">{lang === 'en' ? 'Some items are wrong' : 'بعض الصور في فئة خاطئة'}</span></>}
        </div>
      )}
    </div>
  );
}