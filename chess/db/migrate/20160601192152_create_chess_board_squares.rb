class CreateChessBoardSquares < ActiveRecord::Migration
  def change
    create_table :chess_board_squares do |t|
    	t.references :chess_board_row, null: false
    	t.integer :square_index, null: false
    	t.string :chess_piece_image

      t.timestamps null: false
    end
  end
end
