// script.js

// Define the quiz questions
const questions = [
    {
        question: "What does DOM stand for?",
        options: ["Document Object Model", "Data Object Module", "Dynamic Object Model", "Domain Of Media"],
        correctAnswerIndex: 0
    },
    {
        question: "Which method is used to select an element by its ID?",
        options: ["getElementById", "querySelector", "getElementsByClassName", "querySelectorAll"],
        correctAnswerIndex: 0
    },
    {
        question: "Which of the following is a JavaScript data type?",
        options: ["String", "Object", "Array", "All of the above"],
        correctAnswerIndex: 3
    }
];

let currentQuestionIndex = 0; // Tracks the current question
let score = 0; // Tracks the user's score

// Cache DOM elements
const startBtn = document.getElementById('startBtn');
const nextBtn = document.getElementById('nextBtn');
const restartBtn = document.getElementById('restartBtn');
const homePage = document.getElementById('homePage');
const quizPage = document.getElementById('quizPage');
const resultPage = document.getElementById('resultPage');
const questionEl = document.getElementById('question');
const optionsEl = document.getElementById('options');
const scoreDisplay = document.getElementById('score');
const scoreMessage = document.getElementById('scoreMessage');

// Event Listeners
startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', restartQuiz);

// Function to start the quiz
function startQuiz() {
    homePage.classList.add('hidden');
    quizPage.classList.remove('hidden');
    nextBtn.disabled = true;
    showQuestion();
}

// Function to display a question
function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = ''; // Clear previous options

    // Create options buttons
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.classList.add('option');
        button.textContent = option;
        button.onclick = () => checkAnswer(index); // Check answer on click
        optionsEl.appendChild(button);
    });
}

// Function to check if the selected answer is correct
function checkAnswer(selectedIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedIndex === currentQuestion.correctAnswerIndex) {
        score++;
    }
    nextBtn.disabled = false; // Enable the Next button after selection
}

// Function to go to the next question
function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextBtn.disabled = true;
    } else {
        showResults();
    }
}

// Function to display the results after the quiz is complete
function showResults() {
    quizPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
    scoreDisplay.textContent = `Your Score: ${score} / ${questions.length}`;

    if (score === questions.length) {
        scoreMessage.textContent = "Excellent! Perfect score!";
    } else if (score >= questions.length / 2) {
        scoreMessage.textContent = "Good job! Keep practicing.";
    } else {
        scoreMessage.textContent = "Better luck next time!";
    }
}

// Function to restart the quiz
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultPage.classList.add('hidden');
    homePage.classList.remove('hidden');
    nextBtn.disabled = true;
}

  
