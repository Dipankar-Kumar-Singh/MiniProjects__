const user = [
    { name : "dipanakar" , lastname : "kumar" , age : 20} ,
    { name : "Ajay" , lastname : "Singh" , age : 07} ,
    { name : "Abay" , lastname : "Sahu" , age : 35} 
] ;

const list = user.filter((obj) => obj.age > 10 ) ;

console.log(list) ;

