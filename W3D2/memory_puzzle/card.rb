#face_value any letter instance var
#randomly assisgn letter
#face_up similar to toggle start at false 
#hide maybe
# self ==(other_card)
#reveals card on grid
require "byebug"
class Card

    attr_accessor :face_value, :face_up

    def initialize
        @face_value = ("A".."Z").to_a.sample
        @face_up = false
    end

    def face_up?
        @face_up
    end

    def hide
        @face_up = false
    end

    def reveal
        @face_up = true
    end

    def ==(other_card)
        # debugger
        self.face_value == other_card.face_value
    end

end