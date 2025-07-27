import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuiz } from "../../context/QuizContext";
import Button from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // npm i lucide-react

const difficulties = [
  { label: "Easy", value: "easy" },
  { label: "Medium", value: "medium" },
  { label: "Hard", value: "hard" },
  { label: "All Levels", value: "all-levels" },
];

export default function SelectDifficulty() {
  const [open, setOpen] = useState(false);
  const { dispatch, difficulty } = useQuiz();
  const navigate = useNavigate();

  const handleSelect = (value) => {
    dispatch({ type: "quiz/difficulty", payload: value });
    setOpen(false);
  };

  const handleStartQuiz = () => {
    navigate("quiz");
  };

  return (
    <div className="relative flex flex-col items-center gap-4">
      <label className="text-indigo-300 font-medium text-base font-jetBrains">
        Select difficulty:
      </label>

      <div className="relative w-64">
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="w-full flex justify-between items-center px-4 py-3 bg-gradient-to-br from-indigo-700 to-indigo-800 text-indigo-100 border border-indigo-600 rounded-xl shadow-lg transition hover:brightness-110 focus:outline-none"
        >
          <span className="capitalize tracking-wide font-jetBrains">
            {difficulty || "Choose difficulty"}
          </span>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown className="w-5 h-5 text-indigo-200" />
          </motion.div>
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute z-10 mt-2 w-full rounded-xl bg-indigo-900 shadow-xl overflow-hidden border border-indigo-600"
            >
              {difficulties.map((d) => (
                <li
                  key={d.value}
                  onClick={() => handleSelect(d.value)}
                  className="font-jetBrains px-4 py-2 text-indigo-100 hover:bg-indigo-700 transition-colors cursor-pointer text-center capitalize tracking-wide"
                >
                  {d.label}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <Button onClick={handleStartQuiz} className="font-jetBrains">
        Start Quiz
      </Button>
    </div>
  );
}
