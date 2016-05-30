var kingAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		disabled: false,
			
		drop: function( event, ui ) {
            //white king
           
			if($(this)[0] === startPos.parent().prev().children("span")[(startPos.index())] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span")[(startPos.index())] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.next()[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.prev()[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span").eq(startPos.index() + 1)[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span").eq(startPos.index() - 1)[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span").eq(startPos.index() + 1)[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span").eq(startPos.index() - 1)[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			};
			//black king
			if($(this)[0] === startPos.parent().prev().children("span")[(startPos.index())] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span")[(startPos.index())] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.next()[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.prev()[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span").eq(startPos.index() + 1)[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span").eq(startPos.index() - 1)[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span").eq(startPos.index() + 1)[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span").eq(startPos.index() - 1)[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			};
		}
	});
};