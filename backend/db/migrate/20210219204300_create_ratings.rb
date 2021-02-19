class CreateRatings < ActiveRecord::Migration[5.0]
  def change
    create_table :ratings do |t|
      t.integer :sneaker_id
      t.float :stars
      t.string :name
      t.string :description

      t.timestamps
    end
  end
end
