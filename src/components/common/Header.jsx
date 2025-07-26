import { useQuiz } from "../../context/QuizContext";

function Header() {
  const { currentQuestion } = useQuiz();
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-stone-400 font-semibold self-start">React Quiz</h2>
      <p className="text-stone-100 text-5xl self-start">{`Question ${
        currentQuestion > 9 ? currentQuestion : "0" + currentQuestion
      }/10`}</p>
    </div>
  );
}

export default Header;
