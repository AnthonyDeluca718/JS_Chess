const Piece = require( './piece.js' );

class Bishop extends Piece {

  constructor(color, board, pos) {
    super(color, board, pos, 'bishop');
  }

  validMoves() {
    const that = this;
    let output = [];
    //dDiff is the set of diagonal direction vectors
    this.dDiff().forEach( (diff) => {
      // moves(diff) is the set of legal spaces in a given direction
      output = output.concat(that.moves(diff));
    });
    return output;
  }
}

Bishop.prototype.moves = require('./direction.js');

module.exports = Bishop;
