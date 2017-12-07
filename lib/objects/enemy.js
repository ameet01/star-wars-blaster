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
        .call(() => {
          if(this.hasSpiral) {
            this.spiralAttack();
          }
          this.game.bullets.forEach(bullet => {
            bullet.active = false;
          });
          this.shooting = true;
          this.tweening = true;
        })
    }
  }

  playSound() {
    let tieRandom = Math.random();
    if(tieRandom < this.game.enemies.length * 0.002) {
      let num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      this.game.audio[`tie${num}`].play();
    }
  }

  spiralAttack() {
    var i = 0;

    var id = setInterval(() => {
      var r = 2 * Math.PI * i / 25 + 1.57;
      var x = 3 * Math.cos(r);
      var y = 3 * Math.sin(r);
      const bullet = new TieFighterBullet(x,y,this.game);
      bullet.addBullet(this.enemy.x,this.enemy.y);
      this.game.enemyBullets.push(bullet);

      i += 1;

      if (i >= 80 || this.health<=0) {
        clearInterval(id);
      }
    }, 80);
  }
}

export class TieFighter extends Enemy {
  constructor(velocityX, velocityY, game, typeofmove, hasSpiral) {
    super(velocityX, velocityY, game);
    this.damage = 1;
    this.health = 5;
    this.enemy = new createjs.Bitmap('images/tiefighter.png');
    this.tweening = false;
    this.shooting = false;
    this.typeofmove = typeofmove;
    this.hasSpiral = hasSpiral;
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
