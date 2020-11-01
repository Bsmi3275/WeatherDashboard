var APIKey = "c653cb658ecf4e0281fa57ef23c5a74d";

//Must make search button in html generate results
$("#search-btn").on("click", function (){
    event.preventDefault();

    var name = $("#city-search").val();
    console.log(name);

    //forecast query
    var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + name + "&appID=" + APIKey;
    console.log(queryURL);

    //weather query
    var URLquery = "https://api.openweathermap.org/data/2.5/weather?q=" + name + "&appID=" + APIKey;
    console.log(URLquery);

    //command to retrieve forecast information
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response)
        
        //city-search = city name consoled
        console.log(response.city.name);

        //retrieving date
        //api recorded date and time together in military format, 
        //unilaterally in Eastern Time across the globe
        console.log(response.list[6].dt_txt);
        console.log(response.list[14].dt_txt);
        console.log(response.list[22].dt_txt);
        console.log(response.list[30].dt_txt);
        console.log(response.list[38].dt_txt);

        //retrieving humidities
        console.log(response.list[6].main.humidity);
        console.log(response.list[14].main.humidity);
        console.log(response.list[22].main.humidity);
        console.log(response.list[30].main.humidity);
        console.log(response.list[38].main.humidity);

        //add weather icon for forecast
        console.log(response.list[6].weather[0].icon);
        fiveDayIconURL001 =
          "https://openweathermap.org/img/wn/" + response.list[6].weather[0].icon + "@2x.png";
          console.log(fiveDayIconURL001);
        console.log(response.list[14].weather[0].icon);
        fiveDayIconURL002 =
          "https://openweathermap.org/img/wn/" + response.list[14].weather[0].icon + "@2x.png";
           console.log(fiveDayIconURL002);
        console.log(response.list[22].weather[0].icon);
        fiveDayIconURL003 =
          "https://openweathermap.org/img/wn/" + response.list[22].weather[0].icon + "@2x.png";
           console.log(fiveDayIconURL003);
        console.log(response.list[30].weather[0].icon);
        fiveDayIconURL004 =
          "https://openweathermap.org/img/wn/" + response.list[30].weather[0].icon + "@2x.png";
          console.log(fiveDayIconURL004);
        console.log(response.list[30].weather[0].icon);
        fiveDayIconURL005 =
          "https://openweathermap.org/img/wn/" + response.list[38].weather[0].icon + "@2x.png";
           console.log(fiveDayIconURL005);

        //Temperatures in Kelvin
        //assigned a day and time out of 40 (-/40)
        console.log(response.list[6].main.temperature);
        console.log(response.list[14].main.temperature);
        console.log(response.list[22].main.temperature);
        console.log(response.list[30].main.temperature);
        console.log(response.list[38].main.temperature);

        //Convert Tempuratures from Kelvin to Fahrenheit
        //COMMAND: convertTemp = Math.round((response.main.temp - 273.15) * 1.8 + 32);
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

        //Convert Tempuratures from Kelvin to Celsius
        //COMMAND: convertTemp = Math.round(response.main.temp - 273.15);
        var convertTemp001 = Math.round(response.list[6].main.temp - 273.15)
            console.log(convertTemp001);
        var convertTemp002 = Math.round(response.list[14].main.temp - 273.15)
            console.log(convertTemp002);
        var convertTemp003 = Math.round(response.list[22].main.temp - 273.15)
            console.log(convertTemp003);
        var convertTemp004 = Math.round(response.list[30].main.temp - 273.15)
            console.log(convertTemp004);
        var convertTemp005 = Math.round(response.list[38].main.temp - 273.15)
            console.log(convertTemp005);

        //consoled length
            console.log(response.list.length, "length")

        //creating a new DIV to insert forecast information
                var mynewDiv = $("newDiv") ;
                let newDiv = `
                            <h3>5-Day 3-Hour Forecast:</h3>
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[6].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <span class=image> <img src=${fiveDayIconURL001}></span>                   
                            <h6>Tempurature: ${convertTemp1}*F (degrees Fahrenheit) </h6>
                            <h6>             ${convertTemp001}*C (degrees Celsius) </h6>
                            <h6>             ${response.list[6].main.temp} Kelvin </h6>
                            <p>Humidity: ${response.list[6].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[14].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <h6>Tempurature: ${convertTemp2}*F (degrees Fahrenheit) </h6>
                            <span class=image> <img src=${fiveDayIconURL002}></span>                   
                            <h6>             ${convertTemp002}*C (degrees Celsius) </h6>
                            <h6>             ${response.list[14].main.temp} Kelvin </h6>
                            <p>Humidity: ${response.list[14].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[22].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <span class=image> <img src=${fiveDayIconURL003}></span>                   
                            <h6>Tempurature: ${convertTemp3}*F (degrees Fahrenheit) </h6>
                            <h6>             ${convertTemp003}*C (degrees Celsius) </h6>
                            <h6>             ${response.list[22].main.temp} Kelvin </h6>
                            <p>Humidity: ${response.list[22].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[30].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <span class=image> <img src=${fiveDayIconURL004}></span>                   
                            <h6>Tempurature: ${convertTemp4}*F (degrees Fahrenheit) </h6>
                            <h6>             ${convertTemp004}*C (degrees Celsius) </h6>
                            <h6>             ${response.list[30].main.temp} Kelvin </h6>
                            <p>Humidity: ${response.list[30].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[38].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <span class=image> <img src=${fiveDayIconURL005}></span>                   
                            <h6>Tempurature: ${convertTemp5}*F (degrees Fahrenheit) </h6>
                            <h6>             ${convertTemp005}*C (degrees Celsius) </h6>
                            <h6>             ${response.list[38].main.temp} Kelvin </h6>
                            <p>Humidity: ${response.list[38].main.humidity}%</p>
                            </div>
                            <br />`
                            ;
               $("main").prepend(newDiv);

               $("#new-btn").on("click", function (){
                event.preventDefault();

                var mynewDiv = $("newDiv") ;
                let newDiv = `
                            <h3>5-Day 3-Hour Forecast:</h3>
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[6].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <span class=image> <img src=${fiveDayIconURL001}></span>                   
                            <h6>Tempurature: ${convertTemp1}*F (degrees Fahrenheit) </h6>
                            <h6>             ${convertTemp001}*C (degrees Celsius) </h6>
                            <h6>             ${response.list[6].main.temp} Kelvin </h6>
                            <p>Humidity: ${response.list[6].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[14].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <span class=image> <img src=${fiveDayIconURL002}></span>                   
                            <h6>Tempurature: ${convertTemp2}*F (degrees Fahrenheit) </h6>
                            <h6>             ${convertTemp002}*C (degrees Celsius) </h6>
                            <h6>             ${response.list[14].main.temp} Kelvin </h6>
                            <p>Humidity: ${response.list[14].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[22].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <span class=image> <img src=${fiveDayIconURL003}></span>                   
                            <h6>Tempurature: ${convertTemp3}*F (degrees Fahrenheit) </h6>
                            <h6>             ${convertTemp003}*C (degrees Celsius) </h6>
                            <h6>             ${response.list[22].main.temp} Kelvin </h6>
                            <p>Humidity: ${response.list[22].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[30].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <span class=image> <img src=${fiveDayIconURL004}></span>                   
                            <h6>Tempurature: ${convertTemp4}*F (degrees Fahrenheit) </h6>
                            <h6>             ${convertTemp004}*C (degrees Celsius) </h6>
                            <h6>             ${response.list[30].main.temp} Kelvin </h6>
                            <p>Humidity: ${response.list[30].main.humidity}%</p>
                            </div>
                            <br />
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <p>Date: ${response.list[38].dt_txt} GMT-400 (Eastern Daylight Time)</p>
                            <span class=image> <img src=${fiveDayIconURL005}></span>                   
                            <h6>Tempurature: ${convertTemp5}*F (degrees Fahrenheit) </h6>
                            <h6>             ${convertTemp005}*C (degrees Celsius) </h6>
                            <h6>             ${response.list[38].main.temp} Kelvin </h6>
                            <p>Humidity: ${response.list[38].main.humidity}%</p>
                            </div>
                            <br />`
                            ;
               $("main").prepend(newDiv);


               })
    })

    //ajax call for current weather in given city
    //presented first under search button on main page
    $.ajax({
            url: URLquery,
            method: "GET"
         }).then(function(response){
            console.log(response, "response")

            //latitude and longitude
            //essential to ret
            var lat = response.coord.lat;
            console.log(lat);

            var lon = response.coord.lon;
            console.log(lon);


            var queryUV = "https://api.openweathermap.org/data/2.5/uvi?lat=" + lat + "&lon=" + lon + "&appid=" + APIKey;
            console.log(queryUV);

            //mini ajax command to get UV information
            $.ajax({
                url: queryUV,
                method: "GET"
            }).then(function(response){
                console.log(response, "response")
                
            //binary conversion to advise viewer on UV protection 
                console.log(response.value);
                if (response.value <= 5.00) {
                    console.log ("temperate")
                    $(".card001").css("background-color", "goldenrod")
                }
                if (response.value >= 5.01) {
                    console.log ("higher risk")
                    $(".card001").css("background-color", "pink")
                }

            //adding to mynewp
                var mynewP = $("newP") ;
                let newP = 
                `<div id = card><p>
                UV Index Number: ${response.value}
                </p></div>
                <br />`;
                $(".card001").prepend(newP);
        
            })
            
            console.log(response.name);

            console.log(response.wind.speed); 

            console.log(response.main.humidity);

            //add weather icon
            console.log(response.weather[0].icon);
            var weathericonURL = "https://openweathermap.org/img/wn/" + response.weather[0].icon + "@2x.png"
            console.log(weathericonURL);


            //consoled date in *similar form. "dt_txt" could not be retrieved from current weather console.
            var date = new Date()
            console.log(date);

            console.log(response.main.temp);

            var convertTemp = Math.round((response.main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp);

            var convertTemp000 = Math.round(response.main.temp - 273.15)
            console.log(convertTemp000);
            
            // adding it all, including 'newP' to 'newDiv001'
                var mynewDiv001 = $("newDiv001") ;
                let newDiv001= `<h3>Today's Weather:</h3>
                             <div class=card>
                             <b> City: ${response.name}</b> 
                             <p>Date: ${date}</p> 
                             <span class=image> <img src=${weathericonURL}></span>                   
                             <h6>Tempurature: ${convertTemp}*F (degrees Fahrenheit) </h6>
                             <h6>             ${convertTemp000}*C (degrees Celsius) </h6>
                             <h6>             ${response.main.temp} Kelvin </h6>
                             <p>Wind Speed: ${response.wind.speed} mph</p>
                             <p>Humidity: ${response.main.humidity}% </p>
                             </div>
                             <br/>`;
                 $("section").prepend(newDiv001);

                 var mynewButton = $("newButton") ;
                 let newButton = `<button id="new-btn" class="btn btn-success" type="submit">
                                ${response.name}
                                </button>
                                <br />`
                 $("#new-buttons").prepend(newButton);

                 $("#new-btn").on("click", function (){
                    event.preventDefault();

                    console.log(response.value);
                    
                    var mynewDiv001 = $("newDiv001") ;
                    let newDiv001= `<h3>Today's Weather:</h3>
                                 <div class=card>
                                 <b> City: ${response.name}</b> 
                                 <p>Date: ${date}</p>                 
                                 <span class=image> <img src=${weathericonURL}></span>                   
                                 <h6>Tempurature: ${convertTemp}*F (degrees Fahrenheit) </h6>
                                 <h6>             ${convertTemp000}*C (degrees Celsius) </h6>
                                 <h6>             ${response.main.temp} Kelvin </h6>
                                 <p>Wind Speed: ${response.wind.speed} mph</p>
                                 <p>Humidity: ${response.main.humidity}% </p>
                                 </div>
                                 <br/>`;
                     $("section").prepend(newDiv001);

                     $.ajax({
                        url: queryUV,
                        method: "GET"
                    }).then(function(response){
                        console.log(response, "response")
                        
                    //binary conversion to advise viewer on UV protection 
                        console.log(response.value);
                        if (response.value <= 5.00) {
                            console.log ("temperate")
                            $(".card001").css("background-color", "goldenrod")
                        }
                        if (response.value >= 5.01) {
                            console.log ("higher risk")
                            $(".card001").css("background-color", "pink")
                        }
        
                    //adding to mynewp
                        var mynewP = $("newP") ;
                        let newP = 
                        `<div id = card><p>
                        UV Index Number: ${response.value}
                        </p></div>
                        <br />`;
                        $(".card001").prepend(newP);

                
                    })


                 })

         })   


        })
