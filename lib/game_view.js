const Game =  require("./game");

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
    this.game.ship.draw(ctx, 80);
  }

  start() {

  }
}

module.exports = GameView;
