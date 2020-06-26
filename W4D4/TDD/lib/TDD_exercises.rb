class Array
    def my_uniq
        uniques = Hash.new(0)

        self.each do |ele|
            uniques[ele] = 0
        end

        p uniques.keys
    end

    def two_sum
        
        indexes = []
        
        self.each_with_index do |ele1, idx1|
            self.each_with_index do |ele2, idx2|
                if ele1 + ele2 == 0 && idx2 > idx1
                    indexes << [idx1, idx2]
                end
            end
        end
        indexes
    end

    def my_transpose
        self[0].zip(*self[1..-1])
    end

    def stock_picker
        prices = []
        days = []

        self.each_with_index do |ele1, idx1|
            self.each_with_index do |ele2, idx2|
                if idx2 > idx1
                    prices << ele2 - ele1 
                    days << [idx1, idx2]
                end
            end
        end
        price = prices.max
        idx = prices.index(price)
        days[idx]
    end

end



