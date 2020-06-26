class Hanoi
    attr_reader :num_disks, :board

    def initialize(num_disks)
        @num_disks = num_disks
        @disks = (0...@num_disks).to_a.reverse!
        @board = Array.new(3) { Array.new }
        @board[0] = @disks
    end

    def play
        until won? || start_idx == 'q' || end_idx == 'q'
            puts "pick a stack to take from: (1 through 3)"
            start_idx = gets.chomp.to_i - 1
            puts "pick a stack to place on: (1 through 3)"
            end_idx = gets.chomp.to_i - 1

            raise 'invalid move' unless valid_move?(board[start_idx], board[end_idx])
            self.move(start_idx, end_idx)

            self.render
        end
    end

    def valid_move?(start, end_stack)
        moving_disk = start[-1]

        unless end_stack[-1].nil?
            return false if moving_disk > end_stack[-1]
        else
            return true
        end

        true
    end

    def move(start_idx, end_idx)
        moving_disk = board[start_idx].pop
        board[end_idx] << moving_disk 
    end

    def won?
        board[-1].length == num_disks || board[-2].length == num_disks
    end

    def render
        p board
    end

end

stack_1 = [5, 4, 3, 2, 1]
stack_2 = [6]
stack_3 = [8]

game = Hanoi.new(3)
game.play