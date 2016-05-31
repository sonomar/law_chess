var knightAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		disabled: false,
			
		drop: function( event, ui ) {
            //white knight
			if($(this)[0] === startPos.parent().prev().prev().children("span")[(startPos.index() + 1)] && startPos.children().hasClass("white-knight") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().prev().children("span")[(startPos.index() - 1)] && startPos.children().hasClass("white-knight") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().next().children("span")[(startPos.index() + 1)] && startPos.children().hasClass("white-knight") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().next().children("span")[(startPos.index() - 1)] && startPos.children().hasClass("white-knight") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span")[(startPos.index() + 2)] && startPos.children().hasClass("white-knight") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span")[(startPos.index() - 2)] && startPos.children().hasClass("white-knight") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span")[(startPos.index() + 2)] && startPos.children().hasClass("white-knight") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span")[(startPos.index() - 2)] && startPos.children().hasClass("white-knight") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			};
			//black knight
			if($(this)[0] === startPos.parent().prev().prev().children("span")[(startPos.index() + 1)] && startPos.children().hasClass("black-knight") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().prev().children("span")[(startPos.index() - 1)] && startPos.children().hasClass("black-knight") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().next().children("span")[(startPos.index() + 1)] && startPos.children().hasClass("black-knight") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().next().children("span")[(startPos.index() - 1)] && startPos.children().hasClass("black-knight") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span")[(startPos.index() + 2)] && startPos.children().hasClass("black-knight") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span")[(startPos.index() - 2)] && startPos.children().hasClass("black-knight") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span")[(startPos.index() + 2)] && startPos.children().hasClass("black-knight") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span")[(startPos.index() - 2)] && startPos.children().hasClass("black-knight") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			};
		}
	});
};