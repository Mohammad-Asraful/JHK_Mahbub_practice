/* 
               topic
               //  multiple parameter using in loop 
               // when you get some parameter for Sum of some numbers and concatinate some string then you don't know how much parameter you need, so using that type function and loop.
*/


function addNumbers(num1, num2) {
   // console.log(arguments)
   let result = 0
   for (const num of arguments) {
      result = result + num
   }
   return result
}

const sum = addNumbers(23, 13, 50, 100)
console.log(sum)

//       practice
function addNumberss() {
   let result = 0
   for (const number of arguments) {
      result = result + number
   }
   return result
}

const sumNumbers = addNumberss(19, 20, 20, 200)
console.log(sumNumbers)


// 
function getFullName(firstName, lastName) {
   let fullName = ''
   for (const part of arguments) {
      fullName = fullName + part + ' '
   }
   return fullName
}

const name = getFullName('Asraful', 'Alam', 'Jehad')
const names = getFullName('Omuk', 'Shongket', 'Bin', 'Hanif', 'Shongket')
console.log(name)
console.log(names)