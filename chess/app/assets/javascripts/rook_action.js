var rookAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		
		drop: function( event, ui ) {

			if($(this).index() === startPos.index() && startPos.children().attr("class") === "white-rook white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("white-piece") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this).parent()[0] === startPos.parent()[0] && startPos.children().attr("class") === "white-rook white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("white-piece") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			};
			if($(this).index() === startPos.index() && startPos.children().attr("class") === "black-rook black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("black-piece") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this).parent()[0] === startPos.parent()[0] && startPos.children().attr("class") === "black-rook black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("black-piece") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			};
		}
	});
};