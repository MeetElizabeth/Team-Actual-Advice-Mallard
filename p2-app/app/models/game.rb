class Game < ActiveRecord::Base
  belongs_to :user
  has_one :animal

## for populating guessable letters
  def guessable_letters(animal)
    alphabet = *('a'..'z')
    letter_array = animal.name.downcase.split('')

    while letter_array.length < 12
      letter_array.push(alphabet.sample)
    end
    return letter_array.shuffle
  end

    

end
