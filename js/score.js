const results = JSON.parse(localStorage.getItem("quizResults"));
const score = parseInt(localStorage.getItem("quizScore"));

const tableDiv = document.getElementById("result-table");
const finalScore = document.getElementById("final-score");
const finalResult = document.getElementById("final-result");

if (!userAnswers || !correctAnswers || score === null) {
  alert("Please complete the quiz first!");
  window.location.href = "../index.html";
}

let html = "";

results.forEach((res, index) => {
  html += `<tr>
          <td>${index + 1}</td>
          <td>${res.question}</td>
          <td>${res.correct}</td>
          <td>${res.selected}</td>
        </tr>`;
});

document.getElementById("result-body").innerHTML = html;

finalScore.textContent = `Your Score : ${score} / 5`;
finalResult.textContent = score >= 4 ? "Result : Pass 🎉" : "Result: Fail ❌";
