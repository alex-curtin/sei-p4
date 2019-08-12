class CreateRecords < ActiveRecord::Migration[5.2]
  def change
    create_table :records do |t|
      t.string :artist
      t.string :title
      t.integer :year
      t.string :record_label
      t.string :cat_num
      t.string :country
      t.string :format
      t.string :speed
      t.string :disc_condition
      t.string :sleeve_condition
      t.string :description
      t.string :img_url
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
