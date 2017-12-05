

class Ship {
  constructor(game) {
    this.game = game;
    this.stage = game.stage;
    this.ship = new createjs.Bitmap('images/xwing.png');
  }

  addShip() {
    this.ship.x = this.game.canvas.width / 2;
    this.ship.y = this.game.canvas.height / 2;
    this.stage.addChild(this);
  }
}

export default Ship;
