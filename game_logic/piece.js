class Piece {
  constructor(color, board, pos, type) {
    this.color = color;
    this.board = board;
    this.pos = pos;
    this.sym = type;
  }

  otherColor() {
    if(this.color === "white") {
      return "black";
    } else {
      return "white";
    }
  }

  empty() {
    return false;
  }

  updatePos(newPos) {
    this.pos = newPos;
  }

  onBoard(pos) {
    return (
      pos[0] >= 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] <= 7
    );
  }

  dDiff() {
    return(
      [[1,1],[-1,-1],[1,-1],[-1,1]]
    );
  }
  hvDiff() {
    return(
      [[-1,0],[1,0],[0,1],[0,-1]]
    );
  }
}

module.exports = Piece;
