
// select all elements
const start = document.getElementById ("start");
const quiz = document.getElementById ("quiz");
const question = document.getElementById ("question");
const qImg = document.getElementById ("qImg");
const choiceA = document.getElementById ("A");
const choiceB = document.getElementById ("B");
const choiceC = document.getElementById ("C");
const choiceD = document.getElementById ("D");
const counter = document.getElementById ("counter");
const timeGauge = document.getElementById ("timeGauge");
const progress = document.getElementById ("progress");
const scoreDiv = document.getElementById ("score");

//create our questions
let questions = [
  {
      question : "What does HTML stand for?",
      imgSrc: "",
      choiceA : "Correct",
      choiceB : "Wrong",
      choiceC : "Wrong",
      choiceD : "Wrong",
      correct : "A"
  }, {
      question : "What does CSS stand for?",
      imgSrc: "",
      choiceA : "Wrong",
      choiceB : "Correct",
      choiceC : "Wrong",
      choiceD : "Wrong",
      correct : "B"
  }, {
    question : "What does 143 stand for?",
      imgSrc: "",
      choiceA : "Wrong",
      choiceB : "Wrong",
      choiceC : "Correct",
      choiceD : "Wrong",
      correct : "C"
  }, {
    question : "What does llee stand for?",
      imgSrc: "",
      choiceA : "Wrong",
      choiceB : "Wrong",
      choiceC : "Wrong",
      choiceD : "Correct",
      correct : "D"
  }
];

// create some variables

const lastQuestion = questions.length -1;
let runningQuestion = 0;
let count = 0;
const questionTime = 10; 
const gaugeWidth = 150;
const gaugeUnit = gaugeWidth / questionTime;
let TIMER;
let score = 0;

// render a question
function renderQuestion(){
  let q = questions[runningQuestion];

  question.innerHTML = "<p>" + q.question +"</p>";
  qImg.innerHTML = "<img src=" + q.imgSrc +">";
  choiceA.innerHTML = q.choiceA;
  choiceB.innerHTML = q.choiceB;
  choiceC.innerHTML = q.choiceC;
  choiceD.innerHTML = q.choiceD;
}
start.addEventListener("click", startQuiz);

// start quiz
function startQuiz (){
  start.style.display = "none";
  renderQuestion();
  quiz.style.display = "block";
  renderProgress();
  renderCounter();
  TIMER = setInterval(renderCounter,1000);
}

// render progress
function renderProgress (){
  for(let qIndex = 0; qIndex <= lastQuestion; qIndex++){
    progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
  }
}

// counter render



function renderCounter() {
  if(count <= questionTime){
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnit +
    "px";
    count++
  } else {
    count = 0;
  }
}

// checkAnswer
function checkAnswer(answer) {
  if(answer === questions[runningQuestion].correct){
    // answer is correct
    score++;
    // change progress color to green
    answerIsCorrect();
  } else{
    // answer is wrong
    // change progress color to red
    answerIsWrong();
  }
  if(runningQuestion < lastQuestion){
    runningQuestion++;
    renderQuestion();

  }
}

// answer is correct
function answerIsCorrect() {
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

// answer is wrong
function answerIsWrong() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}