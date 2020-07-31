# == Schema Information
#
# Table name: mentions
#
#  id         :bigint           not null, primary key
#  tweet_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Mention < ApplicationRecord
  validates :user, uniqueness: { scope: :tweet }

  belongs_to :tweet
  belongs_to :user
end
