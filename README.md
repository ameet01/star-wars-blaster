# Star Wars Shooter

Star Wars Shooter mixes the fluid physics and visuals of asteroids with relatable audio/visuals from the Star Wars universe.

## MVP Features:

* Smooth moving ship with easy turning - the ship MUST feel nice to move around. No player frustration.
* Smooth and fluid bullets to destroy enemies - bullets must be fast, have audio, and destroy enemies when a collision is made.
* Explosions for enemies as well as player ship when destroyed - Anything that gets destroyed must have an explosion animation generated from a sprite.
* Stars Wars feel to it(Sound effects from the movies, star wars font, space background) - Needs a sense of immersion.
* Scoring system for enemy kills.

## Wireframes

This application will be near full-screen, and consist of a splash page with the title and "Please press enter to begin" text. Hopefully in actual stars wars font. The background will be filled with stars/planets.

The game will then start with the player's ship in the middle, and a couple enemies spawned on the outside.

The enemy players will start moving toward the player while shooting bullets. It's up to the player to maneuver around and vanquish as many enemies as he can before being defeated.

* SplashPage
    <img src='https://github.com/ameet01/star-wars-shooter/blob/master/docs/wireframe_splash.png' />
* MainPage
    <img src='https://github.com/ameet01/star-wars-shooter/blob/master/docs/wireframe_main.png' />

## Technologies:

* Vanilla Javascript for game logic/structure.
* HTML5 Canvas for DOM Manipulation and rendering.
* Webpack to bundle all scripts.
* Main Scripts: moving_objects.js, shooter.js, game.js

## Implementation Timeline:

### Over The Weekend:
- [x] Finish proposal and learning about technologies used
- [x] Learn how to implement elegant proper physics in the game

### Day 1:
- [] Setup webpack, and all necessary node_modules
- [] Create general structure for files
- [] Obtain sprite images and audio files to be used in the game
- [] Implement splash page that transitions into main game
- [] Get sprite images to show and change

### Day 2:
- [] Implement general styling on background, text and images
- [] Get moving_objects.js in order, and be able to extend that to other objects
- [] Be able to move ship and have enemies move as well
- [] Have audio play on load. Also have audio toggle button in corner.

### Day 3:
- [] Implement physics into ship to make it feel smooth (important)
- [] Implement collisions with enemies, ship, and laser beams.
- [] Implement scoring system.

### Day 4:
- [] Further iterate upon physics incase it isn't finished (important)
- [] Tie up any other loose ends.
- [] Test game for user experience, and adjust accordingly.
- [] Completely style canvas.

### Bonus Features:

* Ship health bar or lives
* Add in boosts that fly by for extra power & defense
* Pick your own ship
* Pick background scenery
