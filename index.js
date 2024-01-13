// Get video element
const video = document.getElementById('cameraFeed');

// Request rear-facing camera permissions
navigator.mediaDevices.getUserMedia({
  video: {
    facingMode: 'environment', // Use 'environment' for rear-facing camera
  }
})
  .then((stream) => {
    // Set the video stream as the source for the video element
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error('Error accessing rear-facing camera:', error);
  });

// document.getElementById("fullscreen-button").addEventListener("click", (ev) => {
//     // Check if the browser supports the Fullscreen API
//     if (video.requestFullscreen) {
//         // Request fullscreen
//         console.log("going fullscreen")
//         video.requestFullscreen();
//     } else if (video.mozRequestFullScreen) { // Firefox
//         video.mozRequestFullScreen();
//     } else if (video.webkitRequestFullscreen) { // Chrome, Safari and Opera
//         video.webkitRequestFullscreen();
//     } else if (video.msRequestFullscreen) { // Internet Explorer
//         video.msRequestFullscreen();
//     }
// });

addEventListener("load", function() {
    setInterval(() => window.scrollTo(0, 1), 10);
}, false);
