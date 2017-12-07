import MovingObject from './moving_object';

export class Bullet extends MovingObject {
  constructor(velocityX, velocityY, game) {
    super(velocityX, velocityY, game);
  }
}

export class PlayerBullet extends Bullet {
  constructor(velocityX, velocityY, x, y, game) {
    super(velocityX, velocityY, game);
    if(this.game.ship.ship.image.currentSrc.includes('falcon')) {
      this.bullet = new createjs.Bitmap('images/bullets/falconlaser.png');
    } else {
      this.bullet = new createjs.Bitmap('images/bullets/laser.png');
    }
    this.bullet.scaleX = 0.5;
    this.bullet.scaleY = 0.5;
    this.active = true;
    this.damage = 1;
    this.x = x;
    this.y = y;
  }

  addBullet() {
    if(this.game.ship.ship.image.currentSrc.includes('falcon')) {
      this.bullet.x = this.x + 33;
      this.bullet.y = this.y - 18;
    } else {
      this.bullet.x = this.x + 29;
      this.bullet.y = this.y - 44;
    }
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



export class SpiralBullet extends Bullet {
  constructor(velocityX, velocityY, game) {
    super(velocityX, velocityY, game);
    this.bullet = new createjs.Bitmap('images/bullets/blueball.png');
    this.bullet.scaleX = 1.1;
    this.bullet.scaleY = 1.1;
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
    if(this.bullet.x >= window.innerWidth) {
      this.game.stage.removeChild(this.bullet);
      this.game.enemyBullets.splice(this.game.enemyBullets.indexOf(this), 1);
    }
    if(this.bullet.y <= 0) {
      this.game.stage.removeChild(this.bullet);
      this.game.enemyBullets.splice(this.game.enemyBullets.indexOf(this), 1);
    }
    if(this.bullet.x <= 0) {
      this.game.stage.removeChild(this.bullet);
      this.game.enemyBullets.splice(this.game.enemyBullets.indexOf(this), 1);
    }
  }
}
