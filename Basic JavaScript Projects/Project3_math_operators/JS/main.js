var s = 0;
var t = 0;
var u = 10;
var v = 10;
var w = 0;
var x = 10;
var y = 0;
var z = 0;

function Addition() {
    document.getElementById("add").innerHTML = s+=1;
}

function Subtraction() {
    document.getElementById("subtract").innerHTML = t-=1;
}

function Multiplication() {
    document.getElementById("multiply").innerHTML = u*=2;
}

function Division() {
    document.getElementById("divide").innerHTML = v/=2;
}

function MultipleOperators() {
    document.getElementById("operators").innerHTML = (w+=1)*2;
}

function ModulusOperator() {
    document.getElementById("modulus").innerHTML = 5 % 2;
}

function NegationOperator() {
    document.getElementById("negation").innerHTML = -x;
}

function IncrementOperator() {
    document.getElementById("increment").innerHTML = y++;
}

function DecrementOperator() {
    document.getElementById("decrement").innerHTML = z--;
}

function Random_1() {
    document.getElementById("random_1").innerHTML = Math.random();
}

function Random_2() {
   document.getElementById("random_2").innerHTML = Math.random() * 100;
}

function MathObject_1() {
    document.getElementById("object_1").innerHTML = Math.PI;
 }

 function MathObject_2() {
    document.getElementById("object_2").innerHTML = Math.sqrt(4);
 }