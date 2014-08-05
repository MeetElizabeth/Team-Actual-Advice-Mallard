class AddAnimalsColumnToUsers < ActiveRecord::Migration
  def change
    add_column :users, :my_animals, :text
  end
end
