"use client"; // Ensure this component is treated as a client component
import React, { useRef, useEffect, useState } from "react";
import Confetti from "react-confetti";
import Button from "@/components/Button/Button"; // Adjust the path if necessary

const Congratulations: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [confettiDimensions, setConfettiDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  // Update dimensions based on the container ref
  useEffect(() => {
    const updateConfettiDimensions = () => {
      if (containerRef.current) {
        setConfettiDimensions({
          width: containerRef.current.offsetWidth,
          height: containerRef.current.offsetHeight,
        });
      }
    };

    // Set initial dimensions
    updateConfettiDimensions();

    // Update dimensions on resize
    window.addEventListener("resize", updateConfettiDimensions);
    
    // Clean up the event listener
    return () => {
      window.removeEventListener("resize", updateConfettiDimensions);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen flex flex-col items-center justify-center"
    >
      <Confetti
        width={confettiDimensions.width}
        height={confettiDimensions.height}
        numberOfPieces={300}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
      <h2 className="text-3xl text-center mt-10">
        Confratulations! You have finished the lesson!
      </h2>
      <div className="flex justify-center mt-4">
        <Button className="p-2" onClick={() => (window.location.href = "/en/lessons/levelA/list/1")}>
          Back to lessons
        </Button>
      </div>
    </div>
  );
};

export default Congratulations;
