import { Bullet, PlayerBullet } from './bullet';

class Ship {
  constructor(game) {
    this.game = game;
    this.ship = "";
    this.keys = {};
    this.health = 40;
    this.maxHealth = this.health;
    this.power = 0;
    this.xwing = new createjs.Bitmap('images/xwing.png');
    this.falcon = new createjs.Bitmap('images/falcon.png');
    document.onkeydown = this.keydown.bind(this);
    document.onkeyup = this.keyup.bind(this);
  }

  addShip(n) {
    if(n===1) {
      this.ship = this.xwing;
    } else if(n===2) {
      this.ship = this.falcon;
    }
    if(this.ship.image.currentSrc.includes('xwing')) {
      this.ship.scaleX = 0.4;
      this.ship.scaleY = 0.4;
    } else {
      this.ship.scaleX = 0.15;
      this.ship.scaleY = 0.15;
    }
    this.ship.x = this.game.canvas.width / 2 - 60;
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
    if(this.power === 0) {
      this.redshot1();
    } else if(this.power === 1) {
      this.redshot2();
    } else if(this.power === 2) {
      this.redshot3();
    }
  }

  redshot1() {
    this.game.audio['xwing-laser'].play();
    let bullet = new PlayerBullet(0, -18, this.ship.x, this.ship.y, this.game);
    this.game.bullets.push(bullet);
    bullet.addBullet();
  }

  redshot2() {
    this.game.audio['xwing-laser'].play();
    let bullet1 = new PlayerBullet(0, -40, this.ship.x-30, this.ship.y+20, this.game);
    let bullet2 = new PlayerBullet(0, -40, this.ship.x+30, this.ship.y+20, this.game);
    this.game.bullets.push(bullet1);
    this.game.bullets.push(bullet2);
    bullet1.addBullet();
    bullet2.addBullet();
  }

  redshot3() {
    this.game.audio['xwing-laser'].play();
    let bullet1 = new PlayerBullet(0, -40, this.ship.x-20, this.ship.y+20, this.game);
    let bullet2 = new PlayerBullet(0, -40, this.ship.x+20, this.ship.y+20, this.game);
    let bullet3 = new PlayerBullet(-4, -40, this.ship.x-40, this.ship.y+20, this.game);
    let bullet4 = new PlayerBullet(4, -40, this.ship.x+40, this.ship.y+20, this.game);
    this.game.bullets.push(bullet1);
    this.game.bullets.push(bullet2);
    this.game.bullets.push(bullet3);
    this.game.bullets.push(bullet4);
    bullet1.addBullet();
    bullet2.addBullet();
    bullet3.addBullet();
    bullet4.addBullet();
  }

  bomb() {

  }

  outOfBoundsX1() {
    if(this.ship.x <= 10) {
      return false;
    }
    return true;
  }

  outOfBoundsX2() {
    if(this.ship.x >= window.innerWidth * .94) {
      return false;
    }
    return true;
  }

  outOfBoundsY1() {
    if(this.ship.y <= 10) {
      return false;
    }
    return true;
  }

  outOfBoundsY2() {
    if(this.ship.y >= window.innerHeight * .87) {
      return false;
    }
    return true;
  }

  alive() {
    return this.health !== 0;
  }

  shipEvents() {
    if(this.keys[37] && this.outOfBoundsX1() && this.alive()) {
      this.ship.x -= 10;
    }
    if(this.keys[38] && this.outOfBoundsY1() && this.alive()) {
      this.ship.y -= 10;
    }
    if(this.keys[39] && this.outOfBoundsX2() && this.alive()) {
      this.ship.x += 10;
    }
    if(this.keys[40] && this.outOfBoundsY2() && this.alive()) {
      this.ship.y += 10;
    }
    if(this.keys[32] && this.game.ticker.getTicks() % 7 === 0) {
      this.shoot();
    }
  }

}

export default Ship;
