import MovingObject from './moving_object';
import { TieFighterBullet } from './bullet';

export class Enemy extends MovingObject {
  constructor(velocityX, velocityY, game) {
    super(velocityX, velocityY, game);
  }

  movedown(y) {
    if(this.tweening === false) {
      this.tweening = 'charging';
      createjs.Tween.get(this.enemy, { useTicks: true, override: true })
        .wait(5).to({ y: y }, 60, createjs.Ease.backOut)
        .call(() => { this.shooting = true; })
        // .to({x: this.enemy.x+200}, 90)
        // .to({x: this.enemy.x-200}, 90)
        // .to({x: this.enemy.x+200}, 90)
        // .to({x: this.enemy.x-200}, 90);
    }
    let tieRandom = Math.random();
    if(tieRandom < this.game.enemies.length * 0.002) {
      let num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      this.game.audio[`tie${num}`].play();
    }
  }
}

export class TieFighter extends Enemy {
  constructor(velocityX, velocityY, game, typeofmove) {
    super(velocityX, velocityY, game);
    this.damage = 1;
    this.health = 5;
    this.enemy = new createjs.Bitmap('images/tiefighter.png');
    this.tweening = false;
    this.shooting = false;
    this.typeofmove = typeofmove;
  }

  addShip(x, y) {
    this.enemy.x = x;
    this.enemy.y = y;
    this.game.enemies.push(this);
    this.game.stage.addChild(this.enemy);
  }

  shoot() {
    if(this.shooting === true) {
      let random = Math.random();
      if(random < .5) this.game.audio['tie-fighter-laser'].play();
      let bullet = new TieFighterBullet((this.game.ship.ship.x - this.enemy.x)/60, (this.game.ship.ship.y - this.enemy.y)/60, this.game);
      bullet.addBullet(this.enemy.x, this.enemy.y);
    }
  }

  move() {
    this.enemy.x += this.velocityX;
    this.enemy.y += this.velocityY;

    let tieRandom = Math.random();
    if(tieRandom < 0.003) {
      let num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      this.game.audio[`tie${num}`].play();
    }
  }
}
