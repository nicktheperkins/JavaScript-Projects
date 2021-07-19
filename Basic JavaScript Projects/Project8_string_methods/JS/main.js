// The concat() method concatenates (connects) two or more strings.
function concatFunction() {
    var part_1 = "I used the ";
    var part_2 = "concatenate method ";
    var part_3 = "to create a ";
    var part_4 = "full sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("full_sentence").innerHTML = whole_sentence;
}

// The slice() method is a string method that extracts a section of a string and then
    // returns the extracted section in a new string.
function sliceFunction() {
    var sentence = "Click to select the bolded word in this sentence.";
    var section = sentence.slice(20,26);
    document.getElementById("slice").innerHTML = section;
}

// The toUpperCase() method converts a sting to uppercase letters.
function uppercaseFunction() {
    var str = document.getElementById("text").value;
    var result = str.toUpperCase();
    document.getElementById("result_1").innerHTML = result;
}

// The search() method searches a string for a specified value, and returns the positon of the mathch. 
function searchFunction() {
    var str = document.getElementById("str_1").innerHTML;
    var result = str.search(document.getElementById("word").value);
    document.getElementById("result_2").innerHTML = result;
}

// The toString() method returns a number as a string.
function stringFunction() {
    var x = document.getElementById("number").value;
    document.getElementById("result_3").innerHTML = x.toString();
}

// The toPrecision() method formats a number to a specified length.
function precisionFunction() {
    var x = 1.2345;
    document.getElementById("result_4").innerHTML = x.toPrecision(4);
}

// The toFixed() method converts a number into a string, rounding to a specified number of decimals.
function fixedFunction() {
    var x = 1.234;
    document.getElementById("result_5").innerHTML = x.toFixed(2);
}

// The valueOf() method returns the value of a string.
function valueOfFunction() {
    var str = document.getElementById("input_1").value;
    document.getElementById("result_6").innerHTML = str.valueOf();
}