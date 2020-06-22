require_relative "room"

class Hotel
    attr_reader :rooms

    def initialize(name, hash)
        @name = name
        @rooms = {}
        hash.each { |k, v| @rooms[k] = Room.new(v) }
    end

    def name
        name = @name.split
        name = name.map! { |part| part.capitalize }
        name.join(' ')
    end

    def room_exists?(rm_name)
        room_names = rooms.keys
        return true if room_names.include?(rm_name)
        false
    end

    def check_in(person, rm_name)
        if !self.room_exists?(rm_name)
            puts 'sorry, room does not exist'
        else
            if rooms[rm_name].add_occupant(person)
                puts 'check in successful'
            else
                puts 'sorry, room is full'
            end
        end
    end

    def has_vacancy?
        count = 0
        rooms.each_value { |room| count += 1 if !room.full? }
        return true if count > 0
        false
    end

    def list_rooms
        rooms.each { |rm_name, room| puts "#{rm_name} * #{room.available_space}" }
    end

end
