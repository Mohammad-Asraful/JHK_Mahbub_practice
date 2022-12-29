/* const number = 5;
const remainder = number % 2;
console.log(remainder == 0); */


/* const number = 145;
function isEven(number) {
    var numbers = number % 2 == 0;
    return numbers;
}
var callFunction = isEven(3);
console.log(callFunction) */

// 
const number = 145;
function isEvenNumber(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}
const callFunction2 = isEvenNumber(3);
console.log(callFunction2)


// is odd function
const herNumber = 1878;
const myNumber = 1971;
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber)
console.log("is my number odd: ", isMyNumberOdd)
// 
const isMyNumberEven = isOdd(herNumber)
console.log("is my number odd: ", isMyNumberEven)
