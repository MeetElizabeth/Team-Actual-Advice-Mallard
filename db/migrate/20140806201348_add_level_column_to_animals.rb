class AddLevelColumnToAnimals < ActiveRecord::Migration
  def change
  	add_column :animals, :level, :integer
  end
end
