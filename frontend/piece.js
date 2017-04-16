//The Piece class we use here is different from the class used in game-logic.
//This class is a simple struct with no member functions
class Piece {
  constructor(color, type, position) {
    this.position = position;
    this.color = color;
    this.type = type;
  }
}

export default Piece;
