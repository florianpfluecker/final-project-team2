export default class Button {
  constructor(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.hoverTest = false;
  }

  drawButton(x, y, width, height) {
    noStroke();
    //fill();
    rect(this.x, this.y, this.width, this.height, 15);
    //fill();
    textSize(18);
    textAlign(CENTER);
    text(this.text, this.x + this.width / 2, this.y + this.height / 1.7);
  }

  hitTest(x, y) {
    if (
      mouseX < this.x + this.width &&
      mouseX >= this.x &&
      mouseY < this.y + this.height &&
      mouseY >= this.y
    ) {
      return true;
    } else {
      return false;
    }
  }

  hoverTest(x, y) {
    if (
      mouseX < this.x + this.width &&
      mouseX >= this.x &&
      mouseY < this.y + this.height &&
      mouseY >= this.y
    ) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    this.drawButton();
  }
}
