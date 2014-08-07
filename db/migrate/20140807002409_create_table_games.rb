class CreateTableGames < ActiveRecord::Migration
  def change
    create_table :table_games do |t|
      t.references :games
      t.references :users
      t.integer :points
    end
  end
end
