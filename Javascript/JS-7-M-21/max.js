const business = 850;
const minister = 750;
const army = 600;

// compare 2
/* if (business > minister) {
   console.log("Business")
} else {
   "Minister"
} */

// compare 3
/* if (business > minister && business > army) {
   console.log("Army is bigger")
} else if (minister > business && minister > army) {
   console.log("minister is bigger")
} else {
   console.log("Army is bigger")
} */

// compare in math.max
/* var max = Math.max(business, minister, army)
console.log(max, "is largest") */

// compare in function
/* function findLargest(first, second) {
   if (first > second) {
      return first;
   } else {
      return second;
   }
}
const largestNumber = findLargest(422, 333);
console.log(largestNumber) */

// Task 1: create a function that takes three numbers as input parameter and returns you the largest number of three.
function largestNumberFind(numb1, numb2, numb3) {
   if (numb1 > numb2 && numb1 > numb3) {
      return numb1;
   } else if (numb2 > numb1 && numb2 > numb3) {
      return numb2;
   } else {
      return numb3;
   }
}
let getLargestNumber = largestNumberFind(900, 500, 600)
console.log("Largest number is", getLargestNumber)



// Task 2: Write a function to find the smallest of three numbers.

function largestNumberFinder(numb1, numb2, numb3) {
   if (numb1 > numb2 && numb1 > numb3) {
      console.log(numb1);
   } else if (numb2 > numb1 && numb2 > numb3) {
      console.log(numb2);
   } else {
      console.log(numb3);
   }
}
largestNumberFinder(333, 777, 666)