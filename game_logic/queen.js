const Piece = require('./piece.js');

class Queen extends Piece {
  constructor(color, board, pos) {
    super(color, board, pos, "queen");
  }

  validMoves() {
    const that = this;
    let output = [];
    (this.hvDiff().concat(this.dDiff() )).forEach( (diff)=> {
      output = output.concat(that.moves(diff));
    });
    return output;
  }
}

Queen.prototype.moves = require('./direction.js');



module.exports = Queen;
