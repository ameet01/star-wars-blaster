import Ship from '../objects/ship';


class Game {
  constructor() {
    this.enemies = [];
    this.bullets = [];
    this.explosions = [];
    this.ship = new Ship(this);
    this.canvas = document.getElementById('canvas');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.ticker = createjs.Ticker;
    this.stage = new createjs.Stage(this.canvas);
    this.gameStarted = false;
  }

  begin() {
    document.addEventListener('DOMContentLoaded', () => {
      $(document).keypress((e) => {
        if(e.which == 13 && this.gameStarted === false) {
          this.gameStarted = true;
          this.play();
        }
      });
    })
  }

  play() {
    this.hideOutsideText();
    this.initializeTicker();
    this.stage.addChild(this.ship.ship);
  }

  initializeTicker() {
    this.ticker.reset();
    this.ticker.init();
    this.ticker.framerate = 60;
    this.ticker.addEventListener('tick', this.stage);
  }


  hideOutsideText() {
    document.querySelector('#splash').style.display = 'none';
  }


}

let game = new Game();
game.begin();

export default Game;
