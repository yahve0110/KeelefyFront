"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import BackButton from "@/components/BackBtn/BackButton";
import { MultipleChoiseCard } from "@/components/MultipleChoiseCard/MultipleChoiseCard";
import useAudio from "@/app/[lang]/shared/hooks/useAudio";

interface ExerMultipleChoiseEstRu {
  word: string;
  image_url: string;
  audio_url: string;
  nextExercisePath: string;
  translations: string[];
  correctWord: string;
  type: string;
}

const MultipleChoiseEstRu = ({
  exercise,
}: {
  exercise: ExerMultipleChoiseEstRu[];
}) => {
  const router = useRouter();
  const [wordIndex, setWordIndex] = useState(0);
  const [selectedTranslation, setSelectedTranslation] = useState("");
  const [status, setStatus] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const [finished, setFinished] = useState(false);

  const hasExercises = exercise && exercise.length > 0;

  const currentWord = hasExercises ? exercise[wordIndex] : null;
  
  // useEffect всегда будет вызываться, так как он не зависит от условий
  useEffect(() => {
    if (finished) {
      router.push(exercise[0].nextExercisePath);
    }
  }, [finished, router, exercise]);
  const { playAudio } = useAudio(exercise[wordIndex].audio_url);

  const handleTranslationClick = async (translation: string) => {
    if (status !== "") {
      return;
    }

    if (!currentWord) {
      return; // Добавим проверку на наличие currentWord
    }

    setSelectedTranslation(translation);
    const correctAnswer = currentWord.correctWord;

    if (translation === correctAnswer) {
      setStatus("correct");

      // Воспроизводим звук, если выбран правильный ответ
      if (currentWord.audio_url) {
        playAudio();
        setTimeout(() => {
          nextWord();
        }, 3000);
      }
    } else {
      setStatus("incorrect");
      setShowNextButton(true);
    }
  };

  const nextWord = () => {
    if (wordIndex < exercise.length - 1) {
      setWordIndex(wordIndex + 1);
      setSelectedTranslation("");
      setStatus("");
      setShowNextButton(false);
    } else {
      setFinished(true);
      setSelectedTranslation("");
      setStatus("");
    }
  };

  const handleNextClick = () => {
    nextWord();
  };

  // Если нет упражнений, можно отобразить заглушку
  if (!hasExercises) {
    return <div>No words available for this exercise.</div>;
  }

  return (
    <div className="flex items-center flex-col relative">
      <BackButton className="w-11 h-11 p-6 bg-blue-500 absolute left-0px rounded-full" />
      {currentWord ? (
        <MultipleChoiseCard
          handleTranslationClick={handleTranslationClick}
          word={currentWord.word}
          image_url={currentWord.image_url}
          correctWord={currentWord.correctWord}
          translations={currentWord.translations}
          selectedTranslation={selectedTranslation}
          status={status}
          showNextButton={showNextButton}
          handleNextClick={handleNextClick}
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MultipleChoiseEstRu;
