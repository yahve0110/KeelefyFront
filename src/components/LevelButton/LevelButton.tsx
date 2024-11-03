import Link from "next/link";
import React from "react";

type LevelButtonProps = {
  level: string;
  href: string;
  disabled?: boolean;
  positionStyle: string;
};

const LevelButton: React.FC<LevelButtonProps> = ({
  level,
  href,
  disabled,
  positionStyle,
}) => {
  if (disabled) {
    return (
      <div>
        <div
          className={`w-20 h-20 flex items-center justify-center text-2xl font-bold bg-gray-600  rounded-full shadow-2xl cursor-pointer select-none
            active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] transition-all duration-150
             border-[1px] border-gray-600 [box-shadow:0_2px_0_0_#444,0_4px_0_0_#222] ${positionStyle} cursor-not-allowed`}
        >
          {level}
        </div>
      </div>
    );
  }

  return (
    <Link href={href}>
      <div
        className={`w-20 h-20 flex items-center justify-center text-2xl font-bold bg-blue-500 rounded-full shadow-2xl cursor-pointer select-none
          active:translate-y-2 active:[box-shadow:0_0px_0_0_#1b6ff8,0_0px_0_0_#1b70f841] transition-all duration-150
          [box-shadow:0_8px_0_0_#1b6ff8,0_13px_0_0_#1b70f841] border-[1px] border-blue-400 ${positionStyle}`}
      >
        {level}
      </div>
    </Link>
  );
};

export default LevelButton;
