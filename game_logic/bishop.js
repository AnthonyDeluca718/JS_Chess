const Piece = require( './piece.js' ) ;

class Bishop extends Piece {

  constructor(color, board, pos) {
    super(color, board, pos, 'bishop');
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

Bishop.prototype.moves = require('./direction.js');

module.exports = Bishop;
