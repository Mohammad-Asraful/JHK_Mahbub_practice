// var today = new Date();
// console.log(today);


var firstNumber = parseInt(prompt("Enter your first number: "))
var secondNumber = parseInt(prompt("Enter your second number: "))
var sum = prompt("What do you want? + or - or * or /")

if (sum == "+") {
    alert("Total Number is " + (firstNumber + secondNumber))
} else if (sum == "-") {
    alert("Total Number is " + (firstNumber - secondNumber))
} else if (sum == "*") {
    alert("Total Number is " + (firstNumber * secondNumber))
} else if (sum == "/") {
    alert("Total Number is " + (firstNumber / secondNumber))
} else {
    alert("This Number Is Invalid")
}
