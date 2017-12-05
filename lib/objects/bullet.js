const MovingObject = require("./moving_object");

class Bullet extends MovingObject {
  constructor(options) {
    super(options);
    this.image = new Image();
    this.game.bullets.push(this);
  }

  draw(ctx) {
    let pos = this.pos;
    let size = this.size;
    let image = this.image;
    image.src = "./images/bullets/laser.png";

    image.onload = function() {
      ctx.drawImage(image, pos[0]-9, pos[1]-45, image.width * 0.4, image.height * 0.4);
    };
  }
}


module.exports = Bullet;
