// Smesterprojekt P2 Odyssee
window.draw = draw;
window.mouseClicked = mouseClicked;
angleMode(DEGREES);

//IMAGES

let images = {
  //layers
  screen1: loadImage("./assets/screen1.png"),
  screen2: loadImage("./assets/screen2.png"),
  screen3: loadImage("./assets/screen3.png"),

  //sloganOdyssee
  sloganOdyssee: loadImage("./assets/sloganOdyssee.png"),
  //astronaut
  astronaut: loadImage("./assets/astronaut.png"),
  //buttons
  startButton: loadImage("./assets/startButton.png"),
  startButtonHover: loadImage("./assets/startButtonHover.png"),
  gif: loadImage("./gifs/startScreen.gif"),
};

//IMPORTS

import Button from "./classes/Button.js";
import Console from "./classes/Console.js";
import Astronaut from "./classes/Astronaut.js";
import StatusBar from "./classes/statusBar.js";

//INSTANTIATE OBJECTS----------------------------------------------------------------

//buttons
let buttonStart = new Button(964.5 - 50, 900, 100, 60, "start game");
let button1 = new Button(1500, 990, 100, 30, "< weiter >");
let button2 = new Button(1500, 990, 100, 30, "< weiter >");
let button3 = new Button(1500, 990, 100, 30, "< weiter >");
let button4 = new Button(1500, 990, 100, 30, "< weiter >");
let button5 = new Button(1500, 990, 100, 30, "< weiter >");
let button6 = new Button(1500, 990, 100, 30, "< weiter >");

//consoles
let console1 = new Console(
  300,
  830,
  1320,
  200,
  "ZENTRALE",
  "XR988 haben wir Kontakt...?"
);
let console2 = new Console(
  300,
  830,
  1320,
  200,
  "ASTRONAUT (DU)",
  "Positiv, es besteht Funkkontakt, ich kann sie hören."
);
let console3 = new Console(
  300,
  830,
  1320,
  200,
  "ZENTRALE",
  "Wir bitten um Statusbericht, XR988 ist vom Kurs abgekommen! "
);
let console4 = new Console(
  300,
  830,
  1320,
  200,
  "ASTORNAUT",
  "Es gab beim Verlassen der Erdatmosphäre Probleme mit den Triebwerken.\nmehr text folgt"
);
let console5 = new Console(
  300,
  830,
  1320,
  200,
  "ZENTRALE",
  "Die Mission ... und die Bergung des Heilmittels haben weiterhin höchste Priorität.  mehr text folgt"
);
let console6 = new Console(
  300,
  830,
  1320,
  200,
  "ASTRONAUT",
  "Verstanden. Ich melde mich bei de - ..."
);

//otherStuff
let astronaut = new Astronaut(125, 430, images);
let statusBar = new StatusBar(50, 30, 4, 4);

//VARIABLES
statusBar.oxygenCounter = 2;
let gameState = 0;

//FUNCTIONS
function screenOrder() {
  //SCREEN 1
  if (gameState >= 0 && gameState <= 4) {
    //screen1 animated GIF!
    image(images.gif, 0, 0, 1920, 1080);

    if (buttonStart.hoverTest() && gameState === 0) {
      //startButtonImage
      image(images.startButtonHover, 810 - 70, 845, 468, 163.5);
    }
    if (gameState === 0) {
      image(images.startButton, 810, 845, 327, 163.5);
      buttonStart.display();
      image(images.sloganOdyssee, 590, 60, 751, 450);
    }
    if (gameState === 1) {
      console1.display();
      button1.display();
    }
    if (gameState === 2) {
      console2.display();
      button2.display();
    }
    if (gameState === 3) {
      console3.display();
      button3.display();
    }
  }

  //SCREEN 2
  if (gameState >= 4 && gameState <= 6) {
    //POV cockpit!
    fill(2, 25, 35);
    rect(0, 0, 1920, 1080);

    if (gameState === 4) {
      console4.display();
      button4.display();
    }
    if (gameState === 5) {
      console5.display();
      button5.display();
    }
    if (gameState === 6) {
      console6.display();
      button6.display();
    }
  }

  //SCREEN 3
  if (gameState >= 7 && gameState <= 7) {
    rect(0, 0, 1920, 1080);
  }
}

function gameScreens() {}

function mouseClicked() {
  //BUTTONS
  if (buttonStart.hitTest() && gameState === 0) {
    gameState = 1;
  } else if (button1.hitTest() && gameState === 1) {
    gameState = 2;
  } else if (button2.hitTest() && gameState === 2) {
    gameState = 3;
  } else if (button3.hitTest() && gameState === 3) {
    gameState = 4;
  } else if (button4.hitTest() && gameState === 4) {
    gameState = 5;
  } else if (button5.hitTest() && gameState === 5) {
    gameState = 6;
  } else if (button6.hitTest() && gameState === 6) {
    gameState = 7;
  }
}

function draw() {
  screenOrder();

  //astronaut.display();
  //console1.display();
  //statusBar.display();
  //button1.display();
  // console.log(gameState);
}
