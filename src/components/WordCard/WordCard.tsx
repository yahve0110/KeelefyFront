import Image from 'next/image';
import React from 'react';
import AudioPlayer from '@/components/audioPlayer/AudioPlayer';

type Props = {
  wordNative: string;
  wordTranslation: string;
  explanation: string;
  image_url: string;
  audio_url: string;
};

const WordCard: React.FC<Props> = ({ wordNative, wordTranslation, explanation, image_url, audio_url }) => {
  return (
    <div className="text-3xl font-caveat z-20  relative">
      <div className="mb-6 z-20 relative flex flex-col  items-center gap-6">
        <div className="bg-gray-900 text-white p-4 rounded-lg shadow-lg min-h-[500px] border-4 flex flex-col justify-center items-center border-gray-700 relative overflow-hidden z-20 w-full max-w-lg">
          <p className="text-white text-3xl mb-7 chalk-text text-center">
            <span>{wordNative}</span> —
            <span className="text-green-400"> {wordTranslation}</span>
          </p>
          <p className="text-2xl text-gray-300 z-20 relative text-center">
            {explanation}
          </p>

          <Image
            width={300}
            height={300}
            src={image_url}
            alt="illustration"
            className="mt-4 max-w-xs z-20 relative rounded"
          />
        </div>
        <AudioPlayer audioUrl={audio_url} />
      </div>
    </div>
  );
};

export default WordCard;
