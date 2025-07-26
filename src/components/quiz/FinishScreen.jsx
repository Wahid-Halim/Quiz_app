import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";

import { useNavigate } from "react-router-dom";
import { useQuiz } from "../context/QuizContext";

function FinishScreen({ questions }) {
  const { totalScore, dispatch, currentQuestion, difficulty } = useQuiz();
  const navigate = useNavigate();

  if (!questions || questions.length === 0) return null;

  const maxPoints = questions.length * 10;
  const accuracy = Math.min(100, Math.round((totalScore / maxPoints) * 100));

  const handleRestart = () => {
    dispatch({ type: "quiz/restart" });
    navigate("/home/quiz");
  };

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center text-white px-4">
      <div className="bg-slate-900 shadow-xl rounded-2xl p-8 max-w-md w-full text-center space-y-6">
        <h2 className="text-3xl font-bold text-green-400">
          🎉 Quiz Completed!
        </h2>

        <div className="text-lg space-y-2">
          <p>
            <strong>Difficulty:</strong>{" "}
            {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
          </p>
          <p>
            <strong>Total Score:</strong> {totalScore} / {maxPoints}
          </p>
          <p>
            <strong>Accuracy:</strong> {accuracy}%
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <button
            onClick={handleRestart}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
          >
            🔁 Restart Quiz
          </button>
        </div>
      </div>
    </div>
  );
}

export default FinishScreen;
