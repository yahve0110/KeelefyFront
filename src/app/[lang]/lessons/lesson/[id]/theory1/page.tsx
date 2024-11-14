"use client";

import { getDictionary } from "@/app/[lang]/dictionaries";
import { Dictionary } from "@/app/[lang]/shared/types/dictionary";
import Button from "@/components/Button/Button";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";




const Page = () => {
  const { lang } = useParams(); // Получение языка из маршрута
  const locale = lang === "ru" ? "ru" : "en"; // Обработка возможного значения языка

  const [dictionary, setDictionary] = useState<Dictionary | null>(null);
  const [iframeUrl, setIframeUrl] = useState("");

  useEffect(() => {
    // Загрузка словаря на основе языка
    const loadDictionary = async () => {
      const dict = await getDictionary(locale);
      setDictionary(dict);
    };

    // Установка URL для iframe на основе языка
    const url =
      locale === "ru"
        ? "https://app.heygen.com/embeds/7cecce1c8c1d46c389425dc2889cc356"
        : "https://www.youtube.com/watch?v=-UXbVHfG8WI&ab_channel=BloombergTelevision";

    setIframeUrl(url);
    loadDictionary();
  }, [locale]);

  if (!dictionary) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <iframe
        width="1060"
        height="615"
        src={iframeUrl}
        title="Video player"
        frameBorder="0"
        allow="encrypted-media; fullscreen;"
        allowFullScreen
      ></iframe>
      <div className="w-full flex justify-end">
        <Link
          href={`/${lang}/lessons/lesson/c1b4d7d5-4f3f-43d8-a7cb-e827c6f40d45/theory2`}
        >
          <Button className="mt-20 w-36 p-4 text-xl">
            {dictionary.general.nextBtn}
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Page;
