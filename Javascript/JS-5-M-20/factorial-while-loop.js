// factorial in while loop
function takeFactorial(number) {
    let factorial = 1;
    let startFact = 1;
    while (startFact <= number) {
        factorial *= startFact;
        startFact++;
    }
    console.log(factorial)
}
takeFactorial(5);



// factorial in while loop with return value.
function getFactorial(number) {
    let factorial = 1;
    let startFact = 1;
    while (startFact <= number) {
        factorial *= startFact;
        startFact++;
    }
    return (factorial)
}
let runFactorial = getFactorial(6);
console.log(runFactorial);


// factorial in while loop with return value.
function factors(number) {
    let factorial = 1;
    let i = number;
    while (i >= 1) {
        factorial *= i;
        i--;

    }
    return factorial;
}

var fff = factors(6);
console.log(fff)


// Reverse factorial in for loop with return value.
function getFactor(number) {
    let factorial = 1;
    for (let i = number; i >= 1; i--) {
        factorial *= i;
    }
    return factorial;
}

const myFactorial = getFactor(6);
console.log(myFactorial);