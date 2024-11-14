import { useParams, useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DraggableWord from "@/components/DraggableWord/DraggableWord";
import WordContainer from "@/components/WordContainer/WordContainer";
import { Word } from "@/app/[lang]/shared/types/wordType";
import { getDictionary } from "@/app/[lang]/dictionaries";

interface MatchingEx {
  word: string;
  image_url: string;
  audio_url: string;
  translations: string[];
  correctWord: string;
  type: string;
  nextExercisePath: string;
}

const Matching = ({ exercise }: { exercise: MatchingEx[] }) => {
  const words: Word[] = exercise;
  const router = useRouter();
  const [shuffledWords, setShuffledWords] = useState<Word[]>([]);
  const [pairs, setPairs] = useState<{ [key: string]: Word }>({});
  const [finished, setFinished] = useState(false);
  const [dict, setDict] = useState<any>(null); // State for storing the loaded dictionary
  const { lang } = useParams();

  // Fetch the dictionary based on the language
  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionary = await getDictionary(lang);
      setDict(dictionary); // Store the loaded dictionary
    };

    fetchDictionary();
  }, [lang]);

  // Shuffle the words when the exercise changes
  useEffect(() => {
    shuffleWords();
  }, [exercise]); 

  const shuffleWords = () => {
    const shuffled = [...words].sort(() => Math.random() - 0.5);
    setShuffledWords(shuffled);
  };

  const handleDrop = (ruWord: string, etWord: Word) => {
    if (ruWord === etWord.correctWord) {
      setPairs((prevPairs) => {
        const newPairs = { ...prevPairs, [etWord.word]: etWord };

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
      const nextPath = exercise[0]?.nextExercisePath;
      if (nextPath) {
        setTimeout(() => {
          router.push(nextPath);
        }, 3000);
      } else {
        toast.error("Следующее упражнение недоступно.");
      }
    }
  }, [finished, router, exercise]);

  if (!dict) {
    return <div>Loading...</div>; 
  }

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex flex-col items-center overflow-auto justify-center text-white">
        <div className="grid grid-cols-1 gap-6 max-w-4xl w-[560px]">
          <div className="flex flex-col space-y-4 justify-center text-center">
            <h2 className="text-2xl">{dict.matching.expl}</h2>
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

export default Matching;
