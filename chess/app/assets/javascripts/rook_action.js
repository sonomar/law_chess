var currentPos;
var disableAboveArray = [];
var disableBelowArray = [];

var rookAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		disabled: false,
		// accept: ".valid",
		
		drop: function( event, ui ) {

			var findPieceAbove = function() {
			  var chessIndex = startPos.parent().index();
			  disableAboveArray = [];
              for(placement = chessIndex - 1; placement > 0; placement--) {
              	if(startPos.parent().siblings().eq(placement).children("span").eq(startPos.index()).children().hasClass("chess-piece")) {
              	  for (neighbor = (placement - 1); neighbor > 1; neighbor --) {
                  	var disableAbove = startPos.parent().siblings().eq(neighbor).index();
                    disableAboveArray.push(disableAbove);
                  };
                 
                  return disableAboveArray;
              	};
              };
			};

			var findPieceBelow = function() {
			  var chessIndex = startPos.parent().index();
			  disableBelowArray = [];
              for(placement = chessIndex; placement < 10; placement++) {
              	if(startPos.parent().siblings().eq(placement).children("span").eq(startPos.index()).children().hasClass("chess-piece")) {
              	  for (neighbor = (placement); neighbor < 10; neighbor ++) {
                  	var disableBelow = startPos.parent().siblings().eq(neighbor).index();
                    disableBelowArray.push(disableBelow);
                  };
                 
                  return disableBelowArray;
              	};
              };
			};

			findPieceAbove();
			findPieceBelow();
			console.log(disableBelowArray);
			currentPos = $(this);
				if($(this).index() === startPos.index() && $(this).parent().index() != startPos.parent().siblings().eq(disableBelowArray[0]).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableBelowArray[0] + 1).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableBelowArray[0] + 2).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableBelowArray[0] + 3).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableBelowArray[0] + 4).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableBelowArray[0] + 5).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableBelowArray[0] + 6).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableBelowArray[0] + 7).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableAboveArray[disableAboveArray[0]]).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableAboveArray[disableAboveArray[0]]).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableAboveArray[disableAboveArray[0] - 1]).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableAboveArray[disableAboveArray[0] - 2]).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableAboveArray[disableAboveArray[0] - 3]).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableAboveArray[disableAboveArray[0] - 4]).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableAboveArray[disableAboveArray[0] - 5]).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableAboveArray[disableAboveArray[0] - 6]).index() && $(this).parent().index() != startPos.parent().siblings().eq(disableAboveArray[disableAboveArray[0] - 7]).index() && startPos.children().hasClass("white-rook") && $(this).children().hasClass("white-piece") === false){
				    debugger
				    // findPiece();
				    playerTurn();
				    return $( this )
				    .html( ui.draggable );			    
				}
			
				else if($(this).parent()[0] === startPos.parent()[0] && startPos.children().hasClass("white-rook") && $(this).children().hasClass("white-piece") === false){
			    
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