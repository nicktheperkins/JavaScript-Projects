// alert("Hello, World!")
// window.alert("Hello, World!");
// document.write('Hello, world!');

// var A = "This is a string";
// document.write(A);

// var x = "This is another string";
// window.alert(x);

// document.write("I told Tom, \"You are my mentor\", and he liked the sound of that.");

// alert("This is yet" + " another string.");

// var B = "Concatenated" + " String"; // Concatenating a string
// alert(B);

// var Family = "The Perkins",  Dad = "Nick", Mom = "Katie"; // Creating multiple variables
// var Family = Family.fontcolor("green"); // Giving a variable a font color
// var Dad = Dad.fontcolor("blue");
// var Mom = Mom.fontcolor("red");
// document.write(Family,Dad,Mom);

// document.write(3+2) // Writing and expression

function myFirstFunction() { // Defining a function and naming it
    var str = "This text is green!"; // Defining a variable and giving it a string value
    var result = str.fontcolor("green"); // Using the fontcolor method on str variable
    document.getElementById("Green_Text").innerHTML = result; // Putting the value of result into HTML element with "Green_Text" id
}