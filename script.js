const textstrings = ["hello!", "how are you?"]

var i = 0
var currentstring = 0

document.addEventListener("keydown", event => {
    if ((currentstring+1 > textstrings.length)==false) {
        var letter = textstrings[currentstring].substring(i, i+1);
        if (letter == '') {
                currentstring += 1;
                i = 0;
                letter = textstrings[currentstring].substring(i, i+1);
        };
        if (event.key == letter) {
            console.log("correct");
            i += 1;
        }
        else {
            console.log("false, correct was " + letter);
        };
        console.log(i);
}});