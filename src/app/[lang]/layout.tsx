"use client";
import "../globals.css";
import Sidebar from "@/components/Sidebar/sidebar";
import Chatbot from "@/components/Chatbot/ChatBot";
import LanguageSwitcher from "@/components/languageSwitch/LanguageSwitch";
import { getDictionary } from "./dictionaries";
import React, { useState, useEffect } from "react";

// // Подключение шрифта
// const nunito = Nunito({
//   subsets: ["latin"],
//   display: "swap",
// });

interface Dictionary {
  products: {
    cart: string;
  };
  nav: {
    lessons: string;
    dictionary: string;
    profile: string;
    settings: string;
    chat: string;
  };
}
// Типизация пропсов компонента RootLayout
interface RootLayoutProps {
  children: React.ReactNode;
  params: { lang: 'en' | 'ru' };  // Типизация для параметра lang
}

export default function RootLayout({
  children,
  params: { lang }, // Деструктуризация lang из params
}: RootLayoutProps) {
  // Стейт для текущего языка
  const [currentLang, setCurrentLang] = useState<'en' | 'ru'>(lang); // Инициализация с переданным значением lang
  const [dictionary, setDictionary] = useState<Dictionary | null>(null);

  // Загружаем словарь в зависимости от текущего языка
  useEffect(() => {
    const fetchDictionary = async () => {
      const dict = await getDictionary(currentLang);
      setDictionary(dict);
    };
    fetchDictionary();
  }, [currentLang]);

  // Обработчик для смены языка
  const handleLanguageChange = (lang: 'en' | 'ru') => {
    setCurrentLang(lang);
  };

  // Пока словарь не загружен, показываем загрузку
  if (!dictionary) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex h-screen relative">
      <div className="absolute right-12">
        <LanguageSwitcher 
          currentLang={currentLang} 
          onLanguageChange={handleLanguageChange} 
        />
      </div>
      <Sidebar currentLang={currentLang} dictionary={dictionary} />
      <main className="flex flex-grow p-4 justify-center mt-7">
        {children}
      </main>
      <Chatbot />
    </div>
  );
}
