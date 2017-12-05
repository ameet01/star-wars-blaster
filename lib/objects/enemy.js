import MovingObject from './moving_object';
import { TieFighterBullet } from './bullet';

export class Enemy extends MovingObject {
  constructor(velocityX, velocityY, game) {
    super(velocityX, velocityY, game);
  }
}

export class TieFighter extends Enemy {
  constructor(velocityX, velocityY, game) {
    super(velocityX, velocityY, game);
    this.damage = 1;
    this.health = 5;
    this.enemy = new createjs.Bitmap('images/tiefighter.png');
  }

  addShip(x, y) {
    this.enemy.x = x;
    this.enemy.y = y;
    this.game.enemies.push(this);
    this.game.stage.addChild(this.enemy);
  }

  shoot() {
      let bullet = new TieFighterBullet((this.game.ship.ship.x - this.enemy.x)/60, 10, this.game);
      bullet.addBullet(this.enemy.x, this.enemy.y);
  }

  move() {
    this.enemy.x += this.velocityX;
    this.enemy.y += this.velocityY;
  }
}
