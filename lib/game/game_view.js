const Game =  require("./game");

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  bindKeyHandlers() {
    const ship = this.game.ship;
    key('enter', () => { this.start(); });

    Object.keys(GameView.MOVES).forEach((k) => {
      let move = GameView.MOVES[k];
      key(k, () => { ship.power(move); })
    });
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

GameView.MOVES = {
  up: [0, -1],
  left: [-1, 0],
  down: [0, 1],
  right: [1, 0],
};

module.exports = GameView;
