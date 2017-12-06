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
    this.audio = {
      'tie-fighter-laser': new Audio('audio/tie-fighter-laser.wav'),
      'xwing-laser': new Audio('audio/xwing-laser.wav'),
      'explosion': new Audio('audio/explosion.wav')
    };
  }

  begin() {
    document.addEventListener('DOMContentLoaded', () => {
      $(document).keypress((e) => {
        if(e.which == 13 && this.gameStarted === false) {
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
    });
  }

  play() {
    this.hideOutsideText();
    this.ship.addShip();
    this.initializeTicker();
    waveOne(this);


  }

  displayScores() {
    let score = document.getElementById('score');
    score.innerHTML = `Score: ${this.score}`;
  }

  initializeTicker() {
    this.ticker.reset();
    this.ticker.init();
    this.ticker.framerate = 60;
    this.ticker.addEventListener('tick', () => {
      if(!this.paused) {
        this.ship.shipEvents();
        this.moveAllBullets();
        this.displayScores();
        this.movePowerUps();
        this.fireEnemyBullets();
        this.moveAllEnemyBullets();
        this.moveAllEnemies();
        this.stage.update();
      }
    });
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
          }, 1000);
        }
      }
    });
  }

  moveAllEnemies() {
    this.enemies.forEach(enemy => {
      if(enemy.typeofmove === 'straight') {
        enemy.move();
      } else if(enemy.typeofmove === 'ease') {
        enemy.movedown(110);
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
    if (!this.paused) {
      this.paused = true;
    } else if (this.paused) {
      this.paused = false;
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
    this.gameStarted = false;
    this.ship = new Ship(this);
    this.canvas = document.getElementById('canvas');
    this.healthbar = this.ship.healthbar;
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.stage = new createjs.Stage(this.canvas);
    this.ticker = createjs.Ticker;
    this.score = 0;
    this.displayOutsideText();
  }

}

let game = new Game();
game.begin();

export default Game;
