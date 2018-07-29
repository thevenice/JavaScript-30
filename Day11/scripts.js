//part1 get elements in dom
const player = document.querySelector(".player");
const video = document.querySelector(".viewer");
const playerControls = document.querySelector(".player__controls");
const progressBar = document.querySelector(".progress__filled");
const toggle = document.querySelector(".toggle");
const skipButtons = document.querySelectorAll("[data-skip]");
const rangeSliders = document.querySelectorAll(".player__slider");
const progress = document.querySelector(".progress");
//part2 functions building
function togglePlay() {
  const method = video.paused ? "play" : "pause";
  video[method]();

  //or   const method = video.paused ? video.play() : video.pause();
  //paused is a default property

  //or   if (video.paused) {
  //     video.play();
  //   } else {
  //     video.pause();
  //   }
}

// function clickfn() {
//   console.log(togglePlay());
// }

function updateButton() {
  const icon = video.paused ? "►" : "❚ ❚";

  toggle.textContent = icon;
}

function skipBtn() {
  // if([dataiskip='10']){
  //   console.log(this.dataset.skip);
  //  "this.dataset.skip"; this is string parsefloat it
  video.currentTime += parseFloat(this.dataset.skip);
}

function handleRange() {
  video[this.name] = this.value;
  //   console.log(this.name);
  //   console.log(this.value);
}

function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = ` ${percent}%`;
}

function scrub(e) {
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
  //   console.log(e);
}

//part3 add event listeners
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateButton);
video.addEventListener("pause", updateButton);
toggle.addEventListener("click", togglePlay);
skipButtons.forEach(button => button.addEventListener("click", skipBtn));
rangeSliders.forEach(range => range.addEventListener("click", handleRange));
rangeSliders.forEach(range => range.addEventListener("mousemove", handleRange));
video.addEventListener("timeupdate", handleProgress);
progress.addEventListener("click", scrub);
let mousedown = false;
progress.addEventListener("mousemove", e => mousedown && scrub(e));
progress.addEventListener("mousedown", () => (mousedown = true));
progress.addEventListener("mouseup", () => (mousedown = false));
