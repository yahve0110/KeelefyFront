import { MoveRight } from "lucide-react";
import Link from "next/link";
import React from "react";

interface LessonCardProps {
  id: number;
  title: string;
  available: boolean;
  href: string;
}

export const LessonCard: React.FC<LessonCardProps> = ({
  id,
  title,
  available,
  href,
}) => {
  const color = available ? "bg-green-500" : "bg-red-500";

  return (
    <div className="w-[800px] p-6 bg-blue-500/90 rounded-xl flex items-center justify-between">
      <div className="flex gap-2">
        <div
          className={`w-12 h-12 ${color} rounded-full flex items-center justify-center`}
        >
          <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full text-black text-xl">
            {id}
          </div>
        </div>
        <h2 className="text-2xl ml-2">{title}</h2>
      </div>
      <Link href={href} passHref>
        <button
          className={`w-8 h-8 bg-white rounded group flex justify-center items-center transition ease-in-out delay-100 ${
            available ? "hover:bg-green-500" : "opacity-50 cursor-not-allowed"
          }`}
          disabled={!available}
        >
          <MoveRight
            className={`text-blue-500 w-4 h-4 transition ease-in-out delay-100 ${
              available ? "group-hover:text-white" : "text-gray-400"
            }`}
          />
        </button>
      </Link>
    </div>
  );
};
