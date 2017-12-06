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


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TieFighterBullet = exports.PlayerBullet = exports.Bullet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(1);

var _moving_object2 = _interopRequireDefault(_moving_object);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Bullet = exports.Bullet = function (_MovingObject) {
  _inherits(Bullet, _MovingObject);

  function Bullet(velocityX, velocityY, game) {
    _classCallCheck(this, Bullet);

    return _possibleConstructorReturn(this, (Bullet.__proto__ || Object.getPrototypeOf(Bullet)).call(this, velocityX, velocityY, game));
  }

  return Bullet;
}(_moving_object2.default);

var PlayerBullet = exports.PlayerBullet = function (_Bullet) {
  _inherits(PlayerBullet, _Bullet);

  function PlayerBullet(velocityX, velocityY, x, y, game) {
    _classCallCheck(this, PlayerBullet);

    var _this2 = _possibleConstructorReturn(this, (PlayerBullet.__proto__ || Object.getPrototypeOf(PlayerBullet)).call(this, velocityX, velocityY, game));

    _this2.bullet = new createjs.Bitmap('images/bullets/laser.png');
    _this2.bullet.scaleX = 0.5;
    _this2.bullet.scaleY = 0.5;
    _this2.damage = 1;
    _this2.x = x;
    _this2.y = y;
    return _this2;
  }

  _createClass(PlayerBullet, [{
    key: 'addBullet',
    value: function addBullet() {
      this.bullet.x = this.x + 29;
      this.bullet.y = this.y - 44;
      this.game.stage.addChild(this.bullet);
    }
  }, {
    key: 'move',
    value: function move() {
      this.bullet.x += this.velocityX;
      this.bullet.y += this.velocityY;
      if (this.bullet.y <= -10) {
        this.game.stage.removeChild(this.bullet);
        this.game.bullets.splice(this.game.bullets.indexOf(this), 1);
      }
    }
  }]);

  return PlayerBullet;
}(Bullet);

var TieFighterBullet = exports.TieFighterBullet = function (_Bullet2) {
  _inherits(TieFighterBullet, _Bullet2);

  function TieFighterBullet(velocityX, velocityY, game) {
    _classCallCheck(this, TieFighterBullet);

    var _this3 = _possibleConstructorReturn(this, (TieFighterBullet.__proto__ || Object.getPrototypeOf(TieFighterBullet)).call(this, velocityX, velocityY, game));

    _this3.bullet = new createjs.Bitmap('images/bullets/tiefighterlaser.png');
    _this3.bullet.scaleX = 0.5;
    _this3.bullet.scaleY = 0.5;
    _this3.damage = 1;
    return _this3;
  }

  _createClass(TieFighterBullet, [{
    key: 'addBullet',
    value: function addBullet(x, y) {
      this.bullet.x = x + 45;
      this.bullet.y = y + 53;
      this.game.enemyBullets.push(this);
      this.game.stage.addChild(this.bullet);
    }
  }, {
    key: 'move',
    value: function move() {
      this.bullet.x += this.velocityX;
      this.bullet.y += this.velocityY;
      if (this.bullet.y >= window.innerHeight) {
        this.game.stage.removeChild(this.bullet);
        this.game.enemyBullets.splice(this.game.enemyBullets.indexOf(this), 1);
      }
    }
  }]);

  return TieFighterBullet;
}(Bullet);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _explosion = __webpack_require__(4);

var _powerup = __webpack_require__(5);

var _powerup2 = _interopRequireDefault(_powerup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var MovingObject = function () {
  function MovingObject(velocityX, velocityY, game) {
    _classCallCheck(this, MovingObject);

    this.game = game;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  _createClass(MovingObject, [{
    key: 'hitEnemy',
    value: function hitEnemy(enemy) {
      var x = Math.abs(this.bullet.x - enemy.enemy.x);
      var y = Math.abs(this.bullet.y - enemy.enemy.y);
      if (x < enemy.enemy.image.width && y < enemy.enemy.image.height - 35) {
        this.game.stage.removeChild(this.bullet);
        enemy.health -= this.damage;
        if (enemy.health <= 0) {
          (0, _explosion.Explosion)(enemy.enemy.x, enemy.enemy.y, this.game);
          this.game.audio['explosion'].play();
          this.game.stage.removeChild(enemy.enemy);
          this.game.score += 1;
          this.dropPowerUp(enemy);

          var random = Math.random();
          if (random < 0.6) {
            var num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
            this.game.audio['r' + num].play();
          }
        }
        return true;
      }
      return false;
    }
  }, {
    key: 'dropPowerUp',
    value: function dropPowerUp(enemy) {
      var random = Math.random();
      if (random < .15) {
        var powerup = new _powerup2.default(0, 3, enemy.enemy.x, enemy.enemy.y, this.game);
        this.game.powerups.push(powerup);
        this.game.stage.addChild(powerup.powerup);
      }
    }
  }, {
    key: 'collideIntoPlayer',
    value: function collideIntoPlayer(ship) {
      var x = Math.abs(ship.ship.x + 30 - this.bullet.x);
      var y = Math.abs(ship.ship.y + 20 - this.bullet.y);
      if (x < 40 && y < 40) {
        ship.health -= this.damage;
        (0, _explosion.ShipHit)(ship.ship.x, ship.ship.y, this.game.stage);
        this.game.stage.removeChild(this.bullet);
        if (ship.health <= 0) {
          (0, _explosion.Explosion)(ship.ship.x, ship.ship.y, this.game);
          this.game.audio['explosion'].play();
          this.game.stage.removeChild(ship.ship);
          this.game.stage.removeChild(ship.healthbar);
        }
        return true;
      }
      return false;
    }
  }, {
    key: 'enemyCollideIntoPlayer',
    value: function enemyCollideIntoPlayer(ship) {
      var x = Math.abs(ship.ship.x + 30 - this.enemy.x);
      var y = Math.abs(ship.ship.y + 20 - this.enemy.y);
      if (x < 100 && y < 100) {
        this.game.stage.removeChild(this.enemy);
        (0, _explosion.Explosion)(this.enemy.x, this.enemy.y, this.game);
        ship.health = 0;
        if (ship.health <= 0) {
          (0, _explosion.Explosion)(ship.ship.x, ship.ship.y, this.game);
          this.game.audio['explosion'].play();
          this.game.stage.removeChild(ship.ship);
          this.game.stage.removeChild(ship.healthbar);
        }
        return true;
      }
      return false;
    }
  }]);

  return MovingObject;
}();

exports.default = MovingObject;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ship = __webpack_require__(3);

var _ship2 = _interopRequireDefault(_ship);

var _waves = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.enemies = [];
    this.bullets = [];
    this.enemyBullets = [];
    this.explosions = [];
    this.powerups = [];
    this.ship = new _ship2.default(this);
    this.healthbar = this.ship.healthbar;
    this.canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ticker = createjs.Ticker;
    this.stage = new createjs.Stage(this.canvas);
    this.gameStarted = false;
    this.score = 0;
    this.paused = false;
    this.audio = {
      'tie-fighter-laser': new Audio('audio/tiefighter/tie-fighter-laser.wav'),
      'xwing-laser': new Audio('audio/xwing-laser.wav'),
      'explosion': new Audio('audio/explosion.wav'),
      'r1': new Audio('audio/r2d2/1.wav'),
      'r2': new Audio('audio/r2d2/2.wav'),
      'r3': new Audio('audio/r2d2/3.wav'),
      'r4': new Audio('audio/r2d2/4.wav'),
      'r5': new Audio('audio/r2d2/5.wav'),
      'r6': new Audio('audio/r2d2/6.wav'),
      'tie1': new Audio('audio/tiefighter/move1.wav'),
      'tie2': new Audio('audio/tiefighter/move2.wav'),
      'tie3': new Audio('audio/tiefighter/move3.wav'),
      'tie4': new Audio('audio/tiefighter/move4.wav')
    };
  }

  _createClass(Game, [{
    key: 'begin',
    value: function begin() {
      var _this = this;

      document.addEventListener('DOMContentLoaded', function () {
        $(document).keypress(function (e) {
          if (e.which == 13 && _this.gameStarted === false) {
            _this.gameStarted = true;
            _this.play();
          }
        });

        window.addEventListener('keydown', function (e) {
          var key = e.keyCode;
          if (key === 27) {
            _this.togglePause();
          }
        });
      });
    }
  }, {
    key: 'play',
    value: function play() {
      this.hideOutsideText();
      this.ship.addShip();
      this.initializeTicker();
      (0, _waves.waveOne)(this);
    }
  }, {
    key: 'displayScores',
    value: function displayScores() {
      var score = document.getElementById('score');
      score.innerHTML = 'Score: ' + this.score;
    }
  }, {
    key: 'initializeTicker',
    value: function initializeTicker() {
      var _this2 = this;

      this.ticker.reset();
      this.ticker.init();
      this.ticker.framerate = 60;
      this.ticker.addEventListener('tick', function () {
        if (!_this2.paused) {
          _this2.ship.shipEvents();
          _this2.moveAllBullets();
          _this2.displayScores();
          _this2.movePowerUps();
          _this2.fireEnemyBullets();
          _this2.moveAllEnemyBullets();
          _this2.moveAllEnemies();
          _this2.stage.update();
        }
      });
    }
  }, {
    key: 'movePowerUps',
    value: function movePowerUps() {
      this.powerups.forEach(function (powerup, index1) {
        powerup.move();
      });
    }
  }, {
    key: 'fireEnemyBullets',
    value: function fireEnemyBullets() {
      var _this3 = this;

      this.enemies.forEach(function (enemy, index1) {
        var random = Math.round(Math.random() * 310);
        if (_this3.ticker.getTicks() % random === 0) {
          enemy.shoot();
        }
      });
    }
  }, {
    key: 'moveAllEnemyBullets',
    value: function moveAllEnemyBullets() {
      var _this4 = this;

      this.enemyBullets.forEach(function (bullet, index1) {
        bullet.move();
        if (bullet.collideIntoPlayer(_this4.ship)) {
          _this4.enemyBullets.splice(index1, 1);
          if (_this4.ship.health <= 0) {
            setTimeout(function () {
              _this4.reset();
            }, 1500);
          }
        }
      });
    }
  }, {
    key: 'moveAllEnemies',
    value: function moveAllEnemies() {
      var _this5 = this;

      this.enemies.forEach(function (enemy, index) {
        if (enemy.typeofmove === 'straight') {
          enemy.move();
        } else if (enemy.typeofmove === 'ease') {
          enemy.movedown(110);
        }

        if (enemy.enemyCollideIntoPlayer(_this5.ship)) {
          _this5.enemies.splice(index, 1);
          setTimeout(function () {
            _this5.reset();
          }, 1500);
        }
      });
    }
  }, {
    key: 'moveAllBullets',
    value: function moveAllBullets() {
      var _this6 = this;

      this.bullets.forEach(function (bullet, index1) {
        bullet.move();
        _this6.enemies.forEach(function (enemy, index2) {
          if (bullet.hitEnemy(enemy)) {
            _this6.bullets.splice(index1, 1);
            if (enemy.health <= 0) {
              _this6.enemies.splice(index2, 1);
            }
          }
        });
      });
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      if (!this.paused) {
        this.paused = true;
      } else if (this.paused) {
        this.paused = false;
      }
    }
  }, {
    key: 'hideOutsideText',
    value: function hideOutsideText() {
      document.querySelector('#splash').style.display = 'none';
    }
  }, {
    key: 'displayOutsideText',
    value: function displayOutsideText() {
      document.querySelector('#splash').style.display = 'block';
    }
  }, {
    key: 'reset',
    value: function reset() {
      this.enemies = [];
      this.bullets = [];
      this.enemyBullets = [];
      this.explosions = [];
      this.powerups = [];
      this.gameStarted = false;
      this.ship = new _ship2.default(this);
      this.canvas = document.getElementById('canvas');
      this.healthbar = this.ship.healthbar;
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      this.stage = new createjs.Stage(this.canvas);
      this.ticker = createjs.Ticker;
      this.score = 0;
      this.displayOutsideText();
    }
  }]);

  return Game;
}();

var game = new Game();
game.begin();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bullet = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ship = function () {
  function Ship(game) {
    _classCallCheck(this, Ship);

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

  _createClass(Ship, [{
    key: 'addShip',
    value: function addShip() {
      this.ship.x = this.game.canvas.width / 2 - 60;
      this.ship.y = this.game.canvas.height / 2 + 160;
      this.game.stage.addChild(this.ship);
      this.healthbar.graphics.beginFill('green');
      this.healthbar.graphics.drawRect(this.ship.x - 1, this.ship.y + this.ship.y * 0.15, 80, 7);
      this.healthbar.graphics.endFill();
      this.game.stage.addChild(this.healthbar);
    }
  }, {
    key: 'keydown',
    value: function keydown(event) {
      this.keys[event.keyCode] = true;
    }
  }, {
    key: 'keyup',
    value: function keyup(event) {
      delete this.keys[event.keyCode];
    }
  }, {
    key: 'shoot',
    value: function shoot() {
      if (this.power === 0) {
        this.redshot1();
      } else if (this.power === 1) {
        this.redshot2();
      } else if (this.power === 2) {
        this.redshot3();
      }
    }
  }, {
    key: 'redshot1',
    value: function redshot1() {
      this.game.audio['xwing-laser'].play();
      var bullet = new _bullet.PlayerBullet(0, -18, this.ship.x, this.ship.y, this.game);
      this.game.bullets.push(bullet);
      bullet.addBullet();
    }
  }, {
    key: 'redshot2',
    value: function redshot2() {
      this.game.audio['xwing-laser'].play();
      var bullet1 = new _bullet.PlayerBullet(0, -40, this.ship.x - 30, this.ship.y + 20, this.game);
      var bullet2 = new _bullet.PlayerBullet(0, -40, this.ship.x + 30, this.ship.y + 20, this.game);
      this.game.bullets.push(bullet1);
      this.game.bullets.push(bullet2);
      bullet1.addBullet();
      bullet2.addBullet();
    }
  }, {
    key: 'redshot3',
    value: function redshot3() {
      this.game.audio['xwing-laser'].play();
      var bullet1 = new _bullet.PlayerBullet(0, -40, this.ship.x - 20, this.ship.y + 20, this.game);
      var bullet2 = new _bullet.PlayerBullet(0, -40, this.ship.x + 20, this.ship.y + 20, this.game);
      var bullet3 = new _bullet.PlayerBullet(-4, -40, this.ship.x - 40, this.ship.y + 20, this.game);
      var bullet4 = new _bullet.PlayerBullet(4, -40, this.ship.x + 40, this.ship.y + 20, this.game);
      this.game.bullets.push(bullet1);
      this.game.bullets.push(bullet2);
      this.game.bullets.push(bullet3);
      this.game.bullets.push(bullet4);
      bullet1.addBullet();
      bullet2.addBullet();
      bullet3.addBullet();
      bullet4.addBullet();
    }
  }, {
    key: 'bomb',
    value: function bomb() {}
  }, {
    key: 'outOfBoundsX1',
    value: function outOfBoundsX1() {
      if (this.ship.x <= 10) {
        return false;
      }
      return true;
    }
  }, {
    key: 'outOfBoundsX2',
    value: function outOfBoundsX2() {
      if (this.ship.x >= window.innerWidth * .94) {
        return false;
      }
      return true;
    }
  }, {
    key: 'outOfBoundsY1',
    value: function outOfBoundsY1() {
      if (this.ship.y <= 10) {
        return false;
      }
      return true;
    }
  }, {
    key: 'outOfBoundsY2',
    value: function outOfBoundsY2() {
      if (this.ship.y >= window.innerHeight * .87) {
        return false;
      }
      return true;
    }
  }, {
    key: 'alive',
    value: function alive() {
      return this.health !== 0;
    }
  }, {
    key: 'shipEvents',
    value: function shipEvents() {
      if (this.keys[37] && this.outOfBoundsX1() && this.alive()) {
        this.ship.x -= 10;
        this.healthbar.x -= 10;
      }
      if (this.keys[38] && this.outOfBoundsY1() && this.alive()) {
        this.ship.y -= 10;
        this.healthbar.y -= 10;
      }
      if (this.keys[39] && this.outOfBoundsX2() && this.alive()) {
        this.ship.x += 10;
        this.healthbar.x += 10;
      }
      if (this.keys[40] && this.outOfBoundsY2() && this.alive()) {
        this.ship.y += 10;
        this.healthbar.y += 10;
      }
      if (this.keys[32] && this.game.ticker.getTicks() % 7 === 0) {
        this.shoot();
      }
    }
  }]);

  return Ship;
}();

exports.default = Ship;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Explosion = exports.Explosion = function Explosion(x, y, game) {
  var img = new Image();
  img.src = 'images/explosion.png';

  var data = {
    framerate: 60,
    images: [img],
    frames: { width: 100, height: 100, regX: 32, regY: 32 },
    animations: {
      'explode': [0, 73]
    }
  };

  var spritesheet = new createjs.SpriteSheet(data);
  var animation = new createjs.Sprite(spritesheet, 'explode');
  animation.x = x + 50;
  animation.y = y + 50;
  game.stage.addChild(animation);
  setTimeout(function () {
    game.stage.removeChild(animation);
  }, 1200);
};

var ShipHit = exports.ShipHit = function ShipHit(x, y, game) {
  var img = new Image();
  img.src = 'images/explosion.png';

  var data = {
    framerate: 60,
    images: [img],
    frames: { width: 100, height: 100, regX: 32, regY: 32 },
    animations: {
      'explode': [50, 57]
    }
  };

  var spritesheet = new createjs.SpriteSheet(data);
  var animation = new createjs.Sprite(spritesheet, 'explode');
  animation.x = x + 50;
  animation.y = y + 50;
  game.stage.addChild(animation);
  console.log(spritesheet);
  setTimeout(function () {
    game.stage.removeChild(animation);
  }, 100);
};

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PowerUp = function () {
  function PowerUp(velx, vely, x, y, game) {
    _classCallCheck(this, PowerUp);

    this.value = 1;
    this.game = game;
    this.powerup = new createjs.Bitmap('images/redcube1.png');
    this.powerup.scaleX = 0.1;
    this.powerup.scaleY = 0.1;
    this.powerup.x = x + 15;
    this.powerup.y = y;
    this.velocity_x = velx;
    this.velocity_y = vely;
  }

  _createClass(PowerUp, [{
    key: 'move',
    value: function move() {
      this.powerup.x += this.velocity_x;
      this.powerup.y += this.velocity_y;
      this.checkPickUp();
    }
  }, {
    key: 'checkPickUp',
    value: function checkPickUp() {
      var x = Math.abs(this.game.ship.ship.x - this.powerup.x);
      var y = Math.abs(this.game.ship.ship.y - this.powerup.y);
      if (x < 35 && y < 35) {
        this.game.stage.removeChild(this.powerup);
        this.game.powerups.splice(this.game.powerups.indexOf(this), 1);
        if (this.game.ship.power < 2) {
          this.game.ship.power += 1;
        }
      }
    }
  }]);

  return PowerUp;
}();

exports.default = PowerUp;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waveOne = waveOne;
exports.waveTwo = waveTwo;
exports.waveThree = waveThree;
exports.Boss = Boss;

var _enemy = __webpack_require__(7);

function waveOne(game) {
  setTimeout(function () {
    var tie1 = new _enemy.TieFighter(10, 5, game, 'ease');
    var tie2 = new _enemy.TieFighter(10, 5, game, 'ease');
    var tie3 = new _enemy.TieFighter(10, 5, game, 'ease');
    tie1.addShip(window.innerWidth * .22, -100);
    game.audio['tie3'].play();
    setTimeout(function () {
      return tie2.addShip(window.innerWidth * .44, -100);
    }, 300);
    setTimeout(function () {
      return tie3.addShip(window.innerWidth * .66, -100);
    }, 600);
  }, 2000);

  setTimeout(function () {
    var tie1 = new _enemy.TieFighter(0, 0, game, 'ease');
    var tie2 = new _enemy.TieFighter(0, 0, game, 'ease');
    var tie3 = new _enemy.TieFighter(0, 0, game, 'ease');
    var tie4 = new _enemy.TieFighter(0, 0, game, 'ease');
    var tie5 = new _enemy.TieFighter(0, 0, game, 'ease');
    tie1.addShip(window.innerWidth * .06, -100);
    tie2.addShip(window.innerWidth * .26, -100);
    tie3.addShip(window.innerWidth * .46, -100);
    tie4.addShip(window.innerWidth * .66, -100);
    tie5.addShip(window.innerWidth * .86, -100);
  }, 9000);

  setTimeout(function () {
    var tie1 = new _enemy.TieFighter(0, 0, game, 'ease');
    var tie2 = new _enemy.TieFighter(0, 0, game, 'ease');
    var tie3 = new _enemy.TieFighter(0, 0, game, 'ease');
    tie1.addShip(window.innerWidth * .22, -100);
    tie2.addShip(window.innerWidth * .44, -100);
    tie3.addShip(window.innerWidth * .66, -100);
  }, 16000);
}

function waveTwo(game) {
  var tie1 = new _enemy.TieFighter(0, 0, game, 'straight');
  var tie2 = new _enemy.TieFighter(0, 0, game, 'straight');
  var tie3 = new _enemy.TieFighter(0, 0, game, 'straight');
  tie1.addShip(300, 50);
  tie2.addShip(700, 50);
  tie3.addShip(1100, 50);
}

function waveThree(game) {}

function Boss(game) {}

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TieFighter = exports.Enemy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(1);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _bullet = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Enemy = exports.Enemy = function (_MovingObject) {
  _inherits(Enemy, _MovingObject);

  function Enemy(velocityX, velocityY, game) {
    _classCallCheck(this, Enemy);

    return _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, velocityX, velocityY, game));
  }

  _createClass(Enemy, [{
    key: 'movedown',
    value: function movedown(y) {
      var _this2 = this;

      if (this.tweening === false) {
        this.tweening = 'charging';
        createjs.Tween.get(this.enemy, { useTicks: true, override: true }).wait(5).to({ y: y }, 60, createjs.Ease.backOut).call(function () {
          _this2.shooting = true;
        });
        // .to({x: this.enemy.x+200}, 90)
        // .to({x: this.enemy.x-200}, 90)
        // .to({x: this.enemy.x+200}, 90)
        // .to({x: this.enemy.x-200}, 90);
      }
      var tieRandom = Math.random();
      if (tieRandom < this.game.enemies.length * 0.002) {
        var num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        this.game.audio['tie' + num].play();
      }
    }
  }]);

  return Enemy;
}(_moving_object2.default);

var TieFighter = exports.TieFighter = function (_Enemy) {
  _inherits(TieFighter, _Enemy);

  function TieFighter(velocityX, velocityY, game, typeofmove) {
    _classCallCheck(this, TieFighter);

    var _this3 = _possibleConstructorReturn(this, (TieFighter.__proto__ || Object.getPrototypeOf(TieFighter)).call(this, velocityX, velocityY, game));

    _this3.damage = 1;
    _this3.health = 5;
    _this3.enemy = new createjs.Bitmap('images/tiefighter.png');
    _this3.tweening = false;
    _this3.shooting = false;
    _this3.typeofmove = typeofmove;
    return _this3;
  }

  _createClass(TieFighter, [{
    key: 'addShip',
    value: function addShip(x, y) {
      this.enemy.x = x;
      this.enemy.y = y;
      this.game.enemies.push(this);
      this.game.stage.addChild(this.enemy);
    }
  }, {
    key: 'shoot',
    value: function shoot() {
      if (this.shooting === true) {
        var random = Math.random();
        if (random < .5) this.game.audio['tie-fighter-laser'].play();
        var bullet = new _bullet.TieFighterBullet((this.game.ship.ship.x - this.enemy.x) / 60, (this.game.ship.ship.y - this.enemy.y) / 60, this.game);
        bullet.addBullet(this.enemy.x, this.enemy.y);
      }
    }
  }, {
    key: 'move',
    value: function move() {
      this.enemy.x += this.velocityX;
      this.enemy.y += this.velocityY;

      var tieRandom = Math.random();
      if (tieRandom < 0.003) {
        var num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        this.game.audio['tie' + num].play();
      }
    }
  }]);

  return TieFighter;
}(Enemy);

/***/ })
/******/ ]);