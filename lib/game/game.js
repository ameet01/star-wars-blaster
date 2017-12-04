const Ship = require("../objects/ship");
const Enemy = require("../objects/enemy");
const Bullet = require("../objects/bullet");
const Explosion = require('../objects/explosion');
const Util = require("./util");


class Game {
  constructor() {
    this.enemies = [];
    this.bullets = [];
    this.explosions = [];
    this.ship = new Ship({pos: [Game.DIM_X / 2, Game.DIM_Y / 2]});
  }

  wrap(pos) {
    return [
      Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
    ];
  }

  remove(object) {
    if (object instanceof Bullet) {
      this.bullets.splice(this.bullets.indexOf(object), 1);
    } else if (object instanceof Enemy) {
      this.enemies.splice(this.enemies.indexOf(object), 1);
    } else if (object instanceof Explosion) {
      this.explosions.splice(this.explosions.indexOf(object), 1);
    } else {
      throw new Error("unknown type of object");
    }
  }

  allObjects() {
    return (this.ship.concat(this.enemies, this.bullets, this.explosions));
  }
}

Game.DIM_X = window.innerWidth - 100;
Game.DIM_Y = window.innerHeight - 70;
Game.FPS = 32;
Game.NUM_ENEMIES = 2;



module.exports = Game;
