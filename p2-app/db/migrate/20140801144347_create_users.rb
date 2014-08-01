class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.text :avatar
      t.string :first_name
      t.integer :score
      t.string :username
      t.string :email
      t.string :password_digest
      t.boolean :admin
      t.timestamps
    end
  end
end
