class ChessGame < ActiveRecord::Base
	has_many :chess_board_rows

	validates_presence_of :save_name
end
