// break up with var

let balance = 1240;
balance = 1340;
const userName = 'don\'t try to change me.';
const weTogether = 'ami ' + userName;
console.log(weTogether)

const numbers = [45, 23, 89, 60]
// numbers = [4, 2, 8, 6]  // reasign not allowed
numbers.push(777)
numbers[1] = 333

let sum = 0
for (let i = 0; i < numbers.length; i++) {
   const number = numbers[i]
   console.log(numbers)
   sum = sum + number
}

const student = { roll: 101, name: 'mofij', job: 'intern' }
student.name = 'MofaZZol'
// student = {name: 'mofajjol'}   // const variable reasign not allowed

