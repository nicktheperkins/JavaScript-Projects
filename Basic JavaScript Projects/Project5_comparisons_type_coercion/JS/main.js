var a = "This is a string";
var b = 10;

function typeof_1() {
    document.getElementById("typeof_1").innerHTML = (typeof a);
}

function typeof_2() {
    document.getElementById("typeof_2").innerHTML = (typeof b);
}

function combine() {
    document.getElementById("combine").innerHTML = ("10"+0);
}

function nan_1() {
    document.getElementById("nan_1").innerHTML = 0/0;
}

function nan_2() {
    document.getElementById("nan_2").innerHTML = isNaN('This is a string');
}

function nan_3() {
    document.getElementById("nan_3").innerHTML = isNaN('007');
}

function infinity() {
    document.getElementById("infinity").innerHTML = 2E310;
}

function neginfinity() {
    document.getElementById("neginfinity").innerHTML = -3E310;
}

function boolean_1() {
    document.getElementById("boolean_1").innerHTML = (5<10);
}

function boolean_2() {
    document.getElementById("boolean_2").innerHTML = (5>10);
}

function consolelog_1() {
    document.getElementById("consolelog_1").innerHTML = console.log(10+10);
}

function consolelog_2() {
    document.getElementById("consolelog_2").innerHTML = console.log(5>10);
}

function equal_1() {
    document.getElementById("equal_1").innerHTML = (25+75)==100;
}

function equal_2() {
    document.getElementById("equal_2").innerHTML = (25+50)==100;
}

var u = 100;
var v = 100;
var w = "50";
var x = "100";
var y = "Yes";
var z = "No";

function equal_3() {
    document.getElementById("equal_3").innerHTML = u===v;
}

function equal_4() {
    document.getElementById("equal_4").innerHTML = u===w;
}

function equal_5() {
    document.getElementById("equal_5").innerHTML = u===x;
}

function equal_6() {
    document.getElementById("equal_6").innerHTML = y===z;
}

function and_1() {
    document.getElementById("and_1").innerHTML = (5<10)&&(10>5);
}

function and_2() {
    document.getElementById("and_2").innerHTML = (5>10)&&(10>5);
}

function or_1() {
    document.getElementById("or_1").innerHTML = (1<2)||(1>2);
}

function or_2() {
    document.getElementById("or_2").innerHTML = (2<1)||(3<2);
}

function not_1() {
    document.getElementById("not_1").innerHTML = !(20>10);
}
function not_2() {
    document.getElementById("not_2").innerHTML = !(5>10);
}