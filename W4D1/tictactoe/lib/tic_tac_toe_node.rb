require "byebug"
require_relative 'tic_tac_toe'

class TicTacToeNode
  attr_reader :board, :next_mover_mark, :prev_move_pos

  def initialize(board, next_mover_mark, prev_move_pos = nil)
    @board = board
    @next_mover_mark = next_mover_mark
    @prev_move_pos = prev_move_pos
  end

  def inspect
    grid = @board.rows
    "grid: #{grid} next_mover: #{@next_mover_mark} prev move: #{@prev_move_pos.nil? ? [] : @prev_move_pos}\n" 
  end

  def swap(curr_mark)
    curr_mark = (curr_mark == :x) ? :o : :x
  end

  def losing_node?(evaluator)
    return false if @board.tied?
    return false if @board.over? && (@board.winner == evaluator || @board.winner == nil)

    return true if @board.over? && @board.winner != evaluator

    if evaluator == @next_mover_mark
      return true if self.children.all? { |child| child.losing_node?(evaluator) }
    else
      @next_mover_mark = (@next_mover_mark == :x) ? :o : :x
      return true if self.children.any? { |child| !child.losing_node?(self.swap(evaluator)) }
    end

    false
  end

  def winning_node?(evaluator)
    return true if @board.over? && @board.winner == evaluator
    return false if @board.over? && @board.winner != evaluator

    if evaluator == @next_mover_mark
      return true if self.children.any? { |child| child.winning_node?(evaluator) }
    else
      @next_mover_mark = (@next_mover_mark == :x) ? :o : :x
      return false if self.children.all? { |child| child.winning_node?(self.swap(evaluator)) }
    end
  end

  # This method generates an array of all moves that can be made after
  # the current move.
  def children
    kids = []
    
    @board.rows.each_with_index do |row, idx1|
      row.each_with_index do |col_val, idx2|
        pos = [idx1, idx2]
        if @board.empty?(pos)
          new_board = @board.dup
          new_board[pos] = @next_mover_mark
          new_mark = self.swap(@next_mover_mark)
          kids << TicTacToeNode.new(new_board, new_mark, pos)
        end
      end
    end
    kids
  end
end