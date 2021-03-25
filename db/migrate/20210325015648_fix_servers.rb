class FixServers < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :owner_id
    add_column :servers, :owner_id, :integer, null:false
    add_index :servers, :owner_id
  end
end
