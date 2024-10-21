import React from "react";
import { LessonCard } from "@/components/LessonCard/LessonCard";
import BackButton from "@/components/BackBtn/BackButton";
import { lessons } from "@/app/data";

const LevelALessonsList = () => {
  //toDo:fetch lvlA lessons

  const lessonsList = lessons;
  return (
    <div className="relative overflow-auto px-24 scrollbar overflow-y-auto">
      <BackButton className="w-11 h-11 p-6 bg-blue-500 absolute left-[0] rounded-full" />
      <div className="flex flex-col gap-8">
        {lessonsList.map((lesson) => (
          <LessonCard
            id={lesson.id}
            title={lesson.title}
            available={lesson.available}
            href={`/lessons/levelA/list/${lesson.id}`}
            key={lesson.id}
          />
        ))}
      </div>
    </div>
  );
};

export default LevelALessonsList;
