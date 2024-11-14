import React from "react";
import { getDictionary } from "./dictionaries";


type Locale = 'en' | 'ru';

interface HomeProps {
  params: {
    lang: string; 
  };
}

const Home: React.FC<HomeProps> = async ({ params }: HomeProps) => {
  const { lang } = params;

  if (lang !== 'en' && lang !== 'ru') {
    throw new Error(`Invalid locale: ${lang}`);
  }

  const dict = await getDictionary(lang as Locale); 
  
  return <button>{dict.products.cart}</button>;
};

export default Home;
