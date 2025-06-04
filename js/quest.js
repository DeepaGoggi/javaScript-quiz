// questions
const quizData = {
  computer: [
    {
      question: "What does CPU stand for?",
      options: [
        "Central Process Unit",
        "Central Processing Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
      answer: "Central Processing Unit",
    },
    {
      question: "Which language is primarily used for web development?",
      options: ["C++", "Java", "JavaScript", "Python"],
      answer: "JavaScript",
    },

    {
      question: "What is the full form of HTML?",
      options: [
        "HyperText Markup Language",
        "Hyper Transfer Markup Language",
        "HighText Machine Language",
        "HyperTool Multi Language",
      ],
      answer: "HyperText Markup Language",
    },
    {
      question: "What does RAM stand for?",
      options: [
        "Random Access Memory",
        "Read Access Memory",
        "Run Accept Memory",
        "None",
      ],
      answer: "Random Access Memory",
    },
    {
      question: "Which is not an input device?",
      options: ["Mouse", "Keyboard", "Monitor", "Scanner"],
      answer: "Monitor",
    },
  ],
  history: [
    {
      question: "Who was the first President of India?",
      options: [
        "Jawaharlal Nehru",
        "Mahatma Gandhi",
        "Dr. Rajendra Prasad",
        "Sardar Patel",
      ],
      answer: "Dr. Rajendra Prasad",
    },
    {
      question: "In which year did India gain independence?",
      options: ["1942", "1947", "1950", "1935"],
      answer: "1947",
    },
    {
      question: "Who built the Taj Mahal?",
      options: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"],
      answer: "Shah Jahan",
    },
    {
      question: "Who discovered India?",
      options: ["Columbus", "Vasco da Gama", "Magellan", "Marco Polo"],
      answer: "Vasco da Gama",
    },

    {
      question: "Who is known as the Father of the Nation in India",
      options: [
        "Bhagat Singh",
        "Jawaharlal Nehru",
        "Mahatama Gandhi",
        "Subhas Chandra Bose",
      ],
      answer: "Mahatama Gandhi",
    },
  ],
};
const topic = localStorage.getItem("quizTopic");
const quizTitle = document.getElementById("quiz-title");
const quizForm = document.getElementById("quiz-form");

// title
quizTitle.textContent =
  topic.charAt(0).toUpperCase() + topic.slice(1) + " Quiz";

// loading question
quizData[topic].forEach((item, index) => {
  const questionDiv = document.createElement("div");
  questionDiv.classList.add("question-box");
  const questionTitle = document.createElement("h5");
  questionTitle.textContent = `${index + 1}. ${item.question}`;
  questionDiv.appendChild(questionTitle);

  item.options.forEach((option) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = `q${index}`;
    input.value = option;
    label.appendChild(input);
    label.appendChild(document.createTextNode(option));
    questionDiv.appendChild(label);
    questionDiv.appendChild(document.createElement("br"));
  });

  quizForm.appendChild(questionDiv);
});

// Timing
let totalSeconds = 60;
const timeDisplay = document.getElementById("time-left");

const timerInterval = setInterval(() => {
  if (totalSeconds >= 0) {
    let hours = Math.floor(totalSeconds / 3600);
    let minutes = Math.floor((totalSeconds % 3600) / 60);
    let seconds = totalSeconds % 60;

    let formattedTime =
      String(hours).padStart(2, "0") +
      "." +
      String(minutes).padStart(2, "0") +
      "." +
      String(seconds).padStart(2, "0");

    timeDisplay.textContent = formattedTime;
    totalSeconds--;
  } else {
    clearInterval(timerInterval);
    alert("Time's up!");
    submitQuiz();
  }
}, 1000);

function submitQuiz() {
  clearInterval(timerInterval);
  const userAnswers = [];
  let score = 0;

  quizData[topic].forEach((item, index) => {
    const selected = document.querySelector(`input[name="q${index}"]:checked`);
    const answer = selected ? selected.value : "Not Answered";
    if (answer === item.answer) score++;
    userAnswers.push({
      question: item.question,
      correct: item.answer,
      selected: answer,
    });
  });

  localStorage.setItem("quizResults", JSON.stringify(userAnswers));
  localStorage.setItem("quizScore", score);
  window.location.href = "score.html";
}
