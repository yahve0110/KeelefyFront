import Image from "next/image";
import Link from "next/link";
import React from "react";
import start from "@/app/imgs/start.png"

const Lessons = () => {
  return (
    <div className="flex justify-center">
      <div className="relative w-[600px] h-[800px]">
        {/* Линия между A2 и B1 */}
        <div className="absolute top-[80px] left-[140px] w-0 h-[170px] border-l-2 border-dashed border-blue-400"></div>

        {/* Линия между B1 и B2 */}
        <div className="absolute top-[250px] right-[180px] w-[280px] h-0 border-t-2 border-dashed border-blue-400"></div>
        <div className="absolute top-[290px] right-[140px] w-0 h-[110px] border-l-2 border-dashed border-blue-400"></div>

        {/* Линия между B2 и C1 */}
        <div className="absolute top-[400px] left-[130px] w-[330px] h-0 border-t-2 border-dashed border-blue-400"></div>
        <div className="absolute top-[440px] left-[90px] w-0 h-[120px] border-l-2 border-dashed border-blue-400"></div>

        {/* Линия между C1 и C2 */}
        <div className="absolute top-[560px] right-[230px] w-[280px] h-0 border-t-2 border-dashed border-blue-400"></div>
        <div className="absolute top-[600px] right-[190px] w-0 h-[190px] border-l-2 border-dashed border-blue-400"></div>
        <div className="absolute top-[790px] left-[180px] w-[230px] h-0 border-t-2 border-dashed border-blue-400"></div>

        {/* A2 */}
        <Link href={"/lessons/levelA"}>
          <div
            className="absolute top-[20px] left-[100px] w-20 h-20 flex items-center justify-center text-2xl font-bold bg-blue-500 rounded-full shadow-2xl cursor-pointer select-none
            active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] transition-all duration-150
            [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] border-[1px] border-blue-400"
          >
            A2
          </div>
        </Link>

        <Image className="absolute -top-[30px] left-[200px]" src={start} alt="start" />

        {/* B1 */}
        <div
          className="absolute top-[200px] right-[100px] w-20 h-20 flex items-center justify-center text-2xl font-bold bg-blue-500 rounded-full shadow-2xl opacity-50 pointer-events-none
          cursor-pointer select-none
          active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] transition-all duration-150
          [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] border-[1px] border-blue-400"
        >
          B1
        </div>
        <div className="absolute top-[160px] right-[10px] text-lg text-gray-500 opacity-50 pointer-events-none">
          Coming soon
        </div>

        {/* B2 */}
        <div
          className="absolute top-[350px] left-[50px] w-20 h-20 flex items-center justify-center text-2xl font-bold bg-blue-500 rounded-full shadow-2xl opacity-50 pointer-events-none
          cursor-pointer select-none
          active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] transition-all duration-150
          [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] border-[1px] border-blue-400"
        >
          B2
        </div>
        <div className="absolute top-[310px] left-[10px] text-lg text-gray-500 opacity-50 pointer-events-none">
          Coming soon
        </div>

        {/* C1 */}
        <div
          className="absolute top-[510px] right-[150px] w-20 h-20 flex items-center justify-center text-2xl font-bold bg-blue-500 rounded-full shadow-2xl opacity-50 pointer-events-none
          cursor-pointer select-none
          active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] transition-all duration-150
          [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] border-[1px] border-blue-400"
        >
          C1
        </div>
        <div className="absolute top-[470px] right-[100px] text-lg text-gray-500 opacity-50 pointer-events-none">
          Coming soon
        </div>

        {/* C2 */}
        <div
          className="absolute top-[750px] left-[100px] w-20 h-20 flex items-center justify-center text-2xl font-bold bg-blue-500 rounded-full shadow-2xl opacity-50 pointer-events-none
          cursor-pointer select-none
          active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] transition-all duration-150
          [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] border-[1px] border-blue-400"
        >
          C2
        </div>
        <div className="absolute top-[710px] left-[60px] text-lg text-gray-500 opacity-50 pointer-events-none">
          Coming soon
        </div>
      </div>
    </div>
  );
};

export default Lessons;
