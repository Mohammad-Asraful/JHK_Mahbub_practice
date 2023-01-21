const first = { a: 2 }
const second = { a: 2 }
if (first === second) {
   console.log('They are same.')
} else {
   console.log('different')
}

let num = 12

const func = (obj, num) => {
   obj.a = 5
   num = 16
   console.log(num)
}


func(first, num)

console.log(num)


// do not use this method to compare object or array
const firstString = JSON.stringify(first)
const secondString = JSON.stringify(second)
/* console.log(firstString, secondString)
if (firstString === secondString) {
   console.log('same')
} else {
   console.log('different')
} */

function compareObject(first, second) {
   const firstKeys = Object.keys(first)
   const secKeys = Object.keys(second)
   if (firstKeys.length === secKeys.length) {
      return true
   } else {
      return false
   }
}
compareObject(first, second)