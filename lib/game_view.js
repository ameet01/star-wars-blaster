const Game =  require("./game");

class GameView {
  constructor(game, ctx) {
    this.game = game;
    this.ctx = ctx;
  }

  start() {
    console.log(this.game, this.ctx);
    this.game.ship.draw(this.ctx, 80);
  }
}

module.exports = GameView;
