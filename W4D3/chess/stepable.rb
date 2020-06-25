
module Stepable

  KING_DIRS = [
    [0,1], #1 to the right
    [0,-1], #1 to the left
    [1,0], #1 up
    [-1,0], #1 down
    [1,1], #1up 1right
    [1,-1], #1up, 1left
    [-1,1], #1down, 1right
    [-1,-1] #1down, 1left
  ]
  
  KNIGHTS_DIRS = [
    [-1,2],
    [1,-2],
    [-1,-2],
    [1,2],
    [-2,1],
    [2,-1],
    [-2,-1],
    [2,1]
  ]

  def move_diffs
    
  end

    # only called on king
  def king_dirs
    starting_pos = self.pos
    king_moves = []
    
    KING_DIRS.each do |dir|
      dy, dx = dir[0], dir[1]
            
      king_moves += grow_unblocked(dy, dx)
    end

    king_moves
  end

  # only called on knights
  def knight_dirs 
    start_pos = self.pos
    knight_moves = []

    KNIGHTS_DIRS.each do |dir|
      dy, dx = dir[0], dir[1]
            
      knight_moves += grow_unblocked(dy, dx)
    end

    knight_moves
  end
  
  def moves
    if self.is_a? King
        return king_dirs
    elsif self.is_a? Knight
        return knight_dirs
    end
  end

  private
  def grow_unblocked(dy, dx)
    pos = self.pos.dup
    unblocked_array = []

    pos[0] += dy 
    pos[1] += dx 

    if board.valid_pos?(pos) 
      if board[pos].empty? || board[pos].color != self.color
        unblocked_array << pos
      end
    end

    unblocked_array
  end

end