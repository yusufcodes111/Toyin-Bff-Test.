const questions = [
    {
        question: "What is  my nickname?",
        answers: [
            { text: "T-girl", correct: false},
            { text: "Toyin", correct: false},
            { text: "Tino", correct: true},
            { text: "Tee-girl", correct: false},
        ]
    },
    {
        question: "What do i like doing?",
        answers: [
            { text: "Singing", correct: false},
            { text: "Dancing", correct: false},
            { text: "Visiting new places", correct: true},
            { text: "Cooking", correct: false},
        ]
    },
    {
        question: "My best friend?",
        answers: [
            { text: "Tayo", correct: false},
            { text: "Ronke", correct: true},
            { text: "Blessing", correct: false},
            { text: "Shola", correct: false},
        ]
    },
    {
        question: "My favorite person?",
        answers: [
            { text: "Olamide", correct: false},
            { text: "Esther", correct: false},
            { text: "Olamiposi", correct: true},
            { text: "Joseph", correct: false},
        ]
    },
    {
        question: "My love language?",
        answers: [
            { text: "Joke", correct: false},
            { text: "Fun", correct: false},
            { text: "Money", correct: true},
            { text: "Food", correct: false},
        ]
    },
    {
        question: "My goal?",
        answers: [
            { text: "To travel abroad", correct: false},
            { text: "To graduate with first class", correct: false},
            { text: "To own a brand", correct: true},
            { text: "To be loved for who i am", correct: false},
        ]
    },
    {
        question: "My favorite place?",
        answers: [
            { text: "The beach", correct: true},
            { text: "Eatery", correct: false},
            { text: "The pool", correct: false},
            { text: "Club", correct: false},
        ]
    },
    {
        question: "My birthday?",
        answers: [
            { text: "July 17", correct: false},
            { text: "June 17", correct: true},
            { text: "June 27", correct: false},
            { text: "June 7", correct: false},
        ]
    },
    {
        question: "What i want for my birthday?",
        answers: [
            { text: "Plenty money & love", correct: true},
            { text: "A cake", correct: false},
            { text: "A Surprise gift", correct: false},
            { text: "Plenty gift", correct: false},
        ]
    },
    {
        question: "My age?",
        answers: [
            { text: "21", correct: false},
            { text: "22", correct: true},
            { text: "23", correct: false},
            { text: "24", correct: false},
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}

function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.
    question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Test Completed!";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex ++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.lenght){
        handleNextButton(); 
    }else{
      startQuiz();
    }
});


startQuiz();


