var lastkeyinput = String()
var currentstring = 0
var currentstringcharacters = ""
var currentcharacter = 0
var typed = ""
var start = true

// to do:
// keyboard mashing
// time limit

var strings = ["i am dead.", "you must find who killed me.", "but quick!", "they're coming for you!!", "Just as they did for me.", 
    "Get to the pizzeria.", "You can't let anyone see you.", "Tell Jimmy he doesn't need to buy bread.", "The bread!", "Oh the bread - ", 
    "It's gone.", "They took the bread!", "They took the chickens!", "Akldfoesklfd soldijflek os ducks!!", "No! The loieijlsfos!", 
    "Ssldfkjoeik slfjoeij asdkfgidv ggsmeimahfej..."]

function keyPressed() {
    lastkeyinput = key
}

function switchedToThisScreen() {
    seshat = new Sprite();
}

function typingGameRun() {
    if (start) {
        currentstringcharacters = newString()
        start = false
    }
    if (lastkeyinput == currentstringcharacters[currentcharacter]) {
        currentcharacter += 1;
        typed += lastkeyinput
        if (currentcharacter >= currentstringcharacters.length) {
            console.log("finished")
            currentstring += 1
            currentcharacter = 0
            currentstringcharacters = newString()
            console.log(currentstringcharacters)
        }
    }
}

function startTyping() {
    currentstringcharacters = newString();
}

function createCharacterListForString(string) {
    characters = string.split("");
    return characters;
}

function newString() {
    return createCharacterListForString(strings[currentstring]);
}