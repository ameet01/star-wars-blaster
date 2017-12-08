import MovingObject from './moving_object';
import { TieFighterBullet, SpiralBullet } from './bullet';

export class Enemy extends MovingObject {
  constructor(velocityX, velocityY, game) {
    super(velocityX, velocityY, game);
  }

  movedown(y) {
    if(this.tweening === false) {
      this.tweening = 'charging';
      createjs.Tween.get(this.enemy, { useTicks: true, override: true })
        .wait(3).to({ y: y }, 60, createjs.Ease.backOut)
        .call(() => {
          if(this.hasSpiral) {
            this.spiralAttack();
          }
          this.game.bullets.forEach(bullet => {
            if(Math.abs(bullet.bullet.y - this.enemy.y) < 160) {
              bullet.active = false;
            }
          });
          this.shooting = true;
          this.tweening = true;
        });
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
      var num = 2*Math.PI * i / 25 + 1.55;
      var x = 3*Math.cos(num);
      var y = 3*Math.sin(num);
      const bullet = new SpiralBullet(x,y,this.game);
      if(this.constructor.name === 'DeathStar') {
        bullet.addBullet(this.enemy.x + 30,this.enemy.y+30);
      } else {
        bullet.addBullet(this.enemy.x,this.enemy.y);
      }


      i += 1;

      if (i >= 80 || this.health<=0) {
        clearInterval(id);
      }
    }, 50);
  }
}

export class TieFighter extends Enemy {
  constructor(velocityX, velocityY, game, typeofmove, hasSpiral) {
    super(velocityX, velocityY, game);
    this.damage = 1;
    this.health = 5;
    this.enemy = new createjs.Bitmap('images/tiefighter.png');
    this.enemy.scaleX = window.innerWidth/1000 * 0.5;
    this.enemy.scaleY = window.innerWidth/1000 * 0.5;
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
    if(tieRandom < 0.001) {
      let num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
      this.game.audio[`tie${num}`].play();
    }
  }
}

export class DeathStar extends Enemy {
  constructor(velocityX, velocityY, game, typeofmove) {
    super(velocityX, velocityY, game);
    this.game = game;
    this.damage = 1;
    this.health = 375;
    this.enemy = new createjs.Bitmap('images/deathstar.png');
    this.enemy.scaleX = 0.15;
    this.enemy.scaleY = 0.15;
    this.tweening = false;
    this.shooting = false;
    this.typeofmove = typeofmove;
    this.hasSpiral = false;
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
        }).to({x: this.enemy.x - 300}, 60)
          .wait(50).to({x: this.game.ship.ship.x, y: this.game.ship.ship.y + 60}, 60)
          .wait(100).to({x: window.innerWidth*.45, y: window.innerHeight*.20}, 60)
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .call(() => this.spiralAttack())
          .wait(50).to({x: this.enemy.x - 300}, 60)
          .call(() => this.spiralAttack())
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .call(() => this.spiralAttack())
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .wait(50).to({x: this.enemy.x - 300}, 60)
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .wait(50).to({x: this.enemy.x - 300}, 60)
          .wait(50).to({x: this.game.ship.ship.x, y: this.game.ship.ship.y + 60}, 60)
          .wait(100).to({x: window.innerWidth*.45, y: window.innerHeight*.20}, 60)
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .wait(50).to({x: this.enemy.x - 300}, 60)
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .wait(50).to({x: this.game.ship.ship.x, y: this.game.ship.ship.y + 60}, 60)
          .wait(100).to({x: window.innerWidth*.45, y: window.innerHeight*.20}, 60)
          .wait(50).to({x: this.enemy.x - 300}, 60)
          .call(() => this.spiralAttack())
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .wait(50).to({x: this.enemy.x - 300}, 60)
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .wait(50).to({x: this.enemy.x - 300}, 60)
          .call(() => this.spiralAttack())
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .wait(50).to({x: this.enemy.x - 300}, 60)
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .wait(50).to({x: this.enemy.x - 300}, 60)
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .wait(50).to({x: this.enemy.x - 300}, 60)
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .wait(50).to({x: this.enemy.x - 300}, 60)
          .wait(50).to({x: this.enemy.x + 300}, 60)
          .wait(50).to({x: this.enemy.x - 300}, 60);
    }
  }

  addShip(x, y) {
    this.enemy.x = x;
    this.enemy.y = y;
    this.game.enemies.push(this);
    this.game.stage.addChild(this.enemy);
  }

  shoot() {
    if(this.shooting === true) {
      let bullet = new TieFighterBullet((this.game.ship.ship.x - this.enemy.x)/60, (this.game.ship.ship.y - this.enemy.y)/60, this.game);
      bullet.addBullet(this.enemy.x, this.enemy.y);
    }
  }

  move() {
    this.enemy.x += this.velocityX;
    this.enemy.y += this.velocityY;
  }
}
