var lat;
var long;
var history;
var uvURL;
var city;
var currDate;
var wind;
var humidity;

function retrieveWeather(city) {


}

var APIKey = "c653cb658ecf4e0281fa57ef23c5a74d";

    // Here we are building the URL we need to query the database
    var queryURL = "api.openweathermap.org/data/2.5/weather?q=" + response.name + 
    "&appid=c653cb658ecf4e0281fa57ef23c5a74d"; //<---api key//

    // Here we run our AJAX call to the OpenWeatherMap API
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      // We store all of the retrieved data inside of an object called "response"
      .then(function(response) {

        // Log the queryURL
        console.log(queryURL);

        // Log the resulting object
        console.log(response);

        // Transfer content to HTML
        $("#city").html("<h1>" + "Weather Details for " + response.name + "</h1>");
        $("#currDate").text("<h2>" + " on the date of: " + response.date + "</h2>");
        var icon = "http://openweathermap.org/img/w/" + data.list[0].icon + ".png";
        $("#lrgIcon").attr("src", icon);
        lat = response.coord.lat;
        long = response.coord.long;
        uvURL = 
            //url before >>lat
            "api.openweathermap.org/data/2.5/uvi?lat=" +
            //api after ^'='^
            lat +
            "&long" +
            long +
            "&appid=c653cb658ecf4e0281fa57ef23c5a74d";
        $("#wind").text("Wind Speed: " + response.wind.speed);
        $("#humidity").text("Humidity: " + response.main.humidity);
    // The lines of code above are not going to html. Declaring them is a bit difficult because they are in a different format.
        
        // uvURL/ change UV color
        $.ajax({
            url: uvURL,
            method: "GET",
        }).then(function (response) {
            uvValue = response.value;
            $("#UV-p").text 
            ("<p>" + response.value + "<p>")
            //The following two contain potential code answers. I do not know how to declare the class card
            if (response.value < 3 || response.value > 9) {
                $ (".card").css ("background.color", "yellow");
            } else if (response.value >= 3 || response.value <= 0 || response.value <= 9 || response.value >=10) {
                $ (".card").css ("background.color", "orange");
            } else {
                $ (".card").css ("background.color", "red");
                }
            });

        // Convert the temp to fahrenheit
        var tempF = (response.main.temp - 273.15) * 1.80 + 32;

        

        // 5 day forecast insert
        var fivedayInput = $("input").val();
        var fivedayURL =
            "api.openweathermap.org/data/2.5/forecast?q=" + 
            fivedayinput + 
            "&appid=c653cb658ecf4e0281fa57ef23c5a74d";
            $.ajax({
                url: fivedayURL,
                method: "GET",
              }).then(function (response) {
                console.log("responsefiveday:", response);
                for (let i = 0; i < response.list.length; i++) {
                  if (response.list[i].dt_txt.indexOf("15:00:00") > 0) {
                    console.log(response.list[i]);


                  }
                }
                currDate = moment().format("l");
                tempF
                fiveDayIcon = response.list[7].weather[0].icon;
                fiveDayIconURL =
                  "https://openweathermap.org/img/wn/" + fiveDayIcon + "@2x.png";
                
                var mynewDiv = $("newDiv") ;

                let newDiv = `<h1> ${response.name} </h1><h2> ${currDate} </h2> <br /> `

                $("section").append(newDiv);

                //I am trying to put this into a section like I did last time
              });

              //

var historylist = JSON.parse(localStorage.getItem("historylist")) || [];
  if (historylist.indexOf(city) === -1) {
    historylist.push(city);
  }
  //saving updated data back to local storage
  localStorage.setItem("historylist", JSON.stringify(historylist));
  //removing current html and empties history contents from html
  $("#history").html("");

  historylist.forEach (history)

    var history = response.value[0].historylist;
    console.log(historylist);
    for (var i = 0; i < response.value.historylist, i++) {
        var mynewli = $("newli");

        let newli = `<ul><li> ${response.value.historylist} </li></ul>`;

        $("#history").append(historylist);
    }}

    //var item = $("<li>").text(history).addClass("list-group-item");
    //item.on("click", function (event) {
     // var city = event.target.innerText;
     // getweather(city);
    //});
        //copied

        // Log the data in the console as well
        console.log("Wind Speed: " + ${response.wind.speed});
        console.log("Humidity: " + ${response.main.humidity});
        console.log("Temperature (F): " + "tempF");

        $("#search-btn").click(function () {
            event.preventDefault()
            var cityInput = $("#input").val()
            retrieveWeather(cityInput)
        })





