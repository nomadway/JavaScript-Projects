
// TASK-1  Write a function using HTML and JavaScript that utilizes a ternary operation using input from the browser
function join_Function() { //created function 
    var Height, Can_enlist; //assigned variable 
    Height = document.getElementById("Height").value; //value is called from HTML 
    Can_enlist = (Height < 180) ? "Midgets are not allowed":"You are tall enough"; //condition takes place 
    document.getElementById("Join").innerHTML = Can_enlist + " to join FSB."; //Join is called from HTML 

}

document.write("<br>"); //space between codes 

// TASK-2 Write a constructor function that uses the “new” and “this” keywords

function City(Name, Population) { //function is created 
    this.City_Name = Name; //this is an object
    this.City_Population = Population; //this is an object 
}

var Lisa = new City("Calgary", "two million") //new object
var John = new City("Moscow", "ten million") //new object 

function new_Function() {
    document.getElementById("goodbye").innerHTML = "John lives in " + John.City_Name
}

document.write("<br>"); //space between codes 

// TASK-3  Write a nested function

function super_Math() {//main function 
    document.getElementById("Math").innerHTML = Count();
    function Count() {//nested function 
        var start = 1;
        function Plus_ten() {start +=1}; //nested function 
        Plus_ten();
        return start;

    }
}






