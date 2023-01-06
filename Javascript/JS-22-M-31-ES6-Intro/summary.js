let priyoPerson = 'Anowara Begum'
priyoPerson = 'Afroza Khanom'

const friend = 'Akber the great'

// default parameter
function getName(first, space = ' ', last = 'Chowdhury') {
   return first + space + last
}
const yourName = getName('Asraf')
console.log(yourName)

// template string
const myPeople = `My mother is ${priyoPerson}. and my friend is ${friend}. and his full name is ${getName('Akib tukai')}. My name is ${getName('Asraf')}.`
console.log(myPeople)

// arrow function
const getName2 = (first, last) => first + ' ' + last
const fiveTimes = x => x * 5
// 
const bigArrowFunc = (x, y, z) => {
   const firstPart = x + y
   const secondPart = y * z
   const thirdPart = x / z
   const result = (firstPart + secondPart) * thirdPart
   return result
}

// spread operator
const numbers = [2, 4, 67, 54]
const min = Math.min(...numbers)