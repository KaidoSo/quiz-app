// Questions object
let questions = [{
    question: "What does Michael pretend to fire Pam over in season one?",
    imgSrc: "img/question-1.webp",
    answerA: "Stealing post-it notes",
    answerB: "Not answering the phone",
    answerC: "Wearing her glasses",
    correct: "A"
},
{
    question: "What does Kevin suggest Dwight put in his gun holster?",
    imgSrc: "img/question-2.webp",
    answerA: "A cell phone",
    answerB: "A banana",
    answerC: "A toy gun",
    correct: "B"
},
{
    question: "How much did Michael's beloved plasma TV cost?",
    imgSrc: "img/question-3.webp",
    answerA: "100$",
    answerB: "500$",
    answerC: "200$",
    correct: "C"
},
{
    question: "What kind of sauce does Kevin ask for when being forced to eat broccoli?",
    imgSrc: "img/question-4.webp",
    answerA: "Kethcup",
    answerB: "Hollandaise",
    answerC: "Mayonaise",
    correct: "B"
},
{
    question: "When role-playing a successful sales call with Jim and Michael, who does Dwight offend on the phone?",
    imgSrc: "img/question-5.webp",
    answerA: "Fudd G. Packer",
    answerB: "Seamour S. Kidmark",
    answerC: "William M. Buttlicker",
    correct: "C"
}
]


const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const quizImg = document.getElementById("quiz-img");
const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");
const prisonMike = document.getElementById("prison-mike");
const pmText = document.getElementById("pm-text");
const scoreDiv = document.getElementById("score");
const scoreImg = document.getElementById("score-img");
const scoreText = document.getElementById("score-text");
const tryAgain = document.getElementById("try-again");

const lastQuestion = questions.length - 1;
let runningQuestion = 0;
let score = 0;

function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<h3>"+ q.question +"</h3>";
    quizImg.innerHTML = "<img src="+ q.imgSrc +">";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
}

start.addEventListener("click", startQuiz);

//start quiz
function startQuiz() {
    start.style.display = "none";
    pmText.style.opacity = "0";
    scoreDiv.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
}

// check the answer
function checkAnswer(answer) {
    if (answer == questions[runningQuestion].correct){
        //answer is correct
        score++;
        console.log(score);
    }
    if (runningQuestion < lastQuestion) {
        runningQuestion++;
        renderQuestion();
    } else {
        // end quiz and show the score
        scoreRender();
    }
}

// render the score
function scoreRender() {
    scoreDiv.style.display = "block";
    quiz.style.display = "none";
    prisonMike.style.opacity = "0";

    // calculate the amount of question percent answered
    const scorePercent = Math.round(100 * score/questions.length);
    console.log(scorePercent);

    let img = (scorePercent == 100) ? "img/100-mike.gif" :
            (scorePercent >= 80) ? "img/80-mike.gif" :
            (scorePercent >= 60) ? "img/60-mike.gif" :
            (scorePercent >= 40) ? "img/40-mike.gif" :
            (scorePercent >= 20) ? "img/20-mike.gif" :
            "img/0-mike.gif";
    
    scoreImg.innerHTML = "<img src="+ img +">";
    scoreText.innerHTML = "<h1> There is "+ scorePercent +"% chance that you'll be the next Assistant to the Regional Manager!</h1>"
    tryAgain.innerHTML = "<button onClick='window.location.reload(true)'>Try Again</button>";
}