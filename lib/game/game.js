import Ship from '../objects/ship';


class Game {
  constructor() {
    this.enemies = [];
    this.bullets = [];
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
      'tie-fighter-laser': new Audio('audio/tie-fighter-laser.wav')
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
  }

  initializeTicker() {
    this.ticker.reset();
    this.ticker.init();
    this.ticker.framerate = 60;
    this.ticker.addEventListener('tick', () => {
      this.ship.shipEvents();
      this.moveAllBullets();
      this.stage.update();
    });
  }


  moveAllBullets() {
    this.bullets.forEach(bullet => {
      bullet.move();
    });
  }

  hideOutsideText() {
    document.querySelector('#splash').style.display = 'none';
  }

}

let game = new Game();
game.begin();

export default Game;
