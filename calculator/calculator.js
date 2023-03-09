const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html") ;
});


app.get("/bmicalculator" , function(request,response){
    response.sendFile(__dirname+ "/BMICalculator.html") ;
})

app.post("/", function(request , response)
{
    num1 = Number(request.body.num1) ;
    num2 = Number(request.body.num2) ;

    console.log(typeof(num1),typeof(num2));
    console.log(num1,num2) ;

    response.send("ans = " + (num1+num2)) ;

})


app.post("/BMICalculator.html" , function(request , response) {

    h =  Number(request.body.hight) ;
    w =  Number(request.body.weight) ;
    
    response.send("Your BMI is = " + h*w ) ;

});


app.listen(3000) ;