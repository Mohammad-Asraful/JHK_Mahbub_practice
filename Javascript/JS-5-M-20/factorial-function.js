// // //
let factorialial = 1;
for (let i = 1; i <= 5; i++) {
    factorialial *= i;

}
console.log(factorialial);

// //
let factorialials = 1;
for (let i = 1; i <= 10; i++) {
    factorialials *= i;
}
console.log(factorialials)

// //
let factorial = 1;
for (let i = 1; i <= 7; i++) {
    factorial *= i;
    console.log(factorial);
}

// //
function getFactorial(number) {
    let factorial = 1;
    for (let i = 1; i <= number; i++) {
        factorial *= i;
    }
    // console.log(factorial);
    return factorial;
}

let firstFactorial = getFactorial(5);
console.log(firstFactorial);

let secondFactorial = getFactorial(9);
console.log(secondFactorial)


// Exercise

function GetFactorials(number) {
    let factorial = 1;
    for (i = 1; i <= number; i++) {
        factorial *= i;
    }
    return (factorial)
}


// 
let factorialResult = GetFactorials(7)
console.log(factorialResult);



