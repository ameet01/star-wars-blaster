const Enemy = require("./enemy");
const Bullet = require("./bullet");
const Ship = require("./ship");
const Util = require("./util");
const Explosion = require('./explosion');


class Game {
  constructor() {
    this.enemies = [];
    this.bullets = [];
    this.explosions = [];
    this.ship = new Ship({pos: [Game.DIM_X / 2, Game.DIM_Y / 2]});
  }

  wrap() {

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
