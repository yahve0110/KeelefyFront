import Image from "next/image";
import React, { useState } from "react";
import AudioPlayer from "@/components/audioPlayer/AudioPlayer";
import { Star } from "lucide-react";

type Props = {
  wordNative: string;
  wordTranslation: string;
  explanation: string;
  image_url: string;
  audio_url: string;
};

const WordCard: React.FC<Props> = ({
  wordNative,
  wordTranslation,
  explanation,
  image_url,
  audio_url,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Function to handle the flip
  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  // Function to stop the event from propagating to the parent card flip handler
  const handleAudioPlayerClick = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <div
      className="relative w-full max-w-[440px] text-3xl font-caveat z-20 cursor-pointer"
      onClick={handleFlip}
    >
      <div className="group perspective">
        <div
          className={`relative w-full h-full transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front side */}
          <div className="flip-card-front bg-gray-900 rounded-3xl border-4 border-black-900 shadow-lg min-h-[600px] flex flex-col items-center justify-center p-4 backface-hidden">
            <Image
              width={300}
              height={300}
              src={image_url}
              alt="illustration"
              className="mb-12 max-w-xs rounded"
            />
            <div className="text-white text-center">
              <p className="text-5xl mb-7 chalk-text">{wordTranslation}</p>
            </div>
            <div className="flex justify-between w-full px-5 items-center">
              <Star className="w-11 h-11 text-yellow-500" />
              {/* Pass the stopPropagation handler to the AudioPlayer */}
              <div onClick={handleAudioPlayerClick}>
                <AudioPlayer audioUrl={audio_url} />
              </div>
            </div>
          </div>

          {/* Back side (translation view) */}
          <div className="flip-card-back gap-6  bg-gray-900 rounded-3xl border-4 border-gray-400 shadow-lg min-h-[600px] flex flex-col items-center justify-center p-6 backface-hidden transform rotate-y-180 absolute inset-0">
            <p className=" text-6xl text-center">{wordNative}</p>
            <div className="bg-blue-500 w-52 rounded-full h-1"></div>
            <p className="text-xl bold text-center text-blue-500">
              {explanation}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WordCard;
