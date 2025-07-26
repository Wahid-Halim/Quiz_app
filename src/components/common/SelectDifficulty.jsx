import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { useQuiz } from "../../context/QuizContext";

function SelectDifficulty() {
  const { dispatch, difficulty } = useQuiz();

  const navigate = useNavigate();

  function handleDifficulty(e) {
    console.log(e.target.value);
    dispatch({ type: "quiz/difficulty", payload: e.target.value });
  }

  const handleStartQuiz = () => {
    console.log("Starting quiz with difficulty:", difficulty);
    navigate("quiz");
  };

  return (
    <div className="flex flex-col items-center">
      <label
        htmlFor="difficulty"
        className="block mb-1 text-indigo-300 font-medium"
      >
        Select difficulty:
      </label>
      <select
        id="difficulty"
        className="
    block w-60
    px-4 py-2
    text-indigo-100
    bg-indigo-700
    border border-indigo-600
    rounded-md
    shadow-lg
    focus:outline-none
    focus:ring-2 focus:ring-indigo-400
    focus:border-indigo-400
    transition
    duration-200
    ease-in-out
    cursor-pointer
    hover:bg-indigo-600
  "
        onChange={handleDifficulty}
      >
        <option className="bg-indigo-700 text-indigo-100" value="easy">
          Easy
        </option>
        <option className="bg-indigo-700 text-indigo-100" value="medium">
          Medium
        </option>
        <option className="bg-indigo-700 text-indigo-100" value="hard">
          Hard
        </option>
      </select>

      <Button onClick={handleStartQuiz}>Start Quiz</Button>
    </div>
  );
}

export default SelectDifficulty;
