import React, { forwardRef } from 'react';
import { useDrag } from 'react-dnd';
import { Word } from '@/app/shared/types/wordType';

interface DraggableWordProps {
  word: Word;
}

// Use forwardRef to pass the ref correctly
const DraggableWord = forwardRef<HTMLDivElement, DraggableWordProps>(({ word }, ref) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'word',
    item: { word: word.correctWord },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={(node) => {
        drag(node); // Attach the drag handler
        if (ref) {
          // Forward the ref if it's passed
          if (typeof ref === 'function') {
            ref(node); // Call the ref function with the node
          } else {
            ref.current = node; // Assign the node to ref's current if it's an object
          }
        }
      }}
      className={`p-4 bg-green-500 text-black text-xl rounded-lg ${isDragging ? 'opacity-50' : ''}`}
      style={{ cursor: 'move' }}
    >
      {word.correctWord}
    </div>
  );
});

// Set a display name for debugging purposes
DraggableWord.displayName = 'DraggableWord';

export default DraggableWord;
