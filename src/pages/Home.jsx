import { motion } from "framer-motion";
import SelectDifficulty from "../components/common/SelectDifficulty";

export default function Home() {
  return (
    <div className="p-2 bg-gradient-to-br from-indigo-950 via-slate-900 to-black w-screen min-h-screen flex flex-col items-center justify-center px-4 text-center space-y-8">
      <motion.h1
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
        className="text-3xl text-white font-jetBrains font-bold md:text-5xl"
      >
        Welcome to the React Quiz!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-sm text-slate-200 max-w-xl font-jetBrains md:text-lg"
      >
        Test your knowledge of React with this interactive quiz. Choose your
        difficulty and get started!
      </motion.p>

      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.5 }}
      >
        <SelectDifficulty />
      </motion.div>
    </div>
  );
}
