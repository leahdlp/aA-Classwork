# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  user_name       :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    attr_reader :password

    validates :user_name, :password_digest, presence: true
    validates :session_token, presence: true, uniqueness: true
    validates :password, length: { minimum: 6, allow_nil: true }

    after_initialize :ensure_session_token

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        self.session_token
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        pw_obj = BCrypt::Password.new(self.password_digest)
        pw_obj.is_password?(password)
    end

    def self.find_by_credentials(user_name, password_digest)
        user = User.find_by(user_name: user_name)
        if user && user.is_password?(password)
            user 
        else
            nil
        end
    end

    def ensure_session_token
        # puts "this is setting your session_token"
        self.session_token ||= SecureRandom::urlsafe_base64
    end
end
