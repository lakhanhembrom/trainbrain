const questions =[
    {
        question: "India is a federal union comprising twenty-eight states and how many union territories?",
        answers: [
            {text: "6", correct: false},
            {text: "7", correct: false},
            {text: "8", correct: true},
            {text: "9", correct: false},
        ]
    },
    {
        question: "Which of the following is the capital of Arunachal Pradesh?",
        answers: [
            {text: "Itanagar", correct: true},
            {text: "Dispur", correct: false},
            {text: "Imphal", correct: false},
            {text: "Panaji", correct: false},
        ]

    },
    {
        question: "Which of the following states is not located in the North?",
        answers: [
            {text: "Jharkhand", correct: true},
            {text: "Jammu and Kashmir", correct: false},
            {text: "Himachal Pradesh", correct: false},
            {text: "Haryana", correct: false},
        ]
    },
    {
        question: "Which is the smallest continent in the world?",
        answers: [
            {text: "Asia", correct: false},
            {text: "Australia", correct: true},
            {text: "Arctic", correct: false},
            {text: "Africa", correct: false},
        ]
    },
    {
        question: "Which is the longest river on the earth?",
        answers: [
            {text: "Ganga", correct: false},
            {text: "Damodar", correct: false},
            {text: "Nile", correct: true},
            {text: "Amazon", correct: false},
        ]
    },
    {
        question: "Which is the animal referred as the ship of the desert?",
        answers: [
            {text: "Elephant", correct: false},
            {text: "Bear", correct: false},
            {text: "Lion", correct: false},
            {text: "Camel", correct: true},
        ]
    },
    {
        question: "A figure with 8 sides is called?",
        answers: [
            {text: "Pentagon", correct: false},
            {text: "Hexagon", correct: false},
            {text: "Octagon", correct: true},
            {text: "Decagon", correct: false},
        ]
    },
    {
        question: "Shape of Egg is?",
        answers: [
            {text: "Oval", correct: true},
            {text: "Circle", correct: false},
            {text: "Spherical", correct: false},
            {text: "Octagon", correct: false},
        ]
    },
    {
        question: "Which planet is nearest to Earth?",
        answers: [
            {text: "Mercury", correct: false},
            {text: "Venus", correct: true},
            {text: "Mars", correct: false},
            {text: "Jupiter", correct: false},
        ]
    },
    {
        question: "How many players are there in a football team?",
        answers: [
            {text: "10", correct: false},
            {text: "9", correct: false},
            {text: "11", correct: true},
            {text: "12", correct: false},
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
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo + ". " +  currentQuestion.question;

    currentQuestion.answers.forEach(answer=>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}

function resetState(){
    nextButton.style.display="none";
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
    }
    else{
        selectedBtn.classList.add("inCorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = "true";
    });
    nextButton.style.display="block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    // questionElement.innerHTML = 'Ab toh Yes bol dijiye';
    nextButton.innerHTML = "Play Again";
    // nextButton.innerHTML = "Love me thoda"
    nextButton.style.display="block";
}

function handleNextbutton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestion();
    }
    else{
        showScore();
    }
}

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex < questions.length){
        handleNextbutton();
    }
    else{
        startQuiz();
    }
})
startQuiz();