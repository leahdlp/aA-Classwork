const Util = require("./util.js");
const MovingObject = require("./moving_object.js");
const Asteroid = require("./asteroid.js");

function Game(dim_x, dim_y, num_asteroids) {
    this.DIM_X = dim_x;
    this.DIM_Y = dim_y;
    this.NUM_ASTEROIDS = num_asteroids;
    this.ASTEROIDS = this.addAsteroids();
}

Game.prototype.addAsteroids = function () {
    let asteroids = [];
    let i = 0;

    while (i < this.NUM_ASTEROIDS) {
        let randPos = this.randomPosition(this.DIM_X, this.DIM_Y);
        asteroids.push(new Asteroid({pos: randPos}));

        i++;
    }

    return asteroids;
}

Game.prototype.randomPosition = function (max_x, max_y) {
    let x = Math.floor(Math.random() * Math.floor(max_x));
    let y = Math.floor(Math.random() * Math.floor(max_y));
    return [x, y];
}

Game.prototype.draw = function (ctx) {
    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);

    for (let i = 0; i < this.ASTEROIDS.length; i++) {
        this.ASTEROIDS[i].draw(ctx);
    }
}

Game.prototype.moveObjects = function () {
    for (let i = 0; i < this.ASTEROIDS.length; i++) {
        this.ASTEROIDS[i].move();
    }
}

module.exports = Game;
