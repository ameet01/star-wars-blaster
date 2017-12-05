const Game =  require("./game");

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  bindKeyHandlers() {
    const ship = this.game.ship;
    key('enter', () => { this.start(); });


    key('left', () => ship.power([-1,0]));
    key('right', () => ship.power([1,0]));
    key('up', () => ship.power([0,-1]));
    key('down', () => ship.power([0,1]));
    key('space', () => ship.shoot(this.ctx));
  }

  start() {
    let outside = document.getElementById('splash');
    outside.style.display = 'none';
    this.lastTime = 0;
    this.game.ship.draw(this.ctx, 80);
    requestAnimationFrame(this.animate.bind(this));
  }

  animate(time) {
    const timeDelta = time - this.lastTime;

    this.game.step(timeDelta);
    this.game.draw(this.ctx);
    this.lastTime = time;

    // every call to animate requests causes another call to animate
    requestAnimationFrame(this.animate.bind(this));
  }
}

module.exports = GameView;
