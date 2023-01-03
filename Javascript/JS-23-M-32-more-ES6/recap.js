// 1. let and const
const wife = 'Shopna'
let phone = 'iphone 15'
phone = 'Samsung Galaxy A10S'

// 2. default parameter
// 5. spread and 3 dots (...)
function maxNumber(array = [22, 33, 44, 55, 66, 77, 11]) {
   const max = Math.max(...array)
   return max
}
const biggest = maxNumber()
console.log(biggest)

// 3. template string
const myNotes = `I am mojnu of ${wife}. I don't have a laily.`
console.log(myNotes)

// 4. arrow function
const square = x => x * x
console.log(square(9))