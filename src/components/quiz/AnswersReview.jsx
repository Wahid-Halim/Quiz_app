import { useQuiz } from "../../context/QuizContext";
import { Link } from "react-router-dom";

function AnswerReview() {
  const { answers } = useQuiz();

  return (
    <div className="min-h-screen bg-slate-950 py-10 px-4 text-white">
      <div className="max-w-3xl mx-auto space-y-6">
        <Link
          to="/"
          className="inline-block text-blue-400 hover:text-blue-300 transition"
        >
          ⬅ Go back home
        </Link>

        <h2 className="text-3xl font-bold border-b border-slate-700 pb-2">
          Review Answers
        </h2>

        {answers.map((a, i) => (
          <div
            key={i}
            className="bg-slate-800 p-5 rounded-xl shadow-md border border-slate-700"
          >
            <p className="font-semibold text-lg mb-3 text-slate-200">
              Q{i + 1}: {a.question.question}
            </p>
            <ul className="space-y-2">
              {a.options.map((opt, idx) => {
                const isCorrect = idx === a.correctOption;
                const isUserWrong = idx === a.userAnswerIndex && !isCorrect;

                return (
                  <li
                    key={idx}
                    className={`p-3 rounded-md transition-all font-medium ${
                      isCorrect
                        ? "bg-emerald-500 text-white"
                        : isUserWrong
                        ? "bg-rose-600 text-white"
                        : "bg-slate-700 text-slate-300"
                    }`}
                  >
                    {opt}
                    {isCorrect && " ✅"}
                    {isUserWrong && " ❌"}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AnswerReview;
