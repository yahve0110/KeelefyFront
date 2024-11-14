"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import WordCard from "@/components/WordCard/WordCard";
import { ex1TheoryEng, ex1TheoryRu } from "@/app/[lang]/data";
import Button from "@/components/Button/Button";
import { useParams } from "next/navigation";

interface Greeting {
  ru?: string;
  en?: string;
  et: string;
  description: string;
  image_url: string;
  audio_url: string;
}

const Page = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [greetings, setGreetings] = useState<Greeting[]>(ex1TheoryRu);

  const { lang } = useParams();
  const locale = lang === "ru" ? "ru" : "en";

  // Fetch first lesson link
  const firstLesson =
    "/lessons/lesson/c1b4d7d5-4f3f-43d8-a7cb-e827c6f40d45/exercise/1";

  useEffect(() => {
    // Set greetings based on the selected language
    if (locale === "ru") {
      setGreetings(ex1TheoryRu);
    } else {
      setGreetings(ex1TheoryEng);
    }
  }, [locale]);

  // Handle next button click
  const handleNext = () => {
    if (greetings && currentIndex < greetings.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  // Handle previous button click
  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Get the current greeting
  const currentGreeting = greetings ? greetings[currentIndex] : null;

  return (
    <div className="flex justify-center items-center">
      <div className="px-8 py-12 relative overflow-auto flex flex-col items-center justify-center scrollbar overflow-y-auto z-10 max-w-4xl w-[600px]">
        <h2 className="text-3xl font-bold mb-7 font-caveat text-white z-20 relative text-center">
          {locale === "ru"
            ? "Нажмите на карточку, чтобы посмотреть перевод"
            : "Click the card to see the translation"}
        </h2>

        {currentGreeting ? (
          <WordCard
          wordNative={locale === "ru" ? currentGreeting.ru ?? "" : currentGreeting.en ?? ""}
          wordTranslation={currentGreeting.et}
            explanation={currentGreeting.description}
            image_url={currentGreeting.image_url}
            audio_url={currentGreeting.audio_url}
          />
        ) : (
          <p>Loading greetings...</p>
        )}

        <div className="mt-14 h-26 w-[440px] flex justify-between z-20">
          <Button
            onClick={handlePrev}
            className={`w-32 h-16 flex items-center justify-center text-xl rounded-xl ${
              currentIndex === 0
                ? "bg-gray-500 cursor-not-allowed"
                : "bg-blue-500"
            } transition-all ease-in-out 150ms`}
            disabled={currentIndex === 0}
          >
            {locale === "ru" ? "Назад" : "Back"}
          </Button>

          {greetings && currentIndex === greetings.length - 1 ? (
            <Link href={`/${locale}${firstLesson}`}>
              <Button className="min-w-32 h-16 flex items-center justify-center text-xl p-4 bg-green-500 hover:bg-green-600 text-white rounded-lg transition-all ease-in-out 150ms">
                {locale === "ru" ? "Практиковаться!" : "Practice!"}
              </Button>
            </Link>
          ) : (
            <Button
              onClick={handleNext}
              className={`w-32 h-16 flex items-center justify-center text-xl rounded-xl ${
                greetings && currentIndex === greetings.length - 1
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-blue-500"
              } transition-all ease-in-out 150ms`}
              disabled={greetings && currentIndex === greetings.length - 1}
            >
              {locale === "ru" ? "Следующее" : "Next"}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
