const numbers = [12, 43, 53, 6, 22, 64]
for (const number of numbers) {
   console.log('For Of', number)
}

// for of can not used with objects
const bottle = {
   color: 'yellow',
   price: 50,
   isCleaned: true,
   capacity: 1
}
const keys = Object.keys(bottle)
// console.log(keys)
/* 
3 ways to read object properties
bottle.color
bottle['color']
bottle[key]
*/
for (const key of keys) {
   console.log(key, bottle[key])
}


// for in loop , it's use in an object
for (const key in bottle) {
   // const value = bottle[key]
   console.log(key, bottle[key])
}

// advance
const pair = Object.entries(bottle)
console.log(pair)
for (const [key, value] of Object.entries(bottle)) {
   console.log(key, value)
}