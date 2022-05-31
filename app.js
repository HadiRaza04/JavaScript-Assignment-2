// Output for divisble by 3

var a = prompt("enter any number to divide by 3");

if(a % 3 == 0){
    alert(a + " can divide by 3")
}
else{
    alert(a + " can not be divide by 3")
}

// Output for odd and even numbers

var b = prompt("type any number to know if it even or odd");

if(b % 2 == 0){
    alert("the number is even")
}
else{
    alert("the number is odd")
}

// Output for Age 18+ or not

var age = prompt("your age");

if(age >= 18){
    alert("Old Enough")
}

else{
    alert("Too young")
}

// Same name output

var userName = prompt("You name");

if(userName.toUpperCase() == "FAHAD"){
    alert("Nice to meet you " + userName)
}
else{

}

// Calculator

var number1 = parseInt(prompt("Enter Number 1"));

var number2 = parseInt(prompt("Enter 2nd number"));

console.log(typeof(number1))
var op = prompt("Operator to perform action +, -, x, /");

if(op == "+"){
    var result = number1 + number2 
    alert("your output is" + result)
}
else if(op == "-"){
    var result = number1 - number2;
    alert("Your output is " + result)
}
else if(op == "x"){
    var result = number1 * number2;
    alert("Your output is " + result)
}
else if(op == "/"){
    var result = number1 / number2;
    alert("Your output is " + result)
}

// Leap Year

var year = prompt('Enter a year:');

if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    document.write("<h2>" + year + ' is a leap year' + "</h2>");
} else {
    document.write("<h2>"+ year + ' is not a leap year' + "</h2>");
}


// Password Checker

var password = prompt("Enter Your Password");

alert("This is your password " + password)

var passAgain = prompt("enter your password again");

if(password === "" || passAgain === ""){
    alert("Please enter your password")
}
else if(password === passAgain){
    alert("Correct Password")
}
else{
    alert("Wrong Password")
}

var firstName = "Bug";
if (firstName === "Fahad") {
document.write("Hello Fahad!");
}
else{
    document.write("You are not Fahad!!!");
}

// Fixing If Statement

var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";}
else{
greeting = "Good evening"; 
}

// =========== Brackets were missing for if and else line ==================

// Displaying Two integers

var first = parseInt(prompt("Enter number"));

var second = parseInt(prompt("Second Number"));

document.write("<H1> Displaying two " + first + " Integers " + second + "</h1>");

if(first === second){
    document.write("Both values are Equal")
}


var take = prompt("type number");

if(take < 0){
    alert("number is negative")
}
else if(take == 0){
    alert("number is zero")
}
else{
    alert("number is positive")
}

// Checking Vowels

var vowels = prompt("type any character");

if(vowels == "a" || vowels == "e" || vowels == "i" || vowels == "o" || vowels == "u"){
    alert("you have type vowel character " + vowels)
}
else{
    alert("Not Vowel Character " + vowels)
}

if(10 != 8){
    alert(true + " 10 is not equal to 8")
}