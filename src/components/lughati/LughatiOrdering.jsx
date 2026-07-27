import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { CheckCircle2, XCircle, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MathText from '@/components/shared/MathText';

// ترتيب تفاعلي للصف الأول: بطاقات حروف كبيرة تُسحب بترتيب الكتاب
export default function LughatiOrdering({ exercise, isAnswered, onAnswer, dir = 'rtl', lang = 'ar' }) {
  const correctItems = exercise.ordering_items_ar || [];
  const [items, setItems] = useState(() => {
    const shuffled = [...correctItems];
    let attempts = 0;
    while (shuffled.join('|') === correctItems.join('|') && attempts < 10) {
      shuffled.sort(() => Math.random() - 0.5);
      attempts++;
    }
    return shuffled;
  });
  const [checked, setChecked] = useState(false);

  const onDragEnd = (result) => {
    if (!result.destination || isAnswered || checked) return;
    const reordered = Array.from(items);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);
    setItems(reordered);
  };

  const handleCheck = () => {
    setChecked(true);
    const isCorrect = items.join('|') === correctItems.join('|');
    onAnswer(isCorrect ? '1' : '0');
  };

  return (
    <div className="p-5 space-y-4">
      <p className="text-sm text-slate-500 flex items-center gap-1.5">
        <GripVertical className="w-4 h-4" />
        {lang === 'en' ? 'Drag to arrange in the correct order' : 'اسحب الحروف لترتيبها كما درستها في الكتاب'}
      </p>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="ordering">
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="space-y-2.5">
              {items.map((item, index) => {
                const isCorrectPos = checked && item === correctItems[index];
                const isWrongPos = checked && item !== correctItems[index];
                return (
                  <Draggable key={item + index} draggableId={`item-${index}`} index={index} isDragDisabled={isAnswered || checked}>
                    {(p) => (
                      <div
                        ref={p.innerRef}
                        {...p.draggableProps}
                        {...p.dragHandleProps}
                        className={`flex items-center gap-3 px-4 py-3 rounded-2xl border-2 cursor-grab active:cursor-grabbing transition-all ${
                          isCorrectPos ? 'border-emerald-400 bg-emerald-50' :
                          isWrongPos ? 'border-red-400 bg-red-50' :
                          'border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm'
                        }`}
                      >
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-sm font-bold text-slate-500">
                          {index + 1}
                        </span>
                        <span className="text-3xl font-heading font-bold text-slate-800 flex-1 text-center"><MathText text={item} /></span>
                        <GripVertical className="w-4 h-4 text-slate-300 flex-shrink-0" />
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
      {!isAnswered && !checked && (
        <Button onClick={handleCheck} className="w-full gap-2">{lang === 'en' ? 'Check order' : 'تحقق من الترتيب'}</Button>
      )}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-medium">
          {items.join('|') === correctItems.join('|')
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-600" /><span className="text-emerald-600">{lang === 'en' ? 'Correct order!' : 'الترتيب صحيح!'}</span></>
            : <><XCircle className="w-5 h-5 text-red-500" /><span className="text-red-600">{lang === 'en' ? 'Wrong order' : 'الترتيب غير صحيح'}</span></>}
        </div>
      )}
    </div>
  );
}