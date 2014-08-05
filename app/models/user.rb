class User < ActiveRecord::Base

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, :confirmable

  has_many :games, dependent: :destroy
  has_many :animals, dependent: :destroy

  validates_presence_of :username, :first_name, :password, :score
  validates_uniqueness_of :username, :email

  after_initialize :defaults
  def defaults
    self.score = 0
  end

end
