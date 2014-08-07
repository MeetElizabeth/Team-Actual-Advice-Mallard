class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.references :animal
      t.references :user
      t.integer :points
    end
  end
end
