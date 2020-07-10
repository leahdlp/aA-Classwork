# == Schema Information
#
# Table name: favorites
#
#  id           :bigint           not null, primary key
#  favoriter_id :integer          not null
#  artwork_id   :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Favorite < ApplicationRecord
    validates :favoriter_id, uniqueness: {scope: :artwork_id}
    belongs_to :favoriter,
    primary_key: :id,
    foreign_key: :favoriter_id,
    class_name: :User 

    belongs_to :artwork,
    primary_key: :id,
    foreign_key: :artwork_id,
    class_name: :Artwork
end
