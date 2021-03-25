class CreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :servers do |t|
      t.string :servername, null:false, unique: true 
      t.string :description, null: false, unique: true
      t.integer :owner_id, null: false, unique: true 
      t.boolean :private_server?, null:false 
      t.timestamps
    end
    add_index :servers, :owner_id
  end
end
