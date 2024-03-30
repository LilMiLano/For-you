// Get the button element by its id
let btn = document.getElementById("btn");
// Create a variable to store the audio element
let audio = new Audio("Music/Habang Buhay.mp3");

// Define a function to toggle between playing and pausing the audio
function togglePlayPause() {
    if (audio.paused) {
        audio.play(); // If audio is paused, play it
    } else {
        audio.pause(); // If audio is playing, pause it
    }
}

// Add an event listener to the button for the "click" event
btn.addEventListener("click", togglePlayPause);
