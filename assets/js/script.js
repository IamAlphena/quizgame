/*
Global Variables
*/

var questions = [
    {
        ask: "What is Alphena's Cat's name?",
        answers: ["Deku", "Ondore", "Mew", "Tom"],
        correctAnswer: "Mew" 
    },

    {
        ask: "What is the type of capitalization that Javascript uses?",
        answers: ["Title Case","Camel Case", "Sentance Case", "Snake Case"],
        correctAnswer: "Camel Case"
    },
    {
        ask: "What is the way to comment on javascript?",
        answers: ["//", "<!-- -.>", "#", " [ ] "],
        correctAnswer: "//"
    },
    {
        ask: "What is a media query used for in CSS?"
        answers: ["Background Color","CSS If Statement","Lorem ipsum","Mobile Responsiveness"],
        correctAnswer: "Mobile Responsiveness"
    },
    {
        ask: "Which of these is JS not commonly used for?",
        answers: ["Web Development", "Base Structure", "Backend", "Automation"],
        correctAnswer: "Base Structure"
    },
    {
        ask: "What does the div tag do?"
        answers: ["Makes the code easier to read", "Changes the title of your page","Creates a defined space","Adds Lorem Ipsum to the page"],
        correctAnswer: "Creates a defined space"
    }

];

var info = document.getElementsByClassName("info");
var trivia = document.getElementsByClassName("trivia");
var score = document.getElementsByClassName("scorecard");
var btn = document.querySelector("#start");
var timeSet = document.querySelector(".time");

var timeLeft = 60;

/*
Functions
*/

function startQuiz(){

    // display div class trivia

    trivia[0].style.display = "block";

    // hide div info
    info[0].style.display = "none" ;
     
    // timer starts

    function setTime(){
    var timerInterval = setInterval(function(){
        timeLeft--;
        timeSet.textContent = "Time Remaining: " + timeLeft;

        if (timeLeft === 0){
        clearInterval(timerInterval);}
    }, 1000);
    }

    setTime();

    //display array answers


    //when answer is clicked, reveal next question

    //if answer clicked !== correct answer 
    //subtract time

    //if timer === 0 end game

    // if no more questions and timer > 0 end game

    // record time remaining as score

}

//endGame 

// display div class scorecard

// show score of time remaining

// record initials with score to local storage

// show scores that have been saved. 



/*
Events
*/

//when start is clicked run functon startQuiz

btn.addEventListener('click', startQuiz);


/*
Entry Points
*/