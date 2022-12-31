/* 
                     Topic

                     slice
                     splice 
*/

const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87,]

// slice
// slice korle jinish gulo paoa jabe but remove hobe na.
const numberSliced = numbers.slice(4 /* start index */, 8 /* 8 number index er ager index porjonto pabe */)
console.log(numberSliced)
console.log(numbers)

// splice
// array theke remove / delete hoye jabe
const numberSpliced = numbers.splice(4 /* koto number index theke delete kora shuru korbe */, 2 /* koyta element element delete korbe */)
console.log(numberSpliced)
console.log(numbers)

// 
const numberSpliced2 = numbers.splice(4, 3, /* 99 theke poroborti 3 ta element katar por baki gulo add korbe*/ 99, 111, 888, 777)
console.log(numberSpliced2)
console.log(numbers)