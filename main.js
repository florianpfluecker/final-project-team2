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

// function setup() {
//   backgroundMusic.play();
// }

//IMAGES

let images = {
  //cursor
  cursor: loadImage("./assets/cursor.png"),
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

  //Layer 3 dead Corals
  coral10: loadImage("./assets/layer3/coral10.png"),
  coral11: loadImage("./assets/layer3/coral11.png"),
  coral12: loadImage("./assets/layer3/coral12.png"),
  coral13: loadImage("./assets/layer3/coral13.png"),
  coral14: loadImage("./assets/layer3/coral14.png"),
  coral15: loadImage("./assets/layer3/coral15.png"),
  endPoint: loadImage("./assets/layer3/endPoint.png"),

  //endScreens
  oceanBackground: loadImage("./gifs/oceanBackground.gif"),
  helicopter: loadImage("./gifs/helicopter.gif"),
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
let button9 = new Button(1230, 985, 295, 40, "< Notsignal senden >");
let button10 = new Button(1440, 990, 100, 30, "< weiter >");
let button11 = new Button(1440, 990, 100, 30, "< weiter >");
let button12 = new Button(1440, 990, 100, 30, "< weiter >");
let buttonStartMission = new Button(910, 990, 100, 30, "< Mission beginnen >");
let buttonSwitchLayer = new Button(910, 990, 100, 30, "< wechseln >");

//decisions
let decision = new Decision(1100, 650, 60, 60, "decision");

//layer 1 hoverObejcts
let coral1 = new Button(1330, 900, 200, 180);
let coral2 = new Button(1650, 600, 200, 180);
let switchLayer = new Button(1750, 30, 200, 180);

//layer 2 hoverObjects
let coral3 = new Button(250, 220, 200, 180);
let coral4 = new Button(100, 600, 400, 300);
let coral5 = new Button(680, 480, 100, 120);
let coral6 = new Button(900, 320, 120, 120);
let coral7 = new Button(1200, 530, 300, 150);
let coral8 = new Button(1230, 0, 300, 250);
let coral9 = new Button(760, 100, 70, 50);
let switchLayer2 = new Button(1140, 20, 50, 50);

//consoles
let console1 = new Console(
  300,
  830,
  1320,
  200,
  "- ZENTRALE -",
  "XR988 haben wir Kontakt...?",
  1.7
);
let console2 = new Console(
  300,
  830,
  1320,
  200,
  "- ASTRONAUT (DU) -",
  "Positiv, es besteht Funkkontakt, ich kann sie hören.",
  1.7
);
let console3 = new Console(
  300,
  830,
  1320,
  200,
  "- ZENTRALE -",
  "Wir bitten um Statusbericht, XR988 ist vom Kurs abgekommen! ",
  1.7
);
let console4 = new Console(
  300,
  800,
  1320,
  230,
  "- ASTRONAUT (DU) -",
  "Es gab beim Verlassen der Erdatmosphäre Probleme mit\nden Triebwerken. Die KI-Einheit 'P U C K' konnte alle\nProbleme weitestgehend beheben.\nWir sind wieder auf Kurs.\nAnkunft auf Planet B voraussichtlich in 3t 25h 06m...",
  3
);
let console5 = new Console(
  300,
  800,
  1320,
  230,
  "- ZENTRALE -",
  "Die Bergung des Heilmittels haben weiterhin\nhöchste Priorität.\nAuf der Erde herrscht Chaos, über die Hälfte der Weltbevölkerung\nist bereits infiziert...\nWir zählen auf sie!",
  3
);
let console6 = new Console(
  300,
  830,
  1320,
  200,
  "- ASTRONAUT (DU) -",
  "Verstanden. Ich melde mich bei de - ...",
  1.7
);
let console7 = new Console(
  300,
  830,
  1320,
  200,
  "- P U C K -",
  "Triebwerke erneut ausgefallen. Autopilot wird deaktiviert...",
  1.7
);
let console8 = new Console(
  300,
  830,
  1320,
  200,
  "- ZENTRALE -",
  "- XR988  - Kein Signal -",
  1.7
);
let console9 = new Console(
  300,
  830,
  1320,
  200,
  "- P U C K -",
  "Funkkontakt abgebrochen!",
  1.7
);
let console10 = new Console(
  300,
  830,
  1320,
  200,
  "- P U C K -",
  "<	Letzten Standort erfolgreich übermittelt >\n\n<	Koordinaten berechnen fehlgeschlagen. >",
  2.3
);
let console11 = new Console(
  300,
  800,
  1320,
  230,
  "- P U C K -",
  "Analyse zeigt:\n> Sauerstoffsättigung der Umgebung: < 0,1%\n> Fremde Lebensformen: bestätigt\n> Sauerstoffvorrat: 36.7 %\n> Weiterhin kein Funkkontakt möglich..!",
  3
);
let console12 = new Console(
  300,
  860,
  1320,
  180,
  "- P U C K -",
  "Ich scanne nun die Umgebung nach Sauerstoffquellen!",
  1.7
);
let console13 = new Console(
  300,
  830,
  1320,
  200,
  "- HINWEIS -",
  "Hovere über den Bildschirm um potenzielle\nSauerstoffquellen zu finden.",
  2.3
);
let consoleLayerSwitch = new Console(
  300,
  830,
  1320,
  200,
  "- HINWEIS -",
  "Es steht ein Ebenenwechsel bevor.\nEine Rückkehr ist danach nicht mehr möglich.",
  2.3
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
let opac = 255;
let opac2 = 0;
let decisionState = false;

//states dead corals layer 2
let choiceCoral3 = false;
let choiceCoral4 = false;
let choiceCoral5 = false;
let choiceCoral6 = false;
let choiceCoral7 = false;
let choiceCoral8 = false;
let choiceCoral9 = false;

//FUNCTIONS

function cursor() {
  fill(255, 255, 255, 170);
  //image
  ellipse(mouseX + 45, mouseY + 20, 25, 25);
  image(images.cursor, mouseX - 10, mouseY - 25, 100, 100);
  noCursor();
}

function transition() {
  opac = opac - 1;
  fill(0, 0, 0, opac);
  rect(0, 0, 1920, 1080);
}

function transitionOut() {
  opac2 = opac2 + 1.8;
  fill(0, 0, 0, opac2);
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
  //LAYER 1 SCREENs
  if (runGame === true && layerState === 1) {
    image(images.layer1, 0, 0, 1920, 1080);
    statusBar.display();
    astronaut.display();

    //CORAL HOVERS
    if (decisionState === false) {
      if (coral1.hoverTest() && posState === 0) {
        fill(255, 255, 255, 20);
        ellipse(1420, 980, 200, 180);
      }
      if (coral2.hoverTest() && posState === 1) {
        fill(255, 255, 255, 20);
        ellipse(1740, 660, 200, 180);
      }
      if (switchLayer.hoverTest() && posState === 2) {
        fill(255, 255, 255, 20);
        ellipse(1830, 130, 180, 160);
        image(images.switchLayer, 1740, 10, 102 * 1.8, 101 * 1.8);
      }
    }

    //DECISION FIELDS
  }

  //LAYER 2 SCREEN
  if (runGame === true && layerState === 2) {
    //LAYER
    image(images.layer2, 0, 0, 1920, 1080);

    //DEAD CORALS LAYER 1
    if (layerState === 1) {
      if (posState >= 2) {
        image(images.coral1, 1340, 925, 118 * 1.4, 100 * 1.4);
      }
      if (posState >= 3) {
        image(images.coral2, 1668, 595, 142.5, 150);
      }
    }

    //DEAD CORALS LAYER 2
    if (layerState === 2) {
      if (choiceCoral3 === true) {
        image(images.coral3, 252, 230, 119 * 1.4, 49 * 1.4);
      }
      if (choiceCoral4 === true) {
        image(images.coral4, 110, 635, 297 * 1.4, 189 * 1.4);
      }
      if (choiceCoral5 === true) {
        image(images.coral5, 670, 470, 84 * 1.4, 75 * 1.4);
      }
      if (choiceCoral6 === true) {
        image(images.coral6, 902, 335, 92 * 1.4, 70 * 1.4);
      }
      if (choiceCoral7 === true) {
        image(images.coral7, 1203, 514, 224 * 1.4, 100 * 1.4);
      }
      if (choiceCoral8 === true) {
        image(images.coral8, 1210, 0, 222 * 1.4, 173 * 1.4);
      }
      if (choiceCoral9 === true) {
        image(images.coral9, 782, 94, 36 * 1.4, 28 * 1.4);
      }
    }

    //ASTRONAUT + STATUSBAR
    statusBar.display();
    astronaut.display();
  }

  //CORAL HOVERS
  if (layerState === 2 && decisionState === false) {
    if (coral3.hoverTest() && choiceCoral3 === false) {
      fill(255, 255, 255, 20);
      ellipse(340, 260, 200, 140);
    }
    if (coral4.hoverTest() && choiceCoral4 === false) {
      fill(255, 255, 255, 20);
      circle(320, 750, 350);
    }
    if (coral5.hoverTest() && choiceCoral5 === false) {
      fill(255, 255, 255, 20);
      ellipse(740, 530, 159, 150);
    }
    if (coral6.hoverTest() && choiceCoral6 === false) {
      fill(255, 255, 255, 20);
      ellipse(970, 390, 140, 140);
    }
    if (coral7.hoverTest() && choiceCoral7 === false) {
      fill(255, 255, 255, 20);
      ellipse(1350, 600, 300, 200);
    }
    if (coral8.hoverTest() && choiceCoral8 === false) {
      fill(255, 255, 255, 20);
      ellipse(1350, 130, 280, 280);
    }
    if (coral9.hoverTest() && choiceCoral9 === false) {
      fill(255, 255, 255, 20);
      ellipse(800, 120, 150, 100);
    }
    if (switchLayer2.hoverTest()) {
      fill(255, 255, 255, 20);
      ellipse(1170, 40, 80, 80);
    }
  }

  //END SCREEN DEATH
  if (statusBar.oxygenCounter <= -1) {
    //endScreenPNG
    // fill(255);
    // rect(0, 0, 1920.108);
  }
}

function decisions() {
  //LAYER 1
  if (posState >= 1 && posState <= 2 && decisionState === true) {
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
  if (posState === 3 && decisionState === false && layerState === 1) {
    consoleLayerSwitch.display();
    buttonSwitchLayer.display();
  }

  //LAYER 2
  if (posState >= 4 && posState <= 10 && decisionState === true) {
    decision.display();

    if (posState === 4) {
      decision.x = 400;
      decision.y = 300;
    }
    if (posState === 5) {
      decision.x = 400;
      decision.y = 700;
    }
    if (posState === 6) {
      decision.x = 800;
      decision.y = 340;
    }
    if (posState === 7) {
      decision.x = 900;
      decision.y = 600;
    }
    if (posState === 8) {
      decision.x = 1000;
      decision.y = 500;
    }
    if (posState === 9) {
      decision.x = 1050;
      decision.y = 200;
    }
    if (posState === 10) {
      decision.x = 470;
      decision.y = 170;
    }
  }
}

function mouseClicked() {
  //BUTTONS LAYER 1
  if (buttonStart.hitTest() && gameState === 0) {
    gameState = 1;
    clickSound.play();
    morseCode.play();
    backgroundMusic.play();
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
    //sound
    clickSound.play();
    morseCode.pause();
  } else if (button6.hitTest() && gameState === 6) {
    gameState = 7;
    //sound
    clickSound.play();
    morseCode.play();
  } else if (button7.hitTest() && gameState === 7) {
    gameState = 8;
    //sound
    clickSound.play();
    morseCode.pause();
  } else if (button8.hitTest() && gameState === 8) {
    gameState = 9;
    //sound
    clickSound.play();
  } else if (button9.hitTest() && gameState === 9) {
    gameState = 10;
    //sound
    clickSound.play();
  } else if (button10.hitTest() && gameState === 10) {
    gameState = 11;
    //sound
    clickSound.play();
  } else if (button11.hitTest() && gameState === 11) {
    gameState = 12;
    //sound
    clickSound.play();
  } else if (button12.hitTest() && gameState === 12) {
    gameState = 13;
    //sound
    clickSound.play();
  } else if (buttonStartMission.hitTest() && gameState === 13) {
    runGame = true;
    layerState = 1;
    //sound
    clickSound.play();
  }

  //CORAL BUTTONS LAYER 1
  if (runGame === true && layerState === 1 && decisionState === false) {
    if (coral1.hitTest() && posState === 0) {
      //changePos
      astronaut.x = 1150;
      astronaut.y = 700;
      posState = 1;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //sound
      clickSound.play();
      //changeDecisionState
      decisionState = true;
    } else if (coral2.hitTest() && posState === 1) {
      //changePos
      astronaut.x = 1500;
      astronaut.y = 400;
      posState = 2;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //sound
      clickSound.play();
      //changeDecisionState
      decisionState = true;
    } else if (switchLayer.hitTest() && posState === 2) {
      //changePos
      astronaut.x = 1600;
      astronaut.y = 20;
      posState = 3;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //sound
      clickSound.play();
    }
  }

  //SWITCH BUTTON LAYER 1
  if (buttonSwitchLayer.hitTest() && layerState === 1 && posState === 3) {
    layerState = 2;
    statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
    //sound
    clickSound.play();
    //posAstronaut
    astronaut.x = -40;
    astronaut.y = 140;
  }

  //CORAL BUTTONS LAYER 2 !
  if (runGame === true && layerState === 2 && decisionState === false) {
    if (coral3.hitTest() && choiceCoral3 === false) {
      //changePos
      astronaut.x = 200;
      astronaut.y = 10;
      posState = 4;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
    } else if (coral4.hitTest() && choiceCoral4 === false) {
      //changePos
      astronaut.x = 150;
      astronaut.y = 650;
      posState = 5;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
    } else if (coral5.hitTest() && choiceCoral5 === false) {
      //changePos
      astronaut.x = 430;
      astronaut.y = 320;
      posState = 6;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
    } else if (coral6.hitTest() && choiceCoral6 === false) {
      //changePos
      astronaut.x = 870;
      astronaut.y = 290;
      posState = 7;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
    } else if (coral7.hitTest() && choiceCoral7 === false) {
      //changePos
      astronaut.x = 1150;
      astronaut.y = 460;
      posState = 8;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
    } else if (coral8.hitTest() && choiceCoral8 === false) {
      //changePos
      astronaut.x = 1200;
      astronaut.y = 115;
      posState = 9;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
    } else if (coral9.hitTest() && choiceCoral9 === false) {
      //changePos
      astronaut.x = 650;
      astronaut.y = 20;
      posState = 10;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
    }
  }
  if (switchLayer2.hitTest() && runGame === true && layerState === 2) {
    //changePos
    astronaut.x = 900;
    astronaut.y = -80;
    //decreaseOxygenCounter
    statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
  }

  //DECISIONS
  if (decision.hitTestRight() && decisionState === true) {
    statusBar.oxygenCounter = 4;
    decisionState = false;
    //sound
    clickSound.play();
  }
  if (decision.hitTestLeft() && decisionState === true && posState > 1) {
    statusBar.sampleCounter = statusBar.sampleCounter + 1;
    decisionState = false;
    //sound
    clickSound.play();
  }
  //POS 4
  if (
    (decision.hitTestRight() && layerState === 2 && posState === 4) ||
    (decision.hitTestLeft() && layerState === 2 && posState === 4)
  ) {
    choiceCoral3 = true;
  }
  //POS 5
  if (
    (decision.hitTestRight() && layerState === 2 && posState === 5) ||
    (decision.hitTestLeft() && layerState === 2 && posState === 5)
  ) {
    choiceCoral4 = true;
  }
  //POS 6
  if (
    (decision.hitTestRight() && layerState === 2 && posState === 6) ||
    (decision.hitTestLeft() && layerState === 2 && posState === 6)
  ) {
    choiceCoral5 = true;
  }
  //POS 6
  if (
    (decision.hitTestRight() && layerState === 2 && posState === 7) ||
    (decision.hitTestLeft() && layerState === 2 && posState === 7)
  ) {
    choiceCoral6 = true;
  }
  //POS 7
  if (
    (decision.hitTestRight() && layerState === 2 && posState === 8) ||
    (decision.hitTestLeft() && layerState === 2 && posState === 8)
  ) {
    choiceCoral7 = true;
  }
  //POS 8
  if (
    (decision.hitTestRight() && layerState === 2 && posState === 9) ||
    (decision.hitTestLeft() && layerState === 2 && posState === 9)
  ) {
    choiceCoral8 = true;
  }
  //POS 9
  if (
    (decision.hitTestRight() && layerState === 2 && posState === 10) ||
    (decision.hitTestLeft() && layerState === 2 && posState === 10)
  ) {
    choiceCoral9 = true;
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
