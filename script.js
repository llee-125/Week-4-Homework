// select all elements
const start = document.getElementById ("start");
const quiz = document.getElementById ("quiz");
const question = document.getElementById ("question");
const choiceA = document.getElementById ("A");
const choiceB = document.getElementById ("B");
const choiceC = document.getElementById ("C");
const choiceD = document.getElementById ("D");
const counter = document.getElementById ("counter");
const timeGauge = document.getElementById ("timeGauge");
const progress = document.getElementById ("progress");
const scoreDiv = document.getElementById ("scoreContainer");

//create our questions
let questions = [
  {
      question : "Which task is not a responsibility of a full stack developer?",
      choiceA : "Explaining your code to your team",
      choiceB : "Back End Development",
      choiceC : "Quality Control Engineer",
      choiceD : "Writing a readme",
      correct : "A"
  }, {
      question : "What language is NOT used as a tool for front end developers?",
      choiceA : "HTML",
      choiceB : "Excel",
      choiceC : "CSS",
      choiceD : "JQuery",
      correct : "B"
  }, {
    question : "Which code MUST appear at the very bottom of body in html?",
      choiceA : "link to jQuery",
      choiceB : "link to CSS",
      choiceC : "link to JavaScript",
      choiceD : "ajax call",
      correct : "C"
  }, {
    question : "What symbol/s surrounds an array?",
      choiceA : "{}",
      choiceB : " `` ",
      choiceC : "()",
      choiceD : "[]",
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
    if(runningQuestion < lastQuestion){
      runningQuestion++;
      renderQuestion();
    } else {
      // end the quiz and show the score
      clearInterval(TIMER);
      scoreRender();
    }
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
  count = 0;
  if(runningQuestion < lastQuestion){
    runningQuestion++;
    renderQuestion();
  } else {
    // end the quiz and show the score
        clearInterval(TIMER);
        scoreRender();
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
// score render
function scoreRender(){
  scoreDiv.style.display = "block";

  // calculate the amount of question percenter answered by the user
  const scorePerCent = Math.round(100 * score/questions.length);

    // scoreDiv.innerHTML = "<img src=" + img + ">";

    scoreDiv.innerHTML = "<p>" + scorePerCent + "%</p>";
    prompt("You received a score of: " + scorePerCent + "%." + "  " + "Please enter your name.");
    console.log("You received a score of: " + scorePerCent + "%");
}            
