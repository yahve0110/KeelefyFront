import { lessonParts } from "@/app/data";
import BackButton from "@/components/BackBtn/BackButton";
import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const LessonParts = ({ params }: { params: { slug: string } }) => {

  //todo fetch data from server
  const parts = lessonParts;

  console.log(params);

  return (
    <div className="relative  overflow-auto px-24 scrollbar overflow-y-auto">
      <BackButton className="w-11 h-11 p-6 bg-blue-500 absolute left-[0] rounded-full" />
      <div className="flex flex-col gap-8 ">
        {parts.map((part) => {
          return (
            <div
              className="w-[800px] p-6 bg-blue-500/90 rounded-xl flex justify-between"
              key={part.id}
            >
              <h2 className="text-2xl">{part.title}</h2>
              <Link href={`/lessons/lesson/${part.id}/theory1`} passHref>
                <button
                  className={`w-8 h-8 bg-white rounded group flex justify-center items-center transition ease-in-out delay-100 ${
                    part.available
                      ? "hover:bg-green-500"
                      : "opacity-50 cursor-not-allowed"
                  }`}
                  disabled={!part.available}
                >
                  <MoveRight
                    className={`text-blue-500 w-4 h-4 transition ease-in-out delay-100 ${
                      part.available
                        ? "group-hover:text-white"
                        : "text-black-900"
                    }`}
                  />
                </button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LessonParts;
