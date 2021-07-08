export default class Console {
  constructor(x, y, width, height, person, text, textMargin) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.person = person;
    this.text = text;
    this.textMargin = textMargin;
    this.n = 0;
  }

  drawBox() {
    textAlign(LEFT);

    //body console
    fill(10, 10, 10, 240);
    stroke(255);
    strokeWeight(1.5);
    rect(this.x, this.y, this.width, this.height, 15);
    rect(this.x, this.y, this.width, this.height / 5, 10);
    noFill();
    noStroke();
    fill(255);
  }

  textPart() {
    this.n += 0.6;
    return this.text.substring(0, Math.round(this.n));
  }

  textField() {
    //person speaking
    textSize(20);
    text(this.person, this.x + 20, this.y + 30);
    noFill();

    //content
    textLeading(34);
    fill(255);
    text(this.textPart(), this.x + 20, this.y + this.height / this.textMargin);
  }

  display() {
    this.drawBox();
    this.textField();
  }
}
