import { useQuiz } from "../../context/QuizContext";
import { Link } from "react-router-dom";

function AnswerReview() {
  const { answers } = useQuiz();

  return (
    <div className="text-white space-y-4 max-w-[500px] m-auto">
      <Link to="/" className="text-blue-500">
        {"<--"} Go back home
      </Link>
      <h2 className="text-2xl font-bold mb-4">Review Answers</h2>
      {answers.map((a, i) => (
        <div key={i} className="bg-slate-800 p-4 rounded-md">
          <p className="font-semibold mb-2">
            Q{i + 1}: {a.question.question}
          </p>
          <ul>
            {a.options.map((opt, idx) => (
              <li
                key={idx}
                className={`p-2 rounded-md my-1 ${
                  idx === a.correctOption
                    ? "bg-green-700"
                    : idx === a.userAnswerIndex
                    ? "bg-red-700"
                    : "bg-slate-700"
                }`}
              >
                {opt}
                {idx === a.correctOption && " ✅"}
                {idx === a.userAnswerIndex && idx !== a.correctOption && " ❌"}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default AnswerReview;
