class RemoveColumnAnimalsGamesId < ActiveRecord::Migration
  def change
    remove_column :animals, :games_id
  end
end
