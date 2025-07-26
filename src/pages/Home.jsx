import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SelectDifficulty from "../components/common/SelectDifficulty";

export default function Home() {
  return (
    <div className="bg-slate-900 w-screen h-screen flex flex-col items-center space-y-6">
      <h1 className="text-6xl text-stone-50 mt-10">
        🧠 Welcome to the React Quiz!
      </h1>
      <p className="text-stone-100 text-base">Test your knowledge of React.</p>
      <p className="text-stone-100 ">
        Click the button below to start the quiz
      </p>
      <SelectDifficulty />
    </div>
  );
}
