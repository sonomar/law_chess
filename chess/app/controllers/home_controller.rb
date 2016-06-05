class HomeController < ApplicationController

	def index
      
	end

	def create
    byebug
		# chess_game = chessGame.new(save_name: (params[:save_name]))
		# if chess_game.save
  #     puts "saved to database"
  #   else
  #     puts "could not save to database"
  #   end
  redirect_to "/"
  end

end
