// Questions object
let questions = [{
    question: "What does Michael pretend to fire Pam over in season one?",
    imgSrc: "img/question-1.webp",
    answerA: "Stealing post-it notes",
    answerB: "Not answering the phone",
    answerC: "Wearing her glasses",
    correct: "answerA"
},
{
    question: "What does Kevin suggest Dwight put in his gun holster?",
    imgSrc: "img/question-2.webp",
    answerA: "A cell phone",
    answerB: "A banana",
    answerC: "A toy gun",
    correct: "answerB"
},
{
    question: "How much did Michael's beloved plasma TV cost?",
    imgSrc: "img/question-3.webp",
    answerA: "100$",
    answerB: "500$",
    answerC: "200$",
    correct: "answerC"
},
{
    question: "What kind of sauce does Kevin ask for when being forced to eat broccoli?",
    imgSrc: "img/question-4.webp",
    answerA: "Kethcup",
    answerB: "Hollandaise",
    answerC: "Mayonaise",
    correct: "answerB"
},
{
    question: "When role-playing a successful sales call with Jim and Michael, who does Dwight offend on the phone?",
    imgSrc: "img/question-5.webp",
    answerA: "Fudd G. Packer",
    answerB: "Seamour S. Kidmark",
    answerC: "William M. Buttlicker",
    correct: "answerC"
}
]


const start = document.getElementById('start');
const quiz = document.getElementById('quiz');
const question = document.getElementById("question");
const quizImg = document.getElementById("quiz-img");
const answerA = document.getElementById("A");
const answerB = document.getElementById("B");
const answerC = document.getElementById("C");

const lastQuestion = questions.length - 1;
let runningQuestion = 0;

function renderQuestion() {
    let q = questions[runningQuestion];
    question.innerHTML = "<h3>+ q.question +</h3>";
    quizImg.innerHTML = "<img src="+ q.imgSrc +">";
    answerA.innerHTML = q.answerA;
    answerB.innerHTML = q.answerB;
    answerC.innerHTML = q.answerC;
}

