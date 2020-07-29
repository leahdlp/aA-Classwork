/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/asteroid.js":
/*!*************************!*\
  !*** ./src/asteroid.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\n\nconst Asteroid = function (obj) {\n    obj.vel = Util.randomVec(2);\n    obj.radius = 10;\n    obj.color = \"gray\";\n    \n    MovingObject.call(this, obj);\n}\n\n\n\nUtil.inherits(Asteroid, MovingObject)\n\nmodule.exports = Asteroid;\n\n//# sourceURL=webpack:///./src/asteroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\");\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\n\nfunction Game(dim_x, dim_y, num_asteroids) {\n    this.DIM_X = dim_x;\n    this.DIM_Y = dim_y;\n    this.NUM_ASTEROIDS = num_asteroids;\n    this.ASTEROIDS = this.addAsteroids();\n}\n\nGame.prototype.addAsteroids = function () {\n    let asteroids = [];\n    let i = 0;\n\n    while (i < this.NUM_ASTEROIDS) {\n        let randPos = this.randomPosition(this.DIM_X, this.DIM_Y);\n        asteroids.push(new Asteroid({pos: randPos}));\n\n        i++;\n    }\n\n    return asteroids;\n}\n\nGame.prototype.randomPosition = function (max_x, max_y) {\n    let x = Math.floor(Math.random() * Math.floor(max_x));\n    let y = Math.floor(Math.random() * Math.floor(max_y));\n    return [x, y];\n}\n\nGame.prototype.draw = function (ctx) {\n    ctx.clearRect(0, 0, this.DIM_X, this.DIM_Y);\n\n    for (let i = 0; i < this.ASTEROIDS.length; i++) {\n        this.ASTEROIDS[i].draw(ctx);\n    }\n}\n\nGame.prototype.moveObjects = function () {\n    for (let i = 0; i < this.ASTEROIDS.length; i++) {\n        this.ASTEROIDS[i].move();\n    }\n}\n\nmodule.exports = Game;\n\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/game_view.js":
/*!**************************!*\
  !*** ./src/game_view.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\n\nconst GameView = function (ctx) {\n    this.game = new Game(600, 700, 20);\n    this.ctx = ctx;\n}\n\nGameView.prototype.start = function () {\n    setInterval(this.game.draw(this.ctx).bind(this), 20);\n    setInterval(this.game.moveObjects().bind(this), 20);\n}\n\nmodule.exports = GameView;\n\n//# sourceURL=webpack:///./src/game_view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\r\n\r\nconst MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\r\nconst Asteroid = __webpack_require__(/*! ./asteroid.js */ \"./src/asteroid.js\");\r\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\");\r\nconst GameView = __webpack_require__(/*! ./game_view.js */ \"./src/game_view.js\");\r\n\r\nconsole.log(\"Webpack is working!\");\r\n\r\nwindow.addEventListener('DOMContentLoaded', (event) => {\r\n    let canvas = document.getElementById(\"game-canvas\");\r\n    let ctx = canvas.getContext(\"2d\");\r\n    window.ctx = ctx;\r\n});\r\n\r\n\r\nwindow.MovingObject = MovingObject;\r\nwindow.Asteroid = Asteroid;\r\nwindow.Game = Game;\r\nwindow.GameView = GameView;\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const MovingObject = function (obj) {\r\n    this.pos = obj.pos;\r\n    this.vel = obj.vel;\r\n    this.radius = obj.radius;\r\n    this.color = obj.color;\r\n}\r\n\r\nMovingObject.prototype.draw = function (ctx) {\r\n    // debugger\r\n    ctx.beginPath();\r\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2*Math.PI, true);\r\n    ctx.strokeStyle = \"green\";\r\n    ctx.lineWidth = 3;\r\n    ctx.stroke();\r\n    ctx.fillStyle = this.color;\r\n    ctx.fill();\r\n}\r\n\r\nMovingObject.prototype.move = function () {\r\n    this.pos[0] += this.vel[0];\r\n    this.pos[1] += this.vel[1];\r\n}\r\n\r\n\r\n\r\nmodule.exports = MovingObject;\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n// Return a randomly oriented vector with the given length.\nconst Util = {\n    randomVec(length) {\n        const deg = 2 * Math.PI * Math.random();\n        return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n    },\n    // Scale the length of a vector by the given amount.\n    scale(vec, m) {\n        return [vec[0] * m, vec[1] * m];\n    },\n    \n    inherits(childClass, parentClass) {\n            function Surrogate () {}\n            Surrogate.prototype =  parentClass.prototype;\n            childClass.prototype = new Surrogate();\n            childClass.prototype.constructor = childClass;\n    }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

/***/ })

/******/ });