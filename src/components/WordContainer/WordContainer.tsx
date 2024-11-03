import React, { forwardRef } from 'react';
import { useDrop } from 'react-dnd';
import { Word } from '@/app/shared/types/wordType';
import useAudio from '@/app/shared/hooks/useAudio'; // Ensure you import your audio hook

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

  // Using the useAudio hook to play the audio
  const { playAudio } = useAudio(matched?.audio_url || "");

  const handlePlayAudio = () => {
    if (matched && matched.audio_url) {
      console.log("Playing audio from URL:", matched.audio_url);
      playAudio(); // Play the audio when matched is present
    } else {
      console.warn("No audio URL available for playback");
    }
  };

  return (
    <div
      ref={combinedRef}  // Use the combined ref function here
      className="flex justify-between items-center p-4 text-white rounded-lg"
      style={{ backgroundColor: isOver ? '#3b82f6' : 'transparent' }} // Optional feedback on drag-over
    >
      <div className="text-2xl">{word.word}</div>
      <div
        className={`ml-4 p-4 w-1/2 min-h-[50px] rounded-lg text-xl border-dashed border-2 ${
          matched ? 'bg-green-500 border-green-500 text-black' : 'bg-gray-700 border-blue-500'
        } flex items-center justify-center`}
        onClick={handlePlayAudio} // Add click event to play audio
      >
        {matched ? (
          <div>
            {matched.correctWord}
            {/* Remove the <audio> tag since we are handling playback through the hook */}
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
