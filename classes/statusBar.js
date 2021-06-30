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
    fill(255, 255, 255);
    rect(this.x, this.y + 40, 120, 40, 30);

    //oxygenCounter
    fill(0);
    for (this.i = 0; this.i <= this.oxygenCounter; this.i++) {
      rect(this.x + 1 + 61 * this.i, this.y + 1, 60, 28, 30);
    }
  }

  textField() {
    textSize(30);
    this.sampleCounter = 4;
    text(this.sampleCounter, this.x + 45, this.y + 70);
    text("/ 8", 120, 100);
  }

  display() {
    this.drawBars();
    this.textField();
  }
}
