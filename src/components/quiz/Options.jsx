import { useState } from "react";
import { quizQuestions } from "../../data/quizQuestions";
import { useQuiz } from "../../context/QuizContext";
import AnswerOption from "./AnswerOption";

function Options({ questions }) {
  const [click, setClick] = useState(false);

  const { currentQuestion } = useQuiz();

  const handleAnswer = () => {
    setClick((click) => !click);
  };
  

  return (
    <div>
      <div className="flex flex-col gap-y-2">
        {questions[currentQuestion].options.map((answerOption, index) => (
          <AnswerOption
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
