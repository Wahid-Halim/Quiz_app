export const quizQuestions = [
  // ---------- EASY ----------
  {
    id: 1,
    question: "What is React?",
    options: [
      "A CSS framework",
      "A JavaScript library",
      "A database",
      "A server",
    ],
    correctOption: 1,
    points: 10,
    difficulty: "easy",
  },
  {
    id: 2,
    question: "What is JSX?",
    options: [
      "A template engine",
      "An API",
      "A syntax extension for JavaScript",
      "A data format",
    ],
    correctOption: 2,
    points: 10,
    difficulty: "easy",
  },
  {
    id: 3,
    question: "Which hook is used to manage state in functional components?",
    options: ["useRef", "useState", "useEffect", "useContext"],
    correctOption: 1,
    points: 10,
    difficulty: "easy",
  },
  {
    id: 4,
    question: "How do you pass data from parent to child component?",
    options: ["State", "Refs", "Props", "Hooks"],
    correctOption: 2,
    points: 10,
    difficulty: "easy",
  },
  {
    id: 5,
    question: "React components must start with which letter case?",
    options: ["lowercase", "Uppercase", "number", "underscore"],
    correctOption: 1,
    points: 10,
    difficulty: "easy",
  },

  // ---------- MEDIUM ----------
  {
    id: 11,
    question: "What will useEffect(() => {}, []) do?",
    options: [
      "Run after every render",
      "Run on unmount",
      "Run only once after initial render",
      "Never run",
    ],
    correctOption: 2,
    points: 15,
    difficulty: "medium",
  },
  {
    id: 12,
    question: "What is the correct way to conditionally render in React?",
    options: ["if else", "ternary operator", "for loop", "while loop"],
    correctOption: 1,
    points: 15,
    difficulty: "medium",
  },
  {
    id: 13,
    question: "Which hook lets you persist values across renders?",
    options: ["useEffect", "useState", "useRef", "useCallback"],
    correctOption: 2,
    points: 15,
    difficulty: "medium",
  },
  {
    id: 14,
    question: "How do you update state based on previous state?",
    options: [
      "setState(state + 1)",
      "setState(() => state + 1)",
      "setState(prev => prev + 1)",
      "setState(() => {})",
    ],
    correctOption: 2,
    points: 15,
    difficulty: "medium",
  },
  {
    id: 15,
    question: "What does the key prop do in a list?",
    options: [
      "Sets the tab index",
      "Triggers animation",
      "Helps identify which items changed",
      "Hides the element",
    ],
    correctOption: 2,
    points: 15,
    difficulty: "medium",
  },

  // ---------- HARD ----------
  {
    id: 21,
    question: "What does useCallback return?",
    options: [
      "A memoized function",
      "A DOM node",
      "A React element",
      "A function that runs once",
    ],
    correctOption: 0,
    points: 20,
    difficulty: "hard",
  },
  {
    id: 22,
    question: "What does useMemo help with?",
    options: [
      "Avoid unnecessary function creations",
      "Store mutable values",
      "Skip rendering",
      "Optimize expensive calculations",
    ],
    correctOption: 3,
    points: 20,
    difficulty: "hard",
  },
  {
    id: 23,
    question: "What is React's Virtual DOM?",
    options: [
      "A copy of the browser DOM",
      "A faster version of the browser",
      "A lightweight in-memory representation of the real DOM",
      "A testing tool",
    ],
    correctOption: 2,
    points: 20,
    difficulty: "hard",
  },
  {
    id: 24,
    question: "What does the cleanup function in useEffect do?",
    options: [
      "Refreshes state",
      "Cleans the DOM",
      "Runs when component unmounts or effect dependencies change",
      "Disables hooks",
    ],
    correctOption: 2,
    points: 20,
    difficulty: "hard",
  },
  {
    id: 25,
    question:
      "What happens if you update state in useEffect without a dependency array?",
    options: [
      "Only runs once",
      "Runs on unmount",
      "Causes infinite re-renders",
      "Nothing happens",
    ],
    correctOption: 2,
    points: 20,
    difficulty: "hard",
  },
];

export const hardQuestions = quizQuestions.filter(
  (question) => question.difficulty === "hard"
);

export const mediumQuestions = quizQuestions.filter(
  (question) => question.difficulty === "medium"
);

export const easyQuestions = quizQuestions.filter(
  (question) => question.difficulty === "easy"
);
