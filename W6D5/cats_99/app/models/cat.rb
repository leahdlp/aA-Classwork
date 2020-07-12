# == Schema Information
#
# Table name: cats
#
#  id          :bigint           not null, primary key
#  birth_date  :date             not null
#  color       :string           not null
#  name        :string           not null
#  sex         :string(1)        not null
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Cat < ApplicationRecord
    validates :birth_date, :name, presence: true
    validates :color, presence: true, inclusion: { in: %w(black brown grey orange white green), 
                message: "%{color} is not a valid a color" }
    validates :sex, presence: true, inclusion: { in: %w(M F), 
                message: "%{sex} is not a valid a sex" }

end
