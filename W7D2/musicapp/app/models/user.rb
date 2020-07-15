# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  email           :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  password_digest :string           not null
#  session_token   :string           not null
#

class User < ApplicationRecord
    after_initialize :ensure_session_token

    validates :email, :session_token, presence: true, uniqueness: true
    validates :password_digest, presence: true
    validates :password, length: { minimum: 8, allow_nil: true }

    attr_reader :password

    #SPIRE
    def self.generate_session_token
        SecureRandom::urlsafe_base64
    end

    def self.find_by_credentials(email, password)
        # find the user with the corresponding email
        user = self.find_by(email: email)
        # if that user exists and the password is correct, then return
        user && user.is_password?(password) ? user : nil
    end

    def password=(password) #sets password and creates digest
        @password = password
        self.password_digest = BCrypt::Password.create(password) 
    end

    def is_password?(password)
        pw = BCrypt::Password.new(self.password_digest)
        pw.is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64 # update instance attr w/ new token
        self.save! # save updated instance to the db
        self.session_token # return the new token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

end
