let screen = 0;

let startButton;

function setup() {
  createCanvas(400, 400);

  startButton = new Sprite(-200, -200, 100, 50);
  startButton.text = "Enter War"; // fix this title !!!
  startButton.color = "red";
  startButton.static = true;
}

function draw() {
  background(220);

  //SCREEN 0 --> Welcome Screen
  if (screen == 0) {
    textSize(32);
    textAlign(CENTER);
    text("The War of Gods", width / 2, height / 2);
    textSize(16);

    startButton.pos = {x: 200, y: 200};
    if (startButton.mouse.pressed()) {
      screen = 1;
      print("screen1");
    }
  }
}
