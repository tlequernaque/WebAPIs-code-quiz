let startButton = document.getElementById("start-button");
let startDiv = document.getElementById("start-section");
let questionsDiv = document.getElementById("questions-section");
let question1 = document.getElementById("question1");
let question2 = document.getElementById("question2");
let question3 = document.getElementById("question3");
let question4 = document.getElementById("question4");
let question5 = document.getElementById("question5");
let timeEl = document.getElementById ("timer");
let timerId; 
let timeRemaining = 150;

startButton.addEventListener("click", startTheQuiz);

function startTheQuiz (){
    startDiv.setAttribute("class", "hide");
    questionsDiv.removeAttribute("class");

    timerId = setInterval(oneSecondHandler, 1000);
    timeEl.textContent = timeRemaining;
    showQuestion ();
}

function oneSecondHandler (){
    // to be complete
    timeRemaining --;
    timeEl.textContent = timeRemaining;

    if(timeRemaining <= 0){
        endQuiz();
    }
}

function showQuestion (){
    // to be completed
}

function endQuiz (){
    // to be completed
}