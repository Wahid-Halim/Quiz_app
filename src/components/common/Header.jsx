import { useQuiz } from "../../context/QuizContext";

function Header({ questions }) {
  const { currentQuestion } = useQuiz();

  const formatted =
    currentQuestion < 10 ? `0${currentQuestion + 1}` : `${currentQuestion + 1}`;

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-stone-400 font-semibold self-start">React Quiz</h2>
      <p className="text-stone-100 text-5xl self-start">{`Question ${formatted}/${questions.length}`}</p>
    </div>
  );
}

export default Header;
