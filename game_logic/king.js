const Piece = require( './piece.js' ) ;

class King extends Piece {

  constructor(color, board, pos) {
    super(color, board, pos, "king");
  }

  validMoves() {
    let row = this.pos[0]
    let col = this.pos[1]
    let possible_moves = [
      [row+1, col],
      [row+1, col+1],
      [row+1, col-1],
      [row-1, col],
      [row-1, col+1],
      [row-1, col-1],
      [row, col+1],
      [row, col-1]
    ]

    return(
      possibleMoves.filter( e=> {
        return(
          onBoard(e) && this.board[e].color != this.color
        );
      })
    );
  }
}

module.exports = King;
