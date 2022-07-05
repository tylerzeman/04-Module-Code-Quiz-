// Variables

var timerBox = document.querySelector('#count');

var timerBoxEl = document.getElementById("count");

var btn = document.querySelector("#startQuiz");

var counter = 75;

var incorrectAnswer = document.querySelector('.incorrectAnswer');

var mainTimer

// Event Listeners

timerBox.addEventListener('click', startTimer);

incorrectAnswer.addEventListener('click', wrongAnswer);

//Functions

function wrongAnswer() {

}

function startTimer() {
// The timer begins
  mainTimer=setInterval(function () {
    counter--;
    if (counter >= 0) {
      timerBoxEl.textContent = counter;
    }
    if (counter === 0) {
      alert('sorry, out of time');
      clearInterval();
    }
  }, 1000);
}
function start() {
  timerBoxEl.style = "color:red;";
  btn.setAttribute("style", "display:none");
  startTimer();
  // function to move onto question 1\
  getQuestion1()

}
function getQuestion1 () {
  var question1 = 0;
  question1++;
  document.querySelector('[data-number="1"]').setAttribute("style", "display:none");
  document.querySelector('[data-number="1"]').setAttribute("style", "display:block");
  // if (correctAnswer = true) {
  //   alert('Correct!');
  // }
}
function getQuestion2 () {
  document.querySelector('[data-number="1"]').setAttribute("style", "display:none");
  document.querySelector('[data-number="2"]').setAttribute("style", "display:block");
  // if (correctAnswer = true) {
  //   alert('Correct!');
  // }
  }
function getQuestion3 () {
  document.querySelector('[data-number="2"]').setAttribute("style", "display:none");
  document.querySelector('[data-number="3"]').setAttribute("style", "display:block");
  // if (correctAnswer = true) {
  //   alert('Correct!');
  // }
}
function saveHighScore () {
// Researching local storage and how to save high scores, will resubmit later with working code.
// Also looking for feedback on anything in this submitted HW - Thank you!
}