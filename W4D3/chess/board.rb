require 'byebug'
require_relative 'piece'
# require_relative 'pawn'
# require_relative 'rook'
# require_relative 'knight'
# require_relative 'bishop'
# require_relative 'queen'
# require_relative 'king'

class Board
  attr_accessor :grid
  attr_reader :sentinel
  
  # Good
  def initialize
    @sentinel = NullPiece.instance
    @grid = Array.new(8) { Array.new(8, sentinel) }
    build_board
  end
  
  # Good
  def build_board
    fill_pawns
    fill_back_row(0)
    fill_back_row(7)
  end

  # Good
  def fill_pawns
    @grid[1].map!.with_index { |space, idx| add_piece('pawn', [1, idx])  }
    @grid[6].map!.with_index { |space, idx| add_piece('pawn', [6, idx]) }
  end

  # Good
  def fill_back_row(row)
    back_row_pieces = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook']
    @grid[row].map!.with_index do |space, idx| 
      add_piece(back_row_pieces.shift, [row, idx]) 
    end
  end
  
  # Good
  def [](pos)
    row, col = pos
    @grid[row][col]
  end
  
  # Im ready to roll when you are
  # Good
  def []=(pos, val)
    row, col = pos
    @grid[row][col] = val
  end

  # Good???
  # Needs refactoring
  def move_piece(start_pos, end_pos)
    #check if there is a piece at the start_pos
    #check if end pos is empty
    #check if both pos is within bounds (valid_pos?)

    #reassign to the end pos to the piece from the start pos
    #start_pos to nil
    moving_piece = self[start_pos]
    moved_to_place = self[end_pos]

    # If nullpiece
    # Maybe need to factor for self[end_pos].color.empty?
    if valid_pos?(end_pos) && valid_pos?(start_pos) && !moving_piece.empty?
      if moved_to_place.empty?  
        
        self[start_pos], self[end_pos] = self[end_pos], self[start_pos]
        moving_piece.pos = end_pos
        
      end
      # else, swap with piece 
      # moved_to_place.pos = start_pos
    else
      # Return statement if invalid move
      puts "Invalid move, try again."
    end

    # raise 'something' if self[start_pos] == NullPiece
    # raise 'somethingelse' if self[end_pos].color == color  #valid_pos
    # curr_piece = self[pos]

    # If king castles, account for that
    # If pawn moves to end board, call pawn_upgrade
  end

  # Good
  def valid_pos?(pos)
    row, col = pos
    return false unless row.between?(0, 7) && col.between?(0, 7) 
    true
  end

  # Good
  # def pawn_upgrade(pos)
  #   puts "What do you want to upgrade your pawn to?"
  #   upgrade = gets.chomp
  #   self[pos] = add_piece(upgrade, pos)
  # end
  

  # Good
  def add_piece(piece, pos)
    
    if pos.first == 0 || pos.first == 1
      color = :B
    elsif pos.first == 6 || pos.first == 7
      color = :W
    else
      color = ""
    end
  
    # Case for pieces
    case piece
    when 'pawn', pos
      self[pos] = Pawn.new(color, pos, self)
    when 'rook'
      self[pos] = Rook.new(color, pos, self)
    when 'knight'
      self[pos] = Knight.new(color, pos, self)
    when 'bishop'
      self[pos] = Bishop.new(color, pos, self)
    when 'queen'
      self[pos] = Queen.new(color, pos, self)
    when 'king'
      self[pos] = King.new(color, pos, self)
    end

  end

end

