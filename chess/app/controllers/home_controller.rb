class HomeController < ApplicationController

	def index
      
	end

	def create
    @new_chess_game = ChessGame.where(save_name: params["saveName"], player_turn: params["playerTurn"]).first_or_initialize
    if ChessGame.exists?(save_name: params["saveName"]) == false && @new_chess_game.save
      params["chessGame"].each do |key, value|
        if key[0] == "r"
          get_row = key.split("")[-2]
          get_square = key.split("")[-1]
          get_img = params["chessGame"]["squareImg #{get_row}#{get_square}"]
          get_class = params["chessGame"]["squareClass #{get_row}#{get_square}"]
          new_chess_row = ChessBoardRow.new(chess_game_id: (ChessGame.find_by save_name: params["saveName"]).id, row_index: get_row)
          if new_chess_row.save
            new_row_id = new_chess_row.id
            new_chess_square = ChessBoardSquare.new(chess_board_row_id: new_row_id, square_index: get_square, chess_piece_image: "<img class='#{get_class}' src='#{get_img}'>")
            if new_chess_square.save
              puts "saved successfully!"
            else
              puts "could not save to database"
            end
          else
            puts "could not save to database"
          end
        end
      end
    else
      puts "could not save to database"
    end

  redirect_to "/"
  end

end
