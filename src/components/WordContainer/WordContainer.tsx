import React, { forwardRef } from 'react';
import { useDrop } from 'react-dnd';
import { Word } from '@/app/shared/types/wordType';

interface WordContainerProps {
  word: Word;
  onDrop: (ruWord: string, etWord: Word) => void;
  matched?: Word; 
}

const WordContainer = forwardRef<HTMLDivElement, WordContainerProps>(({ word, onDrop, matched }, ref) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'word',
    drop: (item: { word: string }) => onDrop(item.word, word),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  // Combining the refs
  const combinedRef = (element: HTMLDivElement) => {
    drop(element);
    if (typeof ref === 'function') {
      ref(element);
    } else if (ref) {
      (ref as React.MutableRefObject<HTMLDivElement | null>).current = element;
    }
  };

  return (
    <div
      ref={combinedRef}  // Use the combined ref function here
      className="flex justify-between items-center p-4 text-white rounded-lg"
      style={{ backgroundColor: isOver ? 'lightblue' : 'transparent' }} // Optional feedback on drag-over
    >
      <div className="text-2xl">{word.word}</div>
      <div
        className={`ml-4 p-4 w-1/2 min-h-[50px] rounded-lg text-xl border-dashed border-2 ${
          matched ? 'bg-green-500 border-green-500' : 'bg-gray-700 border-blue-500'
        } flex items-center justify-center`}
      >
        {matched ? (
          <div>
            {matched.correctWord}
            {matched.audio_url && <audio src={matched.audio_url} autoPlay />}
          </div>
        ) : (
          'Перетащите сюда'
        )}
      </div>
    </div>
  );
});

// Explicitly set the display name to fix the warning
WordContainer.displayName = 'WordContainer';

export default WordContainer;
