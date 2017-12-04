const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName("canvas")[0];

  const ctx = canvas.getContext("2d");
  const game = new Game();

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  const gameview = new GameView(game, ctx);

  document.addEventListener('keypress', e => {
      if (e.keyCode === 13) {
        let outside = document.getElementById('splash');
        outside.style.display = 'none';
        gameview.start();
      }
    });
});
