
var clearBoard = function() {	
	for(i = 0; i < 8; i++) {
		$(".chess_board").children().eq(i).children().forEach(function(square) {
	    square.empty();
		});
	};
};

var saveGame = function(saveName) {
	//create a new ChessGame in the database AND
	//make 'saveName' argument the 'save_name' for that game
	for(i = 0; i < 8; i++) {
		//save 'i' as the row number in the database with it's game having the id of the one with the save-name "saveName"
		$(".chess_board").children().eq(i).children().forEach(function(square) {
	    if(square.children().hasClass("chess-piece")) {
	      //save 'square.index()' to a new chess_board_square in the database under 'square_index' AND
	      //set the 'chess_board_row_id' as 'i'
	      //set 'square.children.attr('src')' as 'chess_piece_image'
	    };
		});
	}
};

//$(save-button).click(function() {
//  Ajax request
//  Post
//};

 // $(document).on("submit", ".save-button", function(event) {
 //    event.preventDefault();
 //    $.ajax({
 //      type: "Post",
 //      url: "/save",
 //      data: { ChessGame: { save_name: "", description: "whatever" } }
 //      }).done(function(results) {

 //        $(".search_form").html(results);
 //      });


 //  });
