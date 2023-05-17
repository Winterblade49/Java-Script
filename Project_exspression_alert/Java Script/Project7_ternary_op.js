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



