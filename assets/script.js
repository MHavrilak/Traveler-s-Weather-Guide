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
  searchtext.value="baltimore";
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q= " + searchtext.value + '&units=imperial&appid=' + apiKey;
  console.log(queryURL);
  
  $.ajax({
    url: queryURL,
    method: "GET",
    crossDomain: true
  }).then(function(r){
    console.log(r.list.length);
    console.log(r);

    for (var i=0; i < r.list.length; i++) {
      
    }

  })
};


// function updateDOM () {
    // $("city").html(city);
// }



  