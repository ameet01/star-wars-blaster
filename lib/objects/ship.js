const MovingObject = require("./moving_object");

class Ship extends MovingObject {
  constructor(options) {
    options.radius = Ship.RADIUS;
    options.vel = options.vel || [0, 0];
    super(options);
    let image = new Image();
    this.image = image;
  }

  draw(ctx, size) {
    let pos = this.pos;
    this.image.src = "./images/xwing.png";
    this.image.onload = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(this, pos[0], pos[1], size + 0.5, size + 0.5);
    };
  }

  power(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }
}

Ship.RADIUS = 15;
module.exports = Ship;
