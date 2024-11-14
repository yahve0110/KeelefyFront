import Image from "next/image";
import React from "react";
import Button from "../Button/Button";

type Props = {
  word: string;
  image_url: string;
  correctWord: string;
  handleTranslationClick: (translation: string) => void;
  translations: string[];
  selectedTranslation: string;
  status: string;
  showNextButton: boolean;
  handleNextClick: () => void;
};

export const MultipleChoiseCard = (props: Props) => {
  const {
    word,
    image_url,
    translations,
    handleTranslationClick,
    selectedTranslation,
    status,
    showNextButton,
    handleNextClick,
    correctWord,
  } = props;

  return (
    <div className="bg-gray-900 text-white p-8  h-[780px] shadow-lg border-4 border-gray-700 relative overflow-hidden z-20 rounded-2xl w-[530px]">
      <div className="flex items-center flex-col mt-14">
        <>
          <p className="text-5xl mb-4">{word}</p>
          {image_url && (
            <Image
              width={300}
              height={300}
              src={image_url}
              alt="illustration"
              className="mt-4 max-w-xs z-20 relative rounded mb-12"
            />
          )}

          <div className="h-16 overflow-hidden flex flex-col justify-center">
            {status === "incorrect" && (
              <p className="text-red-600 text-2xl">
                Неверно! Правильный ответ: {correctWord}
              </p>
            )}
            {status === "correct" && (
              <p className="text-green-600 text-sm"></p>
            )}
          </div>

          <div className="mt-26 flex gap-6 mb-8">
            {translations.map((el) => (
              <Button
                key={el}
                onClick={() => handleTranslationClick(el)}
                className={`p-[8px] rounded-2xl text-[18px] min-w-[140px] min-h-[60px] ${
                  selectedTranslation === el
                    ? status === "correct"
                      ? "bg-green-500"
                      : status === "incorrect"
                      ? "bg-red-500"
                      : ""
                    : "bg-blue-500"
                } ${status !== "" ? "cursor-not-allowed opacity-50" : ""}`}
                disabled={status !== ""}
              >
                {el}
              </Button>
            ))}
          </div>

          {showNextButton && (
            <Button
              onClick={handleNextClick}
              className="mt-4 p-2 bg-blue-500 text-white rounded"
            >
              Далее
            </Button>
          )}
        </>
      </div>
    </div>
  );
};
