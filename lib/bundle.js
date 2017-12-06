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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovingObject = __webpack_require__(1);

var Bullet = function (_MovingObject) {
  _inherits(Bullet, _MovingObject);

  function Bullet(options) {
    _classCallCheck(this, Bullet);

    var _this = _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, options));

    _this.image = new Image();
    _this.game.bullets.push(_this);
    return _this;
  }

  _createClass(Bullet, [{
    key: "draw",
    value: function draw(ctx) {
      var pos = this.pos;
      var size = this.size;
      var image = this.image;
      image.src = "./images/bullets/laser.png";

      image.onload = function () {
        ctx.drawImage(image, pos[0] - 9, pos[1] - 45, image.width * 0.4, image.height * 0.4);
      };
    }
  }]);

  return Bullet;
}(MovingObject);

module.exports = Bullet;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Util = __webpack_require__(8);

var NORMAL_FRAME_TIME_DELTA = 1000 / 60;

var MovingObject = function () {
  function MovingObject(options) {
    _classCallCheck(this, MovingObject);

    this.pos = options.pos;
    this.type = options.type;
    this.vel = options.vel;
    this.image = options.image;
    this.radius = options.radius;
    this.game = options.game;
    this.isWrappable = true;
  }

  _createClass(MovingObject, [{
    key: "collideWith",
    value: function collideWith(otherObject) {
      // default do nothing
    }
  }, {
    key: "isCollidedWith",
    value: function isCollidedWith(otherObject) {
      var centerDist = Util.dist(this.pos, otherObject.pos);
      return centerDist < this.radius + otherObject.radius;
    }
  }, {
    key: "move",
    value: function move(timeDelta) {
      // timeDelta is number of milliseconds since last move
      // if the computer is busy the time delta will be larger
      // in this case the MovingObject should move farther in this frame
      // velocity of object is how far it should move in 1/60th of a second
      var velocityScale = timeDelta / NORMAL_FRAME_TIME_DELTA,
          offsetX = this.vel[0] * velocityScale,
          offsetY = this.vel[1] * velocityScale;

      this.pos = [this.pos[0] + offsetX, this.pos[1] + offsetY];
      if (this.game.isOutOfBounds(this.pos) && this.type !== 'ship') {
        // if (this.isWrappable) {
        //   this.pos = this.game.wrap(this.pos);
        // } else {
        this.remove();
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      this.game.remove(this);
    }
  }]);

  return MovingObject;
}();

module.exports = MovingObject;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ship = __webpack_require__(3);
var Enemy = __webpack_require__(7);
var Bullet = __webpack_require__(0);
var Explosion = __webpack_require__(4);
var Util = __webpack_require__(8);

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.enemies = [];
    this.bullets = [];
    this.explosions = [];
    this.ship = new Ship({ pos: [Game.DIM_X / 2, Game.DIM_Y / 2], game: this, type: 'ship' });
  }

  // wrap(pos) {
  //   return [
  //     Util.wrap(pos[0], Game.DIM_X), Util.wrap(pos[1], Game.DIM_Y)
  //   ];
  // }

  _createClass(Game, [{
    key: "isOutOfBounds",
    value: function isOutOfBounds(pos) {
      return pos[0] < 0 || pos[1] < 0 || pos[0] > Game.DIM_X || pos[1] > Game.DIM_Y;
    }
  }, {
    key: "remove",
    value: function remove(object) {
      if (object instanceof Bullet) {
        this.bullets.splice(this.bullets.indexOf(object), 1);
      } else if (object instanceof Enemy) {
        this.enemies.splice(this.enemies.indexOf(object), 1);
      } else if (object instanceof Explosion) {
        this.explosions.splice(this.explosions.indexOf(object), 1);
      } else if (object instanceof Ship) {
        this.ship = [];
      } else {
        throw new Error("unknown type of object");
      }
    }
  }, {
    key: "step",
    value: function step(delta) {
      this.moveObjects(delta);
      this.checkCollisions();
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      this.allObjects().forEach(function (object) {
        object.draw(ctx);
      });
    }
  }, {
    key: "moveObjects",
    value: function moveObjects(delta) {
      this.allObjects().forEach(function (object) {
        object.move(delta);
      });
    }
  }, {
    key: "checkCollisions",
    value: function checkCollisions() {
      var allObjects = this.allObjects();
      for (var i = 0; i < allObjects.length; i++) {
        for (var j = 0; j < allObjects.length; j++) {
          var obj1 = allObjects[i];
          var obj2 = allObjects[j];

          if (obj1.isCollidedWith(obj2)) {
            var collision = obj1.collideWith(obj2);
            if (collision) return;
          }
        }
      }
    }
  }, {
    key: "allObjects",
    value: function allObjects() {
      return [this.ship].concat(this.enemies, this.bullets, this.explosions);
    }
  }]);

  return Game;
}();

Game.DIM_X = window.innerWidth - 100;
Game.DIM_Y = window.innerHeight - 70;
Game.FPS = 32;
Game.NUM_ENEMIES = 2;

module.exports = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovingObject = __webpack_require__(1);
var Bullet = __webpack_require__(0);

var Ship = function (_MovingObject) {
  _inherits(Ship, _MovingObject);

  function Ship(options) {
    _classCallCheck(this, Ship);

    options.radius = Ship.RADIUS;
    options.vel = options.vel || [0, 0];

    var _this = _possibleConstructorReturn(this, (Ship.__proto__ || Object.getPrototypeOf(Ship)).call(this, options));

    _this.image = new Image();
    _this.size = 80;
    return _this;
  }

  _createClass(Ship, [{
    key: "shoot",
    value: function shoot(ctx) {
      var pos = this.pos;
      var vel = [0, -10];
      var type = 'bullet';
      var bullet = new Bullet({ pos: pos, vel: vel, game: this.game, type: type });
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var pos = this.pos;
      var size = this.size;
      var image = this.image;
      image.src = "./images/xwing.png";

      image.onload = function () {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var canv = document.createElement('canvas');
        var context = canv.getContext('2d');

        canv.width = image.width;
        canv.height = image.height;
        context.translate(image.width / 2, image.height / 2);
        context.drawImage(image, -(image.width / 2), -(image.height / 2));

        ctx.drawImage(canv, pos[0] - size / 2, pos[1] - size / 2, size, size);
      };
    }
  }, {
    key: "power",
    value: function power(impulse) {
      this.vel[0] += impulse[0];
      this.vel[1] += impulse[1];
    }
  }]);

  return Ship;
}(MovingObject);

Ship.RADIUS = 15;
module.exports = Ship;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovingObject = __webpack_require__(1);

var Explosion = function (_MovingObject) {
  _inherits(Explosion, _MovingObject);

  function Explosion() {
    _classCallCheck(this, Explosion);

    return _possibleConstructorReturn(this, (Explosion.__proto__ || Object.getPrototypeOf(Explosion)).apply(this, arguments));
  }

  return Explosion;
}(MovingObject);

module.exports = Explosion;

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MovingObject = __webpack_require__(1);

var Enemy = function (_MovingObject) {
  _inherits(Enemy, _MovingObject);

  function Enemy() {
    _classCallCheck(this, Enemy);

    return _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).apply(this, arguments));
  }

  return Enemy;
}(MovingObject);

module.exports = Enemy;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Util = {
  // Normalize the length of the vector to 1, maintaining direction.
  dir: function dir(vec) {
    var norm = Util.norm(vec);
    return Util.scale(vec, 1 / norm);
  },

  // Find distance between two points.
  dist: function dist(pos1, pos2) {
    return Math.sqrt(Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2));
  },

  // Find the length of the vector.
  norm: function norm(vec) {
    return Util.dist([0, 0], vec);
  },

  // Return a randomly oriented vector with the given length.
  randomVec: function randomVec(length) {
    var deg = 2 * Math.PI * Math.random();
    return Util.scale([Math.sin(deg), Math.cos(deg)], length);
  },

  // Scale the length of a vector by the given amount.
  scale: function scale(vec, m) {
    return [vec[0] * m, vec[1] * m];
  },
  wrap: function wrap(coord, max) {
    if (coord < 0) {
      return max - coord % max;
    } else if (coord > max) {
      return coord % max;
    } else {
      return coord;
    }
  }
};

module.exports = Util;

/***/ })
/******/ ]);