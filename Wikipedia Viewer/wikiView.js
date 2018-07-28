$(document).ready(function() {
$("h1").css("background-color","gray");
  $("h1").css("font-style","italic");
  $("h1").css("color","purple");
  $("#searchB").css("border","5px solid black");
 $("#btn-random").css("border","4px solid yellow");
 $("#btn-random").css("padding","14px 30px"); $("#searchB").css("padding","15px 60px");
  $("#btn-random").css("margin-top","1em");
  var myURL = "https://en.wikipedia.org/w/api.php?action=query&format=json&"
  var find = "list=search&srsearch=";
  var myRandom = "list=random&rnnamespace=0&rnlimit=10";

  //  some Events goes here
  $("#searchB").on("keyup",findonwiki);
  $("#btn-random").on("click", findwikiRandom);

  //search for Articles
  function findonwiki() {
    removeArt(); //  clean and remove Articles from last search
    var myspace = $("#searchB").val();
    // jsonp
    $.getJSON(myURL + find + myspace + "&callback=?", sucsfindonwiki);
  }

  function sucsfindonwiki(data) {
    for (var j = 0; j < data.query.search.length; j++) {
      showmeTitl(data.query.search[j].title);
    }
  }
  
  function findwikiRandom() {
    removeArt();
    // jsonp
    $.getJSON(myURL + myRandom + "&callback=?", sucsfindwikiRandom);
  }
  
  function sucsfindwikiRandom(data) {
    for (var j=0; j<data.query.random.length; j++) {
      showmeTitl(data.query.random[j].title);
    }
  }

  //++Article Titl into i my list
  function showmeTitl(title) {
    $("#wikiA").append("<a target='_blank' class='wikiTitle list-group-item list-group-item-info' href='https://en.wikipedia.org/wiki/" + goArt(title) + "'>" + title + "</a>");
  }

  //change space to underline
  function goArt(title) {
    return title.replace(" ", "_");
  }

  function removeArt() {
    $(".wikiTitle").remove();
  }
});