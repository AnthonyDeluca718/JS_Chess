const Piece = require( './piece.js' ) ;

class Knight extends Piece {
  constructor(color, board, pos) {
    super(color, board, pos, "knight");
  }

  validMoves() {
    let row = this.pos[0];
    let col = this.pos[1];
    let possibleMoves = [
      [row+1, col+2],
      [row+1, col-2],
      [row-1, col+2],
      [row-1, col-2],
      [row+2, col+1],
      [row+2, col-1],
      [row-2, col+1],
      [row-2, col-1]
    ];

    return(
      possibleMoves.filter( e=> {
        return(
          onBoard(e) && this.board.get(e).color != this.color
        );
      })
    );
  }
}

module.exports = Knight;
