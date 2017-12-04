/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

const Game = __webpack_require__(10);
const GameView = __webpack_require__(17);

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName("canvas")[0];

  const ctx = canvas.getContext("2d");
  const game = new Game();

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  const gameView = new GameView(game, ctx);

  document.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        gameView.start();
      }
    });
});


/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

const Ship = __webpack_require__(12);
const Enemy = __webpack_require__(14);
const Bullet = __webpack_require__(15);
const Explosion = __webpack_require__(16);
const Util = __webpack_require__(11);


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


/***/ }),
/* 11 */
/***/ (function(module, exports) {

const Util = {
  // Normalize the length of the vector to 1, maintaining direction.
  dir(vec) {
    const norm = Util.norm(vec);
    return Util.scale(vec, 1 / norm);
  },
  // Find distance between two points.
  dist(pos1, pos2) {
    return Math.sqrt(
      Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
    );
  },
  // Find the length of the vector.
  norm(vec) {
    return Util.dist([0, 0], vec);
  },
  // Return a randomly oriented vector with the given length.
  randomVec(length) {
    const deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },
  // Scale the length of a vector by the given amount.
  scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },

  wrap(coord, max) {
    if (coord < 0) {
      return max - (coord % max);
    } else if (coord > max) {
      return coord % max;
    } else {
      return coord;
    }
  }
};

module.exports = Util;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(13);

class Ship extends MovingObject {
  constructor(options) {
    super(options);
    let image = new Image();
    this.image = image;
  }

  draw(ctx, size) {
    let pos = this.pos;

    this.image.src = "./images/xwing.png";
    this.image.onload = function() {
      ctx.drawImage(this, pos[0], pos[1], size + 0.5, size + 0.5);
    };
  }
}

module.exports = Ship;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

const Util = __webpack_require__(11);

const NORMAL_FRAME_TIME_DELTA = 1000 / 60;

class MovingObject {
  constructor(options) {
    this.pos = options.pos;
    this.vel = options.vel;
    this.image = options.image;
    this.radius = options.radius;
    this.game = options.game;
    this.isWrappable = true;
  }

  collideWith(otherObject) {
    // default do nothing
  }

  draw(ctx) {
  }

  isCollidedWith(otherObject) {
    const centerDist = Util.dist(this.pos, otherObject.pos);
    return centerDist < (this.radius + otherObject.radius);
  }

  move(timeDelta) {
    // timeDelta is number of milliseconds since last move
    // if the computer is busy the time delta will be larger
    // in this case the MovingObject should move farther in this frame
    // velocity of object is how far it should move in 1/60th of a second
    const velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
        offsetX = this.vel[0] * velocityScale,
        offsetY = this.vel[1] * velocityScale;

    this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];

    if (this.game.isOutOfBounds(this.pos)) {
      if (this.isWrappable) {
        this.pos = this.game.wrap(this.pos);
      } else {
        this.remove();
      }
    }
  }

  remove() {
    this.game.remove(this);
  }
}

module.exports = MovingObject;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(13);

class Enemy extends MovingObject {

}

module.exports = Enemy;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(13);

class Bullet extends MovingObject {

}

module.exports = Bullet;


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(13);

class Explosion extends MovingObject {

}

module.exports = Explosion;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

const Game =  __webpack_require__(10);

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    let outside = document.getElementById('splash');
    outside.style.display = 'none';
    this.game.ship.draw(this.ctx, 80);
  }
}

module.exports = GameView;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map