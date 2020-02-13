var weather = "Havrilak";
var date = "";
var icon = "";
var temp = "";
var humidty = "";
var winSpd = "";
var uvIndx = "";
var apiKey = "4383960b162385ee11decc2446137670";

$(document).ready(function () {
  console.log("ready!");
  getWeatherURL()
});

// Weather API for current weather
function getWeatherURL() {
  searchtext.value = "baltimore";
  var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q= " + searchtext.value + '&units=imperial&appid=' + apiKey;
  console.log(queryURL);
  var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q= " + searchtext.value + "&units=imperial&appid=" + apiKey;
  console.log(currentQueryURL);
  var uvQuery = "http://api.openweathermap.org/data/2.5/uvi?"  + searchtext.value + "&appid={appid}&lat={lat}&lon={lon}" + apiKey;
  console.log(uvQuery);
  $.ajax({
    url: queryURL,
    method: "GET",
    crossDomain: true
  }).then(function (r) {
    console.log(r.list.length);
    console.log(r);

    for (var i = 0; i < 5; i++) {
      var weatherCard = $(".weathercard")[i];
      var data = r.list[i];
      var fiveDayTemp = data.main.temp;
      $(weatherCard).find(".temp").text(fiveDayTemp);
      $(weatherCard).find(".humidity").text(fiveDayTemp);
    }

  })
  $.ajax({
    url: currentQueryURL,
    method: "GET",
    crossDomain: true
  }).then(function (r) {
    console.log(r);

    $("#temp").text(r.main.temp);
    $("#humidity").text(r.main.humidity);
    $("#windspeed").text(r.wind.speed);

  })
  $.ajax({
    url: uvQueryURL,
    method: "GET",
    crossDomain: true
  }).then(function (r) {
    console.log(r.list.length);
    console.log(r);

    $("#uvindex").text(r)
    })

};





