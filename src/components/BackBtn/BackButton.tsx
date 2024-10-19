"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { ArrowBigLeftDash } from "lucide-react";

interface BackButtonProps {
  className?: string;
}

const BackButton: React.FC<BackButtonProps> = ({ className }) => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className={
        className && "w-11 h-11  bg-blue-500 absolute left-[0] rounded-full flex items-center justify-center hover:bg-blue-600 transition-all ease-in-out 150ms"
      }
    >
      <ArrowBigLeftDash className="w-6 h-6" />
    </button>
  );
};

export default BackButton;
