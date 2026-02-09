import Sprite from "./sprite.js";

class Ball extends Sprite {

  bounce(canvasWidth, canvasHeight) {
    if (this.x < 0 || this.x + this.width > canvasWidth) {
      this.dx *= -1; // 👀 reverse horizontal direction
    }

    if (this.y < 0 || this.y + this.height > canvasHeight) {
      this.dy *= -1; // 👀 reverse vertical direction
    }
  }

  collides(other) {
    if (this.intersects(other)) {
      this.dy *= -1; // switch direction
    }
  }
}

export default Ball;