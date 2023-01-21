const bottle = {
   color: 'yellow',
   price: 50,
   isCleaned: true,
   capacity: 1
}
const keys = Object.keys(bottle)
console.log(keys) // object er property er naam dibe
const values = Object.values(bottle)
console.log(values) // object er property er value dibe
const pair = Object.entries(bottle)
console.log(pair) // object er property and naam 2 ta e dibe

// two dimentional array
const twoDimention = [
   ['color', 'yellow'],
   ['price', 50],
   ['isCleaned', true],
   ['capacity', 1]
]

console.log(bottle)
bottle.height = 12
Object.seal(bottle) //seal korle kono property delete koea jabe na and notun property add kora jabe na but kono property er maan change kora jabe
Object.freeze(bottle) // freeze korle kono property er maan delete ba maan change ba notun property add kora - kono ta e kora jabe na
delete bottle.isCleaned
bottle.price = 1000
bottle.weight = 20
console.log(bottle)