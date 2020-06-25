require "byebug"
module Slideable
# check if still on board (valid move), check if hit own piece, check if other color(if other color, stop at that piece position)

  HORIZONTAL_DIRS = [
    [0,1], #1 to the right
    [0,-1], #1 to the left
    [1,0], #1 up
    [-1,0] #1 down
  ]
  DIAGONAL_DIRS = [
    [1,1], #1up 1right
    [1,-1], #1up, 1left
    [-1,1], #1down, 1right
    [-1,-1] #1down, 1left
  ]

  # only called on rooks/queens
  def horizontal_dirs
    starting_pos = self.pos
    hor_moves = []
    
    HORIZONTAL_DIRS.each do |dir|
      dy, dx = dir[0], dir[1]
            
      hor_moves += grow_unblocked(dy, dx)
    end

    hor_moves
  end

  # only called on bishops/queens
  def diagonal_dirs
    start_pos = self.pos
    diag_moves = []

    DIAGONAL_DIRS.each do |dir|
      dy, dx = dir[0], dir[1]
            
      diag_moves += grow_unblocked(dy, dx)
    end

    diag_moves
  end
  

  # This method allows rooks to move diagonally or horizontally, NOT GOOD!

  def moves
    # moves = []

      # move_dirs.each do |dx, dy|
        # moves += grow_unblocked(dy, dx)
      # end 
    # moves

    # self.horizontal_dirs + self.diagonal_dirs
  end
  
  # def return_move_array(array)
  #   array.select do |move| 
  #       move if valid_pos?(pos) && (board[pos].empty? || board[pos].color != self.color)
  #   end
  # end

  private

  def move_dirs
    raise "Slideable move_dirs should not run"
  end


  def grow_unblocked(dy, dx)
    pos = self.pos.dup
    unblocked_array = []
    
    pos[0] += dy 
    pos[1] += dx 

    until !board.valid_pos?(pos)
      if board[pos].color == self.color
        # our color
        break
      elsif !board[pos].empty? 
      # not our color
        unblocked_array << pos 
        break  
      end
      # nullpiece
      unblocked_array << pos.dup
      pos[0] += dy 
      pos[1] += dx 
    end
    
    unblocked_array
    end

end


