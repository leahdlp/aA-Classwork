require_relative "card.rb"
require_relative "board.rb"

class Game

    def initialize
        @board = Board.new
        @curr_guesses = []
    end

    def play
        while !@board.won?
            @board.render
            puts "Enter a postion"
            guessed_pos = gets.chomp.split.map(&:to_i)
            make_guess(guess_pos)
            sleep(10)
            system("clear")
        end
    end

    def make_guess(guess_pos)
        if @curr_guesses.length == 0
            @curr_guesses << @board[guess_pos].reveal
        else
            @curr_guesses << @board[guess_pos].reveal
            if @curr_guesses[1] != @curr_guesses[0]
                @curr_guesses[1].hide
                @curr_guesses[0].hide
                @curr_guesses = []
            end
        end
    end

end