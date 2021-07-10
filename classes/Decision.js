export default class Decision {
  constructor(x, y, width, height, text, images) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.text = text;
    this.samples = images.samples;
    this.oxygen = images.oxygen;
  }

  drawButtonLeft(x, y, width, height) {
    noStroke();
    fill(100, 100, 100, 170);
    rect(this.x, this.y, this.width, this.height, 15);
  }

  drawButtonRight(x, y, width, height) {
    noStroke();
    fill(100, 100, 100, 170);
    rect(this.x + 80, this.y, this.width, this.height, 15);
  }

  drawRect() {
    fill(10, 10, 10, 170);

    if (this.hoverTestLeft() === true) {
      stroke(177, 108, 170);
      strokeWeight(9);
      rect(this.x - 20, this.y - 15, 180, 90, 20);
    } else if (this.hoverTestRight() === true) {
      stroke(104, 138, 149);
      strokeWeight(9);
      rect(this.x - 20, this.y - 15, 180, 90, 20);
    } else {
      stroke(255);
      strokeWeight(1.5);
      rect(this.x - 20, this.y - 15, 180, 90, 20);
    }
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

  symbols() {
    image(this.samples, this.x + 17, this.y + 10, 20.2 * 1.2, 33.8 * 1.2);
    image(this.oxygen, this.x + 90, this.y + 9, 20.1 * 3, 17.7 * 3);
  }

  display() {
    this.drawRect();

    this.drawButtonLeft();
    this.drawButtonRight();

    this.hitTestLeft();
    this.hitTestRight();

    this.hoverTestLeft();
    this.hoverTestRight();

    this.symbols();
    // this.sampleSymbol();
  }
}
