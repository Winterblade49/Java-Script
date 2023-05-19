let activeplayer = "x";
let selectedSquares = [];

function placeXOrO(SquareNumber) {

    if(!selectedSquares.some(element => element.includes(SquareNumber))) {
        let select = document.getElementById(SquareNumber);
        if(activeplayer==='x'){
            select.style.backgroundImage = 'url(./Images/x.png)'
        }else{
            select.style.backgroundImage = 'url(./Images/o.png)'
        }
        selectedSquares.push(SquareNumber + activeplayer);
        checkWinCondition()
        if(activeplayer == 'x'){
            activeplayer = 'o';
        }else{
            activeplayer = 'x';
        }
        audio('./media/place.mp3');
        if(activeplayer === 'o'){
            disableClick()
            setTimeout(function () { computersTurn0(); }, 1000);
        }
        return true;
    }
    function computersTurn0(){
        let success = false;
        let pickAsquare;

        while(!success){
            pickAsquare = String(Math.floor(Math.random()*9))
            if(placeXOrO(pickAsquare)) {
                placeXOrO(pickAsquare);
                success = true;
            };
        }
    }
}

function checkWinCondition(){
    if(arrayIncludes('0X', '1x', '2x')){drawWinline(50, 100, 558, 100)} //1   
    else if(arrayIncludes('3x', '4x', '5x')){drawWinline(50, 304, 558, 304)} //2
    else if(arrayIncludes('6x', '7x', '8x')){drawWinline(50, 508, 558, 508)} //3      
    else if(arrayIncludes('0x', '3x', '6x')){drawWinline(100, 50, 100, 558)} //4    
    else if(arrayIncludes('1x', '4x', '7x')){drawWinline(304, 50, 304, 558)} //5
    else if(arrayIncludes('2x', '5x', '8x')){drawWinline(508, 50, 508, 558)} //6
    else if(arrayIncludes('6x', '4x', '2x')){drawWinline(100, 508, 510, 90)} //7   
    else if(arrayIncludes('0x', '4x', '8x')){drawWinline(100, 100, 520, 520)} //8
        
    else if(arrayIncludes('0o', '1o', '2o')){drawWinline(50, 100, 558, 100)} //9
    else if(arrayIncludes('3o', '4o', '5o')){drawWinline(50, 304, 558, 304)} //10            
    else if(arrayIncludes('6o', '7o', '8o')){drawWinline(50, 508, 558, 508)} //11    
    else if(arrayIncludes('0o', '3o', '6o')){drawWinline(100, 50, 100, 558)} //12     
    else if(arrayIncludes('1o', '4o', '7o')){drawWinline(304, 50, 304, 558)} //13   
    else if(arrayIncludes('2o', '5o', '8o')){drawWinline(508, 50, 508, 558)} //14   
    else if(arrayIncludes('6o', '4o', '2o')){drawWinline(100, 508, 510, 90)} //15
    else if(arrayIncludes('0o', '4o', '8o')){drawWinline(100, 100, 520, 520)} //16
     
    else if (selectedSquares.lengh >= 9){
        audio('./media/tie.mp3');
        setTimeout(function (){resetGame();}, 500);
    }
}

function arrayIncludes(squareA, squareB, squareC){
    const a = selectedSquares.includes(squareA);
    const b = selectedSquares.includes(squareB);
    const c = selectedSquares.includes(squareC);
    if (a === true && b === true && c === true){ return true; }
}

function drawWinline(coordx1,coordy1,coordx2,coordy2){
    const canvas = document.getElementById('win-lines');
    const c = canvas.getContext('2d');
    let x1 = coordx1, 
        y1 = coordy1,
        x2 = coordx2,
        y2 = coordy2,
        x = x1,
        y = y1;


function animatedLineDrawing(){
    const animationLoop = requestAnimationFrame(animatedLineDrawing);
    c.clearRect(0, 0, 608, 608);
    c.beginPath();
    c.moveTo(x1,y1)
    c.lineTo(x,y)
    c.lineWidth = 10;
    c.strokeZtyle = 'rgba(70, 255, 33, .8)'
    c.stroke();
    if (x1 <= x2 && y1 <= y2){
        if(x < x2){x += 10; }
        if(y < y2){y += 10; }
        if(x >= x2 && y >= y2){ cancelAnimationFrame(animationLoop);}
    }
    if (x1 <= x2 && y1 >= y2){
        if(x < y2) { x+=10; }
        if(y > y2) { y-=10; }
        if(x >= x2 && y <= y2) { cancelAnimationFrame(animationLoop);}
    }
}
    function clear() {
        const animationLoop = requestAnimationFrame(clear);
        c.clearRect(0, 0, 608, 608);
        cancelAnimationFrame(animationLoop);
    }
    disableClick();
    audio('./media/winGame.mp3');
    animatedLineDrawing();
    setTimeout(function () {clear(); resetGame(); }, 1000)    
}


function disableClick(){
    body.style.pointerEvents = 'none';
    setTimeout(function (){body.style.pointerEvents = 'auto';}, 1000)
}

function audio(audioURL){
    let audio = new Audio(audioURL);
    audio.play();
}

function resetGame(){
    for(let i = 0; i<9; i++){
        let square = document.getElementById(String(i));
        square.style.backgroundImage = '';
    }
    selectedSquares = [];
}