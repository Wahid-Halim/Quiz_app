import { createContext, useActionState, useContext, useReducer } from "react";

const initialState = {
  currentQuestion: 0,
  score: 0,
  answer: null,
  quizStarted: false,
  isAnswered: false,
  difficulty: "medium",
  totalScore: 0,
};

function quizReducer(state, action) {
  switch (action.type) {
    case "quiz/difficulty":
      return {
        ...state,
        difficulty: action.payload,
      };

    case "quiz/start":
      return {
        ...state,
        quizStarted: true,
      };

    case "quiz/newAnswer": {
      const { points, isCorrect, indexNumber } = action.payload;
      console.log("i am points", points, isCorrect);

      return {
        ...state,
        answer: indexNumber,
        isAnswered: true,
        totalScore: isCorrect ? state.totalScore + points : state.totalScore,
      };
    }

    case "quiz/NextQuestion":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answer: null,
        isAnswered: false,
      };
  }
}

const QuizContext = createContext();

function QuizProvider({ children }) {
  const [
    {
      currentQuestion,
      score,
      answer,
      quizStarted,
      isAnswered,
      difficulty,
      totalScore,
    },
    dispatch,
  ] = useReducer(quizReducer, initialState);

  return (
    <QuizContext.Provider
      value={{
        currentQuestion,
        score,
        answer,
        quizStarted,
        dispatch,
        isAnswered,
        difficulty,
        totalScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
}

export function useQuiz() {
  const context = useContext(QuizContext);

  if (context === undefined)
    throw new Error("QuizContext was used outside of the QuizProvider");
  return context;
}

export default QuizProvider;
