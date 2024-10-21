// components/audioPlayer/AudioPlayer.tsx
import React from "react";
import { Volume2 } from "lucide-react";
import useAudio from "@/app/shared/hooks/useAudio";

interface AudioPlayerProps {
  audioUrl: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({ audioUrl }) => {
  const { playAudio } = useAudio(audioUrl);

  return (
    <button
      onClick={playAudio}
      className="mt-4 p-4 bg-blue-500 text-white rounded-lg shadow-lg transition-all"
    >
      <Volume2 />
    </button>
  );
};

export default AudioPlayer;
