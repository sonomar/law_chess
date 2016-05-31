var isCheck = function() {
	var whiteCheckList = [];
	var blackCheckList = [];
	var checkMateWhiteArray = ["whiteCheck", "whiteCheckUp", "whiteCheckDown", "whiteCheckLeft", "whiteCheckRight", "whiteCheckUpLeft", "whiteCheckUpRight", "whiteCheckDownRight", "whiteCheckDownLeft"];
	var checkMateBlackArray = ["blackCheck", "blackCheckUp", "blackCheckDown", "blackCheckLeft", "blackCheckRight", "blackCheckUpLeft", "blackCheckUpRight", "blackCheckDownRight", "blackCheckDownLeft"];
	var sortedWhiteMatchArray = [];
	var sortedBlackMatchArray = [];
	var blackCounter;
	var whiteCounter;

	//find white king and surrounding squares
	var findWhiteKing = $(".board-row").find(".white-king").parent();
	var findUpWhiteKing = findWhiteKing.parent().prev().children().eq(findWhiteKing.index());
	var findLeftWhiteKing = findWhiteKing.prev();
	var findRightWhiteKing = findWhiteKing.next();
	var findDownWhiteKing = findWhiteKing.parent().next().children().eq(findWhiteKing.index());
	var findUpRightWhiteKing = findWhiteKing.parent().prev().children().eq(findWhiteKing.index() + 1);
	var findUpLeftWhiteKing = findWhiteKing.parent().prev().children().eq(findWhiteKing.index() - 1);
	var findDownRightWhiteKing = findWhiteKing.parent().next().children().eq(findWhiteKing.index() + 1);
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
            
	    		whiteCheckList.push(zone);
	    		return whiteCheckList;
	    };
	};
	var whiteCheckByRookAndQueenLeft = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.prevAll().eq(i).children().hasClass("black-rook") || location.prevAll().eq(i).children().hasClass("black-queen")) {
	    		whiteCheckList.push(zone);
	    		return whiteCheckList;
	    	}
	    	else if(location.prevAll().eq(i).children().hasClass("chess-piece") && location.prevAll().eq(i).children().hasClass("black-rook") === false && location.prevAll().eq(i).children().hasClass("black-queen") === false ) {
	    		return "not check";
	    	};	
	    };
	};
	var whiteCheckByRookAndQueenRight = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.nextAll().eq(i).children().hasClass("black-rook") || location.nextAll().eq(i).children().hasClass("black-queen")) {
	    		whiteCheckList.push(zone);
	    		return whiteCheckList;
	    	}
	    	else if(location.nextAll().eq(i).children().hasClass("chess-piece") && location.nextAll().eq(i).children().hasClass("black-rook") === false && location.nextAll().eq(i).children().hasClass("black-queen") === false ) { 
	    		return "not check";
	    	};
	    };
	};
	var whiteCheckByRookAndQueenDown = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("black-rook") || location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("black-queen")) {
	    		whiteCheckList.push(zone);
	    		return whiteCheckList;	
	    	}
	    	else if(location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("chess-piece") && location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("black-rook") === false && location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("black-queen") === false ) {
	    		return "not check";
	    	};
	    };
	};
	var whiteCheckByRookAndQueenUp = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("black-rook") || location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("black-queen")) {
	    		whiteCheckList.push(zone);
	    		return whiteCheckList;
	    	}
	    	else if(location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("chess-piece") && location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("black-rook") === false && location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("black-queen") === false ) {
	    		return "not check";
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
	    	whiteCheckList.push(zone);
	    		return whiteCheckList;
	    };
	};
	var whiteCheckByKing = function(location, zone) {
	    if(location.next().children().hasClass("black-king") || location.prev().children().hasClass("black-king") || location.parent().prev().children().eq(location.index()).children().hasClass("black-king") || location.parent().next().children().eq(location.index()).children().hasClass("black-king") || location.parent().prev().children().eq(location.index() + 1).children().hasClass("black-king") || location.parent().prev().children().eq(location.index() - 1).children().hasClass("black-king") || location.parent().next().children().eq(location.index() + 1).children().hasClass("black-king") || location.parent().next().children().eq(location.index() - 1).children().hasClass("black-king")) {
			whiteCheckList.push(zone);
	    		return whiteCheckList;
		};
	};
	var whiteCheckByBishopOrQueenUpLeft = function(location, zone) {
	  for(i = 0; i < 7; i++) {
	  	if(location.parent().prevAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("black-bishop") || location.parent().prevAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("black-queen")) {
	     		whiteCheckList.push(zone);
	    		return whiteCheckList;
	    }
	    else if(location.parent().prevAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("chess-piece") && location.parent().prevAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("black-bishop") === false && location.parent().prevAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("black-queen") === false) {
	      return "not check";
	    };
	  };
	};
	var whiteCheckByBishopOrQueenUpRight = function(location, zone) {
	  for(i = 0; i < 7; i++) {
	    if(location.parent().prevAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("black-bishop") || location.parent().prevAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("black-queen")) {
	     		whiteCheckList.push(zone);
	    		return whiteCheckList;
	    }
	    else if(location.parent().prevAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("chess-piece") && location.parent().prevAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("black-bishop") === false && location.parent().prevAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("black-queen") === false) {
	      return "not check";
	    };
	  };
	};
	var whiteCheckByBishopOrQueenDownLeft = function(location, zone) {
	  for(i = 0; i < 7; i++) {
	    if(location.parent().nextAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("black-bishop") || location.parent().nextAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("black-queen")) {
	     		whiteCheckList.push(zone);
	    		return whiteCheckList;
	    }
	    else if(location.parent().nextAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("chess-piece") && location.parent().nextAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("black-bishop") === false && location.parent().nextAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("black-queen") === false) {
	      return "not check";
	    };
	  };
	};
	var whiteCheckByBishopOrQueenDownRight = function(location, zone) {
	  for(i = 0; i < 7; i++) {
	    if(location.parent().nextAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("black-bishop") || location.parent().nextAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("black-queen")) {
	     		whiteCheckList.push(zone);
	    		return whiteCheckList;
	    }
	    else if(location.parent().nextAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("chess-piece") && location.parent().nextAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("black-bishop") === false && location.parent().nextAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("black-queen") === false) {
	      return "not check";
	    };
	  };
	};

    //black check rules
    var blackCheckByPawn = function (location, zone) {
	    if(location.parent().next().children().eq(location.index() - 1).children().hasClass("white-pawn") || location.parent().next().children().eq(location.index() + 1).children().hasClass("white-pawn")) {
	    	blackCheckList.push(zone);
	    		return blackCheckList;
	    };
	};
	var blackCheckByRookAndQueenLeft = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.prevAll().eq(i).children().hasClass("white-rook") || location.prevAll().eq(i).children().hasClass("white-queen")) {
	    		blackCheckList.push(zone);
	    		return blackCheckList;
	    	}
	    	else if(location.prevAll().eq(i).children().hasClass("chess-piece") && location.prevAll().eq(i).children().hasClass("white-rook") === false && location.prevAll().eq(i).children().hasClass("white-queen") === false ) {
	    		return "not check";
	    	};	
	    };
	};
	var blackCheckByRookAndQueenRight = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.nextAll().eq(i).children().hasClass("white-rook") || location.nextAll().eq(i).children().hasClass("white-queen")) {
	    	blackCheckList.push(zone);
	    		return blackCheckList;
	    	}
	    	else if(location.nextAll().eq(i).children().hasClass("chess-piece") && location.nextAll().eq(i).children().hasClass("white-rook") === false && location.nextAll().eq(i).children().hasClass("white-queen") === false ) {
	    		return "not check";
	    	};
	    };
	};
	var blackCheckByRookAndQueenDown = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("white-rook") || location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("white-queen")) {
	    		blackCheckList.push(zone);
	    		return blackCheckList;
	    	}
	    	else if(location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("chess-piece") && location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("white-rook") === false && location.parent().nextAll().eq(i).children().eq(location.index()).children().hasClass("white-queen") === false ) {
	    		return "not check";
	    	};
	    };
	};
	var blackCheckByRookAndQueenUp = function(location, zone) {
	    for(i = 0; i < 8; i++) {
	    	if(location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("white-rook") || location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("white-queen")) {
	    		blackCheckList.push(zone);
	    		return blackCheckList;
	    	}
	    	else if(location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("chess-piece") && location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("white-rook") === false && location.parent().prevAll().eq(i).children().eq(location.index()).children().hasClass("white-queen") === false ) {
	    		return "not check";
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
	    		blackCheckList.push(zone);
	    		return blackCheckList;
	    };
	};
	var blackCheckByKing = function(location, zone) {
	    if(location.next().children().hasClass("white-king") || location.prev().children().hasClass("white-king") || location.parent().prev().children().eq(location.index()).children().hasClass("white-king") || location.parent().next().children().eq(location.index()).children().hasClass("white-king") || location.parent().prev().children().eq(location.index() + 1).children().hasClass("white-king") || location.parent().prev().children().eq(location.index() - 1).children().hasClass("white-king") || location.parent().next().children().eq(location.index() + 1).children().hasClass("white-king") || location.parent().next().children().eq(location.index() - 1).children().hasClass("white-king")) {
				blackCheckList.push(zone);
	    		return blackCheckList;
		};
	};

	var blackCheckByBishopOrQueenUpLeft = function(location, zone) {
	  for(i = 0; i < 7; i++) {
	  	if(location.parent().prevAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("white-bishop") || location.parent().prevAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("white-queen")) {
	     		blackCheckList.push(zone);
	    		return blackCheckList;
	    }
	    else if(location.parent().prevAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("chess-piece") && location.parent().prevAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("white-bishop") === false && location.parent().prevAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("white-queen") === false) {
	      return "not check";
	    };
	  };
	};

	var blackCheckByBishopOrQueenUpRight = function(location, zone) {
	  for(i = 0; i < 7; i++) {
	    if(location.parent().prevAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("white-bishop") || location.parent().prevAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("white-queen")) {
	     		blackCheckList.push(zone);
	    		return blackCheckList;
	    }
	    else if(location.parent().prevAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("chess-piece") && location.parent().prevAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("white-bishop") === false && location.parent().prevAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("white-queen") === false) {
	      return "not check";
	    };
	  };
	};

	var blackCheckByBishopOrQueenDownLeft = function(location, zone) {
	  for(i = 0; i < 7; i++) {
	    if(location.parent().nextAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("white-bishop") || location.parent().nextAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("white-queen")) {
	     		blackCheckList.push(zone);
	    		return blackCheckList;
	    }
	    else if(location.parent().nextAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("chess-piece") && location.parent().nextAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("white-bishop") === false && location.parent().nextAll().eq(i).children().eq(location.index() - i - 1).children().hasClass("white-queen") === false) {
	      return "not check";
	    };
	  };
	};

	var blackCheckByBishopOrQueenDownRight = function(location, zone) {
	  for(i = 0; i < 7; i++) {
	    if(location.parent().nextAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("white-bishop") || location.parent().nextAll().eq(i).children().eq(location.index() + i + 1 ).children().hasClass("white-queen")) {
	    		blackCheckList.push(zone);
	    		return blackCheckList;
	    }
	    else if(location.parent().nextAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("chess-piece") && location.parent().nextAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("white-bishop") === false && location.parent().nextAll().eq(i).children().eq(location.index() + i + 1).children().hasClass("white-queen") === false) {
	      return "not check";
	    };
	  };
	};
	
    //look for check and checkmate for
    //white pawns
	whiteCheckByPawn(findWhiteKing, "whiteCheck");
	whiteCheckByPawn(findUpWhiteKing, "whiteCheckUp");
	whiteCheckByPawn(findDownWhiteKing, "whiteCheckDown");
	whiteCheckByPawn(findLeftWhiteKing, "whiteCheckLeft");
	whiteCheckByPawn(findRightWhiteKing, "whiteCheckRight");
	whiteCheckByPawn(findUpLeftWhiteKing, "whiteCheckUpLeft");
	whiteCheckByPawn(findUpRightWhiteKing, "whiteCheckUpRight");
	whiteCheckByPawn(findDownRightWhiteKing, "whiteCheckDownRight");
	whiteCheckByPawn(findDownLeftWhiteKing, "whiteCheckDownLeft");

	//white knights
	whiteCheckByKnight(findWhiteKing, "whiteCheck");
	whiteCheckByKnight(findUpWhiteKing, "whiteCheckUp");
	whiteCheckByKnight(findDownWhiteKing, "whiteCheckDown");
	whiteCheckByKnight(findLeftWhiteKing, "whiteCheckLeft");
	whiteCheckByKnight(findRightWhiteKing, "whiteCheckRight");
	whiteCheckByKnight(findUpLeftWhiteKing, "whiteCheckUpLeft");
	whiteCheckByKnight(findUpRightWhiteKing, "whiteCheckUpRight");
	whiteCheckByKnight(findDownRightWhiteKing, "whiteCheckDownRight");
	whiteCheckByKnight(findDownLeftWhiteKing, "whiteCheckDownLeft");

	//white kings
	whiteCheckByKing(findWhiteKing, "whiteCheck");
	whiteCheckByKing(findUpWhiteKing, "whiteCheckUp");
	whiteCheckByKing(findDownWhiteKing, "whiteCheckDown");
	whiteCheckByKing(findLeftWhiteKing, "whiteCheckLeft");
	whiteCheckByKing(findRightWhiteKing, "whiteCheckRight");
	whiteCheckByKing(findUpLeftWhiteKing, "whiteCheckUpLeft");
	whiteCheckByKing(findUpRightWhiteKing, "whiteCheckUpRight");
	whiteCheckByKing(findDownRightWhiteKing, "whiteCheckDownRight");
	whiteCheckByKing(findDownLeftWhiteKing, "whiteCheckDownLeft");

    //white rooks and queens
	whiteCheckByRookAndQueenRight(findWhiteKing, "whiteCheck");
	whiteCheckByRookAndQueenRight(findUpWhiteKing, "whiteCheckUp");
	whiteCheckByRookAndQueenRight(findDownWhiteKing, "whiteCheckDown");
	whiteCheckByRookAndQueenRight(findLeftWhiteKing, "whiteCheckLeft");
	whiteCheckByRookAndQueenRight(findRightWhiteKing, "whiteCheckRight");
	whiteCheckByRookAndQueenRight(findUpLeftWhiteKing, "whiteCheckUpLeft");
	whiteCheckByRookAndQueenRight(findUpRightWhiteKing, "whiteCheckUpRight");
	whiteCheckByRookAndQueenRight(findDownRightWhiteKing, "whiteCheckDownRight");
	whiteCheckByRookAndQueenRight(findDownLeftWhiteKing, "whiteCheckDownLeft");

	whiteCheckByRookAndQueenLeft(findWhiteKing, "whiteCheck");
	whiteCheckByRookAndQueenLeft(findUpWhiteKing, "whiteCheckUp");
	whiteCheckByRookAndQueenLeft(findDownWhiteKing, "whiteCheckDown");
	whiteCheckByRookAndQueenLeft(findLeftWhiteKing, "whiteCheckLeft");
	whiteCheckByRookAndQueenLeft(findRightWhiteKing, "whiteCheckRight");
	whiteCheckByRookAndQueenLeft(findUpLeftWhiteKing, "whiteCheckUpLeft");
	whiteCheckByRookAndQueenLeft(findUpRightWhiteKing, "whiteCheckUpRight");
	whiteCheckByRookAndQueenLeft(findDownRightWhiteKing, "whiteCheckDownRight");
	whiteCheckByRookAndQueenLeft(findDownLeftWhiteKing, "whiteCheckDownLeft");

	whiteCheckByRookAndQueenDown(findWhiteKing, "whiteCheck");
	whiteCheckByRookAndQueenDown(findUpWhiteKing, "whiteCheckUp");
	whiteCheckByRookAndQueenDown(findDownWhiteKing, "whiteCheckDown");
	whiteCheckByRookAndQueenDown(findLeftWhiteKing, "whiteCheckLeft");
	whiteCheckByRookAndQueenDown(findRightWhiteKing, "whiteCheckRight");
	whiteCheckByRookAndQueenDown(findUpLeftWhiteKing, "whiteCheckUpLeft");
	whiteCheckByRookAndQueenDown(findUpRightWhiteKing, "whiteCheckUpRight");
	whiteCheckByRookAndQueenDown(findDownRightWhiteKing, "whiteCheckDownRight");
	whiteCheckByRookAndQueenDown(findDownLeftWhiteKing, "whiteCheckDownLeft");

	whiteCheckByRookAndQueenUp(findWhiteKing, "whiteCheck");
	whiteCheckByRookAndQueenUp(findUpWhiteKing, "whiteCheckUp");
	whiteCheckByRookAndQueenUp(findDownWhiteKing, "whiteCheckDown");
	whiteCheckByRookAndQueenUp(findLeftWhiteKing, "whiteCheckLeft");
	whiteCheckByRookAndQueenUp(findRightWhiteKing, "whiteCheckRight");
	whiteCheckByRookAndQueenUp(findUpLeftWhiteKing, "whiteCheckUpLeft");
	whiteCheckByRookAndQueenUp(findUpRightWhiteKing, "whiteCheckUpRight");
	whiteCheckByRookAndQueenUp(findDownRightWhiteKing, "whiteCheckDownRight");
	whiteCheckByRookAndQueenUp(findDownLeftWhiteKing, "whiteCheckDownLeft");

	//white bishops and queens
	whiteCheckByBishopOrQueenUpLeft(findWhiteKing, "whiteCheck");
	whiteCheckByBishopOrQueenUpLeft(findUpWhiteKing, "whiteCheckUp");
	whiteCheckByBishopOrQueenUpLeft(findDownWhiteKing, "whiteCheckDown");
	whiteCheckByBishopOrQueenUpLeft(findLeftWhiteKing, "whiteCheckLeft");
	whiteCheckByBishopOrQueenUpLeft(findRightWhiteKing, "whiteCheckRight");
	whiteCheckByBishopOrQueenUpLeft(findUpLeftWhiteKing, "whiteCheckUpLeft");
	whiteCheckByBishopOrQueenUpLeft(findUpRightWhiteKing, "whiteCheckUpRight");
	whiteCheckByBishopOrQueenUpLeft(findDownRightWhiteKing, "whiteCheckDownRight");
	whiteCheckByBishopOrQueenUpLeft(findDownLeftWhiteKing, "whiteCheckDownLeft");

    whiteCheckByBishopOrQueenUpRight(findWhiteKing, "whiteCheck");
	whiteCheckByBishopOrQueenUpRight(findUpWhiteKing, "whiteCheckUp");
	whiteCheckByBishopOrQueenUpRight(findDownWhiteKing, "whiteCheckDown");
	whiteCheckByBishopOrQueenUpRight(findLeftWhiteKing, "whiteCheckLeft");
	whiteCheckByBishopOrQueenUpRight(findRightWhiteKing, "whiteCheckRight");
	whiteCheckByBishopOrQueenUpRight(findUpLeftWhiteKing, "whiteCheckUpLeft");
	whiteCheckByBishopOrQueenUpRight(findUpRightWhiteKing, "whiteCheckUpRight");
	whiteCheckByBishopOrQueenUpRight(findDownRightWhiteKing, "whiteCheckDownRight");
	whiteCheckByBishopOrQueenUpRight(findDownLeftWhiteKing, "whiteCheckDownLeft");

	whiteCheckByBishopOrQueenDownLeft(findWhiteKing, "whiteCheck");
	whiteCheckByBishopOrQueenDownLeft(findUpWhiteKing, "whiteCheckUp");
	whiteCheckByBishopOrQueenDownLeft(findDownWhiteKing, "whiteCheckDown");
	whiteCheckByBishopOrQueenDownLeft(findLeftWhiteKing, "whiteCheckLeft");
	whiteCheckByBishopOrQueenDownLeft(findRightWhiteKing, "whiteCheckRight");
	whiteCheckByBishopOrQueenDownLeft(findUpLeftWhiteKing, "whiteCheckUpLeft");
	whiteCheckByBishopOrQueenDownLeft(findUpRightWhiteKing, "whiteCheckUpRight");
	whiteCheckByBishopOrQueenDownLeft(findDownRightWhiteKing, "whiteCheckDownRight");
	whiteCheckByBishopOrQueenDownLeft(findDownLeftWhiteKing, "whiteCheckDownLeft");

	whiteCheckByBishopOrQueenDownRight(findWhiteKing, "whiteCheck");
	whiteCheckByBishopOrQueenDownRight(findUpWhiteKing, "whiteCheckUp");
	whiteCheckByBishopOrQueenDownRight(findDownWhiteKing, "whiteCheckDown");
	whiteCheckByBishopOrQueenDownRight(findLeftWhiteKing, "whiteCheckLeft");
	whiteCheckByBishopOrQueenDownRight(findRightWhiteKing, "whiteCheckRight");
	whiteCheckByBishopOrQueenDownRight(findUpLeftWhiteKing, "whiteCheckUpLeft");
	whiteCheckByBishopOrQueenDownRight(findUpRightWhiteKing, "whiteCheckUpRight");
	whiteCheckByBishopOrQueenDownRight(findDownRightWhiteKing, "whiteCheckDownRight");
	whiteCheckByBishopOrQueenDownRight(findDownLeftWhiteKing, "whiteCheckDownLeft");
	
	//black pawns
	blackCheckByPawn(findBlackKing, "blackCheck");
	blackCheckByPawn(findUpBlackKing, "blackCheckUp");
	blackCheckByPawn(findDownBlackKing, "blackCheckDown");
	blackCheckByPawn(findLeftBlackKing, "blackCheckLeft");
	blackCheckByPawn(findRightBlackKing, "blackCheckRight");
	blackCheckByPawn(findUpLeftBlackKing, "blackCheckUpLeft");
	blackCheckByPawn(findUpRightBlackKing, "blackCheckUpRight");
	blackCheckByPawn(findDownRightBlackKing, "blackCheckDownRight");
	blackCheckByPawn(findDownLeftBlackKing, "blackCheckDownLeft");

	//black knights
	blackCheckByKnight(findBlackKing, "blackCheck");
	blackCheckByKnight(findUpBlackKing, "blackCheckUp");
	blackCheckByKnight(findDownBlackKing, "blackCheckDown");
	blackCheckByKnight(findLeftBlackKing, "blackCheckLeft");
	blackCheckByKnight(findRightBlackKing, "blackCheckRight");
	blackCheckByKnight(findUpLeftBlackKing, "blackCheckUpLeft");
	blackCheckByKnight(findUpRightBlackKing, "blackCheckUpRight");
	blackCheckByKnight(findDownRightBlackKing, "blackCheckDownRight");
	blackCheckByKnight(findDownLeftBlackKing, "blackCheckDownLeft");

	//black kings
	blackCheckByKing(findBlackKing, "blackCheck");
	blackCheckByKing(findUpBlackKing, "blackCheckUp");
	blackCheckByKing(findDownBlackKing, "blackCheckDown");
	blackCheckByKing(findLeftBlackKing, "blackCheckLeft");
	blackCheckByKing(findRightBlackKing, "blackCheckRight");
	blackCheckByKing(findUpLeftBlackKing, "blackCheckUpLeft");
	blackCheckByKing(findUpRightBlackKing, "blackCheckUpRight");
	blackCheckByKing(findDownRightBlackKing, "blackCheckDownRight");
	blackCheckByKing(findDownLeftBlackKing, "blackCheckDownLeft");

	//black rooks and queens
	blackCheckByRookAndQueenRight(findBlackKing, "blackCheck");
	blackCheckByRookAndQueenRight(findUpBlackKing, "blackCheckUp");
	blackCheckByRookAndQueenRight(findDownBlackKing, "blackCheckDown");
	blackCheckByRookAndQueenRight(findLeftBlackKing, "blackCheckLeft");
	blackCheckByRookAndQueenRight(findRightBlackKing, "blackCheckRight");
	blackCheckByRookAndQueenRight(findUpLeftBlackKing, "blackCheckUpLeft");
	blackCheckByRookAndQueenRight(findUpRightBlackKing, "blackCheckUpRight");
	blackCheckByRookAndQueenRight(findDownRightBlackKing, "blackCheckDownRight");
	blackCheckByRookAndQueenRight(findDownLeftBlackKing, "blackCheckDownLeft");

	blackCheckByRookAndQueenLeft(findBlackKing, "blackCheck");
	blackCheckByRookAndQueenLeft(findUpBlackKing, "blackCheckUp");
	blackCheckByRookAndQueenLeft(findDownBlackKing, "blackCheckDown");
	blackCheckByRookAndQueenLeft(findLeftBlackKing, "blackCheckLeft");
	blackCheckByRookAndQueenLeft(findRightBlackKing, "blackCheckRight");
	blackCheckByRookAndQueenLeft(findUpLeftBlackKing, "blackCheckUpLeft");
	blackCheckByRookAndQueenLeft(findUpRightBlackKing, "blackCheckUpRight");
	blackCheckByRookAndQueenLeft(findDownRightBlackKing, "blackCheckDownRight");
	blackCheckByRookAndQueenLeft(findDownLeftBlackKing, "blackCheckDownLeft");

	blackCheckByRookAndQueenDown(findBlackKing, "blackCheck");
	blackCheckByRookAndQueenDown(findUpBlackKing, "blackCheckUp");
	blackCheckByRookAndQueenDown(findDownBlackKing, "blackCheckDown");
	blackCheckByRookAndQueenDown(findLeftBlackKing, "blackCheckLeft");
	blackCheckByRookAndQueenDown(findRightBlackKing, "blackCheckRight");
	blackCheckByRookAndQueenDown(findUpLeftBlackKing, "blackCheckUpLeft");
	blackCheckByRookAndQueenDown(findUpRightBlackKing, "blackCheckUpRight");
	blackCheckByRookAndQueenDown(findDownRightBlackKing, "blackCheckDownRight");
	blackCheckByRookAndQueenDown(findDownLeftBlackKing, "blackCheckDownLeft");

	blackCheckByRookAndQueenUp(findBlackKing, "blackCheck");
	blackCheckByRookAndQueenUp(findUpBlackKing, "blackCheckUp");
	blackCheckByRookAndQueenUp(findDownBlackKing, "blackCheckDown");
	blackCheckByRookAndQueenUp(findLeftBlackKing, "blackCheckLeft");
	blackCheckByRookAndQueenUp(findRightBlackKing, "blackCheckRight");
	blackCheckByRookAndQueenUp(findUpLeftBlackKing, "blackCheckUpLeft");
	blackCheckByRookAndQueenUp(findUpRightBlackKing, "blackCheckUpRight");
	blackCheckByRookAndQueenUp(findDownRightBlackKing, "blackCheckDownRight");
	blackCheckByRookAndQueenUp(findDownLeftBlackKing, "blackCheckDownLeft");

	//black bishops and queens
	blackCheckByBishopOrQueenUpLeft(findBlackKing, "blackCheck");
	blackCheckByBishopOrQueenUpLeft(findUpBlackKing, "blackCheckUp");
	blackCheckByBishopOrQueenUpLeft(findDownBlackKing, "blackCheckDown");
	blackCheckByBishopOrQueenUpLeft(findLeftBlackKing, "blackCheckLeft");
	blackCheckByBishopOrQueenUpLeft(findRightBlackKing, "blackCheckRight");
	blackCheckByBishopOrQueenUpLeft(findUpLeftBlackKing, "blackCheckUpLeft");
	blackCheckByBishopOrQueenUpLeft(findUpRightBlackKing, "blackCheckUpRight");
	blackCheckByBishopOrQueenUpLeft(findDownRightBlackKing, "blackCheckDownRight");
	blackCheckByBishopOrQueenUpLeft(findDownLeftBlackKing, "blackCheckDownLeft");

	blackCheckByBishopOrQueenUpRight(findBlackKing, "blackCheck");
	blackCheckByBishopOrQueenUpRight(findUpBlackKing, "blackCheckUp");
	blackCheckByBishopOrQueenUpRight(findDownBlackKing, "blackCheckDown");
	blackCheckByBishopOrQueenUpRight(findLeftBlackKing, "blackCheckLeft");
	blackCheckByBishopOrQueenUpRight(findRightBlackKing, "blackCheckRight");
	blackCheckByBishopOrQueenUpRight(findUpLeftBlackKing, "blackCheckUpLeft");
	blackCheckByBishopOrQueenUpRight(findUpRightBlackKing, "blackCheckUpRight");
	blackCheckByBishopOrQueenUpRight(findDownRightBlackKing, "blackCheckDownRight");
	blackCheckByBishopOrQueenUpRight(findDownLeftBlackKing, "blackCheckDownLeft");

	blackCheckByBishopOrQueenDownLeft(findBlackKing, "blackCheck");
	blackCheckByBishopOrQueenDownLeft(findUpBlackKing, "blackCheckUp");
	blackCheckByBishopOrQueenDownLeft(findDownBlackKing, "blackCheckDown");
	blackCheckByBishopOrQueenDownLeft(findLeftBlackKing, "blackCheckLeft");
	blackCheckByBishopOrQueenDownLeft(findRightBlackKing, "blackCheckRight");
	blackCheckByBishopOrQueenDownLeft(findUpLeftBlackKing, "blackCheckUpLeft");
	blackCheckByBishopOrQueenDownLeft(findUpRightBlackKing, "blackCheckUpRight");
	blackCheckByBishopOrQueenDownLeft(findDownRightBlackKing, "blackCheckDownRight");
	blackCheckByBishopOrQueenDownLeft(findDownLeftBlackKing, "blackCheckDownLeft");

	blackCheckByBishopOrQueenDownRight(findBlackKing, "blackCheck");
	blackCheckByBishopOrQueenDownRight(findUpBlackKing, "blackCheckUp");
	blackCheckByBishopOrQueenDownRight(findDownBlackKing, "blackCheckDown");
	blackCheckByBishopOrQueenDownRight(findLeftBlackKing, "blackCheckLeft");
	blackCheckByBishopOrQueenDownRight(findRightBlackKing, "blackCheckRight");
	blackCheckByBishopOrQueenDownRight(findUpLeftBlackKing, "blackCheckUpLeft");
	blackCheckByBishopOrQueenDownRight(findUpRightBlackKing, "blackCheckUpRight");
	blackCheckByBishopOrQueenDownRight(findDownRightBlackKing, "blackCheckDownRight");
	blackCheckByBishopOrQueenDownRight(findDownLeftBlackKing, "blackCheckDownLeft");

	var whiteCheckTest = function() {
    	if(whiteCheckList.sort()[0] === "whiteCheck") {
    		return whiteCheck = true;
    	};
	}

	var blackCheckTest = function() {
		if(blackCheckList.sort()[0] === "blackCheck") {
			return blackCheck = true;
		}
	}

	var whiteCheckMateTest = function() {
	    var sortedWhiteCheckList = whiteCheckList.sort();	    
	    var sortedWhiteMateArray = checkMateWhiteArray.sort()
	    var whiteMatchArray = []
	    for(i = 0; i < sortedWhiteCheckList.length; i++) {
	    	if(sortedWhiteCheckList[i] != sortedWhiteCheckList[i + 1]) {
	    		whiteMatchArray.push(sortedWhiteCheckList[i]);
	    	};
	    };
	    var sortedWhiteMatchArray = whiteMatchArray.sort();
	    return sortedWhiteMatchArray;
	};

	var blackCheckMateTest = function() {
	    var sortedBlackCheckList = blackCheckList.sort();	    
	    var sortedBlackMateArray = checkMateBlackArray.sort()
	    var blackMatchArray = []
	    for(i = 0; i < sortedBlackCheckList.length; i++) {
	    	if(sortedBlackCheckList[i] != sortedBlackCheckList[i + 1]) {
	    		blackMatchArray.push(sortedBlackCheckList[i]);
	    	};
	    };
	    var sortedBlackMatchArray = blackMatchArray.sort();
	    return sortedBlackMatchArray;
	};

	var finalWhiteCheckMateTest = function() {
      var whiteCounter = 9;
      if(findUpWhiteKing === undefined || findUpWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findDownWhiteKing === undefined || findDownWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findLeftWhiteKing === undefined || findLeftWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findRightWhiteKing === undefined || findRightWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findUpLeftWhiteKing === undefined || findUpLeftWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findUpRightWhiteKing === undefined || findUpRightWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findDownLeftWhiteKing === undefined || findDownLeftWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findDownRightWhiteKing === undefined || findDownRightWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      return whiteCounter;
	};

	var finalBlackCheckMateTest = function() {
      blackCounter = 9;
      if(findUpBlackKing[0] === undefined || findUpBlackKing.children().hasClass("chess-piece")) {
        blackCounter --;
      };
      if(findDownBlackKing[0] === undefined || findDownBlackKing.children().hasClass("chess-piece")) {
        blackCounter --;
      };
      if(findLeftBlackKing[0] === undefined || findLeftBlackKing.children().hasClass("chess-piece")) {
        blackCounter --;
      };
      if(findRightBlackKing[0] === undefined || findRightBlackKing.children().hasClass("chess-piece")) {
        blackCounter --;
      };
      if(findUpLeftBlackKing[0] === undefined || findUpLeftBlackKing.children().hasClass("chess-piece")) {
        blackCounter --;
      };
      if(findUpRightBlackKing[0] === undefined || findUpRightBlackKing.children().hasClass("chess-piece")) {
        blackCounter --;
      };
      if(findDownLeftBlackKing[0] === undefined || findDownLeftBlackKing.children().hasClass("chess-piece")) {
        blackCounter --;
      };
      if(findDownRightBlackKing[0] === undefined || findDownRightBlackKing.children().hasClass("chess-piece")) {
        blackCounter --;
      };
      return blackCounter;
	};

	whiteCheckTest();
	blackCheckTest();
	whiteCheckMateTest();
	blackCheckMateTest();
	finalWhiteCheckMateTest();
	finalBlackCheckMateTest();

	//start a counter at 8. Check each direction. If a direction is undefined (off the edge of the board), subtract 1 from the counter. If a direction has a piece on it, subtract 1 from the counter. Whatever the counter remains as, that is how long the sortedWhiteMatchArray must be (+ 1 since "blackCheck/whiteCheck" doesn't count). 
    
    //i.e. if top 3 squares are empty and three surrounding squares have pieces, that leaves 2 left, so if the sortedWhiteMatchArray's length is 3, then checkMate is true.
    	if(whiteCheckList.length === whiteCounter && sortedWhiteMatchArray.length != 0 && sortedWhiteMatchArray.length != 1) {
    		return whiteCheckMate = true;
    	}
    	else if(blackCheckList.length === blackCounter && sortedBlackMatchArray.length != 0 && sortedBlackMatchArray.length != 1) {
    		return blackCheckMate = true;
    	}
    //do the suggestion above instead of the one below.
	// if(sortedWhiteMatchArray === checkMateWhiteArray.sort())  {
	//       return whiteCheckMate = true;
	// }
	// else if(sortedBlackMatchArray === checkMateBlackArray.sort()) {
	// 	  return blackCheckMate = true;
	// };

}; 