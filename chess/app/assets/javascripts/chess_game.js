
var playerOneTurn = true;
var findWhiteKing;
var startPos;
var whiteCheckMate = false;
var blackCheckMate = false;
var whiteCheck = false;
var blackCheck = false;
var whiteCancelCastle = false;
var blackCancelCastle = false;
var saveRowObject = {};
var saveRowArray = [];
var saveSquareObject = {};

var playerTurn = function() {
  whiteCheck = false;
  blackCheck = false;
  saveRowObject = {};

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

  loadGame();
  saveGame();
  playerTurn();
  setInterval(checkOnCheck, 2000);

});