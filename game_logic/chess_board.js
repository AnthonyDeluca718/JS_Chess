const NullPiece = require('./nullpiece.js');
const Pawn = require('./pawn.js')
const Knight = require('./knight.js');
const Bishop = require('./bishop.js');
const Rook = require('./rook.js');
const Queen = require('./queen.js');
const King = require('./king.js');

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

//The chessBoard maintains an array of 64 pieces. Each piece has a link to its board.
//The board enforces constraints on which moves are legal.
//The class contains the logic of whether a specific board is in check or if the game is over.
class ChessBoard {

  // // // Constructor and Set Up Code // // //

  constructor() {
    this.whitePieces = [];
    this.blackPieces = [];
    this.board = Array(8);
    for(let i=0; i< 8; i++) {
      this.board[i] = Array(8).fill(0).map(function() { return new NullPiece() });
    }
  }

  setUp() {
    let whitePieces = this.whitePieces;
    let blackPieces = this.blackPieces;
    let board = this.board;
    //Pawns
    let pawn_w, pawn_b;
    for(let i=0; i< 8; i++) {
      let pawn_w = new Pawn("white",this,[6,i]);
      board[6][i] = pawn_w;
      whitePieces.push(pawn_w);
      let pawn_b = new Pawn("black",this,[1,i]);
      board[1][i] = pawn_b;
      blackPieces.push(pawn_b);
    }

    //Rooks
    let rook1 = new Rook("black",this, [0,0]);
    board[0][0] = rook1;
    blackPieces.push( rook1 );
    let rook2 = new Rook("black",this, [0,7]);
    board[0][7] =  rook2;
    blackPieces.push( rook2 );
    let rook3 = new Rook("white",this, [7,0]);
    board[7][0] = rook3;
    whitePieces.push( rook3 );
    let rook4 = new Rook("white", this, [7,7]);
    board[7][7] = rook4;
    whitePieces.push( rook4 );

    //Knights
    let knight1 = new Knight("black", this, [0,1]);
    board[0][1] = knight1;
    blackPieces.push( knight1 );
    let knight2 = new Knight("black", this, [0,6]);
    board[0][6] =knight2;
    blackPieces.push( knight2 );
    let knight3 = new Knight("white", this, [7,1]);
    board[7][1] =knight3;
    whitePieces.push( knight3 );
    let knight4 = new Knight("white", this, [7,6]);
    board[7][6] = knight4;
    whitePieces.push( knight4 );

    //Bishops
    let bishop1 = new Bishop("black", this, [0,2]);
    board[0][2] = bishop1;
    blackPieces.push( bishop1 );
    let bishop2 = new Bishop("black", this, [0,5]);
    board[0][5] = bishop2;
    blackPieces.push( bishop2 );
    let bishop3 = new Bishop("white", this, [7,2]);
    board[7][2] = bishop3;
    whitePieces.push( bishop3 );
    let bishop4 = new Bishop("white", this,  [7,5]);
    board[7][5] = bishop4;
    whitePieces.push( bishop4 );

    //queens
    let queen1 = new Queen("black",this,[0,3]);
    board[0][3] = queen1;
    blackPieces.push( queen1 );
    let queen2 = new Queen("white",this,[7,3]);
    board[7][3] = queen2;
    whitePieces.push( queen2 );

    //King
    let king1 = new King("black", this,[0,4]);
    board[0][4] = king1;
    blackPieces.push( king1 );
    let king2 = new King("white", this,[7,4]);
    board[7][4] = king2;
    whitePieces.push( king2 );

    //end Set up

    this.whitePieces = whitePieces;
    this.blackPieces = blackPieces;
  }

  // // // Helper Methods // // //

  //gets the piece at the given position. Used to simplify the code
  get(pos) {
    return(
      this.board[pos[0]][pos[1]]
    );
  }

  findKing(color) {
    let pieces;
    if (color === "black") {
      pieces = this.blackPieces;
    } else {
      pieces = this.whitePieces;
    }

    for(let i=0; i< pieces.length; i++) {
      let piece = pieces[i];
      if (piece.type === "king" && piece.color === color) {
        return piece;
      }
    }
  }

  makePiece(color, pos, type) {
    switch(type) {
      case "king":
      return new King(color, this, pos);
      case "queen":
      return new Queen(color, this, pos);
      case "pawn":
      return new Pawn(color, this, pos);
      case "knight":
      return new Knight(color, this, pos);
      case "rook":
      return new Rook(color, this, pos);
      case "bishop":
      return new Bishop(color, this, pos);
    }
  }

  // // // Moving Pieces and Castling // // //

  //We attempt to move the piece from start to finish.
  //If the move is illegal because we move into check we return -1.
  //If the piece cannot legally move to the finish we return -2 (ex bishop trying to move vertical).
  movePiece(start, finish, color) {
    const that=this;
    let piece = this.get(start);

    if (!piece.validMoves().has(finish)) {
      return -2;
    } else if (this.moveIntoCheck(start, finish, color)) {
      return -1;
    }
    let wInd = this.whitePieces.indexOf(that.get(finish));
    let bInd = this.blackPieces.indexOf(that.get(finish));

    if (wInd >= 0) {
      this.whitePieces.splice(wInd,1);
    }
    if (bInd >= 0) {
      this.blackPieces.splice(bInd,1);
    }

    this.board[finish[0]][finish[1]] = piece;
    this.board[start[0]][start[1]] = new NullPiece();

    //promotion
    if( piece.type==="pawn" && (finish[0] === 7 || finish[0] === 0) ) {

      let pieces = (piece.color === "white" ? (this.whitePieces) : (this.blackPieces) );
      let ind = pieces.indexOf(piece);
      pieces.splice(ind,1);

      piece = new Queen(piece.color, this, finish);
      this.board[finish[0]][finish[1]] = piece;
      pieces.push(piece);
    }
    piece.updatePos(finish);
    return 1;
  }

  //Same as a normal move except we do not test for check and pawn promotion.
  //We use this method to test for moving into check.
  //To do this we duplicate the board, make the test move, and then check if the
  //player is in check.
  testMove(start,finish) {
    const that=this;
    let piece = this.get(start);

    let wInd = this.whitePieces.indexOf(that.get(finish));
    let bInd = this.blackPieces.indexOf(that.get(finish));

    if (wInd >= 0) {
      this.whitePieces.splice(wInd, 1);
    }
    if (bInd >= 0) {
      this.blackPieces.splice(bInd, 1);
    }

    this.board[finish[0]][finish[1]] = piece;
    this.board[start[0]][start[1]] = new NullPiece();

    piece.updatePos(finish);
  }

  //the castle function handles both castling long and short
  castle(color, castleType) {

    let king = this.findKing(color);

    if(king.moved) {
      return -3; //You can't castle if you moved your Rook or King.
    }

    let pieces, enemyPieces, row;

    if (color === "black") {
      row = 0;
      enemyPieces = this.whitePieces;
    } else {
      row = 7;
      enemyPieces = this.blackPieces;
    }

    let spaces, rook;
    if(castleType === "short") {
      rook = this.get([row, 7]);
      spaces = [ [row, 4], [row, 5], [row, 6] ];
    } else if (castleType === "long") {
      rook = this.get([row,0]);
      spaces = [ [row, 1], [row, 2], [row, 3], [row, 4] ];
    }

    if (rook.type != "rook" || rook.moved) {
      return -3; //You can't castle if you moved your Rook or King.
    }

    for (let i=1; i< spaces.length-1; i++ ) {
      if (!this.get(spaces[i]).empty() ) {
        return -3; //spaces between rook and king must be empty to castle
      }
    }

    //can't castle through or into check
    for(let i=0; i < enemyPieces.length; i++) {
      let eMoves = enemyPieces[i].validMoves();

      for (let j=0; j < spaces.length; j++) {
        if (eMoves.has(spaces[j]) ) {
          return -3; //You can't castle through or into check
        }
      }
    }

    if (castleType === "long") {
      rook.updatePos([row, 3]);
      king.updatePos( [row, 2]);
      this.board[row][3] = rook;
      this.board[row][2] = king;
      this.board[row][0] = new NullPiece();
      this.board[row][4] = new NullPiece();
    } else {
      rook.updatePos([row, 5]);
      king.updatePos( [row, 6]);
      this.board[row][5] = rook;
      this.board[row][6] = king;
      this.board[row][4] = new NullPiece();
      this.board[row][7] = new NullPiece();
    }

    return 1;
  }

  // // // Code Associated with Check // // //

  //In order to test if we are in check we use the following procedure:
  //  -duplicate the board
  //  -make the proposed move without testing for check
  //  -check if the active player's king is in check on the resulting board


  //This is a deep duplication
  dup() {
    let newBoard = new ChessBoard();

    let pos, color, type, newPiece;

    this.whitePieces.concat(this.blackPieces).forEach( (piece)=>{
      pos = piece.pos;
      color = piece.color;
      type = piece.type;
      newPiece = newBoard.makePiece(color, pos, type);
      newBoard.board[pos[0]][pos[1]] = newPiece;
      if (color === "white") {
        newBoard.whitePieces.push(newPiece);
      } else {
        newBoard.blackPieces.push(newPiece);
      }
    });
    return(newBoard);
  }

  inCheck(color) {
    let pieces;
    if (color === "white") {
      pieces = this.blackPieces;
    } else {
      pieces = this.whitePieces;
    }

    let kingPos = this.findKing(color).pos;

    for (let i=0; i < pieces.length; i++) {
      if (pieces[i].validMoves().has(kingPos)) {
        return true;
      }
    }
    return false;
  }

  //Tests if a proposed move moves into check
  moveIntoCheck(start, finish, color) {
    let newBoard = this.dup();
    newBoard.testMove(start, finish);
    return newBoard.inCheck(color);
  }

  checkmate(color) {
    const that = this;
    if (!this.inCheck(color)) {
      return false;
    }

    let pieces;
    if (color === "white") {
      pieces = this.whitePieces;
    } else {
      pieces = this.blackPieces;
    }

    for(let i=0; i<pieces.length; i++){
      let piece = pieces[i];
      let moves = piece.validMoves();
      let start = piece.pos;

      for(let j=0; j<moves.length; j++) {
        if( !that.moveIntoCheck(start, moves[j], color) ) {
          return false;
        }
      }
    }

    return true;
  }

  //Determines if a color is checkmated, in check, or stalemated.
  checkStatus(color) {
    const that = this;
    const inCheck = this.inCheck(color);
    let noLegalMoves = true;

    let pieces;
    if (color === "white") {
      pieces = this.whitePieces;
    } else {
      pieces = this.blackPieces;
    }

    for(let i=0; i<pieces.length; i++){
      let piece = pieces[i];
      let moves = piece.validMoves();
      let start = piece.pos;

      for(let j=0; j<moves.length; j++) {
        if( !that.moveIntoCheck(start, moves[j], color) ) {
          noLegalMoves =  false;
        }
      }
    }

    if (noLegalMoves && inCheck) {
      return "checkmate";
    } else if (noLegalMoves) {
      return "stalemate";
    } else if (inCheck) {
      return "check";
    } else {
      return false;
    }
  }

  // // // Random Set Up // // //

  randSetUp() {
    let whitePieces = this.whitePieces;
    let blackPieces = this.blackPieces;
    let board = this.board;

    //queens
    let queen1 = new Queen("black",this,[0,3]);
    board[0][3] = queen1;
    blackPieces.push( queen1 );
    let queen2 = new Queen("white",this,[7,3]);
    board[7][3] = queen2;
    whitePieces.push( queen2 );

    //King
    let king1 = new King("black", this,[0,4]);
    board[0][4] = king1;
    blackPieces.push( king1 );
    let king2 = new King("white", this,[7,4]);
    board[7][4] = king2;
    whitePieces.push( king2 );

    let num1, num2; //random numbers
    let piece1, piece2;

    let frontArr = ["pawn", "pawn", "pawn", "bishop", "bishop", "bishop", "knight", "knight", "knight", "rook"];
    let backArr = ["pawn", "bishop", "knight", "rook", "queen" ];

    //Random Front Row
    for(let i=0; i< 8; i++ ) {
      num1 = Math.floor(10*Math.random());
      num2 = Math.floor(10*Math.random());

      piece1 = this.makePiece("white", [6,i], frontArr[num1]);
      board[6][i] = piece1;
      whitePieces.push(piece1);
      piece2 = this.makePiece("black", [1,i], frontArr[num2]);
      board[1][i] = piece2;
      blackPieces.push(piece2);
    }

    //Random Back row
    [0,1,2,3,5,6,7].forEach( (i) => {

      num1 = Math.floor(5*Math.random());
      num2 = Math.floor(5*Math.random());

      piece1 = this.makePiece("white", [7,i], backArr[num1]);
      board[7][i] = piece1;
      whitePieces.push(piece1);
      piece2 = this.makePiece("black", [0,i], backArr[num2]);
      board[0][i] = piece2;
      blackPieces.push(piece2);

    });
  }

}

module.exports = ChessBoard;
