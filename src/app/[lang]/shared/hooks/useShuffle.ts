import { useState, useEffect } from 'react';

const useShuffle = <T>(initialArray: T[]) => {
  const [shuffledArray, setShuffledArray] = useState<T[]>([]);

  useEffect(() => {
    const shuffleArray = [...initialArray];
    for (let i = shuffleArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffleArray[i], shuffleArray[j]] = [shuffleArray[j], shuffleArray[i]]; // Swap
    }
    setShuffledArray(shuffleArray);
  }, [initialArray]);

  return shuffledArray;
};

export default useShuffle;
