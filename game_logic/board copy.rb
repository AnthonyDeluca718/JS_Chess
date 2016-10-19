require_relative 'piece'
require_relative 'NullPiece'
require "colorize"
require_relative "cursor"
require_relative 'king'
require_relative 'pawn'
require_relative 'queen'
require_relative 'rook'
require_relative 'bishop'
require_relative 'knight'

require 'byebug'

class MoveError < StandardError
end

class Board

  attr_reader :grid
  attr_accessor :white_pieces, :black_pieces

  def initialize
    @grid = Array.new(8) {Array.new(8) {NullPiece.new} }
    @white_pieces = []
    @black_pieces = []
  end

  def populate
    (0..7).each do |i|
      pawn_w = Pawn.new(:white,self,[6,i])
      self[[6,i]] = pawn_w
      @white_pieces << pawn_w
      pawn_b = Pawn.new(:black,self,[1,i])
      self[[1,i]] = pawn_b
      @black_pieces << pawn_b
    end

    #rooks
    rook1 = Rook.new(:black,self,[0,0])
    self[[0,0]] = rook1
    @black_pieces << rook1
    rook2 = Rook.new(:black,self,[0,7])
    self[[0,7]] =  rook2
    @black_pieces << rook2
    rook3 = Rook.new(:white,self,[7,0])
    self[[7,0]] = rook3
    @white_pieces << rook3
    rook4 = Rook.new(:white,self,[7,7])
    self[[7,7]] = rook4
    @white_pieces << rook4

    #Knight
    knight1 = Knight.new(:black,self,[0,1])
    self[[0,1]] = knight1
    @black_pieces << knight1
    knight2 = Knight.new(:black,self,[0,6])
    self[[0,6]] =knight2
    @black_pieces << knight2
    knight3 = Knight.new(:white,self, [7,1])
    self[[7,1]] =knight3
    @white_pieces << knight3
    knight4 = Knight.new(:white,self, [7,6])
    self[[7,6]] = knight4
    @white_pieces << knight4

    #Bishops
    bishop1 = Bishop.new(:black,self,[0,2])
    self[[0,2]] = bishop1
    @black_pieces << bishop1
    bishop2 = Bishop.new(:black,self,[0,5])
    self[[0,5]] = bishop2
    @black_pieces << bishop2
    bishop3 = Bishop.new(:white,self, [7,2])
    self[[7,2]] = bishop3
    @white_pieces<< bishop3
    bishop4 = Bishop.new(:white,self, [7,5])
    self[[7,5]] = bishop4
    @white_pieces << bishop4

    #queens
    queen1 = Queen.new(:black,self,[0,3])
    self[[0,3]] = queen1
    @black_pieces << queen1
    queen2 = Queen.new(:white,self,[7,3])
    self[[7,3]] = queen2
    @white_pieces << queen2

    #King
    king1 = King.new(:black,self,[0,4])
    self[[0,4]] = king1
    @black_pieces << king1
    king2 = King.new(:white,self,[7,4])
    self[[7,4]] = king2
    @white_pieces << king2
  end

  def dup
    new_board = Board.new

    (@white_pieces+@black_pieces).each do |piece|
      pos = piece.pos
      color = piece.color
      sym = piece.sym
      new_piece = Board.make_piece(color,new_board,pos,sym)
      new_board[pos] =  new_piece
      if color == :white
        new_board.white_pieces << new_piece
      else
        new_board.black_pieces << new_piece
      end
    end
    new_board

  end

  def [](pos)
    row, col = pos
    @grid[row][col]
  end

  def []=(pos,val)
    row,col = pos
    @grid[row][col] = val
  end

  def self.make_piece(color,board,position,sym)
    case sym
    when :K
      King.new(color,board,position)
    when :Q
      Queen.new(color,board,position)
    when :P
      Pawn.new(color,board,position)
    when :H
      Knight.new(color,board,position)
    when :R
      Rook.new(color,board,position)
    when :B
      Bishop.new(color,board,position)
    end
  end

  def move_pieces(start,finish,color)
    piece = self[start]
    unless piece.valid_moves.include?(finish)
      raise MoveError.new("illegally move")
    end
    #raise move_into_check error, Arbitrary player :white
    if move_into_check(start, finish, color)
      raise MoveError.new("You can not move into check")
    end

    if @white_pieces.include?(self[finish])
      @white_pieces.delete(self[finish])
    elsif @black_pieces.include?(self[finish])
      @black_pieces.delete(self[finish])
    end

    self[start],self[finish] = NullPiece.new, piece
    piece.update_pos(finish)
  end

  def test_move_pieces(start,finish)
    piece = self[start]

    if @white_pieces.include?(self[finish])
      @white_pieces.delete(self[finish])
    elsif @black_pieces.include?(self[finish])
      @black_pieces.delete(self[finish])
    end

    self[start],self[finish] = NullPiece.new, piece
    piece.update_pos(finish)
  end

  def checkmate?(color) #not done

    return false unless in_check?(color)

    if color == :white
      pieces =  @white_pieces
    else
      pieces = @black_pieces
    end

    pieces.each do |piece|
      start = piece.pos
      piece.valid_moves.each do |finish|
        new_board = self.dup
        new_board.test_move_pieces(start,finish)
        unless new_board.in_check?(color)
          # debugger
          return false
        end
      end
    end
    true
  end

  def move_into_check(start,finish,color)
    new_board = self.dup
    # debugger
    new_board.test_move_pieces(start,finish)
    new_board.in_check?(color)
  end

  def in_check?(color)
    if color == :white
      pieces =  @black_pieces
    else
      pieces = @white_pieces
    end

    king_pos = find_king(color)
    pieces.each do |piece|
      if piece.valid_moves.include?(king_pos)
        return true
      end
    end
    false
  end

  # def find_king(color)
  #   @grid.each do |row|
  #     row.each do |piece|
  #       return piece.pos if piece.color == color && piece.sym == :K
  #     end
  #   end
  # end

end
