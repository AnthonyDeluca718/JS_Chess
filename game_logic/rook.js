const moves = require('./direction.js');
const Piece = require('./piece.js');

class Rook extends Piece {
  constructor(color, board, pos) {
    super(color, board, pos, "rook");
  }

  validMoves() {
    let output = [];
    this.hvDiff.forEach( (diff)=> {
      output = output.concat(this.moves(diff));
    });
    return output;
  }
}

module.exports = Rook;
