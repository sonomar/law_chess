class CreateChessBoardRows < ActiveRecord::Migration
  def change
    create_table :chess_board_rows do |t|
    	t.references :chess_game, null: false
    	t.integer :row_index, null: false

      t.timestamps null: false
    end
  end
end
