class CreateCreateServers < ActiveRecord::Migration[5.2]
  def change
    create_table :create_servers do |t|

      t.timestamps
    end
  end
end
