import { createStore } from 'redux';
// const Reducer = require('./reducers/reducer');
import Reducer from './reducers/reducer';

import merge from 'lodash/merge';
import Piece from '../game/piece';

let board = Array(8);
for(let i=0; i< 8; i++) {
  board[i] = Array(8);
}
let whitePieces = [];
let blackPieces = [];

//Pawns
let pawn_w, pawn_b;
for(let i=0; i< 8; i++) {
  let pawn_w = new Piece("white","pawn",[6,i]);
  board[6][i] = pawn_w;
  whitePieces.push(pawn_w);
  let pawn_b = new Piece("black","pawn",[1,i]);
  board[1][i] = pawn_b;
  blackPieces.push(pawn_b);
}

//Rooks
let rook1 = new Piece("black","rook",[0,0]);
board[0][0] = rook1;
blackPieces.push( rook1 );
let rook2 = new Piece("black","rook",[0,7]);
board[0][7] =  rook2;
blackPieces.push( rook2 );
let rook3 = new Piece("white","rook",[7,0]);
board[7][0] = rook3;
whitePieces.push( rook3 );
let rook4 = new Piece("white","rook",[7,7]);
board[7][7] = rook4;
whitePieces.push( rook4 );

//Knights
let knight1 = new Piece("black","knight",[0,1]);
board[0][1] = knight1;
blackPieces.push( knight1 );
let knight2 = new Piece("black","knight",[0,6]);
board[0][6] =knight2;
blackPieces.push( knight2 );
let knight3 = new Piece("white","knight", [7,1]);
board[7][1] =knight3;
whitePieces.push( knight3 );
let knight4 = new Piece("white","knight", [7,6]);
board[7][6] = knight4;
whitePieces.push( knight4 );

//Bishops
let bishop1 = new Piece("black","bishop",[0,2]);
board[0][2] = bishop1;
blackPieces.push( bishop1 );
let bishop2 = new Piece("black","bishop",[0,5]);
board[0][5] = bishop2;
blackPieces.push( bishop2 );
let bishop3 = new Piece("white","bishop", [7,2]);
board[7][2] = bishop3;
whitePieces.push( bishop3 );
let bishop4 = new Piece("white","bishop", [7,5]);
board[7][5] = bishop4;
whitePieces.push( bishop4 );

//queens
let queen1 = new Piece("black","queen",[0,3]);
board[0][3] = queen1;
blackPieces.push( queen1 );
let queen2 = new Piece("white","queen",[7,3]);
board[7][3] = queen2;
whitePieces.push( queen2 );

//King
let king1 = new Piece("black","king",[0,4]);
board[0][4] = king1;
blackPieces.push( king1 );
let king2 = new Piece("white","king",[7,4]);
board[7][4] = king2;
whitePieces.push( king2 );

let initialState = ({
  board: board,
  whitePieces: whitePieces,
  blackPieces: blackPieces,
  currentPlayer: "white",
  moveBuffer: [],
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
