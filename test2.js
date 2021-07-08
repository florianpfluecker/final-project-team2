class ABC {
  constructor() {
    this.text = "Text";
    this.n = 0;
  }

  textPart() {
    this.n += 0.2;
    return this.text.substring(0, Math.round(this.n));
  }

  display() {
    text(this.textPart(), 0, 0, 100, 200);
  }
}
