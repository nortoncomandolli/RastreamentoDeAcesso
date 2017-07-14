class CreateAcessos < ActiveRecord::Migration[5.0]
  def change
    create_table :acessos do |t|
      t.string :key
      t.string :email
      t.string :path
      t.string :date

      t.timestamps
    end
  end
end
