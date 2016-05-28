var bishopAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		disabled: false,
			
		drop: function( event, ui ) {
			for(var i = 1; i < 9; i ++) {
	        	if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() - i).children("span")[(startPos.index() + i)] && startPos.children().hasClass("white-bishop") && $(this).children().hasClass("white-piece") === false){
				    playerTurn();
				    $( this )
				    .html( ui.draggable );			    
				}
				else if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() - i).children("span")[(startPos.index() - i)] && startPos.children().hasClass("white-bishop") && $(this).children().hasClass("white-piece") === false) {
					playerTurn();
				    $( this )
				    .html( ui.draggable );	
				}
				else if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() + (i - 1)).children("span")[(startPos.index() + i)] && startPos.children().hasClass("white-bishop") && $(this).children().hasClass("white-piece") === false) {
					playerTurn();
				    $( this )
				    .html( ui.draggable );	
				}
				else if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() + (i - 1)).children("span")[(startPos.index() - i)] && startPos.children().hasClass("white-bishop") && $(this).children().hasClass("white-piece") === false) {
					playerTurn();
				    $( this )
				    .html( ui.draggable );	
				};
			};
			// else if($(this)[0] === startPos.parent().prev().prev().children("span")[(startPos.index() - 1)] && startPos.children().hasClass("white-knight") && $(this).children().hasClass("white-piece") === false){
			//     playerTurn();
			//     return $( this )
			//     .html( ui.draggable );			    
			// };
		}
	});
};