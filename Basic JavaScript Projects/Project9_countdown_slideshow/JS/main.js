// The statement "setTimeout(tick, 1000);" means that the program is pausing for 1,000 milliseconds.
// (i.e., 1 second)
function countdown() {
    var seconds = document.getElementById("seconds").value;
    function tick() {
        seconds = seconds - 1;
        timer.innerHTML = seconds;
        setTimeout(tick, 1000);
    if (seconds == -1) {
        alert("Time's up!");
    }
    }
    tick();
}

//
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n); // plusSlides(n) will display slides to the nth degree
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n); // currentSlide(n) will select the nth slide in the array of slides.
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
// Not really sure why these conditional statements are here. Must deal with slideIndex position in the array as n values are passed through the function.
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
// for (statement 1; statement 2; statement 3)
// Statement 1 is the initialization condition and sets a variable before the loop starts (i = 0)
// Statement 2 defines the condition for the loop to run with a boolean expression (i must be less than the number of slides/dots)
// Statement 3 is an incrementation operation that increases a value (i++) each time the code block in the loop has been executed.
    for (i = 0; i < slides.length; i++) { // This loop sets all the slide displays to "none".
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) { // This loop removes " active" from all the dot classNames.
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block"; // Sets slide display to "block"
    dots[slideIndex-1].className += " active"; // Adds " active" to the className which I have styling for in the css file.
}