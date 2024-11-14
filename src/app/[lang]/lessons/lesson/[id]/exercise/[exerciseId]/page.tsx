"use client";
import { exType } from "@/app/[lang]/data";
import ToggleAudio from "@/components/ToggleAudio/ToggleAudio";
import CreatePhraseEstEx from "@/components/Exercises/CreatePhraseEstEx/page";
import CreatePhraseRu from "@/components/Exercises/CreatePhraseRu/page";
import Matching from "@/components/Exercises/Matching/page";
import MultipleChoiseEstRu from "@/components/Exercises/MultipleChoiseEstRu/page";
import MultipleChoiseRuEst from "@/components/Exercises/MultipleChoiseRuEst/page";
import { useParams } from "next/navigation";

const ExercisePage = ({
  params,
}: {
  params: { lessonId: string; exerciseId: string };
}) => {
  const { lessonId, exerciseId } = params;
  const { lang } = useParams(); // Get the language parameter

  console.log(lessonId);
  console.log(exerciseId);
  console.log(lang); // Log to verify the language

  // Convert exerciseId to number and typecast it to narrow the type
  const exercise = exType[Number(exerciseId) as keyof typeof exType];

  if (!exercise) {
    return <div>Упражнение не найдено</div>;
  }

  console.log(exercise);

  // Determine the language-specific exercise component based on the `lang` param
  const currentExercise = lang === "ru" ? exercise.ru : exercise.en || exercise; // Default to the general exercise if not found

  console.log("current EX", currentExercise);

  // Check if the exercise exists for the given language
  if (!currentExercise) {
    return <div>Неизвестный тип задания</div>;
  }

  const type = currentExercise[0].type; // Assuming exercise data is an array, access the type

  // Get the component associated with the exercise type
  const exerciseComponentsMap: Record<string, React.FC<any>> = {
    multipleChoiseEstRu: MultipleChoiseEstRu,  // Corrected to match data
    multipleChoiseEnEst: MultipleChoiseEstRu,  // Handle both English/Estonian
    multipleChoiseRuToEst: MultipleChoiseRuEst,  // Ensure correct mapping
    createPhraseEst: CreatePhraseEstEx,
    createPhraseRu: CreatePhraseRu,
    matching: Matching,
  };
  

  const ExerciseComponent = exerciseComponentsMap[type];

  if (!ExerciseComponent) {
    return <div>Неизвестный тип задания</div>;
  }

  return (
    <div className="relative">
      <ExerciseComponent exercise={currentExercise} />
      <div className="absolute top-0 -right-20 z-30">
        <ToggleAudio />
      </div>
    </div>
  );
};

export default ExercisePage;
