// function expression
function add(num1, num2) {
   return num1 + num2
}
const sum1 = add(15, 17)
console.log(sum1)


// function expression
const add2 = function add2(num1, num2) {
   return num1 + num2
}
const sum2 = add2(15, 17)
console.log(sum2)


// anonymous function
const add3 = function (num1, num2) {
   return num1 + num2
}
const sum3 = add3(15, 17)
console.log(sum3)


// arrow function
const add4 = (num1, num2) => num1 + num2
const sum4 = add4(15, 17)
console.log(sum4)