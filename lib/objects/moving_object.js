
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
        this.dropPowerUp(enemy);

        let random = Math.random();
        if(random < 0.6) {
          let num = Math.floor(Math.random() * (6 - 1 + 1)) + 1;
          this.game.audio[`r${num}`].play();
        }
      }
      return true;
    }
    return false;
  }

  dropPowerUp(enemy) {
    let random = Math.random();
    if(random < .15) {
      let powerup = new PowerUp(0, 3, enemy.enemy.x, enemy.enemy.y, this.game);
      this.game.powerups.push(powerup);
      this.game.stage.addChild(powerup.powerup);
    }
  }

  collideIntoPlayer(ship) {
    const x = Math.abs(ship.ship.x+30-this.bullet.x);
    const y = Math.abs(ship.ship.y+20-this.bullet.y);
    if(x < 40 && y < 40) {
      ship.health -= this.damage;
      ShipHit(ship.ship.x-25, ship.ship.y, this.game.stage);
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

  enemyCollideIntoPlayer(ship) {
    const x = Math.abs(ship.ship.x+30-this.enemy.x);
    const y = Math.abs(ship.ship.y+20-this.enemy.y);
    if(x < 100 && y < 100) {
      this.game.stage.removeChild(this.enemy);
      Explosion(this.enemy.x, this.enemy.y, this.game);
      ship.health = 0;
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
