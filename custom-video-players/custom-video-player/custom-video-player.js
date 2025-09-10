// const video = document.getElementById('video');
// const play = document.getElementById('play');
// const stop = document.getElementById('stop');
// const progress = document.getElementById('progress');
// const timestamp = document.getElementById('timestamp');

// // Play & pause video
// function toggleVideoStatus() {
//   if (video.paused) {
//     video.play();
//   } else {
//     video.pause();
//   }
// }

// // update play/pause icon
// function updatePlayIcon() {
//   if (video.paused) {
//     play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
//   } else {
//     play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
//   }
// }

// // Update progress & timestamp
// function updateProgress() {
//   progress.value = (video.currentTime / video.duration) * 100;

//   // Get the minutes
//   let mins = Math.floor(video.currentTime / 60);
//   if(mins < video.duration){
//     mins = '0' + String(mins);
//   }

//   // Get Seconds
//   let secs = Math.floor(video.currentTime % 60);
//   if(secs < video.duration){
//     secs = '0' + String(secs);
//   }

//   timestamp.innerHTML = `${mins}:${secs}`;
// }

// // Set video time to progress
// function setVideoProgress() {
//   video.currentTime = (+progress.value * video.duration) / 100;
// }

// // Stop video
// function stopVideo() {
//   video.currentTime = 0;
//   video.pause();
// }

// // Event listeners
// video.addEventListener('click', toggleVideoStatus);
// video.addEventListener('pause', updatePlayIcon);
// video.addEventListener('play', updatePlayIcon);
// video.addEventListener('timeupdate', updateProgress);

// play.addEventListener('click', toggleVideoStatus);

// stop.addEventListener('click', stopVideo);

// progress.addEventListener('change', setVideoProgress);
const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');
const waterSound = document.getElementById('water-sound'); // صدا

// Play & pause video + sound
function toggleVideoStatus() {
  if (video.paused) {
    video.play();
    waterSound.play(); // صدا هم پلی شود
  } else {
    video.pause();
    waterSound.pause(); // صدا هم پاز شود
  }
}

// update play/pause icon
function updatePlayIcon() {
  if (video.paused) {
    play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
  } else {
    play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
  }
}

// Update progress & timestamp
function updateProgress() {
  progress.value = (video.currentTime / video.duration) * 100;

  let mins = Math.floor(video.currentTime / 60);
  if (mins < 10) {
    mins = '0' + String(mins);
  }

  let secs = Math.floor(video.currentTime % 60);
  if (secs < 10) {
    secs = '0' + String(secs);
  }

  timestamp.innerHTML = `${mins}:${secs}`;
}

// Set video time to progress
function setVideoProgress() {
  video.currentTime = (+progress.value * video.duration) / 100;
  waterSound.currentTime = video.currentTime; // هماهنگ با ویدیو
}

// Stop video + sound
function stopVideo() {
  video.currentTime = 0;
  video.pause();
  waterSound.currentTime = 0;
  waterSound.pause();
}

// Event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);
stop.addEventListener('click', stopVideo);
progress.addEventListener('change', setVideoProgress);
