const Game = require("./game");
const GameView = require("./game_view");

document.addEventListener("DOMContentLoaded", () => {
  const canvas = document.getElementsByTagName("canvas")[0];

  const ctx = canvas.getContext("2d");
  const game = new Game();

  ctx.canvas.width = window.innerWidth;
  ctx.canvas.height = window.innerHeight;
  new GameView(game, ctx).start();
});
