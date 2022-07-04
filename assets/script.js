var timerBox = document.querySelector('#count');

var timerBoxEl = document.getElementById("count");

var btn = document.querySelector("button");

timerBox.addEventListener('click', startTimer);

var counter = 75;

var incorrectAns = document.querySelector('IncorrectAnswer');

incorrectAns.addEventListener('onclick', timerBoxEl - 10);


function startTimer()
// The timer begins
{
  setInterval(function () {
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
  nextQuestion()

}

function nextQuestion () {
  var question1 = 0;
  question1++;
  document.querySelector('[data-number="1"]').setAttribute("style", "display:none");
  document.querySelector('[data-number="1"]').setAttribute("style", "display:block");

}

function getQuestion2 () {
  document.querySelector('[data-number="1"]').setAttribute("style", "display:none");
  // document.querySelector('[data-number="2"]').setAttribute("style", "display:none");
  document.querySelector('[data-number="2"]').setAttribute("style", "display:block");
}
function getQuestion3 () {
  document.querySelector('[data-number="2"]').setAttribute("style", "display:none");
  // document.querySelector('[data-number="3"]').setAttribute("style", "display:none");
  document.querySelector('[data-number="3"]').setAttribute("style", "display:block");
}