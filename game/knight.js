const on_board = function(pos) {
  pos[0] >= 0 && pos[0] <= 7 && pos[1] >= 0 && pos[1] <= 7
}

const Knight = function(board, pos) {
    let row = @pos[0];
    let col = @pos[1];
    let possible_moves = [
      [row+1, col+2],
      [row+1, col-2],
      [row-1, col+2],
      [row-1, col-2],
      [row+2, col+1],
      [row+2, col-1],
      [row-2, col+1],
      [row-2, col-1]
    ];
  let moves = possible_moves.filter(e=>{
    if !on_board(e) {
      return false;
    } else {
      let piece = board[[e[1]]]
    }
  }

  )
}
