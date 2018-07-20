var player='x' ; // turn = 0
var computer='o' ; // turn = 1
var countMove;
var turn = 0; // toggles btw 0 and 1 for switching turns

var boardCheck; // function to check value in each cell
var y1; // value within each cell
var y2;
var y3;
var z1;
var z2;
var z3;
var w1;
var w2;
var w3;

var checkWin; // function that checks the board for winning match
var xWin = false; // true if X wins 
var oWin = false; // true if O wins 
var winAlert; // function that declares winner and restarts game

var newGame;
var clearBoard;


// PLACES AN X OR O IN THE BOX WHEN CLICKED. TOGGLES. 
var newGame = function () {
    $('td').one('click', function (event) {
      //alert(" kkkk "+turn);  
      if (turn == 0) {
         $(this).text(player);
         boardCheck();
         checkWin();
         turn = 1;
         countMove();
         boardCheck();
         checkWin();
                   }
         });
     };


// INITIALIZES GAME - keep after var newGame
$(document).ready(function () {
    newGame();
});
this.Turn=function(){
  this.turn=this.turn==="x"?"o":"x";
}
function chooseX() {
  player = "x";
  computer = "o";
  currpla=player;
$(".choose").css("display", "none");
               }
function chooseO() {
  player = "o";
  computer = "x";
  currpla=player;
   $(".choose").css("display", "none");
         }


// COMP MOVE AI DETECTS IF THERE ARE TWO IN A ROW NEXT TO AN EMPTY CELL AND PLACES MOVE THERE
var countMove = function () {
 if (y1 == "" && ((y3 == player && y2 == player) || (w3 == player && z2 == player) || (w1 == player && z1 == player))) {
        $('#y1').text(computer);
        turn = 0;
    } else {
      if (y2 == "" && ((y1 == player && y3 == player) || (w2 == player && z2 == player))) 
      {
        $('#y2').text(computer);
        turn = 0;
      }else{
        if (y3 == "" && ((y1 == player && y2 == player) || (w1 == player && z2 == player) || (w3 == player && z3 == player))) 
            {
      $('#y3').text(computer);
            turn = 0;
           } else{
            if (w3 == "" && ((w1 == player && w2 == player) || (y1 == player && z2 ==player) || (y3 == player && z3 == player))) 
            {
        $('#w3').text(computer);
          turn = 0;
            }else{
                if (w1 == "" && ((w3 == player && w2 == player) || (y3 == player && z2 == player) || (y1 == player && z1 == player))) 
                {
           $('#w1').text(computer);
             turn = 0;
            }else{
                    if (w2 == "" && ((w3 == player && w1 == player) || (y2 == player && z2 == player))) {
       $('#w2').text(computer);
             turn = 0;
        } else{
                        if (z1 == "" && ((z3 == player && z2 == player) || (y1 == player && w1 == player))) {
                            $('#z1').text(computer);
          turn = 0;
        }else{
                            if (z3 == "" && ((y3 == player && w3 == player) || (z2 == player && z1 == player))) {
       $('#z3').text(computer);
           turn = 0;
        }else{
   if (z2 == "" && ((y3 == player && w1 == player) || (w3 == player && y1 ==player) || (z3 == player && z1 == player) || (w2 == player && y2 ==player))) {
                                    $('#z2').text(computer);
      turn = 0;
        }
 else{ // IF NO OPP TO BLOCK A WIN, THEN PLAY IN ONE OF THESE SQUARES
   if(z2 == "") {
                                        $('#z2').text(computer);
  turn = 0;
    }else{
  if (y1 == "") {                            $('#y1').text(computer);
    turn = 0;                                }else{                                  if (w3 == "") {                          $('#w3').text(computer);                  turn = 0;
        } else {
    if (w2 == "") {
  $('#w2').text(computer);
           turn = 0;
         }else{
        if (z1 == "") {
    $('#z1').text(computer);                           turn = 0;
                      }
                    }
                   }
                  }
                       }
                 }
                     }
                      }
                     }
                    }
                }
            }
        }
    } 
  
  //alert("tuuuu"+turn);
};


// CREATES A FUNCTION TO DETECT WHAT IS IN EACH BOX AFTER EACH MOVE
boardCheck = function () {
    y1 = $('#y1').html();
    y2 = $('#y2').html();
    y3 = $('#y3').html();
    z1 = $('#z1').html();
    z2 = $('#z2').html();
    z3 = $('#z3').html();
    w1 = $('#w1').html();
    w2 = $('#w2').html();
    w3 = $('#w3').html();
};

// CREATES A FUNCTION TO DETECT A WIN OR A TIE
checkWin = function () { // CHECKS IF X WON
//alert(player+" hhhhh "+computer);
if ( (y1 == y2 && y1 == y3 && (y1 == player)) || //first row
(z1 == z2 && z1 == z3 && (z1 == player)) || //second row
(w1 == w2 && w1 == w3 && (w1 == player)) || //third row
(y1 == z1 && y1 == w1 && (y1 == player)) || //first column
(y2 == z2 && y2 == w2 && (y2 == player)) || //second column
(y3 == z3 && y3 == w3 && (y3 == player)) || //third column
(y1 == z2 && y1 == w3 && (y1 == player)) || //diagonal 1
(y3 == z2 && y3 == w1 && (y3 == player)) //diagonal 2
) {
        xWin = true;
     winAlert();
   } else if(
 (y1==y2 && y1 == y3 && (y1 == computer)) || //first row
(z1 == z2 && z1 == z3 && (z1 == computer)) || //second row
(w1 == w2 && w1 == w3 && (w1 == computer)) || //third row
(y1 == z1 && y1 == w1 && (y1 == computer)) || //first column
(y2 == z2 && y2 == w2 && (y2 == computer)) || //second column
(y3 == z3 && y3 == w3 && (y3 == computer)) || //third column
(y1 == z2 && y1 == w3 && (y1 == computer)) || //diagonal 1
(y3 == z2 && y3 == w1 && (y3 == computer)) //diagonal 2
) {
            oWin = true;
            winAlert();
      //    alert("bravo 2");
       } else if (((y1 == player) || (y1 == computer)) && ((z1 == player) || (z1 == computer)) && ((w1 == player) || (w1 == computer)) && ((y2 == player) || (y2 == computer)) && ((z2 == player) || (z2 == computer)) && ((w2 == player) || (w2 == computer)) && ((y3 == player) || (y3 == computer)) && ((z3 == player) || (z3 ==computer)) && ((w3 == player) || (w3 == computer))) {
                alert("It's a tie!");
            }
     //alert(" ouuut");
};// DECLARES WHO WON
var winAlert = function () {
    if (xWin == true) {
        alert("You won!");
        clearBoard(true); 
    } else {
        if (oWin == true) {
            alert("Sorry, you lose!");
            clearBoard(true); 
        }
    }
};



// NEWGAME BUTTON CLEARS THE BOARD, RESTARTS GAME, AND RESETS THE WINS
var clearBoard = $('#restart').click(function (event) {
  event.preventDefault();
  
    y1 = $('#y1').text("");
    z1 = $('#z1').text("");
    w1 = $('#w1').text("");
    y2 = $('#y2').text("");
    z2 = $('#z2').text("");
    w2 = $('#w2').text("");
    y3 = $('#y3').text("");
    z3 = $('#z3').text("");
    w3 = $('#w3').text("");
    xWin = false;
    oWin = false;
    newGame();
    event.preventDefault();
    location.reload( true);
    event.preventDefault();
});

