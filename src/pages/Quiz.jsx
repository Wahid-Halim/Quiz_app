import {
  easyQuestions,
  mediumQuestions,
  hardQuestions,
} from "../data/quizQuestions";

import Header from "../components/common/Header";

import DashedProgress from "../components/common/ProgressBar";

import Question from "../components/quiz/Question";
import Options from "../components/quiz/Options";
import Button from "../components/common/Button";
import { useQuiz } from "../context/QuizContext";
import Score from "../components/common/Score";

function Quiz() {
  const { currentQuestion, dispatch, isAnswered, difficulty } = useQuiz();

  let questions;

  if (difficulty === "hard") questions = hardQuestions;
  if (difficulty === "medium") questions = mediumQuestions;
  if (difficulty === "easy") questions = easyQuestions;

  function handleNextQuestion() {
    dispatch({ type: "quiz/NextQuestion" });
  }

  return (
    <main className="w-screen h-screen bg-slate-900">
      <div className="max-w-[500px] m-auto flex flex-col">
        <Header />
        <DashedProgress current={currentQuestion} total={10} />
        <Score questions={questions} />
        <Question questions={questions} />
        <Options questions={questions} />
        {isAnswered && (
          <Button className="self-end" onClick={handleNextQuestion}>
            Next Question
          </Button>
        )}
      </div>
    </main>
  );
}

export default Quiz;
