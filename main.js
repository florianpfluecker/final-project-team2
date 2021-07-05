// Semesterprojekt P2 Odyssee
window.draw = draw;
window.mouseClicked = mouseClicked;
window.preload = preload;
angleMode(DEGREES);

//SOUNDS
let morseCode;
let backgroundMusic;
let clickSound;

//FONT(s)
let defaultFont;

function preload() {
  //SOUNDS

  morseCode = loadSound("./sounds/morseCode.mp3");
  backgroundMusic = loadSound("./sounds/backgroundMusic.mp3");
  clickSound = loadSound("./sounds/hoverCoral.mp3");

  //FONT(s)
  defaultFont = loadFont("./fonts/defaultFont.ttf");
}

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

  //symbols
  samples: loadImage("./assets/samples.png"),

  //GIFs
  startScreenSpaceship: loadImage("./gifs/startScreenSpaceship.gif"),
  startScreenBackground: loadImage("./gifs/startScreenBackground.gif"),
  cockpitScreen: loadImage("./assets/cockpitScreen.jpg"),
  cockpitBackground: loadImage("./gifs/cockpitBackground.gif"),
  cockpit: loadImage("./gifs/cockpit.gif"),
  cockpitAlarm: loadImage("./gifs/cockpitAlarm.gif"),
  cockpitFade: loadImage("./gifs/cockpitFade.gif"),

  //Layer 1 dead Corals
  coral1: loadImage("./assets/layer1/coral1.png"),
  coral2: loadImage("./assets/layer1/coral2.png"),
  switchLayer: loadImage("./assets/layer1/switchLayer.png"),

  //Layer 2 dead Corals
  coral3: loadImage("./assets/layer2/coral3.png"),
  coral4: loadImage("./assets/layer2/coral4.png"),
  coral5: loadImage("./assets/layer2/coral5.png"),
  coral6: loadImage("./assets/layer2/coral6.png"),
  coral7: loadImage("./assets/layer2/coral7.png"),
  coral8: loadImage("./assets/layer2/coral8.png"),
  coral9: loadImage("./assets/layer2/coral9.png"),
  switchLayer2: loadImage("./assets/layer2/switchLayer2.png"),
};

//IMPORTS

import Button from "./classes/Button.js";
import Console from "./classes/Console.js";
import Astronaut from "./classes/Astronaut.js";
import StatusBar from "./classes/statusBar.js";
import Decision from "./classes/Decision.js";

//INSTANTIATE OBJECTS----------------------------------------------------------------

//buttons
let buttonStart = new Button(858, 905, 200, 60, "START");
let button1 = new Button(1440, 990, 100, 30, "< weiter >");
let button2 = new Button(1440, 990, 100, 30, "< weiter >");
let button3 = new Button(1440, 990, 100, 30, "< weiter >");
let button4 = new Button(1440, 990, 100, 30, "< weiter >");
let button5 = new Button(1440, 990, 100, 30, "< weiter >");
let button6 = new Button(1440, 990, 100, 30, "< weiter >");
let button7 = new Button(1440, 990, 100, 30, "< weiter >");
let button8 = new Button(1440, 990, 100, 30, "< weiter >");
let button9 = new Button(1230, 990, 295, 40, "< Notsignal senden >");
let button10 = new Button(1440, 990, 100, 30, "< weiter >");
let button11 = new Button(1440, 990, 100, 30, "< weiter >");
let button12 = new Button(1440, 990, 100, 30, "< weiter >");
let buttonStartMission = new Button(1000, 990, 100, 30, "< Mission beginnen >");

//decisions
let decision = new Decision(1100, 650, 60, 60, "decision");

//layer 1 hoverObejcts
let coral1 = new Button(1330, 900, 200, 180);
let coral2 = new Button(1650, 600, 200, 180);
let switchLayer = new Button(1750, 30, 200, 180);

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
  "ASTRONAUT (DU)",
  "Es gab beim Verlassen der Erdatmosphäre Probleme mit\nden Triebwerken.Die KI Einheit 5566 (Microscity) konnte alle\nProbleme weitesgehend beheben.\nWir sind wieder auf Kurs.\nAnkunft auf Planet B voraussichtlich in 3t 25h 06m...",
  2.6
);
let console5 = new Console(
  300,
  830,
  1320,
  200,
  "ZENTRALE",
  "Die Mission ... und die Bergung des Heilmittels haben weiterhin\nhöchste Priorität.\nAuf der Erde herrscht Chaos, über die Hälfte der Weltbevölkerung\nist bereits infiziert...\nWir zählen auf sie!",
  2.6
);
let console6 = new Console(
  300,
  830,
  1320,
  200,
  "ASTRONAUT (DU)",
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
  "<	Letzten Standort erfolgreich übermittelt >\n\n<	Koordinaten berechenen fehlgechlagen. >",
  2.3
);
let console11 = new Console(
  300,
  830,
  1320,
  200,
  "5566MICROSITY",
  "Analyse zeigt:\nSauerstoffsättigung der Umgebung: < 0,1%\nFremde Lebensformen: bestätigt\nSauerstoffvorrat: 36.7 %\nWeiterhin kein Funkkontakt möglich..!",
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
  "Hovere über den Bildschirm um potenzielle\nSauetstoffquellen zu finden.",
  2.0
);

//otherStuff
let astronaut = new Astronaut(425, 550, images);
let statusBar = new StatusBar(50, 30, 4, 4);

//VARIABLES
statusBar.oxygenCounter = 1;
statusBar.sampleCounter = 0;
let gameState = 0;
let layerState = 1;
let posState = 0;
let runGame = false;
let op = 255;
let op2 = 0;

//FUNCTIONS

function cursor() {
  fill(255, 255, 255, 100);
  ellipse(mouseX, mouseY, 40, 40);
}

function transition() {
  op = op - 0.5;
  fill(0, 0, 0, op);
  rect(0, 0, 1920, 1080);
}

function transitionOut() {
  op2 = op2 + 1.5;
  fill(0, 0, 0, op2);
  rect(0, 0, 1920, 1080);
}

function screenOrder() {
  //SCREEN 1
  if (gameState >= 0 && gameState <= 4) {
    //screen1 animated GIF!
    image(images.startScreenBackground, 0, 0, 1920, 1080);
    image(images.startScreenSpaceship, 0, 0, 1920, 1080);

    if (buttonStart.hoverTest() && gameState === 0) {
      //startButtonImage
      image(images.startButtonHover, 726, 845, 468, 163.5);
    }
    if (gameState === 0) {
      image(images.startButton, 796.5, 845, 327, 163.5);
      buttonStart.display();
      image(images.sloganOdyssee, 570, 60, 751, 450);
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
    image(images.cockpitBackground, 0, 0, 1920, 1080);
    image(images.cockpit, 0, 0, 1920, 1080);

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
    image(images.cockpitBackground, 0, 0, 1920, 1080);
    image(images.cockpitAlarm, 0, 0, 1920, 1080);

    //BLACKSCREEN ALARM GIF
    if (gameState === 8) {
      console8.display();
      button8.display();
    }
    if (gameState === 9) {
      image(images.cockpitFade, 0, 0, 1920, 1080);

      transitionOut();

      console9.display();
      button9.display();
    }
    if (gameState === 10) {
      image(images.layer1, 0, 0, 1920, 1080);
      astronaut.display();
      console10.display();
      button10.display();
      transition();
    }

    if (gameState === 11) {
      image(images.layer1, 0, 0, 1920, 1080);
      astronaut.display();
      console11.display();
      button11.display();
    }
    if (gameState === 12) {
      image(images.layer1, 0, 0, 1920, 1080);
      astronaut.display();
      console12.display();
      button12.display();
    }
    if (gameState === 13) {
      image(images.layer1, 0, 0, 1920, 1080);
      astronaut.display();
      console13.display();
      buttonStartMission.display();
    }
  }
}

function gameScreens() {
  //LAYER 1 SCREEN

  if (runGame === true && layerState === 1) {
    image(images.layer1, 0, 0, 1920, 1080);
    statusBar.display();
    astronaut.display();

    //CORAL HOVERS
    if (coral1.hoverTest() && posState === 0) {
      fill(255, 255, 255, 30);
      ellipse(1420, 980, 200, 180);
    }
    if (coral2.hoverTest() && posState === 1) {
      fill(255, 255, 255, 30);
      ellipse(1740, 660, 200, 180);
    }
    if (switchLayer.hoverTest() && posState === 2) {
      fill(255, 255, 255, 30);
      ellipse(1830, 130, 180, 160);
      image(images.switchLayer, 1740, 10, 102 * 1.8, 101 * 1.8);
    }

    //DECISION FIELDS
  }

  //LAYER 2 SCREEN
  if (runGame === true && layerState === 2) {
    image(images.layer2, 0, 0, 1920, 1080);
    statusBar.display();
    astronaut.display();
    //posAstronaut
    astronaut.x = -40;
    astronaut.y = 140;
  }

  //END SCREEN DEATH
  if (statusBar.oxygenCounter <= -1) {
    //endScreenPNG
    // fill(255);
    // rect(0, 0, 1920.108);
  }

  //DEAD CORALS

  if (posState >= 2 && layerState === 1) {
    image(images.coral1, 1340, 925, 118 * 1.4, 100 * 1.4);
  }
  if (posState >= 3 && layerState === 1) {
    image(images.coral2, 1668, 595, 142.5, 150);
  }
}

function decisions() {
  if (posState >= 1 && posState <= 2) {
    decision.display();
    if (posState === 1) {
      decision.x = 1100;
      decision.y = 650;
    }
    if (posState === 2) {
      decision.x = 1390;
      decision.y = 400;
    }
  }
}

function mouseClicked() {
  //BUTTONS

  if (buttonStart.hitTest() && gameState === 0) {
    gameState = 1;
    clickSound.play();
    morseCode.play();
    backgroundMusic.loop();
  } else if (button1.hitTest() && gameState === 1) {
    gameState = 2;
    //sound
    clickSound.play();
    morseCode.pause();
  } else if (button2.hitTest() && gameState === 2) {
    gameState = 3;
    //sound
    clickSound.play();
    morseCode.play();
  } else if (button3.hitTest() && gameState === 3) {
    gameState = 4;
    //sound
    clickSound.play();
    morseCode.pause();
  } else if (button4.hitTest() && gameState === 4) {
    gameState = 5;
    //sound
    clickSound.play();
    morseCode.play();
  } else if (button5.hitTest() && gameState === 5) {
    gameState = 6;
    morseCode.pause();
  } else if (button6.hitTest() && gameState === 6) {
    gameState = 7;
    morseCode.play();
  } else if (button7.hitTest() && gameState === 7) {
    gameState = 8;
    morseCode.pause();
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
    layerState = 1;
  }

  //CORAL BUTTONS

  if (
    coral1.hitTest() &&
    runGame === true &&
    layerState === 1 &&
    posState === 0
  ) {
    //changePos
    astronaut.x = 1150;
    astronaut.y = 700;
    posState = 1;
    //decreaseOxygenCounter
    statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
    //sound
    clickSound.play();
  } else if (
    coral2.hitTest() &&
    runGame === true &&
    layerState === 1 &&
    posState === 1
  ) {
    //changePos
    astronaut.x = 1500;
    astronaut.y = 400;
    posState = 2;
    //decreaseOxygenCounter
    statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
    //sound
    clickSound.play();
  } else if (
    switchLayer.hitTest() &&
    runGame === true &&
    layerState === 1 &&
    posState === 2
  ) {
    //changePos
    astronaut.x = 1500;
    astronaut.y = 20;
    posState = 3;
    //decreaseOxygenCounter
    statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
    //changeLayer
    layerState = 2;
    //sound
    clickSound.play();
  }

  //DECISIONS

  if (decision.hitTestRight()) {
    statusBar.oxygenCounter = 4;
  }
  if (decision.hitTestLeft()) {
    statusBar.sampleCounter = statusBar.sampleCounter + 1;
  }
}

function draw() {
  textFont(defaultFont);
  screenOrder();
  gameScreens();
  decisions();
  cursor();

  //astronaut.display();
  //console1.display();
  //statusBar.display();
  //button1.display();
  //console.log(gameState);
  // console.log(posState);
}
