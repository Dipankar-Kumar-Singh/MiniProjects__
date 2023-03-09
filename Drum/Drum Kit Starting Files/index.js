
var allKeys = document.querySelectorAll("button") ;

function buttonanimation(buttonelement)
{
    buttonelement.classList.add("highlight") ;
    buttonelement.classList.add("faded") ;

    setTimeout(() => {
        buttonelement.classList.remove("highlight") ;
        buttonelement.classList.remove("faded") ;
    }, 100);
}

for( const [index, element] of allKeys.entries())
{
    if(index < 4 )
    {
        element.addEventListener("click", function () { 
            var xx = "/sounds/tom-" + (index+1) + ".mp3"; 
            var a = new Audio(xx);
            a.play(); 
        });
    }

    else if( index == 4 ) 
    {
        element.addEventListener("click" , function() {
            var audio  = new Audio("/sounds/snare.mp3") ;
            audio.play() ;
        });
    }

    else if( index == 5 ) 
    {
        element.addEventListener("click" , function() {
            var audio  = new Audio("/sounds/kick-bass.mp3") ;
            audio.play() ;
        });
    }

    else if( index == 6 ) 
    {
        element.addEventListener("click" , function() {
            var audio  = new Audio("/sounds/crash.mp3") ;
            audio.play() ;
        });
    }
}

document.addEventListener("keydown", function (event) {
    let ch = event.key;
    let tp = typeof (ch);
    console.log(ch, tp);

    let activeButton = document.querySelector("." + ch) ;

    console.log(activeButton) ;
    buttonanimation(activeButton) ;


    if (ch === "w") {
    
        let t = new Audio("/sounds/tom-1.mp3");
        t.play();
    }
    else if (ch === "a") {

        let t = new Audio("/sounds/tom-2.mp3");
        t.play();
    }
    else if (ch === "s") {

        let t = new Audio("/sounds/tom-3.mp3");
        t.play();
    }

    else if (ch === "d") {

        let t = new Audio("/sounds/tom-4.mp3");
        t.play();
    }

    else if(ch === "j")
    {
        let t = new Audio("/sounds/snare.mp3");
        t.play();
    }

    else if(ch === "k")
    {
        let t = new Audio("/sounds/kick-bass.mp3");
        t.play();
    }

    else if(ch === "l")
    {
        let t = new Audio("/sounds/crash.mp3");
        t.play();
    }

});
