// primitive type are pass by value
let num1 = 5
let num2 = 7
function multiply(a, b) {
   a = 27
   const result = a * b
   return result
}

const output = multiply(num1, num2)
console.log(output)

// object and array are pass by reference
let student1 = { name: 'Jalil', partner: 'borsha' }
let student2 = { name: 'raj', partner: 'anika' }

function makeMovie(couple1, couple2) {
   couple1.name = 'Ononto'
   couple2.partner = 'Mim'
}
console.log(student1, student2)
makeMovie(student1, student2)
console.log(student1, student2)


// Must you know : ==>
// what is Hoisting in js
// how to use the js callBack function
// explain closure in js
// Explain passed by value and passed by reference