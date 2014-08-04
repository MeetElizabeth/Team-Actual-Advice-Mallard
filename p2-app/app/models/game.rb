class Game < ActiveRecord::Base
  belongs_to :user
  has_one :animal
end












## for populating guessable letters
  def guessable_letters
    # animal[0] = { name: 'hippo'}  ==> animal[0]["name"]
    animals = ['hippo', 'duck', 'frog']
    alphabet = *('a'..'z')

    letter_array = animals[0].split('').shuffle

    while letter_array.length < 12
      letter_array.push(alphabet.sample)
    end

    letter_array.shuffle.map

  end
