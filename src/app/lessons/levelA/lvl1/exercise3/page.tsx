"use client";
import { multipleChoiseExRuToEst } from "@/app/data";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DraggableWord from '@/components/DraggableWord/DraggableWord';
import WordContainer from '@/components/WordContainer/WordContainer';
import { Word } from '@/app/shared/types/wordType';

const Exercise1: React.FC = () => {
  const words: Word[] = multipleChoiseExRuToEst;
  const router = useRouter();
  
  const [shuffledWords, setShuffledWords] = useState<Word[]>(words);
  const [pairs, setPairs] = useState<{ [key: string]: Word }>({});
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setShuffledWords(shuffled);
  }, [words]);

  const handleDrop = (ruWord: string, etWord: Word) => {
    if (ruWord === etWord.correctWord) {
      setPairs((prevPairs) => {
        const newPairs = {
          ...prevPairs,
          [etWord.word]: etWord,
        };

        if (Object.keys(newPairs).length === words.length) {
          setFinished(true);
        }

        return newPairs;
      });

      setShuffledWords((prevWords) => 
        prevWords.filter((word) => word.correctWord !== ruWord)
      );
    } else {
      toast.error("Неверно! Попробуй ещё раз.");
    }
  };

  useEffect(() => {
    if (finished) {
      console.log("Redirecting to next exercise...");
      setTimeout(() => {
        router.push("/lessons/levelA/lvl1/exercise4");
      }, 1000);
    }
  }, [finished, router]);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center overflow-auto justify-center text-white">
        <div className="grid grid-cols-1 gap-6 max-w-4xl">
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl">Сопоставьте русские слова с эстонскими</h2>

            {words.map((word) => (
              <WordContainer
                key={word.word}
                word={word}
                matched={pairs[word.word]}
                onDrop={handleDrop}
              />
            ))}
          </div>
        </div>

        <div className="mt-10 flex space-x-4">
          {shuffledWords.map((word) => (
            <DraggableWord key={word.word} word={word} />
          ))}
        </div>
        
        <ToastContainer />
      </div>
    </DndProvider>
  );
};

export default Exercise1;
