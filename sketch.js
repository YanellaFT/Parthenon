let screen = 0;
let score = 0;

function setup() {
  createCanvas(400, 400);

  letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  letter = random(letters)
}

function draw() {
  background(220);
  //text(score, 200, 100);
  //letter = random(letters)
  setTimeout( {
    letter = random(letters)
  }, 5000);

  text(letter, 200, 200);
  //if (kb.pressed(letter)) {
  //  score = score + 1;
    //console.log("yes");
  //}
}



function updateGame() {
  if (currentcharacter == "seshat") {
    typingGameRun()
  };
}