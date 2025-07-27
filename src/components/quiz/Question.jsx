import { useQuiz } from "../../context/QuizContext";

function Question({ questions }) {
  const { currentQuestion } = useQuiz();

  return (
    <div>
      <p className="text-stone-100 text-base mt-5 font-jetBrains border-2  mb-5 border-dashed border-stone-100 p-4 rounded-sm">
        {questions[currentQuestion].question}
      </p>
    </div>
  );
}

export default Question;
