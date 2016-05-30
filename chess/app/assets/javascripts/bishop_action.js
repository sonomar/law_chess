var disableUpLeftArray = [];
var disableUpRightArray = [];
var disableDownLeftArray = [];
var disableDownRightArray = [];

var bishopAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		disabled: false,

		drop: function( event, ui ) {

			var findPieceUpLeft = function() {
			  var chessIndex = startPos.index();
			  var parentIndex = startPos.parent().index();
			  disableUpLeftArray = [];
              for(var placement = 1; placement < chessIndex; placement++) {
              	if(startPos.parent().siblings().eq(parentIndex - placement).children().eq(startPos.index() - placement).children().hasClass("chess-piece")) {
              	  for(var disableUpLeft = placement + 1; disableUpLeft < chessIndex + 1; disableUpLeft ++) {
                    disableUpLeftArray.push(disableUpLeft);
                  };
                return disableUpLeftArray;
              	};
              };
			};
			var findPieceUpRight = function() {
			  var chessIndex = startPos.index();
			  var parentIndex = startPos.parent().index();
			  disableUpRightArray = [];
              for(var placement = 1; placement < 9; placement++) {
              	if(startPos.parent().siblings().eq(parentIndex - placement).children().eq(startPos.index() + placement).children().hasClass("chess-piece")) {
              	  for(var disableUpRight = 7; disableUpRight > placement; disableUpRight --) {
                    disableUpRightArray.push(disableUpRight);
                  };         
                return disableUpRightArray;
              	};
              };
			};
			var findPieceDownLeft = function() {
			  var chessIndex = startPos.index();
			  var parentIndex = startPos.parent().index();
			  disableDownLeftArray = [];
              for(var placement = 0; placement < 9; placement++) {
              	if(startPos.parent().siblings().eq(parentIndex + placement).children().eq(startPos.index() - 1 - placement).children().hasClass("chess-piece")) {
              	  for(var disableDownLeft = 7; disableDownLeft > placement; disableDownLeft --) {
                    disableDownLeftArray.push(disableDownLeft);
                  };
                return disableDownLeftArray;
              	};
              };
			};
			var findPieceDownRight = function() {
			  var chessIndex = startPos.index();
			  var parentIndex = startPos.parent().index();
			  disableDownRightArray = [];
              for(var placement = 0; placement < 9; placement++) {
              	if(startPos.parent().siblings().eq(parentIndex + placement).children().eq(startPos.index() + 1 + placement).children().hasClass("chess-piece")) {
              	  for(var disableDownRight = 7; disableDownRight > placement; disableDownRight --) {
                    disableDownRightArray.push(disableDownRight);
                  };
                console.log(disableDownRightArray);
                return disableDownRightArray;
              	};
              };
			};
					findPieceUpLeft();
					findPieceUpRight();
					findPieceDownLeft();
					findPieceDownRight();

			for(var i = 1; i < 10; i ++) {
				//white bishop
	        	if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() - i).children("span")[(startPos.index() + i)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[0]).children("span")[(startPos.index() + disableUpRightArray[0])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[1]).children("span")[(startPos.index() + disableUpRightArray[1])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[2]).children("span")[(startPos.index() + disableUpRightArray[2])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[3]).children("span")[(startPos.index() + disableUpRightArray[3])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[4]).children("span")[(startPos.index() + disableUpRightArray[4])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[5]).children("span")[(startPos.index() + disableUpRightArray[5])] && startPos.children().hasClass("white-bishop") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false){
				    playerTurn();
				    $( this )
				    .html( ui.draggable );			    
				}
				else if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() - i).children("span")[(startPos.index() - i)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[0]).children("span")[(startPos.index() - disableUpLeftArray[0])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[1]).children("span")[(startPos.index() - disableUpLeftArray[1])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[2]).children("span")[(startPos.index() - disableUpLeftArray[2])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[3]).children("span")[(startPos.index() - disableUpLeftArray[3])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[4]).children("span")[(startPos.index() - disableUpLeftArray[4])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[5]).children("span")[(startPos.index() - disableUpLeftArray[5])] && startPos.children().hasClass("white-bishop") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false) {
					playerTurn();
				    $( this )
				    .html( ui.draggable );	
				}
				else if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() + (i - 1)).children("span")[(startPos.index() - i)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[0]).children("span")[(startPos.index() - disableDownLeftArray[0] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[1]).children("span")[(startPos.index() - disableDownLeftArray[1] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[2]).children("span")[(startPos.index() - disableDownLeftArray[2] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[3]).children("span")[(startPos.index() - disableDownLeftArray[3] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[4]).children("span")[(startPos.index() - disableDownLeftArray[4] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[5]).children("span")[(startPos.index() - disableDownLeftArray[5] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[6]).children("span")[(startPos.index() - disableDownLeftArray[6] - 1)] && startPos.children().hasClass("white-bishop") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false) {
					playerTurn();
				    $( this )
				    .html( ui.draggable );	
				}
				else if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() + (i - 1)).children("span")[(startPos.index() + i)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[0]).children("span")[(startPos.index() + disableDownRightArray[0] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[1]).children("span")[(startPos.index() + disableDownRightArray[1] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[2]).children("span")[(startPos.index() + disableDownRightArray[2] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[3]).children("span")[(startPos.index() + disableDownRightArray[3] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[4]).children("span")[(startPos.index() + disableDownRightArray[4] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[5]).children("span")[(startPos.index() + disableDownRightArray[5] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[6]).children("span")[(startPos.index() + disableDownRightArray[6] + 1)] && startPos.children().hasClass("white-bishop") && $(this).children().hasClass("white-piece") === false && $(this).children().hasClass("black-king") === false) {
					playerTurn();
				    $( this )
				    .html( ui.draggable );	
				};
				//black bishop
	        	if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() - i).children("span")[(startPos.index() + i)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[0]).children("span")[(startPos.index() + disableUpRightArray[0])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[1]).children("span")[(startPos.index() + disableUpRightArray[1])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[2]).children("span")[(startPos.index() + disableUpRightArray[2])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[3]).children("span")[(startPos.index() + disableUpRightArray[3])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[4]).children("span")[(startPos.index() + disableUpRightArray[4])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpRightArray[5]).children("span")[(startPos.index() + disableUpRightArray[5])] && startPos.children().hasClass("black-bishop") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false){
				    playerTurn();
				    $( this )
				    .html( ui.draggable );			    
				}
				else if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() - i).children("span")[(startPos.index() - i)] && startPos.children().hasClass("black-bishop") && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[0]).children("span")[(startPos.index() - disableUpLeftArray[0])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[1]).children("span")[(startPos.index() - disableUpLeftArray[1])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[2]).children("span")[(startPos.index() - disableUpLeftArray[2])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[3]).children("span")[(startPos.index() - disableUpLeftArray[3])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[4]).children("span")[(startPos.index() - disableUpLeftArray[4])] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() - disableUpLeftArray[5]).children("span")[(startPos.index() - disableUpLeftArray[5])] && startPos.children().hasClass("black-bishop") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false) {
					playerTurn();
				    $( this )
				    .html( ui.draggable );	
				}
				else if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() + (i - 1)).children("span")[(startPos.index() - i)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[0]).children("span")[(startPos.index() - disableDownLeftArray[0] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[1]).children("span")[(startPos.index() - disableDownLeftArray[1] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[2]).children("span")[(startPos.index() - disableDownLeftArray[2] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[3]).children("span")[(startPos.index() - disableDownLeftArray[3] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[4]).children("span")[(startPos.index() - disableDownLeftArray[4] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[5]).children("span")[(startPos.index() - disableDownLeftArray[5] - 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownLeftArray[6]).children("span")[(startPos.index() - disableDownLeftArray[6] - 1)] && startPos.children().hasClass("black-bishop") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false) {
					playerTurn();
				    $( this )
				    .html( ui.draggable );	
				}
				else if($(this)[0] === startPos.parent().siblings().eq(startPos.parent().index() + (i - 1)).children("span")[(startPos.index() + i)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[0]).children("span")[(startPos.index() + disableDownRightArray[0] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[1]).children("span")[(startPos.index() + disableDownRightArray[1] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[2]).children("span")[(startPos.index() + disableDownRightArray[2] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[3]).children("span")[(startPos.index() + disableDownRightArray[3] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[4]).children("span")[(startPos.index() + disableDownRightArray[4] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[5]).children("span")[(startPos.index() + disableDownRightArray[5] + 1)] && $(this)[0] != startPos.parent().siblings().eq(startPos.parent().index() + disableDownRightArray[6]).children("span")[(startPos.index() + disableDownRightArray[6] + 1)] && startPos.children().hasClass("black-bishop") && $(this).children().hasClass("black-piece") === false && $(this).children().hasClass("white-king") === false) {
					playerTurn();
				    $( this )
				    .html( ui.draggable );	
				};
            };
		}
	});
};