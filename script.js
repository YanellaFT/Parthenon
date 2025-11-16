let currentScreen = 0; // 0 = title, 1 = intro, 2 = game

const textstrings = ["hello!", "how are you?"]

var i = 0
var currentstring = 0

// Initialize event listeners on page load
document.addEventListener("DOMContentLoaded", () => {
    // Screen navigation buttons
    document.getElementById("btn-start").addEventListener("click", () => {
        switchScreen(1); // Go to intro screen
    });

    document.getElementById("btn-enter").addEventListener("click", () => {
        resetGame();
        switchScreen(2); // Go to game screen
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
    document.getElementById("screen-game").classList.remove("active");
    
    // Show the selected screen
    if (screenNumber === 0) {
        document.getElementById("screen-title").classList.add("active");
    } else if (screenNumber === 1) {
        document.getElementById("screen-intro").classList.add("active");
    } else if (screenNumber === 2) {
        document.getElementById("screen-game").classList.add("active");
    }
}

// Reset game state when entering game
function resetGame() {
    i = 0;
    currentstring = 0;
    document.getElementById("prompt").textContent = "";
}

// Handle typing input (only when on game screen)
function handleGameInput(event) {
    if (currentScreen !== 2) return; // Only process input on game screen
    
    if (currentstring >= textstrings.length) {
        console.log("Game complete!");
        return;
    }
    
    var letter = textstrings[currentstring].substring(i, i+1);
    
    // Check if we've finished the current string
    if (letter == '') {
            currentstring += 1;
            i = 0;
            if (currentstring < textstrings.length) {
                letter = textstrings[currentstring].substring(i, i+1);
            } else {
                console.log("Game complete!");
                return;
            }
    };
    
    // Check if pressed key matches the expected letter
    if (event.key == letter) {
        console.log("correct");
        document.getElementById("prompt").textContent += letter;
        i += 1;
    }
    else {
        console.log("false, correct was " + letter);
    };
    console.log(i);
}

//show sentence
//lets user type
//calculates word per minute + accuracy