var rookAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		
		drop: function( event, ui ) {
           
			var findPiece = function() {
			  var chessIndex = startPos.parent().index();
              for(i = chessIndex; i > 0; i--) {
              	console.log(i);
              	console.log("hello")
              	if(startPos.parent().siblings()[i].children("span")[startPos.index()].children().hasClass("chess-piece")) {
              	  for (neighbor = (i -1); neighbor < 1; neighbor --) {
                  	var disableAbove = startPos.parent().siblings()[neighbor]
                  	$(disableAbove).droppable( "option", "disabled", true );

                  };
              	};
              };
              // for(local = starPos.parent().index(); local > 8; local++) {
              // 	if(startPos.parent().siblings()[local].children("span")[startPos.index()].children().hasClass("chess-piece")) {

              // 	};
              // };
			};
             debugger
			if($(this).index() === startPos.index() && startPos.children().attr("class") === "white-rook white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("white-piece") === false){
			    findPiece();
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this).parent()[0] === startPos.parent()[0] && startPos.children().attr("class") === "white-rook white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("white-piece") === false){
			    findPiece();
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			};
			if($(this).index() === startPos.index() && startPos.children().attr("class") === "black-rook black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("black-piece") === false){
			    findPiece();
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this).parent()[0] === startPos.parent()[0] && startPos.children().attr("class") === "black-rook black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("black-piece") === false){
			    findPiece();
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			};
		}
	});
};