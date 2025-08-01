import { useQuiz } from "../../context/QuizContext";

function Header({ questions }) {
  const { currentQuestion } = useQuiz();

  const formatted =
    currentQuestion < 10 ? `0${currentQuestion + 1}` : `${currentQuestion + 1}`;

  return (
    <div className="flex flex-col items-center mt-4">
      <h2 className="text-stone-400 font-semibold self-start font-jetBrains mb-3">
        React Quiz
      </h2>
      <p className="text-stone-100  self-start font-jetBrains text-2xl">{`Question ${formatted}/${questions.length}`}</p>
    </div>
  );
}

export default Header;
