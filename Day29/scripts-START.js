//dom elms
let countDown;
const timeDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
//fns
function timer(seconds) {
  //clear any existing timer
  clearInterval(countDown);
  //   setInterval(_ => {
  //     return seconds--;
  //   }, 1000);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayEndTime(then);
  displayAfterSecond(seconds);
  console.log({ now, then });
  countDown = setInterval(() => {
    const secLeft = Math.round((then - Date.now()) / 1000);
    //stop it at finite number/time
    if (secLeft < 0) {
      return;
    }

    //display it
    displayAfterSecond(secLeft);
  }, 1000);
}

function displayAfterSecond(seconds) {
  const minutes = Math.floor(seconds / 60);
  const reminderSeconds = seconds % 60;
  const display = `${minutes}:${
    reminderSeconds < 10 ? "0" : ""
  }${reminderSeconds}`;
  document.title = display;
  timeDisplay.textContent = display;
  console.log({ display });
}

function displayEndTime(timeStamp) {
  const end = new Date(timeStamp);
  const day = end.getDay();
  const hour = end.getHours();
  const min = end.getMinutes();
  const sec = end.getSeconds();
  endTime.textContent = `Break Ends at ${hour > 12 ? hour - 12 : hour}:${
    min < 10 ? "0" : ""
  }${min}`;
  //   console.log({ day, hour, min, sec });
}
function startTimer() {
  const seconds = parseInt(this.dataset.time);
  console.log(seconds);
  timer(seconds);
}
//listeners
buttons.forEach(button => button.addEventListener("click", startTimer));
document.customForm.addEventListener("submit", function(e) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
});
