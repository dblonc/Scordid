class CreateComments < ActiveRecord::Migration[5.2]
  def change
    create_table :comments do |t|
      t.integer :user_id, null: false
      t.integer :channel_id, null: false 
      t.text :message, null: false 
      t.boolean :is_private, null: false
    end
  end
end
