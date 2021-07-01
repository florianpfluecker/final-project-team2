// Semesterprojekt P2 Odyssee
window.draw = draw;
window.mouseClicked = mouseClicked;
angleMode(DEGREES);

//SOUNDS
// let morseCode;

// function preload() {
//   morseCode = loadSound("morseCode.mp3");
// }

//IMAGES

let images = {
  //layers
  layer1: loadImage("./assets/layer1.png"),
  layer2: loadImage("./assets/layer2.png"),
  layer3: loadImage("./assets/layer3.png"),

  //sloganOdyssee
  sloganOdyssee: loadImage("./assets/sloganOdyssee.png"),
  //astronaut
  astronaut: loadImage("./assets/astronaut.png"),
  //buttons
  startButton: loadImage("./assets/startButton.png"),
  startButtonHover: loadImage("./assets/startButtonHover.png"),
  //GIFs
  startScreenSpaceship: loadImage("./gifs/startScreenSpaceship.gif"),
  startScreenBackground: loadImage("./gifs/startScreenBackground.gif"),
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
let button7 = new Button(1500, 990, 100, 30, "< weiter >");
let button8 = new Button(1500, 990, 100, 30, "< weiter >");
let button9 = new Button(1450, 990, 100, 30, "< Notsignal senden >");
let button10 = new Button(1500, 990, 100, 30, "< weiter >");
let button11 = new Button(1500, 990, 100, 30, "< weiter >");
let button12 = new Button(1500, 990, 100, 30, "< weiter >");
let buttonStartMission = new Button(1450, 990, 100, 30, "< Mission beginnen >");

//consoles
let console1 = new Console(
  300,
  830,
  1320,
  200,
  "ZENTRALE",
  "XR988 haben wir Kontakt...?",
  1.7
);
let console2 = new Console(
  300,
  830,
  1320,
  200,
  "ASTRONAUT (DU)",
  "Positiv, es besteht Funkkontakt, ich kann sie hören.",
  1.7
);
let console3 = new Console(
  300,
  830,
  1320,
  200,
  "ZENTRALE",
  "Wir bitten um Statusbericht, XR988 ist vom Kurs abgekommen! ",
  1.7
);
let console4 = new Console(
  300,
  830,
  1320,
  200,
  "ASTORNAUT",
  "Es gab beim Verlassen der Erdatmosphäre Probleme mit den Triebwerken.\nDie KI EInheit 5566 (Microscity) konnte alle Probleme weitesgehend beheben.\nWir sind wieder auf Kurs. Ankunft auf Planet B voraussichtlich in 3t 25h 06m.",
  2.1
);
let console5 = new Console(
  300,
  830,
  1320,
  200,
  "ZENTRALE",
  "Die Mission ... und die Bergung des Heilmittels haben weiterhin höchste Priorität.\nAuf der Erde herrscht Chaos, über die Hälfte der Weltbevölkerung ist bereits infiziert.\nWir zählen auf sie!",
  2.1
);
let console6 = new Console(
  300,
  830,
  1320,
  200,
  "ASTRONAUT",
  "Verstanden. Ich melde mich bei de - ...",
  1.7
);
let console7 = new Console(
  300,
  830,
  1320,
  200,
  "5566MICROSITY",
  "Triebwerke erneut ausgefallen. Autopilot wird deaktiviert...",
  1.7
);
let console8 = new Console(
  300,
  830,
  1320,
  200,
  "ZENTRALE",
  "XR988 — Kein signal —",
  1.7
);
let console9 = new Console(
  300,
  830,
  1320,
  200,
  "5566MICROSITY",
  "Funktkontakt abgebrochen!",
  1.7
);
let console10 = new Console(
  300,
  830,
  1320,
  200,
  "5566MICROSITY",
  "–	Letzten Standort erfolgreich übermttielt\n–	Koordinaten berechenen fehlgechlagen.",
  2
);
let console11 = new Console(
  300,
  830,
  1320,
  200,
  "5566MICROSITY",
  "Analyse zeigt:\nSauerstoffsättigung der Umgebung: <0,1%\nFremde Lebensformen: bestätigt\nSauerstoffvorrat: 36.7%\nWeiterhin kein Funkkontakt möglich",
  2.8
);
let console12 = new Console(
  300,
  830,
  1320,
  200,
  "5566MICROSITY",
  "Ich scanne nun die Umgebung nach Sauerstoffquellen!",
  1.7
);
let console13 = new Console(
  300,
  830,
  1320,
  200,
  "HINWEIS",
  "Hovere über den Bildschirm um klickbare Objekte zu finden.",
  1.7
);

//otherStuff
let astronaut = new Astronaut(125, 430, images);
let statusBar = new StatusBar(50, 30, 4, 4);

//VARIABLES
statusBar.oxygenCounter = 2;
let gameState = 0;
let runGame = false;

//FUNCTIONS
function screenOrder() {
  //SCREEN 1
  if (gameState >= 0 && gameState <= 4) {
    //screen1 animated GIF!
    image(images.startScreenBackground, 0, 0, 1920, 1080);
    image(images.startScreenSpaceship, 0, 0, 1920, 1080);

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
  if (gameState >= 4 && gameState <= 7) {
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
    if (gameState === 7) {
      console7.display();
      button7.display();
    }
  }

  //SCREEN 3
  if (gameState >= 8 && gameState <= 13) {
    //BLACKSCREEN ALARM GIF
    if (gameState === 8) {
      console8.display();
      button8.display();
    }
    if (gameState === 9) {
      console9.display();
      button9.display();
    }
    if (gameState === 10) {
      image(images.layer1, 0, 0, 1920, 1080);
      console10.display();
      button10.display();
    }
    if (gameState === 11) {
      image(images.layer1, 0, 0, 1920, 1080);
      console11.display();
      button11.display();
    }
    if (gameState === 12) {
      image(images.layer1, 0, 0, 1920, 1080);
      console12.display();
      button12.display();
    }
    if (gameState === 13) {
      image(images.layer1, 0, 0, 1920, 1080);
      console13.display();
      buttonStartMission.display();
    }
  }
}

function gameScreens() {
  if (runGame === true) {
    image(images.layer1, 0, 0, 1920, 1080);
    statusBar.display();
  }
}

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
  } else if (button7.hitTest() && gameState === 7) {
    gameState = 8;
  } else if (button8.hitTest() && gameState === 8) {
    gameState = 9;
  } else if (button9.hitTest() && gameState === 9) {
    gameState = 10;
  } else if (button10.hitTest() && gameState === 10) {
    gameState = 11;
  } else if (button11.hitTest() && gameState === 11) {
    gameState = 12;
  } else if (button12.hitTest() && gameState === 12) {
    gameState = 13;
  } else if (buttonStartMission.hitTest() && gameState === 13) {
    runGame = true;
  }
}

function draw() {
  screenOrder();
  gameScreens();

  //astronaut.display();
  //console1.display();
  //statusBar.display();
  //button1.display();
  console.log(gameState);
}
