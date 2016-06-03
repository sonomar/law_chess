class ChessBoardSquare < ActiveRecord::Base
	belongs_to :chess_board_row

	validates_presence_of :square_index
end
