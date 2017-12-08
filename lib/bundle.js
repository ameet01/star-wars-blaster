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
exports.SpiralBullet = exports.TieFighterBullet = exports.PlayerBullet = exports.Bullet = undefined;

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

    if (_this2.game.ship.ship.image.currentSrc.includes('falcon')) {
      _this2.bullet = new createjs.Bitmap('images/bullets/falconlaser.png');
    } else {
      _this2.bullet = new createjs.Bitmap('images/bullets/laser.png');
    }
    _this2.bullet.scaleX = 0.5;
    _this2.bullet.scaleY = 0.5;
    _this2.active = true;
    _this2.damage = 1;
    _this2.x = x;
    _this2.y = y;
    return _this2;
  }

  _createClass(PlayerBullet, [{
    key: 'addBullet',
    value: function addBullet() {
      if (this.game.ship.ship.image.currentSrc.includes('falcon')) {
        this.bullet.x = this.x + 33;
        this.bullet.y = this.y - 18;
      } else {
        this.bullet.x = this.x + 29;
        this.bullet.y = this.y - 44;
      }
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

var SpiralBullet = exports.SpiralBullet = function (_Bullet3) {
  _inherits(SpiralBullet, _Bullet3);

  function SpiralBullet(velocityX, velocityY, game) {
    _classCallCheck(this, SpiralBullet);

    var _this4 = _possibleConstructorReturn(this, (SpiralBullet.__proto__ || Object.getPrototypeOf(SpiralBullet)).call(this, velocityX, velocityY, game));

    _this4.bullet = new createjs.Bitmap('images/bullets/blueball.png');
    _this4.bullet.scaleX = 1.1;
    _this4.bullet.scaleY = 1.1;
    _this4.damage = 1;
    return _this4;
  }

  _createClass(SpiralBullet, [{
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
      if (this.bullet.x >= window.innerWidth) {
        this.game.stage.removeChild(this.bullet);
        this.game.enemyBullets.splice(this.game.enemyBullets.indexOf(this), 1);
      }
      if (this.bullet.y <= 0) {
        this.game.stage.removeChild(this.bullet);
        this.game.enemyBullets.splice(this.game.enemyBullets.indexOf(this), 1);
      }
      if (this.bullet.x <= 0) {
        this.game.stage.removeChild(this.bullet);
        this.game.enemyBullets.splice(this.game.enemyBullets.indexOf(this), 1);
      }
    }
  }]);

  return SpiralBullet;
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
      var _this = this;

      var x = Math.abs(this.bullet.x - enemy.enemy.x);
      var y = Math.abs(this.bullet.y - enemy.enemy.y);
      if (enemy.constructor.name === 'DeathStar') {
        if (x < 200 && y < 200 && enemy.tweening === true && this.active === true) {
          this.game.stage.removeChild(this.bullet);
          enemy.health -= this.damage;
          (0, _explosion.ShipHit)(enemy.enemy.x - 25, enemy.enemy.y, this.game.stage);
          if (enemy.health <= 0) {
            (0, _explosion.Explosion)(enemy.enemy.x, enemy.enemy.y, this.game);
            this.game.audio['explosion'].play();
            this.game.stage.removeChild(enemy.enemy);
            this.game.score += 10;

            var random = Math.random();
            if (random < 0.05) {
              var num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
              this.game.audio['r' + num].play();
            }
            setTimeout(function () {
              _this.game.reset();
              $('#press-enter').attr('src', './images/youwin.png');
              $('#ship-select').css('display', 'none');
              setTimeout(function () {
                $('#ship-select').css('display', 'flex');
              }, 2000);
            }, 2000);
          }
          return true;
        }
        return false;
      } else if (enemy.constructor.name === 'TieFighter') {
        if (x < enemy.enemy.image.width && y < enemy.enemy.image.height - 35 && enemy.tweening === true && this.active === true) {
          this.game.stage.removeChild(this.bullet);
          enemy.health -= this.damage;
          (0, _explosion.ShipHit)(enemy.enemy.x - 25, enemy.enemy.y, this.game.stage);
          if (enemy.health <= 0) {
            (0, _explosion.Explosion)(enemy.enemy.x, enemy.enemy.y, this.game);
            this.game.audio['explosion'].play();
            this.game.stage.removeChild(enemy.enemy);
            this.game.score += 1;
            this.dropPowerUp(enemy);

            var _random = Math.random();
            if (_random < 0.6) {
              var _num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
              this.game.audio['r' + _num].play();
            }
          }
          return true;
        }
        return false;
      }
    }
  }, {
    key: 'dropPowerUp',
    value: function dropPowerUp(enemy) {
      var _this2 = this;

      var random = Math.random();
      if (random < .30 && this.game.powerupCooldown === false) {
        var powerup = new _powerup2.default(0, 3, enemy.enemy.x, enemy.enemy.y, this.game);
        this.game.powerupCooldown = true;
        this.game.powerups.push(powerup);
        this.game.stage.addChild(powerup.powerup);
        setTimeout(function () {
          _this2.game.powerupCooldown = false;
        }, 8000);
      }
    }
  }, {
    key: 'collideIntoPlayer',
    value: function collideIntoPlayer(ship) {
      var x = Math.abs(ship.ship.x + 30 - this.bullet.x);
      var y = Math.abs(ship.ship.y + 20 - this.bullet.y);
      if (x < 40 && y < 40) {
        ship.health -= this.damage;
        (0, _explosion.ShipHit)(ship.ship.x - 25, ship.ship.y, this.game.stage);
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
        this.health -= 5;
        if (this.health <= 0) {
          this.game.stage.removeChild(this.enemy);
          (0, _explosion.Explosion)(this.enemy.x, this.enemy.y, this.game);
        }
        ship.health = 0;
        if (ship.health <= 0) {
          (0, _explosion.Explosion)(ship.ship.x, ship.ship.y, this.game);
          this.game.audio['explosion'].play();
          this.game.stage.removeChild(ship.ship);
          this.game.ship.ship = "";
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
    this.timeouts = [];
    this.ship = new _ship2.default(this);
    this.canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ticker = createjs.Ticker;
    this.stage = new createjs.Stage(this.canvas);
    this.gameStarted = false;
    this.score = 0;
    this.paused = false;
    this.muted = false;
    this.powerupCooldown = false;
    this.lightsaber = $('#lightmain');
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
      'tie4': new Audio('audio/tiefighter/move4.wav'),
      'imperial': new Audio('audio/imperial.wav')
    };
    this.shipSelect = 1;
  }

  _createClass(Game, [{
    key: 'begin',
    value: function begin() {
      var _this = this;

      document.addEventListener('DOMContentLoaded', function () {
        $(document).keypress(function (e) {
          if (e.which === 13 && _this.gameStarted === false) {
            _this.gameStarted = true;
            $('#press-enter').attr('src', './images/press-enter-to-start.png');
            _this.play();
          }
        });

        window.addEventListener('keydown', function (e) {
          var key = e.keyCode;
          if (key === 27 && _this.gameStarted === true) {
            _this.togglePause();
          }
          if (key === 37 && _this.gameStarted === false) {
            if (_this.shipSelect === 2) {
              _this.shipSelect = 1;
              $('.falcon-select').removeClass('active');
              $('.xwing-select').addClass('active');
            }
          }
          if (key === 39 && _this.gameStarted === false) {
            if (_this.shipSelect === 1) {
              _this.shipSelect = 2;
              $('.falcon-select').addClass('active');
              $('.xwing-select').removeClass('active');
            }
          }
        });

        $('#audio-button').on('click', function () {
          _this.toggleSound();
        });

        $(document).ready(function () {
          $(".show_hide").show();

          $('.show_hide').click(function () {
            $(".slidingDiv").slideToggle();
          });
        });
      });
    }
  }, {
    key: 'play',
    value: function play() {
      this.hideOutsideText();
      this.initializeTicker();
      this.ship.addShip(this.shipSelect);
      (0, _waves.waveOne)(this);
    }
  }, {
    key: 'initializeTicker',
    value: function initializeTicker() {
      var _this2 = this;

      // this.ticker.reset();
      // this.ticker.init();
      this.ticker.reset();
      this.ticker.addEventListener("tick", createjs.Tween);
      this.ticker.framerate = 60;
      this.ticker.addEventListener('tick', function () {
        if (!_this2.paused && _this2.gameStarted) {
          _this2.tick();
        }
      });
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.ship.shipEvents();
      this.moveAllBullets();
      this.displayScores();
      this.movePowerUps();
      this.fireEnemyBullets();
      this.moveAllEnemyBullets();
      this.moveAllEnemies();
      this.updateHealthBar();
      this.stage.update();
    }
  }, {
    key: 'toggleSound',
    value: function toggleSound() {
      var _this3 = this;

      if (this.muted === false) {
        this.muted = true;
        $('#audio-button').css('color', 'red');
        Object.keys(this.audio).forEach(function (audio) {
          _this3.audio[audio].muted = true;
        });
      } else {
        this.muted = false;
        $('#audio-button').css('color', 'white');
        Object.keys(this.audio).forEach(function (audio) {
          _this3.audio[audio].muted = false;
        });
      }
    }
  }, {
    key: 'muteMe',
    value: function muteMe(elem) {
      elem.muted = true;
      elem.pause();
    }
  }, {
    key: 'displayScores',
    value: function displayScores() {
      var score = document.getElementById('score');
      score.innerHTML = 'Score: ' + this.score;
    }
  }, {
    key: 'updateHealthBar',
    value: function updateHealthBar() {
      var health = 350 * (this.ship.health / this.ship.maxHealth);
      this.lightsaber.css('height', health + 'px');
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
      var _this4 = this;

      this.enemies.forEach(function (enemy, index1) {
        var random = Math.round(Math.random() * 310);
        if (_this4.ticker.getTicks() % random === 0) {
          enemy.shoot();
        }
      });
    }
  }, {
    key: 'moveAllEnemyBullets',
    value: function moveAllEnemyBullets() {
      var _this5 = this;

      this.enemyBullets.forEach(function (bullet, index1) {
        bullet.move();
        if (bullet.collideIntoPlayer(_this5.ship)) {
          _this5.enemyBullets.splice(index1, 1);
          if (_this5.ship.health <= 0) {
            setTimeout(function () {
              _this5.reset();
              $('#ship-select').css('display', 'none');
              setTimeout(function () {
                $('#ship-select').css('display', 'flex');
              }, 600);
            }, 2000);
          }
        }
      });
    }
  }, {
    key: 'moveAllEnemies',
    value: function moveAllEnemies() {
      var _this6 = this;

      this.enemies.forEach(function (enemy, index) {
        if (enemy.typeofmove === 'straight') {
          enemy.move();
        } else if (enemy.typeofmove === 'ease') {
          enemy.playSound();
        }

        if (enemy.enemyCollideIntoPlayer(_this6.ship)) {
          _this6.enemies.splice(index, 1);
          setTimeout(function () {
            _this6.reset();
            $('#ship-select').css('display', 'none');
            setTimeout(function () {
              $('#ship-select').css('display', 'flex');
            }, 600);
          }, 1500);
        }
      });
    }
  }, {
    key: 'moveAllBullets',
    value: function moveAllBullets() {
      var _this7 = this;

      this.bullets.forEach(function (bullet, index1) {
        bullet.move();
        _this7.enemies.forEach(function (enemy, index2) {
          if (bullet.hitEnemy(enemy)) {
            _this7.bullets.splice(index1, 1);
            if (enemy.health <= 0) {
              _this7.enemies.splice(index2, 1);
            }
          }
        });
      });
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      if (!this.paused && this.gameStarted === true) {
        this.paused = true;
        $('#paused').css('display', 'block');
        $('html').css('-webkit-animation-play-state', 'paused');
        $('html').css('-animation-play-state', 'paused');
      } else if (this.paused && this.gameStarted === true) {
        this.paused = false;
        $('#paused').css('display', 'none');
        $('html').css('-webkit-animation-play-state', 'running');
        $('html').css('-animation-play-state', 'running');
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
      var _this8 = this;

      for (var i = 0; i < this.timeouts.length; i++) {
        clearTimeout(this.timeouts[i]);
      }
      this.enemies = [];
      this.bullets = [];
      this.enemyBullets = [];
      this.explosions = [];
      this.powerups = [];
      Object.keys(this.audio).forEach(function (audio) {
        _this8.audio[audio].pause();
        _this8.audio[audio].currentTime = 0;
      });
      this.paused = false;
      this.gameStarted = false;
      this.ship = new _ship2.default(this);
      this.canvas = document.getElementById('canvas');
      this.canvas.width = window.innerWidth;
      this.canvas.height = window.innerHeight;
      var context = this.canvas.getContext('2d');
      context.clearRect(0, 0, this.canvas.width, this.canvas.height);
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
    this.ship = "";
    this.keys = {};
    this.health = 40;
    this.maxHealth = this.health;
    this.power = 0;
    this.xwing = new createjs.Bitmap('images/xwing.png');
    this.falcon = new createjs.Bitmap('images/falcon.png');
    document.onkeydown = this.keydown.bind(this);
    document.onkeyup = this.keyup.bind(this);
  }

  _createClass(Ship, [{
    key: 'addShip',
    value: function addShip(n) {
      if (n === 1) {
        this.ship = this.xwing;
      } else if (n === 2) {
        this.ship = this.falcon;
      }
      if (this.ship.image.currentSrc.includes('xwing')) {
        this.ship.scaleX = 0.4;
        this.ship.scaleY = 0.4;
      } else {
        this.ship.scaleX = 0.15;
        this.ship.scaleY = 0.15;
      }
      this.ship.x = this.game.canvas.width / 2 - 60;
      this.ship.y = this.game.canvas.height / 2 + 160;
      this.game.stage.addChild(this.ship);
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
      }
      if (this.keys[38] && this.outOfBoundsY1() && this.alive()) {
        this.ship.y -= 10;
      }
      if (this.keys[39] && this.outOfBoundsX2() && this.alive()) {
        this.ship.x += 10;
      }
      if (this.keys[40] && this.outOfBoundsY2() && this.alive()) {
        this.ship.y += 10;
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
        } else {
          this.game.ship.health += 5;
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
  var time1 = setTimeout(function () {
    var tie1 = new _enemy.TieFighter(10, 5, game, 'ease');
    var tie2 = new _enemy.TieFighter(10, 5, game, 'ease');
    var tie3 = new _enemy.TieFighter(10, 5, game, 'ease');

    tie1.addShip(window.innerWidth * .22, -100);
    tie1.movedown(110);
    game.audio['tie3'].play();
    var time8 = setTimeout(function () {
      tie2.addShip(window.innerWidth * .44, -100);
      tie2.movedown(110);
    }, 300);
    game.timeouts.push(time8);
    var time9 = setTimeout(function () {
      tie3.addShip(window.innerWidth * .66, -100);
      tie3.movedown(110);
    }, 600);
    game.timeouts.push(time9);
  }, 2000);
  game.timeouts.push(time1);

  var time2 = setTimeout(function () {
    circleFormation(game);
  }, 9000);
  game.timeouts.push(time2);

  var time3 = setTimeout(function () {
    crazyEight(game);
  }, 19000);
  game.timeouts.push(time3);

  var time4 = setTimeout(function () {
    var tie1 = new _enemy.TieFighter(10, 5, game, 'ease', true);
    var tie2 = new _enemy.TieFighter(10, 5, game, 'ease', true);
    var tie3 = new _enemy.TieFighter(10, 5, game, 'ease', true);

    tie1.addShip(window.innerWidth * .15, -100);
    tie2.addShip(window.innerWidth * .75, -100);
    tie3.addShip(window.innerWidth * .45, -100);
    tie1.movedown(130);
    tie2.movedown(130);
    tie3.movedown(130);
  }, 29000);
  game.timeouts.push(time4);

  var time5 = setTimeout(function () {
    game.audio['imperial'].play();
    var time6 = setTimeout(function () {
      var deathstar = new _enemy.DeathStar(10, 5, game, 'ease');
      deathstar.addShip(window.innerWidth * .43, -300);
      deathstar.movedown(90);
    }, 39000);
    game.timeouts.push(time6);
  }, 1000);
  game.timeouts.push(time5);
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

var circleFormation = function circleFormation(game) {
  var tie1 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie2 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie3 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie4 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie5 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie6 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie7 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie8 = new _enemy.TieFighter(0, 0, game, 'ease');

  tie1.addShip(window.innerWidth * .44, -100);
  tie2.addShip(window.innerWidth * .50, -100);
  tie3.addShip(window.innerWidth * .56, -100);
  tie4.addShip(window.innerWidth * .50, -100);
  tie5.addShip(window.innerWidth * .44, -100);
  tie6.addShip(window.innerWidth * .38, -100);
  tie7.addShip(window.innerWidth * .32, -100);
  tie8.addShip(window.innerWidth * .38, -100);

  tie1.movedown(50);
  tie2.movedown(120);
  tie3.movedown(190);
  tie4.movedown(260);
  tie5.movedown(330);
  tie6.movedown(260);
  tie7.movedown(190);
  tie8.movedown(120);

  game.audio['tie3'].play();
};

var crazyEight = function crazyEight(game) {
  var tie1 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie2 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie3 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie4 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie5 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie6 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie7 = new _enemy.TieFighter(0, 0, game, 'ease');
  var tie8 = new _enemy.TieFighter(0, 0, game, 'ease');

  tie1.addShip(window.innerWidth * .64, -100);
  tie2.addShip(window.innerWidth * .70, -100);
  tie3.addShip(window.innerWidth * .76, -100);
  tie4.addShip(window.innerWidth * .70, -100);
  tie5.addShip(window.innerWidth * .64, -100);
  tie6.addShip(window.innerWidth * .58, -100);
  tie7.addShip(window.innerWidth * .52, -100);
  tie8.addShip(window.innerWidth * .58, -100);

  tie1.movedown(50);
  tie2.movedown(120);
  tie3.movedown(190);
  tie4.movedown(260);
  tie5.movedown(330);
  tie6.movedown(260);
  tie7.movedown(190);
  tie8.movedown(120);

  var t1 = new _enemy.TieFighter(0, 0, game, 'ease');
  var t2 = new _enemy.TieFighter(0, 0, game, 'ease');
  var t3 = new _enemy.TieFighter(0, 0, game, 'ease');
  var t4 = new _enemy.TieFighter(0, 0, game, 'ease');
  var t5 = new _enemy.TieFighter(0, 0, game, 'ease');
  var t6 = new _enemy.TieFighter(0, 0, game, 'ease');
  var t7 = new _enemy.TieFighter(0, 0, game, 'ease');
  var t8 = new _enemy.TieFighter(0, 0, game, 'ease');

  t1.addShip(window.innerWidth * .24, -100);
  t2.addShip(window.innerWidth * .30, -100);
  t3.addShip(window.innerWidth * .36, -100);
  t4.addShip(window.innerWidth * .30, -100);
  t5.addShip(window.innerWidth * .24, -100);
  t6.addShip(window.innerWidth * .18, -100);
  t7.addShip(window.innerWidth * .12, -100);
  t8.addShip(window.innerWidth * .18, -100);

  t1.movedown(50);
  t2.movedown(120);
  t3.movedown(190);
  t4.movedown(260);
  t5.movedown(330);
  t6.movedown(260);
  t7.movedown(190);
  t8.movedown(120);

  game.audio['tie3'].play();
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DeathStar = exports.TieFighter = exports.Enemy = undefined;

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

    var _this = _possibleConstructorReturn(this, (Enemy.__proto__ || Object.getPrototypeOf(Enemy)).call(this, velocityX, velocityY, game));

    _this.game = game;
    return _this;
  }

  _createClass(Enemy, [{
    key: 'movedown',
    value: function movedown(y) {
      var _this2 = this;

      if (this.tweening === false) {
        this.tweening = 'charging';
        createjs.Tween.get(this.enemy, { useTicks: true, override: true }).wait(3).to({ y: y }, 60, createjs.Ease.backOut).call(function () {
          if (_this2.hasSpiral) {
            _this2.spiralAttack();
          }
          _this2.game.bullets.forEach(function (bullet) {
            if (Math.abs(bullet.bullet.y - _this2.enemy.y) < 200) {
              bullet.active = false;
            }
          });
          _this2.shooting = true;
          _this2.tweening = true;
        });
      }
    }
  }, {
    key: 'playSound',
    value: function playSound() {
      var tieRandom = Math.random();
      if (tieRandom < this.game.enemies.length * 0.002) {
        var num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        this.game.audio['tie' + num].play();
      }
    }
  }, {
    key: 'spiralAttack',
    value: function spiralAttack() {
      var _this3 = this;

      var i = 0;

      var id = setInterval(function () {
        var num = 2 * Math.PI * i / 25 + 1.55;
        var x = 3 * Math.cos(num);
        var y = 3 * Math.sin(num);
        var bullet = new _bullet.SpiralBullet(x, y, _this3.game);
        if (_this3.constructor.name === 'DeathStar') {
          bullet.addBullet(_this3.enemy.x + 30, _this3.enemy.y + 30);
        } else {
          bullet.addBullet(_this3.enemy.x, _this3.enemy.y);
        }
        i += 1;

        if (i >= 82 || _this3.game.ship.health <= 0 || _this3.health <= 0) {
          clearInterval(id);
        }
      }, 51);
    }
  }]);

  return Enemy;
}(_moving_object2.default);

var TieFighter = exports.TieFighter = function (_Enemy) {
  _inherits(TieFighter, _Enemy);

  function TieFighter(velocityX, velocityY, game, typeofmove, hasSpiral) {
    _classCallCheck(this, TieFighter);

    var _this4 = _possibleConstructorReturn(this, (TieFighter.__proto__ || Object.getPrototypeOf(TieFighter)).call(this, velocityX, velocityY, game));

    _this4.damage = 1;
    _this4.health = 5;
    _this4.enemy = new createjs.Bitmap('images/tiefighter.png');
    _this4.enemy.scaleX = window.innerWidth / 1000 * 0.5;
    _this4.enemy.scaleY = window.innerWidth / 1000 * 0.5;
    _this4.tweening = false;
    _this4.shooting = false;
    _this4.typeofmove = typeofmove;
    _this4.hasSpiral = hasSpiral;
    return _this4;
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
      if (tieRandom < 0.001) {
        var num = Math.floor(Math.random() * (4 - 1 + 1)) + 1;
        this.game.audio['tie' + num].play();
      }
    }
  }]);

  return TieFighter;
}(Enemy);

var DeathStar = exports.DeathStar = function (_Enemy2) {
  _inherits(DeathStar, _Enemy2);

  function DeathStar(velocityX, velocityY, game, typeofmove) {
    _classCallCheck(this, DeathStar);

    var _this5 = _possibleConstructorReturn(this, (DeathStar.__proto__ || Object.getPrototypeOf(DeathStar)).call(this, velocityX, velocityY, game));

    _this5.game = game;
    _this5.damage = 1;
    _this5.health = 375;
    _this5.enemy = new createjs.Bitmap('images/deathstar.png');
    _this5.enemy.scaleX = 0.15;
    _this5.enemy.scaleY = 0.15;
    _this5.tweening = false;
    _this5.shooting = false;
    _this5.typeofmove = typeofmove;
    _this5.hasSpiral = false;
    return _this5;
  }

  _createClass(DeathStar, [{
    key: 'movedown',
    value: function movedown(y) {
      var _this6 = this;

      if (this.tweening === false) {
        this.tweening = 'charging';
        createjs.Tween.get(this.enemy, { useTicks: true, override: true }).wait(5).to({ y: y }, 60, createjs.Ease.backOut).call(function () {
          if (_this6.hasSpiral) {
            _this6.spiralAttack();
          }
          _this6.game.bullets.forEach(function (bullet) {
            bullet.active = false;
          });
          _this6.shooting = true;
          _this6.tweening = true;
        }).to({ x: this.enemy.x - 300 }, 60).wait(50).to({ x: this.game.ship.ship.x, y: this.game.ship.ship.y + 60 }, 60).wait(100).to({ x: window.innerWidth * .45, y: window.innerHeight * .20 }, 60).wait(50).to({ x: this.enemy.x + 300 }, 60).call(function () {
          return _this6.spiralAttack();
        }).wait(50).to({ x: this.enemy.x - 300 }, 60).call(function () {
          return _this6.spiralAttack();
        }).wait(50).to({ x: this.enemy.x + 300 }, 60).call(function () {
          return _this6.spiralAttack();
        }).wait(50).to({ x: this.enemy.x + 300 }, 60).wait(50).to({ x: this.enemy.x - 300 }, 60).wait(50).to({ x: this.enemy.x + 300 }, 60).wait(50).to({ x: this.enemy.x - 300 }, 60).wait(50).to({ x: this.game.ship.ship.x, y: this.game.ship.ship.y + 60 }, 60).wait(100).to({ x: window.innerWidth * .45, y: window.innerHeight * .20 }, 60).wait(50).to({ x: this.enemy.x + 300 }, 60).wait(50).to({ x: this.enemy.x - 300 }, 60).wait(50).to({ x: this.enemy.x + 300 }, 60).wait(50).to({ x: this.game.ship.ship.x, y: this.game.ship.ship.y + 60 }, 60).wait(100).to({ x: window.innerWidth * .45, y: window.innerHeight * .20 }, 60).wait(50).to({ x: this.enemy.x - 300 }, 60).call(function () {
          return _this6.spiralAttack();
        }).wait(50).to({ x: this.enemy.x + 300 }, 60).wait(50).to({ x: this.enemy.x - 300 }, 60).wait(50).to({ x: this.enemy.x + 300 }, 60).wait(50).to({ x: this.enemy.x - 300 }, 60).call(function () {
          return _this6.spiralAttack();
        }).wait(50).to({ x: this.enemy.x + 300 }, 60).wait(50).to({ x: this.enemy.x - 300 }, 60).wait(50).to({ x: this.enemy.x + 300 }, 60).wait(50).to({ x: this.enemy.x - 300 }, 60).wait(50).to({ x: this.enemy.x + 300 }, 60).wait(50).to({ x: this.enemy.x - 300 }, 60).wait(50).to({ x: this.enemy.x + 300 }, 60).wait(50).to({ x: this.enemy.x - 300 }, 60).wait(50).to({ x: this.enemy.x + 300 }, 60).wait(50).to({ x: this.enemy.x - 300 }, 60);
      }
    }
  }, {
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
        var bullet = new _bullet.TieFighterBullet((this.game.ship.ship.x - this.enemy.x) / 60, (this.game.ship.ship.y - this.enemy.y) / 60, this.game);
        bullet.addBullet(this.enemy.x, this.enemy.y);
      }
    }
  }, {
    key: 'move',
    value: function move() {
      this.enemy.x += this.velocityX;
      this.enemy.y += this.velocityY;
    }
  }]);

  return DeathStar;
}(Enemy);

/***/ })
/******/ ]);