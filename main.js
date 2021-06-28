// Smesterprojekt P2 Odyssee
window.draw = draw;
window.mouseClicked = mouseClicked;
angleMode(DEGREES);

//imports
import Button from "./classes/Button.js";

let hoverTest = false;
let button1 = new Button(100, 100, 100, 30, "Button1");

let images = {
  screen1: loadImage("./assets/screen1.png"),
  screen2: loadImage("./assets/screen2.png"),
  screen3: loadImage("./assets/screen3.png"),
};

function mouseClicked() {
  if (button1.hitTest) {
    console.log("works");
  }
}

function draw() {
  image(images.screen3, 0, 0, 1920, 1080);
  image(images.screen2, 0, 0, 1920, 1080);
  image(images.screen1, 0, 0, 1920, 1080);
  button1.display();
}
