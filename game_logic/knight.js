const Piece = require( './piece.js' ) ;

class Knight extends Piece {
  constructor(color, board, pos) {
    super(color, board, pos, "knight");
  }

  validMoves() {
    row = this.pos[0]
    col = this.pos[1]
    possibleMoves = [
      [row+1, col+2],
      [row+1, col-2],
      [row-1, col+2],
      [row-1, col-2],
      [row+2, col+1],
      [row+2, col-1],
      [row-2, col+1],
      [row-2, col-1]
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

module.exports = Knight;
