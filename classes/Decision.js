export default class Decision {
  constructor(x, y, width, height, text) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
  }

  drawButtonLeft(x, y, width, height) {
    noStroke();
    fill(50, 50, 50, 200);
    rect(this.x, this.y, this.width, this.height, 15);
    if (this.hoverTestLeft() === true) {
      fill(177, 108, 170);
    } else {
      fill(255);
    }
  }

  drawButtonRight(x, y, width, height) {
    noStroke();
    fill(50, 50, 50, 200);
    rect(this.x + 80, this.y, this.width, this.height, 15);
    if (this.hoverTestRight() === true) {
      fill(177, 108, 170);
    } else {
      fill(255);
    }
  }

  drawRect() {
    if (this.hoverTestLeft === true) {
      fill(177, 108, 170);
      rect(this.x - 20, this.y - 15, 180, 90, 20);
    }
    if (this.hoverTestRight === true) {
      stroke(104, 138, 149);
      rect(this.x - 20, this.y - 15, 180, 90, 20);
    }
    fill(10, 10, 10, 200);
    stroke(255);
    rect(this.x - 20, this.y - 15, 180, 90, 20);
  }

  hitTestLeft(x, y, width, height) {
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

  hitTestRight(x, y, width, height) {
    if (
      mouseX < this.x + this.width + 80 &&
      mouseX >= this.x + 80 &&
      mouseY < this.y + this.height &&
      mouseY >= this.y
    ) {
      return true;
    } else {
      return false;
    }
  }

  hoverTestLeft(x, y, width, height) {
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

  hoverTestRight(x, y, width, height) {
    if (
      mouseX < this.x + this.width + 80 &&
      mouseX >= this.x + 80 &&
      mouseY < this.y + this.height &&
      mouseY >= this.y
    ) {
      return true;
    } else {
      return false;
    }
  }

  display() {
    this.drawRect();

    this.drawButtonLeft();
    this.drawButtonRight();

    this.hitTestLeft();
    this.hitTestRight();

    this.hoverTestLeft();
    this.hoverTestRight();
  }
}
