import {Bullet, PlayerBullet} from './bullet';

class Ship {
  constructor(game) {
    this.game = game;
    this.ship = new createjs.Bitmap('images/xwing.png');
    this.ship.scaleX = 0.4;
    this.ship.scaleY = 0.4;
    this.keys = {};
    this.shot = false;
    document.onkeydown = this.keydown.bind(this);
    document.onkeyup = this.keyup.bind(this);
  }

  addShip() {
    this.ship.x = this.game.canvas.width / 2 - 50;
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
    this.game.audio['tie-fighter-laser'].play();
    let bullet = new PlayerBullet(this.game);
    this.game.bullets.push(bullet);
    bullet.addBullet();
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
    if (this.keys[37] && this.outOfBoundsX1()) this.ship.x -= 10;
    if (this.keys[38] && this.outOfBoundsY1()) this.ship.y -= 10;
    if (this.keys[39] && this.outOfBoundsX2()) this.ship.x += 10;
    if (this.keys[40] && this.outOfBoundsY2()) this.ship.y += 10;

    if (this.keys[32] && this.game.ticker.getTicks() % 7 === 0) this.shoot();
  }

}

export default Ship;
