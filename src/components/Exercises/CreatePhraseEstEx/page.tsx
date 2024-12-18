"use client";
import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams, useRouter } from "next/navigation";
import useAudio from "@/app/[lang]/shared/hooks/useAudio";
import useShuffle from "@/app/[lang]/shared/hooks/useShuffle";
import { getDictionary } from "@/app/[lang]/dictionaries";

interface CreatePhraseEstEx {
  word: string;
  image_url: string;
  audio_url: string;
  translations: string[];
  correctWord: string;
  type: string;
  nextExercisePath: string;
}

const CreatePhraseEstEx = ({ exercise }: { exercise: CreatePhraseEstEx[] }) => {
  const [selectedWords, setSelectedWords] = useState<string[]>([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [status, setStatus] = useState<{ word: string; isCorrect: boolean }[]>(
    []
  );
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [allPhrasesCompleted, setAllPhrasesCompleted] =
    useState<boolean>(false);
  const [selectableWords, setSelectableWords] = useState<string[]>([]);

  const router = useRouter();
  const { lang } = useParams(); // Get the language parameter
  const [dict, setDict] = useState<any>(null); // State for storing the loaded dictionary

  // Fetch the dictionary based on the language
  useEffect(() => {
    const fetchDictionary = async () => {
      const dictionary = await getDictionary(lang);
      setDict(dictionary); // Store the loaded dictionary
    };

    fetchDictionary();
  }, [lang]);

  // Shuffle the phrases using the custom hook
  const shuffledPhrases = useShuffle(exercise);

  useEffect(() => {
    if (allPhrasesCompleted) {
      router.push(exercise[0].nextExercisePath);
    }
  }, [allPhrasesCompleted, router, exercise]);

  useEffect(() => {
    // When shuffled phrases change, derive selectable words
    if (shuffledPhrases.length > 0) {
      // Keep the selectableWords as it is without breaking phrases into words
      const allWords = shuffledPhrases.map((phrase) => phrase.et);
      const shuffledWords = shuffleArray(allWords); // Shuffle words as well
      setSelectableWords(shuffledWords);
    }
  }, [shuffledPhrases]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  const currentPhrase =
    shuffledPhrases[currentPhraseIndex] || exercise[currentPhraseIndex];

  const { playAudio } = useAudio(currentPhrase.audio_url);

  // Функция для добавления слова
  const handleWordClick = (word: string) => {
    const correctWordCount = currentPhrase.et.split(" ").length; // Count words instead of length

    if (selectedWords.length < correctWordCount) {
      setSelectedWords((prev) => [...prev, word]);

      // Check if the selected words form the correct phrase
      const userPhrase = [...selectedWords, word].join(" "); // Include the newly selected word
      const isCorrectChoice = userPhrase === currentPhrase.et; // Check if they match

      setStatus((prev) => [...prev, { word, isCorrect: isCorrectChoice }]);

      if (isCorrectChoice) {
        playAudio();
        setIsCorrect(true);
        setSelectableWords((prev) => prev.filter((w) => w !== word));
        setTimeout(() => {
          handleNextPhrase();
        }, 3000);
      } else {
        setIsCorrect(false);
        toast.error(`Неправильно! Правильный вариант: ${currentPhrase.et}`);

        setTimeout(() => {
          setSelectedWords((prev) => prev.filter((w) => w !== word));
        }, 1000);
      }
    }
  };

  const handleNextPhrase = () => {
    if (currentPhraseIndex < shuffledPhrases.length - 1) {
      setCurrentPhraseIndex(currentPhraseIndex + 1);
      setSelectedWords([]);
      setStatus([]);
      setIsCorrect(null);
    } else {
      setAllPhrasesCompleted(true);
    }
  };

  // Ensure dict is loaded before accessing it
  if (!dict) {
    return <div>Loading...</div>; // You can show a loader here while dict is being fetched
  }

  // Show the appropriate phrase based on the current language
  const phraseToShow =
    lang === "ru"
      ? currentPhrase.ru || "No Russian translation available"
      : currentPhrase.en || "No English translation available";

  return (
    <div className="px-36 py-12 relative overflow-auto scrollbar overflow-y-auto h-[80%] flex items-center justify-between flex-col">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar
      />

      <h2 className="text-4xl bold mb-7">{dict.createPhrase1.createPhrase}</h2>
      <p className="text-5xl mb-4">{phraseToShow}</p>

      {/* Отображение выбранных слов с их статусом */}
      <div className="flex flex-wrap gap-4 mb-10 ">
        {selectedWords.map((word, index) => {
          const wordStatus = status.find((s) => s.word === word);
          const colorClass =
            isCorrect === null
              ? "bg-gray-500"
              : wordStatus
              ? wordStatus.isCorrect
                ? "bg-green-500"
                : "bg-red-500"
              : "bg-gray-500";

          return (
            <div
              key={index}
              className={`px-4 py-2 text-white rounded-lg ${colorClass} transition-all duration-1000`}
            >
              {word}
            </div>
          );
        })}
      </div>

      {/* Кнопки для выбора слов */}
      <div className="flex flex-wrap gap-4 mb-10">
        {selectableWords.map((word, index) => (
          <button
            key={index}
            onClick={() => handleWordClick(word)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
          >
            {word}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CreatePhraseEstEx;
