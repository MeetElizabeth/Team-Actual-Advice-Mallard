class User < ActiveRecord::Base

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable, :authentication_keys => [:username]

  has_many :games, dependent: :destroy
  has_many :animals, through: :games

  validates_presence_of :username, :first_name, :password, :score
  validates_uniqueness_of :username, :email

  after_initialize :defaults
  def defaults
    self.score = 0
  end

end
