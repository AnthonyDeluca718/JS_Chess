import { createStore } from 'redux';
import Reducer from './reducers/reducer';

import merge from 'lodash/merge';
import ChessBoard from '../game_logic/chess_board.js';

let chessBoard = new ChessBoard ();
chessBoard.setUp();

let initialState = ({
  chessBoard: chessBoard,
  whitePieces: chessBoard.whitePieces,
  blackPieces: chessBoard.blackPieces,
  currentPlayer: "white",
  moveBuffer: null,
  activeSquare: null,
  gameOver: false,
  errors: ""
});

const middleWare = ()=>{
  return ({});
}

const Store = (preloadedState = initialState) => (
  createStore(
    Reducer,
    preloadedState
  )
);

export default Store;
