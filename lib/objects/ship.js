import { Bullet, PlayerBullet } from './bullet';

class Ship {
  constructor(game) {
    this.game = game;
    this.ship = new createjs.Bitmap('images/xwing.png');
    this.ship.scaleX = 0.4;
    this.ship.scaleY = 0.4;
    this.keys = {};
    this.health = 20;
    this.power = 0;
    this.healthbar = new createjs.Shape();
    document.onkeydown = this.keydown.bind(this);
    document.onkeyup = this.keyup.bind(this);
  }

  addShip() {
    this.ship.x = this.game.canvas.width / 2 - 60;
    this.ship.y = this.game.canvas.height / 2 + 160;
    this.game.stage.addChild(this.ship);
    this.healthbar.graphics.beginFill('green');
    this.healthbar.graphics.drawRect(this.ship.x - 1, this.ship.y + this.ship.y*0.15, 80, 7);
    this.healthbar.graphics.endFill();
    this.game.stage.addChild(this.healthbar);
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

  shipEvents() {
    if(this.keys[37] && this.outOfBoundsX1()) {
      this.ship.x -= 10;
      this.healthbar.x -= 10;
    }
    if(this.keys[38] && this.outOfBoundsY1()) {
      this.ship.y -= 10;
      this.healthbar.y -= 10;
    }
    if(this.keys[39] && this.outOfBoundsX2()) {
      this.ship.x += 10;
      this.healthbar.x += 10;
    }
    if(this.keys[40] && this.outOfBoundsY2()) {
      this.ship.y += 10;
      this.healthbar.y += 10;
    }
    if(this.keys[32] && this.game.ticker.getTicks() % 7 === 0) {
      this.shoot();
    }
  }

}

export default Ship;
