import questions from "./questions.js";

let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let progress = document.getElementById("progress-bar");
const timerElement = document.getElementById("timer");

//creating the entry page




let currQuestionIndex = 0;
let timeLeft = 6;
let score = 0;
let timerInterval;


function startTimer() {
    timeLeft = 6;  // Reset time left for each question
    timerElement.innerText = timeLeft;

    // Clear any existing timer to prevent overlap
    clearInterval(timerInterval);

    // Start a new interval to count down every second
    timerInterval = setInterval(() => {
        timeLeft--;
        timerElement.innerText = timeLeft;

        if (timeLeft <= 0) {
            clearInterval(timerInterval);  // Stop the timer when it reaches zero
            nextPage();  // Automatically go to the next question
        }
    }, 1000);
}
function startQuiz() {
    currQuestionIndex = 0;
    score = 0;
    showQuestion();
}
function showQuestion() {
    resetState();
    let currQuestion = questions[currQuestionIndex];
    let questionNumber = currQuestionIndex + 1;
    let updateQuest = document.getElementById("questionNumber")
    progress.style.width = `${(10 * questionNumber)}%`;
    console.log(`Progress width set to: ${progress.style.width}`);
    updateQuest.innerHTML = questionNumber;
    questionElement.innerHTML = questionNumber + ". " + currQuestion.question;
    let answers = currQuestion.answers;
    answerButton.innerHTML = "";
    answers.forEach((answer) => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectedAnswer);
    });
    startTimer();
}
function resetState() {
    nextButton.style.display = "none";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
    }
}
function selectedAnswer(e) {
    //for the selection of right and wrong option by the user
    clearInterval(timerInterval);
    let selectedBtn = e.target;
    let isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach((button) => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    handler();
}


function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of 10!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}
function nextPage() {
    currQuestionIndex++;
    if (currQuestionIndex < 10) {
        showQuestion();
    } else {
        showScore();
    }
}
function handler() {
    setTimeout(() => {
        if (currQuestionIndex === 0) {
            
            showQuestion();
            currQuestionIndex++;
            startTimer();
        } else {
            nextPage();
            startTimer();
        } 
        
    }, 1000);
    
}
nextButton.addEventListener("click", () => {
    startQuiz();
});
handler();



