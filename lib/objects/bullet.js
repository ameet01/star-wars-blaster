

export class Bullet {
  constructor(game) {
    this.game = game;
    this.bullet = new createjs.Bitmap('images/bullets/laser.png');
    this.bullet.scaleX = 0.5;
    this.bullet.scaleY = 0.5;
    this.velocityX = 0;
    this.velocityY = -15;
    this.damage = 1;
  }



}

export class PlayerBullet extends Bullet {
  constructor(game) {
    super(game);
  }

  addBullet() {
    this.bullet.x = this.game.ship.ship.x + 29;
    this.bullet.y = this.game.ship.ship.y - 44;
    this.game.stage.addChild(this.bullet);
  }

  move() {
    this.bullet.x += this.velocityX;
    this.bullet.y += this.velocityY;
    if(this.bullet.y <= -10) {
      this.game.stage.removeChild(this.bullet);
      this.game.bullets.splice(this.game.bullets.indexOf(this), 1);
    }
  }
}
