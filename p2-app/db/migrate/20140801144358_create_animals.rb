class CreateAnimals < ActiveRecord::Migration
  def change
    create_table :animals do |t|
      t.string :name
      t.string :environment
      t.text :image
      t.text :facts
      t.text :sound
      t.timestamps
    end
  end
end