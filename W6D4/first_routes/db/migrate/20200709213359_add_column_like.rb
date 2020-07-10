class AddColumnLike < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :user_id, :integer, null: false
    add_index :likes, [:likeable_id, :user_id], unique: true
  end
end
