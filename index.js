// Get video element
const video = document.getElementById('cameraFeed');

// Request camera permissions
navigator.mediaDevices.getUserMedia({ video: true })
  .then((stream) => {
    // Set the video stream as the source for the video element
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error('Error accessing camera:', error);
  });