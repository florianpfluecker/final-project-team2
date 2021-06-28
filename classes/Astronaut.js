export default class Astronaut {
  constructor(x, y, images, scale) {
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.astronaut = images.astronaut;
  }

  drawAstronaut() {
    image(this.astronaut, this.x, this.y, 306, 396);
  }

  display() {
    this.drawAstronaut();
  }
}
