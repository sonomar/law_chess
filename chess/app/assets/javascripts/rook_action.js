var currentPos;

var rookAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		disabled: false,
		// accept: ".valid",
		
		drop: function( event, ui ) {
			var findPiece = function() {
			  var chessIndex = startPos.parent().index();
              for(i = chessIndex; i > 0; i--) {
              	if(startPos.parent().siblings().eq(i).children("span").eq(startPos.index()).children().hasClass("chess-piece")) {
              	  for (neighbor = (i - 1); neighbor > 0; neighbor --) {
                  	var disableAbove = startPos.parent().siblings().eq(neighbor).children().eq(startPos.index())
 
                  	 if(currentPos[0] === disableAbove[0]) {
                  	 	startPos.children().removeClass("valid");
                  	 	// console.log("hi")
                  	 // };
                  	 // $(currentPos).droppable({ disabled: true });
                  	 // console.log($(disableAbove).droppable( "option", "disabled" ) === true);
                     };
                  };
              	};
              };
			};
			currentPos = $(this);
			if($(this).index() === startPos.index() && startPos.children().hasClass("white-rook") && $(this).children().hasClass("white-piece") === false){
			    
				// if!(startPos.children().hasClass("valid")) {
				// 	startPos.children().addClass("valid");
			 //    };
			    // findPiece();
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this).parent()[0] === startPos.parent()[0] && startPos.children().hasClass("white-rook") && $(this).children().hasClass("white-piece") === false){
			    
			  //  if!(startPos.children().hasClass("valid")) {
					// startPos.children().addClass("valid");
			  //   };
			    // findPiece();
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			};
			if($(this).index() === startPos.index() && startPos.children().hasClass("black-rook") && $(this).children().hasClass("black-piece") === false){
			    // findPiece();
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this).parent()[0] === startPos.parent()[0] && startPos.children().hasClass("black-rook") && $(this).children().hasClass("black-piece") === false){
			    // findPiece();
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			};
		}
	});
};