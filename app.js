//grab the stuff
const minutesTimer = document.querySelector(".minutes");
const secondsTimer = document.querySelector(".seconds");
const startBtn = document.querySelector(".startBtn");
const stopBtn = document.querySelector(".stopBtn");
const resetBtn = document.querySelector(".resetBtn");
const Btn = document.querySelector(".Btn");
let timerTime = 00;
let interval;
let isrunning = false;

//functions

setInterval(function () {}, 1000);

function startTimer() {
  if (isrunning) return;
  stopBtn.style.display = " block";
  startBtn.style.display = " none";
  isrunning = true;
  interval = setInterval(incrementTimer, 1000);
}
function stopTimer() {
  if (!isrunning) return;
  stopBtn.style.display = " none";
  startBtn.style.display = " block";
  isrunning = false;
  clearInterval(interval);
}
function resetTimer() {
  stopTimer();
  timerTime = 0;
  minutesTimer.textContent = "00";
  secondsTimer.textContent = "00";
}

function pad(number) {
  return number < 10 ? `0` + number : number;
}

function incrementTimer() {
  timerTime++;

  numofMinutes = Math.floor(timerTime / 60);
  numofseconds = timerTime % 60;

  minutesTimer.textContent = pad(numofMinutes);
  secondsTimer.textContent = pad(numofseconds);
}

startBtn.addEventListener("click", startTimer);
stopBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);
