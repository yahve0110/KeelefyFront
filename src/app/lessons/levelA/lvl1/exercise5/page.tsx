"use client";
import React, { useState, useEffect, useRef } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BackButton from "@/components/BackBtn/BackButton";
import { useRouter } from "next/navigation";
import { data } from "@/app/data"; // Import your data source
import useAudio from "@/app/shared/hooks/useAudio"; 
import useShuffle from "@/app/shared/hooks/useShuffle";
import Congratulations from "@/components/Congrats/Congrats"; // Import the Congratulations component

const phrases = data; // Assuming data is an array of phrase objects

const Page = () => {
  const [selectedPhrases, setSelectedPhrases] = useState<string[]>([]);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState<number>(0);
  const [status, setStatus] = useState<{ phrase: string; isCorrect: boolean }[]>([]);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [allPhrasesCompleted, setAllPhrasesCompleted] = useState<boolean>(false);
  const [selectablePhrases, setSelectablePhrases] = useState<string[]>([]);

  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null); // Create a ref for the container

  // Shuffle the phrases using the custom hook
  const shuffledPhrases = useShuffle(phrases);

  useEffect(() => {
    if (allPhrasesCompleted) {
      router.push("/lessons/levelA/lvl1/part1"); // Redirect when all phrases are completed
    }
  }, [allPhrasesCompleted, router]);

  useEffect(() => {
    if (shuffledPhrases.length > 0) {
      const allPhrases = shuffledPhrases.map((phrase) => phrase.ru); // Keep phrases intact
      const shuffledPhrasesList = shuffleArray(allPhrases); // Shuffle phrases
      setSelectablePhrases(shuffledPhrasesList);
    }
  }, [shuffledPhrases]);

  const shuffleArray = <T,>(array: T[]): T[] => {
    return array.sort(() => Math.random() - 0.5);
  };

  const currentPhrase = shuffledPhrases[currentPhraseIndex] || phrases[currentPhraseIndex];

  const { playAudio } = useAudio(currentPhrase.audio_url);

  // Function to add a selected phrase
  const handlePhraseClick = (phrase: string) => {
    const correctPhrase = currentPhrase.ru; // Get the Estonian phrase for the current question

    if (!selectedPhrases.includes(phrase)) {
      setSelectedPhrases((prev) => [...prev, phrase]);
      
      // Check if the selected phrases form the correct phrase
      const userPhrase = selectedPhrases.concat(phrase).join(" "); // Include the newly selected phrase

      // Adjusted logic to check if the selected phrases match the correct phrase
      const isCorrectChoice = userPhrase.trim() === correctPhrase.trim(); // Check if they match

      setStatus((prev) => [...prev, { phrase, isCorrect: isCorrectChoice }]);

      if (isCorrectChoice) {
        playAudio(); 
        setIsCorrect(true);
        setSelectablePhrases((prev) => prev.filter((p) => p !== phrase)); // Remove selected phrase from selectable
        setTimeout(() => {
          handleNextPhrase();
        }, 3000);
      } else {
        setIsCorrect(false);
        toast.error(`Неправильно! Правильный вариант: ${correctPhrase}`);
        
        // Optional: Delay before allowing to remove selected phrase
        setTimeout(() => {
          setSelectedPhrases((prev) => prev.filter((p) => p !== phrase));
        }, 1000);
      }
    }
  };

  const handleNextPhrase = () => {
    if (currentPhraseIndex < shuffledPhrases.length - 1) {
      setCurrentPhraseIndex(currentPhraseIndex + 1);
      setSelectedPhrases([]);
      setStatus([]);
      setIsCorrect(null);
    } else {
      setAllPhrasesCompleted(true);
    }
  };

  return (
    <div className="px-36 py-12 relative overflow-auto scrollbar overflow-y-auto h-[80%] flex items-center justify-between flex-col" ref={containerRef}>
      <ToastContainer position="bottom-right" autoClose={2000} hideProgressBar />
      <BackButton className="w-11 h-11 p-6 bg-blue-500 absolute left-[0] rounded-full" />

      {allPhrasesCompleted ? (
        <Congratulations containerRef={containerRef} /> // Render the Congratulations component
      ) : (
        <>
          <h2 className="text-4xl bold mb-7">Соберите предложение на эстонском</h2>
          <p className="text-5xl mb-4">{currentPhrase.et}</p> {/* Display Estonian phrase */}

          {/* Display selected phrases with their status */}
          <div className="flex flex-wrap gap-4 mb-10 ">
            {selectedPhrases.map((phrase, index) => {
              const phraseStatus = status.find((s) => s.phrase === phrase);
              const colorClass =
                isCorrect === null
                  ? "bg-gray-500"
                  : phraseStatus
                  ? phraseStatus.isCorrect
                    ? "bg-green-500"
                    : "bg-red-500"
                  : "bg-gray-500";

              return (
                <div
                  key={index}
                  className={`px-4 py-2 text-white rounded-lg ${colorClass} transition-all duration-1000`}
                >
                  {phrase}
                </div>
              );
            })}
          </div>

          {/* Buttons for selecting phrases */}
          <div className="flex flex-wrap gap-4 mb-10">
            {selectablePhrases.map((phrase, index) => (
              <button
                key={index}
                onClick={() => handlePhraseClick(phrase)}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                {phrase}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Page;
