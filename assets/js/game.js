var startBtn = document.getElementById("btn");
var currentIndex = 0;
var timeLeft = 60;
var userScore = 0;
var timeInterval;
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
var answerShow = document.getElementById("checkQuestion");


var questions = [
    {
        question: "Question 1 goes here?",
        choices: ["choice one", "choice two", "choice three", "choice four"],
        answer: "choice one"
    },
    {
        question: "Question 2 goes here?",
        choices: ["choice one", "choice two", "choice three", "choice four"],
        answer: "choice two"
    },
    {
        question: "Question 3 goes here?",
        choices: ["choice one", "choice two", "choice three", "choice four"],
        answer: "choice three"
    },
    {
        question: "Question 4 goes here?",
        choices: ["choice one", "choice two", "choice three", "choice four"],
        answer: "choice one"
    },
    {
        question: "Question 5 goes here?",
        choices: ["choice one", "choice two", "choice three", "choice four"],
        answer: "choice two"
    },
]


function countdown() {
    timerEl.classList.remove("hidden");
    timerEl.classList.add("timer");
    
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        timerEl.textContent = "Your Time has Ran Out";
        showQuestion();

      }
    }, 1000);
  }
  

var startQuiz = function() {
    console.log("button is clicked");
    startBtn.setAttribute("class", "hidden");
    showQuestion();
    countdown();
}

function showQuestion() {
    answerDiv.innerHTML = "";
    if(timeLeft === 0 || currentIndex === questions.length) {
        console.log("THe quiz is over");
        questionDiv.style.display = "none";
        hsDiv.classList.remove("hidden");
        hsDiv.classList.add("hsDiv");
        clearInterval(timeInterval);
        timerEl.style.visibility = "hidden";
        return
    }
    var currentQuestion = questions[currentIndex];
    questionTitle.textContent = currentQuestion.question;
    for (var i = 0; i < currentQuestion.choices.length; i++) {
        var element = currentQuestion.choices[i];
        console.log(element);
        var choiceBtn = document.createElement("button");
        choiceBtn.textContent = element;
        choiceBtn.setAttribute("value", element);
        choiceBtn.onclick=checkQuestion;
        answerDiv.appendChild(choiceBtn);

    }

}
//if timer is 0 and all questions are answered, go to high score page


function checkQuestion() {
    if (this.value === questions[currentIndex].answer) {
        console.log("this is correct");
        userScore++;
        answerShow.textContent = "Correct";
        answerShow.classList.add("timerDiv");
        setTimeout(function(){
            answerShow.textContent = "";
        }, 1500);

    } else {
        console.log("this is incorrect");
        timeLeft -= 5;
        answerShow.textContent ="Incorrect";
        answerShow.classList.add("timerDiv");
        setTimeout(function() {
            answerShow.textContent = ""
        }, 1500);
    }
    currentIndex++;
    showQuestion();

}

startBtn.addEventListener("click", startQuiz);

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



saveBtn.addEventListener("click", function(){
    console.log("u clicked the save bttn")



    //creating object to go into local storage
    var hsObject = {
        "initials": initials.value,
        "score": userScore
    }
    console.log(hsObject);
    highscores.push(hsObject);
    localStorage.setItem("high scores", JSON.stringify(highscores));
    var tInitials = document.createElement("tr");
    var tScore = document.createElement("tr");
    tInitials.textContent(initials.value);
    tScore.textContent(userScore);
    hsInitials.appendChild(tInitials);
    hsScore.appendChild(tScore);
    initials.value = "";
});


