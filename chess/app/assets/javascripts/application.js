// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery-ui
//= require_tree .

var playerOneTurn = true;
var startPos;
var pawnRow;

var playerTurn = function() {
  $( ".white-pawn, .black-pawn" ).draggable({helper: "clone", 
    start: function( event, ui ){	
        startPos = $(this).parent();
    }
  });
  if(playerOneTurn === true) {
     $( ".white-pawn" ).draggable( "enable" );
     $( ".black-pawn" ).draggable( "disable" );
     playerOneTurn = false;
  }
  else {
  	 $( ".white-pawn" ).draggable( "disable" );
     $( ".black-pawn" ).draggable( "enable" );
     playerOneTurn = true;
  }; 
};

$(document).ready(function() {
		
		playerTurn();
		$( ".white-square, .black-square" ).droppable({
			activeClass: "ui-state-hover",
			hoverClass: "ui-state-active",
			
			drop: function( event, ui ) {
				//white pawn
			    if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()] && startPos.children().attr("class") === "white-pawn piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined){
				    $( this )
				    .html( ui.draggable );			    
				    playerTurn();
				}
				else if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()-1] && startPos.children().attr("class") === "white-pawn piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "white-pawn piece ui-draggable ui-draggable-handle") {
                    $( this )
				    .html( ui.draggable );			    
				    playerTurn();
				    $("#black-pawns-taken").append("x")
				}
				else if($(this)[0] === startPos.parent().prev().children("span")[startPos.index()+1] && startPos.children().attr("class") === "white-pawn piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "white-pawn piece ui-draggable ui-draggable-handle") {
                    $( this )
				    .html( ui.draggable );			    
				    playerTurn();
				    $("#black-pawns-taken").append("x")
				};
				//black pawn	
				if ($(this)[0] === startPos.parent().next().children("span")[startPos.index()] && startPos.children().attr("class") === "black-pawn piece ui-draggable ui-draggable-handle" && $(this).children()[0] === undefined) {
				    $( this )
				    .html( ui.draggable );			    
				    playerTurn();
				}
				else if($(this)[0] === startPos.parent().next().children("span")[startPos.index()-1] && startPos.children().attr("class") === "black-pawn piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "black-pawn piece ui-draggable ui-draggable-handle") {
                    $( this )
				    .html( ui.draggable );			    
				    playerTurn();
				    $("#white-pawns-taken").append("x")
				}
				else if($(this)[0] === startPos.parent().next().children("span")[startPos.index()+1] && startPos.children().attr("class") === "black-pawn piece ui-draggable ui-draggable-handle" && $(this).children()[0] != undefined && $(this).children().attr("class") != "black-pawn piece ui-draggable ui-draggable-handle") {
                    $( this )
				    .html( ui.draggable );			    
				    playerTurn();
				    $("#white-pawns-taken").append("x")
				};	
				//rooks are this.index() === startPos.index() AND this.parent[0] === startPos.parent[0] (if indexes are the same in each parent and parent itself is the same)
			}
		});
});
