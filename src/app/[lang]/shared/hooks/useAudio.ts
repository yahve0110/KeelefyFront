import { useEffect, useState } from "react";
import { useStore } from "../store/store";

const useAudio = (audioUrl: string) => {
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const { soundOn } = useStore(); // Get soundOn state from your store

  useEffect(() => {
    // Create new audio object only if audioUrl is available
    if (audioUrl) {
      const newAudio = new Audio(audioUrl);
      setAudio(newAudio);

      const handleAudioEnd = () => {
        if (newAudio) {
          newAudio.currentTime = 0; // Reset the audio time when it ends
        }
      };

      newAudio.addEventListener("ended", handleAudioEnd);

      return () => {
        newAudio.removeEventListener("ended", handleAudioEnd);
        newAudio.pause();
        newAudio.src = ""; // Clean up the audio source
      };
    }
  }, [audioUrl]);

  const playAudio = () => {
    if (soundOn && audio) {
      audio.currentTime = 0; // Reset the audio time to the beginning
      audio.play().catch((error) => {
        console.error("Audio playback failed:", error); // Handle any playback errors
      });
    }
  };

  const muteAudio = () => {
    if (audio) {
      audio.muted = true; // Mute the audio
    }
  };

  const unmuteAudio = () => {
    if (audio) {
      audio.muted = false; // Unmute the audio
    }
  };

  return { playAudio, muteAudio, unmuteAudio }; // Return the play, mute, and unmute functions
};

export default useAudio;
