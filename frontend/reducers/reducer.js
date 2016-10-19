import merge from 'lodash/merge';
import Piece from '../piece';

def find_king(color, board)

  board.each do |row|
    board.each do |col|
      return [row, col] if piece.color == color && piece.sym == :K
    end
  end
end

function find_king(color, board) {
  let piece;
  for (let i=0; i< 8; i++) {
    for (let j=0; j<8; j++) {
      piece = board[i][j];
      if (piece && piece.color="color" && piece.type="king") {
        return piece;
      }
    }
  }
}

const Reducer = function(state, action) {
  switch(action.type) {
    case "RECEIVE_POSITION":
      console.log(action.pos);
      return state;
    default:
      return state;
  }
}

module.exports = Reducer;
