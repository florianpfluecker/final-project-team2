// Smesterprojekt P2 Odyssee
window.draw = draw;
window.mouseClicked = mouseClicked;
angleMode(DEGREES);

//images

let images = {
  //screens
  screen1: loadImage("./assets/screen1.png"),
  screen2: loadImage("./assets/screen2.png"),
  screen3: loadImage("./assets/screen3.png"),

  //astronaut
  astronaut: loadImage("./assets/astronaut.png"),
};

//imports

import Button from "./classes/Button.js";
import Console from "./classes/Console.js";
import Astronaut from "./classes/Astronaut.js";
import StatusBar from "./classes/statusBar.js";

//instantiate objects

let hoverTest = false;
let button1 = new Button(100, 100, 100, 30, "Button1");
let console1 = new Console(
  300,
  830,
  1320,
  200,
  "ASTRONAUT",
  "testtesttesttesttesttesttesttesttesttesttest"
);
let astronaut = new Astronaut(125, 430, images);
let statusBar = new StatusBar(50, 30);

//variables
let i = 0;
statusBar.i = i;
statusBar.i = 2;
console.log(statusBar.i);

//functions

function mouseClicked() {
  if (button1.hitTest) {
    console.log("works");
  }
}

function draw() {
  image(images.screen3, 0, 0, 1920, 1080);
  image(images.screen2, 0, 0, 1920, 1080);
  image(images.screen1, 0, 0, 1920, 1080);

  astronaut.display();
  console1.display();

  statusBar.display();
}
