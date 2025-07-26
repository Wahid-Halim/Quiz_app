function Score({ questions }) {
  const totalScore = questions.reduce((acc, cur) => cur.points + acc, 0);
  console.log(totalScore);

  return <div className="text-green-500">{`score 0/${totalScore}`}</div>;
}

export default Score;
