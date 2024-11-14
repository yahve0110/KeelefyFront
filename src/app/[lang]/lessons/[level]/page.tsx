"use client"
import React, { useEffect, useState } from "react";
import { LessonCard } from "@/components/LessonCard/LessonCard";
import BackButton from "@/components/BackBtn/BackButton";
import { lessonsEng, lessonsRu } from "@/app/[lang]/data";
import { useParams } from "next/navigation";

const LevelALessonsList = () => {
  const { lang } = useParams(); 

  console.log(lang)

  const [lessonsList, setLessonsList] = useState(lessonsRu);

  useEffect(() => {
    if(lang === "ru"){
      setLessonsList(lessonsRu)
    }else(
      setLessonsList(lessonsEng)
    )
   
  }, [lang]);

  return (
    <div className="relative overflow-auto px-24 scrollbar overflow-y-auto">
      <BackButton className="w-11 h-11 p-6 bg-blue-500 absolute left-[0] rounded-full" />
      <div className="flex flex-col gap-8">
        {lessonsList.map((lesson) => (
          <LessonCard
            id={lesson.id}
            title={lesson.title}
            available={lesson.available}
            href={`/${lang}/lessons/levelA/list/${lesson.id}`}
            key={lesson.id}
          />
        ))}
      </div>
    </div>
  );
};

export default LevelALessonsList;
