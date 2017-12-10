<img src='https://github.com/ameet01/star-wars-shooter/blob/master/images/maintitle.png' width='600px' />

### Check out the live [Application](http://www.starwarsblaster.tech/)!

Star Wars Shooter mixes the physics and visuals of space invaders with the well-known audio/visuals from the Star Wars universe. The goal of the project is to provide a smooth and immersive star wars experience over the browser using just javascript and canvas.

## Technologies:

* ES6 Javascript
* CreateJS, EaselJS, TweenJS for canvas rendering and enemy movement
* HTML5 Canvas for DOM Manipulation and rendering
* Webpack

## Features:

### Rendering

-I use CreateJS to render my game. I do so by calling a new 'stage', which has access to the createjs library using our html canvas.
```javascript
this.stage = new createjs.Stage(this.canvas);
```

-I then add an eventListener to a ticker, which is the renderer that gets called 60 times a second. The event listener is used to apply my game's core functions/logic.
```javascript
this.ticker = createjs.Ticker;
this.ticker.framerate = 60;
this.ticker.addEventListener('tick', () => {
  tick();
}
```

-My tick function will then apply my game logic and constantly render all my essential objects.
```javascript
tick() {
  this.ship.shipEvents();
  this.moveAllBullets();
  this.displayScores();
  this.movePowerUps();
  this.fireEnemyBullets();
  this.moveAllEnemyBullets();
  this.moveAllEnemies();
  this.updateHealthBar();
  if(this.boss) {
    this.updateBossHealthBar();
  }
  this.stage.update();
}
```


### Light Saber Health Bar

Lightsaber element built with CSS is correlated with the ship's health and lowers when the ship is hit!

<img src='https://github.com/ameet01/star-wars-shooter/blob/master/docs/lightsaberhealthbar.gif' width='400px'/>

### Spiral Shot

Tie Fighters can shoot in an intricate spiral motion to incentivize more maneuvers from the player

<img src='https://github.com/ameet01/star-wars-shooter/blob/master/docs/spiral.gif' width='600px'/>

## Instructions

* Press Enter to start / reset game
* Use arrow keys to navigate your ships
* Hold spacebar to shoot
* Press escape to pause

## Future Plans

* Back end for high scores
* Multiple levels
* Different bullet styles from tie-fighters
