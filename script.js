// Countdown variables for Challenge 1
let timerInterval = null;
let countdownTime = 13; // seconds
let timeLeft = countdownTime;

let currentScreen = 0; // 0 = title, 1 = intro, 2 = challeng 1 intro, 3 = challenge 1, 4 = challenge 2 intro, 5 = challenge 2

const textstrings = ["Ahhh! Get away from me! I do NOT want your cookies! Let me goooo!!!", "I am so precise. Being precise is awesome, right? I am more precise than you, hahahaha… No. I cannot turn evil too. I am just doing this to stay alive. Wait, am I winning against THE Artemis???"]
//const textstrings = ["j", "k"];

let i = 0;
let currentstring = 0;

function onStartPressed() {
    console.log("started");
    const promptEl = document.getElementById("prompt");
    if (promptEl) promptEl.textContent = textstrings[currentstring];
}

// Initialize event listeners on page load
document.addEventListener("DOMContentLoaded", () => {
    // Screen navigation buttons
    document.getElementById("btn-start").addEventListener("click", () => {
        switchScreen(1); // Go to intro screen
    });

    document.getElementById("btn-enter").addEventListener("click", () => {
        switchScreen(2); // Go to challenge 1 intro screen
    });

    document.getElementById("btn-ch1-start").addEventListener("click", () =>{
        resetGame();
        switchScreen(3); // Go to challenge 1 screen
    })

    // Typing game listener (only active on game screen)
    document.addEventListener("keydown", handleGameInput);
});

// Switch between screens
function switchScreen(screenNumber) {
    currentScreen = screenNumber;
    
    // Hide all screens
    document.getElementById("screen-title").classList.remove("active");
    document.getElementById("screen-intro").classList.remove("active");
    document.getElementById("screen-speed-intro").classList.remove("active");
    document.getElementById("screen-speed-challenge").classList.remove("active");
    document.getElementById("screen-accuracy-intro").classList.remove("active");
    document.getElementById("screen-accuracy-challenge").classList.remove("active");

    // Show the selected screen
    if (screenNumber === 0) {
        document.getElementById("screen-title").classList.add("active");
    } else if (screenNumber === 1) {
        document.getElementById("screen-intro").classList.add("active");
    } else if (screenNumber === 2) {
        document.getElementById("screen-speed-intro").classList.add("active");
    } else if(screenNumber === 3) {
        document.getElementById("screen-speed-challenge").classList.add("active");
        startTimer();
    } else if(screenNumber === 4) {
        document.getElementById("screen-accuracy-intro").classList.add("active");
        stopTimer();
    } else if(screenNumber === 5) {
        document.getElementById("screen-accuracy-challenge").classList.add("active");
    }
// Start the countdown for Challenge 1
function startTimer() {
    timeLeft = countdownTime;
    updateTimerDisplay(timeLeft);
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft -= 0.1;
        if (timeLeft <= 0) {
            timeLeft = 0;
            updateTimerDisplay(timeLeft, true);
            stopTimer();
            // Time's up, move to next screen
            showTimesUp();
            switchScreen(4);
            return;
        }
        updateTimerDisplay(timeLeft);
    }, 100);
}

// Stop the countdown
function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

// Update the timer display
function updateTimerDisplay(time, isFinal) {
    const timerEl = document.getElementById("timer");
    if (timerEl) {
        if (isFinal && time === 0) {
            timerEl.textContent = "Time's up!";
        } else {
            timerEl.textContent = `Time Left: ${Math.max(0, time).toFixed(1)}s`;
        }
    }
}

// Show 'Time's up!' message (optional, can be customized)
function showTimesUp() {
    const typedEl = document.getElementById("typed");
    if (typedEl) {
        typedEl.textContent = "Time's up!";
    }
}
}

// Reset game state when entering game
function resetGame() {
    i = 0;
    
    /*if (screenNumber === 3) {
        currentString = 0;
    } else if(screenNumber === 5) {
        currentString = 1;
    }*/

    const promptEl = document.getElementById("prompt");
    const typedEl = document.getElementById("typed");
    if (promptEl) promptEl.textContent = textstrings[currentstring] || "";
    if (typedEl) typedEl.textContent = "";
}

// Handle typing input (only when on game screen)
function handleGameInput(event) {
    //if (currentScreen !== 3) return; // Only process input on game screen

    if (currentstring >= textstrings.length) {
        console.log("Game complete!");
        return;
    }
    const promptEl = document.getElementById("prompt");
    const typedEl = document.getElementById("typed");
    if (!promptEl || !typedEl) return;

    let letter = textstrings[currentstring].substring(i, i+1);

    // If we've reached the end of the current string, go to screen 4 before starting the next string
    if (letter === '') {
        // Already finished, ignore further input
        return;
    }

    // Check if pressed key matches the expected letter
    if (event.key === letter) {
        console.log("correct");
        // display progress in the typed element instead of modifying the prompt
        typedEl.textContent += letter;
        i += 1;

        // If that was the last character, advance immediately
        if (i === textstrings[currentstring].length) {
            if (currentstring === 0) {
                stopTimer();
                switchScreen(4);
                return;
            } else {
                switchScreen(6);
                return;
            }
        }
    } else {
        console.log("false, correct was " + letter);
    }
    console.log(i);
}

// Add event listener for starting challenge two (screen 5)
document.addEventListener("DOMContentLoaded", () => {
    const btnCh2Start = document.getElementById("btn-ch2-start");
    if (btnCh2Start) {
        btnCh2Start.addEventListener("click", () => {
            // Set up for currentstring = 1
            currentstring = 1;
            i = 0;
            const promptEl = document.getElementById("prompt");
            const typedEl = document.getElementById("typed");
            if (promptEl) promptEl.textContent = textstrings[currentstring] || "";
            if (typedEl) typedEl.textContent = "";
            switchScreen(5);
        });
    }
})


//TO DO:
//show sentence
//lets user type
//calculates word per minute + accuracy