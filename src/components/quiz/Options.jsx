import { quizQuestions } from "../../data/quizQuestions";
import { useQuiz } from "../../context/QuizContext";
import AnswerOption from "./AnswerOption";

function Options({ questions }) {

  const { currentQuestion } = useQuiz();

  return (
    <div>
      <div className="flex flex-col gap-y-2">
        {questions[currentQuestion].options.map((answerOption, index) => (
          <AnswerOption

            questions={questions}
            key={answerOption}
            correctOption={questions[currentQuestion].correctOption}
            indexNumber={index}
          >
            {answerOption}
          </AnswerOption>
        ))}
      </div>
    </div>
  );
}

export default Options;
