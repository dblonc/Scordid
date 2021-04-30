class CreateChannels < ActiveRecord::Migration[5.2]
  def change
    create_table :channels do |t|
      t.string :description, null: false, unique: true 
      t.string :channelname, null: false, unique: true
      t.integer :hostserver_id, null: false, unique: true
      t.timestamps
    end
    add_index :channels, :hostserver_id
  end
end
