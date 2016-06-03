class CreateChessBoardRows < ActiveRecord::Migration
  def change
    create_table :chess_board_rows do |t|
    	t.integer :row_index, null: false

      t.timestamps null: false
    end
  end
end
