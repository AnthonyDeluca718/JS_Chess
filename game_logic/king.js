const Piece = require( './piece.js' ) ;

class King extends Piece {

  constructor(color, board, pos) {
    super(color, board, pos, "king");
    this.state = false;
  }

  validMoves() {
    const that = this;
    let row = this.pos[0]
    let col = this.pos[1]
    let possibleMoves = [
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
        //empty spaces or those containing enemy pieces will satisfy space.color != this.color
        return(
          that.onBoard(e) && this.board.get(e).color != this.color
        );
      })
    );
  }
}

module.exports = King;
