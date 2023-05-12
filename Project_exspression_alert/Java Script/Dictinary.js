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