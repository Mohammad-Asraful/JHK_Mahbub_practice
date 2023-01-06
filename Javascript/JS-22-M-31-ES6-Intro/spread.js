//                spread operator

const numbers = [23, 65, 99, 21, 34]
// console.log(numbers)
// console.log(...numbers)

const max = Math.max(23, 99, 65)
console.log(max)

// Array theke number ba Array er upadan niye ashar jonno (...) 3 dot use korte hobe
// numbers.push(100)
const maxInArray = Math.max(...numbers)
console.log(maxInArray)

numbers.push(55)
console.log(numbers)

const twoDimentionalArray = [numbers]
console.log(twoDimentionalArray)

const numbers2 = [...numbers, 88]
console.log(numbers2)