const numbers = [44, 23, 34, 32, 54, 5, 78];
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
   const element = numbers[i]
   sum += element;
   // console.log(sum)
   // console.log(numbers[i])
}
console.log(sum)

//  in function
function arrayTotal(number) {
   let sum = 0;
   for (let i = 0; i < number.length; i++) {
      const element = number[i]
      sum += element;
   }
   return sum;
}
let totalSum = arrayTotal([44, 23, 34, 32, 54, 5, 78])
console.log("Array total is", totalSum)