class NullPiece {

  constructor() {
    this.color = null;
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
