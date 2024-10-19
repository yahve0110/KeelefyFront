// Congratulations.js
import React from "react";
import Confetti from "react-confetti";

const Congratulations = ({ containerRef }) => {
  return (
    <div className="absolute inset-0 pointer-events-none z-50">
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
    </div>
  );
};

export default Congratulations;
