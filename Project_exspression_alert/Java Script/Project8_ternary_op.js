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


