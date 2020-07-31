# == Schema Information
#
# Table name: tweets
#
#  id         :bigint           not null, primary key
#  content    :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Tweet < ApplicationRecord
  validates :content, presence: true

  belongs_to :user
  has_many :mentions

  has_many :mentioned_users,
    through: :mentions,
    source: :user
end
