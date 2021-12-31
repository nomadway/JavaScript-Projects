
function superFunction () {   //function name
        var str = "2021 has been a very productive year."; //str is variable
            str += " And 2022 will be even more fruitful, filled with countless success."; //+= is used to concatenate both sentences.
        var str = str.fontcolor("red"); //makes font color red
        document.getElementById("Concatenate").innerHTML = str; //this method calls on id from HTML 
}