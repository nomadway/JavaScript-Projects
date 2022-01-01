
//TASK-1-Write functions using each of the following operators: +, - , *, %, ++, --


function additionFunction () {   //created function
        var add = 100+50;   //assigned variable 
        document.getElementById("Math").innerHTML = "100+50 = "+ add;  //called the element from HTML to display the result
}

function substractFunction () {  //created function
    var substract = 100+50;   //assigned variable 
    document.getElementById("Math").innerHTML = "100-50 = "+ substract; //called the element from HTML to display the result
}


function multiplyFunction () {  //created function
    var multiply = 10 * 10;   //assigned variable 
    document.getElementById("Math").innerHTML = "10*10 = "+ multiply;//called the element from HTML to display the result
}


function remainderFunction () {  //created function
    var remain = 30 % 7;   //assigned variable 
    document.getElementById("Math").innerHTML = "when 30 is divided by 7 the remainder is:  "+ remain;//called the element from HTML to display the result
}


function incrementFunction () {   //created function
    var y = 5; //assigned variable 
    var x = ++y; //assigned variable 
    document.getElementById("Math").innerHTML = y; //called the element from HTML to display the result
    document.getElementById("Math").innerHTML = x;//called the element from HTML to display the result
}




function decrementFunction () {   //created function
    
    var x = 50; //assigned variable 
    x--; //assigned variable 
    var z = x; //assigned variable 
    document.getElementById("Math").innerHTML = z;//called the element from HTML to display the result
}
 



// TASK-2 Write a function using Math.random()

function randomFunction () {   //created function
    
    document.getElementById("Math").innerHTML = Math.random(); //called the element from HTML to display the result
}
   




