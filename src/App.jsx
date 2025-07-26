import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import AppLayout from "./layout/AppLayout";
import Home from "./pages/Home";
import QuizResult from "./pages/QuizResult";
import Quiz from "./pages/Quiz";
import QuizProvider from "./context/QuizContext";

function App() {
  return (
    <QuizProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="/home" />} />

            <Route path="/home" element={<Home />} />
            <Route path="/home/quiz" element={<Quiz />} />
            <Route path="quiz-result" element={<QuizResult />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QuizProvider>
  );
}

export default App;
