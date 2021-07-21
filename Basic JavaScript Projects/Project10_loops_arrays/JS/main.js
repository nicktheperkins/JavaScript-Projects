// This while loop will loop through the block of code as long as i is less than 11.
function Call_Loop() {
    var text = "";
    var i = 0;
    while(i<11) {
        text += "<br>The number is " + i;
        i++;
    }
    document.getElementById("loop").innerHTML = text;
}

// The length property returns the length of a string.
function lengthFunction() {
    var str = document.getElementById("input_1").value;
    document.getElementById("result_1").innerHTML = str.length;
}

// A "For Loop" is used to repeat a section of code a number of times.
// For loops are used when the number of iterations is known.
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var text = "";
var i;
function for_Loop() {
    for(i = 0; i < Instruments.length; i++) {
        text += Instruments[i] + "<br>"
    }
    document.getElementById("result_2").innerHTML = text;
}

// Arrays are objects and are included in the object data type.
function arrayFunction() {
    var word = [];
    word[1] = "One";
    word[2] = "Two";
    word[3] = "Three";
    document.getElementById("array").innerHTML = "You chose to display the word " + 
    word[document.getElementById("input_2").value] + ".";
}

// The const keyword is not immutable (it can change) - yet, the variable identifier cannot be reassigned.
function constantFunction() {
    const Musical_Instrument = {type:"Guitar", brand:"Ibanez", color:"Black"};
    Musical_Instrument.color = "White";
    Musical_Instrument.price = "$1,000";
    document.getElementById("constant").innerHTML = "The cost of the " + Musical_Instrument.color + " " +
    Musical_Instrument.brand + " " + Musical_Instrument.type + " was " + Musical_Instrument.price;
}

// The do while loop is a variant of the while loop.
// This loop will execute the code blaock once, befoew checking if the condition is true, 
    // then it will repeat the loop as long as the condition is true.
// This loop also utilizes the let keyword that declares two variable that have function scope.
function dowhileFunction () {
    let text = "";
    let i = 0;

    do{
        text += "<br> The number is " + i;
        i++;
    }
    while (i < 11);
    document.getElementById("dowhile").innerHTML = text;
}

// The return statement stops the execution of the function and returns a value from that function.
function returnFunction(name) {
    return "Hello " + name;}
document.getElementById("return").innerHTML = returnFunction("Nick")

// Methods are actions that can be performed on objects. In JS, they are stored in properties as functions.
// In this code the  properties are: make, model, year, and color. The method is the description function.
let car = {
    make: "Toyota ",
    model: "Tacoma ",
    year: "1999 ",
    color: "White ",
    description : function() {
        return "My truck was a " + this.color + this.year + this.make + this.model; 
    }
};
document.getElementById("car_object").innerHTML = car.description();

// The continue statement breaks on iteration (in the loop), if a spedific condition occurs, and continues with the next iteration in the loop.
// The break statement ends the loop ("breaks" the loop) when the loop counter (i) is 3.
function Continue_Break() {
    let text = "";
    for (let i = 0; i < 5; i++) {
        if (i === 2) {continue;}
        if (i === 3) {break;}
        text += "The number is " + i + "<br>";
    }
    document.getElementById("continue_break").innerHTML = text;
}