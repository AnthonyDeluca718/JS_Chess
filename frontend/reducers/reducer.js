import merge from 'lodash/merge';
import ChessBoard from '../../game_logic/chess_board';


Array.prototype.has = function(el) {
  let stringEl = JSON.stringify(el);

  for(let i=0; i< this.length; i++) {
    if(JSON.stringify(this[i]) === stringEl) {
      return true;
    }
  }

  return false;
}

const Reducer = function(state, action) {
  switch(action.type) {
    case "RECEIVE_POSITION":

      if(state.checkmate) {
        return state;
      }

      let oldState = merge({},state);
      let pos = action.pos;
      let chessBoard = oldState.chessBoard;
      let currentPlayer = oldState.currentPlayer;
      let pieces;

      if (currentPlayer === "white") {
        pieces = chessBoard.whitePieces;
      } else {
        pieces = chessBoard.blackPieces;
      }

      //Handling logic

      if (pieces.map( (piece) => {return(piece.pos)}).has(pos) ) {
        oldState.moveBuffer = pos;
        oldState.activeSquare = pos;
      } else if(oldState.moveBuffer === null) {
        return oldState;
      } else {
        let res = chessBoard.movePiece(oldState.moveBuffer, action.pos, oldState.currentPlayer);
        if (res === 1) {
          oldState.moveBuffer = null;
          oldState.activeSquare = null;
          if (currentPlayer === "white") {
            oldState.currentPlayer = "black";
          } else {
            oldState.currentPlayer = "white";
          }
          if (chessBoard.checkmate(oldState.currentPlayer)) {
            oldState.checkmate = true;
          }
        }
      }
      return oldState;
    case "RESET_GAME":
      chessBoard = new ChessBoard ();
      chessBoard.setUp();

      return({
        chessBoard: chessBoard,
        whitePieces: chessBoard.whitePieces,
        blackPieces: chessBoard.blackPieces,
        currentPlayer: "white",
        moveBuffer: null,
        activeSquare: null,
        checkmate: false
      });
    default:
      return state;
  }
}

module.exports = Reducer;
