
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

function my_Dictinary(){
    var Animal = { //Declared VAR
        species:"Dog", //added value
        Color:"Black", //added value
        Breed:"lab",   //added value
        Age:4,         //added value
        Sound:"Bark"   //added value
    };
    document.getElementById("Ani").innerHTML = Animal.Sound; //connected js with correct line of html and told it to pull val animal.sound = Bark
}


var A = 635;
var B = 554;
var C = 954;
var OUT = 0;

function MathFunction(){
    OUT = A+B+C;
    document.getElementById("Math").innerHTML = OUT;
}

function subtract_Function() {
    var Sub = 5-2;
    document.getElementById("Math1").innerHTML="5-2= "+Sub;
}

function multi_Function() {
    var Sub1 = 5*2;
    document.getElementById("Math2").innerHTML="5*2= "+Sub1;
}

function divide_Function() {
    var Sub2 = 5/2;
    document.getElementById("Math3").innerHTML="5/2= "+Sub2;
}

function multipl_Function() {
    var Sub3 = 5/2*10+12;
    document.getElementById("Math4").innerHTML="5/2*10+12= "+Sub3;
}

function MOD1_Function() {
    var Sub4 = 25%6;
    document.getElementById("MOD1").innerHTML="25%6= "+ -Sub4;
}

function MOD_Function() {
    var Sub5 = 25%6;
    document.getElementById("MOD").innerHTML="25%6= "+Sub5; // = write an exspression combining a string and number
}

var I = 5;
I++
document.write(I)
var IO = 5;
IO--
document.write(I)

window.alert(Math.random());
window.alert(Math.random()*100)

//Project5Comparasins_type_coercion
var LN = 12
var MN = 24
var TN = 99

if(TN == LN){ // Equality some diff 
    document.write("MOD1")
}
else if(TN === MN){ // Strict Equality no dif
    document.write("MOD2")
}
else if(MN>TN){  //greater than
    document.write("MOD1")
}
else if(LN<TN){ //less than
    document.write("MOD3")
}
else if(TN && TN){ //logical and
    document.write("MOD4")
}
else if(LN || TN){ //or gate
    document.write("MOD5")
}
else if(TN != LN){ //inequality
    document.write("MOD6")
}
else{
    document.write("MOD7")
}

function Ride_Function(){
    var Height, Can_Ride;
    Height = document.getElementById("Height").value;
    Can_Ride = (Height < 52) ? "You are to short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_Ride + " to ride.";
}

function New_and_This_Function(){
    
    var Cash, Can_Pay;
    Cash = document.getElementById("cash").value;
    Can_Pay = (Cash > 52) ? "Thank you for your purchase":"You are to short on cash";
    document.getElementById("New_and_This").innerHTML = Can_Pay + "......";
}

function Car(Make, Model, Year, Color){
    this.Car_Make = Make;
    this.Car_Model = Model;
    this.Car_Year = Year;
    this.Car_Color = Color;
}
var Jack = new Car("Dodge","Viper","2302","Red");
var Emily = new Car("Ford","Viper","50451","White");
var Erik = new Car("Mercedes","Viper","1235","Blue");
function Display_CAR(){
    document.getElementById("Display_Car_Info").innerHTML= 
    "Erik drives a "+ Erik.Car_Color+"-Colored "+ Erik.Car_Model+" Manufactured in "+Erik.Car_Year;
}


var num = 0;
function Count(){
    num = num +1;
    document.getElementById("Output_Num").innerHTML = num + ":num";
    if(num>=10){
        Danger();
    }
    if(num>=20){
        Danger2();
    }
    if(num>=30){
        Danger3();
    }
    if(num>=300000000000000000000000000000){
        Danger4();
    }

}

function Danger(){
    document.getElementById("Output_Num").innerHTML = num + ":num"+"  You Must STOP COUNTING!!!";
}
function Danger2(){
    document.getElementById("Output_Num").innerHTML = num + ":num"+"  NOOOOOOOOOOOOOOOOOOOOOO";
}
function Danger3(){
    document.getElementById("Output_Num").innerHTML = num + ":num"+"  \Dead/";
}
function Danger4(){
    document.getElementById("Output_Num").innerHTML = num + ":num"+"  why??";
}

//part of if statement in project 6 and bottom of math .js files

var global = 0
function calc( ){
 var local = 0
}

function goood_calc(){   //<-- Error = ) fixed to ()
 var local = 0
}

function Time_function(){
    var Time = new Date().getHours();
    var Replay;
    if (Time < 12 == Time > 0){
        Replay = "Its Morning Time!"
    }
    else if (Time > 12 == Time < 18){
        Replay = "It is afternoon"
    }
    else{
        Replay = " It is evening time"
    }
    document.getElementById("Time_of_day").innerHTML= Replay;
}


function slice_Method(){
    var sentence = "all work and no play makes jhonny a dull boy"
    var section = sentence.slice(27,33)
    document.getElementById("slice").innerHTML = section;
}

function full_sentence(){
    var part1 = "I Have "
    var part2 = "Made this "
    var part3 = "Full "
    var part4 = "Sentence"
    var whole = part1.concat(part2, part3, part4);
    document.getElementById("Contcatenate").innerHTML = whole;
}

function full_sentence(){
    var x=182;
    document.getElementById("Contcatenate").innerHTML = x.toString();
}

function Presition_method() {
    var x = 12938.3012987376112;
    document.getElementById("Precistion").innerHTML = x.toPrecision(10);
}

//-------------------------------------------------------------------------------------------------------------------------------------
//contigrated
//-------------------------------------------------------------------------------------------------------------------------------------

function myFunction(){
    var sent = "I am learning";
    sent += "a lot from this book!";
    document.getElementById("Waho").innerHTML = sent;
}

function slice_Method(){
// create a string variable
var myString = "Hello, ";

// concatenate additional text to the string
myString += "world!";

// display the concatenated string in the output element
document.getElementById("Contcatenate").innerHTML = myString;
}






