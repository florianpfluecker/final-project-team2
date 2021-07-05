export default class StatusBar {
  constructor(x, y, i, oxygenCounter, sampleCounter) {
    this.x = x;
    this.y = y;
    this.i = i;
    this.oxygenCounter = oxygenCounter;
    this.sampleCounter = sampleCounter;
  }

  drawBars() {
    //bar1
    fill(255, 255, 255);
    noStroke();
    rect(this.x, this.y, 306, 30, 30);

    //bar2
    fill(177, 108, 170);
    rect(this.x, this.y + 40, 120, 40, 30);

    //oxygenCounter
    fill(104, 138, 149);
    for (this.i = 0; this.i <= this.oxygenCounter; this.i++) {
      rect(this.x + 1 + 61 * this.i, this.y + 1, 60, 28, 30);
    }
  }

  textField() {
    fill(20);
    textSize(30);
    text(this.sampleCounter, this.x + 35, this.y + 76);
    text("  /8", 97, 106);
  }

  display() {
    this.drawBars();
    this.textField();
  }
}
