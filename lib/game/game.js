import Ship from '../objects/ship';
import { waveOne } from './waves.js';

class Game {
  constructor() {
    this.enemies = [];
    this.bullets = [];
    this.enemyBullets = [];
    this.explosions = [];
    this.ship = new Ship(this);
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

  begin() {
    document.addEventListener('DOMContentLoaded', () => {
      $(document).keypress((e) => {
        if(e.which == 13 && this.gameStarted === false) {
          this.gameStarted = true;
          this.play();
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

  initializeTicker() {
    this.ticker.reset();
    this.ticker.init();
    this.ticker.framerate = 60;
    this.ticker.addEventListener('tick', () => {
      this.ship.shipEvents();
      this.moveAllBullets();
      this.fireEnemyBullets();
      this.moveAllEnemyBullets();
      this.moveAllEnemies();
      this.stage.update();
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
      }
    });
  }

  moveAllEnemies() {
    this.enemies.forEach(enemy => {
      enemy.move();
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

  hideOutsideText() {
    document.querySelector('#splash').style.display = 'none';
  }

}

let game = new Game();
game.begin();

export default Game;
