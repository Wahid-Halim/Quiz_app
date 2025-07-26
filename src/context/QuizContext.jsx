import { createContext, useContext, useReducer } from "react";

const initialState = {
  currentQuestion: 0,
  score: 0,
  answer: null,
  quizStarted: false,
  isAnswered: false,
  difficulty: "medium",
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
    case "quiz/newAnswer":
      return {
        ...state,
        answer: action.payload,
        isAnswered: true,
      };

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
    { currentQuestion, score, answer, quizStarted, isAnswered,difficulty },
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
        difficulty
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
