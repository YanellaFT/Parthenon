var currentcharacter = "seshat"

function setup() {
  createCanvas(400, 400);
  goddesscharacter = new Sprite();
}

function draw() {
  updateGame();

  background(220);

}

function updateGame() {
  typingGameRun();
}