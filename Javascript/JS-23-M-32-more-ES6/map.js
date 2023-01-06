const numbers = [4, 6, 8, 10]
const output2 = []

function doubleOld(number) {
   return number * 2
}

const doubleIt = number => number * 2

for (const number of numbers) {
   // const result = number * 2
   const result = doubleIt(number)
   output2.push(result)
}
// console.log(output2)


// 1. loop throw each element
// 2. for each element call the provided function
// 3. result for each element will be store in an array
const output = numbers.map(doubleIt)
// console.log(output)
const outputs = numbers.map(number => number * 2)
console.log(outputs)

const squares = numbers.map(x => x * x)
console.log(squares)