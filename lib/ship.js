const MovingObject = require("./moving_object");

class Ship extends MovingObject {
  constructor(options) {
    super(options);
    let image = new Image();
    this.image = image;
  }

  draw(ctx, size) {
    let pos = this.pos;

    this.image.src = "./images/xwing.png";
    this.image.onload = function() {
      ctx.drawImage(this, pos[0], pos[1], size + 0.5, size + 0.5);
    };
  }
}

module.exports = Ship;
