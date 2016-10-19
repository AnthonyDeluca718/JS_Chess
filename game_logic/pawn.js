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
    if (this.atStartRow() ) {
      let passive = [[row+f,col],[row+2*f,col]];
    } else {
      let passive = [[row+f,col]]
    }
    let agressive = [[row+f,col+1],[row+f,col-1]].filter( (pos) => {return that.board.get(pos).color = that.otherColor()} );


    return(
      agressive.concat(passive.filter((pos)=>{return that.board.get(pos).empty()}))
    );
  }
}

module.exports = Pawn;
