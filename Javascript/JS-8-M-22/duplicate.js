/* const names = ["abul", "babul", "cabul", "dabul", "ebul", "fabul", "babul", "ebul", "babul", "gabul", "abul", "habul", "dabul"]

function removeDuplicate(names) {
   const unique = [];
      // for (let i = 0; i < names.length; i++) {
      //    const element = names[i]
      //    console.log(element)
   
      // }
   for (const element of names) {
      console.log(element)
      if (unique.indexOf(element) == -1) {
         unique.push(element);
      }
   }
   return unique;
}
const uniqueNames = removeDuplicate(names)
console.log(uniqueNames) */


// // // Again
/* const namess = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul']
function removeDuplicate(names) {
   const unique = [];
   // for (i = 0; i < names.length; i++) {
   //    const element = names[i];
   //    console.log(element)
   // }

   // for of loop:
   for (const element of names) {
      console.log(element);
      if (unique.indexOf(element) == -1) {
         unique.push(element);
      }
   }
   return unique;
}
const uniqueNamess = removeDuplicate(namess);
console.log(uniqueNamess); */

// practice
const names3 = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'babul', 'ebul', 'babul', 'gabul', 'abul', 'habul', 'dabul']
function removeDuplicates(name3) {
   const unique = [];
   for (const element of name3) {
      if (unique.indexOf(element) == -1) {
         unique.push(element)
      }
   }
   return unique;
}
const uniqueNameResult = removeDuplicates(names3)
console.log(uniqueNameResult)

/* // find index number
console.log(names3.indexOf('Asraf')) */