"use client";
import { multipleChoiseEx } from "@/app/data";
import BackButton from "@/components/BackBtn/BackButton";
import { MultipleChoiseCard } from "@/components/MultipleChoiseCard/MultipleChoiseCard";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const MultipleChoiseExcercie = () => {
  const words = multipleChoiseEx;
  const router = useRouter();

  const [wordIndex, setWordIndex] = useState(0);
  const [selectedTranslation, setSelectedTranslation] = useState("");
  const [status, setStatus] = useState("");
  const [showNextButton, setShowNextButton] = useState(false);
  const [finished, setFinished] = useState(false);

  const currentWord = words[wordIndex];

  useEffect(() => {
    if (finished) {
      router.push("/lessons/levelA/lvl1/exercise2");
    }
  }, [finished,router]);

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
        const audio = new Audio(currentWord.audio_url);
        await playAudio(audio); // Ждем завершения воспроизведения
      }

      nextWord();
    } else {
      setStatus("incorrect");
      setShowNextButton(true);
    }
  };

  const playAudio = (audio: HTMLAudioElement): Promise<void> => {
    return new Promise((resolve) => {
      audio.play();
      audio.onended = () => {
        resolve();
      };
    });
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

export default MultipleChoiseExcercie;
