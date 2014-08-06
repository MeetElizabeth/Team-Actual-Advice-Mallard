class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.integer :points
      t.integer :level
      t.text :images
      t.string :words
      t.string :letters
      t.boolean :completed
      t.timestamps
    end
  end
end
