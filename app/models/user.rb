# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
class User < ApplicationRecord
    #FIGVVVAAPER
validates :username, :email, :password_digest, :session_token, presence: true
validates :username, :email, uniqueness:true
validates :password, length: {minimum: 6, allow_nil: true}
validates :username, length: {minimum: 4}

attr_reader :password 
after_initialize :ensure_session_token

has_many :ownedservers,
foreign_key: :owner_id,
class_name: :Server




    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)

        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def self.generate_session_token
        SecureRandom::urlsafe_base64(64)
    end

    def password=(password)
        @password = password 
        self.password_digest = BCrypt::Password.create(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.base64 
        self.save 
        self.session_token
    end



    private
    def ensure_session_token
        self.session_token ||= SecureRandom.base64
    end

end
