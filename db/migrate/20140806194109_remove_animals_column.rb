class RemoveAnimalsColumn < ActiveRecord::Migration
  def change
    remove_column :users, :my_animals
  end
end
