const Game =  require("./game");

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    let outside = document.getElementById('splash');
    outside.style.display = 'none';
    this.game.ship.draw(this.ctx, 80);
  }
}

module.exports = GameView;
