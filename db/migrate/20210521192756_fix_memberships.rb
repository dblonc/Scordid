class FixMemberships < ActiveRecord::Migration[5.2]
  def change
    remove_column :memberships, :channel_id
    add_column :memberships, :server_id, :integer, null:false
    add_index :memberships, :server_id
  end
end
