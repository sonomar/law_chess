
	var clearBoard = function() {	
		for(row = 0; row < 8; row++) {
	        $(".chessboard").children().eq(row).children().empty();
	  };
	};

  var loadGame = function() {
    $(".load-form").on("submit", function(event) {
      event.preventDefault();
      $.ajax({
        type: "get",
        url: "/load_game",
        data: $(this).serialize(),
        datatype: 'json'
        }).done(function(results) {
           var test1 = results.split("<body>");
           var test2 = test1[1].split("</body>");
           var test3 = test2[0].toString();
           var re = /&quot;/gi;
           var newstr = test3.replace(re, '"');
           var rere = /=&gt;/gi;
           var newerstr = newstr.replace(rere, ': ');
           var rerere = /nil/gi;
           var newernewerstr = newerstr.replace(rerere, 'null');
           var finalData = JSON.parse(newernewerstr);
           var turnCheck = Object.keys(finalData)[0];
           if(turnCheck === undefined) {
            console.log("could not load");
            $(".load_errors").css("display", "block");
            // setInterval($(".load_errors").css("display", "none"), 3000);
            return "could not load";
           }
           else {
           $(".load_errors").css("display", "none");
           var turnInt = turnCheck[turnCheck.length - 1];
           clearBoard();
           for( row = 0; row < 8; row++) {
            var current_row = row;
             for( square = 0; square < 8; square ++) {
               var squareData = finalData["row: " + current_row + " - index: " + square + " - turn: " + turnInt.toString() ]
               // debugger
               if(squareData != null) {
                 var square1 = /&lt;/gi;
                 var square2 = /&gt;/gi;
                 var square3 = /&#39;/gi;
                 var newsquareData = squareData.replace(square1, '<');
                 var newersquareData = newsquareData.replace(square2, '>');
                 var newestsquareData = newersquareData.replace(square3, "'");
                 $(".chessboard").children().eq(current_row).children().eq(square).html(newestsquareData);
               };
             };
           };
           };
          if(turnInt === "0") {
            playerOneTurn = false;
            playerTurn();
          }
          else {
            playerOneTurn = true;
            playerTurn();
          };
        });
    });
  };

  var saveGame = function() {
    $(".save-form").on("submit", function(event) {
      event.preventDefault();
      $.ajax({
        type: "post",
        beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
        url: "/home",
        data: createSaveObject(),
        datatype: 'json'
      }).done(function(results) {
        console.log("Ajax successful!");
      });
    });
  };

  var createSaveObject = function() {
    for(row = 0; row < 8; row++) {
      var current_row = row;
      for(square = 0; square < 8; square++) {
        if($(".chessboard").children().eq(current_row).children().eq(square).children().hasClass("chess-piece")) {
          saveSquareObject["row " + current_row + square] = square;
          saveSquareObject["squareImg " + current_row + square] = $(".chessboard").children().eq(current_row).children().eq(square).children().attr("src");
          saveSquareObject["squareClass " + current_row + square] = $(".chessboard").children().eq(current_row).children().eq(square).children().attr("class");     
          saveRowObject["chessGame"] = saveSquareObject;
          saveRowObject["saveName"] = $(".saving_name_value").val();
          if(playerOneTurn === true) {
            saveRowObject["playerTurn"] = 0;
          }
          else {
            saveRowObject["playerTurn"] = 1;
          }
        };
      };
    };
    return saveRowObject;
  };