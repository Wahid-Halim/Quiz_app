import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";
import Button from "../common/Button";
import AnswerReview from "./AnswersReview";

function FinishScreen({ questions }) {
  const { totalScore, dispatch, difficulty } = useQuiz();

  const navigate = useNavigate();

  if (!questions || questions.length === 0) return null;

  const sumScore = questions.reduce((acc, cur) => cur.points + acc, 0);

  const accuracy = Math.min(100, Math.round((totalScore / sumScore) * 100));

  const handleRestart = () => {
    dispatch({ type: "quiz/restart" });
    navigate("/home/quiz");
  };

  function handleGoHome() {
    dispatch({ type: "quiz/GoHome" });
    navigate("/home");
  }

  function handleSummary() {
    navigate("quiz-summary");
  }

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
            <strong>Total Score:</strong> {totalScore} / {sumScore}
          </p>
          <p>
            <strong>Accuracy:</strong> {accuracy}%
          </p>
        </div>

        <div className="flex justify-center gap-4 mt-4">
          <Button
            onClick={handleRestart}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md transition duration-300"
          >
            Restart Quiz
          </Button>
          <Button onClick={handleGoHome} className="bg-yellow-500">
            Go Home
          </Button>
        </div>
        <Button onClick={handleSummary}>Answer Summary</Button>
      </div>
    </div>
  );
}

export default FinishScreen;
