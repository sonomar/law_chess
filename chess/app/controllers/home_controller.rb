class HomeController < ApplicationController

	def index
      
	end

	def create
    #add player_turn to js file and this at some point
    new_chess_game = ChessGame.new(save_name: params["saveName"])
    if new_chess_game.save
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
              return "could not save to database"
            end
          else
            return "could not save to database"
          end
        end
      end
    else
      return "could not save to database"
    end

  redirect_to "/"
  end

end
