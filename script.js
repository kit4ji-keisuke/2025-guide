const videos = [
  "VIDEO/KYUDO_VIDE.mp4",
  "VIDEO/BARE_BUKATU.mp4",
  "VIDEO/baseball.mp4"
];

let current = 0;
const videoElement = document.getElementById("bg-video");

function playNextVideo() {
  videoElement.src = videos[current];
  videoElement.load();
  videoElement.play();
  current = (current + 1) % videos.length;
}

videoElement.addEventListener("ended", playNextVideo);

// 初回再生
window.addEventListener("DOMContentLoaded", playNextVideo);
