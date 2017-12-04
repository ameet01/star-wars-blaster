const Game = require("./game/game");
const GameView = require("./game/game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName("canvas")[0];

  const ctx = canvas.getContext("2d");
  const game = new Game();

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  const gameView = new GameView(game, ctx);

  gameView.bindKeyHandlers();
});
