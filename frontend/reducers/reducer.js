import merge from 'lodash/merge';
import ChessBoard from '../../game_logic/chess_board';

// Array.prototype.include(obj) checks object equality. In particular arrays are
// objects in Javascript.
Array.prototype.has = function(el) {
  let stringEl = JSON.stringify(el);

  for(let i=0; i< this.length; i++) {
    if(JSON.stringify(this[i]) === stringEl) {
      return true;
    }
  }

  return false;
}

//When the board receives a postion:
//If the buffer is empty and the postion represent the active player's piece the move is added to the buffer.
//If the buffer already has a position and a different piece is selected the new position is added to the buffer and the old one is removed.
//If the second is a legal move for the piece represented by the first position the board attempts to make the move. If the move is rejected the second pos is removed from the buffer.
//After a move is executed the buffer is reset to []
const Reducer = function(state, action) {

  switch(action.type) {
    case "RECEIVE_POSITION":
      if(state.gameOver) {
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
        let res;

        if ( chessBoard.get(oldState.moveBuffer).type==="king" &&
          (pos[0] === 7 || pos[0] === 0) &&
          (pos[1] === 2 || pos[1] === 6)
        ) {
          res = chessBoard.castle(currentPlayer, (pos[1] === 6 ? "short" : "long") );
        } else {
          res = chessBoard.movePiece(oldState.moveBuffer, action.pos, currentPlayer);
        }

        if (res === 1) {
          oldState.moveBuffer = null;
          oldState.activeSquare = null;
          if (currentPlayer === "white") {
            oldState.currentPlayer = "black";
          } else {
            oldState.currentPlayer = "white";
          }

          //handling gameover
          let checkStatus = oldState.chessBoard.checkStatus(oldState.currentPlayer);
          if (checkStatus === "check") {
            oldState.errors = "Check";
          } else if (checkStatus === "checkmate") {
            oldState.gameOver = "Checkmate";
          } else if (checkStatus === "stalemate") {
            oldState.gameOver = "Stalemate";
          }

        } else if (res === -1) {
          oldState.errors = "You must avoid check";
        } else if (res === -3) {
          oldState.errors = "You cannot castle";
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
    case "RANDOM_GAME":
      chessBoard = new ChessBoard ();
      chessBoard.randSetUp();

      return({
        chessBoard: chessBoard,
        whitePieces: chessBoard.whitePieces,
        blackPieces: chessBoard.blackPieces,
        currentPlayer: "white",
        moveBuffer: null,
        activeSquare: null,
        checkmate: false
      });
    case "REMOVE_ERRORS":
      oldState = merge({}, state);
      oldState.errors = "";
      return oldState;
    default:
      return state;
  }
}

module.exports = Reducer;
