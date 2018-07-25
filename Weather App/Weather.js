
$(document).ready(function() {
  
  getWeather("paris", "" );
  navigator.geolocation.getCurrentPosition(function(position) {
    getWeather(position.coords.latitude + ',' + position.coords.longitude);
  });
});

var myunit = 'c';
var tempnow;

function getWeather(loc, woeid) {
  $.simpleWeather({
    location: loc,
    woeid: woeid,
    unit: 'c',
    success: function(data) {
      
      $("#temp").text(data.temp + String.fromCharCode(parseInt("00B0", 16))); 
      $("#unit-button").html(data.units.temp);
      $("#city").html(data.city + ', ' + data.country);
      
      $("#now").html("It's " + data.currently);
      tempnow = data.temp;
      
      $("body").css("background-image", "url(" + background-image + ")");
    },
    error: function(error) {
      alert(error);
    }
  });
}

$("#unit-button").on("click", function(){
  if(myunit=='c'){
    // to far
    var far = parseInt((9/5)*currTemp + 32);
    tempnow = far;
    myunit = 'f';
    $("#unit-button").html("F");
    $("#temp").text(far + String.fromCharCode(parseInt("00B0", 16)));
  } else {
    // to celsus
    var celsus = parseInt((currTemp-32)*(5/9));
    tempnow = celsus;
    myunit = 'c';
    $("#unit-button").html("C");
    $("#temp").text(celsus + String.fromCharCode(parseInt("00B0", 16)));
  }
});