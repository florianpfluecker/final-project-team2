export default class StatusBar {
  constructor(x, y, oxygenCounter, sampleCounter) {
    this.x = x;
    this.y = y;
    this.oxygenCounter = oxygenCounter;
    this.sampleCounter = sampleCounter;
  }

  drawBars() {
    //bar1
    fill(255, 255, 255);
    noStroke();
    rect(this.x, this.y, 300, 30, 30);
    //bar2
    rect(this.x, this.y + 40, 120, 40, 30);
  }

  textField() {}

  display() {
    this.drawBars();
    this.textField();
  }
}
