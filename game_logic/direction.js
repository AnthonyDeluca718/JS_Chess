const moves = function(direct) {
  let drow = direct[0];
  let dcol = direct[1];
  let output = [];

  vect = [this.pos[0] + drow, this.pos[1] + dcol];

  while(true) {
    if (!this.onBoard(vect)) {
      break;
    }

    if (!this.board[vect].empty) {
      if (this.board[vect].color == self.otherColor) {
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
