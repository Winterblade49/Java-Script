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
    var Sub = 5*2;
    document.getElementById("Math2").innerHTML="5*2= "+Sub;
}

function divide_Function() {
    var Sub = 5/2;
    document.getElementById("Math3").innerHTML="5/2= "+Sub;
}

function multipl_Function() {
    var Sub = 5/2*10+12;
    document.getElementById("Math4").innerHTML="5/2*10+12= "+Sub;
}

function MOD1_Function() {
    var Sub = 25%6;
    document.getElementById("MOD1").innerHTML="25%6= "+ -Sub;
}

function MOD_Function() {
    var Sub = 25%6;
    document.getElementById("MOD").innerHTML="25%6= "+Sub; // = write an exspression combining a string and number
}

var I =5;
I++
document.write(I)
var IO = 5;
IO--
document.write(i)

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









