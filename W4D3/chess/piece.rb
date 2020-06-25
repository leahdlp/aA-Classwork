require 'singleton'
require_relative 'board'
require_relative 'slideable'
require_relative 'stepable'

# modules - stepable and slideable
#    #moves_dir
#     #bish, qu, rook
# moves_dir returns every position possible to move
# -> inside module, should just raise error as it takes from subclass instead of module
# raise "made a mistake" or some similar error
# move_dirs gives just directions, moves gives possible moves
# grow_unblocked(dx, dy)
#     -> plug in direction, add into piece's position
# check if still on board (valid move), check if hit own piece, check if other color(if other color, stop at that piece position)


class Piece
  
  attr_accessor :color, :pos
  attr_reader :board

  def initialize(color = nil, pos, board)
    @color = color
    @pos = pos
    @board = board
  end

  def empty?
    false
  end

  # def moves
    
  # end

end

class NullPiece < Piece
  include Singleton

  def initialize
    # look back at what null should look like
    @color = :blank
    @pos = ""
  end

  def empty?
    true
  end

end

class Pawn < Piece
  attr_reader :color

  WHITE_FORWARD = [
    [-2, 0], #starting row
    [-1, 0], #forward
    [-1, -1], #attack right
    [-1, 1], #attack left
  ]
  
  BLACK_FORWARD = [
    [2,0], #from start row
    [1,0], #after start row
    [1,1], #attack right
    [1,-1] #attack left
  ]

  def initialize(color, pos, board)
    super
  end
  
  def move_dirs
    
  end

  private

  def at_start_row?
    return true if (self.pos[0] == 1 && self.color == :B) || (self.pos[0] == 6 && self.color == :W)
    false
  end

  def forward_dir
    if self.color == :B
      return 1
    elsif self.color == :W
      return -1
    end
  end

  def forward_steps
    steps = [] 
    pos = self.pos.dup

    if self.color == :B
      BLACK_FORWARD.each do |move|
        dy = move[0]
        dx = move[1]
  
        if dx == 0 && at_start_row?
          steps << move
        elsif !at_start_row && dx == 0
          steps << move if dy == 1
        end
      end
      
    elsif self.color == :W
      WHITE_FORWARD.each do |move|
        dy = move[0]
        dx = move[1]
  
        if dx == 0 && at_start_row?
          steps << move
        elsif !at_start_row && dx == 0
          steps << move if dy == -1
        end
      end
    end

    
    steps
  end

  # i think this method looks good now
  def side_attacks
    pos = self.pos.dup
    
    if self.color == :B
      BLACK_FORWARD.each do |move|
        dy = move[0]
        dx = move[1]

        if dx != 0 && at_start_row?
          steps << move
        elsif !at_start_row && dx == 0
          steps << move if dy == -1
        end
      end

    elsif self.color == :W 

      WHITE_FORWARD.each do |move|
        dy = move[0]
        dx = move[1]

        if dx != 0 && at_start_row?
          steps << move
        elsif !at_start_row && dx == 0
          steps << move if dy == -1
        end
      end
      
    end
  end

end

class Rook < Piece
  include Slideable 

  attr_accessor :color, :pos
  attr_reader :board
  
  def initialize(color, pos, board)
    super
  end

  # need to add move_dirs PER CLASS

end

class Knight < Piece
  include Stepable
  attr_accessor :color, :pos
  attr_reader :board

  def initialize(color, pos, board)
    super
  end

end


class Bishop < Piece
  include Slideable 

  attr_accessor :color, :pos
  attr_reader :board

  def initialize(color, pos, board)
    super
  end
end

class Queen < Piece
  include Slideable 

  attr_accessor :color, :pos
  attr_reader :board

  def initialize(color, pos, board)
    super
  end

end

class King < Piece
  include Stepable

  # attr_accessor :color, :pos
  # attr_reader :board


  def initialize(color, pos, board)
    super
  end

end


# module MyEnumerable
#   def my_any?(&prc)
#     # debugger
#     self.my_each do |ele|
#       return true if prc.call(ele)
#     end
#     false
#   end

#   def test
#     puts 'module'
#   end

#   def my_each
#     raise 'Child class needs a my_each method!'
#   end
# end

# class Farm
#   include MyEnumerable

#   def initialize(animals)
#     # @a1, @a2, @a3, @a4 = animals
#     @animals = animals
#   end

#   def my_each(&prc)
#     # super
#     # prc.call(@a1)
#     # prc.call(@a2)
#     # prc.call(@a3)
#     # prc.call(@a4)
#     @animals.each(&prc)
#   end
# end