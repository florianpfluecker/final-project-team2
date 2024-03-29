// Semesterprojekt P2 Odyssee
window.draw = draw;
window.mouseClicked = mouseClicked;
window.preload = preload;
angleMode(DEGREES);

//FONT(s)
let defaultFont;

//SOUNDS
let morseCode;
let backgroundMusic;
let clickSound;
let alarmSound;
let collectSound;
let explosion;
let helicopterFlyBy;

//IMAGES
//layers
let layer1;
let layer2;
let layer3;

//cursor
let cursorPNG;

//Slogan Odyssee
let sloganOdyssee;

//startButton
let startButton;
let startButtonHover;

//GIFs
let startScreenSpaceship;
let startScreenBackground;
let cockpitScreen;
let cockpitBackground;
let cockpit;
let cockpitAlarm;
let cockpitFade;

//Layer 1 dead Corals
let coral1PNG;
let coral2PNG;
let switchLayerPNG;

//Layer 2 dead Corals
let coral3PNG;
let coral4PNG;
let coral5PNG;
let coral6PNG;
let coral7PNG;
let coral8PNG;
let coral9PNG;
let switchLayer2PNG;

//Layer 3 dead Corals
let coral10PNG;
let coral11PNG;
let coral12PNG;
let coral13PNG;
let coral14PNG;
let coral15PNG;
let endPointPNG;

//endScreens
let oceanBackground;
let helicopter;

//gameOverScreen
let gameOverScreenPNG;

//laborScreen
let laborScreenPNG;

//adopScreen
let adoptScreenPNG;

//creditScreen
let creditsScreenPNG;

//riseUp
let riseUp;

function preload() {
  //LAYERS
  layer1 = loadImage("./assets/layer1.png");
  layer2 = loadImage("./assets/layer2.png");
  layer3 = loadImage("./assets/layer3.png");
  //Slogan Odyssee
  sloganOdyssee = loadImage("./assets/sloganOdyssee.png");
  //Buttons
  startButton = loadImage("./assets/startButton.png");
  startButtonHover = loadImage("./assets/startButtonHover.png");

  //SOUNDS
  morseCode = loadSound("./sounds/morseCode.mp3");
  backgroundMusic = loadSound("./sounds/backgroundMusic.mp3");
  clickSound = loadSound("./sounds/hoverCoral.mp3");
  alarmSound = loadSound("./sounds/alarmSound.mp3");
  collectSound = loadSound("./sounds/collectSound.wav");
  explosion = loadSound("./sounds/explosion.mp3");
  helicopterFlyBy = loadSound("./sounds/helicopterFlyBy.mp3");

  //CURSOR
  cursorPNG = loadImage("./assets/cursor.png");

  //FONT(s)
  defaultFont = loadFont("./fonts/defaultFont.ttf");

  //GIFS
  startScreenSpaceship = loadImage("./gifs/startScreenSpaceship.gif");
  startScreenBackground = loadImage("./gifs/startScreenBackground.gif");
  cockpitScreen = loadImage("./assets/cockpitScreen.jpg");
  cockpitBackground = loadImage("./gifs/cockpitBackground.gif");
  cockpit = loadImage("./gifs/cockpit.gif");
  cockpitAlarm = loadImage("./gifs/cockpitAlarm.gif");
  cockpitFade = loadImage("./gifs/cockpitFade.gif");

  //Layer 1 dead Corals
  coral1PNG = loadImage("./assets/layer1/coral1.png");
  coral2PNG = loadImage("./assets/layer1/coral2.png");
  switchLayerPNG = loadImage("./assets/layer1/switchLayer.png");

  //Layer 2 dead Corals
  coral3PNG = loadImage("./assets/layer2/coral3.png");
  coral4PNG = loadImage("./assets/layer2/coral4.png");
  coral5PNG = loadImage("./assets/layer2/coral5.png");
  coral6PNG = loadImage("./assets/layer2/coral6.png");
  coral7PNG = loadImage("./assets/layer2/coral7.png");
  coral8PNG = loadImage("./assets/layer2/coral8.png");
  coral9PNG = loadImage("./assets/layer2/coral9.png");
  switchLayer2PNG = loadImage("./assets/layer2/switchLayer2.png");

  //Layer 3 dead Corals
  coral10PNG = loadImage("./assets/layer3/coral10.png");
  coral11PNG = loadImage("./assets/layer3/coral11.png");
  coral12PNG = loadImage("./assets/layer3/coral12.png");
  coral13PNG = loadImage("./assets/layer3/coral13.png");
  coral14PNG = loadImage("./assets/layer3/coral14.png");
  coral15PNG = loadImage("./assets/layer3/coral15.png");
  endPointPNG = loadImage("./assets/layer3/endPoint.png");

  //endScreens
  oceanBackground = loadImage("./gifs/oceanBackground.gif");
  helicopter = loadImage("./gifs/helicopter.gif");

  //gameOverScreen
  gameOverScreenPNG = loadImage("./assets/gameOverScreen.png");

  //laborScreen
  laborScreenPNG = loadImage("./assets/laborScreen.png");

  //adoptScreen
  adoptScreenPNG = loadImage("./assets/adoptScreen.png");

  //creditsScreen
  creditsScreenPNG = loadImage("./assets/creditsScreen.png");

  //riseUp
  riseUp = loadImage("./gifs/riseUp.gif");
}

//IMAGES
let images = {
  //astronaut
  astronaut: loadImage("./assets/astronaut.png"),

  //symbols
  samples: loadImage("./assets/samples.png"),
  oxygen: loadImage("./assets/oxygen.png"),

  //Layer 1 dead Corals
  // coral1: loadImage("./assets/layer1/coral1.png"),
  // coral2: loadImage("./assets/layer1/coral2.png"),
  // switchLayer: loadImage("./assets/layer1/switchLayer.png"),

  // //Layer 2 dead Corals
  // coral3: loadImage("./assets/layer2/coral3.png"),
  // coral4: loadImage("./assets/layer2/coral4.png"),
  // coral5: loadImage("./assets/layer2/coral5.png"),
  // coral6: loadImage("./assets/layer2/coral6.png"),
  // coral7: loadImage("./assets/layer2/coral7.png"),
  // coral8: loadImage("./assets/layer2/coral8.png"),
  // coral9: loadImage("./assets/layer2/coral9.png"),
  // switchLayer2: loadImage("./assets/layer2/switchLayer2.png"),

  // //Layer 3 dead Corals
  // coral10: loadImage("./assets/layer3/coral10.png"),
  // coral11: loadImage("./assets/layer3/coral11.png"),
  // coral12: loadImage("./assets/layer3/coral12.png"),
  // coral13: loadImage("./assets/layer3/coral13.png"),
  // coral14: loadImage("./assets/layer3/coral14.png"),
  // coral15: loadImage("./assets/layer3/coral15.png"),
  // endPoint: loadImage("./assets/layer3/endPoint.png"),

  // //endScreens
  // oceanBackground: loadImage("./gifs/oceanBackground.gif"),
  // helicopter: loadImage("./gifs/helicopter.gif"),

  // //gameOverScreen
  // gameOverScreen: loadImage("./assets/gameOverScreen.png"),

  // //laborScreen
  // laborScreen: loadImage("./assets/laborScreen.png"),

  // //adoptScreen
  // adoptScreen: loadImage("./assets/adoptScreen.png"),

  // //creditsScreen
  // creditsScreen: loadImage("./assets/creditsScreen.png"),

  //riseUp
  // riseUp: loadImage("./gifs/riseUp.gif"),

  //cursor
  // cursor: loadImage("./assets/cursor.png"),
  //layers
  // layer1: loadImage("./assets/layer1.png"),
  // layer2: loadImage("./assets/layer2.png"),
  // layer3: loadImage("./assets/layer3.png"),

  //sloganOdyssee
  // sloganOdyssee: loadImage("./assets/sloganOdyssee.png"),

  //buttons
  statusBarPNG: loadImage("./assets/oxygenBar.png"),
  // startButtonHover: loadImage("./assets/startButtonHover.png"),

  //GIFs
  // startScreenSpaceship: loadImage("./gifs/startScreenSpaceship.gif"),
  // startScreenBackground: loadImage("./gifs/startScreenBackground.gif"),
  // cockpitScreen: loadImage("./assets/cockpitScreen.jpg"),
  // cockpitBackground: loadImage("./gifs/cockpitBackground.gif"),
  // cockpit: loadImage("./gifs/cockpit.gif"),
  // cockpitAlarm: loadImage("./gifs/cockpitAlarm.gif"),
  // cockpitFade: loadImage("./gifs/cockpitFade.gif"),
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
let button1 = new Button(1440, 990, 100, 30, "weiter >");   ////now replaces button2-8 and button10-12
// let button2 = new Button(1440, 990, 100, 30, "weiter >");
// let button3 = new Button(1440, 990, 100, 30, "weiter >");
// let button4 = new Button(1440, 990, 100, 30, "weiter >");
// let button5 = new Button(1440, 990, 100, 30, "weiter >");
// let button6 = new Button(1440, 990, 100, 30, "weiter >");
// let button7 = new Button(1440, 990, 100, 30, "weiter >");
// let button8 = new Button(1440, 990, 100, 30, "weiter >");     ////are now all button1
let button9 = new Button(1230, 985, 295, 40, "< Notsignal senden >");
// let button10 = new Button(1440, 990, 100, 30, "weiter >");
// let button11 = new Button(1440, 990, 100, 30, "weiter >");
// let button12 = new Button(1440, 990, 100, 30, "weiter >");    ////are now all button1
let buttonStartMission = new Button(830, 990, 260, 30, "< Mission beginnen >");
let buttonSwitchLayer = new Button(910, 990, 100, 30, "wechseln >");
let buttonSwitchLayer2 = new Button(890, 990, 100, 30, "wechseln >");
let buttonEndSimulation = new Button(1440, 990, 100, 30, "< okay >");
let buttonShowLabor = new Button(910, 900, 100, 30, "< zum Labor >");
let buttonRestart = new Button(910, 905, 100, 30, "RESTART");
let buttonRestartEnd = new Button(1400, 50, 100, 30, "< RESTART >");
let buttonCredits = new Button(1700, 50, 100, 30, "< CREDITS >");
let buttonBack = new Button(130, 1000, 100, 30, "< ZURÜCK");
let linkButton = new Button(330, 500, 100, 30, "< KORALLENWAISE ADOPTIEREN >");

//laborButtons
let buttonAquarium = new Button(575, 40, 250, 150);
let buttonTesttube = new Button(950, 80, 150, 100);
let buttonDistiller = new Button(175, 390, 200, 250);
let buttonDoor = new Button(1600, 0, 2240, 450);

//decisions
let decision = new Decision(1100, 650, 60, 60, "decision", images);

//layer 1 hoverObejcts#
let deadCoral = new Button(700, 520, 120, 140);
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
let switchLayer2 = new Button(1140, 20, 100, 100);

//layer 3 hover Objects
let coral10 = new Button(140, 700, 250, 130);
let coral11 = new Button(540, 250, 160, 100);
let coral12 = new Button(720, 440, 200, 120);
let coral13 = new Button(800, 160, 100, 130);
let coral14 = new Button(1570, 420, 200, 160);
let coral15 = new Button(1480, 130, 180, 130);
let switchLayer3 = new Button(1750, 0, 100, 100);

//consoles
let console1 = new Console(
  300,
  830,
  1320,
  200,
  "- ZENTRALE -",
  "XR988, haben wir Kontakt...?",
  1.7
);
let console2 = new Console(
  300,
  830,
  1320,
  200,
  "- ASTRONAUT (DU) -",
  "Positiv, es besteht Funkkontakt. Ich kann sie hören.",
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
  "Es gab beim Verlassen der Erdatmosphäre Probleme mit\nden Triebwerken. Die KI-Einheit 'P U C K' konnte alle\nProbleme weitestgehend beheben.\nWir sind wieder auf Kurs.\nAnkunft auf Planet B voraussichtlich in 3t 23h 06m...",
  3
);
let console5 = new Console(
  300,
  800,
  1320,
  230,
  "- ZENTRALE -",
  "Die Bergung des Heilmittels hat weiterhin\nhöchste Priorität.\nAuf der Erde herrscht Chaos, über die Hälfte der Weltbevölkerung\nist bereits infiziert...\nWir zählen auf sie!",
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
  "<	Letzten Standort erfolgreich übermittelt >\nUm zum Abholpunkt zu gelangen müssen wir an Höhe gewinnen!",
  2.0
);
let console11 = new Console(
  300,
  800,
  1320,
  230,
  "- P U C K -",
  "Analyse zeigt:\n> Sauerstoffsättigung der Umgebung: < 0,1%\n> Fremde Lebensformen: bestätigt\n> Sauerstoffvorrat: 36.7 %\n> Weiterhin kein Funkkontakt möglich...",
  3
);
let consoleDeadCoral = new Console(
  300,
  830,
  1320,
  200,
  "- P U C K -",
  "Diese Lebensform ist bereits abgestorben und\ndamit nicht mehr von Nutzen.",
  2.0
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
  820,
  1330,
  200,
  "- HINWEIS -",
  "Es steht ein Ebenenwechsel bevor.\nEine Rückkehr ist danach nicht mehr möglich.",
  2.5
);
let consoleEndSimulation = new Console(
  300,
  830,
  1320,
  200,
  "- HINWEIS -",
  "Du wirst nun abgeholt!",
  1.7
);
let consolePuck1 = new Console(
  300,
  860,
  1320,
  180,
  "- P U C K -",
  "Sieht aus als hättest du etwas Brauchbares gefunden,\ndiese Lebensform produziert Sauerstoff (O2).\nFülle deinen Tank auf!",
  2.3
);
let consolePuck2 = new Console(
  300,
  830,
  1320,
  220,
  "- P U C K -",
  "Interessant, diese Lebensform scheint heilende Eigenschaften\nzu besitzen.\nWähle nun die Probe aus, du hast genug\nSauerstoffvorrat um dich weiter fortzubewegen.",
  2.4
);
let consoleLayerSwitch2 = new Console(
  300,
  820,
  1320,
  200,
  "- HINWEIS -",
  "Es steht ein Ebenenwechsel bevor.\nEine Rückkehr ist danach nicht mehr möglich.\nDu kannst aber auch noch hier weiter suchen.",
  2.5
);
let consoleHint = new Console(
  300,
  830,
  1320,
  200,
  "- HINWEIS -",
  "Achte auf deinen Sauerstoffvorrat.\nBei der Fortbewegung verlierst du immer eine Sauerstoffeinheit.\nSieh dich nun weiter um.",
  2.3
);
let consoleHint2 = new Console(
  300,
  830,
  1320,
  200,
  "- HINWEIS -",
  "Sammle 8 Proben um das Heilmittel herzustellen.\nDu entscheidest selbst welche Ressource du einsammelst.\nDeine Wahl hat Auswirkungen auf den Ausgang der Mission.",
  2.3
);

//otherStuff
let astronaut = new Astronaut(425, 550, images);
let statusBar = new StatusBar(70, 30, 4, 4, images);

//VARIABLES
statusBar.oxygenCounter = 1;
statusBar.sampleCounter = 0;
let gameState = 0;
let layerState = 1;
let endSimulation = false;
let endState = false;
let posState = 0;
let runGame = false;
let laborState = false;
let adoptionState = false;
let creditState = false;
let opac = 255;
let opac2 = 0;
let decisionState = false;
let frameCounter = 0;

//states dead corals layer 2
let choiceCoral3 = false;
let choiceCoral4 = false;
let choiceCoral5 = false;
let choiceCoral6 = false;
let choiceCoral7 = false;
let choiceCoral8 = false;
let choiceCoral9 = false;
let choiceCoral10 = false;
let choiceCoral11 = false;
let choiceCoral12 = false;
let choiceCoral13 = false;
let choiceCoral14 = false;
let choiceCoral15 = false;

//FUNCTIONS

function cursor() {
  fill(177, 108, 170, 160);

  //image
  ellipse(mouseX + 45, mouseY + 20, 25, 25);
  image(cursorPNG, mouseX - 10, mouseY - 25, 100, 100);
  noCursor();
}

function transition() {
  opac = opac - 0.3;
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
    image(startScreenBackground, 0, 0, 1920, 1080);
    image(startScreenSpaceship, 0, 0, 1920, 1080);

    if (buttonStart.hoverTest() && gameState === 0) {
      //startButtonImage
      image(startButtonHover, 726, 845, 468, 163.5);
    }
    if (gameState === 0) {
      image(startButton, 796.5, 845, 327, 163.5);
      buttonStart.display();
      image(sloganOdyssee, 570, 60, 751, 450);
    }
    if (gameState === 1) {
      console1.display();
      button1.display();
    }
    if (gameState === 2) {
      console2.display();
      button1.display();
    }
    if (gameState === 3) {
      console3.display();
      button1.display();
    }
  }

  //SCREEN 2
  if (gameState >= 4 && gameState <= 7) {
    //POV cockpit!
    image(cockpitBackground, 0, 0, 1920, 1080);
    image(cockpit, 0, 0, 1920, 1080);

    if (gameState === 4) {
      console4.display();
      button1.display();
    }
    if (gameState === 5) {
      console5.display();
      button1.display();
    }
    if (gameState === 6) {
      console6.display();
      button1.display();
    }
    if (gameState === 7) {
      console7.display();
      button1.display();
    }
  }

  //SCREEN 3
  if (gameState >= 8 && gameState <= 13) {
    image(cockpitBackground, 0, 0, 1920, 1080);
    image(cockpitAlarm, 0, 0, 1920, 1080);

    //BLACKSCREEN ALARM GIF
    if (gameState === 8) {
      console8.display();
      button1.display();
    }
    if (gameState === 9) {
      image(cockpitFade, 0, 0, 1920, 1080);
      transitionOut();
      console9.display();
      if (opac2 >= 240) {
        button9.display();
      }
    }
    if (gameState === 10) {
      image(layer1, 0, 0, 1920, 1080);
      astronaut.display();
      console10.display();
      if (opac <= 140) {
        button1.display();
      }
      transition();
    }
    if (gameState === 11) {
      image(layer1, 0, 0, 1920, 1080);
      astronaut.display();
      console11.display();
      button1.display();
    }
    if (gameState === 12) {
      image(layer1, 0, 0, 1920, 1080);
      astronaut.display();
      console12.display();
      button1.display();
    }
    if (gameState === 13) {
      image(layer1, 0, 0, 1920, 1080);
      astronaut.display();
      console13.display();
      buttonStartMission.display();
    }
  }
}

function gameScreens() {
  //LAYER 1 SCREEN
  if (runGame === true && layerState === 1) {
    image(layer1, 0, 0, 1920, 1080);
    statusBar.display();
    astronaut.display();

    //CORAL HOVERS
    if (decisionState === false) {
      if (deadCoral.hoverTest()) {
        consoleDeadCoral.display();
        fill(255, 255, 255, 20);
        ellipse(780, 570, 200, 180);
      }
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
        image(switchLayerPNG, 1740, 10, 102 * 1.8, 101 * 1.8);
      }
    }

    if (posState === 2) {
      image(coral1PNG, 1340, 925, 118 * 1.4, 100 * 1.4);
    }

    //Console HINT Oxygen + Sample
    if (decisionState === false) {
      if (posState === 1) {
        image(coral1PNG, 1340, 925, 118 * 1.4, 100 * 1.4);
      }
      if (posState === 2) {
        image(coral2PNG, 1668, 595, 142.5, 150);
        image(coral1PNG, 1340, 925, 118 * 1.4, 100 * 1.4);
        consoleHint2.display();
      }
      if (posState === 3) {
        image(coral1PNG, 1340, 925, 118 * 1.4, 100 * 1.4);

        image(coral2PNG, 1668, 595, 142.5, 150);
      }
    }
  }

  //LAYER 2 SCREEN
  if (runGame === true && layerState === 2) {
    //LAYER
    image(layer2, 0, 0, 1920, 1080);

    //DEAD CORALS LAYER 2
    if (layerState === 2) {
      if (choiceCoral3 === true) {
        image(coral3PNG, 252, 230, 119 * 1.4, 49 * 1.4);
      }
      if (choiceCoral4 === true) {
        image(coral4PNG, 110, 635, 297 * 1.4, 189 * 1.4);
      }
      if (choiceCoral5 === true) {
        image(coral5PNG, 670, 470, 84 * 1.4, 75 * 1.4);
      }
      if (choiceCoral6 === true) {
        image(coral6PNG, 902, 335, 92 * 1.4, 70 * 1.4);
      }
      if (choiceCoral7 === true) {
        image(coral7PNG, 1203, 514, 224 * 1.4, 100 * 1.4);
      }
      if (choiceCoral8 === true) {
        image(coral8PNG, 1210, 0, 222 * 1.4, 173 * 1.4);
      }
      if (choiceCoral9 === true) {
        image(coral9PNG, 782, 94, 36 * 1.4, 28 * 1.4);
      }
    }

    //ASTRONAUT + STATUSBAR
    statusBar.display();
    astronaut.display();

    //CORAL HOVERS LAYER 2
    if (layerState === 2 && decisionState === false) {
      if (coral3.hitTest() && choiceCoral3 === false) {
        fill(255, 255, 255, 20);
        ellipse(340, 260, 200, 140);
      }
      if (coral4.hitTest() && choiceCoral4 === false) {
        fill(255, 255, 255, 20);
        circle(320, 750, 350);
      }
      if (coral5.hitTest() && choiceCoral5 === false) {
        fill(255, 255, 255, 20);
        ellipse(740, 530, 159, 150);
      }
      if (coral6.hitTest() && choiceCoral6 === false) {
        fill(255, 255, 255, 20);
        ellipse(970, 390, 140, 140);
      }
      if (coral7.hitTest() && choiceCoral7 === false) {
        fill(255, 255, 255, 20);
        ellipse(1350, 600, 300, 200);
      }
      if (coral8.hitTest() && choiceCoral8 === false) {
        fill(255, 255, 255, 20);
        ellipse(1350, 130, 280, 280);
      }
      if (coral9.hitTest() && choiceCoral9 === false) {
        fill(255, 255, 255, 20);
        ellipse(800, 120, 150, 100);
      }
      if (switchLayer2.hitTest()) {
        fill(255, 255, 255, 20);
        ellipse(1170, 40, 150, 150);
        consoleLayerSwitch2.display();
      }
    }
  }

  //LAYER 3 SCREEN
  if (runGame === true && layerState === 3) {
    //LAYER
    image(layer3, 0, 0, 1920, 1080);

    //DEAD CORALS LAYER 3
    if (layerState === 3) {
      if (choiceCoral10 === true) {
        image(coral10PNG, 145, 740, 286 * 1.4, 117 * 1.4);
      }
      if (choiceCoral11 === true) {
        image(coral11PNG, 720, 425, 197 * 1.4, 127 * 1.4);
      }
      if (choiceCoral12 === true) {
        image(coral12PNG, 540, 245, 120 * 1.4, 62 * 1.4);
      }
      if (choiceCoral13 === true) {
        image(coral14PNG, 1575, 415, 131 * 1.4, 66 * 1.4);
      }
      if (choiceCoral14 === true) {
        image(coral13PNG, 790, 155, 102 * 1.4, 79 * 1.4);
      }
      if (choiceCoral15 === true) {
        image(coral15PNG, 1470, 125, 139 * 1.4, 60 * 1.4);
      }

      //CORAL HOVERS LAYER 3
      if (layerState === 3 && decisionState === false) {
        if (coral10.hoverTest()) {
          fill(255, 255, 255, 20);
          ellipse(330, 814, 400, 200);
        }
        if (coral11.hoverTest()) {
          fill(255, 255, 255, 20);
          ellipse(620, 290, 180, 120);
        }
        if (coral12.hoverTest()) {
          fill(255, 255, 255, 20);
          ellipse(850, 520, 300, 250);
        }
        if (coral13.hoverTest()) {
          fill(255, 255, 255, 20);
          ellipse(850, 220, 180, 120);
        }
        if (coral14.hoverTest()) {
          fill(255, 255, 255, 20);
          ellipse(1670, 460, 180, 120);
        }
        if (coral15.hoverTest()) {
          fill(255, 255, 255, 20);
          ellipse(1570, 170, 220, 120);
        }
        if (switchLayer3.hoverTest()) {
          fill(255, 255, 255, 20);
          ellipse(1800, 58, 200, 200);
        }
      }
    }
    //ASTRONAUT + STATUSBAR
    statusBar.display();
    astronaut.display();
  }

  //END SIMULATION
  if (layerState === 3 && endSimulation === true) {
    transitionOut();
    consoleEndSimulation.display();
    buttonEndSimulation.display();
  }

  //DEATH SCREEN
  if (statusBar.oxygenCounter <= -1) {
    //endScreenPNG
    // fill(255);
    // rect(0, 0, 1920.108);
  }
}

function endScreens() {
  if (endState === true && frameCounter <= 301) {
    //rescue screen
    image(riseUp, 0, 0, 1920, 1080);
    frameCounter = frameCounter + 1;
  } else if (
    endState === true &&
    frameCounter > 301 &&
    statusBar.sampleCounter >= 9
  ) {
    //end Screen -> too many samples collected
    image(oceanBackground, 0, 0, 1920, 1080);
    image(helicopter, 0, 0, 1920, 1080);
    fill(10, 10, 10, 240);
    textAlign(LEFT);
    textSize(20);
    stroke(255);
    strokeWeight(0.8);
    text(
      "Deine Mission ist gescheitert.\n\nDu konntest zwar das Heilmittel für die\nMenschheit bergen,jedoch war Dein Handeln nicht\nweitsichtig genug.\nDu hast mehr Proben gesammelt als benötigt\nund damit das Korallenrif irreparabel beschädigt.\nDie für die umfangreiche Nutzung des Heilmittels\nnotwendige Rekultivierung und weitere\nErforschung der Riffe ist somit ausgeschlossen.\nSchau Dir im Labor an, was möglich gewesen wäre.",
      840,
      140
    );
    buttonShowLabor.display();
  } else if (
    endState === true &&
    frameCounter > 301 &&
    statusBar.sampleCounter <= 7
  ) {
    //end Screen -> not eenough samples collected
    image(oceanBackground, 0, 0, 1920, 1080);
    image(helicopter, 0, 0, 1920, 1080);
    fill(10, 10, 10, 240);
    textAlign(LEFT);
    textSize(20);
    stroke(255);
    strokeWeight(1.5);
    text(
      "Deine Mission ist gescheitert.\n\nDu hast zu wenige Proben eingesammelt und\nsomit kann kein Heilmittel entwickelt werden.\nSchau Dir im Labor an, was möglich gewesen wäre.",
      840,
      180
    );
    buttonShowLabor.display();
  } else if (
    endState === true &&
    frameCounter > 301 &&
    statusBar.sampleCounter === 8
  ) {
    //end Screen -> success
    image(oceanBackground, 0, 0, 1920, 1080);
    image(helicopter, 0, 0, 1920, 1080);
    fill(10, 10, 10, 240);
    textAlign(LEFT);
    textSize(20);
    stroke(255);
    strokeWeight(1.5);
    text(
      "Du hast die Mission erfolgreich absolviert.\n\nSchau Dir im Labor an, welches Potenzial in\ndeinen eingesammelten Proben steckt.",
      840,
      170
    );
    buttonShowLabor.display();
  }
}

function laborScreens() {
  if (laborState === true) {
    image(laborScreenPNG, 0, 0, 1920, 1080);
    textAlign(LEFT);

    //WHEN HOVER -> text
    if (buttonAquarium.hoverTest()) {
      //AQUARIUM
      stroke(255);
      fill(0, 0, 0, 220);
      rect(140, 550, 1640, 490, 20);
      fill(255);
      textLeading(32);
      noStroke();
      text(
        "Brustkrebs heilen?\n\nAn der Fakultät für AngewandteNaturwissenschaften der TH Köln\nbefasst sich das Forschungsprojekt\n„Neue Wirkstoffe aus dem Meer“ mit der Korallenart\n„Antillogorgia elisabethae“, die den Naturstoff „Pseudopterosin“ als\nSchutz gegen Fressfeinde bildet.\nDieser entzündungshemmende Naturstoff, der bereits in Handcremes\nverwendet wird, könnte bei neuen Behandlungsformen von Brustkrebs\nhelfen, da z.B. das Wachstum von Krebszellen blockiert werden könnte.\nDas Forschungsteam prognostiziert jedoch noch\nlangjährige Forschungsarbeiten an den Korallen, bis es zu einem\nmarktreifen Präparat kommt.",
        180,
        610
      );
      fill(255, 255, 255, 100);
      ellipse(700, 130, 300, 250);
    } else if (buttonDistiller.hoverTest()) {
      //TESTTUBE
      stroke(255);
      fill(0, 0, 0, 220);
      rect(140, 680, 1640, 340, 20);
      textLeading(32);
      fill(255);
      noStroke();
      text(
        "Leuchtmarkierungen gegen Krebs?\n\nAn der University of Southampton erforscht “The Coral Reef Laboratory”\nunter der Leitung von Prof. Jörg Wiedenmann fluoreszierende\n(leuchtende) Korallen. Diese Fluoreszenzproteine könnten als\nleuchtende MarkerKrebszellen in Geweben sichtbar machen.\nMan könnte Krebszellen gezielt erkennen,\nohne gesundes Gewebe zu beschädigen.",
        180,
        750
      );
      fill(255, 255, 255, 100);
      ellipse(310, 500, 300, 250);
    } else if (buttonTesttube.hoverTest()) {
      //DISTILLER
      stroke(255);
      fill(0, 0, 0, 220);
      rect(140, 860, 1640, 160, 20);
      textLeading(32);
      fill(255);
      noStroke();
      text(
        "In Deutschland erkrankt fast jeder Zweite an Krebs,\ndas sind 492.000 Neuerkrankungen pro Jahr.",
        180,
        940
      );
      fill(255, 255, 255, 100);
      ellipse(1050, 150, 300, 250);
    } else if (buttonDoor.hoverTest()) {
      fill(255, 255, 255, 100);
      ellipse(1700, 225, 300, 450);
    }
  }
}

function adoptScreen() {
  if (adoptionState === true) {
    image(adoptScreenPNG, 0, 0, 1920, 1080);
    buttonRestartEnd.display();
    buttonCredits.display();
    linkButton.display();
  }
}

function gameOverScreen() {
  if (statusBar.oxygenCounter <= -1) {
    fill(255);
    image(gameOverScreenPNG, 0, 0, 1920, 1080);
    textAlign(CENTER);
    text("DIR IST DER SAUERSTOFF AUSGEGANGEN", 960, 700);

    runGame = false;

    //restartButton
    image(startButton, 796.5, 830, 327, 163.5);
    buttonRestart.display();
  }
}

function creditsScreen() {
  if (creditState === true) {
    image(creditsScreenPNG, 0, 0, 1920, 1080);
    buttonBack.display();
    runGame = false;
  }
}

function decisions() {
  //LAYER 1
  if (posState >= 1 && posState <= 2 && decisionState === true) {
    decision.display();

    if (posState === 1) {
      decision.x = 1100;
      decision.y = 650;
      consolePuck1.display();
    }
    if (posState === 2) {
      decision.x = 1390;
      decision.y = 400;
      consolePuck2.display();
    }
  }
  if (posState === 3 && decisionState === false && layerState === 1) {
    consoleLayerSwitch.display();
    buttonSwitchLayer.display();
  }

  //LAYER 2
  if (posState === 11 && layerState === 2) {
    consoleLayerSwitch2.display();
    buttonSwitchLayer2.display();
  }

  if (posState >= 4 && posState <= 100 && decisionState === true) {
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

    if (posState === 12) {
      decision.x = 450;
      decision.y = 620;
    }
    if (posState === 13) {
      decision.x = 550;
      decision.y = 180;
    }
    if (posState === 14) {
      decision.x = 700;
      decision.y = 500;
    }
    if (posState === 15) {
      decision.x = 1000;
      decision.y = 200;
    }
    if (posState === 16) {
      decision.x = 1600;
      decision.y = 100;
    }
    if (posState === 17) {
      decision.x = 1700;
      decision.y = 180;
    }
  }
}

function mouseClicked() {
  //BUTTONS LAYER 1
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
    clickSound.play();
    alarmSound.play();
  } else if (button8.hitTest() && gameState === 8) {
    gameState = 9;
    //sound
    clickSound.play();
  } else if (button9.hitTest() && gameState === 9) {
    gameState = 10;
    //sound
    alarmSound.play();
    alarmSound.stop();
    explosion.play();
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
      //sound
      clickSound.play();
    } else if (coral4.hitTest() && choiceCoral4 === false) {
      //changePos
      astronaut.x = 150;
      astronaut.y = 650;
      posState = 5;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
      //sound
      clickSound.play();
    } else if (coral5.hitTest() && choiceCoral5 === false) {
      //changePos
      astronaut.x = 430;
      astronaut.y = 320;
      posState = 6;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
      //sound
      clickSound.play();
    } else if (coral6.hitTest() && choiceCoral6 === false) {
      //changePos
      astronaut.x = 870;
      astronaut.y = 290;
      posState = 7;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
      //sound
      clickSound.play();
    } else if (coral7.hitTest() && choiceCoral7 === false) {
      //changePos
      astronaut.x = 1150;
      astronaut.y = 460;
      posState = 8;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
      //sound
      clickSound.play();
    } else if (coral8.hitTest() && choiceCoral8 === false) {
      //changePos
      astronaut.x = 1200;
      astronaut.y = 115;
      posState = 9;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
      //sound
      clickSound.play();
    } else if (coral9.hitTest() && choiceCoral9 === false) {
      //changePos
      astronaut.x = 650;
      astronaut.y = 20;
      posState = 10;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      //changeDecisionState
      decisionState = true;
      //sound
      clickSound.play();
    }
  }
  if (switchLayer2.hitTest() && runGame === true && layerState === 2) {
    //changePos
    astronaut.x = 1000;
    astronaut.y = -20;
    posState = 11;
    //decreaseOxygenCounter
    statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
    decisionState = false;
    //sound
    clickSound.play();
  }

  if (buttonSwitchLayer2.hitTest() && layerState === 1 && posState === 11) {
    layerState = 2;
    //sound
    clickSound.play();
    //posAstronaut
    astronaut.x = -40;
    astronaut.y = 340;
    //switch layer
    layerState = 3;
    //sound
    clickSound.play();
  }

  //Remembers which Corals have been exploited
  //Pos 4 - 10
  if (
    (decision.hitTestRight() && layerState === 2) ||
    (decision.hitTestLeft() && layerState === 2)
  ) {
    if (posState === 4) {
      choiceCoral3 = true;
    }
    if (posState === 5) {
      choiceCoral4 = true;
    }
    if (posState === 6) {
      choiceCoral5 = true;
    }
    if (posState === 7) {
      choiceCoral6 = true;
    }
    if (posState === 8) {
      choiceCoral7 = true;
    }
    if (posState === 9) {
      choiceCoral8 = true;
    }
    if (posState === 10) {
      choiceCoral9 = true;
    }
  }
  //Remembers which Corals have been exploited
  //Pos 11 - 17
  if (
    (decision.hitTestRight() && layerState === 3) ||
    (decision.hitTestLeft() && layerState === 3)
  ) {
    if (posState === 11) {
      choiceCoral11 = true;
    }
    if (posState === 12) {
      choiceCoral10 = true;
    }
    if (posState === 13) {
      choiceCoral12 = true;
    }
    if (posState === 14) {
      choiceCoral11 = true;
    }
    if (posState === 15) {
      choiceCoral14 = true;
    }
    if (posState === 16) {
      choiceCoral15 = true;
    }
    if (posState === 17) {
      choiceCoral13 = true;
    }
  }

  //CORAL BUTTONS LAYER 3
  if (
    runGame === true &&
    layerState === 3 &&
    decisionState === false &&
    endState === false
  ) {
    if (coral10.hitTest() && choiceCoral10 === false) {
      //changePos
      astronaut.x = 350;
      astronaut.y = 650;
      posState = 12;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      decisionState = true;
      //sound
      clickSound.play();
    }
    if (coral11.hitTest() && choiceCoral12 === false) {
      //changePos
      astronaut.x = 420;
      astronaut.y = 200;
      posState = 13;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      decisionState = true;
      console.log("wokrs");
      //sound
      clickSound.play();
    }
    if (coral12.hitTest() && choiceCoral11 === false) {
      //changePos
      astronaut.x = 450;
      astronaut.y = 300;
      posState = 14;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      decisionState = true;
      //sound
      clickSound.play();
    }
    if (coral13.hitTest() && choiceCoral14 === false) {
      //changePos
      astronaut.x = 720;
      astronaut.y = 20;
      posState = 15;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      decisionState = true;
      //sound
      clickSound.play();
    }
    if (coral14.hitTest() && choiceCoral13 === false) {
      //changePos
      astronaut.x = 1400;
      astronaut.y = 200;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      decisionState = true;
      posState = 17;
      //sound
      clickSound.play();
    }
    if (coral15.hitTest() && choiceCoral15 === false) {
      //changePos
      astronaut.x = 1300;
      astronaut.y = 100;
      posState = 16;
      //decreaseOxygenCounter
      statusBar.oxygenCounter = statusBar.oxygenCounter - 1;
      decisionState = true;
      //sound
      clickSound.play();
    }
    if (switchLayer3.hitTest() && runGame === true && layerState === 3) {
      //changePos
      astronaut.x = 1500;
      astronaut.y = -20;
      posState = 11;
      //decreaseOxygenCounter
      //switch layer
      decisionState = false;
      endSimulation = true;
      //sets opacity (opac2) of transitionOut() to default !
      opac2 = 0;
      //sound
      clickSound.play();
    }

    //LEAVE BUTTON
    if (
      layerState === 3 &&
      buttonEndSimulation.hitTest() &&
      endSimulation === true
    ) {
      endState = true;
      //sets opacity (opac) of transition() to default !
      opac = 255;
      //sound
      clickSound.play();
    }
  }

  //go to LABOR button
  if (buttonShowLabor.hitTest() && endState === true) {
    laborState = true;
    //sound
    clickSound.play();
  }
  //  -> in Labor
  if (buttonDoor.hitTest() && laborState === true) {
    adoptionState = true;
    //sound
    clickSound.play();
  }

  //CREDITS BUTTON
  if (buttonCredits.hitTest() && adoptionState === true) {
    creditState = true;
    //sound
    clickSound.play();
  }
  //ButtonBack
  if (buttonBack.hitTest() && creditState === true) {
    creditState = false;
    //sound
    clickSound.play();
  }
  //RESTARTs
  if (buttonRestart.hitTest() && statusBar.oxygenCounter <= -1) {
    //RESTART BUTTONs
    statusBar.oxygenCounter = 1;
    statusBar.sampleCounter = 0;
    gameState = 0;
    layerState = 1;
    endSimulation = false;
    endState = false;
    posState = 0;
    runGame = false;
    laborState = false;
    adoptionState = false;
    creditState = false;
    opac = 255;
    opac2 = 0;
    decisionState = false;
    frameCounter = 0;
    astronaut.x = 425;
    astronaut.y = 550;
    choiceCoral3 = false;
    choiceCoral4 = false;
    choiceCoral5 = false;
    choiceCoral6 = false;
    choiceCoral7 = false;
    choiceCoral8 = false;
    choiceCoral9 = false;
    choiceCoral10 = false;
    choiceCoral11 = false;
    choiceCoral12 = false;
    choiceCoral13 = false;
    choiceCoral14 = false;
    choiceCoral15 = false;
    //sound
    clickSound.play();
  }
  if (buttonRestartEnd.hitTest() && adoptionState === true) {
    statusBar.oxygenCounter = 1;
    statusBar.sampleCounter = 0;
    gameState = 0;
    layerState = 1;
    endSimulation = false;
    endState = false;
    posState = 0;
    runGame = false;
    laborState = false;
    adoptionState = false;
    creditState = false;
    opac = 255;
    opac2 = 0;
    decisionState = false;
    frameCounter = 0;
    astronaut.x = 425;
    astronaut.y = 550;
    choiceCoral3 = false;
    choiceCoral4 = false;
    choiceCoral5 = false;
    choiceCoral6 = false;
    choiceCoral7 = false;
    choiceCoral8 = false;
    choiceCoral9 = false;
    choiceCoral10 = false;
    choiceCoral11 = false;
    choiceCoral12 = false;
    choiceCoral13 = false;
    choiceCoral14 = false;
    choiceCoral15 = false;
    //sound
    clickSound.play();
  }
  //DECISIONS
  //right = oxygen
  if (decision.hitTestRight() && decisionState === true) {
    statusBar.oxygenCounter = 4;
    decisionState = false;
    //sound
    collectSound.play();
  }
  //left = sample
  if (decision.hitTestLeft() && decisionState === true && posState > 1) {
    statusBar.sampleCounter = statusBar.sampleCounter + 1;
    decisionState = false;
    //sound
    collectSound.play();
  }

  if (adoptionState === true && linkButton.hitTest()) {
    window.open("https://www.coralgardeners.org"), "_blank";
  }
}

function draw() {
  textFont(defaultFont);
  screenOrder();
  gameScreens();
  endScreens();
  laborScreens();
  decisions();
  gameOverScreen();
  adoptScreen();
  creditsScreen();
  cursor();

  console.log(decisionState);
  console.log(choiceCoral12);
  console.log(posState);
}
