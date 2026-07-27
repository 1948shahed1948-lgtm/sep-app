import React, { useEffect, useRef } from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { motion, AnimatePresence } from 'framer-motion';
import { Circle, Square, Triangle, Diamond, CheckCircle, XCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import MathText from '@/components/shared/MathText';

const shapeIcons = [Circle, Square, Triangle, Diamond];

export default function ShapeDragDropOptions({ options, exercise, isAnswered, selectedAnswer, onAnswer, lang }) {
  const zoneRef = useRef(null);
  const isCorrectIndex = (oi) => String(oi) === String(exercise.correct_answer);

  useEffect(() => {
    if (selectedAnswer !== null && isCorrectIndex(selectedAnswer) && zoneRef.current) {
      const rect = zoneRef.current.getBoundingClientRect();
      confetti({
        particleCount: 60,
        spread: 70,
        startVelocity: 28,
        origin: {
          x: (rect.left + rect.width / 2) / window.innerWidth,
          y: (rect.top + rect.height / 2) / window.innerHeight,
        },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedAnswer]);

  const handleDragEnd = (result) => {
    if (isAnswered) return;
    const { destination, draggableId } = result;
    if (!destination || destination.droppableId !== 'answer-zone') return;
    const oi = parseInt(draggableId.replace('option-', ''), 10);
    onAnswer(oi);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="space-y-5">
        <Droppable droppableId="answer-zone" isDropDisabled={isAnswered}>
          {(provided, snapshot) => (
            <div
              ref={(el) => { provided.innerRef(el); zoneRef.current = el; }}
              {...provided.droppableProps}
              className={`min-h-[72px] rounded-xl border-2 border-dashed flex items-center justify-center gap-2 p-4 transition-all duration-300 ${
                snapshot.isDraggingOver ? 'border-blue-400 bg-blue-50 scale-[1.02]' :
                selectedAnswer !== null ? (isCorrectIndex(selectedAnswer) ? 'border-emerald-400 bg-emerald-50' : 'border-red-400 bg-red-50') :
                'border-slate-300 bg-slate-50'
              }`}
            >
              <AnimatePresence mode="wait">
                {selectedAnswer === null ? (
                  <motion.span
                    key="placeholder"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-sm text-slate-400 font-medium"
                  >
                    {lang === 'ar' ? 'اسحب الشكل الصحيح إلى هنا' : 'Drag the correct shape here'}
                  </motion.span>
                ) : (
                  <motion.div
                    key="answer"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={isCorrectIndex(selectedAnswer)
                      ? { scale: [0.5, 1.25, 1], opacity: 1, rotate: [0, -8, 8, 0] }
                      : { scale: [0.9, 1.05, 1], opacity: 1, x: [0, -6, 6, -4, 4, 0] }}
                    transition={{ duration: 0.5, ease: 'easeOut' }}
                    className="flex items-center gap-2"
                  >
                    {isCorrectIndex(selectedAnswer) ? <CheckCircle className="w-5 h-5 text-emerald-500" /> : <XCircle className="w-5 h-5 text-red-500" />}
                    {(() => { const Icon = shapeIcons[selectedAnswer % shapeIcons.length]; return <Icon className="w-6 h-6 text-slate-600" />; })()}
                    <span className="font-medium text-sm text-slate-700"><MathText text={options[selectedAnswer]} /></span>
                  </motion.div>
                )}
              </AnimatePresence>
              {provided.placeholder}
            </div>
          )}
        </Droppable>

        <Droppable droppableId="options-source" direction="horizontal" isDropDisabled={true}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps} className="flex flex-wrap gap-3 justify-center">
              {options.map((option, oi) => {
                const Icon = shapeIcons[oi % shapeIcons.length];
                return (
                  <Draggable key={oi} draggableId={`option-${oi}`} index={oi} isDragDisabled={isAnswered}>
                    {(dragProvided, dragSnapshot) => (
                      <div
                        ref={dragProvided.innerRef}
                        {...dragProvided.draggableProps}
                        {...dragProvided.dragHandleProps}
                        style={{
                          ...dragProvided.draggableProps.style,
                          transition: dragSnapshot.isDropAnimating
                            ? 'transform 0.35s cubic-bezier(.2,1,.1,1)'
                            : dragProvided.draggableProps.style?.transition,
                        }}
                        className={`flex items-center gap-2 px-4 py-3 rounded-xl border-2 bg-white select-none transition-all duration-200 ${
                          dragSnapshot.isDragging ? 'border-blue-400 shadow-xl scale-110 cursor-grabbing' : 'border-slate-200 cursor-grab hover:scale-105'
                        } ${isAnswered ? 'opacity-40' : 'hover:border-blue-300'}`}
                      >
                        <Icon className="w-5 h-5 text-slate-500" />
                        <span className="font-medium text-sm text-slate-700"><MathText text={option} /></span>
                      </div>
                    )}
                  </Draggable>
                );
              })}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    </DragDropContext>
  );
}