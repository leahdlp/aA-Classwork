const View = require("./ttt-view.js"); // require appropriate file
const Game = require("./../../node-solution/game.js"); // require appropriate file


$(() => {
  const g = new Game();
  const container = $(".ttt");
  const v = new View(g, container);
  
  window.Game = Game;
  window.View = View;
});
