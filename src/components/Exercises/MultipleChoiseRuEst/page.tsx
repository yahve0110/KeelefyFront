"use client";
import React, { useState, useEffect } from "react";
import BackButton from "@/components/BackBtn/BackButton";
import { MultipleChoiseCard } from "@/components/MultipleChoiseCard/MultipleChoiseCard";
import { useRouter } from "next/navigation";
import useAudio from "@/app/shared/hooks/useAudio";

// Универсальный интерфейс для любого упражнения Multiple Choice
interface MultipleChoiceExercise {
  word: string;
  image_url: string;
  audio_url: string;
  translations: string[];
  correctWord: string;
  type: string;
  nextExercisePath: string;
}

// Универсальный компонент для Multiple Choice
const MultipleChoice = ({
  exercise,
}: {
  exercise: MultipleChoiceExercise[];
}) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [selectedTranslation, setSelectedTranslation] = useState("");
  const [status, setStatus] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const [finished, setFinished] = useState(false);

  const router = useRouter();
  const words = exercise;
  const currentWord = words[wordIndex];
  const { playAudio } = useAudio(words[wordIndex].audio_url);

  useEffect(() => {
    if (finished) {
      router.push(exercise[0].nextExercisePath);
    }
  }, [finished, router, exercise]);

  const handleTranslationClick = async (translation: string) => {
    if (status !== "") {
      return;
    }

    setSelectedTranslation(translation);
    const correctAnswer = words[wordIndex].correctWord;

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
    if (wordIndex < words.length - 1) {
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

  return (
    <div className="flex items-center flex-col relative">
      <BackButton className="w-11 h-11 p-6 bg-blue-500 absolute left-0px rounded-full" />
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
    </div>
  );
};

export default MultipleChoice;
