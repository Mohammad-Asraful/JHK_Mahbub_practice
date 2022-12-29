// Addition / Plus
function addTwoNumbers(number1, number2) {
    console.log(number1, number2)
    var total = number1 + number2
    return total;
}

var firstNumber = 35;
var secondNumber = 47;
var result = addTwoNumbers(firstNumber, secondNumber);
console.log(result)


// Multiply
function multiplyTwoNumbers(num1, num2) {
    var result = num1 * num2;
    return result;
}

var total = multiplyTwoNumbers(5, 100)
console.log("result: ", total)


// Minus operator function
function difference(n1, n2) {
    var minus = n1 - n2;
    return minus;
}

var minusResult = difference(50, 33);
console.log(minusResult);



// Division
function divided(numb1, numb2) {
    var division = numb1 / numb2;
    return division;
}

var divisionResult = divided(303, 10);
console.log("Two number difference is:", divisionResult);


