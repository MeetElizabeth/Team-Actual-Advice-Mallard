class DropTables < ActiveRecord::Migration
  def change
    drop_table :games_users
  end
end
