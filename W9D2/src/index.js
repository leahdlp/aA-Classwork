

const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");
const Game = require("./game.js");
const GameView = require("./game_view.js");

console.log("Webpack is working!");

window.addEventListener('DOMContentLoaded', (event) => {
    let canvas = document.getElementById("game-canvas");
    let ctx = canvas.getContext("2d");
    window.ctx = ctx;
});


window.MovingObject = MovingObject;
window.Asteroid = Asteroid;
window.Game = Game;
window.GameView = GameView;