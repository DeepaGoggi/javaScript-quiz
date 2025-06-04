function startQuiz() {
  const selectedTopic = document.getElementById("topicSelect").value;
  const errorMsg = document.getElementById("error-message");
  if (selectedTopic === "-- Select Topic --") {
    errorMsg.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    localStorage.setItem("quizTopic", selectedTopic);
    window.location.href = "quest.html";
  }
}
