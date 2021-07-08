export default class Astronaut {
  constructor(x, y, images, scale) {
    this.x = x;
    this.y = y;
    this.astronaut = images.astronaut;
    this.scale = scale;
  }

  drawAstronaut() {
    this.scale = scale;
    image(this.astronaut, this.x, this.y, 306 * this.scale, 396 * this.scale);
  }

  display() {
    this.drawAstronaut();
  }
}
