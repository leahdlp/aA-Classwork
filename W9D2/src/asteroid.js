const Util = require("./util.js");
const MovingObject = require("./moving_object.js");

const Asteroid = function (obj) {
    obj.vel = Util.randomVec(2);
    obj.radius = 10;
    obj.color = "gray";
    
    MovingObject.call(this, obj);
}



Util.inherits(Asteroid, MovingObject)

module.exports = Asteroid;