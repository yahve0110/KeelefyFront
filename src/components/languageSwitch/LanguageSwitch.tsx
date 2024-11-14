import Link from "next/link";
import { usePathname } from "next/navigation";

// Типизация пропсов компонента LanguageSwitcher
interface LanguageSwitcherProps {
  currentLang: "en" | "ru"; // Текущий язык
  onLanguageChange: (lang: "en" | "ru") => void; // Обработчик изменения языка
}

export default function LanguageSwitcher({
  currentLang,
  onLanguageChange,
}: LanguageSwitcherProps) {
  const pathname = usePathname(); // Получаем текущий путь

  // Функция для формирования нового пути с языком
  const redirectedPathname = (locale: string) => {
    if (!pathname) return "/";
    const segments = pathname.split("/");
    segments[1] = locale; // Заменяем сегмент пути с языком на новый
    return segments.join("/");
  };

  const languages = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
  ];

  return (
    <div className="flex gap-4">
      {languages.map((lang) => (
        <Link
          key={lang.code}
          href={redirectedPathname(lang.code)}
          onClick={() => onLanguageChange(lang.code as "en" | "ru")} // Устанавливаем новый язык
          className={`${currentLang === lang.code ? "font-bold" : ""}`}
        >
          {lang.name}
        </Link>
      ))}
    </div>
  );
}
