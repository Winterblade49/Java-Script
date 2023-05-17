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