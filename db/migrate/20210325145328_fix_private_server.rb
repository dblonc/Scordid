class FixPrivateServer < ActiveRecord::Migration[5.2]
  def change
    remove_column :servers, :private_server?
    add_column :servers, :private_server, :boolean, null: false
  end
end
