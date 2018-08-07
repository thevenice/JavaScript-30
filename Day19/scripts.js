const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");
function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then(localmediaStream => {
      console.log(localmediaStream);
      video.src = window.URL.createObjectURL(localMediaStream);
      video.play();
    })
    .catch(err => console.error(`oh no!!`));
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    //take px out
    let pixels = ctx.getImageData(0, 0, width, height);
    //mess with px
    // pixels = redEffect(pixels);
    pixels = redEffect(pixels);
    ctx.globalAplha = 0.8;
    //put px back
    ctx.putImageData(pixels, 0, 0);
  }, 20);
}
function takePhoto() {
  snap.currentTime = 0;
  snap.play();
  //take the data ouyt of thecanvas
  const data = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = data;
  link.setAttribute("download", "handsome");
  link.innerHTML = `<img src="${data}" alt="Handsome Man"`;
  strip.insertBefore(link, strip.firstChild);
}
function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; //r
    pixels.data[i + 1] = pixels.data[i + 1] - 50; //g
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; //b
  }
  return pixels;
}
function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0] + 100; //r
    pixels.data[i + 100] = pixels.data[i + 1] - 50; //g
    pixels.data[i - 200] = pixels.data[i + 2] * 0.5; //b
  }
  return pixels;
}

function greenScreen(pixels) {
  const level = {};
  document.querySelectorAll(".rgb input").forEach(input => {
    level[input.name] = input.value;
  });
  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];
    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      pixels.data[i + 3] = 0;
    }
  }
  return pixels;
}
getVideo();

video.addEventListener("canplay", paintToCanvas);
