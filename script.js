let currentScreen = 0; // 0 = title, 1 = intro, 2 = challeng 1 intro, 3 = challenge 1, 4 = challenge 2 intro, 5 = challenge 2

//const textstrings = ["Ahhh! Get away from me! I do NOT want your cookies! Let me goooo!!!", "I am so precise. Being precise is awesome, right? I am more precise than you, hahahaha… No. I cannot turn evil too. I am just doing this to stay alive. Wait, am I winning against THE Artemis???"]
const textstrings = ["boomboomboomboomboom", "yayayayay", "I am Athena. I refuse to be your sacrifice."]; //for testing purposes

let i = 0;
let currentstring = 0;
let tutorialSecondTextShown = false; // Track if second tutorial text has been shown

function onStartPressed() {
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
        switchScreen(6); // Go to tutorial screen
    });

    document.getElementById("btn-ch1-start").addEventListener("click", () =>{
        currentstring = 0; // Set to first challenge text
        resetGame();
        switchScreen(3); // Go to challenge 1 screen
    });

    document.getElementById("btn-ch2-start").addEventListener("click", () =>{
        resetGame();
        switchScreen(5); // Go to challenge 2 screen
    });

    document.getElementById("btn-meet-gods").addEventListener("click", () => {
        switchScreen(2); // Go to speed challenge intro
    });

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
    document.getElementById("screen-tutorial").classList.remove("active");
    document.getElementById("screen-tutorial-2").classList.remove("active");
    document.getElementById("screen-tutorial-3").classList.remove("active");

    // Show the selected screen
    // add a failure screen. if screen number = -1 (or whatever you pick for the failure screen)
    // load the failure screen where it says you suck 
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
    } else if(screenNumber === 6) {
        document.getElementById("screen-tutorial").classList.add("active");
        tutorialSecondTextShown = false; // Reset flag when entering screen 6
    } else if(screenNumber === 7) {
        document.getElementById("screen-tutorial-2").classList.add("active");
    } else if(screenNumber === 8) {
        document.getElementById("screen-tutorial-3").classList.add("active");
    }
}

// Start the countdown for Challenge 1
// Countdown variables for Challenge 1
let timerInterval = null;
let countdownTime = 12; // seconds
let timeLeft = countdownTime;
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
            // somewhere here: 
            // if the timer has run out and they have NOT succeeded at the challenge
            // switch to the failure screen using switchScreen
            switchScreen(-1);
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

    // Handle tutorial screens with Enter key
    if (event.key === "Enter" && (currentScreen === 6 || currentScreen === 7)) {
        event.preventDefault();
        nextTutorialStep();
        return;
    }

    // Tutorial screen 7 typing detection (uses prompt-tutorial and typed-tutorial)
    if (currentScreen === 7) {
        const promptTut = document.getElementById('prompt-tutorial');
        const typedTut = document.getElementById('typed-tutorial');
        if (!promptTut || !typedTut) return;

        const tutorialText = textstrings[2]; // The Athena quote
        let letter = tutorialText.substring(i, i+1);

        // If we've reached the end of the tutorial string, finish
        if (letter === '') {
            return;
        }

        // Check if pressed key matches the expected letter
        if (event.key === letter) {
            // display progress in the typed element
            typedTut.textContent += letter;
            i += 1;

            // If that was the last character, advance to tutorial part 3
            if (i === tutorialText.length) {
                switchScreen(8);
                return;
            }
        }
        return; // Don't process other keys on screen 7
    }

    if (currentstring >= textstrings.length) {
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
    }
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

function nextTutorialStep() {
    // On tutorial screen (6), pressing Enter
    if (currentScreen === 6) {
        // First Enter: show the second typing animation and hint, stay on screen 6
        if (!tutorialSecondTextShown) {
            const typingText1 = document.getElementById('typing-text');
            const hintText1 = document.getElementById('tutorial hint');
            const typingText2 = document.getElementById('typing-text-2');
            const hintText2 = document.getElementById('tutorial-hint-2');
            
            // Hide the first text and hint
            if (typingText1) typingText1.style.display = 'none';
            if (hintText1) hintText1.style.display = 'none';
            
            // Show the second text and hint
            if (typingText2) typingText2.style.display = 'block';
            if (hintText2) hintText2.style.display = 'block';
            
            tutorialSecondTextShown = true;
            return; // Stay on screen 6
        }
        // Second Enter: move to screen 7 for typing challenge
        else {
            // Set up for tutorial typing on screen 7
            currentstring = 2;
            i = 0;
            const promptTut = document.getElementById('prompt-tutorial');
            const typedTut = document.getElementById('typed-tutorial');
            if (promptTut) {
                promptTut.textContent = textstrings[2];
            }
            if (typedTut) {
                typedTut.textContent = "";
            }
            switchScreen(7);
        }
    }
    // On tutorial part 2 (screen 7), pressing Enter goes to tutorial part 3 (screen 8)
    else if (currentScreen === 7) {
        switchScreen(8);
    }
}


//TO DO:
//show sentence
//lets user type
//calculates word per minute + accuracy