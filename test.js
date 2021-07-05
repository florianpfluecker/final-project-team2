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
};

import Decision from "./classes/Decision";
import Button from "./classes/Button.js";

decision = new Decision(300, 500, 60, 60, "decision", images);

function mouseClicked() {
  if (decision.hitTestLeft()) {
    console.log("left works");
  }

  if (decision.hitTestRight()) {
    console.log("rigth works");
  }
}

function draw() {
  image(images.layer1, 0, 0, 1920, 1080);
  image(images.coral1, 1340, 925, 118 * 1.4, 100 * 1.4);
  image(images.coral2, 1668, 595, 142.5, 150);
  image(images.switchLayer, 1740, 10, 102 * 1.8, 101 * 1.8);

  decision.display();

  // console.log(decision.hoverTestLeft());
  //console.log(decision.hoverTestRight());
}
