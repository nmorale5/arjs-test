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