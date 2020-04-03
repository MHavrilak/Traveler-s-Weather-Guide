$(document).ready(function () {
  console.log("ready!");

var weather = "Havrilak";
var date = "";
var icon = "";
var temp = "";
var humidty = "";
var winSpd = "";
var uvIndx = "";
var apiKey = "4383960b162385ee11decc2446137670";
var searchtext = $('#searchtext')
var lat = "";
var lon = "";
var history = document.querySelector("#search");
var historyList = [];
  // getWeatherURL()
  renderHistory()

history.onclick = getWeatherURL

// Weather API for current weather
function getWeatherURL() {
  // searchtext.val("");
  if(searchtext.val() != "") {
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + searchtext.val() + '&units=imperial&appid=' + apiKey;
    console.log(queryURL);
    var currentQueryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + searchtext.val() + "&units=imperial&appid=" + apiKey;
    console.log(currentQueryURL);
    var uvQueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat={lat}&lon={lon}" ;
    console.log(uvQueryURL);
    $.ajax({
      url: queryURL,
      method: "GET",
      crossDomain: true
    }).then(function (r) {
      console.log(r.list.length);
      historyList.push(searchtext.val())
      console.log(r);
      localStorage.setItem("searchHistory", JSON.stringify(historyList));
      renderHistory()
  
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
      var main = $(".main")
  
      $("#temp").text(r.main.temp);
      $("#humidity").text(r.main.humidity);
      $("#windspeed").text(r.wind.speed);
      lat = r.coord.lat
      lon = r.coord.lon

      uvQueryURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + apiKey + "&lat=" + lat + "&lon=" + lon; 

      $.ajax({
        url: uvQueryURL,
        method: "GET",
        crossDomain: true
        
      }).then(function (r) {
        
        console.log(r);
    
        $("#uvindex").text(r.value);
        })     
  
    })
   
  } else {
    alert("Please Enter a City!");
  }

  
};
 // Store and get search history from local storage
 function renderHistory() {

  // searchText.innerHTML = "";

historyList = JSON.parse(localStorage.getItem("searchHistory")) ||  [];

var ul = $("#search-history ul")
ul.empty()

  for (var i = 0; i < historyList.length; i++) {
    var historyAppend = historyList[i];

    var li = document.createElement("li")
    li.textContent = historyAppend;
    // li.setAttribute("search")

    

    ul.append(li);
    console.log(li)
  
  }


  // function append() {
  //   var appendHistory = JSON.parse(localStorage.getItem("search-history"));

  //   if (appendHistory !== null) {
  //     searchHistory = appendHistory;
  //   }

  //   append();
  // }

}
});
  





