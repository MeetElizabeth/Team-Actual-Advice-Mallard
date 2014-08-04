class User < ActiveRecord::Base

  has_many :games, dependent: :destroy
  has_many :animals, dependent: :destroy

  validates_presence_of :username, :first_name, :password, :score
  validates_uniqueness_of :username, :email

  after_initialize :defaults
  def defaults
  	self.score = 0
  	self.admin = false
  end
end
