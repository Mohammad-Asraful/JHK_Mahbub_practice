var skyColor = 'white'

var phones = ["iphone", 'shaomi', 'samsung', "lg", 'htc']

// change variable value
/* phones[3] = 'walton'
console.log(phones) */

// check an element exists in an array
if (phones.indexOf('oppo') == -1) {
    console.log("Opps! amir khan oppo is missing.")
}

// if LG is available
if (phones.indexOf('lg') != -1) {
    console.log("LG is available now.")
}

// loop
var num = 0;
while (num <= 10) {
    console.log("first")
    num++;
}

for (let i = 0; i < phones.length; i++) {
    console.log(phones[i])

}

// function
function addThreeNumbers(number1, number2, number3) {
    var total = number1 + number2 + number3;
    console.log(total)
    return (total);
}

var totalSum = addThreeNumbers(12, 15, 34)
console.log(addThreeNumbers)

// object
var microphone = {
    brand: "blue yeti",
    price: 120,
    color: "black",
}

console.log(microphone)
// 
console.log(microphone['brand'])
// array value change
microphone["brand"] = "M19"
console.log(microphone.brand)

// Module summary
/* variable Declaration
While Loop
For Loop
Function
IF Else
Condition */