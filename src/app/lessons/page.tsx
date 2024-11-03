import Image from "next/image";
import React from "react";
import lineSvg from "@/app/imgs/line.svg";
import LevelButton from "@/components/LevelButton/LevelButton"; // Импортируйте ваш компонент LevelButton

const Lessons = () => {
  return (
    <div className="flex justify-center">
      <div className="w-[600px] h-[620px] mt-28 relative">
        <Image className="w-full h-full" src={lineSvg} alt="line" />

        {/* Кнопки в новом порядке */}
        <LevelButton level="C2" href="/lessons/C2" positionStyle="absolute -bottom-[30px] right-[100px]"disabled={true} />
        <LevelButton level="C1" href="/lessons/C1" positionStyle="absolute bottom-[53px] left-[80px]" disabled={true} />
        <LevelButton level="B2" href="/lessons/B2" positionStyle="absolute bottom-[206px] right-[80px]" disabled={true} />
        <LevelButton level="B1" href="/lessons/B1" positionStyle="absolute top-[180px] left-[80px]" disabled={true} />
        <LevelButton level="A2" href="/lessons/A2" positionStyle="absolute top-[27px] right-[80px]" disabled={true} />
        <LevelButton level="A1" href="/lessons/A1" positionStyle="absolute -top-[40px] left-[80px]"  />
      </div>
    </div>
  );
};

export default Lessons;
