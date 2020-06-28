require_relative "card.rb"
require "byebug"
# 

class Board
    def initialize(n = 4)
        @grid = Array.new(n) { Array.new(n) }
    end

    def [](position)
        row, col = position
        @grid[row][col]
    end

    def []=(position, value)
        row, col = position
        @grid[row][col] = value
    end

    def populate
        while !self.empty_positions.empty?
            card1 = Card.new
            card2 = card1.clone
            if @grid.flatten.none? { |ele| ele == card1 } 
                random_pos1 = self.empty_positions.sample
                random_pos2 = self.empty_positions.sample
                
                self[random_pos1] = card1
                self[random_pos2] = card2
            end
        end
    end

    def empty_positions
        empties = []

        (0...@grid.length).each do |row|
            (0...@grid.length).each do |col|
                position = [row, col]
                empties << position if !self.spot_taken?(position)
            end
        end

        empties
    end

    def spot_taken?(position)
        row, col = position
        return false if @grid[row][col].nil?
        true
    end

    def render
        # debugger
        @grid.each_with_index do |row, idx| 
            hidden = row.map do |ele|
                p ele
                if ele.face_up?
                    ele.face_value
                else
                    '_'
                end 
            end
            puts hidden.join(' ')
        end
    end

    def won?
        if @grid.flatten.all? { |card| card.face_up? }
            puts 'YOU WON!'
            return true
        end
        false
    end

    def reveal(guessed_pos)
        self[guessed_pos].reveal if !self[guessed_pos].face_up?
    end

end