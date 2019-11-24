var weather = "Havrilak";
var date = "";
var icon = "";
var temp = "";
var humidty = "";
var winSpd = "";
var uvIndx = "";
var apiKey = "4383960b162385ee11decc2446137670";

$( document ).ready(function() {
  console.log( "ready!" );
  getWeatherURL()
});

// Weather API for current weather
function getWeatherURL() {
  var queryURL = "api.openweathermap.org/data/2.5/forecast?q= " + search + '&units=imperial&appid=' + apiKey;
  console.log(queryURL);
  
  $.ajax({
    url: queryURL,
    method: "GET",
    crossDomain: true
  }).then(function(r){
    console.log(r.data.d);
  })
};


// function updateDOM () {
    // $("city").html(city);
// }



  