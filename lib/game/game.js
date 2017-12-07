import Ship from '../objects/ship';
import { waveOne, waveTwo } from './waves.js';

class Game {
  constructor() {
    this.enemies = [];
    this.bullets = [];
    this.enemyBullets = [];
    this.explosions = [];
    this.powerups = [];
    this.ship = new Ship(this);
    this.healthbar = this.ship.healthbar;
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
    };
  }

  begin() {
    document.addEventListener('DOMContentLoaded', () => {
      $(document).keypress((e) => {
        if(e.which === 13 && this.gameStarted === false) {
          this.gameStarted = true;
          this.play();
        }
      });

      window.addEventListener('keydown', (e) => {
        var key = e.keyCode;
        if (key === 27) {
          this.togglePause();
        }
      });


      $('#audio-button').on('click', () => {
        this.toggleSound();
      });
    });
  }

  play() {
    this.hideOutsideText();
    this.ship.addShip();
    this.initializeTicker();
    waveOne(this);
  }

  toggleSound() {
    if(this.muted === false) {
      this.muted = true;
      $('#audio-button').css('color', 'red');
      Object.keys(this.audio).forEach(audio => {
        this.audio[audio].muted = true;
      });
    } else {
      this.muted = true;
      $('#audio-button').css('color', 'white');
      Object.keys(this.audio).forEach(audio => {
        this.audio[audio].muted = false;
      });
    }
  }

  muteMe(elem) {
    elem.muted = true;
    elem.pause();
  }

  displayScores() {
    let score = document.getElementById('score');
    score.innerHTML = `Score: ${this.score}`;
  }

  initializeTicker() {
    // this.ticker.reset();
    // this.ticker.init();
    this.ticker.framerate = 60;
    this.ticker.addEventListener('tick', () => {
      if(!this.paused && this.gameStarted) {
        this.tick();
      }
    });
  }

  tick() {
    this.ship.shipEvents();
    this.moveAllBullets();
    this.displayScores();
    this.movePowerUps();
    this.fireEnemyBullets();
    this.moveAllEnemyBullets();
    this.moveAllEnemies();
    this.stage.update();
  }

  movePowerUps() {
    this.powerups.forEach((powerup, index1) => {
      powerup.move();
    });
  }

  fireEnemyBullets() {
    this.enemies.forEach((enemy, index1) => {
      let random = Math.round(Math.random() * 310);
      if(this.ticker.getTicks() % random === 0) {
        enemy.shoot();
      }
    });
  }

  moveAllEnemyBullets() {
    this.enemyBullets.forEach((bullet, index1) => {
      bullet.move();
      if(bullet.collideIntoPlayer(this.ship)) {
        this.enemyBullets.splice(index1, 1);
        if(this.ship.health <= 0) {
          setTimeout(() => {
            this.reset();
          }, 2000);
        }
      }
    });
  }

  moveAllEnemies() {
    this.enemies.forEach((enemy, index) => {
      if(enemy.typeofmove === 'straight') {
        enemy.move();
      } else if(enemy.typeofmove === 'ease') {
        enemy.playSound();
      }

      if(enemy.enemyCollideIntoPlayer(this.ship)) {
        this.enemies.splice(index, 1);
        setTimeout(() => {
          this.reset();
        }, 1500);
      }
    });
  }

  moveAllBullets() {
    this.bullets.forEach((bullet, index1) => {
      bullet.move();
      this.enemies.forEach((enemy, index2) => {
        if(bullet.hitEnemy(enemy)) {
          this.bullets.splice(index1, 1);
          if(enemy.health <= 0) {
            this.enemies.splice(index2, 1);
          }
        }
      });
    });
  }

  togglePause() {
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

  hideOutsideText() {
    document.querySelector('#splash').style.display = 'none';
  }

  displayOutsideText() {
    document.querySelector('#splash').style.display = 'block';
  }

  reset() {
    this.enemies = [];
    this.bullets = [];
    this.enemyBullets = [];
    this.explosions = [];
    this.powerups = [];
    this.paused = false;
    this.gameStarted = false;
    this.ship = new Ship(this);
    this.canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    var context = this.canvas.getContext('2d');
    context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.healthbar = this.ship.healthbar;
    this.stage = new createjs.Stage(this.canvas);
    this.ticker = createjs.Ticker;
    this.score = 0;
    this.displayOutsideText();
  }

}

let game = new Game();
game.begin();

export default Game;
