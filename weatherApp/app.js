const bodyParser = require("body-parser");
const { resolvePtr } = require("dns");
const { response } = require("express");
const express = require("express") ;
const app = express() ;
const https = require("https") ;


app.use(bodyParser.urlencoded({extended : true})) ;

function getDataToDisplay(city)
{
    let cityNmae =  city ;
    let APIKey = "d7a4e66e9ebcea02568f020cfa8cc29f" ;
    let lang  = "en" ;
    let unit = "metric" ;

    let ULR =
        `https://api.openweathermap.org/data/2.5/weather?`
        + `q=` + cityName
        + `&appid=` + APIKey
        + `&units=` + unit
        + `&lang=` + lang;

    https.get(ULR, (response_of_API)=>{

        response_of_API.on("data" , function(data){
            // parse convert data to JSON --> String --> JSON
            if(typeof(data)===undefined) {
                response.send("<h1>City not Found</h1>") ;
            }

            console.log(typeof(data));
            
            let weather = JSON.parse(data) ;
            
            let iconID = weather.weather[0].icon ;

            let ulr_image = "http://openweathermap.org/img/wn/"+ iconID +"@2x.png"  ;
            
            // without set ... IT was not working ,, showing plane string .. not as HTML ..
            // thus set content-type is used 
  
            response.set("Content-Type", "text/html");

            let temprature = weather.main.temp ;

            let detail  =  "<h1>Temp of  " + cityName + " is  " + + temprature + "</h1>" ;
            let imageDetail = "<img src = " +  ulr_image  + ">" ;
            
            response.write(detail) ;
            response.write(imageDetail) ;
            response.send( ) ; 
        }) ;

    }) ;

    return toSendBack ;
}

app.get('/style.css', function(req, res) {
    res.sendFile(__dirname + "/" + "style.css");
  });

app.get("/", (request, response) => { 
    response.sendFile(__dirname + "/index.html") ;
});

app.post("/" , function(request,response){
    
    let cityName = request.body.city_ ;
    let APIKey = "d7a4e66e9ebcea02568f020cfa8cc29f" ;
    let lang  = "en" ;
    let unit = "metric" ;

    let ULR =
        `https://api.openweathermap.org/data/2.5/weather?`
        + `q=` + cityName
        + `&appid=` + APIKey
        + `&units=` + unit
        + `&lang=` + lang;

    https.get(ULR, (response_of_API)=>{

        response_of_API.on("data" , function(data){
            // parse convert data to JSON --> String --> JSON
            let weather = JSON.parse(data) ;
            
            let iconID = weather.weather[0].icon ;

            let ulr_image = "http://openweathermap.org/img/wn/"+ iconID +"@2x.png"  ;
            
            // without set ... IT was not working ,, showing plane string .. not as HTML ..
            // thus set content-type is used 
  
            response.set("Content-Type", "text/html");

            let temprature = weather.main.temp ;

            let detail  =  "<h1>Temp of  " + cityName + " is  " + + temprature + "</h1>" ;
            let imageDetail = "<img src = " +  ulr_image  + ">" ;
            
            response.write(detail) ;
            response.write(imageDetail) ;
            response.send( ) ; 
        }) ;

    }) ;

})

app.listen(3000 , ()=> console.log("server is running at 3000")) ;