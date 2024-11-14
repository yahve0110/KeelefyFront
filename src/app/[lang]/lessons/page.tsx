"use client";

import Image from "next/image";
import React from "react";
import lineSvg from "@/app/imgs/line.svg";
import LevelButton from "@/components/LevelButton/LevelButton";
import { useParams } from "next/navigation";  

const Lessons = () => {
  const { lang } = useParams(); 

  return (
    <div className="flex justify-center">
      <div className="w-[600px] h-[620px] mt-28 relative">
        <Image className="w-full h-full" src={lineSvg} alt="line" />
        <LevelButton
          level="C2"
          href={`/${lang}/lessons/C2`}
          positionStyle="absolute -bottom-[30px] right-[100px]"
          disabled={true}
        />
        <LevelButton
          level="C1"
          href={`/${lang}/lessons/C1`}
          positionStyle="absolute bottom-[53px] left-[80px]"
          disabled={true}
        />
        <LevelButton
          level="B2"
          href={`/${lang}/lessons/B2`}
          positionStyle="absolute bottom-[206px] right-[80px]"
          disabled={true}
        />
        <LevelButton
          level="B1"
          href={`/${lang}/lessons/B1`}
          positionStyle="absolute top-[180px] left-[80px]"
          disabled={true}
        />
        <LevelButton
          level="A2"
          href={`/${lang}/lessons/A2`}
          positionStyle="absolute top-[27px] right-[80px]"
          disabled={true}
        />
        <LevelButton
          level="A1"
          href={`/${lang}/lessons/A1`}
          positionStyle="absolute -top-[40px] left-[80px]"
          disabled={false}
        />
      </div>
    </div>
  );
};

export default Lessons;
