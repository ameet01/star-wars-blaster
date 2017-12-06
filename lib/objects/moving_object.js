
import {Explosion, ShipHit} from '../objects/explosion';
import PowerUp from './powerup';

class MovingObject {
  constructor(velocityX, velocityY, game) {
    this.game = game;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
  }

  hitEnemy(enemy) {
    let x = Math.abs(this.bullet.x-enemy.enemy.x);
    let y = Math.abs(this.bullet.y-enemy.enemy.y);
    if(x < enemy.enemy.image.width && y < enemy.enemy.image.height-35) {
      this.game.stage.removeChild(this.bullet);
      enemy.health -= this.damage;
      if(enemy.health <= 0) {
        Explosion(enemy.enemy.x, enemy.enemy.y, this.game);
        this.game.audio['explosion'].play();
        this.game.stage.removeChild(enemy.enemy);
        this.game.score += 1;
        let random = Math.random();
        if(random < .15) {
          let powerup = new PowerUp(0, 3, enemy.enemy.x, enemy.enemy.y, this.game);
          this.game.powerups.push(powerup);
          this.game.stage.addChild(powerup.powerup);
        }
      }
      return true;
    }
    return false;
  }

  collideIntoPlayer(ship) {
    const x = Math.abs(ship.ship.x-this.bullet.x);
    const y = Math.abs(ship.ship.y-this.bullet.y);
    if(x < 70 && y < 40) {
      ship.health -= this.damage;
      ShipHit(ship.ship.x, ship.ship.y, this.game.stage);
      this.game.stage.removeChild(this.bullet);
      if(ship.health <= 0) {
        Explosion(ship.ship.x, ship.ship.y, this.game);
        this.game.audio['explosion'].play();
        this.game.stage.removeChild(ship.ship);
        this.game.stage.removeChild(ship.healthbar);
      }
      return true;
    }
    return false;
  }
}

export default MovingObject;
