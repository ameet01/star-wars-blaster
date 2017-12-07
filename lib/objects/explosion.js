export const Explosion = (x, y, game) => {
  let img = new Image();
  img.src = 'images/explosion.png';

  var data = {
    framerate: 60,
    images: [img],
    frames: {width: 100, height: 100, regX: 32, regY: 32},
    animations: {
      'explode': [0, 73],
    }
  };

  var spritesheet = new createjs.SpriteSheet(data);
  var animation = new createjs.Sprite(spritesheet, 'explode');
  animation.x = x + 50;
  animation.y = y + 50;
  game.stage.addChild(animation);
  setTimeout(() => {
    game.stage.removeChild(animation);
  }, 1200);
};

export const ShipHit = (x, y, game) => {
  let img = new Image();
  img.src = 'images/explosion.png';

  var data = {
    framerate: 60,
    images: [img],
    frames: {width: 100, height: 100, regX: 32, regY: 32},
    animations: {
      'explode': [50, 57],
    }
  };

  var spritesheet = new createjs.SpriteSheet(data);
  var animation = new createjs.Sprite(spritesheet, 'explode');
  animation.x = x + 50;
  animation.y = y + 50;
  game.stage.addChild(animation);
  console.log(spritesheet);
  setTimeout(() => {
    game.stage.removeChild(animation);
  }, 100);
};
