const bodyParser = require("body-parser");
const express = require("express") ;
const request = require("request");

const app = express() ;

app.use(express.static("public")) ;
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.urlencoded({extended : true})) ;


app.get("/" , function(request,response){
    return response.sendFile(__dirname + "/signup.html") ;
});

app.post("/success" , function(request,response){

    let firstName = request.body.fname ;
    let lastName = request.body.lname ;
    let email = request.body.email ;
    console.log(firstName , lastName , email);

    response.sendFile(__dirname + "/success.html") ;
})

app.listen(3000 , ()=> console.log('successful created!')) ;


// API KEY : c35cadad45c1321809ff68d1b7c131e5-us11