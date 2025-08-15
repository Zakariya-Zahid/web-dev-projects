document.addEventListener("DOMContentLoaded", () => {
  let quizContainer = document.getElementById("quiz-container");
  let questionContainer = document.getElementById("question-container");
  let questionText = document.getElementById("question-text");
  let choicesList = document.getElementById("choices-list");
  let nextBtn = document.getElementById("next-btn");
  let resultContainer = document.getElementById("result-container");
  let scoreText = document.getElementById("score");
  let questionMarks = document.getElementById("marks");
  let isAnswered = false;
  let restartBtn = document.getElementById("restart-btn");
  let startBtn = document.getElementById("start-btn");

  // Quizes Object to generate questions, options and then validate the answer.
  const quizes = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "Berlin", "Madrid", "Rome"],
      answer: "Paris",
      marks: 1,
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Venus", "Mars", "Jupiter"],
      answer: "Mars",
      marks: 1,
    },
    {
      question: "What is the smallest prime number?",
      options: ["0", "1", "2", "3"],
      answer: "2",
      marks: 2,
    },
    {
      question: "Which language runs in a web browser?",
      options: ["C++", "Java", "Python", "JavaScript"],
      answer: "JavaScript",
      marks: 3,
    },
    {
      question: "What does HTTP stand for?",
      options: [
        "HyperText Transfer Protocol",
        "HighText Transfer Protocol",
        "HyperText Transmission Protocol",
        "HyperTransfer Text Protocol",
      ],
      answer: "HyperText Transfer Protocol",
      marks: 3,
    },
    {
      question: "Who painted the Mona Lisa?",
      options: [
        "Vincent Van Gogh",
        "Pablo Picasso",
        "Leonardo da Vinci",
        "Michelangelo",
      ],
      answer: "Leonardo da Vinci",
      marks: 5,
    },
    {
      question: "What is the chemical symbol for water?",
      options: ["WO", "H2O", "HO2", "OH2"],
      answer: "H2O",
      marks: 3,
    },
    {
      question: "Which is the largest ocean on Earth?",
      options: [
        "Atlantic Ocean",
        "Indian Ocean",
        "Arctic Ocean",
        "Pacific Ocean",
      ],
      answer: "Pacific Ocean",
      marks: 2,
    },
    {
      question: "Which country is known as the Land of the Rising Sun?",
      options: ["China", "South Korea", "Thailand", "Japan"],
      answer: "Japan",
      marks: 4,
    },
    {
      question: "In which year did the World War II end?",
      options: ["1945", "1939", "1918", "1965"],
      answer: "1945",
      marks: 2,
    },
  ];
  let selectedAnswer = null;
  let score = 0;
  let currentQuestionIndex = 0;
const totalMarks = quizes.reduce((acc,sum) => acc + sum.marks,0)
  startBtn.addEventListener("click", showQuiz);
  
  function showQuiz() {
    isAnswered = false;
    selectedAnswer = null;
    choicesList.innerHTML = "";
    questionContainer.classList.remove("hidden");
    nextBtn.classList.remove("hidden");
    startBtn.classList.add("hidden");
    questionText.textContent = `${quizes[currentQuestionIndex].question}`;
    questionMarks.textContent = `Marks: ${quizes[currentQuestionIndex].marks}`;
    quizes[currentQuestionIndex].options.forEach((option) => {
      const li = document.createElement("li");
      li.textContent = `${option}`;
      li.classList.add("options_check");
      li.addEventListener("click", () => selectOption(option));
      choicesList.appendChild(li);
    });
  }
  function selectOption(option) {
    const allOptions = choicesList.querySelectorAll("li");

    // Todo: Remove existing highlight.....
    allOptions.forEach((li) => {
      li.classList.remove("selected");
    });

    // todo: Add highlight to selected....
    const clickedOption = [...allOptions].find(
      (li) => li.textContent === option
    );
    if (clickedOption) {
      clickedOption.classList.add("selected");
    }

    //todo: Save selected answer for later evaluation.....
    selectedAnswer = option;
  }

  nextBtn.addEventListener("click", () => {
    const correctOption = quizes[currentQuestionIndex].answer;
    const questionMarks = quizes[currentQuestionIndex].marks;

    if (selectedAnswer === correctOption) {
      score += questionMarks;
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < quizes.length) {
      showQuiz();
    } else {
      showResult();
    }
  });

  restartBtn.addEventListener("click", () => {
    score = 0;
    currentQuestionIndex = 0;
    showQuiz();
    resultContainer.classList.add("hidden");
  });
  function showResult() {
    resultContainer.classList.remove("hidden");
    scoreText.textContent = `${score} out of ${totalMarks}`;
    questionContainer.classList.add("hidden");
  }
});
