//TASK-1 Write a function that use a for loop
function count_for() {

  let text = "";

  for (let i = 0; i < 5; i++) {
    text += "The number is " + i + "<br>";
  }

  document.getElementById("demo").innerHTML = text;

}

//TASK-2 WHILE 

function count_while() {
  let text = "";
  let i = 0;
  while (i < 10) {
    text += "<br>The number is " + i;
    i++;
  }
  document.getElementById("demonstr").innerHTML = text;
}


//TASK-3 Write a function that use an array
function cars_function() {
  const cars = ["Lexus", "Toyota", "Bentley"];
  document.getElementById("cars").innerHTML = cars;
}



//TASK-4 Create an object using the “let” keyword

function check_Let() {
let  x = 10;

{  
  let x = 2;

}

document.getElementById("use_let").innerHTML = x;
}















