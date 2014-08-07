class CreateGames < ActiveRecord::Migration
  def change
    create_table :games do |t|
      t.references :games
      t.references :users
      t.integer :points
    end
  end
end
