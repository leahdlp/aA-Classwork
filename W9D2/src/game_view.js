const Game = require("./game.js");

const GameView = function (ctx) {
    this.game = new Game(600, 700, 20);
    this.ctx = ctx;
}

GameView.prototype.start = function () {
    setInterval(this.game.draw(this.ctx).bind(this), 20);
    setInterval(this.game.moveObjects().bind(this), 20);
}

module.exports = GameView;