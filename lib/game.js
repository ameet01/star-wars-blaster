const Enemy = require("./enemy");
const Bullet = require("./bullet");
const Ship = require("./ship");
const Util = require("./util");
const Explosion = require('./explosion');


class Game {
  constructor() {
    this.enemies = [];
    this.ships = [];
    this.bullets = [];
  }
}

Game.BG_COLOR = "#000000";
Game.DIM_X = window.innerWidth;
Game.DIM_Y = window.innerHeight;
Game.FPS = 32;
Game.NUM_ENEMIES = 2;

module.exports = Game;
