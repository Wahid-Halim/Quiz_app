import { createContext, useContext, useReducer } from "react";
import Options from "../components/quiz/Options";

const initialState = {
  status: "active",
  currentQuestion: 0,
  score: 0,
  answer: null,
  quizStarted: false,
  isAnswered: false,
  difficulty: "easy",
  totalScore: 0,
  answers: [],
};

function quizReducer(state, action) {
  switch (action.type) {
    case "quiz/difficulty":
      console.log(action.payload);
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
      const { points, isCorrect, indexNumber, questions, question } =
        action.payload;
      const isLastQuestion = state.currentQuestion === questions.length - 1;

      return {
        ...state,
        answer: indexNumber,
        isAnswered: true,
        totalScore: isCorrect ? state.totalScore + points : state.totalScore,
        status: isLastQuestion ? "finished" : state.status,
        answers: [
          ...state.answers,
          {
            question,
            options: question.options,
            correctOption: question.correctOption,
            userAnswerIndex: indexNumber,
          },
        ],
      };
    }

    case "quiz/NextQuestion":
      return {
        ...state,
        currentQuestion: state.currentQuestion + 1,
        answer: null,
        isAnswered: false,
      };

    case "quiz/restart":
      return {
        ...initialState,
        difficulty: state.difficulty,
      };
    case "quiz/GoHome":
      return {
        ...initialState,
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
      status,
      answers,
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
        status,
        answers,
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
