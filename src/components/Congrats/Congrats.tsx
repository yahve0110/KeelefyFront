import React from "react";
import Confetti from "react-confetti";
import Button from "../Button/Button";

interface CongratulationsProps {
  containerRef: React.RefObject<HTMLDivElement>; 
}

const Congratulations: React.FC<CongratulationsProps> = ({ containerRef }) => {
  return (
    <div className="w-full">
      <Confetti
        width={window.innerWidth}
        height={containerRef.current?.offsetHeight || 0}
        numberOfPieces={300}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <h2 className="text-3xl text-center">Поздравляем! Вы завершили урок!</h2>
      <Button>Назад к урокам</Button>
    </div>
  );
};

export default Congratulations;
