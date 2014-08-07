class DropTableGames < ActiveRecord::Migration
  def change
    drop_table :table_games
  end
end
