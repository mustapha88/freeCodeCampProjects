$(".onoffswitch-inner").click(function() {
   index = -1;
   $("#r").attr("disabled", true);
   $("#g").attr("disabled", true);
   $("#b").attr("disabled", true);
   $("#y").attr("disabled", true);
   $(".btn").attr("disabled", true);
   $(".hbol").attr("disabled", true);

 });
 var compmov = []; //array to generat computer mov
 var index = -1;
 var et = 0;
 var i = 0;
 Round = 0;
 var strict = 0;
 var wineer = 0;
 var sound1 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound1.mp3');
 var sound2 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound2.mp3');
 var sound3 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound3.mp3');
 var sound4 = new Audio('https://s3.amazonaws.com/freecodecamp/simonSound4.mp3');

 function startGame() { //this is the start of game
   //alert("hi");
   strict=0;
   et = 0;
   index = -1;
   Round = 0;
   oknew();
 }
 $(".onoffswitch-switch").click(function() {

   $(".btn").attr("disabled", false);
   $(".hbol").attr("disabled", false);
   $("#r").attr("disabled", false);
   $("#b").attr("disabled", false);
   $("#g").attr("disabled", false);
   $("#y").attr("disabled", false);
 });

 function okold() { //remember moves of pc and light the old sequences
   et = 0;
   for (i = 0; i < index + 1; i++) {
     var x = compmov[i];

     lightOld(x, 1000, i);
   }

 }
 //add random seq by showing a new color
 function oknew() {
   index++;
   document.getElementById("round").innerHTML = index + 1; //keep track numb of round
   var x = Math.floor((Math.random() * 4) + 1);
   compmov[index] = x;
   et = 0;

   lightNew(x, 1000, i);
 }
 // show new color
 function lightNew(k, j, m) {
   if (k === 1) {
     setTimeout(function() {
       document.getElementById("r").style.backgroundColor = "#ff6666";
       sound2.play();
     }, (j * m) + 200);

     setTimeout(function() {
       document.getElementById("r").style.backgroundColor = "#FF0000"; //sound1.play();
     }, j * (m + 1));
   } else if (k === 2) { //green
     setTimeout(function() {
       document.getElementById("g").style.backgroundColor = "#33FF00";
       sound2.play();
     }, (j * m) + 200);
     // sound2.play();
     setTimeout(function() {
       document.getElementById("g").style.backgroundColor = "#336600";
     }, j * (m + 1));
   } else if (k === 3) { //bleu
     setTimeout(function() {
       document.getElementById("b").style.backgroundColor = "#6666FF";
       sound3.play();
     }, (j * m) + 200);
     //sound3.play();
     setTimeout(function() {
       document.getElementById("b").style.backgroundColor = "#330099";
     }, j * (m + 1));
     //compmov[index]=3; 
   } else { //y 
     setTimeout(function() {
       document.getElementById("y").style.backgroundColor = "#FFFF99";
       sound4.play();
     }, (j * m) + 200);
     //sound4.play();
     setTimeout(function() {
       document.getElementById("y").style.backgroundColor = "#FFFF00";
     }, j * (m + 1));
     //compmov[index]=4; 
   }

 }
 //remember sequences that light up before generating un other random color
 function lightOld(k, j, m) {

   if (k === 1) {
     setTimeout(function() {
       document.getElementById("r").style.backgroundColor = "#ff6666";
       sound1.play()
     }, (j * m) + 200);

     setTimeout(function() {
       document.getElementById("r").style.backgroundColor = "#FF0000";
     }, j * (m + 1));

   } else if (k === 2) {
     setTimeout(function() {
       document.getElementById("g").style.backgroundColor = "#33FF00";
       sound2.play();
     }, (j * m) + 200);

     setTimeout(function() {
       document.getElementById("g").style.backgroundColor = "#336600";
     }, j * (m + 1));

   } else if (k === 3) { //bleu

     setTimeout(function() {
       document.getElementById("b").style.backgroundColor = "#6666FF";
       sound3.play();
     }, (j * m) + 200);

     setTimeout(function() {
       document.getElementById("b").style.backgroundColor = "#330099";
     }, j * (m + 1));

   } else {
     setTimeout(function() {
       document.getElementById("y").style.backgroundColor = "#FFFF99";
       sound4.play();
     }, (j * m) + 200);

     setTimeout(function() {
       document.getElementById("y").style.backgroundColor = "#FFFF00";
     }, j * (m + 1));
   }

 }
 //compare moves of pc with player clicks
 function heart(c) {

   if (compmov[et] === c) {

     if (index === et) {
       win();
       if (wineer === 0) {

         okold();
         oknew();
       }
     } else {
       et++
     }
   } else {

     if (strict === 1) {

       alert("wrong step ");
       index = -1;
       et = 0;
       oknew();

     } else {
       alert("you miss it");

       et = 0;
       okold();
     }
   }
 }

 function red() {
   heart(1);
   sound1.play();
 }

 function green() {
   heart(2);
   sound2.play();
 }

 function blue() {
   heart(3);
   sound3.play();
 }

 function yellow() {
   heart(4);
   sound4.play();
 }

 function win() {

   if (index === 19) {
     alert("finally you win congratulation");
     et = 0;
     wineer = 1;
     index = -1;
   }
 }

 function strictos() {
   //alert(compmov[]);
   index = -1;
   strict = 1;
   oknew();
 }