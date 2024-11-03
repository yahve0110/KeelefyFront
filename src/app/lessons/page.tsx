"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import lineSvg from "@/app/imgs/line.svg";
import LevelButton from "@/components/LevelButton/LevelButton"; // Import your LevelButton component

// Define the structure of a Level object
interface Level {
  id: string;
  availible: boolean; // Correct spelling should be `available`
  href: string;
  name: string;
  sequence: number | string; // Could be either number or string based on your data
}

const Lessons: React.FC = () => {
  const [levels, setLevels] = useState<Level[]>([]); // State to hold levels data

  // Position styles for each level
  const levelPositions: Record<string, string> = {
    A1: "absolute -top-[40px] left-[80px]",
    A2: "absolute top-[27px] right-[80px]",
    B1: "absolute top-[180px] left-[80px]",
    B2: "absolute bottom-[206px] right-[80px]",
    C1: "absolute bottom-[53px] left-[80px]",
    C2: "absolute -bottom-[30px] right-[100px]"
  };

  // Fetch levels data from API on component mount
  useEffect(() => {
    const fetchLevels = async () => {
      try {
        const response = await fetch("/api/levels"); // Call your API endpoint
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data: Level[] = await response.json(); // Parse the JSON data with type
        setLevels(data); // Update state with fetched levels
      } catch (error) {
        console.error("Error fetching levels:", error); // Log any errors
      }
    };

    fetchLevels(); // Execute fetch function
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-[600px] h-[620px] mt-28 relative">
        <Image className="w-full h-full" src={lineSvg} alt="line" />

        {/* Render LevelButton components dynamically based on levels data */}
        {levels.map(level => (
          <LevelButton
            key={level.id} // Unique key for each button
            level={level.name} // Use name from the data
            href={level.href} // Dynamic link for each level
            positionStyle={levelPositions[level.id]} // Style based on id
            disabled={!level.availible} // Disable button if not available
          />
        ))}
      </div>
    </div>
  );
};

export default Lessons;
