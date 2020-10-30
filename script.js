var APIKey = "c653cb658ecf4e0281fa57ef23c5a74d";


//Must make search button in html generate results
$("#search-btn").on("click", function (){
    event.preventDefault();

    var name = $("#city-search").val();
    console.log(name);
    
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + name + "&appID=" + APIKey;
    console.log(queryURL);

    var URLquery = "http://api.openweathermap.org/data/2.5/weather?q=" + name + "&appID=" + APIKey;
    console.log(URLquery);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response)
        
        console.log(response.city.name);

        console.log(response.list[6].dt_txt);
        console.log(response.list[14].dt_txt);
        console.log(response.list[22].dt_txt);
        console.log(response.list[30].dt_txt);
        console.log(response.list[38].dt_txt);

        console.log(response.list[6].wind.speed);
        console.log(response.list[14].wind.speed);
        console.log(response.list[22].wind.speed); 
        console.log(response.list[30].wind.speed);
        console.log(response.list[38].wind.speed);

        console.log(response.list[6].main.humidity);
        console.log(response.list[14].main.humidity);
        console.log(response.list[23].main.humidity);
        console.log(response.list[30].main.humidity);
        console.log(response.list[38].main.humidity);


        //Convert Tempuratures from Kelvin to Fahrenheit
        //convertTemp = Math.round((response.main.temp - 273.15) * 1.8 + 32);
        var convertTemp1 = Math.round((response.list[6].main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp1);
        var convertTemp2 = Math.round((response.list[14].main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp2);
        var convertTemp3 = Math.round((response.list[22].main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp3);
        var convertTemp4 = Math.round((response.list[30].main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp4);
        var convertTemp5 = Math.round((response.list[38].main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp5);


            console.log(response.list.length, "length")

        //for (var i = 0; i < 2; i++) {
                var mynewDiv = $("newDiv") ;
                let newDiv = `
                            <h3>5-Day 3-Hour Forecast:</h3>
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[6].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <h6>Tempurature: ${convertTemp1}%F </h6>
                            <p>Humidity: ${response.list[6].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[14].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <h6>Tempurature: ${convertTemp2}%F </h6>
                            <p>Humidity: ${response.list[14].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[22].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <h6>Tempurature: ${convertTemp3}%F </h6>
                            <p>Humidity: ${response.list[22].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[30].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <h6>Tempurature: ${convertTemp4}%F </h6>
                            <p>Humidity: ${response.list[30].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[38].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <h6>Tempurature: ${convertTemp5}%F </h6>
                            <p>Humidity: ${response.list[38].main.humidity}%</p>
                            </div>
                            <br />`
                            ;
               $("main").prepend(newDiv);
    })

    $.ajax({
            url: URLquery,
            method: "GET"
         }).then(function(response){
            console.log(response, "response")
            
            console.log(response.name);

            console.log(response.dt_txt);

            console.log(response.wind.speed); 

            console.log(response.main.humidity);

            var date = new Date()
            console.log(date);

            var convertTemp = Math.round((response.main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp);
            
                var mynewDiv001 = $("newDiv001") ;
                let newDiv001= `<h3>Today's Weather:</h3>
                             <div class=card>
                             <b> City: ${response.name}</b> 
                             <p>Date: ${date}</p>                    
                             <h6>Tempurature: ${convertTemp}*F </h6>
                             <p>Wind Speed: ${response.wind.speed} mph</p>
                             <p>Humidity: ${response.main.humidity}% </p>
                             </div>
                             <br/>`;
                 $("section").prepend(newDiv001);
         })   

})

