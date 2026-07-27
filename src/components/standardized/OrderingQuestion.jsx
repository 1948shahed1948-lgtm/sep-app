import React, { useState, useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { CheckCircle2, XCircle, GripVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function OrderingQuestion({ exercise, lang, isAnswered, onAnswer }) {
  const correctItems = lang === 'ar' ? (exercise.ordering_items_ar || []) : (exercise.ordering_items_en || []);
  const [items, setItems] = useState(() => {
    const shuffled = [...correctItems];
    // ensure not already in correct order
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
    <div className="p-6 space-y-4">
      <p className="text-sm text-slate-500 flex items-center gap-1.5">
        <GripVertical className="w-4 h-4" />
        {lang === 'ar' ? 'اسحب العناصر لترتيبها بالترتيب الصحيح' : 'Drag items to arrange them in the correct order'}
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
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 cursor-grab active:cursor-grabbing transition-all ${
                          isCorrectPos ? 'border-emerald-400 bg-emerald-50' :
                          isWrongPos ? 'border-red-400 bg-red-50' :
                          'border-slate-200 bg-white hover:border-blue-300 hover:shadow-sm'
                        }`}
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-full bg-slate-100 flex items-center justify-center text-xs font-bold text-slate-500">
                          {index + 1}
                        </span>
                        <span className="font-medium text-sm text-slate-700 flex-1">{item}</span>
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
        <Button onClick={handleCheck} className="w-full gap-2">
          {lang === 'ar' ? 'تحقق من الترتيب' : 'Check order'}
        </Button>
      )}
      {checked && (
        <div className="flex items-center gap-2 text-sm font-medium">
          {items.join('|') === correctItems.join('|')
            ? <><CheckCircle2 className="w-5 h-5 text-emerald-500" /><span className="text-emerald-600">{lang === 'ar' ? 'الترتيب صحيح!' : 'Correct order!'}</span></>
            : <><XCircle className="w-5 h-5 text-red-500" /><span className="text-red-600">{lang === 'ar' ? 'الترتيب غير صحيح' : 'Wrong order'}</span></>}
        </div>
      )}
    </div>
  );
}