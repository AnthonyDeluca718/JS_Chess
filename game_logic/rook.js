
const Piece = require('./piece.js');

class Rook extends Piece {
  constructor(color, board, pos) {
    super(color, board, pos, "rook");
    this.moves = require('./direction.js');
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
