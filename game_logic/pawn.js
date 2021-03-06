const Piece = require( './piece.js' ) ;

class Pawn extends Piece {
  constructor(color, board, pos) {
    super(color, board, pos, "pawn");
    this.onBoard = this.onBoard.bind(this);

  }

  forward() {
    if (this.color === "black") {
      return 1;
    } else {
      return -1;
    }
  }

  atStartRow() {
    return ( (this.color === "white" && this.pos[0] === 6) || (this.color === "black" && this.pos[0] === 1) );
  }

  validMoves() {
    const that=this;
    let row = this.pos[0]
    let col = this.pos[1]
    let f = this.forward();

    let passive;
    if (this.atStartRow() ) {
      passive = [[row+f,col],[row+2*f,col]];
    } else {
      passive = [[row+f,col]]
    }
    let agressive = [[row+f,col+1],[row+f,col-1]];

    return(
      agressive.filter( (pos) => {
        return ( that.onBoard(pos) && (that.board.get(pos).color === that.otherColor()) );
      }).concat(passive.filter(
        (pos)=>{return that.board.get(pos).empty()})
      )
    );
  }
}

module.exports = Pawn;
