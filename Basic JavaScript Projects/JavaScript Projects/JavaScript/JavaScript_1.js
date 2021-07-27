// Inside switch statements are cases. These cases are the various conditions that are evaluated.
// If there is no case match, the default keyword is used to specify what code to run.
    // You can only utilize one default keyword per switch.
    // It is considered a best practice to include it in your switch statements but it is not required.
function Ice_Cream() {
    var output;
    var flavors = document.getElementById("input_1").value;
    var string = " is a classic flavor of ice cream!";
    switch(flavors) {
        case "Vanilla":
            output = "Vanilla" + string;
        break;
        case "Chocolate":
            output = "Chocolate" + string;
        break;
        case "Strawberry":
            output = "Strawberry" + string;
        break;
        default:
            output = "Please enter a ice cream flavor exactly as written on the above list.";
    }
    document.getElementById("output").innerHTML = output;
}

// The index value of variable A is set to 0, meaning it will now be displaying in the first
    // element with the class "Click" (once the button is clicked).
// The document.getElementsByClassName() method indexes class elements like an array would with one of its values.
function Hello_World_Function() {
    var A = document.getElementsByClassName("Click");
    A[0].innerHTML = "The text has changed!";
}

// This script will draw a circle in the canvas element.
var c = document.getElementById("circle");
// The getContext() is a built-in HTML object, with properties and methods for drawing.
var ctx = c.getContext("2d");
// The beginPath() method begins a path, or resets the current path.
ctx.beginPath();
// The are() method creates an arc/curve (used to create circles, or parts of circles).
    // context.arc(x,y,r,sAngle,eAngle,counterclockwise)
    // x - The x-coordinate of the center of the circle.
    // y - The y-coordinate of the center of the circle.
    // r - The radius of the circle.
    // sAngle - The starting angle, in radians (0 is at the 3 o'clock position of the arc's circle)
    // eAngle - The ending angle, in radians.
    // counterclockwise - Optional. Specifies whether the drawing should be counterclockwise or clockwise.
        // False is default, and idicates clockwise, while true inidicates counter-clockwise.
ctx.arc(95,50,40,0,2*Math.PI);
// Use the stroke() or the fill() method to actually draw the arc on the canvas.
ctx.stroke();

// This function creates and image in the canvas.
function myCanvas() {
    var c = document.getElementById("myCanvas");
    // The getContext() is a built-in HTML object, with properties and methods for drawing.
    var ctx = c.getContext("2d");
    var img = document.getElementById("escher");
    // context.drawImage(img,x,y,width,height)
    ctx.drawImage(img,10,10,220,277);
}

// This function creates a gradient in the canvas.
function Canvas_2() {
    var c = document.getElementById("Canvas_2");
    var ctx = c.getContext("2d");
    // context.createLinearGradient(x-startpoint,y-startpoint,x-endpoint,y-endpoint)
    var grd = ctx.createLinearGradient(0,0,170,0);
    // Use the addColorStop() method to specify different colors, and where to position the colors in the gradient object.
    grd.addColorStop(0, "black");
    grd.addColorStop(1, "white");
    ctx.fillStyle = grd;
    ctx.fillRect(20,20,150,100);
}