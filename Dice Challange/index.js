var playerA = Math.floor(Math.random()*6 + 1) ;
var playerB =  Math.floor(Math.random()*6 + 1) ;

var addressA = "images/dice" + playerA + ".png" ;
var addressB = "images/dice" + playerB + ".png" ;

var imageObjects = document.querySelectorAll("img") ;

var imageObjectA = imageObjects[0] ;
var imageObjectB = imageObjects[1] ;

imageObjectA.setAttribute("src" , addressA) ;
imageObjectB.setAttribute("src" , addressB) ;

var mainContent = document.getElementsByTagName("h1")[0] ;

if(playerA > playerB)
{
    mainContent.textContent = "🎉 Player 1 Won" ;
}

else if(playerA < playerB)
{
    mainContent.textContent = " Player 2 Won 🎉" ;
}
else 
{
    mainContent.textContent = " D R A W " ;
}




