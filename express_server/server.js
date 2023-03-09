// 
// import express from "express";
const express = require("express") ;
const app = express() ;

app.get("/" , function(_request , response)
{
    response.send("kya baat hai") ;
});

app.get("/about" , function(_request , response)
{
    let HTMLCONTENT = "<h1>sdsdff</h1>";
    response.send(HTMLCONTENT) ;
});

app.listen(3000) ;