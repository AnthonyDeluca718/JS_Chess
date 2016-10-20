import merge from 'lodash/merge';

const Reducer = function(state, action) {
  switch(action.type) {
    case "RECEIVE_POSITION":
      let oldState = merge({},state);

      if(oldState.moveBuffer.length === 0) {
        oldState.moveBuffer.push(action.pos);
        oldState.activeSquares = oldState.chessBoard.get(action.pos).validMoves();
      } else {
        let res = oldState.chessBoard.movePiece(oldState.moveBuffer[0], action.pos, oldState.currentPlayer);
        oldState.moveBuffer = [];
        oldState.board = chessBoard.board;
        oldState.activeSquares = [];
        if (oldState.currentPlayer === "white") {
          oldState.currentPlayer = "black";
        } else {
          oldState.currentPlayer = "white";
        }
      }
      return oldState;
    default:
      return state;
  }
}

module.exports = Reducer;
