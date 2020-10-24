//var iconURL;
//var lat;
//var lon;
//var
var APIKey = "c653cb658ecf4e0281fa57ef23c5a74d";



//Must make search button in html generate results
$("#search-btn").on("click", function (){
    event.preventDefault();

    var name = $("#city-search").val();
    console.log(name);

    //localStorage.setItem("search", search)
    //localStorage.getItem("search")
    
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + name + "&appID=" + APIKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        //console.log("Local weather for: "+ name, response);
        console.log(response)
        
        //convertTemp = Math.round((response.main.temp - 273.15) * 1.8 + 32);
        //icon = response.weather[0].icon;
        //lat = response.coord.lat;
        //lon = response.coord.lon


        console.log(response.city.name);

        console.log(response.list[0].dt_txt);
        
        console.log(response.list[0].main.temp);

        console.log(response.list[0].wind.speed);
    


        for (var i = 0; i < response.list.length; i++) {
            var mynewDiv = $("newDiv") ;
    
            let newDiv = `<div class=card><b> City: ${response.city.name}</b><h3>Date: ${response.list[i].dt_txt}</h3><h4>Tempurature: ${response.list[i].main.temp}%F </h4><p>Wind Speed: ${response.list[i].wind.speed}</p></div><br />`;
    
           $("main").append(newDiv);
    
        };
    })
    
})



//Must declare to enable the city, date, temp (with conversion), wind, and UV (with conversion) to populate div
    //Must first convert temperature
