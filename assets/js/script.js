/*
Global Variables
*/

var questions = [
    {
        ask: "What is the type of capitalization that Javascript uses?",
        answers: ["Title Case", "Camel Case", "Sentance Case", "Snake Case"],
        correctAnswer: "Camel Case"
    },
    {
        ask: "What is the way to comment on javascript?",
        answers: ["//", "<!-- -.>", "#", " [ ] "],
        correctAnswer: "//"
    },
    {
        ask: "What is a media query used for in CSS?",
        answers: ["Background Color", "CSS If Statement", "Lorem ipsum", "Mobile Responsiveness"],
        correctAnswer: "Mobile Responsiveness"
    },
    {
        ask: "Which of these is JS not commonly used for?",
        answers: ["Web Development", "Base Structure", "Backend", "Automation"],
        correctAnswer: "Base Structure"
    },
    {
        ask: "What does the div tag do?",
        answers: ["Makes the code easier to read", "Changes the title of your page", "Creates a defined space", "Adds Lorem Ipsum to the page"],
        correctAnswer: "Creates a defined space"
    }

];

var info = document.getElementsByClassName("info");
var trivia = document.getElementsByClassName("trivia");
var score = document.getElementsByClassName("scorecard");
var btn = document.querySelector("#start");
var timeSet = document.querySelector(".time");
var currentAsk = document.querySelector(".currentAsk");
var answerChoices = document.querySelector("#answerChoices");
var currentScore = document.querySelector("#finalScore");
var username = document.getElementById("initials");
var submit = document.querySelector("#submit");
var recentScores = document.querySelector("#recentScores");
var highScores = JSON.parse(localStorage.getItem("highScores")) || [];

var timeLeft = 60;
var currentQuestion = 0;
var choices = "";

/*
Functions
*/

function startQuiz() {

    // display div class trivia

    trivia[0].style.display = "block";

    // hide div info
    info[0].style.display = "none";

    // timer starts
    setTime();

    //display questions, with it's properties displayed on the page
    askQuestion();
}

function setTime() {
    var timerInterval = setInterval(function () {
        timeLeft--;
        timeSet.textContent = "Time Remaining: " + timeLeft;

        if (timeLeft === 0) {
            clearInterval(timerInterval);
        }
    }, 1000);
}

function askQuestion() {

    // if statement able to end quiz
    if (timeLeft === 0 || currentQuestion === questions.length) {
        endGame();
        return;
    }

    var triviaQuestion = questions[currentQuestion];
    currentAsk.textContent = triviaQuestion.ask;

    //populate array choices with questions[currentQuestion].answers
    choices = triviaQuestion.answers;
    // console.log(choices)
    //turn array choices into buttons inside answerChoices
    choices.forEach(function (item) {
        var choiceButton = document.createElement("button");
        choiceButton.textContent = item;
        choiceButton.id = item;
        answerChoices.append(choiceButton);
        // hit button, the next ask in array questions is shown
        choiceButton.addEventListener('click', e => {
            // console.log(e.target.id)
            // check if button id === correctAnswer
            //if !== then timeLeft--5
            if (e.target.id !== triviaQuestion.correctAnswer) {
                // console.log("wrong");
                timeLeft -= 5;
            }
            // next question
            currentQuestion++;
            answerChoices.innerHTML = " ";
            askQuestion();
        })


    });
}


function endGame() {
    // display div class scorecard

    score[0].style.display = "block";

    // hide div trivia
    trivia[0].style.display = "none";

    // show score of time remaining
    var finalScore = timeLeft;
    currentScore.textContent = "Your Score: " + finalScore;   
}

function saveScore(event){
    //prevent default (refresh)
    event.preventDefault();
   // record initials with score to local storage

    var parseScore = finalScore.textContent.split(": ")

    var endScore = {
        score: parseInt(parseScore[1]),
        name: username.value,
    }

    highScores.push(endScore);
   
    localStorage.setItem('highScores', JSON.stringify(highScores));

    var scoreList = JSON.parse(localStorage.getItem('highScores'));
    
    for (let index = 0; index < scoreList.length; index++) {
        
        var score = scoreList[index].score
        var name =  scoreList[index].name 
        var h1 = document.createElement("h1");
        var p = document.createElement("p");

        h1.setAttribute("class", "red")
        p.setAttribute("class", "red")

        h1.textContent = name;
        p.textContent = "got " + score;

        recentScores.append(h1, p)
    }
}


/*
 Events
*/

btn.addEventListener('click', startQuiz);
submit.addEventListener('click', saveScore);