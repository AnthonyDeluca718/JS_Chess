const Piece = require( './piece.js' ) ;

class Bishop extends Piece {

  constructor(color, board, pos) {
    super(color, board, pos, 'bishop');
    this.moves = require('./direction.js');
  }

  validMoves() {
    const that = this;
    let output = [];
    this.dDiff().forEach( (diff)=> {
      output = output.concat(that.moves(diff));
    });
    return output;
  }
}

module.exports = Bishop;
