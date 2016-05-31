var kingAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		disabled: false,
			
		drop: function( event, ui ) {
			debugger
            //white king
			if($(this)[0] === startPos.parent().prev().children("span")[(startPos.index())] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    whiteCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span")[(startPos.index())] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    whiteCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.next()[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    whiteCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.prev()[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    whiteCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span").eq(startPos.index() + 1)[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    whiteCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span").eq(startPos.index() - 1)[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    whiteCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span").eq(startPos.index() + 1)[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    whiteCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span").eq(startPos.index() - 1)[0] && startPos.children().hasClass("white-king") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
			    playerTurn();
			    whiteCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if(whiteCancelCastle === false && $(this)[0] === (startPos.next().next().next())[0] && startPos.next().children().hasClass("chess-piece") === false && startPos.next().next().children().hasClass("chess-piece") === false && whiteCheck === false && $(this).children().hasClass("white-piece")) {
			  	playerTurn();
			  	$(this).prev().prev().html("<img class='white-rook white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c2366cc7ae.png'>");
			  	$(this).html("");
			    return $( this ).prev()
			    .html( ui.draggable );	
			};	
			//black king
			if($(this)[0] === startPos.parent().prev().children("span")[(startPos.index())] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    blackCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span")[(startPos.index())] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    blackCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.next()[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    blackCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.prev()[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    blackCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span").eq(startPos.index() + 1)[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    blackCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span").eq(startPos.index() - 1)[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    blackCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span").eq(startPos.index() + 1)[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    blackCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().next().children("span").eq(startPos.index() - 1)[0] && startPos.children().hasClass("black-king") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
			    playerTurn();
			    blackCancelCastle = true;
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if(blackCancelCastle === false && $(this)[0] === (startPos.next().next().next())[0] && startPos.next().children().hasClass("chess-piece") === false && startPos.next().next().children().hasClass("chess-piece") === false && blackCheck === false && $(this).children().hasClass("black-piece")) {
			  	playerTurn();
			  	$(this).prev().prev().html("<img class='black-rook black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c23687e54b-210x210.png'>");
			  	$(this).html("");
			    return $( this ).prev()
			    .html( ui.draggable );	
			};	
		}
	});
};