// The next two functions are ternary operations.
// The conditional (ternary) operator is the only JavaScript operator that takes three operands: 
    // a condition followed by a question mark ( ? ), 
    // then an expression to execute if the condition is truthy followed by a colon ( : ),
    // and finally the expression to execute if the condition is false.
// In this case height is what the function is dependent on for specific results.
function ride_function() {
    var height, can_ride;
    height = document.getElementById("height").value;
    can_ride = (height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("ride").innerHTML = can_ride + " to ride.";
}

// In this case age is what the function is dependent on for specific results.
function vote_function() {
    var age, can_vote;
    age = document.getElementById("age").value;
    can_vote = (age < 18) ? "You are not":"You are";
    document.getElementById("vote").innerHTML = can_vote + " old enough to vote.";
}

// The "this" keyword if the object when used within on object
// "this" is the object that possesses the function
// This function "Vehical()" is an object constructor
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

// These lines use the keyword "new" which is used to create new objects.
var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", 2019, "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");

// This is a function that uses a new keyword "Keywords_and_Constructors" to reference the vehical constructor and the new object Erik.
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored " + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

// This is a function that is utilizing my new keyword ("New_and_This") in my html file.
function myFunction_2() {
    document.getElementById("New_and_This").innerHTML =
    "Emily drives a " + Emily.Vehicle_Year + " " + Emily.Vehicle_Make + " " + Emily.Vehicle_Model + ".";
}

// This is a new constructor that I created on my own.
function Person(first, last, age, eyecolor) {
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyeColor = eyecolor;
}

// This function contains a nested function.
// In JavaScript, functions have access to the functions that are above them in the code.
function count_Function() {
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 9;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}
