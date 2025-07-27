import { useQuiz } from "../../context/QuizContext";

import {
  FaRegCircle,
  FaRegCircleCheck,
  FaRegCircleXmark,
} from "react-icons/fa6";

function AnswerOption({ children, indexNumber, correctOption, questions }) {
  const { answer, currentQuestion, dispatch } = useQuiz();

  const hasAnswered = answer !== null;
  const isSelected = answer === indexNumber;
  const isCorrect = indexNumber === correctOption;

  const question = questions[currentQuestion];

  let bgColor = "";
  let icon = <FaRegCircle className="text-indigo-500" />;

  if (hasAnswered) {
    if (isCorrect) {
      bgColor = "bg-emerald-600  text-white";
      icon = <FaRegCircleCheck className="text-white" />;
    } else if (isSelected) {
      bgColor = "bg-rose-600 border-0 text-white";
      icon = <FaRegCircleXmark className="text-white" />;
    }
  } else {
    // default state (not answered yet)
    icon = isSelected ? (
      <FaRegCircleCheck className="text-indigo-200" />
    ) : (
      <FaRegCircle className="text-indigo-500" />
    );
  }

  // get the points of each question

  const points = questions[currentQuestion].points;

  function handleAnswer() {
    dispatch({
      type: "quiz/newAnswer",
      payload: { isCorrect, points, indexNumber, questions, question },
    });
  }

  return (
    <button
      onClick={handleAnswer}
      disabled={hasAnswered}
      className={`flex justify-between w-full text-stone-100 border border-indigo-500  items-center p-2 ${bgColor} font-jetBrains  rounded-sm`}
    >
      {children}
      <span>{icon}</span>
    </button>
  );
}

export default AnswerOption;
