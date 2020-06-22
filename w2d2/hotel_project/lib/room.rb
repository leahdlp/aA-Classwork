class Room
    attr_reader :capacity, :occupants

    def initialize(capacity)
        @capacity = capacity
        @occupants = []
    end

    def full?
        return false if self.occupants.length < self.capacity
        true
    end

    def available_space
        self.capacity - self.occupants.length
    end

    def add_occupant(name)
        if !self.full?
            @occupants << name
            return true
        end

        false
    end
end
