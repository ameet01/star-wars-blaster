

class Bullet {
  constructor(game) {
    this.game = game;
    this.bullet = new createjs.Bitmap('images/bullets/laser.png');
    this.bullet.scaleX = 0.5;
    this.bullet.scaleY = 0.5;
    this.velocityX = 0;
    this.velocityY = -15;
  }

  addBullet() {
    this.bullet.x = this.game.ship.ship.x + 39.5;
    this.bullet.y = this.game.ship.ship.y - 50;
    this.game.stage.addChild(this.bullet);
  }

  move() {
    this.bullet.x += this.velocityX;
    this.bullet.y += this.velocityY;
  }

}

export default Bullet;
