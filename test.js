//SOUNDS
let morseCode;
let backgroundMusic;
let clickSound;
let alarmSound;
let collectSound;

let astronautPNG;

function preload() {
  //astronautPNG
  astronautPNG = loadImage("./assets/astronaut.png");

  //SOUNDS
  // morseCode = loadSound("./sounds/morseCode.mp3");
  // backgroundMusic = loadSound("./sounds/backgroundMusic.mp3");
  // clickSound = loadSound("./sounds/hoverCoral.mp3");
  // alarmSound = loadSound("./sounds/alarmSound.mp3");
  // collectSound = loadSound("./sounds/collectSound.wav");

  //FONT(s)
  defaultFont = loadFont("./fonts/defaultFont.ttf");
}

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

  //symbols
  samples: loadImage("./assets/samples.png"),
  oxygen: loadImage("./assets/oxygen.png"),

  //end
  oceanBackground: loadImage("./gifs/oceanBackground.gif"),
  helicopter: loadImage("./gifs/helicopter.gif"),

  //laborScreen
  laborScreen: loadImage("./assets/laborScreen.png"),

  gameOverScreen: loadImage("./assets/gameOverScreen.png"),
};

import Decision from "./classes/Decision";
// import Button from "./classes/Button.js";

decision = new Decision(30, 500, 60, 60, "decision", images);

// function mouseClicked() {
//   if (decision.hitTestLeft()) {
//     console.log("left works");
//   }

//   if (decision.hitTestRight()) {
//     console.log("rigth works");
//   }
// }

function draw() {
  // image(images.layer1, 0, 0, 1920, 1080);
  image(images.layer3, 0, 0, 1920, 1080);
  // image(images.gameOverScreen, 0, 0, 1920, 1080);
  //LAYER 2 ASSETS
  // image(images.layer2, 0, 0, 1920, 1080);
  // image(images.coral3, 252, 230, 119 * 1.4, 49 * 1.4);
  // image(images.coral4, 110, 635, 297 * 1.4, 189 * 1.4);
  // image(images.coral5, 670, 470, 84 * 1.4, 75 * 1.4);
  // image(images.coral6, 902, 335, 92 * 1.4, 70 * 1.4);
  // image(images.coral7, 1203, 514, 224 * 1.4, 100 * 1.4);
  // image(images.coral8, 1210, 0, 222 * 1.4, 173 * 1.4);
  // image(images.coral9, 782, 94, 36 * 1.4, 28 * 1.4);
  // image(images.switchLayer2, 1135, 18, 52 * 1.4, 25 * 1.4);
  // image(images.oceanBackground, 0, 0, 1920, 1080);
  // image(images.helicopter, 0, 0, 1920, 1080);
  // image(images.coral1, 1340, 925, 118 * 1.4, 100 * 1.4);
  // image(images.coral2, 1668, 595, 142.5, 150);
  // image(images.switchLayer, 1740, 10, 102 * 1.8, 101 * 1.8);"
  //LAYER 2 ASSETS
  // image(images.coral10, 145, 740, 286 * 1.4, 117 * 1.4);
  // image(images.coral11, 720, 425, 197 * 1.4, 127 * 1.4);
  // image(images.coral12, 540, 245, 120 * 1.4, 62 * 1.4);
  // image(images.coral13, 790, 155, 102 * 1.4, 79 * 1.4);
  // image(images.coral14, 1575, 415, 131 * 1.4, 66 * 1.4);
  // image(images.coral15, 1470, 125, 139 * 1.4, 60 * 1.4);
  // image(images.endPoint, 1738, 0, 89 * 1.4, 73 * 1.4);
  decision.display();
  // console.log(decision.hoverTestLeft());
  //console.log(decision.hoverTestRight());
  // image(images.laborScreen, 0, 0, 1920, 1080);
  //!
  // image(images.samples, 0, 0, 20.2 * 1.2, 33.8 * 1.2);
  // image(images.oxygen, 20, 0, 20.1 * 3, 17.7 * 3);

  image(astronautPNG, 100, 100, 100, 100);
}
