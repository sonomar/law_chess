var pawnAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		disabled: false,
			
		drop: function( event, ui ) {
          
			if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()] && startPos.children().attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()-1] && startPos.children().attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("black-king") === false) {
		       playerTurn();
			    $("#black-pawns-taken").append("x")
			    return $( this )
			    .html( ui.draggable );
			}
			else if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()+1] && startPos.children().attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("black-king") === false) {
		        playerTurn();
			    $("#black-pawns-taken").append("x")
			    return $( this )
			    .html( ui.draggable );
			}
			else if($(this)[0] === startPos.parent().prev().prev().children("span")[startPos.index()] && startPos.parent().index() === 8 && startPos.children().attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined) {
				 playerTurn();
			    return $( this )
			    .html( ui.draggable );	
			};
			//black pawn	
			if ($(this)[0] === startPos.parent().next().children("span")[startPos.index()] && startPos.children().attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined) {
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );
			}
			else if($(this)[0] === startPos.parent().next().children("span")[startPos.index()-1] && startPos.children().attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("white-king") === false) {
		       playerTurn();
			    $("#white-pawns-taken").append("x")
			    return $( this )
			    .html( ui.draggable );
			}
			else if($(this)[0] === startPos.parent().next().children("span")[startPos.index()+1] && startPos.children().attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("white-king") === false) {
		        playerTurn();
			    $("#white-pawns-taken").append("x")
			    return $( this )
			    .html( ui.draggable );
			}
			else if($(this)[0] === startPos.parent().next().next().children("span")[startPos.index()] && startPos.parent().index() === 3 && startPos.children().attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined) {
				 playerTurn();
			    return $( this )
			    .html( ui.draggable );	
			};

		}
	});
};