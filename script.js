let currentScreen = 0; // 0 = title, 1 = intro, 2 = game

const textstrings = ["Ahhh! Get away from me! I do NOT want your cookies! Let me goooo!!!", "I am so precise. Being precise is awesome, don’t you think? I am more precise than you, hahahaha… No. I cannot turn evil too. I am just doing this to stay alive. Wait, am I winning against THE Artemis???"]

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
    
    // Show the selected screen
    if (screenNumber === 0) {
        document.getElementById("screen-title").classList.add("active");
    } else if (screenNumber === 1) {
        document.getElementById("screen-intro").classList.add("active");
    } else if (screenNumber === 2) {
        document.getElementById("screen-speed-intro").classList.add("active");
    } else if(screenNumber === 3) {
        document.getElementById("screen-speed-challenge").classList.add("active");
    }
}

// Reset game state when entering game
function resetGame() {
    i = 0;
    currentstring = 0;
    const promptEl = document.getElementById("prompt");
    const typedEl = document.getElementById("typed");
    if (promptEl) promptEl.textContent = textstrings[currentstring] || "";
    if (typedEl) typedEl.textContent = "";
}

// Handle typing input (only when on game screen)
function handleGameInput(event) {
    if (currentScreen !== 3) return; // Only process input on game screen
    
    if (currentstring >= textstrings.length) {
        console.log("Game complete!");
        return;
    }
    const promptEl = document.getElementById("prompt");
    const typedEl = document.getElementById("typed");
    if (!promptEl || !typedEl) return;

    let letter = textstrings[currentstring].substring(i, i+1);

    // If we've reached the end of the current string, move to the next one
    if (letter === '') {
        currentstring += 1;
        i = 0;
        if (currentstring < textstrings.length) {
            promptEl.textContent = textstrings[currentstring];
            typedEl.textContent = "";
            letter = textstrings[currentstring].substring(i, i+1);
        } else {
            console.log("Game complete!");
            promptEl.textContent = "Game complete!";
            typedEl.textContent = "";
            return;
        }
    }

    // Check if pressed key matches the expected letter
    if (event.key === letter) {
        console.log("correct");
        // display progress in the typed element instead of modifying the prompt
        typedEl.textContent += letter;
        i += 1;
    } else {
        console.log("false, correct was " + letter);
    }
    console.log(i);
}


//TO DO:
//show sentence
//lets user type
//calculates word per minute + accuracy