class IndexController < ApplicationController

	def index
      
	end

	def create
		@save_name = "default"
    @new_game = chessGame.new(@save_name)
    
	end

	def show
	  loaded_game = ChessGame.find(params[:id])
	  game_rows = loaded_game.chess_board_rows
	  game_row.each do |row|
	  	@row_index = row.row_index
	    game_squares = row.chess_board_squares
	    game_squares.each do |square|
	    	@square_index = square.square_index
	    	@square_image = square.chess_piece_image
	    end
	  end
	end
end


