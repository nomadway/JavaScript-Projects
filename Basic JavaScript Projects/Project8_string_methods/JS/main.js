// TASK-1 Write functions that use each of the following methods: concat(), slice(), toString(), toPrecision()

function full_Sentence() {

    let text1 = "Happy";
    let text2 = "New Year!";
    let result = text1.concat(" ", text2);

    document.getElementById("word").innerHTML = result; //The code printed Happy New Year with a space in between. 
}

function slice_Sentence() {
    var Sentence = "This is a great DAY to start the day!";
    var Section = Sentence.slice(16,19);
    document.getElementById("Slice").innerHTML=Section; //the code sliced DAY

}

function num_String() {
    var x = 300;
    document.getElementById("num_to_string").innerHTML=x.toString(); //the code returned "300" as a string

}

function precision_Method() {
    var x = 39799.009;
    document.getElementById("prec_m").innerHTML=x.toPrecision(5); ///39799 were printed as precise numbers 

}




// TASK 2- Write any HTML elements needed to call and display those functions


function full_Sentence() {

    let text1 = "Elon Mask";
    let text2 = "is single handedly reshaping the course of human history!";
    let result = text1.concat(" ", text2);

    document.getElementById("elon").innerHTML = result; //The code joined the two texts with a space in between. 
}







