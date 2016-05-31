var isCheck = function() {
	var whiteCheckList = [];
	var blackCheckList = [];
	var sortedWhiteMatchArray = [];
	var sortedBlackMatchArray = [];
	var blackCounter;
	var whiteCounter;

	var findWhiteKing = $(".board-row").find(".white-king").parent();
	var findUpWhiteKing = findWhiteKing.parent().prev().children().eq(findWhiteKing.index());
	var findLeftWhiteKing = findWhiteKing.prev();
	var findRightWhiteKing = findWhiteKing.next();
	var findDownWhiteKing = findWhiteKing.parent().next().children().eq(findWhiteKing.index());
	var findUpRightWhiteKing = findWhiteKing.parent().prev().children().eq(findWhiteKing.index() + 1);
	var findUpLeftWhiteKing = findWhiteKing.parent().prev().children().eq(findWhiteKing.index() - 1);
	var findDownRightWhiteKing = findWhiteKing.parent().next().children().eq(findWhiteKing.index() + 1);
	var findDownLeftWhiteKing = findWhiteKing.parent().next().children().eq(findWhiteKing.index() - 1);
	
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

	var whiteCheckComf = function() {
		findWhiteKing = $(".board-row").find(".white-king").parent();
		whiteCheckByPawn(findWhiteKing, "check");
		whiteCheckByKnight(findWhiteKing, "check");
		whiteCheckByKing(findWhiteKing, "check");
		whiteCheckByRookAndQueenRight(findWhiteKing, "check");
		whiteCheckByRookAndQueenLeft(findWhiteKing, "check");
		whiteCheckByRookAndQueenDown(findWhiteKing, "check");
		whiteCheckByRookAndQueenUp(findWhiteKing, "check");
		whiteCheckByBishopOrQueenUpLeft(findWhiteKing, "check");
		whiteCheckByBishopOrQueenUpRight(findWhiteKing, "check");
		whiteCheckByBishopOrQueenDownLeft(findWhiteKing, "check");
		whiteCheckByBishopOrQueenDownRight(findWhiteKing, "check");
		return whiteCheckList;
	}

	var blackCheckComf = function() {
		findBlackKing = $(".board-row").find(".black-king").parent();
		blackCheckByPawn(findBlackKing, "check");
		blackCheckByKnight(findBlackKing, "check");
		blackCheckByKing(findBlackKing, "check");
		blackCheckByRookAndQueenRight(findBlackKing, "check");
		blackCheckByRookAndQueenLeft(findBlackKing, "check");
		blackCheckByRookAndQueenDown(findBlackKing, "check");
		blackCheckByRookAndQueenUp(findBlackKing, "check");
		blackCheckByBishopOrQueenUpLeft(findBlackKing, "check");
		blackCheckByBishopOrQueenUpRight(findBlackKing, "check");
		blackCheckByBishopOrQueenDownLeft(findBlackKing, "check");
		blackCheckByBishopOrQueenDownRight(findBlackKing, "check");
		return blackCheckList;
	};

	var whiteCheckTest = function() {
    	if(whiteCheckList.sort()[0] === "check") {
    		return whiteCheck = true;
    	};
	}

	var blackCheckTest = function() {
		if(blackCheckList.sort()[blackCheckList.length - 1] === "check") {
			return blackCheck = true;
		}
	}

    //begin check-mate assessment methods
	var whiteRunCheck = function(locale) {
	//find black king and surrounding squares
		if(locale.children().hasClass("chess-piece") === false && locale[0] != undefined) {
			whiteCheckByPawn(locale, "wp");
			whiteCheckByKnight(locale, "wkn");
			whiteCheckByKing(locale, "wk");
			whiteCheckByRookAndQueenRight(locale, "wrr");
			whiteCheckByRookAndQueenLeft(locale, "wrl");
			whiteCheckByRookAndQueenDown(locale, "wrd");
			whiteCheckByRookAndQueenUp(locale, "wru");
			whiteCheckByBishopOrQueenUpLeft(locale, "wbul");
			whiteCheckByBishopOrQueenUpRight(locale, "wbur");
			whiteCheckByBishopOrQueenDownLeft(locale, "wbdl");
			whiteCheckByBishopOrQueenDownRight(locale, "wbdr");
			return whiteCheckList;
		};
	};

	var blackRunCheck = function(locale) {
		if(locale.children().hasClass("chess-piece") === false && locale[0] != undefined) {
			blackCheckByPawn(locale, "bp");
			blackCheckByKnight(locale, "bkn");
			blackCheckByKing(locale, "bk");
			blackCheckByRookAndQueenRight(locale, "brr");
			blackCheckByRookAndQueenLeft(locale, "brl");
			blackCheckByRookAndQueenDown(locale, "brd");
			blackCheckByRookAndQueenUp(locale, "bru");
			blackCheckByBishopOrQueenUpLeft(locale, "bbul");
			blackCheckByBishopOrQueenUpRight(locale, "bbur");
			blackCheckByBishopOrQueenDownLeft(locale, "bbdl");
			blackCheckByBishopOrQueenDownRight(locale, "bbdr");
			return blackCheckList;
		};
	};

	var finalWhiteCheckMateTest = function() {
      whiteCounter = 9;
      if(findUpWhiteKing[0] === undefined || findUpWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findDownWhiteKing[0] === undefined || findDownWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findLeftWhiteKing[0] === undefined || findLeftWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findRightWhiteKing[0] === undefined || findRightWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findUpLeftWhiteKing[0] === undefined || findUpLeftWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findUpRightWhiteKing[0] === undefined || findUpRightWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findDownLeftWhiteKing[0] === undefined || findDownLeftWhiteKing.children().hasClass("chess-piece")) {
        whiteCounter --;
      };
      if(findDownRightWhiteKing[0] === undefined || findDownRightWhiteKing.children().hasClass("chess-piece")) {
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

	whiteCheckComf();
	whiteRunCheck(findUpWhiteKing);
	whiteRunCheck(findDownWhiteKing);
	whiteRunCheck(findLeftWhiteKing);
	whiteRunCheck(findRightWhiteKing);
	whiteRunCheck(findUpLeftWhiteKing);
	whiteRunCheck(findUpRightWhiteKing);
	whiteRunCheck(findDownLeftWhiteKing);
	whiteRunCheck(findDownRightWhiteKing);

	blackCheckComf();
	blackRunCheck(findUpBlackKing);
	blackRunCheck(findDownBlackKing);
	blackRunCheck(findLeftBlackKing);
	blackRunCheck(findRightBlackKing);
	blackRunCheck(findUpLeftBlackKing);
	blackRunCheck(findUpRightBlackKing);
	blackRunCheck(findDownLeftBlackKing);
	blackRunCheck(findDownRightBlackKing);

	whiteCheckTest();
	blackCheckTest();
	finalWhiteCheckMateTest();
	finalBlackCheckMateTest();
	
    if(whiteCheckList.length === whiteCounter && whiteCheckList.length != 0 && whiteCheckList.length != 1 && whiteCheckList.length != 2) {
    		return whiteCheckMate = true;
    }
    else if(blackCheckList.length === blackCounter && blackCheckList.length != 0 && blackCheckList.length != 1 && blackCheckList.length != 2) {
    		return blackCheckMate = true;
    };

}; 