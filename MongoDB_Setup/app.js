const express = require('express') ;
const app = express() ;
const bodyParser = require('body-parser')

const mongoose = require("mongoose") ;
mongoose.connect("mongodb://127.0.0.1:27017/fruitDB" , { useNewUrlParser : true})   ;

const fruitSchema = mongoose.Schema({
    name : String ,
    rating : Number , 
    review : String 
});

const Fruit = mongoose.model("Fruit" , fruitSchema ) ; // Fruti -> Collection 

const fruit = new Fruit({  
    // fruit --> Document in the Fruit Collection 
    name : "Kiwi" , 
    rating : 4.5  ,
    review : "Cute Fruit" 
}) ;

const magno = new Fruit({

    name : "Orage" , 
    rating : 5 ,
    review : "Best The Best ......" 
});

// magno.save() ;
// fruit.save() ;

Fruit.find( function(err,res){ mongoose.connection.close() ;  console.log(res);}) ;

// mongoose.connection.close() ;