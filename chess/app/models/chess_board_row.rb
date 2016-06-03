class ChessBoardRow < ActiveRecord::Base
	belongs_to :chess_game
	has_many :chess_board_squares

	validates_presence_of :row_index
end
