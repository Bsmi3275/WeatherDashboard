var APIKey = "c653cb658ecf4e0281fa57ef23c5a74d";


//Must make search button in html generate results
$("#search-btn").on("click", function (){
    event.preventDefault();

    var name = $("#city-search").val();
    console.log(name);
    
    var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + name + "&appID=" + APIKey;
    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response){
        console.log(response)
        
        console.log(response.city.name);

        console.log(response.list[0].dt_txt);

        console.log(response.list[0].wind.speed); 

        //Convert Tempuratures from Kelvin to Fahrenheit
        //convertTemp = Math.round((response.main.temp - 273.15) * 1.8 + 32);
        var convertTemp = Math.round((response.list[0].main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp);
        var convertTemp1 = Math.round((response.list[7].main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp1);
        var convertTemp2 = Math.round((response.list[15].main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp2);
        var convertTemp3 = Math.round((response.list[23].main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp3);
        var convertTemp4 = Math.round((response.list[31].main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp4);
        var convertTemp5 = Math.round((response.list[39].main.temp - 273.15) * 1.8 + 32)
            console.log(convertTemp5);



        for (var i = 0; i < response.list.length; i++) {
                var mynewDiv = $("newDiv") ;
                let newDiv = `<h3>Today's Weather</h3>
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <h3>Date: ${response.list[0].dt_txt}</h3>
                            <h4>Tempurature: ${convertTemp}%F </h4>
                            <p>Wind Speed: ${response.list[0].wind.speed}</p></div>
                            <br />
                            <h3>5-Day 3-Hour Forecast</h3>
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <h3>Date: ${response.list[7].dt_txt}</h3>
                            <h4>Tempurature: ${convertTemp1}%F </h4>
                            <p>Wind Speed: ${response.list[7].wind.speed}</p></div>
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <h3>Date: ${response.list[15].dt_txt}</h3>
                            <h4>Tempurature: ${convertTemp2}%F </h4>
                            <p>Wind Speed: ${response.list[15].wind.speed}</p></div>
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <h3>Date: ${response.list[23].dt_txt}</h3>
                            <h4>Tempurature: ${convertTemp3}%F </h4>
                            <p>Wind Speed: ${response.list[23].wind.speed}</p></div>
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <h3>Date: ${response.list[31].dt_txt}</h3>
                            <h4>Tempurature: ${convertTemp4}%F </h4>
                            <p>Wind Speed: ${response.list[31].wind.speed}</p></div>
                            <div class=card>
                            <b> City: ${response.city.name}</b>
                            <h3>Date: ${response.list[39].dt_txt}</h3>
                            <h4>Tempurature: ${convertTemp5}%F </h4>
                            <p>Wind Speed: ${response.list[39].wind.speed}</p></div>
                            <br />`
                            ;
               $("main").append(newDiv);
        }
        

        // for (var i = 0; i < response.list.length; i++) {
        //     var city = $("city") ;
        //         let city = `<City: ${response.city.name}`;
        //         $("city").append(city);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var date = $("date") ;
        //         let date = `Date: ${response.list[0].dt_txt}`;
        //         $("date").append(date);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var date001 = $("date001") ;
        //         let date001 = `Date: ${response.list[3].dt_txt}`;
        //         $("date001").append(date001);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var date002 = $("date002") ;
        //         let date002 = `Date: ${response.list[11].dt_txt}`;
        //         $("date002").append(date002);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var date003 = $("date003") ;
        //         let date003 = `Date: ${response.list[19].dt_txt}`;
        //         $("date003").append(date003);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var date004 = $("date004") ;
        //         let date004 = `Date: ${response.list[27].dt_txt}`;
        //         $("date004").append(date004);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var date005 = $("date005") ;
        //         let date005 = `Date: ${response.list[35].dt_txt}`;
        //         $("date005").append(date005);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var temp = $("temp") ;
        //         let temp = `Tempurature: ${convertTemp} % F`;
        //         $("temp").append(temp);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var temp001 = $("temp001") ;
        //         let temp001 = `Tempurature: ${convertTemp1} % F`;
        //         $("temp001").append(temp001);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var temp002 = $("temp002") ;
        //         let temp002 = `Tempurature: ${convertTemp2} % F`;
        //         $("temp002").append(temp002);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var temp003 = $("temp003") ;
        //         let temp003 = `Tempurature: ${convertTemp3} % F`;
        //         $("temp003").append(temp003);
        // }
        // for (var i = 0; i < response.list.length; i++) {            
        //     var temp004 = $("temp004") ;
        //         let temp004 = `Tempurature: ${convertTemp4} % F`;
        //         $("temp004").append(temp004);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var temp005 = $("temp005") ;
        //         let temp005 = `Tempurature: ${convertTemp5} % F`;
        //         $("temp005").append(temp005);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var ws = $("ws");
        //         let ws = `Wind Speed: ${response.list[0].wind.speed}`;
        //         $("ws").append(ws);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var ws001 = $("ws001");
        //         let ws001 = `Wind Speed: ${response.list[3].wind.speed}`;
        //         $("ws001").append(ws001);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var ws002 = $("ws002");
        //         let ws002 = `Wind Speed: ${response.list[11].wind.speed}`;
        //         $("ws002").append(temp002);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var ws003 = $("ws003");
        //         let ws003 = `Wind Speed: ${response.list[19].wind.speed}`;
        //         $("ws003").append(temp003);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var ws004 = $("ws004");
        //         let ws004 = `Wind Speed: ${response.list[27].wind.speed}`;
        //         $("ws004").append(temp004);
        // }
        // for (var i = 0; i < response.list.length; i++) {
        //     var ws005 = $("ws005");
        //         let ws005 = `Wind Speed: ${response.list[35].wind.speed}`;
        //         $("ws005").append(temp005);
            
        // }
    })
    
})


