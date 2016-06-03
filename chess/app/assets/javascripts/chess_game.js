
var playerOneTurn = true;
var findWhiteKing;
var startPos;
var whiteCheckMate = false;
var blackCheckMate = false;
var whiteCheck = false;
var blackCheck = false;
var whiteCancelCastle = false;
var blackCancelCastle = false;

var playerTurn = function() {
  whiteCheck = false;
  blackCheck = false;

  $( ".chess-piece" ).draggable({
    helper: "clone",
    start: function( event, ui ){
        startPos = $(this).parent();
        if($(this).attr("class") === "white-pawn white-piece chess-piece ui-draggable ui-draggable-handle" || $(this).attr("class") === "black-pawn black-piece chess-piece ui-draggable ui-draggable-handle") {
          pawnAction();
        }
        else if($(this).attr("class") === "white-rook white-piece chess-piece ui-draggable ui-draggable-handle" || $(this).attr("class") === "black-rook black-piece chess-piece ui-draggable ui-draggable-handle") {
          rookAction();
        }
        else if($(this).attr("class") === "white-knight white-piece chess-piece ui-draggable ui-draggable-handle" || $(this).attr("class") === "black-knight black-piece chess-piece ui-draggable ui-draggable-handle") {
          knightAction();
        }
        else if($(this).attr("class") === "white-king white-piece chess-piece ui-draggable ui-draggable-handle" || $(this).attr("class") === "black-king black-piece chess-piece ui-draggable ui-draggable-handle") {
          kingAction();
        }
        else if($(this).attr("class") === "white-bishop white-piece chess-piece ui-draggable ui-draggable-handle" || $(this).attr("class") === "black-bishop black-piece chess-piece ui-draggable ui-draggable-handle") {
          bishopAction();
        }
        else if($(this).attr("class") === "white-queen white-piece chess-piece ui-draggable ui-draggable-handle" || $(this).attr("class") === "black-queen black-piece chess-piece ui-draggable ui-draggable-handle") {
          queenAction();
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

  var checkOnCheck = function() {
    isCheck();   
    if(whiteCheck === true) {
      $(".white-check").html("WHITE IN CHECK");
    }
    else {
      $(".white-check").empty();
    };
    if(blackCheck === true) {
      $(".black-check").html("BLACK IN CHECK");
    }
    else {
      $(".black-check").empty();
    };
    if(whiteCheckMate === true) {
      for(row = 0; row < 8; row++) {
        $(".chessboard").children().eq(row).children().empty();
      };
      $(".white-check").html("CHECK MATE. PLAYER 2 WINS!");
    };
    if(blackCheckMate === true) {
      for(row = 0; row < 8; row++) {
        $(".chessboard").children().eq(row).children().empty();
      };
      $(".black-check").html("CHECK MATE. PLAYER 1 WINS!");
    };
  };

  setInterval(checkOnCheck, 2000);

  playerTurn();

});