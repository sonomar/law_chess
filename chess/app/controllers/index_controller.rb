class IndexController < ApplicationController

	def index
      
	end

	def load_game
		@load_game_data = {}
		  loaded_game = ChessGame.find_by save_name: (params[:load_name])
		  unless loaded_game == nil
		  	game_rows = loaded_game.chess_board_rows
		  	game_rows.each do |row|
		  		row_index = row.row_index
		    	game_squares = row.chess_board_squares
		    	game_squares.each do |square|
		    		square_index = square.square_index
		    		square_image = square.chess_piece_image
		    		@load_game_data['row: ' + row_index.to_s + ' - index: ' + square_index.to_s + " - turn: " + loaded_game.player_turn.to_s] = square_image
		    	end
		  	end
	  	return @load_game_data.to_json
			else
			puts "save game does not exist!"
			end
	end

end


