import React, { useState } from "react";

const App = () => {
  const [quizQuestions] = useState([
    {
      id: 1,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      answer: "Paris",
      marks: 1,
    },
    {
      id: 2,
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      answer: "JavaScript",
      marks: 3,
    },
    {
      id: 3,
      question: "What does CSS stand for?",
      options: [
        "Central Style Sheets",
        "Cascading Style Sheets",
        "Computer Style System",
        "Creative Style Setup",
      ],
      answer: "Cascading Style Sheets",
      marks: 4,
    },
    {
      id: 4,
      question: "Who is the founder of Microsoft?",
      options: ["Elon Musk", "Steve Jobs", "Bill Gates", "Mark Zuckerberg"],
      answer: "Bill Gates",
      marks: 2,
    },
    {
      id: 5,
      question: "Which HTML tag is used to define an unordered list?",
      options: ["<ul>", "<ol>", "<li>", "<list>"],
      answer: "<ul>",
      marks: 3,
    },
  ]);

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [obtainedMarks, setObtainedMarks] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const currentQuestion = quizQuestions[currentQuestionIndex];

  const handleSelectOption = (option) => {
    const prevAnswer = selectedAnswers[currentQuestion.id];

    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestion.id]: option,
    });

    if (prevAnswer) {
      if (prevAnswer === currentQuestion.answer) {
        setObtainedMarks((prev) => prev - currentQuestion.marks);
      }
    }

    if (option === currentQuestion.answer) {
      setObtainedMarks((prev) => prev + currentQuestion.marks);
    }
  };

  const handleNext = () => {
    if (currentQuestionIndex < quizQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResult(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Quiz App
        </h1>

        {!showResult ? (
          <>
            {/* Current Question */}
            <div key={currentQuestion.id} className="mb-4">
              <p className="text-gray-700 font-bold mb-2">
                {currentQuestion.question}
              </p>
              <div className="flex justify-center mb-2">
                <p className="text-gray-100 font-bold bg-orange-400 rounded-3xl px-3 py-1">
                  Marks: {currentQuestion.marks}
                </p>
              </div>
              <ul className="space-y-2">
                {currentQuestion.options.map((option, index) => {
                  const isSelected =
                    selectedAnswers[currentQuestion.id] === option;
                  return (
                    <li
                      key={index}
                      onClick={() => handleSelectOption(option)}
                      className={`p-3 border rounded-lg cursor-pointer ${
                        isSelected
                          ? "bg-blue-500 text-white"
                          : "hover:bg-gray-50"
                      }`}
                    >
                      {option}
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Controls */}
            <div className="flex justify-between items-center mt-6">
              <button
                disabled={currentQuestionIndex === 0}
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-700 hover:bg-gray-300 disabled:opacity-50"
              >
                Previous
              </button>
              <span className="text-gray-600 text-sm">
                {currentQuestionIndex + 1} of {quizQuestions.length}
              </span>
              <button
                onClick={handleNext}
                className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
              >
                {currentQuestionIndex === quizQuestions.length - 1
                  ? "Finish"
                  : "Next"}
              </button>
            </div>
          </>
        ) : (
          // ✅ Result Screen
          <div className="text-center mt-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Quiz Finished 🎉
            </h2>
            <p className="text-gray-700 font-semibold">
              Obtained Marks: {obtainedMarks} /{" "}
              {quizQuestions.reduce((acc, q) => acc + q.marks, 0)}
            </p>
            <button
              onClick={() => {
                setShowResult(false);
                setCurrentQuestionIndex(0);
                setObtainedMarks(0);
                setSelectedAnswers({});
              }}
              className="mt-4 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600"
            >
              Retry Quiz
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
