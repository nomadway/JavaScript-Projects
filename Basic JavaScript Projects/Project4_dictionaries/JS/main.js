
function super_Car() { //created function 
    var Car = {  //assigned a variable 
        Model: "Lexus", //key and value
        Year: 2021, //key and value
        Price: 120000  //key and value

    };
    delete Car.Price; //deletes key-value and generates undefined result 
    document.getElementById("Dictionary").innerHTML = Car.Price; //prints 120000


}






