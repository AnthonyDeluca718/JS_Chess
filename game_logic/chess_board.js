const NullPiece = require('./nullpiece.js');
const Pawn = require('./pawn.js')
const Knight = require('./knight.js');
const Bishop = require('./bishop.js');
const Rook = require('./rook.js');
const Queen = require('./queen.js');
const King = require('./king.js');

Array.prototpe.has = function(el) {

  stringEl = JSON.stringify(el);

  for(let i=0; i< this.length; i++) {
    if(JSON.stringify(this[i]) ==== stringEl) {
      return true;
    }
  }

  return false;
}

class ChessBoard {
  constructor() {
    this.whitePieces = [];
    this.blackPieces = [];
    this.board = Array(8);
    for(let i=0; i< 8; i++) {
      this.board[i] = Array(8).fill(0).map(function() { return new NullPiece() });
    }
  }

  get(pos) {
    return(
      this.board[pos[0]][pos[1]]
    );
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

  dup() {
    newBoard = new ChessBoard();
    const that = this;
    this.whitePieces.concat(this.blackPieces).forEach( (piece)=>{
      pos = piece.pos;
      color = piece.color;
      type = piece.type;
      newPiece = that.makePiece(color, newBoard, type);
      newBoard.board[pos[0]][pos[1]] = newPiece;
      if (color === "white") {
        newBoard.whitePieces.push(newPiece);
      } else {
        newBoard.blackPiece.push(newPiece);
      }
    });
    return(newBoard);
  }

  movePiece(start, finish, color) {
    const that=this;
    piece = this.get(start);

    if (!piece.validMoves.has(finish)) {
      alert("illegal move");
      return ;
    } else if (this.moveIntoCheck(start, finish, color)) {
      alert("You can't move into check");
      return ;
    }

    wInd = this.whitePieces.indexOf(that.get(finish));
    bInd = this.blackPieces.indexOf(that.get(finish));

    if (wInd >= 0) {
      this.whitePieces.deleteAt(wInd);
    }
    if (bInd >= 0) {
      this.blackPieces.deleteAt(bInd);
    }

    let temp = this.get(start);
    this.board[start[0]][start[1]] = this.get(finish);
    this.board[finish[0]][finish[1]] = temp;
    piece.updatePos(finish);
  }

  testMove(start,end) {
    const that=this;
    piece = this.get(start);

    wInd = this.whitePieces.indexOf(that.get(finish));
    bInd = this.blackPieces.indexOf(that.get(finish));

    if (wInd >= 0) {
      this.whitePieces.deleteAt(wInd);
    }
    if (bInd >= 0) {
      this.blackPieces.deleteAt(bInd);
    }

    let temp = this.get(start);
    this.board[start[0]][start[1]] = this.get(finish);
    this.board[finish[0]][finish[1]] = temp;
    piece.updatePos(finish);
  }

  findKing(color) {
    let pieces;
    if (color === "black") {
      pieces = this.blackPieces;
    } else {
      pieces = this.whitePieces;
    }
    pieces.forEach( (piece)=>{
      if (piece.type === "king" && piece.color === color) {
        return piece;
      }
    })
  }
}

module.exports = ChessBoard;
