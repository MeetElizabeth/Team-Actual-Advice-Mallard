require 'csv'

animal_info = CSV.open( File.join( File.dirname(__FILE__),"animals.csv"), 'r')

animal_info.each do |animals|
  Animal.create!({
    name: animals[0],
    environment: animals[1],
    image: "../app/assets/images/animals/#{animals[0].downcase}.png",
    fact_1: animals[3],
    fact_2: animals[4],
    fact_3: animals[5],
    information: animals[6]
    })
  end
