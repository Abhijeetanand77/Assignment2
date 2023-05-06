let count = 0;
const counter = document.getElementById("counter");
const incrementBtn = document.getElementById("increment");
const resetBtn = document.getElementById("reset");

// create audio element
const audio = new Audio("https://actions.google.com/sounds/v1/alarms/beep_short.ogg");

function incrementCounter() {
  count++;
  counter.textContent = count;
  audio.play(); // play sound effect
}

function resetCounter() {
  count = 0;
  counter.textContent = count;
}

incrementBtn.addEventListener("click", incrementCounter);
resetBtn.addEventListener("click", resetCounter);

