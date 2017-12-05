import Bullet from './bullet';

class Ship {
  constructor(game) {
    this.game = game;
    this.ship = new createjs.Bitmap('images/xwing.png');
    this.ship.scaleX = 0.5;
    this.ship.scaleY = 0.5;
    this.keys = {};
    document.onkeydown = this.keydown.bind(this);
    document.onkeyup = this.keyup.bind(this);
  }

  addShip() {
    this.ship.x = this.game.canvas.width / 2 - 50;
    this.ship.y = this.game.canvas.height / 2 + 160;
    this.game.stage.addChild(this.ship);
  }

  keydown(event) {
    this.keys[event.keyCode] = true;
  }

  keyup(event) {
    delete this.keys[event.keyCode];
  }

  shoot() {
    let bullet = new Bullet(this.game);
    this.game.bullets.push(bullet);
    bullet.addBullet();
  }

  shipEvents() {
    if (this.keys[37]) this.ship.x -= 10;
    if (this.keys[38]) this.ship.y -= 10;
    if (this.keys[39]) this.ship.x += 10;
    if (this.keys[40]) this.ship.y += 10;

    if (this.keys[32]) this.shoot();
  }

}

export default Ship;
