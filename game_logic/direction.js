// This function is used by pieces that can move an arbitrary number of spaces in
// a single direction, such as Bishops and Queens. The output is all legal moves
// in a given input direction

const moves = function(direct) {
  let drow = direct[0];
  let dcol = direct[1];
  let output = [];

  let vect = [this.pos[0] + drow, this.pos[1] + dcol];

  let bool = true;

  while(bool) {
    if (!this.onBoard(vect)) {
      bool = false;
    } else if (!this.board.get(vect).empty()) {
      if (this.board.get(vect).color === this.otherColor() ) {
        output.push(vect);
      }
      bool = false;
    } else {
      output.push(vect);
      vect = [vect[0]+drow,vect[1]+dcol];
    }
  }
  return output;
}

module.exports = moves;
