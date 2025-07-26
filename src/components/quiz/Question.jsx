import { useQuiz } from "../../context/QuizContext";

function Question({ questions }) {
  const { currentQuestion } = useQuiz();


  return (
    <div>
      <p className="text-stone-100 text-base mt-10">
        {questions[currentQuestion].question}
      </p>
    </div>
  );
}

export default Question;
