const Piece = require('./piece.js');

class Queen extends Piece {
  constructor(color, board, pos) {
    super(color, board, pos, "queen");
  }

  validMoves() {
    const that = this;
    let output = [];
    //hvDiff and dDiff are the sets of horizontal and vertical direction vectors 
    (this.hvDiff().concat(this.dDiff() )).forEach( (diff)=> {
      // moves(diff) is the set of legal spaces in a given direction
      output = output.concat(that.moves(diff));
    });
    return output;
  }
}

Queen.prototype.moves = require('./direction.js');

module.exports = Queen;
