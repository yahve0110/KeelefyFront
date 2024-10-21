"use client";
import { useState } from "react";
import Link from "next/link";
import WordCard from "@/components/WordCard/WordCard";
import { ex1Theory } from "@/app/data";
import Button from "@/components/Button/Button";

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  //toDo fetch data from server
  const greetings = ex1Theory;

  //fetch first lesson 
  const firstLesson = '/lesson/c1b4d7d5-4f3f-43d8-a7cb-e827c6f40d45/exercise/1'

  const handleNext = () => {
    if (currentIndex < greetings.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentGreeting = greetings[currentIndex];

  return (
    <div className="flex justify-center items-center ">
      <div className="px-8 py-12 relative overflow-auto flex flex-col items-center justify-center scrollbar overflow-y-auto z-10 max-w-4xl w-[600px]">
        <h2 className="text-4xl font-bold mb-7 font-caveat text-white z-20 relative text-center">
          Приветствия и прощания
        </h2>
        <WordCard
          wordNative={currentGreeting.ru}
          wordTranslation={currentGreeting.et}
          explanation={currentGreeting.description}
          image_url={currentGreeting.image_url}
          audio_url={currentGreeting.audio_url}
        />
        <div className="mt-14 h-26 w-[440px] flex justify-between z-20">
          <Button
            onClick={handlePrev}
            className={`w-32 h-16 flex items-center justify-center text-xl rounded-xl ${
              currentIndex === 0
                ? "bg-gray-500 cursor-not-allowed"
                : ""
            } transition-all ease-in-out 150ms`}
            disabled={currentIndex === 0}
          >
            Назад
          </Button>

          {currentIndex === greetings.length - 1 ? (
            <Link href={`${firstLesson}`}>
              <Button className="min-w-32 h-16 flex items-center justify-center text-xl p-4 bg-green-500 text-white rounded-lg transition-all ease-in-out 150ms">
                Практиковаться!
              </Button>
            </Link>
          ) : (
            <Button
              onClick={handleNext}
              className={`w-32 h-16 flex items-center justify-center text-xl rounded-xl ${
                currentIndex === greetings.length - 1
                  ? "bg-gray-500 cursor-not-allowed"
                  : ""
              } transition-all ease-in-out 150ms`}
              disabled={currentIndex === greetings.length - 1}
            >
              Следующее
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
