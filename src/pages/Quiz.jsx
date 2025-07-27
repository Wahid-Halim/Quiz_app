import {
  easyQuestions,
  mediumQuestions,
  hardQuestions,
  quizQuestions,
} from "../data/quizQuestions";

import Header from "../components/common/Header";

import DashedProgress from "../components/common/ProgressBar";

import Question from "../components/quiz/Question";
import Options from "../components/quiz/Options";
import Button from "../components/common/Button";
import { useQuiz } from "../context/QuizContext";
import Score from "../components/common/Score";
import FinishScreen from "../components/quiz/FinishScrEen";

function Quiz() {
  const { currentQuestion, dispatch, isAnswered, difficulty, status } =
    useQuiz();

  let questions;

  if (difficulty === "hard") questions = hardQuestions;
  if (difficulty === "medium") questions = mediumQuestions;
  if (difficulty === "easy") questions = easyQuestions;
  if (difficulty === "all-levels") questions = quizQuestions;

  function handleNextQuestion() {
    dispatch({ type: "quiz/NextQuestion" });
  }

  return (
    <main className="w-screen h-screen bg-slate-900 p-2">
      {status === "finished" ? (
        <FinishScreen questions={questions} />
      ) : (
        <div className="max-w-[500px] m-auto flex flex-col">
          <Header questions={questions} />
          <DashedProgress
            current={currentQuestion + 1}
            total={questions.length}
          />
          <Score questions={questions} />
          <Question questions={questions} />
          <Options questions={questions} />
          {isAnswered && (
            <Button className="self-end rounded-sm" onClick={handleNextQuestion}>
              Next Question
            </Button>
          )}
        </div>
      )}
    </main>
  );
}

export default Quiz;
