class User < ActiveRecord::Base

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable, :authentication_keys => [:username]

  has_many :games, dependent: :destroy
  has_many :animals, through: :games

  validates_presence_of :username, :first_name, :password
  validates_uniqueness_of :username, :email

  before_create :initialize_score

  private
    def initialize_score
      self.score = "0"
    end

end
