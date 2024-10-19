import { useEffect, useState } from "react";

const useAudio = (audioUrl: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioUrl) {
      const newAudio = new Audio(audioUrl);
      setAudio(newAudio);

      const handleAudioEnd = () => {
        if (newAudio) {
          newAudio.currentTime = 0;
        }
      };

      newAudio.addEventListener("ended", handleAudioEnd);

      return () => {
        newAudio.removeEventListener("ended", handleAudioEnd);
        newAudio.pause();
      };
    }
  }, [audioUrl]);

  const playAudio = () => {
    if (audio) {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return { playAudio };
};

export default useAudio;
