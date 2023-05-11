
var Date2 = 12/12/26
alert(" hello world "); //alert to show hellow world
window.alert(" Hellow World "); //another form of an alert
document.write(' Hello Worlds '); //we use ' insted of " to write text between 
var A = " This is a string "; //creating a variable named A and assined it the sring "This is a string"
B = Boolean = true // created a variable named B assined it the class Bool and set the value true
C = Float64Array = 36.24 //created a variable named C and assined it the value 36.24

var CS = " Contigated" + " String"  //created a varable named CS with the value "Contigated"+"String"

document.write(CS) //writes "Contigated"+"String"
document.write("   "+A); //writes "This is a Sring"
document.write("   Bool:"+B); //writes "Bool:"+B

var MN1 = 24 //creates var named MN1 sets value to 24
var MN2 = 66 //creates var named MN2 sets value to 66
var OP1 = 0 //creates var named OP1 sets value to 0

OP1 = MN1+MN2; // sets OP1 equal to mn1+mn2 witch is 90

document.write("    ADD 24+66 = "+OP1); //writes ADD 24+66 = 90

//-------------------------------------------------------------------------------------------------------------------------------------
//contigrated
//-------------------------------------------------------------------------------------------------------------------------------------

function myFunction(){
    var sent = "I am learning";
    sent += "a lot from this book!";
    document.getElementById("Waho").innerHTML = sent;
}

// create a string variable
var myString = "Hello, ";

// concatenate additional text to the string
myString += "world!";

// display the concatenated string in the output element
document.getElementById("output").innerHTML = myString;
