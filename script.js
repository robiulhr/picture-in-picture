const videoSelector = document.getElementById("video")
const buttonStart = document.getElementById("button-start")
const buttonStop = document.getElementById("button-stop")


// window for start picture in picture mode

function togglePictureInPicture() {
  if (document.pictureInPictureElement) {
      document.exitPictureInPicture();
      console.log("1st");
  } else {
    if (document.pictureInPictureEnabled) {
      videoSelector.requestPictureInPicture();
      console.log("second");
    }
  }
}

// function for capturing window

async function startCapture() {

  try {
     videoSelector.srcObject = await navigator.mediaDevices.getDisplayMedia();
  } catch(err) {
    console.error("Error: " + err);
  }
}
// start function

async function startFunction (){
    buttonStart.disabled = true
     startCapture()
     await togglePictureInPicture()
     buttonStart.disabled = false
} 
        // stop function
 function stopCapture() {
     togglePictureInPicture()
  let tracks = videoSelector.srcObject.getTracks();
  tracks.forEach(track => track.stop());
  videoSelector.srcObject = null;
}
buttonStart.addEventListener("click", startFunction)
buttonStop.addEventListener("click",stopCapture)   

