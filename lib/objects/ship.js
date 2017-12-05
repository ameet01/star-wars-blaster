const MovingObject = require("./moving_object");
const Bullet = require("./bullet");

class Ship extends MovingObject {
  constructor(options) {
    options.radius = Ship.RADIUS;
    options.vel = options.vel || [0, 0];
    super(options);
    this.image = new Image();
    this.size = 80;
  }

  shoot(ctx) {
    let pos = this.pos;
    let vel = [0,-10];
    let type = 'bullet';
    let bullet = new Bullet({pos: pos, vel: vel, game: this.game, type: type});
  }

  draw(ctx) {
    let pos = this.pos;
    let size = this.size;
    let image = this.image;
    image.src = "./images/xwing.png";

    image.onload = function() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      var canv = document.createElement('canvas');
      var context = canv.getContext('2d');

      canv.width = image.width;
      canv.height = image.height;
      context.translate(image.width/2, image.height/2);
      context.drawImage(image, -(image.width/2), -(image.height/2));

      ctx.drawImage(canv, pos[0] - (size/2), pos[1] - (size/2), size, size);
    };
  }

  power(impulse) {
    this.vel[0] += impulse[0];
    this.vel[1] += impulse[1];
  }
}

Ship.RADIUS = 15;
module.exports = Ship;
