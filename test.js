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
};

// import Decision from "./classes/Decision";
// import Button from "./classes/Button.js";

// decision = new Decision(300, 500, 60, 60, "decision", images);

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

  //LAYER 2 ASSETS
  image(images.layer2, 0, 0, 1920, 1080);
  image(images.coral3, 252, 230, 119 * 1.4, 49 * 1.4);
  s;
  image(images.coral4, 110, 635, 297 * 1.4, 189 * 1.4);
  image(images.coral5, 670, 470, 84 * 1.4, 75 * 1.4);
  image(images.coral6, 902, 335, 92 * 1.4, 70 * 1.4);
  image(images.coral7, 1203, 514, 224 * 1.4, 100 * 1.4);
  image(images.coral8, 1210, 0, 222 * 1.4, 173 * 1.4);
  image(images.coral9, 782, 94, 36 * 1.4, 28 * 1.4);
  image(images.switchLayer2, 1135, 18, 52 * 1.4, 25 * 1.4);

  // image(images.coral1, 1340, 925, 118 * 1.4, 100 * 1.4);
  // image(images.coral2, 1668, 595, 142.5, 150);
  // image(images.switchLayer, 1740, 10, 102 * 1.8, 101 * 1.8);
  // decision.display();
  // console.log(decision.hoverTestLeft());
  //console.log(decision.hoverTestRight());
}
