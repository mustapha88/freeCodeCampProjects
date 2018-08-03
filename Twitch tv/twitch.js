var users= ["freecodecamp", "storbeck", "terakilobyte", "habathcx","robotcaleb","noobs2ninjas","beohoff","medrybw","nightblue3","esl_sc2","ogamingsc2","brunofin","comster404"];
$(function(){
var myhtml='';
function Data(){
//start Info func
 users.forEach(function(channel){
   var key = "https://api.twitch.tv/kraken/streams/"+channel;
   $.ajax({
     url: key,
     type: 'GET',
     success: function(json){
    if(json.stream !== null){
 
var url = json.stream.channel.url;

var status = json.stream.channel.status;
      var logo = json.stream.channel.logo;
var name = json.stream.channel.display_name;
         myhtml +='<div class="users online-users well '+channel+'"><div class="row"><div class="col-md-4 col-xs-4"><a href="'+url+'" target="_blank"><img class="logo img-responsive img-circle" src="'+logo+'"/><p class="channel-name">'+name+'</p></a></div><div class="col-md-8 col-xs-8"><p class="status">'+status+'</p></div></div></div>';
  $(".container").html(myhtml);  
}else{
$.getJSON("https://api.twitch.tv/kraken/channels/"+channel,function(json){
  var logo = json.logo ? json.logo: "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
  var url = json.url;
  var name = json.display_name;
  
  myhtml += '<div class="users offline-users well '+channel+'"><div class="row"><div class="col-md-4 col-xs-4"><a href="'+url+'" target="_blank"><img class="logo img-responsive img-circle" src="'+logo+'"/><p class="channel-name">'+name+'</p></a></div><div class="col-md-8 col-xs-8"><p class="status">Offline</p>'+'</p></div></div></div>';
  $('.container').html(myhtml);
});
};
     },//here end success fun
     error: function(json){
       var logo = json.logo ? json.logo: "http://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F";
  var url =  json.url? json.url: "https://s.codepen.io/FreeCodeCamp/fullpage/undefined";
  var name = json.display_name? json.display_name: channel;
  
  myhtml += '<div class="users offline-users well '+channel+'"><div class="row"><div class="col-md-4 col-xs-4"><a href="'+url+'" target="_blank"><img class="logo img-responsive img-circle" src="'+logo+'"/><p class="channel-name">'+name+'</p></a></div><div class="col-md-8 col-xs-8"><p class="status">Closed</p>'+'</p></div></div></div>';
       $(".container").html(myhtml);
     },
   });//end method call of ajax
 });// this is end forEach
};//Info end here
 Data();
 $('input').keyup(function(){
    var Val = $('input').val().toLowerCase();
   
  $('.users').addClass('hidden');
  users.forEach(function(channel){
   if(channel.search(Val) !== -1)
    $('.'+channel).removeClass('hidden');
  });
});//fin Click function
  $('#btn3').click(function(){
    $(".offline-users").show(200);
		$(".online-users").show(200);
});
  $('#btn1').click(function(){
    $(".offline-users").hide(200);
		$(".online-users").show(200);
  });
 
  $('#btn2').click(function(){
    $(".online-users").hide(200);
		$(".offline-users").show(200);
});

});

