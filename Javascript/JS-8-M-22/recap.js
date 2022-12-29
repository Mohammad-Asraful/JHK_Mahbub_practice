function largestElement(number) {
   let max = number[0];
   for (let i = 0; i < number.length; i++) {
      const element = number[i];
      if (element > max) {
         max = element;
      }
   }
   return max;
}
const large = largestElement([22, 33, 44, 55, 222, 21, 32, 11, 56, 67, 88, 99])
console.log(large)

// smallest number
function smallestElement(number) {
   let min = number[0];
   for (let i = 0; i < number.length; i++) {
      const element = number[i];
      if (element < min) {
         min = element;
      }
   }
   return min;
}
const minNumber = smallestElement([22, 33, 44, 55, 222, 21, 32, 11, 56, 67, 88, 99])
console.log(minNumber)