// This function validates that input to the fname and lname are not empty.
    // If fname and lname are not filled out correctly the page with get an alert.
function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    if (x == "") {
        alert("First name must be filled out");
        return false;
    }
    if (y == "") {
        alert("Last name must be filled out");
        return false;
    }
}