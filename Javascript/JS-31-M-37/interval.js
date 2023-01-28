console.log('first')
console.log('second')

setTimeout(() => {
   console.log('third')
});

console.log('fourth')

/* setInterval(() => {
   console.log('five')
}, 2000); */

console.log('six')

// x++ vs ++x
// i++ vs ++i
let seconds = 0
const intervalID = setInterval(() => {
   // seconds++
   console.log(++seconds)
   if (seconds == 10) {
      clearInterval(intervalID)
   }
}, 300);