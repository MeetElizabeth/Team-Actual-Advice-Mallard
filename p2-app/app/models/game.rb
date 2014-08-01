class Game < ActiveRecord::Base
  belongs_to :user
  has_one :animal
end
