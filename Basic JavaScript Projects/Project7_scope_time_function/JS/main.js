// TASK-1 Assign a local variable and a global variable

var A = 50;
function add_Num_1() {
    document.write(100 + A + "<br>");
}

function add_Num_2() {
    document.write(A + 600);
}

add_Num_1();
add_Num_2();

//Local 
function add_Num_1() {
    var A = 50;
    document.write(2000 + A + "<br>");

}

function add_Num_2() {
    document.write(300 + A);

}
add_Num_1();
add_Num_2();


document.write("<br>"); //space between codes

//TASK-2 Write a function that includes an if statement

if (new Date().getHours() > 18) {
    document.getElementById("time").innerHTML = "Hello";
  }


document.write("<br>"); //space between codes


//TASK-3 Intentionally write a function with an error in it and use the console.log() method to debug it within the console in the Chrome Dev Tools
// function add_Num_1() {
//     var A = 50;
//     console.log(50 + A);

// }

// function add_Num_2() {
//     console.log(A + 10 );

// }
// add_Num_1();
// add_Num_2();


document.write("<br>"); //space between codes

// TASK-4 Write the Time_function() outlined in previous slides


var myTimeout = setTimeout(myGreeting, 5000);

function myGreeting() {
  document.getElementById("hey").innerHTML = "Happy New Year - Justin and Ben!"
}






