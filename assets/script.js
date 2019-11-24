// Function for pulling weather data
$(document).ready(function(){ 

 

var city = $("#main");
var date = "";
var icon = ""
var temp = ""
var humidty = ""
var winSpd = ""
var uvIndx = ""

// Weather API for current weather
$(document).ready(function) {

  function weather() {
    var queryURL = "api.openweathermap.org/data/2.5/forecast?id=524901" + weather + "&apikey=4383960b162385ee11decc2446137670";

    $.get.JSON(URL, function(data) {
        console.log(data);
        updateDOM("data");
    }
  }
}
  weather();
  
  function updateDOM () {
      $("city").html(city);
  }
}
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        console.log(response);
      // Create and save a reference to new empty table row
    var newRow = $("<tr>");
    
      // Create and save references to elements containing weather info from the AJAX response object
    var temp = $("<li>").text(response.temp);
    var humidty = $("<li>").text(response.humidity);
    var winSpd = $("<li>").text(response.wind);
    var uvIndx = $("<li>").text(response.UV);
      // Append the td eleents to the new table row
     newRow.append(Temp);
     newRow.append(Humidity);
     newRow.append(Wind);
     newRow.append(UVIndex);
      // Append the table row to the tbody element
    $("tbody").append(newRow);
    });
  }
    