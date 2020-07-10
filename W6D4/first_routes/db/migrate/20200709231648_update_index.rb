class UpdateIndex < ActiveRecord::Migration[5.2]
  def change
    remove_index :likes, [:likeable_id, :user_id]
    add_index :likes, [:user_id, :likeable_id, :likeable_type], unique: true
  end
end
