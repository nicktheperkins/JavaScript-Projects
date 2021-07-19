// Code can have "scope"
// The scope of variables is either "local" or "global"
// Y is a global variable. Meaning it can be accessed from any function with the program.
var y = 10;
function Add_numbers_1() {
    document.write(20 + y + "<br>");
}
function Add_numbers_2() {
    document.write(y + 100);
}
Add_numbers_1();
Add_numbers_2();

// X is a local function. Meaning it is only accessed by the function it is assigned to.
// I use the console.log() method to help debug the code.
// If this code is executed no result will be show.
// If you open the console in the browser you'll see that error "X is not defined"
function Add_numbers_3() {
    var x = 10;
    console.log(15 + x);
}
function Add_numbers_4() {
    console.log(x + 100);
}
Add_numbers_3();
Add_numbers_4();

// The Date().getHours() method returns the hour in the specified date according to the local time, 
    //and the hours are listed as integers between 0 and 23. For example: 18 is 6:00PM, 12 is noon, etc.
function myFunction() {
    if (new Date().getHours() < 12) {
        document.getElementById("greeting").innerHTML = "Good Morning!";
    }
}

// The 'else" statement is used to specify a block of code to be executed if the condition is false.
// This is my own if statement.
function Greetings() {
    if (new Date().getHours() < 12) {
        document.getElementById("greetings").innerHTML = "Good Morning!";
    } else {
        document.getElementById("greetings").innerHTML = "Good Afternoon!";
    }
}

// This is another example of an if statement in JavaScript.
function Legal_Age() {
    age = document.getElementById("age").value;
    if (age >= 21) {
        Drink = "You are old enough to drink at this establishment.";
    } else {
        Drink = "You are not old enough to drink at this establishment.";
    }
    document.getElementById("legal_age").innerHTML = Drink;
}

// The "else if" statment follows an "if" statement and is executed if the "if" statment is found to be false.
function timeFunction() {
    var time = new Date().getHours();
    var reply;
    if (time < 12 == time > 0) {
        reply = "It is morning time!";
    }
    else if (time >= 12 == time < 18) {
        reply = "It is afternoon.";
    }
    else {
        reply = "It is evening time!";
    }
    document.getElementById("time").innerHTML = reply;
}