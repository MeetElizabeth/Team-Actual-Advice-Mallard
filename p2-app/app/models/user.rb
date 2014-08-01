class User < ActiveRecord::Base
  has_secure_password

  has_many :games, dependent: :destroy
  has_many :animals, dependent: :destroy

  validates_presence_of :username, :first_name, :password, :score
  validates_uniqueness_of :username, :email

end
