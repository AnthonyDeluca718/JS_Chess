import merge from 'lodash/merge';
import Piece from '../../game/piece';
import _initialBoard from '../../game/board';

let board = Array(8);
for(let i=0; i< 8; i++) {
  board[i] = Array(8);
}
let white_pieces = [];
let black_pieces = [];

//Pawns
let pawn_w, pawn_b;
for(let i=0; i< 8; i++) {
  let pawn_w = new Piece("white","pawn",[6,i]);
  board[6][i] = pawn_w;
  white_pieces.push(pawn_w);
  let pawn_b = new Piece("black","pawn",[1,i]);
  board[1][i] = pawn_b;
  black_pieces.push(pawn_b);
}

//Rooks
let rook1 = new Piece("black","rook",[0,0]);
board[0][0] = rook1;
black_pieces.push( rook1 );
let rook2 = new Piece("black","rook",[0,7]);
board[0][7] =  rook2;
black_pieces.push( rook2 );
let rook3 = new Piece("white","rook",[7,0]);
board[7][0] = rook3;
white_pieces.push( rook3 );
let rook4 = new Piece("white","rook",[7,7]);
board[7][7] = rook4;
white_pieces.push( rook4 );

//Knights
let knight1 = new Piece("black","knight",[0,1]);
board[[0,1]] = knight1;
black_pieces.push( knight1 );
let knight2 = new Piece("black","knight",[0,6]);
board[[0,6]] =knight2;
black_pieces.push( knight2 );
let knight3 = new Piece("white","knight", [7,1]);
board[7][1] =knight3;
white_pieces.push( knight3 );
let knight4 = new Piece("white","knight", [7,6]);
board[7][6] = knight4;
white_pieces.push( knight4 );

//Bishops
let bishop1 = new Piece("black","bishop",[0,2]);
board[0][2] = bishop1;
black_pieces.push( bishop1 );
let bishop2 = new Piece("black","bishop",[0,5]);
board[0][5] = bishop2;
black_pieces.push( bishop2 );
let bishop3 = new Piece("white","bishop", [7,2]);
board[7][2] = bishop3;
white_pieces.push( bishop3 );
let bishop4 = new Piece("white","bishop", [7,5]);
board[7][5] = bishop4;
white_pieces.push( bishop4 );

//queens
let queen1 = new Piece("black","queen",[0,3]);
board[0][3] = queen1;
black_pieces.push( queen1 );
let queen2 = new Piece("white","queen",[7,3]);
board[7][3] = queen2;
white_pieces.push( queen2 );

//King
let king1 = new Piece("black","king",[0,4]);
board[0][4] = king1;
black_pieces.push( king1 );
let king2 = new Piece("white","king",[7,4]);
board[7][4] = king2;
white_pieces.push( king2 );

const BoardReducer = function(state = board, action) {
  switch(action.type) {
    default:
      return state;
  }
}

export default BoardReducer;
