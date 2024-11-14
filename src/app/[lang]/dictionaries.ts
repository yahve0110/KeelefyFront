// dictionaries.ts

const dictionaries = {
  en: () => import('@/locales/en.json').then((module) => module.default),
  ru: () => import('@/locales/ru.json').then((module) => module.default),
};

type Locale = 'en' | 'ru';

export const getDictionary = async (locale: Locale) => {
  const dictionary = await dictionaries[locale]();
  return dictionary;
};
