
var playerOneTurn = true;
var startPos;

var playerTurn = function() {
  $( ".chess-piece" ).draggable({helper: "clone", 
    start: function( event, ui ){	
        startPos = $(this).parent();
        if($(this).attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" || $(this).attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle") {
          pawnAction();
        }
        else if($(this).attr("class") === "white-rook white-piece chess-piece ui-draggable ui-draggable-handle" || $(this).attr("class") === "black-rook black-piece chess-piece ui-draggable ui-draggable-handle") {
    	  rookAction();
    	};
    }
  });
  if(playerOneTurn === true) {
     $( ".white-piece" ).draggable( "enable" );
     $( ".black-piece" ).draggable( "disable" );
     playerOneTurn = false;
  }
  else {
  	 $( ".white-piece" ).draggable( "disable" );
     $( ".black-piece" ).draggable( "enable" );
     playerOneTurn = true;
  };
};

$(document).ready(function() {
		playerTurn();
});