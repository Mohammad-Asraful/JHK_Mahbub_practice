function largestElements(numbers) {
   let largest = numbers[0];
   for (let i = 0; i < numbers.length; i++) {
      let element = numbers[i]
      if (element > largest) {
         largest = element;
      }
   }
   return largest;
}

const ages = [12, 13, 22, 24, 55, 47, 78, 3, 7, 45, 37];
const oldest = largestElements(ages)
console.log("oldest", oldest)


// Task: find the lowest element of an array.

function lowestElements(number) {
   let lowest = number[0];
   for (let i = 0; i < number.length; i++) {
      let elements = number[i];
      if (elements < lowest) {
         lowest = elements;
      }
   }
   return lowest;
}
let age = [31, 12, 33, 35, 66, 11, 1, 75, 45, 90];
let younger = lowestElements(age);
console.log("Younger age is:", younger);