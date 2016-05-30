var isCheck = function() {

	//find white king and surrounding squares
	var findWhiteKing = $(".board-row").find(".white-king").parent();
	var findUpWhiteKing = findWhiteKing.parent().prev().children().eq(findWhiteKing.index());
	var findLeftWhiteKing = findWhiteKing.prev();
	var findRightWhiteKing = findWhiteKing.next();
	var findDownWhiteKing = findWhiteKing.parent().next().children().eq(findWhiteKing.index());
	var findUpRightWhiteKing = findWhiteKing.parent().prev().children().eq(findWhiteKing.index() + 1);
	var findUpLeftWhiteKing = findWhiteKing.parent().prev().children().eq(findWhiteKing.index() - 1);
	var findDownRighWhitetKing = findWhiteKing.parent().next().children().eq(findWhiteKing.index() + 1);
	var findDownLeftWhiteKing = findWhiteKing.parent().next().children().eq(findWhiteKing.index() - 1);
	//find black king and surrounding squares
	var findBlackKing = $(".board-row").find(".black-king").parent();
	var findUpBlackKing = findBlackKing.parent().prev().children().eq(findBlackKing.index());
	var findLeftBlackKing = findBlackKing.prev();
	var findRightBlackKing = findBlackKing.next();
	var findDownBlackKing = findBlackKing.parent().next().children().eq(findBlackKing.index());
	var findUpRightBlackKing = findBlackKing.parent().prev().children().eq(findBlackKing.index() + 1);
	var findUpLeftBlackKing = findBlackKing.parent().prev().children().eq(findBlackKing.index() - 1);
	var findDownRightBlackKing = findBlackKing.parent().next().children().eq(findBlackKing.index() + 1);
	var findDownLeftBlackKing = findBlackKing.parent().next().children().eq(findBlackKing.index() - 1);

    //white check rules
    var whiteCheckByPawn = function(location, zone) {
	    if(location.parent().prev().children().eq(location.index() - 1).children().hasClass("black-pawn") || location.parent().prev().children().eq(location.index() + 1).children().hasClass("black-pawn")) {
	    	return zone === true;
	    };
	};
	var whiteCheckByRookAndQueenLeft = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.prevAll().eq(i).children().hasClass("black-rook") || location.prevAll().eq(i).children().hasClass("black-queen")) {
	    		return zone === true;
	    	}
	    	else if(location.prevAll().eq(i).children().hasClass("chess-piece") && location.prevAll().eq(i).children().hasClass("black-rook") === false && location.prevAll().eq(i).children().hasClass("black-queen") === false )
	    		return zone === false
	    	};	
	    };
	};
	var whiteCheckByRookAndQueenRight = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.nextAll().eq(i).children().hasClass("black-rook") || location.nextAll().eq(i).children().hasClass("black-queen")) {
	    		return zone === true;	
	    	}
	    	else if(location.nextAll().eq(i).children().hasClass("chess-piece") && location.nextAll().eq(i).children().hasClass("black-rook") === false && location.nextAll().eq(i).children().hasClass("black-queen") === false )
	    		return zone === false
	    	};
	    };
	};
	var whiteCheckByRookAndQueenDown = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("black-rook") || location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("black-queen")) {
	    		return zone === true;	
	    	}
	    	else if(location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("chess-piece") && location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("black-rook") === false && location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("black-queen") === false )
	    		return zone === false
	    	};
	    };
	};
	var whiteCheckByRookAndQueenUp = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("black-rook") || location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("black-queen")) {
	    		return zone === true;	
	    	}
	    	else if(location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("chess-piece") && location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("black-rook") === false && location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("black-queen") === false )
	    		return zone === false
	    	};
	    };
	};

	var whiteCheckByKnight = function(location, zone) {
    	if(location.parent().prev().prev().children().eq(location.index() - 1).children().hasClass("black-knight") || location.parent().prev().prev().children().eq(location.index() + 1).children().hasClass("black-knight") ||
    		location.parent().next().next().children().eq(location.index() - 1).children().hasClass("black-knight") ||
    		location.parent().next().next().children().eq(location.index() + 1).children().hasClass("black-knight") ||
            location.parent().prev().children().eq(location.index() - 2).children().hasClass("black-knight") ||
            location.parent().prev().children().eq(location.index() + 2).children().hasClass("black-knight") ||
            location.parent().next().children().eq(location.index() - 2).children().hasClass("black-knight") ||
            location.parent().next().children().eq(location.index() + 2).children().hasClass("black-knight")) {
	    	return zone === true;
	    };
	};

    //black check rules
    var blackCheckByPawn = function (location, zone) {
	    if(location.parent().next().children().eq(location.index() - 1).children().hasClass("white-pawn") || location.parent().next().children().eq(location.index() + 1).children().hasClass("white-pawn")) {
	    	return zone === true;
	    };
	};
	var blackCheckByRookAndQueenLeft = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.prevAll().eq(i).children().hasClass("white-rook") || location.prevAll().eq(i).children().hasClass("white-queen")) {
	    		return zone === true;
	    	}
	    	else if(location.prevAll().eq(i).children().hasClass("chess-piece") && location.prevAll().eq(i).children().hasClass("white-rook") === false && location.prevAll().eq(i).children().hasClass("white-queen") === false )
	    		return zone === false
	    	};	
	    };
	};
	var blackCheckByRookAndQueenRight = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.nextAll().eq(i).children().hasClass("white-rook") || location.nextAll().eq(i).children().hasClass("white-queen")) {
	    		return zone === true;	
	    	}
	    	else if(location.nextAll().eq(i).children().hasClass("chess-piece") && location.nextAll().eq(i).children().hasClass("white-rook") === false && location.nextAll().eq(i).children().hasClass("white-queen") === false )
	    		return zone === false
	    	};
	    };
	};
	var blackCheckByRookAndQueenDown = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("white-rook") || location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("white-queen")) {
	    		return zone === true;	
	    	}
	    	else if(location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("chess-piece") && location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("white-rook") === false && location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("white-queen") === false )
	    		return zone === false
	    	};
	    };
	};
	var blackCheckByRookAndQueenUp = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("white-rook") || location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("white-queen")) {
	    		return zone === true;	
	    	}
	    	else if(location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("chess-piece") && location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("white-rook") === false && location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("white-queen") === false )
	    		return zone === false
	    	};
	    };
	};
	var blackCheckByKnight = function(location, zone) {
    	if(location.parent().prev().prev().children().eq(location.index() - 1).children().hasClass("white-knight") || location.parent().prev().prev().children().eq(location.index() + 1).children().hasClass("white-knight") ||
    		location.parent().next().next().children().eq(location.index() - 1).children().hasClass("white-knight") ||
    		location.parent().next().next().children().eq(location.index() + 1).children().hasClass("white-knight") ||
            location.parent().prev().children().eq(location.index() - 2).children().hasClass("white-knight") ||
            location.parent().prev().children().eq(location.index() + 2).children().hasClass("white-knight") ||
            location.parent().next().children().eq(location.index() - 2).children().hasClass("white-knight") ||
            location.parent().next().children().eq(location.index() + 2).children().hasClass("white-knight")) {
	    	return zone === true;
	    };
	};


    //look for check and checkmate for
    //white pawns
	whiteCheckByPawn(findWhiteKing, whiteCheck);
	whiteCheckByPawn(findUpWhiteKing, whiteCheckUp);
	whiteCheckByPawn(findDownWhiteKing, whiteCheckDown);
	whiteCheckByPawn(findLeftWhiteKing, whiteCheckLeft);
	whiteCheckByPawn(findRightWhiteKing, whiteCheckRight);
	whiteCheckByPawn(findUpLeftWhiteKing, whiteCheckUpLeft);
	whiteCheckByPawn(findUpRightWhiteKing, whiteCheckUpRight);
	whiteCheckByPawn(findDownRightWhiteKing, whiteCheckDownRight);
	whiteCheckByPawn(findDownLeftWhiteKing, whiteCheckDownLeft);

	//white knights
	whiteCheckByKnight(findWhiteKing, whiteCheck);
	whiteCheckByKnight(findUpWhiteKing, whiteCheckUp);
	whiteCheckByKnight(findDownWhiteKing, whiteCheckDown);
	whiteCheckByKnight(findLeftWhiteKing, whiteCheckLeft);
	whiteCheckByKnight(findRightWhiteKing, whiteCheckRight);
	whiteCheckByKnight(findUpLeftWhiteKing, whiteCheckUpLeft);
	whiteCheckByKnight(findUpRightWhiteKing, whiteCheckUpRight);
	whiteCheckByKnight(findDownRightWhiteKing, whiteCheckDownRight);
	whiteCheckByKnight(findDownLeftWhiteKing, whiteCheckDownLeft);

	//black pawns
	blackCheckByPawn(findBlackKing, blackCheck);
	blackCheckByPawn(findUpBlackKing, blackCheckUp);
	blackCheckByPawn(findDownBlackKing, blackCheckDown);
	blackCheckByPawn(findLeftBlackKing, blackCheckLeft);
	blackCheckByPawn(findRightBlackKing, blackCheckRight);
	blackCheckByPawn(findUpLeftBlackKing, blackCheckUpLeft);
	blackCheckByPawn(findUpRightBlackKing, blackCheckUpRight);
	blackCheckByPawn(findDownRightBlackKing, blackCheckDownRight);
	blackCheckByPawn(findDownLeftBlackKing, blackCheckDownLeft);

	//black knights
	blackCheckByKnight(findBlackKing, blackCheck);
	blackCheckByKnight(findUpBlackKing, blackCheckUp);
	blackCheckByKnight(findDownBlackKing, blackCheckDown);
	blackCheckByKnight(findLeftBlackKing, blackCheckLeft);
	blackCheckByKnight(findRightBlackKing, blackCheckRight);
	blackCheckByKnight(findUpLeftBlackKing, blackCheckUpLeft);
	blackCheckByKnight(findUpRightBlackKing, blackCheckUpRight);
	blackCheckByKnight(findDownRightBlackKing, blackCheckDownRight);
	blackCheckByKnight(findDownLeftBlackKing, blackCheckDownLeft);


    //white rooks
	whiteCheckByRookAndQueenRight(findWhiteKing, whiteCheck);
	whiteCheckByRookAndQueenRight(findUpWhiteKing, whiteCheckUp);
	whiteCheckByRookAndQueenRight(findDownWhiteKing, whiteCheckDown);
	whiteCheckByRookAndQueenRight(findLeftWhiteKing, whiteCheckLeft);
	whiteCheckByRookAndQueenRight(findRightWhiteKing, whiteCheckRight);
	whiteCheckByRookAndQueenRight(findUpLeftWhiteKing, whiteCheckUpLeft);
	whiteCheckByRookAndQueenRight(findUpRightWhiteKing, whiteCheckUpRight);
	whiteCheckByRookAndQueenRight(findDownRightWhiteKing, whiteCheckDownRight);
	whiteCheckByRookAndQueenRight(findDownLeftWhiteKing, whiteCheckDownLeft);

	whiteCheckByRookAndQueenLeft(findWhiteKing, whiteCheck);
	whiteCheckByRookAndQueenLeft(findUpWhiteKing, whiteCheckUp);
	whiteCheckByRookAndQueenLeft(findDownWhiteKing, whiteCheckDown);
	whiteCheckByRookAndQueenLeft(findLeftWhiteKing, whiteCheckLeft);
	whiteCheckByRookAndQueenLeft(findRightWhiteKing, whiteCheckRight);
	whiteCheckByRookAndQueenLeft(findUpLeftWhiteKing, whiteCheckUpLeft);
	whiteCheckByRookAndQueenLeft(findUpRightWhiteKing, whiteCheckUpRight);
	whiteCheckByRookAndQueenLeft(findDownRightWhiteKing, whiteCheckDownRight);
	whiteCheckByRookAndQueenLeft(findDownLeftWhiteKing, whiteCheckDownLeft);


	whiteCheckByRookAndQueenDown(findWhiteKing, whiteCheck);
	whiteCheckByRookAndQueenDown(findUpWhiteKing, whiteCheckUp);
	whiteCheckByRookAndQueenDown(findDownWhiteKing, whiteCheckDown);
	whiteCheckByRookAndQueenDown(findLeftWhiteKing, whiteCheckLeft);
	whiteCheckByRookAndQueenDown(findRightWhiteKing, whiteCheckRight);
	whiteCheckByRookAndQueenDown(findUpLeftWhiteKing, whiteCheckUpLeft);
	whiteCheckByRookAndQueenDown(findUpRightWhiteKing, whiteCheckUpRight);
	whiteCheckByRookAndQueenDown(findDownRightWhiteKing, whiteCheckDownRight);
	whiteCheckByRookAndQueenDown(findDownLeftWhiteKing, whiteCheckDownLeft);


	whiteCheckByRookAndQueenUp(findWhiteKing, whiteCheck);
	whiteCheckByRookAndQueenUp(findUpWhiteKing, whiteCheckUp);
	whiteCheckByRookAndQueenUp(findDownWhiteKing, whiteCheckDown);
	whiteCheckByRookAndQueenUp(findLeftWhiteKing, whiteCheckLeft);
	whiteCheckByRookAndQueenUp(findRightWhiteKing, whiteCheckRight);
	whiteCheckByRookAndQueenUp(findUpLeftWhiteKing, whiteCheckUpLeft);
	whiteCheckByRookAndQueenUp(findUpRightWhiteKing, whiteCheckUpRight);
	whiteCheckByRookAndQueenUp(findDownRightWhiteKing, whiteCheckDownRight);
	whiteCheckByRookAndQueenUp(findDownLeftWhiteKing, whiteCheckDownLeft);

	//black rooks
	blackCheckByRookAndQueenRight(findBlackKing, blackCheck);
	blackCheckByRookAndQueenRight(findUpBlackKing, blackCheckUp);
	blackCheckByRookAndQueenRight(findDownBlackKing, blackCheckDown);
	blackCheckByRookAndQueenRight(findLeftBlackKing, blackCheckLeft);
	blackCheckByRookAndQueenRight(findRightBlackKing, blackCheckRight);
	blackCheckByRookAndQueenRight(findUpLeftBlackKing, blackCheckUpLeft);
	blackCheckByRookAndQueenRight(findUpRightBlackKing, blackCheckUpRight);
	blackCheckByRookAndQueenRight(findDownRightBlackKing, blackCheckDownRight);
	blackCheckByRookAndQueenRight(findDownLeftBlackKing, blackCheckDownLeft);

	blackCheckByRookAndQueenLeft(findBlackKing, blackCheck);
	blackCheckByRookAndQueenLeft(findUpBlackKing, blackCheckUp);
	blackCheckByRookAndQueenLeft(findDownBlackKing, blackCheckDown);
	blackCheckByRookAndQueenLeft(findLeftBlackKing, blackCheckLeft);
	blackCheckByRookAndQueenLeft(findRightBlackKing, blackCheckRight);
	blackCheckByRookAndQueenLeft(findUpLeftBlackKing, blackCheckUpLeft);
	blackCheckByRookAndQueenLeft(findUpRightBlackKing, blackCheckUpRight);
	blackCheckByRookAndQueenLeft(findDownRightBlackKing, blackCheckDownRight);
	blackCheckByRookAndQueenLeft(findDownLeftBlackKing, blackCheckDownLeft);


	blackCheckByRookAndQueenDown(findBlackKing, blackCheck);
	blackCheckByRookAndQueenDown(findUpBlackKing, blackCheckUp);
	blackCheckByRookAndQueenDown(findDownBlackKing, blackCheckDown);
	blackCheckByRookAndQueenDown(findLeftBlackKing, blackCheckLeft);
	blackCheckByRookAndQueenDown(findRightBlackKing, blackCheckRight);
	blackCheckByRookAndQueenDown(findUpLeftBlackKing, blackCheckUpLeft);
	blackCheckByRookAndQueenDown(findUpRightBlackKing, blackCheckUpRight);
	blackCheckByRookAndQueenDown(findDownRightBlackKing, blackCheckDownRight);
	blackCheckByRookAndQueenDown(findDownLeftBlackKing, blackCheckDownLeft);


	blackCheckByRookAndQueenUp(findBlackKing, blackCheck);
	blackCheckByRookAndQueenUp(findUpBlackKing, blackCheckUp);
	blackCheckByRookAndQueenUp(findDownBlackKing, blackCheckDown);
	blackCheckByRookAndQueenUp(findLeftBlackKing, blackCheckLeft);
	blackCheckByRookAndQueenUp(findRightBlackKing, blackCheckRight);
	blackCheckByRookAndQueenUp(findUpLeftBlackKing, blackCheckUpLeft);
	blackCheckByRookAndQueenUp(findUpRightBlackKing, blackCheckUpRight);
	blackCheckByRookAndQueenUp(findDownRightBlackKing, blackCheckDownRight);
	blackCheckByRookAndQueenUp(findDownLeftBlackKing, blackCheckDownLeft);



    //check for checkmate after checking each surrounding piece
    if(whiteCheck === true && whiteCheckUp === true && whiteCheckDown === true && whiteCheckLeft === true && whiteCheckRight === true && whiteCheckUpRight === true && whiteCheckUpLeft === true && whiteCheckDownRight === true && whiteCheckDownLeft === true) {
      whiteCheckMate === true;
    };
  
    if(blackCheck === true && blackCheckUp === true && blackCheckDown === true && blackCheckLeft === true && blackCheckRight === true && blackCheckUpRight === true && blackCheckUpLeft === true && blackCheckDownRight === true && blackCheckDownLeft === true) {
      blackCheckMate === true;
    };
}; 