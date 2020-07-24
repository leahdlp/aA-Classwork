let Piece = require("./piece");

/**
 * Returns a 2D array (8 by 8) with two black pieces at [3, 4] and [4, 3]
 * and two white pieces at [3, 3] and [4, 4]
 */
function _makeGrid () {
  let arr = new Array(8);
  for(let i=0; i < arr.length; i++){
    arr[i] = new Array(8);
  };
  arr[3][3] = new Piece("white");
  arr[4][4] = new Piece("white");
  arr[3][4] = new Piece("black");
  arr[4][3] = new Piece("black");

  return arr;
}

/**
 * Constructs a Board with a starting grid set up.
 */
function Board () {
  this.grid = _makeGrid();
}

Board.DIRS = [
  [ 0,  1], [ 1,  1], [ 1,  0],
  [ 1, -1], [ 0, -1], [-1, -1],
  [-1,  0], [-1,  1]
];


/**
 * Checks if a given position is on the Board.
 */
Board.prototype.isValidPos = function (pos) {
  let [row, col] = pos;
  if( row < 0 || row > 7 || col < 0 || col > 7){
    return false;
  }else{
    return true;
  };
};

/**
 * Returns the piece at a given [x, y] position,
 * throwing an Error if the position is invalid.
 */
Board.prototype.getPiece = function (pos) {
  if (!this.isValidPos(pos)) {
    let myError = new Error('Not valid pos!');
    throw myError;
  } else {
    return this.grid[pos[0]][pos[1]];
  }
};

/**
 * Checks if the piece at a given position
 * matches a given color.
 */
Board.prototype.isMine = function (pos, color) {
  if (this.isOccupied(pos)) {
    return this.getPiece(pos).color === color;
  } else {
    return false;
  }
};

/**
 * Checks if a given position has a piece on it.
 */
Board.prototype.isOccupied = function (pos) {
  return this.getPiece(pos) != null;
};

/**
 * Recursively follows a direction away from a starting position, adding each
 * piece of the opposite color until hitting another piece of the current color.
 * It then returns an array of all pieces between the starting position and
 * ending position.
 *
 * Returns an empty array if it reaches the end of the board before finding another piece
 * of the same color.
 *
 * Returns empty array if it hits an empty position.
 *
 * Returns empty array if no pieces of the opposite color are found.
 */
Board.prototype._positionsToFlip = function(pos, color, dir, piecesToFlip=[]){
  //base case:
  //  if piece @ pos is null or has our color 
  //    then return empty array
  //inductive step:
  //  if piece @ pos has opponent's color
  //    add this piece to the array resulting from recursive call 

  // Recursive version:
  pos = [pos[0]+dir[0], pos[1]+dir[1]];
  if (!this.isValidPos(pos) || !this.isOccupied(pos)){
    return [];
  }else {
    //debugger
    // this is not the first piece, if same color, return what we have
    //otherwise is opponent's color, so add and recurse
    if(this.isMine(pos, color)){
      return piecesToFlip;
    }else{
      //debugger
      piecesToFlip.push(pos);
      return this._positionsToFlip(pos, color, dir, piecesToFlip);
    }
  }
  // end of Recursive version
  // if (!this.isValidPos(pos) || this.isOccupied(pos)) {
  //   return [];
  // } else {

  // non-recursive version works!
  // let posArr = [];
  // let position = [pos[0]+dir[0], pos[1]+dir[1]];
  // let oppColor;
  // if (color === 'black') {
  //   oppColor = 'white';
  // } else {
  //   oppColor = 'black';
  // }

  // while (this.isValidPos(position) && this.isMine(position, oppColor)) {
  //   posArr.push(position);
  //   position = [position[0]+dir[0], position[1]+dir[1]];
  // };

  // if (this.isValidPos(position) && this.isMine(position, color)) {
  //   return posArr;
  // } else {
  //   return [];
  // };
};

// if we ever hit an invalid position or null piece -> return empty array
// if the first piece does not have the same color as argument -> return empty array
// after the first piece, add all pieces with the opponent color to the array along the diretcion
// return array of pieces if we hit another piece with the same color


/**
 * Checks that a position is not already occupied and that the color
 * taking the position will result in some pieces of the opposite
 * color being flipped.
 */
Board.prototype.validMove = function (pos, color) {

  let willFlip = false;
  for(let i = 0; i < Board.DIRS.length; i++){
    willFlip = this._positionsToFlip(pos, color, Board.DIRS[i]).length > 0;
    if(willFlip) break;
  };
  return this.isValidPos(pos) && !this.isOccupied(pos) && willFlip;
};

/**
 * Adds a new piece of the given color to the given position, flipping the
 * color of any pieces that are eligible for flipping.
 *
 * Throws an error if the position represents an invalid move.
 */
Board.prototype.placePiece = function (pos, color) {
  if (!this.validMove(pos, color)) {
    throw new Error('Invalid Move');
  }
  this.grid[pos[0]][pos[1]] = new Piece(color);
  let positionsThatWillFlip = [];
  for(let i = 0; i < Board.DIRS.length; i++){
    positionsThatWillFlip = this._positionsToFlip(pos, color, Board.DIRS[i]);
    for(let j = 0; j < positionsThatWillFlip.length; j++) {
      this.getPiece(positionsThatWillFlip[j]).flip();
    };
  };
};

/**
 * Produces an array of all valid positions on
 * the Board for a given color.
 */
Board.prototype.validMoves = function (color) {
  let moves = [];

  for (row = 0; row < this.grid.length; row++) {
    for (col = 0; col < this.grid[row].length; col++) {
      if (this.validMove([row, col], color)) moves.push([row, col]);
    }
  }

  return moves;
};

/**
 * Checks if there are any valid moves for the given color.
 */
Board.prototype.hasMove = function (color) {
  return this.validMoves(color).length > 0;
};



/**
 * Checks if both the white player and
 * the black player are out of moves.
 */
Board.prototype.isOver = function () {
  debugger
  return !(this.hasMove('white') || this.hasMove('black'));
};




/**
 * Prints a string representation of the Board to the console.
 */
Board.prototype.print = function () {
  let pos;
  let rowString;

  for (row = 0; row < this.grid.length; row++) {
    rowString = "";
    for (col = 0; col < this.grid[row].length; col++) {
      pos = [row,col];
      if (this.isOccupied(pos)) {
        rowString += this.getPiece(pos).toString();
      } else {
        rowString += '_ ';
      };
    };
    console.log(rowString);
  };
};



module.exports = Board;