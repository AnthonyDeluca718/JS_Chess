class Piece
  HORIZON_DIFF = [[0,1],[0,-1]]
  VERTICAL_DIFF = [[-1,0],[1,0]]
  DIAG_DIFF = [[1,1],[-1,-1],[1,-1],[-1,1]]
  attr_reader :color, :pos, :sym

  def initialize(color, board, pos, sym)
    @color = color
    @board = board
    @pos = pos
    @sym = sym
  end

  def other_color
    other = [:white,:black].reject {|c| c == @color}
    other[0]
  end

  def empty?
    false
  end

  def update_pos(new_pos)
    @pos = new_pos
  end

  def on_board?(pos)
    pos[0].between?(0,7) && pos[1].between?(0,7)
  end

end
