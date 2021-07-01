export default class Console {
  constructor(x, y, width, height, person, text, textMargin) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.person = person;
    this.text = text;
    this.textMargin = textMargin;
  }

  drawBox() {
    textAlign(LEFT);

    //body console
    fill(10);
    stroke(255);
    strokeWeight(1.5);
    rect(this.x, this.y, this.width, this.height, 30);
    rect(this.x, this.y, this.width, this.height / 5, 30);
    noFill();
    noStroke();
    fill(255);
  }

  textField() {
    //person speaking
    textSize(22);
    text(this.person, this.x + 20, this.y + 28);
    noFill();

    //content
    fill(255);
    text(this.text, this.x + 20, this.y + this.height / this.textMargin);
  }

  display() {
    this.drawBox();
    this.textField();
  }
}
