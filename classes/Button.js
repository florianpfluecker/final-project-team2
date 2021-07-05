export default class Button {
  constructor(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
  }

  drawButton(x, y, width, height) {
    noStroke();
    noFill();
    rect(this.x, this.y, this.width, this.height, 15);
    if (this.hoverTest() === true) {
      fill(177, 108, 170);
    } else {
      fill(255);
    }
    textSize(22);
    textAlign(CENTER);
    text(this.text, this.x + this.width / 2, this.y + this.height / 1.7);
    noFill();
  }

  hitTest(x, y, width, height) {
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

  hoverTest(x, y, width, height) {
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
    this.hitTest();
    this.hoverTest();
  }
}
