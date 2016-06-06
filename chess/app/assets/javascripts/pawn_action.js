var pawnAction = function() {
	$( ".white-square, .black-square" ).droppable({
		activeClass: "ui-state-hover",
		hoverClass: "ui-state-active",
		disabled: false,
			
		drop: function( event, ui ) {

			var blackPawnTransform = function() {

			};
          
			if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()] && startPos.children().attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined && $(this).parent().index() != 0){
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );			    
			}
			else if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()-1] && startPos.children().attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("black-king") === false && $(this).parent().index() != 0) {
		       playerTurn();
		        $(".black-pieces-taken").append("<img class='taken-piece' src=" + $(this).children().attr("src") + ">");
			    return $( this )
			    .html( ui.draggable );
			}
			else if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()+1] && startPos.children().attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("black-king") === false && $(this).parent().index() != 0) {
		        playerTurn();
		        $(".black-pieces-taken").append("<img class='taken-piece' src=" + $(this).children().attr("src") + ">");
			    return $( this )
			    .html( ui.draggable );
			}
			else if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()] && startPos.children().attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined && $(this).parent().index() === 0){
			    playerTurn();
			    var endSpot = $(this);
			    startPos.empty();
			    $(".white-select").css("display", "block");
			    $(".white-rook-trade").click(function() {
			    	$(".white-select").css("display", "none");
			    	return endSpot
			    .html( "<img class='white-rook white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c2366cc7ae.png'>" );
			    });
			    $(".white-knight-trade").click(function() {
			    	$(".white-select").css("display", "none");
			    	return endSpot
			    .html( "<img class='white-knight white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c236365e2d.png'>" );
			    });	
			    $(".white-bishop-trade").click(function() {
			    	$(".white-select").css("display", "none");
			    	return endSpot
			    .html( "<img class='white-bishop white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c23557ae70.png'>" );
			    });	
			    $(".white-queen-trade").click(function() {
			    	$(".white-select").css("display", "none");
			    	return endSpot
			    .html( "<img class='white-queen white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c235e690a0.png'>" );
			    });				    
			}
			else if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()-1] && startPos.children().attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("black-king") === false && $(this).parent().index() === 0) {
		        playerTurn();
		        var endSpot = $(this);
		        startPos.empty();
		         $(".black-pieces-taken").append("<img class='taken-piece' src=" + $(this).children().attr("src") + ">");
				    $(".white-select").css("display", "block");
				    $(".white-rook-trade").click(function() {
				    	$(".white-select").css("display", "none");
				    	return endSpot
				    .html( "<img class='white-rook white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c2366cc7ae.png'>" );
				    });
				    $(".white-knight-trade").click(function() {
				    	$(".white-select").css("display", "none");
				    	return endSpot
				    .html( "<img class='white-knight white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c236365e2d.png'>" );
				    });	
				    $(".white-bishop-trade").click(function() {
				    	$(".white-select").css("display", "none");
				    	return endSpot
				    .html( "<img class='white-bishop white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c23557ae70.png'>" );
				    });	
				    $(".white-queen-trade").click(function() {
				    	$(".white-select").css("display", "none");
				    	return endSpot
				    .html( "<img class='white-queen white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c235e690a0.png'>" );
				    });				    
			}
			else if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()+1] && startPos.children().attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("black-king") === false && $(this).parent().index() === 0) {
		        playerTurn();
		        var endSpot = $(this);
		        startPos.empty();
		         $(".black-pieces-taken").append("<img class='taken-piece' src=" + $(this).children().attr("src") + ">");
				    $(".white-select").css("display", "block");
				    $(".white-rook-trade").click(function() {
				    	$(".white-select").css("display", "none");
				    	return endSpot
				    .html( "<img class='white-rook white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c2366cc7ae.png'>" );
				    });
				    $(".white-knight-trade").click(function() {
				    	$(".white-select").css("display", "none");
				    	return endSpot
				    .html( "<img class='white-knight white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c236365e2d.png'>" );
				    });	
				    $(".white-bishop-trade").click(function() {
				    	$(".white-select").css("display", "none");
				    	return endSpot
				    .html( "<img class='white-bishop white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c23557ae70.png'>" );
				    });	
				    $(".white-queen-trade").click(function() {
				    	$(".white-select").css("display", "none");
				    	return endSpot
				    .html( "<img class='white-queen white-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c235e690a0.png'>" );
				    });				    
			}
			else if($(this)[0] === startPos.parent().prev().prev().children("span")[startPos.index()] && startPos.parent().index() === 6 && startPos.children().attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined) {
				 playerTurn();
			    return $( this )
			    .html( ui.draggable );	
			};
			//black pawn	
			if ($(this)[0] === startPos.parent().next().children("span")[startPos.index()] && startPos.children().attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined && $(this).parent().index() != 7) {
			    playerTurn();
			    return $( this )
			    .html( ui.draggable );
			}
			else if($(this)[0] === startPos.parent().next().children("span")[startPos.index()-1] && startPos.children().attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("white-king") === false && $(this).parent().index() != 7) {
		       playerTurn();
		        $(".white-pieces-taken").append("<img class='taken-piece' src=" + $(this).children().attr("src") + ">");
			    return $( this )
			    .html( ui.draggable );
			}
			else if($(this)[0] === startPos.parent().next().children("span")[startPos.index()+1] && startPos.children().attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("white-king") === false && $(this).parent().index() != 7) {
		        playerTurn();
		        $(".white-pieces-taken").append("<img class='taken-piece' src=" + $(this).children().attr("src") + ">");
			    return $( this )
			    .html( ui.draggable );
			}
			else if ($(this)[0] === startPos.parent().next().children("span")[startPos.index()] && startPos.children().attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined && $(this).parent().index() === 7) {
			    playerTurn();
			    var endSpot = $(this);
			    startPos.empty();
			    $(".black-select").css("display", "block");
			    $(".black-rook-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-rook black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c23687e54b-210x210.png'>" );
			    });
			    $(".black-knight-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-knight black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c23650ee18.png'>" );
			    });
			    $(".black-bishop-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-bishop black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c235734a67.png'>" );
			    });
			    $(".black-queen-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-queen black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c235abcd0c.png'>" );
			    });
			}
			else if($(this)[0] === startPos.parent().next().children("span")[startPos.index()-1] && startPos.children().attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("white-king") === false && $(this).parent().index() === 7) {
		        playerTurn();
		        var endSpot = $(this);
		        $(".white-pieces-taken").append("<img class='taken-piece' src=" + $(this).children().attr("src") + ">");
		        startPos.empty();
			    	 $(".black-select").css("display", "block");
			    $(".black-rook-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-rook black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c23687e54b-210x210.png'>" );
			    });
			    $(".black-knight-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-knight black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c23650ee18.png'>" );
			    });
			    $(".black-bishop-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-bishop black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c235734a67.png'>" );
			    });
			    $(".black-queen-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-queen black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c235abcd0c.png'>" );
			    });
			}
			else if($(this)[0] === startPos.parent().next().children("span")[startPos.index()+1] && startPos.children().attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children().hasClass("white-king") === false && $(this).parent().index() === 7) {
		        playerTurn();
		        var endSpot = $(this);
		        $(".white-pieces-taken").append("<img class='taken-piece' src=" + $(this).children().attr("src") + ">");
		        startPos.empty()
			    $(".black-select").css("display", "block");
			    $(".black-rook-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-rook black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c23687e54b-210x210.png'>" );
			    });
			    $(".black-knight-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-knight black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c23650ee18.png'>" );
			    });
			    $(".black-bishop-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-bishop black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c235734a67.png'>" );
			    });
			    $(".black-queen-trade").click(function() {
			    	$(".black-select").css("display", "none");
			    	return endSpot
			    	.html( "<img class='black-queen black-piece chess-piece' src='http://www.iconsfind.com/wp-content/uploads/2015/11/20151106_563c235abcd0c.png'>" );
			    });
			}
			else if($(this)[0] === startPos.parent().next().next().children("span")[startPos.index()] && startPos.parent().index() === 1 && startPos.children().attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined) {
				 playerTurn();
			    return $( this )
			    .html( ui.draggable );	
			};

		}
	});
};