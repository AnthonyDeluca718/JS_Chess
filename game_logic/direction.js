const moves = function(direct) {
  let drow = direct[0];
  let dcol = direct[1];
  let output = [];

  let vect = [this.pos[0] + drow, this.pos[1] + dcol];

  while(true) {
    if (!this.onBoard(vect)) {
      break;
    }

    if (!this.board.get(vect).empty) {
      if (this.board.get(vect).color === this.otherColor() ) {
        output.push(vect);
      }
      break;
    } else {
      output.push(vect);
      vect = [vect[0]+drow,vect[1]+dcol];
    }

    return output;
  }
}

module.exports = moves;
