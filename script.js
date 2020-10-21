var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + search + "&APPID=" + APIkey;
var APIKey = "c653cb658ecf4e0281fa57ef23c5a74d";
var search = "";


//Must make search button in html generate results
$("#search-btn").on("click", function (){
    event.preventDefault();

    localStorage.setItem("search", search)
    localStorage.getItem("search")
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log("Local weather for: "+ city, response);
        console.log(response.value)
    
        var city = response.value[0].name;
        console.log(name);

        var date = response.value[0].date;
        console.log(date);

        var temp = response.value[0].temp;
        console.log(temp);

        var wind = response.value[0].wind;
        console.log(wind);

        var UV = response.value[0].UV;
        console.log(UV);

        for (var i = 0; i < response.value.length; i++) {
            var mynewDiv = $("newDiv") ;
    
            let newDiv = `<div class=card><span class="card-title"><b>${response.value[i].name}</b></span><h3>${response.value[i].date}</h3><h4>${response.value[i].temp}</h4><p>${response.value[i].wind}</p><p>${response.value[i].UV}</p></div>`;
    
            $("main").append(newDiv);
    
        };
    })
    
    
})



//Must declare to enable the city, date, temp (with conversion), wind, and UV (with conversion) to populate div
    //Must first convert temperature
