import { exType } from "@/app/data";
import CreatePhraseEstEx from "@/components/Exercises/CreatePhraseEstEx/page";
import CreatePhraseRu from "@/components/Exercises/CreatePhraseRu/page";
import Matching from "@/components/Exercises/Matching/page";
import MultipleChoiseEstRu from "@/components/Exercises/MultipleChoiseEstRu/page";
import MultipleChoiseRuEst from "@/components/Exercises/MultipleChoiseRuEst/page";

// Типизация карты компонентов
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const exerciseComponentsMap: Record<string, React.FC<any>> = {
  matching: Matching,
  multipleChoiseEstRu: MultipleChoiseEstRu,
  multipleChoiseRuEst: MultipleChoiseRuEst,
  createPhraseEst: CreatePhraseEstEx,
  createPhraseRu: CreatePhraseRu,
};

const ExercisePage = ({
  params,
}: {
  params: { lessonId: string; exerciseId: string };
}) => {
  const { lessonId, exerciseId } = params;

  console.log(lessonId);
  console.log(exerciseId);

  // Convert exerciseId to number and typecast it to narrow the type
  const exercise = exType[Number(exerciseId) as keyof typeof exType]; // Use "keyof" to ensure type-safety

  if (!exercise) {
    return <div>Упражнение не найдено</div>;
  }

  console.log(exercise[0].type);

  const type = exercise[0].type;

  // Получаем компонент по типу задания из карты компонентов
  const ExerciseComponent = exerciseComponentsMap[type];

  if (!ExerciseComponent) {
    return <div>Неизвестный тип задания</div>;
  }

  return <ExerciseComponent exercise={exercise} />;
};

export default ExercisePage;
