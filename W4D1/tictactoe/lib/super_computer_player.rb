require_relative 'tic_tac_toe_node'

class SuperComputerPlayer < ComputerPlayer
  def move(game, mark)
    tNode = TicTacToeNode.new(game.board, mark)

    tNode.children.each do |child| 
      return child.prev_move_pos if child.winning_node?(mark)
    end
    
    tNode.children.shuffle.each do |child|
      return child.prev_move_pos if !child.winning_node?((mark == :x ? :o : :x))
    end

    non_winning_moves = tNode.children.reject { |child| child.losing_node?(mark) }

    if !non_winning_moves.empty?
      non_winning_moves.sample.prev_move_pos
    else
      raise "No non-losing nodes!"
    end
  end
end

if __FILE__ == $PROGRAM_NAME
  puts "Play the brilliant computer!"
  hp = HumanPlayer.new("Jeff")
  cp = SuperComputerPlayer.new

  TicTacToe.new(hp, cp).run
end
