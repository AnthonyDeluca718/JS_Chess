const Piece = require('./piece.js');

class Rook extends Piece {
  constructor(color, board, pos) {
    super(color, board, pos, "rook");
    this.moved = false;
  }

  validMoves() {
    const that = this;
    let output = [];

    //hvDiff are the horizontal+vertical direction vectors
    this.hvDiff().forEach( (diff)=> {
      // moves(diff) is the set of legal spaces in a given direction
      output = output.concat(that.moves(diff));
    });
    return output;
  }
}

Rook.prototype.moves = require('./direction.js');

module.exports = Rook;
