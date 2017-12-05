

class Enemy {
  constructor(game) {
    this.game = game;
  }
}

class TieFighter extends Enemy {
  constructor(game) {
    super(game);
    this.damage = 1;
    this.health = 2;
    this.enemy = new createjs.Bitmap('images/xwing.png');
  }

  addShip() {
    this.enemy.x = this.game.canvas.width / 2 - 50;
    this.enemy.y = -20;
    this.game.stage.addChild(this.enemy);
  }
}

export default Enemy;
