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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _ship = __webpack_require__(1);

var _ship2 = _interopRequireDefault(_ship);

var _waves = __webpack_require__(4);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.enemies = [];
    this.bullets = [];
    this.enemyBullets = [];
    this.explosions = [];
    this.ship = new _ship2.default(this);
    this.healthbar = this.ship.healthbar;
    this.canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ticker = createjs.Ticker;
    this.stage = new createjs.Stage(this.canvas);
    this.gameStarted = false;
    this.audio = {
      'tie-fighter-laser': new Audio('audio/tie-fighter-laser.wav'),
      'xwing-laser': new Audio('audio/xwing-laser.wav'),
      'explosion': new Audio('audio/explosion.wav')
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
    key: 'initializeTicker',
    value: function initializeTicker() {
      var _this2 = this;

      this.ticker.reset();
      this.ticker.init();
      this.ticker.framerate = 60;
      this.ticker.addEventListener('tick', function () {
        _this2.ship.shipEvents();
        _this2.moveAllBullets();
        _this2.fireEnemyBullets();
        _this2.moveAllEnemyBullets();
        // this.moveAllEnemies();
        _this2.stage.update();
      });
    }
  }, {
    key: 'fireEnemyBullets',
    value: function fireEnemyBullets() {
      var _this3 = this;

      this.enemies.forEach(function (enemy, index1) {
        // (function loop() {
        //   var rand = Math.round(Math.random() * (14000 - 500)) + 500;
        //   setTimeout(function() {
        //     enemy.shoot();
        //     loop();
        //   }, rand);
        // }());
        var random = Math.round(Math.random() * 300);
        if (_this3.ticker.getTicks() % random === 0) {
          enemy.shoot();
        }
      });
    }
  }, {
    key: 'moveAllEnemyBullets',
    value: function moveAllEnemyBullets() {
      this.enemyBullets.forEach(function (bullet, index1) {
        bullet.move();
      });
    }
  }, {
    key: 'moveAllEnemies',
    value: function moveAllEnemies() {
      this.enemies.forEach(function (enemy) {
        enemy.move();
      });
    }
  }, {
    key: 'moveAllBullets',
    value: function moveAllBullets() {
      var _this4 = this;

      this.bullets.forEach(function (bullet, index1) {
        bullet.move();
        _this4.enemies.forEach(function (enemy, index2) {
          if (bullet.hitEnemy(enemy)) {
            _this4.bullets.splice(index1, 1);
            if (enemy.health <= 0) {
              _this4.enemies.splice(index2, 1);
            }
          }
        });
      });
    }
  }, {
    key: 'hideOutsideText',
    value: function hideOutsideText() {
      document.querySelector('#splash').style.display = 'none';
    }
  }]);

  return Game;
}();

var game = new Game();
game.begin();

exports.default = Game;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _bullet = __webpack_require__(2);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ship = function () {
  function Ship(game) {
    _classCallCheck(this, Ship);

    this.game = game;
    this.ship = new createjs.Bitmap('images/xwing.png');
    this.ship.scaleX = 0.4;
    this.ship.scaleY = 0.4;
    this.keys = {};
    this.health = 10;
    this.shot = false;
    this.healthbar = new createjs.Shape();
    document.onkeydown = this.keydown.bind(this);
    document.onkeyup = this.keyup.bind(this);
  }

  _createClass(Ship, [{
    key: 'addShip',
    value: function addShip() {
      this.ship.x = this.game.canvas.width / 2 - 50;
      this.ship.y = this.game.canvas.height / 2 + 160;
      this.game.stage.addChild(this.ship);
      this.healthbar.graphics.beginFill('green');
      this.healthbar.graphics.drawRect(this.ship.x - 1, this.ship.y + this.ship.y * 0.17, 80, 7);
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
      this.game.audio['xwing-laser'].play();
      var bullet = new _bullet.PlayerBullet(0, -15, this.game);
      this.game.bullets.push(bullet);
      bullet.addBullet();
    }
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
    key: 'shipEvents',
    value: function shipEvents() {
      if (this.keys[37] && this.outOfBoundsX1()) {
        this.ship.x -= 10;
        this.healthbar.x -= 10;
      }
      if (this.keys[38] && this.outOfBoundsY1()) {
        this.ship.y -= 10;
        this.healthbar.y -= 10;
      }
      if (this.keys[39] && this.outOfBoundsX2()) {
        this.ship.x += 10;
        this.healthbar.x += 10;
      }
      if (this.keys[40] && this.outOfBoundsY2()) {
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TieFighterBullet = exports.PlayerBullet = exports.Bullet = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(3);

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

  function PlayerBullet(velocityX, velocityY, game) {
    _classCallCheck(this, PlayerBullet);

    var _this2 = _possibleConstructorReturn(this, (PlayerBullet.__proto__ || Object.getPrototypeOf(PlayerBullet)).call(this, velocityX, velocityY, game));

    _this2.bullet = new createjs.Bitmap('images/bullets/laser.png');
    _this2.bullet.scaleX = 0.5;
    _this2.bullet.scaleY = 0.5;
    _this2.damage = 1;
    return _this2;
  }

  _createClass(PlayerBullet, [{
    key: 'addBullet',
    value: function addBullet() {
      this.bullet.x = this.game.ship.ship.x + 29;
      this.bullet.y = this.game.ship.ship.y - 44;
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _explosion = __webpack_require__(6);

var _explosion2 = _interopRequireDefault(_explosion);

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
          (0, _explosion2.default)(enemy.enemy.x, enemy.enemy.y, this.game.stage);
          this.game.audio['explosion'].play();
          this.game.stage.removeChild(enemy.enemy);
        }
        return true;
      }
      return false;
    }
  }, {
    key: 'collideIntoPlayer',
    value: function collideIntoPlayer(ship) {
      var x = Math.abs(ship.ship.x - this.enemy.x);
      var y = Math.abs(ship.ship.y - this.enemy.y);
      if (x < 15 && y < 15) {
        this.game.stage.removeChild(ship.ship);
        return true;
      }
      return false;
    }
  }]);

  return MovingObject;
}();

exports.default = MovingObject;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.waveOne = waveOne;

var _enemy = __webpack_require__(5);

function waveOne(game) {
  var tie1 = new _enemy.TieFighter(1, 1, game);
  var tie2 = new _enemy.TieFighter(1, 1, game);
  var tie3 = new _enemy.TieFighter(1, 1, game);
  tie1.addShip(300, 50);
  tie2.addShip(700, 50);
  tie3.addShip(1100, 50);
}

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TieFighter = exports.Enemy = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _moving_object = __webpack_require__(3);

var _moving_object2 = _interopRequireDefault(_moving_object);

var _bullet = __webpack_require__(2);

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

  return Enemy;
}(_moving_object2.default);

var TieFighter = exports.TieFighter = function (_Enemy) {
  _inherits(TieFighter, _Enemy);

  function TieFighter(velocityX, velocityY, game) {
    _classCallCheck(this, TieFighter);

    var _this2 = _possibleConstructorReturn(this, (TieFighter.__proto__ || Object.getPrototypeOf(TieFighter)).call(this, velocityX, velocityY, game));

    _this2.damage = 1;
    _this2.health = 5;
    _this2.enemy = new createjs.Bitmap('images/tiefighter.png');
    return _this2;
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
      var bullet = new _bullet.TieFighterBullet((this.game.ship.ship.x - this.enemy.x) / 60, 10, this.game);
      bullet.addBullet(this.enemy.x, this.enemy.y);
    }
  }, {
    key: 'move',
    value: function move() {
      this.enemy.x += this.velocityX;
      this.enemy.y += this.velocityY;
    }
  }]);

  return TieFighter;
}(Enemy);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});


var Explosion = function Explosion(x, y, stage) {
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
  stage.addChild(animation);
  setTimeout(function () {
    stage.removeChild(animation);
  }, 1200);
};

exports.default = Explosion;

/***/ })
/******/ ]);