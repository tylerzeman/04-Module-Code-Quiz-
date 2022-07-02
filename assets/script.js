var timerBox = document.querySelector('#count');

var timerBoxEl = document.getElementById("count");

var btn = document.querySelector("button");

timerBox.addEventListener('click', startTimer);

var counter = 75;

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
  // function to unhide questions\
  nextQuestion()

}

function nextQuestion () {
  var question1 = 0;
  document.querySelector('[data-number="1"]').setAttribute("style", "display:none");
  question1++;
  document.querySelector('[data-number="1"]').setAttribute("style", "display:block");
// pass a var into
}



