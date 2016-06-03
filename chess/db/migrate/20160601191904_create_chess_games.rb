class CreateChessGames < ActiveRecord::Migration
  def change
    create_table :chess_games do |t|
    	t.string :save_name, null: false

      t.timestamps null: false
    end
  end
end
