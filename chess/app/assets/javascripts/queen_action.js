var queenAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		disabled: false,
			
		drop: function( event, ui ) {
   //      	if($(this)[0] === startPos.parent().prev().prev().children("span")[(startPos.index() + 1)] && startPos.children().hasClass("white-knight") && $(this).children().hasClass("white-piece") === false){
			//     playerTurn();
			//     return $( this )
			//     .html( ui.draggable );			    
			// }
			// else if($(this)[0] === startPos.parent().prev().prev().children("span")[(startPos.index() - 1)] && startPos.children().hasClass("white-knight") && $(this).children().hasClass("white-piece") === false){
			//     playerTurn();
			//     return $( this )
			//     .html( ui.draggable );			    
			// };
		}
	});
};