import MovingObject from './moving_object';

export class Bullet extends MovingObject {
  constructor(velocityX, velocityY, game) {
    super(velocityX, velocityY, game);
  }
}

export class PlayerBullet extends Bullet {
  constructor(velocityX, velocityY, game) {
    super(velocityX, velocityY, game);
    this.bullet = new createjs.Bitmap('images/bullets/laser.png');
    this.bullet.scaleX = 0.5;
    this.bullet.scaleY = 0.5;
    this.damage = 1;
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

export class TieFighterBullet extends Bullet {
  constructor(velocityX, velocityY, game) {
    super(velocityX, velocityY, game);
    this.bullet = new createjs.Bitmap('images/bullets/tiefighterlaser.png');
    this.bullet.scaleX = 0.5;
    this.bullet.scaleY = 0.5;
    this.damage = 1;
  }

  addBullet(x, y){
    this.bullet.x = x + 45;
    this.bullet.y = y + 53;
    this.game.enemyBullets.push(this);
    this.game.stage.addChild(this.bullet);
  }

  move() {
    this.bullet.x += this.velocityX;
    this.bullet.y += this.velocityY;
    if(this.bullet.y >= window.innerHeight) {
      this.game.stage.removeChild(this.bullet);
      this.game.enemyBullets.splice(this.game.enemyBullets.indexOf(this), 1);
    }
  }
}
