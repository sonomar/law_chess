
	var clearBoard = function() {	
		for(row = 0; row < 8; row++) {
	        $(".chessboard").children().eq(row).children().empty();
	  };
	};

  var loadGame = function() {
    $(".load-form").on("submit", function(event) {
      event.preventDefault();
      $.ajax({
        type: "get",
        url: "/load_game",
        data: $(this).serialize(),
        datatype: 'json'
        }).done(function(results) {
           var test1 = results.split("<body>");
           var test2 = test1[1].split("</body>");
           var test3 = test2[0].toString();
           var re = /&quot;/gi;
           var newstr = test3.replace(re, '"');
           var rere = /=&gt;/gi;
           var newerstr = newstr.replace(rere, ': ');
           var rerere = /nil/gi;
           var newernewerstr = newerstr.replace(rerere, 'null');
           var finalData = JSON.parse(newernewerstr);
           clearBoard();
           for( row = 0; row < 8; row++) {
            var current_row = row;
             for( square = 0; square < 8; square ++) {
               var squareData = finalData["row: " + current_row + " - index: " + square]
               if(squareData != null) {
                 var square1 = /&lt;/gi;
                 var square2 = /&gt;/gi;
                 var square3 = /&#39;/gi;
                 var newsquareData = squareData.replace(square1, '<');
                 var newersquareData = newsquareData.replace(square2, '>');
                 var newestsquareData = newersquareData.replace(square3, "'");
                 $(".chessboard").children().eq(current_row).children().eq(square).html(newestsquareData);
               };
             };
           };
          if(playerOneTurn === false) {
            playerTurn();
            playerTurn();
          }
          else {
            playerTurn();
          };
        });
    });
  };

  var saveGame = function() {
    $(".save-form").on("submit", function(event) {
      event.preventDefault();
      $.ajax({
        type: "post",
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        url: "/home",
        data: createSaveObject(),
        datatype: 'json'
      }).done(function(results) {
        console.log("success!");
      });
    });
  };

  var createSaveObject = function() {
    for(row = 0; row < 8; row++) {
      var current_row = row;
      for(square = 0; square < 8; square++) {
        if($(".chessboard").children().eq(current_row).children().eq(square).children().hasClass("chess-piece")) {
          saveSquareObject["row " + current_row + square] = square;
          saveSquareObject["squareImg " + current_row + square] = $(".chessboard").children().eq(current_row).children().eq(square).children().attr("src");
          saveSquareObject["squareClass " + current_row + square] = $(".chessboard").children().eq(current_row).children().eq(square).children().attr("class");     
          saveRowObject["chessGame"] = saveSquareObject;
          saveRowObject["saveName"] = $(".saving_name_value").val();
        };
      };
    };
    console.log(saveRowObject)
    return saveRowObject;
  };

// var saveGame = function(saveName) {
// 	//create a new ChessGame in the database AND
// 	//make 'saveName' argument the 'save_name' for that game
// 	for(i = 0; i < 8; i++) {
// 		//save 'i' as the row number in the database with it's game having the id of the one with the save-name "saveName"
// 		$(".chess_board").children().eq(i).children().forEach(function(square) {
// 	    if(square.children().hasClass("chess-piece")) {
// 	      //save 'square.index()' to a new chess_board_square in the database under 'square_index' AND
// 	      //set the 'chess_board_row_id' as 'i'
// 	      //set 'square.children.attr('src')' as 'chess_piece_image'
// 	    };
// 		});
// 	}
// };

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
