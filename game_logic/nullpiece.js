//Nullpieces represesnt empty spaces on the board

class NullPiece {

  constructor() {
    this.color = null;
    this.type = null;
    this.pos = null;
  }

  deleteSelf() {
    return null;
  }

  empty() {
    return true;
  }

  validMoves() {
    return [];
  }
}

module.exports = NullPiece;
