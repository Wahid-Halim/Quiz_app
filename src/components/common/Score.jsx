import { useQuiz } from "../../context/QuizContext";

function Score({ questions }) {
  const { totalScore } = useQuiz();
  console.log(questions);

  const sumScore = questions.reduce((acc, cur) => cur.points + acc, 0);

  return (
    <div className="text-green-500">{`score ${totalScore}/${sumScore}`}</div>
  );
}

export default Score;
