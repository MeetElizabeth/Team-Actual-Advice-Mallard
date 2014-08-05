class CreateAnimals < ActiveRecord::Migration
  def change
    create_table :animals do |t|
      t.string :name
      t.string :environment
      t.text :image
      t.text :fact_1
      t.text :fact_2
      t.text :fact_3
      t.text :information
      t.timestamps
    end
  end
end
