import React, { useState, useMemo } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { CheckCircle2, XCircle, GripVertical, Type } from 'lucide-react';
import { Button } from '@/components/ui/button';

/**
 * ترتيب الكلمات والجمل بالسحب والإفلات (نمط أفقي داخل صندوق جملة).
 * يدعم: كلمات مفردة، أو جمل قصيرة، عربي/إنجليزي.
 * البيانات المتوقعة في exercise:
 *   - ordering_items_ar / ordering_items_en : مصفوفة الكلمات/الجمل بالترتيب الصحيح
 *   - (اختياري) sentence_ar / sentence_en  : الجملة كاملة لعرضها كتلميح
 */
export default function WordSentenceOrdering({ exercise, lang, isAnswered, onAnswer }) {
  const isAr = lang === 'ar';
  const correctItems = isAr ? (exercise.ordering_items_ar || []) : (exercise.ordering_items_en || []);
  const hintSentence = isAr ? exercise.sentence_ar : exercise.sentence_en;

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
    if (result.source.index === result.destination.index) return;
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

  const handleReset = () => {
    const shuffled = [...correctItems];
    let attempts = 0;
    while (shuffled.join('|') === correctItems.join('|') && attempts < 10) {
      shuffled.sort(() => Math.random() - 0.5);
      attempts++;
    }
    setItems(shuffled);
    setChecked(false);
  };

  const isCorrect = items.join('|') === correctItems.join('|');

  return (
    <div className="p-5 sm:p-6 space-y-4">
      <div className="flex items-center justify-between gap-2 flex-wrap">
        <p className="text-sm text-slate-500 flex items-center gap-1.5">
          <Type className="w-4 h-4" />
          {isAr ? 'اسحب الكلمات/الجمل لتكوين الترتيب الصحيح' : 'Drag words/sentences to form the correct order'}
        </p>
        {hintSentence && !checked && (
          <span className="text-xs text-slate-400 bg-slate-50 rounded-full px-3 py-1">
            {isAr ? 'الجملة الصحيحة:' : 'Correct sentence:'} {hintSentence}
          </span>
        )}
      </div>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="word-order" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              {...provided.droppableProps}
              dir={isAr ? 'rtl' : 'ltr'}
              className={`min-h-[80px] flex flex-wrap items-center gap-2 p-3 rounded-2xl border-2 border-dashed transition-all ${
                snapshot.isDraggingOver ? 'border-blue-400 bg-blue-50/50' : 'border-slate-200 bg-slate-50/40'
              }`}
            >
              {items.map((item, index) => {
                const isCorrectPos = checked && item === correctItems[index];
                const isWrongPos = checked && item !== correctItems[index];
                return (
                  <Draggable
                    key={`w-${item}-${index}`}
                    draggableId={`w-${index}`}
                    index={index}
                    isDragDisabled={isAnswered || checked}
                  >
                    {(p) => (
                      <div
                        ref={p.innerRef}
                        {...p.draggableProps}
                        {...p.dragHandleProps}
                        className={`inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl border-2 cursor-grab active:cursor-grabbing transition-all text-sm font-medium select-none ${
                          isCorrectPos
                            ? 'border-emerald-400 bg-emerald-50 text-emerald-800'
                            : isWrongPos
                            ? 'border-red-400 bg-red-50 text-red-800'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 hover:shadow-sm'
                        }`}
                        style={{ ...p.draggableProps.style }}
                      >
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-400">
                          {isAr ? '٠١٢٣٤٥٦٧٨٩'[index + 1] || index + 1 : index + 1}
                        </span>
                        <span>{item}</span>
                        {!checked && <GripVertical className="w-3.5 h-3.5 text-slate-300 flex-shrink-0" />}
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
          {isAr ? 'تحقق من الترتيب' : 'Check order'}
        </Button>
      )}

      {checked && (
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm font-medium">
            {isCorrect ? (
              <>
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
                <span className="text-emerald-600">{isAr ? 'الترتيب صحيح! 🌟' : 'Correct order! 🌟'}</span>
              </>
            ) : (
              <>
                <XCircle className="w-5 h-5 text-red-500" />
                <span className="text-red-600">{isAr ? 'الترتيب غير صحيح' : 'Wrong order'}</span>
              </>
            )}
          </div>
          {!isCorrect && (
            <div className="rounded-xl bg-slate-50 border border-slate-200 p-3">
              <p className="text-xs font-bold text-slate-500 mb-1">
                {isAr ? 'الترتيب الصحيح:' : 'Correct order:'}
              </p>
              <p dir={isAr ? 'rtl' : 'ltr'} className="text-sm font-medium text-slate-700 leading-relaxed">
                {correctItems.join(isAr ? ' ' : ' ')}
              </p>
            </div>
          )}
          {!isAnswered && !isCorrect && (
            <Button onClick={handleReset} variant="outline" className="w-full gap-2">
              {isAr ? 'إعادة المحاولة' : 'Try again'}
            </Button>
          )}
        </div>
      )}
    </div>
  );
}