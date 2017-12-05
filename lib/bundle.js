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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
  function Game() {
    _classCallCheck(this, Game);

    this.enemies = [];
    this.bullets = [];
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
      'tie-fighter-laser': new Audio('audio/tie-fighter-laser.wav')
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
        _this2.stage.update();
      });
    }
  }, {
    key: 'moveAllBullets',
    value: function moveAllBullets() {
      this.bullets.forEach(function (bullet) {
        bullet.move();
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
      this.game.audio['tie-fighter-laser'].play();
      var bullet = new _bullet.PlayerBullet(this.game);
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

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bullet = exports.Bullet = function Bullet(game) {
  _classCallCheck(this, Bullet);

  this.game = game;
  this.bullet = new createjs.Bitmap('images/bullets/laser.png');
  this.bullet.scaleX = 0.5;
  this.bullet.scaleY = 0.5;
  this.velocityX = 0;
  this.velocityY = -15;
  this.damage = 1;
};

var PlayerBullet = exports.PlayerBullet = function (_Bullet) {
  _inherits(PlayerBullet, _Bullet);

  function PlayerBullet(game) {
    _classCallCheck(this, PlayerBullet);

    return _possibleConstructorReturn(this, (PlayerBullet.__proto__ || Object.getPrototypeOf(PlayerBullet)).call(this, game));
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

/***/ })
/******/ ]);