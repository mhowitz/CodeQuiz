var startBtn = document.getElementById("btn");
var currentIndex = 0;
var timeLeft = 5;
var userScore = 0;

var questionTitle = document.querySelector(".question-Title");
var questionDiv = document.querySelector(".questionDiv");
var answerDiv = document.querySelector(".answerDiv")
var timerEl = document.querySelector("#timer");
var hsDiv = document.querySelector("#hsDiv");
var saveBtn = document.getElementById("saveBtn");
var initials = document.getElementById("initials");
var hsList = document.getElementById("hsList");
var hsInitials = document.getElementById("hsInitials");
var hsScore = document.getElementById("hsScore");

var hsPage = function() {
    var highscores = [];

    if(localStorage.getItem("high scores")) {
        highscores = JSON.parse(localStorage.getItem("high scores"));
        for (i = 0; i < highscores.length; i++) {
            var tInitials = document.createElement("tr");
            var tScore = document.createElement("tr");
            tInitials.textContent = highscores[i].initials;
            tScore.textContent = highscores[i].score;
            hsInitials.appendChild(tInitials);
            hsScore.appendChild(tScore);
    
        }
    };
    
    
}

hsPage();

