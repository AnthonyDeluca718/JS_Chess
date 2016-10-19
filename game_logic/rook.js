const moves = require('./direction.js');
const Piece = require('./piece.js');

class Rook extends Piece {
  constructor(color, board, pos) {
    super(color, board, pos, "rook");
  }

  validMoves() {
    const that = this;
    let output = [];
    this.hvDiff().forEach( (diff)=> {
      output = output.concat(that.moves(diff));
    });
    return output;
  }
}

module.exports = Rook;
