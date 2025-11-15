let screen = 0;

function setup() {
  createCanvas(400, 400);

  startButton = new Sprite(-200, -200, 100, 50);
  //startButton.color = "#ff0000";
  //startButton.text = "Enter War";
}

function draw() {
  updateGame();

  background(220);

  //SCREEN 0 : Title
  if (screen == 0) {
    textSize(32);
    textAlign(CENTER);
    text("The New York War", 200, 100);

    startButton.pos = {x: 200, y: 200};
    if (startButton.mouse.pressed()) {
      score = 1;
    }
  }

  //SCREEN 1 : Intro
  if (screen == 1) {
    text("You have entered the war zone of New York. \n Every turn you take will bring you face to face with a god. \n Use your wit to survive.", 200, 100);
  }

  //SCREEN 2 :
  if (screen == 2) {
    
  }

  //SCREEN 3 :
  if (screen == 3) {
    
  }

  //SCREEN 4 :
  if (screen == 4) {
    
  }

  //SCREEN 5 :
  if (screen == 5) {
    
  }
}



function updateGame() {
  if (currentcharacter == "seshat") {
    typingGameRun()
  };
}