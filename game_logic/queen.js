const moves = require('./direction.js');
const Piece = require('./piece.js');

class Queen extends Piece {
  constructor(color, board, pos) {
    super(color, board, pos, "rook");
  }

  validMoves() {
    let output = [];
    (this.hvDiff.concat(this.dDiff)).forEach( (diff)=> {
      output = output.concat(this.moves(diff));
    });
    return output;
  }
}



module.exports = Queen;
