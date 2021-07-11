export default class StatusBar {
  constructor(x, y, oxygenCounter, sampleCounter, images, i) {
    this.x = x;
    this.y = y;
    this.i = i;
    this.oxygenCounter = oxygenCounter;
    this.sampleCounter = sampleCounter;
    this.statusBarPNG = images.statusBarPNG;
    this.samples = images.samples;
  }

  drawBars() {
    image(this.statusBarPNG, 23, 11, 400, 70);

    //bar1
    fill(255, 255, 255);
    noStroke();
    // rect(this.x, this.y, 306, 30, 30);

    //bar2
    fill(177, 108, 170);
    rect(this.x, this.y + 60, 180, 60, 10);

    //oxygenCounter
    fill(104, 138, 149);
    for (this.i = 0; this.i <= this.oxygenCounter; this.i++) {
      rect(this.x + 1 + 61 * this.i, this.y + 1, 60, 28, 10);
    }
    image(this.samples, this.x + 125, this.y + 65, 20.2 * 1.4, 33.8 * 1.4);
  }

  textField() {
    fill(255);
    textSize(34);
    text(this.sampleCounter, this.x + 35, this.y + 110);
    text("  /8", 117, 140);
  }

  display() {
    this.drawBars();
    this.textField();
  }
}
