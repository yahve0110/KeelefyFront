export const data = [
  {
    ru: "Привет!",
    et: "Tere!",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fhello_1.png?alt=media&token=78bed978-afe7-4c69-9816-00bd71141f16",
    audio_url: "https://www.book2.nl/book2/ET/SOUND/0043.mp3",
    description: "Обычное неформальное приветствие.",
  },
  {
    ru: "Добрый день!",
    et: "Tere päevast!",
    description: "Более формальное приветствие, используемое в течение дня.",
    audio_url: "https://www.book2.nl/book2/ET/SOUND/0044.mp3",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fhello_2.png?alt=media&token=7a28a257-8d06-4888-8ba9-f076c920d16c",
  },
  {
    ru: "Доброе утро!",
    et: "Tere hommikust!",
    description: "Приветствие утром",
    audio_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2FTere%20hommikust!.mp3?alt=media&token=9f73128f-5552-4117-bba1-64e88c083a3e",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fmorning.png?alt=media&token=19595786-ead5-4479-9154-de8da1e5142d",
  },
  {
    ru: "Как дела?",
    et: "Kuidas läheb?",
    audio_url: "https://www.book2.nl/book2/ET/SOUND/0045.mp3",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2FhowIsGoing.jpeg?alt=media&token=d2fd54bd-512a-46a3-bd7b-dfe65387c0b7",
    description:
      "Вопрос о самочувствии собеседника, который подразумевает интерес.",
  },
  {
    ru: "Хорошо!",
    et: "Hästi!",
    audio_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fh%C3%A4sti%20.mp3?alt=media&token=f43375ae-3581-42bf-a089-a4ed68155ec7",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fgood.jpeg?alt=media&token=c7cd5196-a73f-4e1c-9941-6d28d23a38b0",
    description: "Ответ на вопрос о самочувствии.",
  },
  {
    ru: "Добрый вечер!",
    et: "Tere õhtust!",
    audio_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2FTere%20%C3%B5htust!.mp3?alt=media&token=8c325087-82cb-4d53-9f10-6b433a0c8793",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fevening.png?alt=media&token=55b07c69-705e-480a-ab1d-dd898cb8fa45",
    description: "Приветсвие в вечернее время.",
  },
];

export const lessons = [
  {
    id: 1,
    title: "Tervitused ja hüvastijätud (Приветствия и прощания)",
    available: true,
    href: "/lessons/levelA/lvl1/part1",
  },
  {
    id: 2,
    title: "Enesetutvustus (Самопредставление)",
    available: false,
    href: "/lessons/levelA/lvl2",
  },
  {
    id: 3,
    title: "Numbrid ja vanus (Числа и возраст)",
    available: false,
    href: "/lessons/levelA/lvl3",
  },
  {
    id: 4,
    title: "Riigid ja rahvused (Страны и национальности)",
    available: false,
    href: "/lessons/levelA/lvl4",
  },
  {
    id: 5,
    title: "Päevad, kuud ja aastaajad (Дни недели, месяцы и времена года)",
    available: false,
    href: "/lessons/levelA/lvl5",
  },
  {
    id: 6,
    title: "Perekond ja suhted (Семья и отношения)",
    available: false,
    href: "/lessons/levelA/lvl6",
  },
  {
    id: 7,
    title: "Ametid ja töökohad (Профессии и рабочие места)",
    available: false,
    href: "/lessons/levelA/lvl7",
  },
  {
    id: 8,
    title: "Igapäevased tegevused (Повседневные дела)",
    available: false,
    href: "/lessons/levelA/lvl8",
  },
  {
    id: 9,
    title: "Ajaväljendid ja kellaaeg (Выражения времени и время суток)",
    available: false,
    href: "/lessons/levelA/lvl9",
  },
  {
    id: 10,
    title: "Toit ja joogid (Еда и напитки)",
    available: false,
    href: "/lessons/levelA/lvl10",
  },
];

export const lessonParts = [
  {
    id: 1,
    title: "Приветствия",
    available: true,
    href: "/lessons/levelA/lvl1",
  },
  {
    id: 2,
    title: "Прощания",
    available: false,
    href: "/lessons/levelA/introduction",
  },
  {
    id: 3,
    title: "Представление себя и других",
    available: false,
    href: "/lessons/levelA/greeting-introduction",
  },
];

export const multipleChoiseEx = [
  {
    word: "Tere",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fhello_1.png?alt=media&token=78bed978-afe7-4c69-9816-00bd71141f16",
    audio_url: "https://www.book2.nl/book2/ET/SOUND/0043.mp3",
    translations: ["До свидания", "Привет", "Доброе утро"],
    correctWord: "Привет",
  },
  {
    word: "Kuidas läheb?",
    audio_url: "https://www.book2.nl/book2/ET/SOUND/0045.mp3",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2FhowIsGoing.jpeg?alt=media&token=d2fd54bd-512a-46a3-bd7b-dfe65387c0b7",
    translations: ["Куда ты?", "Кто ты?", "Как дела?"],
    correctWord: "Как дела?",
  },
  {
    word: "Hästi!",
    audio_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fh%C3%A4sti%20.mp3?alt=media&token=f43375ae-3581-42bf-a089-a4ed68155ec7",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fgood.jpeg?alt=media&token=c7cd5196-a73f-4e1c-9941-6d28d23a38b0",
    translations: ["Привет!", "Хорошо!", "Добрый день!"],
    correctWord: "Хорошо!",
  },
  {
    word: "Tere Hommikust!",
    translations: ["Добрый вечер", "Привет", "Доброе утро!"],
    correctWord: "Доброе утро!",
    audio_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2FTere%20hommikust!.mp3?alt=media&token=9f73128f-5552-4117-bba1-64e88c083a3e",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fmorning.png?alt=media&token=19595786-ead5-4479-9154-de8da1e5142d",
  },
  {
    word: "Tere õhtust",
    translations: ["Добрый вечер", "Привет", "До свидания"],
    correctWord: "Добрый вечер",
    audio_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2FTere%20%C3%B5htust!.mp3?alt=media&token=8c325087-82cb-4d53-9f10-6b433a0c8793",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fevening.png?alt=media&token=55b07c69-705e-480a-ab1d-dd898cb8fa45",
  },
  {
    word: "Tere päevast!",
    translations: ["Добрый вечер", "Добрый день!", "До свидания!"],
    correctWord: "Добрый день!",
    audio_url: "https://www.book2.nl/book2/ET/SOUND/0044.mp3",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fhello_2.png?alt=media&token=7a28a257-8d06-4888-8ba9-f076c920d16c",
  },
];

export const multipleChoiseExRuToEst = [
  {
    word: "Привет",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fhello_1.png?alt=media&token=78bed978-afe7-4c69-9816-00bd71141f16",
    audio_url: "https://www.book2.nl/book2/ET/SOUND/0043.mp3",
    translations: ["Tere", "Head aega", "Tere hommikust"],
    correctWord: "Tere",
  },
  {
    word: "Как дела?",
    audio_url: "https://www.book2.nl/book2/ET/SOUND/0045.mp3",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2FhowIsGoing.jpeg?alt=media&token=d2fd54bd-512a-46a3-bd7b-dfe65387c0b7",
    translations: ["Kuidas läheb?", "Kes sa oled?", "Kuhu lähed?"],
    correctWord: "Kuidas läheb?",
  },
  {
    word: "Хорошо!",
    audio_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fh%C3%A4sti%20.mp3?alt=media&token=f43375ae-3581-42bf-a089-a4ed68155ec7",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fgood.jpeg?alt=media&token=c7cd5196-a73f-4e1c-9941-6d28d23a38b0",
    translations: ["Tere!", "Hästi!", "Tere päevast!"],
    correctWord: "Hästi!",
  },
  {
    word: "Доброе утро!",
    translations: ["Tere hommikust", "Tere õhtust", "Head ööd"],
    correctWord: "Tere hommikust",
    audio_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2FTere%20hommikust!.mp3?alt=media&token=9f73128f-5552-4117-bba1-64e88c083a3e",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fmorning.png?alt=media&token=19595786-ead5-4479-9154-de8da1e5142d",
  },
  {
    word: "Добрый вечер",
    translations: ["Tere õhtust", "Tere päevast", "Head aega"],
    correctWord: "Tere õhtust",
    audio_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2FTere%20%C3%B5htust!.mp3?alt=media&token=8c325087-82cb-4d53-9f10-6b433a0c8793",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fevening.png?alt=media&token=55b07c69-705e-480a-ab1d-dd898cb8fa45",
  },
  {
    word: "Добрый день!",
    translations: ["Tere päevast", "Tere hommikust", "Head aega"],
    correctWord: "Tere päevast",
    audio_url: "https://www.book2.nl/book2/ET/SOUND/0044.mp3",
    image_url:
      "https://firebasestorage.googleapis.com/v0/b/keelefy.appspot.com/o/lesson1%2Fhello_2.png?alt=media&token=7a28a257-8d06-4888-8ba9-f076c920d16c",
  },
];
