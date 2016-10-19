const Piece = require( './piece.js' ) ;
const moves = require( './direction.js');

class Bishop extends Piece {

  constructor(color, board, pos) {
    super(color, board, pos, 'bishop');
  }

  validMoves() {
    let output = [];
    this.dDiff.forEach( (diff)=> {
      output = output.concat(this.moves(diff));
    });
    return output;
  }
}

module.exports = Bishop;
