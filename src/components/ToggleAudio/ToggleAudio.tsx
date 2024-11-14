// components/audioPlayer/ToggleAudio.tsx
import React from "react";
import { Volume2, VolumeOff } from "lucide-react";
import { useStore } from "@/app/[lang]/shared/store/store";

const ToggleAudio: React.FC = () => {
  const { soundOn, toggle } = useStore();

  return (
    <div>
      <button
        onClick={toggle}
        className={`mt-4 p-4 text-white rounded-lg shadow-lg transition-all cursor-pointer ${
          soundOn ? "bg-blue-500" : "bg-red-500"
        }`}
        aria-label={soundOn ? "Mute audio" : "Unmute audio"}
      >
        {soundOn ? <Volume2 /> : <VolumeOff />}
      </button>
    </div>
  );
};

export default ToggleAudio;
