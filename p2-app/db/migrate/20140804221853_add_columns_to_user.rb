class AddColumnsToUser < ActiveRecord::Migration
  def change
    add_column :users, :first_name, :string
    add_column :users, :birthday, :date
    add_column :users, :avatar, :text
    add_column :users, :username, :string
  end
end
