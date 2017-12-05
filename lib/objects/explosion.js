

const Explosion = (x, y, stage) => {
  let img = new Image();
  img.src = 'images/explosion.png';

  var data = {
    framerate: 60,
    images: [img],
    frames: {width:100, height:100, regX:32, regY:32},
    animations: {
      'explode': [0, 73],
    }
  };

  var spritesheet = new createjs.SpriteSheet(data);
  var animation = new createjs.Sprite(spritesheet, 'explode');
  animation.x = x + 50;
  animation.y = y + 50;
  stage.addChild(animation);
  setTimeout(() => {
    stage.removeChild(animation);
  }, 1300);
};

export default Explosion;
