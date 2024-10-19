export interface WordChoises {
    word: string;
    image_url: string;
    audio_url: string;
    translations?: string[]; // Make translations optional
    correctWord: string;
    description?: string; // Include other properties if needed
  }
  